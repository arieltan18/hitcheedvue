<template>
    <div class="message" :class="{incoming: !message.outgoing, outgoing: message.outgoing}">
        <img class="avatar" :src="resizedImageUrl(message.senderAvatar, 50,50)" :alt="message.senderName">
        <div>
            <div class="bubble">
                <div class="sender">
                 <div class="name">{{message.senderName}}</div>
                 <div class="time">{{formatTime(message.createdAt)}}</div>
                </div>
                <div class="message-text">
                    {{message.text}}
                </div>
                <span class="time_date"> {{message.date}}</span></div>
        </div>
    </div>
</template>

<script>
    import {formatTime, resizedImageUrl} from "../../helpers";

    export default {
        name: "ChatMessage",
        props: ['message'],
        methods:{
            resizedImageUrl,
            formatTime,
        }
    }
</script>

<style scoped>
    .message{
        display: flex;
        margin: 20px 0;
    }

    .message.incoming{
        flex-direction: row-reverse;
    }

    .avatar{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 1px solid #EFEFEF;
    }

    .bubble{
        background-color: #fcfcfc;
        width: 250px;
        padding: 10px;
        position: relative;
        margin-left: 20px;
        border-radius: 5px;
    }

    .bubble:after{
        width: 16px;
        height: 16px;
        content: ' ';
        top:0;
        right: 100%;
        background-color: #ffff;
        transform-origin: 50% 50%;
        transform: translate(50%, 100%) rotate(45deg) ;
        position: absolute;

    }

    .incoming .bubble{
        margin-right: 20px;
    }

    .incoming .bubble:after{
        transform: translate(-50%, 100%) rotate(45deg) ;
        left: 100%;
    }

    .sender{
        display: flex;
        justify-content: space-between;
    }

    .name{
        font: Bold 10px/22px Open Sans;
        color: rgb(145, 136, 133);
    }

    .time{
        color: rgb(145, 136, 133);
        font: 8px/22px Open Sans;
    }

    .message-text{
        font: 14px/19px Open Sans;
    }


</style>
