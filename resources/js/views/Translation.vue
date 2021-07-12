<template>
  <loading-view :loading="initialLoading">
    <heading :level="1" class="mb-3">
      {{ __("Translations") }}
    </heading>
    <div class="flex">
      <!-- search -->
      <div class="relative mb-6 h-9 flex-no-shrink">
        <icon type="search" class="absolute ml-3 search-icon-center text-70" />
        <label for="search">
          <input
            v-model="search"
            :placeholder="__('Search text')"
            type="search"
            name="search"
            class="shadow appearance-none form-search w-search pl-search"
          />
        </label>
      </div>
      <!-- only empty checkbox -->
      <checkbox-with-label
        :checked="onlyMissing"
        class="mb-6 ml-3"
        @input="onlyMissing = !onlyMissing"
      >
        {{ __("Only show missing translations") }}
      </checkbox-with-label>
      <!-- select group -->
      <div class="ml-auto">
        <dropdown class="mb-6 rounded bg-30 hover:bg-40">
          <dropdown-trigger class="px-3">
            {{ __("Select group") }}
          </dropdown-trigger>
          <dropdown-menu slot="menu" direction="rtl" width="250">
            <div class="p-4">
              <ul class="list-reset">
                <li class="flex items-center mb-4">
                  <checkbox-with-label
                    :checked="selected.groups.length === groups.length"
                    @input="toggleGroups"
                  >
                    {{ __("Select All") }}
                  </checkbox-with-label>
                </li>
                <li
                  v-for="group in groups"
                  :key="group"
                  class="flex items-center mb-4"
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
        </dropdown>
      </div>
      <!-- select languages -->
      <div class="ml-2">
        <dropdown class="mb-6 rounded bg-30 hover:bg-40">
          <dropdown-trigger class="px-3">
            {{ __("Select languages") }}
          </dropdown-trigger>
          <dropdown-menu slot="menu" direction="rtl" width="250">
            <div class="p-4">
              <ul class="list-reset">
                <li class="flex items-center mb-4">
                  <checkbox-with-label
                    :checked="selected.locales.length === locales.length"
                    @input="toggleLocales"
                  >
                    {{ __("Select All") }}
                  </checkbox-with-label>
                </li>
                <li
                  v-for="l in locales"
                  :key="l.locale"
                  class="flex items-center mb-4"
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
        </dropdown>
      </div>
    </div>
    <!-- translations list -->
    <template v-if="filteredTranslations">
      <card
        v-for="translation in filteredTranslations"
        :key="translation.id"
        class="px-4 py-2 my-2"
      >
        <div class="flex mr-6 font-bold no-underline border-b text-90">
          <div class="w-12/12">
            {{ translation.group.toUpperCase() }} - {{ translation.key }}
          </div>
        </div>
        <div v-if="!selected.locales.length" class="my-3">
          <editable-input
            v-for="locale in locales.map(({ locale }) => locale).sort()"
            :key="locale"
            :locale="locale"
            :translation="translation"
            :editing="field === `${translation.id}_${locale}`"
            @toggle="field = `${translation.id}_${locale}`"
            @submit="submit"
            @cancel="cancel"
          />
        </div>
        <div v-else class="my-3">
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
        </div>
      </card>
    </template>
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
              !this.selected.locales.lentgh ||
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
        // .sort((a, b) => (a.key > b.key ? 1 : -1))
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
      const [id, locale] = this.field.split("_");
      this.$set(
        this.translations.find((t) => t.id === id).translations,
        locale,
        val.value
      );
      this.$set(
        this.translations.find((t) => t.id === id),
        "updated",
        locale
      );
      this.cancel();
    },
    submit(val) {
      if (val && val.value) {
        Nova.request()
          .put("/nova-vendor/translation-manager/translations/", val)
          .then(() => this.updateTranslations(val))
          .catch(() => {
            this.$toasted.show("Something went wrong!", {
              type: "error",
            });
          });
      } else {
        this.field = null;
        this.$toasted.show("A translation string is required", {
          type: "error",
        });
      }
    },
    cancel() {
      this.field = null;
    },
  },
};
</script>
