"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5420],{

/***/ 24597
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-6431ddc8]{gap:10px}.header-buttons[data-v-6431ddc8]{margin-bottom:15px}.footer-buttons[data-v-6431ddc8]{display:flex;gap:10px}.footer-buttons .btn[data-v-6431ddc8]{margin-right:10px}.footer-buttons .btn[data-v-6431ddc8]:last-child{margin-right:0}.card[data-v-6431ddc8]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-6431ddc8]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-6431ddc8]{padding:1.25rem}.card-footer[data-v-6431ddc8]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-6431ddc8]{background:#2ab930!important}.btn-primary[data-v-6431ddc8],.btn-secondary[data-v-6431ddc8]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-6431ddc8]{background:#33a0d9!important}.btn-secondary[data-v-6431ddc8]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 85420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=template&id=6431ddc8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
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
        name: 'expenses.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n                  ")]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save Temporarily')
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveExpense.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "costCenter"
    }
  }, [_vm._v(_vm._s(_vm.$t("Cost Center")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('cost_center_id')
    },
    attrs: {
      "options": _vm.costCenters,
      "label": "name",
      "name": "costCenter",
      "placeholder": _vm.$t('Select a cost center')
    },
    on: {
      "input": _vm.onCostCenterChange
    },
    model: {
      value: _vm.form.costCenter,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "costCenter", $$v);
      },
      expression: "form.costCenter"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "cost_center_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "branch"
    }
  }, [_vm._v(_vm._s(_vm.$t("Branch")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('branch_id')
    },
    attrs: {
      "options": _vm.branches,
      "label": "name",
      "name": "branch",
      "placeholder": _vm.$t('Select a branch')
    },
    on: {
      "input": _vm.onBranchChange
    },
    model: {
      value: _vm.form.branch,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "branch", $$v);
      },
      expression: "form.branch"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branch_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "reason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Reason')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reason,
      expression: "form.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reason')
    },
    attrs: {
      "id": "reason",
      "type": "text",
      "name": "reason",
      "placeholder": _vm.$t('Enter a reason')
    },
    domProps: {
      "value": _vm.form.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reason"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t('Category Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  }), _vm._v(" "), _vm.items.length === 0 ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Loading categories...')) + "\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts || [],
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select payment account')
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
    }]),
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
  }), _vm._v(" "), !_vm.accounts || _vm.accounts.length === 0 ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Loading payment accounts...')) + "\n                ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "availableBalance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Available Balance')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.availableBalance,
      expression: "form.availableBalance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('availableBalance')
    },
    attrs: {
      "id": "availableBalance",
      "type": "number",
      "step": "any",
      "name": "availableBalance",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.availableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "availableBalance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "availableBalance"
    }
  })], 1), _vm._v(" "), _vm.expenseAccounts ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "expenseAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('expenseAccount')
    },
    attrs: {
      "options": _vm.expenseAccounts,
      "label": "label",
      "name": "expenseAccount",
      "placeholder": _vm.$t('Select expense account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('strong', [_vm._v(_vm._s(option.name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(option.code) + " - " + _vm._s(option.type))])];
      }
    }], null, false, 2338588828),
    model: {
      value: _vm.form.expenseAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "expenseAccount", $$v);
      },
      expression: "form.expenseAccount"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "expenseAccount"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t('This account will be debited for the expense')))])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Amount')) + "\n                  "), _c('span', {
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('input', {
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
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Reference Number")) + "\n                ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reference')
    },
    attrs: {
      "id": "reference",
      "type": "text",
      "name": "reference",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.reference
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('reference');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "voucherNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Voucher No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.voucherNo,
      expression: "form.voucherNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('voucherNo')
    },
    attrs: {
      "id": "voucherNo",
      "type": "text",
      "name": "voucherNo",
      "placeholder": _vm.$t('Voucher No')
    },
    domProps: {
      "value": _vm.form.voucherNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "voucherNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "voucherNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
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
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.clearFieldError('status');
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Active')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Inactive')) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Type")))]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": function input($event) {
        _vm.onTaxChange();
        _vm.clearFieldError('orderTax');
      }
    },
    model: {
      value: _vm.form.orderTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "orderTax", $$v);
      },
      expression: "form.orderTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "orderTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes && _vm.form.orderTax ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "taxValue"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Amount")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.taxValue,
      expression: "form.taxValue"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('taxValue')
    },
    attrs: {
      "id": "taxValue",
      "type": "number",
      "step": "any",
      "name": "taxValue",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.taxValue
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "taxValue", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "taxValue"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "attachments"
    }
  }, [_vm._v(_vm._s(_vm.$t("Attachments")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('attachments')
    },
    attrs: {
      "id": "attachments",
      "type": "file",
      "multiple": "",
      "name": "attachments"
    },
    on: {
      "change": _vm.onAttachmentChange
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "attachments"
    }
  }), _vm._v(" "), _vm.form.attachments && _vm.form.attachments.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Selected files")) + ":")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mt-1"
  }, _vm._l(_vm.form.attachments, function (file, index) {
    return _c('li', {
      key: index,
      staticClass: "d-flex justify-content-between align-items-center mb-1"
    }, [_c('span', {
      staticClass: "text-truncate",
      staticStyle: {
        "max-width": "70%"
      }
    }, [_c('i', {
      staticClass: "fas fa-file mr-1"
    }), _vm._v(_vm._s(file.name) + "\n                    ")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-sm btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeAttachment(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]);
  }), 0)]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('note');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n                  ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                  ")])], 1)])])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=script&lang=js
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Expense')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Create Expense',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Expenses',
        url: 'expenses.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        reason: '',
        subCategory: '',
        account: '',
        expenseAccount: '',
        amount: '',
        chequeNo: '',
        voucherNo: '',
        availableBalance: 0,
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        image: '',
        costCenter: null,
        cost_center_id: null,
        branch: null,
        branch_id: null,
        reference: '',
        orderTax: null,
        taxValue: 0,
        attachments: []
      }),
      url: null,
      imageFile: null,
      accounts: '',
      expenseAccounts: '',
      costCenters: [],
      branches: [],
      taxes: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    // Ensure items is always an array for v-select
    items: function items() {
      var storeItems = this.$store.getters['operations/items'];
      if (!storeItems || _typeof(storeItems) !== 'object') {
        return [];
      }
      if (Array.isArray(storeItems)) {
        return storeItems;
      }
      if (storeItems.data && Array.isArray(storeItems.data)) {
        return storeItems.data;
      }
      return [];
    }
  }),
  created: function created() {
    this.getSubCategories();
    this.getAccounts();
    this.getExpenseAccounts();
    this.getCostCenters();
    this.getBranches();
    this.getTaxes();
    if (!this.appInfo) {
      this.$store.dispatch('operations/fetchSettingData');
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  },
  watch: {
    'form.amount': function formAmount() {
      this.onTaxChange();
    }
  },
  methods: {
    // get all expense categories
    getSubCategories: function getSubCategories() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var items, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-expense-sub-categories'
              });
            case 1:
              items = _this.$store.getters['operations/items'];
              console.log('Sub Categories loaded:', items);
              console.log('Items type:', _typeof(items), 'Is Array:', Array.isArray(items));
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading sub categories:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // get payment accounts (with available balance)
    getAccounts: function getAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, accountsData, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log('Loading payment accounts...');
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              console.log('API Response:', data);
              accountsData = Array.isArray(data) ? data : data.data || data;
              if (accountsData && Array.isArray(accountsData)) {
                _this2.accounts = accountsData.map(function (account) {
                  return {
                    id: account.id,
                    label: account.label || "".concat(account.bankName, " [").concat(account.accountNumber, "]"),
                    name: account.bankName,
                    code: account.accountNumber,
                    availableBalance: account.availableBalance || 0,
                    image: account.image || null
                  };
                });
                console.log('Transformed accounts:', _this2.accounts);
                if (_this2.accounts && _this2.accounts.length > 0) {
                  _this2.updateBalance();
                }
              } else {
                console.warn('No accounts data found in response:', data);
                _this2.accounts = [];
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('Error loading payment accounts:', _t2);
              _this2.accounts = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get expense accounts from routing settings
    getExpenseAccounts: function getExpenseAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/expense-accounts');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              if (data.success) {
                _this3.expenseAccounts = data.data.accounts.map(function (account) {
                  return {
                    id: account.id,
                    label: "".concat(account.name, " [").concat(account.code, "]"),
                    name: account.name,
                    code: account.code,
                    type: account.type
                  };
                });
              } else {
                console.warn('Expense account routing not configured:', data.message);
                _this3.expenseAccounts = [];
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('Error loading expense accounts:', _t3);
              _this3.expenseAccounts = [];
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // get all cost centers
    getCostCenters: function getCostCenters() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/cost-centers");
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              if (data.data && Array.isArray(data.data)) {
                _this4.costCenters = data.data;
              } else if (Array.isArray(data)) {
                _this4.costCenters = data;
              } else {
                _this4.costCenters = [];
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('Error getting cost centers:', _t4);
              _this4.costCenters = [];
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // handle cost center change
    onCostCenterChange: function onCostCenterChange(costCenter) {
      if (costCenter && costCenter.id) {
        this.form.cost_center_id = costCenter.id;
      } else {
        this.form.cost_center_id = null;
      }
      this.clearFieldError('cost_center_id');
    },
    // get all branches
    getBranches: function getBranches() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var user, isSuperAdmin, branchesData, _yield$axios$get4, data, _yield$axios$get5, _data, _yield$axios$get6, _data2, _t5, _t6;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              user = _this5.$store.getters['auth/user'];
              isSuperAdmin = user && Number(user.account_role) === 1;
              branchesData = [];
              if (!isSuperAdmin) {
                _context5.n = 2;
                break;
              }
              _context5.n = 1;
              return axios_default().get('/api/branches');
            case 1:
              _yield$axios$get4 = _context5.v;
              data = _yield$axios$get4.data;
              if (data && data.data && Array.isArray(data.data)) {
                branchesData = data.data;
              } else if (Array.isArray(data)) {
                branchesData = data;
              }
              _context5.n = 7;
              break;
            case 2:
              if (!(user && user.id)) {
                _context5.n = 7;
                break;
              }
              _context5.p = 3;
              _context5.n = 4;
              return axios_default().get("/api/users/".concat(user.id, "/branches"));
            case 4:
              _yield$axios$get5 = _context5.v;
              _data = _yield$axios$get5.data;
              if (Array.isArray(_data)) {
                branchesData = _data;
              } else if (_data && Array.isArray(_data.data)) {
                branchesData = _data.data;
              }
              _context5.n = 7;
              break;
            case 5:
              _context5.p = 5;
              _t5 = _context5.v;
              _context5.n = 6;
              return axios_default().get('/api/branches');
            case 6:
              _yield$axios$get6 = _context5.v;
              _data2 = _yield$axios$get6.data;
              if (_data2 && _data2.data && Array.isArray(_data2.data)) {
                branchesData = _data2.data;
              }
            case 7:
              _this5.branches = branchesData;
              _context5.n = 9;
              break;
            case 8:
              _context5.p = 8;
              _t6 = _context5.v;
              console.error('Error getting branches:', _t6);
              _this5.branches = [];
            case 9:
              return _context5.a(2);
          }
        }, _callee5, null, [[3, 5], [0, 8]]);
      }))();
    },
    // handle branch change
    onBranchChange: function onBranchChange(branch) {
      if (branch && branch.id) {
        this.form.branch_id = branch.id;
      } else {
        this.form.branch_id = null;
      }
      this.clearFieldError('branch_id');
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get7, data, _this6$appInfo, defaultVatRateSlug, _t7;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get7 = _context6.v;
              data = _yield$axios$get7.data;
              _this6.taxes = data.data || [];
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = (_this6$appInfo = _this6.appInfo) === null || _this6$appInfo === void 0 ? void 0 : _this6$appInfo.defaultVatRateSlug;
                _this6.form.orderTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                }) || _this6.taxes[0];
                _this6.onTaxChange();
              }
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t7 = _context6.v;
              console.error('Error getting taxes:', _t7);
              _this6.taxes = [];
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // handle tax change
    onTaxChange: function onTaxChange() {
      if (this.form.orderTax && this.form.orderTax.rate && this.form.amount) {
        var amount = parseFloat(this.form.amount) || 0;
        var taxRate = parseFloat(this.form.orderTax.rate) || 0;
        this.form.taxValue = (amount * taxRate / 100).toFixed(2);
      } else {
        this.form.taxValue = 0;
      }
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
      return;
    },
    // handle attachment file change
    onAttachmentChange: function onAttachmentChange(e) {
      var _this7 = this;
      var files = Array.from(e.target.files);
      var validFiles = [];
      files.forEach(function (file) {
        if (file.size < 2 * 1024 * 1024) {
          validFiles.push(file);
        } else {
          sweetalert2_all_default().fire({
            icon: 'error',
            title: _this7.$t('Error!'),
            text: _this7.$t('Please select a file with size less than 2 MB')
          });
        }
      });
      if (validFiles.length > 0) {
        this.form.attachments = [].concat(_toConsumableArray(this.form.attachments), validFiles);
      }
      e.target.value = '';
    },
    // remove attachment
    removeAttachment: function removeAttachment(index) {
      this.form.attachments.splice(index, 1);
    },
    // clear field error
    clearFieldError: function clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },
    // save expense
    saveExpense: function saveExpense() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var formData, response, _error$response, _error$response2, _error$response3, errors, errorMessages, _error$response4, _t8;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!(!_this8.form.account || !_this8.form.account.id)) {
                _context7.n = 1;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select a payment account')
              });
              return _context7.a(2);
            case 1:
              if (!(!_this8.form.expenseAccount || !_this8.form.expenseAccount.id)) {
                _context7.n = 2;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select an expense account')
              });
              return _context7.a(2);
            case 2:
              if (!(!_this8.form.subCategory || !_this8.form.subCategory.id)) {
                _context7.n = 3;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select a sub category')
              });
              return _context7.a(2);
            case 3:
              formData = new FormData();
              formData.append('reason', _this8.form.reason);
              formData.append('subCategory[id]', _this8.form.subCategory.id);
              formData.append('subCategory[code]', _this8.form.subCategory.code);
              formData.append('account[id]', _this8.form.account.id);
              formData.append('account[availableBalance]', _this8.form.account.availableBalance);
              formData.append('expenseAccount[id]', _this8.form.expenseAccount.id);
              formData.append('amount', _this8.form.amount);
              formData.append('chequeNo', _this8.form.chequeNo || '');
              formData.append('voucherNo', _this8.form.voucherNo || '');
              formData.append('date', _this8.form.date);
              formData.append('note', _this8.form.note || '');
              formData.append('status', _this8.form.status);
              if (_this8.form.cost_center_id) {
                formData.append('cost_center_id', _this8.form.cost_center_id);
              }
              if (_this8.form.branch_id) {
                formData.append('branch_id', _this8.form.branch_id);
              }
              if (_this8.form.reference) {
                formData.append('reference', _this8.form.reference);
              }
              if (_this8.form.orderTax && _this8.form.orderTax.id) {
                formData.append('orderTax[id]', _this8.form.orderTax.id);
                formData.append('taxValue', _this8.form.taxValue || 0);
              }
              if (_this8.form.attachments && _this8.form.attachments.length > 0) {
                _this8.form.attachments.forEach(function (file) {
                  formData.append('attachments[]', file);
                });
              }
              if (_this8.imageFile && _this8.imageFile instanceof File) {
                formData.append('image', _this8.imageFile);
              }
              _context7.p = 4;
              _context7.n = 5;
              return axios_default().post(window.location.origin + '/api/expenses', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 5:
              response = _context7.v;
              if (response.data.success) {
                _this8.clearTemporaryData();
                sweetalert2_all_default().fire({
                  icon: 'success',
                  title: _this8.$t('Success'),
                  text: _this8.$t('Expense added successfully'),
                  timer: 2000,
                  showConfirmButton: false
                });
                _this8.$router.push({
                  name: 'expenses.index'
                });
              } else {
                sweetalert2_all_default().fire({
                  icon: 'error',
                  title: _this8.$t('Error'),
                  text: response.data.message || _this8.$t('Please check your input and try again.')
                });
              }
              _context7.n = 7;
              break;
            case 6:
              _context7.p = 6;
              _t8 = _context7.v;
              console.error('Error details:', (_error$response = _t8.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
              if (((_error$response2 = _t8.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 422 && (_error$response3 = _t8.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.errors) {
                errors = _t8.response.data.errors;
                _this8.form.errors.set(errors);
                errorMessages = [];
                Object.keys(errors).forEach(function (field) {
                  errors[field].forEach(function (msg) {
                    errorMessages.push("\u2022 ".concat(msg));
                  });
                });
                sweetalert2_all_default().fire({
                  icon: 'error',
                  title: _this8.$t('Validation Error'),
                  html: "<div style=\"text-align: right; direction: rtl;\">".concat(errorMessages.join('<br>'), "</div>"),
                  confirmButtonText: _this8.$t('OK')
                });
                _this8.$nextTick(function () {
                  setTimeout(function () {
                    var firstError = _this8.$el.querySelector('.is-invalid');
                    if (firstError) {
                      firstError.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }
                  }, 100);
                });
              } else {
                sweetalert2_all_default().fire({
                  icon: 'error',
                  title: _this8.$t('Error'),
                  text: ((_error$response4 = _t8.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this8.$t('Please check your input and try again.')
                });
              }
            case 7:
              return _context7.a(2);
          }
        }, _callee7, null, [[4, 6]]);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        reason: this.form.reason,
        subCategory: this.form.subCategory,
        account: this.form.account,
        expenseAccount: this.form.expenseAccount,
        amount: this.form.amount,
        chequeNo: this.form.chequeNo,
        voucherNo: this.form.voucherNo,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        costCenter: this.form.costCenter,
        cost_center_id: this.form.cost_center_id,
        branch: this.form.branch,
        branch_id: this.form.branch_id,
        reference: this.form.reference,
        orderTax: this.form.orderTax,
        taxValue: this.form.taxValue,
        attachments: this.form.attachments.map(function (f) {
          return {
            name: f.name,
            size: f.size
          };
        }),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('expenseTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('expenseTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.reason = data.reason || '';
          this.form.subCategory = data.subCategory || null;
          this.form.account = data.account || null;
          this.form.expenseAccount = data.expenseAccount || null;
          this.form.amount = data.amount || '';
          this.form.chequeNo = data.chequeNo || '';
          this.form.voucherNo = data.voucherNo || '';
          this.form.date = data.date || '';
          this.form.note = data.note || '';
          this.form.status = data.status !== undefined ? data.status : 1;
          this.form.costCenter = data.costCenter || null;
          this.form.cost_center_id = data.cost_center_id || null;
          this.form.branch = data.branch || null;
          this.form.branch_id = data.branch_id || null;
          this.form.reference = data.reference || '';
          this.form.orderTax = data.orderTax || null;
          this.form.taxValue = data.taxValue || 0;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('expenseTempData');
    }
  }
});
;// ./resources/js/pages/expenses/create.vue?vue&type=script&lang=js
 /* harmony default export */ const expenses_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=6431ddc8&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_6431ddc8_prod_scoped_true_lang_css = __webpack_require__(24597);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=6431ddc8&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_6431ddc8_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const expenses_createvue_type_style_index_0_id_6431ddc8_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_6431ddc8_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=6431ddc8&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/expenses/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  expenses_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6431ddc8",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }

}]);