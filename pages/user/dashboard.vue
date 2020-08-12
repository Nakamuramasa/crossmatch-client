<template>
    <div class='userAction'>
        <div>
            Dashboard
        </div>
        <div class='userAction_logout userAction_common'>
            <a href="#" @click.prevent="logout">
                <i class="fas fa-cog fa-2x"></i>
                <span>ログアウト</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    methods: {
        logout(){
            this.$auth.logout();
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
