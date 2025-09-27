"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8881],{

/***/ 96922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table th[data-v-fd34e0ea]{background-color:#f8f9fa;font-weight:600}.badge[data-v-fd34e0ea]{font-size:.75em}.text-success[data-v-fd34e0ea]{color:#28a745!important}.text-danger[data-v-fd34e0ea]{color:#dc3545!important}@media print{.btn[data-v-fd34e0ea],.card-tools[data-v-fd34e0ea]{display:none!important}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vat_report)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=template&id=fd34e0ea&scoped=true
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this3.loadFiscalYears()]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var search, _yield$axios$get, data, _error$response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this4.loadingFiscalYears = true;
              _context2.prev = 2;
              _context2.next = 5;
              return axios_default().get("/api/fiscal-years?search=".concat(search));
            case 5:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this4.fiscalYears = data.data;
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              _this4.$toast.error('', ((_error$response = _context2.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this4.$t("Failed to load fiscal years"));
            case 13:
              _context2.prev = 13;
              _this4.loadingFiscalYears = false;
              return _context2.finish(13);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 10, 13, 16]]);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.loadFiscalYears(search);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var search, _yield$axios$get2, data, _error$response2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              if (_this6.filters.fiscalYearId) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");
            case 3:
              _this6.loadingAccountingPeriods = true;
              _context4.prev = 4;
              _context4.next = 7;
              return axios_default().get("/api/accounting-periods?fiscal_year_id=".concat(_this6.filters.fiscalYearId, "&search=").concat(search));
            case 7:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this6.accountingPeriods = data.data;
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](4);
              _this6.$toast.error('', ((_error$response2 = _context4.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this6.$t("Failed to load accounting periods"));
            case 15:
              _context4.prev = 15;
              _this6.loadingAccountingPeriods = false;
              return _context4.finish(15);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[4, 12, 15, 18]]);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this7.loadAccountingPeriods(search);
            case 2:
            case "end":
              return _context5.stop();
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _error$response3;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this8.loading = true;
              _this8.loadingTransactions = false; // Reset this to false initially
              _this8.errors = {};
              _this8.currentPage = 1;
              _context6.prev = 4;
              _context6.next = 7;
              return _this8.loadPage(1);
            case 7:
              _this8.$toast.success('', _this8.$t("VAT report generated successfully"));
              _context6.next = 15;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](4);
              console.error('VAT Report Error:', _context6.t0);
              if (_context6.t0.response && _context6.t0.response.data && _context6.t0.response.data.errors) {
                _this8.errors = _context6.t0.response.data.errors;
              }
              _this8.$toast.error('', ((_error$response3 = _context6.t0.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this8.$t("Failed to generate VAT report"));
            case 15:
              _context6.prev = 15;
              _this8.loading = false;
              _this8.loadingTransactions = false;
              return _context6.finish(15);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[4, 10, 15, 19]]);
      }))();
    },
    loadPage: function loadPage(page) {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var params, response, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!_this9.loadingTransactions) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this9.loadingTransactions = true;
              _context7.prev = 3;
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
              _context7.next = 13;
              return axios_default().post("/api/reports/vat-report?".concat(params.toString()));
            case 13:
              response = _context7.sent;
              if (!(response.data && response.data.success === true)) {
                _context7.next = 20;
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
              _context7.next = 25;
              break;
            case 20:
              if (!(response.data && response.data.error)) {
                _context7.next = 24;
                break;
              }
              throw new Error(response.data.message || _this9.$t('Failed to load page'));
            case 24:
              throw new Error(_this9.$t('Failed to load page'));
            case 25:
              _context7.next = 32;
              break;
            case 27:
              _context7.prev = 27;
              _context7.t0 = _context7["catch"](3);
              console.error("Page ".concat(page, " failed:"), _context7.t0);
              _this9.$toast.error('', _context7.t0.message || _this9.$t('Failed to load page'));
              throw _context7.t0;
            case 32:
              _context7.prev = 32;
              _this9.loadingTransactions = false;
              return _context7.finish(32);
            case 35:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3, 27, 32, 35]]);
      }))();
    },
    goToPage: function goToPage(page) {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(page < 1 || page > _this10.totalPages || page === _this10.currentPage)) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");
            case 2:
              _context8.next = 4;
              return _this10.loadPage(page);
            case 4:
            case "end":
              return _context8.stop();
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
;// CONCATENATED MODULE: ./resources/js/pages/reports/vat-report.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_vat_reportvue_type_script_lang_js = (vat_reportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=fd34e0ea&prod&scoped=true&lang=css
var vat_reportvue_type_style_index_0_id_fd34e0ea_prod_scoped_true_lang_css = __webpack_require__(96922);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=fd34e0ea&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(vat_reportvue_type_style_index_0_id_fd34e0ea_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_vat_reportvue_type_style_index_0_id_fd34e0ea_prod_scoped_true_lang_css = (vat_reportvue_type_style_index_0_id_fd34e0ea_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/reports/vat-report.vue?vue&type=style&index=0&id=fd34e0ea&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/reports/vat-report.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_vat_reportvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fd34e0ea",
  null
  
)

/* harmony default export */ const vat_report = (component.exports);

/***/ })

}]);