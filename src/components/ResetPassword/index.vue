<template>
    <div class="container text-left">
        <b-row>
            <b-col md="6" offset-md="3">
                <b-card class="mb-5">
                    <b-card-text>
                        <h3>Password Reset</h3>
                    </b-card-text>
                    <b-alert :variant="hasErrors? 'danger' : 'primary'" :show="!!message">{{message}}</b-alert>
                    <b-form @submit.prevent="resetPassword">
                        <b-form-group label="New Password">
                            <b-form-input
                                    v-model="form.password"
                                    required
                                    placeholder="Enter New Password"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Confirm Password">
                            <b-form-input
                                    v-model="form.password_confirmation"
                                    required
                                    placeholder="Confirm password"
                            ></b-form-input>
                        </b-form-group>
                        <b-button :disabled="submitting" type="submit" size="lg" variant="primary"> <i class="fa fa-spin fa-spinner" v-if="submitting"></i> Reset Password</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "ResetPassword",
        data(){
          return {
              form:{},
              submitting: false,
              hasErrors: false,
              message: null,
          }
        },
        methods:{
            resetPassword(){
                const formData = {
                    ...this.form,
                    token: this.$route.params.token
                };
                this.submitting=true;
                this.hasErrors = false;
                this.message = null;
                this.$store.dispatch('resetPassword', formData).then(({message})=>{
                    this.message = message;
                })
                    .catch(({request:{responseText = '{}'}})=>{
                        let message = 'Unexpected error occurred while resetting password.';
                        try{
                            ({message} = JSON.parse(responseText))
                        }catch (e) {

                        }
                        this.hasErrors = true;
                        this.message = message;

                    })
                    .then(()=>{
                    this.submitting = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>
