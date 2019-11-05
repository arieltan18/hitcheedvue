<template>
    <div class="chat_people">
        <div class="chat_img"> <img :src="chat.avatar" alt="sunil"> </div>
        <div class="chat_ib">
            <h5 :class="{'font-weight-bold': chat.unreadCount}">{{chat.name}}<span class="chat_date">{{chat.date}}</span></h5>
            <p v-if="lastMessage"><b>{{lastMessage.senderName}}:</b> {{lastMessage.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['chat'],
        name: "ChatListItem",
        computed: {
            lastMessage: function () {
                return this.$store.getters.getLastMessage(this.chat.id)
            }
        }
    }
</script>

<style scoped>

</style>
