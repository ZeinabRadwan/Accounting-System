"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3575],{

/***/ 3575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ summary)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=template&id=f6898b1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row no-print"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.getReportData.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "month"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("Month")) + " ")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.month,
      expression: "form.month"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('month')
    },
    attrs: {
      "id": "month"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "month", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("January")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("February")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("March")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("April")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("May")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("June")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("July")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("August")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("September")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("October")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "11"
    }
  }, [_vm._v("November")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "12"
    }
  }, [_vm._v("December")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "month"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "year"
    }
  }, [_vm._v(_vm._s(_vm.$t("Year")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.year,
      expression: "form.year"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('year')
    },
    attrs: {
      "id": "year"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.years, function (year) {
    return _c('option', {
      key: year,
      domProps: {
        "value": year
      }
    }, [_vm._v("\n                      " + _vm._s(year) + "\n                    ")]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "year"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  }), _vm._v(" " + _vm._s(_vm.$t("View Report")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])], 1)])])])]), _vm._v(" "), _vm.reportInfo ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 invoice p-3 mb-3"
  }, [_c('div', {
    staticClass: "row invoice-info"
  }, [_c('div', {
    staticClass: "m-auto invoice-col"
  }, [_c('CompanyInfo', {
    staticClass: "text-center"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3 position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive col-xl-10 m-auto"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped table-sm"
  }, [_c('thead', [_c('tr', {
    staticClass: "success text-center"
  }, [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('h5', [_vm._v("\n                      " + _vm._s(_vm.$t("Monthly Summary")) + ":\n                      " + _vm._s(_vm.reportInfo.monthName) + ", " + _vm._s(_vm.reportInfo.year)), _c('br')])])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Particulars")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Balance")))])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Balance")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.openingBalances, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(data.current_balance)))])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("\n                      " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalOpeningBalance)) + "\n                    ")])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.$t("Invoice Sales")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.invoiceSales)))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.$t("Invoice Dues")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.invoiceDue)))])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Accounts Collection")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.accountCollections, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(data.total_collection)))])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalCollection)))])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Expenses")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.totalPurchase)))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.expenses)))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payroll")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.payrolls)))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Loan Interest")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.loanInterest)))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Asset Depreciation")))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.reportInfo.assetDepriciation)) + "\n                  ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalExpense)))])])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transfer")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.balanceTransfers, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm.$t("Balance Transfer From")) + " [" + _vm._s(data.debit_transaction.cashbook_account.account_number) + "] " + _vm._s(_vm.$t("To")) + " [" + _vm._s(data.credit_transaction.cashbook_account.account_number) + "]\n                  ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(data.amount)))])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalTransfer)))])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Closing Balance")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.closingBalances, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(data.current_balance)))])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalClosingBalance)))])])])], 2)])])], 1), _vm._v(" "), _c('div', {
    staticClass: "row no-print mt-5"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('router-link', {
    staticClass: "btn btn-dark float-right",
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.printWindow
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.$t("Print")))])], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const summaryvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Summary Report")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Summary Report",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Reports",
        url: ""
      }, {
        name: "Summary Report",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        currentYear: new Date().getFullYear()
      }),
      reportInfo: "",
      totalOpeningBalance: 0,
      totalClosingBalance: 0,
      totalCollection: 0,
      totalExpense: 0,
      totalTransfer: 0,
      loading: false
    };
  },
  computed: {
    years: function years() {
      return Array.from({
        length: this.form.currentYear - 2020
      }, function (value, index) {
        return 2021 + index;
      });
    }
  },
  methods: {
    // submit form
    getReportData: function getReportData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.loading = true;
              _context.n = 1;
              return _this.form.post(window.location.origin + "/api/reports/summery").then(function (response) {
                _this.reportInfo = response.data;
                _this.calculateSum(_this.reportInfo);
                _this.loading = false;
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this.$t("There was something wrong.")
                });
              });
            case 1:
              _this.form.currentYear = new Date().getFullYear();
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // calculate sum
    calculateSum: function calculateSum(allData) {
      var _ref = [0, 0, 0, 0, 0];
      this.totalOpeningBalance = _ref[0];
      this.totalClosingBalance = _ref[1];
      this.totalCollection = _ref[2];
      this.totalExpense = _ref[3];
      this.totalTransfer = _ref[4];
      this.totalOpeningBalance = allData.openingBalances.reduce(function (accumulator, current) {
        return Number(accumulator) + Number(current.current_balance);
      }, 0);
      this.totalClosingBalance = allData.closingBalances.reduce(function (accumulator, current) {
        return Number(accumulator) + Number(current.current_balance);
      }, 0);
      this.totalCollection = allData.accountCollections.reduce(function (accumulator, current) {
        return Number(accumulator) + Number(current.total_collection);
      }, 0);
      this.totalExpense = allData.expenses + allData.payrolls + allData.loanInterest + allData.assetDepriciation;
      this.totalTransfer = allData.balanceTransfers.reduce(function (accumulator, current) {
        return Number(accumulator) + Number(current.amount);
      }, 0);
      return;
    },
    // print
    printWindow: function printWindow() {
      window.print();
    }
  }
});
;// ./resources/js/pages/reports/summary.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_summaryvue_type_script_lang_js = (summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/summary.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  reports_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const summary = (component.exports);

/***/ })

}]);