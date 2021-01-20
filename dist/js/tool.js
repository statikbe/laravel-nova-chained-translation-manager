/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(20);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
Nova.booting(function (Vue, router, store) {
    router.addRoutes([{
        name: 'nova-translation-manager',
        path: '/translation-manager',
        component: __webpack_require__(3)
    }]);
    Vue.config.devtools = true;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(19)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Translation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f1c51e2", Component.options)
  } else {
    hotAPI.reload("data-v-3f1c51e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_EditableInput_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_EditableInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_EditableInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CheckboxInput_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CheckboxInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_CheckboxInput_vue__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "editable-input": __WEBPACK_IMPORTED_MODULE_0__components_EditableInput_vue___default.a,
    "checkbox-input": __WEBPACK_IMPORTED_MODULE_1__components_CheckboxInput_vue___default.a
  },
  props: {
    resourceName: {
      type: String,
      default: "translation"
    },
    singularName: {
      type: String,
      default: "translation"
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
          var key = v.key;
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
      })
      // .sort((a, b) => (a.key > b.key ? 1 : -1))
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

      Nova.request().get("/nova-vendor/translation-manager/translations/", {
        params: { group: this.group, search: this.search }
      }).then(function (_ref6) {
        var _ref6$data = _ref6.data,
            groups = _ref6$data.groups,
            languages = _ref6$data.languages,
            translations = _ref6$data.translations;

        _this2.groups = groups.map(_this2.normalizeGroup).filter(_this2.filterGroup).reduce(function (a, b) {
          return a.includes(b) ? a : [].concat(_toConsumableArray(a), [b]);
        }, []);
        _this2.locales = languages;
        _this2.translations = translations && translations.data;
      }).then(!this.selected.locales.length && this.toggleLocales).then(!this.selected.groups.length && this.toggleGroups).then(function () {
        _this2.initialLoading = false;
      });
    },
    updateTranslations: function updateTranslations(val) {
      var _field$split = this.field.split("_"),
          _field$split2 = _slicedToArray(_field$split, 2),
          id = _field$split2[0],
          locale = _field$split2[1];

      this.$set(this.translations.find(function (t) {
        return t.id === id;
      }).translations, locale, val.value);
      this.$set(this.translations.find(function (t) {
        return t.id === id;
      }), "updated", locale);
      this.cancel();
    },
    submit: function submit(val) {
      var _this3 = this;

      if (val && val.value) {
        Nova.request().put("/nova-vendor/translation-manager/translations/", val).then(function () {
          return _this3.updateTranslations(val);
        }).catch(function () {
          _this3.$toasted.show("Something went wrong!", {
            type: "error"
          });
        });
      } else {
        this.field = null;
        this.$toasted.show("A translation string is required", {
          type: "error"
        });
      }
    },
    cancel: function cancel() {
      this.field = null;
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(6)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(11)
/* template */
var __vue_template__ = __webpack_require__(15)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7473a06b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/EditableInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7473a06b", Component.options)
  } else {
    hotAPI.reload("data-v-7473a06b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("0e032d45", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7473a06b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditableInput.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7473a06b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditableInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes update-data-v-7473a06b {\n0% {\n    background-color: #fff;\n}\n25% {\n    background-color: #afa;\n}\n100% {\n    background-color: #fff;\n}\n}\n@keyframes update-data-v-7473a06b {\n0% {\n    background-color: #fff;\n}\n25% {\n    background-color: #afa;\n}\n100% {\n    background-color: #fff;\n}\n}\n.editable-input[data-v-7473a06b] {\n  background-color: #eee;\n}\n.value > svg[data-v-7473a06b] {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 0.5s;\n          transition-duration: 0.5s;\n}\n.value:hover > svg[data-v-7473a06b] {\n  opacity: 1;\n}\n.updated[data-v-7473a06b] {\n  -webkit-animation-name: update-data-v-7473a06b;\n          animation-name: update-data-v-7473a06b;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditableInputField_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditableInputField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__EditableInputField_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "editable-input-field": __WEBPACK_IMPORTED_MODULE_0__EditableInputField_vue___default.a
  },
  props: {
    editing: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String,
      default: ""
    },
    translation: {
      type: Object,
      default: null
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
          return this.translation.id + "_" + this.locale;
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(13)
/* template */
var __vue_template__ = __webpack_require__(14)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/EditableInputField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c88247f", Component.options)
  } else {
    hotAPI.reload("data-v-7c88247f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Trix from 'trix'
// import 'trix/dist/trix.css'

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            input: ''
        };
    },
    mounted: function mounted() {
        // this.$refs.input.select();
        this.input = this.value;
    },

    methods: {
        initialize: function initialize() {
            this.$refs.theEditor.editor.insertHTML(this.value);

            if (this.disabled) {
                this.$refs.theEditor.setAttribute('contenteditable', false);
            }
        },
        handleChange: function handleChange() {
            this.input = this.$refs.theEditor.value;
            //this.$emit('change', this.$refs.theEditor.value)
        },
        handleFileAccept: function handleFileAccept(e) {
            e.preventDefault();
        },
        handleAddFile: function handleAddFile(event) {
            this.$emit('file-add', event);
        },
        handleRemoveFile: function handleRemoveFile(event) {
            this.$emit('file-remove', event);
        },
        save: function save() {
            this.$emit('save', this.input);
        },
        cancel: function cancel() {
            this.$emit('cancel');
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "editable-input-field" },
    [
      _c("trix-editor", {
        ref: "theEditor",
        staticClass: "trix-content",
        attrs: { value: _vm.value, placeholder: _vm.placeholder },
        on: {
          keydown: function($event) {
            $event.stopPropagation()
          },
          "trix-change": _vm.handleChange,
          "trix-initialize": _vm.initialize,
          "trix-attachment-add": _vm.handleAddFile,
          "trix-attachment-remove": _vm.handleRemoveFile,
          "trix-file-accept": _vm.handleFileAccept
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex justify-end items-center my-3" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-link dim cursor-pointer text-80 mr-6",
            attrs: { type: "button" },
            on: { click: _vm.cancel }
          },
          [
            _c("span", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.__("cancel")) +
                  "\n                "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-default btn-primary inline-flex items-center relative",
            attrs: { type: "button" },
            on: { click: _vm.save }
          },
          [
            _c("span", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.__("save")) +
                  "\n                "
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c88247f", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      ref: "input",
      staticClass: "block",
      class: {
        "editable-input my-1 px-3 py-1 rounded-lg": _vm.editing
      },
      attrs: { for: _vm.name, tabindex: "0" },
      on: { focus: _vm.handleEdit }
    },
    [
      _vm.editing
        ? _c("span", { staticClass: "block my-1 leading-tight text-80" }, [
            _vm._v(
              "\n    " +
                _vm._s(_vm.locale.toUpperCase()) +
                " - " +
                _vm._s(_vm.translationKey) +
                "\n  "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editing
        ? _c("editable-input-field", {
            staticClass: "w-full",
            attrs: { value: _vm.value, type: "text" },
            on: { save: _vm.handleSave, cancel: _vm.handleCancel }
          })
        : _c(
            "div",
            {
              staticClass:
                "flex p-1 transition duration-500 cursor-pointer value hover:bg-gray-100",
              class: {
                updated:
                  _vm.translation.updated &&
                  _vm.translation.updated === _vm.locale
              }
            },
            [
              _c("div", { staticClass: "w-2/12 uppercase" }, [
                _vm._v("\n      " + _vm._s(_vm.locale) + "\n    ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-10/12" },
                [
                  _vm.value
                    ? [
                        _c(
                          "button",
                          {
                            staticClass:
                              "flex items-baseline text-blue-500 hover:underline",
                            on: { click: _vm.handleEdit }
                          },
                          [
                            _c("span", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.value) +
                                  "\n          "
                              )
                            ])
                          ]
                        )
                      ]
                    : [
                        _c(
                          "button",
                          {
                            staticClass: "flex text-blue-500 underline",
                            on: { click: _vm.handleEdit }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "pr-3 text-left" },
                              [_c("icon", { attrs: { type: "add" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.__("add translation")) +
                                  "\n          "
                              )
                            ])
                          ]
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c("icon", {
                staticClass: "ml-2 text-blue-500",
                attrs: { type: "edit" }
              })
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7473a06b", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(17)
/* template */
var __vue_template__ = __webpack_require__(18)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/CheckboxInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-237f0dec", Component.options)
  } else {
    hotAPI.reload("data-v-237f0dec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: null
        },
        onToggle: {
            type: Function,
            default: null
        }
    },
    methods: {
        handleToggle: function handleToggle() {
            this.onToggle(this.value);
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "checkbox-with-label",
    { attrs: { checked: _vm.checked }, on: { input: _vm.handleToggle } },
    [_vm._v("\n    " + _vm._s(_vm.text) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-237f0dec", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "loading-view",
    { attrs: { loading: _vm.initialLoading } },
    [
      _c("heading", { staticClass: "mb-3", attrs: { level: 1 } }, [
        _vm._v("\n    " + _vm._s(_vm.__("Translations")) + "\n  ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex" },
        [
          _c(
            "div",
            { staticClass: "relative mb-6 h-9 flex-no-shrink" },
            [
              _c("icon", {
                staticClass: "absolute ml-3 search-icon-center text-70",
                attrs: { type: "search" }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "search" } }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass:
                    "shadow appearance-none form-search w-search pl-search",
                  attrs: {
                    placeholder: _vm.__("Search text"),
                    type: "search",
                    name: "search"
                  },
                  domProps: { value: _vm.search },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "checkbox-with-label",
            {
              staticClass: "mb-6 ml-3",
              attrs: { checked: _vm.onlyMissing },
              on: {
                input: function($event) {
                  _vm.onlyMissing = !_vm.onlyMissing
                }
              }
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.__("Only show missing translations")) +
                  "\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ml-auto" },
            [
              _c(
                "dropdown",
                { staticClass: "mb-6 rounded bg-30 hover:bg-40" },
                [
                  _c("dropdown-trigger", { staticClass: "px-3" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.__("Select group")) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "dropdown-menu",
                    {
                      attrs: { slot: "menu", direction: "rtl", width: "250" },
                      slot: "menu"
                    },
                    [
                      _c("div", { staticClass: "p-4" }, [
                        _c(
                          "ul",
                          { staticClass: "list-reset" },
                          [
                            _c(
                              "li",
                              { staticClass: "flex items-center mb-4" },
                              [
                                _c(
                                  "checkbox-with-label",
                                  {
                                    attrs: {
                                      checked:
                                        _vm.selected.groups.length ===
                                        _vm.groups.length
                                    },
                                    on: { input: _vm.toggleGroups }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.__("Select All")) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.groups, function(group) {
                              return _c(
                                "li",
                                {
                                  key: group,
                                  staticClass: "flex items-center mb-4"
                                },
                                [
                                  _c("checkbox-input", {
                                    attrs: {
                                      value: group,
                                      text: group,
                                      checked: _vm.selected.groups.includes(
                                        group
                                      ),
                                      "on-toggle": _vm.toggleGroups
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ml-2" },
            [
              _c(
                "dropdown",
                { staticClass: "mb-6 rounded bg-30 hover:bg-40" },
                [
                  _c("dropdown-trigger", { staticClass: "px-3" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.__("Select languages")) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "dropdown-menu",
                    {
                      attrs: { slot: "menu", direction: "rtl", width: "250" },
                      slot: "menu"
                    },
                    [
                      _c("div", { staticClass: "p-4" }, [
                        _c(
                          "ul",
                          { staticClass: "list-reset" },
                          [
                            _c(
                              "li",
                              { staticClass: "flex items-center mb-4" },
                              [
                                _c(
                                  "checkbox-with-label",
                                  {
                                    attrs: {
                                      checked:
                                        _vm.selected.locales.length ===
                                        _vm.locales.length
                                    },
                                    on: { input: _vm.toggleLocales }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.__("Select All")) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.locales, function(l) {
                              return _c(
                                "li",
                                {
                                  key: l.locale,
                                  staticClass: "flex items-center mb-4"
                                },
                                [
                                  _c("checkbox-input", {
                                    attrs: {
                                      value: l.locale,
                                      text: l.language,
                                      checked: _vm.selected.locales.includes(
                                        l.locale
                                      ),
                                      "on-toggle": _vm.toggleLocales
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.filteredTranslations
        ? _vm._l(_vm.filteredTranslations, function(translation) {
            return _c(
              "card",
              { key: translation.id, staticClass: "px-4 py-2 my-2" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex mr-6 font-bold no-underline border-b text-90"
                  },
                  [
                    _c("div", { staticClass: "w-2/12" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(translation.group.toUpperCase()) +
                          "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-10/12" }, [
                      _vm._v(
                        "\n          " + _vm._s(translation.key) + "\n        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                !_vm.selected.locales.length
                  ? _c(
                      "div",
                      { staticClass: "my-3" },
                      _vm._l(
                        _vm.locales
                          .map(function(ref) {
                            var locale = ref.locale

                            return locale
                          })
                          .sort(),
                        function(locale) {
                          return _c("editable-input", {
                            key: locale,
                            attrs: {
                              locale: locale,
                              translation: translation,
                              editing:
                                _vm.field === translation.id + "_" + locale
                            },
                            on: {
                              toggle: function($event) {
                                _vm.field = translation.id + "_" + locale
                              },
                              submit: _vm.submit,
                              cancel: _vm.cancel
                            }
                          })
                        }
                      ),
                      1
                    )
                  : _c(
                      "div",
                      { staticClass: "my-3" },
                      _vm._l(
                        _vm.selected.locales
                          .map(function(locale) {
                            return locale
                          })
                          .sort(),
                        function(locale) {
                          return _c("editable-input", {
                            key: locale,
                            attrs: {
                              locale: locale,
                              translation: translation,
                              editing:
                                _vm.field === translation.id + "_" + locale
                            },
                            on: {
                              toggle: function($event) {
                                _vm.field = translation.id + "_" + locale
                              },
                              submit: _vm.submit,
                              cancel: _vm.cancel
                            }
                          })
                        }
                      ),
                      1
                    )
              ]
            )
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f1c51e2", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);