"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8624],{

/***/ 30897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-716ad71c]{border:none!important}.group-account-statement-table[data-v-716ad71c]{border-collapse:separate;border-spacing:0}.group-account-statement-table thead th[data-v-716ad71c]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.group-account-statement-table thead tr[data-v-716ad71c]{border:none!important}.group-account-statement-table thead th[data-v-716ad71c]:first-child{border-top-left-radius:10px}.group-account-statement-table thead th[data-v-716ad71c]:last-child{border-top-right-radius:10px}[dir=rtl] .group-account-statement-table thead th[data-v-716ad71c]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .group-account-statement-table thead th[data-v-716ad71c]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-716ad71c]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-716ad71c],.export-pdf-btn[data-v-716ad71c],.preview-btn[data-v-716ad71c]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-716ad71c],.export-pdf-btn[data-v-716ad71c],.preview-btn[data-v-716ad71c],.print-btn[data-v-716ad71c]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-716ad71c]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-716ad71c]{gap:10px}.card[data-v-716ad71c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-716ad71c]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-716ad71c]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-716ad71c]{background:#fff;border:1px solid #dee2e6;margin-bottom:1rem;padding:1rem}.info-box[data-v-716ad71c],.info-box-icon[data-v-716ad71c]{align-items:center;border-radius:.375rem;display:flex}.info-box-icon[data-v-716ad71c]{height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-716ad71c]{flex:1}.info-box-text[data-v-716ad71c]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-716ad71c]{color:#495057;display:block;font-size:1.25rem;font-weight:600}.btn-primary[data-v-716ad71c]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}@media (max-width:1300px){.info-box[data-v-716ad71c]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ group_account_statement)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=template&id=716ad71c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
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
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Chart of Accounts')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.chartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Accounts'),
      "searchable": true,
      "clearable": false,
      "loading": _vm.loadingAccounts,
      "multiple": ""
    },
    on: {
      "search": _vm.searchAccounts,
      "input": _vm.onChartOfAccountsChange
    },
    model: {
      value: _vm.filters.chartOfAccounts,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "chartOfAccounts", $$v);
      },
      expression: "filters.chartOfAccounts"
    }
  }), _vm._v(" "), _vm.errors.chart_of_account_ids ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.errors.chart_of_account_ids[0]) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Select one or more accounts to include in the report')) + "\n            ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Sub Chart of Accounts')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.subChartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Sub Accounts'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingSubAccounts,
      "multiple": "",
      "disabled": !_vm.filters.chartOfAccounts || _vm.filters.chartOfAccounts.length === 0
    },
    on: {
      "search": _vm.searchSubAccounts
    },
    model: {
      value: _vm.filters.subChartOfAccounts,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "subChartOfAccounts", $$v);
      },
      expression: "filters.subChartOfAccounts"
    }
  }), _vm._v(" "), _vm.errors.sub_chart_of_account_ids ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.errors.sub_chart_of_account_ids[0]) + "\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
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
      "search": _vm.searchFiscalYears
    },
    model: {
      value: _vm.filters.fiscalYear,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "fiscalYear", $$v);
      },
      expression: "filters.fiscalYear"
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
      "placeholder": _vm.$t('Select Period'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingAccountingPeriods,
      "disabled": !_vm.filters.fiscalYear
    },
    on: {
      "search": _vm.searchAccountingPeriods
    },
    model: {
      value: _vm.filters.accountingPeriod,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "accountingPeriod", $$v);
      },
      expression: "filters.accountingPeriod"
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
      "placeholder": _vm.$t('From Date'),
      "disabled": _vm.filters.fiscalYear || _vm.filters.accountingPeriod
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
      "placeholder": _vm.$t('To Date'),
      "disabled": _vm.filters.fiscalYear || _vm.filters.accountingPeriod
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
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading || !_vm.filters.chartOfAccounts || _vm.filters.chartOfAccounts.length === 0
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
  }), _vm._v("\n              " + _vm._s(_vm.$t('Reset')) + "\n            ")]), _vm._v(" "), _vm.reportData && _vm.reportData.entries && _vm.reportData.entries.length > 0 ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn export-excel-btn ml-2",
    attrs: {
      "href": _vm.exportExcelUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.entries && _vm.reportData.entries.length > 0 ? _c('button', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.entries && _vm.reportData.entries.length > 0 ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Preview'),
      expression: "$t('Preview')"
    }],
    staticClass: "btn preview-btn ml-2",
    on: {
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  })]) : _vm._e()])])])])]), _vm._v(" "), _vm.reportData ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('Group Account Statement')) + " - " + _vm._s(_vm.selectedAccountsText) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.$t('Accounts')) + ": " + _vm._s(_vm.reportData.chart_of_accounts.length))]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-secondary ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Entries')) + ": " + _vm._s(_vm.reportData.summary.total_entries))])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Opening Balance')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v("\n                " + _vm._s(_vm.reportData.summary.opening_balance) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.reportData.summary.opening_balance_type) + ")")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Period Debits')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.period_debits) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Period Credits')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.period_credits) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Closing Balance')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v("\n                " + _vm._s(_vm.reportData.summary.closing_balance) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.reportData.summary.closing_balance_type) + ")")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Selected Accounts')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.reportData.chart_of_accounts, function (account) {
    return _c('div', {
      key: account.id,
      staticClass: "col-md-4 mb-2"
    }, [_c('div', {
      staticClass: "card card-outline card-info"
    }, [_c('div', {
      staticClass: "card-body p-2"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between"
    }, [_c('div', [_c('strong', [_vm._v(_vm._s(account.code))]), _vm._v(" - " + _vm._s(account.name) + "\n                    ")]), _vm._v(" "), _c('span', {
      staticClass: "badge badge-info"
    }, [_vm._v(_vm._s(account.type))])])])])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table group-account-statement-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Entry #')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Account Name')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Debit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Credit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Net Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Running Balance')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Balance Type')))])]), _vm._v(" "), _c('tbody', [_vm.loading ? _c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "10"
    }
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading entries...')) + "\n              ")])]) : _vm.reportData.entries.length === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "10"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('No entries found for the selected criteria')) + "\n              ")])]) : _vm._l(_vm.reportData.entries, function (entry) {
    return _c('tr', {
      key: entry.id
    }, [_c('td', [_vm._v(_vm._s(_vm.formatDate(entry.entry_date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.entry_number))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.reference || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.description || '-'))]), _vm._v(" "), _c('td', [entry.accounts && entry.accounts.length > 0 ? _c('div', _vm._l(entry.accounts, function (account, index) {
      return _c('div', {
        key: account.id,
        staticClass: "mb-1"
      }, [_c('span', {
        staticClass: "badge badge-info mr-1"
      }, [_vm._v(_vm._s(account.code))]), _vm._v(" "), _c('span', {
        staticClass: "small"
      }, [_vm._v(_vm._s(account.name))]), _vm._v(" "), index < entry.accounts.length - 1 ? _c('div', {
        staticClass: "border-bottom mb-1"
      }) : _vm._e()]);
    }), 0) : _c('span', {
      staticClass: "text-muted"
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(entry.debit_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(entry.credit_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.net_amount >= 0 ? 'text-success' : 'text-danger'
    }, [_vm._v("\n                    " + _vm._s(entry.net_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.balance_type === 'Debit' ? 'text-success' : 'text-danger'
    }, [_vm._v("\n                    " + _vm._s(entry.running_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_c('span', {
      staticClass: "badge",
      "class": entry.balance_type === 'Debit' ? 'badge-success' : 'badge-danger'
    }, [_vm._v("\n                    " + _vm._s(entry.balance_type) + "\n                  ")])])]);
  })], 2)])]), _vm._v(" "), _vm.loadingMore ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12 text-center"
  }, [_c('div', {
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" \n            " + _vm._s(_vm.$t('Loading more entries...')) + " (" + _vm._s(_vm.reportData.entries.length) + " " + _vm._s(_vm.$t('loaded')) + ")\n          ")])])]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.entries.length > 0 ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "dataTables_info"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Total entries loaded')) + ": " + _vm._s(_vm.reportData.entries.length) + "\n            "), !_vm.hasMoreData ? _c('span', {
    staticClass: "text-success"
  }, [_c('i', {
    staticClass: "fas fa-check"
  }), _vm._v(" " + _vm._s(_vm.$t('All data loaded')) + "\n            ")]) : _vm._e()])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fas fa-2x fa-sync-alt fa-spin"
  })]) : _vm._e()])])])])]);
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
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-arrow-up"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-danger"
  }, [_c('i', {
    staticClass: "fas fa-arrow-down"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale"
  })]);
}];

;// ./resources/js/pages/reports/group-account-statement.vue?vue&type=template&id=716ad71c&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const group_account_statementvue_type_script_lang_js = ({
  name: 'GroupAccountStatement',
  data: function data() {
    return {
      loading: false,
      loadingAccounts: false,
      loadingSubAccounts: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      reportData: null,
      errors: {},
      // Breadcrumbs
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Group Account Statement',
        url: ''
      }],
      breadcrumbsCurrent: 'Group Account Statement',
      // Filters
      filters: {
        chartOfAccounts: [],
        subChartOfAccounts: [],
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      },
      // Options
      chartOfAccounts: [],
      subChartOfAccounts: [],
      fiscalYears: [],
      accountingPeriods: [],
      // Chunked loading
      currentChunk: 1,
      chunkSize: 30,
      hasMoreData: true,
      loadingMore: false,
      retryCount: 0,
      maxRetries: 3
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: "appInfo"
  })), {}, {
    selectedAccountsText: function selectedAccountsText() {
      if (!this.reportData || !this.reportData.chart_of_accounts) return '';
      return this.reportData.chart_of_accounts.map(function (acc) {
        return "".concat(acc.code, " - ").concat(acc.name);
      }).join(', ');
    },
    entriesCount: function entriesCount() {
      return this.reportData && this.reportData.entries ? this.reportData.entries.length : 0;
    },
    // Export URLs
    exportExcelUrl: function exportExcelUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(function (id) {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(function (id) {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/group-account-statement/export?".concat(params.toString());
    },
    exportPdfUrl: function exportPdfUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(function (id) {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(function (id) {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/group-account-statement/pdf?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(function (id) {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(function (id) {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      return "/print/reports/group-account-statement?".concat(params.toString());
    }
  }),
  mounted: function mounted() {
    this.loadInitialData();
  },
  methods: {
    loadInitialData: function loadInitialData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this.loadChartOfAccounts(), _this.loadFiscalYears()]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var search, response, accounts;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this2.loadingAccounts = true;
              _context2.prev = 2;
              _context2.next = 5;
              return axios_default().get('/api/chart-of-accounts/search', {
                params: {
                  term: search,
                  perPage: 100
                }
              });
            case 5:
              response = _context2.sent;
              // Handle paginated response
              accounts = response.data.data || response.data; // Add display_name for v-select
              _this2.chartOfAccounts = accounts.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              _this2.$toast.error('', _this2.$t('Failed to load chart of accounts'));
            case 13:
              _context2.prev = 13;
              _this2.loadingAccounts = false;
              return _context2.finish(13);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 10, 13, 16]]);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments2 = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              _this3.loadingFiscalYears = true;
              _context3.prev = 2;
              _context3.next = 5;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 5:
              response = _context3.sent;
              // Handle paginated response
              _this3.fiscalYears = response.data.data || response.data;
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              _this3.$toast.error('', _this3.$t('Failed to load fiscal years'));
            case 12:
              _context3.prev = 12;
              _this3.loadingFiscalYears = false;
              return _context3.finish(12);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 9, 12, 15]]);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments3 = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              search = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : '';
              _this4.loadingAccountingPeriods = true;
              _context4.prev = 2;
              _context4.next = 5;
              return axios_default().get('/api/accounting-periods/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 5:
              response = _context4.sent;
              // Handle paginated response
              _this4.accountingPeriods = response.data.data || response.data;
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              _this4.$toast.error('', _this4.$t('Failed to load accounting periods'));
            case 12:
              _context4.prev = 12;
              _this4.loadingAccountingPeriods = false;
              return _context4.finish(12);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[2, 9, 12, 15]]);
      }))();
    },
    searchAccounts: function searchAccounts(search) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.loadChartOfAccounts(search);
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.loadFiscalYears(search);
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this7.loadAccountingPeriods(search);
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    onChartOfAccountsChange: function onChartOfAccountsChange(accountIds) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(accountIds && accountIds.length > 0)) {
                _context8.next = 5;
                break;
              }
              _context8.next = 3;
              return _this8.loadSubChartOfAccounts(accountIds);
            case 3:
              _context8.next = 8;
              break;
            case 5:
              // Clear sub accounts and report data if no accounts selected
              _this8.filters.subChartOfAccounts = [];
              _this8.subChartOfAccounts = [];
              _this8.reportData = null;
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountIds) {
      var _arguments4 = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var search, subAccountPromises, responses, allSubAccounts, uniqueSubAccounts, existingSubAccountIds, newSubAccounts;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              search = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : '';
              _this9.loadingSubAccounts = true;
              _context9.prev = 2;
              // Load sub accounts for each parent account
              subAccountPromises = parentAccountIds.map(function (accountId) {
                return axios_default().get('/api/reports/sub-chart-of-accounts', {
                  params: {
                    parent_account_id: accountId,
                    search: search
                  }
                });
              });
              _context9.next = 6;
              return Promise.all(subAccountPromises);
            case 6:
              responses = _context9.sent;
              allSubAccounts = [];
              responses.forEach(function (response) {
                if (response.data.success) {
                  allSubAccounts.push.apply(allSubAccounts, _toConsumableArray(response.data.data));
                }
              });

              // Remove duplicates based on ID
              uniqueSubAccounts = allSubAccounts.filter(function (account, index, self) {
                return index === self.findIndex(function (a) {
                  return a.id === account.id;
                });
              }); // Merge with existing sub accounts instead of replacing
              existingSubAccountIds = _this9.subChartOfAccounts.map(function (acc) {
                return acc.id;
              });
              newSubAccounts = uniqueSubAccounts.filter(function (account) {
                return !existingSubAccountIds.includes(account.id);
              });
              _this9.subChartOfAccounts = [].concat(_toConsumableArray(_this9.subChartOfAccounts), _toConsumableArray(newSubAccounts.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              })));
              _context9.next = 18;
              break;
            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](2);
              _this9.$toast.error('', _this9.$t('Failed to load sub chart of accounts'));
            case 18:
              _context9.prev = 18;
              _this9.loadingSubAccounts = false;
              return _context9.finish(18);
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[2, 15, 18, 21]]);
      }))();
    },
    searchSubAccounts: function searchSubAccounts(search) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              if (!(_this0.filters.chartOfAccounts && _this0.filters.chartOfAccounts.length > 0)) {
                _context0.next = 3;
                break;
              }
              _context0.next = 3;
              return _this0.loadSubChartOfAccounts(_this0.filters.chartOfAccounts, search);
            case 3:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    generateReport: function generateReport() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var _error$response;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              if (!(!_this1.filters.chartOfAccounts || _this1.filters.chartOfAccounts.length === 0)) {
                _context1.next = 3;
                break;
              }
              _this1.$toast.error('', _this1.$t('Please select at least one account'));
              return _context1.abrupt("return");
            case 3:
              _this1.loading = true;
              _this1.errors = {};
              _this1.reportData = null;
              _this1.currentChunk = 1;
              _this1.hasMoreData = true;
              _this1.loadingMore = false;
              _context1.prev = 9;
              _context1.next = 12;
              return _this1.loadNextChunk();
            case 12:
              _this1.$toast.success('', _this1.$t('Report generated successfully'));
              _context1.next = 20;
              break;
            case 15:
              _context1.prev = 15;
              _context1.t0 = _context1["catch"](9);
              console.error('Generate report error:', _context1.t0);
              if (_context1.t0.response && _context1.t0.response.data && _context1.t0.response.data.errors) {
                _this1.errors = _context1.t0.response.data.errors;
              }
              _this1.$toast.error('', ((_error$response = _context1.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this1.$t('Failed to generate report'));
            case 20:
              _context1.prev = 20;
              _this1.loading = false;
              return _context1.finish(20);
            case 23:
            case "end":
              return _context1.stop();
          }
        }, _callee1, null, [[9, 15, 20, 23]]);
      }))();
    },
    numberFormat: function numberFormat(value) {
      return parseFloat(value).toFixed(2);
    },
    // Chunked loading methods
    loadNextChunk: function loadNextChunk() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!_this10.loadingMore) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return");
            case 2:
              _this10.loadingMore = true;
              _this10.retryCount = 0;
              _context10.prev = 4;
              _context10.next = 7;
              return _this10.loadChunkWithRetry();
            case 7:
              _context10.next = 13;
              break;
            case 9:
              _context10.prev = 9;
              _context10.t0 = _context10["catch"](4);
              console.error('Load next chunk error:', _context10.t0);
              throw _context10.t0;
            case 13:
              _context10.prev = 13;
              _this10.loadingMore = false;
              return _context10.finish(13);
            case 16:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[4, 9, 13, 16]]);
      }))();
    },
    loadChunkWithRetry: function loadChunkWithRetry() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _lastError;
        var lastError, _loop, _ret, attempt;
        return _regeneratorRuntime().wrap(function _callee11$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              lastError = null;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(attempt) {
                var reportAccountIds, params, response, data, pagination;
                return _regeneratorRuntime().wrap(function _loop$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      console.log("Loading chunk ".concat(_this11.currentChunk, ", attempt ").concat(attempt));

                      // Determine which accounts to use for reporting
                      reportAccountIds = _this11.filters.chartOfAccounts;
                      if (_this11.filters.subChartOfAccounts && _this11.filters.subChartOfAccounts.length > 0) {
                        reportAccountIds = _this11.filters.subChartOfAccounts;
                      }
                      params = {
                        chart_of_account_ids: reportAccountIds,
                        page: _this11.currentChunk,
                        per_page: _this11.chunkSize
                      };
                      if (_this11.filters.fiscalYear) {
                        params.fiscal_year_id = _this11.filters.fiscalYear;
                      } else if (_this11.filters.accountingPeriod) {
                        params.accounting_period_id = _this11.filters.accountingPeriod;
                      } else if (_this11.filters.fromDate && _this11.filters.toDate) {
                        params.from_date = _this11.filters.fromDate;
                        params.to_date = _this11.filters.toDate;
                      }
                      _context11.next = 8;
                      return axios_default().get('/api/reports/group-account-statement', {
                        params: params
                      });
                    case 8:
                      response = _context11.sent;
                      if (!response.data.success) {
                        _context11.next = 20;
                        break;
                      }
                      data = response.data.data; // Store summary and chart of account info on first chunk
                      if (_this11.currentChunk === 1) {
                        _this11.reportData = {
                          chart_of_accounts: data.chart_of_accounts,
                          filters: data.filters,
                          entries: [],
                          summary: data.summary
                        };
                      }

                      // Append new entries
                      if (data.entries && data.entries.length > 0) {
                        _this11.reportData.entries = [].concat(_toConsumableArray(_this11.reportData.entries), _toConsumableArray(data.entries));
                      }

                      // Check if there's more data
                      pagination = data.pagination;
                      _this11.hasMoreData = pagination.has_more;
                      if (_this11.hasMoreData) {
                        _this11.currentChunk++;
                        // Automatically load next chunk after a short delay
                        setTimeout(function () {
                          _this11.loadNextChunk();
                        }, 100);
                      }
                      _this11.retryCount = 0;
                      return _context11.abrupt("return", {
                        v: void 0
                      });
                    case 20:
                      if (!response.data.error) {
                        _context11.next = 24;
                        break;
                      }
                      throw new Error(response.data.message || _this11.$t('Failed to load chunk'));
                    case 24:
                      throw new Error(_this11.$t('Failed to load chunk'));
                    case 25:
                      _context11.next = 34;
                      break;
                    case 27:
                      _context11.prev = 27;
                      _context11.t0 = _context11["catch"](0);
                      lastError = _context11.t0;
                      console.error("Chunk ".concat(_this11.currentChunk, " attempt ").concat(attempt, " failed:"), _context11.t0);
                      if (!(attempt < _this11.maxRetries)) {
                        _context11.next = 34;
                        break;
                      }
                      _context11.next = 34;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, 1000 * attempt);
                      });
                    case 34:
                    case "end":
                      return _context11.stop();
                  }
                }, _loop, null, [[0, 27]]);
              });
              attempt = 1;
            case 3:
              if (!(attempt <= _this11.maxRetries)) {
                _context12.next = 11;
                break;
              }
              return _context12.delegateYield(_loop(attempt), "t0", 5);
            case 5:
              _ret = _context12.t0;
              if (!_ret) {
                _context12.next = 8;
                break;
              }
              return _context12.abrupt("return", _ret.v);
            case 8:
              attempt++;
              _context12.next = 3;
              break;
            case 11:
              throw new Error("Failed to load chunk ".concat(_this11.currentChunk, " after ").concat(_this11.maxRetries, " attempts: ").concat(((_lastError = lastError) === null || _lastError === void 0 ? void 0 : _lastError.message) || 'Unknown error'));
            case 12:
            case "end":
              return _context12.stop();
          }
        }, _callee11);
      }))();
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '-';
      var date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    resetFilters: function resetFilters() {
      this.filters = {
        chartOfAccounts: [],
        subChartOfAccounts: [],
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      };
      this.subChartOfAccounts = [];
      this.reportData = null;
      this.errors = {};
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(function (id) {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(function (id) {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/reports/group-account-statement/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(function (id) {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(function (id) {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/reports/group-account-statement/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/group-account-statement.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_group_account_statementvue_type_script_lang_js = (group_account_statementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=716ad71c&prod&scoped=true&lang=css
var group_account_statementvue_type_style_index_0_id_716ad71c_prod_scoped_true_lang_css = __webpack_require__(30897);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=716ad71c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(group_account_statementvue_type_style_index_0_id_716ad71c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_group_account_statementvue_type_style_index_0_id_716ad71c_prod_scoped_true_lang_css = (group_account_statementvue_type_style_index_0_id_716ad71c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=716ad71c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/group-account-statement.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_group_account_statementvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "716ad71c",
  null
  
)

/* harmony default export */ const group_account_statement = (component.exports);

/***/ })

}]);