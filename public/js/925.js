"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[925],{

/***/ 30925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ general)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/general.vue?vue&type=template&id=0e36f889&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-xl-3"
  }, [_c('SettingsSidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateSettings.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "client-form-tabs"
  }, [_c('ul', {
    staticClass: "nav nav-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "nav-item",
    attrs: {
      "role": "presentation"
    }
  }, [_c('button', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'company'
    },
    attrs: {
      "type": "button",
      "role": "tab"
    },
    on: {
      "click": function click($event) {
        return _vm.switchTab('company');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-building mr-2"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('Company Information')) + "\n                                    ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item",
    attrs: {
      "role": "presentation"
    }
  }, [_c('button', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'prefixes'
    },
    attrs: {
      "type": "button",
      "role": "tab"
    },
    on: {
      "click": function click($event) {
        return _vm.switchTab('prefixes');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-code mr-2"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('Code Symbols')) + "\n                                    ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item",
    attrs: {
      "role": "presentation"
    }
  }, [_c('button', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'defaults'
    },
    attrs: {
      "type": "button",
      "role": "tab"
    },
    on: {
      "click": function click($event) {
        return _vm.switchTab('defaults');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-cog mr-2"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('Default Elements')) + "\n                                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'company'
    },
    attrs: {
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "form-card-enhanced"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-building mr-2"
  }), _vm._v("\n                                            " + _vm._s(_vm.$t('Add Your Company Information')) + "\n                                        ")]), _vm._v(" "), _c('p', {
    staticClass: "card-header-subtitle"
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('Basic company details and contact information')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "companyName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Company Name')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.companyName,
      expression: "form.companyName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('companyName')
    },
    attrs: {
      "id": "companyName",
      "type": "text",
      "name": "companyName",
      "placeholder": _vm.$t('Enter a company name')
    },
    domProps: {
      "value": _vm.form.companyName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "companyName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "companyName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "companyTagline"
    }
  }, [_vm._v(_vm._s(_vm.$t('Company Tagline')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.companyTagline,
      expression: "form.companyTagline"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('companyTagline')
    },
    attrs: {
      "id": "companyTagline",
      "type": "text",
      "name": "companyTagline",
      "placeholder": _vm.$t('Company Tagline')
    },
    domProps: {
      "value": _vm.form.companyTagline
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "companyTagline", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "companyTagline"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "emailAddress"
    }
  }, [_vm._v(_vm._s(_vm.$t('Email Address')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.emailAddress,
      expression: "form.emailAddress"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('emailAddress')
    },
    attrs: {
      "id": "emailAddress",
      "type": "email",
      "name": "emailAddress",
      "placeholder": _vm.$t('Enter an email address')
    },
    domProps: {
      "value": _vm.form.emailAddress
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "emailAddress", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "emailAddress"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t('Phone Number')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phoneNumber,
      expression: "form.phoneNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('phoneNumber')
    },
    attrs: {
      "id": "phoneNumber",
      "type": "text",
      "name": "phoneNumber",
      "placeholder": _vm.$t('Phone Number')
    },
    domProps: {
      "value": _vm.form.phoneNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phoneNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "address"
    }
  }, [_vm._v(_vm._s(_vm.$t('Address')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.address,
      expression: "form.address"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('address')
    },
    attrs: {
      "id": "address",
      "placeholder": _vm.$t('Enter an address')
    },
    domProps: {
      "value": _vm.form.address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "address"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'prefixes'
    },
    attrs: {
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "form-card-enhanced"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-code mr-2"
  }), _vm._v("\n                                            " + _vm._s(_vm.$t('Add the code prefixes')) + "\n                                        ")]), _vm._v(" "), _c('p', {
    staticClass: "card-header-subtitle"
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('Configure prefixes for document and entity numbering')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "clientPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Client Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.clientPrefix,
      expression: "form.clientPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('clientPrefix')
    },
    attrs: {
      "id": "clientPrefix",
      "type": "text",
      "name": "clientPrefix",
      "placeholder": _vm.$t('Enter a client prefix')
    },
    domProps: {
      "value": _vm.form.clientPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "clientPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "clientPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "supplierPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.supplierPrefix,
      expression: "form.supplierPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('supplierPrefix')
    },
    attrs: {
      "id": "supplierPrefix",
      "type": "text",
      "name": "supplierPrefix",
      "placeholder": _vm.$t('Enter a supplier prefix')
    },
    domProps: {
      "value": _vm.form.supplierPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "supplierPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplierPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "employeePrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Employee Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.employeePrefix,
      expression: "form.employeePrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('employeePrefix')
    },
    attrs: {
      "id": "employeePrefix",
      "type": "text",
      "name": "employeePrefix",
      "placeholder": _vm.$t('Enter an employee prefix')
    },
    domProps: {
      "value": _vm.form.employeePrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "employeePrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "employeePrefix"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "proCatPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item Category Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.proCatPrefix,
      expression: "form.proCatPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('proCatPrefix')
    },
    attrs: {
      "id": "proCatPrefix",
      "type": "text",
      "name": "proCatPrefix",
      "placeholder": _vm.$t('Enter an item category prefix')
    },
    domProps: {
      "value": _vm.form.proCatPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "proCatPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "proCatPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "proSubCatPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item Sub Category Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.proSubCatPrefix,
      expression: "form.proSubCatPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('proSubCatPrefix')
    },
    attrs: {
      "id": "proSubCatPrefix",
      "type": "text",
      "name": "proSubCatPrefix",
      "placeholder": _vm.$t('Enter an item sub category prefix')
    },
    domProps: {
      "value": _vm.form.proSubCatPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "proSubCatPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "proSubCatPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "productPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.productPrefix,
      expression: "form.productPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('productPrefix')
    },
    attrs: {
      "id": "productPrefix",
      "type": "text",
      "name": "productPrefix",
      "placeholder": _vm.$t('Enter an item prefix')
    },
    domProps: {
      "value": _vm.form.productPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "productPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productPrefix"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "expCatPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Category Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expCatPrefix,
      expression: "form.expCatPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('expCatPrefix')
    },
    attrs: {
      "id": "expCatPrefix",
      "type": "text",
      "name": "expCatPrefix",
      "placeholder": _vm.$t('Enter an expense category prefix')
    },
    domProps: {
      "value": _vm.form.expCatPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "expCatPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "expCatPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "expSubCatPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Sub Category Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expSubCatPrefix,
      expression: "form.expSubCatPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('expSubCatPrefix')
    },
    attrs: {
      "id": "expSubCatPrefix",
      "type": "text",
      "name": "expSubCatPrefix",
      "placeholder": _vm.$t('Enter an expense sub category prefix')
    },
    domProps: {
      "value": _vm.form.expSubCatPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "expSubCatPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "expSubCatPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "purchasePrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchasePrefix,
      expression: "form.purchasePrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchasePrefix')
    },
    attrs: {
      "id": "purchasePrefix",
      "type": "text",
      "name": "purchasePrefix",
      "placeholder": _vm.$t('Enter a purchase prefix')
    },
    domProps: {
      "value": _vm.form.purchasePrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchasePrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchasePrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "purchaseReturnPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Return Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseReturnPrefix,
      expression: "form.purchaseReturnPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseReturnPrefix')
    },
    attrs: {
      "id": "purchaseReturnPrefix",
      "type": "text",
      "name": "purchaseReturnPrefix",
      "placeholder": _vm.$t('Enter a purchase return prefix')
    },
    domProps: {
      "value": _vm.form.purchaseReturnPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseReturnPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseReturnPrefix"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "quotationPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Quotation Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.quotationPrefix,
      expression: "form.quotationPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('quotationPrefix')
    },
    attrs: {
      "id": "quotationPrefix",
      "type": "text",
      "name": "quotationPrefix",
      "placeholder": _vm.$t('Enter a quotation prefix')
    },
    domProps: {
      "value": _vm.form.quotationPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "quotationPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "quotationPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "invoicePrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoicePrefix,
      expression: "form.invoicePrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('invoicePrefix')
    },
    attrs: {
      "id": "invoicePrefix",
      "type": "text",
      "name": "invoicePrefix",
      "placeholder": _vm.$t('Enter an invoice prefix')
    },
    domProps: {
      "value": _vm.form.invoicePrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoicePrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoicePrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "invoiceReturnPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Return Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceReturnPrefix,
      expression: "form.invoiceReturnPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('invoiceReturnPrefix')
    },
    attrs: {
      "id": "invoiceReturnPrefix",
      "type": "text",
      "name": "invoiceReturnPrefix",
      "placeholder": _vm.$t('Enter an invoice return prefix')
    },
    domProps: {
      "value": _vm.form.invoiceReturnPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceReturnPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoiceReturnPrefix"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentPrefix"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inventory Adjustment Prefix')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.adjustmentPrefix,
      expression: "form.adjustmentPrefix"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('adjustmentPrefix')
    },
    attrs: {
      "id": "adjustmentPrefix",
      "type": "text",
      "name": "adjustmentPrefix",
      "placeholder": _vm.$t('Enter an inventory adjustment prefix')
    },
    domProps: {
      "value": _vm.form.adjustmentPrefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "adjustmentPrefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "adjustmentPrefix"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'defaults'
    },
    attrs: {
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "form-card-enhanced"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cog mr-2"
  }), _vm._v("\n                                            " + _vm._s(_vm.$t('Add your default elements')) + "\n                                        ")]), _vm._v(" "), _c('p', {
    staticClass: "card-header-subtitle"
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('Set default values for system operations and preferences')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "country"
    }
  }, [_vm._v(_vm._s(_vm.$t('Country')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.country,
      expression: "form.country"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('country')
    },
    attrs: {
      "name": "country"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select a country')))]), _vm._v(" "), _vm._l(_vm.countries, function (country) {
    return _c('option', {
      key: country.code,
      domProps: {
        "value": country.code
      }
    }, [_vm._v("\n                                                        " + _vm._s(country.name) + "\n                                                    ")]);
  })], 2), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "country"
    }
  })], 1), _vm._v(" "), _vm.items ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "currency"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Currency')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('currency'),
      'text-uppercase': true
    },
    attrs: {
      "options": _vm.items,
      "label": "label",
      "name": "currency",
      "placeholder": _vm.$t('Select a currency')
    },
    model: {
      value: _vm.form.currency,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "currency", $$v);
      },
      expression: "form.currency"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "currency"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "language"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Language')) + "\n                                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.language,
      expression: "form.language"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('language')
    },
    attrs: {
      "name": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "language", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.locales, function (value, key) {
    return _c('option', {
      key: key,
      domProps: {
        "value": key
      }
    }, [_vm._v("\n                                                        " + _vm._s(value[1]) + "\n                                                    ")]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "language"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "taxRegistrationNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Registration Number")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.taxRegistrationNumber,
      expression: "form.taxRegistrationNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('taxRegistrationNumber')
    },
    attrs: {
      "id": "taxRegistrationNumber",
      "type": "taxRegistrationNumber",
      "name": "taxRegistrationNumber",
      "placeholder": _vm.$t('Enter a tax registration number')
    },
    domProps: {
      "value": _vm.form.taxRegistrationNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "taxRegistrationNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "taxRegistrationNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "systemType"
    }
  }, [_vm._v(_vm._s(_vm.$t("system_type")) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.systemType,
      expression: "form.systemType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('systemType')
    },
    attrs: {
      "id": "systemType",
      "name": "systemType"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "systemType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('select_system_type')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accounting"
    }
  }, [_vm._v(_vm._s(_vm.$t('accounting_system')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pos"
    }
  }, [_vm._v(_vm._s(_vm.$t('point_of_sale')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "both"
    }
  }, [_vm._v(_vm._s(_vm.$t('both_systems')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "systemType"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('select_system_type_description')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "currentFiscalYear"
    }
  }, [_vm._v(_vm._s(_vm.$t('current_fiscal_year')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('currentFiscalYear')
    },
    attrs: {
      "options": _vm.fiscalYears,
      "label": "full_name",
      "name": "currentFiscalYear",
      "placeholder": _vm.fiscalYears.length > 0 ? _vm.$t('Select a fiscal year') : _vm.$t('No fiscal years available. Please create one first.'),
      "disabled": _vm.fiscalYears.length === 0
    },
    on: {
      "input": _vm.onFiscalYearChange
    },
    model: {
      value: _vm.form.currentFiscalYear,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "currentFiscalYear", $$v);
      },
      expression: "form.currentFiscalYear"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "currentFiscalYear"
    }
  }), _vm._v(" "), _vm.fiscalYears.length === 0 ? _c('small', {
    staticClass: "text-muted"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'setup.fiscal-years'
      }
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm.$t('Create Fiscal Years')) + "\n                                            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "currentAccountingPeriod"
    }
  }, [_vm._v(_vm._s(_vm.$t('Current Accounting Period')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('currentAccountingPeriod')
    },
    attrs: {
      "options": _vm.filteredAccountingPeriods,
      "label": "full_name",
      "name": "currentAccountingPeriod",
      "placeholder": _vm.filteredAccountingPeriods.length > 0 ? _vm.$t('Select an accounting period') : _vm.$t('No accounting periods available. Please create one first.'),
      "disabled": _vm.filteredAccountingPeriods.length === 0
    },
    model: {
      value: _vm.form.currentAccountingPeriod,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "currentAccountingPeriod", $$v);
      },
      expression: "form.currentAccountingPeriod"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "currentAccountingPeriod"
    }
  }), _vm._v(" "), _vm.filteredAccountingPeriods.length === 0 ? _c('small', {
    staticClass: "text-muted"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'setup.accounting-periods'
      }
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm.$t('Create Accounting Periods')) + "\n                                            ")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [this.allClients ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Client')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('defaultClient')
    },
    attrs: {
      "options": this.allClients,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    model: {
      value: _vm.form.defaultClient,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "defaultClient", $$v);
      },
      expression: "form.defaultClient"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "defaultClient"
    }
  })], 1) : _vm._e(), _vm._v(" "), this.allAccounts ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Account')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('defaultAccount')
    },
    attrs: {
      "options": _vm.allAccounts,
      "label": "bankName",
      "name": "account",
      "placeholder": _vm.$t('Select a account')
    },
    model: {
      value: _vm.form.defaultAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "defaultAccount", $$v);
      },
      expression: "form.defaultAccount"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "defaultAccount"
    }
  })], 1) : _vm._e(), _vm._v(" "), this.allVatRates ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "vatRate"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Tax Rate')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('defaultVatRate')
    },
    attrs: {
      "options": this.allVatRates,
      "label": "name",
      "name": "vatRate",
      "placeholder": _vm.$t('Select a Tax Rate')
    },
    model: {
      value: _vm.form.defaultVatRate,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "defaultVatRate", $$v);
      },
      expression: "form.defaultVatRate"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "defaultVatRate"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "logo"
    }
  }, [_vm._v(_vm._s(_vm.$t('White Logo')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('logo')
    },
    attrs: {
      "id": "logo",
      "type": "file",
      "name": "logo"
    },
    on: {
      "change": _vm.onLogoChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "logo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.logo ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.logo,
      "alt": "Logo"
    }
  }) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "blackLogo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Black Logo')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('blackLogo')
    },
    attrs: {
      "id": "blackLogo",
      "type": "file",
      "name": "blackLogo"
    },
    on: {
      "change": _vm.onBlackLogoChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "blackLogo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "blackLogo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.blackLogo ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.blackLogo,
      "alt": "Black Logo"
    }
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "smallLogo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Small Logo')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('smallLogo')
    },
    attrs: {
      "id": "smallLogo",
      "type": "file",
      "name": "smallLogo"
    },
    on: {
      "change": _vm.onSmallLogoChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "smallLogo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "smallLogo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.smallLogo ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.smallLogo,
      "alt": "Small Logo"
    }
  }) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "favicon"
    }
  }, [_vm._v(_vm._s(_vm.$t('Favicon')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('favicon')
    },
    attrs: {
      "id": "favicon",
      "type": "file",
      "name": "favicon"
    },
    on: {
      "change": _vm.onFaviconChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "favicon"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "favicon"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.favicon ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.favicon,
      "alt": "Favicon"
    }
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "copyrightText"
    }
  }, [_vm._v(_vm._s(_vm.$t("Invoice Thank You Message")) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceThankYouMessage,
      expression: "form.invoiceThankYouMessage"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('invoiceThankYouMessage')
    },
    attrs: {
      "id": "invoiceThankYouMessage",
      "type": "text",
      "name": "invoiceThankYouMessage"
    },
    domProps: {
      "value": _vm.form.invoiceThankYouMessage
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceThankYouMessage", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoiceThankYouMessage"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "copyrightText"
    }
  }, [_vm._v(_vm._s(_vm.$t('Copyright Text')) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.copyrightText,
      expression: "form.copyrightText"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('copyrightText')
    },
    attrs: {
      "id": "copyrightText",
      "type": "text",
      "name": "copyrightText",
      "placeholder": "$t('Copyright Text')"
    },
    domProps: {
      "value": _vm.form.copyrightText
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "copyrightText", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "copyrightText"
    }
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save changes')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/plugins/i18n.js + 1 modules
var i18n = __webpack_require__(37225);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/general.vue?vue&type=script&lang=js
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




/* harmony default export */ const generalvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('General Settings')
    };
  },
  data: function data() {
    return {
      activeTab: 'company',
      isDemoMode: window.config.isDemoMode,
      allClients: [],
      allAccounts: [],
      allVatRates: [],
      fiscalYears: [],
      accountingPeriods: [],
      countries: [{
        code: 'SA',
        name: 'Saudi Arabia'
      }, {
        code: 'US',
        name: 'United States'
      }, {
        code: 'CA',
        name: 'Canada'
      }, {
        code: 'GB',
        name: 'United Kingdom'
      }, {
        code: 'DE',
        name: 'Germany'
      }, {
        code: 'FR',
        name: 'France'
      }, {
        code: 'IT',
        name: 'Italy'
      }, {
        code: 'ES',
        name: 'Spain'
      }, {
        code: 'NL',
        name: 'Netherlands'
      }, {
        code: 'BE',
        name: 'Belgium'
      }, {
        code: 'CH',
        name: 'Switzerland'
      }, {
        code: 'AT',
        name: 'Austria'
      }, {
        code: 'SE',
        name: 'Sweden'
      }, {
        code: 'NO',
        name: 'Norway'
      }, {
        code: 'DK',
        name: 'Denmark'
      }, {
        code: 'FI',
        name: 'Finland'
      }, {
        code: 'PL',
        name: 'Poland'
      }, {
        code: 'CZ',
        name: 'Czech Republic'
      }, {
        code: 'HU',
        name: 'Hungary'
      }, {
        code: 'RO',
        name: 'Romania'
      }, {
        code: 'BG',
        name: 'Bulgaria'
      }, {
        code: 'HR',
        name: 'Croatia'
      }, {
        code: 'SI',
        name: 'Slovenia'
      }, {
        code: 'SK',
        name: 'Slovakia'
      }, {
        code: 'LT',
        name: 'Lithuania'
      }, {
        code: 'LV',
        name: 'Latvia'
      }, {
        code: 'EE',
        name: 'Estonia'
      }, {
        code: 'IE',
        name: 'Ireland'
      }, {
        code: 'PT',
        name: 'Portugal'
      }, {
        code: 'GR',
        name: 'Greece'
      }, {
        code: 'CY',
        name: 'Cyprus'
      }, {
        code: 'MT',
        name: 'Malta'
      }, {
        code: 'LU',
        name: 'Luxembourg'
      }, {
        code: 'IS',
        name: 'Iceland'
      }, {
        code: 'LI',
        name: 'Liechtenstein'
      }, {
        code: 'MC',
        name: 'Monaco'
      }, {
        code: 'SM',
        name: 'San Marino'
      }, {
        code: 'VA',
        name: 'Vatican City'
      }, {
        code: 'AD',
        name: 'Andorra'
      }, {
        code: 'AU',
        name: 'Australia'
      }, {
        code: 'NZ',
        name: 'New Zealand'
      }, {
        code: 'JP',
        name: 'Japan'
      }, {
        code: 'CN',
        name: 'China'
      }, {
        code: 'KR',
        name: 'South Korea'
      }, {
        code: 'IN',
        name: 'India'
      }, {
        code: 'BR',
        name: 'Brazil'
      }, {
        code: 'MX',
        name: 'Mexico'
      }, {
        code: 'AR',
        name: 'Argentina'
      }, {
        code: 'CL',
        name: 'Chile'
      }, {
        code: 'CO',
        name: 'Colombia'
      }, {
        code: 'PE',
        name: 'Peru'
      }, {
        code: 'VE',
        name: 'Venezuela'
      }, {
        code: 'UY',
        name: 'Uruguay'
      }, {
        code: 'PY',
        name: 'Paraguay'
      }, {
        code: 'BO',
        name: 'Bolivia'
      }, {
        code: 'EC',
        name: 'Ecuador'
      }, {
        code: 'GY',
        name: 'Guyana'
      }, {
        code: 'SR',
        name: 'Suriname'
      }, {
        code: 'FK',
        name: 'Falkland Islands'
      }, {
        code: 'GS',
        name: 'South Georgia'
      }, {
        code: 'AQ',
        name: 'Antarctica'
      }, {
        code: 'RU',
        name: 'Russia'
      }, {
        code: 'UA',
        name: 'Ukraine'
      }, {
        code: 'BY',
        name: 'Belarus'
      }, {
        code: 'MD',
        name: 'Moldova'
      }, {
        code: 'GE',
        name: 'Georgia'
      }, {
        code: 'AM',
        name: 'Armenia'
      }, {
        code: 'AZ',
        name: 'Azerbaijan'
      }, {
        code: 'KZ',
        name: 'Kazakhstan'
      }, {
        code: 'UZ',
        name: 'Uzbekistan'
      }, {
        code: 'TM',
        name: 'Turkmenistan'
      }, {
        code: 'KG',
        name: 'Kyrgyzstan'
      }, {
        code: 'TJ',
        name: 'Tajikistan'
      }, {
        code: 'MN',
        name: 'Mongolia'
      }, {
        code: 'AF',
        name: 'Afghanistan'
      }, {
        code: 'PK',
        name: 'Pakistan'
      }, {
        code: 'BD',
        name: 'Bangladesh'
      }, {
        code: 'LK',
        name: 'Sri Lanka'
      }, {
        code: 'NP',
        name: 'Nepal'
      }, {
        code: 'BT',
        name: 'Bhutan'
      }, {
        code: 'MV',
        name: 'Maldives'
      }, {
        code: 'MM',
        name: 'Myanmar'
      }, {
        code: 'TH',
        name: 'Thailand'
      }, {
        code: 'LA',
        name: 'Laos'
      }, {
        code: 'KH',
        name: 'Cambodia'
      }, {
        code: 'VN',
        name: 'Vietnam'
      }, {
        code: 'MY',
        name: 'Malaysia'
      }, {
        code: 'SG',
        name: 'Singapore'
      }, {
        code: 'ID',
        name: 'Indonesia'
      }, {
        code: 'PH',
        name: 'Philippines'
      }, {
        code: 'TW',
        name: 'Taiwan'
      }, {
        code: 'HK',
        name: 'Hong Kong'
      }, {
        code: 'MO',
        name: 'Macau'
      }, {
        code: 'TR',
        name: 'Turkey'
      }, {
        code: 'IL',
        name: 'Israel'
      }, {
        code: 'LB',
        name: 'Lebanon'
      }, {
        code: 'SY',
        name: 'Syria'
      }, {
        code: 'JO',
        name: 'Jordan'
      }, {
        code: 'IQ',
        name: 'Iraq'
      }, {
        code: 'IR',
        name: 'Iran'
      }, {
        code: 'KW',
        name: 'Kuwait'
      }, {
        code: 'BH',
        name: 'Bahrain'
      }, {
        code: 'QA',
        name: 'Qatar'
      }, {
        code: 'AE',
        name: 'United Arab Emirates'
      }, {
        code: 'OM',
        name: 'Oman'
      }, {
        code: 'YE',
        name: 'Yemen'
      }, {
        code: 'EG',
        name: 'Egypt'
      }, {
        code: 'SD',
        name: 'Sudan'
      }, {
        code: 'SS',
        name: 'South Sudan'
      }, {
        code: 'LY',
        name: 'Libya'
      }, {
        code: 'TN',
        name: 'Tunisia'
      }, {
        code: 'DZ',
        name: 'Algeria'
      }, {
        code: 'MA',
        name: 'Morocco'
      }, {
        code: 'EH',
        name: 'Western Sahara'
      }, {
        code: 'MR',
        name: 'Mauritania'
      }, {
        code: 'ML',
        name: 'Mali'
      }, {
        code: 'BF',
        name: 'Burkina Faso'
      }, {
        code: 'NE',
        name: 'Niger'
      }, {
        code: 'TD',
        name: 'Chad'
      }, {
        code: 'NG',
        name: 'Nigeria'
      }, {
        code: 'CM',
        name: 'Cameroon'
      }, {
        code: 'CF',
        name: 'Central African Republic'
      }, {
        code: 'CG',
        name: 'Republic of the Congo'
      }, {
        code: 'CD',
        name: 'Democratic Republic of the Congo'
      }, {
        code: 'GA',
        name: 'Gabon'
      }, {
        code: 'GQ',
        name: 'Equatorial Guinea'
      }, {
        code: 'ST',
        name: 'São Tomé and Príncipe'
      }, {
        code: 'AO',
        name: 'Angola'
      }, {
        code: 'NA',
        name: 'Namibia'
      }, {
        code: 'BW',
        name: 'Botswana'
      }, {
        code: 'ZW',
        name: 'Zimbabwe'
      }, {
        code: 'ZM',
        name: 'Zambia'
      }, {
        code: 'MW',
        name: 'Malawi'
      }, {
        code: 'MZ',
        name: 'Mozambique'
      }, {
        code: 'MG',
        name: 'Madagascar'
      }, {
        code: 'MU',
        name: 'Mauritius'
      }, {
        code: 'SC',
        name: 'Seychelles'
      }, {
        code: 'KM',
        name: 'Comoros'
      }, {
        code: 'DJ',
        name: 'Djibouti'
      }, {
        code: 'SO',
        name: 'Somalia'
      }, {
        code: 'ET',
        name: 'Ethiopia'
      }, {
        code: 'ER',
        name: 'Eritrea'
      }, {
        code: 'KE',
        name: 'Kenya'
      }, {
        code: 'TZ',
        name: 'Tanzania'
      }, {
        code: 'UG',
        name: 'Uganda'
      }, {
        code: 'RW',
        name: 'Rwanda'
      }, {
        code: 'BI',
        name: 'Burundi'
      }],
      breadcrumbsCurrent: 'General Settings',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Update general settings',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        companyName: '',
        companyTagline: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        clientPrefix: '',
        supplierPrefix: '',
        employeePrefix: '',
        proCatPrefix: '',
        proSubCatPrefix: '',
        productPrefix: '',
        expCatPrefix: '',
        expSubCatPrefix: '',
        purchasePrefix: '',
        purchaseReturnPrefix: '',
        quotationPrefix: '',
        invoicePrefix: '',
        invoiceReturnPrefix: '',
        adjustmentPrefix: '',
        currency: '',
        language: 'ar',
        country: 'SA',
        copyrightText: '',
        invoiceThankYouMessage: '',
        taxRegistrationNumber: '',
        systemType: '',
        logo: '',
        blackLogo: '',
        smallLogo: '',
        favicon: '',
        defaultClient: '',
        defaultAccount: '',
        defaultVatRate: '',
        currentFiscalYear: '',
        currentAccountingPeriod: ''
      }),
      logo: '',
      blackLogo: '',
      smallLogo: '',
      favicon: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo',
    items: 'operations/items',
    locales: 'lang/locales'
  })), {}, {
    filteredAccountingPeriods: function filteredAccountingPeriods() {
      var _this = this;
      if (!this.accountingPeriods) {
        return [];
      }

      // If no fiscal year is selected, return all accounting periods
      if (!this.form.currentFiscalYear) {
        return this.accountingPeriods;
      }

      // Filter accounting periods by the selected fiscal year
      return this.accountingPeriods.filter(function (period) {
        return period.fiscal_year && period.fiscal_year.id === _this.form.currentFiscalYear.id;
      });
    }
  }),
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _this2.getVatRates();
            _this2.getCurrencies();
            _this2.getClients();
            _this2.getAccounts();

            // Load fiscal years and accounting periods first
            _context.n = 1;
            return _this2.getFiscalYears();
          case 1:
            _context.n = 2;
            return _this2.getAccountingPeriods();
          case 2:
            // Then assign values
            _this2.assignValues();
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    // get all product categories
    getCurrencies: function getCurrencies() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this3.$store.dispatch('operations/allData', {
                path: '/api/all-currencies'
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get all clients
    getClients: function getClients() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get('/api/all-clients').then(function (response) {
                _this4.allClients = response.data.data;
                // assign default client
                if (_this4.allClients && _this4.allClients.length > 0) {
                  var defaultClientSlug = _this4.appInfo.defaultClientSlug;
                  _this4.form.defaultClient = _this4.allClients.find(function (client) {
                    return client.slug === defaultClientSlug;
                  });
                }
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get all accounts
    getAccounts: function getAccounts() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get('/api/all-accounts').then(function (response) {
                _this5.allAccounts = response.data.data;
                // assign default account
                if (_this5.allAccounts && _this5.allAccounts.length > 0) {
                  var defaultAccountSlug = _this5.appInfo.defaultAccountSlug;
                  _this5.form.defaultAccount = _this5.allAccounts.find(function (account) {
                    return account.slug === defaultAccountSlug;
                  });
                }
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get all vat rates
    getVatRates: function getVatRates() {
      var _this6 = this;
      axios_default().get('/api/all-vat-rates').then(function (response) {
        _this6.allVatRates = response.data.data;
        // assign default vat rate
        if (_this6.allVatRates && _this6.allVatRates.length > 0) {
          var defaultVatRateSlug = _this6.appInfo.defaultVatRateSlug;
          _this6.form.defaultVatRate = _this6.allVatRates.find(function (tax) {
            return tax.slug === defaultVatRateSlug;
          });
        }
      });
    },
    // get all fiscal years
    getFiscalYears: function getFiscalYears() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios_default().get('/api/all-fiscal-years');
            case 1:
              response = _context5.v;
              _this7.fiscalYears = response.data.data;
              console.log('Fiscal Years loaded:', _this7.fiscalYears);
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t = _context5.v;
              console.error('Error loading fiscal years:', _t);
              _this7.fiscalYears = [];
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // get all accounting periods
    getAccountingPeriods: function getAccountingPeriods() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, _t2;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get('/api/all-accounting-periods');
            case 1:
              response = _context6.v;
              _this8.accountingPeriods = response.data.data;
              console.log('Accounting Periods loaded:', _this8.accountingPeriods);
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t2 = _context6.v;
              console.error('Error loading accounting periods:', _t2);
              _this8.accountingPeriods = [];
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // handle fiscal year change
    onFiscalYearChange: function onFiscalYearChange(fiscalYear) {
      this.form.currentFiscalYear = fiscalYear;

      // Check if current accounting period belongs to the new fiscal year
      if (this.form.currentAccountingPeriod && this.form.currentAccountingPeriod.fiscal_year && this.form.currentAccountingPeriod.fiscal_year.id !== fiscalYear.id) {
        // Reset accounting period if it doesn't belong to the new fiscal year
        this.form.currentAccountingPeriod = '';
      }
    },
    // assign values
    assignValues: function assignValues() {
      var _this9 = this;
      if (this.appInfo) {
        this.form.companyName = this.appInfo.companyName;
        this.form.companyTagline = this.appInfo.companyTagline;
        this.form.emailAddress = this.appInfo.email;
        this.form.phoneNumber = this.appInfo.phone;
        this.form.address = this.appInfo.address;
        this.form.clientPrefix = this.appInfo.clientPrefix;
        this.form.supplierPrefix = this.appInfo.supplierPrefix;
        this.form.employeePrefix = this.appInfo.employeePrefix;
        this.form.proCatPrefix = this.appInfo.proCatPrefix;
        this.form.proSubCatPrefix = this.appInfo.proSubCatPrefix;
        this.form.productPrefix = this.appInfo.productPrefix;
        this.form.expCatPrefix = this.appInfo.expCatPrefix;
        this.form.expSubCatPrefix = this.appInfo.expSubCatPrefix;
        this.form.purchasePrefix = this.appInfo.purchasePrefix;
        this.form.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix;
        this.form.quotationPrefix = this.appInfo.quotationPrefix;
        this.form.invoicePrefix = this.appInfo.invoicePrefix;
        this.form.invoiceReturnPrefix = this.appInfo.invoiceReturnPrefix;
        this.form.adjustmentPrefix = this.appInfo.adjustmentPrefix;
        this.form.currency = this.appInfo.currency;
        this.form.language = this.appInfo.language;
        this.form.country = this.appInfo.country;
        this.logo = this.appInfo.logo;
        this.blackLogo = this.appInfo.blackLogo;
        this.smallLogo = this.appInfo.smallLogo;
        this.favicon = this.appInfo.favicon;
        this.form.copyrightText = this.appInfo.copyright;
        this.form.invoiceThankYouMessage = this.appInfo.invoiceThankYouMessage;
        this.form.taxRegistrationNumber = this.appInfo.taxRegistrationNumber;
        this.form.systemType = this.appInfo.systemType || '';

        // Assign fiscal year and accounting period
        if (this.appInfo.currentFiscalYear && this.fiscalYears.length > 0) {
          this.form.currentFiscalYear = this.fiscalYears.find(function (fy) {
            return fy.id === _this9.appInfo.currentFiscalYear.id;
          });
        }
        if (this.appInfo.currentAccountingPeriod && this.accountingPeriods.length > 0) {
          this.form.currentAccountingPeriod = this.accountingPeriods.find(function (period) {
            return period.id === _this9.appInfo.currentAccountingPeriod.id;
          });
        }
      }
    },
    // vue logo upload
    onLogoChange: function onLogoChange(e) {
      var _this0 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this0.form.logo = reader.result;
        };
        reader.readAsDataURL(file);
        this.logo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue black logo upload
    onBlackLogoChange: function onBlackLogoChange(e) {
      var _this1 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this1.form.blackLogo = reader.result;
        };
        reader.readAsDataURL(file);
        this.blackLogo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue small logo upload
    onSmallLogoChange: function onSmallLogoChange(e) {
      var _this10 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this10.form.smallLogo = reader.result;
        };
        reader.readAsDataURL(file);
        this.smallLogo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue favicon upload
    onFaviconChange: function onFaviconChange(e) {
      var _this11 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this11.form.favicon = reader.result;
        };
        reader.readAsDataURL(file);
        this.favicon = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // Switch between tabs
    switchTab: function switchTab(tab) {
      this.activeTab = tab;
    },
    // update settings
    updateSettings: function updateSettings() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var locale;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!_this12.isDemoMode) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2, toast.fire({
                type: 'warning',
                title: _this12.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              // update locale
              locale = _this12.form.language;
              if (_this12.$i18n.locale !== locale) {
                (0,i18n.loadMessages)(locale);
                _this12.$store.dispatch('lang/setLocale', {
                  locale: locale
                });
              }

              // for production
              _context7.n = 2;
              return _this12.form.post(window.location.origin + '/api/update-settings').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this12.$t('Settings updated successfully')
                });
                window.location.reload();
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this12.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    }
  }
});
;// ./resources/js/pages/setup/general.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_generalvue_type_script_lang_js = (generalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/general.vue?vue&type=style&index=0&id=0e36f889&prod&lang=scss&scoped=true
var generalvue_type_style_index_0_id_0e36f889_prod_lang_scss_scoped_true = __webpack_require__(82171);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/general.vue?vue&type=style&index=0&id=0e36f889&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(generalvue_type_style_index_0_id_0e36f889_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const setup_generalvue_type_style_index_0_id_0e36f889_prod_lang_scss_scoped_true = (generalvue_type_style_index_0_id_0e36f889_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/setup/general.vue?vue&type=style&index=0&id=0e36f889&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/general.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_generalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0e36f889",
  null
  
)

/* harmony default export */ const general = (component.exports);

/***/ }),

/***/ 82171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".client-form-tabs[data-v-0e36f889]{background:#f8f9fa;border-radius:12px;margin-bottom:2rem;padding:.5rem}.client-form-tabs .nav-tabs[data-v-0e36f889]{border:none;display:flex;gap:.5rem;margin:0;padding:0}.client-form-tabs .nav-item[data-v-0e36f889]{flex:1}.client-form-tabs .nav-link[data-v-0e36f889]{align-items:center;background:transparent;border:none;border-radius:8px;color:#6b7280;cursor:pointer;display:flex;font-size:15px;font-weight:500;justify-content:center;padding:14px 24px;transition:all .3s ease}.client-form-tabs .nav-link[data-v-0e36f889]:hover{background:#e5e7eb;color:#374151}.client-form-tabs .nav-link.active[data-v-0e36f889]{background:#0775af;box-shadow:0 2px 8px rgba(7,117,175,.2);color:#fff}.client-form-tabs .nav-link i[data-v-0e36f889]{font-size:16px;margin-right:8px}[dir=rtl] .client-form-tabs .nav-link i[data-v-0e36f889]{margin-left:8px;margin-right:0}.tab-content[data-v-0e36f889]{margin-top:0}.tab-pane[data-v-0e36f889]{display:none}.tab-pane.show.active[data-v-0e36f889]{animation:fadeIn-0e36f889 .3s ease;display:block}@keyframes fadeIn-0e36f889{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.form-card-enhanced[data-v-0e36f889]{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.05);margin-bottom:2rem;overflow:hidden;transition:all .3s ease}.form-card-enhanced[data-v-0e36f889]:hover{border-color:#d1d5db;box-shadow:0 4px 12px rgba(0,0,0,.08)}.form-card-enhanced .card-header[data-v-0e36f889]{background:#eceff3;border-bottom:1px solid #e5e7eb;padding:20px 24px}.form-card-enhanced .section-title[data-v-0e36f889]{align-items:center;color:#111827;display:flex;flex-wrap:wrap;font-size:18px;font-weight:600;gap:8px;margin:0}.form-card-enhanced .section-title i[data-v-0e36f889]{color:#0775af;font-size:20px}.form-card-enhanced .card-header-subtitle[data-v-0e36f889]{color:#6b7280;font-size:13px;font-weight:400;line-height:1.5;margin-bottom:0;margin-top:6px}.form-card-enhanced .card-body[data-v-0e36f889]{padding:24px}.inner-card[data-v-0e36f889]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:20px}.inner-card .card-header[data-v-0e36f889]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:22px 16px}.form-control[data-v-0e36f889]{background:#fff!important}input[readonly][data-v-0e36f889]{background-color:#f8f9fa!important;border-color:#ced4da;color:#6c757d;cursor:not-allowed}.form-control[data-v-0e36f889]:focus,select.form-control[data-v-0e36f889]:focus,textarea.form-control[data-v-0e36f889]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.v-select .vs__dropdown-toggle[data-v-0e36f889]{border-color:#ced4da}.v-select .vs__dropdown-toggle.vs__open[data-v-0e36f889],.v-select .vs__dropdown-toggle[data-v-0e36f889]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.v-select .vs__dropdown-menu[data-v-0e36f889],.v-select .vs__search[data-v-0e36f889],.v-select .vs__selected[data-v-0e36f889]{font-size:.95rem}.custom-file-input:focus~.custom-file-label[data-v-0e36f889]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.custom-file-label[data-v-0e36f889]{border-radius:6px}.custom-file-label[data-v-0e36f889],[dir=rtl] .custom-file-label[data-v-0e36f889]{text-align:left!important}.btn-primary[data-v-0e36f889]{background:#2ab930!important;border:none!important;color:#fff!important}.card[data-v-0e36f889]{border-radius:20px;margin-top:30px;overflow:visible}.card[data-v-0e36f889],.settings-sidebar-wrapper[data-v-0e36f889]{border:1px solid #ced4da;box-shadow:0 8px 20px 0 #00000014}.settings-sidebar-wrapper[data-v-0e36f889]{background:#fff;border-radius:20px;padding:10px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);