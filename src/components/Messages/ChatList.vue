<template>
    <div class="inbox_chat">
        <div v-for="chat of chats" v-bind:key="chat.id" @click="changeActiveChatId(chat.id)" :class="{active_chat: chat.id === activeChatId}" class="chat_list">
            <div class="chat_people">
                <div class="chat_img"> <img :src="chat.image_url" alt="sunil"> </div>
                <div class="chat_ib">
                    <h5>{{chat.name}} <span class="chat_date">{{chat.date}}</span></h5>
                    <p>{{chat.message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatList",
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
