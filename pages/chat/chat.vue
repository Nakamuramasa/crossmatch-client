<template>
    <div class="chatPage">
    <header class="header">
        <nuxt-link to="/user/match" class="linkToMatching"></nuxt-link>
        <div class="chatPartner">
            <div class="chatPartner_img"><img :src="user.user_img.thumbnail"></div>
            <div class="chatPartner_name">{{ user.name }}</div>
        </div>
    </header>
    <div class="container">
        <div class="messagesArea">
            <div class="message" v-for="message in messages" :key="message.id">
                <div class="message_img"><img :src="message.sender.user_img.thumbnail"></div>
                <div class="commonMessage">
                    <div>{{ message.body }}</div>
                </div>
            </div>
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
export default {
    middleware: ['auth'],
    data(){
        return {
            messages: [],
            form: this.$vform({
                recipient: 2
            })
        };
    },
    async asyncData({ $axios, params, error, redirect }) {
        try{
            const user = await $axios.$get(`/user/2`);
            return { user: user.data };
        }catch(err){
            if(err.response.status === 404) {
                error({ statusCode: 404, message: 'ユーザーが存在しません。' });
            }else if(err.response.status === 401){
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
            formData.append('recipient', this.form.recipient)
            const { data } = await this.$axios.$post('/chats/show', formData);
            this.messages = data;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_chat.scss";
</style>
