
const state = {
    messages: [
        {
            id: 1,
            chatId: '1',
            from: 'Test 1',
            message: 'test Message',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            date: new Date()
        },
        {
            id: 2,
            chatId: '1',
            from: 'Test 1',
            message: 'Hello there 2',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            date: new Date()
        },
        {
            id: 3,
            chatId: '1',
            from: 'Test 1',
            message: 'Hello there 3',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            outgoing: true,
            date: new Date()
        },
        {
            id: 4,
            chatId: '2',
            from: 'Test 1',
            message: 'Hello there 3',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            outgoing: true,
            date: new Date()
        }
    ],
    chats: [
        {
            id: '1',
            name: 'Test 1',
            message: 'Hello there',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            date: new Date()
        },
        {
            id: '2',
            name: 'Test 2',
            message: 'Hello there',
            image_url: 'https://ptetutorials.com/images/user-profile.png',
            date: new Date()
        }
    ]
};

const mutators = {
    startChat(state, chat){

    },
    chatStarted(state, chat){

    },
    sendMessage(state, message){

    },
    messageReceived(state, message){

    }
};

const actions = {
    startChat(context, chat){

    },
    chatStarted(context, chat){

    },
    sendMessage(context, message){

    },
    messageReceived(context, message){

    }
};

const getters = {
    getMessages: (state)=>(chatId)=>{
        return state.messages.filter(c=>c.chatId === chatId)
    },
    getChats(state){
        return state.chats
    }
};

const messages = {
    state,
    getters,
    actions,
    mutators
};

export default messages;
