<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">パスワードリセット</h2>

            <form class="form" @submit.prevent="submit">
                <alert-success :form="form">{{ status }}</alert-success>
                <div class="form-group">
                    <base-input
                        :form="form"
                        field="email"
                        v-model.trim="form.email"
                        placeholder="Email"
                    ></base-input>
                </div>

                <div class="form-group text-center">
                    <base-button :loading="form.busy">
                        送信
                    </base-button>
                </div>
                <div class="linkToRegister">
                    <nuxt-link to="/login">ログイン画面へ戻る</nuxt-link>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    middleware: ['guest'],
    data(){
        return {
            status: '',
            form: this.$vform({
                email: ''
            })
        };
    },
    methods: {
        submit(){
            this.form.post('/password/email')
            .then(res => {
                this.status = res.data.status;
                this.form.reset();
            }).catch(e => {
                console.log(e);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
