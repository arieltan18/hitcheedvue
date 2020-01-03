import axios from 'axios';
import chatkit from "../../../services/Chatkit";
import {getUser, updateProfile} from "../../../services/User";
import User from "../../../services/User";

const state = {
    token: localStorage.getItem('access_token') || null ,
    username: '',
    user: null,
}

const mutations = {
    setUser(state, user){
        state.user = user;
    },
    registerUser(state, token)
    {
        state.token = token
    },
    retrieveToken(state, token, username)
    {
        state.token = token;
        state.username = username
    },
    destroyToken(state)
    {
        state.token = null;
        state.user = null
    },
}

const actions = {
    getUser(context){
        getUser().then(user=>{
            context.commit('setUser', user);
        });
    },

    requestPasswordReset(context, data){
        return User.requestPasswordReset(data);
    },

    resetPassword(context, data){
        return User.resetPassword(data);
    },
    registerUser(context,data)
    {
        return User.register(data)
            .then(response => {
                const token  = response.data.token;
                const chat_id  = response.data.chat_id;

                localStorage.setItem('access_token', token);
                localStorage.setItem('chat_id', chat_id);
                chatkit.connectUser();
                context.commit('registerUser',token);
                context.dispatch('getUser');

                return response
            });
    },
    destroyToken(context)
    {

        if(context.getters.loggedIn)
        {
            localStorage.removeItem('access_token');
            localStorage.removeItem('chat_id');
            chatkit.disconnectUser();
            context.commit('destroyToken');
            context.commit('resetMessages');
        }
    },
    facebookLogin(context, facebookCredentials){
        return User.facebookLogin(facebookCredentials)
            .then(({data})=>{
                const token  = data.token;
                const chat_id  = data.chat_id;
                const username = data.username;

                localStorage.setItem('access_token', token);
                localStorage.setItem('chat_id', chat_id);
                chatkit.connectUser();
                context.commit('retrieveToken',token, username);
                context.dispatch('getUser');
                return data;
            });
    },
    retrieveToken(context, credentials )
    {
        return new Promise((resolve, reject) => {
            User.login(credentials)
                .then(response => {
                    const token  = response.data.token;
                    const chat_id  = response.data.chat_id;
                    const username = response.data.username;

                    localStorage.setItem('access_token', token);
                    localStorage.setItem('chat_id', chat_id);
                    chatkit.connectUser();
                    context.commit('retrieveToken',token, username);
                    context.dispatch('getUser');
                    resolve(response);

                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
        })
    },
    updateProfile(context, data){
        return updateProfile(data).then((user)=>{
            context.commit('setUser', user);
        });
    }
};

const getters = {
    loggedIn(state)
    {
        return  !!state.token;
    },
    user(state)
    {
        return  state.user;
    },
    username: state => state.username
}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
