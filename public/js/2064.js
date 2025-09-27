"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2064],{

/***/ 42056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".overlay[data-v-711fa60c]{background-color:rgba(0,0,0,.5);height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-711fa60c],.overlay[data-v-711fa60c]{align-items:center;display:flex}.info-box[data-v-711fa60c]{background:#fff;border:1px solid #dee2e6;border-radius:.25rem;margin-bottom:1rem;padding:1rem}.info-box-icon[data-v-711fa60c]{align-items:center;border-radius:50%;display:flex;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-711fa60c]{flex:1}.info-box-text[data-v-711fa60c]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-711fa60c]{color:#495057;display:block;font-size:1.25rem;font-weight:700}.table th[data-v-711fa60c]{background-color:#f8f9fa;border-top:1px solid #dee2e6}.pagination[data-v-711fa60c]{margin-bottom:0}.dataTables_info[data-v-711fa60c]{color:#6c757d;padding-bottom:.75rem;padding-top:.75rem}.dataTables_paginate[data-v-711fa60c]{text-align:right}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account_statement)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=template&id=711fa60c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Chart of Account')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.chartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Account'),
      "searchable": true,
      "clearable": false,
      "loading": _vm.loadingAccounts
    },
    on: {
      "search": _vm.searchAccounts,
      "input": _vm.onChartOfAccountChange
    },
    model: {
      value: _vm.filters.chartOfAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "chartOfAccount", $$v);
      },
      expression: "filters.chartOfAccount"
    }
  }), _vm._v(" "), _vm.errors.chart_of_account_id ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n                  " + _vm._s(_vm.errors.chart_of_account_id[0]) + "\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Sub Chart of Account')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.subChartOfAccounts,
      "reduce": function reduce(account) {
        return account.id;
      },
      "label": "display_name",
      "placeholder": _vm.$t('Select Sub Account'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingSubAccounts,
      "disabled": !_vm.filters.chartOfAccount
    },
    on: {
      "search": _vm.searchSubAccounts
    },
    model: {
      value: _vm.filters.subChartOfAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "subChartOfAccount", $$v);
      },
      expression: "filters.subChartOfAccount"
    }
  }), _vm._v(" "), _vm.errors.sub_chart_of_account_id ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n                  " + _vm._s(_vm.errors.sub_chart_of_account_id[0]) + "\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
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
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading || !_vm.filters.chartOfAccount
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
      "click": _vm.resetFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n                  " + _vm._s(_vm.$t('Reset')) + "\n                ")]), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn btn-info ml-2",
    attrs: {
      "href": _vm.exportExcelUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn btn-success ml-2",
    attrs: {
      "href": _vm.exportPdfUrl
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('a', {
    staticClass: "btn btn-primary ml-2",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.$t("Print with Template")) + "\n                ")]) : _vm._e()])])])])]), _vm._v(" "), _vm.reportData ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Account Statement')) + " - \n            "), _vm.reportData.report_account && _vm.reportData.report_account.id !== _vm.reportData.chart_of_account.id ? _c('span', [_vm._v("\n              " + _vm._s(_vm.reportData.report_account.code) + " - " + _vm._s(_vm.reportData.report_account.name) + "\n              "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('Sub Account of')) + " " + _vm._s(_vm.reportData.chart_of_account.code) + " - " + _vm._s(_vm.reportData.chart_of_account.name) + ")")])]) : _c('span', [_vm._v("\n              " + _vm._s(_vm.reportData.chart_of_account.code) + " - " + _vm._s(_vm.reportData.chart_of_account.name) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.$t('Type')) + ": " + _vm._s(_vm.reportData.chart_of_account.type))]), _vm._v(" "), _vm.reportData.report_account && _vm.reportData.report_account.id !== _vm.reportData.chart_of_account.id ? _c('span', {
    staticClass: "badge badge-secondary ml-2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Sub Account Type')) + ": " + _vm._s(_vm.reportData.report_account.type) + "\n            ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.summary ? _vm.summary.opening_balance : 0)) + " " + _vm._s(_vm.summary ? _vm.summary.opening_balance_type : '') + "\n                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Period Debits')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.summary ? _vm.summary.period_debits : 0)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Period Credits')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(_vm.summary ? _vm.summary.period_credits : 0)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Closing Balance')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("withAbsoluteCurrency")(_vm.summary ? _vm.summary.closing_balance : 0)) + " " + _vm._s(_vm.summary ? _vm.summary.closing_balance_type : '') + "\n                  ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Entry #')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Debit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Credit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Net Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Running Balance')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Balance Type')))])])]), _vm._v(" "), _c('tbody', [_vm.loadingEntries ? _c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "9"
    }
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading entries...')) + "\n                  ")])]) : !_vm.loadingEntries && _vm.entriesCount === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "9"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('No entries found for the selected criteria')) + "\n                  ")])]) : !_vm.loadingEntries ? _vm._l(_vm.safeAllEntries, function (entry) {
    return _c('tr', {
      key: entry.id
    }, [_c('td', [_vm._v(_vm._s(entry.entry_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.entry_number))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.reference || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(entry.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(entry.debit_amount)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("withAbsoluteCurrency")(entry.credit_amount)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.net_amount < 0 ? 'text-danger' : 'text-success'
    }, [_vm._v("\n                      " + _vm._s(_vm._f("withAbsoluteCurrency")(entry.net_amount)) + "\n                    ")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.balance_type === 'Debit' ? 'text-success' : 'text-danger'
    }, [_vm._v("\n                      " + _vm._s(_vm._f("withAbsoluteCurrency")(entry.running_balance)) + "\n                    ")])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_c('span', {
      staticClass: "badge",
      "class": entry.balance_type === 'Debit' ? 'badge-success' : 'badge-danger'
    }, [_vm._v("\n                      " + _vm._s(entry.balance_type) + "\n                    ")])])]);
  }) : _vm._e()], 2)])]), _vm._v(" "), _vm.loadingMore ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12 text-center"
  }, [_c('div', {
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" \n                " + _vm._s(_vm.$t('Loading more entries...')) + " (" + _vm._s(_vm.entriesCount) + " " + _vm._s(_vm.$t('loaded')) + ")\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.entriesCount > 0 ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "dataTables_info"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('Total entries loaded')) + ": " + _vm._s(_vm.entriesCount) + "\n                "), !_vm.hasMoreData ? _c('span', {
    staticClass: "text-success"
  }, [_c('i', {
    staticClass: "fas fa-check"
  }), _vm._v(" " + _vm._s(_vm.$t('All data loaded')) + "\n                ")]) : _vm._e()])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fas fa-2x fa-sync-alt fa-spin"
  })]) : _vm._e()], 1);
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
    staticClass: "info-box-icon bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-arrow-down"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-primary"
  }, [_c('i', {
    staticClass: "fas fa-calculator"
  })]);
}];

;// ./resources/js/pages/reports/account-statement.vue?vue&type=template&id=711fa60c&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=script&lang=js
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


/* harmony default export */ const account_statementvue_type_script_lang_js = (_defineProperty({
  name: "AccountStatement",
  data: function data() {
    return {
      loading: false,
      loadingAccounts: false,
      loadingSubAccounts: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingEntries: false,
      reportData: null,
      summary: null,
      allEntries: [],
      // Store all loaded entries
      errors: {},
      // Breadcrumbs
      breadcrumbs: [{
        name: 'Dashboard',
        url: '/'
      }, {
        name: 'Reports',
        url: '/reports'
      }],
      breadcrumbsCurrent: 'Account Statement',
      // Filters
      filters: {
        chartOfAccount: null,
        subChartOfAccount: null,
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
  computed: _objectSpread({
    // Safe access to allEntries with fallback
    safeAllEntries: function safeAllEntries() {
      return this.allEntries || [];
    },
    // Safe access to entries count
    entriesCount: function entriesCount() {
      return this.safeAllEntries.length;
    },
    // Export URLs
    exportExcelUrl: function exportExcelUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
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
      return "/account-statement/export?".concat(params.toString());
    },
    exportPdfUrl: function exportPdfUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
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
      return "/account-statement/pdf?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      var params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
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
      return "/print/reports/account-statement?".concat(params.toString());
    }
  }, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: "appInfo"
  })),
  mounted: function mounted() {
    this.loadInitialData();
  },
  watch: {
    'filters.subChartOfAccount': function filtersSubChartOfAccount(newValue, oldValue) {
      // If sub account changes and we have a parent account selected, regenerate the report
      if (this.filters.chartOfAccount && newValue !== oldValue && !this.loading) {
        this.generateReport();
      }
    }
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
                  display_name: "".concat(account.code, " - ").concat(account.name)
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
              if (_this4.filters.fiscalYear) {
                _context4.n = 1;
                break;
              }
              _this4.accountingPeriods = [];
              return _context4.a(2);
            case 1:
              _this4.loadingAccountingPeriods = true;
              _context4.p = 2;
              _context4.n = 3;
              return axios_default().get('/api/accounting-periods/by-fiscal-year', {
                params: {
                  fiscal_year_id: _this4.filters.fiscalYear,
                  search: search,
                  perPage: 100
                }
              });
            case 3:
              response = _context4.v;
              // Handle paginated response
              _this4.accountingPeriods = response.data.data || response.data;
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t3 = _context4.v;
              _this4.$toast.error('', _this4.$t('Failed to load accounting periods'));
            case 5:
              _context4.p = 5;
              _this4.loadingAccountingPeriods = false;
              return _context4.f(5);
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 4, 5, 6]]);
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
    onChartOfAccountChange: function onChartOfAccountChange(accountId) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              // Clear sub chart of account when parent changes
              _this8.filters.subChartOfAccount = null;
              _this8.subChartOfAccounts = [];
              if (!accountId) {
                _context8.n = 1;
                break;
              }
              _context8.n = 1;
              return _this8.loadSubChartOfAccounts(accountId);
            case 1:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountId) {
      var _arguments4 = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var search, response, _t4;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              search = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : '';
              _this9.loadingSubAccounts = true;
              _context9.p = 1;
              _context9.n = 2;
              return axios_default().get('/api/reports/sub-chart-of-accounts', {
                params: {
                  parent_account_id: parentAccountId,
                  search: search
                }
              });
            case 2:
              response = _context9.v;
              if (response.data.success) {
                _this9.subChartOfAccounts = response.data.data;
              }
              _context9.n = 4;
              break;
            case 3:
              _context9.p = 3;
              _t4 = _context9.v;
              console.error('Error loading sub chart of accounts:', _t4);
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
              if (!(search && _this0.filters.chartOfAccount)) {
                _context0.n = 1;
                break;
              }
              _context0.n = 1;
              return _this0.loadSubChartOfAccounts(_this0.filters.chartOfAccount, search);
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    generateReport: function generateReport() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _error$response, errorMessage, _t5;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              if (_this1.filters.chartOfAccount) {
                _context1.n = 1;
                break;
              }
              _this1.$toast.error('', _this1.$t('Please select a chart of account'));
              return _context1.a(2);
            case 1:
              _this1.loading = true;
              _this1.loadingEntries = true;
              _this1.errors = {};
              _this1.allEntries = []; // Initialize before calling loadNextChunk
              _this1.currentChunk = 1;
              _this1.hasMoreData = true;
              _this1.retryCount = 0;
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
              errorMessage = ((_error$response = _t5.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t5.message || _this1.$t('Failed to generate report');
              _this1.$toast.error('', errorMessage);
            case 5:
              _context1.p = 5;
              _this1.loading = false;
              _this1.loadingEntries = false;
              return _context1.f(5);
            case 6:
              return _context1.a(2);
          }
        }, _callee1, null, [[2, 4, 5, 6]]);
      }))();
    },
    loadNextChunk: function loadNextChunk() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              if (!(!_this10.hasMoreData || _this10.loadingMore)) {
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
              _context10.p = 3;
              _this10.loadingMore = false;
              return _context10.f(3);
            case 4:
              return _context10.a(2);
          }
        }, _callee10, null, [[2,, 3, 4]]);
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
              _loop = /*#__PURE__*/_regenerator().m(function _loop() {
                var params, response, data, pagination, delay, _t6;
                return _regenerator().w(function (_context11) {
                  while (1) switch (_context11.p = _context11.n) {
                    case 0:
                      _context11.p = 0;
                      console.log("Loading chunk ".concat(_this11.currentChunk, ", attempt ").concat(attempt));
                      params = {
                        chart_of_account_id: _this11.filters.chartOfAccount,
                        page: _this11.currentChunk,
                        per_page: _this11.chunkSize
                      };
                      if (_this11.filters.subChartOfAccount) {
                        params.sub_chart_of_account_id = _this11.filters.subChartOfAccount;
                      }
                      if (_this11.filters.fiscalYear) {
                        params.fiscal_year_id = _this11.filters.fiscalYear;
                      }
                      if (_this11.filters.accountingPeriod) {
                        params.accounting_period_id = _this11.filters.accountingPeriod;
                      }
                      if (_this11.filters.fromDate) {
                        params.from_date = _this11.filters.fromDate;
                      }
                      if (_this11.filters.toDate) {
                        params.to_date = _this11.filters.toDate;
                      }
                      _context11.n = 1;
                      return axios_default().get('/api/reports/account-statement', {
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
                          chart_of_account: data.chart_of_account,
                          report_account: data.report_account,
                          filters: data.filters
                        };
                        _this11.summary = data.summary;
                      }

                      // Add new entries to the list
                      if (data.entries && data.entries.length > 0) {
                        // Ensure allEntries is always an array
                        if (!Array.isArray(_this11.allEntries)) {
                          _this11.allEntries = [];
                        }
                        _this11.allEntries = [].concat(_toConsumableArray(_this11.allEntries), _toConsumableArray(data.entries));
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
                      console.log("Chunk ".concat(_this11.currentChunk - 1, " loaded successfully. Total entries: ").concat(_this11.allEntries ? _this11.allEntries.length : 0));
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
                      _t6 = _context11.v;
                      lastError = _t6;
                      console.error("Chunk ".concat(_this11.currentChunk, " attempt ").concat(attempt, " failed:"), _t6);
                      if (!(attempt < _this11.maxRetries)) {
                        _context11.n = 6;
                        break;
                      }
                      // Wait before retry (exponential backoff)
                      delay = Math.pow(2, attempt) * 1000;
                      console.log("Retrying in ".concat(delay, "ms..."));
                      _context11.n = 6;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, delay);
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
              return _context12.d(_regeneratorValues(_loop()), 2);
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
    resetFilters: function resetFilters() {
      this.filters = {
        chartOfAccount: null,
        subChartOfAccount: null,
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      };
      this.subChartOfAccounts = [];
      this.reportData = null;
      this.summary = null;
      this.allEntries = []; // Ensure it's always an array
      this.errors = {};
      this.currentChunk = 1;
      this.hasMoreData = true;
      this.retryCount = 0;
    }
  }
}, "watch", {
  'filters.fiscalYear': function filtersFiscalYear() {
    this.filters.accountingPeriod = null;
    this.loadAccountingPeriods();
  }
}));
;// ./resources/js/pages/reports/account-statement.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_account_statementvue_type_script_lang_js = (account_statementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=711fa60c&prod&scoped=true&lang=css
var account_statementvue_type_style_index_0_id_711fa60c_prod_scoped_true_lang_css = __webpack_require__(42056);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=711fa60c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(account_statementvue_type_style_index_0_id_711fa60c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_account_statementvue_type_style_index_0_id_711fa60c_prod_scoped_true_lang_css = (account_statementvue_type_style_index_0_id_711fa60c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=711fa60c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/account-statement.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_account_statementvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "711fa60c",
  null
  
)

/* harmony default export */ const account_statement = (component.exports);

/***/ })

}]);