<template>
    <div class="matchingPerson">
        <div class="matchingPerson_img"><img :src="user.user_img.thumbnail"></div>
        <nuxt-link :to="{ name: 'user.detail', params: { id: user.id } }">
            <div class="matchingPerson_name">{{user.name}}</div>
        </nuxt-link>
        <form @submit.prevent="submit">
            <button class="chatForm">チャットを開く</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            form: this.$vform({})
        }
    },
    methods: {
        submit(){
            this.$router
            .push({ name: "chat" , params: { recipient : this.user.id }})
            .catch(error => {
                console.log(error);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_match.scss";
</style>
