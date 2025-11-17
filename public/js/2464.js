"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2464],{

/***/ 22464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account_statement)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=template&id=51cc3c70&scoped=true
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
    staticClass: "btn export-excel-btn ml-2",
    attrs: {
      "href": _vm.exportExcelUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('button', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('button', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.entriesCount > 0 ? _c('a', {
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
  }, [_vm._v("\n                    " + _vm._s(_vm.summary ? _vm.summary.opening_balance : 0) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" " + _vm._s(_vm.summary ? _vm.summary.opening_balance_type : '') + "\n                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Period Debits')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.summary ? _vm.summary.period_debits : 0) + " "), _c('span', {
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
  }, [_vm._v(_vm._s(_vm.summary ? _vm.summary.period_credits : 0) + " "), _c('span', {
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
  }, [_vm._v("\n                    " + _vm._s(_vm.summary ? _vm.summary.closing_balance : 0) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" " + _vm._s(_vm.summary ? _vm.summary.closing_balance_type : '') + "\n                  ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table account-statement-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Entry #')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Debit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Credit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Net Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Running Balance')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Balance Type')))])]), _vm._v(" "), _c('tbody', [_vm.loadingEntries ? _c('tr', [_c('td', {
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
    }, [_vm._v(_vm._s(entry.debit_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(entry.credit_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.net_amount < 0 ? 'text-danger' : 'text-success'
    }, [_vm._v("\n                      " + _vm._s(entry.net_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('span', {
      "class": entry.balance_type === 'Debit' ? 'text-success' : 'text-danger'
    }, [_vm._v("\n                      " + _vm._s(entry.running_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
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
  })]) : _vm._e()]);
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

;// ./resources/js/pages/reports/account-statement.vue?vue&type=template&id=51cc3c70&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=script&lang=js
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


/* harmony default export */ const account_statementvue_type_script_lang_js = ({
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
        url: 'home'
      }, {
        name: 'Account Statement',
        url: ''
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
      return "/print/reports/account-statement/pdf?".concat(params.toString());
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
    },
    'filters.fiscalYear': function filtersFiscalYear() {
      this.filters.accountingPeriod = null;
      this.loadAccountingPeriods();
    }
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
                  display_name: "".concat(account.code, " - ").concat(account.name)
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
              if (_this4.filters.fiscalYear) {
                _context4.next = 4;
                break;
              }
              _this4.accountingPeriods = [];
              return _context4.abrupt("return");
            case 4:
              _this4.loadingAccountingPeriods = true;
              _context4.prev = 5;
              _context4.next = 8;
              return axios_default().get('/api/accounting-periods/by-fiscal-year', {
                params: {
                  fiscal_year_id: _this4.filters.fiscalYear,
                  search: search,
                  perPage: 100
                }
              });
            case 8:
              response = _context4.sent;
              // Handle paginated response
              _this4.accountingPeriods = response.data.data || response.data;
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](5);
              _this4.$toast.error('', _this4.$t('Failed to load accounting periods'));
            case 15:
              _context4.prev = 15;
              _this4.loadingAccountingPeriods = false;
              return _context4.finish(15);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[5, 12, 15, 18]]);
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
    onChartOfAccountChange: function onChartOfAccountChange(accountId) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // Clear sub chart of account when parent changes
              _this8.filters.subChartOfAccount = null;
              _this8.subChartOfAccounts = [];
              if (!accountId) {
                _context8.next = 5;
                break;
              }
              _context8.next = 5;
              return _this8.loadSubChartOfAccounts(accountId);
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    loadSubChartOfAccounts: function loadSubChartOfAccounts(parentAccountId) {
      var _arguments4 = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              search = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : '';
              _this9.loadingSubAccounts = true;
              _context9.prev = 2;
              _context9.next = 5;
              return axios_default().get('/api/reports/sub-chart-of-accounts', {
                params: {
                  parent_account_id: parentAccountId,
                  search: search
                }
              });
            case 5:
              response = _context9.sent;
              if (response.data.success) {
                _this9.subChartOfAccounts = response.data.data;
              }
              _context9.next = 13;
              break;
            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](2);
              console.error('Error loading sub chart of accounts:', _context9.t0);
              _this9.$toast.error('', _this9.$t('Failed to load sub chart of accounts'));
            case 13:
              _context9.prev = 13;
              _this9.loadingSubAccounts = false;
              return _context9.finish(13);
            case 16:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[2, 9, 13, 16]]);
      }))();
    },
    searchSubAccounts: function searchSubAccounts(search) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              if (!(search && _this0.filters.chartOfAccount)) {
                _context0.next = 3;
                break;
              }
              _context0.next = 3;
              return _this0.loadSubChartOfAccounts(_this0.filters.chartOfAccount, search);
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
        var _error$response, errorMessage;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              if (_this1.filters.chartOfAccount) {
                _context1.next = 3;
                break;
              }
              _this1.$toast.error('', _this1.$t('Please select a chart of account'));
              return _context1.abrupt("return");
            case 3:
              _this1.loading = true;
              _this1.loadingEntries = true;
              _this1.errors = {};
              _this1.allEntries = []; // Initialize before calling loadNextChunk
              _this1.currentChunk = 1;
              _this1.hasMoreData = true;
              _this1.retryCount = 0;
              _context1.prev = 10;
              _context1.next = 13;
              return _this1.loadNextChunk();
            case 13:
              _this1.$toast.success('', _this1.$t('Report generated successfully'));
              _context1.next = 22;
              break;
            case 16:
              _context1.prev = 16;
              _context1.t0 = _context1["catch"](10);
              console.error('Generate report error:', _context1.t0);
              if (_context1.t0.response && _context1.t0.response.data && _context1.t0.response.data.errors) {
                _this1.errors = _context1.t0.response.data.errors;
              }
              errorMessage = ((_error$response = _context1.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _context1.t0.message || _this1.$t('Failed to generate report');
              _this1.$toast.error('', errorMessage);
            case 22:
              _context1.prev = 22;
              _this1.loading = false;
              _this1.loadingEntries = false;
              return _context1.finish(22);
            case 26:
            case "end":
              return _context1.stop();
          }
        }, _callee1, null, [[10, 16, 22, 26]]);
      }))();
    },
    loadNextChunk: function loadNextChunk() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!_this10.hasMoreData || _this10.loadingMore)) {
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
              _context10.prev = 7;
              _this10.loadingMore = false;
              return _context10.finish(7);
            case 10:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[4,, 7, 10]]);
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
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var params, response, data, pagination, delay;
                return _regeneratorRuntime().wrap(function _loop$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
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
                      _context11.next = 10;
                      return axios_default().get('/api/reports/account-statement', {
                        params: params
                      });
                    case 10:
                      response = _context11.sent;
                      if (!response.data.success) {
                        _context11.next = 22;
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
                      return _context11.abrupt("return", {
                        v: void 0
                      });
                    case 22:
                      if (!response.data.error) {
                        _context11.next = 26;
                        break;
                      }
                      throw new Error(response.data.message || _this11.$t('Failed to load chunk'));
                    case 26:
                      throw new Error(_this11.$t('Failed to load chunk'));
                    case 27:
                      _context11.next = 38;
                      break;
                    case 29:
                      _context11.prev = 29;
                      _context11.t0 = _context11["catch"](0);
                      lastError = _context11.t0;
                      console.error("Chunk ".concat(_this11.currentChunk, " attempt ").concat(attempt, " failed:"), _context11.t0);
                      if (!(attempt < _this11.maxRetries)) {
                        _context11.next = 38;
                        break;
                      }
                      // Wait before retry (exponential backoff)
                      delay = Math.pow(2, attempt) * 1000;
                      console.log("Retrying in ".concat(delay, "ms..."));
                      _context11.next = 38;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, delay);
                      });
                    case 38:
                    case "end":
                      return _context11.stop();
                  }
                }, _loop, null, [[0, 29]]);
              });
              attempt = 1;
            case 3:
              if (!(attempt <= _this11.maxRetries)) {
                _context12.next = 11;
                break;
              }
              return _context12.delegateYield(_loop(), "t0", 5);
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
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
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

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/account-statement/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
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

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/account-statement/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/account-statement.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_account_statementvue_type_script_lang_js = (account_statementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=51cc3c70&prod&scoped=true&lang=css
var account_statementvue_type_style_index_0_id_51cc3c70_prod_scoped_true_lang_css = __webpack_require__(74588);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=51cc3c70&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(account_statementvue_type_style_index_0_id_51cc3c70_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_account_statementvue_type_style_index_0_id_51cc3c70_prod_scoped_true_lang_css = (account_statementvue_type_style_index_0_id_51cc3c70_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/account-statement.vue?vue&type=style&index=0&id=51cc3c70&prod&scoped=true&lang=css

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
  "51cc3c70",
  null
  
)

/* harmony default export */ const account_statement = (component.exports);

/***/ }),

/***/ 74588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-51cc3c70]{border:none!important}.account-statement-table[data-v-51cc3c70]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-51cc3c70]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-51cc3c70]{border:none!important}.account-statement-table thead th[data-v-51cc3c70]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-51cc3c70]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-51cc3c70]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-51cc3c70]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-51cc3c70]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-51cc3c70],.export-pdf-btn[data-v-51cc3c70]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-51cc3c70],.export-pdf-btn[data-v-51cc3c70],.print-btn[data-v-51cc3c70]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-51cc3c70]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-51cc3c70]{gap:10px}.card[data-v-51cc3c70]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-51cc3c70]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-51cc3c70]{background-color:rgba(0,0,0,.5);height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-51cc3c70],.overlay[data-v-51cc3c70]{align-items:center;display:flex}.info-box[data-v-51cc3c70]{background:#fff;border:1px solid #dee2e6;border-radius:.25rem;margin-bottom:1rem;padding:1rem}.info-box-icon[data-v-51cc3c70]{align-items:center;border-radius:50%;display:flex;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-51cc3c70]{flex:1}.info-box-text[data-v-51cc3c70]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-51cc3c70]{color:#495057;display:block;font-size:1.25rem;font-weight:700}.table th[data-v-51cc3c70]{border-top:1px solid #dee2e6}.pagination[data-v-51cc3c70]{margin-bottom:0}.dataTables_info[data-v-51cc3c70]{color:#6c757d;padding-bottom:.75rem;padding-top:.75rem}.dataTables_paginate[data-v-51cc3c70]{text-align:right}.btn-primary[data-v-51cc3c70]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}@media (max-width:1300px){.info-box[data-v-51cc3c70]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);