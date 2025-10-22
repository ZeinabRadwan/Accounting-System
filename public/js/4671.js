"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4671,5448],{

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

/***/ 36763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".currency-display[data-v-4be26f70]{align-items:center;display:inline-flex}.currency-svg[data-v-4be26f70]{display:inline-block;filter:brightness(.2) contrast(2) saturate(1.5);opacity:1;vertical-align:middle}.small-box .currency-svg[data-v-4be26f70]{filter:brightness(0) invert(1) contrast(1)}.currency-text[data-v-4be26f70]{margin:0 2px}[dir=rtl] .currency-display[data-v-4be26f70]{direction:rtl}[dir=rtl] .currency-display .currency-text[data-v-4be26f70]{text-align:right}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63376:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-58deea9b]{border:none!important}.account-statement-table[data-v-58deea9b]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-58deea9b]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-58deea9b]{border:none!important}.account-statement-table thead th[data-v-58deea9b]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-58deea9b]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-58deea9b]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-58deea9b]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-58deea9b]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.export-excel-btn[data-v-58deea9b],.export-pdf-btn[data-v-58deea9b]{background:#f6fef4!important;border:none;border-radius:10px;color:#2ab930!important}.print-btn[data-v-58deea9b]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.btn-group.c-w-100[data-v-58deea9b]{gap:10px}.card[data-v-58deea9b]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-58deea9b]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-58deea9b]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.table-responsive[data-v-58deea9b]{border:1px solid #dee2e6;border-radius:.375rem;overflow-y:auto}.table-sm td[data-v-58deea9b],.table-sm th[data-v-58deea9b]{font-size:.875rem;padding:.5rem .75rem}.table th[data-v-58deea9b]{border-bottom:2px solid #dee2e6;color:#495057;font-weight:600}.table tbody tr[data-v-58deea9b]:hover,.table th[data-v-58deea9b]{background-color:#f8f9fa}.table tbody tr.table-info[data-v-58deea9b]{background-color:#e3f2fd;font-weight:600}.table tbody tr.table-info[data-v-58deea9b]:hover{background-color:#bbdefb}.info-box[data-v-58deea9b]{background:#f8f9fa;border-radius:.375rem;margin-bottom:1rem;padding:1rem}.info-box[data-v-58deea9b],.info-box-icon[data-v-58deea9b]{align-items:center;display:flex}.info-box-icon[data-v-58deea9b]{border-radius:50%;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-58deea9b]{flex:1}.info-box-text[data-v-58deea9b]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-58deea9b]{color:#495057;display:block;font-size:1.5rem;font-weight:700}.badge[data-v-58deea9b]{font-size:.75rem;padding:.25rem .5rem}.font-weight-bold[data-v-58deea9b]{color:#212529}.text-muted[data-v-58deea9b]{color:#6c757d!important}.btn-link[data-v-58deea9b]{background:none;border:none;color:#007bff;padding:0;text-decoration:none}.btn-link[data-v-58deea9b]:hover{color:#0056b3;text-decoration:none}.btn-link[data-v-58deea9b]:focus{box-shadow:none;outline:none}.tree-toggle-icon[data-v-58deea9b]{transition:transform .2s ease}.tree-toggle-icon.expanded[data-v-58deea9b]{transform:rotate(90deg)}.tree-item-icon[data-v-58deea9b]{text-align:center;width:16px}.gap-2>*+*[data-v-58deea9b]{margin-left:.5rem}@media (max-width:768px){.gap-2[data-v-58deea9b]{align-items:stretch;flex-direction:column}.gap-2>*+*[data-v-58deea9b]{margin-left:0;margin-top:.5rem}}.trial-balance-table[data-v-58deea9b]{background:#fff;border:1px solid #dee2e6;font-size:16px}.table-header[data-v-58deea9b],.table-header th[data-v-58deea9b]{background:#f8f9fa}.table-header th[data-v-58deea9b]{border:1px solid #dee2e6;color:#495057;font-size:16px;font-weight:600;padding:12px 8px}.header-code[data-v-58deea9b]{width:10%}.header-account[data-v-58deea9b]{width:30%}.header-amount[data-v-58deea9b]{font-size:16px;width:12%}.trial-balance-table tbody tr[data-v-58deea9b]{border-bottom:1px solid #dee2e6}.trial-balance-table tbody tr[data-v-58deea9b]:hover{background:#f8f9fa}.trial-balance-table tbody tr.table-info[data-v-58deea9b]{background:#e9ecef;border-left:3px solid #6c757d;font-weight:600}.trial-balance-table tbody tr.table-info[data-v-58deea9b]:hover{background:#dee2e6}.trial-balance-table tbody tr.table-warning[data-v-58deea9b]{background:#fff3cd;border-left:3px solid #ffc107;font-weight:600}.trial-balance-table tbody tr.table-warning[data-v-58deea9b]:hover{background:#ffeaa7}.cell-code[data-v-58deea9b]{background:#f8f9fa}.cell-account[data-v-58deea9b],.cell-amount[data-v-58deea9b]{background:#fff}.cell-amount[data-v-58deea9b]{font-weight:600}.account-code-badge[data-v-58deea9b]{background:#6c757d;border-radius:4px;color:#fff;display:inline-block;font-size:16px;font-weight:600;padding:4px 8px}.account-name-container[data-v-58deea9b]{align-items:center;display:flex;padding:8px 0}.expand-btn[data-v-58deea9b]{align-items:center;background:none;border:none;border-radius:2px;color:#6c757d;display:flex;font-size:16px;height:20px;justify-content:center;margin-right:8px;min-width:20px;padding:2px;transition:color .2s ease}.expand-btn[data-v-58deea9b]:hover{background:#f8f9fa;color:#495057}.expand-spacer[data-v-58deea9b]{margin-right:8px;width:24px}.account-icon[data-v-58deea9b]{font-size:16px;margin-right:8px;text-align:center;width:16px}.account-icon.fa-folder[data-v-58deea9b]{color:#6c757d}.account-icon.fa-folder-open[data-v-58deea9b]{color:#495057}.account-icon.fa-file[data-v-58deea9b]{color:#adb5bd}.account-name[data-v-58deea9b]{color:#2c3e50;font-size:16px;font-weight:600}.total-row-name[data-v-58deea9b]{color:#d63384;font-style:italic;font-weight:700}.amount-value[data-v-58deea9b]{background:none;color:#495057;display:inline-block;font-size:16px;font-weight:600;min-width:80px;padding:0;text-align:right}.credit-amount[data-v-58deea9b],.debit-amount[data-v-58deea9b]{background:none;border:none;color:#495057}.closing-amount[data-v-58deea9b]{background:none;font-size:16px;font-weight:800}.amount-empty[data-v-58deea9b]{color:#adb5bd;font-size:16px;font-style:italic}.table-footer[data-v-58deea9b]{background:#f8f9fa;color:#495057}.grand-total-row[data-v-58deea9b]{background:#e9ecef;border-top:2px solid #6c757d}.grand-total-label[data-v-58deea9b]{font-weight:700;padding:12px 8px}.grand-total-amount[data-v-58deea9b],.grand-total-label[data-v-58deea9b]{background:none;color:#495057;font-size:16px}.grand-total-amount[data-v-58deea9b]{border:none;font-weight:600;margin:0;padding:0}.grand-total-amount.credit-amount[data-v-58deea9b],.grand-total-amount.debit-amount[data-v-58deea9b]{background:none;border:none}@media print{.no-print[data-v-58deea9b]{display:none!important}.card[data-v-58deea9b]{border:none!important;box-shadow:none!important}.table[data-v-58deea9b]{font-size:16px}.table-responsive[data-v-58deea9b]{overflow:visible}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 75448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CurrencyDisplay)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=template&id=4be26f70&scoped=true
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js


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
;// CONCATENATED MODULE: ./resources/js/components/CurrencyDisplay.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CurrencyDisplayvue_type_script_lang_js = (CurrencyDisplayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css
var CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css = __webpack_require__(36763);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css = (CurrencyDisplayvue_type_style_index_0_id_4be26f70_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/CurrencyDisplay.vue?vue&type=style&index=0&id=4be26f70&prod&scoped=true&lang=css

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
  "4be26f70",
  null
  
)

/* harmony default export */ const CurrencyDisplay = (component.exports);

/***/ }),

/***/ 74671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ trial_balance)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=template&id=58deea9b&scoped=true
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
      "for": "fiscal_year_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fiscal Year")))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.fiscalYears,
      "reduce": function reduce(year) {
        return year.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Fiscal Year'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingFiscalYears
    },
    on: {
      "search": _vm.searchFiscalYears,
      "input": _vm.onFiscalYearChange
    },
    model: {
      value: _vm.filters.fiscalYearId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "fiscalYearId", $$v);
      },
      expression: "filters.fiscalYearId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "accounting_period_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Accounting Period")))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.accountingPeriods,
      "reduce": function reduce(period) {
        return period.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Accounting Period'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingAccountingPeriods,
      "disabled": !_vm.filters.fiscalYearId
    },
    on: {
      "search": _vm.searchAccountingPeriods,
      "input": _vm.onAccountingPeriodChange
    },
    model: {
      value: _vm.filters.accountingPeriodId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "accountingPeriodId", $$v);
      },
      expression: "filters.accountingPeriodId"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "from_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("From Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.fromDate,
      expression: "filters.fromDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('From Date')
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
  }, [_vm._v(_vm._s(_vm.$t("To Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.toDate,
      expression: "filters.toDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('To Date')
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6",
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
  }), _vm._v("\n                  " + _vm._s(_vm.loading ? _vm.$t("Generating...") : _vm.$t("Generate Report")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success mb-3",
    attrs: {
      "disabled": !_vm.reportData
    },
    on: {
      "click": _vm.printReport
    }
  }, [_c('i', {
    staticClass: "fas fa-print me-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Print")) + "\n                ")]), _vm._v(" "), _c('a', {
    staticClass: "btn print-btn mb-3",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank",
      "disabled": !_vm.reportData
    }
  }, [_c('i', {
    staticClass: "fas fa-print me-1"
  })]), _vm._v(" "), _vm.reportData && _vm.reportData.trial_balance && _vm.reportData.trial_balance.length > 0 ? _c('button', {
    staticClass: "btn btn-outline-success mb-3",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.expandAll
    }
  }, [_c('i', {
    staticClass: "fas fa-expand-arrows-alt me-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Expand All")) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.trial_balance && _vm.reportData.trial_balance.length > 0 ? _c('button', {
    staticClass: "btn btn-outline-warning mb-3",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.collapseAll
    }
  }, [_c('i', {
    staticClass: "fas fa-compress-arrows-alt me-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Collapse All")) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn export-excel-btn mb-3",
    attrs: {
      "disabled": !_vm.reportData
    },
    on: {
      "click": _vm.exportToExcel
    }
  }, [_c('i', {
    staticClass: "fas fa-file-excel me-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Export Excel")) + "\n                ")]), _vm._v(" "), _vm.hasMoreData ? _c('button', {
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
    }, [_vm._v("\n                          " + _vm._s(account.name) + "\n                          "), _vm.isAccountCalculating(account.id) ? _c('i', {
      staticClass: "fas fa-spinner fa-spin ms-2 text-warning",
      attrs: {
        "title": "Calculating balance..."
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

;// CONCATENATED MODULE: ./resources/js/pages/reports/trial-balance.vue?vue&type=template&id=58deea9b&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/CurrencyDisplay.vue + 5 modules
var CurrencyDisplay = __webpack_require__(75448);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null
      },
      chartOfAccounts: [],
      subChartOfAccounts: [],
      fiscalYears: [],
      accountingPeriods: [],
      loadingChartOfAccounts: false,
      loadingSubChartOfAccounts: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items"])), {}, {
    hierarchicalAccounts: function hierarchicalAccounts() {
      if (!this.reportData || !this.reportData.trial_balance) {
        return [];
      }
      return this.buildHierarchicalList(this.reportData.trial_balance);
    },
    dateRangeDisplayName: function dateRangeDisplayName() {
      if (!this.reportData || !this.reportData.filters) {
        return this.$t('All Data');
      }
      var filters = this.reportData.filters;
      if (filters.fiscal_year_id) {
        // Find the fiscal year name from the loaded fiscal years
        var fiscalYear = this.fiscalYears.find(function (fy) {
          return fy.id === filters.fiscal_year_id;
        });
        return fiscalYear ? fiscalYear.name : this.$t('Fiscal Year');
      } else if (filters.accounting_period_id) {
        // Find the accounting period name from the loaded periods
        var accountingPeriod = this.accountingPeriods.find(function (ap) {
          return ap.id === filters.accounting_period_id;
        });
        return accountingPeriod ? accountingPeriod.name : this.$t('Accounting Period');
      } else if (filters.from_date && filters.to_date) {
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
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this.loadChartOfAccounts(), _this.loadFiscalYears()]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data, _error$response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loadingChartOfAccounts = true;
              _context2.prev = 1;
              _context2.next = 4;
              return axios_default().get("/api/chart-of-accounts");
            case 4:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this2.chartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              _this2.$toast.error('', ((_error$response = _context2.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t("Failed to load chart of accounts"));
            case 12:
              _context2.prev = 12;
              _this2.loadingChartOfAccounts = false;
              return _context2.finish(12);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 9, 12, 15]]);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountId) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get2, data, _error$response2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (parentAccountId) {
                _context3.next = 3;
                break;
              }
              _this3.subChartOfAccounts = [];
              return _context3.abrupt("return");
            case 3:
              _this3.loadingSubChartOfAccounts = true;
              _context3.prev = 4;
              _context3.next = 7;
              return axios_default().get("/api/reports/sub-chart-of-accounts?parent_account_id=".concat(parentAccountId));
            case 7:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              _this3.subChartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](4);
              _this3.$toast.error('', ((_error$response2 = _context3.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this3.$t("Failed to load sub accounts"));
            case 15:
              _context3.prev = 15;
              _this3.loadingSubChartOfAccounts = false;
              return _context3.finish(15);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 12, 15, 18]]);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data, _error$response3;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.loadingFiscalYears = true;
              _context4.prev = 1;
              _context4.next = 4;
              return axios_default().get("/api/fiscal-years");
            case 4:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              _this4.fiscalYears = data.data;
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              _this4.$toast.error('', ((_error$response3 = _context4.t0.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this4.$t("Failed to load fiscal years"));
            case 12:
              _context4.prev = 12;
              _this4.loadingFiscalYears = false;
              return _context4.finish(12);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 9, 12, 15]]);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods(fiscalYearId) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get4, data, _error$response4;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (fiscalYearId) {
                _context5.next = 3;
                break;
              }
              _this5.accountingPeriods = [];
              return _context5.abrupt("return");
            case 3:
              _this5.loadingAccountingPeriods = true;
              _context5.prev = 4;
              _context5.next = 7;
              return axios_default().get("/api/accounting-periods?fiscal_year_id=".concat(fiscalYearId));
            case 7:
              _yield$axios$get4 = _context5.sent;
              data = _yield$axios$get4.data;
              _this5.accountingPeriods = data.data;
              _context5.next = 15;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](4);
              _this5.$toast.error('', ((_error$response4 = _context5.t0.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this5.$t("Failed to load accounting periods"));
            case 15:
              _context5.prev = 15;
              _this5.loadingAccountingPeriods = false;
              return _context5.finish(15);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[4, 12, 15, 18]]);
      }))();
    },
    searchChartOfAccounts: function searchChartOfAccounts(search, loading) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get5, data, _error$response5;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              loading(true);
              _context6.prev = 1;
              _context6.next = 4;
              return axios_default().get("/api/chart-of-accounts?search=".concat(search));
            case 4:
              _yield$axios$get5 = _context6.sent;
              data = _yield$axios$get5.data;
              _this6.chartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              _this6.$toast.error('', ((_error$response5 = _context6.t0.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.message) || _this6.$t("Failed to search chart of accounts"));
            case 12:
              _context6.prev = 12;
              loading(false);
              return _context6.finish(12);
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 9, 12, 15]]);
      }))();
    },
    searchSubChartOfAccounts: function searchSubChartOfAccounts(search, loading) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get6, data, _error$response6;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this7.filters.chartOfAccountId) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              loading(true);
              _context7.prev = 3;
              _context7.next = 6;
              return axios_default().get("/api/reports/sub-chart-of-accounts?parent_account_id=".concat(_this7.filters.chartOfAccountId, "&search=").concat(search));
            case 6:
              _yield$axios$get6 = _context7.sent;
              data = _yield$axios$get6.data;
              _this7.subChartOfAccounts = data.data.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context7.next = 14;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](3);
              _this7.$toast.error('', ((_error$response6 = _context7.t0.response) === null || _error$response6 === void 0 || (_error$response6 = _error$response6.data) === null || _error$response6 === void 0 ? void 0 : _error$response6.message) || _this7.$t("Failed to search sub accounts"));
            case 14:
              _context7.prev = 14;
              loading(false);
              return _context7.finish(14);
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3, 11, 14, 17]]);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search, loading) {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _yield$axios$get7, data, _error$response7;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              loading(true);
              _context8.prev = 1;
              _context8.next = 4;
              return axios_default().get("/api/fiscal-years?search=".concat(search));
            case 4:
              _yield$axios$get7 = _context8.sent;
              data = _yield$axios$get7.data;
              _this8.fiscalYears = data.data;
              _context8.next = 12;
              break;
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](1);
              _this8.$toast.error('', ((_error$response7 = _context8.t0.response) === null || _error$response7 === void 0 || (_error$response7 = _error$response7.data) === null || _error$response7 === void 0 ? void 0 : _error$response7.message) || _this8.$t("Failed to search fiscal years"));
            case 12:
              _context8.prev = 12;
              loading(false);
              return _context8.finish(12);
            case 15:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 9, 12, 15]]);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search, loading) {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield$axios$get8, data, _error$response8;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (_this9.filters.fiscalYearId) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              loading(true);
              _context9.prev = 3;
              _context9.next = 6;
              return axios_default().get("/api/accounting-periods?fiscal_year_id=".concat(_this9.filters.fiscalYearId, "&search=").concat(search));
            case 6:
              _yield$axios$get8 = _context9.sent;
              data = _yield$axios$get8.data;
              _this9.accountingPeriods = data.data;
              _context9.next = 14;
              break;
            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](3);
              _this9.$toast.error('', ((_error$response8 = _context9.t0.response) === null || _error$response8 === void 0 || (_error$response8 = _error$response8.data) === null || _error$response8 === void 0 ? void 0 : _error$response8.message) || _this9.$t("Failed to search accounting periods"));
            case 14:
              _context9.prev = 14;
              loading(false);
              return _context9.finish(14);
            case 17:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[3, 11, 14, 17]]);
      }))();
    },
    onChartOfAccountChange: function onChartOfAccountChange(accountId) {
      this.filters.subChartOfAccountId = null;
      this.subChartOfAccounts = [];
      if (accountId) {
        this.loadSubChartOfAccounts(accountId);
      }
    },
    onFiscalYearChange: function onFiscalYearChange(fiscalYearId) {
      this.filters.accountingPeriodId = null;
      this.accountingPeriods = [];
      if (fiscalYearId) {
        this.loadAccountingPeriods(fiscalYearId);
      }
    },
    onAccountingPeriodChange: function onAccountingPeriodChange(accountingPeriodId) {
      // No dependent filters to clear for accounting period
      // This method is here for consistency with other filter change handlers
    },
    generateReport: function generateReport() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var params, response, _response$data$data, _response$data, errorMsg, errorMessage;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _this10.loading = true;
              _this10.allAccounts = [];
              _this10.calculatingAccounts.clear();
              _context10.prev = 3;
              params = new URLSearchParams();
              if (_this10.filters.chartOfAccountId) {
                params.append('chart_of_account_id', _this10.filters.chartOfAccountId);
              }
              if (_this10.filters.subChartOfAccountId) {
                params.append('sub_chart_of_account_id', _this10.filters.subChartOfAccountId);
              }
              if (_this10.filters.fiscalYearId) {
                params.append('fiscal_year_id', _this10.filters.fiscalYearId);
              }
              if (_this10.filters.accountingPeriodId) {
                params.append('accounting_period_id', _this10.filters.accountingPeriodId);
              }
              if (_this10.filters.fromDate) {
                params.append('from_date', _this10.filters.fromDate);
              }
              if (_this10.filters.toDate) {
                params.append('to_date', _this10.filters.toDate);
              }
              console.log('🌐 Loading all accounts with zero balances...');
              _context10.next = 14;
              return axios_default().get("/api/reports/trial-balance?".concat(params.toString()));
            case 14:
              response = _context10.sent;
              console.log('📡 API Response:', response);
              if (response.data && response.data.success === true) {
                // Load all accounts with zero balances
                _this10.reportData = response.data.data;
                _this10.allAccounts = _toConsumableArray(((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.trial_balance) || []);
                _this10.$toast.success('', _this10.$t("Trial balance structure loaded. Calculating balances..."));
                console.log('✅ All accounts loaded:', _this10.allAccounts.length);

                // Start calculating balances in chunks
                if (_this10.allAccounts.length > 0) {
                  _this10.startBalanceCalculations();
                }
              } else {
                errorMsg = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || _this10.$t("Failed to generate trial balance report");
                console.error('API Error:', errorMsg);
                _this10.$toast.error('', errorMsg);
              }
              _context10.next = 25;
              break;
            case 19:
              _context10.prev = 19;
              _context10.t0 = _context10["catch"](3);
              console.error('Trial Balance Error:', _context10.t0);
              errorMessage = _this10.$t("Failed to generate trial balance report");
              if (_context10.t0 && _typeof(_context10.t0) === 'object') {
                if (_context10.t0.response && _context10.t0.response.data && _context10.t0.response.data.message) {
                  errorMessage = _context10.t0.response.data.message;
                } else if (_context10.t0.message) {
                  errorMessage = _context10.t0.message;
                }
              }
              _this10.$toast.error('', errorMessage);
            case 25:
              _context10.prev = 25;
              _this10.loading = false;
              return _context10.finish(25);
            case 28:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[3, 19, 25, 28]]);
      }))();
    },
    startBalanceCalculations: function startBalanceCalculations() {
      var _this11 = this;
      console.log('🚀 Starting balance calculations for', this.allAccounts.length, 'accounts');

      // Get all account IDs
      var allAccountIds = this.getAllAccountIds(this.allAccounts);
      console.log('📋 Account IDs to calculate:', allAccountIds);

      // Mark all accounts as calculating
      allAccountIds.forEach(function (accountId) {
        _this11.calculatingAccounts.add(accountId);
      });

      // Update accounts to show calculating state
      this.updateAccountsCalculatingState(allAccountIds, true);

      // Calculate balances in chunks
      this.calculateBalancesInChunks(allAccountIds);
    },
    getAllAccountIds: function getAllAccountIds(accounts) {
      var accountIds = [];
      var extractIds = function extractIds(accountList) {
        accountList.forEach(function (account) {
          accountIds.push(account.id);
          if (account.children && account.children.length > 0) {
            extractIds(account.children);
          }
        });
      };
      extractIds(accounts);
      return accountIds;
    },
    updateAccountsCalculatingState: function updateAccountsCalculatingState(accountIds, isCalculating) {
      var updateAccount = function updateAccount(accountList) {
        accountList.forEach(function (account) {
          if (accountIds.includes(account.id)) {
            account.isCalculating = isCalculating;
          }
          if (account.children && account.children.length > 0) {
            updateAccount(account.children);
          }
        });
      };
      updateAccount(this.allAccounts);
    },
    calculateBalancesInChunks: function calculateBalancesInChunks(accountIds) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var i, accountId;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              console.log("\uD83D\uDCCA Processing ".concat(accountIds.length, " accounts one by one"));
              i = 0;
            case 2:
              if (!(i < accountIds.length)) {
                _context11.next = 19;
                break;
              }
              accountId = accountIds[i];
              console.log("\uD83D\uDD04 Processing account ".concat(i + 1, "/").concat(accountIds.length, " (ID: ").concat(accountId, ")"));
              _context11.prev = 5;
              _context11.next = 8;
              return _this12.calculateSingleAccountBalance(accountId);
            case 8:
              if (!(i < accountIds.length - 1)) {
                _context11.next = 11;
                break;
              }
              _context11.next = 11;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 50);
              });
            case 11:
              _context11.next = 16;
              break;
            case 13:
              _context11.prev = 13;
              _context11.t0 = _context11["catch"](5);
              console.error("\u274C Error processing account ".concat(accountId, ":"), _context11.t0);
            case 16:
              i++;
              _context11.next = 2;
              break;
            case 19:
              console.log('✅ All balance calculations completed');
              // Calculate totals after all accounts are loaded
              _this12.calculateGrandTotals();
            case 21:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[5, 13]]);
      }))();
    },
    calculateSingleAccountBalance: function calculateSingleAccountBalance(accountId) {
      var _this13 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var requestData, response, _response$data2;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              requestData = {
                account_id: accountId,
                fiscal_year_id: _this13.filters.fiscalYearId,
                accounting_period_id: _this13.filters.accountingPeriodId,
                from_date: _this13.filters.fromDate,
                to_date: _this13.filters.toDate
              };
              console.log('🌐 Calculating balance for account:', accountId);
              _context12.next = 5;
              return axios_default().post('/api/reports/calculate-account-balances', requestData);
            case 5:
              response = _context12.sent;
              if (response.data && response.data.success === true) {
                console.log('✅ Balance calculation successful for account', accountId);
                _this13.updateSingleAccountBalance(response.data.data.account);
              } else {
                console.error('❌ Balance calculation failed for account', accountId, ':', (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message);
              }
              _context12.next = 12;
              break;
            case 9:
              _context12.prev = 9;
              _context12.t0 = _context12["catch"](0);
              console.error('❌ Error calculating balance for account', accountId, ':', _context12.t0);
            case 12:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[0, 9]]);
      }))();
    },
    updateSingleAccountBalance: function updateSingleAccountBalance(calculatedAccount) {
      console.log('🔄 Updating single account balance:', calculatedAccount.id, calculatedAccount.name);
      console.log('📊 Calculated account data:', calculatedAccount);

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
        console.log('✅ Account balance updated successfully');
        console.log('📊 Updated account in allAccounts:', this.findAccountById(this.allAccounts, calculatedAccount.id));
      } else {
        console.error('❌ Failed to find account in hierarchy:', calculatedAccount.id);
        console.log('🔍 Available account IDs:', this.getAllAccountIds(this.allAccounts));
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
      console.log('🔍 Searching for account ID:', calculatedAccount.id, 'in', accounts.length, 'accounts');
      for (var i = 0; i < accounts.length; i++) {
        console.log('🔍 Checking account:', accounts[i].id, accounts[i].name);
        if (accounts[i].id === calculatedAccount.id) {
          console.log('✅ Found matching account, updating...');
          console.log('📊 Before update:', accounts[i]);

          // Update the account with calculated data
          accounts[i] = _objectSpread(_objectSpread(_objectSpread({}, accounts[i]), calculatedAccount), {}, {
            isCalculating: false
          });
          console.log('📊 After update:', accounts[i]);
          return true;
        }

        // Check children recursively
        if (accounts[i].children && accounts[i].children.length > 0) {
          console.log('🔍 Checking children of account:', accounts[i].id, '(', accounts[i].children.length, 'children)');
          if (this.updateAccountInHierarchy(accounts[i].children, calculatedAccount)) {
            return true;
          }
        }
      }
      console.log('❌ Account not found in this level of hierarchy');
      return false;
    },
    calculateGrandTotals: function calculateGrandTotals() {
      console.log('🧮 Calculating grand totals...');
      var totalMovementDebit = 0;
      var totalMovementCredit = 0;
      var totalNetMovementDebit = 0;
      var totalNetMovementCredit = 0;
      var totalOpeningDebit = 0;
      var totalOpeningCredit = 0;
      var totalClosingDebit = 0;
      var totalClosingCredit = 0;
      var calculateTotals = function calculateTotals(accounts) {
        accounts.forEach(function (account) {
          if (account.children && account.children.length > 0) {
            // Parent account - sum up children
            calculateTotals(account.children);
          } else {
            // Leaf account - add to totals
            var movementDebit = parseFloat(account.movement_debit || 0);
            var movementCredit = parseFloat(account.movement_credit || 0);
            var netMovementDebit = parseFloat(account.net_movement_debit || 0);
            var netMovementCredit = parseFloat(account.net_movement_credit || 0);
            var openingDebit = parseFloat(account.opening_debit || 0);
            var openingCredit = parseFloat(account.opening_credit || 0);
            var closingDebit = parseFloat(account.closing_debit || 0);
            var closingCredit = parseFloat(account.closing_credit || 0);

            // Log non-zero values to see what's contributing to grand totals
            if (movementDebit > 0 || movementCredit > 0 || netMovementDebit > 0 || netMovementCredit > 0 || openingDebit > 0 || openingCredit > 0 || closingDebit > 0 || closingCredit > 0) {
              console.log("\uD83D\uDCB0 Non-zero account: ".concat(account.name, " (").concat(account.id, ") - Movement: ").concat(movementDebit, "/").concat(movementCredit, ", Net: ").concat(netMovementDebit, "/").concat(netMovementCredit, ", Opening: ").concat(openingDebit, "/").concat(openingCredit, ", Closing: ").concat(closingDebit, "/").concat(closingCredit));
            }
            totalMovementDebit += movementDebit;
            totalMovementCredit += movementCredit;
            totalNetMovementDebit += netMovementDebit;
            totalNetMovementCredit += netMovementCredit;
            totalOpeningDebit += openingDebit;
            totalOpeningCredit += openingCredit;
            totalClosingDebit += closingDebit;
            totalClosingCredit += closingCredit;
          }
        });
      };
      calculateTotals(this.allAccounts);
      console.log('🧮 Grand total calculation results:');
      console.log('  - totalMovementDebit:', totalMovementDebit);
      console.log('  - totalMovementCredit:', totalMovementCredit);
      console.log('  - totalNetMovementDebit:', totalNetMovementDebit);
      console.log('  - totalNetMovementCredit:', totalNetMovementCredit);
      console.log('  - totalOpeningDebit:', totalOpeningDebit);
      console.log('  - totalOpeningCredit:', totalOpeningCredit);
      console.log('  - totalClosingDebit:', totalClosingDebit);
      console.log('  - totalClosingCredit:', totalClosingCredit);
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
      console.log('✅ Grand totals calculated:', grandTotals);
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
      var _this14 = this;
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var result = [];
      accounts.forEach(function (account) {
        var accountWithLevel = _objectSpread(_objectSpread({}, account), {}, {
          level: level,
          expanded: _this14.expandedNodes.includes(account.id),
          hasChildren: account.children && account.children.length > 0,
          isParent: account.children && account.children.length > 0,
          isLeaf: !account.children || account.children.length === 0
        });
        result.push(accountWithLevel);

        // Add children if expanded - recursively show ALL descendants
        if (accountWithLevel.expanded && account.children && account.children.length > 0) {
          var children = _this14.buildHierarchicalList(account.children, level + 1);
          result.push.apply(result, _toConsumableArray(children));

          // Add total row for this account's children
          if (children.length > 0) {
            // Calculate totals from direct children only (not their children)
            // Direct children are those that are exactly one level deeper
            var directChildren = children.filter(function (child) {
              return child.level === level + 1 && !child.isTotalRow;
            });
            var childrenTotals = {
              opening_debit: 0,
              opening_credit: 0,
              movement_debit: 0,
              movement_credit: 0,
              net_movement_debit: 0,
              net_movement_credit: 0,
              closing_debit: 0,
              closing_credit: 0
            };

            // Sum amounts from direct children only (their own amounts, not totals)
            directChildren.forEach(function (child) {
              // For parent accounts, use their total amounts
              // For leaf accounts, use their own amounts
              var amountField = child.isParent ? 'total_' : '';
              childrenTotals.opening_debit += child["".concat(amountField, "opening_debit")] || 0;
              childrenTotals.opening_credit += child["".concat(amountField, "opening_credit")] || 0;
              childrenTotals.movement_debit += child["".concat(amountField, "movement_debit")] || 0;
              childrenTotals.movement_credit += child["".concat(amountField, "movement_credit")] || 0;
              childrenTotals.net_movement_debit += child["".concat(amountField, "net_movement_debit")] || 0;
              childrenTotals.net_movement_credit += child["".concat(amountField, "net_movement_credit")] || 0;
              childrenTotals.closing_debit += child["".concat(amountField, "closing_debit")] || 0;
              childrenTotals.closing_credit += child["".concat(amountField, "closing_credit")] || 0;
            });
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
      var _this15 = this;
      accounts.forEach(function (account) {
        if (account.children && account.children.length > 0) {
          if (!_this15.expandedNodes.includes(account.id)) {
            _this15.expandedNodes.push(account.id);
          }
          _this15.addAllAccountIds(account.children);
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
      // Total rows should show children totals (sum of direct children's amounts)
      if (account.isTotalRow) {
        var childrenField = "children_".concat(field);
        var _value = account[childrenField] || 0;
        console.log("\uD83D\uDCB0 Total row ".concat(account.name, " ").concat(field, ":"), _value);
        return _value;
      }

      // Parent accounts should show empty cells (no amounts displayed)
      if (account.isParent && !account.isTotalRow) {
        console.log("\uD83D\uDCB0 Parent account ".concat(account.name, " ").concat(field, ": null (parent)"));
        return null;
      }

      // Leaf accounts (individual accounts) should show their own amounts
      if (account.isLeaf) {
        var _value2 = account[field] || 0;
        console.log("\uD83D\uDCB0 Leaf account ".concat(account.name, " ").concat(field, ":"), _value2, '(from account data)');
        return _value2;
      }

      // Fallback to the field value
      var value = account[field] || 0;
      console.log("\uD83D\uDCB0 Fallback ".concat(account.name, " ").concat(field, ":"), value);
      return value;
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/reports/trial-balance.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_trial_balancevue_type_script_lang_js = (trial_balancevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=58deea9b&prod&scoped=true&lang=css
var trial_balancevue_type_style_index_0_id_58deea9b_prod_scoped_true_lang_css = __webpack_require__(63376);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=58deea9b&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(trial_balancevue_type_style_index_0_id_58deea9b_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_trial_balancevue_type_style_index_0_id_58deea9b_prod_scoped_true_lang_css = (trial_balancevue_type_style_index_0_id_58deea9b_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/reports/trial-balance.vue?vue&type=style&index=0&id=58deea9b&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/reports/trial-balance.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_trial_balancevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "58deea9b",
  null
  
)

/* harmony default export */ const trial_balance = (component.exports);

/***/ })

}]);