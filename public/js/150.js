"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[150],{

/***/ 64744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_RTLService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73948);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isRTL: false,
      currentLocale: 'en'
    };
  },
  computed: {
    /**
     * Get RTL-aware CSS classes
     */
    rtlClasses: function rtlClasses() {
      return {
        'rtl': this.isRTL,
        'ltr': !this.isRTL,
        'text-right': this.isRTL,
        'text-left': !this.isRTL,
        'float-right': this.isRTL,
        'float-left': !this.isRTL
      };
    },
    /**
     * Get RTL-aware text alignment
     */
    textAlign: function textAlign() {
      return this.isRTL ? 'right' : 'left';
    },
    /**
     * Get RTL-aware float direction
     */
    floatDirection: function floatDirection() {
      return this.isRTL ? 'right' : 'left';
    }
  },
  mounted: function mounted() {
    // Initialize RTL status
    this.updateRTLStatus();

    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange);
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('rtl-changed', this.handleRTLChange);
  },
  methods: {
    /**
     * Update RTL status from service
     */
    updateRTLStatus: function updateRTLStatus() {
      this.isRTL = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getRTLStatus();
      this.currentLocale = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
    },
    /**
     * Handle RTL change events
     */
    handleRTLChange: function handleRTLChange(event) {
      this.isRTL = event.detail.isRTL;
      this.currentLocale = event.detail.locale || _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
      this.$forceUpdate(); // Force component re-render
    },
    /**
     * Set RTL mode for a specific locale
     */
    setRTLMode: function setRTLMode(locale) {
      _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.setRTLModeByLocale(locale);
    },
    /**
     * Check if current locale is RTL
     */
    isCurrentLocaleRTL: function isCurrentLocaleRTL() {
      return _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLanguageRTLStatus(this.currentLocale);
    },
    /**
     * Get RTL-aware margin/padding classes
     */
    getRTLSpacingClasses: function getRTLSpacingClasses(baseClass, size) {
      if (this.isRTL) {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-right-").concat(size), true), "".concat(baseClass, "-left-").concat(size), false);
      } else {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-left-").concat(size), true), "".concat(baseClass, "-right-").concat(size), false);
      }
    },
    /**
     * Get RTL-aware border classes
     */
    getRTLBorderClasses: function getRTLBorderClasses(baseClass, side) {
      if (this.isRTL) {
        var rtlSideMap = {
          'left': 'right',
          'right': 'left',
          'start': 'end',
          'end': 'start'
        };
        return _defineProperty({}, "".concat(baseClass, "-").concat(rtlSideMap[side] || side), true);
      } else {
        return _defineProperty({}, "".concat(baseClass, "-").concat(side), true);
      }
    }
  }
});

/***/ }),

/***/ 98934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".currency-display[data-v-34d1f53e]{align-items:center;display:inline-flex}.currency-svg[data-v-34d1f53e]{display:inline-block;filter:brightness(.2) contrast(2) saturate(1.5);opacity:1;vertical-align:middle}.small-box .currency-svg[data-v-34d1f53e]{filter:brightness(0) invert(1) contrast(1)}.currency-text[data-v-34d1f53e]{margin:0 2px}[dir=rtl] .currency-display[data-v-34d1f53e]{direction:rtl}[dir=rtl] .currency-display .currency-text[data-v-34d1f53e]{text-align:right}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 90150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CurrencyDisplay)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=template&id=34d1f53e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "currency-display",
    "class": _vm.rtlClasses
  }, [_vm.isSvgSymbol ? _c('img', {
    staticClass: "currency-svg",
    style: _vm.svgStyle,
    attrs: {
      "src": _vm.svgPath,
      "alt": _vm.currency.code,
      "width": "15",
      "height": "15"
    }
  }) : _vm.currency && _vm.shouldShowSymbolLeft ? _c('span', {
    staticClass: "currency-text",
    "class": {
      'saudi-riyal': _vm.isSaudiRiyal
    }
  }, [_vm._v(_vm._s(_vm.currency.symbol))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "currency-amount"
  }, [_vm._v(_vm._s(_vm.formattedAmount))]), _vm._v(" "), !_vm.isSvgSymbol && _vm.currency && _vm.shouldShowSymbolRight ? _c('span', {
    staticClass: "currency-text",
    "class": {
      'saudi-riyal': _vm.isSaudiRiyal
    }
  }, [_vm._v(_vm._s(_vm.currency.symbol))]) : _vm._e()]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/store/index.js
var store = __webpack_require__(66138);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js


/* harmony default export */ const CurrencyDisplayvue_type_script_lang_js = ({
  name: 'CurrencyDisplay',
  mixins: [RTLMixin/* default */.A],
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
        return num.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
      return '0';
    },
    // RTL-aware symbol positioning
    shouldShowSymbolLeft: function shouldShowSymbolLeft() {
      if (!this.currency) return false;
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'right' : this.currency.position === 'left';
    },
    shouldShowSymbolRight: function shouldShowSymbolRight() {
      if (!this.currency) return false;
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'left' : this.currency.position === 'right';
    },
    // RTL-aware SVG styling
    svgStyle: function svgStyle() {
      var baseStyle = {
        verticalAlign: 'middle',
        filter: 'brightness(0.2) contrast(2) saturate(1.5)'
      };
      if (this.isRTL) {
        // In RTL mode, reverse the margin logic
        if (this.currency && this.currency.position === 'left') {
          baseStyle.marginLeft = '5px';
          baseStyle.marginRight = '0px';
        } else {
          baseStyle.marginRight = '5px';
          baseStyle.marginLeft = '0px';
        }
      } else {
        // LTR mode - original logic
        if (this.currency && this.currency.position === 'left') {
          baseStyle.marginRight = '5px';
          baseStyle.marginLeft = '0px';
        } else {
          baseStyle.marginLeft = '5px';
          baseStyle.marginRight = '0px';
        }
      }
      return baseStyle;
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CurrencyDisplayvue_type_script_lang_js = (CurrencyDisplayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=34d1f53e&prod&scoped=true&lang=css
var CurrencyDisplayvue_type_style_index_0_id_34d1f53e_prod_scoped_true_lang_css = __webpack_require__(98934);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=34d1f53e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CurrencyDisplayvue_type_style_index_0_id_34d1f53e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CurrencyDisplayvue_type_style_index_0_id_34d1f53e_prod_scoped_true_lang_css = (CurrencyDisplayvue_type_style_index_0_id_34d1f53e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=34d1f53e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/CurrencyDisplay.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_CurrencyDisplayvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "34d1f53e",
  null
  
)

/* harmony default export */ const CurrencyDisplay = (component.exports);

/***/ })

}]);