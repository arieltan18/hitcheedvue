<template>
    <div class="conversation" :key="chatId">
        <ChatHeading>
            <img class="title-avatar" :src="chat.avatar" />
            <div>
                <div class="chat-title">
                    {{chat.name}}
                </div>
                <div class="chat-sub-title">
                    <i class="fa fa-circle" :class="{'text-muted': !isOnline, 'text-primary': isOnline}"></i>&nbsp; TYPICALLY REPLIES IN A DAY
                </div>
            </div>
        </ChatHeading>
        <div class="messages" v-chat-scroll="{always: false, smooth: false, scrollonremoved:true, smoothonremoved: false}">
            <ChatMessage v-for="message in messages" v-bind:key="message.id" :message="message"></ChatMessage>
        </div>
        <div class="reply">
                <input :readonly="sending" type="text" v-model="message" @keypress.enter="sendMessage" class="message-input" placeholder="Write your message here" />
                <button :disabled="sending" @click="sendMessage" class="send-button" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </div>
    </div>
</template>

<script>
    import chatkit from "../../services/Chatkit";
    import {resizedImageUrl} from "../../helpers";
    import ChatHeading from "./ChatHeading";
    import ChatMessage from "./ChatMessage";

    export default {
        name: "ChatMessages",
        components: {ChatMessage, ChatHeading},
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

            chat(){
                const id = this.chatId;
                if(!id) return {};
                const chat = this.$store.getters.getChat(id);
                return chat || {};
            },
            isOnline(){
                const id = this.chatId;
                if(!id || !this.chat) return {};
                return this.$store.getters.areOnline(this.chat.otherUsers);
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
          resizedImageUrl,
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
    .title-avatar{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border: 1px solid #EFEFEF;
    }
    .chat-title{
        font: Bold 18px/22px Cormorant Garamond;
        margin-bottom: 5px;
    }
    .chat-sub-title{
        font: 10px/14px Open Sans;
        color: rgb(145, 136, 133);

    }
    .conversation{
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .messages{
        flex: 1;
        overflow-y: auto;
        background-color: #f5f4f4;
        padding: 0 10px;
    }

    .reply{
        display: flex;
        height: 80px;
        border-top: 1px solid #e8e8e8;
    }

    .message-input{
        flex: 1;
        padding-left: 20px;
        border: none;
        outline: none;
    }

    .message-input::placeholder{
        font: 14px/19px Open Sans;
    }

    .send-button{
        width: 100px;
        border: none;
        background-color: transparent;
    }
</style>
