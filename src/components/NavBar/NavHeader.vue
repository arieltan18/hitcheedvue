<template>
    <div>
        <b-navbar class="header-top" >
            <div class="container">
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <!-- <b-nav-item class="header-text text-uppercase border-right border-white h-75 mt-1" href="#">SignUp</b-nav-item> -->
                        <!-- <b-nav-item class="header-text text-uppercase h-75 mt-1" href="#">Login</b-nav-item> -->
                        <b-dropdown id="dropdown-form" ref="dropdown" class="m-2" variant="black" no-caret>
                            <template v-slot:button-content>
                                <span class="login-dropdown">Sign Up</span>
                            </template>
                            <b-dropdown-form>
                                <b-form-group label="Username" label-for="dropdown-form-email" @submit.stop.prevent>
                                <b-form-input
                                    id="dropdown-form-signup-username"
                                    size="sm"
                                    placeholder="Username"
                                    v-model="registerInput.username"
                                ></b-form-input>
                                </b-form-group>
                                <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                                <b-form-input
                                    id="dropdown-form-signup-email"
                                    size="sm"
                                    placeholder="Email Address"
                                    v-model="registerInput.email"
                                ></b-form-input>
                                </b-form-group>

                                <b-form-group label="Password" label-for="dropdown-form-password">
                                <b-form-input
                                    id="dropdown-form-signup-password"
                                    type="password"
                                    size="sm"
                                    placeholder="Password"
                                    v-model="registerInput.password"
                                ></b-form-input>
                                </b-form-group>

                                <b-form-group label="Confirm Password" label-for="dropdown-form-password">
                                <b-form-input
                                    id="dropdown-form-signup-confirm-password"
                                    type="password"
                                    size="sm"
                                    placeholder="Password Confirmation"
                                    v-model="registerInput.c_password"
                                ></b-form-input>
                                </b-form-group>
                                <b-button variant="primary" size="sm" @click="signUp">Sign Up</b-button>
                                <div class="response-msg">{{ response }}</div>
                            </b-dropdown-form>
                        </b-dropdown>
                        <b-dropdown id="dropdown-form" ref="dropdown" class="m-2" variant="black" no-caret>
                            <template v-slot:button-content>
                                <span class="login-dropdown">Login</span>
                            </template>
                            <b-dropdown-form>
                                <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                                <b-form-input
                                    id="dropdown-form-signin-email"
                                    size="sm"
                                    placeholder="email@example.com"
                                    v-model="loginInput.email"
                                ></b-form-input>
                                </b-form-group>

                                <b-form-group label="Password" label-for="dropdown-form-password">
                                <b-form-input
                                    id="dropdown-form-signin-password"
                                    type="password"
                                    size="sm"
                                    placeholder="Password"
                                    v-model="loginInput.password"
                                ></b-form-input>
                                </b-form-group>

                                <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
                                <b-button variant="primary" size="sm" @click="submitLogin">Sign In</b-button>
                            </b-dropdown-form>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item-button>New around here? Sign up</b-dropdown-item-button>
                            <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
                        </b-dropdown>
                    </b-navbar-nav>
                </b-navbar-nav>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NavHeader',
    data() {
        return {
            registerInput: {
                name: "",
                email: "",
                password: "",
                c_password: "",
                user_role: 'user'
            },
            loginInput: {
                email: "",
                password: "",
            },
            loginError: false,
            response: ''
        }
    },
    methods: {
        signUp() 
        {
            if(this.password !== this.c_password)
            {
                this.response = "Your password is not match!";
            }
            else
            {
                const signUpURL = process.env.VUE_APP_HITCHEED_API + "/v1/register";

                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache'
                }
                axios.post(signUpURL, this.registerInput
                ).then(response => {
                    //let token  = response.data.success.token;

                    // store.commit('loginUser')
                    //localStorage.setItem('token', token);
                    console.log(this.registerInput );
                    this.response = "Successfully Register";
                    
                }).catch(error => {
                    console.log(error);
                });

                // axios({ 
                //     method: "POST", "url": process.env.VUE_APP_HITCHEED_API + "/v1/register", "data": this.input, "headers": { "content-type": "application/json" } })
                //     .then(result => {
                //         this.response = result.data;
                //     }, error => {
                //         console.error(error);
                //     });
            }
        },
        submitLogin() 
        {
            this.$store.dispatch('retrieveToken', {
                email: this.loginInput.email,
                password: this.loginInput.password
            })
            .then(response => {
                console.log(response);
            });

        }
    }
}
</script>

<style scoped>
.header-top
{
    background-color: #25130e !important;
    height: 38px;
}

.header-text a
{
    color:white !important;
    font-size:16px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 20px;
}

.login-dropdown
{
    color:white !important;
    font-size:16px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 20px;
    text-transform: uppercase;
}

</style>