"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4911],{

/***/ 17286
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".branch-select-page[data-v-b796f180]{margin:0 auto;max-width:1200px;padding:2rem 1.5rem}.page-header[data-v-b796f180]{margin-bottom:2rem}.page-title[data-v-b796f180]{color:#333;font-size:1.75rem;font-weight:600;margin:0}.branches-grid[data-v-b796f180]{display:grid;gap:1.25rem;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}.branch-card[data-v-b796f180]{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:12px;cursor:pointer;display:flex;flex-direction:column;min-height:180px;padding:2rem 1.5rem;position:relative;text-align:center;transition:all .2s ease}.branch-card[data-v-b796f180]:hover{border-color:#33a0d9;box-shadow:0 4px 12px rgba(51,160,217,.15);transform:translateY(-2px)}.branch-card[data-v-b796f180]:focus{outline:2px solid #33a0d9;outline-offset:2px}.branch-card.is-selected[data-v-b796f180]{background:#f0f8ff;border-color:#33a0d9;box-shadow:0 4px 12px rgba(51,160,217,.2)}.branch-card__icon[data-v-b796f180]{align-items:center;background:#f5f5f5;border-radius:16px;color:#666;display:flex;font-size:2.5rem;height:80px;justify-content:center;margin-bottom:1.25rem;transition:all .2s ease;width:80px}.branch-card:hover .branch-card__icon[data-v-b796f180]{background:#e6f4fc;color:#33a0d9;transform:scale(1.05)}.branch-card.is-selected .branch-card__icon[data-v-b796f180]{background:#33a0d9;color:#fff}.branch-card__title[data-v-b796f180]{-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;color:#333;display:-webkit-box;font-size:1.125rem;font-weight:600;line-height:1.4;margin:0 0 .5rem;overflow:hidden;text-overflow:ellipsis}.branch-card.is-selected .branch-card__title[data-v-b796f180]{color:#33a0d9}.branch-card__code[data-v-b796f180]{color:#999;font-size:.875rem;line-height:1.5;margin:0}.branch-card.is-selected .branch-card__code[data-v-b796f180]{color:#33a0d9}.branch-card__check[data-v-b796f180]{align-items:center;background:#33a0d9;border-radius:50%;color:#fff;display:flex;font-size:.875rem;font-weight:600;height:28px;justify-content:center;position:absolute;right:.75rem;top:.75rem;width:28px}.skeleton[data-v-b796f180]{pointer-events:none}.skeleton .branch-card__icon[data-v-b796f180],.skeleton-line[data-v-b796f180]{background:#f5f5f5}.skeleton-line[data-v-b796f180]{border-radius:4px;height:1rem;margin-bottom:.5rem;width:100%}.skeleton-line--short[data-v-b796f180]{margin:0 auto;width:60%}.empty-state[data-v-b796f180]{color:#999;padding:3rem 2rem;text-align:center}.empty-state i[data-v-b796f180]{font-size:3rem;margin-bottom:1rem;opacity:.5}.empty-state p[data-v-b796f180]{font-size:1rem;margin:0}.fade-list-enter-active[data-v-b796f180]{transition:all .3s ease}.fade-list-leave-active[data-v-b796f180]{transition:all .2s ease}.fade-list-enter[data-v-b796f180],.fade-list-leave-to[data-v-b796f180]{opacity:0;transform:translateY(10px)}@media (max-width:768px){.branch-select-page[data-v-b796f180]{padding:1.5rem 1rem}.page-title[data-v-b796f180]{font-size:1.5rem}.branches-grid[data-v-b796f180]{gap:1rem;grid-template-columns:1fr}.branch-card[data-v-b796f180]{min-height:160px;padding:1.5rem 1rem}.branch-card__icon[data-v-b796f180]{font-size:2rem;height:64px;margin-bottom:1rem;width:64px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 54911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ branches_select)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=template&id=b796f180&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "branch-select-page"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v(_vm._s("".concat(_vm.$t('Select'), " ").concat(_vm.$t('Branch'))))])]), _vm._v(" "), _c('transition-group', {
    staticClass: "branches-grid",
    attrs: {
      "name": "fade-list",
      "tag": "div"
    }
  }, _vm._l(_vm.branches, function (branch) {
    var _vm$appInfo;
    return _c('div', {
      key: branch.id,
      staticClass: "branch-card",
      "class": {
        'is-selected': _vm.isSelected(branch)
      },
      attrs: {
        "role": "button",
        "tabindex": "0",
        "aria-label": "".concat(_vm.$t('Select Branch'), ": ").concat(branch.name)
      },
      on: {
        "click": function click($event) {
          return _vm.setDefault(branch);
        },
        "keyup": function keyup($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.setDefault(branch);
        }
      }
    }, [_vm.isSelected(branch) ? _c('div', {
      staticClass: "branch-card__check"
    }, [_c('i', {
      staticClass: "fas fa-check"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "branch-card__icon"
    }, [_c('i', {
      staticClass: "fas fa-building"
    })]), _vm._v(" "), _c('h3', {
      staticClass: "branch-card__title",
      attrs: {
        "title": branch.name
      }
    }, [_vm._v("\n        " + _vm._s(branch.name === 'Main Branch' ? ((_vm$appInfo = _vm.appInfo) === null || _vm$appInfo === void 0 ? void 0 : _vm$appInfo.companyName) || branch.name : branch.name) + "\n      ")]), _vm._v(" "), branch.code ? _c('p', {
      staticClass: "branch-card__code"
    }, [_vm._v(_vm._s(branch.code))]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "branches-grid"
  }, _vm._l(6, function (n) {
    return _c('div', {
      key: n,
      staticClass: "branch-card skeleton"
    }, [_c('div', {
      staticClass: "branch-card__icon"
    }), _vm._v(" "), _c('div', {
      staticClass: "skeleton-line"
    }), _vm._v(" "), _c('div', {
      staticClass: "skeleton-line skeleton-line--short"
    })]);
  }), 0) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.branches.length === 0 ? _c('div', {
    staticClass: "empty-state"
  }, [_c('i', {
    staticClass: "fas fa-building"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('No branches found')))])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=script&lang=js
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


/* harmony default export */ const selectvue_type_script_lang_js = ({
  name: 'SelectBranch',
  middleware: [],
  data: function data() {
    return {
      branches: [],
      loading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    user: function user() {
      return this.$store.getters['auth/user'] || {};
    },
    userId: function userId() {
      var _this$user;
      return (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id;
    },
    selectedBranchId: function selectedBranchId() {
      var _this$user2;
      return Number(((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.default_branch_id) || 0);
    }
  }),
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadBranches();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    loadBranches: function loadBranches() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _this2.loading = true;
              _context2.n = 1;
              return axios_default().get("/api/users/".concat(_this2.userId, "/branches"));
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.branches = Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data.data) || [];

              // Auto-select branch if there's only one branch and no branch is currently selected
              if (!(_this2.branches.length === 1 && _this2.selectedBranchId === 0)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 2;
              return _this2.setDefault(_this2.branches[0]);
            case 2:
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
            case 4:
              _context2.p = 4;
              _this2.loading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3, 4, 5]]);
      }))();
    },
    isSelected: function isSelected(branch) {
      return Number(branch.id) === this.selectedBranchId;
    },
    setDefault: function setDefault(branch) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().post('/api/user-branches/set-default', {
                branch_id: branch.id
              });
            case 1:
              _context3.n = 2;
              return _this3.$store.dispatch('auth/fetchUser');
            case 2:
              _this3.$router.push({
                name: 'home'
              });
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 3]]);
      }))();
    }
  }
});
;// ./resources/js/pages/branches/select.vue?vue&type=script&lang=js
 /* harmony default export */ const branches_selectvue_type_script_lang_js = (selectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css
var selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css = __webpack_require__(17286);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css = (selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/branches/select.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  branches_selectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b796f180",
  null
  
)

/* harmony default export */ const branches_select = (component.exports);

/***/ }

}]);