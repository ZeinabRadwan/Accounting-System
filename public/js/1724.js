"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1724],{

/***/ 51724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=template&id=3d9d221d
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row no-gutter"
  }, [_c('div', {
    staticClass: "col-md-6 d-none d-md-flex bg-image"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 bg-light"
  }, [_c('div', {
    staticClass: "auth-wrapper d-flex align-items-center py-5"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-lg-10 col-xl-8 mx-auto"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm.appInfo ? _c('img', {
    staticClass: "lg-logo img-fluid logo-width",
    attrs: {
      "src": _vm.appInfo.blackLogo,
      "alt": _vm.appInfo.companyName
    }
  }) : _vm._e()]), _vm._v(" "), !_vm.verificationForm.email && _vm.appInfo ? _c('div', [_c('p', {
    staticClass: "text-22 mb-4 mt-2"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('Sign Up Instantly Free for') + ' ' + _vm.appInfo.trial_day_count + ' ' + _vm.$t('days, no credit card required') + '.') + "\n                                    ")])]) : _vm._e(), _vm._v(" "), _vm.isDemoMode ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n                                    To prevent the creation of multiple\n                                    sub-domains, we have disabled the\n                                    registration feature for the demo. You\n                                    can access the Tenant panel\n                                    "), _c('a', {
    attrs: {
      "href": "https://john.arqam.sa/login"
    }
  }, [_vm._v("here")])]) : _vm._e()], 1), _vm._v(" "), !_vm.verificationForm.email ? _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.tenantRegister.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_vm.message && _vm.type === 'danger' ? _c('div', {
    staticClass: "alert alert-danger mb-4"
  }, [_vm._v("\n                                    " + _vm._s(_vm.message) + "\n                                ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('email')
    },
    attrs: {
      "id": "email",
      "name": "email",
      "type": "email",
      "placeholder": _vm.$t('Email')
    },
    domProps: {
      "value": _vm.form.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "email"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('div', {
    staticClass: "d-flex align-items-center mb-2"
  }, [_c('label', {
    staticClass: "form-label mb-0",
    attrs: {
      "for": "domain"
    }
  }, [_vm._v(_vm._s(_vm.$t('domain')))]), _vm._v(" "), _c('i', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('domain_explanation'),
      expression: "$t('domain_explanation')"
    }],
    staticClass: "fas fa-info-circle ms-2",
    staticStyle: {
      "cursor": "help",
      "font-size": "14px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "d-flex url"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.domain,
      expression: "form.domain"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('domain') || _vm.domainValidation.error,
      'is-valid': _vm.domainValidation.valid && _vm.domainValidation.available && !_vm.domainValidation.checking
    },
    attrs: {
      "id": "domain",
      "name": "domain",
      "type": "text",
      "placeholder": _vm.$t('domain')
    },
    domProps: {
      "value": _vm.form.domain
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "domain", $event.target.value);
      }, _vm.checkDomainAvailability]
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "height": "100%",
      "line-height": "2"
    }
  }, [_vm._v(_vm._s(_vm.host))])]), _vm._v(" "), _vm.domainValidation.checking ? _c('div', {
    staticClass: "ml-4 text-muted small"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin me-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('domain_checking')) + "\n                                    ")]) : _vm.domainValidation.valid && _vm.domainValidation.available ? _c('div', {
    staticClass: "ml-4 text-success small"
  }, [_c('i', {
    staticClass: "fas fa-check-circle me-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('domain_available')) + "\n                                    ")]) : _vm.domainValidation.error ? _c('div', {
    staticClass: "ml-4 text-danger small"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-circle me-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.domainValidation.message) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "domain"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.company,
      expression: "form.company"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('company')
    },
    attrs: {
      "id": "company",
      "name": "company",
      "type": "text",
      "placeholder": _vm.$t('Company Name')
    },
    domProps: {
      "value": _vm.form.company
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "company", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "company"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('password')
    },
    attrs: {
      "id": "password",
      "name": "password",
      "type": "password",
      "placeholder": _vm.$t('password')
    },
    domProps: {
      "value": _vm.form.password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password_confirmation,
      expression: "form.password_confirmation"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('password_confirmation')
    },
    attrs: {
      "id": "password_confirmation",
      "name": "password_confirmation",
      "type": "password",
      "placeholder": _vm.$t('confirm_password')
    },
    domProps: {
      "value": _vm.form.password_confirmation
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password_confirmation", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    staticClass: "ml-4",
    attrs: {
      "form": _vm.form,
      "field": "password_confirmation"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row mb-5 ml-2"
  }, [_c('checkbox', {
    "class": {
      'is-invalid': _vm.form.errors.has('terms_and_conditions')
    },
    attrs: {
      "id": "terms_and_conditions",
      "name": "terms_and_conditions",
      "required": ""
    },
    model: {
      value: _vm.form.terms_and_conditions,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "terms_and_conditions", $$v);
      },
      expression: "form.terms_and_conditions"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('register_policy')) + "\n                                    ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "terms_and_conditions"
    }
  })], 1), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('register')))])]), _vm._v(" "), _c('div', {
    staticClass: "row justify-content-between"
  }, [_c('router-link', {
    staticClass: "mx-2",
    attrs: {
      "to": {
        name: 'find-domain'
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('already_registered')) + "\n                                    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "mx-2",
    attrs: {
      "to": {
        name: 'resend'
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('resend_verification_link')) + "\n                                    ")])], 1)], 1) : _c('div', {
    staticClass: "mt-5"
  }, [_vm.message ? _c('div', {
    staticClass: "alert",
    "class": _vm.type == 'success' ? 'alert-success' : 'alert-danger'
  }, [_vm._v("\n                                    " + _vm._s(_vm.message) + "\n                                    "), _vm.type != 'success' ? _c('span', [_vm._v("\n                                        " + _vm._s(_vm.$t('please')) + "\n                                        "), _c('router-link', {
    attrs: {
      "to": {
        name: 'find-domain'
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('login')))])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.$t('register_next_step')))]), _vm._v(" "), _c('p', {
    staticClass: "text-22 mb-4 mt-2"
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('email_sent')) + "\n                                    "), _c('span', {
    staticClass: "text-indigo"
  }, [_vm._v("\n                                        " + _vm._s(_vm.verificationForm.email) + " ")]), _vm._v(".\n                                    " + _vm._s(_vm.$t('confirm_account')) + "\n                                ")]), _vm._v(" "), _c('p', [_vm._v("\n                                    " + _vm._s(_vm.$t('check_email')) + "\n                                    "), _c('button', {
    staticClass: "btn p-0 text-indigo",
    on: {
      "click": _vm.resendVerification
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('resend_verification_link')) + "\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('router-link', {
    staticClass: "btn btn-outline-primary btn-sm",
    attrs: {
      "to": {
        name: 'find-domain',
        query: {
          email: _vm.verificationForm.email,
          domain: _vm.form.domain
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt mr-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('go_to_login')) + "\n                                    ")])], 1)])])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const registervue_type_script_lang_js = ({
  layout: 'basic',
  middleware: 'guest',
  metaInfo: function metaInfo() {
    return {
      title: this.$t('register')
    };
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      form: new vform_es/* default */.Ay({
        name: '',
        email: '',
        domain: '',
        password: '',
        password_confirmation: '',
        terms_and_conditions: false
      }),
      appName: window.config.appName,
      host: location.host,
      verificationForm: new vform_es/* default */.Ay({
        email: ''
      }),
      message: '',
      type: null,
      domainValidation: {
        checking: false,
        valid: false,
        available: false,
        error: false,
        message: ''
      },
      domainCheckTimeout: null
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  methods: {
    tenantRegister: function tenantRegister() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this$form$pos, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.isDemoMode) {
                _context.n = 1;
                break;
              }
              return _context.a(2, window.toast.fire({
                type: 'warning',
                title: _this.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context.p = 1;
              _context.n = 2;
              return _this.form.post('/api/register');
            case 2:
              _yield$_this$form$pos = _context.v;
              data = _yield$_this$form$pos.data;
              if (data) {
                // Clear any previous error messages
                _this.message = '';
                _this.type = null;
                // Clear form errors
                _this.form.errors.clear();
                _this.verificationForm.email = data.data.tenant.email;
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.handleSubmitError(_t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    // handle form submission errors
    handleSubmitError: function handleSubmitError(error) {
      var _error$response,
        _error$response2,
        _this2 = this;
      // Handle SMTP configuration error specifically
      if (error.response && error.response.status === 422) {
        var errorData = error.response.data;
        if (errorData.message && errorData.message.includes('SMTP configuration')) {
          // Show error message in the form area for SMTP issues
          this.message = this.$t('System is unable to send email. Please contact the administrator.');
          this.type = 'danger';
          return;
        }
      }

      // Handle validation errors
      if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
        var serverErrors = error.response.data.errors || {};
        var translatedErrors = {};
        Object.keys(serverErrors).forEach(function (field) {
          var fieldErrors = serverErrors[field] || [];
          translatedErrors[field] = fieldErrors.map(function (message) {
            return _this2.translateValidationMessage(message, field);
          });
        });
        this.form.errors.set(translatedErrors);

        // Show first validation error as message
        var firstError = Object.values(translatedErrors)[0];
        if (firstError && firstError.length > 0) {
          this.message = firstError[0];
          this.type = 'danger';
        } else {
          this.message = this.$t('Please check your input and try again.');
          this.type = 'danger';
        }
      } else {
        // Handle other errors normally
        if (error.response && error.response.data && error.response.data.message) {
          this.message = error.response.data.message;
          this.type = 'danger';
        } else {
          this.message = this.$t('An error occurred during registration. Please try again.');
          this.type = 'danger';
        }
      }
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for registration form fields
      var fieldLabelMap = {
        name: this.$t('Name'),
        email: this.$t('Email'),
        password: this.$t('Password'),
        password_confirmation: this.$t('Password Confirmation'),
        domain: this.$t('Domain'),
        company_name: this.$t('Company Name'),
        phone: this.$t('Phone'),
        address: this.$t('Address'),
        city: this.$t('City'),
        state: this.$t('State'),
        country: this.$t('Country'),
        zip_code: this.$t('Zip Code'),
        currency: this.$t('Currency'),
        timezone: this.$t('Timezone'),
        date_format: this.$t('Date Format'),
        time_format: this.$t('Time Format')
      };
      var fieldLabel = fieldLabelMap[field] || field;

      // Common Laravel validation patterns with localized messages
      var patterns = [
      // Required field patterns
      {
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Please\s+select\s+an?\s+.+?\.?/i,
        en: "Please select",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /Please\s+enter\s+a\s+.+?\.?/i,
        en: "Please enter",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644"
      }, {
        re: /Please\s+provide\s+a\s+.+?\.?/i,
        en: "Please provide",
        ar: "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645"
      },
      // Selection and choice patterns
      {
        re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
        en: "The selected value is invalid",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i,
        en: "The selected value does not exist",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"
      }, {
        re: /Please\s+choose\s+a\s+.+?\.?/i,
        en: "Please choose",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /You\s+must\s+select\s+a\s+.+?\.?/i,
        en: "You must select",
        ar: "\u064A\u062C\u0628 \u0627\u062E\u062A\u064A\u0627\u0631"
      },
      // Data type patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
        en: "Must be a number",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
        en: "Must be an integer",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i,
        en: "Must be a string",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0646\u0635\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i,
        en: "Must be an array",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i,
        en: "Must be true or false",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u062D\u064A\u062D \u0623\u0648 \u062E\u0637\u0623"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i,
        en: "Must be a valid email",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i,
        en: "Must be a valid URL",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0627\u0628\u0637 \u0635\u062D\u064A\u062D"
      },
      // Numeric validation patterns
      {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 ".concat(n);
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
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max);
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be exactly ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0627\u0644\u0636\u0628\u0637 ".concat(n);
        }
      },
      // String length patterns
      {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max, " characters");
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max, " \u062D\u0631\u0641\u0627\u064B");
        }
      },
      // Date validation patterns
      {
        re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i,
        en: "Is not a valid date",
        ar: "\u0644\u064A\u0633 \u062A\u0627\u0631\u064A\u062E\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be after or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be before or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i,
        en: "Must be after the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i,
        en: "Must be before the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i,
        en: "Must be a date after or equal to today",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u064A\u0648\u0645"
      },
      // Format validation patterns
      {
        re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
        en: "Invalid format",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i,
        en: "Must match the required pattern",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      },
      // Uniqueness patterns
      {
        re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
        en: "This value has already been taken",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /The\s+.+?\s+already\s+exists\.?/i,
        en: "Already exists",
        ar: "\u0645\u0648\u062C\u0648\u062F \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i,
        en: "This is already in use",
        ar: "\u0647\u0630\u0627 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644"
      },
      // File upload patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i,
        en: "Must be a file",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0644\u0641\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i,
        en: "Must be an image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i,
        en: "Must be a valid image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0635\u062D\u064A\u062D\u0629"
      }, {
        re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i,
        en: "File is too large",
        ar: "\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B"
      }, {
        re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i,
        en: function en(_, n) {
          return "File size must not exceed ".concat(n, " KB");
        },
        ar: function ar(_, n) {
          return "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A");
        }
      },
      // Confirmation patterns
      {
        re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i,
        en: "Confirmation does not match",
        ar: "\u0627\u0644\u062A\u0623\u0643\u064A\u062F \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
      }, {
        re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i,
        en: "Must match",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0637\u0627\u0628\u0642\u0627"
      },
      // Custom validation patterns for registration form
      {
        re: /This\s+domain\s+has\s+already\s+been\s+taken\.?/i,
        en: "This domain has already been taken",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u0646\u0637\u0627\u0642 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /The\s+email\s+has\s+already\s+been\s+taken\.?/i,
        en: "The email has already been taken",
        ar: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /The\s+password\s+confirmation\s+does\s+not\s+match\.?/i,
        en: "The password confirmation does not match",
        ar: "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
      }, {
        re: /Password\s+confirmation\s+does\s+not\s+match\.?/i,
        en: "Password confirmation does not match",
        ar: "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
      }, {
        re: /The\s+password\s+and\s+password\s+confirmation\s+must\s+match\.?/i,
        en: "The password and password confirmation must match",
        ar: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u062A\u0623\u0643\u064A\u062F\u0647\u0627 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0637\u0627\u0628\u0642\u0627"
      }, {
        re: /Domain\s+is\s+required\.?/i,
        en: "Domain is required",
        ar: "\u0627\u0644\u0646\u0637\u0627\u0642 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Email\s+is\s+required\.?/i,
        en: "Email is required",
        ar: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Password\s+is\s+required\.?/i,
        en: "Password is required",
        ar: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629"
      }, {
        re: /Name\s+is\s+required\.?/i,
        en: "Name is required",
        ar: "\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Company\s+name\s+is\s+required\.?/i,
        en: "Company name is required",
        ar: "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Please\s+enter\s+a\s+domain\.?/i,
        en: "Please enter a domain",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0646\u0637\u0627\u0642"
      }, {
        re: /Please\s+enter\s+an\s+email\.?/i,
        en: "Please enter an email",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
      }, {
        re: /Please\s+enter\s+a\s+password\.?/i,
        en: "Please enter a password",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631"
      }, {
        re: /Please\s+enter\s+a\s+name\.?/i,
        en: "Please enter a name",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645"
      }, {
        re: /Please\s+enter\s+a\s+company\s+name\.?/i,
        en: "Please enter a company name",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0634\u0631\u0643\u0629"
      },
      // Generic fallback patterns
      {
        re: /This\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /This\s+field\s+must\s+be\s+filled\.?/i,
        en: "This field must be filled",
        ar: "\u064A\u062C\u0628 \u0645\u0644\u0621 \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644"
      }, {
        re: /This\s+value\s+is\s+invalid\.?/i,
        en: "This value is invalid",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /Invalid\s+input\.?/i,
        en: "Invalid input",
        ar: "\u0625\u062F\u062E\u0627\u0644 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /Please\s+check\s+your\s+input\.?/i,
        en: "Please check your input",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A"
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

      // Fallback: return original message if nothing matched
      return message;
    },
    resendVerification: function resendVerification() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this3.isDemoMode) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, window.toast.fire({
                type: 'warning',
                title: _this3.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context2.n = 2;
              return _this3.verificationForm.post('/api/email/resend').then(function (_ref) {
                var data = _ref.data;
                _this3.message = data.message;
                _this3.type = 'success';
              })["catch"](function (e) {
                _this3.message = e.response.data.message;
                _this3.type = 'danger';
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Domain validation methods
    checkDomainAvailability: function checkDomainAvailability() {
      var _this4 = this;
      // Clear previous timeout
      if (this.domainCheckTimeout) {
        clearTimeout(this.domainCheckTimeout);
      }

      // Reset validation state
      this.domainValidation = {
        checking: false,
        valid: false,
        available: false,
        error: false,
        message: ''
      };

      // Don't check if domain is empty or too short
      if (!this.form.domain || this.form.domain.length < 2) {
        return;
      }

      // Set checking state
      this.domainValidation.checking = true;

      // Debounce the API call
      this.domainCheckTimeout = setTimeout(function () {
        _this4.performDomainCheck();
      }, 500);
    },
    performDomainCheck: function performDomainCheck() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _error$response3, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this5.$axios.post('/api/check-domain', {
                domain: _this5.form.domain,
                locale: _this5.$i18n.locale
              });
            case 1:
              response = _context3.v;
              if (response.data.valid && response.data.available) {
                _this5.domainValidation = {
                  checking: false,
                  valid: true,
                  available: true,
                  error: false,
                  message: _this5.$t('domain_available')
                };
              } else {
                _this5.domainValidation = {
                  checking: false,
                  valid: response.data.valid,
                  available: false,
                  error: true,
                  message: response.data.message || _this5.$t('domain_taken')
                };
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              _this5.domainValidation = {
                checking: false,
                valid: false,
                available: false,
                error: true,
                message: ((_error$response3 = _t2.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this5.$t('domain_invalid')
              };
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    }
  }
});
;// ./resources/js/pages/auth/register.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_registervue_type_script_lang_js = (registervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/register.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  auth_registervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const register = (component.exports);

/***/ })

}]);