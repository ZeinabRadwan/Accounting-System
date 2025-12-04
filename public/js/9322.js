"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9322],{

/***/ 20709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".setup-page[data-v-cdded014]{border:1px solid #cbd0dd;border-radius:10px;padding:1rem}.setup-header[data-v-cdded014]{align-items:center;color:#000;display:flex;gap:.5rem;margin-bottom:.75rem}.setup-header-icon[data-v-cdded014]{align-items:center;display:flex;font-size:1.1rem;justify-content:center}.setup-header-text[data-v-cdded014]{font-size:1.5rem}.setup-grid[data-v-cdded014]{display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:1rem}.setup-card[data-v-cdded014]{align-items:center;background:#f7f7fc;border:1px solid #e9ecef;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.05);display:flex;gap:1rem;height:100%;max-width:100%;padding:1.25rem;transition:all .3s ease;width:100%}.setup-card[data-v-cdded014],.setup-card[data-v-cdded014]:hover{color:inherit;text-decoration:none}.setup-card[data-v-cdded014]:hover{border-color:#007bff;box-shadow:0 4px 12px rgba(0,123,255,.15);transform:translateY(-2px)}.setup-card-icon[data-v-cdded014]{align-items:center;border-radius:12px;color:#fff;display:flex;flex-shrink:0;font-size:1.5rem;height:56px;justify-content:center;width:56px}.setup-card-icon.bg-primary[data-v-cdded014]{background:#0775af}.setup-card-icon.bg-info[data-v-cdded014]{background:#00c0e8}.setup-card-icon.bg-success[data-v-cdded014]{background:#34c759}.setup-card-icon.bg-warning[data-v-cdded014]{background:#08f}.setup-card-icon.bg-dark[data-v-cdded014]{background:#000}.setup-card-icon.bg-secondary[data-v-cdded014]{background:#8e8e93}.setup-card-content[data-v-cdded014]{flex:1;min-width:0}.setup-card-content h5[data-v-cdded014]{color:#212529;font-size:1rem;font-weight:600;margin:0 0 .5rem}.setup-card-content p[data-v-cdded014]{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#6c757d;display:-webkit-box;font-size:.85rem;line-height:1.4;margin:0;overflow:hidden}.setup-card-arrow[data-v-cdded014]{color:#6c757d;flex-shrink:0;font-size:.875rem;transition:all .3s ease}.setup-card:hover .setup-card-arrow[data-v-cdded014]{color:#007bff;transform:translateX(-4px)}@media (max-width:768px){.setup-grid[data-v-cdded014]{gap:.75rem;grid-template-columns:repeat(1,minmax(0,1fr))}.setup-card[data-v-cdded014]{gap:.75rem;padding:1rem}.setup-card-icon[data-v-cdded014]{font-size:1.25rem;height:48px;width:48px}.setup-card-content h5[data-v-cdded014]{font-size:.95rem}.setup-card-content p[data-v-cdded014]{font-size:.8rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 29322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setup)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=template&id=cdded014&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "setup-page"
  }, [_c('div', {
    staticClass: "setup-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "setup-header-text"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('Settings')) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "row setup-grid"
  }, [_vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.general'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-primary"
  }, [_c('i', {
    staticClass: "fas fa-cog"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('General')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('General settings such as, site title, site description, address and so on.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.mailConfiguration'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Mail Configurations')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage your mail configuration such as HOST, USERNAME, PASSWORD etc.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.smsConfiguration'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-sms"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('SMS Configurations')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage your sms configuration such as TWILIO ACCOUNT SID, FROM etc.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.developer ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'permissions.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-braille"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('User Permissions')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage permission that you are going to assign in a role.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('user-role') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-dark"
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Role & Permissions')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage Roles & Permissions for users who are going to use the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('currencies-management') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'currencies.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Currencies')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage various types of currencies that you are going to use in the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('units-management') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'units.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-secondary"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Units')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage unit types for measurement that you are going to use in the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('vat-rate-management') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'vatRates.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-primary"
  }, [_c('i', {
    staticClass: "fas fa-percentage"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Tax Rates')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage Tax rates for Tax management that you are going to use in the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('brands-management') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'brands.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-bold"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Brands')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage brands that you are going to use in the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('payment-method-management') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'paymentMethods.index'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-wallet"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Payment Methods')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage payment methods that you are going to use in the system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.fiscal-years'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-calendar-alt"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Fiscal Years')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage fiscal years for your accounting system.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.accounting-periods'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-secondary"
  }, [_c('i', {
    staticClass: "fas fa-calendar-week"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Accounting Periods')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage accounting periods within fiscal years.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        path: 'setup/accounting-settings/account-routing'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-primary"
  }, [_c('i', {
    staticClass: "fas fa-calculator"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('اعدادات الحسابات العامة')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('قم باختيار الحسابات الرئيسية لكل قسم محاسبي بشكل مباشر')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') && _vm.isSaudiArabia ? _c('div', [_c('router-link', {
    staticClass: "setup-card",
    attrs: {
      "to": {
        name: 'setup.zatca'
      }
    }
  }, [_c('div', {
    staticClass: "setup-card-icon bg-dark"
  }, [_c('i', {
    staticClass: "fas fa-file-invoice"
  })]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-content"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('ZATCA Settings')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Configure ZATCA e-invoicing settings for Saudi Arabia compliance.')))])]), _vm._v(" "), _c('div', {
    staticClass: "setup-card-arrow"
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })])])], 1) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "setup-header-icon"
  }, [_c('i', {
    staticClass: "fas fa-cog"
  })]);
}];

;// ./resources/js/pages/setup/index.vue?vue&type=template&id=cdded014&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = undefined;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const setupvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Setup')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: _this.$t('Setup'),
      breadcrumbs: [{
        name: _this.$t('Dashboard'),
        url: 'home'
      }, {
        name: _this.$t('Setup'),
        url: ''
      }],
      developer: ''
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('auth', ['user'])), (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    }
  }),
  created: function created() {
    this.developer = this.user.roles.includes('developer');
  },
  methods: {}
});
;// ./resources/js/pages/setup/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_setupvue_type_script_lang_js = (setupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=cdded014&prod&scoped=true&lang=css
var setupvue_type_style_index_0_id_cdded014_prod_scoped_true_lang_css = __webpack_require__(20709);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=cdded014&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(setupvue_type_style_index_0_id_cdded014_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_setupvue_type_style_index_0_id_cdded014_prod_scoped_true_lang_css = (setupvue_type_style_index_0_id_cdded014_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=cdded014&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=cdded014&prod&lang=css
var setupvue_type_style_index_1_id_cdded014_prod_lang_css = __webpack_require__(35213);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=cdded014&prod&lang=css

            

var setupvue_type_style_index_1_id_cdded014_prod_lang_css_options = {};

setupvue_type_style_index_1_id_cdded014_prod_lang_css_options.insert = "head";
setupvue_type_style_index_1_id_cdded014_prod_lang_css_options.singleton = false;

var setupvue_type_style_index_1_id_cdded014_prod_lang_css_update = injectStylesIntoStyleTag_default()(setupvue_type_style_index_1_id_cdded014_prod_lang_css/* default */.A, setupvue_type_style_index_1_id_cdded014_prod_lang_css_options);



/* harmony default export */ const pages_setupvue_type_style_index_1_id_cdded014_prod_lang_css = (setupvue_type_style_index_1_id_cdded014_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=cdded014&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/index.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_setupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "cdded014",
  null
  
)

/* harmony default export */ const setup = (component.exports);

/***/ }),

/***/ 35213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);