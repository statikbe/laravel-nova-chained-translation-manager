<template>
  <loading-view :loading="initialLoading">
    <Head class="mb-3" :title="__('Translations')" />
    <div class="translation-manager">
      <!-- Toolbar -->
      <div class="flex flex-wrap items-center gap-3 mb-6">
        <!-- Search -->
        <div class="relative flex items-center flex-1 min-w-[220px]">
          <icon
            type="search"
            class="absolute ml-3 text-gray-400 dark:text-gray-500"
            style="width: 16px; height: 16px;"
          />
          <input
            v-model="search"
            :placeholder="__('Search translations...')"
            type="search"
            name="search"
            class="w-full py-2 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-lg shadow-sm appearance-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <!-- Only missing toggle -->
        <label
          class="inline-flex items-center gap-2 px-3 py-2 text-sm border rounded-lg cursor-pointer select-none"
          :class="onlyMissing
            ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-750'"
        >
          <input
            type="checkbox"
            v-model="onlyMissing"
            class="sr-only"
          />
          <span
            class="flex items-center justify-center w-4 h-4 border rounded"
            :class="onlyMissing
              ? 'bg-red-500 border-red-500'
              : 'border-gray-300 dark:border-gray-600'"
          >
            <svg v-if="onlyMissing" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {{ __("Missing only") }}
        </label>

        <!-- Filters -->
        <div class="flex items-center gap-2">
          <dropdown class="rounded-lg">
            <dropdown-trigger
              class="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {{ __("Groups") }}
                <span v-if="selected.groups.length && selected.groups.length !== groups.length" class="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full bg-primary-500">
                  {{ selected.groups.length }}
                </span>
              </span>
            </dropdown-trigger>
            <template #menu>
              <dropdown-menu slot="menu" direction="rtl" width="250">
                <div class="p-3">
                  <ul class="space-y-1 list-none">
                    <li class="pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
                      <checkbox-with-label
                        :checked="selected.groups.length === groups.length"
                        @input="toggleGroups"
                      >
                        <span class="font-medium">{{ __("Select All") }}</span>
                      </checkbox-with-label>
                    </li>
                    <li
                      v-for="group in groups"
                      :key="group"
                      class="py-0.5"
                    >
                      <checkbox-input
                        :value="group"
                        :text="group"
                        :checked="selected.groups.includes(group)"
                        :on-toggle="toggleGroups"
                      />
                    </li>
                  </ul>
                </div>
              </dropdown-menu>
            </template>
          </dropdown>

          <dropdown class="rounded-lg">
            <dropdown-trigger
              class="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {{ __("Languages") }}
                <span v-if="selected.locales.length && selected.locales.length !== locales.length" class="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full bg-primary-500">
                  {{ selected.locales.length }}
                </span>
              </span>
            </dropdown-trigger>
            <template #menu>
              <dropdown-menu slot="menu" direction="rtl" width="250">
                <div class="p-3">
                  <ul class="space-y-1 list-none">
                    <li class="pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
                      <checkbox-with-label
                        :checked="selected.locales.length === locales.length"
                        @input="toggleLocales"
                      >
                        <span class="font-medium">{{ __("Select All") }}</span>
                      </checkbox-with-label>
                    </li>
                    <li
                      v-for="l in locales"
                      :key="l.locale"
                      class="py-0.5"
                    >
                      <checkbox-input
                        :value="l.locale"
                        :text="l.language"
                        :checked="selected.locales.includes(l.locale)"
                        :on-toggle="toggleLocales"
                      />
                    </li>
                  </ul>
                </div>
              </dropdown-menu>
            </template>
          </dropdown>
        </div>
      </div>

      <!-- Results count -->
      <div v-if="filteredTranslations" class="flex items-center justify-between mb-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ filteredTranslations.length }} {{ __('translations') }}
        </p>
      </div>

      <!-- Translations list -->
      <template v-if="filteredTranslations">
        <div class="space-y-3">
          <card
            v-for="translation in filteredTranslations"
            :key="translation.id"
            class="overflow-hidden"
          >
            <!-- Card header -->
            <div class="flex items-center px-5 py-3 border-b border-gray-100 bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700">
              <span class="inline-flex items-center px-2 py-0.5 text-xs font-semibold tracking-wide uppercase rounded bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mr-2">
                {{ translation.group }}
              </span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ translation.key }}
              </span>
            </div>
            <!-- Card body -->
            <div class="divide-y divide-gray-50 dark:divide-gray-800">
              <template v-if="!selected.locales.length">
                <editable-input
                  v-for="locale in locales.map(({ locale }) => locale).sort()"
                  :key="locale"
                  :locale="locale"
                  :translation="translation"
                  :editing="field === `${translation.id}_${locale}`"
                  :config="config"
                  @toggle="field = `${translation.id}_${locale}`"
                  @submit="submit"
                  @cancel="cancel"
                />
              </template>
              <template v-else>
                <editable-input
                  v-for="locale in selected.locales.map((locale) => locale).sort()"
                  :key="locale"
                  :locale="locale"
                  :translation="translation"
                  :editing="field === `${translation.id}_${locale}`"
                  :config="config"
                  @toggle="field = `${translation.id}_${locale}`"
                  @submit="submit"
                  @cancel="cancel"
                />
              </template>
            </div>
          </card>
        </div>
      </template>

      <!-- Empty state -->
      <div v-if="filteredTranslations && filteredTranslations.length === 0" class="flex flex-col items-center justify-center py-16">
        <svg class="w-12 h-12 mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <p class="text-sm text-gray-400 dark:text-gray-500">{{ __('No translations found') }}</p>
      </div>
    </div>
  </loading-view>
</template>

<script>
import EditableInputVue from "../components/EditableInput.vue";
import CheckboxInput from "../components/CheckboxInput.vue";

export default {
  components: {
    "editable-input": EditableInputVue,
    "checkbox-input": CheckboxInput,
  },
  props: {
    resourceName: {
      type: String,
      default: "translation",
    },
    singularName: {
      type: String,
      default: "translation",
    },
  },
  data() {
    return {
      initialLoading: true,
      translations: null,
      search: null,
      groups: [],
      locales: [],
      field: null,
      value: null,
      config: [],
      selected: {
        locales: [],
        groups: [],
      },
      onlyMissing: false,
    };
  },
  computed: {
    filteredTranslations() {
      return (
        this.translations &&
        this.translations
          .filter(
            ({ translations, updated }) =>
              !this.onlyMissing ||
              updated ||
              Object.keys(translations).length < this.locales.length
          )
          .filter(
            ({ translations }) =>
              !this.selected.locales.length ||
              !!this.selected.locales.find((locale) => !translations[locale])
          )
          .filter(
            ({ group }) =>
              !this.selected.groups.length ||
              this.selected.groups.includes(this.normalizeGroup(group))
          )
          .filter(this.filterGroup)
          .filter((v) => {
            if (v) {
              const key = v.key.toString();
              const translations = v.translations;
              if (this.search) {
                const keysToSearch = this.selected.locales.length
                  ? this.selected.locales
                  : this.locales.map(({ locale }) => locale);
                return (
                  key.toLowerCase().includes(this.search.toLowerCase()) ||
                  keysToSearch.find(
                    (l) =>
                      translations[l] &&
                      translations[l].toLowerCase &&
                      translations[l]
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                  )
                );
              }
              return true;
            }
          })
      );
    },
    onlyMissingTranslations() {
      const data = this.translations;
      return data.filter(
        ({ translations }) => Object.keys(translations).length < 3
      );
    },
  },
  created() {
    this.getTranslations();
  },
  methods: {
    toggleGroups(group) {
      this.toggle("groups", group);
    },
    toggleLocales(locale) {
      this.toggle("locales", locale);
    },
    toggle(type, val) {
      if (typeof val !== "string") {
        if (this.selected[type].length === this[type].length) {
          this.selected[type] = [];
        } else {
          this.selected[type] = this[type]
            .map((v) => (v.locale ? v.locale : v))
            .sort();
        }
      } else if (this.selected[type].includes(val)) {
        this.selected[type] = this.selected[type].filter(
          (item) => item !== val
        );
      } else {
        this.selected[type] = [...this.selected[type], val].sort();
      }
    },
    normalizeGroup(group = "") {
      return group.split("/")[0];
    },
    filterGroup(val = "") {
      return val.group
        ? this.normalizeGroup(val.group) !== "single"
        : this.normalizeGroup(val) !== "single";
    },
    getTranslations() {
      Nova.request()
        .get("/nova-vendor/translation-manager/translations", {
          params: { group: this.group, search: this.search },
        })
        .then(({ data: { groups, languages, config, translations } }) => {
          this.groups = groups
            .map(this.normalizeGroup)
            .filter(this.filterGroup)
            .reduce((a, b) => (a.includes(b) ? a : [...a, b]), []);
          this.locales = languages;
          this.config = config;
          this.translations = translations && translations.data;
        })
        .then(!this.selected.locales.length && this.toggleLocales)
        .then(!this.selected.groups.length && this.toggleGroups)
        .then(() => {
          this.initialLoading = false;
        });
    },
    updateTranslations(val) {
      const [id, locale] = this.field.split(/_(.*)/s);
      const index = this.translations.findIndex((t) => t.id === id);
      this.translations[index].translations[locale] = val.value;
      this.translations[index].updated = locale;

      let translationIndex = this.translations.findIndex((t) => t.id === id);
      this.translations[translationIndex].translations[locale] = val.value;
      this.translations[translationIndex].updated = locale;

      Nova.success(this.__("Updated"));

      this.cancel();
    },
    submit(val) {
      if (val && val.value) {
        val['_method'] = 'PUT';

        Nova.request()
          .post("/nova-vendor/translation-manager/translations", val)
          .then(() => this.updateTranslations(val))
          .catch((error) => {
            Nova.error(this.__("Something went wrong!"));
          });
      } else {
        this.field = null;
        Nova.error(this.__("A translation string is required"));
      }
    },
    cancel() {
      this.field = null;
    },
  },
};
</script>
