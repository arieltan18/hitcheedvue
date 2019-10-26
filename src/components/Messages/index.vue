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
                    <ChatMessages :chat-id="activeChatId"></ChatMessages>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PubNub from 'pubnub';
    import '../../assets/css/messages.css'
    import ChatList from "./ChatList";
    import ChatMessages from "./ChatMessages";

    export default {
        name: "Messages",
        components: {ChatMessages, ChatList},
        data: function () {
            return ({
                activeChatId: '123',
                publishKey: 'pub-c-2fdb492a-fa06-4679-8a10-05ef6cac8334',
                subscribeKey: 'sub-c-0da01d2a-f7aa-11e9-8f6e-d28065e14af1'
            })
        }
        ,
        created: function () {
            const {publishKey, subscribeKey} = this;

            this.pubNub = new PubNub({
                publishKey,
                subscribeKey
            });

            this.pubNub.addListener({
                status: function(statusEvent) {
                    if (statusEvent.category === "PNConnectedCategory") {
                        console.log('connected');
                    }
                },
                message: (msg) => {
                    console.log(msg.message.title);
                    console.log(msg.message.description);
                },
                presence: function(presenceEvent) {
                    // handle presence
                    console.log(presenceEvent);
                }
            });

            this.pubNub.subscribe({
                channels: ['hello_world']
            });

            // this.getChats();
        },
        methods: {
            sendMessage: function (){
                this.pubNub.publish({
                    channel : "hello_world",
                    message: {
                        title: "greeting",
                        description: "hello world!"
                    }
                }).then((r, s)=>{
                    console.log(r, s);
                    // alert('sent')
                }).catch(e=>{
                    console.log(e);
                });

            },
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
