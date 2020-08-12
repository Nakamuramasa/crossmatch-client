<template>
    <div class="signupPage">
        <header class="header">
            <div>アカウントを作成</div>
        </header>
        <div class='container'>

            <form class="mt-5" @submit.prevent="submit">
                <label for="file_photo" class="rounded-circle userProfileImg">
                    <div class="userProfileImg_description">画像をアップロード</div>
                    <i class="fas fa-camera fa-3x"></i>
                    <input
                        type="file"
                        id="file_photo"
                        name="user_img"
                    />
                </label>

                <div class="userImgPreview" id="userImgPreview">
                    <img id="thumbnail" class="userImgPreview_content">
                    <p class="userImgPreview_text">画像をアップロード済み</p>
                </div>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="name"
                        v-model.trim="form.name"
                        placeholder="Full Name"
                    ></base-input>
                </div>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="username"
                        v-model.trim="form.username"
                        placeholder="Username"
                    ></base-input>
                </div>

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

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="password_confirmation"
                        inputType="password"
                        v-model.trim="form.password_confirmation"
                        placeholder="Confirm Password"
                    ></base-input>
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            v-model="form.sex"
                            name="sex"
                            value="0"
                            type="radio"
                            id="inlineRadio1"
                        />
                        <label class="form-check-label" for="inlineRadio1">男</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            v-model="form.sex"
                            name="sex"
                            value="1"
                            type="radio"
                            id="inlineRadio2"
                        />
                        <label class="form-check-label" for="inlineRadio2">女</label>
                    </div>
                </div>

                <div class="text-center">
                    <base-button :loading="form.busy" type="btn submitBtn">
                        はじめる
                    </base-button>
                    <div class="linkToLogin">
                        <nuxt-link to="/login">ログインはこちら</nuxt-link>
                    </div>
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
                username: '',
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                sex: 0,
            })
        }
    },
    methods: {
        submit(){
            this.form.post(`/register`)
                .then(res => {
                    this.form.reset();
                }).catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_register.scss";
</style>
