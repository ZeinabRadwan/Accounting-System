"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1138],{

/***/ 89900:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inner-card[data-v-4960901e]{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)}.inner-card .card-header[data-v-4960901e]{background-color:rgba(0,0,0,.03)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SettingsSidebar)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=template&id=35c625ee
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card settings-card no-print"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('ul', {
    staticClass: "nav flex-column nav-pills m-1"
  }, [_vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.general'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-cog"
  }), _vm._v("\n          " + _vm._s(_vm.$t('General Settings')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.mailConfiguration'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Mail Configurations')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.smsConfiguration'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sms"
  }), _vm._v("\n          " + _vm._s(_vm.$t('SMS Configurations')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.centralCurrency.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Currency Settings")) + "\n        ")])], 1), _vm._v(" "), _vm.$can('payment-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'advanced-settings'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-wallet"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Payment Settings')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('user-role') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Role & Permissions')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('user-management') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'user.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-user-cog"
  }), _vm._v("\n          " + _vm._s(_vm.$t('User Management')) + "\n        ")])], 1) : _vm._e()])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const SettingsSidebarvue_type_script_lang_js = ({
  name: "SettingsSidebar",
  data: function data() {
    return {
      developer: ""
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("auth", ["user"])),
  created: function created() {
    this.developer = this.user.roles.includes("developer");
  },
  methods: {}
});
;// CONCATENATED MODULE: ./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ const central_SettingsSidebarvue_type_script_lang_js = (SettingsSidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/components/central/SettingsSidebar.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  central_SettingsSidebarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const SettingsSidebar = (component.exports);

/***/ }),

/***/ 41138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ advanced)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=template&id=4960901e&scoped=true
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
    staticClass: "col-12 col-xl-3"
  }, [_c('SettingsSidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateSettings.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Payment Methods")) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'setup.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Back")) + "\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Manual")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('checkbox', {
    attrs: {
      "name": "MANUAL_PAYMENT_IS_ACTIVE"
    },
    model: {
      value: _vm.form.MANUAL_PAYMENT_IS_ACTIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "MANUAL_PAYMENT_IS_ACTIVE", $$v);
      },
      expression: "form.MANUAL_PAYMENT_IS_ACTIVE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "MANUAL_PAYMENT_NOTE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Manual Payment Note")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.MANUAL_PAYMENT_NOTE,
      expression: "form.MANUAL_PAYMENT_NOTE"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('MANUAL_PAYMENT_NOTE')
    },
    attrs: {
      "id": "MANUAL_PAYMENT_NOTE",
      "name": "MANUAL_PAYMENT_NOTE",
      "placeholder": _vm.$t('Manual Payment Note')
    },
    domProps: {
      "value": _vm.form.MANUAL_PAYMENT_NOTE
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "MANUAL_PAYMENT_NOTE", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "MANUAL_PAYMENT_NOTE"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Stripe")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('checkbox', {
    attrs: {
      "name": "STRIPE_IS_ACTIVE"
    },
    model: {
      value: _vm.form.STRIPE_IS_ACTIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "STRIPE_IS_ACTIVE", $$v);
      },
      expression: "form.STRIPE_IS_ACTIVE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "STRIPE_IS_ACTIVE"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "STRIPE_SECRET"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Stripe Secret")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.STRIPE_SECRET,
      expression: "form.STRIPE_SECRET"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('STRIPE_SECRET')
    },
    attrs: {
      "id": "STRIPE_SECRET",
      "type": "password",
      "name": "STRIPE_SECRET",
      "placeholder": _vm.$t('Stripe Secret')
    },
    domProps: {
      "value": _vm.form.STRIPE_SECRET
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "STRIPE_SECRET", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "STRIPE_SECRET"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Paypal")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('checkbox', {
    attrs: {
      "name": "PAYPAL_IS_ACTIVE"
    },
    model: {
      value: _vm.form.PAYPAL_IS_ACTIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYPAL_IS_ACTIVE", $$v);
      },
      expression: "form.PAYPAL_IS_ACTIVE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYPAL_IS_ACTIVE"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "PAYPAL_MODE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paypal Mode")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.PAYPAL_MODE,
      expression: "form.PAYPAL_MODE"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('PAYPAL_MODE')
    },
    attrs: {
      "id": "PAYPAL_MODE",
      "type": "password",
      "name": "PAYPAL_MODE"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "PAYPAL_MODE", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "sandbox"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Sandbox")) + "\n                      ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "live"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Live")) + "\n                      ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYPAL_MODE"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "PAYPAL_CLIENT_ID"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paypal Client ID")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.PAYPAL_CLIENT_ID,
      expression: "form.PAYPAL_CLIENT_ID"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('PAYPAL_CLIENT_ID')
    },
    attrs: {
      "id": "PAYPAL_CLIENT_ID",
      "type": "text",
      "name": "PAYPAL_CLIENT_ID",
      "placeholder": _vm.$t('Paypal Client ID')
    },
    domProps: {
      "value": _vm.form.PAYPAL_CLIENT_ID
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "PAYPAL_CLIENT_ID", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYPAL_CLIENT_ID"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "PAYPAL_CLIENT_SECRET"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paypal Client Secret")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.PAYPAL_CLIENT_SECRET,
      expression: "form.PAYPAL_CLIENT_SECRET"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('PAYPAL_CLIENT_SECRET')
    },
    attrs: {
      "id": "PAYPAL_CLIENT_SECRET",
      "type": "password",
      "name": "PAYPAL_CLIENT_SECRET",
      "placeholder": _vm.$t('Paypal Client Secret')
    },
    domProps: {
      "value": _vm.form.PAYPAL_CLIENT_SECRET
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "PAYPAL_CLIENT_SECRET", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYPAL_CLIENT_SECRET"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Paystack")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('checkbox', {
    attrs: {
      "name": "PAYSTACK_IS_ACTIVE"
    },
    model: {
      value: _vm.form.PAYSTACK_IS_ACTIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYSTACK_IS_ACTIVE", $$v);
      },
      expression: "form.PAYSTACK_IS_ACTIVE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYSTACK_IS_ACTIVE"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "MERCHANT_EMAIL"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Merchant Email")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.MERCHANT_EMAIL,
      expression: "form.MERCHANT_EMAIL"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('MERCHANT_EMAIL')
    },
    attrs: {
      "id": "MERCHANT_EMAIL",
      "type": "text",
      "name": "MERCHANT_EMAIL",
      "placeholder": _vm.$t('Merchant Email')
    },
    domProps: {
      "value": _vm.form.MERCHANT_EMAIL
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "MERCHANT_EMAIL", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "MERCHANT_EMAIL"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "PAYSTACK_PUBLIC_KEY"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paystack Public Key")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.PAYSTACK_PUBLIC_KEY,
      expression: "form.PAYSTACK_PUBLIC_KEY"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('PAYSTACK_PUBLIC_KEY')
    },
    attrs: {
      "id": "PAYSTACK_PUBLIC_KEY",
      "type": "text",
      "name": "PAYSTACK_PUBLIC_KEY",
      "placeholder": _vm.$t('Paystack Public Key')
    },
    domProps: {
      "value": _vm.form.PAYSTACK_PUBLIC_KEY
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "PAYSTACK_PUBLIC_KEY", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYSTACK_PUBLIC_KEY"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "PAYSTACK_SECRET_KEY"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paystack Secret Key")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.PAYSTACK_SECRET_KEY,
      expression: "form.PAYSTACK_SECRET_KEY"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('PAYSTACK_SECRET_KEY')
    },
    attrs: {
      "id": "PAYSTACK_SECRET_KEY",
      "type": "password",
      "name": "PAYSTACK_SECRET_KEY",
      "placeholder": _vm.$t('Paystack Secret Key')
    },
    domProps: {
      "value": _vm.form.PAYSTACK_SECRET_KEY
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "PAYSTACK_SECRET_KEY", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "PAYSTACK_SECRET_KEY"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Razorpay")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('checkbox', {
    attrs: {
      "name": "RAZORPAY_IS_ACTIVE"
    },
    model: {
      value: _vm.form.RAZORPAY_IS_ACTIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAZORPAY_IS_ACTIVE", $$v);
      },
      expression: "form.RAZORPAY_IS_ACTIVE"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "RAZORPAY_IS_ACTIVE"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "RAZORPAY_KEY_ID"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Razopay Key ID")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.RAZORPAY_KEY_ID,
      expression: "form.RAZORPAY_KEY_ID"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('RAZORPAY_KEY_ID')
    },
    attrs: {
      "id": "RAZORPAY_KEY_ID",
      "type": "text",
      "name": "RAZORPAY_KEY_ID",
      "placeholder": _vm.$t('Razopay Key ID')
    },
    domProps: {
      "value": _vm.form.RAZORPAY_KEY_ID
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "RAZORPAY_KEY_ID", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "RAZORPAY_KEY_ID"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "RAZORPAY_KEY_SECRET"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Razopay Secret Key")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.RAZORPAY_KEY_SECRET,
      expression: "form.RAZORPAY_KEY_SECRET"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('RAZORPAY_KEY_SECRET')
    },
    attrs: {
      "id": "RAZORPAY_KEY_SECRET",
      "type": "password",
      "name": "RAZORPAY_KEY_SECRET",
      "placeholder": _vm.$t('Razopay Secret Key')
    },
    domProps: {
      "value": _vm.form.RAZORPAY_KEY_SECRET
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "RAZORPAY_KEY_SECRET", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "RAZORPAY_KEY_SECRET"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Live Currency Exchange")) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('checkbox', {
    attrs: {
      "name": "EXCHANGE_LIVE_CURRENCY"
    },
    model: {
      value: _vm.form.EXCHANGE_LIVE_CURRENCY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "EXCHANGE_LIVE_CURRENCY", $$v);
      },
      expression: "form.EXCHANGE_LIVE_CURRENCY"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Enable")) + "\n                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "EXCHANGE_LIVE_CURRENCY"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "EXCHANGE_RATES_API_KEY"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Exchange API Key")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.EXCHANGE_RATES_API_KEY,
      expression: "form.EXCHANGE_RATES_API_KEY"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('EXCHANGE_RATES_API_KEY')
    },
    attrs: {
      "id": "EXCHANGE_RATES_API_KEY",
      "type": "password",
      "name": "EXCHANGE_RATES_API_KEY",
      "placeholder": _vm.$t('Exchange API Key')
    },
    domProps: {
      "value": _vm.form.EXCHANGE_RATES_API_KEY
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "EXCHANGE_RATES_API_KEY", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted",
    attrs: {
      "id": "emailHelp"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Get your API key on")) + "\n                      "), _c('a', {
    attrs: {
      "href": "https://exchangerate.host/documentation",
      "target": "__blank"
    }
  }, [_vm._v("Exchangerate")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "EXCHANGE_RATES_API_KEY"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Save changes")) + "\n            ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/central/SettingsSidebar.vue + 3 modules
var SettingsSidebar = __webpack_require__(82213);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const advancedvue_type_script_lang_js = ({
  layout: "central",
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Payment Methods")
    };
  },
  components: {
    SettingsSidebar: SettingsSidebar/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Payment Settings",
      breadcrumbs: [{
        name: "Setup",
        url: "setup.index"
      }, {
        name: "Payment Settings",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        MANUAL_PAYMENT_IS_ACTIVE: false,
        MANUAL_PAYMENT_NOTE: false,
        STRIPE_IS_ACTIVE: false,
        STRIPE_KEY: "",
        STRIPE_SECRET: "",
        STRIPE_WEBHOOK_SECRET: "",
        PAYPAL_IS_ACTIVE: false,
        PAYPAL_MODE: "sandbox",
        PAYPAL_CLIENT_ID: "",
        PAYPAL_CLIENT_SECRET: "",
        PAYSTACK_IS_ACTIVE: false,
        PAYSTACK_PUBLIC_KEY: "",
        PAYSTACK_SECRET_KEY: "",
        MERCHANT_EMAIL: "",
        RAZORPAY_IS_ACTIVE: false,
        RAZORPAY_KEY_ID: "",
        RAZORPAY_KEY_SECRET: "",
        EXCHANGE_RATES_API_KEY: "",
        EXCHANGE_LIVE_CURRENCY: false
      }),
      logo: "",
      blackLogo: "",
      smallLogo: "",
      favicon: "",
      isDemoMode: window.config.isDemoMode
    };
  },
  computed: (0,vuex_esm/* mapGetters */.L8)({
    appInfo: "operations/appInfo",
    items: "operations/items"
  }),
  created: function created() {
    this.getSettings();
  },
  methods: {
    // get settings
    getSettings: function getSettings() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + "/api/payment-methods");
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data.data;
              _this.form.MANUAL_PAYMENT_IS_ACTIVE = data.MANUAL_PAYMENT_IS_ACTIVE.value == 1;
              _this.form.MANUAL_PAYMENT_NOTE = data.MANUAL_PAYMENT_NOTE.value;
              _this.form.STRIPE_IS_ACTIVE = data.STRIPE_IS_ACTIVE.value == 1;
              _this.form.STRIPE_KEY = data.STRIPE_KEY.value;
              _this.form.STRIPE_SECRET = data.STRIPE_SECRET.value;
              _this.form.STRIPE_WEBHOOK_SECRET = data.STRIPE_WEBHOOK_SECRET.value;
              _this.form.PAYPAL_IS_ACTIVE = data.PAYPAL_IS_ACTIVE.value == 1;
              _this.form.PAYPAL_MODE = data.PAYPAL_MODE.value;
              _this.form.PAYPAL_CLIENT_ID = data.PAYPAL_CLIENT_ID.value;
              _this.form.PAYPAL_CLIENT_SECRET = data.PAYPAL_CLIENT_SECRET.value;
              _this.form.PAYSTACK_IS_ACTIVE = data.PAYSTACK_IS_ACTIVE.value == 1;
              _this.form.PAYSTACK_PUBLIC_KEY = data.PAYSTACK_PUBLIC_KEY.value;
              _this.form.PAYSTACK_SECRET_KEY = data.PAYSTACK_SECRET_KEY.value;
              _this.form.MERCHANT_EMAIL = data.MERCHANT_EMAIL.value;
              _this.form.RAZORPAY_IS_ACTIVE = data.RAZORPAY_IS_ACTIVE.value == 1;
              _this.form.RAZORPAY_KEY_ID = data.RAZORPAY_KEY_ID.value;
              _this.form.RAZORPAY_KEY_SECRET = data.RAZORPAY_KEY_SECRET.value;
              _this.form.EXCHANGE_LIVE_CURRENCY = data.EXCHANGE_LIVE_CURRENCY.value == 1;
              _this.form.EXCHANGE_RATES_API_KEY = data.EXCHANGE_RATES_API_KEY.value;
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // update settings
    updateSettings: function updateSettings() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", toast.fire({
                type: "warning",
                title: _this2.$t("You are not allowed to do this in demo version.")
              }));
            case 2:
              _context2.next = 4;
              return _this2.form.post(window.location.origin + "/api/payment-methods").then(function () {
                toast.fire({
                  type: "success",
                  title: _this2.$t("Created successfully!")
                });
                _this2.getSettings();
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this2.$t("Please check your input and try again.")
                });
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/central/setup/advanced.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_advancedvue_type_script_lang_js = (advancedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=4960901e&prod&lang=scss&scoped=true
var advancedvue_type_style_index_0_id_4960901e_prod_lang_scss_scoped_true = __webpack_require__(89900);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=4960901e&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(advancedvue_type_style_index_0_id_4960901e_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const setup_advancedvue_type_style_index_0_id_4960901e_prod_lang_scss_scoped_true = (advancedvue_type_style_index_0_id_4960901e_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=4960901e&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/central/setup/advanced.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_advancedvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4960901e",
  null
  
)

/* harmony default export */ const advanced = (component.exports);

/***/ })

}]);