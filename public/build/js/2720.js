"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2720],{

/***/ 18097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login-steps-modal-overlay[data-v-f04176f0]{align-items:center;animation:fadeIn-f04176f0 .3s ease-in;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:10000}.login-steps-modal[data-v-f04176f0]{animation:slideUp-f04176f0 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.2);max-height:90vh;max-width:500px;overflow-y:auto;width:90%}.modal-content[data-v-f04176f0]{padding:2.5rem}.modal-logo[data-v-f04176f0]{margin-bottom:1rem;max-height:60px;width:auto}.steps-container[data-v-f04176f0]{margin:2rem 0}.step-item[data-v-f04176f0]{align-items:flex-start;display:flex;margin-bottom:1.5rem;opacity:.6;transition:opacity .3s ease}.step-item.active[data-v-f04176f0]{opacity:1}.step-item.completed[data-v-f04176f0]{opacity:.75}.pending-icon[data-v-f04176f0]{color:#dee2e6;font-size:1.2rem}.step-icon[data-v-f04176f0]{align-items:center;display:flex;font-size:1.5rem;justify-content:center;margin-right:1rem;min-width:30px}.step-content[data-v-f04176f0]{flex:1}.step-title[data-v-f04176f0]{color:#333;font-size:1rem;font-weight:600;margin-bottom:.25rem}.step-item.active .step-title[data-v-f04176f0]{color:#007bff}.step-description[data-v-f04176f0]{color:#6c757d;font-size:.875rem;margin-bottom:0}.progress-container[data-v-f04176f0]{margin-top:1.5rem}.progress[data-v-f04176f0]{border-radius:10px;overflow:hidden}@keyframes fadeIn-f04176f0{0%{opacity:0}to{opacity:1}}@keyframes slideUp-f04176f0{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media (max-width:576px){.modal-content[data-v-f04176f0]{padding:1.5rem}.step-icon[data-v-f04176f0]{font-size:1.25rem}.step-title[data-v-f04176f0]{font-size:.9rem}.step-description[data-v-f04176f0]{font-size:.8rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 42720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cross_domain_login)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=template&id=1953aa2e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.error ? _c('LoginStepsModal', {
    attrs: {
      "show": true,
      "current-step": _vm.currentStep
    }
  }) : _vm.error ? _c('div', {
    staticClass: "error-container"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/LoginStepsModal.vue + 5 modules
var LoginStepsModal = __webpack_require__(64941);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=script&lang=js
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


/* harmony default export */ const cross_domain_loginvue_type_script_lang_js = ({
  layout: 'blank',
  middleware: 'guest',
  components: {
    LoginStepsModal: LoginStepsModal/* default */.A
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Logging in')
    };
  },
  data: function data() {
    return {
      loading: true,
      error: null,
      appName: window.config.appName,
      currentStep: 3,
      // Start at step 3 since steps 1-2 were done in find-domain
      processed: false
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var processedKey;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!_this.$store.getters['auth/check']) {
              _context.n = 3;
              break;
            }
            // User is already logged in, go to step 4 and redirect
            _this.currentStep = 4;
            _context.n = 1;
            return _this.delay(500);
          case 1:
            _context.n = 2;
            return _this.redirectAfterAuth();
          case 2:
            return _context.a(2);
          case 3:
            // Check if we've already processed this request (prevent refresh loop)
            processedKey = 'cross_domain_login_processed';
            if (!sessionStorage.getItem(processedKey)) {
              _context.n = 6;
              break;
            }
            // Already processed, go to step 4 and redirect
            _this.currentStep = 4;
            _context.n = 4;
            return _this.delay(500);
          case 4:
            _context.n = 5;
            return _this.redirectAfterAuth();
          case 5:
            return _context.a(2);
          case 6:
            // Start at step 3 (setting up session)
            _this.currentStep = 3;
            _context.n = 7;
            return _this.handleCrossDomainLogin();
          case 7:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    handleCrossDomainLogin: function handleCrossDomainLogin() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var urlParams, encryptedEmail, encryptedPassword, response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              // Get the encrypted credentials from URL parameters
              urlParams = new URLSearchParams(window.location.search);
              encryptedEmail = urlParams.get('email');
              encryptedPassword = urlParams.get('password');
              if (!(!encryptedEmail || !encryptedPassword)) {
                _context2.n = 1;
                break;
              }
              _this2.error = _this2.$t('Invalid login parameters');
              _this2.loading = false;
              return _context2.a(2);
            case 1:
              // Mark as processed to prevent refresh loops
              sessionStorage.setItem('cross_domain_login_processed', 'true');

              // Call the cross-domain login API with GET request
              _context2.n = 2;
              return _this2.$axios.get('/api/cross-domain-login', {
                params: {
                  email: encryptedEmail,
                  password: encryptedPassword
                }
              });
            case 2:
              response = _context2.v;
              if (!(response.data && response.data.token)) {
                _context2.n = 8;
                break;
              }
              // Step 3: Setting up session - save token
              _this2.currentStep = 3;

              // Save the token to the store
              _context2.n = 3;
              return _this2.$store.dispatch('auth/saveToken', {
                token: response.data.token,
                remember: false
              });
            case 3:
              _context2.n = 4;
              return _this2.delay(500);
            case 4:
              _context2.n = 5;
              return _this2.$store.dispatch('auth/fetchUser');
            case 5:
              // Remove query parameters from URL to prevent re-processing
              if (window.history && window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.pathname);
              }

              // Step 4: Redirecting
              _this2.currentStep = 4;
              _context2.n = 6;
              return _this2.delay(500);
            case 6:
              _context2.n = 7;
              return _this2.redirectAfterAuth();
            case 7:
              _context2.n = 9;
              break;
            case 8:
              _this2.error = _this2.$t('Login failed. Please try again');
              sessionStorage.removeItem('cross_domain_login_processed');
              _this2.loading = false;
            case 9:
              _context2.n = 11;
              break;
            case 10:
              _context2.p = 10;
              _t = _context2.v;
              console.error('Cross-domain login error:', _t);
              _this2.error = _this2.$t('Login failed. Please try again');
              sessionStorage.removeItem('cross_domain_login_processed');
            case 11:
              _context2.p = 11;
              _this2.loading = false;
              return _context2.f(11);
            case 12:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 10, 11, 12]]);
      }))();
    },
    redirectAfterAuth: function redirectAfterAuth() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var initResponse, isInitialized, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this3.$axios.get('/api/tenant-initialization/check');
            case 1:
              initResponse = _context3.v;
              isInitialized = initResponse.data && initResponse.data.data && initResponse.data.data.is_initialized; // Use window.location.href for hard redirect to prevent any middleware issues
              // Only redirect once - no multiple redirects
              if (!isInitialized) {
                window.location.href = '/tenant-initialization';
              } else {
                window.location.href = '/dashboard';
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              // On error checking initialization, assume not initialized
              console.error('Error checking tenant initialization:', _t2);
              window.location.href = '/tenant-initialization';
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    delay: function delay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }
});
;// ./resources/js/pages/auth/cross-domain-login.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_cross_domain_loginvue_type_script_lang_js = (cross_domain_loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=1953aa2e&prod&scoped=true&lang=css
var cross_domain_loginvue_type_style_index_0_id_1953aa2e_prod_scoped_true_lang_css = __webpack_require__(86059);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=1953aa2e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cross_domain_loginvue_type_style_index_0_id_1953aa2e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const auth_cross_domain_loginvue_type_style_index_0_id_1953aa2e_prod_scoped_true_lang_css = (cross_domain_loginvue_type_style_index_0_id_1953aa2e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=1953aa2e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/cross-domain-login.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  auth_cross_domain_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1953aa2e",
  null
  
)

/* harmony default export */ const cross_domain_login = (component.exports);

/***/ }),

/***/ 64941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ LoginStepsModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginStepsModal.vue?vue&type=template&id=f04176f0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "login-steps-modal-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return false.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "login-steps-modal"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm.appInfo ? _c('div', {
    staticClass: "text-center mb-4"
  }, [_c('img', {
    staticClass: "modal-logo",
    attrs: {
      "src": _vm.appInfo.blackLogo,
      "alt": _vm.appInfo.companyName
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "steps-container"
  }, [_c('div', {
    staticClass: "step-item",
    "class": {
      'active': _vm.currentStep >= 1,
      'completed': _vm.currentStep > 1
    }
  }, [_c('div', {
    staticClass: "step-icon"
  }, [_vm.currentStep > 1 ? _c('i', {
    staticClass: "fas fa-check-circle text-success"
  }) : _vm.currentStep === 1 ? _c('i', {
    staticClass: "fas fa-spinner fa-spin text-primary"
  }) : _c('i', {
    staticClass: "fas fa-circle pending-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "step-content"
  }, [_c('h5', {
    staticClass: "step-title"
  }, [_vm._v(_vm._s(_vm.$t('Finding Your Account')))]), _vm._v(" "), _c('p', {
    staticClass: "step-description"
  }, [_vm._v(_vm._s(_vm.$t('Searching for your account')))])])]), _vm._v(" "), _c('div', {
    staticClass: "step-item",
    "class": {
      'active': _vm.currentStep >= 2,
      'completed': _vm.currentStep > 2
    }
  }, [_c('div', {
    staticClass: "step-icon"
  }, [_vm.currentStep > 2 ? _c('i', {
    staticClass: "fas fa-check-circle text-success"
  }) : _vm.currentStep === 2 ? _c('i', {
    staticClass: "fas fa-spinner fa-spin text-primary"
  }) : _c('i', {
    staticClass: "fas fa-circle pending-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "step-content"
  }, [_c('h5', {
    staticClass: "step-title"
  }, [_vm._v(_vm._s(_vm.$t('Verifying Password')))]), _vm._v(" "), _c('p', {
    staticClass: "step-description"
  }, [_vm._v(_vm._s(_vm.$t('Checking your email and password')))])])]), _vm._v(" "), _c('div', {
    staticClass: "step-item",
    "class": {
      'active': _vm.currentStep >= 3,
      'completed': _vm.currentStep > 3
    }
  }, [_c('div', {
    staticClass: "step-icon"
  }, [_vm.currentStep > 3 ? _c('i', {
    staticClass: "fas fa-check-circle text-success"
  }) : _vm.currentStep === 3 ? _c('i', {
    staticClass: "fas fa-spinner fa-spin text-primary"
  }) : _c('i', {
    staticClass: "fas fa-circle pending-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "step-content"
  }, [_c('h5', {
    staticClass: "step-title"
  }, [_vm._v(_vm._s(_vm.$t('Preparing Your Account')))]), _vm._v(" "), _c('p', {
    staticClass: "step-description"
  }, [_vm._v(_vm._s(_vm.$t('Setting up your dashboard')))])])]), _vm._v(" "), _c('div', {
    staticClass: "step-item",
    "class": {
      'active': _vm.currentStep >= 4,
      'completed': _vm.currentStep > 4
    }
  }, [_c('div', {
    staticClass: "step-icon"
  }, [_vm.currentStep > 4 ? _c('i', {
    staticClass: "fas fa-check-circle text-success"
  }) : _vm.currentStep === 4 ? _c('i', {
    staticClass: "fas fa-spinner fa-spin text-primary"
  }) : _c('i', {
    staticClass: "fas fa-circle pending-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "step-content"
  }, [_c('h5', {
    staticClass: "step-title"
  }, [_vm._v(_vm._s(_vm.$t('Redirecting to Dashboard')))]), _vm._v(" "), _c('p', {
    staticClass: "step-description"
  }, [_vm._v(_vm._s(_vm.$t('Almost done!')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "progress-container mt-4"
  }, [_c('div', {
    staticClass: "progress",
    staticStyle: {
      "height": "6px"
    }
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-striped progress-bar-animated bg-primary",
    style: {
      width: _vm.progressPercentage + '%'
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": _vm.progressPercentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])])]) : _vm._e();
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginStepsModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const LoginStepsModalvue_type_script_lang_js = ({
  name: 'LoginStepsModal',
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    currentStep: {
      type: Number,
      "default": 0
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    progressPercentage: function progressPercentage() {
      // Calculate progress based on current step (4 steps total)
      return this.currentStep / 4 * 100;
    }
  })
});
;// ./resources/js/components/LoginStepsModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_LoginStepsModalvue_type_script_lang_js = (LoginStepsModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginStepsModal.vue?vue&type=style&index=0&id=f04176f0&prod&scoped=true&lang=css
var LoginStepsModalvue_type_style_index_0_id_f04176f0_prod_scoped_true_lang_css = __webpack_require__(18097);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginStepsModal.vue?vue&type=style&index=0&id=f04176f0&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(LoginStepsModalvue_type_style_index_0_id_f04176f0_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_LoginStepsModalvue_type_style_index_0_id_f04176f0_prod_scoped_true_lang_css = (LoginStepsModalvue_type_style_index_0_id_f04176f0_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/LoginStepsModal.vue?vue&type=style&index=0&id=f04176f0&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/LoginStepsModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_LoginStepsModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "f04176f0",
  null
  
)

/* harmony default export */ const LoginStepsModal = (component.exports);

/***/ }),

/***/ 86059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".error-container[data-v-1953aa2e]{align-items:center;background-color:#fff;display:flex;height:100%;justify-content:center;left:0;padding:2rem;position:fixed;text-align:center;top:0;width:100%;z-index:9999}.error-container .alert[data-v-1953aa2e]{margin:0 auto;max-width:400px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);