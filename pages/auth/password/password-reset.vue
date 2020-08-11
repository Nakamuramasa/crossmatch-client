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
                    <input
                        type="email"
                        name="email"
                        readonly
                        v-model.trim="form.email"
                        class="form-control"
                        :class="{'is-invalid' :form.errors.has('email')}"
                        placeholder="Email"
                    />
                    <has-error :form="form" field="email"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        name="password"
                        v-model.trim="form.password"
                        class="form-control"
                        :class="{'is-invalid' :form.errors.has('password')}"
                        placeholder="New Password"
                    />
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        name="password_confirmation"
                        v-model.trim="form.password_confirmation"
                        class="form-control"
                        placeholder="Confirm New Password"
                    />
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
                        パスワードリセット
                    </button>
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
