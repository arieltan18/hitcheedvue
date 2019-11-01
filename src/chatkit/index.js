import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import store from '../store'
import moment from 'moment';
import defaultUserImage from '../assets/user.png';

const INSTANCE_LOCATOR = process.env.VUE_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.VUE_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.VUE_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
let activeRoom = null;

async function connectUser(userId) {

    const token = localStorage.getItem('access_token');
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
    });

    const rooms = currentUser.rooms;

    rooms.forEach(onAddedToRoom);

    return currentUser;
}

function sendMessage(roomId, message){
    return currentUser.sendSimpleMessage({
        roomId,
        text: message
    })
}

function subscribeToRoom(room){
    currentUser.subscribeToRoom({
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

    subscribeToRoom(room);
}

function onRoomUpdated(room){
    const mappedRoom = mapRoom(room);
    console.log('Room Updated', mappedRoom);
    store.commit('roomUpdated', mappedRoom);
}

function onMessage(message){
    const msg = mapMessage(message);
    console.log('received Message', message, msg);
    store.commit('messageReceived', msg);
}

function mapMessage(message){
    console.log(defaultUserImage);
    const {id: userId} = currentUser;
    const { room:{id: roomId}, sender: {id: senderId, name: senderName, avatarURL: senderAvatar = defaultUserImage}, text, createdAt, updatedAt} = message;
    return {
        roomId,
        senderId,
        senderName,
        outgoing: userId === senderId,
        senderAvatar: senderAvatar || defaultUserImage,
        text,
        createdAt: moment(createdAt),
        updatedAt: moment(updatedAt),
    }
}

function mapRoom(room){
    const {id: userId} = currentUser;
    const {id: roomId, name, users, unreadCount, lastMessageAt} = room;
    const roomName = name || users.filter(u=>u.id !== userId).map(u=>u.name).join(', ');
    return {
        id: roomId,
        name: roomName,
        unreadCount,
        lastMessageAt: moment(lastMessageAt),
    }
}

export default {
    connectUser,
    sendMessage,
}
