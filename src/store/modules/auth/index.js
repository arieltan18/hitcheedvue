import axios from 'axios';

const state = {
    token: localStorage.getItem('access_token') || null ,
}

const mutations = {
    registerUser(state, token)
    {
        state.token = token
    },
    retrieveToken(state, token)
    {
        state.token = token
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
        }
        axios.post(signUpURL, {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            c_password: credentials.c_password,
            user_role: credentials.user_role
        }).then(response => {
            const token  = response.data.success.token;
    
            localStorage.setItem('access_token', token);
            context.commit('registerUser',token);
            console.log(response.data);
            console.log("Successfully Register");
            this.response = "Successfully Register";
            
        }).catch(error => {
            console.log(error);
        });
    },
    destroyToken(context)
    {
        axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token

        if(context.getters.loggedIn)
        {
            const logoutURL = process.env.VUE_APP_HITCHEED_API + "/v1/logout";

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
    
            return new Promise((resolve, reject) => {
                axios.post(logoutURL).then(response => {

                    localStorage.removeItem('access_token');
                    context.commit('destroyToken');
                    resolve(response);
                    
                }).catch(error => {
                    localStorage.removeItem('access_token');
                    context.commit('destroyToken');
                    reject(error);
                });
            })
        }
    },
    retrieveToken(context, credentials )
    {
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
    
                localStorage.setItem('access_token', token);
                context.commit('retrieveToken',token);
                resolve(response);
                console.log('login');
                
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    }
}

const getters = {
    loggedIn(state) 
    {
        return  state.token != null;
    }
}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
