<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">ログイン</h2>

            <form class="form" @submit.prevent="submit">
                <alert-error v-if="form.errors.has('message')" :form="form">
                    {{ form.errors.get('message') }}
                    <nuxt-link to="/verification/resend">Resend verification email</nuxt-link>
                </alert-error>
                <div class="form-group">
                    <base-input
                        :form="form"
                        field="email"
                        v-model.trim="form.email"
                        placeholder="Email"
                    ></base-input>
                </div>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="password"
                        inputType="password"
                        v-model.trim="form.password"
                        placeholder="Password"
                    ></base-input>
                </div>

                <div class="form-group text-center">
                    <base-button :loading="form.busy">
                        ログイン
                    </base-button>
                </div>
                <div class="linkToRegister">
                    <nuxt-link to="/register">アカウント作成はこちら</nuxt-link>
                </div>
                <div class="text-center">
                    <nuxt-link to="/password/email">パスワードを忘れた</nuxt-link>
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
            form: this.$vform({
                email: '',
                password: ''
            })
        }
    },
    methods: {
        submit(){
            this.$auth.loginWith('local', {
                data: this.form
            }).then(res => {
                console.log(res);
            }).catch(e => {
                this.form.errors.set(e.response.data.errors);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
