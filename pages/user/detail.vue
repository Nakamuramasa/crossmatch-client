<template>
    <div class="usershowPage">
        <div class="container">
            <header class="header">
                <p class="header_logo">
                    <nuxt-link to="/user/reaction">
                        <img src="~assets/images/laravel-match-icon.png">
                    </nuxt-link>
                </p>
            </header>
            <div class="userInfo">
                <div class="userInfo_img">
                    <div v-if="user.user_img">
                        <img :src="user.user_img.thumbnail">
                    </div>
                </div>
                <div class="userInfo_name">{{user.name}}</div>
                <div class="userInfo_address">{{user.formatted_address}}</div>
                <div class="userInfo_selfIntroduction">{{user.about}}</div>
            </div>
            <div class="linkToMatch">
                <nuxt-link to="/user/match">もどる</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    async asyncData({ $axios, params, error, redirect }) {
        try{
            const user = await $axios.$get(`/user/${params.id}`);
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
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_profile.scss";
</style>
