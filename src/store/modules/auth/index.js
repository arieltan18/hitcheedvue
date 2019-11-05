import axios from 'axios';
import chatkit from "../../../chatkit";

const state = {
    token: localStorage.getItem('access_token') || null ,
    username: ''
}

const mutations = {
    registerUser(state, token)
    {
        state.token = token
    },
    retrieveToken(state, token, username)
    {
        state.token = token
        state.username = username
    },
    destroyToken(state)
    {
        state.token = null
    }
}

const actions = {
    registerUser(context,credentials)
    {
        const signUpURL = process.env.VUE_APP_HITCHEED_API + "/v1/register";

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        };
        axios.post(signUpURL, {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            c_password: credentials.c_password,
            user_role: credentials.user_role
        }).then(response => {
            const token  = response.data.success.token;
            const chat_id  = response.data.chat_id;

            localStorage.setItem('access_token', token);
            localStorage.setItem('chat_id', chat_id);
            chatkit.connectUser();
            context.commit('registerUser',token);
            console.log(response.data);
            console.log("Successfully Register");

            return response
        }).catch(error => {
            console.log(error);
        });
    },
    destroyToken(context)
    {
        //axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token

        if(context.getters.loggedIn)
        {
            localStorage.removeItem('access_token');
            localStorage.removeItem('chat_id');
            chatkit.disconnectUser();
            context.commit('destroyToken');
            context.commit('resetMessages');

            // const logoutURL = process.env.VUE_APP_HITCHEED_API + "/v1/logout";

            // axios.defaults.headers = {
            //     'Content-Type': 'application/json',
            //     'cache-control': 'no-cache'
            // }

            // return new Promise((resolve, reject) => {
            //     axios.post(logoutURL).then(response => {

            //         localStorage.removeItem('access_token');
            //         context.commit('destroyToken');
            //         resolve(response);

            //     }).catch(error => {
            //         localStorage.removeItem('access_token');
            //         context.commit('destroyToken');
            //         reject(error);
            //     });
            // })
        }
    },
    retrieveToken(context, credentials )
    {
        const loginURL = process.env.VUE_APP_HITCHEED_API + "/v1/login";

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        };

        return new Promise((resolve, reject) => {
            axios.post(loginURL, {
                email: credentials.email,
                password: credentials.password
            }).then(response => {
                const token  = response.data.success.token;
                const chat_id  = response.data.chat_id;
                const username = response.data.username;


                localStorage.setItem('access_token', token);
                localStorage.setItem('chat_id', chat_id);
                chatkit.connectUser();
                context.commit('retrieveToken',token, username);
                resolve(response);

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    }
};

const getters = {
    loggedIn(state)
    {
        return  state.token != null;
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
