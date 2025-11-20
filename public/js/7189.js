"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7189],{

/***/ 10770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".buildingSite[data-v-242d7096]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;text-align:center;width:100%}.buildingSite h2[data-v-242d7096]{font-size:40px;margin-bottom:5px}.buildingSite p[data-v-242d7096]{font-size:18px;line-height:32px}.btn-loading[data-v-242d7096]{color:transparent!important;pointer-events:none;position:relative}.btn-loading[data-v-242d7096]:after{animation:spinAround-242d7096 .5s linear infinite;border-color:transparent transparent #dbdbdb #dbdbdb;border-radius:50%;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;left:calc(50% - .5em);position:absolute;top:calc(50% - .5em);width:1em}@keyframes spinAround-242d7096{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ impersonate)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=template&id=242d7096&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "buildingSite"
  }, [_c('h2', [_vm._v(_vm._s(_vm.$t('We are building your site')))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    "class": {
      'btn-loading': _vm.isActive
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.tenantRegister();
      }
    }
  }, [_c('span', {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t('retry')))])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', [_vm._v("{{ $t('Please wait while our 🤖 robots build your website."), _c('br'), _vm._v("It shouldn't take more than a minute.') }}")]);
}];

;// ./resources/js/pages/impersonate/index.vue?vue&type=template&id=242d7096&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const impersonatevue_type_script_lang_js = ({
  layout: 'basic',
  middleware: 'guest',
  metaInfo: function metaInfo() {
    return {
      title: this.$t('register')
    };
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  methods: {
    tenantRegister: function tenantRegister() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.isActive = true;
              // Register the user.
              axios_default().get(window.location.origin + '/api/impersonate/' + _this.$route.params.token).then(function (_ref) {
                var data = _ref.data;
                _this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: true
                });
                _this.$router.push({
                  name: 'setup.general'
                })["catch"](function () {});
              })["catch"](function () {
                return _this.$router.push({
                  name: 'login'
                })["catch"](function () {});
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;
    this.tenantRegister();
    setTimeout(function () {
      _this2.tenantRegister();
    }, 10000);
  }
});
;// ./resources/js/pages/impersonate/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_impersonatevue_type_script_lang_js = (impersonatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=style&index=0&id=242d7096&prod&scoped=true&lang=css
var impersonatevue_type_style_index_0_id_242d7096_prod_scoped_true_lang_css = __webpack_require__(89006);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=style&index=0&id=242d7096&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(impersonatevue_type_style_index_0_id_242d7096_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_impersonatevue_type_style_index_0_id_242d7096_prod_scoped_true_lang_css = (impersonatevue_type_style_index_0_id_242d7096_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/impersonate/index.vue?vue&type=style&index=0&id=242d7096&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=style&index=1&id=242d7096&prod&lang=css
var impersonatevue_type_style_index_1_id_242d7096_prod_lang_css = __webpack_require__(10770);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/impersonate/index.vue?vue&type=style&index=1&id=242d7096&prod&lang=css

            

var impersonatevue_type_style_index_1_id_242d7096_prod_lang_css_options = {};

impersonatevue_type_style_index_1_id_242d7096_prod_lang_css_options.insert = "head";
impersonatevue_type_style_index_1_id_242d7096_prod_lang_css_options.singleton = false;

var impersonatevue_type_style_index_1_id_242d7096_prod_lang_css_update = injectStylesIntoStyleTag_default()(impersonatevue_type_style_index_1_id_242d7096_prod_lang_css/* default */.A, impersonatevue_type_style_index_1_id_242d7096_prod_lang_css_options);



/* harmony default export */ const pages_impersonatevue_type_style_index_1_id_242d7096_prod_lang_css = (impersonatevue_type_style_index_1_id_242d7096_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/impersonate/index.vue?vue&type=style&index=1&id=242d7096&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/impersonate/index.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_impersonatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "242d7096",
  null
  
)

/* harmony default export */ const impersonate = (component.exports);

/***/ })

}]);