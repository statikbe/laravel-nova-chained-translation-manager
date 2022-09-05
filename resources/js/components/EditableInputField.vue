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
        class="appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800"
        @click="cancel"
      >
        <span>
          {{ __("cancel") }}
        </span>
      </button>
      <button
        type="button"
        class="shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900"
        @click="save"
      >
        <span>
          {{ __("save") }}
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
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.input = this.value;
    if (this.config.editor !== "trix") {
      this.$refs.input.select();
    }
  },
  methods: {
    initialize() {
      this.$refs.theEditor.editor.insertHTML(this.value);

      if (this.disabled) {
        this.$refs.theEditor.setAttribute("contenteditable", false);
      }
    },
    handleChange() {
      this.input = this.$refs.theEditor.value;
    },
    handleFileAccept(e) {
      e.preventDefault();
    },
    handleAddFile(event) {
      this.$emit("file-add", event);
    },
    handleRemoveFile(event) {
      this.$emit("file-remove", event);
    },
    save() {
      this.$emit("save", this.input);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
