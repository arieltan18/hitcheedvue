<template>
    <div>
        <div class="container text-left">
            <div class="messaging">
                <div class="inbox_msg">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>Messages</h4>
                            </div>
                        </div>
                        <ChatList @changeActiveChatId="setActiveChatId" :active-chat-id="activeChatId"></ChatList>
                    </div>
                    <ChatMessages v-if="activeChatId" :key="activeChatId" :chat-id="activeChatId"></ChatMessages>
                    <div class="p-5 text-center font-weight-bold" v-else>Please select a Conversation</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/messages.css'
    import ChatList from "./ChatList";
    import ChatMessages from "./ChatMessages";

    export default {
        name: "Messages",
        metaInfo:{
          title: 'Messages'
        },
        components: {ChatMessages, ChatList},
        data: function () {
            return ({
                activeChatId: null,
            })
        },
        computed:{

        }
        ,
        created: function () {

        },
        methods: {
            setActiveChatId: function (chatId) {
                this.activeChatId = chatId;
            }

        }
    }
</script>

<style scoped>

</style>
