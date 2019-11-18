<template>
    <div class="bg-light">
        <div class="title py-3">
            <h1 class="text-left container">PROFILE</h1>
        </div>
        <div class="container text-left ">

        <div class="py-4">
            <div class="row bg-white" >
                <div class="col-md-3 p-4 text-center">
                    <div class="m-auto" style="width: 179px">
                        <ImageCropCenter rounded size="179px" :src="form.profile_picture || (user && user.profile_picture) || `https://ui-avatars.com/api/?name=${(user && user.name)}&size=179`" ></ImageCropCenter>
                        <b-button v-if="imageChanged" @click="clearImage" block class="mt-3" variant="danger">Remove Image</b-button>
                        <b-button @click="changeImage" block class="mt-3" variant="outline-dark">Upload Image</b-button>
                    </div>
                </div>
                <div block class="col-md-9 p-4">
                    <b-alert
                            :show="messageCountdown"
                            dismissible
                            variant="success"
                            @dismissed="messageCountdown=0"
                            @dismiss-count-down="messageCountdownChanged"
                    >
                        <p><strong>Profile updated succesfully</strong></p>
                    </b-alert>
                    <b-form @submit.prevent="updateProfile">
                        <b-form-group

                                label="Username"

                        >
                            <b-form-input
                                    id="input-1"
                                    type="text"
                                    v-model="form.name"
                                    :state="hasErrors ? !errors.name : null"
                                    required
                                    placeholder="Username"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                                {{errors.name}}
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group

                                label="Email"

                        >
                            <b-form-input

                                    type="email"
                                    v-model="form.email"
                                    :state="hasErrors ? !errors.email : null"
                                    required
                                    placeholder="Email"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                                {{errors.email}}
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group>
                            <b-button v-b-toggle.change-password variant="outline-dark" v-on:click="togglePasswordChange(!form.changePassword)">Change Password</b-button>
                            <b-collapse :visible="form.changePassword" id="change-password" class="mt-2">
                                <b-card class="pl-4">
                                    <b-form-group label="Current password">
                                        <b-form-input
                                                type="password"
                                                v-model="form.password"
                                                :required="form.changePassword"
                                                :state="hasErrors ? !errors.password : null"
                                                placeholder="Current Password"
                                        ></b-form-input>
                                        <b-form-invalid-feedback>
                                            {{errors.password}}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group label="New password">
                                        <b-form-input

                                                type="password"
                                                v-model="form.new_password"
                                                :required="form.changePassword"
                                                :state="hasErrors ? !errors.new_password : null"
                                                placeholder="New Password"
                                        ></b-form-input>
                                        <b-form-invalid-feedback>
                                            {{errors.new_password}}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group label="Confirm new password">
                                        <b-form-input

                                                type="password"
                                                v-model="form.new_password_confirmation"
                                                :required="form.changePassword"
                                                :state="hasErrors ? !errors.new_password_confirmation : null"
                                                placeholder="Confirm new password"
                                        ></b-form-input>
                                        <b-form-invalid-feedback>
                                            {{errors.new_password_confirmation}}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-card>
                            </b-collapse>
                        </b-form-group>
                        <b-button :disabled="submitting" class="px-5" type="submit" variant="primary" size="lg"> <i class="fa fa-spinner fa-spin" v-if="submitting"></i> Save Profile</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import {fileToBase64} from "../../helpers";
    import ImageCropCenter from "../../elements/ImageCropCenter";

    export default {
        name: "Profile",
        components: {ImageCropCenter},
        data(){
            return {
                form:{
                    changePassword: false,
                },
                submitting: false,
                errors:{},
                hasErrors: false,
                messageCountdown:0,
            }
        },
        computed: {
            user(){
                return this.$store.getters.user
            },
            imageChanged(){
                return !!this.form.profile_picture;
            }
        },
        methods :{
            updateUser(){
                if(this.user){
                    const {name, email} = this.user;
                    this.form = { name, email};
                }
            },
            togglePasswordChange(changePassword){
                this.form.changePassword = changePassword;
            },
            updateProfile(){
                this.submitting = true;
                this.$store.dispatch('updateProfile', this.form)
                    .then(()=>{
                        this.showSuccess();
                        this.updateUser();
                        this.hasErrors = false;
                    })
                    .catch(({response})=>{
                    const {data:{errors = {}} = {}} = response;
                    this.hasErrors = true;
                    this.errors = Object.keys(errors).reduce((pv, cv)=>{
                        pv[cv] = errors[cv][0];
                        return pv;
                    }, {});

                }).then(()=>{
                    this.submitting = false;
                });
            },
            showSuccess(){
                this.messageCountdown = 10;
            },
            messageCountdownChanged(countDown){
                this.messageCountdown = countDown;
            },
            changeImage(){
                const fileChooser = document.createElement('input');
                fileChooser.type = "file";
                fileChooser.accept = "image/*";
                fileChooser.click();
                fileChooser.onchange = (e)=>{
                    const file = e.target.files[0];
                    fileToBase64(file).then((url)=>{
                        this.form = {
                            ...this.form,
                            profile_picture: url
                        };
                    })
                }
            },
            clearImage(){
                this.form = {
                    ...this.form,
                    profile_picture: undefined
                }
            }
        },
        watch:{
            user(){
                this.updateUser();
            }
        },
        created(){
            this.updateUser();
        }
    }
</script>

<style scoped>
    .title{
        font-family: 'Cormorant Garamond';
        background-color: #f2f2f2;
    }
</style>
