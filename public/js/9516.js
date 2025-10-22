"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9516],{

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

/***/ 12305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-5e369c12]{gap:10px}.card[data-v-5e369c12]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-5e369c12]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-5e369c12]{background:#fff!important}.btn-primary[data-v-5e369c12]{background:#2ab930!important}.btn-secondary[data-v-5e369c12]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-5e369c12]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.create-btn[data-v-5e369c12]{padding:11px}.supplier-status[data-v-5e369c12]{font-size:13px}.supplier-success[data-v-5e369c12],.supplier-warning[data-v-5e369c12]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.supplier-warning[data-v-5e369c12]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.supplier-success[data-v-5e369c12]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.product-status[data-v-5e369c12]{font-size:13px}.product-success[data-v-5e369c12],.product-warning[data-v-5e369c12]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.product-warning[data-v-5e369c12]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.product-success[data-v-5e369c12]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.btn-outline-warning[data-v-5e369c12]{border-color:#ffc107;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-5e369c12]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-5e369c12]:disabled{cursor:not-allowed;opacity:.6}", ""]);
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

/***/ 69516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/edit.vue?vue&type=template&id=5e369c12&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'purchases.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'purchaseEditForm',
      "title": _vm.$t('Save')
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "purchaseEditForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePurchase.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.items && _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('supplier')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "supplier",
      "placeholder": _vm.$t('Select a supplier')
    },
    on: {
      "input": _vm.onSupplierChange
    },
    model: {
      value: _vm.form.supplier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "supplier", $$v);
      },
      expression: "form.supplier"
    }
  }), _vm._v(" "), _vm.form.supplier ? _c('div', {
    staticClass: "supplier-status mt-2"
  }, [!_vm.form.supplier.chart_of_account_id ? _c('div', {
    staticClass: "supplier-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Supplier needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningSupplier
    },
    on: {
      "click": _vm.autoAssignSupplierChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningSupplier ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.form.supplier ? _c('div', {
    staticClass: "mt-1 text-muted small"
  }, [_vm._v("\n                  Debug: chart_of_account_id = " + _vm._s(_vm.form.supplier.chart_of_account_id || 'null') + "\n                ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplier"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "purchaseNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseNo,
      expression: "form.purchaseNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseNo')
    },
    attrs: {
      "id": "purchaseNo",
      "type": "text",
      "name": "purchaseNo",
      "placeholder": _vm.$t('Enter purchase no'),
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchaseNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseNo"
    }
  })], 1), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "form-group col-md-12 col-xl-6"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Products')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
      "name": "product",
      "placeholder": _vm.$t('Search products')
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
  }), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.form.selectedProducts[0].purchase_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\" " + _vm._s(_vm.$t('needs Purchase Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id
    },
    on: {
      "click": function click($event) {
        return _vm.autoAssignProductChartOfAccount(_vm.form.selectedProducts[0]);
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Purchased Qty')))]), _vm._v(" "), _vm.form.purchaseReturnData ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t('Returned Qty')) + "\n                      ")]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Purchase Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total After Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total with VAT')))]), _vm._v(" "), _vm.form.purchaseReturnData ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t('Total Return')) + "\n                      ")]) : _vm._e(), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i,
      staticClass: "text-center"
    }, [_c('td', {
      staticStyle: {
        "min-width": "50px"
      }
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_vm.$can('product-view') ? _c('router-link', {
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
      attrs: {
        "type": "number",
        "step": "any",
        "id": "purchaseQty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": item.minQty
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
    })])]), _vm._v(" "), _vm.form.purchaseReturnData ? _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                        " + _vm._s(item.returnQty) + "\n                      ")]) : _vm._e(), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "min": "1"
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
    })])]), _vm._v(" "), _c('td', {
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
    })])]), _vm._v(" "), _c('td', {
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
    })], 2)]), _vm._v(" "), _c('td', {
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
    }, [_vm._v("ê")])]), _vm._v(" "), _vm.form.purchaseReturnData ? _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                        " + _vm._s(item.totalReturn) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _c('td', {
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
      "colspan": _vm.form.purchaseReturnData ? 8 : 7
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Total')) + ": " + _vm._s(_vm.toWord()))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice - _vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.totalProductTax) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.subTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.form.purchaseReturnData ? _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.purchaseReturn) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t('PO Reference')))]), _vm._v(" "), _c('input', {
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Terms')))]), _vm._v(" "), _c('input', {
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Tax')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": _vm.updateTax
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Tax')))]), _vm._v(" "), _c('input', {
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
  })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6",
    "class": _vm.form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('input', {
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
      "min": "1",
      "max": _vm.form.rowSubTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
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
    staticClass: "form-group col-md-6",
    "class": _vm.form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('transportCost')
    },
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1), _vm._v(" "), _vm.form.purchaseReturnData ? _c('div', {
    staticClass: "form-group col-md-6",
    "class": _vm.form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'
  }, [_c('label', {
    attrs: {
      "for": "purchaseReturn"
    }
  }, [_vm._v(_vm._s(_vm.$t('Cost of Return Products')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseReturn,
      expression: "form.purchaseReturn"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseReturn')
    },
    attrs: {
      "id": "purchaseReturn",
      "type": "number",
      "step": "any",
      "name": "purchaseReturn",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchaseReturn
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseReturn", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseReturn"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6",
    "class": _vm.form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'
  }, [_c('label', {
    attrs: {
      "for": "netTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Net Total')))]), _vm._v(" "), _c('input', {
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "purchaseDate"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseDate,
      expression: "form.purchaseDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseDate')
    },
    attrs: {
      "id": "purchaseDate",
      "type": "date",
      "name": "purchaseDate"
    },
    domProps: {
      "value": _vm.form.purchaseDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "poDate"
    }
  }, [_vm._v(_vm._s(_vm.$t('PO Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poDate,
      expression: "form.poDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poDate')
    },
    attrs: {
      "id": "poDate",
      "type": "date",
      "name": "poDate"
    },
    domProps: {
      "value": _vm.form.poDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poDate"
    }
  })], 1), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// CONCATENATED MODULE: ./resources/js/pages/purchases/edit.vue?vue&type=template&id=5e369c12&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
// EXTERNAL MODULE: ./node_modules/to-words/dist/ToWords.js
var ToWords = __webpack_require__(54923);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Purchase')
    };
  },
  mixins: [RTLMixin/* default */.A],
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Purchase',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Purchases',
        url: 'purchases.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        supplier: '',
        purchaseNo: '',
        selectedProducts: [],
        orderTax: '',
        totalTax: 0,
        discount: '',
        transportCost: '',
        subTotal: 0,
        rowSubTotal: 0,
        netTotal: 0,
        poReference: '',
        paymentTerms: '',
        totalProductTax: 0,
        poDate: new Date().toISOString().slice(0, 10),
        purchaseDate: new Date().toISOString().slice(0, 10),
        purchaseReturnData: '',
        purchaseReturn: 0,
        note: '',
        status: 1,
        totalDiscount: 0
      }),
      products: '',
      accounts: '',
      taxes: '',
      prefix: '',
      purchasePrefix: '',
      isAutoAssigningSupplier: false,
      isAutoAssigningProduct: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
    }
  }),
  created: function created() {
    this.getPurchase();
    this.getSuppliers();
    this.getProducts();
    this.getTaxes();
    this.prefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
  },
  methods: {
    // get purchase
    getPurchase: function getPurchase() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + '/api/purchases/' + _this2.$route.params.slug);
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this2.form.purchaseNo = _this2.$options.filters.withPrefix(data.data.purchaseNo, _this2.purchasePrefix);
              _this2.form.supplier = data.data.supplier;
              _this2.form.poReference = data.data.poReference;
              _this2.form.transportCost = data.data.transport;
              _this2.form.totalTax = data.data.tax;
              _this2.form.orderTax = data.data.taxType || null;
              _this2.form.discount = data.data.totalDiscount;
              _this2.form.paymentTerms = data.data.paymentTerms;
              _this2.form.poDate = data.data.poDate;
              _this2.form.purchaseDate = data.data.purchaseDate;
              _this2.form.purchaseReturnData = data.data.purchaseReturn;
              _this2.form.status = data.data.status;
              _this2.form.note = data.data.note;
              _this2.form.selectedProducts = _this2.assignProducts(data.data.products);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get all local suppliers
    getSuppliers: function getSuppliers() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$store.dispatch('operations/allData', {
                path: '/api/all-suppliers'
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var currentProductIds, _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // Store the current selected products IDs
              currentProductIds = _this4.form.selectedProducts ? _this4.form.selectedProducts.map(function (p) {
                return p.id;
              }) : [];
              _context3.next = 3;
              return axios_default().get(window.location.origin + '/api/all-products-not-service');
            case 3:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              _this4.products = data.data;

              // Update selected products with fresh data if they exist
              if (currentProductIds.length > 0 && _this4.form.selectedProducts) {
                _this4.form.selectedProducts.forEach(function (selectedProduct) {
                  var freshProduct = _this4.products.find(function (p) {
                    return p.id === selectedProduct.id;
                  });
                  if (freshProduct) {
                    // Update the product with fresh data while preserving user input
                    Object.assign(selectedProduct, freshProduct);
                  }
                });
              }
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 2:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              _this5.taxes = data.data;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        var purchasePrice = product.avgPurchasePrice > 0 ? product.avgPurchasePrice : 1;
        var productTax = product.taxType == 'Exclusive' ? purchasePrice * (product.taxRate / 100) : purchasePrice - purchasePrice / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: qunatity,
          taxType: product.taxType,
          taxRate: product.taxRate,
          productTax: productTax,
          totalTax: productTax * qunatity,
          unitPrice: purchasePrice,
          unitCost: product.taxType == 'Exclusive' ? purchasePrice + totalTax : purchasePrice,
          totalPrice: product.taxType == 'Exclusive' ? 1 * (purchasePrice + totalTax) : 1 * purchasePrice,
          returnQty: 0,
          totalReturn: 0,
          minQty: 1,
          oldQty: 0,
          // Include chart of account IDs for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id
        });
      } else {
        // Product already exists, update it with fresh data while preserving user input
        var existingProduct = this.form.selectedProducts[index];
        var updatedProduct = _objectSpread(_objectSpread({}, existingProduct), {}, {
          // Update chart of account IDs with fresh data
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id
        });
        this.form.selectedProducts[index] = updatedProduct;
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      this.updateTax();
      return;
    },
    // update array
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
          this.form.selectedProducts[index].unitPrice = value;
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax = item.taxType == 'Exclusive' ? item.unitPrice * (item.taxRate / 100) : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);
        item.totalTax = item.productTax * item.qty;
        item.totalPrice = item.taxType == 'Exclusive' ? item.qty * item.unitPrice + item.totalTax : item.qty * item.unitPrice;
        item.unitCost = item.taxType == 'Exclusive' ? Number(item.unitPrice) + Number(item.productTax) : item.unitPrice;
        this.form.selectedProducts[index] = item;
      }
      this.updateTax();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.updateTax();
      return;
    },
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = Number((item.unitPrice * item.qty * item.discount / 100).toFixed(2));
        } else {
          item.discountAmount = Number(item.discount || 0);
        }

        // Recalculate totals
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },
    // calculate product VAT
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }

          // If no match found or no productTax, fall back to available taxes
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }

        // Recalculate totals with new VAT rate
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },
    // Helper method to find matching VAT rate
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.rate === productTax;
      });
    },
    // update tax
    // update tax
    updateTax: function updateTax() {
      this.form.totalTax = 0;
      if (this.form.orderTax && this.form.orderTax.rate > 0 && this.form.netTotal > 0) {
        this.form.totalTax = Number((this.form.orderTax.rate / 100 * (this.form.subTotal - this.form.purchaseReturn)).toFixed(2));
      }
      this.calculateSum();
      return;
    },
    // calculate sum
    calculateSum: function calculateSum() {
      var length = this.form.selectedProducts.length;
      this.form.subTotal = this.form.totalProductTax = this.form.purchaseReturn = this.form.totalDiscount = 0;
      for (var i = 0; i < length; i++) {
        var looProduct = this.form.selectedProducts[i];
        this.form.subTotal += Number(looProduct.totalPrice.toFixed(2));
        this.form.totalProductTax += Number(looProduct.totalTax.toFixed(2));
        this.form.purchaseReturn += Number(looProduct.totalReturn.toFixed(2));
        this.form.totalDiscount += Number((looProduct.discountAmount || 0).toFixed(2));
      }
      if (this.form.subTotal > 0) {
        this.form.netTotal = this.form.subTotal + Number(this.form.totalTax) + Number(this.form.transportCost) - Number(this.form.discount) - Number(this.form.purchaseReturn);
        this.form.rowSubTotal = this.form.subTotal - this.form.purchaseReturn;
      }
      return;
    },
    // get purchase products
    assignProducts: function assignProducts(purchaseProducts) {
      for (var key in purchaseProducts) {
        var purchaseProduct = purchaseProducts[key];
        var minQty = purchaseProduct.returnQty > 0 ? purchaseProduct.returnQty : 1;
        this.form.selectedProducts.unshift({
          id: purchaseProduct.productID,
          slug: purchaseProduct.productSlug,
          name: purchaseProduct.productName,
          code: purchaseProduct.productCode,
          qty: purchaseProduct.quantity,
          taxType: purchaseProduct.taxType,
          taxRate: purchaseProduct.taxRate,
          productTax: purchaseProduct.taxAmount,
          totalTax: purchaseProduct.taxTotal,
          unitCost: purchaseProduct.unitCost,
          totalPrice: purchaseProduct.unitCostTotal,
          returnQty: purchaseProduct.returnQty,
          unitPrice: purchaseProduct.purchasePrice,
          totalReturn: purchaseProduct.totalReturn,
          minQty: purchaseProduct.stockQty >= purchaseProduct.quantity ? minQty : minQty <= purchaseProduct.stockQty ? minQty + 1 : purchaseProduct.stockQty,
          oldQty: purchaseProduct.quantity,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: null
        });
      }
      this.calculateSum();
      this.updateTax();
      return this.form.selectedProducts;
    },
    // Handle chart of account assignment
    handleChartOfAccountAssigned: function handleChartOfAccountAssigned(data) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var updatedSupplier;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(data.entity === 'supplier')) {
                _context5.next = 6;
                break;
              }
              _context5.next = 3;
              return _this6.getSuppliers();
            case 3:
              // If we have a selected supplier, update it with the new data
              if (_this6.form.supplier && _this6.items && _this6.items.length > 0) {
                updatedSupplier = _this6.items.find(function (s) {
                  return s.id === _this6.form.supplier.id;
                });
                if (updatedSupplier) {
                  _this6.form.supplier = updatedSupplier;
                }
              }
              _context5.next = 10;
              break;
            case 6:
              if (!(data.entity === 'product')) {
                _context5.next = 10;
                break;
              }
              _context5.next = 9;
              return _this6.getProducts();
            case 9:
              // Update selected products with new chart of account data
              if (_this6.form.selectedProducts && _this6.form.selectedProducts.length > 0) {
                _this6.form.selectedProducts.forEach(function (selectedProduct) {
                  var updatedProduct = _this6.products.find(function (p) {
                    return p.id === selectedProduct.id;
                  });
                  if (updatedProduct) {
                    // Update the chart of account fields
                    selectedProduct.sales_account_id = updatedProduct.sales_account_id;
                    selectedProduct.purchase_account_id = updatedProduct.purchase_account_id;
                  }
                });
              }
            case 10:
              // Force re-render of the validation component
              _this6.$nextTick(function () {
                _this6.$forceUpdate();
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // Auto-assign Chart of Account for supplier
    autoAssignSupplierChartOfAccount: function autoAssignSupplierChartOfAccount() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!_this7.form.supplier || _this7.isAutoAssigningSupplier)) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              _this7.isAutoAssigningSupplier = true;
              _context6.prev = 3;
              _context6.next = 6;
              return axios_default().post("/api/suppliers/".concat(_this7.form.supplier.slug, "/auto-assign-chart-of-account"));
            case 6:
              response = _context6.sent;
              if (response.data.success) {
                console.log('Auto-assign response:', response.data);
                console.log('Current supplier before update:', _this7.form.supplier);

                // Update the supplier data with new chart of account
                _this7.form.supplier.chart_of_account_id = response.data.chart_of_account_id;
                console.log('Supplier after updating chart_of_account_id:', _this7.form.supplier);

                // Force Vue to re-render the component to update the UI
                _this7.$nextTick(function () {
                  _this7.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this7.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this7.$t("Please try again or assign manually")
                });
              }
              _context6.next = 14;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](3);
              console.error('Error auto-assigning chart of account:', _context6.t0);
              toast.fire({
                type: "error",
                title: _this7.$t("An error occurred while assigning Chart of Account")
              });
            case 14:
              _context6.prev = 14;
              _this7.isAutoAssigningSupplier = false;
              return _context6.finish(14);
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 10, 14, 17]]);
      }))();
    },
    // Auto-assign Chart of Account for a specific product
    autoAssignProductChartOfAccount: function autoAssignProductChartOfAccount(product) {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!product || _this8.isAutoAssigningProduct === product.id)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this8.isAutoAssigningProduct = product.id;
              _context7.prev = 3;
              _context7.next = 6;
              return axios_default().post("/api/products/".concat(product.slug, "/auto-assign-chart-of-account"));
            case 6:
              response = _context7.sent;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.purchase_account_id = response.data.purchase_account_id;

                // Force Vue to re-render the component to update the UI
                _this8.$nextTick(function () {
                  _this8.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this8.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this8.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this8.$t("Please try again or assign manually")
                });
              }
              _context7.next = 14;
              break;
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](3);
              console.error('Error auto-assigning chart of account:', _context7.t0);
              toast.fire({
                type: "error",
                title: _this8.$t("An error occurred while assigning Chart of Account")
              });
            case 14:
              _context7.prev = 14;
              _this8.isAutoAssigningProduct = false;
              return _context7.finish(14);
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3, 10, 14, 17]]);
      }))();
    },
    // Handle supplier change
    onSupplierChange: function onSupplierChange() {
      var _this9 = this;
      // Clear any previous errors
      this.form.errors.clear('supplier');

      // If a supplier is selected, ensure we have the latest data including Chart of Account
      if (this.form.supplier && this.form.supplier.id) {
        // Find the supplier in the items list to get the most up-to-date data
        var updatedSupplier = this.items.find(function (s) {
          return s.id === _this9.form.supplier.id;
        });
        if (updatedSupplier) {
          // Update the form supplier with all the latest data
          this.form.supplier = _objectSpread({}, updatedSupplier);
        }
      }
    },
    // update purchase
    updatePurchase: function updatePurchase() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this10.form.patch(window.location.origin + '/api/purchases/' + _this10.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: 'success',
                  title: _this10.$t('Purchase updated successfully')
                });
                _this10.clearTemporaryData();
                _this10.$router.push({
                  name: 'purchases.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this10.$t('Please check your input and try again.')
                });
              });
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        supplier: this.form.supplier,
        purchaseNo: this.form.purchaseNo,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        poDate: this.form.poDate,
        purchaseDate: this.form.purchaseDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('purchaseEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('purchaseEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.supplier = data.supplier || this.form.supplier;
          this.form.purchaseNo = data.purchaseNo || this.form.purchaseNo;
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.transportCost = data.transportCost || this.form.transportCost;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.discount = data.discount || this.form.discount;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.poDate = data.poDate || this.form.poDate;
          this.form.purchaseDate = data.purchaseDate || this.form.purchaseDate;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
        } catch (e) {
          console.error('Error loading temporary data:', e);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('purchaseEditTempData');
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.totalUnitPrice || 0;

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
      var _this$appInfo, _currencyMap$currency;
      var currency = ((_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.currency) || 'SAR';
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
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/purchases/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const purchases_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/edit.vue?vue&type=style&index=0&id=5e369c12&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_5e369c12_prod_scoped_true_lang_css = __webpack_require__(12305);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/edit.vue?vue&type=style&index=0&id=5e369c12&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_5e369c12_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const purchases_editvue_type_style_index_0_id_5e369c12_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_5e369c12_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/purchases/edit.vue?vue&type=style&index=0&id=5e369c12&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/purchases/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  purchases_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5e369c12",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);