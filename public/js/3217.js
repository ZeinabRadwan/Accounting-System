"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3217],{

/***/ 84733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-e67e063e]{border:none!important}.account-statement-table[data-v-e67e063e]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-e67e063e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.print-template-btn[data-v-e67e063e]{align-items:center;display:inline-flex}.print-template-label[data-v-e67e063e]{display:inline-block;min-width:140px;text-align:left}.account-statement-table thead tr[data-v-e67e063e]{border:none!important}.account-statement-table thead th[data-v-e67e063e]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-e67e063e]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-e67e063e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-e67e063e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-e67e063e]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-e67e063e],.export-pdf-btn[data-v-e67e063e]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-e67e063e],.export-pdf-btn[data-v-e67e063e],.print-btn[data-v-e67e063e]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-e67e063e]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-e67e063e]{gap:10px}.card[data-v-e67e063e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-e67e063e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-e67e063e]{background-color:rgba(0,0,0,.5);height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-e67e063e],.overlay[data-v-e67e063e]{align-items:center;display:flex}.info-box[data-v-e67e063e]{background:#fff;border:1px solid #dee2e6;border-radius:.25rem;margin-bottom:1rem;padding:1rem}.info-box-icon[data-v-e67e063e]{align-items:center;border-radius:50%;display:flex;height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-e67e063e]{flex:1}.info-box-text[data-v-e67e063e]{color:#6c757d;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-e67e063e]{color:#495057;font-size:1.25rem;font-weight:700}.table th[data-v-e67e063e]{border-top:1px solid #dee2e6}.pagination[data-v-e67e063e]{margin-bottom:0}.dataTables_info[data-v-e67e063e]{color:#6c757d;padding-bottom:.75rem;padding-top:.75rem}.dataTables_paginate[data-v-e67e063e]{text-align:right}.btn-primary[data-v-e67e063e]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.red[data-v-e67e063e]{color:#dc3545}.font-weight-bold[data-v-e67e063e]{font-weight:700}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ balance_sheet)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=template&id=e67e063e&scoped=true
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
    }, [_c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("\n                  (\n                    "), _c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v("\n                  )\n                ")])]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th')]);
  }), _vm._v(" "), _vm._l(_vm.balanceData.accounts.liabilities, function (account) {
    return _c('tr', {
      key: 'liability-' + account.id
    }, [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(account.name) + " (" + _vm._s(account.code) + ")")]), _vm._v(" "), _c('th', {
      staticClass: "text-right"
    }, [account.balance_type === 'Credit' ? _c('span', {
      staticClass: "text-danger"
    }, [_c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _c('span', {
      staticClass: "text-success"
    }, [_vm._v("\n                  (\n                    "), _c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v("\n                  )\n                ")])])]);
  }), _vm._v(" "), _vm._l(_vm.balanceData.accounts.equity, function (account) {
    return _c('tr', {
      key: 'equity-' + account.id
    }, [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(account.name) + " (" + _vm._s(account.code) + ")")]), _vm._v(" "), _c('th', {
      staticClass: "text-right"
    }, [account.balance_type === 'Credit' ? _c('span', {
      staticClass: "text-danger"
    }, [_c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _c('span', {
      staticClass: "text-success"
    }, [_vm._v("\n                  (\n                    "), _c('span', [_vm._v(_vm._s(account.absolute_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v("\n                  )\n                ")])])]);
  }), _vm._v(" "), _vm.balanceData.totals.net_income !== 0 ? _c('tr', [_c('th'), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Net Income')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm.balanceData.totals.net_income > 0 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.net_income) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _c('span', {
    staticClass: "text-success"
  }, [_vm._v("\n                  (\n                    "), _c('span', [_vm._v(_vm._s(Math.abs(_vm.balanceData.totals.net_income)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v("\n                  )\n                ")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "text-right font-weight-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t('Total Assets')))]), _vm._v(" "), _c('th', {
    staticClass: "text-success"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_assets) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Liabilities & Equity')))]), _vm._v(" "), _c('th', {
    staticClass: "text-danger"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_liabilities_and_equity) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2) : _c('tbody', [_c('tr', [_c('td', {
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
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_assets) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm.balanceData.totals.total_assets < _vm.balanceData.totals.total_liabilities_and_equity ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_assets) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _c('span', {
    staticClass: "text-success"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_assets) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _c('h4', [_vm._v("\n                  " + _vm._s(_vm.$t('Total Liabilities & Equity')) + ":\n                  "), _vm.balanceData.totals.total_liabilities_and_equity > _vm.balanceData.totals.total_assets ? _c('span', {
    staticClass: "text-danger"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_liabilities_and_equity) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm.balanceData.totals.total_liabilities_and_equity < _vm.balanceData.totals.total_assets ? _c('span', {
    staticClass: "text-success"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_liabilities_and_equity) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _c('span', {
    staticClass: "text-success"
  }, [_c('span', [_vm._v(_vm._s(_vm.balanceData.totals.total_liabilities_and_equity) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])]) : _vm._e()])])])]) : _vm._e()]);
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

;// CONCATENATED MODULE: ./resources/js/pages/reports/balance-sheet.vue?vue&type=template&id=e67e063e&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this.loadingFiscalYears = true;
              _context.prev = 2;
              _context.next = 5;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 5:
              response = _context.sent;
              // Handle paginated response
              _this.fiscalYears = response.data.data || response.data;
              console.log("Fiscal Years Response:", _this.fiscalYears);
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.error("Failed to load fiscal years:", _context.t0);
              _this.$toast.error('', _this.$t("Failed to load fiscal years"));
            case 14:
              _context.prev = 14;
              _this.loadingFiscalYears = false;
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 10, 14, 17]]);
      }))();
    },
    // Load accounting periods
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              if (_this2.filters.fiscalYearId) {
                _context2.next = 4;
                break;
              }
              _this2.accountingPeriods = [];
              return _context2.abrupt("return");
            case 4:
              _this2.loadingAccountingPeriods = true;
              _context2.prev = 5;
              _context2.next = 8;
              return axios_default().get("/api/accounting-periods/by-fiscal-year/".concat(_this2.filters.fiscalYearId), {
                params: {
                  search: search,
                  perPage: 1000 // Increased to get all periods for the year
                }
              });
            case 8:
              response = _context2.sent;
              // Handle response - the API returns data directly, not paginated
              _this2.accountingPeriods = response.data.data || response.data;
              console.log("Accounting Periods Response:", _this2.accountingPeriods);
              _context2.next = 17;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](5);
              console.error("Failed to load accounting periods:", _context2.t0);
              _this2.$toast.error('', _this2.$t("Failed to load accounting periods"));
            case 17:
              _context2.prev = 17;
              _this2.loadingAccountingPeriods = false;
              return _context2.finish(17);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[5, 13, 17, 20]]);
      }))();
    },
    // Search fiscal years
    searchFiscalYears: function searchFiscalYears(search) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.loadFiscalYears(search);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // Search accounting periods
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.loadAccountingPeriods(search);
            case 2:
            case "end":
              return _context4.stop();
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var params, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this6.loading = true;
              _context5.prev = 1;
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
              _context5.next = 9;
              return axios_default().get(window.location.origin + "/api/reports/balance-sheet?" + params.toString());
            case 9:
              _yield$axios$get = _context5.sent;
              data = _yield$axios$get.data;
              if (data.success) {
                _this6.balanceData = data.data;
              } else {
                _this6.$toast.error('', data.message || _this6.$t("Failed to generate balance sheet"));
              }
              _context5.next = 18;
              break;
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](1);
              console.error("Error generating balance sheet:", _context5.t0);
              _this6.$toast.error('', _this6.$t("Failed to generate balance sheet"));
            case 18:
              _context5.prev = 18;
              _this6.loading = false;
              return _context5.finish(18);
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 14, 18, 21]]);
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
;// CONCATENATED MODULE: ./resources/js/pages/reports/balance-sheet.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_balance_sheetvue_type_script_lang_js = (balance_sheetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=e67e063e&prod&scoped=true&lang=css
var balance_sheetvue_type_style_index_0_id_e67e063e_prod_scoped_true_lang_css = __webpack_require__(84733);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=e67e063e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(balance_sheetvue_type_style_index_0_id_e67e063e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_balance_sheetvue_type_style_index_0_id_e67e063e_prod_scoped_true_lang_css = (balance_sheetvue_type_style_index_0_id_e67e063e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/reports/balance-sheet.vue?vue&type=style&index=0&id=e67e063e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/reports/balance-sheet.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_balance_sheetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "e67e063e",
  null
  
)

/* harmony default export */ const balance_sheet = (component.exports);

/***/ })

}]);