<template>
    <div class="chat_people">
        <div class="chat_img"> <img class="rounded-circle" :src="resizedImageUrl(chat.avatar, 50,50)" alt="sunil"> </div>
        <div class="chat_ib">
            <h5 :class="{'font-weight-bold': chat.unreadCount}">{{chat.name}}<span class="chat_date">{{chat.date}}</span></h5>
            <p v-if="lastMessage"><b>{{lastMessage.senderName}}:</b> {{lastMessage.text}}</p>
        </div>
    </div>
</template>

<script>
    import {resizedImageUrl} from "../../helpers";

    export default {
        props: ['chat'],
        name: "ChatListItem",
        methods:{
            resizedImageUrl,
        },
        computed: {
            lastMessage: function () {
                return this.$store.getters.getLastMessage(this.chat.id)
            }
        }
    }
</script>

<style scoped>

</style>
