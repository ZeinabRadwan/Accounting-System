"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6622,2569],{

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

/***/ 79377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-6a94e85c]{cursor:pointer;text-decoration:none}.modal-content[data-v-6a94e85c]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 88130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".edit-button[data-v-6c8eb752]{cursor:pointer;text-decoration:none}.modal-content[data-v-6c8eb752]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 13415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-56bbb7fc]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-56bbb7fc]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-56bbb7fc]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-56bbb7fc]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-56bbb7fc]:after{display:none}.form-card .card-header .section-title i[data-v-56bbb7fc]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-56bbb7fc]{padding:16px}.section-title[data-v-56bbb7fc]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-56bbb7fc]{margin-bottom:1rem}.form-group label[data-v-56bbb7fc]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-56bbb7fc]{color:#dc3545;font-weight:700}.row[data-v-56bbb7fc]{margin-bottom:1rem}.row[data-v-56bbb7fc]:last-child{margin-bottom:0}.auto-assign-btn[data-v-56bbb7fc]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-56bbb7fc]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-56bbb7fc]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-56bbb7fc]{text-align:center}.image-preview img[data-v-56bbb7fc]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-56bbb7fc]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-56bbb7fc]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-56bbb7fc]{color:#6c757d}.create-button[data-v-56bbb7fc]{cursor:pointer;text-decoration:none}@media (max-width:768px){.section-title[data-v-56bbb7fc]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-56bbb7fc]{padding:.75rem}.auto-assign-btn[data-v-56bbb7fc]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-56bbb7fc]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-56bbb7fc]{margin-bottom:0}.is-invalid[data-v-56bbb7fc]{border-color:#dc3545!important}.invalid-feedback[data-v-56bbb7fc]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-56bbb7fc]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-56bbb7fc]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-56bbb7fc]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-56bbb7fc]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-56bbb7fc]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-56bbb7fc]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-56bbb7fc]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-56bbb7fc]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-56bbb7fc]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-56bbb7fc]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-56bbb7fc]{flex-direction:column;gap:.5rem}.option-content[data-v-56bbb7fc]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-56bbb7fc]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-56bbb7fc]{font-size:.85rem}.override-checkbox-container .form-check-label[data-v-56bbb7fc]{min-height:44px;padding:.6rem .8rem}.checkbox-text[data-v-56bbb7fc]{font-size:.9rem}.form-check-input[data-v-56bbb7fc]{height:16px;width:16px}}.form-check-input[data-v-56bbb7fc]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#fff;border:2px solid #ced4da;border-radius:4px;cursor:pointer;height:18px;margin-right:.75rem;margin-top:.1rem;position:relative;transition:all .2s ease;width:18px}.form-check-input[data-v-56bbb7fc]:checked{background-color:#33a0d9;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:12px;border-color:#33a0d9}.form-check-input[data-v-56bbb7fc]:focus,.form-check-input[data-v-56bbb7fc]:hover{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-check-input[data-v-56bbb7fc]:focus{outline:none}.form-check-label[data-v-56bbb7fc]{align-items:center;background-color:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;color:#495057;cursor:pointer;display:flex;font-weight:600;margin-bottom:0;padding:.5rem .75rem;transition:all .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.form-check-label[data-v-56bbb7fc]:hover{background-color:#e3f2fd;border-color:#33a0d9;box-shadow:0 2px 4px rgba(51,160,217,.1);color:#33a0d9;transform:translateY(-1px)}.form-check-label[data-v-56bbb7fc]:active{box-shadow:0 1px 2px rgba(51,160,217,.1);transform:translateY(0)}.override-checkbox-container[data-v-56bbb7fc]{align-items:center;display:flex}.checkbox-text[data-v-56bbb7fc]{color:#495057;font-size:.95rem;font-weight:600;margin-left:.5rem;padding:0 26px}.override-checkbox-container .form-check-label[data-v-56bbb7fc]{background:linear-gradient(135deg,#f8f9fa,#fff);border:2px solid #e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.05);min-height:48px;padding:.75rem 1rem}.override-checkbox-container .form-check-label[data-v-56bbb7fc]:hover{background:linear-gradient(135deg,#e3f2fd,#f0f8ff);border-color:#33a0d9;box-shadow:0 4px 8px rgba(51,160,217,.15)}.override-checkbox-container .form-check-label[data-v-56bbb7fc]:has(.form-check-input:checked){background:linear-gradient(135deg,#e8f5e8,#f0fff0);border-color:#28a745;color:#155724}.override-checkbox-container .form-check-label:has(.form-check-input:checked) .checkbox-text[data-v-56bbb7fc]{color:#155724;font-weight:700}.alert-info[data-v-56bbb7fc]{background-color:#d1ecf1;border-color:#bee5eb;border-radius:.375rem;font-size:.9rem;padding:.75rem 1rem}.alert-info[data-v-56bbb7fc],.alert-info i[data-v-56bbb7fc]{color:#0c5460}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 45332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-565cc0e9]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-565cc0e9]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-565cc0e9]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-565cc0e9]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-565cc0e9]:after{display:none}.form-card .card-header .section-title i[data-v-565cc0e9]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-565cc0e9]{padding:16px}.section-title[data-v-565cc0e9]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-565cc0e9]{margin-bottom:1rem}.form-group label[data-v-565cc0e9]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-565cc0e9]{color:#dc3545;font-weight:700}.row[data-v-565cc0e9]{margin-bottom:1rem}.row[data-v-565cc0e9]:last-child{margin-bottom:0}.form-text[data-v-565cc0e9]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-565cc0e9]{text-align:center}.image-preview img[data-v-565cc0e9]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-565cc0e9]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-565cc0e9]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-565cc0e9]{color:#6c757d}@media (max-width:768px){.section-title[data-v-565cc0e9]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-565cc0e9]{padding:.75rem}}.input-group-prepend .input-group-text[data-v-565cc0e9]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-565cc0e9]{margin-bottom:0}.is-invalid[data-v-565cc0e9]{border-color:#dc3545!important}.invalid-feedback[data-v-565cc0e9]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-565cc0e9]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-565cc0e9]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-565cc0e9]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-565cc0e9]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-565cc0e9]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-565cc0e9]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-565cc0e9]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-565cc0e9]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-565cc0e9]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-565cc0e9]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-565cc0e9]{flex-direction:column;gap:.5rem}.option-content[data-v-565cc0e9]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-565cc0e9]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-565cc0e9]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-4e5e1b45]{margin-bottom:15px}.footer-buttons[data-v-4e5e1b45]{display:flex;gap:10px}.footer-buttons .btn[data-v-4e5e1b45]{margin-right:10px}.footer-buttons .btn[data-v-4e5e1b45]:last-child{margin-right:0}.create-btn[data-v-4e5e1b45]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-4e5e1b45]:hover{background-color:#e9ecef}.edit-btn[data-v-4e5e1b45]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-4e5e1b45]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-4e5e1b45]{border:none!important}.quotations-create-table[data-v-4e5e1b45]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-4e5e1b45]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-4e5e1b45]{border:none!important}.quotations-create-table thead th[data-v-4e5e1b45]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-4e5e1b45]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-4e5e1b45]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-4e5e1b45]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-4e5e1b45]{gap:10px}.card[data-v-4e5e1b45]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-4e5e1b45]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-4e5e1b45]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-4e5e1b45]{background:#fff!important}.btn-primary[data-v-4e5e1b45]{background:#2ab930!important}.btn-secondary[data-v-4e5e1b45]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-4e5e1b45]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-4e5e1b45],.button-plus[data-v-4e5e1b45]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-4e5e1b45]{background-color:#dc3545;color:#fff}.button-plus[data-v-4e5e1b45]{background-color:#007bff;color:#fff}.button-minus[data-v-4e5e1b45]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-4e5e1b45]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-4e5e1b45]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-4e5e1b45]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-4e5e1b45]{direction:rtl}[dir=rtl] .create-btn[data-v-4e5e1b45]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-4e5e1b45]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-4e5e1b45]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-4e5e1b45]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-4e5e1b45]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-4e5e1b45]{border-right:1px solid #ced4da}.clickable-badge[data-v-4e5e1b45]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-4e5e1b45]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-4e5e1b45]:active{transform:scale(.95)}.insufficient-stock-input[data-v-4e5e1b45]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-4e5e1b45]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 16706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-overlay[data-v-bc0cd620]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1050}.modal-content[data-v-bc0cd620]{background:#fff;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-bc0cd620]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #dee2e6;border-radius:10px 10px 0 0;display:flex;justify-content:space-between;padding:20px}.modal-title[data-v-bc0cd620]{font-size:1.25rem;font-weight:600;margin:0}.close[data-v-bc0cd620]{background:none;border:none;color:#6c757d;cursor:pointer;font-size:1.5rem}.close[data-v-bc0cd620]:hover{color:#000}.modal-body[data-v-bc0cd620]{padding:20px}.modal-footer[data-v-bc0cd620]{background-color:#f8f9fa;border-radius:0 0 10px 10px;border-top:1px solid #dee2e6;display:flex;gap:10px;justify-content:flex-end;padding:20px}.option-card[data-v-bc0cd620]{align-items:center;border:2px solid #e9ecef;border-radius:8px;cursor:pointer;display:flex;margin-bottom:15px;padding:15px;transition:all .3s ease}.option-card[data-v-bc0cd620]:hover{background-color:#f8f9fa;border-color:#007bff;box-shadow:0 4px 8px rgba(0,0,0,.1);transform:translateY(-2px)}.option-icon[data-v-bc0cd620]{font-size:2rem;margin-right:15px;min-width:50px;text-align:center}.option-content h6[data-v-bc0cd620]{font-weight:600;margin:0 0 5px}.option-content p[data-v-bc0cd620]{font-size:.9rem;margin:0}.product-info[data-v-bc0cd620]{background-color:#f8f9fa;border-left:4px solid #007bff;border-radius:8px;padding:15px}.quick-adjustment .card[data-v-bc0cd620]{border:1px solid #dee2e6;border-radius:8px}.quick-adjustment .card-header[data-v-bc0cd620]{background-color:#e9ecef;border-bottom:1px solid #dee2e6;padding:15px}.form-actions[data-v-bc0cd620]{display:flex;gap:10px;justify-content:flex-end;margin-top:20px}.required[data-v-bc0cd620]{color:#dc3545}.badge[data-v-bc0cd620]{font-size:.875em;padding:.375rem .75rem}.alert[data-v-bc0cd620]{border:none;border-radius:8px}.alert-warning[data-v-bc0cd620]{background-color:#fff3cd;border-left:4px solid #ffc107;color:#856404}[dir=rtl] .option-card[data-v-bc0cd620]{flex-direction:row-reverse}[dir=rtl] .option-icon[data-v-bc0cd620]{margin-left:15px;margin-right:0}[dir=rtl] .product-info[data-v-bc0cd620]{border-left:none;border-right:4px solid #007bff}[dir=rtl] .alert-warning[data-v-bc0cd620]{border-left:none;border-right:4px solid #ffc107}", ""]);
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

/***/ 72569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AlertError: () => (/* reexport */ bootstrap5_AlertError),
  AlertErrors: () => (/* reexport */ bootstrap5_AlertErrors),
  AlertSuccess: () => (/* reexport */ bootstrap5_AlertSuccess),
  Button: () => (/* reexport */ Button/* default */.A),
  HasError: () => (/* reexport */ HasError/* default */.A)
});

// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/Button.vue + 3 modules
var Button = __webpack_require__(15677);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/HasError.vue + 4 modules
var HasError = __webpack_require__(73883);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=0ddbf4f7
var render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [(_vm.form.errors.has('error'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('error'))}}):(_vm.form.errors.has('message'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('message'))}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertError.js
var AlertError = __webpack_require__(8739);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorvue_type_script_lang_js = ({
  name: 'AlertError',

  extends: AlertError/* default */.A
});

;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorvue_type_script_lang_js = (AlertErrorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertError.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertError = (component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=3a05553a
var AlertErrorsvue_type_template_id_3a05553a_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"mb-2",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"mb-0 ps-4"},_vm._l((_vm.form.errors.flatten()),function(error,index){return _c('li',{key:index,domProps:{"innerHTML":_vm._s(error)}})}),0)]):_vm._e()
}
var AlertErrorsvue_type_template_id_3a05553a_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertErrors.js
var AlertErrors = __webpack_require__(11014);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorsvue_type_script_lang_js = ({
  name: 'AlertErrors',

  extends: AlertErrors/* default */.A
});

;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorsvue_type_script_lang_js = (AlertErrorsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue





/* normalize component */
;
var AlertErrors_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorsvue_type_script_lang_js,
  AlertErrorsvue_type_template_id_3a05553a_render,
  AlertErrorsvue_type_template_id_3a05553a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertErrors = (AlertErrors_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=4c30318c
var AlertSuccessvue_type_template_id_4c30318c_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.successful)?_c('div',{staticClass:"alert alert-success alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var AlertSuccessvue_type_template_id_4c30318c_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertSuccess.js
var AlertSuccess = __webpack_require__(81918);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js



/* harmony default export */ const AlertSuccessvue_type_script_lang_js = ({
  name: 'AlertSuccess',

  extends: AlertSuccess/* default */.A
});

;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertSuccessvue_type_script_lang_js = (AlertSuccessvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue





/* normalize component */
;
var AlertSuccess_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertSuccessvue_type_script_lang_js,
  AlertSuccessvue_type_template_id_4c30318c_render,
  AlertSuccessvue_type_template_id_4c30318c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertSuccess = (AlertSuccess_component.exports);
;// CONCATENATED MODULE: ./node_modules/vform/src/components/bootstrap5/index.js









/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=6a94e85c&scoped=true
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
var ClientForm = __webpack_require__(77958);
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
        var formData, fd, appendIfDefined, response, status, serverErrors, form, mapped, _error$response, errorMessage;
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
              if (!response.data.success) {
                _context.next = 48;
                break;
              }
              toast.fire({
                type: "success",
                title: _this.$t("Client added successfully")
              });
              _this.$emit("reloadClients");
              _this.$refs.clientForm.resetForm();
              _this.showClientCreateModal = false;
              _this.form = null; // Reset form reference
              _context.next = 49;
              break;
            case 48:
              throw new Error(response.data.message || 'Failed to create client');
            case 49:
              _context.next = 57;
              break;
            case 51:
              _context.prev = 51;
              _context.t0 = _context["catch"](3);
              console.error("Error creating client:", _context.t0);
              status = _context.t0 && _context.t0.response && _context.t0.response.status;
              serverErrors = _context.t0 && _context.t0.response && _context.t0.response.data && _context.t0.response.data.errors;
              if (status === 422 && serverErrors && _this.$refs.clientForm && _this.$refs.clientForm.getFormData) {
                // Map backend validation errors into ClientForm's vform errors
                form = _this.$refs.clientForm.getFormData();
                mapped = {};
                Object.keys(serverErrors).forEach(function (key) {
                  var messages = serverErrors[key];
                  if (Array.isArray(messages) && messages.length > 0) {
                    mapped[key] = messages[0];
                    // Also map attachments.* to attachments field for UI display
                    if (key.startsWith('attachments.')) {
                      if (!mapped.attachments) {
                        mapped.attachments = messages[0];
                      }
                    }
                  }
                });
                if (form && form.errors && typeof form.errors.record === 'function') {
                  form.errors.record(mapped);
                }
                // Show toast notification for validation errors
                toast.fire({
                  type: "error",
                  title: _this.$t("Validation Error"),
                  text: _this.$t("Please check the form for errors and try again.")
                });
              } else {
                errorMessage = ((_error$response = _context.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              }
            case 57:
              _context.prev = 57;
              _this.isSubmitting = false;
              return _context.finish(57);
            case 60:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 51, 57, 60]]);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css = __webpack_require__(79377);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css

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
  "6a94e85c",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ }),

/***/ 37665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientEditModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=template&id=6c8eb752&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Edit Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientEditModal,
      callback: function callback($$v) {
        _vm.showClientEditModal = $$v;
      },
      expression: "showClientEditModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false,
      "initialData": _vm.clientData
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
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "edit-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(77958);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const ClientEditModalvue_type_script_lang_js = ({
  name: "ClientEditModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  props: {
    // Client data to edit
    client: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showClientEditModal: false,
      form: null,
      isSubmitting: false,
      clientData: {}
    };
  },
  watch: {
    // Watch for changes in client prop
    client: {
      handler: function handler(newClient) {
        if (newClient && Object.keys(newClient).length > 0) {
          this.mapClientData(newClient);
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // Map client data to form structure
    mapClientData: function mapClientData(clientData) {
      console.log('=== MAPPING CLIENT DATA IN EDIT MODAL ===');
      console.log('Original client data:', clientData);
      console.log('Phone fields in client data:');
      console.log('- clientData.phone:', clientData.phone);
      console.log('- clientData.phoneNumber:', clientData.phoneNumber);
      console.log('- clientData.phone_number:', clientData.phone_number);
      console.log('- clientData.mobile:', clientData.mobile);
      this.clientData = {
        // Preserve ID and slug for API calls
        id: clientData.id,
        slug: clientData.slug,
        // Account Details
        codeNumber: clientData.codeNumber || clientData.clientID || clientData.code_number || '000001',
        billingMethod: clientData.billingMethod || 'print',
        currency: clientData.currency || 'EGP',
        classification: clientData.classification || '',
        notes: clientData.notes || '',
        displayLanguage: clientData.displayLanguage || clientData.display_language || '',
        // Client Details
        type: clientData.type || 'Company',
        fullName: clientData.fullName || (clientData.type === 'Individual' ? clientData.name : ''),
        businessName: clientData.businessName || clientData.companyName || clientData.company_name || (clientData.type === 'Company' ? clientData.name : ''),
        firstName: clientData.firstName || clientData.first_name || '',
        lastName: clientData.lastName || clientData.last_name || '',
        phone: clientData.phone || '',
        phoneNumber: clientData.phoneNumber || clientData.phone_number || clientData.phone || clientData.mobile || '',
        email: clientData.email || '',
        // Address Information (make sure all fields are mapped)
        streetAddress1: clientData.streetAddress1 || clientData.street_address_1 || clientData.address || '',
        streetAddress2: clientData.streetAddress2 || clientData.street_address_2 || '',
        city: clientData.city || '',
        state: clientData.state || '',
        postalCode: clientData.postalCode || clientData.postal_code || '',
        country: clientData.country || 'SA',
        neighbourhood: clientData.neighbourhood || '',
        // Business Information
        commercialRegister: clientData.commercialRegister || clientData.commercial_register || clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        taxCard: clientData.taxCard || clientData.tax_card || '',
        addSecondaryAddress: clientData.addSecondaryAddress || false,
        // Additional Fields
        image: clientData.image || '',
        image_path: clientData.image_path || '',
        attachments: Array.isArray(clientData.attachments) ? clientData.attachments : [],
        status: clientData.status !== undefined ? clientData.status : 1,
        isSendEmail: Boolean(clientData.isSendEmail || clientData.is_send_email),
        isSendSMS: Boolean(clientData.isSendSMS || clientData.is_send_sms),
        // Representatives (ensure this is included)
        representatives: Array.isArray(clientData.representatives) ? clientData.representatives : [],
        // Chart of Account
        chartOfAccountId: clientData.chartOfAccountId || clientData.chart_of_account_id || null,
        // Legacy fields for backward compatibility
        name: clientData.name || '',
        companyName: clientData.companyName || clientData.company_name || '',
        taxRegistrationNumber: clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        address: clientData.address || ''
      };
      console.log('Mapped client data for form:', this.clientData);
      console.log('=== END MAPPING CLIENT DATA ===');
    },
    // Edit client
    submitItem: function submitItem(evt) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              _context.next = 3;
              return _this.editClient();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    editClient: function editClient() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var clientSlug, _error$response, errorMessage;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2.isSubmitting) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _this2.isSubmitting = true;
              _context2.prev = 3;
              // Get the form from the ClientForm component
              _this2.form = _this2.$refs.clientForm.getFormData();

              // Validate the form
              if (_this2.$refs.clientForm.validateForm()) {
                _context2.next = 8;
                break;
              }
              _this2.isSubmitting = false;
              return _context2.abrupt("return");
            case 8:
              // Update the client - use the client data passed to the modal
              clientSlug = _this2.clientData.slug || _this2.client.slug;
              _context2.next = 11;
              return _this2.form.put("/api/clients/".concat(clientSlug));
            case 11:
              toast.fire({
                type: "success",
                title: _this2.$t("Client updated successfully")
              });
              _this2.$emit("reloadClients");
              _this2.closeModal();
              _this2.form = null; // Reset form reference
              _context2.next = 22;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](3);
              console.error("Error updating client:", _context2.t0);
              errorMessage = ((_error$response = _context2.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t("Please check your input and try again.");
              toast.fire({
                type: "error",
                title: errorMessage
              });
            case 22:
              _context2.prev = 22;
              _this2.isSubmitting = false;
              return _context2.finish(22);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 17, 22, 25]]);
      }))();
    },
    toggleModal: function toggleModal() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, fullClientData;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.showClientEditModal = !_this3.showClientEditModal;
              // Reset form when opening modal
              if (!_this3.showClientEditModal) {
                _context3.next = 19;
                break;
              }
              _this3.form = null;
              _this3.isSubmitting = false;

              // If we have a client prop and it has a slug, fetch full data
              if (!(_this3.client && _this3.client.slug)) {
                _context3.next = 19;
                break;
              }
              _context3.prev = 5;
              console.log('Fetching full client data for toggle modal...');
              _context3.next = 9;
              return _this3.$http.get("/api/clients/".concat(_this3.client.slug));
            case 9:
              response = _context3.sent;
              fullClientData = response.data.data || response.data;
              console.log('Full client data received via toggle:', fullClientData);
              _this3.mapClientData(fullClientData);
              _context3.next = 19;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](5);
              console.error('Error fetching full client data via toggle:', _context3.t0);
              // Fallback to existing data
              if (_this3.client && Object.keys(_this3.client).length > 0) {
                _this3.mapClientData(_this3.client);
              }
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 15]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showClientEditModal = false;
      this.$emit('close');
    },
    // Open modal with client data (fetch full data from API)
    openModal: function openModal() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var client, clientToEdit, response, fullClientData;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              client = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              clientToEdit = client || _this4.client;
              if (clientToEdit) {
                _context4.next = 5;
                break;
              }
              console.error('No client data provided for editing');
              return _context4.abrupt("return");
            case 5:
              if (!clientToEdit.slug) {
                _context4.next = 22;
                break;
              }
              _context4.prev = 6;
              console.log('Fetching full client data for edit modal...');
              // Fetch complete client data from API
              _context4.next = 10;
              return _this4.$http.get("/api/clients/".concat(clientToEdit.slug));
            case 10:
              response = _context4.sent;
              fullClientData = response.data.data || response.data;
              console.log('Full client data received:', fullClientData);
              _this4.mapClientData(fullClientData);
              _context4.next = 20;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](6);
              console.error('Error fetching full client data:', _context4.t0);
              // Fallback to partial data if API call fails
              _this4.mapClientData(clientToEdit);
            case 20:
              _context4.next = 23;
              break;
            case 22:
              // Fallback to partial data if no slug
              _this4.mapClientData(clientToEdit);
            case 23:
              _this4.showClientEditModal = true;
              _this4.form = null;
              _this4.isSubmitting = false;
            case 26:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[6, 16]]);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/ClientEditModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientEditModalvue_type_script_lang_js = (ClientEditModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=6c8eb752&prod&scoped=true&lang=css
var ClientEditModalvue_type_style_index_0_id_6c8eb752_prod_scoped_true_lang_css = __webpack_require__(88130);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=6c8eb752&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientEditModalvue_type_style_index_0_id_6c8eb752_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientEditModalvue_type_style_index_0_id_6c8eb752_prod_scoped_true_lang_css = (ClientEditModalvue_type_style_index_0_id_6c8eb752_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=6c8eb752&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/ClientEditModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6c8eb752",
  null
  
)

/* harmony default export */ const ClientEditModal = (component.exports);

/***/ }),

/***/ 52210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=56bbb7fc&scoped=true
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
  }, [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Accounts will be assigned automatically based on your settings. Check the boxes below to manually select accounts for this product.")))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "override-checkbox-container mb-3"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overrideSalesAccount,
      expression: "form.overrideSalesAccount"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overrideSalesAccount) ? _vm._i(_vm.form.overrideSalesAccount, null) > -1 : _vm.form.overrideSalesAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overrideSalesAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overrideSalesAccount", $$c);
        }
      }, _vm.onOverrideSalesAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "checkbox-text"
  }, [_vm._v(_vm._s(_vm.$t("Select it manually")))])])]), _vm._v(" "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('div', {
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
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isSalesAccountAutomatic && !_vm.form.overrideSalesAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Sales Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                    ")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "override-checkbox-container mb-3"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overridePurchaseAccount,
      expression: "form.overridePurchaseAccount"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overridePurchaseAccount) ? _vm._i(_vm.form.overridePurchaseAccount, null) > -1 : _vm.form.overridePurchaseAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overridePurchaseAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overridePurchaseAccount", $$c);
        }
      }, _vm.onOverridePurchaseAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "checkbox-text"
  }, [_vm._v(_vm._s(_vm.$t("Select it manually")))])])]), _vm._v(" "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('div', {
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
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isPurchaseAccountAutomatic && !_vm.form.overridePurchaseAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Purchase Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                    ")])]) : _vm._e()])])])])]), _vm._v(" "), _c('div', {
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
        purchaseAccountId: "",
        overrideSalesAccount: false,
        overridePurchaseAccount: false
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
        var needsSalesAccount, needsPurchaseAccount;
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
                overrideSalesAccount: _this9.form.overrideSalesAccount,
                salesAccountId: _this9.form.salesAccountId,
                isPurchaseAccountAutomatic: _this9.isPurchaseAccountAutomatic,
                overridePurchaseAccount: _this9.form.overridePurchaseAccount,
                purchaseAccountId: _this9.form.purchaseAccountId
              });

              // Validate sales account - required if not automatic OR if override is checked
              needsSalesAccount = !_this9.isSalesAccountAutomatic || _this9.form.overrideSalesAccount;
              if (!(needsSalesAccount && !_this9.form.salesAccountId)) {
                _context8.next = 8;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Sales Account is required")
              });
              return _context8.abrupt("return");
            case 8:
              // Validate purchase account - required if not automatic OR if override is checked
              needsPurchaseAccount = !_this9.isPurchaseAccountAutomatic || _this9.form.overridePurchaseAccount;
              if (!(needsPurchaseAccount && !_this9.form.purchaseAccountId)) {
                _context8.next = 12;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Purchase Account is required")
              });
              return _context8.abrupt("return");
            case 12:
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
              _context8.next = 24;
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
                _this9.form.overrideSalesAccount = false; // Reset override flags
                _this9.form.overridePurchaseAccount = false;

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
            case 24:
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
    },
    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange: function onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.salesAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }
      }
    },
    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange: function onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.purchaseAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductCreateModalvue_type_script_lang_js = (ProductCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css = __webpack_require__(13415);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css

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
  "56bbb7fc",
  null
  
)

/* harmony default export */ const ProductCreateModal = (component.exports);

/***/ }),

/***/ 51510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductEditModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=template&id=565cc0e9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    style: {
      cursor: _vm.product ? 'pointer' : 'not-allowed'
    },
    on: {
      "click": function click($event) {
        _vm.product && _vm.openModal();
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('VModal', {
    attrs: {
      "size": "lg"
    },
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Edit Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductEditModal,
      callback: function callback($$v) {
        _vm.showProductEditModal = $$v;
      },
      expression: "showProductEditModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateProduct.apply(null, arguments);
      },
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
      "readonly": "",
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
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'service' ? _c('div', {
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
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
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
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  }), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
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
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref2) {
        var name = _ref2.name,
          code = _ref2.code,
          type = _ref2.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  }), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "btn btn-secondary mr-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.form.busy
    },
    on: {
      "click": _vm.updateProduct
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Update")) + "\n      ")])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/VModal.vue + 5 modules
var VModal = __webpack_require__(30326);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/index.js + 12 modules
var bootstrap5 = __webpack_require__(72569);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const ProductEditModalvue_type_script_lang_js = ({
  name: "ProductEditModal",
  components: {
    VModal: VModal["default"],
    HasError: bootstrap5.HasError
  },
  props: {
    product: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      showProductEditModal: false,
      url: null,
      currentProduct: null,
      // Store the product being edited
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
        newOpeningStockCount: "",
        newOpeningStockUnitPrice: "",
        isOpeningStock: false,
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
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  created: function created() {
    // Pre-load dropdown data so it's available immediately when modal opens
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    openModal: function openModal() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var product, productToEdit, needsFullData, identifier, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              product = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              // If product is passed as parameter, use it; otherwise use the prop
              productToEdit = product || _this.product;
              if (productToEdit) {
                _context.next = 5;
                break;
              }
              console.warn('No product provided to ProductEditModal');
              return _context.abrupt("return");
            case 5:
              // Store the product being edited in component data
              _this.currentProduct = productToEdit;

              // Show modal immediately
              _this.showProductEditModal = true;

              // Load product data immediately with available data
              _this.loadProductData(productToEdit);

              // Check if we need to fetch complete product data in background
              needsFullData = !productToEdit.itemUnit || !productToEdit.itemTax || !productToEdit.subCategory || !productToEdit.brand || typeof productToEdit.itemUnit === 'string' || typeof productToEdit.itemTax === 'string';
              if (!(needsFullData && (productToEdit.slug || productToEdit.id))) {
                _context.next = 23;
                break;
              }
              console.log('Fetching complete product data from API...');
              identifier = productToEdit.slug || productToEdit.id;
              _context.prev = 12;
              _context.next = 15;
              return axios_default().get("/api/products/".concat(identifier));
            case 15:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              // Update with complete product data from API
              _this.loadProductData(data.data);
              _context.next = 23;
              break;
            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](12);
              console.warn('Failed to fetch complete product data, using provided data:', _context.t0);
              // Keep using the initially loaded product data
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[12, 20]]);
      }))();
    },
    loadProductData: function loadProductData(product) {
      var _this2 = this;
      console.log('=== LOADING PRODUCT DATA DEBUG ===');
      console.log('Full product object:', product);
      console.log('Product keys:', Object.keys(product));
      console.log('Product structure:');
      console.log('- itemType/item_type:', product.itemType, '/', product.item_type);
      console.log('- name/item_name:', product.name, '/', product.item_name);
      console.log('- price/regular_price/regularPrice:', product.price, '/', product.regular_price, '/', product.regularPrice);
      console.log('- subCategory/sub_category_id:', product.subCategory, '/', product.sub_category_id);
      console.log('- itemUnit/unit_id/item_unit:', product.itemUnit, '/', product.unit_id, '/', product.item_unit);
      console.log('- itemTax/tax_id/vat_rate_id:', product.itemTax, '/', product.tax_id, '/', product.vat_rate_id);
      console.log('- brand/brand_id/itemBrand:', product.brand, '/', product.brand_id, '/', product.itemBrand);
      console.log('===================================');
      this.form.itemType = product.item_type || product.itemType || "product";
      this.form.itemName = product.name || product.item_name || "";
      this.form.itemModel = product.model || product.item_model || "";
      this.form.itemCode = product.code || product.item_code || "";
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128";

      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (_typeof(product.subCategory) === 'object' && product.subCategory.id) {
          // Find the exact object from categories array to ensure proper v-select binding
          var categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory.id;
          });
          this.form.subCategory = categoryObject || product.subCategory;
        } else {
          // It's an ID, find the object
          var _categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory;
          });
          this.form.subCategory = _categoryObject || product.subCategory;
        }
      } else {
        // Try to find by ID if available
        var categoryId = product.sub_category_id || product.category_id;
        if (categoryId) {
          var _categoryObject2 = this.categories.find(function (cat) {
            return cat.id == categoryId;
          });
          this.form.subCategory = _categoryObject2 || "";
        } else {
          this.form.subCategory = "";
        }
      }

      // Handle brand - find the exact object from brands array
      if (product.itemBrand) {
        if (_typeof(product.itemBrand) === 'object' && product.itemBrand.id) {
          // Find the exact object from brands array to ensure proper v-select binding
          var brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand.id;
          });
          this.form.brand = brandObject || product.itemBrand;
        } else {
          // It's an ID, find the object
          var _brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand;
          });
          this.form.brand = _brandObject || product.itemBrand;
        }
      } else {
        // Try to find by ID if available
        var brandId = product.brand_id || product.brand || product.item_brand;
        if (brandId) {
          var _brandObject2 = this.brands.find(function (brand) {
            return brand.id == brandId;
          });
          this.form.brand = _brandObject2 || "";
        } else {
          this.form.brand = "";
        }
      }

      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (_typeof(product.itemUnit) === 'object' && product.itemUnit.id) {
          // Find the exact object from units array to ensure proper v-select binding
          var unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit.id;
          });
          this.form.itemUnit = unitObject || product.itemUnit;
        } else {
          // It's an ID, find the object
          var _unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit;
          });
          this.form.itemUnit = _unitObject || product.itemUnit;
        }
      } else {
        // Try to find by ID if available
        var unitId = product.unit_id || product.item_unit || product.unit;
        if (unitId) {
          var _unitObject2 = this.units.find(function (unit) {
            return unit.id == unitId;
          });
          this.form.itemUnit = _unitObject2 || "";
        } else {
          this.form.itemUnit = "";
        }
      }

      // Handle tax field - find the exact object from taxes array
      if (product.itemTax) {
        if (_typeof(product.itemTax) === 'object' && product.itemTax.id) {
          // Find the exact object from taxes array to ensure proper v-select binding
          var taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax.id;
          });
          this.form.productTax = taxObject || product.itemTax;
        } else {
          // It's an ID, find the object
          var _taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax;
          });
          this.form.productTax = _taxObject || product.itemTax;
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        var taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id;
        // Find the tax object by ID from the taxes array
        var _taxObject2 = this.taxes.find(function (tax) {
          return tax.id == taxId;
        });
        this.form.productTax = _taxObject2 || "";
      } else {
        this.form.productTax = "";
      }
      this.form.taxType = product.tax_type || product.taxType || "Exclusive";
      this.form.regularPrice = product.regular_price || product.regularPrice || product.price || "";
      this.form.servicePurchasePrice = product.service_purchase_price || product.servicePurchasePrice || "";
      this.form.discount = product.discount || 0;
      this.form.sellingPrice = product.selling_price || product.sellingPrice || "";
      this.form.openingStockCount = product.opening_stock_count || product.openingStockCount || "";
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || "";
      this.form.note = product.note || product.description || "";
      this.form.status = product.status || "1";
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1;
      this.form.salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "") || "";
      this.form.purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "") || "";
      this.url = product.image || "";
      console.log('Form data after loading:', this.form.data()); // Debug log

      // Calculate selling price after loading data
      this.$nextTick(function () {
        _this2.calculatePrice();
      });
    },
    updateProduct: function updateProduct() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var currentProduct, productSlug, productId, identifier, formData, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Get the current product being edited (stored in component data)
              currentProduct = _this3.currentProduct; // Debug logging to understand the product object structure
              console.log('Current product object:', currentProduct);
              console.log('Available properties:', currentProduct ? Object.keys(currentProduct) : 'No product');
              if (currentProduct) {
                _context2.next = 8;
                break;
              }
              console.error('No product available for update');
              toast.fire({
                type: "error",
                title: _this3.$t("No product selected for update")
              });
              return _context2.abrupt("return");
            case 8:
              // Check for slug property with fallbacks
              productSlug = currentProduct.slug || currentProduct.productSlug || currentProduct.product_slug;
              productId = currentProduct.id || currentProduct.productID || currentProduct.product_id;
              if (!(!productSlug && !productId)) {
                _context2.next = 15;
                break;
              }
              console.error('No product identifier (slug or ID) available for update');
              console.error('Product object:', currentProduct);
              toast.fire({
                type: "error",
                title: _this3.$t("Product identifier missing. Cannot update product.")
              });
              return _context2.abrupt("return");
            case 15:
              // If we don't have a slug but have an ID, we need to fetch the product to get the slug
              identifier = productSlug;
              if (!productSlug && productId) {
                console.log('No slug found, attempting to use ID as fallback:', productId);
                // For now, try to use the ID directly - if the backend doesn't support it, we'll get an error
                identifier = productId;
              }

              // Validate required fields based on item type
              if (!(_this3.form.itemType === 'service' && !_this3.form.servicePurchasePrice)) {
                _context2.next = 20;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Service Purchase Price is required for services")
              });
              return _context2.abrupt("return");
            case 20:
              if (!_this3.form.isOpeningStock) {
                _context2.next = 27;
                break;
              }
              if (!(!_this3.form.newOpeningStockCount || _this3.form.newOpeningStockCount <= 0)) {
                _context2.next = 24;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Count is required and must be greater than 0")
              });
              return _context2.abrupt("return");
            case 24:
              if (!(!_this3.form.newOpeningStockUnitPrice || _this3.form.newOpeningStockUnitPrice <= 0)) {
                _context2.next = 27;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Unit Price is required and must be greater than 0")
              });
              return _context2.abrupt("return");
            case 27:
              if (!(!_this3.isSalesAccountAutomatic && !_this3.form.salesAccountId)) {
                _context2.next = 30;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Sales Account is required")
              });
              return _context2.abrupt("return");
            case 30:
              if (!(!_this3.isPurchaseAccountAutomatic && !_this3.form.purchaseAccountId)) {
                _context2.next = 33;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Purchase Account is required")
              });
              return _context2.abrupt("return");
            case 33:
              console.log('Using identifier for API call:', identifier);

              // Transform object fields to IDs before sending
              formData = _this3.form.data(); // Transform v-select objects to IDs
              if (formData.subCategory && _typeof(formData.subCategory) === 'object') {
                formData.subCategory = formData.subCategory.id;
              }
              if (formData.brand && _typeof(formData.brand) === 'object') {
                formData.brand = formData.brand.id;
              }
              if (formData.itemUnit && _typeof(formData.itemUnit) === 'object') {
                formData.itemUnit = formData.itemUnit.id;
              }
              if (formData.productTax && _typeof(formData.productTax) === 'object') {
                formData.productTax = formData.productTax.id;
              }

              // Debug: Log each field transformation
              console.log('Field transformations:');
              console.log('- subCategory:', _this3.form.subCategory, '→', formData.subCategory);
              console.log('- brand:', _this3.form.brand, '→', formData.brand);
              console.log('- itemUnit:', _this3.form.itemUnit, '→', formData.itemUnit);
              console.log('- productTax:', _this3.form.productTax, '→', formData.productTax);
              console.log('Form data being sent:', formData);
              _context2.next = 47;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 47:
              response = _context2.sent;
              if (response.data.success) {
                // Show success message with system notification style
                toast.fire({
                  type: "success",
                  title: _this3.$t("Product updated successfully")
                });
                _this3.showProductEditModal = false;

                // Emit event with updated product data so parent can update its arrays
                _this3.$emit("reloadProducts");
                _this3.$emit("productUpdated", {
                  originalProduct: _this3.currentProduct,
                  updatedData: formData
                });
                _this3.form.reset();
                _this3.url = null;
                _this3.currentProduct = null; // Clear the stored product
              }
              _context2.next = 55;
              break;
            case 51:
              _context2.prev = 51;
              _context2.t0 = _context2["catch"](0);
              if (_context2.t0.response && _context2.t0.response.data) {
                if (_context2.t0.response.data.errors) {
                  _this3.form.errors.set(_context2.t0.response.data.errors);
                } else {
                  toast.fire({
                    type: "error",
                    title: _context2.t0.response.data.message || _this3.$t("Error updating product")
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this3.$t("Error updating product")
                });
              }
              console.error('Error updating product:', _context2.t0);
            case 55:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 51]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showProductEditModal = false;
      this.currentProduct = null; // Clear the stored product
      this.form.reset();
      this.url = null;
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this4$form$ge, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 3:
              _yield$_this4$form$ge = _context3.sent;
              data = _yield$_this4$form$ge.data;
              _this4.categories = data.data;
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error("Error fetching categories:", _context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 3:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this5.brands = data.data;
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Error fetching brands:", _context4.t0);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 3:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this6.units = data.data;
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.error("Error fetching units:", _context5.t0);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 3:
              _yield$axios$get4 = _context6.sent;
              data = _yield$axios$get4.data;
              _this7.taxes = data.data;
              _this7.calculatePrice();
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Error fetching taxes:", _context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 3:
              _yield$axios$get5 = _context7.sent;
              data = _yield$axios$get5.data;
              _this8.chartOfAccounts = data || [];
              _context7.next = 12;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console.error("Error loading chart of accounts:", _context7.t0);
              _this8.chartOfAccounts = [];
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 3:
              response = _context8.sent;
              _this9.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this9.isSalesAccountAutomatic = _this9.accountRoutingSettings.sales && _this9.accountRoutingSettings.sales.routing_type === 'automatic';
              _this9.isPurchaseAccountAutomatic = _this9.accountRoutingSettings.purchase && _this9.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this9.isSalesAccountAutomatic && _this9.accountRoutingSettings.sales.parent_account_id) {
                _this9.form.salesAccountId = _this9.accountRoutingSettings.sales.parent_account_id;
              }
              if (_this9.isPurchaseAccountAutomatic && _this9.accountRoutingSettings.purchase.parent_account_id) {
                _this9.form.purchaseAccountId = _this9.accountRoutingSettings.purchase.parent_account_id;
              }
              console.log('Account routing settings loaded:', _this9.accountRoutingSettings);
              console.log('Sales automatic:', _this9.isSalesAccountAutomatic);
              console.log('Purchase automatic:', _this9.isPurchaseAccountAutomatic);
              _context8.next = 19;
              break;
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              console.error("Error loading account routing settings:", _context8.t0);
              // Set defaults if API fails
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 19:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 14]]);
      }))();
    },
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType && this.form.productTax.rate) {
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
    onFileChange: function onFileChange(e) {
      var _this10 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this10.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        toast.fire({
          type: "error",
          title: this.$t('Please select a valid thumbnail with size less than 2 MB')
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductEditModalvue_type_script_lang_js = (ProductEditModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css
var ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css = __webpack_require__(45332);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css = (ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/ProductEditModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "565cc0e9",
  null
  
)

/* harmony default export */ const ProductEditModal = (component.exports);

/***/ }),

/***/ 28199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ StockAdjustmentModal)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=bc0cd620&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isOpen ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "modal-content",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Insufficient Stock")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_c('span', [_vm._v("×")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "alert alert-warning",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Stock Alert")) + ":")]), _vm._v("\n        " + _vm._s(_vm.$t("The selected quantity exceeds available stock for this product.")) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "product-info mb-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Product Details")))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Name")) + ":")]), _vm._v(" " + _vm._s(_vm.product.name))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Code")) + ":")]), _vm._v(" " + _vm._s(_vm._f("withPrefix")(_vm.product.code, _vm.prefix)))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Current Stock")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.product.inventoryCount))])]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Required Quantity")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v(_vm._s(_vm.product.qty))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Stock Shortage")))]), _vm._v(" "), _c('p', {
    staticClass: "text-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-circle mr-1"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.shortageQuantity))]), _vm._v(" " + _vm._s(_vm.$t("units short")) + "\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "stock-options"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("How to increase stock?")))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openInventoryAdjustment.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Quick Stock Adjustment")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Add stock directly to inventory")))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openPurchaseOrder.apply(null, arguments);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Create Purchase Order")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Order more stock from supplier")))])])])])])]), _vm._v(" "), _vm.showQuickAdjustment ? _c('div', {
    staticClass: "quick-adjustment mt-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h6', {
    staticClass: "mb-0"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Quick Stock Adjustment")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submitQuickAdjustment.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentReason"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reason")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.reason,
      expression: "adjustmentForm.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('reason')
    },
    attrs: {
      "id": "adjustmentReason",
      "type": "text",
      "placeholder": _vm.$t('Enter reason for stock adjustment'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "reason"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity to Add")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.quantity,
      expression: "adjustmentForm.quantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('quantity')
    },
    attrs: {
      "id": "adjustmentQuantity",
      "type": "number",
      "min": "1",
      "placeholder": _vm.$t('Enter quantity to add'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.quantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "quantity"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentNote"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.note,
      expression: "adjustmentForm.note"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "adjustmentNote",
      "rows": "3",
      "placeholder": _vm.$t('Enter additional notes (optional)')
    },
    domProps: {
      "value": _vm.adjustmentForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        _vm.showQuickAdjustment = false;
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Cancel")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": _vm.adjustmentForm.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Add Stock")) + "\n                ")])])])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Close")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.adjustQuantity
    }
  }, [_c('i', {
    staticClass: "fas fa-edit mr-1"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Adjust Quantity")) + "\n      ")])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-shopping-cart text-primary"
  })]);
}];

;// CONCATENATED MODULE: ./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=bc0cd620&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const StockAdjustmentModalvue_type_script_lang_js = ({
  name: "StockAdjustmentModal",
  props: {
    isOpen: {
      type: Boolean,
      "default": false
    },
    product: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showQuickAdjustment: false,
      adjustmentForm: new vform_es/* default */.Ay({
        reason: "",
        quantity: 1,
        note: ""
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    prefix: function prefix() {
      var _this$appInfo;
      return ((_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.productPrefix) || "";
    },
    shortageQuantity: function shortageQuantity() {
      if (!this.product || !this.product.inventoryCount || !this.product.qty) {
        return 0;
      }
      return Math.max(0, this.product.qty - this.product.inventoryCount);
    }
  }),
  watch: {
    isOpen: function isOpen(newVal) {
      if (newVal && this.product) {
        // Set default quantity to shortage amount
        this.adjustmentForm.quantity = this.shortageQuantity || 1;
        this.adjustmentForm.reason = "Stock shortage adjustment";
      }
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("close");
      this.showQuickAdjustment = false;
      this.adjustmentForm.reset();
    },
    adjustQuantity: function adjustQuantity() {
      this.$emit("adjust-quantity", this.product);
      this.closeModal();
    },
    openInventoryAdjustment: function openInventoryAdjustment() {
      var _this = this;
      console.log("Opening inventory adjustment...");
      // Close modal first
      this.closeModal();
      // Then navigate with a small delay
      setTimeout(function () {
        console.log("Navigating to adjustments.create");
        _this.$router.push({
          name: "adjustments.create"
        })["catch"](function (err) {
          console.error("Navigation error:", err);
        });
      }, 300);
    },
    openPurchaseOrder: function openPurchaseOrder() {
      var _this2 = this;
      console.log("Opening purchase order...");
      // Close modal first
      this.closeModal();
      // Then navigate with a small delay
      setTimeout(function () {
        console.log("Navigating to purchases.create");
        _this2.$router.push({
          name: "purchases.create"
        })["catch"](function (err) {
          console.error("Navigation error:", err);
        });
      }, 300);
    },
    submitQuickAdjustment: function submitQuickAdjustment() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var adjustmentData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // Create a quick inventory adjustment
              adjustmentData = {
                adjustmentReason: _this3.adjustmentForm.reason,
                adjustmentDate: new Date().toISOString().slice(0, 10),
                note: _this3.adjustmentForm.note,
                status: 1,
                selectedProducts: [{
                  slug: _this3.product.slug,
                  adjustType: "Increment",
                  adjustQty: parseInt(_this3.adjustmentForm.quantity),
                  purchasePrice: _this3.product.avgPurchasePrice || 0
                }]
              };
              _context.next = 4;
              return axios.post("/api/inventory-adjustments", adjustmentData);
            case 4:
              toast.fire({
                type: "success",
                title: _this3.$t("Stock added successfully"),
                text: _this3.$t("The product stock has been increased.")
              });

              // Emit event to refresh product data
              _this3.$emit("stock-updated", {
                product: _this3.product,
                newQuantity: parseInt(_this3.adjustmentForm.quantity)
              });
              _this3.closeModal();
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error("Error adding stock:", _context.t0);
              toast.fire({
                type: "error",
                title: _this3.$t("Error"),
                text: _this3.$t("Failed to add stock. Please try again.")
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_StockAdjustmentModalvue_type_script_lang_js = (StockAdjustmentModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=bc0cd620&prod&scoped=true&lang=css
var StockAdjustmentModalvue_type_style_index_0_id_bc0cd620_prod_scoped_true_lang_css = __webpack_require__(16706);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=bc0cd620&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(StockAdjustmentModalvue_type_style_index_0_id_bc0cd620_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_StockAdjustmentModalvue_type_style_index_0_id_bc0cd620_prod_scoped_true_lang_css = (StockAdjustmentModalvue_type_style_index_0_id_bc0cd620_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=bc0cd620&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/StockAdjustmentModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_StockAdjustmentModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "bc0cd620",
  null
  
)

/* harmony default export */ const StockAdjustmentModal = (component.exports);

/***/ }),

/***/ 56622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/edit.vue?vue&type=template&id=153c52ce&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('QuotationForm', {
    attrs: {
      "mode": "edit"
    }
  });
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=template&id=4e5e1b45&scoped=true
var QuotationFormvue_type_template_id_4e5e1b45_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
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
        name: 'quotations.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": _vm.formId,
      "title": _vm.$t('Save')
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": _vm.formId,
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.handleSubmit.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  })], 1)]), _vm._v(" "), _vm.items ? _c('div', {
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
      'is-invalid': _vm.form.errors.has('client'),
      'rtl-select': _vm.isRTL
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _vm.mode === 'create' && !_vm.form.client ? _c('ClientCreateModal', {
    on: {
      "reloadClients": function reloadClients($event) {
        return _vm.getClients('latest');
      }
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])]) : _vm._e(), _vm._v(" "), _vm.mode === 'create' && _vm.form.client ? _c('div', {
    staticClass: "input-group-text create-btn edit-btn",
    on: {
      "click": _vm.editSelectedClient
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  })]) : _vm._e()], 1), _vm._v(" "), _c('has-error', {
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
  }, [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c('input', {
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }
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
      'is-invalid': _vm.form.errors.has('selectedProducts'),
      'rtl-select': _vm.isRTL
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
  }), _vm._v(" "), _vm.mode === 'create' ? _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts,
      "productCreated": _vm.handleProductCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])]) : _vm._e()], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center quotations-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticStyle: {
        "min-width": "50px"
      }
    }, [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.openStockAdjustmentModal(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-exclamation"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                              " + _vm._s(item.name) + "\n                            ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _vm.mode === 'create' ? _c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit Product'),
        expression: "$t('Edit Product')"
      }],
      staticClass: "btn btn-sm btn-outline-primary ml-2",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.editProductFromTable(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e()])]), _vm._v(" "), _c('td', {
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
          return _vm.generateItemTotal(item.qty, 'qty', i, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.qty,
        expression: "item.qty"
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".qty")),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i + 1),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : null,
        "placeholder": _vm.$t('Quantity')
      },
      domProps: {
        "value": item.qty
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i, '');
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "qty", $event.target.value);
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
          return _vm.generateItemTotal(item.qty, 'qty', i, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.unitPrice,
        expression: "item.unitPrice"
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(i + 1),
        "name": "unitPrice",
        "required": ""
      },
      domProps: {
        "value": item.unitPrice
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i, '');
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "unitPrice", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty)) + " "), _c('span', {
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
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".discountType"))
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
          return _vm.calculateProductDiscount(i);
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
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".discount"))
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
          return _vm.calculateProductDiscount(i);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".discount")) || _vm.form.errors.has("selectedProducts.".concat(i, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.form.errors.has("selectedProducts.".concat(i, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".discountType"))))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty - (item.discountAmount || 0))) + " "), _c('span', {
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
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".selectedVatRate"))
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
          return _vm.calculateProductVat(i);
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
      }, [_vm._v(_vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)")]);
    })], 2), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "100px"
      }
    }, [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center no-currency"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.productTax)))]), _vm._v(" "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + " "), _c('span', {
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
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
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
      "step": "any",
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
      }, _vm.calculateSum]
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": _vm.form.discountType == 1 ? 'col-md-2' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")) + "\n                  "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('input', {
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
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.netTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
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
  })], 1), _vm._v(" "), _vm.form.discountType == 1 ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total discount")))]), _vm._v(" "), _c('input', {
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
      "type": "number",
      "step": "any",
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
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
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
    "class": {
      'is-invalid': _vm.form.errors.has('transportCost')
    },
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "1",
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
  }), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quotation Tax")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax'),
      'rtl-select': _vm.isRTL
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": _vm.calculateSum
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
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
  }), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": 'col-md-4'
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
  }), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "netTotal"
    }
  })], 1), _vm._v(" "), _c('div', {
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("(" + _vm._s(_vm.$t("Email not configured")) + ")")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("(" + _vm._s(_vm.$t("SMS not configured")) + ")")]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
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
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info ml-2",
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])], 1)])])]), _vm._v(" "), _c('ClientEditModal', {
    ref: "clientEditModal",
    on: {
      "reloadClients": _vm.getClients
    }
  }), _vm._v(" "), _c('ProductEditModal', {
    ref: "productEditModal",
    on: {
      "reloadProducts": _vm.getProducts,
      "productUpdated": _vm.handleProductUpdated
    }
  }), _vm._v(" "), _c('StockAdjustmentModal', {
    attrs: {
      "is-open": _vm.showStockAdjustmentModal,
      "product": _vm.selectedProductForStockAdjustment
    },
    on: {
      "close": _vm.closeStockAdjustmentModal,
      "adjust-quantity": _vm.adjustProductQuantity,
      "stock-updated": _vm.handleStockUpdated
    }
  })], 1)])])]);
};
var QuotationFormvue_type_template_id_4e5e1b45_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// CONCATENATED MODULE: ./resources/js/components/QuotationForm.vue?vue&type=template&id=4e5e1b45&scoped=true

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
var ClientCreateModal = __webpack_require__(5181);
// EXTERNAL MODULE: ./resources/js/components/ClientEditModal.vue + 5 modules
var ClientEditModal = __webpack_require__(37665);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 5 modules
var ProductCreateModal = __webpack_require__(52210);
// EXTERNAL MODULE: ./resources/js/components/ProductEditModal.vue + 5 modules
var ProductEditModal = __webpack_require__(51510);
// EXTERNAL MODULE: ./resources/js/components/StockAdjustmentModal.vue + 6 modules
var StockAdjustmentModal = __webpack_require__(28199);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
// EXTERNAL MODULE: ./node_modules/to-words/dist/ToWords.js
var ToWords = __webpack_require__(54923);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=script&lang=js
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











/* harmony default export */ const QuotationFormvue_type_script_lang_js = ({
  name: 'QuotationForm',
  mixins: [RTLMixin/* default */.A],
  components: {
    ToggleButton: dist.ToggleButton,
    ClientCreateModal: ClientCreateModal/* default */.A,
    ClientEditModal: ClientEditModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A,
    ProductEditModal: ProductEditModal/* default */.A,
    StockAdjustmentModal: StockAdjustmentModal/* default */.A
  },
  props: {
    mode: {
      type: String,
      "default": 'create'
    } // 'create' | 'edit'
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Create Quotation",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Quotations",
        url: "quotations.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        client: "",
        reference: "",
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discountType: 0,
        discount: "",
        totalDiscount: 0,
        orderTax: "",
        totalTax: 0,
        invoiceTax: 0,
        productTotalTax: 0,
        transportCost: "",
        date: new Date().toISOString().slice(0, 10),
        deliveryPlace: "",
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false
      }),
      products: "",
      taxes: "",
      prefix: "",
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      },
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    formId: function formId() {
      return this.mode === 'edit' ? 'quotationEditForm' : 'quotationCreateForm';
    },
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    totalUnitPrice: function totalUnitPrice() {
      return this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (t, i) {
        return t + i.unitPrice * i.qty;
      }, 0));
    },
    totalProductDiscount: function totalProductDiscount() {
      return this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (t, i) {
        return t + (i.discountAmount || 0);
      }, 0));
    },
    totalAfterDiscount: function totalAfterDiscount() {
      return this.roundToTwoDecimals(this.totalUnitPrice - this.totalProductDiscount);
    },
    totalProductTax: function totalProductTax() {
      return this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (t, i) {
        return t + (i.totalTax || 0);
      }, 0));
    },
    subtotal: function subtotal() {
      return this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (t, i) {
        return t + (i.totalPrice || 0);
      }, 0));
    },
    hasInsufficientStock: function hasInsufficientStock() {
      return this.form.selectedProducts.some(function (i) {
        return i.itemType === 'product' && Number(i.inventoryCount) < Number(i.qty);
      });
    },
    insufficientStockProducts: function insufficientStockProducts() {
      return this.form.selectedProducts.filter(function (i) {
        return i.itemType === 'product' && Number(i.inventoryCount) < Number(i.qty);
      });
    }
  }),
  created: function created() {
    if (this.mode === 'edit') {
      this.breadcrumbsCurrent = "Edit Quotation";
      this.breadcrumbs = [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Quotations",
        url: "quotations.index"
      }, {
        name: "Edit",
        url: ""
      }];
      this.loadQuotation();
    }
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  methods: {
    loadQuotation: function loadQuotation() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_default().get(window.location.origin + "/api/quotations/" + _this.$route.params.slug);
            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.form.client = data.data.client;
              _this.form.reference = data.data.reference;
              _this.form.totalTax = data.data.totalTax;
              _this.form.orderTax = data.data.quotationTax;
              _this.form.discount = data.data.discountType == 0 ? data.data.discount : data.data.discountPercentage;
              _this.form.discountType = data.data.discountType;
              _this.form.discountPercentage = data.data.discountPercentage;
              _this.form.totalDiscount = data.data.discount;
              _this.form.transportCost = data.data.transport;
              _this.form.subTotal = data.data.subTotal;
              _this.form.deliveryPlace = data.data.deliveryPlace;
              _this.form.date = data.data.date;
              _this.form.note = data.data.note;
              _this.form.status = data.data.status;
              _this.form.selectedProducts = _this.assignProducts(data.data.products);
              _this.calculateSum();
              _context.next = 26;
              break;
            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              console.error('Failed to load quotation', _context.t0);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 23]]);
      }))();
    },
    getClients: function getClients() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var selectedClient;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              selectedClient = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'default';
              _context2.next = 3;
              return _this2.$store.dispatch("operations/allData", {
                path: "/api/all-clients"
              });
            case 3:
              if (selectedClient === 'latest' && _this2.items && _this2.items.length > 0) {
                _this2.form.client = _this2.items[0];
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getProducts: function getProducts() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + "/api/all-products");
            case 2:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              _this3.products = data.data;
              if (Array.isArray(_this3.products)) _this3.products.sort(_this3.sortProducts);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getTaxes: function getTaxes() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data, defaultVatRateSlug;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 2:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              _this4.taxes = data.data;
              if (_this4.taxes && _this4.taxes.length > 0 && !_this4.form.orderTax) {
                defaultVatRateSlug = _this4.appInfo.defaultVatRateSlug;
                _this4.form.orderTax = _this4.taxes.find(function (t) {
                  return t.slug === defaultVatRateSlug;
                }) || _this4.taxes[0];
              }
              _this4.calculateSum();
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _this5.communicationConfig.loading = true;
              _context5.next = 4;
              return axios_default().get('/api/communication-config-status');
            case 4:
              response = _context5.sent;
              _this5.communicationConfig.email_configured = response.data.email_configured;
              _this5.communicationConfig.sms_configured = response.data.sms_configured;
              _context5.next = 13;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              _this5.communicationConfig.email_configured = false;
              _this5.communicationConfig.sms_configured = false;
            case 13:
              _context5.prev = 13;
              _this5.communicationConfig.loading = false;
              return _context5.finish(13);
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9, 13, 16]]);
      }))();
    },
    sortProducts: function sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) return -1;
      if (Number(a.code) > Number(b.code)) return 1;
      return 0;
    },
    storeProduct: function storeProduct(product) {
      if (!product) return;
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        var _this$taxes;
        var productTax = product.taxType == "Exclusive" ? product.priceWithDiscount * (product.taxRate / 100) : product.priceWithDiscount - product.priceWithDiscount / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.priceWithDiscount,
          unitCost: product.taxType == "Exclusive" ? product.priceWithDiscount + productTax : product.priceWithDiscount,
          totalPrice: product.taxType == "Exclusive" ? 1 * (product.priceWithDiscount + totalTax) : 1 * product.priceWithDiscount,
          productTax: productTax,
          totalTax: totalTax,
          itemType: product.itemType,
          inventoryCount: product.inventoryCount,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.taxRate) || this.form.orderTax || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0])
        });
      }
      this.generateItemTotal(qunatity, "qty", index === -1 ? 0 : index, "");
    },
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return Math.abs(tax.rate - productTax) < 0.01;
      });
    },
    ensureDiscountProperties: function ensureDiscountProperties() {
      var _this6 = this;
      this.form.selectedProducts.forEach(function (item) {
        if (typeof item.discount === 'undefined') item.discount = 0;
        if (typeof item.discountType === 'undefined') item.discountType = 'fixed';
        if (typeof item.discountAmount === 'undefined') item.discountAmount = 0;
        if (typeof item.selectedVatRate === 'undefined') {
          if (item.taxRate) item.selectedVatRate = _this6.findMatchingVatRate(item.taxRate);
          if (!item.selectedVatRate) item.selectedVatRate = _this6.form.orderTax || _this6.taxes && _this6.taxes[0];
        }
      });
    },
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      if (item.discountType === "percentage") {
        this.$set(item, 'discountAmount', this.roundToTwoDecimals(item.unitPrice * item.qty * item.discount / 100));
      } else {
        this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      if (!item.selectedVatRate) {
        if (item.taxRate) item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
        if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) item.selectedVatRate = this.taxes[0];
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          var newQty = value;
          if (action == "increment") newQty = Number(item.qty) + 1;else if (action == "decrement") {
            if (item.qty > 0) newQty = Number(item.qty) - 1;
          }
          this.$set(item, 'qty', newQty);
        } else if (type == "price") {
          var newPrice = value;
          if (action == "increment") newPrice = Number(item.unitPrice) + 1;else if (action == "decrement") {
            if (item.unitPrice > 0) newPrice = Number(item.unitPrice) - 1;
          }
          this.$set(item, 'unitPrice', newPrice);
        }
        if (item.discount > 0) {
          if (item.discountType === "percentage") this.$set(item, 'discountAmount', this.roundToTwoDecimals(item.unitPrice * item.qty * item.discount / 100));else this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
        }
        this.generateItemTotalPrice(index);
      }
      this.calculateSum();
    },
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      var priceAfterDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty - (item.discountAmount || 0));
      var vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) vatRate = Number(item.selectedVatRate.rate);else if (item.taxRate !== undefined && item.taxRate !== null) vatRate = Number(item.taxRate);
      if (isNaN(vatRate) || vatRate < 0) vatRate = 0;
      if (item.taxType == "Exclusive") {
        item.productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
        item.totalTax = this.roundToTwoDecimals(item.productTax);
        item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount + item.totalTax);
      } else {
        var discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / item.qty);
        item.unitPrice = discountedUnitPrice;
        item.productTax = this.roundToTwoDecimals(discountedUnitPrice - discountedUnitPrice / (1 + vatRate / 100));
        item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);
        item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount);
      }
      this.form.selectedProducts[index] = item;
    },
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    },
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
    },
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') return '0.00';
      var num = Number(value);
      if (isNaN(num)) return '0.00';
      return num.toFixed(2);
    },
    calculateSum: function calculateSum() {
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) globalDiscount = this.roundToTwoDecimals(this.form.discount / 100 * this.form.subTotal);else globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
      }
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)));
      }
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));
      if (this.isSaudiArabia) {
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.form.subTotal));
      } else {
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.form.subTotal - globalDiscount + this.form.invoiceTax + Number(this.form.transportCost || 0)));
      }
    },
    editSelectedClient: function editSelectedClient() {
      if (!this.form.client) {
        toast.fire({
          type: "warning",
          title: this.$t("Warning"),
          text: this.$t("Please select a client first.")
        });
        return;
      }
      if (!this.$refs.clientEditModal) {
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }
      this.$refs.clientEditModal.openModal(this.form.client);
    },
    editProductFromTable: function editProductFromTable(product) {
      if (!this.$refs.productEditModal) {
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }
      this.$refs.productEditModal.openModal(product);
    },
    handleProductCreated: function handleProductCreated(newProduct) {
      this.products.unshift(newProduct);
      this.products.sort(this.sortProducts);
      this.form.product = newProduct;
      this.storeProduct(newProduct);
    },
    handleProductUpdated: function handleProductUpdated(eventData) {
      var originalProduct = eventData.originalProduct,
        updatedData = eventData.updatedData;
      var productIndex = this.form.selectedProducts.findIndex(function (p) {
        return p.id === originalProduct.id || p.slug === originalProduct.slug;
      });
      if (productIndex !== -1) {
        var updatedProduct = _objectSpread({}, this.form.selectedProducts[productIndex]);
        updatedProduct.name = updatedData.itemName || updatedProduct.name;
        updatedProduct.item_name = updatedData.itemName || updatedProduct.item_name;
        updatedProduct.regular_price = updatedData.regularPrice || updatedProduct.regular_price;
        updatedProduct.price = updatedData.regularPrice || updatedProduct.price;
        updatedProduct.discount = updatedData.discount || updatedProduct.discount;
        updatedProduct.selling_price = updatedData.sellingPrice || updatedProduct.selling_price;
        if (updatedData.subCategory) updatedProduct.sub_category_id = updatedData.subCategory;
        if (updatedData.itemUnit) updatedProduct.unit_id = updatedData.itemUnit;
        if (updatedData.productTax) {
          updatedProduct.tax_id = updatedData.productTax;
          updatedProduct.vat_rate_id = updatedData.productTax;
        }
        if (updatedData.brand) updatedProduct.brand_id = updatedData.brand;
        this.$set(this.form.selectedProducts, productIndex, updatedProduct);
        this.calculateSum();
      }
    },
    openStockAdjustmentModal: function openStockAdjustmentModal(product) {
      this.selectedProductForStockAdjustment = product;
      this.showStockAdjustmentModal = true;
    },
    closeStockAdjustmentModal: function closeStockAdjustmentModal() {
      this.showStockAdjustmentModal = false;
      this.selectedProductForStockAdjustment = null;
    },
    adjustProductQuantity: function adjustProductQuantity(product) {
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'qty', product.inventoryCount);
        this.generateItemTotal(product.inventoryCount, "qty", index, "");
        toast.fire({
          type: "info",
          title: this.$t("Quantity Adjusted"),
          text: this.$t("Product quantity has been adjusted to available stock.")
        });
      }
      this.closeStockAdjustmentModal();
    },
    handleStockUpdated: function handleStockUpdated(eventData) {
      this.getProducts();
      var product = eventData.product,
        newQuantity = eventData.newQuantity;
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount', (this.form.selectedProducts[index].inventoryCount || 0) + newQuantity);
        this.calculateSum();
      }
    },
    toWord: function toWord() {
      var amount = this.subtotal || 0;
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      return this.isRTL && this.currentLocale === 'ar' ? this.convertToArabicWords(amount) : this.convertToEnglishWords(amount);
    },
    convertToArabicWords: function convertToArabicWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return "\u0635\u0641\u0631 ".concat(currencyInfo.main, " \u0641\u0642\u0637");
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = '';
      if (integerPart > 0) {
        var arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;
        if (integerPart === 2) result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');else if (integerPart >= 3 && integerPart <= 10) result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
      }
      if (decimalPart > 0) {
        if (result) result += ' و ';
        var arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;
        if (decimalPart === 2) result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');else if (decimalPart >= 3 && decimalPart <= 10) result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
      }
      return result + ' فقط';
    },
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
    convertToEnglishWords: function convertToEnglishWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      var toWords = new ToWords.ToWords();
      var words = toWords.convert(amount);
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
    handleSubmit: function handleSubmit() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(_this7.mode === 'edit')) {
                _context6.next = 5;
                break;
              }
              _context6.next = 3;
              return _this7.form.patch(window.location.origin + "/api/quotations/" + _this7.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: "success",
                  title: _this7.$t("Quotation updated successfully")
                });
                _this7.$router.push({
                  name: "quotations.show",
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function (error) {
                _this7.handleSubmitError(error);
              });
            case 3:
              _context6.next = 7;
              break;
            case 5:
              _context6.next = 7;
              return _this7.form.post(window.location.origin + "/api/quotations").then(function (_ref2) {
                var data = _ref2.data;
                toast.fire({
                  type: "success",
                  title: _this7.$t("Quotation added successfully")
                });
                _this7.$router.push({
                  name: "quotations.show",
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function (error) {
                _this7.handleSubmitError(error);
              });
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    handleSubmitError: function handleSubmitError(error) {
      var _error$response,
        _error$response2,
        _this8 = this;
      if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
        var serverErrors = error.response.data.errors || {};
        var translatedErrors = {};
        Object.keys(serverErrors).forEach(function (field) {
          var fieldErrors = serverErrors[field] || [];
          translatedErrors[field] = fieldErrors.map(function (message) {
            return _this8.translateValidationMessage(message, field);
          });
        });
        this.form.errors.set(translatedErrors);
        toast.fire({
          type: "error",
          title: this.$t("Please check your input and try again.")
        });
      } else {
        var _error$response3;
        var message = (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || this.$t("Please check your input and try again.");
        toast.fire({
          type: "error",
          title: message
        });
      }
    },
    translateValidationMessage: function translateValidationMessage(message, field) {
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';
      var fieldLabelMap = {
        client: this.$t("Client"),
        reference: this.$t("Reference"),
        selectedProducts: this.$t("Select Items"),
        date: this.$t("Date"),
        deliveryPlace: this.$t("Delivery Place"),
        note: this.$t("Note"),
        status: this.$t("Status"),
        discount: this.$t("Discount"),
        discountType: this.$t("Discount Type"),
        totalDiscount: this.$t("Total discount"),
        orderTax: this.$t("Quotation Tax"),
        totalTax: this.$t("Total Tax"),
        netTotal: this.$t("Net Total"),
        transportCost: this.$t("Transport Cost")
      };
      var fieldLabel = fieldLabelMap[field] || field;
      var patterns = [{
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
        en: "The selected value is invalid",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
        en: "Must be a number",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
        en: "Must be an integer",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
        en: "Invalid format",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
        en: "This value has already been taken",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
      }];
      for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
        var _patterns$_i = _patterns[_i],
          re = _patterns$_i.re,
          en = _patterns$_i.en,
          ar = _patterns$_i.ar;
        var match = message.match(re);
        if (match) {
          var text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en).apply(void 0, _toConsumableArray(match)) : isArabic ? ar : en;
          return "".concat(fieldLabel, ": ").concat(text);
        }
      }
      return message;
    },
    assignProducts: function assignProducts(quotationProducts) {
      if (!quotationProducts) return [];
      var mapped = [];
      for (var key in quotationProducts) {
        var _ref3, _qp$salePrice, _qp$taxRate, _qp$taxAmount, _qp$unitCostTotal, _qp$unitCost, _qp$productID, _qp$productSlug, _qp$productName, _qp$productCode, _qp$inventoryCount, _qp$discount, _qp$discountType, _qp$discountAmount;
        var qp = quotationProducts[key];
        var qty = Number(qp.quantity || qp.qty || 1);
        var unitPrice = Number((_ref3 = (_qp$salePrice = qp.salePrice) !== null && _qp$salePrice !== void 0 ? _qp$salePrice : qp.unitPrice) !== null && _ref3 !== void 0 ? _ref3 : 0);
        var taxType = qp.taxType;
        var taxRate = Number((_qp$taxRate = qp.taxRate) !== null && _qp$taxRate !== void 0 ? _qp$taxRate : 0);
        var productTax = Number((_qp$taxAmount = qp.taxAmount) !== null && _qp$taxAmount !== void 0 ? _qp$taxAmount : 0);
        var totalTax = productTax * qty;
        var totalPrice = Number((_qp$unitCostTotal = qp.unitCostTotal) !== null && _qp$unitCostTotal !== void 0 ? _qp$unitCostTotal : taxType === 'Exclusive' ? qty * unitPrice + totalTax : qty * unitPrice);
        var unitCost = Number((_qp$unitCost = qp.unitCost) !== null && _qp$unitCost !== void 0 ? _qp$unitCost : taxType === 'Exclusive' ? unitPrice + productTax : unitPrice);
        mapped.unshift({
          id: (_qp$productID = qp.productID) !== null && _qp$productID !== void 0 ? _qp$productID : qp.id,
          slug: (_qp$productSlug = qp.productSlug) !== null && _qp$productSlug !== void 0 ? _qp$productSlug : qp.slug,
          name: (_qp$productName = qp.productName) !== null && _qp$productName !== void 0 ? _qp$productName : qp.name,
          code: (_qp$productCode = qp.productCode) !== null && _qp$productCode !== void 0 ? _qp$productCode : qp.code,
          taxType: taxType,
          taxRate: taxRate,
          qty: qty,
          avgPurchasePrice: qp.avgPurchasePrice,
          unitPrice: unitPrice,
          unitCost: unitCost,
          totalPrice: totalPrice,
          productTax: productTax,
          totalTax: totalTax,
          itemType: qp.itemType || 'product',
          inventoryCount: (_qp$inventoryCount = qp.inventoryCount) !== null && _qp$inventoryCount !== void 0 ? _qp$inventoryCount : 0,
          discount: (_qp$discount = qp.discount) !== null && _qp$discount !== void 0 ? _qp$discount : 0,
          discountType: (_qp$discountType = qp.discountType) !== null && _qp$discountType !== void 0 ? _qp$discountType : 'fixed',
          discountAmount: (_qp$discountAmount = qp.discountAmount) !== null && _qp$discountAmount !== void 0 ? _qp$discountAmount : 0,
          selectedVatRate: this.findMatchingVatRate(taxRate) || this.form.orderTax || this.taxes && this.taxes[0] || null
        });
      }
      this.form.selectedProducts = mapped;
      this.ensureDiscountProperties();
      return mapped;
    }
  },
  mounted: function mounted() {}
});
;// CONCATENATED MODULE: ./resources/js/components/QuotationForm.vue?vue&type=script&lang=js
 /* harmony default export */ const components_QuotationFormvue_type_script_lang_js = (QuotationFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&id=4e5e1b45&prod&scoped=true&lang=css
var QuotationFormvue_type_style_index_0_id_4e5e1b45_prod_scoped_true_lang_css = __webpack_require__(89277);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&id=4e5e1b45&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(QuotationFormvue_type_style_index_0_id_4e5e1b45_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_QuotationFormvue_type_style_index_0_id_4e5e1b45_prod_scoped_true_lang_css = (QuotationFormvue_type_style_index_0_id_4e5e1b45_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/components/QuotationForm.vue?vue&type=style&index=0&id=4e5e1b45&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/QuotationForm.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_QuotationFormvue_type_script_lang_js,
  QuotationFormvue_type_template_id_4e5e1b45_scoped_true_render,
  QuotationFormvue_type_template_id_4e5e1b45_scoped_true_staticRenderFns,
  false,
  null,
  "4e5e1b45",
  null
  
)

/* harmony default export */ const QuotationForm = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/edit.vue?vue&type=script&lang=js

/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  components: {
    QuotationForm: QuotationForm
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Quotation")
    };
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/sales/quotations/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./resources/js/pages/sales/quotations/edit.vue





/* normalize component */
;
var edit_component = (0,componentNormalizer/* default */.A)(
  quotations_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "153c52ce",
  null
  
)

/* harmony default export */ const edit = (edit_component.exports);

/***/ })

}]);