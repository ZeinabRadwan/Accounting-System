"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2796],{

/***/ 22796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cross_domain_login)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=template&id=52cee6a0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.error ? _c('div', {
    staticClass: "loading-container"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t('Loading')) + "...")])])]) : _vm.error ? _c('div', {
    staticClass: "error-container"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")])]) : _vm._e()]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
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
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return _this.redirectAfterAuth();
          case 1:
            return _context.a(2);
          case 2:
            // Check if we've already processed this request (prevent refresh loop)
            processedKey = 'cross_domain_login_processed';
            if (!sessionStorage.getItem(processedKey)) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return _this.redirectAfterAuth();
          case 3:
            return _context.a(2);
          case 4:
            _context.n = 5;
            return _this.handleCrossDomainLogin();
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    handleCrossDomainLogin: function handleCrossDomainLogin() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var urlParams, encryptedEmail, encryptedPassword, response, user, _t;
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
                _context2.n = 9;
                break;
              }
              _context2.n = 3;
              return _this2.$store.dispatch('auth/saveToken', {
                token: response.data.token,
                remember: false
              });
            case 3:
              _context2.n = 4;
              return _this2.$store.dispatch('auth/fetchUser');
            case 4:
              if (!response.data.locale) {
                _context2.n = 6;
                break;
              }
              _context2.n = 5;
              return _this2.applyLocale(response.data.locale);
            case 5:
              _context2.n = 7;
              break;
            case 6:
              // Fallback to user locale from store
              user = _this2.$store.getters['auth/user'];
              if (!(user && user.locale)) {
                _context2.n = 7;
                break;
              }
              _context2.n = 7;
              return _this2.applyLocale(user.locale);
            case 7:
              // Remove query parameters from URL to prevent re-processing
              if (window.history && window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.pathname);
              }

              // Redirect after authentication (without showing modal steps)
              _context2.n = 8;
              return _this2.redirectAfterAuth();
            case 8:
              _context2.n = 10;
              break;
            case 9:
              _this2.error = _this2.$t('Login failed. Please try again');
              sessionStorage.removeItem('cross_domain_login_processed');
              _this2.loading = false;
            case 10:
              _context2.n = 12;
              break;
            case 11:
              _context2.p = 11;
              _t = _context2.v;
              console.error('Cross-domain login error:', _t);
              _this2.error = _this2.$t('Login failed. Please try again');
              sessionStorage.removeItem('cross_domain_login_processed');
            case 12:
              _context2.p = 12;
              _this2.loading = false;
              return _context2.f(12);
            case 13:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 11, 12, 13]]);
      }))();
    },
    applyLocale: function applyLocale(locale) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var rtlLanguages, isRTL, _yield$import, loadMessages, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              // RTL languages list
              rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi'];
              isRTL = rtlLanguages.includes(locale.toLowerCase()); // Import loadMessages function
              _context3.n = 1;
              return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 37225));
            case 1:
              _yield$import = _context3.v;
              loadMessages = _yield$import.loadMessages;
              _context3.n = 2;
              return loadMessages(locale);
            case 2:
              _context3.n = 3;
              return _this3.$store.dispatch('lang/setLocale', {
                locale: locale
              });
            case 3:
              // Apply RTL mode if available
              if (window.RTLManager) {
                window.RTLManager.applyRTLMode(locale);
              } else {
                // Fallback RTL implementation
                document.documentElement.setAttribute('lang', locale);
                document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
                document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
                if (isRTL) {
                  document.body.classList.add('rtl');
                  document.body.classList.remove('ltr');
                } else {
                  document.body.classList.add('ltr');
                  document.body.classList.remove('rtl');
                }
              }

              // Store in localStorage
              localStorage.setItem('current_locale', locale);
              localStorage.setItem('rtl_mode', isRTL.toString());

              // Set flag to prevent middleware from overriding
              localStorage.setItem('locale_just_changed', 'true');
              setTimeout(function () {
                localStorage.removeItem('locale_just_changed');
              }, 2000);
              console.log('Locale applied:', locale);
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t2 = _context3.v;
              console.error('Error applying locale:', _t2);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 4]]);
      }))();
    },
    redirectAfterAuth: function redirectAfterAuth() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var initResponse, isInitialized, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _this4.$axios.get('/api/tenant-initialization/check');
            case 1:
              initResponse = _context4.v;
              isInitialized = initResponse.data && initResponse.data.data && initResponse.data.data.is_initialized; // Use window.location.href for hard redirect to prevent any middleware issues
              // Only redirect once - no multiple redirects
              if (!isInitialized) {
                window.location.href = '/tenant-initialization';
              } else {
                window.location.href = '/dashboard';
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              // On error checking initialization, assume not initialized
              console.error('Error checking tenant initialization:', _t3);
              window.location.href = '/tenant-initialization';
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    }
  }
});
;// ./resources/js/pages/auth/cross-domain-login.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_cross_domain_loginvue_type_script_lang_js = (cross_domain_loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=52cee6a0&prod&scoped=true&lang=css
var cross_domain_loginvue_type_style_index_0_id_52cee6a0_prod_scoped_true_lang_css = __webpack_require__(35911);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=52cee6a0&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cross_domain_loginvue_type_style_index_0_id_52cee6a0_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const auth_cross_domain_loginvue_type_style_index_0_id_52cee6a0_prod_scoped_true_lang_css = (cross_domain_loginvue_type_style_index_0_id_52cee6a0_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/auth/cross-domain-login.vue?vue&type=style&index=0&id=52cee6a0&prod&scoped=true&lang=css

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
  "52cee6a0",
  null
  
)

/* harmony default export */ const cross_domain_login = (component.exports);

/***/ }),

/***/ 35911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".error-container[data-v-52cee6a0],.loading-container[data-v-52cee6a0]{align-items:center;background-color:#fff;display:flex;height:100%;justify-content:center;left:0;padding:2rem;position:fixed;text-align:center;top:0;width:100%;z-index:9999}.error-container .alert[data-v-52cee6a0]{margin:0 auto;max-width:400px}.spinner-border[data-v-52cee6a0]{height:3rem;width:3rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);