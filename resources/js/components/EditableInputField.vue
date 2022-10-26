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
      class="trix-content dark:bg-slate-600 dark:border-slate-900 dark:text-white"
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

    <div class="flex items-center justify-end my-3">
      <button
        type="button"
        class="inline-flex items-center justify-center px-3 text-sm font-bold text-gray-400 bg-transparent rounded appearance-none cursor-pointer hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800 focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 h-9"
        @click="cancel"
      >
        <span>
          {{ __("cancel") }}
        </span>
      </button>
      <button
        type="button"
        class="inline-flex items-center flex-shrink-0 px-4 text-sm font-bold text-white rounded shadow focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-sky-500 hover:bg-sky-400 active:bg-sky-600 dark:text-gray-800 h-9"
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
