"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1879],{

/***/ 4880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-group[data-v-1def6f66]{margin-bottom:1rem}.form-group label[data-v-1def6f66]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-1def6f66]{color:#dc3545;font-weight:700}.form-control[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-1def6f66]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-1def6f66]{border-color:#dc3545!important}textarea.form-control[data-v-1def6f66]{min-height:100px;resize:vertical}.v-select[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.btn-success[data-v-1def6f66]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-1def6f66]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-1def6f66]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-1def6f66]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-1def6f66]{cursor:pointer;text-decoration:none}.row[data-v-1def6f66]{margin-bottom:1rem}.row[data-v-1def6f66]:last-child{margin-bottom:0}@media (max-width:768px){.form-control[data-v-1def6f66]{font-size:.9rem;padding:8px 12px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 31879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=template&id=70eb6cbf&scoped=true
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
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2), _vm._v(" "), _c('button', {
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
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('account'),
      'account-select': true
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
        }), _vm._v("\n                      " + _vm._s(option.label) + "\n                    ")];
      }
    }], null, false, 3423241259),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('AccountCreateModal', {
    on: {
      "accountCreated": _vm.handleAccountCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
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
// EXTERNAL MODULE: ./resources/js/components/AccountCreateModal.vue + 5 modules
var AccountCreateModal = __webpack_require__(92720);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  components: {
    AccountCreateModal: AccountCreateModal/* default */.A
  },
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
  mounted: function mounted() {
    this.handleQueryParams();
  },
  methods: {
    // Handle query parameters from purchase pages
    handleQueryParams: function handleQueryParams() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var query, supplier, purchase;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              query = _this.$route.query; // If purchase and supplier are provided, auto-fill the form
              if (!(query.purchase && query.supplier)) {
                _context.n = 3;
                break;
              }
              // Set entity type to supplier
              _this.form.entityType = 'supplier';

              // Get suppliers first
              _context.n = 1;
              return _this.getSuppliers();
            case 1:
              // Find and set the supplier
              supplier = _this.suppliers.find(function (s) {
                return s.slug === query.supplier;
              });
              if (!supplier) {
                _context.n = 3;
                break;
              }
              _this.form.supplier = supplier;
              // Set payment method to purchase
              _this.form.paymentMethod = 'purchase';

              // Get purchases for this supplier
              _context.n = 2;
              return _this.getPurchases();
            case 2:
              // Find and set the purchase
              if (_this.purchases && _this.purchases.length > 0) {
                purchase = _this.purchases.find(function (p) {
                  return p.slug === query.purchase;
                });
                if (purchase) {
                  _this.form.purchase = purchase;
                }
              }
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Get clients
    getClients: function getClients() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/clients-for-noninvoice-payments'
              });
            case 1:
              _this2.clients = _this2.$store.getters['operations/items'] || [];
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Get suppliers
    getSuppliers: function getSuppliers() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this3.$store.dispatch('operations/allData', {
                path: '/api/suppliers-for-nonpurchase-payments'
              });
            case 1:
              _this3.suppliers = _this3.$store.getters['operations/items'] || [];
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Get chart of accounts
    getChartOfAccounts: function getChartOfAccounts() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/chart-of-accounts/all');
            case 1:
              _yield$axios$get = _context4.v;
              data = _yield$axios$get.data;
              _this4.chartOfAccounts = (data.data || data || []).map(function (account) {
                return {
                  id: account.id,
                  name: account.name,
                  code: account.code
                };
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Get invoices for selected client
    getInvoices: function getInvoices() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get2, data, _t;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!(_this5.form.client && _this5.form.client.slug)) {
                _context5.n = 4;
                break;
              }
              _context5.p = 1;
              _context5.n = 2;
              return axios_default().get(window.location.origin + '/api/client/' + _this5.form.client.slug + '/invoices');
            case 2:
              _yield$axios$get2 = _context5.v;
              data = _yield$axios$get2.data;
              _this5.invoices = (data.invoices || []).map(function (invoice) {
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
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t = _context5.v;
              _this5.invoices = [];
            case 4:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3]]);
      }))();
    },
    // Get purchases for selected supplier
    getPurchases: function getPurchases() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get3, data, _t2;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (!(_this6.form.supplier && _this6.form.supplier.slug)) {
                _context6.n = 4;
                break;
              }
              _context6.p = 1;
              _context6.n = 2;
              return axios_default().get(window.location.origin + '/api/supplier/' + _this6.form.supplier.slug + '/purchases');
            case 2:
              _yield$axios$get3 = _context6.v;
              data = _yield$axios$get3.data;
              _this6.purchases = (data.purchases || data || []).map(function (purchase) {
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
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t2 = _context6.v;
              _this6.purchases = [];
            case 4:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3]]);
      }))();
    },
    // Get accounts
    getAccounts: function getAccounts() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get4, data;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get4 = _context7.v;
              data = _yield$axios$get4.data;
              _this7.accounts = (data.data || data || []).map(function (account) {
                return {
                  id: account.id,
                  label: account.label || "".concat(account.bankName, " [").concat(account.accountNumber, "]"),
                  bankName: account.bankName,
                  accountNumber: account.accountNumber,
                  availableBalance: account.availableBalance || 0,
                  image: account.image || null
                };
              });
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // Update balance when account changes
    updateBalance: function updateBalance() {
      // Balance is automatically displayed via v-model binding
      // This method can be used for additional logic if needed
    },
    // Handle account created event from AccountCreateModal
    handleAccountCreated: function handleAccountCreated(newAccount) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var account;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return _this8.getAccounts();
            case 1:
              // Find and select the newly created account
              // Try to find by ID first, then by account number as fallback
              account = _this8.accounts.find(function (acc) {
                return acc.id === newAccount.id;
              }); // If not found by ID, try to find by account number
              if (!account && newAccount.accountNumber) {
                account = _this8.accounts.find(function (acc) {
                  return acc.accountNumber === newAccount.accountNumber;
                });
              }

              // If still not found, use the newAccount data directly (format it properly)
              if (!account && newAccount) {
                account = {
                  id: newAccount.id,
                  label: newAccount.label || "".concat(newAccount.bankName, " [").concat(newAccount.accountNumber, "]"),
                  bankName: newAccount.bankName,
                  accountNumber: newAccount.accountNumber,
                  availableBalance: newAccount.availableBalance || 0,
                  image: newAccount.image || null
                };
                // Add it to the accounts list if not already there
                _this8.accounts.push(account);
              }
              if (account) {
                // Use $nextTick to ensure Vue updates the form
                _this8.$nextTick(function () {
                  _this8.form.account = account;
                  _this8.updateBalance();
                });
              }
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var currentClientSlug, response, newAccountId, idx, _error$response, _error$response3, _error$response4, _error$response2, _error$response5, _t3;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (!(!_this9.form.client || !_this9.form.client.slug || _this9.isAutoAssigningClient)) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _this9.isAutoAssigningClient = true;
              _context9.p = 2;
              currentClientSlug = _this9.form.client.slug;
              _context9.n = 3;
              return axios_default().post("/api/clients/".concat(_this9.form.client.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context9.v;
              if (response.data.success) {
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this9.form.client.chart_of_account_id = newAccountId;
                  idx = (_this9.clients || []).findIndex(function (i) {
                    return i.slug === currentClientSlug;
                  });
                  if (idx !== -1) {
                    _this9.$set(_this9.clients[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                _this9.$nextTick(function () {
                  _this9.$forceUpdate();
                });
                toast.fire({
                  type: 'success',
                  title: _this9.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Failed to assign Chart of Account'),
                  text: response.data.message || _this9.$t('Please try again or assign manually')
                });
              }
              _context9.n = 5;
              break;
            case 4:
              _context9.p = 4;
              _t3 = _context9.v;
              console.error('Error auto-assigning chart of account:', _t3);
              if (((_error$response = _t3.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Invalid Request'),
                  text: ((_error$response2 = _t3.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this9.$t('Please check the client data and try again')
                });
              } else if (((_error$response3 = _t3.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 403 || ((_error$response4 = _t3.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.status) === 401) {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Permission Denied'),
                  text: _this9.$t("You don't have permission to assign Chart of Accounts.")
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Failed to assign Chart of Account'),
                  text: ((_error$response5 = _t3.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.message) || _t3.message || _this9.$t('An error occurred. Please try again.')
                });
              }
            case 5:
              _context9.p = 5;
              _this9.isAutoAssigningClient = false;
              return _context9.f(5);
            case 6:
              return _context9.a(2);
          }
        }, _callee9, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Auto-assign Chart of Account for selected supplier
    autoAssignSupplierChartOfAccount: function autoAssignSupplierChartOfAccount() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var currentSupplierSlug, response, newAccountId, idx, _error$response6, _error$response8, _error$response9, _error$response7, _error$response0, _t4;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (!(!_this0.form.supplier || !_this0.form.supplier.slug || _this0.isAutoAssigningSupplier)) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              _this0.isAutoAssigningSupplier = true;
              _context0.p = 2;
              currentSupplierSlug = _this0.form.supplier.slug;
              _context0.n = 3;
              return axios_default().post("/api/suppliers/".concat(_this0.form.supplier.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context0.v;
              if (response.data.success) {
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this0.form.supplier.chart_of_account_id = newAccountId;
                  idx = (_this0.suppliers || []).findIndex(function (i) {
                    return i.slug === currentSupplierSlug;
                  });
                  if (idx !== -1) {
                    _this0.$set(_this0.suppliers[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                _this0.$nextTick(function () {
                  _this0.$forceUpdate();
                });
                toast.fire({
                  type: 'success',
                  title: _this0.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Failed to assign Chart of Account'),
                  text: response.data.message || _this0.$t('Please try again or assign manually')
                });
              }
              _context0.n = 5;
              break;
            case 4:
              _context0.p = 4;
              _t4 = _context0.v;
              console.error('Error auto-assigning chart of account:', _t4);
              if (((_error$response6 = _t4.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.status) === 400) {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Invalid Request'),
                  text: ((_error$response7 = _t4.response) === null || _error$response7 === void 0 || (_error$response7 = _error$response7.data) === null || _error$response7 === void 0 ? void 0 : _error$response7.message) || _this0.$t('Please check the supplier data and try again')
                });
              } else if (((_error$response8 = _t4.response) === null || _error$response8 === void 0 ? void 0 : _error$response8.status) === 403 || ((_error$response9 = _t4.response) === null || _error$response9 === void 0 ? void 0 : _error$response9.status) === 401) {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Permission Denied'),
                  text: _this0.$t("You don't have permission to assign Chart of Accounts.")
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Failed to assign Chart of Account'),
                  text: ((_error$response0 = _t4.response) === null || _error$response0 === void 0 || (_error$response0 = _error$response0.data) === null || _error$response0 === void 0 ? void 0 : _error$response0.message) || _t4.message || _this0.$t('An error occurred. Please try again.')
                });
              }
            case 5:
              _context0.p = 5;
              _this0.isAutoAssigningSupplier = false;
              return _context0.f(5);
            case 6:
              return _context0.a(2);
          }
        }, _callee0, null, [[2, 4, 5, 6]]);
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
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return _this1.form.post(window.location.origin + '/api/vouchers').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this1.$t('Voucher created successfully')
                });
                _this1.$router.push({
                  name: 'sendVouchers.index'
                });
              })["catch"](function (error) {
                var _error$response1, _error$response10;
                // Handle validation errors
                if ((error === null || error === void 0 || (_error$response1 = error.response) === null || _error$response1 === void 0 ? void 0 : _error$response1.status) === 422 && error !== null && error !== void 0 && (_error$response10 = error.response) !== null && _error$response10 !== void 0 && (_error$response10 = _error$response10.data) !== null && _error$response10 !== void 0 && _error$response10.errors) {
                  // Translate validation errors
                  var translatedErrors = {};
                  Object.keys(error.response.data.errors).forEach(function (field) {
                    translatedErrors[field] = error.response.data.errors[field].map(function (message) {
                      // Use translateValidationMessage to handle mixed language messages
                      return _this1.translateValidationMessage(message, field);
                    });
                  });

                  // Set the translated errors back to the form
                  _this1.form.errors.set(translatedErrors);

                  // Show a general validation error message
                  toast.fire({
                    type: 'error',
                    title: _this1.$t('Please check your input and try again.')
                  });
                } else {
                  var _error$response11, _error$response12;
                  // Handle other errors
                  var backendMessage = (error === null || error === void 0 || (_error$response11 = error.response) === null || _error$response11 === void 0 || (_error$response11 = _error$response11.data) === null || _error$response11 === void 0 ? void 0 : _error$response11.message) || (error === null || error === void 0 || (_error$response12 = error.response) === null || _error$response12 === void 0 || (_error$response12 = _error$response12.data) === null || _error$response12 === void 0 ? void 0 : _error$response12.error) || (error === null || error === void 0 ? void 0 : error.message);

                  // Try to translate the error message
                  var translatedMessage = backendMessage ? _this1.translateValidationMessage(backendMessage, '') : null;
                  toast.fire({
                    type: 'error',
                    title: translatedMessage || _this1.$t('Please check your input and try again.'),
                    text: backendMessage && translatedMessage !== backendMessage ? backendMessage : undefined
                  });
                }
              });
            case 1:
              return _context1.a(2);
          }
        }, _callee1);
      }))();
    }
  }
});
;// ./resources/js/pages/vouchers/send/create.vue?vue&type=script&lang=js
 /* harmony default export */ const send_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=70eb6cbf&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_70eb6cbf_prod_scoped_true_lang_css = __webpack_require__(91446);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=70eb6cbf&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_70eb6cbf_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const send_createvue_type_style_index_0_id_70eb6cbf_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_70eb6cbf_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/vouchers/send/create.vue?vue&type=style&index=0&id=70eb6cbf&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/vouchers/send/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  send_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "70eb6cbf",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 91446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".client-status[data-v-70eb6cbf],.supplier-status[data-v-70eb6cbf]{font-size:13px}.client-success[data-v-70eb6cbf],.client-warning[data-v-70eb6cbf],.supplier-warning[data-v-70eb6cbf]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.client-warning[data-v-70eb6cbf],.supplier-warning[data-v-70eb6cbf]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.client-success[data-v-70eb6cbf]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.create-btn[data-v-70eb6cbf]{align-items:center;background-color:#33a0d9;border:1px solid #33a0d9;border-left:none;border-radius:0 10px 10px 0;color:#fff;cursor:pointer;display:flex;justify-content:center;padding:10px 16px;transition:all .3s ease}.create-btn[data-v-70eb6cbf]:hover{background-color:#2a8bc4;border-color:#2a8bc4}.create-btn i[data-v-70eb6cbf]{font-size:18px}.account-select[data-v-70eb6cbf],[dir=rtl] .create-btn[data-v-70eb6cbf]{border-radius:10px 0 0 10px}[dir=rtl] .create-btn[data-v-70eb6cbf]{border-left:1px solid #33a0d9;border-right:none}[dir=rtl] .account-select[data-v-70eb6cbf]{border-radius:0 10px 10px 0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 92720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccountCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=template&id=1def6f66&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Bank Account")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "bankName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bank Name')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bankName')
    },
    attrs: {
      "id": "bankName",
      "type": "text",
      "name": "bankName",
      "placeholder": _vm.$t('Enter a bank name')
    },
    domProps: {
      "value": _vm.form.bankName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bankName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bankName"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "branchName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Branch Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branchName,
      expression: "form.branchName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('branchName')
    },
    attrs: {
      "id": "branchName",
      "type": "text",
      "name": "branchName",
      "placeholder": _vm.$t('Enter a branch name')
    },
    domProps: {
      "value": _vm.form.branchName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "branchName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branchName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "accountNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Number')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountNumber,
      expression: "form.accountNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('accountNumber')
    },
    attrs: {
      "id": "accountNumber",
      "type": "text",
      "name": "accountNumber",
      "placeholder": _vm.$t('Enter an account number')
    },
    domProps: {
      "value": _vm.form.accountNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "accountNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "accountNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "track-by": "id",
      "name": "chartOfAccountId",
      "placeholder": _vm.$t('Select a Chart of Account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.chartOfAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "chartOfAccountId", $$v);
      },
      expression: "form.chartOfAccountId"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chartOfAccountId"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
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
  })], 1)])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.saveAccount.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const AccountCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  data: function data() {
    return {
      showModal: false,
      form: new vform_es/* default */.Ay({
        bankName: '',
        branchName: '',
        accountNumber: '',
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        chartOfAccountId: ''
      }),
      chartOfAccounts: []
    };
  },
  created: function created() {
    this.loadChartOfAccounts();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm();
        // Refresh chart of accounts list
        this.loadChartOfAccounts();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.form.status = 1;
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.chartOfAccountId = '';
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get('/api/accounts/chart-of-accounts');
            case 1:
              response = _context.v;
              _this.chartOfAccounts = response.data.data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading chart of accounts:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Save account
    saveAccount: function saveAccount(event) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }
              _context2.n = 1;
              return _this2.form.post(window.location.origin + '/api/accounts').then(function (response) {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Account added successfully')
                });

                // Get the created account data from response
                // AccountResource returns data in response.data.data
                var accountData = response.data.data || response.data;

                // Format account for the select dropdown (matching the format used in getAccounts)
                // AccountResource already provides bankName, accountNumber, label, etc.
                var newAccount = {
                  id: accountData.id,
                  slug: accountData.slug,
                  label: accountData.label || "".concat(accountData.bankName, " [").concat(accountData.accountNumber, "]"),
                  bankName: accountData.bankName,
                  accountNumber: accountData.accountNumber,
                  availableBalance: accountData.availableBalance || 0,
                  image: accountData.image || null
                };

                // Emit event with created account data to refresh and select in parent
                _this2.$emit('accountCreated', newAccount);

                // Reset form
                _this2.resetForm();
                // Close only this modal, not parent modals
                _this2.showModal = false;
              })["catch"](function (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  if (_this2.form && _this2.form.errors && typeof _this2.form.errors.set === 'function') {
                    _this2.form.errors.set(errors);
                  }
                  var messages = Object.values(errors).flat();
                  var firstMessage = messages && messages.length ? messages[0] : _this2.$t('Validation Error');
                  toast.fire({
                    type: 'error',
                    title: firstMessage
                  });
                } else {
                  var _error$response;
                  toast.fire({
                    type: 'error',
                    title: ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_AccountCreateModalvue_type_script_lang_js = (AccountCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css
var AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = __webpack_require__(4880);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = (AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/AccountCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_AccountCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1def6f66",
  null
  
)

/* harmony default export */ const AccountCreateModal = (component.exports);

/***/ })

}]);