<template>
    <div class="topPage">
        <nav class="nav">
            <ul>
                <li class="personIcon"><nuxt-link to="/user/profile"><i class="fas fa-user fa-2x"></i></nuxt-link></li>
                <li class="appIcon"><a href="#"><img src="~/assets/images/laravel-match-icon.png"></a></li>
                <li class="messageIcon"><nuxt-link to="/user/match"><i class="fas fa-2x fa-comments"></i></nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_reaction.scss";
</style>
