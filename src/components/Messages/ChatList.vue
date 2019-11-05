<template>
    <div class="inbox_chat">
        <div v-for="chat of chats" v-bind:key="chat.id" @click="changeActiveChatId(chat.id)" :class="{active_chat: chat.id === activeChatId}" class="chat_list">
            <ChatListItem :chat="chat"></ChatListItem>
        </div>
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
