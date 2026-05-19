<template>
  <div class="editable-input-field">
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
      rows="3"
      class="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm form-control dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      @keydown.meta.enter="save"
      @keydown.ctrl.enter="save"
      @keydown.esc="cancel"
    />

    <input
      v-else
      ref="input"
      v-model="input"
      type="text"
      class="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm form-control dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      @keydown.enter="save"
      @keydown.esc="cancel"
    />

    <div class="flex items-center justify-end gap-2 mt-3">
      <span class="mr-auto text-xs text-gray-400 dark:text-gray-600">
        <template v-if="config.editor !== 'textarea'">
          Enter {{ __('to save') }}
        </template>
        <template v-else>
          ⌘+Enter {{ __('to save') }}
        </template>
      </span>
      <button
        type="button"
        class="px-3 py-1.5 text-sm text-gray-500 transition-colors rounded-md hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
        @click="cancel"
      >
        {{ __("Cancel") }}
      </button>
      <button
        type="button"
        class="px-4 py-1.5 text-sm font-medium text-white transition-colors rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-800"
        @click="save"
      >
        {{ __("Save") }}
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
