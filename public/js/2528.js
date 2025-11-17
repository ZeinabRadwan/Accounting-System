"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2528],{

/***/ 26125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-643d4408]{gap:10px}.header-buttons[data-v-643d4408]{margin-bottom:15px}.footer-buttons[data-v-643d4408]{display:flex;gap:10px}.footer-buttons .btn[data-v-643d4408]{margin-right:10px}.footer-buttons .btn[data-v-643d4408]:last-child{margin-right:0}.card[data-v-643d4408]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-643d4408]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-643d4408]{background:#fff!important}.btn-primary[data-v-643d4408]{background:#2ab930!important}.btn-primary[data-v-643d4408],.btn-secondary[data-v-643d4408]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-643d4408]{background:#33a0d9!important}.btn-secondary[data-v-643d4408]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payroll/edit.vue?vue&type=template&id=643d4408&scoped=true
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
        name: 'payroll.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2)], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePayroll.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.items ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "employee"
    }
  }, [_vm._v(_vm._s(_vm.$t('Employee'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.items ? _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('employee')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "employee",
      "placeholder": _vm.$t('Select an employee')
    },
    on: {
      "input": _vm.calculateTotalSalary
    },
    model: {
      value: _vm.form.employee,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "employee", $$v);
      },
      expression: "form.employee"
    }
  }) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "employee"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "salaryMonth"
    }
  }, [_vm._v(_vm._s(_vm.$t('Salary Month'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salaryMonth,
      expression: "form.salaryMonth"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('salaryMonth')
    },
    attrs: {
      "id": "salaryMonth",
      "name": "salaryMonth"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "salaryMonth", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Select a salary month')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "January"
    }
  }, [_vm._v("January")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "February"
    }
  }, [_vm._v("February")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "March"
    }
  }, [_vm._v("March")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "April"
    }
  }, [_vm._v("April")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "May"
    }
  }, [_vm._v("May")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "June"
    }
  }, [_vm._v("June")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "July"
    }
  }, [_vm._v("July")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "August"
    }
  }, [_vm._v("August")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "September"
    }
  }, [_vm._v("September")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "October"
    }
  }, [_vm._v("October")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "November"
    }
  }, [_vm._v("November")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "December"
    }
  }, [_vm._v("December")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salaryMonth"
    }
  })], 1)]), _vm._v(" "), _vm.form.employee ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "presentSalary"
    }
  }, [_vm._v(_vm._s(_vm.$t('Present Salary')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.employee.totalSalary,
      expression: "form.employee.totalSalary"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('presentSalary')
    },
    attrs: {
      "id": "presentSalary",
      "type": "number",
      "step": "any",
      "name": "presentSalary",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.employee.totalSalary
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.employee, "totalSalary", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deductionAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Deduction Amount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deductionAmount,
      expression: "form.deductionAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deductionAmount')
    },
    attrs: {
      "id": "deductionAmount",
      "type": "number",
      "step": "any",
      "name": "deductionAmount",
      "min": "0",
      "placeholder": _vm.$t('Enter a deduction amount')
    },
    domProps: {
      "value": _vm.form.deductionAmount
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deductionAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deductionAmount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deductionReason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Deduction Reason')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deductionReason,
      expression: "form.deductionReason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deductionReason')
    },
    attrs: {
      "id": "deductionReason",
      "type": "text",
      "name": "deductionReason",
      "placeholder": _vm.$t('Enter a deduction reason')
    },
    domProps: {
      "value": _vm.form.deductionReason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deductionReason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deductionReason"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "mobileBill"
    }
  }, [_vm._v(_vm._s(_vm.$t('Mobile Bill')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mobileBill,
      expression: "form.mobileBill"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mobileBill')
    },
    attrs: {
      "id": "mobileBill",
      "type": "number",
      "step": "any",
      "name": "mobileBill",
      "min": "0",
      "placeholder": _vm.$t('Enter a mobile bill')
    },
    domProps: {
      "value": _vm.form.mobileBill
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mobileBill", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mobileBill"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "foodBill"
    }
  }, [_vm._v(_vm._s(_vm.$t('Food Bill')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.foodBill,
      expression: "form.foodBill"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('foodBill')
    },
    attrs: {
      "id": "foodBill",
      "type": "number",
      "step": "any",
      "name": "foodBill",
      "placeholder": _vm.$t('Enter a food bill')
    },
    domProps: {
      "value": _vm.form.foodBill
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "foodBill", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "foodBill"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "bonus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bonus')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bonus,
      expression: "form.bonus"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bonus')
    },
    attrs: {
      "id": "bonus",
      "type": "number",
      "step": "any",
      "name": "bonus",
      "min": "0",
      "placeholder": _vm.$t('Enter a bonus')
    },
    domProps: {
      "value": _vm.form.bonus
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bonus", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bonus"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "commission"
    }
  }, [_vm._v(_vm._s(_vm.$t('Commission')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.commission,
      expression: "form.commission"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('commission')
    },
    attrs: {
      "id": "commission",
      "type": "number",
      "step": "any",
      "name": "commission",
      "placeholder": _vm.$t('Enter a commission')
    },
    domProps: {
      "value": _vm.form.commission
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "commission", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "commission"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "festivalBonus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Festival Bonus')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.festivalBonus,
      expression: "form.festivalBonus"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('festivalBonus')
    },
    attrs: {
      "id": "festivalBonus",
      "type": "number",
      "step": "any",
      "name": "festivalBonus",
      "min": "0",
      "placeholder": _vm.$t('Enter a festival bonus')
    },
    domProps: {
      "value": _vm.form.festivalBonus
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "festivalBonus", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "festivalBonus"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "travelAllowance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Travel Allowance(TA)')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.travelAllowance,
      expression: "form.travelAllowance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('travelAllowance')
    },
    attrs: {
      "id": "travelAllowance",
      "type": "number",
      "step": "any",
      "name": "travelAllowance",
      "placeholder": _vm.$t('Enter a travel allowance')
    },
    domProps: {
      "value": _vm.form.travelAllowance
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "travelAllowance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "travelAllowance"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "others"
    }
  }, [_vm._v(_vm._s(_vm.$t('Others')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.others,
      expression: "form.others"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('others')
    },
    attrs: {
      "id": "others",
      "type": "number",
      "step": "any",
      "name": "others",
      "min": "0",
      "placeholder": _vm.$t('Enter others amount')
    },
    domProps: {
      "value": _vm.form.others
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "others", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "others"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "advance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Advance')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.advance,
      expression: "form.advance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('advance')
    },
    attrs: {
      "id": "advance",
      "type": "number",
      "step": "any",
      "name": "advance",
      "placeholder": _vm.$t('Advance')
    },
    domProps: {
      "value": _vm.form.advance
    },
    on: {
      "change": _vm.calculateTotalSalary,
      "keyup": _vm.calculateTotalSalary,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "advance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "advance"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "totalSalary"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Salary')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalSalary,
      expression: "form.totalSalary"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalSalary')
    },
    attrs: {
      "id": "totalSalary",
      "type": "number",
      "step": "any",
      "name": "totalSalary",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalSalary
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalSalary", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalSalary"
    }
  })], 1), _vm._v(" "), _vm.accounts ? _c('div', {
    staticClass: "form-group col-md-4"
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
      "placeholder": _vm.$t('Select an account')
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
        }), _vm._v("\n                      " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 3023951659),
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
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "availableBalance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Available Balance')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.account.availableBalance,
      expression: "form.account.availableBalance"
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
      "value": _vm.form.account.availableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.account, "availableBalance", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "salaryDate"
    }
  }, [_vm._v(_vm._s(_vm.$t('Salary Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salaryDate,
      expression: "form.salaryDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('salaryDate')
    },
    attrs: {
      "id": "salaryDate",
      "type": "date",
      "name": "salaryDate"
    },
    domProps: {
      "value": _vm.form.salaryDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "salaryDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salaryDate"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
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
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payroll/edit.vue?vue&type=script&lang=js
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
      title: this.$t('Edit Payroll')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Payroll',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Payroll',
        url: 'payroll.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        chequeNo: '',
        salaryMonth: '',
        employee: '',
        account: '',
        presentSalary: '',
        deductionAmount: '',
        deductionReason: '',
        mobileBill: '',
        foodBill: '',
        bonus: '',
        commission: '',
        advance: '',
        festivalBonus: '',
        travelAllowance: '',
        others: '',
        totalSalary: '',
        salaryDate: '',
        status: 1,
        note: '',
        image: ''
      }),
      url: null,
      accounts: ''
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])),
  created: function created() {
    this.getEmployees();
    this.getAccounts();
    this.getPayroll();
  },
  mounted: function mounted() {
    var _this = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  methods: {
    // get all employees
    getEmployees: function getEmployees() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-employees'
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
    // get payroll
    getPayroll: function getPayroll() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/payroll/' + _this4.$route.params.slug);
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this4.form.chequeNo = data.data.chequeNo;
              _this4.form.salaryMonth = data.data.salaryMonth;
              _this4.form.employee = data.data.employee;
              _this4.form.account = data.data.account;
              _this4.form.availableBalance = data.data.account.availableBalance;
              _this4.form.presentSalary = data.data.employee.totalSalary;
              _this4.form.deductionAmount = data.data.deductionAmount;
              _this4.form.deductionReason = data.data.deductionReason;
              _this4.form.mobileBill = data.data.mobileBill;
              _this4.form.foodBill = data.data.foodBill;
              _this4.form.bonus = data.data.bonus;
              _this4.form.commission = data.data.commission;
              _this4.form.advance = data.data.advance;
              _this4.form.festivalBonus = data.data.festivalBonus;
              _this4.form.travelAllowance = data.data.travelAllowance;
              _this4.form.others = data.data.others;
              _this4.form.totalSalary = data.data.transaction.amount;
              _this4.form.salaryDate = data.data.salaryDate;
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
    // calculate total
    calculateTotalSalary: function calculateTotalSalary() {
      var salary = Number(this.form.employee.totalSalary);
      var deduction = Number(this.form.deductionAmount);
      var mobileBill = Number(this.form.mobileBill);
      var foodBill = Number(this.form.foodBill);
      var bonus = Number(this.form.bonus);
      var commission = Number(this.form.commission);
      var advance = Number(this.form.advance);
      var festivalBonus = Number(this.form.festivalBonus);
      var travelAllowance = Number(this.form.travelAllowance);
      var others = Number(this.form.others);
      this.form.totalSalary = mobileBill + foodBill + bonus + commission + festivalBonus + travelAllowance + others + advance - deduction;
      if (salary > 0) {
        return this.form.totalSalary = salary + this.form.totalSalary;
      }
      return this.form.totalSalary;
    },
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
    },
    // update payroll
    updatePayroll: function updatePayroll() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this6.form.patch(window.location.origin + '/api/payroll/' + _this6.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this6.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this6.$t('Payroll updated successfully')
                });
                _this6.$router.push({
                  name: 'payroll.index'
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
        employee: this.form.employee,
        salaryMonth: this.form.salaryMonth,
        salaryYear: this.form.salaryYear,
        basicSalary: this.form.basicSalary,
        houseRent: this.form.houseRent,
        medical: this.form.medical,
        transport: this.form.transport,
        allowance: this.form.allowance,
        overtime: this.form.overtime,
        bonus: this.form.bonus,
        commission: this.form.commission,
        advance: this.form.advance,
        loan: this.form.loan,
        deduction: this.form.deduction,
        totalSalary: this.form.totalSalary,
        netSalary: this.form.netSalary,
        status: this.form.status,
        note: this.form.note,
        image: this.form.image ? this.form.image.name : null,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('payrollEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('payrollEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.employee = data.employee || this.form.employee;
          this.form.salaryMonth = data.salaryMonth || this.form.salaryMonth;
          this.form.salaryYear = data.salaryYear || this.form.salaryYear;
          this.form.basicSalary = data.basicSalary || this.form.basicSalary;
          this.form.houseRent = data.houseRent || this.form.houseRent;
          this.form.medical = data.medical || this.form.medical;
          this.form.transport = data.transport || this.form.transport;
          this.form.allowance = data.allowance || this.form.allowance;
          this.form.overtime = data.overtime || this.form.overtime;
          this.form.bonus = data.bonus || this.form.bonus;
          this.form.commission = data.commission || this.form.commission;
          this.form.advance = data.advance || this.form.advance;
          this.form.loan = data.loan || this.form.loan;
          this.form.deduction = data.deduction || this.form.deduction;
          this.form.totalSalary = data.totalSalary || this.form.totalSalary;
          this.form.netSalary = data.netSalary || this.form.netSalary;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.note = data.note || this.form.note;
          // Note: Image file cannot be restored from localStorage
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('payrollEditTempData');
    }
  }
});
;// ./resources/js/pages/payroll/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const payroll_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payroll/edit.vue?vue&type=style&index=0&id=643d4408&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_643d4408_prod_scoped_true_lang_css = __webpack_require__(26125);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payroll/edit.vue?vue&type=style&index=0&id=643d4408&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_643d4408_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const payroll_editvue_type_style_index_0_id_643d4408_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_643d4408_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/payroll/edit.vue?vue&type=style&index=0&id=643d4408&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/payroll/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  payroll_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "643d4408",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);