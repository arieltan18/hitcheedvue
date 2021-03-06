import axios from "axios";

const state = {
    loading: false,
    messages: [
    ],
    rooms: [
    ],
    onlineUsers: [],
};

const mutations = {
    userStatusUpdated(state, userId, status){
        const index = state.onlineUsers.findIndex(id=> id === userId);
        if(status!== 'online'){
            if(index > -1) state.onlineUsers.splice(index, 1);
        }else if(index < 0){
            state.onlineUsers.push(userId);
        }
    },
    setMessagesLoading(state, loading){
        state.loading = loading;
    },
    resetMessages(){
        state.rooms=[];
        state.messages=[];
    },
    addedToRoom(state, room){
        state.rooms.push(room)
    },
    leaveRoom(state, roomId){
        const rooms = [...state.rooms];
        const roomIndex = rooms.findIndex(r=>r.id === roomId);
        if(roomIndex > -1) rooms.splice(roomIndex, 1);
        state.rooms = rooms
    },
    roomUpdated(state, room){
        const rooms = state.rooms.filter(r=>r.id !== room.id);
        rooms.push(room);
        const roomsSorted = rooms.sort((r1, r2)=>{
            if(r1.lastMessageAt > r2.lastMessageAt) return -1;
            if(r1.lastMessageAt < r2.lastMessageAt) return 1;
            return 0;
        });
        state.rooms = roomsSorted;
    },
    messageReceived(state, message){
        state.messages.push(message)
    },

};

const actions = {
    sendMessage(context, message){

    },
    sendMessageToProfessional(context, messageInfo){
        const sendMesssageUrl = process.env.VUE_APP_HITCHEED_API + "/v1/send_message";
        const token = localStorage.getItem('access_token');
        return axios.post(sendMesssageUrl, messageInfo, { headers:{
                authorization: `Bearer ${token}`
            }}).then(res=>res.data)
    }
};

const getters = {
    getLastMessage: (state)=>(roomId)=>{
        const allMessages = state.messages.filter(c=>c.roomId === roomId);
        return allMessages.reduce((latest, message)=>{
            if(latest){
                return latest.createdAt < message.createdAt? message : latest;
            }else {
                return message;
            }
        }, null);
    },

    getMessages: (state)=>(roomId)=>{
        return state.messages.filter(c=>c.roomId === roomId)
    },
    getChats(state){
        return state.rooms
    },

    getChat(state){
        return chatId => state.rooms.find(r=>r.id === chatId);
    },
    isMessagesLoading(state){
        return state.loading
    },
    isOnline(state){
        return userId=>state.onlineUsers.includes(userId);
    },
    areOnline(state){
        return users=>!users.map(userId=>state.onlineUsers.includes(userId)).includes(false);
    }
};

const messages = {
    state,
    getters,
    actions,
    mutations
};

export default messages;
