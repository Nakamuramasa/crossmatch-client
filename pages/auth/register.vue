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
                    <input
                        type="text"
                        v-model.trim="form.name"
                        name="name"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        placeholder="Full Name"
                    />
                    <has-error :form="form" field="name"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="text"
                        v-model.trim="form.username"
                        name="username"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('username') }"
                        placeholder="Username"
                    />
                    <has-error :form="form" field="username"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="email"
                        v-model.trim="form.email"
                        name="email"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        placeholder="Email"
                    />
                    <has-error :form="form" field="email"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        v-model.trim="form.password"
                        name="password"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                        placeholder="Password"
                    />
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        v-model.trim="form.password_confirmation"
                        name="password_confirmation"
                        class="form-control"
                        placeholder="Confirm Password"
                    />
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            v-model="form.sex"
                            name="sex"
                            value="0"
                            type="radio" id="inlineRadio1"
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
                    <button
                        type="submit"
                        :disabled="form.busy"
                        class="btn submitBtn"
                    >
                        <span v-if="form.busy">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>
                        はじめる
                    </button>
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
