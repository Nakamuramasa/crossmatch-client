<template>
    <div class="usershowPage">
        <div class="container">
            <header class="header">
                <p class="header_logo">
                    <a href="#">
                        <img src="~assets/images/laravel-match-icon.png">
                    </a>
                </p>
            </header>
            <div class="userInfo">
                <div class="userInfo_img">
                    <img :src="user.user_img.thumbnail">
                </div>
                <div class="userInfo_name">{{user.name}}</div>
                <div class="userInfo_selfIntroduction">{{user.about}}</div>
            </div>
            <div class="userAction">
                <div class="userAction_edit userAction_common">
                    <a href="#"><i class="fas fa-edit fa-2x"></i><span>情報を編集</span></a>
                </div>
                <div class='userAction_logout userAction_common'>
                    <a href="#" @click.prevent="logout">
                        <i class="fas fa-cog fa-2x"></i>
                        <span>ログアウト</span>
                    </a>
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
            user: []
        };
    },
    created(){
        this.fetchUser();
    },
    methods: {
        async fetchUser(){
            const { data } = await this.$axios.$get(
                `/user/${this.$auth.user.id}`
            );
            this.user = data;
        },
        logout(){
            this.$auth.logout();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_profile.scss";
</style>
