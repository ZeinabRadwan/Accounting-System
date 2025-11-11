"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6773],{

/***/ 19154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-centers/show.vue?vue&type=template&id=b6456d06
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'cost-centers.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'cost-centers.edit',
        params: {
          slug: _vm.costCenter.id
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Edit')) + "\n              ")])], 1)])], 1), _vm._v(" "), _vm.costCenter ? _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.code))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.name))])]), _vm._v(" "), _vm.costCenter.name_en ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Name (English)')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.name_en))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Full Path')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.full_path))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Parent')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.parent ? _vm.costCenter.parent.name : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('td', [_c('span', {
    "class": ['badge', _vm.costCenter.is_active ? 'badge-success' : 'badge-danger']
  }, [_vm._v("\n                      " + _vm._s(_vm.costCenter.is_active ? _vm.$t('Active') : _vm.$t('Inactive')) + "\n                    ")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Journal Entry Lines Count')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.journal_entry_lines_count || 0))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Children Count')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.children_count || 0))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Created By')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.creator ? _vm.costCenter.creator.name : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Created At')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.costCenter.created_at))])])])])])]) : _vm._e()])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-centers/show.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const showvue_type_script_lang_js = ({
  name: 'ShowCostCenter',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Cost Center Details')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'cost_centers.show',
      breadcrumbs: [{
        name: 'Dashboard',
        url: '/'
      }, {
        name: 'Cost Centers',
        url: '/cost-centers'
      }, {
        name: 'Details',
        url: ''
      }],
      costCenter: null
    };
  },
  created: function created() {
    this.getCostCenter();
  },
  methods: {
    getCostCenter: function getCostCenter() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$http.get("/api/cost-centers/".concat(_this.$route.params.slug)).then(function (_ref) {
                var data = _ref.data;
                _this.costCenter = data;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});
;// ./resources/js/pages/cost-centers/show.vue?vue&type=script&lang=js
 /* harmony default export */ const cost_centers_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cost-centers/show.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  cost_centers_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);