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
                        @change="fileSelected"
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
                location_longitude: '',
                location_latitude: ''
            })
        };
    },
    mounted(){
        Object.keys(this.form).forEach(k => {
            if(this.$auth.user.hasOwnProperty(k)){
                this.form[k] = this.$auth.user[k]
            }
        });

        this.form.location_longitude = this.$auth.user.location.coordinates[0];
        this.form.location_latitude = this.$auth.user.location.coordinates[1];
    },
    methods: {
        fileSelected(event){
            this.user_img = event.target.files[0];
        },
        handleAddress(data){
            this.form.formatted_address = data.formatted_address;
            this.form.location_longitude = data.longitude;
            this.form.location_latitude = data.latitude;
        },
        update(){
            const formData = new FormData()
            formData.append('name', this.form.name)
            formData.append('user_img', this.user_img)
            formData.append('about', this.form.about)
            formData.append('formatted_address', this.form.formatted_address)
            formData.set('location_longitude', this.form.location_longitude)
            formData.set('location_latitude', this.form.location_latitude)
            this.$axios.post('/settings/profile', formData)
            .then(res => {
                setTimeout(() => {
                    this.$router.push({ name: 'user.profile' });
                }, 2000);
            }).catch(e => console.log(e));
        },
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_register.scss";
</style>
