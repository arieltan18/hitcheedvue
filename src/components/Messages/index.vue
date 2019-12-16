<template>
    <div>
        <div class="container pb-3 text-left">
            <div class="messaging">
                <div class="chat-list d-none d-md-block" :class="{'d-block': !isChatActive}">
                    <ChatList @changeActiveChatId="setActiveChatId" :active-chat-id="activeChatId"></ChatList>
                </div>
                <div class="chat-messages d-none d-md-block" :class="{'d-block': isChatActive}">
                    <ChatMessages v-if="activeChatId" :key="activeChatId" :chat-id="activeChatId"></ChatMessages>
                    <div class="p-5 text-center font-weight-bold" v-else>Please select a Conversation</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChatList from "./ChatList";
    import ChatMessages from "./ChatMessages";

    export default {
        name: "Messages",
        metaInfo:{
          title: 'Messages',
        },
        components: {ChatMessages, ChatList},
        computed:{
            activeChatId(){
                return this.$route.params.chatId
            },
            isChatActive(){
                return !!this.activeChatId;
            }
        },
        methods: {
            setActiveChatId: function (chatId) {
                this.aciveChatId = chatId;
            }

        }
    }
</script>

<style scoped>

    .messaging{
        height: calc(100vh - 250px);
        max-height: 600px;
        min-height: 300px;
        border: 1px solid #e8e8e8;
        display: flex;
        border-radius: 6px;
    }

    .chat-list{
        border-right: 1px solid #e8e8e8;
        flex-grow: 1;

    }

    @media (min-width: 1200px ){
        .chat-list {
            max-width: 348px;
        }
    }

    .chat-messages{
        flex-grow: 2.22;
    }

</style>
