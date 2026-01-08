"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5159],{

/***/ 11496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 25159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ find_domain)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/find-domain.vue?vue&type=template&id=02d0f634&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('auth-wrapper', {
    attrs: {
      "title": _vm.$t('find_domain')
    },
    scopedSlots: _vm._u([{
      key: "form",
      fn: function fn() {
        return [_c('form', {
          on: {
            "submit": function submit($event) {
              $event.preventDefault();
              return _vm.handleSubmit.apply(null, arguments);
            },
            "keydown": _vm.handleKeydown
          }
        }, [_c('div', {
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
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
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
        }), _vm._v(" "), _c('span', {
          staticClass: "domain-host-span"
        }, [_vm._v(_vm._s(_vm.host))])]), _vm._v(" "), _c('has-error', {
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
            value: _vm.form.email,
            expression: "form.email"
          }],
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
          "class": {
            'is-invalid': _vm.form.errors.has('email')
          },
          attrs: {
            "id": "email",
            "name": "email",
            "type": "email",
            "placeholder": _vm.$t('email_placeholder')
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
          staticClass: "password-input-wrapper"
        }, [(_vm.showPassword ? 'text' : 'password') === 'checkbox' ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.password,
            expression: "form.password"
          }],
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
          "class": {
            'is-invalid': _vm.form.errors.has('password')
          },
          attrs: {
            "id": "password",
            "name": "password",
            "placeholder": _vm.$t('password_placeholder'),
            "type": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(_vm.form.password) ? _vm._i(_vm.form.password, null) > -1 : _vm.form.password
          },
          on: {
            "change": function change($event) {
              var $$a = _vm.form.password,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.form, "password", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.form, "password", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.form, "password", $$c);
              }
            }
          }
        }) : (_vm.showPassword ? 'text' : 'password') === 'radio' ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.password,
            expression: "form.password"
          }],
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
          "class": {
            'is-invalid': _vm.form.errors.has('password')
          },
          attrs: {
            "id": "password",
            "name": "password",
            "placeholder": _vm.$t('password_placeholder'),
            "type": "radio"
          },
          domProps: {
            "checked": _vm._q(_vm.form.password, null)
          },
          on: {
            "change": function change($event) {
              return _vm.$set(_vm.form, "password", null);
            }
          }
        }) : _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.password,
            expression: "form.password"
          }],
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
          "class": {
            'is-invalid': _vm.form.errors.has('password')
          },
          attrs: {
            "id": "password",
            "name": "password",
            "placeholder": _vm.$t('password_placeholder'),
            "type": _vm.showPassword ? 'text' : 'password'
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
        }), _vm._v(" "), _c('button', {
          staticClass: "password-toggle-btn",
          attrs: {
            "type": "button"
          },
          on: {
            "click": _vm.togglePasswordVisibility
          }
        }, [_c('i', {
          "class": _vm.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
        })])]), _vm._v(" "), _c('has-error', {
          staticClass: "ml-4",
          attrs: {
            "form": _vm.form,
            "field": "password"
          }
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "register-submit-btn-wrapper"
        }, [_c('v-button', {
          staticClass: "btn btn-block mb-2 register-submit-btn",
          attrs: {
            "loading": _vm.form.busy
          },
          on: {
            "click": _vm.handleSubmit
          }
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t('login')))]), _vm._v(" "), _c('i', {
          staticClass: "fas fa-sign-in-alt",
          staticStyle: {
            "transform": "scaleX(-1)"
          }
        })])], 1), _vm._v(" "), _c('div', {
          staticClass: "row justify-content-center mt-3"
        }, [_c('div', {
          staticClass: "mx-2 already-registered-text"
        }, [_c('span', {
          staticClass: "already-registered-question"
        }, [_vm._v(_vm._s(_vm.$t('dont_have_account')))]), _vm._v(" "), _c('router-link', {
          staticClass: "login-link-text",
          attrs: {
            "to": {
              name: 'register'
            }
          }
        }, [_vm._v("\n              " + _vm._s(_vm.$t('register')) + "\n            ")])], 1)])])];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/auth/AuthWrapper.vue + 5 modules
var AuthWrapper = __webpack_require__(86284);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/find-domain.vue?vue&type=script&lang=js
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



/* harmony default export */ const find_domainvue_type_script_lang_js = ({
  layout: 'basic',
  middleware: 'guest',
  components: {
    AuthWrapper: AuthWrapper/* default */.A
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('find_domain')
    };
  },
  data: function data() {
    return {
      form: new vform_es/* default */.Ay({
        domain: '',
        email: '',
        password: ''
      }),
      showPassword: false,
      appName: window.config.appName,
      host: location.host
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  created: function created() {
    console.log('Component created, form object:', this.form);

    // Auto-populate email and domain from query parameters
    if (this.$route.query.email) {
      this.form.email = this.$route.query.email;
    }
    if (this.$route.query.domain) {
      this.form.domain = this.$route.query.domain;
    }
  },
  methods: {
    handleSubmit: function handleSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log('Button clicked, calling findDomain');
      this.findDomain();
    },
    handleKeydown: function handleKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.findDomain();
      }
    },
    findDomain: function findDomain() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var domainResponse, loginUrl, firstError, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.form.busy) {
                _context.n = 1;
                break;
              }
              console.log('Already processing, ignoring duplicate submission');
              return _context.a(2);
            case 1:
              console.log('findDomain method called');
              console.log('Form data:', _this.form.data());

              // Validate form before submission
              if (!(!_this.form.domain || !_this.form.email || !_this.form.password)) {
                _context.n = 2;
                break;
              }
              _this.$toast.error(_this.$t('Please fill in all fields'));
              return _context.a(2);
            case 2:
              _context.p = 2;
              // Find the domain and get tenant info
              console.log('Calling /api/find-domain...');

              // Use axios directly instead of form.post to avoid form validation issues
              _context.n = 3;
              return _this.$axios.post('/api/find-domain', {
                domain: _this.form.domain,
                email: _this.form.email,
                password: _this.form.password
              });
            case 3:
              domainResponse = _context.v;
              console.log('Domain response:', domainResponse);
              if (domainResponse && domainResponse.data.success) {
                // Redirect directly to the tenant domain using the special login URL
                // This will complete the login process on the tenant domain
                loginUrl = domainResponse.data.data.login_url; // Validate URL before redirecting
                try {
                  // Use URL constructor to validate the URL
                  new URL(loginUrl);
                  // Use replace instead of href to avoid back button issues
                  window.location.replace(loginUrl);
                } catch (urlError) {
                  console.error('Invalid login URL:', urlError, loginUrl);
                  _this.$toast.error(_this.$t('Invalid login URL generated. Please try again.'));
                }
              } else {
                // Handle case where response is successful but no login URL provided
                _this.$toast.error(_this.$t('Domain found but login failed. Please check your credentials'));
              }
              _context.n = 8;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Error in findDomain:', _t);

              // Handle validation errors
              if (!(_t.response && _t.response.status === 422)) {
                _context.n = 5;
                break;
              }
              // Validation errors are handled by the form component
              console.log('Validation errors:', _t.response.data);
              if (_t.response.data && _t.response.data.errors) {
                // Show first error
                firstError = Object.values(_t.response.data.errors)[0];
                if (firstError && firstError.length > 0) {
                  _this.$toast.error(firstError[0]);
                }
              }
              return _context.a(2);
            case 5:
              if (!(_t.response && _t.response.status === 404)) {
                _context.n = 6;
                break;
              }
              _this.$toast.error(_this.$t('Domain not found. Please check your domain name and try again'));
              return _context.a(2);
            case 6:
              if (!(_t.response && _t.response.status === 401)) {
                _context.n = 7;
                break;
              }
              _this.$toast.error(_this.$t('Invalid email or password. Please check your credentials'));
              return _context.a(2);
            case 7:
              // Show error message for other errors
              if (_t.response && _t.response.data && _t.response.data.message) {
                _this.$toast.error(_t.response.data.message);
              } else {
                _this.$toast.error(_this.$t('Login failed. Please check your credentials and domain'));
              }
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }))();
    },
    togglePasswordVisibility: function togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
});
;// ./resources/js/pages/auth/find-domain.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_find_domainvue_type_script_lang_js = (find_domainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/find-domain.vue?vue&type=style&index=0&id=02d0f634&prod&scoped=true&lang=css
var find_domainvue_type_style_index_0_id_02d0f634_prod_scoped_true_lang_css = __webpack_require__(11496);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/find-domain.vue?vue&type=style&index=0&id=02d0f634&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(find_domainvue_type_style_index_0_id_02d0f634_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const auth_find_domainvue_type_style_index_0_id_02d0f634_prod_scoped_true_lang_css = (find_domainvue_type_style_index_0_id_02d0f634_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/auth/find-domain.vue?vue&type=style&index=0&id=02d0f634&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/find-domain.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  auth_find_domainvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "02d0f634",
  null
  
)

/* harmony default export */ const find_domain = (component.exports);

/***/ }),

/***/ 41127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-06c68084]{font-family:Almarai,sans-serif}.fa[data-v-06c68084],.fa-brands[data-v-06c68084],.fa-regular[data-v-06c68084],.fa-solid[data-v-06c68084],.fab[data-v-06c68084],.far[data-v-06c68084],.fas[data-v-06c68084],[class*=\" fa-\"][data-v-06c68084],[class^=fa-][data-v-06c68084]{font-family:Font Awesome\\ 7 Free,Font Awesome\\ 6 Free,Font Awesome\\ 5 Free,FontAwesome,sans-serif!important}.signup-message-wrapper[data-v-06c68084]{width:100%}.input-radius-10[data-v-06c68084]{border-radius:10px!important}.input-radius-10[data-v-06c68084]:focus{border:1px solid #0775af!important;outline:none}.register-submit-btn-wrapper[data-v-06c68084]{margin:1rem 0 .5rem;padding:1px}.register-submit-btn[data-v-06c68084]{background:#0775af!important;border:1px solid #0775af!important;border-radius:9px;color:#fff;font-weight:500;margin:0;padding:12px;transition:all .3s ease;width:100%}.register-submit-btn[data-v-06c68084]:hover{background:#06608a!important;color:#fff}.register-submit-btn[data-v-06c68084]:focus{box-shadow:0 0 0 3px rgba(7,117,175,.25);outline:none}.already-registered-text[data-v-06c68084]{align-items:center;color:#000;display:flex;gap:.25rem}.already-registered-question[data-v-06c68084]{color:#000}.login-link-text[data-v-06c68084]{color:#0775af!important;text-decoration:none;transition:color .2s ease}.login-link-text[data-v-06c68084]:hover{color:#06608a!important;text-decoration:underline}.resend-link-text[data-v-06c68084]{color:#0775af!important;text-decoration:none;transition:color .2s ease}.resend-link-text[data-v-06c68084]:hover{color:#06608a!important;text-decoration:underline}.password-input-wrapper[data-v-06c68084]{position:relative}.password-toggle-btn[data-v-06c68084]{align-items:center;background:none;border:none;color:#6c757d;cursor:pointer;display:flex;justify-content:center;padding:5px;position:absolute;right:15px;top:50%;transform:translateY(-50%);transition:color .2s ease}.password-toggle-btn[data-v-06c68084]:hover{color:#0775af}.password-toggle-btn[data-v-06c68084]:focus{outline:none}.password-toggle-btn i[data-v-06c68084]{font-size:16px}[dir=rtl] .password-toggle-btn[data-v-06c68084]{left:15px;right:auto}.domain-host-span[data-v-06c68084]{align-items:center;background:#f7f7fc;border-radius:10px;display:inline-flex;height:80%;line-height:2;margin-left:8px!important;margin-right:8px!important;margin-top:3px!important;padding:0 12px}.register-page-layout[data-v-06c68084]{align-items:flex-start;display:flex;flex-direction:row}.platform-features-column[data-v-06c68084],.register-form-column[data-v-06c68084]{flex:0 0 50%;max-width:50%;width:50%}.register-form[data-v-06c68084]{border:1px solid #cbd0dd;border-radius:10px;padding:1.5rem}.register-form-title[data-v-06c68084]{color:#000;font-size:24px;font-weight:700;margin-bottom:1.5rem;text-align:right}[dir=rtl] .register-form-title[data-v-06c68084]{text-align:right}[dir=ltr] .register-form-title[data-v-06c68084]{text-align:left}.platform-features-content[data-v-06c68084]{border:1px solid #cbd0dd;border-radius:10px;height:100%;padding:2rem}.platform-logo-link[data-v-06c68084]{display:flex;justify-content:center;margin-bottom:1.5rem}.platform-logo-link img[data-v-06c68084]{display:block}.logo-width[data-v-06c68084]{max-width:300px}.platform-title[data-v-06c68084]{color:#000;font-size:22px;font-weight:700;margin-bottom:1.5rem}.platform-description[data-v-06c68084]{color:#586687;font-size:16px;line-height:35px;margin-bottom:1.5rem}.platform-includes-title[data-v-06c68084]{color:#000;font-size:20px;font-weight:700;margin-bottom:1rem}.platform-features-grid[data-v-06c68084]{display:flex;flex-wrap:wrap;gap:10px}.feature-card[data-v-06c68084]{background:#0775af1a;border-radius:10px;color:#000;display:inline-block;font-size:16px;font-weight:500;margin:.25rem 0;padding:16px;width:-moz-fit-content;width:fit-content}[dir=rtl] .platform-description[data-v-06c68084],[dir=rtl] .platform-includes-title[data-v-06c68084],[dir=rtl] .platform-title[data-v-06c68084]{text-align:right}[dir=ltr] .platform-description[data-v-06c68084],[dir=ltr] .platform-includes-title[data-v-06c68084],[dir=ltr] .platform-title[data-v-06c68084]{text-align:left}@media (max-width:1024px){.register-page-layout[data-v-06c68084]{flex-direction:column;gap:2rem}.platform-features-column[data-v-06c68084],.register-form-column[data-v-06c68084]{flex:0 0 100%;max-width:100%;width:100%}.register-form[data-v-06c68084]{padding:1.25rem}.platform-features-content[data-v-06c68084]{height:auto;padding:1.5rem}.register-form-title[data-v-06c68084]{font-size:22px;margin-bottom:1.25rem}.platform-title[data-v-06c68084]{font-size:20px;margin-bottom:1rem}.platform-description[data-v-06c68084]{font-size:15px;line-height:1.8;margin-bottom:1rem}.platform-includes-title[data-v-06c68084]{font-size:18px;margin-bottom:.75rem}.feature-card[data-v-06c68084]{font-size:14px;padding:14px}}@media (max-width:768px){.auth-wrapper[data-v-06c68084]{padding:1.5rem 0!important}.container[data-v-06c68084]{padding-left:1rem;padding-right:1rem}.form-group[data-v-06c68084],.form-group.mb-3[data-v-06c68084]{margin-bottom:1rem!important}.signup-message-wrapper[data-v-06c68084]{margin-bottom:1.5rem}.register-page-layout[data-v-06c68084]{gap:1.5rem}.platform-features-column[data-v-06c68084],.register-form-column[data-v-06c68084]{margin-bottom:1.5rem}.register-form[data-v-06c68084]{border-radius:8px;padding:1rem}.register-form-title[data-v-06c68084]{font-size:20px;line-height:1.3;margin-bottom:1rem}.register-submit-btn-wrapper[data-v-06c68084]{margin:.75rem 0 .5rem}.register-submit-btn[data-v-06c68084]{font-size:15px;min-height:48px;padding:14px 16px}.input-radius-10[data-v-06c68084]{font-size:16px;padding:12px 16px!important}.already-registered-text[data-v-06c68084]{flex-wrap:wrap;font-size:14px;gap:.5rem;justify-content:center}.already-registered-question[data-v-06c68084],.login-link-text[data-v-06c68084],.resend-link-text[data-v-06c68084]{font-size:14px}.platform-features-content[data-v-06c68084]{border-radius:8px;padding:1.25rem}.platform-logo-link[data-v-06c68084]{margin-bottom:1rem}.logo-width[data-v-06c68084]{max-width:200px}.platform-title[data-v-06c68084]{font-size:18px;line-height:1.3;margin-bottom:.75rem}.platform-description[data-v-06c68084]{font-size:14px;line-height:1.6;margin-bottom:.75rem}.platform-includes-title[data-v-06c68084]{font-size:16px;line-height:1.3;margin-bottom:.5rem}.platform-features-grid[data-v-06c68084]{gap:8px}.feature-card[data-v-06c68084]{border-radius:8px;display:block;font-size:13px;margin:0;padding:12px;width:100%}.domain-host-span[data-v-06c68084]{font-size:12px;margin-left:4px!important;margin-right:4px!important;max-width:120px;overflow:hidden;padding:0 10px;text-overflow:ellipsis;white-space:nowrap}.d-flex.url[data-v-06c68084]{flex-wrap:wrap;gap:8px}.d-flex.url input[data-v-06c68084]{flex:1;min-width:0}.password-toggle-btn[data-v-06c68084]{padding:8px;right:12px}[dir=rtl] .password-toggle-btn[data-v-06c68084]{left:12px}.alert[data-v-06c68084]{font-size:14px;margin-bottom:1rem;padding:.75rem 1rem}}@media (max-width:480px){.auth-wrapper[data-v-06c68084]{padding:1rem 0!important}.container[data-v-06c68084]{padding-left:.75rem;padding-right:.75rem}.form-group[data-v-06c68084],.form-group.mb-3[data-v-06c68084]{margin-bottom:.875rem!important}.register-form[data-v-06c68084]{padding:.875rem}.domain-host-span[data-v-06c68084]{font-size:11px;max-width:100px;padding:0 8px}.d-flex.url[data-v-06c68084]{gap:6px}.register-form-title[data-v-06c68084]{font-size:18px;margin-bottom:.875rem}.register-submit-btn[data-v-06c68084]{font-size:14px;padding:12px}.input-radius-10[data-v-06c68084]{font-size:16px;padding:10px 14px!important}.platform-features-content[data-v-06c68084]{padding:1rem}.logo-width[data-v-06c68084]{max-width:150px}.platform-title[data-v-06c68084]{font-size:16px}.platform-description[data-v-06c68084]{font-size:13px}.platform-includes-title[data-v-06c68084]{font-size:15px}.feature-card[data-v-06c68084]{font-size:12px;padding:10px}.alert[data-v-06c68084]{font-size:13px;margin-bottom:.875rem;padding:.625rem .875rem}}@media (min-width:1200px){.register-form[data-v-06c68084]{padding:2rem}.platform-features-content[data-v-06c68084]{padding:2.5rem}.register-form-title[data-v-06c68084]{font-size:26px}.platform-title[data-v-06c68084]{font-size:24px}.platform-description[data-v-06c68084]{font-size:17px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AuthWrapper)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/AuthWrapper.vue?vue&type=template&id=06c68084&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row no-gutter"
  }, [_c('div', {
    staticClass: "col-12",
    staticStyle: {
      "background": "#ffffff"
    }
  }, [_c('div', {
    staticClass: "auth-wrapper d-flex align-items-center py-5",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_vm.$slots.topMessage ? _c('div', {
    staticClass: "signup-message-wrapper"
  }, [_vm._t("topMessage")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row register-page-layout"
  }, [_c('div', {
    staticClass: "col-md-6 register-form-column"
  }, [_c('div', {
    staticClass: "register-form"
  }, [_vm.title ? _c('h2', {
    staticClass: "register-form-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("form")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 platform-features-column"
  }, [_c('div', {
    staticClass: "platform-features-content"
  }, [_c('router-link', {
    staticClass: "platform-logo-link",
    attrs: {
      "to": "/"
    }
  }, [_vm.appInfo ? _c('img', {
    staticClass: "lg-logo img-fluid logo-width",
    attrs: {
      "src": _vm.appInfo.blackLogo,
      "alt": _vm.appInfo.companyName
    }
  }) : _vm._e()]), _vm._v(" "), _c('h2', {
    staticClass: "platform-title"
  }, [_vm._v(_vm._s(_vm.$t('platform_title')))]), _vm._v(" "), _c('p', {
    staticClass: "platform-description"
  }, [_vm._v(_vm._s(_vm.$t('platform_description')))]), _vm._v(" "), _c('h3', {
    staticClass: "platform-includes-title"
  }, [_vm._v(_vm._s(_vm.$t('platform_includes')))]), _vm._v(" "), _c('div', {
    staticClass: "platform-features-grid"
  }, [_c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('electronic_invoicing')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('sales_pos_management')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('inventory_management')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('accounting_general_ledger')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('branch_management')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('customer_relationship')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('hr_employee_affairs')))]), _vm._v(" "), _c('div', {
    staticClass: "feature-card"
  }, [_vm._v(_vm._s(_vm.$t('integrated_workflow')))])])], 1)])])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/AuthWrapper.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const AuthWrappervue_type_script_lang_js = ({
  name: 'AuthWrapper',
  props: {
    title: {
      type: String,
      "default": null
    }
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo']))
});
;// ./resources/js/components/auth/AuthWrapper.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_AuthWrappervue_type_script_lang_js = (AuthWrappervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/AuthWrapper.vue?vue&type=style&index=0&id=06c68084&prod&scoped=true&lang=css
var AuthWrappervue_type_style_index_0_id_06c68084_prod_scoped_true_lang_css = __webpack_require__(41127);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/AuthWrapper.vue?vue&type=style&index=0&id=06c68084&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(AuthWrappervue_type_style_index_0_id_06c68084_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const auth_AuthWrappervue_type_style_index_0_id_06c68084_prod_scoped_true_lang_css = (AuthWrappervue_type_style_index_0_id_06c68084_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/auth/AuthWrapper.vue?vue&type=style&index=0&id=06c68084&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/auth/AuthWrapper.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  auth_AuthWrappervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "06c68084",
  null
  
)

/* harmony default export */ const AuthWrapper = (component.exports);

/***/ })

}]);