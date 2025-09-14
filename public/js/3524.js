"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3524],{

/***/ 3524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setup)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=template&id=b3d62cf8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
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
    staticClass: "card-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('Accounting Periods')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage accounting periods within fiscal years.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.accounting-periods'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Accounting Periods')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') && _vm.isSaudiArabia ? _c('div', {
    staticClass: "col-xl-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(12), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('ZATCA Settings')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Configure ZATCA e-invoicing settings for Saudi Arabia compliance.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.zatca'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('ZATCA Settings')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e()])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-cog"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-sms"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-braille"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-percentage"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-bold"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-wallet"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-info"
  }, [_c('i', {
    staticClass: "fas fa-calendar-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-calendar-week"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-danger"
  }, [_c('i', {
    staticClass: "fas fa-file-invoice"
  })]);
}];

;// ./resources/js/pages/setup/index.vue?vue&type=template&id=b3d62cf8

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      breadcrumbsCurrent: 'Setup',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
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
  }
});
;// ./resources/js/pages/setup/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_setupvue_type_script_lang_js = (setupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  pages_setupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const setup = (component.exports);

/***/ })

}]);