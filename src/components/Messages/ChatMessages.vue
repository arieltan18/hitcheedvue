<template>
    <div :key="chatId" class="mesgs">
        <div class="msg_history" v-chat-scroll="{always: false, smooth: false, scrollonremoved:true, smoothonremoved: false}">
            <div v-for="message in messages" v-bind:key="message.id" :class="{incoming_msg: !message.outgoing, outgoing_msg: message.outgoing}">
                <div v-if="!message.outgoing" class="incoming_msg_img"> <img :src="message.senderAvatar" :alt="message.senderName"> </div>
                <div :class="{received_msg: !message.outgoing, sent_msg: message.outgoing}">
                    <div :class="{received_withd_msg: !message.outgoing}">

                        <p>
                            <b>{{message.senderName}}</b><br />
                            {{message.text}}
                        </p>
                        <span class="time_date"> {{message.date}}</span></div>
                </div>
            </div>
        </div>
        <div class="type_msg">
            <div class="input_msg_write">
                <input :readonly="sending" type="text" v-model="message" @keypress.enter="sendMessage" class="write_msg" placeholder="Type a message" />
                <button :disabled="sending" @click="sendMessage" class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    import chatkit from "../../chatkit";

    export default {
        name: "ChatMessages",
        props: ['chat-id'],
        data:()=>({
          sending: false,
          message: '',
        }),
        computed:{
            messages(){
                const id = this.chatId;
                if(!id) return [];
                return this.$store.getters.getMessages(this.chatId)
            },
            lastMessage(){
                return this.$store.getters.getLastMessage(this.chatId);
            }
        },
        watch:{
            lastMessage:function () {
                this.markAsRead();
            }
        },
        methods:{
          sendMessage(){
              if(!this.message) return;

              this.sending=true;
              chatkit.sendMessage(this.chatId, this.message)
                  .then(()=>{
                     this.message = '';
                  })
                  .catch(()=>{})
                  .then(()=>{
                      this.sending = false;
                  })
            },
            markAsRead(){
                const message = this.lastMessage;
              if(this.chatId && message && !message.outgoing) {
                chatkit.markAsRead(this.chatId, message.id)
              }
            }
        },
        created(){
            this.markAsRead();
        }

    }
</script>

<style scoped>

</style>
