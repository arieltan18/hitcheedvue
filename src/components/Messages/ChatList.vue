<template>
    <div class="chat-list">
        <ChatHeading style="justify-content: space-between">
            <b-checkbox v-show="chats.length" v-model="allSelected" @change="toggleSelectAll"></b-checkbox>
            <b-button v-show="selectedChatIds.length" @click="deleteSelectedRooms" class="delete-button" variant="outline-muted"><i class="fa fa-trash"></i></b-button>
        </ChatHeading>
        <div v-if="chats.length">
             <ChatListItem v-for="chat of chats" v-bind:key="chat.id" @select="toggleSelect(chat.id)" @click="changeActiveChatId(chat.id)" :selected="selectedChatIds" :active="chat.id === activeChatId" :chat="chat"></ChatListItem>
        </div>
        <div v-else-if="isLoading" class="text-center font-weight-bolder p-2"> <i class="fa fa-spinner fa-spin"></i> Loading Conversations...</div>
        <div v-else class="text-center font-weight-bolder p-2">No conversations</div>
    </div>
</template>

<script>
    import ChatListItem from "./ChatListItem";
    import ChatHeading from "./ChatHeading";
    import Chatkit from "../../services/Chatkit";

    export default {
        name: "ChatList",
        components: {ChatHeading, ChatListItem},
        props: ['active-chat-id'],
        data(){
          return {
              selectedChatIds:[],
              allSelected: false,
          }
        },
        computed: {
            chats(){
                return this.$store.getters.getChats;
            },

            isLoading(){
                return this.$store.getters.isMessagesLoading;
            }
        },
        watch:{
            chats:function () {
                if(!this.activeChatId && this.chats.length > 0){
                    this.changeActiveChatId(this.chats[0].id)
                }
            }
        },
        created: function(){
            if(!this.activeChatId && this.chats.length > 0){
                this.changeActiveChatId(this.chats[0].id)
            }
        },
        methods:{
            changeActiveChatId: function (chatId) {
                this.$emit('changeActiveChatId', chatId)
            },
            toggleSelect(chatId){
                const selectedChats = [...this.selectedChatIds];
                const index = selectedChats.findIndex(c=>c === chatId);
                if(index >= 0){
                    selectedChats.splice(index, 1);
                }else{
                    selectedChats.push(chatId);
                }
                this.selectedChatIds = selectedChats;

                this.allSelected = selectedChats.length === this.chats.length;
            },
            toggleSelectAll(){
                if(this.allSelected){
                    this.selectedChatIds = [];
                }else{
                    this.selectedChatIds = this.chats.map(c=>c.id);
                }
                this.allSelected = !this.allSelected;
            },
            deleteSelectedRooms(){


                this.$bvModal.msgBoxConfirm(`Are you sure you want to delete selected ${this.selectedChatIds.length} chats?`, {title: 'Delete Chat'})
                    .then(confirmed => {
                        if(confirmed){
                            this.selectedChatIds.forEach((roomId)=>{
                                Chatkit.leaveRoom(roomId);
                            });

                            if(this.selectedChatIds.includes(this.activeChatId)){
                                this.$emit('changeActiveChatId', null);
                            }

                            this.selectedChatIds = [];
                        }
                    })
                    .catch(() => {})
            }
        },
    }
</script>

<style scoped>
    .chat-list{
    }

    .delete-button{
        color: #ccc;
        border-color: #ccc;
    }
</style>
