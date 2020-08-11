<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">アカウント認証</h2>
            <form class="form">
                <div class="form-group" v-if="success">
                    <div class="alert alert-success">
                        {{ status }}
                    </div>
                    <div class="linkToRegister">
                        <nuxt-link to="/login">ログインはこちら</nuxt-link>
                    </div>
                </div>
                <div class="form-group" v-else>
                    <div class="alert alert-danger">
                        {{ status }}
                    </div>
                    <div class="linkToRegister">
                        <nuxt-link to="/verification/resend">メールの再送信</nuxt-link>
                    </div>
                    <div class="linkToRegister">
                        <nuxt-link to="/login">ログインはこちら</nuxt-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
     async asyncData({ params, query, app }){
        const q = Object.keys(query)
            .map(k => `${k}=${query[k]}`)
            .join('&');
        try{
            const { data } = await app.$axios.post(
                `verification/verify/${params.id}?${q}`
            );
            return { success: true, status: data.message };
        }catch(e){
            return { success: false, status: e.response.data.errors.message };
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
