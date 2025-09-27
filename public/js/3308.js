"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3308],{

/***/ 63308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login.vue?vue&type=template&id=1678033e
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
    staticClass: "col-lg-10 col-xl-7 mx-auto"
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
  }) : _vm._e()]), _vm._v(" "), _c('p', {
    staticClass: "text-22 mb-4 mt-2"
  }, [_vm._v(_vm._s(_vm.$t("login_txt")))])], 1), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.login.apply(null, arguments);
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
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
    "class": {
      'is-invalid': _vm.form.errors.has('email')
    },
    attrs: {
      "id": "email",
      "type": "email",
      "name": "email",
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
    attrs: {
      "form": _vm.form,
      "field": "email"
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
      "type": "password",
      "name": "password",
      "placeholder": _vm.$t('password_placeholder')
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
    attrs: {
      "form": _vm.form,
      "field": "password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row mb-5"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('checkbox', {
    attrs: {
      "name": "remember"
    },
    model: {
      value: _vm.remember,
      callback: function callback($$v) {
        _vm.remember = $$v;
      },
      expression: "remember"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("remember_me")) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 text-right"
  }, [_c('router-link', {
    staticClass: "ml-auto my-auto",
    attrs: {
      "to": {
        name: 'password.request'
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("forgot_password")) + "\n                    ")])], 1)]), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("login")))])])], 1)]), _vm._v(" "), _vm.isDemoMode ? _c('div', {
    staticClass: "col-12 mt-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered red-border text-center"
  }, [_vm._m(1), _vm._v(" "), !_vm.isSubdomain ? _c('tbody', [_c('tr', [_c('th', [_vm._v("Owner")]), _vm._v(" "), _c('th', [_vm._v("Central Admin")]), _vm._v(" "), _c('td', [_vm._v("superadmin@arqam.sa")]), _vm._v(" "), _c('td', [_vm._v("arqam2024")]), _vm._v(" "), _c('td', {
    attrs: {
      "scope": "row"
    }
  }, [_c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Central Admin'),
      expression: "$t('Central Admin')"
    }],
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.loginCredential('superadmin@arqam.sa', 'arqam2024');
      }
    }
  }, [_c('svg', {
    staticClass: "h-6 w-6",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    }
  })])])])])]) : _c('tbody', [_vm.checkSubdomain('john') ? _c('tr', [_c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Tenant(Subscriber)")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Admin")]), _vm._v(" "), _c('td', [_vm._v("john@arqam.sa")]), _vm._v(" "), _c('td', [_vm._v("arqam2024")]), _vm._v(" "), _c('td', {
    attrs: {
      "scope": "row"
    }
  }, [_c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Central Admin'),
      expression: "$t('Central Admin')"
    }],
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.loginCredential('john@arqam.sa', 'arqam2024');
      }
    }
  }, [_c('svg', {
    staticClass: "h-6 w-6",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _vm.checkSubdomain('jane') ? _c('tr', [_c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Tenant(Subscriber)")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Admin")]), _vm._v(" "), _c('td', [_vm._v("jane@arqam.sa")]), _vm._v(" "), _c('td', [_vm._v("arqam2024")]), _vm._v(" "), _c('td', {
    attrs: {
      "scope": "row"
    }
  }, [_c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Central Admin'),
      expression: "$t('Central Admin')"
    }],
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.loginCredential('jane@arqam.sa', 'arqam2024');
      }
    }
  }, [_c('svg', {
    staticClass: "h-6 w-6",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Tenant Employee")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Manager")]), _vm._v(" "), _c('td', [_vm._v("manager@arqam.sa")]), _vm._v(" "), _c('td', [_vm._v("arqam2024")]), _vm._v(" "), _c('td', {
    attrs: {
      "scope": "row"
    }
  }, [_c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Login as super manager'),
      expression: "$t('Login as super manager')"
    }],
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.loginCredential('manager@arqam.sa', 'arqam2024');
      }
    }
  }, [_c('svg', {
    staticClass: "h-6 w-6",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    }
  })])])])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Tenant Employee")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("Salesman")]), _vm._v(" "), _c('td', [_vm._v("sales@arqam.sa")]), _vm._v(" "), _c('td', [_vm._v("arqam2024")]), _vm._v(" "), _c('td', {
    attrs: {
      "scope": "row"
    }
  }, [_c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Login as super salesman'),
      expression: "$t('Login as super salesman')"
    }],
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.loginCredential('sales@arqam.sa', 'arqam2024');
      }
    }
  }, [_c('svg', {
    staticClass: "h-6 w-6",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    }
  })])])])])])])])])])]) : _vm._e()])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', {
    staticClass: "text-center font-bold font-up danger-text"
  }, [_vm._v("\n                        Login Credentials\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Email")]), _vm._v(" "), _c('th', [_vm._v("Password")]), _vm._v(" "), _c('th', [_vm._v("Action")])])]);
}];

;// ./resources/js/pages/auth/login.vue?vue&type=template&id=1678033e

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(12215);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login.vue?vue&type=script&lang=js
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



/* harmony default export */ const loginvue_type_script_lang_js = ({
  layout: "basic",
  middleware: "guest",
  metaInfo: function metaInfo() {
    return {
      title: this.$t("login")
    };
  },
  data: function data() {
    return {
      form: new vform_es/* default */.Ay({
        email: "",
        password: ""
      }),
      remember: false,
      appName: window.config.appName,
      isSubdomain: false,
      isDemoMode: window.config.isDemoMode
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])),
  created: function created() {
    this.isSubdomain = this.checkDomain(window.location.hostname);
    this.getSubdomain();
    console.log(this.getSubdomain());
  },
  methods: {
    login: function login() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var loginRequest, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.form.post("/api/login");
            case 1:
              loginRequest = _context.v;
              if (!(loginRequest.status !== 200)) {
                _context.n = 2;
                break;
              }
              toast.fire({
                type: "error",
                title: _this.$t("Something went wrong, please try again!")
              });
              Object.keys(js_cookie_default().get()).forEach(function (cookieName) {
                var neededAttributes = {
                  // Here you pass the same attributes that were used when the cookie was created
                  // and are required when removing the cookie
                };
                js_cookie_default().remove(cookieName, neededAttributes);
              });
              return _context.a(2);
            case 2:
              data = loginRequest.data; // Save the token.
              _this.$store.dispatch("auth/saveToken", {
                token: data.token,
                remember: _this.remember
              });
              // Fetch the user.
              _context.n = 3;
              return _this.$store.dispatch("auth/fetchUser");
            case 3:
              // Redirect home.
              _this.redirect();
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    redirect: function redirect() {
      var intendedUrl = js_cookie_default().get("intended_url");
      if (intendedUrl) {
        js_cookie_default().remove("intended_url");
        this.$router.push({
          path: intendedUrl
        });
        window.location.reload();
      } else {
        this.$router.push({
          name: "home"
        });
        // window reload
        window.location.reload();
      }
    },
    loginCredential: function loginCredential(email, pass) {
      this.form.email = email;
      this.form.password = pass;
      this.login();
    },
    checkDomain: function checkDomain(url) {
      url = url || "http://www.test-domain.com"; // just for the example
      var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
      return !!url.match(regex); // make sure it returns boolean
    },
    getSubdomain: function getSubdomain() {
      return window.location.hostname;
    },
    checkSubdomain: function checkSubdomain(subdomainName) {
      var subdomain = this.getSubdomain();
      return subdomain.includes(subdomainName);
    }
  }
});
;// ./resources/js/pages/auth/login.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/login.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  auth_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const login = (component.exports);

/***/ })

}]);