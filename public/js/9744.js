"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9744],{

/***/ 58363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-2ff39733]{border:none!important}.account-statement-table[data-v-2ff39733]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-2ff39733]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-2ff39733]{border:none!important}.account-statement-table thead th[data-v-2ff39733]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-2ff39733]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-2ff39733]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-2ff39733]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-2ff39733]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.export-excel-btn[data-v-2ff39733],.export-pdf-btn[data-v-2ff39733]{background:#f6fef4!important;border:none;border-radius:10px;color:#2ab930!important}.print-btn[data-v-2ff39733]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.btn-group.c-w-100[data-v-2ff39733]{gap:10px}.card[data-v-2ff39733]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2ff39733]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-2ff39733]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.btn-primary[data-v-2ff39733]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 19744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ summary)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=template&id=2ff39733&scoped=true
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
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('form', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Month')) + " ")]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t('Year')))]), _vm._v(" "), _c('select', {
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
    }, [_vm._v(_vm._s(year))]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "year"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group btn-group c-w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n                  " + _vm._s(_vm.$t('View Report')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save Filters')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")]), _vm._v(" "), _vm.reportInfo ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print with Template'),
      expression: "$t('Print with Template')"
    }],
    staticClass: "btn print-btn ml-2",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.$t('Print with Template')) + "\n                ")]) : _vm._e()])])])])])]), _vm._v(" "), _vm.reportInfo ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Summary Report')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_vm.loading ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fas fa-2x fa-sync-alt fa-spin"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row invoice-info"
  }, [_c('div', {
    staticClass: "m-auto invoice-col"
  }, [_c('CompanyInfo', {
    staticClass: "text-center"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3 position-relative"
  }, [_c('div', {
    staticClass: "table-responsive table-custom col-xl-10 m-auto"
  }, [_c('table', {
    staticClass: "table account-statement-table"
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
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.current_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("\n                      " + _vm._s(_vm.totalOpeningBalance) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.$t("Invoice Sales")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.invoiceSales) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.$t("Invoice Dues")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.invoiceDue) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Accounts Collection")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.accountCollections, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.total_collection) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalCollection) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Expenses")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.totalPurchase) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.expenses) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payroll")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.payrolls) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Loan Interest")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.reportInfo.loanInterest) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Asset Depreciation")))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm.reportInfo.assetDepriciation) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalExpense) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transfer")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.balanceTransfers, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm.$t("Balance Transfer From")) + " [" + _vm._s(data.debit_transaction.cashbook_account.account_number) + "] " + _vm._s(_vm.$t("To")) + " [" + _vm._s(data.credit_transaction.cashbook_account.account_number) + "]\n                  ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalTransfer) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Closing Balance")))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.reportInfo.closingBalances, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.bank_name) + " [" + _vm._s(data.account_number) + "]")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.current_balance) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalClosingBalance) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2)])])])])]) : _vm._e()]);
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

;// CONCATENATED MODULE: ./resources/js/pages/reports/summary.vue?vue&type=template&id=2ff39733&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for summary report with current filters
      var params = new URLSearchParams();
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }
      return "/print/reports/summary?".concat(params.toString());
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  },
  methods: {
    // submit form
    getReportData: function getReportData() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
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
            case 3:
              _this.form.currentYear = new Date().getFullYear();
            case 4:
            case "end":
              return _context.stop();
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
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        month: this.form.month,
        year: this.form.year,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('summaryReportTempData', JSON.stringify(tempData));
      toast.fire({
        type: 'success',
        title: this.$t('Filter settings saved temporarily')
      });
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('summaryReportTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.month = data.month || this.form.month;
          this.form.year = data.year || this.form.year;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('summaryReportTempData');
    },
    // print
    printWindow: function printWindow() {
      window.print();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/reports/summary.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_summaryvue_type_script_lang_js = (summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=2ff39733&prod&scoped=true&lang=css
var summaryvue_type_style_index_0_id_2ff39733_prod_scoped_true_lang_css = __webpack_require__(58363);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=2ff39733&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(summaryvue_type_style_index_0_id_2ff39733_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_summaryvue_type_style_index_0_id_2ff39733_prod_scoped_true_lang_css = (summaryvue_type_style_index_0_id_2ff39733_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=2ff39733&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/reports/summary.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2ff39733",
  null
  
)

/* harmony default export */ const summary = (component.exports);

/***/ })

}]);