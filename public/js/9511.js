"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9511],{

/***/ 29653:
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


/***/ }),

/***/ 31892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setup)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=template&id=79256e98&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row set-up-page"
  }, [_vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('General')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('General settings such as, site title, site description, address and so on.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.general'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Setting')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Mail Configurations')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage your mail configuration such as HOST, USERNAME, PASSWORD etc.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.mailConfiguration'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Mail Configurations')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('SMS Configurations')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage your sms configuration such as TWILIO ACCOUNT SID, FROM etc.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.smsConfiguration'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('SMS Configurations')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.developer ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('User Permissions')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage permission that you are going to assign in a role.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'permissions.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('User Permissions')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('user-role') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Role & Permissions')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage Roles & Permissions for users who are going to use the system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Roles & Permissions')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('currencies-management') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Currencies')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage various types of currencies that you are going to use in the system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'currencies.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Currencies')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('units-management') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Units')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage unit types for measurement that you are going to use in the system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'units.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Units')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('vat-rate-management') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Tax Rates')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage Tax rates for Tax management that you are going to use in the system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'vatRates.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Tax Rates')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('brands-management') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Brands')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Manage brands that you are going to use in the system.')))]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'brands.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Brands')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('payment-method-management') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Payment Methods')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage payment methods that you are going to use in the system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'paymentMethods.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Payment Methods')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(10), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Fiscal Years')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage fiscal years for your accounting system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.fiscal-years'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Fiscal Years')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Accounting Periods')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage accounting periods within fiscal years.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.accounting-periods'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Accounting Periods')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(12), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Account Routing')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Configure account routing settings for accounting system.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        path: 'setup/accounting-settings/account-routing'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Account Routing')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') && _vm.isSaudiArabia ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(13), _vm._v(" "), _c('div', {
    staticClass: "cards-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('ZATCA Settings')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Configure ZATCA e-invoicing settings for Saudi Arabia compliance.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.zatca'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('ZATCA Settings')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e()])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-primary"
  }, [_c('i', {
    staticClass: "fas fa-cog"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-light-blue"
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-light-green"
  }, [_c('i', {
    staticClass: "fas fa-sms"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-green"
  }, [_c('i', {
    staticClass: "fas fa-braille"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-dark-blue"
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-teal"
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-dark-teal"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-primary"
  }, [_c('i', {
    staticClass: "fas fa-percentage"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-light-green"
  }, [_c('i', {
    staticClass: "fas fa-bold"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-green"
  }, [_c('i', {
    staticClass: "fas fa-wallet"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-teal"
  }, [_c('i', {
    staticClass: "fas fa-calendar-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-dark-teal"
  }, [_c('i', {
    staticClass: "fas fa-calendar-week"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-primary"
  }, [_c('i', {
    staticClass: "fas fa-route"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-brand-dark-blue"
  }, [_c('i', {
    staticClass: "fas fa-file-invoice"
  })]);
}];

;// ./resources/js/pages/setup/index.vue?vue&type=template&id=79256e98&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = undefined;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
  mounted: function mounted() {
    this.$nextTick(this.equalizeCardsBodyHeight);
    window.addEventListener('resize', this.equalizeCardsBodyHeight);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.equalizeCardsBodyHeight);
  },
  methods: {
    equalizeCardsBodyHeight: function equalizeCardsBodyHeight() {
      var bodies = Array.from(this.$el.querySelectorAll('.cards-body'));
      if (!bodies.length) return;
      bodies.forEach(function (el) {
        el.style.height = 'auto';
      });
      var max = Math.max.apply(Math, _toConsumableArray(bodies.map(function (el) {
        return el.offsetHeight;
      })));
      bodies.forEach(function (el) {
        el.style.height = "".concat(max, "px");
      });
    }
  }
});
;// ./resources/js/pages/setup/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_setupvue_type_script_lang_js = (setupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=79256e98&prod&scoped=true&lang=css
var setupvue_type_style_index_0_id_79256e98_prod_scoped_true_lang_css = __webpack_require__(56941);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=79256e98&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(setupvue_type_style_index_0_id_79256e98_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_setupvue_type_style_index_0_id_79256e98_prod_scoped_true_lang_css = (setupvue_type_style_index_0_id_79256e98_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/index.vue?vue&type=style&index=0&id=79256e98&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=79256e98&prod&lang=css
var setupvue_type_style_index_1_id_79256e98_prod_lang_css = __webpack_require__(29653);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=79256e98&prod&lang=css

            

var setupvue_type_style_index_1_id_79256e98_prod_lang_css_options = {};

setupvue_type_style_index_1_id_79256e98_prod_lang_css_options.insert = "head";
setupvue_type_style_index_1_id_79256e98_prod_lang_css_options.singleton = false;

var setupvue_type_style_index_1_id_79256e98_prod_lang_css_update = injectStylesIntoStyleTag_default()(setupvue_type_style_index_1_id_79256e98_prod_lang_css/* default */.A, setupvue_type_style_index_1_id_79256e98_prod_lang_css_options);



/* harmony default export */ const pages_setupvue_type_style_index_1_id_79256e98_prod_lang_css = (setupvue_type_style_index_1_id_79256e98_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/index.vue?vue&type=style&index=1&id=79256e98&prod&lang=css

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
  "79256e98",
  null
  
)

/* harmony default export */ const setup = (component.exports);

/***/ }),

/***/ 56941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-icon.bg-brand-primary[data-v-79256e98]{background:linear-gradient(135deg,#33a0d9,#2a8bc7)!important;border:1px solid rgba(51,160,217,.3);border-radius:20px}.card-icon.bg-brand-light-blue[data-v-79256e98]{background:linear-gradient(135deg,#ebf6fc,#d6edf7)!important;border:1px solid rgba(235,246,252,.5);border-radius:20px;color:#33a0d9!important}.card-icon.bg-brand-light-green[data-v-79256e98]{background:linear-gradient(135deg,#f6fef4,#e8f5e8)!important;border:1px solid rgba(246,254,244,.5);border-radius:20px;color:#33a0d9!important}.card-icon.bg-brand-green[data-v-79256e98]{background:linear-gradient(135deg,#2ab930,#239a26)!important;border:1px solid rgba(42,185,48,.3);border-radius:20px}.card-icon.bg-brand-dark-blue[data-v-79256e98]{background:linear-gradient(135deg,#33a0d9,#152a4a)!important;border:1px solid rgba(27,60,113,.3);border-radius:20px}.card-icon.bg-brand-teal[data-v-79256e98]{background:linear-gradient(135deg,#449eae,#3a8a98)!important;border:1px solid rgba(68,158,174,.3);border-radius:20px}.card-icon.bg-brand-dark-teal[data-v-79256e98]{background:linear-gradient(135deg,#377578,#2d5f61)!important;border:1px solid rgba(55,117,120,.3);border-radius:20px}.card-icon.bg-brand-light-blue i[data-v-79256e98],.card-icon.bg-brand-light-green i[data-v-79256e98]{color:#33a0d9!important}.card-icon.bg-brand-dark-blue i[data-v-79256e98],.card-icon.bg-brand-dark-teal i[data-v-79256e98],.card-icon.bg-brand-green i[data-v-79256e98],.card-icon.bg-brand-primary i[data-v-79256e98],.card-icon.bg-brand-teal i[data-v-79256e98]{color:#fff!important}.card[data-v-79256e98]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-79256e98]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-79256e98],.cards-body[data-v-79256e98]{padding:1.25rem}.card-footer[data-v-79256e98]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.card-cta i[data-v-79256e98],.card-cta:hover i[data-v-79256e98]{color:inherit!important}.set-up-page .card.card-large-icons[data-v-79256e98]{min-height:200px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);