<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">パスワード変更</h2>

            <form class="form" @submit.prevent="submit">
                <alert-success :form="form">
                    パスワードを変更しました。
                </alert-success>
                <div class="form-group">
                    <base-input
                        :form="form"
                        field="current_password"
                        inputType="password"
                        v-model.trim="form.current_password"
                        placeholder="Current Password"
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
                        placeholder="New Password Confirmation"
                    ></base-input>
                </div>

                <div class="form-group text-center">
                    <base-button :loading="form.busy">
                        パスワード変更
                    </base-button>
                </div>
                <div class="linkToRegister">
                    <nuxt-link to="/user/profile">もどる</nuxt-link>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default{
    middleware: ['auth'],
    data(){
        return {
            form: this.$vform({
                current_password: '',
                password: '',
                password_confirmation: ''
            })
        };
    },
    methods: {
        submit(){
            this.form.put(`/settings/password`)
            .then(res => {
                setTimeout(() => {
                    this.$router.push({ name: 'user.profile' });
                }, 2000);
            }).catch(e => console.log(e));
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
