import {ChatManager, TokenProvider} from '@pusher/chatkit-client'
import store from '../store/index'
import moment from 'moment';
import {getUiAvatarUrl} from "../helpers";

const INSTANCE_LOCATOR = process.env.VUE_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.VUE_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.VUE_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;

async function connectUser() {

    const token = localStorage.getItem('access_token');
    const userId = localStorage.getItem('chat_id');

    if(!userId || !token) return;

    store.commit('setMessagesLoading', true);

    const chatManager = new ChatManager({
        instanceLocator: INSTANCE_LOCATOR,
        tokenProvider: new TokenProvider({
            url: TOKEN_URL,
            headers:{
             Authorization: `Bearer ${token}`
            }
        }),
        userId
    });
    currentUser = await chatManager.connect({
        onAddedToRoom,
        onRoomUpdated,
        onPresenceChanged,
        onUserLeftRoom,
        onRemovedFromRoom: onUserLeftRoom
    });

    const rooms = currentUser.rooms;
    await Promise.all(rooms.map(onAddedToRoom));
    store.commit('setMessagesLoading', false);

    return currentUser;
}

function disconnectUser(){
    if(currentUser) currentUser.disconnect();
}

function sendMessage(roomId, message){
    return currentUser.sendSimpleMessage({
        roomId,
        text: message
    }).then((messageId)=>{
        markAsRead(roomId, messageId);
    })
}

function leaveRoom(roomId){
    return currentUser.leaveRoom({
        roomId,
    })
}

function markAsRead(roomId, messageId) {
    currentUser.setReadCursor({
        roomId,
        position: messageId,
    });
}

function subscribeToRoom(room){
    return currentUser.subscribeToRoom({
        roomId: room.id,
        hooks: {
            onMessage
        }
    }).then(r=>{
        const mappedRoom = mapRoom(r);
        store.commit('roomUpdated', mappedRoom);
    })


}

function onAddedToRoom(room) {
    return subscribeToRoom(room);
}

function onUserLeftRoom(room) {
    store.commit('leaveRoom', room.id);
}

function onPresenceChanged(status, user) {
    store.commit('userStatusUpdated', user.id, status.current);
}

function onRoomUpdated(room){
    const mappedRoom = mapRoom(room);
    store.commit('roomUpdated', mappedRoom);
}

function onMessage(message){
    const msg = mapMessage(message);
    store.commit('messageReceived', msg);
}

function mapMessage(message){
    const {id: userId} = currentUser;
    const { id, room:{id: roomId}, sender: {id: senderId, name: senderName, avatarURL: senderAvatar}, text, createdAt, updatedAt} = message;
    const outgoing = userId === senderId;
    return {
        id,
        roomId,
        senderId,
        senderName: outgoing? 'You': senderName,
        outgoing,
        senderAvatar: senderAvatar || getUiAvatarUrl(senderName),
        text,
        createdAt: moment(createdAt),
        updatedAt: moment(updatedAt),
    }
}

function mapRoom(room){
    const {id: userId} = currentUser;
    const {id: roomId, name, users, unreadCount, lastMessageAt} = room;
    const otherUsers = users.filter(u=>u.id !== userId);
    const roomName = name || otherUsers.map(u=>u.name).join(', ');
    const [user = {}] = otherUsers;
    const {name: userName, avatarURL:avatar} = user;
    return {
        id: roomId,
        name: roomName,
        otherUsers: room.users.map(u=>u.id).filter(id=>id!==userId),
        unreadCount,
        avatar: avatar || getUiAvatarUrl(userName),
        lastMessageAt: moment(lastMessageAt),
    }
}

export default {
    connectUser,
    markAsRead,
    disconnectUser,
    sendMessage,
    leaveRoom
}
