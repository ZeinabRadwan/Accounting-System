"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[324],{

/***/ 10324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ group_account_statement)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=template&id=75a37745&scoped=true
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.entries && _vm.reportData.entries.length > 0 ? _c('a', {
    staticClass: "btn print-btn ml-2",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
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

;// ./resources/js/pages/reports/group-account-statement.vue?vue&type=template&id=75a37745&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.all([_this.loadChartOfAccounts(), _this.loadFiscalYears()]);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var search, response, accounts, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this2.loadingAccounts = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios_default().get('/api/chart-of-accounts/search', {
                params: {
                  term: search,
                  perPage: 100
                }
              });
            case 2:
              response = _context2.v;
              // Handle paginated response
              accounts = response.data.data || response.data; // Add display_name for v-select
              _this2.chartOfAccounts = accounts.map(function (account) {
                return _objectSpread(_objectSpread({}, account), {}, {
                  display_name: "[".concat(account.code, "] ").concat(account.name)
                });
              });
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              _this2.$toast.error('', _this2.$t('Failed to load chart of accounts'));
            case 4:
              _context2.p = 4;
              _this2.loadingAccounts = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments2 = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var search, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              _this3.loadingFiscalYears = true;
              _context3.p = 1;
              _context3.n = 2;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 2:
              response = _context3.v;
              // Handle paginated response
              _this3.fiscalYears = response.data.data || response.data;
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              _this3.$toast.error('', _this3.$t('Failed to load fiscal years'));
            case 4:
              _context3.p = 4;
              _this3.loadingFiscalYears = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments3 = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var search, response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              search = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : '';
              _this4.loadingAccountingPeriods = true;
              _context4.p = 1;
              _context4.n = 2;
              return axios_default().get('/api/accounting-periods/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 2:
              response = _context4.v;
              // Handle paginated response
              _this4.accountingPeriods = response.data.data || response.data;
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              _this4.$toast.error('', _this4.$t('Failed to load accounting periods'));
            case 4:
              _context4.p = 4;
              _this4.loadingAccountingPeriods = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchAccounts: function searchAccounts(search) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this5.loadChartOfAccounts(search);
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this6.loadFiscalYears(search);
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return _this7.loadAccountingPeriods(search);
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    onChartOfAccountsChange: function onChartOfAccountsChange(accountIds) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(accountIds && accountIds.length > 0)) {
                _context8.n = 2;
                break;
              }
              _context8.n = 1;
              return _this8.loadSubChartOfAccounts(accountIds);
            case 1:
              _context8.n = 3;
              break;
            case 2:
              // Clear sub accounts and report data if no accounts selected
              _this8.filters.subChartOfAccounts = [];
              _this8.subChartOfAccounts = [];
              _this8.reportData = null;
            case 3:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountIds) {
      var _arguments4 = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var search, subAccountPromises, responses, allSubAccounts, uniqueSubAccounts, existingSubAccountIds, newSubAccounts, _t4;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              search = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : '';
              _this9.loadingSubAccounts = true;
              _context9.p = 1;
              // Load sub accounts for each parent account
              subAccountPromises = parentAccountIds.map(function (accountId) {
                return axios_default().get('/api/reports/sub-chart-of-accounts', {
                  params: {
                    parent_account_id: accountId,
                    search: search
                  }
                });
              });
              _context9.n = 2;
              return Promise.all(subAccountPromises);
            case 2:
              responses = _context9.v;
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
              _context9.n = 4;
              break;
            case 3:
              _context9.p = 3;
              _t4 = _context9.v;
              _this9.$toast.error('', _this9.$t('Failed to load sub chart of accounts'));
            case 4:
              _context9.p = 4;
              _this9.loadingSubAccounts = false;
              return _context9.f(4);
            case 5:
              return _context9.a(2);
          }
        }, _callee9, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchSubAccounts: function searchSubAccounts(search) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!(_this0.filters.chartOfAccounts && _this0.filters.chartOfAccounts.length > 0)) {
                _context0.n = 1;
                break;
              }
              _context0.n = 1;
              return _this0.loadSubChartOfAccounts(_this0.filters.chartOfAccounts, search);
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    generateReport: function generateReport() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _error$response, _t5;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              if (!(!_this1.filters.chartOfAccounts || _this1.filters.chartOfAccounts.length === 0)) {
                _context1.n = 1;
                break;
              }
              _this1.$toast.error('', _this1.$t('Please select at least one account'));
              return _context1.a(2);
            case 1:
              _this1.loading = true;
              _this1.errors = {};
              _this1.reportData = null;
              _this1.currentChunk = 1;
              _this1.hasMoreData = true;
              _this1.loadingMore = false;
              _context1.p = 2;
              _context1.n = 3;
              return _this1.loadNextChunk();
            case 3:
              _this1.$toast.success('', _this1.$t('Report generated successfully'));
              _context1.n = 5;
              break;
            case 4:
              _context1.p = 4;
              _t5 = _context1.v;
              console.error('Generate report error:', _t5);
              if (_t5.response && _t5.response.data && _t5.response.data.errors) {
                _this1.errors = _t5.response.data.errors;
              }
              _this1.$toast.error('', ((_error$response = _t5.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this1.$t('Failed to generate report'));
            case 5:
              _context1.p = 5;
              _this1.loading = false;
              return _context1.f(5);
            case 6:
              return _context1.a(2);
          }
        }, _callee1, null, [[2, 4, 5, 6]]);
      }))();
    },
    numberFormat: function numberFormat(value) {
      return parseFloat(value).toFixed(2);
    },
    // Chunked loading methods
    loadNextChunk: function loadNextChunk() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var _t6;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              if (!_this10.loadingMore) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              _this10.loadingMore = true;
              _this10.retryCount = 0;
              _context10.p = 2;
              _context10.n = 3;
              return _this10.loadChunkWithRetry();
            case 3:
              _context10.n = 5;
              break;
            case 4:
              _context10.p = 4;
              _t6 = _context10.v;
              console.error('Load next chunk error:', _t6);
              throw _t6;
            case 5:
              _context10.p = 5;
              _this10.loadingMore = false;
              return _context10.f(5);
            case 6:
              return _context10.a(2);
          }
        }, _callee10, null, [[2, 4, 5, 6]]);
      }))();
    },
    loadChunkWithRetry: function loadChunkWithRetry() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var _lastError;
        var lastError, _loop, _ret, attempt;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              lastError = null;
              _loop = /*#__PURE__*/_regenerator().m(function _loop(attempt) {
                var reportAccountIds, params, response, data, pagination, _t7;
                return _regenerator().w(function (_context11) {
                  while (1) switch (_context11.p = _context11.n) {
                    case 0:
                      _context11.p = 0;
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
                      _context11.n = 1;
                      return axios_default().get('/api/reports/group-account-statement', {
                        params: params
                      });
                    case 1:
                      response = _context11.v;
                      if (!response.data.success) {
                        _context11.n = 2;
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
                      return _context11.a(2, {
                        v: void 0
                      });
                    case 2:
                      if (!response.data.error) {
                        _context11.n = 3;
                        break;
                      }
                      throw new Error(response.data.message || _this11.$t('Failed to load chunk'));
                    case 3:
                      throw new Error(_this11.$t('Failed to load chunk'));
                    case 4:
                      _context11.n = 6;
                      break;
                    case 5:
                      _context11.p = 5;
                      _t7 = _context11.v;
                      lastError = _t7;
                      console.error("Chunk ".concat(_this11.currentChunk, " attempt ").concat(attempt, " failed:"), _t7);
                      if (!(attempt < _this11.maxRetries)) {
                        _context11.n = 6;
                        break;
                      }
                      _context11.n = 6;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, 1000 * attempt);
                      });
                    case 6:
                      return _context11.a(2);
                  }
                }, _loop, null, [[0, 5]]);
              });
              attempt = 1;
            case 1:
              if (!(attempt <= _this11.maxRetries)) {
                _context12.n = 4;
                break;
              }
              return _context12.d(_regeneratorValues(_loop(attempt)), 2);
            case 2:
              _ret = _context12.v;
              if (!_ret) {
                _context12.n = 3;
                break;
              }
              return _context12.a(2, _ret.v);
            case 3:
              attempt++;
              _context12.n = 1;
              break;
            case 4:
              throw new Error("Failed to load chunk ".concat(_this11.currentChunk, " after ").concat(_this11.maxRetries, " attempts: ").concat(((_lastError = lastError) === null || _lastError === void 0 ? void 0 : _lastError.message) || 'Unknown error'));
            case 5:
              return _context12.a(2);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=75a37745&prod&scoped=true&lang=css
var group_account_statementvue_type_style_index_0_id_75a37745_prod_scoped_true_lang_css = __webpack_require__(45490);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=75a37745&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(group_account_statementvue_type_style_index_0_id_75a37745_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_group_account_statementvue_type_style_index_0_id_75a37745_prod_scoped_true_lang_css = (group_account_statementvue_type_style_index_0_id_75a37745_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/group-account-statement.vue?vue&type=style&index=0&id=75a37745&prod&scoped=true&lang=css

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
  "75a37745",
  null
  
)

/* harmony default export */ const group_account_statement = (component.exports);

/***/ }),

/***/ 45490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-75a37745]{border:none!important}.group-account-statement-table[data-v-75a37745]{border-collapse:separate;border-spacing:0}.group-account-statement-table thead th[data-v-75a37745]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.group-account-statement-table thead tr[data-v-75a37745]{border:none!important}.group-account-statement-table thead th[data-v-75a37745]:first-child{border-top-left-radius:10px}.group-account-statement-table thead th[data-v-75a37745]:last-child{border-top-right-radius:10px}[dir=rtl] .group-account-statement-table thead th[data-v-75a37745]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .group-account-statement-table thead th[data-v-75a37745]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-75a37745]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-75a37745],.export-pdf-btn[data-v-75a37745],.preview-btn[data-v-75a37745]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-75a37745],.export-pdf-btn[data-v-75a37745],.preview-btn[data-v-75a37745],.print-btn[data-v-75a37745]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-75a37745]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-75a37745]{gap:10px}.card[data-v-75a37745]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-75a37745]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-75a37745]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-75a37745]{background:#fff;border:1px solid #dee2e6;margin-bottom:1rem;padding:1rem}.info-box[data-v-75a37745],.info-box-icon[data-v-75a37745]{align-items:center;border-radius:.375rem;display:flex}.info-box-icon[data-v-75a37745]{height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-75a37745]{flex:1}.info-box-text[data-v-75a37745]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-75a37745]{color:#495057;display:block;font-size:1.25rem;font-weight:600}.btn-primary[data-v-75a37745]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}@media (max-width:1300px){.info-box[data-v-75a37745]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);