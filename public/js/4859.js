"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4859],{

/***/ 19747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".branch-select-page[data-v-d495be0c]{animation:fadeIn-d495be0c .3s ease}.page-title[data-v-d495be0c]{font-weight:700}.page-subtitle[data-v-d495be0c]{font-size:.95rem}.branch-card[data-v-d495be0c]{background:#fff;border:1px solid #e9ecef;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.06);cursor:pointer;min-height:160px;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}.branch-card[data-v-d495be0c]:hover{box-shadow:0 16px 40px rgba(0,0,0,.1);transform:translateY(-4px)}.branch-card__body[data-v-d495be0c]{align-items:center;display:flex;padding:28px 24px 18px;position:relative}.branch-card__icon[data-v-d495be0c]{align-items:center;border-radius:10px;display:flex;font-size:22px;height:64px;justify-content:center;margin-left:10px;margin-right:10px;width:64px}.tone-blue .branch-card__icon[data-v-d495be0c]{background:#33a0d91a;color:#33a0d9}.tone-green .branch-card__icon[data-v-d495be0c]{background:#2ab9301a;color:#2ab930}.tone-teal .branch-card__icon[data-v-d495be0c]{background:#449eae1a;color:#449eae}.tone-navy .branch-card__icon[data-v-d495be0c]{background:#152a4a1a;color:#152a4a}.branch-card__content[data-v-d495be0c]{flex:1;min-width:0}.branch-card__title[data-v-d495be0c]{color:#023033;font-size:1.2rem;font-weight:700;margin-bottom:4px}.branch-card__meta[data-v-d495be0c]{font-size:1rem}.branch-card__badge[data-v-d495be0c]{align-items:center;background:#f6fef4;border:1px solid #d7f2d9;border-radius:999px;color:#2ab930;display:inline-flex;font-size:.75rem;font-weight:600;gap:6px;padding:6px 10px;position:absolute;right:12px;top:12px}.branch-card__footer[data-v-d495be0c]{align-items:center;background:#f8fafc;border-top:1px solid #edf2f7;color:#334155;display:flex;font-weight:600;justify-content:space-between;padding:16px 18px}.skeleton[data-v-d495be0c]{animation:shimmer-d495be0c 1.2s ease infinite;background:linear-gradient(90deg,#f2f4f7 25%,#e9edf2 37%,#f2f4f7 63%);background-size:400% 100%;overflow:hidden;position:relative}.fade-list-enter-active[data-v-d495be0c]{transition:all .25s ease}.fade-list-leave-active[data-v-d495be0c]{transition:all .2s ease}.fade-list-enter[data-v-d495be0c],.fade-list-leave-to[data-v-d495be0c]{opacity:0;transform:translateY(8px)}@keyframes shimmer-d495be0c{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes fadeIn-d495be0c{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 74859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ branches_select)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=template&id=d495be0c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container py-4 branch-select-page"
  }, [_c('div', {
    staticClass: "page-head d-flex align-items-center justify-content-between mb-4"
  }, [_c('div', [_c('h2', {
    staticClass: "page-title mb-1"
  }, [_vm._v(_vm._s("".concat(_vm.$t('Select'), " ").concat(_vm.$t('Branch'))))])])]), _vm._v(" "), _c('transition-group', {
    staticClass: "row",
    attrs: {
      "name": "fade-list",
      "tag": "div"
    }
  }, _vm._l(_vm.branches, function (branch, idx) {
    return _c('div', {
      key: branch.id,
      staticClass: "col-xl-4 col-lg-6 col-md-6 mb-4"
    }, [_c('div', {
      staticClass: "branch-card h-100",
      "class": _vm.cardTone(idx),
      attrs: {
        "role": "button",
        "aria-label": "".concat(_vm.$t('Select Branch'), ": ").concat(branch.name)
      },
      on: {
        "click": function click($event) {
          return _vm.setDefault(branch);
        }
      }
    }, [_c('div', {
      staticClass: "branch-card__body"
    }, [_c('div', {
      staticClass: "branch-card__icon"
    }, [_c('i', {
      staticClass: "fas fa-code-branch"
    })]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__content"
    }, [_c('div', {
      staticClass: "branch-card__title text-truncate",
      attrs: {
        "title": branch.name
      }
    }, [_vm._v(_vm._s(branch.name))]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__meta text-muted"
    }, [_vm._v(_vm._s(branch.code || _vm.$t('Branch')))])]), _vm._v(" "), _vm.isSelected(branch) ? _c('div', {
      staticClass: "branch-card__badge"
    }, [_c('i', {
      staticClass: "fas fa-check"
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('Selected')))])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__footer"
    }, [_c('span', [_vm._v(_vm._s(_vm.isSelected(branch) ? _vm.$t('Selected') : _vm.$t('Select')))]), _vm._v(" "), _c('i', {
      staticClass: "fas fa-arrow-right"
    })])])]);
  }), 0), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row"
  }, _vm._l(6, function (n) {
    return _c('div', {
      key: n,
      staticClass: "col-xl-3 col-lg-4 col-md-6 mb-3"
    }, [_vm._m(0, true)]);
  }), 0) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.branches.length === 0 ? _c('div', {
    staticClass: "text-center text-muted py-5"
  }, [_vm._v("\n    " + _vm._s(_vm.$t('no_data_found')) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "branch-card skeleton h-100"
  }, [_c('div', {
    staticClass: "branch-card__body"
  }), _vm._v(" "), _c('div', {
    staticClass: "branch-card__footer"
  })]);
}];

;// ./resources/js/pages/branches/select.vue?vue&type=template&id=d495be0c&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const selectvue_type_script_lang_js = ({
  name: 'SelectBranch',
  middleware: [],
  data: function data() {
    return {
      branches: [],
      loading: false
    };
  },
  computed: {
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
  },
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
    cardTone: function cardTone(idx) {
      var tones = ['tone-blue', 'tone-green', 'tone-teal', 'tone-navy'];
      return tones[idx % tones.length];
    },
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
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
            case 3:
              _context2.p = 3;
              _this2.loading = false;
              return _context2.f(3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2, 3, 4]]);
      }))();
    },
    isSelected: function isSelected(branch) {
      return Number(branch.id) === this.selectedBranchId;
    },
    setDefault: function setDefault(branch) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var intended, _t2;
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
              intended = _this3.$route.query.redirect || {
                name: 'home'
              };
              _this3.$router.push(intended);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=d495be0c&prod&scoped=true&lang=css
var selectvue_type_style_index_0_id_d495be0c_prod_scoped_true_lang_css = __webpack_require__(19747);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=d495be0c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(selectvue_type_style_index_0_id_d495be0c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_selectvue_type_style_index_0_id_d495be0c_prod_scoped_true_lang_css = (selectvue_type_style_index_0_id_d495be0c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=d495be0c&prod&scoped=true&lang=css

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
  "d495be0c",
  null
  
)

/* harmony default export */ const branches_select = (component.exports);

/***/ })

}]);