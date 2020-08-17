<template>
    <div class="message">
        <div class="message_img"><img :src="message.sender.user_img.thumbnail"></div>
        <div class="commonMessage">{{ message.body }}</div>
        <span class="pt-5" v-if="$auth.loggedIn && $auth.user.id === message.sender.id">
            <a href="#" @click.prevent="destroyMessage" class="text-danger small">Delete</a>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    methods: {
        destroyMessage(){
            this.$axios
                .delete(`/messages/${this.message.id}`)
                .then(res => this.$emit('deleted', this.message.id))
                .catch(e => console.log(e));
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_chat.scss";
</style>
