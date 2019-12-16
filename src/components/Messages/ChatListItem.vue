<template>
    <div class="chat-list-item" :class="{active}">
        <div class="checkbox">
            <b-checkbox :checked="selected" @change="onSelect" :value="chat.id"></b-checkbox>
        </div>
        <div class="chat-details" @click="onClick">
            <div class="list-item-avatar"> <img class="rounded-circle" :src="resizedImageUrl(chat.avatar, 50,50)" alt="sunil"></div>
            <div>
                <div class="date" :class="{'font-weight-bold': chat.unreadCount}">{{formatDate(chat.lastMessageAt)}}</div>
                <div class="name" :class="{'font-weight-bold': chat.unreadCount}">{{chat.name}}</div>
                <div class="last-message" v-if="lastMessage">{{lastMessage.senderName}}: {{lastMessage.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate, resizedImageUrl} from "../../helpers";

    export default {
        props: ['active', 'chat', 'selected'],
        name: "ChatListItem",
        methods:{
            resizedImageUrl,
            formatDate,
            onClick(){
                this.$router.push({name: 'messages', params:{chatId: this.chat.id} });
            },
            onSelect($event){
                this.$emit('select', $event)
            }
        },
        computed: {
            lastMessage: function () {
                return this.$store.getters.getLastMessage(this.chat.id)
            }
        }
    }
</script>

<style scoped>
    .chat-list-item{
        display: flex;
        padding: 10px;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
    }

    .chat-list-item:hover{
        background-color: #e7f6f544;
    }

    .chat-list-item.active{
        background-color: #e7f6f5;
    }


    .checkbox{
        width: 20px;
    }

    .chat-details{
        cursor: pointer;
        display: flex;
        flex: 1;
        align-items: center;
    }

    .list-item-avatar{
        width: 50px;
        margin: 10px;
    }

    .list-item-avatar img{
        max-width: 100%;
        border: 1px solid #EFEFEF;
        border-radius: 50%;
    }

    .date{
        color: #26140E;
        font: Bold 10px/22px Open Sans;
    }

    .name{
        font: Bold 12px/22px Open Sans;
        text-transform: uppercase;
    }
    .last-message{
        font: 14px/19px Open Sans;
        color: rgb(145, 136, 133);
    }
</style>
