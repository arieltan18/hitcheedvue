<template>
    <div class="navheader">
        <b-navbar id="navheader-bar" :class="{'white-header-top': isTransparent, 'brown-header-top': !isTransparent}">
            <div class="container">
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav v-if="!loggedIn">
                        <b-button class="nav-text" variant="black" v-b-modal.signup>Sign Up</b-button>
                        <b-modal id="signup" title="SIGN UP" centered hide-footer no-stacking>
                            <h1 class="signup-title text-capitalize">First step to create your dream wedding.</h1>

                            <b-button @click="fbLogin" class="btn btn-primary">
                                <i class="fa fa-facebook-f"></i>
                                SIGNUP WITH FACEBOOK
                            </b-button>

                            <p class="text-center">or</p>
                            <b-link class="btn btn-signup-email" v-b-modal.signup-email>
                                <i class="fa fa-envelope"></i>
                                SIGN UP WITH EMAIL
                            </b-link>
                        </b-modal>
                        <b-modal id="signup-email" title="SIGN UP WITH EMAIL" centered hide-footer no-stacking @hide="clearResponse" ref="signup-modal">
                            <form class="contact-form" method="POST">
                                <h5 class="text-center">SIGN UP HITCHEED</h5>
                                <b-form-input
                                    class="mt-2 mb-4 input-field"
                                    size="sm"
                                    placeholder="Username"
                                    v-model="registerInput.name"
                                ></b-form-input>
                                <b-form-input
                                    class="mt-2 mb-4 input-field"
                                    size="sm"
                                    placeholder="Email Address"
                                    v-model="registerInput.email"
                                ></b-form-input>
                                <b-form-input
                                    class="mt-2 mb-4 input-field"
                                    size="sm"
                                    placeholder="Password"
                                    type="password"
                                    v-model="registerInput.password"
                                ></b-form-input>
                                <b-form-input
                                    class="mt-2 mb-4 input-field"
                                    size="sm"
                                    placeholder="Password Confirmation"
                                    type="password"
                                    v-model="registerInput.c_password"
                                ></b-form-input>
                                <p class="error-msg text-center" v-for="(value,index) in response" :key="index">{{ value }}</p>
                                <p class="condition text-center">By signing up, I agree to Hicheed's Privacy Policy</p>
                                <b-button class="forget-btn" variant="primary" size="sm" @click="submitRegister">Sign Up</b-button>
                            </form>
                            <p class="condition text-center">Already have a Hitcheed account?
                                <b-link class="login-link-text text-uppercase" variant="black" v-b-modal.login>Log In</b-link>
                            </p>
                        </b-modal>
                        <hr style="width: 1px; height: 20px; display: inline-block;border-right: 1px solid #ffffff;">
                        <b-button class="nav-text" variant="black" v-b-modal.login>Login</b-button>
                        <b-modal id="login" title="LOGIN" centered hide-footer ok-only no-stacking>
                            <div class="centered-modal">
                                <form class="contact-form" method="POST">
                                    <b-button @click="fbLogin" class="btn btn-primary">
                                        <i class="fa fa-facebook-f"></i>
                                        LOGIN WITH FACEBOOK
                                    </b-button>
                                    <p>or</p>
                                    <span class="text">LOGIN WITH YOUR EMAIL ADDRESS</span>
                                    <b-alert :variant="loginError? 'danger' : 'success'" :show="!!loginMessage">{{loginMessage}}</b-alert>
                                    <b-form-input
                                        class="mt-2 mb-4 input-field"
                                        size="sm"
                                        placeholder="Email Address"
                                        v-model="loginInput.email"
                                    ></b-form-input>
                                    <b-form-input
                                        class="input-field"
                                        size="sm"
                                        placeholder="Password"
                                        type="password"
                                        v-model="loginInput.password"
                                    ></b-form-input>
                                    <b-button class="login-btn" :disabled="loggingIn" variant="primary" size="sm" @click="submitLogin"> <i v-if="loggingIn" class="fa fa-spinner fa-spin"></i> Sign In</b-button>
                                    <div class="checkbox">
                                        <b-form-checkbox class="remember-me float-left">Remember me</b-form-checkbox>
                                        <span class="float-right text">
                                            <b-link class="text-dark" variant="black" v-b-modal.forgot-pwd>Forget Password?</b-link>
                                        </span>
                                    </div>
                                </form>
                                <div class="condition float-left">Don't have an account?
                                    <b-link class="sign-up-link" variant="black" v-b-modal.signup>Sign Up</b-link>
                                </div>
                            </div>
                        </b-modal>
                        <b-modal id="forgot-pwd" title="FORGET PASSWORD" centered hide-footer  ok-only no-stacking>
                            <div class="text-center">
                                <b-alert :variant="forgotPasswordError ? 'danger' : 'primary'" :show="!!forgoPasswordMessage">{{forgoPasswordMessage}}</b-alert>
                                <p class="forget-pwd-text text-left">
                                    Enter your email address and submit to receive an email with a link to reset password.
                                </p>
                                <form @submit.prevent="requestPasswordReset" class="forget-pwd-form">
                                    <b-form-input
                                        class="mt-2 mb-4 input-field"
                                        size="sm"
                                        placeholder="Email Address"
                                        v-model="forgetPwd.email"
                                        :readonly="resetPasswordRequesting"
                                    ></b-form-input>
                                    <b-button :disabled="resetPasswordRequesting" type="submit" class="forget-btn" variant="primary" size="sm" > <i class="fa fa-spinner fa-spin" v-if="resetPasswordRequesting"></i> Submit</b-button>
                                </form>
                                <b-link class="text-dark text-uppercase" variant="black" v-b-modal.login>Back to Login</b-link>
                            </div>
                        </b-modal>
                    </b-navbar-nav>
                <b-navbar-nav v-else>
                    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                            <span v-if="user" class="nav-text">{{user.name}}<i class="fa fa-angle-down ml-2"></i></span>
                        </template>
                        <b-dropdown-item class="profile-dropdown-menu" href="#">WishLists</b-dropdown-item>
                        <b-dropdown-item class="profile-dropdown-menu" :to="{name: 'Profile'}">My Profile</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item class="profile-dropdown-menu" href="#" @click="logout">Logout</b-dropdown-item>
                    </b-dropdown>
                </b-navbar-nav>
                </b-navbar-nav>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {showAlertMessage} from "../../helpers";
export default {
    name: 'NavHeader',
    props: ['is-transparent'],
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
            forgetPwd:{
                email: ""
            },
            loggingIn: false,
            loginMessage: '',
            loginError: false,
            resetPasswordRequesting: false,
            forgotPasswordError: false,
            forgoPasswordMessage: '',
            response: [],
            isScrolled: false,
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
        hasTransparentOnTop(){
            return this.$route.path === '/';
        },
        user() {
            return this.$store.getters.user;
        },
        ...mapGetters([
            'username',
        ]),
    },
    methods: {
        submitRegister()
        {
            if(this.registerInput.name == "")
            {
                this.response.push("Username can't be blank");
            }
            if(this.registerInput.email == "")
            {
                this.response.push("Email can't be blank");
            }
            if(this.registerInput.password == "")
            {
                this.response.push("Password can't be blank");
            }
            if(this.registerInput.c_password == "")
            {
                this.response.push("Password Confirmation can't be blank");
            }

            if(this.registerInput.password !== this.registerInput.c_password)
            {
                this.response.push("Your password is not match!");
            }
            else
            {
                this.$store.dispatch('registerUser', this.registerInput)
                .then(response => {
                    console.log(response);
                });
            }
        },
        submitLogin()
        {
            // this.loginMessage = '';
            // this.loginError = false;
            this.loggingIn = true;
            this.$store.dispatch('retrieveToken', {
                email: this.loginInput.email,
                password: this.loginInput.password
            })
            .then(response => {
                this.username = response.data.name;
                this.loginError = false;
                this.loginMessage = '';
            }).catch(()=>{
                this.loginMessage = 'Invalid Username/Password.';
                this.loginError = true;
            }).then(()=>{
                this.loggingIn = false;
            });
        },
        requestPasswordReset(){
            this.resetPasswordRequesting = true;
            this.forgotPasswordError = false;
            this.forgoPasswordMessage = '';
            this.$store.dispatch('requestPasswordReset', this.forgetPwd)
                .then(({message})=>{
                    this.forgoPasswordMessage = message;
                }).catch(({request:{responseText = '{}'}})=>{
                    let message = 'Sorry an error occurred while resetting password!';
                    try {
                        ({message} = JSON.parse(responseText));
                    }catch (e) {}

                    this.forgotPasswordError = true;
                    this.forgoPasswordMessage = message;
            }).then(()=>{
                this.resetPasswordRequesting = false;
            })
            ;
        },
        logout()
        {
            this.$store.dispatch('destroyToken')
            .then(response => {
                console.log(response);
            });

            this.$bvToast.toast("Logged out successfully", {
                title: 'Hitcheed',
                variant: 'success',
                autoHideDelay: 5000,
                appendToast: true,
            });
        },
        clearResponse()
        {
            this.response = [];
        },
        methodThatForcesUpdate() {
            // ...
            this.$forceUpdate();  // Notice we have to use a $ here
            // ...
        },
        fbLogin(){
            window.FB.login(({authResponse}) => {
                this.$store.dispatch('facebookLogin', authResponse);
            });
        }
    },
    mounted() {

        window.fbAsyncInit = function (app) {
            console.log(app);
            window.FB.init({
                appId: '123367248113310',
                cookie: true,
                xfbml: true,
                version: 'v2.8'
            });
        };

            (function (d, s, id) {
                let js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
    }
}
</script>

<style scoped>
.navheader
{
    position: fixed;
    width: 100%;
    z-index: 1050;
}

.white-header-top
{
    background-color: transparent !important;
    height: 45px;
    border-bottom: 1px solid #ffffff87;
    z-index: 10;
}
.brown-header-top
{
    background-color: #25130E !important;
    height: 45px;
    z-index: 10;
}
.nav-text
{
    color:white !important;
    font-size:12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 20px;
    text-transform: uppercase;
    font-family: 'Open Sans'
}

.centered-modal
{
    text-align: center;
    padding: 20px;
}

.btn-primary
{
    font-size: 14px;
    letter-spacing: 1.2px;
    background: #1e4fac;
    border-radius: 10px;
    width: 100%;
    margin: 15px 0 0 0;
    font-family: 'Open Sans', sans-serif;
}

.text
{
    font-size: 13px;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #25130e !important;
    font-family: 'Open Sans', sans-serif;
}

.input-field
{
    border-radius: 10px;
    font-size: 16px;
    height: 40px;
}

.login-btn
{
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: 600;
    padding: 7px 0;
    border: none;
    background: #81dedd;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
}

.login-btn:hover
{
    background: #81dedd;
}

.remember-me
{
    font-size: 14px;
    margin: 10px 0;
}

.checkbox
{
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.condition
{
    font-size: 12px;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #25130e80 !important;
    font-family: 'Open Sans', sans-serif;
}

.sign-up-link
{
    color:black !important;
    font-size:12px;
    letter-spacing: 1px;
    line-height: 20px;
}

.forget-pwd-text
{
    font-size: 13px;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #25130e !important;
    font-family: 'Open Sans', sans-serif;
}

.forget-btn
{
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: 600;
    padding: 7px 0;
    border: none;
    background: #81dedd;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    margin-top: 0px;
    margin-bottom:20px;
}

.forget-btn:hover
{
    background: #81dedd;
}

.signup-title
{
    font-size: 50px;
    line-height: 40pt;
    font-style: italic;
    color: #25130e;
    font-family: 'Cormorant Garamond', serif;
}

.btn-signup-email
{
    font-size: 14px;
    letter-spacing: 1.2px;
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    margin: 15px 0 0 0;
    font-family: 'Open Sans', sans-serif;
    color: black;
}

.login-link-text
{
    color: #25130e80 !important;
    font-size:12px;
    letter-spacing: 1px;
    line-height: 20px;
}

.profile-dropdown-menu
{
    color: #000;
    font-size: 14px;
    font-weight: bold !important;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
}

.error-msg
{
    color: #eb6867;
    font-size:14px;
    margin-bottom: 0px;
}

button:focus, button:active
{
    outline: none !important;
    box-shadow: none !important;
}
</style>
