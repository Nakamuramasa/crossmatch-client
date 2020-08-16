<template>
    <div class="matchingPage">
        <header class="header">
            <i class="fas fa-comments fa-3x"></i>
            <div class="header_logo"><nuxt-link to="/user/reaction"><img src="~assets/images/laravel-match-icon.png"></nuxt-link></div>
        </header>
        <div class="container">
            <div class="mt-5">
                <div class="matchingNum">{{users.length}}人とマッチングしています</div>
                <h2 class="pageTitle">マッチングした人一覧</h2>

                <div class="matchingList">
                    <div class="matchingPerson" v-for="user in users" :key="user.id" :value="user.id">
                        <div class="matchingPerson_img"><img :src="user.user_img.thumbnail"></div>
                        <nuxt-link :to="{ name: 'user.detail', params: { id: user.id } }">
                            <div class="matchingPerson_name">{{user.name}}</div>
                        </nuxt-link>
                        <nuxt-link to="/chat" class="chatForm">チャットを開く</nuxt-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    data(){
        return {
            users: [],
            form: this.$vform({
                recipient: ''
            })
        };
    },
    created(){
        this.matchUser();
    },
    methods: {
        async matchUser(){
            const { data } = await this.$axios.$get("/matching");
            this.users = data;
        },
        submit(){}
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_match.scss";
</style>
