"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4286],{

/***/ 26840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-b5b6701e]{border:none!important}.account-statement-table[data-v-b5b6701e]{border-collapse:separate;border-spacing:0}.account-statement-table thead th[data-v-b5b6701e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.account-statement-table thead tr[data-v-b5b6701e]{border:none!important}.account-statement-table thead th[data-v-b5b6701e]:first-child{border-top-left-radius:10px}.account-statement-table thead th[data-v-b5b6701e]:last-child{border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-b5b6701e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .account-statement-table thead th[data-v-b5b6701e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-b5b6701e]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.export-excel-btn[data-v-b5b6701e],.export-pdf-btn[data-v-b5b6701e],.preview-btn[data-v-b5b6701e]{background:#f6fef4!important;border:none;border-radius:10px;color:#2ab930!important}.print-btn[data-v-b5b6701e]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important}.btn-group.c-w-100[data-v-b5b6701e]{gap:10px}.card[data-v-b5b6701e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-b5b6701e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.overlay[data-v-b5b6701e]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.btn-primary[data-v-b5b6701e]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ summary)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=template&id=b5b6701e&scoped=true
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")]), _vm._v(" "), _vm.reportInfo ? _c('button', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportInfo ? _c('button', {
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
  })]) : _vm._e(), _vm._v(" "), _vm.reportInfo ? _c('a', {
    staticClass: "btn print-btn ml-2",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]) : _vm._e()])])])])])]), _vm._v(" "), _vm.reportInfo ? _c('div', {
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
  }, [_c('h5', [_vm._v("\n                      " + _vm._s(_vm.$t("Monthly Summary")) + ":\n                      " + _vm._s(_vm.reportInfo.monthName) + ", " + _vm._s(_vm.reportInfo.year)), _c('br')])])])]), _vm._v(" "), _c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Particulars")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Balance")))])]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
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

;// ./resources/js/pages/reports/summary.vue?vue&type=template&id=b5b6701e&scoped=true

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
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/summary/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/summary/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/summary.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_summaryvue_type_script_lang_js = (summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=b5b6701e&prod&scoped=true&lang=css
var summaryvue_type_style_index_0_id_b5b6701e_prod_scoped_true_lang_css = __webpack_require__(26840);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=b5b6701e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(summaryvue_type_style_index_0_id_b5b6701e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_summaryvue_type_style_index_0_id_b5b6701e_prod_scoped_true_lang_css = (summaryvue_type_style_index_0_id_b5b6701e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/summary.vue?vue&type=style&index=0&id=b5b6701e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/summary.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b5b6701e",
  null
  
)

/* harmony default export */ const summary = (component.exports);

/***/ })

}]);