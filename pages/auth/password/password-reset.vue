<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">パスワードリセット</h2>

            <form class="form" @submit.prevent="submit">
                <alert-success :form="form">
                    {{ status }}
                    <p><nuxt-link to="/login">ログイン画面へ</nuxt-link></p>
                </alert-success>
                <div class="form-group">
                    <base-input
                        :form="form"
                        :readonly="true"
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
                        placeholder="New Password"
                    ></base-input>
                </div>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="password_confirmation"
                        inputType="password"
                        v-model.trim="form.password_confirmation"
                        placeholder="Confirm New Password"
                    ></base-input>
                </div>

                <div class="form-group text-center">
                    <base-button :loading="form.busy">
                        パスワードリセット
                    </base-button>
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
                email: '',
                passowrd: '',
                password_confirmation: '',
                token: ''
            })
        };
    },
    created(){
        this.form.email = this.$route.query.email;
        this.form.token = this.$route.params.token;
    },
    methods: {
        submit(){
            this.form.post('/password/reset')
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
