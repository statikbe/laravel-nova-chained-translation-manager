<template>
  <label
    ref="input"
    :for="name"
    :class="{
      'bg-primary-50 dark:bg-gray-800 px-5 py-3': editing,
      'px-5 py-2.5': !editing,
    }"
    tabindex="0"
    class="block transition-colors duration-200"
    @focus="handleEdit"
  >
    <span v-if="editing" class="flex items-center gap-2 mb-2">
      <span class="locale-badge">
        {{ locale.toUpperCase() }}
      </span>
      <span class="text-xs text-gray-400 dark:text-gray-500">{{ translationKey }}</span>
    </span>

    <editable-input-field
      v-if="editing"
      :value="value"
      :config="config"
      type="text"
      class="w-full"
      @save="handleSave"
      @cancel="handleCancel"
    />

    <div
      v-else
      :class="{
        updated: translation.updated && translation.updated === locale,
      }"
      class="flex items-center gap-3 transition-all duration-300 rounded-md cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-2 px-2 py-1"
    >
      <span class="locale-badge">
        {{ locale.toUpperCase() }}
      </span>
      <div class="flex-1 min-w-0">
        <template v-if="value">
          <button
            class="text-sm text-left text-gray-700 truncate dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400"
            @click="handleEdit"
          >
            <span
              v-html="
                value.slice(0, 120).replace(/<\/?[^>]+>/gi, ' ') +
                (value.length > 120 ? '...' : '')
              "
            >
            </span>
          </button>
        </template>
        <template v-else>
          <button
            class="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400"
            @click="handleEdit"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            {{ __("Add translation") }}
          </button>
        </template>
      </div>
      <svg
        class="flex-shrink-0 w-4 h-4 text-gray-300 transition-opacity duration-200 opacity-0 group-hover:opacity-100 dark:text-gray-600"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </div>
  </label>
</template>

<script>
import EditableInputFieldVue from "./EditableInputField.vue";

export default {
  components: {
    "editable-input-field": EditableInputFieldVue,
  },
  props: {
    editing: {
      type: Boolean,
      default: false,
    },
    locale: {
      type: String,
      default: "",
    },
    translation: {
      type: Object,
      default: null,
    },
    config: {
      type: Object,
      default: null,
    },
  },
  computed: {
    value() {
      if (this.translation) {
        if (this.translation.translations) {
          return this.translation.translations[this.locale];
        }
      }
      return "";
    },
    name() {
      if (this.translation) {
        if (this.translation.id) {
          return `${this.translation.id}_${this.locale}`;
        }
      }
      return "";
    },
    translationKey() {
      if (this.translation) {
        return this.translation.key;
      }
      return "";
    },
    group() {
      if (this.translation) {
        return this.translation.group;
      }
      return "";
    },
  },
  methods: {
    handleEdit() {
      this.$emit("toggle");
    },
    handleSave(value) {
      this.$emit("submit", {
        group: this.group,
        locale: this.locale,
        key: this.translationKey,
        value,
      });
    },
    handleCancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.locale-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: rgb(var(--colors-primary-600));
  background-color: rgb(var(--colors-primary-50));
  border-radius: 0.375rem;
}

:root.dark .locale-badge {
  color: rgb(var(--colors-primary-400));
  background-color: rgba(var(--colors-primary-500), 0.15);
}

@keyframes update-flash {
  0% { background-color: transparent; }
  15% { background-color: rgba(16, 185, 129, 0.15); }
  100% { background-color: transparent; }
}

.updated {
  animation: update-flash 2s ease-out;
}
</style>
