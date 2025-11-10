"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2934],{

/***/ 45539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".client-status[data-v-5ef24730],.supplier-status[data-v-5ef24730]{font-size:13px}.client-success[data-v-5ef24730],.client-warning[data-v-5ef24730],.supplier-warning[data-v-5ef24730]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.client-warning[data-v-5ef24730],.supplier-warning[data-v-5ef24730]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.client-success[data-v-5ef24730]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=template&id=5ef24730&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'sendVouchers.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'sendVoucherCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "sendVoucherCreateForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveVoucher.apply(null, arguments);
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
      "for": "entityType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Entity Type'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.entityType,
      expression: "form.entityType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('entityType')
    },
    attrs: {
      "id": "entityType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "entityType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onEntityTypeChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Entity Type')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t('Client')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chart_of_account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "entityType"
    }
  })], 1)]), _vm._v(" "), _vm.form && _vm.form.entityType === 'client' && _vm.clients ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t('Client'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.clients,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    on: {
      "input": _vm.onClientChange
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  }), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "client-status mt-2"
  }, [!_vm.form.client.chart_of_account_id ? _c('div', {
    staticClass: "client-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningClient
    },
    on: {
      "click": _vm.autoAssignClientChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningClient ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _c('div', {
    staticClass: "client-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client Chart of Account ready')))])])]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.form && _vm.form.entityType === 'supplier' && _vm.suppliers ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('supplier')
    },
    attrs: {
      "options": _vm.suppliers,
      "label": "name",
      "name": "supplier",
      "placeholder": _vm.$t('Select a supplier')
    },
    on: {
      "input": _vm.onSupplierChange
    },
    model: {
      value: _vm.form.supplier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "supplier", $$v);
      },
      expression: "form.supplier"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplier"
    }
  }), _vm._v(" "), _vm.form.supplier ? _c('div', {
    staticClass: "supplier-status mt-2"
  }, [!_vm.form.supplier.chart_of_account_id ? _c('div', {
    staticClass: "supplier-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Supplier needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningSupplier
    },
    on: {
      "click": _vm.autoAssignSupplierChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningSupplier ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _vm._e()]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.form && _vm.form.entityType === 'chart_of_account' && _vm.chartOfAccounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccount')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "name": "chartOfAccount",
      "placeholder": _vm.$t('Select a chart of account')
    },
    model: {
      value: _vm.form.chartOfAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "chartOfAccount", $$v);
      },
      expression: "form.chartOfAccount"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chartOfAccount"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form && _vm.form.entityType && (_vm.form.client || _vm.form.supplier || _vm.form.chartOfAccount) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentMethod"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Method'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethod,
      expression: "form.paymentMethod"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentMethod')
    },
    attrs: {
      "id": "paymentMethod"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentMethod", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onPaymentMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": "direct"
    }
  }, [_vm._v(_vm._s(_vm.$t('Direct Payment')))]), _vm._v(" "), _vm.form && _vm.form.entityType === 'supplier' ? _c('option', {
    attrs: {
      "value": "purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Payment')))]) : _vm._e()]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentMethod"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form && _vm.form.entityType === 'supplier' && _vm.form.paymentMethod === 'purchase' && _vm.purchases ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Purchase'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('purchase')
    },
    attrs: {
      "options": _vm.purchases,
      "label": "label",
      "name": "purchase",
      "placeholder": _vm.$t('Select a purchase')
    },
    model: {
      value: _vm.form.purchase,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchase", $$v);
      },
      expression: "form.purchase"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchase"
    }
  }), _vm._v(" "), _vm.form.purchase && _vm.form.purchase.purchaseTotal !== undefined ? _c('div', {
    staticClass: "purchase-details mt-3 p-3 bg-light rounded"
  }, [_c('h6', {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t('Purchase Details')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered mb-0"
  }, [_c('tr', [_c('th', {
    staticClass: "w-50"
  }, [_vm._v(_vm._s(_vm.$t('Sub Total')) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.form.purchase.subTotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.form.purchase.totalDiscount > 0 ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Discount')) + ":")]), _vm._v(" "), _c('td', [_vm._v("- " + _vm._s(_vm.formatNumber(_vm.form.purchase.totalDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _vm.form.purchase.transport > 0 ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Transport')) + ":")]), _vm._v(" "), _c('td', [_vm._v("+ " + _vm._s(_vm.formatNumber(_vm.form.purchase.transport)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _vm.form.purchase.tax > 0 ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Tax')) + " "), _vm.form.purchase.taxRate ? _c('span', [_vm._v("(" + _vm._s(_vm.form.purchase.taxRate) + "%)")]) : _vm._e(), _vm._v(":")]), _vm._v(" "), _c('td', [_vm._v("+ " + _vm._s(_vm.formatNumber(_vm.form.purchase.tax)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "bg-indigo-light"
  }, [_c('th', [_c('strong', [_vm._v(_vm._s(_vm.$t('Total')) + ":")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.form.purchase.purchaseTotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered mb-0"
  }, [_c('tr', [_c('th', {
    staticClass: "w-50"
  }, [_vm._v(_vm._s(_vm.$t('Total Paid')) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.form.purchase.totalPaid)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "bg-red-light"
  }, [_c('th', [_c('strong', [_vm._v(_vm._s(_vm.$t('Due')) + ":")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.form.purchase.due)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])])]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.accounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    on: {
      "input": _vm.updateBalance
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('img', {
          staticStyle: {
            "width": "30px",
            "height": "30px"
          },
          attrs: {
            "src": option.image
          }
        }), _vm._v("\n                    " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 1047457195),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  }), _vm._v(" "), _vm.form.account && _vm.form.account.availableBalance !== undefined ? _c('div', {
    staticClass: "account-balance mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Available Balance')) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.form.account.availableBalance)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "chequeNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Cheque No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chequeNo,
      expression: "form.chequeNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('chequeNo')
    },
    attrs: {
      "id": "chequeNo",
      "type": "text",
      "name": "chequeNo",
      "placeholder": _vm.$t('Enter cheque number')
    },
    domProps: {
      "value": _vm.form.chequeNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "chequeNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chequeNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Receipt No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.receiptNo,
      expression: "form.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('receiptNo')
    },
    attrs: {
      "id": "receiptNo",
      "type": "text",
      "name": "receiptNo",
      "placeholder": _vm.$t('Enter receipt number')
    },
    domProps: {
      "value": _vm.form.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "receiptNo"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Amount'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.amount,
      expression: "form.amount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('amount')
    },
    attrs: {
      "id": "amount",
      "type": "number",
      "step": "any",
      "min": "1",
      "name": "amount",
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.amount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "amount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Date'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date,
      expression: "form.date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('date')
    },
    attrs: {
      "id": "date",
      "type": "date",
      "name": "date"
    },
    domProps: {
      "value": _vm.form.date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=script&lang=js
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



/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Send Voucher')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: this.$t('Create'),
      breadcrumbs: [{
        name: this.$t('Dashboard'),
        url: 'home'
      }, {
        name: this.$t('Vouchers'),
        url: ''
      }, {
        name: this.$t('Send Vouchers'),
        url: 'sendVouchers.index'
      }, {
        name: this.$t('Create'),
        active: true
      }],
      form: new vform_es/* default */.Ay({
        voucherType: 0,
        // Send voucher
        entityType: '',
        client: '',
        supplier: '',
        chartOfAccount: '',
        paymentMethod: 'direct',
        invoice: '',
        purchase: '',
        account: '',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        chequeNo: '',
        receiptNo: '',
        note: '',
        status: 1
      }),
      clients: '',
      suppliers: '',
      chartOfAccounts: '',
      invoices: '',
      purchases: '',
      accounts: '',
      isAutoAssigningClient: false,
      isAutoAssigningSupplier: false
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  created: function created() {
    this.getAccounts();
  },
  methods: {
    // Get clients
    getClients: function getClients() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/clients-for-noninvoice-payments'
              });
            case 2:
              _this.clients = _this.$store.getters['operations/items'] || [];
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // Get suppliers
    getSuppliers: function getSuppliers() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/suppliers-for-nonpurchase-payments'
              });
            case 2:
              _this2.suppliers = _this2.$store.getters['operations/items'] || [];
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // Get chart of accounts
    getChartOfAccounts: function getChartOfAccounts() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + '/api/chart-of-accounts/all');
            case 2:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this3.chartOfAccounts = (data.data || data || []).map(function (account) {
                return {
                  id: account.id,
                  name: account.name,
                  code: account.code
                };
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // Get invoices for selected client
    getInvoices: function getInvoices() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_this4.form.client && _this4.form.client.slug)) {
                _context4.next = 12;
                break;
              }
              _context4.prev = 1;
              _context4.next = 4;
              return axios_default().get(window.location.origin + '/api/client/' + _this4.form.client.slug + '/invoices');
            case 4:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this4.invoices = (data.invoices || []).map(function (invoice) {
                return {
                  id: invoice.id,
                  slug: invoice.slug,
                  label: invoice.label || "".concat(invoice.invoiceNo, " - Due: ").concat(invoice.due),
                  invoiceNo: invoice.invoiceNo,
                  due: invoice.due,
                  // Store all invoice details for display
                  invoiceTotal: invoice.invoiceTotal,
                  totalPaid: invoice.totalPaid,
                  subTotal: invoice.subTotal,
                  baseSubTotal: invoice.baseSubTotal,
                  // Base subtotal (sum of product prices)
                  discount: invoice.discount,
                  transport: invoice.transport,
                  tax: invoice.tax,
                  taxRate: invoice.taxRate,
                  totalInvoiceReturn: invoice.totalInvoiceReturn || 0
                };
              });
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              _this4.invoices = [];
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 9]]);
      }))();
    },
    // Get purchases for selected supplier
    getPurchases: function getPurchases() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(_this5.form.supplier && _this5.form.supplier.slug)) {
                _context5.next = 12;
                break;
              }
              _context5.prev = 1;
              _context5.next = 4;
              return axios_default().get(window.location.origin + '/api/supplier/' + _this5.form.supplier.slug + '/purchases');
            case 4:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this5.purchases = (data.purchases || data || []).map(function (purchase) {
                return {
                  id: purchase.id,
                  slug: purchase.slug,
                  label: purchase.purchaseNo || "".concat(purchase.code, " - Due: ").concat(purchase.due),
                  purchaseNo: purchase.purchaseNo || purchase.code,
                  due: purchase.due,
                  // Store all purchase details for display
                  purchaseTotal: purchase.purchaseTotal,
                  totalPaid: purchase.totalPaid,
                  subTotal: purchase.subTotal,
                  totalDiscount: purchase.totalDiscount,
                  transport: purchase.transport,
                  tax: purchase.tax,
                  taxRate: purchase.taxRate
                };
              });
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              _this5.purchases = [];
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    },
    // Get accounts
    getAccounts: function getAccounts() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 2:
              _yield$axios$get4 = _context6.sent;
              data = _yield$axios$get4.data;
              _this6.accounts = (data.data || data || []).map(function (account) {
                return {
                  id: account.id,
                  label: account.label || "".concat(account.bankName, " [").concat(account.accountNumber, "]"),
                  bankName: account.bankName,
                  accountNumber: account.accountNumber,
                  availableBalance: account.availableBalance || 0,
                  image: account.image || null
                };
              });
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // Update balance when account changes
    updateBalance: function updateBalance() {
      // Balance is automatically displayed via v-model binding
      // This method can be used for additional logic if needed
    },
    // Handle entity type change
    onEntityTypeChange: function onEntityTypeChange() {
      this.form.client = '';
      this.form.supplier = '';
      this.form.chartOfAccount = '';
      this.form.invoice = '';
      this.form.purchase = '';
      this.invoices = '';
      this.purchases = '';
      if (this.form.entityType === 'client') {
        this.getClients();
      } else if (this.form.entityType === 'supplier') {
        this.getSuppliers();
      } else if (this.form.entityType === 'chart_of_account') {
        this.getChartOfAccounts();
      }
    },
    // Handle client change
    onClientChange: function onClientChange() {
      // Send vouchers don't support invoices
      this.form.invoice = '';
      this.invoices = '';
    },
    // Handle supplier change
    onSupplierChange: function onSupplierChange() {
      if (this.form.paymentMethod === 'purchase') {
        this.getPurchases();
      }
    },
    // Handle payment method change
    onPaymentMethodChange: function onPaymentMethodChange() {
      this.form.invoice = '';
      this.form.purchase = '';
      this.invoices = '';
      this.purchases = '';
      if (this.form.paymentMethod === 'purchase' && this.form.supplier) {
        this.getPurchases();
      }
    },
    // Auto-assign Chart of Account for selected client
    autoAssignClientChartOfAccount: function autoAssignClientChartOfAccount() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var currentClientSlug, response, newAccountId, idx, _error$response, _error$response3, _error$response4, _error$response2, _error$response5;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!_this7.form.client || !_this7.form.client.slug || _this7.isAutoAssigningClient)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this7.isAutoAssigningClient = true;
              _context7.prev = 3;
              currentClientSlug = _this7.form.client.slug;
              _context7.next = 7;
              return axios_default().post("/api/clients/".concat(_this7.form.client.slug, "/auto-assign-chart-of-account"));
            case 7:
              response = _context7.sent;
              if (response.data.success) {
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this7.form.client.chart_of_account_id = newAccountId;
                  idx = (_this7.clients || []).findIndex(function (i) {
                    return i.slug === currentClientSlug;
                  });
                  if (idx !== -1) {
                    _this7.$set(_this7.clients[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                _this7.$nextTick(function () {
                  _this7.$forceUpdate();
                });
                toast.fire({
                  type: 'success',
                  title: _this7.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Failed to assign Chart of Account'),
                  text: response.data.message || _this7.$t('Please try again or assign manually')
                });
              }
              _context7.next = 15;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](3);
              console.error('Error auto-assigning chart of account:', _context7.t0);
              if (((_error$response = _context7.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Invalid Request'),
                  text: ((_error$response2 = _context7.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this7.$t('Please check the client data and try again')
                });
              } else if (((_error$response3 = _context7.t0.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 403 || ((_error$response4 = _context7.t0.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.status) === 401) {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Permission Denied'),
                  text: _this7.$t("You don't have permission to assign Chart of Accounts.")
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Failed to assign Chart of Account'),
                  text: ((_error$response5 = _context7.t0.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.message) || _context7.t0.message || _this7.$t('An error occurred. Please try again.')
                });
              }
            case 15:
              _context7.prev = 15;
              _this7.isAutoAssigningClient = false;
              return _context7.finish(15);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3, 11, 15, 18]]);
      }))();
    },
    // Auto-assign Chart of Account for selected supplier
    autoAssignSupplierChartOfAccount: function autoAssignSupplierChartOfAccount() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var currentSupplierSlug, response, newAccountId, idx, _error$response6, _error$response8, _error$response9, _error$response7, _error$response10;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!_this8.form.supplier || !_this8.form.supplier.slug || _this8.isAutoAssigningSupplier)) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");
            case 2:
              _this8.isAutoAssigningSupplier = true;
              _context8.prev = 3;
              currentSupplierSlug = _this8.form.supplier.slug;
              _context8.next = 7;
              return axios_default().post("/api/suppliers/".concat(_this8.form.supplier.slug, "/auto-assign-chart-of-account"));
            case 7:
              response = _context8.sent;
              if (response.data.success) {
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this8.form.supplier.chart_of_account_id = newAccountId;
                  idx = (_this8.suppliers || []).findIndex(function (i) {
                    return i.slug === currentSupplierSlug;
                  });
                  if (idx !== -1) {
                    _this8.$set(_this8.suppliers[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                _this8.$nextTick(function () {
                  _this8.$forceUpdate();
                });
                toast.fire({
                  type: 'success',
                  title: _this8.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Failed to assign Chart of Account'),
                  text: response.data.message || _this8.$t('Please try again or assign manually')
                });
              }
              _context8.next = 15;
              break;
            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](3);
              console.error('Error auto-assigning chart of account:', _context8.t0);
              if (((_error$response6 = _context8.t0.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.status) === 400) {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Invalid Request'),
                  text: ((_error$response7 = _context8.t0.response) === null || _error$response7 === void 0 || (_error$response7 = _error$response7.data) === null || _error$response7 === void 0 ? void 0 : _error$response7.message) || _this8.$t('Please check the supplier data and try again')
                });
              } else if (((_error$response8 = _context8.t0.response) === null || _error$response8 === void 0 ? void 0 : _error$response8.status) === 403 || ((_error$response9 = _context8.t0.response) === null || _error$response9 === void 0 ? void 0 : _error$response9.status) === 401) {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Permission Denied'),
                  text: _this8.$t("You don't have permission to assign Chart of Accounts.")
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Failed to assign Chart of Account'),
                  text: ((_error$response10 = _context8.t0.response) === null || _error$response10 === void 0 || (_error$response10 = _error$response10.data) === null || _error$response10 === void 0 ? void 0 : _error$response10.message) || _context8.t0.message || _this8.$t('An error occurred. Please try again.')
                });
              }
            case 15:
              _context8.prev = 15;
              _this8.isAutoAssigningSupplier = false;
              return _context8.finish(15);
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[3, 11, 15, 18]]);
      }))();
    },
    // Format number for display
    formatNumber: function formatNumber(number) {
      if (number !== null && number !== undefined) {
        return Number(number).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
      return '0.00';
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for voucher send form fields
      var fieldLabelMap = {
        'entityType': this.$t('Entity Type'),
        'entity type': this.$t('Entity Type'),
        'entity_type': this.$t('Entity Type'),
        'client': this.$t('Client'),
        'supplier': this.$t('Supplier'),
        'chartOfAccount': this.$t('Chart of Account'),
        'chart of account': this.$t('Chart of Account'),
        'chart_of_account': this.$t('Chart of Account'),
        'paymentMethod': this.$t('Payment Method'),
        'payment method': this.$t('Payment Method'),
        'payment_method': this.$t('Payment Method'),
        'purchase': this.$t('Select Purchase'),
        'account': this.$t('Account'),
        'amount': this.$t('Amount'),
        'date': this.$t('Date'),
        'chequeNo': this.$t('Cheque No'),
        'cheque no': this.$t('Cheque No'),
        'cheque_no': this.$t('Cheque No'),
        'receiptNo': this.$t('Receipt No'),
        'receipt no': this.$t('Receipt No'),
        'receipt_no': this.$t('Receipt No'),
        'note': this.$t('Note'),
        'status': this.$t('Status')
      };
      var fieldLabel = fieldLabelMap[field] || fieldLabelMap[field === null || field === void 0 ? void 0 : field.toLowerCase()] || field;

      // Handle mixed language messages from backend (Arabic + English)
      // Pattern: "حقل [field] مطلوب" -> "Field is required"
      var mixedLanguagePatterns = [
      // Arabic "حقل" + English field + Arabic "مطلوب"
      {
        re: /حقل\s+([^م]+?)\s+مطلوب/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "".concat(fieldTranslation, " is required");
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "".concat(fieldTranslation, " \u0645\u0637\u0644\u0648\u0628");
        }
      },
      // Arabic "يرجى اختيار" + English field
      {
        re: /يرجى\s+اختيار\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "Please select ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(fieldTranslation);
        }
      },
      // Arabic "يرجى إدخال" + English field
      {
        re: /يرجى\s+إدخال\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "Please enter ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ".concat(fieldTranslation);
        }
      }];

      // Check mixed language patterns first
      for (var _i = 0, _mixedLanguagePattern = mixedLanguagePatterns; _i < _mixedLanguagePattern.length; _i++) {
        var _mixedLanguagePattern2 = _mixedLanguagePattern[_i],
          re = _mixedLanguagePattern2.re,
          en = _mixedLanguagePattern2.en,
          ar = _mixedLanguagePattern2.ar;
        var match = message.match(re);
        if (match) {
          var text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en).apply(void 0, _toConsumableArray(match)) : isArabic ? ar : en;
          return text;
        }
      }

      // Additional pattern for "حقل [field] مطلوب" format
      if (message.includes('حقل') && message.includes('مطلوب')) {
        var fieldMatch = message.match(/حقل\s+([^م]+?)\s+مطلوب/i);
        if (fieldMatch) {
          var fieldName = fieldMatch[1].trim();
          var fieldTranslation = fieldLabelMap[fieldName] || fieldLabelMap[fieldName.toLowerCase()] || fieldLabelMap[fieldName.replace(/\s+/g, '')] || fieldLabelMap[fieldName.replace(/\s+/g, '_')] || fieldName;
          return isArabic ? "".concat(fieldTranslation, " \u0645\u0637\u0644\u0648\u0628") : "".concat(fieldTranslation, " is required");
        }
      }

      // Handle "يرجى اختيار" patterns
      if (message.includes('يرجى اختيار')) {
        var _fieldMatch = message.match(/يرجى\s+اختيار\s+([^.]+)/i);
        if (_fieldMatch) {
          var _fieldName = _fieldMatch[1].trim();
          var _fieldTranslation = fieldLabelMap[_fieldName] || fieldLabelMap[_fieldName.toLowerCase()] || fieldLabelMap[_fieldName.replace(/\s+/g, '')] || fieldLabelMap[_fieldName.replace(/\s+/g, '_')] || _fieldName;
          return isArabic ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(_fieldTranslation) : "Please select ".concat(_fieldTranslation);
        }
      }

      // Common Laravel validation patterns with localized messages
      var patterns = [
      // Required field patterns
      {
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "".concat(fieldLabel, " is required"),
        ar: "".concat(fieldLabel, " \u0645\u0637\u0644\u0648\u0628")
      }, {
        re: /Please\s+select\s+an?\s+.+?\.?/i,
        en: "Please select ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(fieldLabel)
      }, {
        re: /Please\s+enter\s+a\s+.+?\.?/i,
        en: "Please enter ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ".concat(fieldLabel)
      }, {
        re: /Please\s+provide\s+a\s+.+?\.?/i,
        en: "Please provide ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645 ".concat(fieldLabel)
      }];

      // Check standard Laravel patterns
      for (var _i2 = 0, _patterns = patterns; _i2 < _patterns.length; _i2++) {
        var _patterns$_i = _patterns[_i2],
          _re = _patterns$_i.re,
          _en = _patterns$_i.en,
          _ar = _patterns$_i.ar;
        if (_re.test(message)) {
          return isArabic ? _ar : _en;
        }
      }

      // Fallback: return the message with translation attempt
      return this.$t(message) !== message ? this.$t(message) : message;
    },
    // Save voucher
    saveVoucher: function saveVoucher() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this9.form.post(window.location.origin + '/api/vouchers').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this9.$t('Voucher created successfully')
                });
                _this9.$router.push({
                  name: 'sendVouchers.index'
                });
              })["catch"](function (error) {
                var _error$response11, _error$response12;
                // Handle validation errors
                if ((error === null || error === void 0 || (_error$response11 = error.response) === null || _error$response11 === void 0 ? void 0 : _error$response11.status) === 422 && error !== null && error !== void 0 && (_error$response12 = error.response) !== null && _error$response12 !== void 0 && (_error$response12 = _error$response12.data) !== null && _error$response12 !== void 0 && _error$response12.errors) {
                  // Translate validation errors
                  var translatedErrors = {};
                  Object.keys(error.response.data.errors).forEach(function (field) {
                    translatedErrors[field] = error.response.data.errors[field].map(function (message) {
                      // Use translateValidationMessage to handle mixed language messages
                      return _this9.translateValidationMessage(message, field);
                    });
                  });

                  // Set the translated errors back to the form
                  _this9.form.errors.set(translatedErrors);

                  // Show a general validation error message
                  toast.fire({
                    type: 'error',
                    title: _this9.$t('Please check your input and try again.')
                  });
                } else {
                  var _error$response13, _error$response14;
                  // Handle other errors
                  var backendMessage = (error === null || error === void 0 || (_error$response13 = error.response) === null || _error$response13 === void 0 || (_error$response13 = _error$response13.data) === null || _error$response13 === void 0 ? void 0 : _error$response13.message) || (error === null || error === void 0 || (_error$response14 = error.response) === null || _error$response14 === void 0 || (_error$response14 = _error$response14.data) === null || _error$response14 === void 0 ? void 0 : _error$response14.error) || (error === null || error === void 0 ? void 0 : error.message);

                  // Try to translate the error message
                  var translatedMessage = backendMessage ? _this9.translateValidationMessage(backendMessage, '') : null;
                  toast.fire({
                    type: 'error',
                    title: translatedMessage || _this9.$t('Please check your input and try again.'),
                    text: backendMessage && translatedMessage !== backendMessage ? backendMessage : undefined
                  });
                }
              });
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/vouchers/send/create.vue?vue&type=script&lang=js
 /* harmony default export */ const send_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=5ef24730&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_5ef24730_prod_scoped_true_lang_css = __webpack_require__(45539);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=5ef24730&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_5ef24730_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const send_createvue_type_style_index_0_id_5ef24730_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_5ef24730_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=5ef24730&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/vouchers/send/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  send_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5ef24730",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ })

}]);