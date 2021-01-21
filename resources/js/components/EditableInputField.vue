<template>
    <div class="editable-input-field">
        <!-- eslint-disable-next-line vue-a11y/form-has-label -->

        <trix-editor
            v-if="config.editor === 'trix'"
            ref="theEditor"
            @keydown.stop
            @trix-change="handleChange"
            @trix-initialize="initialize"
            @trix-attachment-add="handleAddFile"
            @trix-attachment-remove="handleRemoveFile"
            @trix-file-accept="handleFileAccept"
            :value="value"
            :placeholder="placeholder"
            class="trix-content"
        />

        <textarea
            v-else-if="config.editor === 'textarea'"
            ref="input"
            v-model="input"
            type="text"
            class="w-full form-control form-input form-input-bordered"
        />


        <input
            v-else
            ref="input"
            v-model="input"
            type="text"
            class="w-full form-control form-input form-input-bordered"
        />


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
        placeholder: {
          type: String,
          default: '',
        },
        config: {
          type: Object,
          default: null,
        },
        disabled: {
          type: Boolean,
          default: false
        },
    },
    data() {
        return {
            input: '',
        };
    },
    mounted() {
      this.input = this.value;
      if(this.config.editor !== 'trix'){
          this.$refs.input.select();
      }
    },
    methods: {
        initialize() {
            this.$refs.theEditor.editor.insertHTML(this.value)

            if (this.disabled) {
                this.$refs.theEditor.setAttribute('contenteditable', false)
            }
        },
        handleChange() {
          this.input = this.$refs.theEditor.value;
        },
        handleFileAccept(e) {
            e.preventDefault();
        },
        handleAddFile(event) {
          this.$emit('file-add', event)
        },
        handleRemoveFile(event) {
          this.$emit('file-remove', event)
        },
        save() {
            this.$emit('save', this.input);
        },
        cancel() {
            this.$emit('cancel');
        },
    },
};
</script>
