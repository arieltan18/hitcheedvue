<template>
    <div class="container text-left">
        <b-row>
            <b-col md="6" offset-md="3">
                <b-card class="mb-5">
                    <b-alert :show="!!message">{{message}}</b-alert>
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
                        <b-button type="submit" size="lg" variant="primary">Reset Password</b-button>
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
                this.$store.dispatch('resetPassword', formData).then(({message})=>{
                    this.message = message;
                }).then(()=>{
                    this.submitting = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>
