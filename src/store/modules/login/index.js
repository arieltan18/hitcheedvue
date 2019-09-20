import axios from 'axios';

const state = {
    token: localStorage.getItem('access_token') || null ,
}

const mutations = {
    retrieveToken(state, token)
    {
        state.token = token
    }
}

const actions = {
    retrieveToken(context, credentials ) {
        const loginURL = process.env.VUE_APP_HITCHEED_API + "/v1/login";

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        }

        return new Promise((resolve, reject) => {
            axios.post(loginURL, {
                email: credentials.email,
                password: credentials.password
            }).then(response => {
                const token  = response.data.success.token;
    
                localStorage.setItem('token', token);
                context.commit('retrieveToken',token);
                
            }).catch(error => {
                console.log(error);
            });
        })
    }
}

const getters = {

}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
