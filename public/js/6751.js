"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6751],{

/***/ 58079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".currency-display[data-v-fdb34f36]{align-items:center;display:inline-flex}.currency-svg[data-v-fdb34f36]{display:inline-block;filter:brightness(.2) contrast(2) saturate(1.5);opacity:1;vertical-align:middle}.small-box .currency-svg[data-v-fdb34f36]{filter:brightness(0) invert(1) contrast(1)}.currency-text[data-v-fdb34f36]{margin:0 2px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CurrencyDisplay)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=template&id=fdb34f36&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "currency-display"
  }, [_vm.isSvgSymbol ? _c('img', {
    staticClass: "currency-svg",
    staticStyle: {
      "vertical-align": "middle",
      "margin-right": "5px",
      "filter": "brightness(0.2) contrast(2) saturate(1.5)"
    },
    attrs: {
      "src": _vm.svgPath,
      "alt": _vm.currency.code,
      "width": "15",
      "height": "15"
    }
  }) : _vm.currency && _vm.currency.position === 'left' ? _c('span', {
    staticClass: "currency-text",
    "class": {
      'saudi-riyal': _vm.isSaudiRiyal
    }
  }, [_vm._v(_vm._s(_vm.currency.symbol))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "currency-amount"
  }, [_vm._v(_vm._s(_vm.formattedAmount))]), _vm._v(" "), !_vm.isSvgSymbol && _vm.currency && _vm.currency.position === 'right' ? _c('span', {
    staticClass: "currency-text",
    "class": {
      'saudi-riyal': _vm.isSaudiRiyal
    }
  }, [_vm._v(_vm._s(_vm.currency.symbol))]) : _vm._e()]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/store/index.js
var store = __webpack_require__(66138);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js

/* harmony default export */ const CurrencyDisplayvue_type_script_lang_js = ({
  name: 'CurrencyDisplay',
  props: {
    amount: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    currency: function currency() {
      return store/* default */.A.state.operations.appInfo.currency;
    },
    isSvgSymbol: function isSvgSymbol() {
      return this.currency && this.currency.symbol && this.currency.symbol.includes('.svg');
    },
    isSaudiRiyal: function isSaudiRiyal() {
      // Check if this is Saudi Riyal currency (SAR or RY) with the new symbol
      return this.currency && (this.currency.code === 'SAR' || this.currency.code === 'RY') && this.currency.symbol && this.currency.symbol.includes('ê');
    },
    svgPath: function svgPath() {
      if (this.isSvgSymbol) {
        return this.currency.symbol.startsWith('/') ? this.currency.symbol : "/images/".concat(this.currency.symbol);
      }
      return null;
    },
    formattedAmount: function formattedAmount() {
      var num = Number(this.amount);
      if (num > 0) {
        return num.toFixed(2).toLocaleString();
      }
      return '0';
    }
  }
});
;// ./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CurrencyDisplayvue_type_script_lang_js = (CurrencyDisplayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=fdb34f36&prod&scoped=true&lang=css
var CurrencyDisplayvue_type_style_index_0_id_fdb34f36_prod_scoped_true_lang_css = __webpack_require__(58079);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=fdb34f36&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CurrencyDisplayvue_type_style_index_0_id_fdb34f36_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CurrencyDisplayvue_type_style_index_0_id_fdb34f36_prod_scoped_true_lang_css = (CurrencyDisplayvue_type_style_index_0_id_fdb34f36_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=fdb34f36&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/CurrencyDisplay.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_CurrencyDisplayvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fdb34f36",
  null
  
)

/* harmony default export */ const CurrencyDisplay = (component.exports);

/***/ })

}]);