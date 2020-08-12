<template>
    <button
        :type="nativeType"
        :disabled="loading"
        :class="type"
    >
        <span v-if="loading">
            <i class="fas fa-spinner fa-spin"></i>
        </span>
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'base-button',
    props: {
        type: {
            type: String,
            default: 'loginBtn'
        },
        nativeType: {
            type: String,
            default: 'submit'
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>
