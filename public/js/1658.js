"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1658],{

/***/ 1658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ balance_sheet)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=template&id=afeab23e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    staticClass: "row",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.generateReport.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Fiscal Year')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.fiscalYears,
      "reduce": function reduce(year) {
        return year.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Fiscal Year'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingFiscalYears
    },
    on: {
      "search": _vm.searchFiscalYears,
      "input": _vm.onFiscalYearChange
    },
    model: {
      value: _vm.filters.fiscalYearId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "fiscalYearId", $$v);
      },
      expression: "filters.fiscalYearId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Accounting Period')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.accountingPeriods,
      "reduce": function reduce(period) {
        return period.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Accounting Period'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingAccountingPeriods,
      "disabled": !_vm.filters.fiscalYearId
    },
    on: {
      "search": _vm.searchAccountingPeriods,
      "input": _vm.onAccountingPeriodChange
    },
    model: {
      value: _vm.filters.accountingPeriodId,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "accountingPeriodId", $$v);
      },
      expression: "filters.accountingPeriodId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Date Range')))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.fromDate,
      expression: "filters.fromDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('From Date')
    },
    domProps: {
      "value": _vm.filters.fromDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "fromDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.$t('to')))])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.toDate,
      expression: "filters.toDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('To Date')
    },
    domProps: {
      "value": _vm.filters.toDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "toDate", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group btn-group c-w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n              " + _vm._s(_vm.$t('Generate Report')) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n              " + _vm._s(_vm.$t('Reset')) + "\n            ")]), _vm._v(" "), _vm.balanceData ? _c('a', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.balanceData ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn ml-2",
    attrs: {
      "href": "/reports/balance-sheet/pdf"
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]) : _vm._e(), _vm._v(" "), _vm.balanceData ? _c('a', {
    staticClass: "btn print-btn ml-2 print-template-btn",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print mr-1"
  })]) : _vm._e()])])])])]), _vm._v(" "), _vm.balanceData ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Balance Sheet')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_vm.balanceData && _vm.balanceData.filters ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12 text-center"
  }, [_c('h6', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Period')) + ": " + _vm._s(_vm.dateRangeDisplayName))])])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fas fa-2x fa-sync-alt fa-spin"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table account-statement-table"
  }, [_c('thead', [_c('tr', {
    staticClass: "text-center"
  }, [_c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Assets')))])]), _vm._v(" "), _c('th', {
    staticClass: "red",
    attrs: {
      "colspan": "2"
    }
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Liabilities & Equity')))])])])]), _vm._v(" "), _vm.balanceData && _vm.balanceData.accounts && _vm.balanceData.totals ? _c('tbody', [_vm._l(_vm.balanceData.accounts.assets, function (account) {
    return _c('tr', {
      key: 'asset-' + account.id
    }, [_c('th', [_vm._v(_vm._s(account.name) + " (" + _vm._s(account.code) + ")")]), _vm._v(" "), _c('th', {
      staticClass: "text-right"
    }, [account.balance_type === 'Debit' ? _c('span', {
      staticClass: "text-success"
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    })]) : _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("\n                  (\n                    "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    }), _vm._v("\n                  )\n                ")])]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th')]);
  }), _vm._v(" "), _vm._l(_vm.balanceData.accounts.liabilities, function (account) {
    return _c('tr', {
      key: 'liability-' + account.id
    }, [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(account.name) + " (" + _vm._s(account.code) + ")")]), _vm._v(" "), _c('th', {
      staticClass: "text-right"
    }, [account.balance_type === 'Credit' ? _c('span', {
      staticClass: "text-danger"
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    })]) : _c('span', {
      staticClass: "text-success"
    }, [_vm._v("\n                  (\n                    "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    }), _vm._v("\n                  )\n                ")])])]);
  }), _vm._v(" "), _vm._l(_vm.balanceData.accounts.equity, function (account) {
    return _c('tr', {
      key: 'equity-' + account.id
    }, [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(account.name) + " (" + _vm._s(account.code) + ")")]), _vm._v(" "), _c('th', {
      staticClass: "text-right"
    }, [account.balance_type === 'Credit' ? _c('span', {
      staticClass: "text-danger"
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    })]) : _c('span', {
      staticClass: "text-success"
    }, [_vm._v("\n                  (\n                    "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(account.absolute_balance | _vm.withAbsoluteCurrency)
      }
    }), _vm._v("\n                  )\n                ")])])]);
  }), _vm._v(" "), _vm.balanceData.totals.net_income !== 0 ? _c('tr', [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Net Income')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm.balanceData.totals.net_income > 0 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.net_income | _vm.withAbsoluteCurrency)
    }
  })]) : _c('span', {
    staticClass: "text-success"
  }, [_vm._v("\n                  (\n                    "), _c('span', {
    domProps: {
      "innerHTML": _vm._s(Math.abs(_vm.balanceData.totals.net_income) | _vm.withAbsoluteCurrency)
    }
  }), _vm._v("\n                  )\n                ")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "text-right font-weight-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t('Total Assets')))]), _vm._v(" "), _c('th', {
    staticClass: "text-success"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_assets | _vm.withAbsoluteCurrency)
    }
  })]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Liabilities & Equity')))]), _vm._v(" "), _c('th', {
    staticClass: "text-danger"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_liabilities_and_equity | _vm.withAbsoluteCurrency)
    }
  })])])], 2) : _c('tbody', [_c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "4"
    }
  }, [_c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('No data available. Please generate a report.')))])])])]), _vm._v(" "), _vm.balanceData && _vm.balanceData.totals ? _c('tfoot', [_c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "4"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Balance Sheet Summary')))]), _c('br'), _vm._v(" "), _c('h4', {
    staticClass: "mt-2"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Total Assets')) + ":\n                  "), _vm.balanceData.totals.total_assets > _vm.balanceData.totals.total_liabilities_and_equity ? _c('span', {
    staticClass: "text-success"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_assets | _vm.withAbsoluteCurrency)
    }
  })]) : _vm.balanceData.totals.total_assets < _vm.balanceData.totals.total_liabilities_and_equity ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_assets | _vm.withAbsoluteCurrency)
    }
  })]) : _c('span', {
    staticClass: "text-success"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_assets | _vm.withAbsoluteCurrency)
    }
  })])]), _vm._v(" "), _c('h4', [_vm._v("\n                  " + _vm._s(_vm.$t('Total Liabilities & Equity')) + ":\n                  "), _vm.balanceData.totals.total_liabilities_and_equity > _vm.balanceData.totals.total_assets ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_liabilities_and_equity | _vm.withAbsoluteCurrency)
    }
  })]) : _vm.balanceData.totals.total_liabilities_and_equity < _vm.balanceData.totals.total_assets ? _c('span', {
    staticClass: "text-success"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_liabilities_and_equity | _vm.withAbsoluteCurrency)
    }
  })]) : _c('span', {
    staticClass: "text-success"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.balanceData.totals.total_liabilities_and_equity | _vm.withAbsoluteCurrency)
    }
  })])])])])]) : _vm._e()])])])]) : _vm._e()]);
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

;// ./resources/js/pages/reports/balance-sheet.vue?vue&type=template&id=afeab23e&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const balance_sheetvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Balance Sheet")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Balance Sheet",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Reports",
        url: ""
      }, {
        name: "Balance Sheet",
        url: ""
      }],
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      balanceData: null,
      fiscalYears: [],
      accountingPeriods: [],
      filters: {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null
      }
    };
  },
  computed: {
    exportUrl: function exportUrl() {
      // Create a dynamic export URL for balance sheet with current filters
      var params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/reports/balance-sheet/export?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for balance sheet with current filters
      var params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/print/reports/balance-sheet?".concat(params.toString());
    },
    // Moved here to keep a single computed block
    dateRangeDisplayName: function dateRangeDisplayName() {
      if (!this.balanceData || !this.balanceData.filters) {
        return this.$t('All Data');
      }
      var filters = this.balanceData.filters;
      if (filters.fiscal_year_id) {
        // Find the fiscal year name from the loaded fiscal years
        var fiscalYear = this.fiscalYears.find(function (fy) {
          return fy.id === filters.fiscal_year_id;
        });
        return fiscalYear ? fiscalYear.name : this.$t('Fiscal Year');
      } else if (filters.accounting_period_id) {
        // Find the accounting period name from the loaded periods
        var accountingPeriod = this.accountingPeriods.find(function (ap) {
          return ap.id === filters.accounting_period_id;
        });
        return accountingPeriod ? accountingPeriod.name : this.$t('Accounting Period');
      } else if (filters.from_date && filters.to_date) {
        return "".concat(filters.from_date, " - ").concat(filters.to_date);
      } else {
        return this.$t('All Data');
      }
    }
  },
  created: function created() {
    try {
      this.loadFiscalYears();
    } catch (error) {
      console.error("Error in created():", error);
    }
  },
  methods: {
    // Load fiscal years
    loadFiscalYears: function loadFiscalYears() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var search, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this.loadingFiscalYears = true;
              _context.p = 1;
              _context.n = 2;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 2:
              response = _context.v;
              // Handle paginated response
              _this.fiscalYears = response.data.data || response.data;
              console.log("Fiscal Years Response:", _this.fiscalYears);
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Failed to load fiscal years:", _t);
              _this.$toast.error('', _this.$t("Failed to load fiscal years"));
            case 4:
              _context.p = 4;
              _this.loadingFiscalYears = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    // Load accounting periods
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var search, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              if (_this2.filters.fiscalYearId) {
                _context2.n = 1;
                break;
              }
              _this2.accountingPeriods = [];
              return _context2.a(2);
            case 1:
              _this2.loadingAccountingPeriods = true;
              _context2.p = 2;
              _context2.n = 3;
              return axios_default().get("/api/accounting-periods/by-fiscal-year/".concat(_this2.filters.fiscalYearId), {
                params: {
                  search: search,
                  perPage: 1000 // Increased to get all periods for the year
                }
              });
            case 3:
              response = _context2.v;
              // Handle response - the API returns data directly, not paginated
              _this2.accountingPeriods = response.data.data || response.data;
              console.log("Accounting Periods Response:", _this2.accountingPeriods);
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error("Failed to load accounting periods:", _t2);
              _this2.$toast.error('', _this2.$t("Failed to load accounting periods"));
            case 5:
              _context2.p = 5;
              _this2.loadingAccountingPeriods = false;
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Search fiscal years
    searchFiscalYears: function searchFiscalYears(search) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this3.loadFiscalYears(search);
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Search accounting periods
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this4.loadAccountingPeriods(search);
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Handle fiscal year change
    onFiscalYearChange: function onFiscalYearChange() {
      this.filters.accountingPeriodId = null;
      this.filters.fromDate = null;
      this.filters.toDate = null;

      // Load all accounting periods for the selected fiscal year
      if (this.filters.fiscalYearId) {
        this.loadAccountingPeriods();
      } else {
        this.accountingPeriods = [];
      }
    },
    // Handle accounting period change
    onAccountingPeriodChange: function onAccountingPeriodChange() {
      var _this5 = this;
      // Clear date filters when accounting period changes
      this.filters.fromDate = null;
      this.filters.toDate = null;

      // If an accounting period is selected, update the date range
      if (this.filters.accountingPeriodId) {
        var selectedPeriod = this.accountingPeriods.find(function (period) {
          return period.id === _this5.filters.accountingPeriodId;
        });
        if (selectedPeriod) {
          this.filters.fromDate = selectedPeriod.start_date;
          this.filters.toDate = selectedPeriod.end_date;
        }
      }
    },
    // Generate balance sheet report
    generateReport: function generateReport() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var params, _yield$axios$get, data, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this6.loading = true;
              _context5.p = 1;
              params = new URLSearchParams();
              if (_this6.filters.fiscalYearId) {
                params.append('fiscal_year_id', _this6.filters.fiscalYearId);
              }
              if (_this6.filters.accountingPeriodId) {
                params.append('accounting_period_id', _this6.filters.accountingPeriodId);
              }
              if (_this6.filters.fromDate) {
                params.append('from_date', _this6.filters.fromDate);
              }
              if (_this6.filters.toDate) {
                params.append('to_date', _this6.filters.toDate);
              }
              _context5.n = 2;
              return axios_default().get(window.location.origin + "/api/reports/balance-sheet?" + params.toString());
            case 2:
              _yield$axios$get = _context5.v;
              data = _yield$axios$get.data;
              if (data.success) {
                _this6.balanceData = data.data;
              } else {
                _this6.$toast.error('', data.message || _this6.$t("Failed to generate balance sheet"));
              }
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t3 = _context5.v;
              console.error("Error generating balance sheet:", _t3);
              _this6.$toast.error('', _this6.$t("Failed to generate balance sheet"));
            case 4:
              _context5.p = 4;
              _this6.loading = false;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    // Reset filters
    resetFilters: function resetFilters() {
      this.filters = {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null
      };
      this.accountingPeriods = [];
      this.balanceData = null;
    },
    // Format date
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      return date.toLocaleDateString();
    } // Printing handled via server-rendered templates (see printTemplateUrl)
  }
});
;// ./resources/js/pages/reports/balance-sheet.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_balance_sheetvue_type_script_lang_js = (balance_sheetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=afeab23e&prod&scoped=true&lang=css
var balance_sheetvue_type_style_index_0_id_afeab23e_prod_scoped_true_lang_css = __webpack_require__(62317);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=afeab23e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(balance_sheetvue_type_style_index_0_id_afeab23e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_balance_sheetvue_type_style_index_0_id_afeab23e_prod_scoped_true_lang_css = (balance_sheetvue_type_style_index_0_id_afeab23e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=afeab23e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/balance-sheet.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_balance_sheetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "afeab23e",
  null
  
)

/* harmony default export */ const balance_sheet = (component.exports);

/***/ }),

/***/ 62317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-afeab23e]{border:none!important}.account-statement-table[data-v-afeab23e]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-afeab23e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.print-template-btn[data-v-afeab23e]{align-items:center;display:inline-flex}.print-template-label[data-v-afeab23e]{display:inline-block;min-width:140px;text-align:left}.account-statement-table thead tr[data-v-afeab23e]{border:none!important}.account-statement-table thead th[data-v-afeab23e]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-afeab23e]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-afeab23e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-afeab23e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-afeab23e]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-afeab23e],.export-pdf-btn[data-v-afeab23e]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-afeab23e],.export-pdf-btn[data-v-afeab23e],.print-btn[data-v-afeab23e]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-afeab23e]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-afeab23e]{gap:10px}.card[data-v-afeab23e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-afeab23e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-afeab23e]{background-color:rgba(0,0,0,.5);height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-afeab23e],.overlay[data-v-afeab23e]{align-items:center;display:flex}.info-box[data-v-afeab23e]{background:#fff;border:1px solid #dee2e6;border-radius:.25rem;margin-bottom:1rem;padding:1rem}.info-box-icon[data-v-afeab23e]{align-items:center;border-radius:50%;display:flex;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-afeab23e]{flex:1}.info-box-text[data-v-afeab23e]{color:#6c757d;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-afeab23e]{color:#495057;font-size:1.25rem;font-weight:700}.table th[data-v-afeab23e]{border-top:1px solid #dee2e6}.pagination[data-v-afeab23e]{margin-bottom:0}.dataTables_info[data-v-afeab23e]{color:#6c757d;padding-bottom:.75rem;padding-top:.75rem}.dataTables_paginate[data-v-afeab23e]{text-align:right}.btn-primary[data-v-afeab23e]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.red[data-v-afeab23e]{color:#dc3545}.font-weight-bold[data-v-afeab23e]{font-weight:700}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);