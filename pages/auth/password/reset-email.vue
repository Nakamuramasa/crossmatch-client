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
                    <input
                        type="email"
                        v-model.trim="form.email"
                        name="email"
                        class="form-control"
                        :class="{'is-invalid' :form.errors.has('email')}"
                        placeholder="Email"
                    />
                    <has-error :form="form" field="email"></has-error>
                </div>

                <div class="form-group text-center">
                    <button
                        type="submit"
                        :disabled="form.busy"
                        class="loginBtn"
                    >
                        <span v-if="form.busy">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>
                        送信
                    </button>
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
