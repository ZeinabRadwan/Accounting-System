"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1840],{

/***/ 9459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resend)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=template&id=69408757
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
    staticClass: "text-center mb-4"
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
  }) : _vm._e()])], 1), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.resendVerification.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.verificationForm.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verificationForm.email,
      expression: "verificationForm.email"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
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
    style: [_vm.verificationForm.errors.has('email') ? 'block' : 'none'],
    attrs: {
      "form": _vm.verificationForm,
      "field": "email"
    }
  })], 1), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm",
    attrs: {
      "loading": _vm.verificationForm.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Send")))])])], 1), _vm._v(" "), _vm.showSentMessage ? _c('div', {
    staticClass: "mt-5"
  }, [_vm.message ? _c('div', {
    staticClass: "alert",
    "class": _vm.type == 'success' ? 'alert-success' : 'alert-danger'
  }, [_vm._v("\n                  " + _vm._s(_vm.message) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('h3', [_vm._v("One more step 👍")]), _vm._v(" "), _c('p', {
    staticClass: "text-22 mb-4 mt-2"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("We've sent an email to")) + "\n                  "), _c('span', {
    staticClass: "text-indigo"
  }, [_vm._v(_vm._s(_vm.verificationForm.email))]), _vm._v(".\n                  " + _vm._s(_vm.$t("Please click the confirmation link in it to finalize your account")) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                  " + _vm._s(_vm.$t("Didn't get the email? Please check your spam folder or")) + "\n                  "), _c('button', {
    staticClass: "btn p-0 text-indigo",
    on: {
      "click": _vm.resendVerification
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Resend Verification")) + "\n                  ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row text-center"
  }, [_c('router-link', {
    staticClass: "ml-auto my-auto",
    attrs: {
      "to": {
        name: 'register'
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Don't have any account? Click here!")) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/resend.vue?vue&type=script&lang=js
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


/* harmony default export */ const resendvue_type_script_lang_js = ({
  layout: "basic",
  middleware: "guest",
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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!_this.isDemoMode) {
                _context.n = 1;
                break;
              }
              return _context.a(2, toast.fire({
                type: "warning",
                title: _this.$t("You are not allowed to do this in demo version.")
              }));
            case 1:
              _context.n = 2;
              return _this.verificationForm.post("/api/email/resend").then(function (_ref) {
                var data = _ref.data;
                _this.message = data.message;
                _this.type = "success";
                _this.showSentMessage = true;
              })["catch"](function (e) {
                _this.message = e.response.data.message;
                _this.type = "danger";
              })["finally"](function () {});
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});
;// ./resources/js/pages/auth/resend.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_resendvue_type_script_lang_js = (resendvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/resend.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  auth_resendvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const resend = (component.exports);

/***/ })

}]);