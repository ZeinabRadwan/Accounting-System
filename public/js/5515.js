"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5515],{

/***/ 62489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ WhiteScreenLoader)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WhiteScreenLoader.vue?vue&type=template&id=72cc1917&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "white-screen-loader"
  }, [_c('div', {
    staticClass: "loading-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "loading-text"
  }, [_c('h4', [_vm._v(_vm._s(_vm.loadingText))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.subText))])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "spinner-container"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])])]);
}];

;// ./resources/js/components/WhiteScreenLoader.vue?vue&type=template&id=72cc1917&scoped=true

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WhiteScreenLoader.vue?vue&type=script&lang=js
/* harmony default export */ const WhiteScreenLoadervue_type_script_lang_js = ({
  name: 'WhiteScreenLoader',
  props: {
    loadingText: {
      type: String,
      "default": 'Logging in...'
    },
    subText: {
      type: String,
      "default": 'Please wait while we redirect you to your dashboard'
    }
  }
});
;// ./resources/js/components/WhiteScreenLoader.vue?vue&type=script&lang=js
 /* harmony default export */ const components_WhiteScreenLoadervue_type_script_lang_js = (WhiteScreenLoadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WhiteScreenLoader.vue?vue&type=style&index=0&id=72cc1917&prod&scoped=true&lang=css
var WhiteScreenLoadervue_type_style_index_0_id_72cc1917_prod_scoped_true_lang_css = __webpack_require__(80483);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WhiteScreenLoader.vue?vue&type=style&index=0&id=72cc1917&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(WhiteScreenLoadervue_type_style_index_0_id_72cc1917_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_WhiteScreenLoadervue_type_style_index_0_id_72cc1917_prod_scoped_true_lang_css = (WhiteScreenLoadervue_type_style_index_0_id_72cc1917_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/WhiteScreenLoader.vue?vue&type=style&index=0&id=72cc1917&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/WhiteScreenLoader.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_WhiteScreenLoadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "72cc1917",
  null
  
)

/* harmony default export */ const WhiteScreenLoader = (component.exports);

/***/ }),

/***/ 65515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ find_domain)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/find-domain.vue?vue&type=template&id=256bceae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.isLoading ? _c('WhiteScreenLoader', {
    attrs: {
      "loading-text": _vm.loadingText,
      "sub-text": _vm.subText
    }
  }) : _c('div', {
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
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "height": "100%",
      "line-height": "2"
    }
  }, [_vm._v(_vm._s(_vm.host))])]), _vm._v(" "), _c('has-error', {
    style: [_vm.form.errors.has('domain') ? 'block' : 'none'],
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
    staticClass: "form-control rounded-pill border-0 shadow-sm px-4 text-primary",
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
      "id": "password",
      "name": "password",
      "type": "password",
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
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm",
    attrs: {
      "type": "button",
      "disabled": _vm.isLoading || _vm.form.busy
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm.isLoading || _vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-sign-in-alt"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('login')))])])]), _vm._v(" "), _c('div', {
    staticClass: "row text-center"
  }, [_c('router-link', {
    staticClass: "ml-auto my-auto",
    attrs: {
      "to": {
        name: 'register'
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('register_invite')) + "\n                  ")])], 1)])])])])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/WhiteScreenLoader.vue + 6 modules
var WhiteScreenLoader = __webpack_require__(62489);
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
    WhiteScreenLoader: WhiteScreenLoader/* default */.A
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
      appName: window.config.appName,
      host: location.host,
      isLoading: false,
      loadingText: 'Finding your domain...',
      subText: 'Please wait while we locate your account'
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
        var domainResponse, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.isLoading) {
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
              _this.$toast.error('Please fill in all fields');
              return _context.a(2);
            case 2:
              _this.isLoading = true;
              _context.p = 3;
              // First, find the domain and get tenant info
              console.log('Calling /api/find-domain...');

              // Use axios directly instead of form.post to avoid form validation issues
              _context.n = 4;
              return _this.$axios.post('/api/find-domain', {
                domain: _this.form.domain,
                email: _this.form.email,
                password: _this.form.password
              });
            case 4:
              domainResponse = _context.v;
              console.log('Domain response:', domainResponse);
              if (domainResponse && domainResponse.data.success) {
                // Update loading text for redirect
                _this.loadingText = _this.$t('Redirecting to your dashboard...');
                _this.subText = _this.$t('Please wait while we take you to your account');

                // Small delay to show loading state before redirect
                setTimeout(function () {
                  // Redirect to the tenant domain using the special login URL
                  window.location.href = domainResponse.data.data.login_url;
                }, 1500);
              } else {
                // Handle case where response is successful but no login URL provided
                _this.$toast.error('Domain found but login failed. Please check your credentials.');
                _this.isLoading = false;
              }
              _context.n = 9;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              console.error('Error in findDomain:', _t);

              // Handle validation errors
              if (!(_t.response && _t.response.status === 422)) {
                _context.n = 6;
                break;
              }
              // Validation errors are handled by the form component
              console.log('Validation errors:', _t.response.data);
              _this.isLoading = false;
              return _context.a(2);
            case 6:
              if (!(_t.response && _t.response.status === 404)) {
                _context.n = 7;
                break;
              }
              _this.$toast.error('Domain not found. Please check your domain name and try again.');
              _this.isLoading = false;
              return _context.a(2);
            case 7:
              if (!(_t.response && _t.response.status === 401)) {
                _context.n = 8;
                break;
              }
              _this.$toast.error('Invalid email or password. Please check your credentials.');
              _this.isLoading = false;
              return _context.a(2);
            case 8:
              // Show error message for other errors
              if (_t.response && _t.response.data && _t.response.data.message) {
                _this.$toast.error(_t.response.data.message);
              } else {
                _this.$toast.error('Login failed. Please check your credentials and domain.');
              }
              _this.isLoading = false;
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[3, 5]]);
      }))();
    }
  }
});
;// ./resources/js/pages/auth/find-domain.vue?vue&type=script&lang=js
 /* harmony default export */ const auth_find_domainvue_type_script_lang_js = (find_domainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/auth/find-domain.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  auth_find_domainvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const find_domain = (component.exports);

/***/ }),

/***/ 80483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".white-screen-loader[data-v-72cc1917]{align-items:center;background-color:#fff;display:flex;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.loading-content[data-v-72cc1917]{max-width:400px;padding:2rem;text-align:center}.spinner-container[data-v-72cc1917]{margin-bottom:2rem}.spinner-border[data-v-72cc1917]{border-width:.3em;height:3rem;width:3rem}.loading-text h4[data-v-72cc1917]{color:#333;font-weight:500;margin-bottom:.5rem}.loading-text p[data-v-72cc1917]{font-size:.9rem;margin-bottom:0}@keyframes spin-72cc1917{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.spinner-border[data-v-72cc1917]{animation:spin-72cc1917 1s linear infinite}.loading-content[data-v-72cc1917]{animation:fadeIn-72cc1917 .3s ease-in}@keyframes fadeIn-72cc1917{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);