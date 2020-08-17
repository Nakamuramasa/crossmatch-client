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
                    <MatchUser
                        v-for="user in users"
                        :key="user.id"
                        :user="user"
                    ></MatchUser>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import MatchUser from '@/components/MatchUser';
export default {
    middleware: ['auth'],
    components: {MatchUser},
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
