"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9134],{

/***/ 89134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/register.vue?vue&type=template&id=9f645d6c
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
      "href": "https://john.acculance.top/login"
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
  }, [_c('div', {
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
      'is-invalid': _vm.form.errors.has('domain')
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
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "domain", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.host))])]), _vm._v(" "), _c('has-error', {
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
        name: 'find-domain'
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
      type: null
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  methods: {
    tenantRegister: function tenantRegister() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this$form$pos, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!_this.isDemoMode) {
                _context.n = 1;
                break;
              }
              return _context.a(2, toast.fire({
                type: 'warning',
                title: _this.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context.n = 2;
              return _this.form.post('/api/register');
            case 2:
              _yield$_this$form$pos = _context.v;
              data = _yield$_this$form$pos.data;
              if (data) {
                _this.verificationForm.email = data.data.tenant.email;
              }
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    resendVerification: function resendVerification() {
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
              return _this2.verificationForm.post('/api/email/resend').then(function (_ref) {
                var data = _ref.data;
                _this2.message = data.message;
                _this2.type = 'success';
              })["catch"](function (e) {
                _this2.message = e.response.data.message;
                _this2.type = 'danger';
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
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