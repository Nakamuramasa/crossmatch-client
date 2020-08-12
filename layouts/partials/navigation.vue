<template>
    <div>
        <a class="dropdown-item" href="#" @click.prevent="logout">
            <i class="fa fa-lock"></i>
            Sign Out
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout();
        }
    }
};
</script>
