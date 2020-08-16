<template>
    <div>
        <section class="authentication">
            <div class="auth-body text-center">
                <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                    <i class="fas fa-exclamation-triangle"></i>
                    ERROR {{ error.statusCode }}
                </h1>
                <p>{{ error.message }}</p>
                <p class="linkToTop font-14 fw-400 text-center mt-4">
                    <nuxt-link to="/">Top page</nuxt-link>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['error']
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_error.scss";
</style>
