"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4222],{

/***/ 49741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SettingsSidebar)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=template&id=96b9adb8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card settings-card no-print"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v(_vm._s(_vm.$t("Settings")))]), _vm._v(" "), _c('div', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
;// ./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ const central_SettingsSidebarvue_type_script_lang_js = (SettingsSidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/central/SettingsSidebar.vue





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

/***/ 84222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ advanced)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=template&id=14f9daa4&scoped=true
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
    staticClass: "btn btn-dark float-right",
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
    staticClass: "btn btn-primary",
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
var SettingsSidebar = __webpack_require__(49741);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/payment-methods");
            case 1:
              _yield$axios$get = _context.v;
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
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // update settings
    updateSettings: function updateSettings() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, toast.fire({
                type: "warning",
                title: _this2.$t("You are not allowed to do this in demo version.")
              }));
            case 1:
              _context2.n = 2;
              return _this2.form.post(window.location.origin + "/api/payment-methods").then(function () {
                toast.fire({
                  type: "success",
                  title: _this2.$t("Created successfully!")
                });
                _this2.getSettings();
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this2.$t("Opps...something went wrong")
                });
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/central/setup/advanced.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_advancedvue_type_script_lang_js = (advancedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=14f9daa4&prod&lang=scss&scoped=true
var advancedvue_type_style_index_0_id_14f9daa4_prod_lang_scss_scoped_true = __webpack_require__(97388);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=14f9daa4&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(advancedvue_type_style_index_0_id_14f9daa4_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const setup_advancedvue_type_style_index_0_id_14f9daa4_prod_lang_scss_scoped_true = (advancedvue_type_style_index_0_id_14f9daa4_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/central/setup/advanced.vue?vue&type=style&index=0&id=14f9daa4&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/setup/advanced.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_advancedvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "14f9daa4",
  null
  
)

/* harmony default export */ const advanced = (component.exports);

/***/ }),

/***/ 97388:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inner-card[data-v-14f9daa4]{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)}.inner-card .card-header[data-v-14f9daa4]{background-color:rgba(0,0,0,.03)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);