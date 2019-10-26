<template>
    <div class="mesgs">
        <div class="msg_history">
            <div v-for="message in messages" v-bind:key="message.id" :class="{incoming_msg: !message.outgoing, outgoing_msg: message.outgoing}">
                <div v-if="!message.outgoing" class="incoming_msg_img"> <img :src="message.image_url" alt="sunil"> </div>
                <div :class="{received_msg: !message.outgoing, sent_msg: message.outgoing}">
                    <div :class="{received_withd_msg: !message.outgoing}">
                        <p>{{message.message}}</p>
                        <span class="time_date"> {{message.date}}</span></div>
                </div>
            </div>
        </div>
        <div class="type_msg">
            <div class="input_msg_write">
                <input type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatMessages",
        props: ['chat-id'],
        computed:{
            messages(){
                const id = this.chatId;
                console.log(this);
                if(!id) return [];
                return this.$store.getters.getMessages(this.chatId)
            }
        },
        created(){
            console.log(this);
        }

    }
</script>

<style scoped>

</style>
