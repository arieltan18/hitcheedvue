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
                    <ChatMessages :key="setActiveChatId" :chat-id="activeChatId"></ChatMessages>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/messages.css'
    import ChatList from "./ChatList";
    import ChatMessages from "./ChatMessages";
    import chatkit from '../../chatkit'

    export default {
        name: "Messages",
        components: {ChatMessages, ChatList},
        data: function () {
            return ({
                activeChatId: '123',
            })
        }
        ,
        created: function () {

            this.chatManager = chatkit.connectUser('user-9818');

            this.chatManager.then(user=>{
                console.log(user);
            }).catch(e=>{
                console.log('error', e)
            })
        },
        methods: {
            getChats: function () {
                const [chat] = this.chats;
                if(chat) {
                    this.setActiveChatId(chat.id)
                }
            },
            setActiveChatId: function (chatId) {
                this.activeChatId = chatId;
            }

        }
    }
</script>

<style scoped>

</style>
