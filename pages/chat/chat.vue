<template>
    <div class="chatPage">
        <header class="header">
            <nuxt-link to="/user/match" class="linkToMatching"></nuxt-link>
            <div class="chatPartner">
                <div>{{ this.recipient_id }}</div>
                <div class="chatPartner_img"><img :src="user.user_img.thumbnail"></div>
                <div class="chatPartner_name">{{ user.name }}</div>
            </div>
        </header>
        <div class="container">
            <div class="messagesArea">
                <ChatMessage
                    v-for="message in messages"
                    :key="message.id"
                    :message="message"
                    @deleted="handleDelete"
                ></ChatMessage>
            </div>
        </div>
        <form class="messageInputForm">
            <div class="container">
                <input type="text" data-behavior="chat_message" class="messageInputForm_input" placeholder="メッセージを入力...">
            </div>
        </form>
    </div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage';
export default {
    middleware: ['auth'],
    components: {ChatMessage},
    props: {
        recipient: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            recipient_id: this.recipient,
            messages: [],
            form: this.$vform({})
        };
    },
    async asyncData({ $axios, params, error, redirect }) {
        try{
            const user = await $axios.$get(`/user/2`);
            return { user: user.data };
        }catch(err){
            if(err.response.status === 404){
                error({ statusCode: 404, message: 'Design not found' });
            }else if(err.response.status === 401) {
                redirect('/login');
            }else{
                error({ statusCode: 500, message: 'Internal server error' });
            }
        }
    },
    created(){
        this.createChat();
    },
    methods: {
        async createChat(){
            const formData = new FormData()
            formData.append('recipient', 2)
            const { data } = await this.$axios.$post('/chats/show', formData);
            this.messages = data;
        },
        handleDelete(id){
            this.message = this.messages.filter(c => c.id !== id);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_chat.scss";
</style>
