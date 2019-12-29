<template>
    <div >
        <b-button class="my-3 msg-btn" variant="info" @click="showMessageDialogue">Message Professionals</b-button>

        <b-modal hide-footer id="send-message" :title="`Chat with ${professional.name}`">
            <b-alert :variant="hasErrors? 'danger' : 'primary'" :show="!!alertMessage">{{alertMessage}}</b-alert>
            <div>Make sure you share the following:</div>
            <ul class="pl">
                <li>What do you like about their work?</li>
                <li>What would you like to enquire with {{professional.name}}</li>
            </ul>
            <b-form-group>
                <b-form-textarea
                        v-model="message"
                        placeholder="Write your message here..."
                        rows="8"
                />
            </b-form-group>
            <b-row>
                <b-col sm="6" xs="8">
                    <b-button @click="sendMessage" :disabled="sending" variant="primary" block size="md"><i v-if="sending" class="fa fa-spinner fa-spin"></i> Send Message</b-button>
                </b-col>
            </b-row>
        </b-modal>

    </div>
</template>

<script>
    export default {
        name: "MessageProfessional",
        props: ['professional'],
        data:()=>({
            alertMessage:'',
            hasErrors: false,
            sending: false,
            message: ''
        }),
        computed:{
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
        },
        methods:{
            showMessageDialogue(){
                if(this.loggedIn) {
                    this.$bvModal.show('send-message');
                }else{
                    this.$bvToast.toast("You need to be logged in to send message to Professional", {
                        title: 'Please, Login to continue',
                        variant: 'warning',
                        autoHideDelay: 5000,
                        appendToast: true,
                    });
                    this.$bvModal.show('login');
                }
            },
            sendMessage(){
                this.sending = true;
                this.$store.dispatch('sendMessageToProfessional', {
                    email: this.professional.email,
                    message: this.message
                })
                .then(()=> this.$router.push('/messages'))
                .catch((error)=>{
                    const {response:{data:{message = 'An error occurred while sending message'}}} = error;
                    this.alertMessage = message;
                    this.hasErrors = true;
                })
                .then(()=>{this.sending = false;})
            }
        }
    }
</script>

<style scoped>
.msg-btn
{
    border-radius: 7px;
    background-color: #8de4e2;
    border: 1px solid #8de4e2;
    font-weight: bold;
}
</style>
