"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6347],{

/***/ 49741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ },

/***/ 26347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mail_configuration)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/mail-configuration.vue?vue&type=template&id=99b3c4e2
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
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Mail Configuration')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_mailer"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL MAILER')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_mailer,
      expression: "form.mail_mailer"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_mailer')
    },
    attrs: {
      "id": "mail_mailer",
      "type": "text",
      "name": "mail_mailer",
      "placeholder": _vm.$t('MAIL MAILER'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_mailer
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_mailer", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_mailer"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_host"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL HOST')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_host,
      expression: "form.mail_host"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_host')
    },
    attrs: {
      "id": "mail_host",
      "type": "text",
      "name": "mail_host",
      "placeholder": _vm.$t('MAIL HOST'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_host
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_host", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_host"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_port"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL PORT')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_port,
      expression: "form.mail_port"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_port')
    },
    attrs: {
      "id": "mail_port",
      "type": "text",
      "name": "mail_port",
      "placeholder": _vm.$t('MAIL PORT'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_port
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_port", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_port"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_username"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL USERNAME')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_username,
      expression: "form.mail_username"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_username')
    },
    attrs: {
      "id": "mail_username",
      "type": "text",
      "name": "mail_username",
      "placeholder": _vm.$t('MAIL USERNAME'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_username", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_username"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_password"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL PASSWORD')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_password,
      expression: "form.mail_password"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_password')
    },
    attrs: {
      "id": "mail_password",
      "type": "text",
      "name": "mail_password",
      "placeholder": _vm.$t('MAIL PASSWORD'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_encryption"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL ENCRYPTION')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_encryption,
      expression: "form.mail_encryption"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_encryption')
    },
    attrs: {
      "id": "mail_encryption",
      "type": "text",
      "name": "mail_encryption",
      "placeholder": _vm.$t('MAIL ENCRYPTION'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_encryption
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_encryption", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_encryption"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_from_address"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL FROM ADDRESS')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_from_address,
      expression: "form.mail_from_address"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_from_address')
    },
    attrs: {
      "id": "mail_from_address",
      "type": "text",
      "name": "mail_from_address",
      "placeholder": _vm.$t('MAIL FROM ADDRESS'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_from_address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_from_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_from_address"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_from_name"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL FROM NAME')) + "\n                                ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_from_name,
      expression: "form.mail_from_name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_from_address')
    },
    attrs: {
      "id": "mail_from_name",
      "type": "text",
      "name": "mail_from_name",
      "placeholder": _vm.$t('MAIL FROM ADDRESS')
    },
    domProps: {
      "value": _vm.form.mail_from_name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_from_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_from_name"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save changes')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
    "class": {
      'btn-loading': _vm.loading
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.testConnection();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-wifi"
  }), _vm._v(" " + _vm._s(_vm.$t("Test Connection")) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/central/SettingsSidebar.vue + 3 modules
var SettingsSidebar = __webpack_require__(49741);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/mail-configuration.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const mail_configurationvue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Mail Configuration')
    };
  },
  components: {
    SettingsSidebar: SettingsSidebar/* default */.A
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: 'Mail Configuration',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Mail Configuration',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        mail_mailer: '',
        mail_host: '',
        mail_port: '',
        mail_username: '',
        mail_password: '',
        mail_encryption: '',
        mail_from_address: '',
        mail_from_name: ''
      }),
      loading: false
    };
  },
  created: function created() {
    this.getMailServerValues();
  },
  methods: {
    // get all current values
    getMailServerValues: function getMailServerValues() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/mail-configuration/');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.form.mail_mailer = data.mail_mailer.value;
              _this.form.mail_host = data.mail_host.value;
              _this.form.mail_port = data.mail_port.value;
              _this.form.mail_username = data.mail_username.value;
              _this.form.mail_password = data.mail_password.value;
              _this.form.mail_encryption = data.mail_encryption.value;
              _this.form.mail_from_address = data.mail_from_address.value;
              _this.form.mail_from_name = data.mail_from_name.value;
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
                type: 'warning',
                title: _this2.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context2.n = 2;
              return _this2.form.post(window.location.origin + '/api/update-mail-configuration').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Settings updated successfully')
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this2.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    testConnection: function testConnection() {
      var _this3 = this;
      this.loading = true;
      axios_default().get(window.location.origin + "/api/send-test-connection-email").then(function () {
        _this3.loading = false;
        toast.fire({
          type: "success",
          title: _this3.$t("Email sent. Your connection is secure")
        });
      })["catch"](function () {
        _this3.loading = false;
        toast.fire({
          type: "error",
          title: _this3.$t("Please check your input and try again.")
        });
      });
    }
  }
});
;// ./resources/js/pages/central/setup/mail-configuration.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_mail_configurationvue_type_script_lang_js = (mail_configurationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/setup/mail-configuration.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  setup_mail_configurationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const mail_configuration = (component.exports);

/***/ }

}]);