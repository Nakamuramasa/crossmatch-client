<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">認証メールの再送信</h2>

            <form class="form" @submit.prevent="submit">
                <alert-error v-if="form.errors.has('message')" :form="form">
                    {{ form.errors.get('message') }}
                </alert-error>
                <alert-success :form="form">
                    We have resend verification email
                </alert-success>
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
                email: ''
            })
        };
    },
    methods: {
        submit(){
            this.form.post(`/verification/resend`)
            .then(res => this.form.reset())
            .catch(e => console.log(e));
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
