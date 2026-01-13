"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8215],{

/***/ 18215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var items;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-expense-sub-categories'
              });
            case 3:
              items = _this.$store.getters['operations/items'];
              console.log('Sub Categories loaded:', items);
              console.log('Items type:', _typeof(items), 'Is Array:', Array.isArray(items));
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error('Error loading sub categories:', _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    // get payment accounts (with available balance)
    getAccounts: function getAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data, accountsData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              console.log('Loading payment accounts...');
              _context2.next = 4;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 4:
              _yield$axios$get = _context2.sent;
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
              _context2.next = 15;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.error('Error loading payment accounts:', _context2.t0);
              _this2.accounts = [];
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    // get expense accounts from routing settings
    getExpenseAccounts: function getExpenseAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios_default().get(window.location.origin + '/api/expense-accounts');
            case 3:
              _yield$axios$get2 = _context3.sent;
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
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error('Error loading expense accounts:', _context3.t0);
              _this3.expenseAccounts = [];
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    // get all cost centers
    getCostCenters: function getCostCenters() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + "/api/cost-centers");
            case 3:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              if (data.data && Array.isArray(data.data)) {
                _this4.costCenters = data.data;
              } else if (Array.isArray(data)) {
                _this4.costCenters = data;
              } else {
                _this4.costCenters = [];
              }
              _context4.next = 12;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error('Error getting cost centers:', _context4.t0);
              _this4.costCenters = [];
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var user, isSuperAdmin, branchesData, _yield$axios$get4, data, _yield$axios$get5, _data, _yield$axios$get6, _data2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              user = _this5.$store.getters['auth/user'];
              isSuperAdmin = user && Number(user.account_role) === 1;
              branchesData = [];
              if (!isSuperAdmin) {
                _context5.next = 12;
                break;
              }
              _context5.next = 7;
              return axios_default().get('/api/branches');
            case 7:
              _yield$axios$get4 = _context5.sent;
              data = _yield$axios$get4.data;
              if (data && data.data && Array.isArray(data.data)) {
                branchesData = data.data;
              } else if (Array.isArray(data)) {
                branchesData = data;
              }
              _context5.next = 28;
              break;
            case 12:
              if (!(user && user.id)) {
                _context5.next = 28;
                break;
              }
              _context5.prev = 13;
              _context5.next = 16;
              return axios_default().get("/api/users/".concat(user.id, "/branches"));
            case 16:
              _yield$axios$get5 = _context5.sent;
              _data = _yield$axios$get5.data;
              if (Array.isArray(_data)) {
                branchesData = _data;
              } else if (_data && Array.isArray(_data.data)) {
                branchesData = _data.data;
              }
              _context5.next = 28;
              break;
            case 21:
              _context5.prev = 21;
              _context5.t0 = _context5["catch"](13);
              _context5.next = 25;
              return axios_default().get('/api/branches');
            case 25:
              _yield$axios$get6 = _context5.sent;
              _data2 = _yield$axios$get6.data;
              if (_data2 && _data2.data && Array.isArray(_data2.data)) {
                branchesData = _data2.data;
              }
            case 28:
              _this5.branches = branchesData;
              _context5.next = 35;
              break;
            case 31:
              _context5.prev = 31;
              _context5.t1 = _context5["catch"](0);
              console.error('Error getting branches:', _context5.t1);
              _this5.branches = [];
            case 35:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 31], [13, 21]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get7, data, _this6$appInfo, defaultVatRateSlug;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 3:
              _yield$axios$get7 = _context6.sent;
              data = _yield$axios$get7.data;
              _this6.taxes = data.data || [];
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = (_this6$appInfo = _this6.appInfo) === null || _this6$appInfo === void 0 ? void 0 : _this6$appInfo.defaultVatRateSlug;
                _this6.form.orderTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                }) || _this6.taxes[0];
                _this6.onTaxChange();
              }
              _context6.next = 13;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error('Error getting taxes:', _context6.t0);
              _this6.taxes = [];
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var formData, response, _error$response, _error$response2, _error$response3, errors, errorMessages, _error$response4;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!_this8.form.account || !_this8.form.account.id)) {
                _context7.next = 3;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select a payment account')
              });
              return _context7.abrupt("return");
            case 3:
              if (!(!_this8.form.expenseAccount || !_this8.form.expenseAccount.id)) {
                _context7.next = 6;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select an expense account')
              });
              return _context7.abrupt("return");
            case 6:
              if (!(!_this8.form.subCategory || !_this8.form.subCategory.id)) {
                _context7.next = 9;
                break;
              }
              sweetalert2_all_default().fire({
                icon: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Please select a sub category')
              });
              return _context7.abrupt("return");
            case 9:
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
              _context7.prev = 28;
              _context7.next = 31;
              return axios_default().post(window.location.origin + '/api/expenses', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 31:
              response = _context7.sent;
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
              _context7.next = 39;
              break;
            case 35:
              _context7.prev = 35;
              _context7.t0 = _context7["catch"](28);
              console.error('Error details:', (_error$response = _context7.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
              if (((_error$response2 = _context7.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 422 && (_error$response3 = _context7.t0.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.errors) {
                errors = _context7.t0.response.data.errors;
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
                  text: ((_error$response4 = _context7.t0.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this8.$t('Please check your input and try again.')
                });
              }
            case 39:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[28, 35]]);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=6431ddc8&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_6431ddc8_prod_scoped_true_lang_css = __webpack_require__(79617);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=6431ddc8&prod&scoped=true&lang=css

            

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

/***/ }),

/***/ 79617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-6431ddc8]{gap:10px}.header-buttons[data-v-6431ddc8]{margin-bottom:15px}.footer-buttons[data-v-6431ddc8]{display:flex;gap:10px}.footer-buttons .btn[data-v-6431ddc8]{margin-right:10px}.footer-buttons .btn[data-v-6431ddc8]:last-child{margin-right:0}.card[data-v-6431ddc8]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-6431ddc8]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-6431ddc8]{padding:1.25rem}.card-footer[data-v-6431ddc8]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-6431ddc8]{background:#2ab930!important}.btn-primary[data-v-6431ddc8],.btn-secondary[data-v-6431ddc8]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-6431ddc8]{background:#33a0d9!important}.btn-secondary[data-v-6431ddc8]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);