"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3653],{

/***/ 53653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vat_report)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=template&id=5c36bd52&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row no-print mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('button', {
    staticClass: "btn btn-link p-0",
    attrs: {
      "type": "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#filtersCollapse",
      "aria-expanded": "true",
      "aria-controls": "filtersCollapse"
    }
  }, [_c('i', {
    staticClass: "fas fa-filter"
  }), _vm._v(" " + _vm._s(_vm.$t("Filters")) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "collapse show",
    attrs: {
      "id": "filtersCollapse"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "fiscal_year_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fiscal Year")))]), _vm._v(" "), _c('v-select', {
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
  }, [_c('label', {
    attrs: {
      "for": "accounting_period_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Accounting Period")))]), _vm._v(" "), _c('v-select', {
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
  }, [_c('label', {
    attrs: {
      "for": "from_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("From Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.fromDate,
      expression: "filters.fromDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('From Date'),
      "disabled": _vm.filters.fiscalYearId || _vm.filters.accountingPeriodId
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "to_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("To Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.toDate,
      expression: "filters.toDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('To Date'),
      "disabled": _vm.filters.fiscalYearId || _vm.filters.accountingPeriodId
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.generateReport
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n                  " + _vm._s(_vm.$t('Generate Report')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  }), _vm._v("\n                  " + _vm._s(_vm.$t('Clear')) + "\n                ")])])])])])])])]), _vm._v(" "), _vm.reportData ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('VAT Report')))]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-tool",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.printReport
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn btn-tool",
    attrs: {
      "href": _vm.exportExcelUrl
    }
  }, [_c('i', {
    staticClass: "fas fa-file-excel"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn btn-tool",
    attrs: {
      "href": _vm.exportPdfUrl
    }
  }, [_c('i', {
    staticClass: "fas fa-file-pdf"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print with Template'),
      expression: "$t('Print with Template')"
    }],
    staticClass: "btn btn-tool",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.reportData && _vm.reportData.summary && Array.isArray(_vm.reportData.summary) && _vm.reportData.summary.length > 0 ? _c('div', {
    staticClass: "mb-4"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Sales VAT Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('VAT Rate')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Rate %')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Sales')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Sales VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Journal VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Sales VAT')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.reportData.summary, function (summary) {
    return _c('tr', {
      key: 'sales-' + summary.vat_rate_id
    }, [_c('td', [_c('strong', [_vm._v(_vm._s(summary.vat_rate_name))]), _c('br'), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(summary.vat_rate_code))])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(summary.vat_rate_percentage) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.calculateAmountBeforeVat(summary.sales_vat, summary.vat_rate_percentage))))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(summary.sales_vat)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(summary.journal_vat)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      staticClass: "text-success"
    }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(summary.sales_vat + summary.journal_vat)) + "\n                  ")])])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "table-success"
  }, [_c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalSalesAmount)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalSalesVat)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalJournalVat)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_c('span', {
    staticClass: "text-success"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalSalesVat + _vm.totalJournalVat)) + "\n                  ")])])])])])])]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary && Array.isArray(_vm.reportData.summary) && _vm.reportData.summary.length > 0 ? _c('div', {
    staticClass: "mb-4"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Purchase VAT Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('VAT Rate')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Rate %')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Purchases')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Purchase VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Journal VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Purchase VAT')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.reportData.summary, function (summary) {
    return _c('tr', {
      key: 'purchase-' + summary.vat_rate_id
    }, [_c('td', [_c('strong', [_vm._v(_vm._s(summary.vat_rate_name))]), _c('br'), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(summary.vat_rate_code))])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(summary.vat_rate_percentage) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.calculateAmountBeforeVat(summary.purchase_vat, summary.vat_rate_percentage))))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(summary.purchase_vat)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(summary.journal_vat)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      staticClass: "text-danger"
    }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(summary.purchase_vat + summary.journal_vat)) + "\n                  ")])])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "table-danger"
  }, [_c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalPurchaseAmount)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalPurchaseVat)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalJournalVat)))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.totalPurchaseVat + _vm.totalJournalVat)) + "\n                  ")])])])])])])]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.transactions && _vm.reportData.transactions.length > 0 ? _c('div', [_c('h5', [_vm._v(_vm._s(_vm.$t('VAT Transactions')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Client/Supplier')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Source')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT Amount')))])])]), _vm._v(" "), _c('tbody', [_vm.loadingTransactions ? _c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "6"
    }
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading transactions...')) + "\n                ")])]) : !_vm.loadingTransactions && _vm.transactionsCount === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('No transactions found for the selected criteria')) + "\n                ")])]) : !_vm.loadingTransactions ? _vm._l(_vm.safeTransactions, function (transaction, index) {
    return _c('tr', {
      key: "".concat(transaction.reference, "-").concat(transaction.date, "-").concat(transaction.type, "-").concat(index)
    }, [_c('td', [_vm._v(_vm._s(_vm.formatDate(transaction.date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(transaction.reference))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(transaction.client_supplier))]), _vm._v(" "), _c('td', [_c('span', {
      "class": transaction.type === 'Sales' ? 'badge badge-success' : 'badge badge-info'
    }, [_vm._v("\n                      " + _vm._s(transaction.type) + "\n                    ")])]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "badge badge-secondary"
    }, [_vm._v(_vm._s(transaction.source))])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(transaction.vat_amount)))])]);
  }) : _vm._e()], 2)])]), _vm._v(" "), _vm.totalPages > 1 ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mt-3"
  }, [_c('div', {
    staticClass: "dataTables_info"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Showing')) + " " + _vm._s((_vm.currentPage - 1) * _vm.pageSize + 1) + " \n            " + _vm._s(_vm.$t('to')) + " " + _vm._s(Math.min(_vm.currentPage * _vm.pageSize, _vm.totalTransactions)) + " \n            " + _vm._s(_vm.$t('of')) + " " + _vm._s(_vm.totalTransactions) + " " + _vm._s(_vm.$t('transactions')) + "\n          ")]), _vm._v(" "), _c('nav', [_c('ul', {
    staticClass: "pagination pagination-sm mb-0"
  }, [_c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage <= 1
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.currentPage <= 1
    },
    on: {
      "click": function click($event) {
        return _vm.goToPage(1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-double-left"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage <= 1
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.currentPage <= 1
    },
    on: {
      "click": function click($event) {
        return _vm.goToPage(_vm.currentPage - 1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-left"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage >= _vm.totalPages
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.currentPage >= _vm.totalPages
    },
    on: {
      "click": function click($event) {
        return _vm.goToPage(_vm.currentPage + 1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-right"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage >= _vm.totalPages
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.currentPage >= _vm.totalPages
    },
    on: {
      "click": function click($event) {
        return _vm.goToPage(_vm.totalPages);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-double-right"
  })])])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.reportData || !_vm.reportData.summary && _vm.transactionsCount === 0 ? _c('div', {
    staticClass: "text-center py-4"
  }, [_c('i', {
    staticClass: "fas fa-info-circle fa-3x text-muted mb-3"
  }), _vm._v(" "), _c('h5', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('No VAT data found')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Try adjusting your filters or date range')))])]) : _vm._e()])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const vat_reportvue_type_script_lang_js = ({
  name: "VatReport",
  data: function data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingTransactions: false,
      reportData: null,
      allTransactions: [],
      // Store all loaded transactions
      errors: {},
      // Breadcrumbs
      breadcrumbs: [{
        name: 'Dashboard',
        url: '/'
      }, {
        name: 'Reports',
        url: '/reports'
      }],
      breadcrumbsCurrent: 'VAT Report',
      // Filters
      filters: {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null
      },
      // Options
      fiscalYears: [],
      accountingPeriods: [],
      // Pagination
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
      totalTransactions: 0
    };
  },
  computed: {
    // Safe access to transactions with fallback
    safeTransactions: function safeTransactions() {
      var _this$reportData;
      return ((_this$reportData = this.reportData) === null || _this$reportData === void 0 ? void 0 : _this$reportData.transactions) || [];
    },
    // Safe access to transactions count
    transactionsCount: function transactionsCount() {
      return this.safeTransactions.length;
    },
    // Calculate visible pages for pagination
    visiblePages: function visiblePages() {
      var pages = [];
      var startPage = Math.max(1, this.currentPage - 2);
      var endPage = Math.min(this.totalPages, this.currentPage + 2);
      for (var i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
    totalSalesVat: function totalSalesVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + item.sales_vat;
      }, 0);
    },
    totalPurchaseVat: function totalPurchaseVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + item.purchase_vat;
      }, 0);
    },
    totalJournalVat: function totalJournalVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + item.journal_vat;
      }, 0);
    },
    totalNetVat: function totalNetVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + item.net_vat;
      }, 0);
    },
    // Calculate total sales amount (before VAT)
    totalSalesAmount: function totalSalesAmount() {
      var _this = this;
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + _this.calculateAmountBeforeVat(item.sales_vat, item.vat_rate_percentage);
      }, 0);
    },
    // Calculate total purchase amount (before VAT)
    totalPurchaseAmount: function totalPurchaseAmount() {
      var _this2 = this;
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce(function (sum, item) {
        return sum + _this2.calculateAmountBeforeVat(item.purchase_vat, item.vat_rate_percentage);
      }, 0);
    },
    // Export URLs
    exportExcelUrl: function exportExcelUrl() {
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
      return "/vat-report/export?".concat(params.toString());
    },
    exportPdfUrl: function exportPdfUrl() {
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
      return "/vat-report/pdf?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for VAT report with current filters
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
      return "/print/reports/vat-report?".concat(params.toString());
    }
  },
  mounted: function mounted() {
    this.loadInitialData();
  },
  watch: {
    'filters.fiscalYearId': function filtersFiscalYearId(newValue) {
      if (newValue) {
        this.filters.accountingPeriodId = null;
        this.loadAccountingPeriods();
      } else {
        this.accountingPeriods = [];
      }
    }
  },
  methods: {
    loadInitialData: function loadInitialData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.all([_this3.loadFiscalYears()]);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var search, _yield$axios$get, data, _error$response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this4.loadingFiscalYears = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios_default().get("/api/fiscal-years?search=".concat(search));
            case 2:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this4.fiscalYears = data.data;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              _this4.$toast.error('', ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this4.$t("Failed to load fiscal years"));
            case 4:
              _context2.p = 4;
              _this4.loadingFiscalYears = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this5.loadFiscalYears(search);
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var search, _yield$axios$get2, data, _error$response2, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              if (_this6.filters.fiscalYearId) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this6.loadingAccountingPeriods = true;
              _context4.p = 2;
              _context4.n = 3;
              return axios_default().get("/api/accounting-periods?fiscal_year_id=".concat(_this6.filters.fiscalYearId, "&search=").concat(search));
            case 3:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this6.accountingPeriods = data.data;
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t2 = _context4.v;
              _this6.$toast.error('', ((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this6.$t("Failed to load accounting periods"));
            case 5:
              _context4.p = 5;
              _this6.loadingAccountingPeriods = false;
              return _context4.f(5);
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 4, 5, 6]]);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this7.loadAccountingPeriods(search);
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    onFiscalYearChange: function onFiscalYearChange() {
      this.filters.accountingPeriodId = null;
      this.accountingPeriods = [];
      if (this.filters.fiscalYearId) {
        this.loadAccountingPeriods();
      }
    },
    onAccountingPeriodChange: function onAccountingPeriodChange() {
      // Reset date filters when accounting period is selected
      if (this.filters.accountingPeriodId) {
        this.filters.fromDate = null;
        this.filters.toDate = null;
      }
    },
    generateReport: function generateReport() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _error$response3, _t3;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _this8.loading = true;
              _this8.loadingTransactions = false; // Reset this to false initially
              _this8.errors = {};
              _this8.currentPage = 1;
              _context6.p = 1;
              _context6.n = 2;
              return _this8.loadPage(1);
            case 2:
              _this8.$toast.success('', _this8.$t("VAT report generated successfully"));
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t3 = _context6.v;
              console.error('VAT Report Error:', _t3);
              if (_t3.response && _t3.response.data && _t3.response.data.errors) {
                _this8.errors = _t3.response.data.errors;
              }
              _this8.$toast.error('', ((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this8.$t("Failed to generate VAT report"));
            case 4:
              _context6.p = 4;
              _this8.loading = false;
              _this8.loadingTransactions = false;
              return _context6.f(4);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadPage: function loadPage(page) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var params, response, data, _t4;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!_this9.loadingTransactions) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this9.loadingTransactions = true;
              _context7.p = 2;
              params = new URLSearchParams();
              params.append('page', page);
              params.append('per_page', _this9.pageSize);
              if (_this9.filters.fiscalYearId) {
                params.append('fiscal_year_id', _this9.filters.fiscalYearId);
              }
              if (_this9.filters.accountingPeriodId) {
                params.append('accounting_period_id', _this9.filters.accountingPeriodId);
              }
              if (_this9.filters.fromDate) {
                params.append('from_date', _this9.filters.fromDate);
              }
              if (_this9.filters.toDate) {
                params.append('to_date', _this9.filters.toDate);
              }
              _context7.n = 3;
              return axios_default().post("/api/reports/vat-report?".concat(params.toString()));
            case 3:
              response = _context7.v;
              if (!(response.data && response.data.success === true)) {
                _context7.n = 4;
                break;
              }
              data = response.data.data; // Store summary and VAT rates info on first page
              if (page === 1) {
                _this9.reportData = {
                  filters: data.filters,
                  vat_rates: data.vat_rates,
                  summary: data.summary,
                  transactions: data.transactions
                };
              } else {
                // Update transactions for subsequent pages
                if (_this9.reportData) {
                  _this9.reportData.transactions = data.transactions;
                }
              }

              // Update pagination info
              if (data.pagination) {
                _this9.currentPage = data.pagination.current_page;
                _this9.totalPages = data.pagination.total_pages;
                _this9.totalTransactions = data.pagination.total_count;
              }
              _context7.n = 6;
              break;
            case 4:
              if (!(response.data && response.data.error)) {
                _context7.n = 5;
                break;
              }
              throw new Error(response.data.message || _this9.$t('Failed to load page'));
            case 5:
              throw new Error(_this9.$t('Failed to load page'));
            case 6:
              _context7.n = 8;
              break;
            case 7:
              _context7.p = 7;
              _t4 = _context7.v;
              console.error("Page ".concat(page, " failed:"), _t4);
              _this9.$toast.error('', _t4.message || _this9.$t('Failed to load page'));
              throw _t4;
            case 8:
              _context7.p = 8;
              _this9.loadingTransactions = false;
              return _context7.f(8);
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 7, 8, 9]]);
      }))();
    },
    goToPage: function goToPage(page) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(page < 1 || page > _this0.totalPages || page === _this0.currentPage)) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _context8.n = 2;
              return _this0.loadPage(page);
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    clearFilters: function clearFilters() {
      this.filters = {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null
      };
      this.reportData = null;
      this.errors = {};
      this.accountingPeriods = [];
      this.currentPage = 1;
      this.totalPages = 0;
      this.totalTransactions = 0;
    },
    // Safe calculation for amount before VAT
    calculateAmountBeforeVat: function calculateAmountBeforeVat(vatAmount, vatRatePercentage) {
      var vatAmountNum = parseFloat(vatAmount || 0);
      var vatRate = parseFloat(vatRatePercentage || 0);

      // Handle edge cases
      if (vatAmountNum === 0) return 0;
      if (vatRate === 0) return vatAmountNum; // If no VAT rate, return the amount as-is
      if (isNaN(vatAmountNum) || isNaN(vatRate)) return 0;
      var result = vatAmountNum / (vatRate / 100);
      return isNaN(result) ? 0 : result;
    },
    formatDate: function formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    printReport: function printReport() {
      window.print();
    }
  }
});
;// ./resources/js/pages/reports/vat-report.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_vat_reportvue_type_script_lang_js = (vat_reportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=5c36bd52&prod&scoped=true&lang=css
var vat_reportvue_type_style_index_0_id_5c36bd52_prod_scoped_true_lang_css = __webpack_require__(96724);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=5c36bd52&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(vat_reportvue_type_style_index_0_id_5c36bd52_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_vat_reportvue_type_style_index_0_id_5c36bd52_prod_scoped_true_lang_css = (vat_reportvue_type_style_index_0_id_5c36bd52_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=5c36bd52&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/vat-report.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_vat_reportvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5c36bd52",
  null
  
)

/* harmony default export */ const vat_report = (component.exports);

/***/ }),

/***/ 96724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table th[data-v-5c36bd52]{background-color:#f8f9fa;font-weight:600}.badge[data-v-5c36bd52]{font-size:.75em}.text-success[data-v-5c36bd52]{color:#28a745!important}.text-danger[data-v-5c36bd52]{color:#dc3545!important}@media print{.btn[data-v-5c36bd52],.card-tools[data-v-5c36bd52]{display:none!important}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);