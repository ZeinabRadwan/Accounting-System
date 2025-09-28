"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[722],{

/***/ 30722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ today_report)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/today-report.vue?vue&type=template&id=16b31351&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("Todays Report")) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
    }],
    staticClass: "btn btn-success refresh-btn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn export-excel-btn",
    attrs: {
      "href": _vm.exportUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn",
    attrs: {
      "href": "/reports/today-report/pdf"
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]), _vm._v(" "), _vm.reportInfo ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print with Template'),
      expression: "$t('Print with Template')"
    }],
    staticClass: "btn print-btn",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]) : _vm._e()])])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "box box-solid"
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Opening Stock")) + " "), _c('br'), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("By purchase price")))]), _vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.openingStockByPurchasePrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Opening Stock")) + " "), _c('br'), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("By sale price")))]), _vm._v(":\n                                                ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.openingStockBySalePrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Purchase")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.totalPurchase) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Expense")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.expenses) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Payroll")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.payrolls) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Loan Interest")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.loanInterest) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Asset Depreciation")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.assetDepriciation) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Sell Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.invoiceDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Sell Return")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.invoiceReturn) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "box box-solid"
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Closing Stock")) + " "), _c('br'), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("By purchase price")))]), _vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.closingStockByPurchasePrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Closing Stock"))), _c('br'), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("By sale price")))]), _vm._v(":\n                                                ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.closingStockBySalePrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Sales")) + ":\n                                                ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.invoiceSales) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Purchase Return")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.purchaseReturn) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Purchase Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.todayPurchaseDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0)])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 ml-2 mt-3"
  }, [_c('div', {
    staticClass: "box box-solid"
  }, [_c('div', {
    staticClass: "box-body"
  }, [_vm.reportInfo.grossProfit >= 0 ? _c('h3', {
    staticClass: "text-success"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("Gross Profit")) + ": " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.grossProfit)) + "\n                                    ")]) : _vm.reportInfo.grossProfit < 0 ? _c('h3', {
    staticClass: "text-danger"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("Gross Loss")) + ": " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.grossProfit)) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _vm.reportInfo.netProfit >= 0 ? _c('h3', {
    staticClass: "text-success"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("Net Profit")) + ": " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.netProfit)) + "\n                                    ")]) : _vm.reportInfo.netProfit < 0 ? _c('h3', {
    staticClass: "text-danger"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("Net Loss")) + ": " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.netProfit)) + "\n                                    ")]) : _vm._e()])])])])])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("\n                                                     \n                                                ")])]);
}];

;// ./resources/js/pages/reports/today-report.vue?vue&type=template&id=16b31351&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/today-report.vue?vue&type=script&lang=js
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


/* harmony default export */ const today_reportvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Today Report")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Today Report",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Today Report",
        url: ""
      }],
      reportInfo: '',
      loading: false
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    exportUrl: function exportUrl() {
      // Create a dynamic export URL for today's report
      return "/reports/today-report/export";
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for today's report
      return "/print/reports/today-report";
    }
  }),
  created: function created() {
    this.getTodayReportData();
  },
  methods: {
    // refresh table
    refreshTable: function refreshTable() {
      this.getTodayReportData();
    },
    // print
    printWindow: function printWindow() {
      window.print();
    },
    // get data
    getTodayReportData: function getTodayReportData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.loading = true;
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/reports/todayReport').then(function (response) {
                _this.reportInfo = response.data;
                _this.loading = false;
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: 'Please check your input and try again. 😔'
                });
                _this.loading = false;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});
;// ./resources/js/pages/reports/today-report.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_today_reportvue_type_script_lang_js = (today_reportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/today-report.vue?vue&type=style&index=0&id=16b31351&prod&scoped=true&lang=css
var today_reportvue_type_style_index_0_id_16b31351_prod_scoped_true_lang_css = __webpack_require__(98652);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/today-report.vue?vue&type=style&index=0&id=16b31351&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(today_reportvue_type_style_index_0_id_16b31351_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_today_reportvue_type_style_index_0_id_16b31351_prod_scoped_true_lang_css = (today_reportvue_type_style_index_0_id_16b31351_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/today-report.vue?vue&type=style&index=0&id=16b31351&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/today-report.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_today_reportvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "16b31351",
  null
  
)

/* harmony default export */ const today_report = (component.exports);

/***/ }),

/***/ 98652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-16b31351]{border:none!important}.refresh-btn[data-v-16b31351]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-16b31351],.export-pdf-btn[data-v-16b31351]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-16b31351],.export-pdf-btn[data-v-16b31351],.print-btn[data-v-16b31351]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-16b31351]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-16b31351]{gap:10px}.card[data-v-16b31351]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-16b31351]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.table-striped td[data-v-16b31351],.table-striped th[data-v-16b31351]{vertical-align:middle}.form-control[data-v-16b31351]{background:#fff!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);