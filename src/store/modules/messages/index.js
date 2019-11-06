import axios from "axios";

const state = {
    loading: false,
    messages: [
    ],
    rooms: [
    ]
};

const mutations = {
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
    sendMessageToUser(context, messageInfo){
        const sendMesssageUrl = process.env.VUE_APP_HITCHEED_API + "/v1/send_message";
        const {userId, message} = messageInfo;
        const token = localStorage.getItem('token');
        return axios.post(sendMesssageUrl, {to: userId, message}, { headers:{
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
    isMessagesLoading(state){
        return state.loading
    }
};

const messages = {
    state,
    getters,
    actions,
    mutations
};

export default messages;
