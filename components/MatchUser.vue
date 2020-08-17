<template>
    <div class="matchingPerson">
        <div class="matchingPerson_img"><img :src="user.user_img.thumbnail"></div>
        <nuxt-link :to="{ name: 'user.detail', params: { id: user.id } }">
            <div class="matchingPerson_name">{{user.name}}</div>
        </nuxt-link>
        <nuxt-link to="/chat" class="chatForm">チャットを開く</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_match.scss";
</style>
