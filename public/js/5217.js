"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5217,8127],{

/***/ 64744
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_RTLService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73948);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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

/***/ },

/***/ 56495
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".currency-display[data-v-4be26f70]{align-items:center;display:inline-flex}.currency-svg[data-v-4be26f70]{display:inline-block;filter:brightness(.2) contrast(2) saturate(1.5);opacity:1;vertical-align:middle}.small-box .currency-svg[data-v-4be26f70]{filter:brightness(0) invert(1) contrast(1)}.currency-text[data-v-4be26f70]{margin:0 2px}[dir=rtl] .currency-display[data-v-4be26f70]{direction:rtl}[dir=rtl] .currency-display .currency-text[data-v-4be26f70]{text-align:right}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 36300
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-ba5b3c12]{border:none!important}.account-statement-table[data-v-ba5b3c12]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-ba5b3c12]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-ba5b3c12]{border:none!important}.account-statement-table thead th[data-v-ba5b3c12]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-ba5b3c12]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-ba5b3c12]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-ba5b3c12]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-ba5b3c12]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.export-excel-btn[data-v-ba5b3c12],.export-pdf-btn[data-v-ba5b3c12],.preview-btn[data-v-ba5b3c12]{background:#f6fef4!important;border:none;border-radius:10px;color:#2ab930!important}.print-btn[data-v-ba5b3c12]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.btn-group.c-w-100[data-v-ba5b3c12]{gap:10px}.card[data-v-ba5b3c12]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-ba5b3c12]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-ba5b3c12]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.table-responsive[data-v-ba5b3c12]{border:1px solid #dee2e6;border-radius:.375rem;overflow-y:auto}.table-sm td[data-v-ba5b3c12],.table-sm th[data-v-ba5b3c12]{font-size:.875rem;padding:.5rem .75rem}.table th[data-v-ba5b3c12]{border-bottom:2px solid #dee2e6;color:#495057;font-weight:600}.table tbody tr[data-v-ba5b3c12]:hover,.table th[data-v-ba5b3c12]{background-color:#f8f9fa}.table tbody tr.table-info[data-v-ba5b3c12]{background-color:#e3f2fd;font-weight:600}.table tbody tr.table-info[data-v-ba5b3c12]:hover{background-color:#bbdefb}.info-box[data-v-ba5b3c12]{background:#f8f9fa;border-radius:.375rem;margin-bottom:1rem;padding:1rem}.info-box[data-v-ba5b3c12],.info-box-icon[data-v-ba5b3c12]{align-items:center;display:flex}.info-box-icon[data-v-ba5b3c12]{border-radius:50%;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-ba5b3c12]{flex:1}.info-box-text[data-v-ba5b3c12]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-ba5b3c12]{color:#495057;display:block;font-size:1.5rem;font-weight:700}.badge[data-v-ba5b3c12]{font-size:.75rem;padding:.25rem .5rem}.font-weight-bold[data-v-ba5b3c12]{color:#212529}.text-muted[data-v-ba5b3c12]{color:#6c757d!important}.btn-link[data-v-ba5b3c12]{background:none;border:none;color:#007bff;padding:0;text-decoration:none}.btn-link[data-v-ba5b3c12]:hover{color:#0056b3;text-decoration:none}.btn-link[data-v-ba5b3c12]:focus{box-shadow:none;outline:none}.tree-toggle-icon[data-v-ba5b3c12]{transition:transform .2s ease}.tree-toggle-icon.expanded[data-v-ba5b3c12]{transform:rotate(90deg)}.tree-item-icon[data-v-ba5b3c12]{text-align:center;width:16px}.gap-2>*+*[data-v-ba5b3c12]{margin-left:.5rem}@media (max-width:768px){.gap-2[data-v-ba5b3c12]{align-items:stretch;flex-direction:column}.gap-2>*+*[data-v-ba5b3c12]{margin-left:0;margin-top:.5rem}}.trial-balance-table[data-v-ba5b3c12]{background:#fff;border:1px solid #dee2e6;font-size:16px}.table-header[data-v-ba5b3c12],.table-header th[data-v-ba5b3c12]{background:#f8f9fa}.table-header th[data-v-ba5b3c12]{border:1px solid #dee2e6;color:#495057;font-size:16px;font-weight:600;padding:12px 8px}.header-code[data-v-ba5b3c12]{width:10%}.header-account[data-v-ba5b3c12]{width:30%}.header-amount[data-v-ba5b3c12]{font-size:16px;width:12%}.trial-balance-table tbody tr[data-v-ba5b3c12]{border-bottom:1px solid #dee2e6}.trial-balance-table tbody tr[data-v-ba5b3c12]:hover{background:#f8f9fa}.trial-balance-table tbody tr.table-info[data-v-ba5b3c12]{background:#e9ecef;border-left:3px solid #6c757d;font-weight:600}.trial-balance-table tbody tr.table-info[data-v-ba5b3c12]:hover{background:#dee2e6}.trial-balance-table tbody tr.table-warning[data-v-ba5b3c12]{background:#fff3cd;border-left:3px solid #ffc107;font-weight:600}.trial-balance-table tbody tr.table-warning[data-v-ba5b3c12]:hover{background:#ffeaa7}.cell-code[data-v-ba5b3c12]{background:#f8f9fa}.cell-account[data-v-ba5b3c12],.cell-amount[data-v-ba5b3c12]{background:#fff}.cell-amount[data-v-ba5b3c12]{font-weight:600}.account-code-badge[data-v-ba5b3c12]{background:#6c757d;border-radius:4px;color:#fff;display:inline-block;font-size:16px;font-weight:600;padding:4px 8px}.account-name-container[data-v-ba5b3c12]{align-items:center;display:flex;padding:8px 0}.expand-btn[data-v-ba5b3c12]{align-items:center;background:none;border:none;border-radius:2px;color:#6c757d;display:flex;font-size:16px;height:20px;justify-content:center;margin-right:8px;min-width:20px;padding:2px;transition:color .2s ease}.expand-btn[data-v-ba5b3c12]:hover{background:#f8f9fa;color:#495057}.expand-spacer[data-v-ba5b3c12]{margin-right:8px;width:24px}.account-icon[data-v-ba5b3c12]{font-size:16px;margin-right:8px;text-align:center;width:16px}.account-icon.fa-folder[data-v-ba5b3c12]{color:#6c757d}.account-icon.fa-folder-open[data-v-ba5b3c12]{color:#495057}.account-icon.fa-file[data-v-ba5b3c12]{color:#adb5bd}.account-name[data-v-ba5b3c12]{color:#2c3e50;font-size:16px;font-weight:600}.total-row-name[data-v-ba5b3c12]{color:#d63384;font-style:italic;font-weight:700}.amount-value[data-v-ba5b3c12]{background:none;color:#495057;display:inline-block;font-size:16px;font-weight:600;min-width:80px;padding:0;text-align:right}.credit-amount[data-v-ba5b3c12],.debit-amount[data-v-ba5b3c12]{background:none;border:none;color:#495057}.closing-amount[data-v-ba5b3c12]{background:none;font-size:16px;font-weight:800}.amount-empty[data-v-ba5b3c12]{color:#adb5bd;font-size:16px;font-style:italic}.table-footer[data-v-ba5b3c12]{background:#f8f9fa;color:#495057}.grand-total-row[data-v-ba5b3c12]{background:#e9ecef;border-top:2px solid #6c757d}.grand-total-label[data-v-ba5b3c12]{font-weight:700;padding:12px 8px}.grand-total-amount[data-v-ba5b3c12],.grand-total-label[data-v-ba5b3c12]{background:none;color:#495057;font-size:16px}.grand-total-amount[data-v-ba5b3c12]{border:none;font-weight:600;margin:0;padding:0}.grand-total-amount.credit-amount[data-v-ba5b3c12],.grand-total-amount.debit-amount[data-v-ba5b3c12]{background:none;border:none}@media print{.no-print[data-v-ba5b3c12]{display:none!important}.card[data-v-ba5b3c12]{border:none!important;box-shadow:none!important}.table[data-v-ba5b3c12]{font-size:16px}.table-responsive[data-v-ba5b3c12]{overflow:visible}}@media (max-width:1300px){.info-box[data-v-ba5b3c12]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 48127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CurrencyDisplay)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=template&id=4be26f70&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "currency-display",
    "class": _vm.disableRtl ? '' : _vm.rtlClasses
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js


/* harmony default export */ const CurrencyDisplayvue_type_script_lang_js = ({
  name: 'CurrencyDisplay',
  mixins: [RTLMixin/* default */.A],
  props: {
    amount: {
      type: [Number, String],
      required: true
    },
    disableRtl: {
      type: Boolean,
      "default": false
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
      // If RTL is disabled, use LTR logic
      if (this.disableRtl) return this.currency.position === 'left';
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'right' : this.currency.position === 'left';
    },
    shouldShowSymbolRight: function shouldShowSymbolRight() {
      if (!this.currency) return false;
      // If RTL is disabled, use LTR logic
      if (this.disableRtl) return this.currency.position === 'right';
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'left' : this.currency.position === 'right';
    },
    // RTL-aware SVG styling
    svgStyle: function svgStyle() {
      var baseStyle = {
        verticalAlign: 'middle',
        filter: 'brightness(0.2) contrast(2) saturate(1.5)'
      };

      // If RTL is disabled, always use LTR logic
      if (this.disableRtl) {
        if (this.currency && this.currency.position === 'left') {
          baseStyle.marginRight = '5px';
          baseStyle.marginLeft = '0px';
        } else {
          baseStyle.marginLeft = '5px';
          baseStyle.marginRight = '0px';
        }
      } else if (this.isRTL) {
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
;// ./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CurrencyDisplayvue_type_script_lang_js = (CurrencyDisplayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css
var CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css = __webpack_require__(56495);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css = (CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css

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
  "4be26f70",
  null
  
)

/* harmony default export */ const CurrencyDisplay = (component.exports);

/***/ },

/***/ 75217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ trial_balance)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=template&id=ba5b3c12&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row no-print mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "collapse show",
    attrs: {
      "id": "filtersCollapse"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "chart_of_account_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Chart of Account")))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.chartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Chart of Account'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingChartOfAccounts
    },
    on: {
      "search": _vm.searchChartOfAccounts,
      "input": _vm.onChartOfAccountChange
    },
    model: {
      value: _vm.filters.chartOfAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "chartOfAccountId", $$v);
      },
      expression: "filters.chartOfAccountId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sub_chart_of_account_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sub Account")))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.subChartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Sub Account'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingSubChartOfAccounts,
      "disabled": !_vm.filters.chartOfAccountId
    },
    on: {
      "search": _vm.searchSubChartOfAccounts
    },
    model: {
      value: _vm.filters.subChartOfAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "subChartOfAccountId", $$v);
      },
      expression: "filters.subChartOfAccountId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "from_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("From Date")) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.fromDate,
      expression: "filters.fromDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('From Date'),
      "required": ""
    },
    domProps: {
      "value": _vm.filters.fromDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "fromDate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "to_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("To Date")) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.toDate,
      expression: "filters.toDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('To Date'),
      "required": ""
    },
    domProps: {
      "value": _vm.filters.toDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "toDate", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "cost_center_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Cost Center")))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.costCenters,
      "reduce": function reduce(center) {
        return center.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Cost Center'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingCostCenters
    },
    on: {
      "search": _vm.searchCostCenters
    },
    model: {
      value: _vm.filters.costCenterId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "costCenterId", $$v);
      },
      expression: "filters.costCenterId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "account_level"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account Level")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.accountLevel,
      expression: "filters.accountLevel"
    }],
    staticClass: "form-control",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "accountLevel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v(_vm._s(_vm.$t('All Levels')))]), _vm._v(" "), _vm._l(_vm.accountLevels, function (level) {
    return _c('option', {
      key: level,
      domProps: {
        "value": level
      }
    }, [_vm._v(_vm._s(_vm.$t('Level')) + " " + _vm._s(level))]);
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "account_display_filter"
    }
  }, [_vm._v(_vm._s(_vm.$t("Display Options")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.accountDisplayFilter,
      expression: "filters.accountDisplayFilter"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "account_display_filter"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "accountDisplayFilter", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "all"
    }
  }, [_vm._v(_vm._s(_vm.$t('Show All Accounts')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transactions_only"
    }
  }, [_vm._v(_vm._s(_vm.$t('Show Accounts with Transactions Only')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hide_zero_balance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Hide Zero Balance Accounts')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hide_zero_opening"
    }
  }, [_vm._v(_vm._s(_vm.$t('Hide Zero Opening Balances')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3",
    staticStyle: {
      "margin-top": "32px"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary mb-3",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
        return _vm.generateReport();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-search me-1"
  }), _vm._v("\n                  " + _vm._s(_vm.loading ? _vm.$t("Generating...") : _vm.$t("Generate Report")) + "\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('button', {
    staticClass: "btn export-excel-btn mb-3",
    attrs: {
      "disabled": !_vm.reportData
    },
    on: {
      "click": _vm.exportToExcel
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]), _vm._v(" "), _vm.reportData ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn mb-3",
    on: {
      "click": _vm.downloadPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Preview'),
      expression: "$t('Preview')"
    }],
    staticClass: "btn preview-btn mb-3",
    on: {
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  })]) : _vm._e(), _vm._v(" "), _vm.hasMoreData ? _c('button', {
    staticClass: "mb-3",
    "class": ['btn', _vm.autoLoadMore ? 'btn-success' : 'btn-outline-success'],
    attrs: {
      "disabled": _vm.loading || _vm.loadingMore
    },
    on: {
      "click": _vm.toggleAutoLoad
    }
  }, [_c('i', {
    staticClass: "me-1",
    "class": ['fas', _vm.autoLoadMore ? 'fa-pause' : 'fa-play']
  }), _vm._v("\n                  " + _vm._s(_vm.autoLoadMore ? _vm.$t("Stop Calculating") : _vm.$t("Auto-Calculate Balances")) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.hasMoreData && !_vm.autoLoadMore ? _c('button', {
    staticClass: "btn btn-primary mb-3",
    attrs: {
      "disabled": _vm.loading || _vm.loadingMore
    },
    on: {
      "click": _vm.loadMoreData
    }
  }, [!_vm.loadingMore ? _c('i', {
    staticClass: "fas fa-calculator me-1"
  }) : _vm._e(), _vm._v(" "), _vm.loadingMore ? _c('i', {
    staticClass: "fas fa-spinner fa-spin me-1"
  }) : _vm._e(), _vm._v("\n                  " + _vm._s(_vm.loadingMore ? _vm.$t("Calculating...") : _vm.$t("Calculate Balances")) + "\n                ")]) : _vm._e()])])])])])])]), _vm._v(" "), _vm.reportData ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Trial Balance")))]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.dateRangeDisplayName))])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.reportData.grand_totals ? _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t("Total Debits")))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.total_debits
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t("Total Credits")))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.total_credits
    }
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped table-sm trial-balance-table"
  }, [_c('thead', {
    staticClass: "table-header"
  }, [_c('th', {
    staticClass: "text-center header-code"
  }, [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', {
    staticClass: "header-account"
  }, [_vm._v(_vm._s(_vm.$t("Account Name")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Opening Balance")) + " " + _vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Opening Balance")) + " " + _vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Movements")) + " " + _vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Movements")) + " " + _vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Net Movement")) + " " + _vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Net Movement")) + " " + _vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Closing Balance")) + " " + _vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right header-amount"
  }, [_vm._v(_vm._s(_vm.$t("Closing Balance")) + " " + _vm._s(_vm.$t("Credit")))])]), _vm._v(" "), _c('tbody', _vm._l(_vm.hierarchicalAccounts, function (account) {
    return _c('tr', {
      key: account.id,
      "class": _vm.getAccountRowClass(account)
    }, [_c('td', {
      staticClass: "text-center cell-code"
    }, [_c('span', {
      staticClass: "account-code-badge"
    }, [_vm._v(_vm._s(account.code))])]), _vm._v(" "), _c('td', {
      staticClass: "cell-account"
    }, [_c('div', {
      staticClass: "account-name-container",
      style: {
        paddingLeft: account.level * 20 + 'px'
      }
    }, [account.hasChildren && !account.isTotalRow ? _c('button', {
      staticClass: "expand-btn",
      on: {
        "click": function click($event) {
          return _vm.toggleNode(account.id);
        }
      }
    }, [_c('i', {
      "class": account.expanded ? 'fas fa-chevron-down' : _vm.isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right'
    })]) : !account.isTotalRow ? _c('span', {
      staticClass: "expand-spacer"
    }) : _vm._e(), _vm._v(" "), account.hasChildren && !account.isTotalRow ? _c('i', {
      staticClass: "account-icon",
      "class": account.expanded ? 'fa-folder-open' : 'fa-folder'
    }) : !account.isTotalRow ? _c('i', {
      staticClass: "account-icon fa-file"
    }) : _vm._e(), _vm._v(" "), account.isTotalRow ? _c('i', {
      staticClass: "account-icon fa-calculator"
    }) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "account-name",
      "class": {
        'total-row-name': account.isTotalRow
      }
    }, [_vm._v("\n                        " + _vm._s(account.name) + "\n                        "), _vm.isAccountCalculating(account.id) ? _c('i', {
      staticClass: "fas fa-spinner fa-spin ms-2 text-warning",
      attrs: {
        "title": _vm.$t('Calculating balance...')
      }
    }) : _vm._e()])])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'opening_debit') > 0 ? _c('span', {
      staticClass: "amount-value debit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'opening_debit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'opening_credit') > 0 ? _c('span', {
      staticClass: "amount-value credit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'opening_credit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'movement_debit') > 0 ? _c('span', {
      staticClass: "amount-value debit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'movement_debit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'movement_credit') > 0 ? _c('span', {
      staticClass: "amount-value credit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'movement_credit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'net_movement_debit') > 0 ? _c('span', {
      staticClass: "amount-value debit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'net_movement_debit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'net_movement_credit') > 0 ? _c('span', {
      staticClass: "amount-value credit-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'net_movement_credit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'closing_debit') > 0 ? _c('span', {
      staticClass: "amount-value debit-amount closing-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'closing_debit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right cell-amount"
    }, [_vm.getDisplayAmount(account, 'closing_credit') > 0 ? _c('span', {
      staticClass: "amount-value credit-amount closing-amount"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": _vm.getDisplayAmount(account, 'closing_credit')
      }
    })], 1) : _c('span', {
      staticClass: "amount-empty"
    }, [_vm._v("-")])])]);
  }), 0), _vm._v(" "), _vm.reportData.grand_totals ? _c('tfoot', {
    staticClass: "table-footer"
  }, [_c('tr', {
    staticClass: "grand-total-row"
  }, [_c('td', {
    staticClass: "text-center grand-total-label",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Grand Total")))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value debit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.opening_debit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value credit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.opening_credit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value debit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.movement_debit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value credit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.movement_credit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value debit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.net_movement_debit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value credit-amount grand-total-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.net_movement_credit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value debit-amount grand-total-amount closing-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.closing_debit
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "text-right cell-amount"
  }, [_c('strong', {
    staticClass: "amount-value credit-amount grand-total-amount closing-amount"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.reportData.grand_totals.closing_credit
    }
  })], 1)])])]) : _vm._e()])]), _vm._v(" "), _vm.hasMoreData && _vm.reportData && !_vm.autoLoadMore ? _c('div', {
    staticClass: "text-center mt-3"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "disabled": _vm.loadingMore
    },
    on: {
      "click": _vm.loadMoreData
    }
  }, [_vm.loadingMore ? _c('i', {
    staticClass: "fas fa-spinner fa-spin me-1"
  }) : _c('i', {
    staticClass: "fas fa-plus me-1"
  }), _vm._v("\n              " + _vm._s(_vm.loadingMore ? _vm.$t("Loading...") : _vm.$t("Load More Data")) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted mt-2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Loaded")) + " " + _vm._s(_vm.allAccounts.length) + " " + _vm._s(_vm.$t("accounts")) + "\n              "), _vm.reportData.pagination ? _c('span', [_vm._v("\n                " + _vm._s(_vm.$t("of")) + " " + _vm._s(_vm.reportData.pagination.total_count) + " " + _vm._s(_vm.$t("total")) + "\n              ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.loadingMore && _vm.autoLoadMore ? _c('div', {
    staticClass: "text-center mt-3"
  }, [_c('div', {
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin me-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Calculating account balances...")) + " (" + _vm._s(_vm.allAccounts.length) + " " + _vm._s(_vm.$t("accounts loaded")) + ")\n            ")])]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t("Loading...")))])]), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t("Generating trial balance report...")))])])])])]) : _vm._e(), _vm._v(" "), !_vm.loading && !_vm.reportData ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale fa-3x text-muted mb-3"
  }), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.$t("No Data Available")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Please select filters and generate the trial balance report.")))])])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-tool",
    attrs: {
      "type": "button",
      "data-card-widget": "collapse"
    }
  }, [_c('i', {
    staticClass: "fas fa-minus"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-calculator"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-calculator"
  })]);
}];

;// ./resources/js/pages/reports/trial-balance.vue?vue&type=template&id=ba5b3c12&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/CurrencyDisplay.vue + 5 modules
var CurrencyDisplay = __webpack_require__(48127);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const trial_balancevue_type_script_lang_js = ({
  name: "TrialBalance",
  components: {
    CurrencyDisplay: CurrencyDisplay["default"]
  },
  data: function data() {
    return {
      breadcrumbs: [{
        name: this.$t("Dashboard"),
        url: "/dashboard"
      }, {
        name: this.$t("Reports"),
        url: "/reports"
      }, {
        name: this.$t("Trial Balance"),
        url: ""
      }],
      breadcrumbsCurrent: this.$t("Trial Balance"),
      loading: false,
      reportData: null,
      allAccounts: [],
      // Store all loaded accounts
      currentPage: 1,
      perPage: 30,
      // Increased to 30 for better performance
      hasMoreData: false,
      loadingMore: false,
      autoLoadMore: true,
      // Auto-load more data progressively
      expandedNodes: [],
      // Track expanded nodes
      calculatingAccounts: new Set(),
      // Track which accounts are being calculated
      filters: {
        chartOfAccountId: null,
        subChartOfAccountId: null,
        costCenterId: null,
        accountLevel: null,
        fromDate: null,
        toDate: null,
        // Account display filter - single select option
        accountDisplayFilter: 'all' // Default: 'all', 'transactions_only', 'hide_zero_balance', 'hide_zero_opening'
      },
      chartOfAccounts: [],
      subChartOfAccounts: [],
      costCenters: [],
      accountLevels: [1, 2, 3, 4, 5],
      loadingChartOfAccounts: false,
      loadingSubChartOfAccounts: false,
      loadingCostCenters: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items"])), {}, {
    hierarchicalAccounts: function hierarchicalAccounts() {
      if (!this.reportData || !this.reportData.trial_balance) {
        return [];
      }
      // Apply filters to the account hierarchy
      var filteredAccounts = this.applyAccountFilters(this.reportData.trial_balance);
      return this.buildHierarchicalList(filteredAccounts);
    },
    dateRangeDisplayName: function dateRangeDisplayName() {
      if (!this.reportData || !this.reportData.filters) {
        return this.$t('All Data');
      }
      var filters = this.reportData.filters;
      if (filters.from_date && filters.to_date) {
        return "".concat(filters.from_date, " - ").concat(filters.to_date);
      } else {
        return this.$t('All Data');
      }
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for trial balance with current filters
      var params = new URLSearchParams();
      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      return "/print/reports/trial-balance?".concat(params.toString());
    },
    isRTL: function isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    }
  }),
  created: function created() {
    this.loadInitialData();
  },
  methods: {
    loadInitialData: function loadInitialData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.all([_this.loadChartOfAccounts(), _this.loadCostCenters()]);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _error$response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.loadingChartOfAccounts = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios_default().get("/api/chart-of-accounts");
            case 2:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.chartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              _this2.$toast.error('', ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t("Failed to load chart of accounts"));
            case 4:
              _context2.p = 4;
              _this2.loadingChartOfAccounts = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountId) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data, _error$response2, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (parentAccountId) {
                _context3.n = 1;
                break;
              }
              _this3.subChartOfAccounts = [];
              return _context3.a(2);
            case 1:
              _this3.loadingSubChartOfAccounts = true;
              _context3.p = 2;
              _context3.n = 3;
              return axios_default().get("/api/reports/sub-chart-of-accounts?parent_account_id=".concat(parentAccountId));
            case 3:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this3.subChartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t2 = _context3.v;
              _this3.$toast.error('', ((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this3.$t("Failed to load sub accounts"));
            case 5:
              _context3.p = 5;
              _this3.loadingSubChartOfAccounts = false;
              return _context3.f(5);
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 4, 5, 6]]);
      }))();
    },
    loadCostCenters: function loadCostCenters() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _error$response3, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this4.loadingCostCenters = true;
              _context4.p = 1;
              _context4.n = 2;
              return axios_default().get("/api/cost-centers/all", {
                params: {
                  limit: 100
                }
              });
            case 2:
              response = _context4.v;
              // Handle response - CostCenterResource collection returns data array
              if (response.data && Array.isArray(response.data)) {
                _this4.costCenters = response.data;
              } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
                _this4.costCenters = response.data.data;
              } else {
                _this4.costCenters = [];
              }
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('Error loading cost centers:', _t3);
              _this4.$toast.error('', ((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this4.$t("Failed to load cost centers"));
              _this4.costCenters = [];
            case 4:
              _context4.p = 4;
              _this4.loadingCostCenters = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchChartOfAccounts: function searchChartOfAccounts(search, loading) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data, _error$response4, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              loading(true);
              _context5.p = 1;
              _context5.n = 2;
              return axios_default().get("/api/chart-of-accounts?search=".concat(search));
            case 2:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this5.chartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t4 = _context5.v;
              _this5.$toast.error('', ((_error$response4 = _t4.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this5.$t("Failed to search chart of accounts"));
            case 4:
              _context5.p = 4;
              loading(false);
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchSubChartOfAccounts: function searchSubChartOfAccounts(search, loading) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, _error$response5, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (_this6.filters.chartOfAccountId) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              loading(true);
              _context6.p = 2;
              _context6.n = 3;
              return axios_default().get("/api/reports/sub-chart-of-accounts?parent_account_id=".concat(_this6.filters.chartOfAccountId, "&search=").concat(search));
            case 3:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              _this6.subChartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t5 = _context6.v;
              _this6.$toast.error('', ((_error$response5 = _t5.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.message) || _this6.$t("Failed to search sub accounts"));
            case 5:
              _context6.p = 5;
              loading(false);
              return _context6.f(5);
            case 6:
              return _context6.a(2);
          }
        }, _callee6, null, [[2, 4, 5, 6]]);
      }))();
    },
    searchCostCenters: function searchCostCenters(search, loading) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, _error$response6, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (loading) {
                loading(true);
              } else {
                _this7.loadingCostCenters = true;
              }
              _context7.p = 1;
              _context7.n = 2;
              return axios_default().get("/api/cost-centers/all", {
                params: {
                  search: search,
                  limit: 100
                }
              });
            case 2:
              response = _context7.v;
              // Handle response - CostCenterResource collection returns data array
              if (response.data && Array.isArray(response.data)) {
                _this7.costCenters = response.data;
              } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
                _this7.costCenters = response.data.data;
              } else {
                _this7.costCenters = [];
              }
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t6 = _context7.v;
              console.error('Error searching cost centers:', _t6);
              _this7.$toast.error('', ((_error$response6 = _t6.response) === null || _error$response6 === void 0 || (_error$response6 = _error$response6.data) === null || _error$response6 === void 0 ? void 0 : _error$response6.message) || _this7.$t("Failed to search cost centers"));
              _this7.costCenters = [];
            case 4:
              _context7.p = 4;
              if (loading) {
                loading(false);
              } else {
                _this7.loadingCostCenters = false;
              }
              return _context7.f(4);
            case 5:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 3, 4, 5]]);
      }))();
    },
    onChartOfAccountChange: function onChartOfAccountChange(accountId) {
      this.filters.subChartOfAccountId = null;
      this.subChartOfAccounts = [];
      if (accountId) {
        this.loadSubChartOfAccounts(accountId);
      }
    },
    generateReport: function generateReport() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var params, response, _response$data$data, _response$data, errorMsg, errorMessage, _t7;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (!(!_this8.filters.fromDate || !_this8.filters.toDate)) {
                _context8.n = 1;
                break;
              }
              _this8.$toast.error('', _this8.$t('Please select date range'));
              return _context8.a(2);
            case 1:
              _this8.loading = true;
              _this8.allAccounts = [];
              _this8.calculatingAccounts.clear();
              _context8.p = 2;
              params = new URLSearchParams();
              if (_this8.filters.chartOfAccountId) {
                params.append('chart_of_account_id', _this8.filters.chartOfAccountId);
              }
              if (_this8.filters.subChartOfAccountId) {
                params.append('sub_chart_of_account_id', _this8.filters.subChartOfAccountId);
              }
              if (_this8.filters.costCenterId) {
                params.append('cost_center_id', _this8.filters.costCenterId);
              }
              if (_this8.filters.accountLevel) {
                params.append('account_level', _this8.filters.accountLevel);
              }
              params.append('from_date', _this8.filters.fromDate);
              params.append('to_date', _this8.filters.toDate);
              _context8.n = 3;
              return axios_default().get("/api/reports/trial-balance?".concat(params.toString()));
            case 3:
              response = _context8.v;
              if (response.data && response.data.success === true) {
                // Load all accounts with zero balances
                _this8.reportData = response.data.data;
                _this8.allAccounts = _toConsumableArray(((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.trial_balance) || []);
                _this8.$toast.success('', _this8.$t("Trial balance structure loaded. Calculating balances..."));

                // Start calculating balances in chunks
                if (_this8.allAccounts.length > 0) {
                  _this8.startBalanceCalculations();
                }
              } else {
                errorMsg = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || _this8.$t("Failed to generate trial balance report");
                console.error('API Error:', errorMsg);
                _this8.$toast.error('', errorMsg);
              }
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t7 = _context8.v;
              console.error('Trial Balance Error:', _t7);
              errorMessage = _this8.$t("Failed to generate trial balance report");
              if (_t7 && _typeof(_t7) === 'object') {
                if (_t7.response && _t7.response.data && _t7.response.data.message) {
                  errorMessage = _t7.response.data.message;
                } else if (_t7.message) {
                  errorMessage = _t7.message;
                }
              }
              _this8.$toast.error('', errorMessage);
            case 5:
              _context8.p = 5;
              _this8.loading = false;
              return _context8.f(5);
            case 6:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 4, 5, 6]]);
      }))();
    },
    startBalanceCalculations: function startBalanceCalculations() {
      var _this9 = this;
      // Get all account IDs
      var allAccountIds = this.getAllAccountIds(this.allAccounts);

      // Mark all accounts as calculating
      allAccountIds.forEach(function (accountId) {
        _this9.calculatingAccounts.add(accountId);
      });

      // Update accounts to show calculating state
      this.updateAccountsCalculatingState(allAccountIds, true);

      // Calculate balances in chunks
      this.calculateBalancesInChunks(allAccountIds);
    },
    getAllAccountIds: function getAllAccountIds(accounts) {
      var accountIds = [];
      var _extractIds = function extractIds(accountList) {
        accountList.forEach(function (account) {
          accountIds.push(account.id);
          if (account.children && account.children.length > 0) {
            _extractIds(account.children);
          }
        });
      };
      _extractIds(accounts);
      return accountIds;
    },
    updateAccountsCalculatingState: function updateAccountsCalculatingState(accountIds, isCalculating) {
      var _updateAccount = function updateAccount(accountList) {
        accountList.forEach(function (account) {
          if (accountIds.includes(account.id)) {
            account.isCalculating = isCalculating;
          }
          if (account.children && account.children.length > 0) {
            _updateAccount(account.children);
          }
        });
      };
      _updateAccount(this.allAccounts);
    },
    calculateBalancesInChunks: function calculateBalancesInChunks(accountIds) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var i, accountId, _t8;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              i = 0;
            case 1:
              if (!(i < accountIds.length)) {
                _context9.n = 7;
                break;
              }
              accountId = accountIds[i];
              _context9.p = 2;
              _context9.n = 3;
              return _this0.calculateSingleAccountBalance(accountId);
            case 3:
              if (!(i < accountIds.length - 1)) {
                _context9.n = 4;
                break;
              }
              _context9.n = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 50);
              });
            case 4:
              _context9.n = 6;
              break;
            case 5:
              _context9.p = 5;
              _t8 = _context9.v;
              console.error("Error processing account ".concat(accountId, ":"), _t8);
            case 6:
              i++;
              _context9.n = 1;
              break;
            case 7:
              // Calculate totals after all accounts are loaded
              _this0.calculateGrandTotals();
            case 8:
              return _context9.a(2);
          }
        }, _callee9, null, [[2, 5]]);
      }))();
    },
    calculateSingleAccountBalance: function calculateSingleAccountBalance(accountId) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var requestData, response, _response$data2, _t9;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              requestData = {
                account_id: accountId,
                cost_center_id: _this1.filters.costCenterId,
                from_date: _this1.filters.fromDate,
                to_date: _this1.filters.toDate
              };
              _context0.n = 1;
              return axios_default().post('/api/reports/calculate-account-balances', requestData);
            case 1:
              response = _context0.v;
              if (response.data && response.data.success === true) {
                _this1.updateSingleAccountBalance(response.data.data.account);
              } else {
                console.error('Balance calculation failed for account', accountId, ':', (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message);
              }
              _context0.n = 3;
              break;
            case 2:
              _context0.p = 2;
              _t9 = _context0.v;
              console.error('Error calculating balance for account', accountId, ':', _t9);
            case 3:
              return _context0.a(2);
          }
        }, _callee0, null, [[0, 2]]);
      }))();
    },
    updateSingleAccountBalance: function updateSingleAccountBalance(calculatedAccount) {
      // Find and update the account in the hierarchy
      var updated = this.updateAccountInHierarchy(this.allAccounts, calculatedAccount);
      if (updated) {
        // Remove from calculating set
        this.calculatingAccounts["delete"](calculatedAccount.id);

        // Update the report data to keep both in sync
        if (this.reportData) {
          this.reportData.trial_balance = _toConsumableArray(this.allAccounts);
        }

        // Force Vue reactivity update
        this.$forceUpdate();
      } else {
        console.error('Failed to find account in hierarchy:', calculatedAccount.id);
      }
    },
    findAccountById: function findAccountById(accounts, accountId) {
      for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].id === accountId) {
          return accounts[i];
        }
        if (accounts[i].children && accounts[i].children.length > 0) {
          var found = this.findAccountById(accounts[i].children, accountId);
          if (found) return found;
        }
      }
      return null;
    },
    updateAccountInHierarchy: function updateAccountInHierarchy(accounts, calculatedAccount) {
      for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].id === calculatedAccount.id) {
          // Update the account with calculated data
          accounts[i] = _objectSpread(_objectSpread(_objectSpread({}, accounts[i]), calculatedAccount), {}, {
            isCalculating: false
          });
          return true;
        }

        // Check children recursively
        if (accounts[i].children && accounts[i].children.length > 0) {
          if (this.updateAccountInHierarchy(accounts[i].children, calculatedAccount)) {
            return true;
          }
        }
      }
      return false;
    },
    calculateGrandTotals: function calculateGrandTotals() {
      var totalMovementDebit = 0;
      var totalMovementCredit = 0;
      var totalNetMovementDebit = 0;
      var totalNetMovementCredit = 0;
      var totalOpeningDebit = 0;
      var totalOpeningCredit = 0;
      var totalClosingDebit = 0;
      var totalClosingCredit = 0;

      // Recursively calculate totals from all leaf accounts only
      var _calculateTotals = function calculateTotals(accounts) {
        if (!accounts || !Array.isArray(accounts)) {
          return;
        }
        accounts.forEach(function (account) {
          // Skip total rows - they are display-only and should not be included in grand totals
          if (account.isTotalRow) {
            return;
          }
          if (account.children && account.children.length > 0) {
            // Parent account - recursively process children
            _calculateTotals(account.children);
          } else {
            // Leaf account - add its amounts to grand totals
            totalMovementDebit += parseFloat(account.movement_debit || 0);
            totalMovementCredit += parseFloat(account.movement_credit || 0);
            totalNetMovementDebit += parseFloat(account.net_movement_debit || 0);
            totalNetMovementCredit += parseFloat(account.net_movement_credit || 0);
            totalOpeningDebit += parseFloat(account.opening_debit || 0);
            totalOpeningCredit += parseFloat(account.opening_credit || 0);
            totalClosingDebit += parseFloat(account.closing_debit || 0);
            totalClosingCredit += parseFloat(account.closing_credit || 0);
          }
        });
      };
      _calculateTotals(this.allAccounts);
      var grandTotals = {
        total_debits: totalClosingDebit,
        total_credits: totalClosingCredit,
        opening_debit: totalOpeningDebit,
        opening_credit: totalOpeningCredit,
        movement_debit: totalMovementDebit,
        movement_credit: totalMovementCredit,
        net_movement_debit: totalNetMovementDebit,
        net_movement_credit: totalNetMovementCredit,
        closing_debit: totalClosingDebit,
        closing_credit: totalClosingCredit,
        difference: Math.abs(totalClosingDebit - totalClosingCredit)
      };

      // Update report data with grand totals
      if (this.reportData) {
        this.reportData.grand_totals = grandTotals;
      }
    },
    toggleAutoLoad: function toggleAutoLoad() {
      this.autoLoadMore = !this.autoLoadMore;
      if (this.autoLoadMore && this.hasMoreData) {
        this.loadMoreData();
      }
    },
    isAccountCalculating: function isAccountCalculating(accountId) {
      return this.calculatingAccounts.has(accountId);
    },
    // Build hierarchical list for expand/collapse functionality
    buildHierarchicalList: function buildHierarchicalList(accounts) {
      var _this10 = this;
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var result = [];
      accounts.forEach(function (account) {
        var accountWithLevel = _objectSpread(_objectSpread({}, account), {}, {
          level: level,
          expanded: _this10.expandedNodes.includes(account.id),
          hasChildren: account.children && account.children.length > 0,
          isParent: account.children && account.children.length > 0,
          isLeaf: !account.children || account.children.length === 0
        });
        result.push(accountWithLevel);

        // Add children if expanded - recursively show ALL descendants
        if (accountWithLevel.expanded && account.children && account.children.length > 0) {
          var children = _this10.buildHierarchicalList(account.children, level + 1);
          result.push.apply(result, _toConsumableArray(children));

          // Add total row for this account's children
          if (children.length > 0) {
            // Calculate totals from all leaf accounts under this parent (not just direct children)
            var childrenTotals = _this10.calculateChildrenTotals(account.children);
            var totalRow = {
              id: "total-".concat(account.id),
              code: '',
              name: "Total ".concat(account.name),
              type: 'TOTAL',
              level: level + 1,
              expanded: false,
              hasChildren: false,
              isTotalRow: true,
              isParent: false,
              isLeaf: false,
              parentId: account.id,
              // Use the calculated children totals
              children_opening_debit: childrenTotals.opening_debit,
              children_opening_credit: childrenTotals.opening_credit,
              children_movement_debit: childrenTotals.movement_debit,
              children_movement_credit: childrenTotals.movement_credit,
              children_net_movement_debit: childrenTotals.net_movement_debit,
              children_net_movement_credit: childrenTotals.net_movement_credit,
              children_closing_debit: childrenTotals.closing_debit,
              children_closing_credit: childrenTotals.closing_credit
            };
            result.push(totalRow);
          }
        }
      });
      return result;
    },
    // Calculate totals from all leaf accounts under a parent
    calculateChildrenTotals: function calculateChildrenTotals(childrenAccounts) {
      var totals = {
        opening_debit: 0,
        opening_credit: 0,
        movement_debit: 0,
        movement_credit: 0,
        net_movement_debit: 0,
        net_movement_credit: 0,
        closing_debit: 0,
        closing_credit: 0
      };
      var _calculateFromAccount = function calculateFromAccount(account) {
        // If account has children, recursively calculate from children
        if (account.children && account.children.length > 0) {
          account.children.forEach(function (child) {
            _calculateFromAccount(child);
          });
        } else {
          // Leaf account - add its amounts to totals
          totals.opening_debit += parseFloat(account.opening_debit || 0);
          totals.opening_credit += parseFloat(account.opening_credit || 0);
          totals.movement_debit += parseFloat(account.movement_debit || 0);
          totals.movement_credit += parseFloat(account.movement_credit || 0);
          totals.net_movement_debit += parseFloat(account.net_movement_debit || 0);
          totals.net_movement_credit += parseFloat(account.net_movement_credit || 0);
          totals.closing_debit += parseFloat(account.closing_debit || 0);
          totals.closing_credit += parseFloat(account.closing_credit || 0);
        }
      };
      childrenAccounts.forEach(function (account) {
        _calculateFromAccount(account);
      });
      return totals;
    },
    // Apply account filters to the account hierarchy
    applyAccountFilters: function applyAccountFilters(accounts) {
      var _this11 = this;
      if (!accounts || !Array.isArray(accounts)) {
        return [];
      }

      // If "Show All Accounts" is selected, return all accounts without filtering
      if (this.filters.accountDisplayFilter === 'all') {
        return accounts;
      }

      // Build filter function based on selected option
      var shouldShowAccount = function shouldShowAccount(account) {
        switch (_this11.filters.accountDisplayFilter) {
          case 'transactions_only':
            // Show only accounts with transactions
            return _this11.accountHasTransactions(account);
          case 'hide_zero_balance':
            // Hide accounts with zero closing balance
            return !_this11.accountHasZeroBalance(account);
          case 'hide_zero_opening':
            // Hide accounts with zero opening balance
            return !_this11.accountHasZeroOpeningBalance(account);
          default:
            return true;
        }
      };
      return this.filterAccountHierarchy(accounts, shouldShowAccount);
    },
    // Filter account hierarchy recursively, keeping parents if they have visible children
    filterAccountHierarchy: function filterAccountHierarchy(accounts, filterFn) {
      var _this12 = this;
      if (!accounts || !Array.isArray(accounts)) {
        return [];
      }
      var filtered = [];
      accounts.forEach(function (account) {
        var accountCopy = _objectSpread({}, account);

        // If account has children, filter children first
        if (account.children && account.children.length > 0) {
          var filteredChildren = _this12.filterAccountHierarchy(account.children, filterFn);

          // Only include parent if it has visible children
          if (filteredChildren.length > 0) {
            accountCopy.children = filteredChildren;
            filtered.push(accountCopy);
          }
        } else {
          // Leaf account - apply filter directly
          if (filterFn(account)) {
            filtered.push(accountCopy);
          }
        }
      });
      return filtered;
    },
    // Check if account has transactions (debit or credit movements)
    accountHasTransactions: function accountHasTransactions(account) {
      var movementDebit = parseFloat(account.movement_debit || 0);
      var movementCredit = parseFloat(account.movement_credit || 0);
      return movementDebit > 0 || movementCredit > 0;
    },
    // Check if account has zero closing balance
    accountHasZeroBalance: function accountHasZeroBalance(account) {
      var closingDebit = parseFloat(account.closing_debit || 0);
      var closingCredit = parseFloat(account.closing_credit || 0);
      return closingDebit === 0 && closingCredit === 0;
    },
    // Check if account has zero opening balance
    accountHasZeroOpeningBalance: function accountHasZeroOpeningBalance(account) {
      var openingDebit = parseFloat(account.opening_debit || 0);
      var openingCredit = parseFloat(account.opening_credit || 0);
      return openingDebit === 0 && openingCredit === 0;
    },
    // Toggle node expansion
    toggleNode: function toggleNode(accountId) {
      var index = this.expandedNodes.indexOf(accountId);
      if (index > -1) {
        this.expandedNodes.splice(index, 1);
      } else {
        this.expandedNodes.push(accountId);
      }
    },
    // Expand all nodes
    expandAll: function expandAll() {
      if (!this.reportData || !this.reportData.trial_balance) return;

      // Use the current allAccounts data to ensure we're working with the latest updates
      this.addAllAccountIds(this.allAccounts);

      // Force Vue reactivity update to show expanded view with updated data
      this.$forceUpdate();
    },
    // Collapse all nodes
    collapseAll: function collapseAll() {
      this.expandedNodes = [];
    },
    // Helper method to add all account IDs to expanded array
    addAllAccountIds: function addAllAccountIds(accounts) {
      var _this13 = this;
      accounts.forEach(function (account) {
        if (account.children && account.children.length > 0) {
          if (!_this13.expandedNodes.includes(account.id)) {
            _this13.expandedNodes.push(account.id);
          }
          _this13.addAllAccountIds(account.children);
        }
      });
    },
    printReport: function printReport() {
      window.print();
    },
    exportToExcel: function exportToExcel() {
      // TODO: Implement Excel export functionality
      this.$toast.info('', this.$t("Excel export functionality will be implemented soon"));
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/reports/trial-balance/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/reports/trial-balance/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    getAccountRowClass: function getAccountRowClass(account) {
      if (account.isTotalRow) {
        return 'table-warning font-weight-bold';
      }
      if (account.isParent) {
        return 'table-info font-weight-bold';
      }
      return '';
    },
    // Helper method to get the correct amount for display
    getDisplayAmount: function getDisplayAmount(account, field) {
      // Total rows should show children totals (sum of all leaf accounts under the parent)
      if (account.isTotalRow) {
        var childrenField = "children_".concat(field);
        return parseFloat(account[childrenField] || 0);
      }

      // Parent accounts should show empty cells (no amounts displayed)
      // Only leaf accounts and total rows show amounts
      if (account.isParent && !account.isTotalRow) {
        return null;
      }

      // Leaf accounts (individual accounts) should show their own amounts
      if (account.isLeaf) {
        return parseFloat(account[field] || 0);
      }

      // Fallback to the field value
      return parseFloat(account[field] || 0);
    }
  }
});
;// ./resources/js/pages/reports/trial-balance.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_trial_balancevue_type_script_lang_js = (trial_balancevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=ba5b3c12&prod&scoped=true&lang=css
var trial_balancevue_type_style_index_0_id_ba5b3c12_prod_scoped_true_lang_css = __webpack_require__(36300);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=ba5b3c12&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(trial_balancevue_type_style_index_0_id_ba5b3c12_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_trial_balancevue_type_style_index_0_id_ba5b3c12_prod_scoped_true_lang_css = (trial_balancevue_type_style_index_0_id_ba5b3c12_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=ba5b3c12&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/trial-balance.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_trial_balancevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ba5b3c12",
  null
  
)

/* harmony default export */ const trial_balance = (component.exports);

/***/ }

}]);