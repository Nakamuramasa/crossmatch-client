<template>
    <div class="signupPage">
        <header class="header">
            <div>プロフィールを編集</div>
        </header>
        <div class='container'>

            <form class="form mt-5" @submit.prevent="update">
                <label for="file_photo" class="rounded-circle userProfileImg">
                    <div class="userProfileImg_description">画像をアップロード</div>
                    <i class="fas fa-camera fa-3x"></i>
                    <input
                        type="file"
                        v-on:change="fileSelected"
                        id="file_photo"
                        name="user_img"
                    />
                </label>

                <div class="userImgPreview" id="userImgPreview">
                    <img id="thumbnail" class="userImgPreview_content">
                </div>

                <alert-success :form="form">
                    ユーザープロフィールを更新しました。
                </alert-success>

                <div class="form-group">
                    <base-input
                        :form="form"
                        field="name"
                        v-model="form.name"
                        placeholder="Full Name"
                    ></base-input>
                </div>

                <div class="form-group">
                    <base-gmap
                        :initialValue="form.formatted_address"
                        @address-response="handleAddress"
                    ></base-gmap>
                </div>

                <div class="form-group">
                    <base-textarea
                        :form="form"
                        field="about"
                        :rows=4
                        v-model="form.about"
                        placeholder="Please enter enter some information about yourself"
                    ></base-textarea>
                </div>

                <div class="text-center">
                    <base-button :loading="form.busy" type="btn submitBtn">
                        変更する
                    </base-button>
                    <div class="linkToLogin">
                        <nuxt-link to="/user/profile">もどる</nuxt-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    data(){
        return {
            user_img: '',
            form: this.$vform({
                name: '',
                about: '',
                formatted_address: '',
                location: {},
            })
        };
    },
    mounted(){
        Object.keys(this.form).forEach(k => {
            if(this.$auth.user.hasOwnProperty(k)){
                this.form[k] = this.$auth.user[k]
            }
        });

        this.form.location = {
            longitude: this.$auth.user.location.coordinates[0],
            latitude: this.$auth.user.location.coordinates[1]
        }
    },
    methods: {
        fileSelected(event){
            this.user_img = event.target.files[0];
        },
        handleAddress(data){
            this.form.formatted_address = data.formatted_address;
            this.form.location.latitude = data.latitude;
            this.form.location.longitude = data.longitude;
        },
        update(){},
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_register.scss";
</style>
