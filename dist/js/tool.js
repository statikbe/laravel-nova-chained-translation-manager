/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    checked: {
      type: Boolean,
      "default": false
    },
    value: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    onToggle: {
      type: Function,
      "default": null
    }
  },
  methods: {
    handleToggle: function handleToggle() {
      this.onToggle(this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditableInputField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableInputField.vue */ "./resources/js/components/EditableInputField.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "editable-input-field": _EditableInputField_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    editing: {
      type: Boolean,
      "default": false
    },
    locale: {
      type: String,
      "default": ""
    },
    translation: {
      type: Object,
      "default": null
    },
    config: {
      type: Object,
      "default": null
    }
  },
  computed: {
    value: function value() {
      if (this.translation) {
        if (this.translation.translations) {
          return this.translation.translations[this.locale];
        }
      }

      return "";
    },
    name: function name() {
      if (this.translation) {
        if (this.translation.id) {
          return "".concat(this.translation.id, "_").concat(this.locale);
        }
      }

      return "";
    },
    translationKey: function translationKey() {
      if (this.translation) {
        return this.translation.key;
      }

      return "";
    },
    group: function group() {
      if (this.translation) {
        return this.translation.group;
      }

      return "";
    }
  },
  methods: {
    handleEdit: function handleEdit() {
      this.$emit("toggle");
    },
    handleSave: function handleSave(value) {
      this.$emit("submit", {
        group: this.group,
        locale: this.locale,
        key: this.translationKey,
        value: value
      });
    },
    handleCancel: function handleCancel() {
      this.$emit("cancel");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: String,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": ""
    },
    config: {
      type: Object,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      input: ""
    };
  },
  mounted: function mounted() {
    this.input = this.value;

    if (this.config.editor !== "trix") {
      this.$refs.input.select();
    }
  },
  methods: {
    initialize: function initialize() {
      this.$refs.theEditor.editor.insertHTML(this.value);

      if (this.disabled) {
        this.$refs.theEditor.setAttribute("contenteditable", false);
      }
    },
    handleChange: function handleChange() {
      this.input = this.$refs.theEditor.value;
    },
    handleFileAccept: function handleFileAccept(e) {
      e.preventDefault();
    },
    handleAddFile: function handleAddFile(event) {
      this.$emit("file-add", event);
    },
    handleRemoveFile: function handleRemoveFile(event) {
      this.$emit("file-remove", event);
    },
    save: function save() {
      this.$emit("save", this.input);
    },
    cancel: function cancel() {
      this.$emit("cancel");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_EditableInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EditableInput.vue */ "./resources/js/components/EditableInput.vue");
/* harmony import */ var _components_CheckboxInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CheckboxInput.vue */ "./resources/js/components/CheckboxInput.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "editable-input": _components_EditableInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "checkbox-input": _components_CheckboxInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    resourceName: {
      type: String,
      "default": "translation"
    },
    singularName: {
      type: String,
      "default": "translation"
    }
  },
  data: function data() {
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
        groups: []
      },
      onlyMissing: false
    };
  },
  computed: {
    filteredTranslations: function filteredTranslations() {
      var _this = this;

      return this.translations && this.translations.filter(function (_ref) {
        var translations = _ref.translations,
            updated = _ref.updated;
        return !_this.onlyMissing || updated || Object.keys(translations).length < _this.locales.length;
      }).filter(function (_ref2) {
        var translations = _ref2.translations;
        return !_this.selected.locales.lentgh || !!_this.selected.locales.find(function (locale) {
          return !translations[locale];
        });
      }).filter(function (_ref3) {
        var group = _ref3.group;
        return !_this.selected.groups.length || _this.selected.groups.includes(_this.normalizeGroup(group));
      }).filter(this.filterGroup).filter(function (v) {
        if (v) {
          var key = v.key.toString();
          var translations = v.translations;

          if (_this.search) {
            var keysToSearch = _this.selected.locales.length ? _this.selected.locales : _this.locales.map(function (_ref4) {
              var locale = _ref4.locale;
              return locale;
            });
            return key.toLowerCase().includes(_this.search.toLowerCase()) || keysToSearch.find(function (l) {
              return translations[l] && translations[l].toLowerCase && translations[l].toLowerCase().includes(_this.search.toLowerCase());
            });
          }

          return true;
        }
      }) // .sort((a, b) => (a.key > b.key ? 1 : -1))
      ;
    },
    onlyMissingTranslations: function onlyMissingTranslations() {
      var data = this.translations;
      return data.filter(function (_ref5) {
        var translations = _ref5.translations;
        return Object.keys(translations).length < 3;
      });
    }
  },
  created: function created() {
    this.getTranslations();
  },
  methods: {
    toggleGroups: function toggleGroups(group) {
      this.toggle("groups", group);
    },
    toggleLocales: function toggleLocales(locale) {
      this.toggle("locales", locale);
    },
    toggle: function toggle(type, val) {
      if (typeof val !== "string") {
        if (this.selected[type].length === this[type].length) {
          this.selected[type] = [];
        } else {
          this.selected[type] = this[type].map(function (v) {
            return v.locale ? v.locale : v;
          }).sort();
        }
      } else if (this.selected[type].includes(val)) {
        this.selected[type] = this.selected[type].filter(function (item) {
          return item !== val;
        });
      } else {
        this.selected[type] = [].concat(_toConsumableArray(this.selected[type]), [val]).sort();
      }
    },
    normalizeGroup: function normalizeGroup() {
      var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return group.split("/")[0];
    },
    filterGroup: function filterGroup() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return val.group ? this.normalizeGroup(val.group) !== "single" : this.normalizeGroup(val) !== "single";
    },
    getTranslations: function getTranslations() {
      var _this2 = this;

      Nova.request().get("/nova-vendor/translation-manager/translations", {
        params: {
          group: this.group,
          search: this.search
        }
      }).then(function (_ref6) {
        var _ref6$data = _ref6.data,
            groups = _ref6$data.groups,
            languages = _ref6$data.languages,
            config = _ref6$data.config,
            translations = _ref6$data.translations;
        _this2.groups = groups.map(_this2.normalizeGroup).filter(_this2.filterGroup).reduce(function (a, b) {
          return a.includes(b) ? a : [].concat(_toConsumableArray(a), [b]);
        }, []);
        _this2.locales = languages;
        _this2.config = config;
        _this2.translations = translations && translations.data;
      }).then(!this.selected.locales.length && this.toggleLocales).then(!this.selected.groups.length && this.toggleGroups).then(function () {
        _this2.initialLoading = false;
      });
    },
    updateTranslations: function updateTranslations(val) {
      var _this$field$split = this.field.split("_"),
          _this$field$split2 = _slicedToArray(_this$field$split, 2),
          id = _this$field$split2[0],
          locale = _this$field$split2[1];

      Nova.success("Updated");
      var translationIndex = this.translations.findIndex(function (t) {
        return t.id === id;
      });
      this.translations[translationIndex].translations[locale] = val.value;
      this.translations[translationIndex].updated = locale;
      this.cancel();
    },
    submit: function submit(val) {
      var _this3 = this;

      if (val && val.value) {
        Nova.request().put("/nova-vendor/translation-manager/translations/", val).then(function () {
          return _this3.updateTranslations(val);
        })["catch"](function (error) {
          Nova.error("Something went wrong!");
        });
      } else {
        this.field = null;
        Nova.error("A translation string is required");
      }
    },
    cancel: function cancel() {
      this.field = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_checkbox_with_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("checkbox-with-label");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_checkbox_with_label, {
    checked: $props.checked,
    onInput: $options.handleToggle
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["checked", "onInput"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7473a06b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = ["for"];
var _hoisted_2 = {
  key: 0,
  "class": "block my-1 leading-tight text-80"
};
var _hoisted_3 = {
  "class": "w-2/12 uppercase"
};
var _hoisted_4 = {
  "class": "w-10/12"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "pr-3 text-left"
};
var _hoisted_7 = {
  "class": "text-left"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_editable_input_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editable-input-field");

  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" eslint-disable-next-line vue-a11y/label-has-for "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    ref: "input",
    "for": $options.name,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'editable-input bg-white dark:bg-gray-800 my-1 px-3 py-1 rounded-lg': $props.editing
    }, "block"]),
    tabindex: "0",
    onFocus: _cache[2] || (_cache[2] = function () {
      return $options.handleEdit && $options.handleEdit.apply($options, arguments);
    })
  }, [$props.editing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale.toUpperCase()) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.translationKey), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_editable_input_field, {
    key: 1,
    value: $options.value,
    config: $props.config,
    type: "text",
    "class": "w-full",
    onSave: $options.handleSave,
    onCancel: $options.handleCancel
  }, null, 8
  /* PROPS */
  , ["value", "config", "onSave", "onCancel"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      updated: $props.translation.updated && $props.translation.updated === $props.locale
    }, "flex p-1 transition duration-500 cursor-pointer value hover:bg-gray-100 dark:hover:bg-gray-700"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$options.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "flex items-baseline text-primary-500 hover:underline",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleEdit && $options.handleEdit.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-left",
    innerHTML: $options.value.slice(0, 100).replace(/<\/?[^>]+>/gi, ' ') + ($options.value.length > 100 ? '...' : '')
  }, null, 8
  /* PROPS */
  , _hoisted_5)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "flex text-primary-500 underline",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleEdit && $options.handleEdit.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
    type: "add"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("add translation")), 1
  /* TEXT */
  )]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
    "class": "ml-2 text-primary-500",
    type: "edit"
  })], 2
  /* CLASS */
  ))], 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_1)], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "editable-input-field"
};
var _hoisted_2 = {
  "class": "flex justify-end items-center my-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_trix_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trix-editor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" eslint-disable-next-line vue-a11y/form-has-label "), $props.config.editor === 'trix' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_trix_editor, {
    key: 0,
    ref: "theEditor",
    onKeydown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"])),
    onTrixChange: $options.handleChange,
    onTrixInitialize: $options.initialize,
    onTrixAttachmentAdd: $options.handleAddFile,
    onTrixAttachmentRemove: $options.handleRemoveFile,
    onTrixFileAccept: $options.handleFileAccept,
    value: $props.value,
    placeholder: $props.placeholder,
    "class": "trix-content"
  }, null, 8
  /* PROPS */
  , ["onTrixChange", "onTrixInitialize", "onTrixAttachmentAdd", "onTrixAttachmentRemove", "onTrixFileAccept", "value", "placeholder"])) : $props.config.editor === 'textarea' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    key: 1,
    ref: "input",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.input = $event;
    }),
    type: "text",
    "class": "w-full form-control form-input form-input-bordered"
  }, null, 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.input]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 2,
    ref: "input",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.input = $event;
    }),
    type: "text",
    "class": "w-full form-control form-input form-input-bordered"
  }, null, 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.input]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.cancel && $options.cancel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("cancel")), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-4 h-9 text-sm flex-shrink-0",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.save && $options.save.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("save")), 1
  /* TEXT */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "translation-manager"
};
var _hoisted_2 = {
  "class": "flex"
};
var _hoisted_3 = {
  "class": "relative mb-6 h-9 flex-no-shrink flex items-center"
};
var _hoisted_4 = {
  "for": "search"
};
var _hoisted_5 = ["placeholder"];
var _hoisted_6 = {
  "class": "ml-auto"
};
var _hoisted_7 = {
  "class": "p-4"
};
var _hoisted_8 = {
  "class": "list-reset"
};
var _hoisted_9 = {
  "class": "flex items-center mb-4"
};
var _hoisted_10 = {
  "class": "ml-2"
};
var _hoisted_11 = {
  "class": "p-4"
};
var _hoisted_12 = {
  "class": "list-reset"
};
var _hoisted_13 = {
  "class": "flex items-center mb-4"
};
var _hoisted_14 = {
  "class": "flex mr-6 font-bold no-underline border-b text-90"
};
var _hoisted_15 = {
  "class": "w-12/12"
};
var _hoisted_16 = {
  key: 0,
  "class": "my-3"
};
var _hoisted_17 = {
  key: 1,
  "class": "my-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  var _component_checkbox_with_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("checkbox-with-label");

  var _component_dropdown_trigger = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dropdown-trigger");

  var _component_checkbox_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("checkbox-input");

  var _component_dropdown_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dropdown-menu");

  var _component_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dropdown");

  var _component_editable_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editable-input");

  var _component_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card");

  var _component_loading_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loading-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loading_view, {
    loading: $data.initialLoading
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
        "class": "mb-3",
        title: _ctx.__('Translations')
      }, null, 8
      /* PROPS */
      , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
        type: "search",
        "class": "absolute ml-1 search-icon-center text-70"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.search = $event;
        }),
        placeholder: _ctx.__('Search text'),
        type: "search",
        name: "search",
        "class": "shadow appearance-none form-search w-search pl-search p-2 pl-8 rounded-md"
      }, null, 8
      /* PROPS */
      , _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" only empty checkbox "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_checkbox_with_label, {
        checked: $data.onlyMissing,
        "class": "mb-6 ml-3",
        onInput: _cache[1] || (_cache[1] = function ($event) {
          return $data.onlyMissing = !$data.onlyMissing;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("Only show missing translations")), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" select group "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown, {
        "class": "mb-6 rounded bg-30 hover:bg-40"
      }, {
        menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown_menu, {
            slot: "menu",
            direction: "rtl",
            width: "250"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_checkbox_with_label, {
                checked: $data.selected.groups.length === $data.groups.length,
                onInput: $options.toggleGroups
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("Select All")), 1
                  /* TEXT */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["checked", "onInput"])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.groups, function (group) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: group,
                  "class": "flex items-center mb-4"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_checkbox_input, {
                  value: group,
                  text: group,
                  checked: $data.selected.groups.includes(group),
                  "on-toggle": $options.toggleGroups
                }, null, 8
                /* PROPS */
                , ["value", "text", "checked", "on-toggle"])]);
              }), 128
              /* KEYED_FRAGMENT */
              ))])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown_trigger, {
            "class": "px-3"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("Select group")), 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" select languages "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown, {
        "class": "mb-6 rounded bg-30 hover:bg-40"
      }, {
        menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown_menu, {
            slot: "menu",
            direction: "rtl",
            width: "250"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_checkbox_with_label, {
                checked: $data.selected.locales.length === $data.locales.length,
                onInput: $options.toggleLocales
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("Select All")), 1
                  /* TEXT */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["checked", "onInput"])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.locales, function (l) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: l.locale,
                  "class": "flex items-center mb-4"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_checkbox_input, {
                  value: l.locale,
                  text: l.language,
                  checked: $data.selected.locales.includes(l.locale),
                  "on-toggle": $options.toggleLocales
                }, null, 8
                /* PROPS */
                , ["value", "text", "checked", "on-toggle"])]);
              }), 128
              /* KEYED_FRAGMENT */
              ))])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown_trigger, {
            "class": "px-3"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__("Select languages")), 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" translations list "), $options.filteredTranslations ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredTranslations, function (translation) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card, {
          key: translation.id,
          "class": "px-4 py-2 my-2"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(translation.group.toUpperCase()) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(translation.key), 1
            /* TEXT */
            )]), !$data.selected.locales.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.locales.map(function (_ref) {
              var locale = _ref.locale;
              return locale;
            }).sort(), function (locale) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_editable_input, {
                key: locale,
                locale: locale,
                translation: translation,
                editing: $data.field === "".concat(translation.id, "_").concat(locale),
                onToggle: function onToggle($event) {
                  return $data.field = "".concat(translation.id, "_").concat(locale);
                },
                onSubmit: $options.submit,
                onCancel: $options.cancel
              }, null, 8
              /* PROPS */
              , ["locale", "translation", "editing", "onToggle", "onSubmit", "onCancel"]);
            }), 128
            /* KEYED_FRAGMENT */
            ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selected.locales.map(function (locale) {
              return locale;
            }).sort(), function (locale) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_editable_input, {
                key: locale,
                locale: locale,
                translation: translation,
                editing: $data.field === "".concat(translation.id, "_").concat(locale),
                config: $data.config,
                onToggle: function onToggle($event) {
                  return $data.field = "".concat(translation.id, "_").concat(locale);
                },
                onSubmit: $options.submit,
                onCancel: $options.cancel
              }, null, 8
              /* PROPS */
              , ["locale", "translation", "editing", "config", "onToggle", "onSubmit", "onCancel"]);
            }), 128
            /* KEYED_FRAGMENT */
            ))]))];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["loading"]);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Translation */ "./resources/js/views/Translation.vue");
/* eslint-disable */

Nova.booting(function (Vue, router, store) {
  Nova.inertia('nova-translation-manager', _views_Translation__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@-webkit-keyframes update-7473a06b {\n0% {\n    background-color: #fff;\n}\n25% {\n    background-color: #afa;\n}\n100% {\n    background-color: #fff;\n}\n}\n@keyframes update-7473a06b {\n0% {\n    background-color: #fff;\n}\n25% {\n    background-color: #afa;\n}\n100% {\n    background-color: #fff;\n}\n}\n.value > svg[data-v-7473a06b] {\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.5s;\n}\n.value:hover > svg[data-v-7473a06b] {\n  opacity: 1;\n}\n.updated[data-v-7473a06b] {\n  -webkit-animation-name: update-7473a06b;\n          animation-name: update-7473a06b;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_style_index_0_id_7473a06b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_style_index_0_id_7473a06b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_style_index_0_id_7473a06b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/CheckboxInput.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CheckboxInput.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxInput_vue_vue_type_template_id_237f0dec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxInput.vue?vue&type=template&id=237f0dec */ "./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec");
/* harmony import */ var _CheckboxInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxInput.vue?vue&type=script&lang=js */ "./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CheckboxInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CheckboxInput_vue_vue_type_template_id_237f0dec__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/CheckboxInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/EditableInput.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/EditableInput.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditableInput_vue_vue_type_template_id_7473a06b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableInput.vue?vue&type=template&id=7473a06b&scoped=true */ "./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true");
/* harmony import */ var _EditableInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableInput.vue?vue&type=script&lang=js */ "./resources/js/components/EditableInput.vue?vue&type=script&lang=js");
/* harmony import */ var _EditableInput_vue_vue_type_style_index_0_id_7473a06b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css */ "./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css");
/* harmony import */ var _Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditableInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditableInput_vue_vue_type_template_id_7473a06b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7473a06b"],['__file',"resources/js/components/EditableInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/EditableInputField.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/EditableInputField.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditableInputField_vue_vue_type_template_id_7c88247f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableInputField.vue?vue&type=template&id=7c88247f */ "./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f");
/* harmony import */ var _EditableInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableInputField.vue?vue&type=script&lang=js */ "./resources/js/components/EditableInputField.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EditableInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditableInputField_vue_vue_type_template_id_7c88247f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/EditableInputField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Translation.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Translation.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Translation_vue_vue_type_template_id_3f1c51e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation.vue?vue&type=template&id=3f1c51e2 */ "./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2");
/* harmony import */ var _Translation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translation.vue?vue&type=script&lang=js */ "./resources/js/views/Translation.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_nelumoraru_Desktop_Projects_laravel_nova_chained_translation_manager_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Translation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Translation_vue_vue_type_template_id_3f1c51e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Translation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/EditableInput.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/EditableInput.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/EditableInputField.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditableInputField.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInputField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Translation.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/views/Translation.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Translation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Translation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Translation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxInput_vue_vue_type_template_id_237f0dec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxInput_vue_vue_type_template_id_237f0dec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxInput.vue?vue&type=template&id=237f0dec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxInput.vue?vue&type=template&id=237f0dec");


/***/ }),

/***/ "./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_template_id_7473a06b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_template_id_7473a06b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInput.vue?vue&type=template&id=7473a06b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=template&id=7473a06b&scoped=true");


/***/ }),

/***/ "./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInputField_vue_vue_type_template_id_7c88247f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInputField_vue_vue_type_template_id_7c88247f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInputField.vue?vue&type=template&id=7c88247f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInputField.vue?vue&type=template&id=7c88247f");


/***/ }),

/***/ "./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Translation_vue_vue_type_template_id_3f1c51e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Translation_vue_vue_type_template_id_3f1c51e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Translation.vue?vue&type=template&id=3f1c51e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Translation.vue?vue&type=template&id=3f1c51e2");


/***/ }),

/***/ "./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditableInput_vue_vue_type_style_index_0_id_7473a06b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EditableInput.vue?vue&type=style&index=0&id=7473a06b&scoped=true&lang=css");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstatikbe_laravel_nova_chained_translation_manager"] = self["webpackChunkstatikbe_laravel_nova_chained_translation_manager"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;