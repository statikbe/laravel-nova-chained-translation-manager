<template>
    <checkbox-with-label :checked="checked" @input="handleToggle">
        {{ text }}
    </checkbox-with-label>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            default: null,
        },
        onToggle: {
            type: Function,
            default: null,
        },
    },
    methods: {
        handleToggle() {
            this.onToggle(this.value);
        },
    },
};
</script>
