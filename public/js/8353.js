"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8353],{

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

/***/ 96835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-02a1a50c]{cursor:pointer;text-decoration:none}.modal-content[data-v-02a1a50c]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 42996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-77923dd0]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-77923dd0]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-77923dd0]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-77923dd0]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-77923dd0]:after{display:none}.form-card .card-header .section-title i[data-v-77923dd0]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-77923dd0]{padding:16px}.section-title[data-v-77923dd0]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-77923dd0]{margin-bottom:1rem}.form-group label[data-v-77923dd0]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-77923dd0]{color:#dc3545;font-weight:700}.row[data-v-77923dd0]{margin-bottom:1rem}.row[data-v-77923dd0]:last-child{margin-bottom:0}.auto-assign-btn[data-v-77923dd0]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-77923dd0]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-77923dd0]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-77923dd0]{text-align:center}.image-preview img[data-v-77923dd0]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-77923dd0]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-77923dd0]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-77923dd0]{color:#6c757d}.create-button[data-v-77923dd0]{cursor:pointer;text-decoration:none}@media (max-width:768px){.section-title[data-v-77923dd0]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-77923dd0]{padding:.75rem}.auto-assign-btn[data-v-77923dd0]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-77923dd0]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-77923dd0]{margin-bottom:0}.is-invalid[data-v-77923dd0]{border-color:#dc3545!important}.invalid-feedback[data-v-77923dd0]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-77923dd0]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-77923dd0]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-77923dd0]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-77923dd0]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-77923dd0]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-77923dd0]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-77923dd0]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-77923dd0]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-77923dd0]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-77923dd0]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-77923dd0]{flex-direction:column;gap:.5rem}.option-content[data-v-77923dd0]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-77923dd0]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-77923dd0]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-499ed608]{margin-bottom:15px}.footer-buttons[data-v-499ed608]{display:flex;gap:10px}.footer-buttons .btn[data-v-499ed608]{margin-right:10px}.footer-buttons .btn[data-v-499ed608]:last-child{margin-right:0}.create-btn[data-v-499ed608]{padding:11px}.chart-account-success[data-v-499ed608],.chart-account-warning[data-v-499ed608]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.chart-account-warning[data-v-499ed608]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107}.chart-account-success[data-v-499ed608]{background:linear-gradient(135deg,#d4edda,#c3e6cb);border:1px solid #28a745}.success-content[data-v-499ed608],.warning-content[data-v-499ed608]{align-items:center;display:flex;gap:16px}.success-icon[data-v-499ed608],.warning-icon[data-v-499ed608]{flex-shrink:0;font-size:24px}.warning-icon[data-v-499ed608]{color:#856404}.success-icon[data-v-499ed608]{color:#155724}.success-text[data-v-499ed608],.warning-text[data-v-499ed608]{flex-grow:1}.success-title[data-v-499ed608],.warning-title[data-v-499ed608]{font-size:14px;font-weight:600;margin:0 0 4px}.warning-title[data-v-499ed608]{color:#856404}.success-title[data-v-499ed608]{color:#155724}.success-description[data-v-499ed608],.warning-description[data-v-499ed608]{font-size:13px;margin:0;opacity:.8}.warning-description[data-v-499ed608]{color:#856404}.success-description[data-v-499ed608]{color:#155724}.warning-action[data-v-499ed608]{flex-shrink:0}.button-plus.icon-shape.icon-sm.btn-primary[data-v-499ed608]{padding:0}.btn-primary[data-v-499ed608]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-499ed608]:disabled{box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.success-content[data-v-499ed608],.warning-content[data-v-499ed608]{flex-direction:column;gap:12px;text-align:center}.btn-primary[data-v-499ed608],.warning-action[data-v-499ed608]{width:100%}}.client-status[data-v-499ed608]{font-size:13px}.client-success[data-v-499ed608],.client-warning[data-v-499ed608]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.client-warning[data-v-499ed608]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.client-success[data-v-499ed608]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.btn-outline-warning[data-v-499ed608]{border-color:#ffc107;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-499ed608]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-499ed608]:disabled{cursor:not-allowed;opacity:.6}.product-status[data-v-499ed608]{font-size:13px}.product-success[data-v-499ed608],.product-warning[data-v-499ed608]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.product-warning[data-v-499ed608]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.product-success[data-v-499ed608]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.account-status[data-v-499ed608]{font-size:13px}.account-success[data-v-499ed608],.account-warning[data-v-499ed608]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.account-warning[data-v-499ed608]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.account-success[data-v-499ed608]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.radio-group-horizontal[data-v-499ed608]{align-items:center;display:flex;flex-direction:row;gap:20px}.radio-group-horizontal .form-check[data-v-499ed608]{align-items:center;display:flex;margin-bottom:0}.radio-group-horizontal .form-check-input[data-v-499ed608]{margin-right:8px}.radio-group-horizontal .form-check-label[data-v-499ed608]{cursor:pointer;margin-bottom:0}.text-warning[data-v-499ed608]{color:#856404!important}.text-warning small[data-v-499ed608]{font-size:12px;font-weight:500}.text-warning i[data-v-499ed608]{margin-right:4px}.table-custom[data-v-499ed608]{border:none!important}.invoices-create-table[data-v-499ed608]{border-collapse:separate;border-spacing:0}.invoices-create-table thead th[data-v-499ed608]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-create-table thead tr[data-v-499ed608]{border:none!important}.invoices-create-table thead th[data-v-499ed608]:first-child{border-top-left-radius:10px}.invoices-create-table thead th[data-v-499ed608]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-499ed608]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-499ed608]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-499ed608]{gap:10px}.card[data-v-499ed608]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-499ed608]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.invoices-create-table .badge.badge-danger[data-v-499ed608]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-499ed608]{background:#fff!important}.quantity-field[data-v-499ed608]{border-radius:0!important;margin:0!important;min-height:50px!important}.btn-primary[data-v-499ed608]{background:#2ab930!important}.btn-secondary[data-v-499ed608]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.stock-warning-alert[data-v-499ed608]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.stock-warning-content[data-v-499ed608]{align-items:flex-start;display:flex;gap:16px}.stock-warning-icon[data-v-499ed608]{color:#856404;flex-shrink:0;font-size:24px;margin-top:2px}.stock-warning-text[data-v-499ed608]{flex-grow:1}.stock-warning-title[data-v-499ed608]{color:#856404;font-size:16px;font-weight:600;margin:0 0 8px}.stock-warning-description[data-v-499ed608]{color:#856404;font-size:14px;margin:0 0 12px;opacity:.9}.stock-warning-list[data-v-499ed608]{list-style:none;margin:0;padding-left:20px}.stock-warning-item[data-v-499ed608]{background-color:hsla(0,0%,100%,.5);border-left:3px solid #ffc107;border-radius:6px;color:#856404;font-size:14px;margin-bottom:8px;padding:8px 12px}.stock-warning-item[data-v-499ed608]:last-child{margin-bottom:0}.product-name[data-v-499ed608]{color:#856404;font-weight:600;margin-right:8px}.stock-details[data-v-499ed608]{color:#856404;opacity:.8}.stock-details strong[data-v-499ed608]{color:#856404;font-weight:600}[dir=rtl] .stock-warning-list[data-v-499ed608]{padding-left:0;padding-right:20px}[dir=rtl] .stock-warning-item[data-v-499ed608]{border-left:none;border-right:3px solid #ffc107}[dir=rtl] .product-name[data-v-499ed608]{margin-left:8px;margin-right:0}@media (max-width:768px){.stock-warning-content[data-v-499ed608]{flex-direction:column;gap:12px;text-align:center}.stock-warning-icon[data-v-499ed608]{align-self:center}.stock-warning-list[data-v-499ed608]{padding-left:0;text-align:left}[dir=rtl] .stock-warning-list[data-v-499ed608]{text-align:right}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 54923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToWords = exports.DefaultToWordsOptions = exports.DefaultConverterOptions = void 0;
const en_AE_1 = __importDefault(__webpack_require__(8550));
const en_BD_1 = __importDefault(__webpack_require__(41061));
const en_GH_1 = __importDefault(__webpack_require__(59096));
const en_IE_1 = __importDefault(__webpack_require__(99089));
const en_IN_1 = __importDefault(__webpack_require__(144));
const en_MM_1 = __importDefault(__webpack_require__(38765));
const en_MU_1 = __importDefault(__webpack_require__(74261));
const en_NG_1 = __importDefault(__webpack_require__(92952));
const en_NP_1 = __importDefault(__webpack_require__(26365));
const en_US_1 = __importDefault(__webpack_require__(84463));
const en_GB_1 = __importDefault(__webpack_require__(54330));
const en_PH_1 = __importDefault(__webpack_require__(82779));
const fa_IR_1 = __importDefault(__webpack_require__(10982));
const fr_BE_1 = __importDefault(__webpack_require__(69543));
const fr_FR_1 = __importDefault(__webpack_require__(28834));
const gu_IN_1 = __importDefault(__webpack_require__(47229));
const hi_IN_1 = __importDefault(__webpack_require__(37460));
const mr_IN_1 = __importDefault(__webpack_require__(33972));
const pt_BR_1 = __importDefault(__webpack_require__(21722));
const tr_TR_1 = __importDefault(__webpack_require__(44130));
const nl_SR_1 = __importDefault(__webpack_require__(55101));
const ee_EE_1 = __importDefault(__webpack_require__(74938));
const ko_KR_1 = __importDefault(__webpack_require__(58041));
exports.DefaultConverterOptions = {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
};
exports.DefaultToWordsOptions = {
    localeCode: 'en-IN',
    converterOptions: exports.DefaultConverterOptions,
};
class ToWords {
    constructor(options = {}) {
        this.options = {};
        this.locale = undefined;
        this.options = Object.assign({}, exports.DefaultToWordsOptions, options);
    }
    getLocaleClass() {
        /* eslint-disable @typescript-eslint/no-var-requires */
        switch (this.options.localeCode) {
            case 'ee-EE':
                return ee_EE_1.default;
            case 'en-AE':
                return en_AE_1.default;
            case 'en-BD':
                return en_BD_1.default;
            case 'en-GH':
                return en_GH_1.default;
            case 'en-IE':
                return en_IE_1.default;
            case 'en-IN':
                return en_IN_1.default;
            case 'en-MM':
                return en_MM_1.default;
            case 'en-MU':
                return en_MU_1.default;
            case 'en-NG':
                return en_NG_1.default;
            case 'en-NP':
                return en_NP_1.default;
            case 'en-US':
                return en_US_1.default;
            case 'en-GB':
                return en_GB_1.default;
            case 'en-PH':
                return en_PH_1.default;
            case 'fa-IR':
                return fa_IR_1.default;
            case 'fr-BE':
                return fr_BE_1.default;
            case 'fr-FR':
                return fr_FR_1.default;
            case 'gu-IN':
                return gu_IN_1.default;
            case 'hi-IN':
                return hi_IN_1.default;
            case 'mr-IN':
                return mr_IN_1.default;
            case 'pt-BR':
                return pt_BR_1.default;
            case 'tr-TR':
                return tr_TR_1.default;
            case 'nl-SR':
                return nl_SR_1.default;
            case 'ko-KR':
                return ko_KR_1.default;
        }
        /* eslint-enable @typescript-eslint/no-var-requires */
        throw new Error(`Unknown Locale "${this.options.localeCode}"`);
    }
    getLocale() {
        if (this.locale === undefined) {
            const LocaleClass = this.getLocaleClass();
            this.locale = new LocaleClass();
        }
        return this.locale;
    }
    convert(number, options = {}) {
        var _a;
        options = Object.assign({}, this.options.converterOptions, options);
        if (!this.isValidNumber(number)) {
            throw new Error(`Invalid Number "${number}"`);
        }
        if (options.ignoreDecimal) {
            number = Number.parseInt(number.toString());
        }
        let words = [];
        if (options.currency) {
            words = this.convertCurrency(number, options);
        }
        else {
            words = this.convertNumber(number);
        }
        if ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.config.trim) {
            return words.join('');
        }
        return words.join(' ');
    }
    convertNumber(number) {
        var _a, _b, _c;
        const locale = this.getLocale();
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        const split = number.toString().split('.');
        const ignoreZero = this.isNumberZero(number) && locale.config.ignoreZeroInDecimals;
        let words = this.convertInternal(Number(split[0]));
        const isFloat = this.isFloat(number);
        if (isFloat && ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.point);
            }
            if (split[1].startsWith('0') && !((_a = locale.config) === null || _a === void 0 ? void 0 : _a.decimalLengthWordMapping)) {
                const zeroWords = [];
                for (const num of split[1]) {
                    zeroWords.push(...this.convertInternal(Number(num)));
                }
                wordsWithDecimal.push(...zeroWords);
            }
            else {
                wordsWithDecimal.push(...this.convertInternal(Number(split[1])));
                const decimalLengthWord = (_c = (_b = locale.config) === null || _b === void 0 ? void 0 : _b.decimalLengthWordMapping) === null || _c === void 0 ? void 0 : _c[split[1].length];
                if (decimalLengthWord) {
                    wordsWithDecimal.push(decimalLengthWord);
                }
            }
        }
        const isEmpty = words.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        words.push(...wordsWithDecimal);
        return words;
    }
    convertCurrency(number, options = {}) {
        var _a, _b, _c, _d;
        const locale = this.getLocale();
        const currencyOptions = (_a = options.currencyOptions) !== null && _a !== void 0 ? _a : locale.config.currency;
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        number = this.toFixed(number);
        // Extra check for isFloat to overcome 1.999 rounding off to 2
        const split = number.toString().split('.');
        let words = [...this.convertInternal(Number(split[0]))];
        // Determine if the main currency should be in singular form
        // e.g. 1 Dollar Only instead of 1 Dollars Only
        if (Number(split[0]) === 1 && currencyOptions.singular) {
            words.push(currencyOptions.name);
        }
        else if (currencyOptions.plural) {
            words.push(currencyOptions.plural);
        }
        const ignoreZero = this.isNumberZero(number) &&
            (options.ignoreZeroCurrency || (((_b = locale.config) === null || _b === void 0 ? void 0 : _b.ignoreZeroInDecimals) && number !== 0));
        if (ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        const isFloat = this.isFloat(number);
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.and);
            }
            const decimalPart = Number(split[1]) * (!locale.config.decimalLengthWordMapping ? Math.pow(10, 2 - split[1].length) : 1);
            wordsWithDecimal.push(...this.convertInternal(decimalPart));
            const decimalLengthWord = (_d = (_c = locale.config) === null || _c === void 0 ? void 0 : _c.decimalLengthWordMapping) === null || _d === void 0 ? void 0 : _d[split[1].length];
            if (decimalLengthWord === null || decimalLengthWord === void 0 ? void 0 : decimalLengthWord.length) {
                wordsWithDecimal.push(decimalLengthWord);
            }
            // Determine if the fractional unit should be in singular form
            // e.g. 1 Dollar and 1 Cent Only instead of 1 Dollar and 1 Cents Only
            if (decimalPart === 1 && currencyOptions.fractionalUnit.singular) {
                wordsWithDecimal.push(currencyOptions.fractionalUnit.singular);
            }
            else {
                wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
            }
        }
        else if (locale.config.decimalLengthWordMapping && words.length) {
            wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
        }
        const isEmpty = words.length <= 0 && wordsWithDecimal.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        if (!isEmpty && locale.config.texts.only && !options.doNotAddOnly && !locale.config.onlyInFront) {
            wordsWithDecimal.push(locale.config.texts.only);
        }
        if (wordsWithDecimal.length) {
            words.push(...wordsWithDecimal);
        }
        if (!isEmpty && !options.doNotAddOnly && locale.config.onlyInFront) {
            words.splice(0, 0, locale.config.texts.only);
        }
        return words;
    }
    convertInternal(number) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const locale = this.getLocale();
        if (locale.config.exactWordsMapping) {
            const exactMatch = (_b = (_a = locale.config) === null || _a === void 0 ? void 0 : _a.exactWordsMapping) === null || _b === void 0 ? void 0 : _b.find((elem) => {
                return number === elem.number;
            });
            if (exactMatch) {
                return [exactMatch.value];
            }
        }
        const match = locale.config.numberWordsMapping.find((elem) => {
            return number >= elem.number;
        });
        const words = [];
        if (number <= 100 || (number < 1000 && locale.config.namedLessThan1000)) {
            words.push(match.value);
            number -= match.number;
            if (number > 0) {
                if ((_d = (_c = locale.config) === null || _c === void 0 ? void 0 : _c.splitWord) === null || _d === void 0 ? void 0 : _d.length) {
                    words.push(locale.config.splitWord);
                }
                words.push(...this.convertInternal(number));
            }
            return words;
        }
        const quotient = Math.floor(number / match.number);
        const remainder = number % match.number;
        let matchValue = match.value;
        if (quotient > 1 && ((_f = (_e = locale.config) === null || _e === void 0 ? void 0 : _e.pluralWords) === null || _f === void 0 ? void 0 : _f.find((word) => word === match.value)) && ((_g = locale.config) === null || _g === void 0 ? void 0 : _g.pluralMark)) {
            matchValue += locale.config.pluralMark;
        }
        if (quotient === 1 && ((_j = (_h = locale.config) === null || _h === void 0 ? void 0 : _h.ignoreOneForWords) === null || _j === void 0 ? void 0 : _j.includes(matchValue))) {
            words.push(matchValue);
        }
        else {
            words.push(...this.convertInternal(quotient), matchValue);
        }
        if (remainder > 0) {
            if ((_l = (_k = locale.config) === null || _k === void 0 ? void 0 : _k.splitWord) === null || _l === void 0 ? void 0 : _l.length) {
                if (!((_o = (_m = locale.config) === null || _m === void 0 ? void 0 : _m.noSplitWordAfter) === null || _o === void 0 ? void 0 : _o.find((word) => word === match.value))) {
                    words.push(locale.config.splitWord);
                }
            }
            words.push(...this.convertInternal(remainder));
        }
        return words;
    }
    toFixed(number, precision = 2) {
        return Number(Number(number).toFixed(precision));
    }
    isFloat(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    isValidNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
    isNumberZero(number) {
        return number >= 0 && number < 1;
    }
}
exports.ToWords = ToWords;


/***/ }),

/***/ 74938:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Eurot',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Sent',
                    singular: 'Sent',
                    plural: 'Senti',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Ja',
                minus: 'Miinus',
                only: 'Ainult',
                point: 'Koma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Kvadriljon' },
                { number: 1000000000000, value: 'Triljon' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljon' },
                { number: 1000, value: 'Tuhat' },
                { number: 900, value: 'Üheksasada' },
                { number: 800, value: 'Kaheksasada' },
                { number: 700, value: 'Seitsesada' },
                { number: 600, value: 'Kuussada' },
                { number: 500, value: 'Viissada' },
                { number: 400, value: 'Nelisada' },
                { number: 300, value: 'Kolmsada' },
                { number: 200, value: 'Kakssada' },
                { number: 100, value: 'Sada' },
                { number: 90, value: 'Üheksakümmend' },
                { number: 80, value: 'Kaheksakümmend' },
                { number: 70, value: 'Seitsekümmend' },
                { number: 60, value: 'Kuuskümmend' },
                { number: 50, value: 'Viiskümmend' },
                { number: 40, value: 'Nelikümmend' },
                { number: 30, value: 'Kolmkümmend' },
                { number: 20, value: 'Kakskümmend' },
                { number: 19, value: 'Üheksateist' },
                { number: 18, value: 'Kaheksateist' },
                { number: 17, value: 'Seitseteist' },
                { number: 16, value: 'Kuusteist' },
                { number: 15, value: 'Viisteist' },
                { number: 14, value: 'Neliteist' },
                { number: 13, value: 'Kolmteist' },
                { number: 12, value: 'Kaksteist' },
                { number: 11, value: 'Üksteist' },
                { number: 10, value: 'Kümme' },
                { number: 9, value: 'Üheksa' },
                { number: 8, value: 'Kaheksa' },
                { number: 7, value: 'Seitse' },
                { number: 6, value: 'Kuus' },
                { number: 5, value: 'Viis' },
                { number: 4, value: 'Neli' },
                { number: 3, value: 'Kolm' },
                { number: 2, value: 'Kaks' },
                { number: 1, value: 'Üks' },
                { number: 0, value: 'Null' },
            ],
            ignoreOneForWords: [
                'Sada',
                'Kakssada',
                'Kolmsada',
                'Nelisada',
                'Viissada',
                'Kuussada',
                'Seitsesada',
                'Kaheksasada',
                'Üheksasada',
            ],
            exactWordsMapping: [
                {
                    number: 100,
                    value: 'Ükssada',
                },
            ],
            pluralWords: ['Miljon', 'Miljard', 'Trillion', 'Kvadriljon'],
            pluralMark: 'it',
            onlyInFront: true,
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 8550:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dirham',
                plural: 'Dirhams',
                singular: 'Dirham',
                symbol: '',
                fractionalUnit: {
                    name: 'Fil',
                    singular: 'Fil',
                    plural: 'Fils',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 41061:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Taka',
                plural: 'Taka',
                singular: 'Taka',
                symbol: '৳',
                fractionalUnit: {
                    name: 'Poysha',
                    singular: 'Poysha',
                    plural: 'Poysha',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 54330:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Pound',
                plural: 'Pounds',
                singular: 'Pound',
                symbol: '£',
                fractionalUnit: {
                    name: 'Pence',
                    plural: 'Pence',
                    singular: 'Penny',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 59096:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Cedi',
                plural: 'Cedis',
                singular: 'Cedi',
                symbol: 'GH¢',
                fractionalUnit: {
                    name: 'Pesewa',
                    singular: 'Pesewa',
                    plural: 'Pesewas',
                    symbol: 'Gp',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 99089:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Eurocent',
                    plural: 'Eurocents',
                    singular: 'Eurocent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    plural: 'Paise',
                    singular: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 38765:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Kyat',
                plural: 'Kyats',
                singular: 'Kyat',
                symbol: 'K',
                fractionalUnit: {
                    name: 'Pya',
                    singular: 'Pya',
                    plural: 'Pyas',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 74261:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: 'Rs',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 92952:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Naira',
                plural: 'Naira',
                singular: 'Naira',
                symbol: '₦',
                fractionalUnit: {
                    name: 'Kobo',
                    singular: 'Kobo',
                    plural: 'Kobo',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 26365:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    singular: 'Paisa',
                    plural: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 100000000000, value: 'Kharab' },
                { number: 1000000000, value: 'Arab' },
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 82779:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso',
                plural: 'Pesos',
                singular: 'Peso',
                symbol: '₱',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 84463:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dollar',
                plural: 'Dollars',
                singular: 'Dollar',
                symbol: '$',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    singular: 'Cent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 10982:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'تومان',
                plural: '',
                singular: '',
                symbol: 'تومان',
                fractionalUnit: {
                    name: '',
                    singular: 'ریال',
                    plural: 'تومان',
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'منفی',
                only: '',
                point: 'و',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'کوادریلیون' },
                { number: 1000000000000, value: 'تیلیارد' },
                { number: 1000000000, value: 'میلیارد' },
                { number: 1000000, value: 'میلیون' },
                { number: 1000, value: 'هزار' },
                { number: 900, value: 'نهصد' },
                { number: 800, value: 'هشتصد' },
                { number: 700, value: 'هفتصد' },
                { number: 600, value: 'ششصد' },
                { number: 500, value: 'پانصد' },
                { number: 400, value: 'چهارصد' },
                { number: 300, value: 'سیصد' },
                { number: 200, value: 'دویست' },
                { number: 100, value: 'صد' },
                { number: 90, value: 'نود' },
                { number: 80, value: 'هشتاد' },
                { number: 70, value: 'هفتاد' },
                { number: 60, value: 'شصت' },
                { number: 50, value: 'پنجاه' },
                { number: 40, value: 'چهل' },
                { number: 30, value: 'سی' },
                { number: 20, value: 'بیست' },
                { number: 19, value: 'نوزده' },
                { number: 18, value: 'هجده' },
                { number: 17, value: 'هفده' },
                { number: 16, value: 'شانزده' },
                { number: 15, value: 'پانزده' },
                { number: 14, value: 'چهارده' },
                { number: 13, value: 'سیزده' },
                { number: 12, value: 'دوازده' },
                { number: 11, value: 'یازده' },
                { number: 10, value: 'ده' },
                { number: 9, value: 'نه' },
                { number: 8, value: 'هشت' },
                { number: 7, value: 'هفت' },
                { number: 6, value: 'شش' },
                { number: 5, value: 'پنج' },
                { number: 4, value: 'چهار' },
                { number: 3, value: 'سه' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'یک' },
                { number: 0, value: 'صفر' },
            ],
            namedLessThan1000: true,
            splitWord: 'و',
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'دهم',
                2: 'صدم',
                3: 'هزارم',
                4: 'ده‌هزارم',
                5: 'صد‌هزارم',
                6: 'میلیونیوم',
                7: 'ده‌میلیونیوم',
                8: 'صد‌میلیونیوم',
                9: 'میلیاردیوم',
            },
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 69543:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Nonante-Neuf' },
                { number: 98, value: 'Nonante-Huit' },
                { number: 97, value: 'Nonante-Sept' },
                { number: 96, value: 'Nonante-Six' },
                { number: 95, value: 'Nonante-Cinq' },
                { number: 94, value: 'Nonante-Quatre' },
                { number: 93, value: 'Nonante-Trois' },
                { number: 92, value: 'Nonante-Deux' },
                { number: 91, value: 'Nonante-Et-Un' },
                { number: 90, value: 'Nonante' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Septante-Neuf' },
                { number: 78, value: 'Septante-Huit' },
                { number: 77, value: 'Septante-Sept' },
                { number: 76, value: 'Septante-Six' },
                { number: 75, value: 'Septante-Cinq' },
                { number: 74, value: 'Septante-Quatre' },
                { number: 73, value: 'Septante-Trois' },
                { number: 72, value: 'Septante-Deux' },
                { number: 71, value: 'Septante-Et-Un' },
                { number: 70, value: 'Septante' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante-Et-Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante-Et-Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante-Et-Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente-Et-Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt-Et-Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 28834:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 47229:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'રૂપિયો',
                plural: 'રૂપિયા',
                singular: 'રૂપિયો',
                symbol: '₹',
                fractionalUnit: {
                    name: 'પૈસા',
                    singular: 'પૈસા',
                    plural: 'પૈસા',
                    symbol: '',
                },
            },
            texts: {
                and: 'અને',
                minus: 'ઋણ',
                // only: 'માત્ર',
                only: '',
                point: 'દશાંશ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'કરોડ' },
                { number: 100000, value: 'લાખ' },
                { number: 1000, value: 'હજાર' },
                { number: 100, value: 'સો' },
                { number: 99, value: 'નવ્વાણું' },
                { number: 98, value: 'અઠ્ઠાણું' },
                { number: 97, value: 'સત્તાણું' },
                { number: 96, value: 'છન્નું' },
                { number: 95, value: 'પંચાણું' },
                { number: 94, value: 'ચોરાણું' },
                { number: 93, value: 'ત્રાણું' },
                { number: 92, value: 'બાણું' },
                { number: 91, value: 'એકાણું' },
                { number: 90, value: 'નેવું' },
                { number: 89, value: 'નેવ્યાસી' },
                { number: 88, value: 'ઈઠ્યાસી' },
                { number: 87, value: 'સિત્યાસી' },
                { number: 86, value: 'છ્યાસી' },
                { number: 85, value: 'પંચ્યાસી' },
                { number: 84, value: 'ચોર્યાસી' },
                { number: 83, value: 'ત્યાસી' },
                { number: 82, value: 'બ્યાસી' },
                { number: 81, value: 'એક્યાસી' },
                { number: 80, value: 'એંસી' },
                { number: 79, value: 'ઓગણાએંસી' },
                { number: 78, value: 'ઇઠ્યોતેર' },
                { number: 77, value: 'સિત્યોતેર' },
                { number: 76, value: 'છોતેર' },
                { number: 75, value: 'પંચોતેર' },
                { number: 74, value: 'ચુમોતેર' },
                { number: 73, value: 'તોતેર' },
                { number: 72, value: 'બોતેર' },
                { number: 71, value: 'એકોતેર' },
                { number: 70, value: 'સિત્તેર' },
                { number: 69, value: 'ઓગણોસિત્તેર' },
                { number: 68, value: 'અડસઠ' },
                { number: 67, value: 'સડસઠ' },
                { number: 66, value: 'છાસઠ' },
                { number: 65, value: 'પાંસઠ' },
                { number: 64, value: 'ચોસઠ' },
                { number: 63, value: 'ત્રેસઠ' },
                { number: 62, value: 'બાસઠ' },
                { number: 61, value: 'એકસઠ' },
                { number: 60, value: 'સાઈઠ' },
                { number: 59, value: 'ઓગણસાઠ' },
                { number: 58, value: 'અઠ્ઠાવન' },
                { number: 57, value: 'સત્તાવન' },
                { number: 56, value: 'છપ્પન' },
                { number: 55, value: 'પંચાવન' },
                { number: 54, value: 'ચોપન' },
                { number: 53, value: 'ત્રેપન' },
                { number: 52, value: 'બાવન' },
                { number: 51, value: 'એકાવન' },
                { number: 50, value: 'પચાસ' },
                { number: 49, value: 'ઓગણપચાસ' },
                { number: 48, value: 'સુડતાલીસ' },
                { number: 47, value: 'સુડતાલીસ' },
                { number: 46, value: 'છેતાલીસ' },
                { number: 45, value: 'પિસ્તાલીસ' },
                { number: 44, value: 'ચુંમાલીસ' },
                { number: 43, value: 'ત્રેતાલીસ' },
                { number: 42, value: 'એકતાલીસ' },
                { number: 41, value: 'એકતાલીસ' },
                { number: 40, value: 'ચાલીસ' },
                { number: 39, value: 'ઓગણચાલીસ' },
                { number: 38, value: 'આડત્રીસ' },
                { number: 37, value: 'સાડત્રીસ' },
                { number: 36, value: 'છત્રીસ' },
                { number: 35, value: 'પાંત્રીસ' },
                { number: 34, value: 'ચોત્રીસ' },
                { number: 33, value: 'તેત્રીસ' },
                { number: 32, value: 'બત્રીસ' },
                { number: 31, value: 'એકત્રીસ' },
                { number: 30, value: 'ત્રીસ' },
                { number: 29, value: 'ઓગણત્રીસ' },
                { number: 28, value: 'અઠ્ઠાવીસ' },
                { number: 27, value: 'સત્તાવીસ' },
                { number: 26, value: 'છવીસ' },
                { number: 25, value: 'પચ્ચીસ' },
                { number: 24, value: 'ચોવીસ' },
                { number: 23, value: 'તેવીસ' },
                { number: 22, value: 'બાવીસ' },
                { number: 21, value: 'એકવીસ' },
                { number: 20, value: 'વીસ' },
                { number: 19, value: 'ઓગણિસ' },
                { number: 18, value: 'અઢાર' },
                { number: 17, value: 'સત્તર' },
                { number: 16, value: 'સોળ' },
                { number: 15, value: 'પંદર' },
                { number: 14, value: 'ચૌદ' },
                { number: 13, value: 'તેર' },
                { number: 12, value: 'બાર' },
                { number: 11, value: 'અગિયાર' },
                { number: 10, value: 'દસ' },
                { number: 9, value: 'નવ' },
                { number: 8, value: 'આઠ' },
                { number: 7, value: 'સાત' },
                { number: 6, value: 'છ' },
                { number: 5, value: 'પાંચ' },
                { number: 4, value: 'ચાર' },
                { number: 3, value: 'ત્રણ' },
                { number: 2, value: 'બે' },
                { number: 1, value: 'એક' },
                { number: 0, value: 'શૂન્ય' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 37460:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'और',
                minus: 'ऋण',
                only: '',
                point: 'दशांश',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'करोड़' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हज़ार' },
                { number: 100, value: 'सौ' },
                { number: 99, value: 'निन्यानवे' },
                { number: 98, value: 'अट्ठानवे' },
                { number: 97, value: 'सत्तानवे' },
                { number: 96, value: 'छियानवे' },
                { number: 95, value: 'पचानवे' },
                { number: 94, value: 'चौरानवे' },
                { number: 93, value: 'तिरानवे' },
                { number: 92, value: 'बानवे' },
                { number: 91, value: 'इक्यानबे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'नवासी' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छियासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'तिरासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'इक्यासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छिहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'तिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'इकहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'उनहत्तर' },
                { number: 68, value: 'अड़सठ' },
                { number: 67, value: 'सड़सठ' },
                { number: 66, value: 'छियासठ' },
                { number: 65, value: 'पैंसठ' },
                { number: 64, value: 'चौंसठ' },
                { number: 63, value: 'तिरसठ' },
                { number: 62, value: 'बासठ' },
                { number: 61, value: 'इकसठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'उनसठ' },
                { number: 58, value: 'अट्ठावन' },
                { number: 57, value: 'सत्तावन' },
                { number: 56, value: 'छप्पन' },
                { number: 55, value: 'पचपन' },
                { number: 54, value: 'चौबन' },
                { number: 53, value: 'तिरेपन' },
                { number: 52, value: 'बावन' },
                { number: 51, value: 'इक्याबन' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनचास' },
                { number: 48, value: 'अड़तालीस' },
                { number: 47, value: 'सैंतालीस' },
                { number: 46, value: 'छियालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चौंतालीस' },
                { number: 43, value: 'तैंतालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'इकतालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनतालीस' },
                { number: 38, value: 'अड़तीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौंतीस' },
                { number: 33, value: 'तैंतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'इकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनतीस' },
                { number: 28, value: 'अट्ठाईस' },
                { number: 27, value: 'सत्ताईस' },
                { number: 26, value: 'छब्बीस' },
                { number: 25, value: 'पच्चीस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेईस' },
                { number: 22, value: 'बाईस' },
                { number: 21, value: 'इक्कीस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नीस' },
                { number: 18, value: 'अठारह' },
                { number: 17, value: 'सत्रह' },
                { number: 16, value: 'सोलह' },
                { number: 15, value: 'पंद्रह' },
                { number: 14, value: 'चौदह' },
                { number: 13, value: 'तेरह' },
                { number: 12, value: 'बारह' },
                { number: 11, value: 'ग्यारह' },
                { number: 10, value: 'दस' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छह' },
                { number: 5, value: 'पांच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दो' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 58041:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: '원',
                plural: '원',
                symbol: '',
                fractionalUnit: {
                    name: '',
                    plural: '',
                    symbol: '',
                },
            },
            texts: {
                and: '하고 ',
                minus: '마이너스',
                only: '',
                point: '점',
            },
            trim: true,
            numberWordsMapping: [
                { number: 1000000000000, value: '조' },
                { number: 100000000, value: '억' },
                { number: 10000, value: '만' },
                { number: 1000, value: '천' },
                { number: 100, value: '백' },
                { number: 90, value: '구십' },
                { number: 80, value: '팔십' },
                { number: 70, value: '칠십' },
                { number: 60, value: '육십' },
                { number: 50, value: '오십' },
                { number: 40, value: '사십' },
                { number: 30, value: '삼십' },
                { number: 20, value: '이십' },
                { number: 19, value: '십구' },
                { number: 18, value: '십팔' },
                { number: 17, value: '십칠' },
                { number: 16, value: '십육' },
                { number: 15, value: '십오' },
                { number: 14, value: '십사' },
                { number: 13, value: '십삼' },
                { number: 12, value: '십이' },
                { number: 11, value: '십일' },
                { number: 10, value: '십' },
                { number: 9, value: '구' },
                { number: 8, value: '팔' },
                { number: 7, value: '칠' },
                { number: 6, value: '육' },
                { number: 5, value: '오' },
                { number: 4, value: '사' },
                { number: 3, value: '삼' },
                { number: 2, value: '이' },
                { number: 1, value: '일' },
                { number: 0, value: '영' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 33972:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'आणि',
                minus: 'वजा',
                only: '',
                point: 'पूर्णांक',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'कोटी' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 900, value: 'नऊशे' },
                { number: 800, value: 'आठशे' },
                { number: 700, value: 'सातशे' },
                { number: 600, value: 'सहाशे' },
                { number: 500, value: 'पाचशे' },
                { number: 400, value: 'चारशे' },
                { number: 300, value: 'तीनशे' },
                { number: 200, value: 'दोनशे' },
                { number: 100, value: 'एकशे' },
                { number: 99, value: 'नव्व्याण्णव' },
                { number: 98, value: 'अठ्ठ्याण्णव' },
                { number: 97, value: 'सत्त्याण्णव' },
                { number: 96, value: 'शहाण्णव' },
                { number: 95, value: 'पंच्याण्णव' },
                { number: 94, value: 'चौऱ्याण्णव' },
                { number: 93, value: 'त्र्याण्णव' },
                { number: 92, value: 'ब्याण्णव' },
                { number: 91, value: 'एक्क्याण्णव' },
                { number: 90, value: 'नव्वद' },
                { number: 89, value: 'एकोणनव्वद' },
                { number: 88, value: 'अठ्ठ्याऐंशी' },
                { number: 87, value: 'सत्त्याऐंशी' },
                { number: 86, value: 'शहाऐंशी' },
                { number: 85, value: 'पंच्याऐंशी' },
                { number: 84, value: 'चौऱ्याऐंशी' },
                { number: 83, value: 'त्र्याऐंशी' },
                { number: 82, value: 'ब्याऐंशी' },
                { number: 81, value: 'एक्क्याऐंशी' },
                { number: 80, value: 'ऐंशी' },
                { number: 79, value: 'एकोणऐंशी' },
                { number: 78, value: 'अठ्ठ्याहत्तर' },
                { number: 77, value: 'सत्याहत्तर' },
                { number: 76, value: 'शहात्तर' },
                { number: 75, value: 'पंच्याहत्तर' },
                { number: 74, value: 'चौर्‍याहत्तर' },
                { number: 73, value: 'त्र्याहत्तर' },
                { number: 72, value: 'बाहत्तर' },
                { number: 71, value: 'एक्काहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'एकोणसत्तर' },
                { number: 68, value: 'अडुसष्ठ' },
                { number: 67, value: 'सदुसष्ठ' },
                { number: 66, value: 'सहासष्ठ' },
                { number: 65, value: 'पासष्ठ' },
                { number: 64, value: 'चौसष्ठ' },
                { number: 63, value: 'त्रेसष्ठ' },
                { number: 62, value: 'बासष्ठ' },
                { number: 61, value: 'एकसष्ठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'एकोणसाठ' },
                { number: 58, value: 'अठ्ठावन्न' },
                { number: 57, value: 'सत्तावन्न' },
                { number: 56, value: 'छप्पन्न' },
                { number: 55, value: 'पंचावन्न' },
                { number: 54, value: 'चोपन्न' },
                { number: 53, value: 'त्रेपन्न' },
                { number: 52, value: 'बावन्न' },
                { number: 51, value: 'एक्कावन्न' },
                { number: 50, value: 'पन्नास' },
                { number: 49, value: 'एकोणपन्नास' },
                { number: 48, value: 'अठ्ठेचाळीस' },
                { number: 47, value: 'सत्तेचाळीस' },
                { number: 46, value: 'सेहेचाळीस' },
                { number: 45, value: 'पंचेचाळीस' },
                { number: 44, value: 'चव्वेचाळीस' },
                { number: 43, value: 'त्रेचाळीस' },
                { number: 42, value: 'बेचाळीस' },
                { number: 41, value: 'एक्केचाळीस' },
                { number: 40, value: 'चाळीस' },
                { number: 39, value: 'एकोणचाळीस' },
                { number: 38, value: 'अडतीस' },
                { number: 37, value: 'सदतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पस्तीस' },
                { number: 34, value: 'चौतीस' },
                { number: 33, value: 'तेहेतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'एकोणतीस' },
                { number: 28, value: 'अठ्ठावीस' },
                { number: 27, value: 'सत्तावीस' },
                { number: 26, value: 'सव्वीस' },
                { number: 25, value: 'पंचवीस' },
                { number: 24, value: 'चोवीस' },
                { number: 23, value: 'तेवीस' },
                { number: 22, value: 'बावीस' },
                { number: 21, value: 'एकवीस' },
                { number: 20, value: 'वीस' },
                { number: 19, value: 'एकोणीस' },
                { number: 18, value: 'अठरा' },
                { number: 17, value: 'सतरा' },
                { number: 16, value: 'सोळा' },
                { number: 15, value: 'पंधरा' },
                { number: 14, value: 'चौदा' },
                { number: 13, value: 'तेरा' },
                { number: 12, value: 'बारा' },
                { number: 11, value: 'अकरा' },
                { number: 10, value: 'दहा' },
                { number: 9, value: 'नऊ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'सहा' },
                { number: 5, value: 'पाच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दोन' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            namedLessThan1000: true,
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 55101:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Surinaamse dollar',
                plural: 'Surinaamse dollars',
                singular: 'Surinaamse dollar',
                symbol: 'SRD',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Centen',
                    symbol: 'SRD',
                },
            },
            texts: {
                and: 'En',
                minus: 'Negatief',
                only: '',
                point: 'Punt',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Biljard' },
                { number: 1000000000000, value: 'Biljoen' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljoen' },
                { number: 1000, value: 'Duizend' },
                { number: 100, value: 'Honderd' },
                { number: 99, value: 'Negenennegentig' },
                { number: 98, value: 'Achtennegentig' },
                { number: 97, value: 'Zevenennegentig' },
                { number: 96, value: 'Zesennegentig' },
                { number: 95, value: 'Vijfennegentig' },
                { number: 94, value: 'Vierennegentig' },
                { number: 93, value: 'Drieënnegentig' },
                { number: 92, value: 'Tweeënnegentig' },
                { number: 91, value: 'Eenennegentig' },
                { number: 90, value: 'Negentig' },
                { number: 89, value: 'Negenentachtig' },
                { number: 88, value: 'Achtentachtig' },
                { number: 87, value: 'Zevenentachtig' },
                { number: 86, value: 'Zesentachtig' },
                { number: 85, value: 'Vijfentachtig' },
                { number: 84, value: 'Vierentachtig' },
                { number: 83, value: 'Drieëntachtig' },
                { number: 82, value: 'Tweeëntachtig' },
                { number: 81, value: 'Eenentachtig' },
                { number: 80, value: 'Tachtig' },
                { number: 79, value: 'Negenenzeventig' },
                { number: 78, value: 'Achtenzeventig' },
                { number: 77, value: 'Zevenenzeventig' },
                { number: 76, value: 'Zesenzeventig' },
                { number: 75, value: 'Vijfenzeventig' },
                { number: 74, value: 'Vierenzeventig' },
                { number: 73, value: 'Drieënzeventig' },
                { number: 72, value: 'Tweeënzeventig' },
                { number: 71, value: 'Eenenzeventig' },
                { number: 70, value: 'Zeventig' },
                { number: 69, value: 'Negenenzestig' },
                { number: 68, value: 'Achtenzestig' },
                { number: 67, value: 'Zevenenzestig' },
                { number: 66, value: 'Zesenzestig' },
                { number: 65, value: 'Vijfenzestig' },
                { number: 64, value: 'Vierenzestig' },
                { number: 63, value: 'Drieënzestig' },
                { number: 62, value: 'Tweeënzestig' },
                { number: 61, value: 'Eenenzestig' },
                { number: 60, value: 'Zestig' },
                { number: 59, value: 'Negenenvijftig' },
                { number: 58, value: 'Achtenvijftig' },
                { number: 57, value: 'Zevenenvijftig' },
                { number: 56, value: 'Zesenvijftig' },
                { number: 55, value: 'Vijfenvijftig' },
                { number: 54, value: 'Vierenvijftig' },
                { number: 53, value: 'Drieënvijftig' },
                { number: 52, value: 'Tweeënvijftig' },
                { number: 51, value: 'Eenenvijftig' },
                { number: 50, value: 'Vijftig' },
                { number: 49, value: 'Negenenveertig' },
                { number: 48, value: 'Achtenveertig' },
                { number: 47, value: 'Zevenenveertig' },
                { number: 46, value: 'Zesenveertig' },
                { number: 45, value: 'Vijfenveertig' },
                { number: 44, value: 'Vierenveertig' },
                { number: 43, value: 'Drieënveertig' },
                { number: 42, value: 'Tweeënveertig' },
                { number: 41, value: 'Eenenveertig' },
                { number: 40, value: 'Veertig' },
                { number: 39, value: 'Negenendertig' },
                { number: 38, value: 'Achtendertig' },
                { number: 37, value: 'Zevenendertig' },
                { number: 36, value: 'Zesendertig' },
                { number: 35, value: 'Vijfendertig' },
                { number: 34, value: 'Vierendertig' },
                { number: 33, value: 'Drieëndertig' },
                { number: 32, value: 'Tweeëndertig' },
                { number: 31, value: 'Eenendertig' },
                { number: 30, value: 'Dertig' },
                { number: 29, value: 'Negenentwintig' },
                { number: 28, value: 'Achtentwintig' },
                { number: 27, value: 'Zevenentwintig' },
                { number: 26, value: 'Zesentwintig' },
                { number: 25, value: 'Vijfentwintig' },
                { number: 24, value: 'Vierentwintig' },
                { number: 23, value: 'Drieëntwintig' },
                { number: 22, value: 'Tweeëntwintig' },
                { number: 21, value: 'Eenentwintig' },
                { number: 20, value: 'Twintig' },
                { number: 19, value: 'Negentien' },
                { number: 18, value: 'Achttien' },
                { number: 17, value: 'Zeventien' },
                { number: 16, value: 'Zestien' },
                { number: 15, value: 'Vijftien' },
                { number: 14, value: 'Veertien' },
                { number: 13, value: 'Dertien' },
                { number: 12, value: 'Twaalf' },
                { number: 11, value: 'Elf' },
                { number: 10, value: 'Tien' },
                { number: 9, value: 'Negen' },
                { number: 8, value: 'Acht' },
                { number: 7, value: 'Zeven' },
                { number: 6, value: 'Zes' },
                { number: 5, value: 'Vijf' },
                { number: 4, value: 'Vier' },
                { number: 3, value: 'Drie' },
                { number: 2, value: 'Twee' },
                { number: 1, value: 'Een' },
                { number: 0, value: 'Nul' },
            ],
            exactWordsMapping: [{ number: 100, value: 'Honderd' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 21722:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Real',
                plural: 'Reais',
                singular: 'Real',
                symbol: 'R$',
                fractionalUnit: {
                    name: 'Centavo',
                    singular: 'Centavo',
                    plural: 'Centavos',
                    symbol: '',
                },
            },
            texts: {
                and: 'E',
                minus: 'Menos',
                only: '',
                point: 'Vírgula',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrilhões' },
                { number: 1000000000000, value: 'Trilhões' },
                { number: 1000000000, value: 'Bilhões' },
                { number: 1000000, value: 'Milhões' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecentos' },
                { number: 800, value: 'Oitocentos' },
                { number: 700, value: 'Setecentos' },
                { number: 600, value: 'Seiscentos' },
                { number: 500, value: 'Quinhentos' },
                { number: 400, value: 'Quatrocentos' },
                { number: 300, value: 'Trezentos' },
                { number: 200, value: 'Duzentos' },
                { number: 100, value: 'Cento' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Oitenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sessenta' },
                { number: 50, value: 'Cinquenta' },
                { number: 40, value: 'Quarenta' },
                { number: 30, value: 'Trinta' },
                { number: 20, value: 'Vinte' },
                { number: 19, value: 'Dezenove' },
                { number: 18, value: 'Dezoito' },
                { number: 17, value: 'Dezesete' },
                { number: 16, value: 'Dezesseis' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treze' },
                { number: 12, value: 'Doze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dez' },
                { number: 9, value: 'Nove' },
                { number: 8, value: 'Oito' },
                { number: 7, value: 'Sete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Quatro' },
                { number: 3, value: 'Três' },
                { number: 2, value: 'Dois' },
                { number: 1, value: 'Um' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [
                { number: 100, value: 'Cem' },
                { number: 1000000000000000, value: 'Um Quadrilhão' },
                { number: 1000000000000, value: 'Um Trilhão' },
                { number: 1000000000, value: 'Um Bilhão' },
                { number: 1000000, value: 'Um Milhão' },
            ],
            ignoreOneForWords: [
                'Mil',
                'Novecentos',
                'Oitocentos',
                'Setecentos',
                'Seiscentos',
                'Quinhentos',
                'Quatrocentos',
                'Trezentos',
                'Duzentos',
                'Cento',
            ],
            splitWord: 'E',
            noSplitWordAfter: ['Mil', 'Milhões', 'Bilhões', 'Trilhões', 'Quadrilhões'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 44130:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'lira',
                plural: '',
                singular: '',
                symbol: '₺',
                fractionalUnit: {
                    name: '',
                    singular: 'lira',
                    plural: 'lira',
                    symbol: '',
                },
            },
            texts: {
                and: 'virgül',
                minus: 'eksi',
                only: '',
                point: 'virgül',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'katrilyon' },
                { number: 1000000000000, value: 'trilyon' },
                { number: 1000000000, value: 'milyar' },
                { number: 1000000, value: 'milyon' },
                { number: 1000, value: 'bin' },
                { number: 900, value: 'dokuz yüz' },
                { number: 800, value: 'sekiz yüz' },
                { number: 700, value: 'yedi yüz' },
                { number: 600, value: 'altı yüz' },
                { number: 500, value: 'beş yüz' },
                { number: 400, value: 'dört yüz' },
                { number: 300, value: 'üç yüz' },
                { number: 200, value: 'iki yüz' },
                { number: 100, value: 'yüz' },
                { number: 90, value: 'doksan' },
                { number: 80, value: 'seksen' },
                { number: 70, value: 'yetmiş' },
                { number: 60, value: 'altmış' },
                { number: 50, value: 'elli' },
                { number: 40, value: 'kırk' },
                { number: 30, value: 'otuz' },
                { number: 20, value: 'yirmi' },
                { number: 19, value: 'on dokuz' },
                { number: 18, value: 'on sekiz' },
                { number: 17, value: 'on yedi' },
                { number: 16, value: 'on altı' },
                { number: 15, value: 'on beş' },
                { number: 14, value: 'on dört' },
                { number: 13, value: 'on üç' },
                { number: 12, value: 'on iki' },
                { number: 11, value: 'on bir' },
                { number: 10, value: 'on' },
                { number: 9, value: 'dokuz' },
                { number: 8, value: 'sekiz' },
                { number: 7, value: 'yedi' },
                { number: 6, value: 'altı' },
                { number: 5, value: 'beş' },
                { number: 4, value: 'dört' },
                { number: 3, value: 'üç' },
                { number: 2, value: 'iki' },
                { number: 1, value: 'bir' },
                { number: 0, value: 'sıfır' },
            ],
            namedLessThan1000: true,
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'onuncu',
                2: 'yüzüncü',
                3: 'bininci',
                4: 'on bininci',
                5: 'yüz bininci',
                6: 'on milyonuncu',
                7: 'milyonuncu',
                8: 'yüz milyonuncu',
            },
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 52021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=02a1a50c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showClientCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientCreateModal,
      callback: function callback($$v) {
        _vm.showClientCreateModal = $$v;
      },
      expression: "showClientCreateModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false
    },
    on: {
      "submit": _vm.saveClient
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(12904);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const ClientCreateModalvue_type_script_lang_js = ({
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      showClientCreateModal: false,
      form: null,
      isSubmitting: false
    };
  },
  methods: {
    // save client
    saveClient: function saveClient() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData, fd, appendIfDefined, response, _error$response, errorMessage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this.isSubmitting) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _this.isSubmitting = true;
              _context.prev = 3;
              if (_this.$refs.clientForm.validateForm()) {
                _context.next = 7;
                break;
              }
              _this.isSubmitting = false;
              return _context.abrupt("return");
            case 7:
              // Get the form data from the ClientForm component
              formData = _this.$refs.clientForm.getFormData(); // Build multipart/form-data to properly send files and handle boolean conversion
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Simple scalar fields
              appendIfDefined('codeNumber', formData.codeNumber);
              appendIfDefined('notes', formData.notes);
              appendIfDefined('displayLanguage', formData.displayLanguage);
              appendIfDefined('type', formData.type);
              appendIfDefined('fullName', formData.fullName);
              appendIfDefined('businessName', formData.businessName);
              appendIfDefined('firstName', formData.firstName);
              appendIfDefined('lastName', formData.lastName);
              appendIfDefined('phone', formData.phone);
              appendIfDefined('phoneNumber', formData.phoneNumber);
              appendIfDefined('email', formData.email);
              appendIfDefined('streetAddress1', formData.streetAddress1);
              appendIfDefined('streetAddress2', formData.streetAddress2);
              appendIfDefined('city', formData.city);
              appendIfDefined('state', formData.state);
              appendIfDefined('postalCode', formData.postalCode);
              appendIfDefined('country', formData.country);
              appendIfDefined('neighbourhood', formData.neighbourhood);
              appendIfDefined('commercialRegister', formData.commercialRegister);
              appendIfDefined('taxCard', formData.taxCard);
              appendIfDefined('status', formData.status);

              // Convert boolean values to integers for Laravel validation
              appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
              appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);

              // Chart of account id (number or object)
              if (formData.chartOfAccountId && _typeof(formData.chartOfAccountId) === 'object' && formData.chartOfAccountId.id) {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId.id);
              } else {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
              }

              // Image file
              if (formData.image instanceof File) {
                fd.append('image', formData.image);
              }

              // Attachments as files
              if (Array.isArray(formData.attachments)) {
                formData.attachments.forEach(function (file, idx) {
                  if (file instanceof File) {
                    fd.append("attachments[".concat(idx, "]"), file);
                  }
                });
              }

              // Representatives array (as nested fields)
              if (Array.isArray(formData.representatives)) {
                formData.representatives.forEach(function (rep, i) {
                  if (!rep) return;
                  if (rep.name !== undefined && rep.name !== null) fd.append("representatives[".concat(i, "][name]"), rep.name);
                  if (rep.email) fd.append("representatives[".concat(i, "][email]"), rep.email);
                  if (rep.phone) fd.append("representatives[".concat(i, "][phone]"), rep.phone);
                  if (rep.position) fd.append("representatives[".concat(i, "][position]"), rep.position);
                  if (rep.is_primary !== undefined && rep.is_primary !== null) fd.append("representatives[".concat(i, "][is_primary]"), rep.is_primary ? 1 : 0);
                  if (rep.notes) fd.append("representatives[".concat(i, "][notes]"), rep.notes);
                });
              }
              _context.next = 39;
              return _this.$http.post("/api/clients", fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 39:
              response = _context.sent;
              if (response.data.success) {
                toast.fire({
                  type: "success",
                  title: _this.$t("Client added successfully")
                });
                _this.$emit("reloadClients");
                _this.$refs.clientForm.resetForm();
                _this.showClientCreateModal = false;
                _this.form = null; // Reset form reference
              }
              _context.next = 48;
              break;
            case 43:
              _context.prev = 43;
              _context.t0 = _context["catch"](3);
              console.error("Error creating client:", _context.t0);
              errorMessage = ((_error$response = _context.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t("Please check your input and try again.");
              toast.fire({
                type: "error",
                title: errorMessage
              });
            case 48:
              _context.prev = 48;
              _this.isSubmitting = false;
              return _context.finish(48);
            case 51:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 43, 48, 51]]);
      }))();
    },
    toggleModal: function toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientCreateModalvue_type_script_lang_js = (ClientCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=02a1a50c&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_02a1a50c_prod_scoped_true_lang_css = __webpack_require__(96835);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=02a1a50c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_02a1a50c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_02a1a50c_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_02a1a50c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=02a1a50c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/ClientCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "02a1a50c",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ }),

/***/ 63545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=77923dd0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showProductCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductCreateModal,
      callback: function callback($$v) {
        _vm.showProductCreateModal = $$v;
      },
      expression: "showProductCreateModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cube mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "item-type-selector"
  }, [_c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'product'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "product",
      "name": "itemType",
      "value": "product",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "product")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "product");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cube"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Product")))])])]), _vm._v(" "), _c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'service'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "service",
      "name": "itemType",
      "value": "service",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "service")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "service");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cogs"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Service")))])])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemName,
      expression: "form.itemName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemName')
    },
    attrs: {
      "id": "itemName",
      "type": "text",
      "name": "itemName",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.itemName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Code")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemCode,
      expression: "form.itemCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemCode')
    },
    attrs: {
      "type": "text",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code')
    },
    domProps: {
      "value": _vm.form.itemCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemCode", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "name": "itemUnit",
      "placeholder": _vm.$t('Select a unit')
    },
    model: {
      value: _vm.form.itemUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "itemUnit", $$v);
      },
      expression: "form.itemUnit"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Rate")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "productTax",
      "placeholder": _vm.$t('Select a tax')
    },
    on: {
      "input": _vm.calculatePrice
    },
    model: {
      value: _vm.form.productTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "productTax", $$v);
      },
      expression: "form.productTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productTax"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Model")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemModel,
      expression: "form.itemModel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemModel')
    },
    attrs: {
      "id": "itemModel",
      "type": "text",
      "name": "itemModel",
      "placeholder": _vm.$t('Enter a model')
    },
    domProps: {
      "value": _vm.form.itemModel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemModel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemModel"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.regularPrice,
      expression: "form.regularPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('regularPrice')
    },
    attrs: {
      "id": "regularPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "regularPrice",
      "placeholder": _vm.$t('Enter price')
    },
    domProps: {
      "value": _vm.form.regularPrice
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount (%)")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "type": "number",
      "min": "0",
      "max": "100",
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Final Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sellingPrice,
      expression: "form.sellingPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sellingPrice')
    },
    attrs: {
      "id": "sellingPrice",
      "type": "number",
      "readonly": "",
      "name": "sellingPrice",
      "placeholder": _vm.$t('Calculated automatically')
    },
    domProps: {
      "value": _vm.form.sellingPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sellingPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sellingPrice"
    }
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'product' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-warehouse mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Stock Information")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockCount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockCount,
      expression: "form.openingStockCount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount')
    },
    attrs: {
      "id": "openingStockCount",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockCount",
      "placeholder": _vm.$t('Enter opening stock')
    },
    domProps: {
      "value": _vm.form.openingStockCount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockCount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockCount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Stock Unit Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockUnitPrice,
      expression: "form.openingStockUnitPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockUnitPrice')
    },
    attrs: {
      "id": "openingStockUnitPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockUnitPrice",
      "placeholder": _vm.$t('Enter unit price')
    },
    domProps: {
      "value": _vm.form.openingStockUnitPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "alertQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Alert Quantity")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.alertQuantity,
      expression: "form.alertQuantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('alertQuantity')
    },
    attrs: {
      "id": "alertQuantity",
      "type": "number",
      "min": "0",
      "max": "1000",
      "name": "alertQuantity",
      "placeholder": _vm.$t('Enter alert quantity')
    },
    domProps: {
      "value": _vm.form.alertQuantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "alertQuantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "alertQuantity"
    }
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.form.itemType === 'service' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-dollar-sign mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Service Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicePurchasePrice,
      expression: "form.servicePurchasePrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('servicePurchasePrice')
    },
    attrs: {
      "id": "servicePurchasePrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "servicePurchasePrice",
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.servicePurchasePrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "servicePurchasePrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "servicePurchasePrice"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [!_vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
    },
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success btn-sm auto-assign-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningSales,
      "title": _vm.$t('Auto-assign')
    },
    on: {
      "click": _vm.autoAssignSalesAccount
    }
  }, [_vm.isAutoAssigningSales ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-magic"
  })])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Sales Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                  ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [!_vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info btn-sm auto-assign-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningPurchase,
      "title": _vm.$t('Auto-assign')
    },
    on: {
      "click": _vm.autoAssignPurchaseAccount
    }
  }, [_vm.isAutoAssigningPurchase ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-magic"
  })])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Purchase Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                  ")])]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Image")))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_c('i', {
    staticClass: "fas fa-upload"
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "80px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Product Image')
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "rows": "3",
      "name": "note",
      "placeholder": _vm.$t('Add any additional notes...')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const ProductCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Product")
    };
  },
  data: function data() {
    return {
      showProductCreateModal: false,
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: ""
      }),
      categories: [],
      options: [],
      units: [],
      brands: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      url: null,
      isAutoAssigningSales: false,
      isAutoAssigningPurchase: false,
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  created: function created() {
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal;

      // When opening the modal, ensure account routing settings are loaded
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.chartOfAccounts = data || [];
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error("Error loading chart of accounts:", _context.t0);
              _this.chartOfAccounts = [];
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$accountRouting, _this2$accountRouting2, _this2$accountRouting3, _this2$accountRouting4, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 3:
              response = _context2.sent;
              _this2.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this2.isSalesAccountAutomatic = _this2.accountRoutingSettings.sales && _this2.accountRoutingSettings.sales.routing_type === 'automatic';
              _this2.isPurchaseAccountAutomatic = _this2.accountRoutingSettings.purchase && _this2.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this2.isSalesAccountAutomatic && _this2.accountRoutingSettings.sales.main_account_id) {
                _this2.form.salesAccountId = _this2.accountRoutingSettings.sales.main_account_id;
              }
              if (_this2.isPurchaseAccountAutomatic && _this2.accountRoutingSettings.purchase.main_account_id) {
                _this2.form.purchaseAccountId = _this2.accountRoutingSettings.purchase.main_account_id;
              }
              console.log('=== ACCOUNT ROUTING DEBUG ===');
              console.log('Full account routing settings:', _this2.accountRoutingSettings);
              console.log('Sales settings:', _this2.accountRoutingSettings.sales);
              console.log('Purchase settings:', _this2.accountRoutingSettings.purchase);
              console.log('Sales routing type:', (_this2$accountRouting = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting === void 0 ? void 0 : _this2$accountRouting.routing_type);
              console.log('Sales main_account_id:', (_this2$accountRouting2 = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting2 === void 0 ? void 0 : _this2$accountRouting2.main_account_id);
              console.log('Purchase routing type:', (_this2$accountRouting3 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting3 === void 0 ? void 0 : _this2$accountRouting3.routing_type);
              console.log('Purchase main_account_id:', (_this2$accountRouting4 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting4 === void 0 ? void 0 : _this2$accountRouting4.main_account_id);
              console.log('isSalesAccountAutomatic:', _this2.isSalesAccountAutomatic);
              console.log('isPurchaseAccountAutomatic:', _this2.isPurchaseAccountAutomatic);
              console.log('Form salesAccountId after auto-assignment:', _this2.form.salesAccountId);
              console.log('Form purchaseAccountId after auto-assignment:', _this2.form.purchaseAccountId);
              console.log('==============================');
              _context2.next = 29;
              break;
            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](0);
              console.error("Error loading account routing settings:", _context2.t0);
              // Set defaults if API fails
              _this2.isSalesAccountAutomatic = false;
              _this2.isPurchaseAccountAutomatic = false;
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 24]]);
      }))();
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this3$form$ge, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 2:
              _yield$_this3$form$ge = _context3.sent;
              data = _yield$_this3$form$ge.data;
              _this3.categories = data.data;
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 2:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this4.brands = data.data;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 2:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this5.units = data.data;
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get4, data, defaultVatRateSlug;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 2:
              _yield$axios$get4 = _context6.sent;
              data = _yield$axios$get4.data;
              _this6.taxes = data.data;
              // assign default vat rate
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = _this6.appInfo.defaultVatRateSlug;
                _this6.form.productTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this6.calculatePrice();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 2:
              _yield$axios$get5 = _context7.sent;
              data = _yield$axios$get5.data;
              _this7.form.itemCode = data.code;
              _this7.prefix = data.prefix;
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this8 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this8.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this9$accountRouting, _this9$accountRouting2;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(_this9.form.itemType === 'service' && !_this9.form.servicePurchasePrice)) {
                _context8.next = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Service Purchase Price is required for services")
              });
              return _context8.abrupt("return");
            case 3:
              // Debug: Log validation state
              console.log("Validation state:", {
                isSalesAccountAutomatic: _this9.isSalesAccountAutomatic,
                salesAccountId: _this9.form.salesAccountId,
                isPurchaseAccountAutomatic: _this9.isPurchaseAccountAutomatic,
                purchaseAccountId: _this9.form.purchaseAccountId
              });

              // Validate sales account if not automatic
              if (!(!_this9.isSalesAccountAutomatic && !_this9.form.salesAccountId)) {
                _context8.next = 7;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Sales Account is required")
              });
              return _context8.abrupt("return");
            case 7:
              if (!(!_this9.isPurchaseAccountAutomatic && !_this9.form.purchaseAccountId)) {
                _context8.next = 10;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Purchase Account is required")
              });
              return _context8.abrupt("return");
            case 10:
              // Debug: Log form data being sent
              console.log("=== FORM SUBMISSION DEBUG ===");
              console.log("Form data being sent:", _this9.form.data());
              console.log("Account routing settings:", _this9.accountRoutingSettings);
              console.log("Sales settings:", _this9.accountRoutingSettings.sales);
              console.log("Purchase settings:", _this9.accountRoutingSettings.purchase);
              console.log("Sales routing type:", (_this9$accountRouting = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting === void 0 ? void 0 : _this9$accountRouting.routing_type);
              console.log("Sales main_account_id:", (_this9$accountRouting2 = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting2 === void 0 ? void 0 : _this9$accountRouting2.main_account_id);
              console.log("Form salesAccountId:", _this9.form.salesAccountId);
              console.log("Form purchaseAccountId:", _this9.form.purchaseAccountId);
              console.log("=============================");
              _context8.next = 22;
              return _this9.form.post(window.location.origin + "/api/products").then(function (response) {
                toast.fire({
                  type: "success",
                  title: _this9.$t("Product added successfully")
                });

                // Emit the newly created product data
                if (response.data && response.data.data) {
                  var newProduct = response.data.data;
                  // Format the product data to match the expected structure for v-select
                  var formattedProduct = {
                    id: newProduct.id,
                    slug: newProduct.slug,
                    name: newProduct.name,
                    code: newProduct.code,
                    label: "".concat(newProduct.name, " [").concat(newProduct.code, "]"),
                    itemType: newProduct.itemType,
                    itemModel: newProduct.itemModel || '',
                    avgPurchasePrice: newProduct.avgPurchasePrice || 0,
                    regularPrice: newProduct.regularPrice || 0,
                    priceWithDiscount: newProduct.sellingPrice,
                    sellingPrice: newProduct.sellingPrice,
                    taxAmount: newProduct.taxAmount || 0,
                    taxType: newProduct.taxType,
                    taxRate: newProduct.taxRate,
                    productTax: newProduct.productTax,
                    inventoryCount: newProduct.inventoryCount || 0,
                    image: newProduct.image || '',
                    sales_account_id: newProduct.sales_account_id,
                    purchase_account_id: newProduct.purchase_account_id
                  };
                  _this9.$emit('productCreated', formattedProduct);
                }

                // Store auto-assigned account IDs before reset
                var autoAssignedSalesAccountId = _this9.isSalesAccountAutomatic ? _this9.form.salesAccountId : null;
                var autoAssignedPurchaseAccountId = _this9.isPurchaseAccountAutomatic ? _this9.form.purchaseAccountId : null;
                _this9.form.reset();
                _this9.form.itemType = "product"; // Reset to default

                // Restore auto-assigned account IDs after reset
                if (autoAssignedSalesAccountId) {
                  _this9.form.salesAccountId = autoAssignedSalesAccountId;
                }
                if (autoAssignedPurchaseAccountId) {
                  _this9.form.purchaseAccountId = autoAssignedPurchaseAccountId;
                }
                _this9.showProductCreateModal = false;
                _this9.$emit('reloadProducts');
              })["catch"](function (error) {
                var _error$response;
                console.error("Error creating product:", error);
                var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this9.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              });
            case 22:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // Auto-assign sales account
    autoAssignSalesAccount: function autoAssignSalesAccount() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var defaultAccount;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!_this10.isAutoAssigningSales) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              _this10.isAutoAssigningSales = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this10.form.itemType === 'product') {
                  // Look for "Sales of Goods" or similar
                  defaultAccount = _this10.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this10.form.itemType === 'service') {
                  // Look for "Sales of Services" or similar
                  defaultAccount = _this10.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Sales account
                if (!defaultAccount) {
                  defaultAccount = _this10.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this10.chartOfAccounts.length > 0) {
                  defaultAccount = _this10.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this10.form.salesAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this10.$t("Sales Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this10.$t("No suitable Sales Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning sales account:", error);
                toast.fire({
                  type: "error",
                  title: _this10.$t("Failed to auto-assign Sales Account")
                });
              } finally {
                _this10.isAutoAssigningSales = false;
              }
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // Auto-assign purchase account
    autoAssignPurchaseAccount: function autoAssignPurchaseAccount() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var defaultAccount;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!_this11.isAutoAssigningPurchase) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return");
            case 2:
              _this11.isAutoAssigningPurchase = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this11.form.itemType === 'product') {
                  // Look for "Cost of Goods Sold" or similar
                  defaultAccount = _this11.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this11.form.itemType === 'service') {
                  // Look for "Cost of Services" or similar
                  defaultAccount = _this11.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Cost account
                if (!defaultAccount) {
                  defaultAccount = _this11.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this11.chartOfAccounts.length > 0) {
                  defaultAccount = _this11.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this11.form.purchaseAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this11.$t("Purchase Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this11.$t("No suitable Purchase Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning purchase account:", error);
                toast.fire({
                  type: "error",
                  title: _this11.$t("Failed to auto-assign Purchase Account")
                });
              } finally {
                _this11.isAutoAssigningPurchase = false;
              }
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductCreateModalvue_type_script_lang_js = (ProductCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=77923dd0&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_77923dd0_prod_scoped_true_lang_css = __webpack_require__(42996);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=77923dd0&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_77923dd0_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_77923dd0_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_77923dd0_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=77923dd0&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/ProductCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "77923dd0",
  null
  
)

/* harmony default export */ const ProductCreateModal = (component.exports);

/***/ }),

/***/ 28353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/edit.vue?vue&type=template&id=499ed608&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Edit Invoice")) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "float-right header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'invoices.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success ml-2",
    attrs: {
      "type": "submit",
      "form": 'invoiceEditForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    attrs: {
      "id": "invoiceEditForm"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.handleFormSubmit.apply(null, arguments);
      }
    }
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t("Client")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    on: {
      "input": _vm.onClientChange
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('ClientCreateModal', {
    on: {
      "reloadClients": function reloadClients($event) {
        return _vm.getClients('latest');
      }
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "client-status mt-2"
  }, [!_vm.form.client.chart_of_account_id ? _c('div', {
    staticClass: "client-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningClient
    },
    on: {
      "click": _vm.autoAssignClientChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningClient ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _c('div', {
    staticClass: "client-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client Chart of Account ready')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Reference")) + "\n                  ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reference')
    },
    attrs: {
      "id": "reference",
      "type": "text",
      "name": "reference",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.reference
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('reference');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reference"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Items")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
      "name": "product",
      "placeholder": _vm.$t('Search Items')
    },
    on: {
      "input": function input($event) {
        return _vm.storeProduct(_vm.form.product);
      }
    },
    model: {
      value: _vm.form.product,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "product", $$v);
      },
      expression: "form.product"
    }
  }), _vm._v(" "), _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _vm.form.product ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.form.product.sales_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.product.name) + "\" " + _vm._s(_vm.$t('needs Sales Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === _vm.form.product.id
    },
    on: {
      "click": function click($event) {
        return _vm.autoAssignProductChartOfAccount(_vm.form.product);
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === _vm.form.product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningProduct === _vm.form.product.id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 && _vm.form.selectedProducts[0].sales_account_id ? _c('div', {
    staticClass: "product-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\" " + _vm._s(_vm.$t('Sales Account ready')))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto",
    staticStyle: {
      "max-width": "100%"
    }
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center invoices-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticStyle: {
        "min-width": "50px"
      }
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)) + "\n                      ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Insufficient Stock'),
        expression: "$t('Insufficient Stock')"
      }],
      staticClass: "badge badge-danger p-2"
    }, [_c('i', {
      staticClass: "fas fa-exclamation"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                        ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".qty"))
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : null,
        "placeholder": "Quantity"
      },
      domProps: {
        "value": item.qty
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i - 1, '');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "button-plus icon-shape icon-sm btn-primary",
      attrs: {
        "type": "button",
        "value": "+",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', i - 1, 'increment');
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".qty")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".qty"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "quantity-field border-0",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".unitPrice"))
      },
      attrs: {
        "type": "unitPrice",
        "step": "any",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "min": "0"
      },
      domProps: {
        "value": item.unitPrice
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i - 1, '');
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".unitPrice")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".unitPrice"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(item.unitPrice * item.qty) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "180px"
      }
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discountType,
        expression: "item.discountType"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType"))
      },
      staticStyle: {
        "width": "60px"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductDiscount(i - 1);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": "fixed"
      }
    }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "percentage"
      }
    }, [_vm._v(_vm._s(_vm.$t("%")))])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discount,
        expression: "item.discount"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount"))
      },
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : item.unitPrice * item.qty,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.calculateProductDiscount(i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.calculateProductDiscount(i - 1);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount")) || _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".discountType"))))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(item.unitPrice * item.qty - (item.discountAmount || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "150px"
      }
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "selectedVatRate", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductVat(i - 1);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.$t('Select VAT')))]), _vm._v(" "), _vm._l(_vm.taxes, function (tax) {
      return _c('option', {
        key: tax.id,
        domProps: {
          "value": tax
        }
      }, [_vm._v("\n                            " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                          ")]);
    })], 2), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center"
    }, [_vm._v("\n                          " + _vm._s(item.productTax) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(item.totalPrice) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      staticStyle: {
        "min-width": "80px"
      }
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeItem(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice - _vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.productTotalTax) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.subTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [!_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discountType"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount Type")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discountType,
      expression: "form.discountType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discountType')
    },
    attrs: {
      "id": "discountType",
      "name": "discountType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        _vm.calculateSum;
        _vm.clearFieldError('discountType');
      }],
      "keyup": _vm.calculateSum
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Percentage")) + "(%)")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discountType"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")) + "\n                  "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "min": "0",
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.subTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('discount');
      }]
    }
  }), _vm._v(" "), _vm.form.discountType == 1 ? _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.form.totalDiscount)), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e()]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transport Cost")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('transportCost');
      }]
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Invoice Tax")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": "Select a tax type"
    },
    on: {
      "input": function input($event) {
        _vm.calculateSum();
        _vm.clearFieldError('orderTax');
      }
    },
    model: {
      value: _vm.form.orderTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "orderTax", $$v);
      },
      expression: "form.orderTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "orderTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Product Discounts")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalDiscount,
      expression: "form.totalDiscount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalDiscount')
    },
    attrs: {
      "id": "totalDiscount",
      "type": "text",
      "name": "totalDiscount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalDiscount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalDiscount"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "globalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Global Discount")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.globalDiscountDisplay,
      expression: "globalDiscountDisplay"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "globalDiscount",
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.globalDiscountDisplay
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.globalDiscountDisplay = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Tax")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalTax,
      expression: "form.totalTax"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalTax')
    },
    attrs: {
      "id": "totalTax",
      "type": "text",
      "name": "totalTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalTax", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "netTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t("Net Total")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.netTotal,
      expression: "form.netTotal"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('netTotal')
    },
    attrs: {
      "id": "netTotal",
      "type": "number",
      "step": "any",
      "name": "netTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.netTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "netTotal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "netTotal"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Reference")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poReference,
      expression: "form.poReference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poReference')
    },
    attrs: {
      "id": "poReference",
      "type": "text",
      "step": "any",
      "name": "poReference",
      "placeholder": _vm.$t('Enter PO reference')
    },
    domProps: {
      "value": _vm.form.poReference
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('poReference');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Terms")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentTerms,
      expression: "form.paymentTerms"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentTerms')
    },
    attrs: {
      "id": "paymentTerms",
      "type": "text",
      "name": "paymentTerms",
      "placeholder": _vm.$t('Enter payment terms')
    },
    domProps: {
      "value": _vm.form.paymentTerms
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('paymentTerms');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "addPayment"
    }
  }, [_vm._v(_vm._s(_vm.$t("Add Payment?")))]), _vm._v(" "), _c('div', {
    staticClass: "radio-group-horizontal"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.addPayment,
      expression: "form.addPayment"
    }],
    staticClass: "form-check-input",
    "class": {
      'is-invalid': _vm.form.errors.has('addPayment')
    },
    attrs: {
      "type": "radio",
      "name": "addPayment",
      "id": "addPaymentYes",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.form.addPayment, "1")
    },
    on: {
      "change": [function ($event) {
        return _vm.$set(_vm.form, "addPayment", "1");
      }, _vm.onAddPaymentChange]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "addPaymentYes"
    }
  }, [_vm._v("\n                       " + _vm._s(_vm.$t("Yes")) + "\n                     ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.addPayment,
      expression: "form.addPayment"
    }],
    staticClass: "form-check-input",
    "class": {
      'is-invalid': _vm.form.errors.has('addPayment')
    },
    attrs: {
      "type": "radio",
      "name": "addPayment",
      "id": "addPaymentNo",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.form.addPayment, "0")
    },
    on: {
      "change": [function ($event) {
        return _vm.$set(_vm.form, "addPayment", "0");
      }, _vm.onAddPaymentChange]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "addPaymentNo"
    }
  }, [_vm._v("\n                       " + _vm._s(_vm.$t("No")) + "\n                     ")])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "addPayment"
    }
  })], 1)]), _vm._v(" "), _vm.paymentFieldsVisible ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    on: {
      "input": _vm.onAccountChange
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('img', {
          staticStyle: {
            "width": "30px",
            "height": "30px"
          },
          attrs: {
            "src": option.image
          }
        }), _vm._v("\n                      " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 3023951659),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  }), _vm._v(" "), _vm.form.addPayment == 1 && !_vm.form.account ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" " + _vm._s(_vm.$t("Please choose a bank account")))])]) : _vm._e(), _vm._v(" "), _vm.form.account ? _c('div', {
    staticClass: "account-status mt-2"
  }, [!_vm.form.account.chartOfAccountId ? _c('div', {
    staticClass: "account-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.goToBankAccounts
    }
  }, [_c('i', {
    staticClass: "fas fa-external-link-alt"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Go to Bank Accounts')) + "\n                    ")])]) : _c('div', {
    staticClass: "account-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account Chart of Account ready')))])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Paid Amount"))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paidAmount,
      expression: "form.paidAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paidAmount')
    },
    attrs: {
      "id": "paidAmount",
      "type": "number",
      "step": "any",
      "name": "paidAmount",
      "min": "1",
      "max": _vm.form.netTotal,
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.paidAmount
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paidAmount", $event.target.value);
      }, _vm.onPaidAmountChange]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paidAmount"
    }
  }), _vm._v(" "), _vm.form.addPayment == 1 && (!_vm.form.paidAmount || Number(_vm.form.paidAmount) <= 0) ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" " + _vm._s(_vm.$t("Paid amount must be greater than 0")))])]) : _vm._e(), _vm._v(" "), _vm.form.addPayment == 1 && _vm.form.paidAmount ? _c('div', {
    staticClass: "mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Due Amount")) + ": "), _c('strong', [_vm._v(_vm._s(_vm.dueAmount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Receipt No")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.receiptNo,
      expression: "form.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('receiptNo')
    },
    attrs: {
      "id": "receiptNo",
      "type": "text",
      "name": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.form.receiptNo
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "receiptNo", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('receiptNo');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "receiptNo"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t("Delivery Place")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deliveryPlace,
      expression: "form.deliveryPlace"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deliveryPlace')
    },
    attrs: {
      "id": "deliveryPlace",
      "type": "text",
      "name": "deliveryPlace",
      "placeholder": _vm.$t('Enter a delivery place')
    },
    domProps: {
      "value": _vm.form.deliveryPlace
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('deliveryPlace');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date,
      expression: "form.date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('date')
    },
    attrs: {
      "id": "date",
      "type": "date",
      "name": "date"
    },
    domProps: {
      "value": _vm.form.date
    },
    on: {
      "change": function change($event) {
        return _vm.clearFieldError('date');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.clearFieldError('status');
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('note');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
    },
    model: {
      value: _vm.form.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendEmail", $$v);
      },
      expression: "form.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To Email")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("Email not configured")) + ")\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
    },
    model: {
      value: _vm.form.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendSMS", $$v);
      },
      expression: "form.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To SMS")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("SMS not configured")) + ")\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "footer-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.form.busy || !_vm.isFormReady,
      "type": "submit"
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n                  " + _vm._s(_vm.form.busy ? _vm.$t("Updating...") : _vm.$t("Update")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])])])])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// CONCATENATED MODULE: ./resources/js/pages/sales/invoices/edit.vue?vue&type=template&id=499ed608&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/ClientCreateModal.vue + 5 modules
var ClientCreateModal = __webpack_require__(52021);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 5 modules
var ProductCreateModal = __webpack_require__(63545);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
// EXTERNAL MODULE: ./node_modules/to-words/dist/ToWords.js
var ToWords = __webpack_require__(54923);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/edit.vue?vue&type=script&lang=js
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








/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Invoice")
    };
  },
  mixins: [RTLMixin/* default */.A],
  components: {
    ToggleButton: dist.ToggleButton,
    ClientCreateModal: ClientCreateModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Edit Invoice",
      isSubmitting: false,
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Invoices",
        url: "invoices.index"
      }, {
        name: "Edit",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        invoiceNo: "",
        client: "",
        reference: "",
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        transportCost: "",
        orderTax: "",
        totalTax: 0,
        productTotalTax: 0,
        invoiceTax: 0,
        account: "",
        totalPaid: "",
        dueAmount: "",
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        addPayment: 0,
        chequeNo: "",
        receiptNo: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        discountType: 0,
        discount: 0,
        totalDiscount: 0,
        paidAmount: ""
      }),
      products: [],
      accounts: [],
      taxes: [],
      prefix: "",
      isUpdatingChartOfAccount: false,
      isAutoAssigningClient: false,
      isAutoAssigningProduct: null,
      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    globalDiscountDisplay: function globalDiscountDisplay() {
      if (this.form.discount > 0) {
        if (this.form.discountType == 1) {
          return (this.form.discount / 100 * this.form.subTotal).toFixed(2);
        } else {
          return this.form.discount.toFixed(2);
        }
      }
      return '0.00';
    },
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
    },
    hasChartOfAccount: function hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    },
    allProductsHaveSalesAccounts: function allProductsHaveSalesAccounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true;
      }
      return this.form.selectedProducts.every(function (product) {
        return product.sales_account_id;
      });
    },
    hasBankAccountChartOfAccount: function hasBankAccountChartOfAccount() {
      if (this.form.addPayment != 1) {
        return true;
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },
    dueAmount: function dueAmount() {
      if (this.form.addPayment != 1 || !this.form.paidAmount) {
        return this.form.netTotal;
      }
      return Math.max(0, this.form.netTotal - Number(this.form.paidAmount));
    },
    isFormReady: function isFormReady() {
      var basicRequirements = this.hasChartOfAccount && this.allProductsHaveSalesAccounts && this.hasBankAccountChartOfAccount && this.form.selectedProducts && this.form.selectedProducts.length > 0;
      if (!basicRequirements) {
        return false;
      }
      if (this.form.addPayment == 1) {
        return this.isPaymentValid;
      }
      return true;
    },
    isPaymentValid: function isPaymentValid() {
      if (this.form.addPayment != 1) {
        return true;
      }
      return this.form.account && this.form.paidAmount && Number(this.form.paidAmount) > 0;
    },
    arePaymentFieldsFilled: function arePaymentFieldsFilled() {
      if (this.form.addPayment != 1) {
        return true;
      }
      return this.form.account && this.form.paidAmount;
    },
    paymentFieldsVisible: function paymentFieldsVisible() {
      return this.form.addPayment == 1 && this.accounts && this.form.selectedProducts && this.form.selectedProducts.length > 0;
    }
  }),
  watch: {
    'form.addPayment': {
      handler: function handler(newVal, oldVal) {
        if (newVal != 1 && oldVal == 1) {
          this.form.account = "";
          this.clearFieldError('account');
          this.clearFieldError('paidAmount');
          this.clearFieldError('chequeNo');
          this.clearFieldError('receiptNo');
        }
      }
    },
    'form.discount': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },
    'form.transportCost': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },
    'form.orderTax': {
      handler: function handler(newVal, oldVal) {
        var _this = this;
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        } else if (newVal !== oldVal && this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.form.selectedProducts.forEach(function (item, index) {
            if (!item.selectedVatRate || item.selectedVatRate.id === (oldVal === null || oldVal === void 0 ? void 0 : oldVal.id)) {
              item.selectedVatRate = newVal;
              _this.generateItemTotalPrice(index);
            }
          });
          this.calculateSum();
        }
      },
      deep: true
    },
    'form.discountType': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },
    'form.selectedProducts': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      },
      deep: true
    },
    'form.client': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      },
      deep: true
    },
    'form.account': {
      handler: function handler(newVal, oldVal) {
        if (newVal && this.form.addPayment == 1) {
          this.clearFieldError('account');
        }
      }
    },
    'form.paidAmount': {
      handler: function handler(newVal, oldVal) {
        if (newVal && Number(newVal) > 0 && this.form.addPayment == 1) {
          this.clearFieldError('paidAmount');
        }
      }
    }
  },
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getInvoice();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted: function mounted() {
    var _this2 = this;
    this.setupGlobalErrorHandling();
    // Load temporary data
    this.loadTemporaryData();
    this.$nextTick(function () {
      if (_this2.form.selectedProducts && _this2.form.selectedProducts.length > 0) {
        _this2.form.selectedProducts.forEach(function (item, index) {
          _this2.generateItemTotalPrice(index);
        });
        _this2.calculateSum();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanupGlobalErrorHandling();
  },
  methods: {
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this3.communicationConfig.loading = true;
              _context.next = 4;
              return axios_default().get('/api/communication-config-status');
            case 4:
              response = _context.sent;
              _this3.communicationConfig.email_configured = response.data.email_configured;
              _this3.communicationConfig.sms_configured = response.data.sms_configured;
              _this3.communicationConfig.loading = false;
              _context.next = 16;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error loading communication config status:', _context.t0);
              // Default to false if there's an error
              _this3.communicationConfig.email_configured = false;
              _this3.communicationConfig.sms_configured = false;
              _this3.communicationConfig.loading = false;
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    // Basic methods will be added here
    getClients: function getClients() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var selectedClient, defaultClientSlug;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              selectedClient = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'default';
              _context2.prev = 1;
              _context2.next = 4;
              return _this4.$store.dispatch("operations/allData", {
                path: "/api/all-clients"
              });
            case 4:
              if (_this4.items && _this4.items.length > 0) {
                defaultClientSlug = _this4.appInfo.defaultClientSlug;
                _this4.form.client = _this4.items.find(function (item) {
                  return item.slug === defaultClientSlug;
                });
              }
              if (selectedClient == 'latest') {
                _this4.form.client = _this4.items[0];
              }
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error('Error getting clients:', _context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    },
    getProducts: function getProducts() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios_default().get(window.location.origin + "/api/all-products");
            case 3:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this5.products = data.data;
              _this5.products.sort(_this5.sortProducts);
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error('Error getting products:', _context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    sortProducts: function sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },
    getAccounts: function getAccounts() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get2, data, defaultAccountSlug;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 3:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this6.accounts = data.data;
              if (_this6.accounts && _this6.accounts.length > 0) {
                defaultAccountSlug = _this6.appInfo.defaultAccountSlug;
                _this6.form.account = _this6.accounts.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.error('Error getting accounts:', _context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 9]]);
      }))();
    },
    getTaxes: function getTaxes() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 3:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this7.taxes = data.data;
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.error('Error getting taxes:', _context5.t0);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    },
    getInvoice: function getInvoice() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios_default().get(window.location.origin + '/api/invoices/' + _this8.$route.params.slug);
            case 3:
              _yield$axios$get4 = _context6.sent;
              data = _yield$axios$get4.data;
              _this8.form.invoiceNo = data.data.invoiceNo;
              _this8.form.client = data.data.client;
              _this8.form.reference = data.data.reference;
              _this8.form.poReference = data.data.poReference;
              _this8.form.paymentTerms = data.data.paymentTerms;
              _this8.form.deliveryPlace = data.data.deliveryPlace;
              _this8.form.date = data.data.invoiceDate;
              _this8.form.note = data.data.note;
              _this8.form.status = data.data.status;
              _this8.form.transportCost = data.data.transport;
              _this8.form.totalTax = data.data.tax;
              _this8.form.orderTax = data.data.taxRate;
              _this8.form.netTotal = Number(data.data.invoiceTotal);
              _this8.form.subTotal = Number(data.data.subTotal);
              _this8.form.totalPaid = Number(data.data.totalPaid);
              _this8.form.dueAmount = Number(data.data.due);
              _this8.form.selectedProducts = _this8.assignProducts(data.data.invoiceProducts);
              if (data.data.payment) {
                _this8.form.addPayment = 1;
                _this8.form.account = data.data.payment.account;
                _this8.form.paidAmount = data.data.payment.amount;
                _this8.form.chequeNo = data.data.payment.chequeNo;
                _this8.form.receiptNo = data.data.payment.receiptNo;
              }
              _this8.form.isSendEmail = data.data.isSendEmail || false;
              _this8.form.isSendSMS = data.data.isSendSMS || false;
              _this8.form.discountType = data.data.discountType || 0;
              _this8.form.discount = data.data.discount || 0;
              _this8.form.totalDiscount = data.data.totalDiscount || 0;
              _context6.next = 33;
              break;
            case 30:
              _context6.prev = 30;
              _context6.t0 = _context6["catch"](0);
              console.error('Error getting invoice:', _context6.t0);
            case 33:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 30]]);
      }))();
    },
    assignProducts: function assignProducts(products) {
      var _this9 = this;
      this.form.selectedProducts = [];
      var _loop = function _loop() {
        var invoiceItem = products[key];
        _this9.form.selectedProducts.unshift({
          id: invoiceItem.productID,
          itemType: invoiceItem.productType,
          slug: invoiceItem.productSlug,
          name: invoiceItem.productName,
          code: invoiceItem.productCode,
          taxType: invoiceItem.taxType,
          taxRate: invoiceItem.taxRate,
          oldQty: invoiceItem.quantity,
          qty: invoiceItem.quantity,
          returnQty: invoiceItem.returnQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.unitCost,
          totalPrice: invoiceItem.unitCostTotal,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          minQty: invoiceItem.returnQty,
          discount: invoiceItem.discount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          selectedVatRate: invoiceItem.vat_rate_id ? _this9.taxes.find(function (tax) {
            return tax.id === invoiceItem.vat_rate_id;
          }) : _this9.form.orderTax,
          sales_account_id: invoiceItem.sales_account_id
        });
      };
      for (var key in products) {
        _loop();
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        // Skip adding items without a Sales Account
        if (!product.sales_account_id) {
          // Keep it selected in dropdown and show auto-assign UI below
          return;
        }
        var productTax = product.taxType == 'Exclusive' ? product.priceWithDiscount * (product.taxRate / 100) : product.priceWithDiscount - product.priceWithDiscount / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          itemType: product.itemType,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          oldQty: 0,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.priceWithDiscount,
          unitCost: product.taxType == 'Exclusive' ? product.priceWithDiscount + productTax : product.priceWithDiscount,
          totalPrice: product.taxType == 'Exclusive' ? 1 * (product.priceWithDiscount + totalTax) : 1 * product.priceWithDiscount,
          productTax: product.productTax > 0 ? product.productTax : 0,
          totalTax: totalTax,
          minQty: 1,
          discount: 0,
          discountType: 'fixed',
          sales_account_id: product.sales_account_id
        });
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      return;
    },
    ensureDiscountProperties: function ensureDiscountProperties() {
      this.form.selectedProducts.forEach(function (item) {
        if (typeof item.discount === 'undefined') {
          item.discount = 0;
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed';
        }
      });
    },
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax = item.taxType == 'Exclusive' ? item.unitPrice * (item.taxRate / 100) : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);
        item.totalTax = item.productTax * item.qty;
        item.totalPrice = item.taxType == 'Exclusive' ? item.qty * item.unitPrice + item.totalTax : item.qty * item.unitPrice;
        item.unitCost = item.taxType == 'Exclusive' ? Number(item.unitPrice) + Number(item.productTax) : item.unitPrice;
        this.form.selectedProducts[index] = item;
        this.calculateProductDiscount(index);
      }
      this.calculateSum();
      return;
    },
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        var discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = item.unitPrice * item.qty * item.discount / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        var priceAfterDiscount = item.unitPrice * item.qty - discountAmount;
        var vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          vatRate = item.selectedVatRate.rate;
        } else if (item.taxRate) {
          vatRate = item.taxRate;
        }
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - priceAfterDiscount / (1 + vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        this.form.selectedProducts[index] = item;
      }
    },
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        var discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = item.unitPrice * item.qty * item.discount / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        var priceAfterDiscount = item.unitPrice * item.qty - discountAmount;
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (item.taxRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - priceAfterDiscount / (1 + item.taxRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        this.form.selectedProducts[index] = item;
        this.calculateSum();
      }
      return;
    },
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        var vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          vatRate = item.selectedVatRate.rate;
        } else if (item.taxRate) {
          vatRate = item.taxRate;
        }
        var discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = item.unitPrice * item.qty * item.discount / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        var priceAfterDiscount = item.unitPrice * item.qty - discountAmount;
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - priceAfterDiscount / (1 + vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        this.form.selectedProducts[index] = item;
        this.calculateSum();
      }
      return;
    },
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },
    calculateSum: function calculateSum() {
      this.form.subTotal = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalPrice).toFixed(2));
      }, 0);
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalTax).toFixed(2));
      }, 0);
      this.form.netTotal = this.form.subTotal;
      this.form.totalTax = 0;
      if (this.form.orderTax) {
        this.form.totalTax = this.form.orderTax.rate / 100 * this.form.subTotal;
      }
      this.form.netTotal = this.form.subTotal + Number(this.form.transportCost || 0) + this.form.totalTax;
      var paid = Number(this.form.totalPaid);
      if (paid <= this.form.netTotal) {
        this.form.dueAmount = (this.form.netTotal - paid).toFixed(2);
      } else {
        this.form.dueAmount = 0;
      }
      return;
    },
    handleFormSubmit: function handleFormSubmit() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!_this10.isSubmitting) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this10.isSubmitting = true;
              _context7.prev = 3;
              _context7.next = 6;
              return _this10.updateInvoice();
            case 6:
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](3);
              console.error('Form submission error:', _context7.t0);
            case 11:
              _context7.prev = 11;
              _this10.isSubmitting = false;
              return _context7.finish(11);
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3, 8, 11, 14]]);
      }))();
    },
    updateInvoice: function updateInvoice() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var validationErrors, productsWithoutSalesAccount, productNames, paymentValidation, _yield$_this11$form$p, data, _error$response, _error$response2, _error$response3, errors;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _this11.formatFormValues();
              validationErrors = [];
              if (!_this11.form.client || !_this11.form.client.chart_of_account_id) {
                validationErrors.push({
                  type: "warning",
                  title: _this11.$t("Chart of Account Required"),
                  message: _this11.$t("Client must have a Chart of Account assigned before updating an invoice."),
                  field: "client"
                });
              }
              if (!_this11.form.selectedProducts || _this11.form.selectedProducts.length === 0) {
                validationErrors.push({
                  type: "warning",
                  title: _this11.$t("No Products Selected"),
                  message: _this11.$t("Please select at least one product to update an invoice."),
                  field: "selectedProducts"
                });
              }
              productsWithoutSalesAccount = _this11.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (productsWithoutSalesAccount.length > 0) {
                productNames = productsWithoutSalesAccount.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this11.$t("Product Chart of Account Required"),
                  message: _this11.$t("The following products must have Sales Accounts assigned: ") + productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }
              paymentValidation = _this11.validatePaymentFields();
              if (!paymentValidation.isValid) {
                validationErrors.push.apply(validationErrors, _toConsumableArray(paymentValidation.errors));
              }
              if (!_this11.validateCalculations()) {
                validationErrors.push({
                  type: "error",
                  title: _this11.$t("Calculation Error"),
                  message: _this11.$t("There was an error in the calculations. Please refresh the page and try again."),
                  field: "calculations"
                });
              }
              if (!(validationErrors.length > 0)) {
                _context8.next = 13;
                break;
              }
              _this11.showMultipleValidationErrors(validationErrors);
              return _context8.abrupt("return");
            case 13:
              _this11.loading = true;
              _context8.next = 16;
              return _this11.form.patch(window.location.origin + "/api/invoices/" + _this11.$route.params.slug);
            case 16:
              _yield$_this11$form$p = _context8.sent;
              data = _yield$_this11$form$p.data;
              _this11.loading = false;
              if (data.success) {
                toast.fire({
                  type: "success",
                  title: _this11.$t("Success"),
                  text: _this11.$t("Invoice updated successfully")
                });
                _this11.clearTemporaryData();
                _this11.$router.push({
                  name: "invoices.show",
                  params: {
                    slug: data.data.slug
                  }
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this11.$t("Error"),
                  text: data.message
                });
              }
              _context8.next = 26;
              break;
            case 22:
              _context8.prev = 22;
              _context8.t0 = _context8["catch"](0);
              _this11.loading = false;
              if (((_error$response = _context8.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422) {
                errors = _context8.t0.response.data.errors;
                Object.keys(errors).forEach(function (field) {
                  _this11.form.errors.set(field, errors[field][0]);
                });
                toast.fire({
                  type: "error",
                  title: _this11.$t("Validation Error"),
                  text: _this11.$t("Please check the form for errors.")
                });
              } else if (((_error$response2 = _context8.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 404) {
                toast.fire({
                  type: "error",
                  title: _this11.$t("Not Found"),
                  text: _this11.$t("Invoice not found.")
                });
              } else if (((_error$response3 = _context8.t0.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this11.$t("Permission Denied"),
                  text: _this11.$t("You don't have permission to update this invoice.")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this11.$t("Error"),
                  text: _this11.$t("An error occurred while updating the invoice. Please try again.")
                });
              }
            case 26:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 22]]);
      }))();
    },
    validatePaymentFields: function validatePaymentFields() {
      var errors = [];
      if (this.form.addPayment == 1) {
        if (!this.form.account) {
          errors.push({
            type: "error",
            title: this.$t("Account Required"),
            message: this.$t("Please select a bank account for the payment."),
            field: "account"
          });
        }
        if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
          errors.push({
            type: "error",
            title: this.$t("Paid Amount Required"),
            message: this.$t("Paid amount must be greater than 0."),
            field: "paidAmount"
          });
        }
        if (Number(this.form.paidAmount) > this.form.netTotal) {
          errors.push({
            type: "warning",
            title: this.$t("Payment Amount Warning"),
            message: this.$t("Paid amount exceeds invoice total. This will create a credit balance."),
            field: "paidAmount"
          });
        }
      }
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },
    validateCalculations: function validateCalculations() {
      try {
        if (isNaN(this.form.subTotal) || isNaN(this.form.netTotal) || isNaN(this.form.totalTax)) {
          return false;
        }
        var calculatedNetTotal = this.form.subTotal + Number(this.form.transportCost || 0) + this.form.totalTax;
        if (Math.abs(calculatedNetTotal - this.form.netTotal) > 0.01) {
          return false;
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    showMultipleValidationErrors: function showMultipleValidationErrors(errors) {
      var firstError = errors[0];
      toast.fire({
        type: firstError.type,
        title: firstError.title,
        text: firstError.message,
        timer: firstError.timer || 5000,
        timerProgressBar: firstError.timerProgressBar || false
      });
      console.group('Validation Errors');
      errors.forEach(function (error) {
        console.log("".concat(error.type.toUpperCase(), ": ").concat(error.title, " - ").concat(error.message));
      });
      console.groupEnd();
    },
    formatFormValues: function formatFormValues() {
      this.form.subTotal = Number(this.form.subTotal).toFixed(2);
      this.form.netTotal = Number(this.form.netTotal).toFixed(2);
      this.form.totalTax = Number(this.form.totalTax).toFixed(2);
      this.form.transportCost = this.form.transportCost ? Number(this.form.transportCost).toFixed(2) : '';
      this.form.discount = this.form.discount ? Number(this.form.discount).toFixed(2) : '';
      this.form.paidAmount = this.form.paidAmount ? Number(this.form.paidAmount).toFixed(2) : '';
      this.form.selectedProducts.forEach(function (item) {
        item.unitPrice = Number(item.unitPrice).toFixed(2);
        item.totalPrice = Number(item.totalPrice).toFixed(2);
        item.productTax = Number(item.productTax).toFixed(2);
        item.totalTax = Number(item.totalTax).toFixed(2);
        item.discount = item.discount ? Number(item.discount).toFixed(2) : 0;
      });
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.getInvoice();
    },
    clearFieldError: function clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },
    onClientChange: function onClientChange() {
      this.clearFieldError('client');
      // do not override selected client after auto-assign; keep current selection
      if (this.form.addPayment == 1) {
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
      }
    },
    onAddPaymentChange: function onAddPaymentChange() {
      this.clearFieldError('addPayment');
      if (this.form.addPayment != 1) {
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
      }
    },
    onAccountChange: function onAccountChange() {
      this.clearFieldError('account');
    },
    onPaidAmountChange: function onPaidAmountChange() {
      this.clearFieldError('paidAmount');
    },
    autoAssignClientChartOfAccount: function autoAssignClientChartOfAccount() {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield$axios$post, data, newAccountId, _error$response4, errorMessage;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (_this12.form.client) {
                _context9.next = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this12.$t("No Client Selected"),
                text: _this12.$t("Please select a client first.")
              });
              return _context9.abrupt("return");
            case 3:
              _this12.isAutoAssigningClient = true;
              _context9.prev = 4;
              _context9.next = 7;
              return axios_default().post(window.location.origin + "/api/clients/" + _this12.form.client.slug + "/auto-assign-chart-of-account");
            case 7:
              _yield$axios$post = _context9.sent;
              data = _yield$axios$post.data;
              if (data.success) {
                newAccountId = data.chart_of_account_id || data.data && data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this12.form.client.chart_of_account_id = newAccountId;
                }
                toast.fire({
                  type: "success",
                  title: _this12.$t("Success"),
                  text: _this12.$t("Chart of Account assigned successfully to client.")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this12.$t("Error"),
                  text: data.message || _this12.$t("Failed to assign Chart of Account.")
                });
              }
              _context9.next = 18;
              break;
            case 12:
              _context9.prev = 12;
              _context9.t0 = _context9["catch"](4);
              console.error('Error auto-assigning chart of account:', _context9.t0);
              errorMessage = _this12.$t("An error occurred while assigning Chart of Account.");
              if ((_error$response4 = _context9.t0.response) !== null && _error$response4 !== void 0 && (_error$response4 = _error$response4.data) !== null && _error$response4 !== void 0 && _error$response4.message) {
                errorMessage = _context9.t0.response.data.message;
              }
              toast.fire({
                type: "error",
                title: _this12.$t("Error"),
                text: errorMessage
              });
            case 18:
              _context9.prev = 18;
              _this12.isAutoAssigningClient = false;
              return _context9.finish(18);
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[4, 12, 18, 21]]);
      }))();
    },
    autoAssignProductChartOfAccount: function autoAssignProductChartOfAccount(product) {
      var _this13 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _yield$axios$post2, data, exists, _error$response5, errorMessage;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (product) {
                _context10.next = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this13.$t("No Product Selected"),
                text: _this13.$t("Please select a product first.")
              });
              return _context10.abrupt("return");
            case 3:
              _this13.isAutoAssigningProduct = product.id;
              _context10.prev = 4;
              _context10.next = 7;
              return axios_default().post(window.location.origin + "/api/products/" + product.slug + "/auto-assign-sales-account");
            case 7:
              _yield$axios$post2 = _context10.sent;
              data = _yield$axios$post2.data;
              if (data.success) {
                product.sales_account_id = data.data && data.data.sales_account_id || data.sales_account_id;
                // If item not yet in table, add it now
                exists = _this13.form.selectedProducts && _this13.form.selectedProducts.some(function (p) {
                  return p.id === product.id;
                });
                if (!exists) {
                  _this13.storeProduct(product);
                }
                toast.fire({
                  type: "success",
                  title: _this13.$t("Success"),
                  text: _this13.$t("Sales Account assigned successfully to product.")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this13.$t("Error"),
                  text: data.message || _this13.$t("Failed to assign Sales Account.")
                });
              }
              _context10.next = 18;
              break;
            case 12:
              _context10.prev = 12;
              _context10.t0 = _context10["catch"](4);
              console.error('Error auto-assigning sales account:', _context10.t0);
              errorMessage = _this13.$t("An error occurred while assigning Sales Account.");
              if ((_error$response5 = _context10.t0.response) !== null && _error$response5 !== void 0 && (_error$response5 = _error$response5.data) !== null && _error$response5 !== void 0 && _error$response5.message) {
                errorMessage = _context10.t0.response.data.message;
              }
              toast.fire({
                type: "error",
                title: _this13.$t("Error"),
                text: errorMessage
              });
            case 18:
              _context10.prev = 18;
              _this13.isAutoAssigningProduct = null;
              return _context10.finish(18);
            case 21:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[4, 12, 18, 21]]);
      }))();
    },
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'bank-accounts.index'
      });
    },
    setupGlobalErrorHandling: function setupGlobalErrorHandling() {
      var _this14 = this;
      this.axiosInterceptor = axios_default().interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        var _error$response6;
        if (((_error$response6 = error.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.status) === 401) {
          _this14.$router.push({
            name: 'login'
          });
        }
        return Promise.reject(error);
      });
    },
    cleanupGlobalErrorHandling: function cleanupGlobalErrorHandling() {
      if (this.axiosInterceptor) {
        axios_default().interceptors.response.eject(this.axiosInterceptor);
      }
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.form.netTotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },
    // Convert number to Arabic words
    convertToArabicWords: function convertToArabicWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return "\u0635\u0641\u0631 ".concat(currencyInfo.main, " \u0641\u0642\u0637");
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = '';
      if (integerPart > 0) {
        var arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;

        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      if (decimalPart > 0) {
        if (result) result += ' و ';
        var arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;

        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      return result + ' فقط';
    },
    // Get currency information based on locale and app settings
    getCurrencyInfo: function getCurrencyInfo() {
      var _this$appInfo2, _currencyMap$currency;
      var currency = ((_this$appInfo2 = this.appInfo) === null || _this$appInfo2 === void 0 ? void 0 : _this$appInfo2.currency) || 'SAR';
      var isArabic = this.isRTL && this.currentLocale === 'ar';
      var currencyMap = {
        'SAR': {
          en: {
            main: 'Riyal',
            sub: 'Halala',
            symbol: 'ê'
          },
          ar: {
            main: 'ريال',
            sub: 'هللة',
            symbol: 'ê'
          }
        },
        'USD': {
          en: {
            main: 'Dollar',
            sub: 'Cent',
            symbol: '$'
          },
          ar: {
            main: 'دولار',
            sub: 'سنت',
            symbol: '$'
          }
        },
        'EUR': {
          en: {
            main: 'Euro',
            sub: 'Cent',
            symbol: '€'
          },
          ar: {
            main: 'يورو',
            sub: 'سنت',
            symbol: '€'
          }
        },
        'EGP': {
          en: {
            main: 'Pound',
            sub: 'Piastre',
            symbol: '£'
          },
          ar: {
            main: 'جنيه',
            sub: 'قرش',
            symbol: '£'
          }
        }
      };
      return ((_currencyMap$currency = currencyMap[currency]) === null || _currencyMap$currency === void 0 ? void 0 : _currencyMap$currency[isArabic ? 'ar' : 'en']) || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },
    // Convert number to English words
    convertToEnglishWords: function convertToEnglishWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      var toWords = new ToWords.ToWords();
      var words = toWords.convert(amount);

      // Add currency information
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = words;
      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }
      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }
      return result + ' Only';
    },
    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish: function convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';
      var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }
      return 'number';
    },
    // Convert integer to Arabic words
    convertIntegerToArabic: function convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';
      var ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      var tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      var teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      var hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        var hundred = Math.floor(num / 100);
        var remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        var thousand = Math.floor(num / 1000);
        var _remainder = num % 1000;
        if (_remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(_remainder);
      }
      if (num < 1000000000) {
        var million = Math.floor(num / 1000000);
        var _remainder2 = num % 1000000;
        if (_remainder2 === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(_remainder2);
      }
      return 'رقم كبير جداً';
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        invoiceNo: this.form.invoiceNo,
        client: this.form.client,
        reference: this.form.reference,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        addPayment: this.form.addPayment,
        account: this.form.account,
        paidAmount: this.form.paidAmount,
        paymentMethod: this.form.paymentMethod,
        chequeNo: this.form.chequeNo,
        receiptNo: this.form.receiptNo,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('invoiceEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('invoiceEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.invoiceNo = data.invoiceNo || this.form.invoiceNo;
          this.form.client = data.client || this.form.client;
          this.form.reference = data.reference || this.form.reference;
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.transportCost = data.transportCost || this.form.transportCost;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.discount = data.discount || this.form.discount;
          this.form.discountType = data.discountType || this.form.discountType;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.addPayment = data.addPayment || this.form.addPayment;
          this.form.account = data.account || this.form.account;
          this.form.paidAmount = data.paidAmount || this.form.paidAmount;
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod;
          this.form.chequeNo = data.chequeNo || this.form.chequeNo;
          this.form.receiptNo = data.receiptNo || this.form.receiptNo;
          this.form.deliveryPlace = data.deliveryPlace || this.form.deliveryPlace;
          this.form.date = data.date || this.form.date;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail;
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('invoiceEditTempData');
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/sales/invoices/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const invoices_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/edit.vue?vue&type=style&index=0&id=499ed608&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_499ed608_prod_scoped_true_lang_css = __webpack_require__(20367);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/edit.vue?vue&type=style&index=0&id=499ed608&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_499ed608_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const invoices_editvue_type_style_index_0_id_499ed608_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_499ed608_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/sales/invoices/edit.vue?vue&type=style&index=0&id=499ed608&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/sales/invoices/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  invoices_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "499ed608",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);