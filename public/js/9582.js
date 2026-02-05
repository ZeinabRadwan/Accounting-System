"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9582],{

/***/ 99102
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top-right[data-v-004ab702]{position:absolute;right:10px;top:18px}.title[data-v-004ab702]{font-size:85px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 69582
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ welcome)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=template&id=004ab702&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "top-right links"
  }, [_vm.authenticated ? [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('home')) + "\n      ")])] : [_c('router-link', {
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('login')) + "\n      ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'register'
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('register')) + "\n      ")])]], 2), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "title mb-4"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "links"
  }, [_c('a', {
    attrs: {
      "href": "https://github.com/cretueusebiu/laravel-vue-spa"
    }
  }, [_vm._v("github.com/cretueusebiu/laravel-vue-spa")])]);
}];

;// ./resources/js/pages/welcome.vue?vue&type=template&id=004ab702&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=script&lang=js

/* harmony default export */ const welcomevue_type_script_lang_js = ({
  layout: 'basic',
  metaInfo: function metaInfo() {
    return {
      title: this.$t('home')
    };
  },
  data: function data() {
    return {
      title: window.config.appName
    };
  },
  computed: (0,vuex_esm/* mapGetters */.L8)({
    authenticated: 'auth/check'
  })
});
;// ./resources/js/pages/welcome.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_welcomevue_type_script_lang_js = (welcomevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=style&index=0&id=004ab702&prod&scoped=true&lang=css
var welcomevue_type_style_index_0_id_004ab702_prod_scoped_true_lang_css = __webpack_require__(99102);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=style&index=0&id=004ab702&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(welcomevue_type_style_index_0_id_004ab702_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_welcomevue_type_style_index_0_id_004ab702_prod_scoped_true_lang_css = (welcomevue_type_style_index_0_id_004ab702_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/welcome.vue?vue&type=style&index=0&id=004ab702&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/welcome.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_welcomevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "004ab702",
  null
  
)

/* harmony default export */ const welcome = (component.exports);

/***/ }

}]);