"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2770],{

/***/ 64279
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-42ba1922]{border:none!important}.account-statement-table[data-v-42ba1922]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-42ba1922]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-42ba1922]{border:none!important}.account-statement-table thead th[data-v-42ba1922]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-42ba1922]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-42ba1922]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-42ba1922]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-42ba1922]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.export-excel-btn[data-v-42ba1922],.export-pdf-btn[data-v-42ba1922],.preview-btn[data-v-42ba1922]{background:#f6fef4!important;border:none;border-radius:10px;color:#2ab930!important}.print-btn[data-v-42ba1922]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.btn-group.c-w-100[data-v-42ba1922]{gap:10px}.card[data-v-42ba1922]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-42ba1922]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-42ba1922]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.btn-primary[data-v-42ba1922]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}@media (max-width:1300px){.info-box[data-v-42ba1922]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 22770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ supplier_payable_report)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/supplier-payable-report.vue?vue&type=template&id=42ba1922&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Supplier Payable Report')))]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6 col-xl-4 mb-2"
  }, [_c('search', {
    on: {
      "reset-pagination": function resetPagination($event) {
        return _vm.resetPagination();
      },
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group btn-group c-w-100"
  }, [_c('button', {
    staticClass: "btn refresh-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  }), _vm._v(" " + _vm._s(_vm.$t('Refresh')) + "\n                        ")]), _vm._v(" "), _vm.reportGenerated ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn export-excel-btn ml-2",
    attrs: {
      "href": _vm.exportUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]) : _vm._e(), _vm._v(" "), _vm.reportGenerated ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Preview PDF'),
      expression: "$t('Preview PDF')"
    }],
    staticClass: "btn preview-btn ml-2",
    on: {
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  })]) : _vm._e(), _vm._v(" "), _vm.reportGenerated ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn ml-2",
    on: {
      "click": _vm.downloadPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]) : _vm._e()])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Supplier Payable Report')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table account-statement-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Supplier ID")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Contact Number")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Company Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Purchase Due")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Non Purchase Due")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total Due")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                                            " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                                        ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(data.supplierID, _vm.clientPrefix)))]), _vm._v(" "), _c('td', [_vm.$can('client-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'suppliers.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_vm._v("\n                                            " + _vm._s(data.name) + "\n                                        ")]) : _c('span', [_vm._v(_vm._s(data.name))])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.phoneNumber))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.companyName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.purchaseTotalDue) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.nonPurchaseCurrentDue) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.purchaseTotalDue + data.nonPurchaseCurrentDue) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "9"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.updatePerPager]
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])])])]), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-tool",
    attrs: {
      "type": "button",
      "data-card-widget": "collapse"
    }
  }, [_c('i', {
    staticClass: "fas fa-minus"
  })])]);
}];

;// ./resources/js/pages/reports/supplier-payable-report.vue?vue&type=template&id=42ba1922&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/supplier-payable-report.vue?vue&type=script&lang=js
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

/* harmony default export */ const supplier_payable_reportvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Supplier Payable Report")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Supplier Payable Report",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Supplier Payable Report",
        url: ""
      }],
      query: "",
      perPage: 10,
      supplierPrefix: "",
      reportGenerated: false
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo"])), {}, {
    exportUrl: function exportUrl() {
      // Create a dynamic export URL with query parameters
      return "/supplier-payable-report/export/excel?term=".concat(this.query);
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for supplier payable report
      var params = new URLSearchParams();

      // Always add token first if available
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      // Add query term if exists
      if (this.query) {
        params.append('term', this.query);
      }
      var queryString = params.toString();
      return "/print/reports/supplier-payable-report".concat(queryString ? '?' + queryString : '');
    }
  }),
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    }
  },
  created: function created() {
    this.getData();
    this.clientPrefix = this.appInfo.clientPrefix;
  },
  methods: {
    // refresh table
    refreshTable: function refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // get data
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var currentPage;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.$store.state.operations.loading = true;
              currentPage = _this.pagination ? _this.pagination.current_page : 1;
              _context.n = 1;
              return _this.$store.dispatch("operations/fetchData", {
                path: "/api/reports/supplier-due-report?page=",
                currentPage: currentPage + "&perPage=" + _this.perPage
              });
            case 1:
              _this.reportGenerated = true;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this2.query === "" ? _this2.getData() : _this2.searchData();
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this3.pagination.current_page = 1;
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var currentPage;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this4.$store.state.operations.loading = true;
              currentPage = _this4.pagination ? _this4.pagination.current_page : 1;
              _context4.n = 1;
              return _this4.$store.dispatch("operations/searchData", {
                path: "/api/suppliers/search",
                term: _this4.query,
                currentPage: currentPage + "&perPage=" + _this4.perPage
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // reload after search
    reload: function reload() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this5.query = "";
              _context5.n = 1;
              return _this5.searchData();
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // print table
    // download PDF
    downloadPDF: function downloadPDF() {
      var params = new URLSearchParams();

      // Always add token first if available
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      // Add query term if exists
      if (this.query) {
        params.append('term', this.query);
      }
      var queryString = params.toString();
      window.location.href = "/print/reports/supplier-payable-report/pdf".concat(queryString ? '?' + queryString : '');
    },
    // preview PDF
    previewPDF: function previewPDF() {
      var params = new URLSearchParams();

      // Always add token first if available
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      // Add query term if exists
      if (this.query) {
        params.append('term', this.query);
      }
      var queryString = params.toString();
      window.location.href = "/print/reports/supplier-payable-report/preview".concat(queryString ? '?' + queryString : '');
    },
    print: function print() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this6.$htmlToPaper("printMe");
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    }
  }
});
;// ./resources/js/pages/reports/supplier-payable-report.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_supplier_payable_reportvue_type_script_lang_js = (supplier_payable_reportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/supplier-payable-report.vue?vue&type=style&index=0&id=42ba1922&prod&scoped=true&lang=css
var supplier_payable_reportvue_type_style_index_0_id_42ba1922_prod_scoped_true_lang_css = __webpack_require__(64279);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/supplier-payable-report.vue?vue&type=style&index=0&id=42ba1922&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(supplier_payable_reportvue_type_style_index_0_id_42ba1922_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_supplier_payable_reportvue_type_style_index_0_id_42ba1922_prod_scoped_true_lang_css = (supplier_payable_reportvue_type_style_index_0_id_42ba1922_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/supplier-payable-report.vue?vue&type=style&index=0&id=42ba1922&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/supplier-payable-report.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_supplier_payable_reportvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "42ba1922",
  null
  
)

/* harmony default export */ const supplier_payable_report = (component.exports);

/***/ }

}]);