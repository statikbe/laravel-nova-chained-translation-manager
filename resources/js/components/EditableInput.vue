<template>
  <!-- eslint-disable-next-line vue-a11y/label-has-for -->
  <label
    ref="input"
    :for="name"
    :class="{
      'editable-input bg-white dark:bg-gray-800 my-1 px-3 py-1 rounded-lg':
        editing,
    }"
    tabindex="0"
    class="block"
    @focus="handleEdit"
  >
    <span v-if="editing" class="block my-1 leading-tight text-80">
      {{ locale.toUpperCase() }} - {{ translationKey }}
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
      class="flex p-1 transition duration-500 cursor-pointer value hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div class="w-2/12 uppercase">
        {{ locale }}
      </div>
      <div class="w-10/12">
        <template v-if="value">
          <button
            class="flex items-baseline text-primary-500 hover:underline"
            @click="handleEdit"
          >
            <span class="text-left">{{ preview }}</span>
          </button>
        </template>
        <template v-else>
          <button class="flex underline text-primary-500" @click="handleEdit">
            <span class="pr-3 text-left">
              <icon type="add" />
            </span>
            <span class="text-left">
              {{ __("add translation") }}
            </span>
          </button>
        </template>
      </div>
      <icon class="ml-2 text-primary-500" type="edit" />
    </div>
  </label>
</template>

<script>
import EditableInputFieldVue from "./EditableInputField.vue";

/**
 * Returns the text of an HTML string without interpreting it: DOMParser creates an inert document, so no scripts
 * run and no resources (e.g. images) are loaded.
 */
function textContent(html) {
  if (!html) {
    return "";
  }
  const doc = new DOMParser().parseFromString(String(html), "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

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
    preview() {
      // Show the translation as plain text: HTML in a translation is never interpreted, only its text is shown.
      const text = textContent(this.value);
      return text.length > 100 ? `${text.slice(0, 100)}...` : text;
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
@keyframes update {
  0% {
    background-color: #fff;
  }
  25% {
    background-color: #afa;
  }
  100% {
    background-color: #fff;
  }
}

.value > svg {
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
}

.value:hover > svg {
  opacity: 1;
}
.updated {
  animation-name: update;
  animation-duration: 2s;
}
</style>
