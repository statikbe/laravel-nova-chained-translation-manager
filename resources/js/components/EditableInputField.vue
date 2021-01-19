<template>
    <div class="editable-input-field">
        <!-- eslint-disable-next-line vue-a11y/form-has-label -->
<!--        <input-->
<!--            ref="input"-->
<!--            v-model="input"-->
<!--            type="text"-->
<!--            class="w-full form-control form-input form-input-bordered"-->
<!--        />-->

        <trix-editor v-model="input" ref="input" />
        <div class="flex justify-end items-center my-3">
            <button
                type="button"
                class="btn btn-link dim cursor-pointer text-80 mr-6"
                @click="cancel"
            >
                <span>
                    {{ __('cancel') }}
                </span>
            </button>
            <button
                type="button"
                class="btn btn-default btn-primary inline-flex items-center relative"
                @click="save"
            >
                <span>
                    {{ __('save') }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            input: '',
        };
    },
    mounted() {
        // this.$refs.input.select();
        this.input = this.value;
    },
    methods: {
        save() {
            this.$emit('save', this.input);
        },
        cancel() {
            this.$emit('cancel');
        },
    },
};
</script>
