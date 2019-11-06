<template>
    <div class="inbox_chat">
        <div v-if="chats.length">
            <div v-for="chat of chats" v-bind:key="chat.id" @click="changeActiveChatId(chat.id)" :class="{active_chat: chat.id === activeChatId}" class="chat_list">
                <ChatListItem :chat="chat"></ChatListItem>
            </div>
        </div>
        <div v-else-if="isLoading" class="text-center font-weight-bolder p-2"> <i class="fa fa-spinner fa-spin"></i> Loading Conversations...</div>
        <div v-else class="text-center font-weight-bolder p-2">No conversations</div>
    </div>
</template>

<script>
    import ChatListItem from "./ChatListItem";
    export default {
        name: "ChatList",
        components: {ChatListItem},
        props: ['active-chat-id'],
        computed: {
            chats(){
                return this.$store.getters.getChats;
            },

            isLoading(){
                return this.$store.getters.isMessagesLoading;
            }
        },
        watch:{
            chats:function () {
                if(!this.activeChatId && this.chats.length > 0){
                    this.changeActiveChatId(this.chats[0].id)
                }
            }
        },
        created: function(){
            if(!this.activeChatId && this.chats.length > 0){
                this.changeActiveChatId(this.chats[0].id)
            }
        },
        methods:{
            changeActiveChatId: function (chatId) {
                this.$emit('changeActiveChatId', chatId)
            }
        }
    }
</script>

<style scoped>

</style>
