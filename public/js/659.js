"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[659],{

/***/ 10659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resend)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=template&id=94352dce&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('auth-wrapper', {
    attrs: {
      "title": _vm.$t('resend_verification_link')
    },
    scopedSlots: _vm._u([{
      key: "form",
      fn: function fn() {
        return [_c('form', {
          on: {
            "submit": function submit($event) {
              $event.preventDefault();
              return _vm.resendVerification.apply(null, arguments);
            },
            "keydown": function keydown($event) {
              return _vm.verificationForm.onKeydown($event);
            }
          }
        }, [_vm.message && _vm.type === 'danger' ? _c('div', {
          staticClass: "alert alert-danger mb-4"
        }, [_vm._v("\n          " + _vm._s(_vm.message) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.showSentMessage && _vm.message && _vm.type === 'success' ? _c('div', {
          staticClass: "alert alert-success mb-4"
        }, [_vm._v("\n          " + _vm._s(_vm.message) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "form-group mb-3"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.verificationForm.email,
            expression: "verificationForm.email"
          }],
          staticClass: "form-control input-radius-10 border-0 px-4 text-primary",
          "class": {
            'is-invalid': _vm.verificationForm.errors.has('email')
          },
          attrs: {
            "id": "email",
            "name": "email",
            "type": "text",
            "placeholder": _vm.$t('Email')
          },
          domProps: {
            "value": _vm.verificationForm.email
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.verificationForm, "email", $event.target.value);
            }
          }
        }), _vm._v(" "), _c('has-error', {
          staticClass: "ml-4",
          attrs: {
            "form": _vm.verificationForm,
            "field": "email"
          }
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "register-submit-btn-wrapper"
        }, [_c('v-button', {
          staticClass: "btn btn-block mb-2 register-submit-btn",
          attrs: {
            "loading": _vm.verificationForm.busy
          }
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Send")))]), _vm._v(" "), _c('i', {
          staticClass: "fas fa-sign-in-alt",
          staticStyle: {
            "transform": "scaleX(-1)"
          }
        })])], 1), _vm._v(" "), _vm.showSentMessage && _vm.type === 'success' ? _c('div', {
          staticClass: "mt-4"
        }, [_c('h3', {
          staticClass: "mb-3"
        }, [_vm._v(_vm._s(_vm.$t('one_more_step')))]), _vm._v(" "), _c('p', {
          staticClass: "mb-3"
        }, [_vm._v("\n            " + _vm._s(_vm.$t("We've sent an email to")) + "\n            "), _c('span', {
          staticClass: "text-indigo font-weight-bold"
        }, [_vm._v(_vm._s(_vm.verificationForm.email))]), _vm._v(".\n            " + _vm._s(_vm.$t("Please click the confirmation link in it to finalize your account")) + "\n          ")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t("Didn't get the email? Please check your spam folder or")) + "\n            "), _c('button', {
          staticClass: "btn p-0 resend-link-text",
          on: {
            "click": _vm.resendVerification
          }
        }, [_vm._v("\n              " + _vm._s(_vm.$t("Resend Verification")) + "\n            ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const resendvue_type_script_lang_js = ({
  layout: "basic",
  middleware: "guest",
  components: {
    AuthWrapper: AuthWrapper/* default */.A
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t("find_domain")
    };
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      message: "",
      type: null,
      verificationForm: new vform_es/* default */.Ay({
        email: ""
      }),
      showSentMessage: false,
      appName: window.config.appName,
      host: location.host
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])),
  methods: {
    resendVerification: function resendVerification() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this.isDemoMode) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", toast.fire({
                type: "warning",
                title: _this.$t("You are not allowed to do this in demo version.")
              }));
            case 2:
              _context.next = 4;
              return _this.verificationForm.post("/api/email/resend").then(function (_ref) {
                var data = _ref.data;
                _this.message = data.message;
                _this.type = "success";
                _this.showSentMessage = true;
              })["catch"](function (e) {
                _this.message = e.response.data.message;
                _this.type = "danger";
              })["finally"](function () {});
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// ./resources/js/pages/auth/resend.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_resendvue_type_script_lang_js = (resendvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=style&index=0&id=94352dce&prod&scoped=true&lang=css
var resendvue_type_style_index_0_id_94352dce_prod_scoped_true_lang_css = __webpack_require__(16069);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=style&index=0&id=94352dce&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(resendvue_type_style_index_0_id_94352dce_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const auth_resendvue_type_style_index_0_id_94352dce_prod_scoped_true_lang_css = (resendvue_type_style_index_0_id_94352dce_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/auth/resend.vue?vue&type=style&index=0&id=94352dce&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/resend.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  auth_resendvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "94352dce",
  null
  
)

/* harmony default export */ const resend = (component.exports);

/***/ }),

/***/ 16069:
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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