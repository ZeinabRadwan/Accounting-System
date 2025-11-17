"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1866],{

/***/ 11866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loans/edit.vue?vue&type=template&id=572f271a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
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
        name: 'loans.index'
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
      "type": "button",
      "title": _vm.$t('Save Temporarily')
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateLoan.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.items && _vm.accounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "authority"
    }
  }, [_vm._v(_vm._s(_vm.$t('Loan Authority')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('authority')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "authority",
      "placeholder": _vm.$t('Select an authority')
    },
    model: {
      value: _vm.form.authority,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "authority", $$v);
      },
      expression: "form.authority"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "authority"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account'),
      "disabled": ""
    },
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
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "reason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Loan Reason'))), _c('span', {
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
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "referenceNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Reference')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.referenceNo,
      expression: "form.referenceNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('referenceNo')
    },
    attrs: {
      "id": "referenceNo",
      "type": "text",
      "name": "referenceNo",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.referenceNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "referenceNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "referenceNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "loanType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Loan Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.loanType,
      expression: "form.loanType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('loanType')
    },
    attrs: {
      "id": "loanType",
      "name": "loanType",
      "disabled": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "loanType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Term Loan')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Cash Credit(CC) Loan')) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "loanType"
    }
  })], 1)]), _vm._v(" "), _vm.form.authority && _vm.form.loanType == 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "ccLoanLimit"
    }
  }, [_vm._v(_vm._s(_vm.$t('CC Limit')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.authority.ccLimit,
      expression: "form.authority.ccLimit"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "ccLoanLimit",
      "type": "text",
      "name": "ccLoanLimit",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.authority.ccLimit
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.authority, "ccLimit", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "availableAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Available Amount')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.authority.availableCCLoan,
      expression: "form.authority.availableCCLoan"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "availableAmount",
      "type": "text",
      "name": "availableAmount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.authority.availableCCLoan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.authority, "availableCCLoan", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.form.loanType == 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
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
      "placeholder": _vm.$t('Enter an amount'),
      "min": _vm.form.due,
      "max": _vm.form.loanType == 0 ? _vm.form.authority.availableCCLoan + _vm.form.rowPayableAMount : ''
    },
    domProps: {
      "value": _vm.form.amount
    },
    on: {
      "change": _vm.generatePayable,
      "keyup": _vm.generatePayable,
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
    staticClass: "form-group col-md-6"
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
  })], 1)]) : _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
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
      "placeholder": _vm.$t('Enter an amount'),
      "min": _vm.form.due - _vm.form.interestAmount,
      "max": _vm.form.loanType == 0 ? _vm.form.authority.availableAmount : ''
    },
    domProps: {
      "value": _vm.form.amount
    },
    on: {
      "change": _vm.generatePayable,
      "keyup": _vm.generatePayable,
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
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "interest"
    }
  }, [_vm._v(_vm._s(_vm.$t('Interest')) + " (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.interest,
      expression: "form.interest"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('interest')
    },
    attrs: {
      "id": "interest",
      "type": "number",
      "step": "any",
      "min": "0",
      "max": "100",
      "name": "interest",
      "placeholder": _vm.$t('Enter an interest rate in percentage')
    },
    domProps: {
      "value": _vm.form.interest
    },
    on: {
      "change": _vm.generatePayable,
      "keyup": _vm.generatePayable,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "interest", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentType,
      expression: "form.paymentType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentType')
    },
    attrs: {
      "id": "paymentType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.generatePayable]
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Daily')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Monthly')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yearly')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentType"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "duration"
    }
  }, [_vm._v(_vm._s(_vm.$t('Duration')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.duration,
      expression: "form.duration"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('duration')
    },
    attrs: {
      "id": "duration",
      "type": "number",
      "step": "1",
      "name": "duration",
      "placeholder": _vm.$t('Enter a duration'),
      "min": "1",
      "max": "255"
    },
    domProps: {
      "value": _vm.form.duration
    },
    on: {
      "change": _vm.generatePayable,
      "keyup": _vm.generatePayable,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "duration", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "duration"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "payReturn"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Per')) + "\n                  "), _vm.form.paymentType == 0 ? _c('span', [_vm._v(_vm._s(_vm.$t('Day')))]) : _vm.form.paymentType == 1 ? _c('span', [_vm._v(_vm._s(_vm.$t('Month')))]) : _c('span', [_vm._v(_vm._s(_vm.$t('Year')))])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.payReturn,
      expression: "form.payReturn"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('payReturn')
    },
    attrs: {
      "id": "payReturn",
      "type": "text",
      "name": "payReturn",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.payReturn
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "payReturn", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "payReturn"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "payableAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payable Amount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.form.payableAmount,
      expression: "form.payableAmount",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('payableAmount')
    },
    attrs: {
      "id": "payableAmount",
      "type": "text",
      "name": "payableAmount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.payableAmount
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "payableAmount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Image')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.url ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Attached Image')
    }
  }) : _vm._e()])], 1)])]), _vm._v(" "), _c('div', {
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
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n                ")]), _vm._v(" "), _c('button', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loans/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Loan')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Loan',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Loans',
        url: 'loans.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        reason: '',
        authority: '',
        referenceNo: '',
        account: '',
        loanType: 1,
        amount: '',
        interest: '',
        payableAmount: '',
        rowPayableAMount: 0,
        interestAmount: 0,
        paymentType: 1,
        duration: '',
        payReturn: '',
        due: '',
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        image: ''
      }),
      url: null,
      options: [],
      accounts: ''
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])),
  created: function created() {
    this.getAuthorities();
    this.getAccounts();
    this.getLoan();
  },
  mounted: function mounted() {
    var _this = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  methods: {
    // get all expense categories
    getAuthorities: function getAuthorities() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-loan-authorities'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.accounts = data.data;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get loan
    getLoan: function getLoan() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/loans/' + _this4.$route.params.slug);
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this4.form.reason = data.data.reason;
              _this4.form.referenceNo = data.data.reference;
              _this4.form.authority = data.data.authority;
              _this4.form.account = data.data.account;
              _this4.form.amount = data.data.transaction.amount;
              _this4.form.loanType = data.data.loanType;
              _this4.form.interest = data.data.interestRate;
              _this4.form.paymentType = data.data.paymentType;
              _this4.form.duration = data.data.duration;
              _this4.form.payReturn = data.data.perMonth;
              _this4.form.payableAmount = Number(data.data.payable);
              _this4.form.rowPayableAMount = Number(data.data.payable);
              _this4.form.due = Number(data.data.due);
              _this4.form.interestAmount = Number(data.data.interestAmount);
              _this4.form.date = data.data.date;
              _this4.form.note = data.data.note;
              _this4.form.status = data.data.status;
              _this4.url = data.data.image;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this5 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this5.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // generate payable amount
    generatePayable: function generatePayable() {
      var amount = Number(this.form.amount);
      var interest = Number(this.form.interest);
      var duration = Number(this.form.duration);
      this.form.payableAmount = 0;
      if (this.form.loanType == 0) {
        this.form.rowPayableAMount = amount + interest;
        return this.form.payableAmount = amount + ' + ' + interest + ' = ' + this.form.rowPayableAMount;
      } else {
        var totalInterestAmount = 0;
        var monthlyPayment = 0;
        var interestRate = interest / 100;
        var numOfYears = 0;
        if (interest && duration) {
          if (this.form.paymentType == 0) {
            numOfYears = duration / 365;
          } else if (this.form.paymentType == 1) {
            numOfYears = duration / 12;
          } else {
            numOfYears = duration;
          }
          monthlyPayment = Number((interestRate / 12 * amount / (1 - Math.pow(1 + interestRate / 12, numOfYears * -12))).toFixed(2));
          totalInterestAmount = Number((monthlyPayment * (numOfYears * 12) - amount).toFixed(2));
          this.form.rowPayableAMount = Number((amount + totalInterestAmount).toFixed(2));
          this.form.payableAmount = amount + ' + ' + totalInterestAmount + ' = ' + this.form.rowPayableAMount;
          return this.form.payReturn = Number((this.form.rowPayableAMount / duration).toFixed(2));
        }
      }
    },
    // update loan
    updateLoan: function updateLoan() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this6.form.patch(window.location.origin + '/api/loans/' + _this6.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this6.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this6.$t('Loan updated successfully')
                });
                _this6.$router.push({
                  name: 'loans.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this6.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        authority: this.form.authority,
        account: this.form.account,
        reason: this.form.reason,
        amount: this.form.amount,
        interestRate: this.form.interestRate,
        duration: this.form.duration,
        durationType: this.form.durationType,
        installmentAmount: this.form.installmentAmount,
        installmentType: this.form.installmentType,
        startDate: this.form.startDate,
        endDate: this.form.endDate,
        status: this.form.status,
        note: this.form.note,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('loanEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('loanEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.authority = data.authority || this.form.authority;
          this.form.account = data.account || this.form.account;
          this.form.reason = data.reason || this.form.reason;
          this.form.amount = data.amount || this.form.amount;
          this.form.interestRate = data.interestRate || this.form.interestRate;
          this.form.duration = data.duration || this.form.duration;
          this.form.durationType = data.durationType || this.form.durationType;
          this.form.installmentAmount = data.installmentAmount || this.form.installmentAmount;
          this.form.installmentType = data.installmentType || this.form.installmentType;
          this.form.startDate = data.startDate || this.form.startDate;
          this.form.endDate = data.endDate || this.form.endDate;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.note = data.note || this.form.note;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('loanEditTempData');
    }
  }
});
;// ./resources/js/pages/loans/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const loans_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loans/edit.vue?vue&type=style&index=0&id=572f271a&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_572f271a_prod_scoped_true_lang_css = __webpack_require__(13299);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loans/edit.vue?vue&type=style&index=0&id=572f271a&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_572f271a_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const loans_editvue_type_style_index_0_id_572f271a_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_572f271a_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/loans/edit.vue?vue&type=style&index=0&id=572f271a&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/loans/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  loans_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "572f271a",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 13299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-572f271a]{gap:10px}.header-buttons[data-v-572f271a]{margin-bottom:15px}.footer-buttons[data-v-572f271a]{display:flex;gap:10px}.footer-buttons .btn[data-v-572f271a]{margin-right:10px}.footer-buttons .btn[data-v-572f271a]:last-child{margin-right:0}.card[data-v-572f271a]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-572f271a]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-572f271a]{background:#fff!important}.btn-primary[data-v-572f271a]{background:#2ab930!important}.btn-primary[data-v-572f271a],.btn-secondary[data-v-572f271a]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-572f271a]{background:#33a0d9!important}.btn-secondary[data-v-572f271a]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);