"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2800],{

/***/ 32800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tenant_initialization)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=template&id=318a8acf&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tenant-initialization"
  }, [!_vm.initialized ? _c('div', {
    staticClass: "auth-wrapper"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-lg-8 col-xl-7"
  }, [_c('div', {
    staticClass: "text-center mb-4"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm.appInfo ? _c('img', {
    staticClass: "lg-logo img-fluid mb-3",
    staticStyle: {
      "max-width": "200px"
    },
    attrs: {
      "src": _vm.appInfo.blackLogo,
      "alt": _vm.appInfo.companyName
    }
  }) : _vm._e()]), _vm._v(" "), _c('h3', {
    staticClass: "text-primary mb-2"
  }, [_vm._v(_vm._s(_vm.$t('setup_wizard_title')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('setup_wizard_subtitle')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "wizard-progress mb-4"
  }, [_c('div', {
    staticClass: "progress-container"
  }, _vm._l(_vm.steps, function (step, index) {
    return _c('div', {
      key: index,
      staticClass: "progress-item",
      "class": {
        active: _vm.currentStep === index + 1,
        completed: _vm.currentStep > index + 1
      }
    }, [_c('div', {
      staticClass: "step-indicator"
    }, [_vm.currentStep <= index + 1 ? _c('span', {
      staticClass: "step-number"
    }, [_vm._v(_vm._s(index + 1))]) : _vm._e(), _vm._v(" "), _vm.currentStep > index + 1 ? _c('i', {
      staticClass: "fas fa-check step-check"
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "step-title"
    }, [_vm._v(_vm._s(step.title))])]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "card shadow-sm border-0"
  }, [_c('div', {
    staticClass: "card-body p-4"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.nextStep.apply(null, arguments);
      }
    }
  }, [_vm.currentStep === 1 ? _c('div', {
    staticClass: "wizard-step"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('country')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    staticClass: "country-select",
    "class": {
      'is-invalid': _vm.errors.country
    },
    attrs: {
      "options": _vm.countries,
      "label": "name",
      "reduce": function reduce(option) {
        return option.code;
      },
      "placeholder": _vm.$t('select_country'),
      "searchable": true,
      "clearable": false
    },
    on: {
      "input": _vm.onCountryChange
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var flag = _ref.flag,
          name = _ref.name;
        return [_c('div', {
          staticClass: "country-option"
        }, [_c('span', {
          staticClass: "country-flag"
        }, [_vm._v(_vm._s(flag))]), _vm._v(" "), _c('span', {
          staticClass: "country-name"
        }, [_vm._v(_vm._s(name))])])];
      }
    }, {
      key: "selected-option",
      fn: function fn(_ref2) {
        var flag = _ref2.flag,
          name = _ref2.name;
        return [_c('div', {
          staticClass: "country-selected"
        }, [_c('span', {
          staticClass: "country-flag"
        }, [_vm._v(_vm._s(flag))]), _vm._v(" "), _c('span', {
          staticClass: "country-name"
        }, [_vm._v(_vm._s(name))])])];
      }
    }, {
      key: "no-options",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-center text-muted p-2"
        }, [_vm._v("\n                          " + _vm._s(_vm.$t('No countries found')) + "\n                        ")])];
      },
      proxy: true
    }], null, false, 4089895241),
    model: {
      value: _vm.form.country,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "country", $$v);
      },
      expression: "form.country"
    }
  }), _vm._v(" "), _vm.errors.country ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.country))]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.currentStep === 2 ? _c('div', {
    staticClass: "wizard-step"
  }, [_c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('company_name')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.company_name,
      expression: "form.company_name"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.company_name
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('enter_company_name'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.company_name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "company_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.company_name ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.company_name))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('company_logo') || 'شعار الشركة') + " "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('optional')) + ")")])]), _vm._v(" "), _c('div', {
    staticClass: "logo-upload-container"
  }, [_vm.cropImageSrc ? _c('div', {
    staticClass: "logo-crop-wrapper mb-3"
  }, [_c('div', {
    staticClass: "crop-container-inline"
  }, [_c('img', {
    ref: "cropImage",
    staticClass: "crop-image-inline",
    attrs: {
      "src": _vm.cropImageSrc,
      "alt": "Crop"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "crop-actions mt-3"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelCrop
    }
  }, [_c('i', {
    staticClass: "fas fa-times mr-1"
  }), _vm._v(" " + _vm._s(_vm.$t('Cancel')) + "\n                          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cropLogo
    }
  }, [_c('i', {
    staticClass: "fas fa-check mr-1"
  }), _vm._v(" " + _vm._s(_vm.$t('Crop & Save')) + "\n                          ")])]), _vm._v(" "), _c('small', {
    staticClass: "d-block text-muted mt-2 text-center"
  }, [_vm._v(_vm._s(_vm.$t('Adjust the selection to crop your logo. Recommended size: 300x300 pixels')))])]) : _vm.logoPreview ? _c('div', {
    staticClass: "logo-preview mb-3"
  }, [_c('div', {
    staticClass: "logo-preview-wrapper"
  }, [_c('img', {
    staticClass: "logo-preview-image",
    attrs: {
      "src": _vm.logoPreview,
      "alt": "Company Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "logo-preview-overlay"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.removeLogo
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  }), _vm._v(" " + _vm._s(_vm.$t('Remove')) + "\n                            ")])])]), _vm._v(" "), _c('small', {
    staticClass: "d-block text-muted mt-2 text-center"
  }, [_vm._v(_vm._s(_vm.$t('Logo size')) + ": 300x300 " + _vm._s(_vm.$t('pixels')))])]) : _vm._e(), _vm._v(" "), !_vm.cropImageSrc ? _c('div', {
    staticClass: "file-upload-area",
    "class": {
      'has-logo': _vm.logoPreview
    }
  }, [_c('input', {
    ref: "logoInput",
    staticClass: "d-none",
    attrs: {
      "type": "file",
      "accept": "image/jpeg,image/png,image/gif",
      "id": "company-logo-upload"
    },
    on: {
      "change": _vm.onLogoChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "file-upload-label",
    attrs: {
      "for": "company-logo-upload"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "upload-text"
  }, [_c('span', {
    staticClass: "upload-title"
  }, [_vm._v(_vm._s(_vm.logoPreview ? _vm.$t('Change Logo') : _vm.$t('Upload Logo')))]), _vm._v(" "), _c('span', {
    staticClass: "upload-subtitle"
  }, [_vm._v(_vm._s(_vm.$t('Click to upload or drag and drop')))])])]), _vm._v(" "), _c('div', {
    staticClass: "upload-info"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-1"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Maximum file size: 2MB. Supported formats: JPG, PNG, GIF')) + "\n                          ")])])]) : _vm._e()]), _vm._v(" "), _vm.errors.company_logo ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.company_logo))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('tax_number')) + " \n                      "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('optional')) + ")")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.tax_number,
      expression: "form.tax_number"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.tax_number || _vm.taxNumberInvalid
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.getTaxNumberPlaceholder()
    },
    domProps: {
      "value": _vm.form.tax_number
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "tax_number", $event.target.value);
      }, _vm.validateTaxNumber],
      "blur": _vm.validateTaxNumber
    }
  }), _vm._v(" "), _vm.errors.tax_number ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.tax_number))]) : _vm.taxNumberInvalid && _vm.form.tax_number ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v("\n                      " + _vm._s(_vm.taxNumberErrorMessage) + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.form.country && _vm.taxNumberFormat ? _c('small', {
    staticClass: "form-text text-muted mt-1"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Format')) + ": " + _vm._s(_vm.taxNumberFormat) + "\n                    ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.currentStep === 3 ? _c('div', {
    staticClass: "wizard-step"
  }, [_c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Main Eamil for the company')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email_address,
      expression: "form.email_address"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.email_address
    },
    attrs: {
      "type": "email",
      "placeholder": _vm.$t('enter_email_address'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.email_address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.email_address ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.email_address))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-4"
  }, [_c('PhoneNumberInput', {
    attrs: {
      "label": _vm.$t('phone_number'),
      "required": true,
      "country": _vm.form.country,
      "default-country": _vm.form.country || 'SA'
    },
    on: {
      "validated": _vm.onPhoneValidated
    },
    model: {
      value: _vm.form.phone_number,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone_number", $$v);
      },
      expression: "form.phone_number"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('address')) + " \n                      "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('optional')) + ")")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.address,
      expression: "form.address"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm px-4 py-3 text-primary",
    staticStyle: {
      "border-radius": "15px",
      "resize": "none"
    },
    attrs: {
      "rows": "3",
      "placeholder": _vm.$t('enter_address')
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
  })])]) : _vm._e(), _vm._v(" "), _vm.currentStep === 4 ? _c('div', {
    staticClass: "wizard-step"
  }, [_c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('default_currency')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.default_currency,
      expression: "form.default_currency"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.default_currency
    },
    attrs: {
      "required": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "default_currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('select_currency')))]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                        " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "  \n                      ")]);
  })], 2), _vm._v(" "), _vm.errors.default_currency ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.default_currency))]) : _vm._e()]), _vm._v(" "), _c('h6', {
    staticClass: "mb-3 mt-4"
  }, [_vm._v(_vm._s(_vm.$t('document_prefixes')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted small mb-4"
  }, [_vm._v(_vm._s(_vm.$t('document_prefixes_description')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('invoice_prefix')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoice_prefix,
      expression: "form.invoice_prefix"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.invoice_prefix
    },
    attrs: {
      "type": "text",
      "placeholder": "INV-",
      "required": ""
    },
    domProps: {
      "value": _vm.form.invoice_prefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoice_prefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.invoice_prefix ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.invoice_prefix))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('purchase_prefix')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchase_prefix,
      expression: "form.purchase_prefix"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.purchase_prefix
    },
    attrs: {
      "type": "text",
      "placeholder": "PUR-",
      "required": ""
    },
    domProps: {
      "value": _vm.form.purchase_prefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchase_prefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.purchase_prefix ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.purchase_prefix))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('quotation_prefix')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.quotation_prefix,
      expression: "form.quotation_prefix"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.quotation_prefix
    },
    attrs: {
      "type": "text",
      "placeholder": "QUO-",
      "required": ""
    },
    domProps: {
      "value": _vm.form.quotation_prefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "quotation_prefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.quotation_prefix ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.quotation_prefix))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('invoice_return_prefix')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoice_return_prefix,
      expression: "form.invoice_return_prefix"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.invoice_return_prefix
    },
    attrs: {
      "type": "text",
      "placeholder": "INVR-",
      "required": ""
    },
    domProps: {
      "value": _vm.form.invoice_return_prefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoice_return_prefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.invoice_return_prefix ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.invoice_return_prefix))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('purchase_return_prefix')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchase_return_prefix,
      expression: "form.purchase_return_prefix"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.purchase_return_prefix
    },
    attrs: {
      "type": "text",
      "placeholder": "PURR-",
      "required": ""
    },
    domProps: {
      "value": _vm.form.purchase_return_prefix
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchase_return_prefix", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.purchase_return_prefix ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.purchase_return_prefix))]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.currentStep === 5 ? _c('div', {
    staticClass: "wizard-step"
  }, [_c('div', {
    staticClass: "system-type-selection"
  }, [_c('h5', {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t('what_system_type')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted mb-4"
  }, [_vm._v(_vm._s(_vm.$t('select_system_type_description')))]), _vm._v(" "), _c('div', {
    staticClass: "row g-3"
  }, [_c('div', {
    staticClass: "col-md-4 mb-3"
  }, [_c('div', {
    staticClass: "system-type-card",
    "class": {
      active: _vm.form.system_type === 'accounting'
    },
    on: {
      "click": function click($event) {
        _vm.form.system_type = 'accounting';
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c('h6', {
    staticClass: "mt-3 mb-2"
  }, [_vm._v(_vm._s(_vm.$t('accounting_system')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t('accounting_system_description')))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 mb-3"
  }, [_c('div', {
    staticClass: "system-type-card",
    "class": {
      active: _vm.form.system_type === 'pos'
    },
    on: {
      "click": function click($event) {
        _vm.form.system_type = 'pos';
      }
    }
  }, [_vm._m(2), _vm._v(" "), _c('h6', {
    staticClass: "mt-3 mb-2"
  }, [_vm._v(_vm._s(_vm.$t('point_of_sale')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t('pos_system_description')))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 mb-3"
  }, [_c('div', {
    staticClass: "system-type-card",
    "class": {
      active: _vm.form.system_type === 'both'
    },
    on: {
      "click": function click($event) {
        _vm.form.system_type = 'both';
      }
    }
  }, [_vm._m(3), _vm._v(" "), _c('h6', {
    staticClass: "mt-3 mb-2"
  }, [_vm._v(_vm._s(_vm.$t('both_systems')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t('both_systems_description')))])])])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.system_type,
      expression: "form.system_type"
    }],
    attrs: {
      "type": "hidden",
      "required": ""
    },
    domProps: {
      "value": _vm.form.system_type
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "system_type", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.system_type ? _c('div', {
    staticClass: "invalid-feedback d-block text-center mt-3"
  }, [_vm._v(_vm._s(_vm.errors.system_type))]) : _vm._e()])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer bg-white border-0 px-4 py-3"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_vm.currentStep > 1 ? _c('button', {
    staticClass: "btn btn-outline-secondary btn-lg rounded-pill px-4",
    attrs: {
      "type": "button",
      "disabled": _vm.currentStep === 1 || _vm.loading
    },
    on: {
      "click": _vm.previousStep
    }
  }, [_c('i', {
    "class": ['fas', _vm.isRTL ? 'fa-arrow-right' : 'fa-arrow-left', _vm.isRTL ? 'ml-2' : 'mr-2']
  }), _vm._v("\n                  " + _vm._s(_vm.$t('previous')) + "\n                ")]) : _c('div'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-lg rounded-pill px-4 shadow-sm",
    attrs: {
      "type": "button",
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
        _vm.currentStep === _vm.totalSteps ? _vm.submitForm() : _vm.nextStep();
      }
    }
  }, [_vm.loading ? _c('span', {
    staticClass: "spinner-border spinner-border-sm",
    "class": _vm.isRTL ? 'ml-2' : 'mr-2'
  }) : [_vm._v("\n                    " + _vm._s(_vm.currentStep === _vm.totalSteps ? _vm.$t('complete_setup') : _vm.$t('next')) + "\n                    "), _vm.currentStep === _vm.totalSteps ? _c('i', {
    staticClass: "fas fa-check",
    "class": _vm.isRTL ? 'mr-2' : 'ml-2'
  }) : _c('i', {
    "class": ['fas', _vm.isRTL ? 'fa-arrow-left' : 'fa-arrow-right', _vm.isRTL ? 'mr-2' : 'ml-2']
  })]], 2)])])])])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "upload-icon-wrapper"
  }, [_c('i', {
    staticClass: "fas fa-cloud-upload-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon"
  }, [_c('i', {
    staticClass: "fas fa-calculator"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon"
  }, [_c('i', {
    staticClass: "fas fa-cash-register"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon"
  }, [_c('i', {
    staticClass: "fas fa-store"
  })]);
}];

;// ./resources/js/pages/tenant-initialization.vue?vue&type=template&id=318a8acf&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/PhoneNumberInput.vue + 5 modules
var PhoneNumberInput = __webpack_require__(57683);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
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



/* harmony default export */ const tenant_initializationvue_type_script_lang_js = ({
  name: 'TenantInitialization',
  layout: 'basic',
  middleware: [],
  components: {
    PhoneNumberInput: PhoneNumberInput/* default */.A
  },
  data: function data() {
    return {
      currentStep: 1,
      totalSteps: 5,
      loading: false,
      initialized: false,
      appInfo: null,
      currencies: [],
      statusChecked: false,
      logoPreview: null,
      cropImageSrc: null,
      cropper: null,
      countriesData: [{
        code: 'SA',
        nameKey: 'Saudi Arabia',
        flag: '🇸🇦'
      }, {
        code: 'AE',
        nameKey: 'United Arab Emirates',
        flag: '🇦🇪'
      }, {
        code: 'EG',
        nameKey: 'Egypt',
        flag: '🇪🇬'
      }, {
        code: 'JO',
        nameKey: 'Jordan',
        flag: '🇯🇴'
      }, {
        code: 'LB',
        nameKey: 'Lebanon',
        flag: '🇱🇧'
      }, {
        code: 'MA',
        nameKey: 'Morocco',
        flag: '🇲🇦'
      }, {
        code: 'TN',
        nameKey: 'Tunisia',
        flag: '🇹🇳'
      }, {
        code: 'DZ',
        nameKey: 'Algeria',
        flag: '🇩🇿'
      }, {
        code: 'KW',
        nameKey: 'Kuwait',
        flag: '🇰🇼'
      }, {
        code: 'QA',
        nameKey: 'Qatar',
        flag: '🇶🇦'
      }, {
        code: 'BH',
        nameKey: 'Bahrain',
        flag: '🇧🇭'
      }, {
        code: 'OM',
        nameKey: 'Oman',
        flag: '🇴🇲'
      }, {
        code: 'YE',
        nameKey: 'Yemen',
        flag: '🇾🇪'
      }, {
        code: 'IQ',
        nameKey: 'Iraq',
        flag: '🇮🇶'
      }, {
        code: 'US',
        nameKey: 'United States',
        flag: '🇺🇸'
      }, {
        code: 'GB',
        nameKey: 'United Kingdom',
        flag: '🇬🇧'
      }, {
        code: 'CA',
        nameKey: 'Canada',
        flag: '🇨🇦'
      }, {
        code: 'AU',
        nameKey: 'Australia',
        flag: '🇦🇺'
      }, {
        code: 'DE',
        nameKey: 'Germany',
        flag: '🇩🇪'
      }, {
        code: 'FR',
        nameKey: 'France',
        flag: '🇫🇷'
      }, {
        code: 'ES',
        nameKey: 'Spain',
        flag: '🇪🇸'
      }, {
        code: 'IT',
        nameKey: 'Italy',
        flag: '🇮🇹'
      }, {
        code: 'NL',
        nameKey: 'Netherlands',
        flag: '🇳🇱'
      }, {
        code: 'BE',
        nameKey: 'Belgium',
        flag: '🇧🇪'
      }, {
        code: 'CH',
        nameKey: 'Switzerland',
        flag: '🇨🇭'
      }, {
        code: 'AT',
        nameKey: 'Austria',
        flag: '🇦🇹'
      }, {
        code: 'SE',
        nameKey: 'Sweden',
        flag: '🇸🇪'
      }, {
        code: 'NO',
        nameKey: 'Norway',
        flag: '🇳🇴'
      }, {
        code: 'DK',
        nameKey: 'Denmark',
        flag: '🇩🇰'
      }, {
        code: 'FI',
        nameKey: 'Finland',
        flag: '🇫🇮'
      }, {
        code: 'PL',
        nameKey: 'Poland',
        flag: '🇵🇱'
      }, {
        code: 'IE',
        nameKey: 'Ireland',
        flag: '🇮🇪'
      }, {
        code: 'PT',
        nameKey: 'Portugal',
        flag: '🇵🇹'
      }, {
        code: 'GR',
        nameKey: 'Greece',
        flag: '🇬🇷'
      }, {
        code: 'LU',
        nameKey: 'Luxembourg',
        flag: '🇱🇺'
      }, {
        code: 'TR',
        nameKey: 'Turkey',
        flag: '🇹🇷'
      }, {
        code: 'IN',
        nameKey: 'India',
        flag: '🇮🇳'
      }, {
        code: 'CN',
        nameKey: 'China',
        flag: '🇨🇳'
      }, {
        code: 'JP',
        nameKey: 'Japan',
        flag: '🇯🇵'
      }, {
        code: 'KR',
        nameKey: 'South Korea',
        flag: '🇰🇷'
      }, {
        code: 'BR',
        nameKey: 'Brazil',
        flag: '🇧🇷'
      }, {
        code: 'MX',
        nameKey: 'Mexico',
        flag: '🇲🇽'
      }, {
        code: 'AR',
        nameKey: 'Argentina',
        flag: '🇦🇷'
      }, {
        code: 'ZA',
        nameKey: 'South Africa',
        flag: '🇿🇦'
      }, {
        code: 'NG',
        nameKey: 'Nigeria',
        flag: '🇳🇬'
      }, {
        code: 'KE',
        nameKey: 'Kenya',
        flag: '🇰🇪'
      }, {
        code: 'PK',
        nameKey: 'Pakistan',
        flag: '🇵🇰'
      }, {
        code: 'BD',
        nameKey: 'Bangladesh',
        flag: '🇧🇩'
      }, {
        code: 'ID',
        nameKey: 'Indonesia',
        flag: '🇮🇩'
      }, {
        code: 'PH',
        nameKey: 'Philippines',
        flag: '🇵🇭'
      }, {
        code: 'VN',
        nameKey: 'Vietnam',
        flag: '🇻🇳'
      }, {
        code: 'TH',
        nameKey: 'Thailand',
        flag: '🇹🇭'
      }, {
        code: 'MY',
        nameKey: 'Malaysia',
        flag: '🇲🇾'
      }, {
        code: 'SG',
        nameKey: 'Singapore',
        flag: '🇸🇬'
      }, {
        code: 'NZ',
        nameKey: 'New Zealand',
        flag: '🇳🇿'
      }, {
        code: 'RU',
        nameKey: 'Russia',
        flag: '🇷🇺'
      }, {
        code: 'UA',
        nameKey: 'Ukraine',
        flag: '🇺🇦'
      }, {
        code: 'CZ',
        nameKey: 'Czech Republic',
        flag: '🇨🇿'
      }, {
        code: 'HU',
        nameKey: 'Hungary',
        flag: '🇭🇺'
      }, {
        code: 'RO',
        nameKey: 'Romania',
        flag: '🇷🇴'
      }, {
        code: 'BG',
        nameKey: 'Bulgaria',
        flag: '🇧🇬'
      }, {
        code: 'HR',
        nameKey: 'Croatia',
        flag: '🇭🇷'
      }, {
        code: 'SI',
        nameKey: 'Slovenia',
        flag: '🇸🇮'
      }, {
        code: 'SK',
        nameKey: 'Slovakia',
        flag: '🇸🇰'
      }, {
        code: 'EE',
        nameKey: 'Estonia',
        flag: '🇪🇪'
      }, {
        code: 'LV',
        nameKey: 'Latvia',
        flag: '🇱🇻'
      }, {
        code: 'LT',
        nameKey: 'Lithuania',
        flag: '🇱🇹'
      }, {
        code: 'IS',
        nameKey: 'Iceland',
        flag: '🇮🇸'
      }],
      form: new vform_es/* default */.Ay({
        country: 'SA',
        company_name: '',
        company_logo: '',
        tax_number: '',
        company_tagline: '',
        email_address: '',
        phone_number: '',
        address: '',
        default_currency: '',
        invoice_prefix: 'INV-',
        purchase_prefix: 'PUR-',
        quotation_prefix: 'QUO-',
        invoice_return_prefix: 'INVR-',
        purchase_return_prefix: 'PURR-',
        system_type: ''
      }),
      errors: {},
      taxNumberInvalid: false,
      taxNumberErrorMessage: '',
      taxNumberFormat: '',
      phoneNumberValid: false
    };
  },
  computed: {
    // Check if current locale is RTL
    isRTL: function isRTL() {
      var _this$$i18n$locale;
      var rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi'];
      return rtlLanguages.includes((_this$$i18n$locale = this.$i18n.locale) === null || _this$$i18n$locale === void 0 ? void 0 : _this$$i18n$locale.toLowerCase());
    },
    // Make steps reactive to locale changes
    steps: function steps() {
      return [{
        title: this.$t('country')
      }, {
        title: this.$t('company_info')
      }, {
        title: this.$t('contact_details')
      }, {
        title: this.$t('document_currency_settings')
      }, {
        title: this.$t('system_type')
      }];
    },
    // Countries with translated names
    countries: function countries() {
      var _this = this;
      return this.countriesData.map(function (country) {
        return _objectSpread(_objectSpread({}, country), {}, {
          name: _this.$t(country.nameKey) || country.nameKey
        });
      });
    },
    // Tax number validation rules by country
    taxNumberRules: function taxNumberRules() {
      return {
        'SA': {
          pattern: /^3\d{14}$/,
          format: '3XXXXXXXXXXXXXX (15 digits)',
          message: this.$t ? this.$t('Invalid Saudi VAT number. Must start with 3 and be 15 digits') : 'Invalid Saudi VAT number. Must start with 3 and be 15 digits'
        },
        'AE': {
          pattern: /^\d{15}$/,
          format: 'XXXXXXXXXXXXXXX (15 digits)',
          message: this.$t ? this.$t('Invalid UAE VAT number. Must be 15 digits') : 'Invalid UAE VAT number. Must be 15 digits'
        },
        'EG': {
          pattern: /^\d{9}$/,
          format: 'XXXXXXXXX (9 digits)',
          message: this.$t ? this.$t('Invalid Egyptian tax number. Must be 9 digits') : 'Invalid Egyptian tax number. Must be 9 digits'
        },
        'KW': {
          pattern: /^\d{9}$/,
          format: 'XXXXXXXXX (9 digits)',
          message: this.$t ? this.$t('Invalid Kuwait tax number. Must be 9 digits') : 'Invalid Kuwait tax number. Must be 9 digits'
        },
        'QA': {
          pattern: /^\d{8,9}$/,
          format: 'XXXXXXXX or XXXXXXXX (8-9 digits)',
          message: this.$t ? this.$t('Invalid Qatari tax number. Must be 8-9 digits') : 'Invalid Qatari tax number. Must be 8-9 digits'
        },
        'BH': {
          pattern: /^\d{9}$/,
          format: 'XXXXXXXXX (9 digits)',
          message: this.$t ? this.$t('Invalid Bahrain tax number. Must be 9 digits') : 'Invalid Bahrain tax number. Must be 9 digits'
        },
        'OM': {
          pattern: /^\d{9}$/,
          format: 'XXXXXXXXX (9 digits)',
          message: this.$t ? this.$t('Invalid Omani tax number. Must be 9 digits') : 'Invalid Omani tax number. Must be 9 digits'
        },
        'GB': {
          pattern: /^GB\d{9}(\d{3})?$/,
          format: 'GBXXXXXXXXX or GBXXXXXXXXXXXXX',
          message: this.$t ? this.$t('Invalid UK VAT number. Must start with GB followed by 9 or 12 digits') : 'Invalid UK VAT number. Must start with GB followed by 9 or 12 digits'
        },
        'US': {
          pattern: /^\d{2}-?\d{7}$/,
          format: 'XX-XXXXXXX or XXXXXXXXX (9 digits)',
          message: this.$t ? this.$t('Invalid US EIN. Must be 9 digits') : 'Invalid US EIN. Must be 9 digits'
        },
        'CA': {
          pattern: /^\d{9}RT\d{4}$|^\d{15}$/,
          format: 'XXXXXXXXXRTXXXX or XXXXXXXXXXXXXXX',
          message: this.$t ? this.$t('Invalid Canadian tax number') : 'Invalid Canadian tax number'
        },
        'DE': {
          pattern: /^DE\d{9}$/,
          format: 'DEXXXXXXXXX (11 characters)',
          message: this.$t ? this.$t('Invalid German VAT number. Must start with DE followed by 9 digits') : 'Invalid German VAT number. Must start with DE followed by 9 digits'
        },
        'FR': {
          pattern: /^FR[A-Z0-9]{2}\d{9}$/,
          format: 'FRXXXXXXXXXXX (11 characters)',
          message: this.$t ? this.$t('Invalid French VAT number. Must start with FR') : 'Invalid French VAT number. Must start with FR'
        },
        'ES': {
          pattern: /^ES[A-Z0-9]\d{7}[A-Z0-9]$/,
          format: 'ESXXXXXXXXX (9 characters)',
          message: this.$t ? this.$t('Invalid Spanish VAT number. Must start with ES') : 'Invalid Spanish VAT number. Must start with ES'
        },
        'IT': {
          pattern: /^IT\d{11}$/,
          format: 'ITXXXXXXXXXXX (13 characters)',
          message: this.$t ? this.$t('Invalid Italian VAT number. Must start with IT followed by 11 digits') : 'Invalid Italian VAT number. Must start with IT followed by 11 digits'
        },
        'TR': {
          pattern: /^\d{10}$/,
          format: 'XXXXXXXXXX (10 digits)',
          message: this.$t ? this.$t('Invalid Turkish tax number. Must be 10 digits') : 'Invalid Turkish tax number. Must be 10 digits'
        },
        'IN': {
          pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          format: 'XXAAAAA####X#Z# (15 characters)',
          message: this.$t ? this.$t('Invalid Indian GST number') : 'Invalid Indian GST number'
        },
        'AU': {
          pattern: /^\d{11}$/,
          format: 'XXXXXXXXXXX (11 digits)',
          message: this.$t ? this.$t('Invalid Australian ABN. Must be 11 digits') : 'Invalid Australian ABN. Must be 11 digits'
        }
      };
    }
  },
  watch: {
    'form.country': function formCountry(newCountry, oldCountry) {
      var _this2 = this;
      if (newCountry !== oldCountry) {
        // Update tax number format when country changes
        if (newCountry && this.taxNumberRules[newCountry]) {
          this.taxNumberFormat = this.taxNumberRules[newCountry].format;
        } else {
          this.taxNumberFormat = '';
        }

        // Re-validate tax number if it exists
        if (this.form.tax_number && this.form.tax_number.trim()) {
          this.$nextTick(function () {
            _this2.validateTaxNumber();
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!_this3._mounted) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _this3._mounted = true;

            // Load Cropper.js library
            _context.n = 2;
            return _this3.loadCropperJS();
          case 2:
            // Mark that we're on initialization page
            if (typeof sessionStorage !== 'undefined') {
              sessionStorage.setItem('on_initialization_page', 'true');
            }
            _context.n = 3;
            return _this3.fetchAppInfo();
          case 3:
            _context.n = 4;
            return _this3.fetchCurrencies();
          case 4:
            _context.n = 5;
            return _this3.fetchTenantCompanyName();
          case 5:
            _context.n = 6;
            return _this3.checkInitializationStatus();
          case 6:
            // Initialize tax number format if country is already selected
            if (_this3.form.country && _this3.taxNumberRules[_this3.form.country]) {
              _this3.taxNumberFormat = _this3.taxNumberRules[_this3.form.country].format;
            }
          case 7:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    // Clear the flag when leaving the page
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('on_initialization_page');
    }

    // Cleanup cropper
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
    }
  },
  methods: {
    loadCropperJS: function loadCropperJS() {
      return new Promise(function (resolve, reject) {
        // Check if Cropper is already loaded
        if (window.Cropper) {
          resolve();
          return;
        }

        // Load CSS
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css';
        document.head.appendChild(link);

        // Load JS
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js';
        script.onload = function () {
          return resolve();
        };
        script.onerror = function () {
          return reject(new Error('Failed to load Cropper.js'));
        };
        document.body.appendChild(script);
      });
    },
    fetchTenantCompanyName: function fetchTenantCompanyName() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get('/api/tenant/me');
            case 1:
              response = _context2.v;
              if (response.data && response.data.data) {
                // Pre-populate company name
                if (response.data.data.company) {
                  _this4.form.company_name = response.data.data.company;
                }
                // Pre-populate email address
                if (response.data.data.email) {
                  _this4.form.email_address = response.data.data.email;
                }
              }
              _context2.n = 4;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              if (!(_t.response && _t.response.status === 401)) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              // Only log non-401 errors
              console.error('Error fetching tenant data:', _t);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    onLogoChange: function onLogoChange(e) {
      var _this5 = this;
      var file = e.target.files[0];
      if (!file) return;

      // Validate file type (exclude SVG as it doesn't need cropping)
      var validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        toast.fire({
          type: 'error',
          title: this.$t('Invalid file type'),
          text: this.$t('Please select a valid image file (JPG, PNG, or GIF)')
        });
        return;
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast.fire({
          type: 'error',
          title: this.$t('File too large'),
          text: this.$t('Please select a file smaller than 2MB')
        });
        return;
      }

      // Read file and show crop area
      var reader = new FileReader();
      reader.onloadend = function () {
        _this5.cropImageSrc = reader.result;
        _this5.$nextTick(function () {
          _this5.initCropper();
        });
      };
      reader.readAsDataURL(file);
    },
    initCropper: function initCropper() {
      var _this6 = this;
      if (!this.$refs.cropImage) return;

      // Destroy existing cropper if any
      if (this.cropper) {
        this.cropper.destroy();
      }

      // Initialize cropper with fixed aspect ratio (1:1 for square logo)
      this.cropper = new Cropper(this.$refs.cropImage, {
        aspectRatio: 1,
        viewMode: 1,
        dragMode: 'move',
        autoCropArea: 0.8,
        restore: false,
        guides: true,
        center: true,
        highlight: false,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: false,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        ready: function ready() {
          // Set initial crop box size to 300x300
          var containerData = _this6.cropper.getContainerData();
          var cropBoxData = {
            width: 300,
            height: 300,
            left: (containerData.width - 300) / 2,
            top: (containerData.height - 300) / 2
          };
          _this6.cropper.setCropBoxData(cropBoxData);
        }
      });
    },
    cropLogo: function cropLogo() {
      if (!this.cropper) return;

      // Get cropped canvas
      var canvas = this.cropper.getCroppedCanvas({
        width: 300,
        height: 300,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high'
      });

      // Convert to base64
      var croppedDataUrl = canvas.toDataURL('image/png');

      // Update form and preview
      this.form.company_logo = croppedDataUrl;
      this.logoPreview = croppedDataUrl;

      // Cleanup and reset
      this.cancelCrop();
    },
    cancelCrop: function cancelCrop() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
      this.cropImageSrc = null;

      // Reset file input
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = '';
      }
    },
    removeLogo: function removeLogo() {
      this.form.company_logo = '';
      this.logoPreview = null;
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = '';
      }
      // Cleanup cropper if exists
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
    },
    onCountryChange: function onCountryChange() {
      // Auto-set currency to SAR if Saudi Arabia is selected
      if (this.form.country === 'SA' && this.currencies.length > 0) {
        var sarCurrency = this.currencies.find(function (c) {
          return c.code === 'SAR';
        });
        if (sarCurrency) {
          this.form.default_currency = sarCurrency.id;
        }
      }

      // Reset tax number validation when country changes
      this.taxNumberInvalid = false;
      this.taxNumberErrorMessage = '';
      this.taxNumberFormat = '';

      // Update tax number format display
      if (this.form.country && this.taxNumberRules[this.form.country]) {
        this.taxNumberFormat = this.taxNumberRules[this.form.country].format;
      }

      // Re-validate tax number if it exists
      if (this.form.tax_number && this.form.tax_number.trim()) {
        this.validateTaxNumber();
      }
    },
    validateTaxNumber: function validateTaxNumber() {
      // If tax number is empty, it's valid (optional field)
      if (!this.form.tax_number || !this.form.tax_number.trim()) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = '';
        return true;
      }

      // If no country selected, skip validation
      if (!this.form.country) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = '';
        return true;
      }

      // Get validation rule for selected country
      var rule = this.taxNumberRules[this.form.country];

      // If no rule exists for this country, allow any format
      if (!rule) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = '';
        this.taxNumberFormat = '';
        return true;
      }

      // Update format display
      this.taxNumberFormat = rule.format;

      // Remove spaces and convert to uppercase for validation
      var taxNumber = this.form.tax_number.trim().replace(/\s+/g, '').toUpperCase();

      // Test against pattern
      if (rule.pattern.test(taxNumber)) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = '';
        return true;
      } else {
        this.taxNumberInvalid = true;
        this.taxNumberErrorMessage = rule.message;
        return false;
      }
    },
    getTaxNumberPlaceholder: function getTaxNumberPlaceholder() {
      return this.$t('enter_tax_number');
    },
    onPhoneValidated: function onPhoneValidated(isValid) {
      this.phoneNumberValid = isValid;
      if (!isValid && this.form.phone_number) {
        // Clear the error if validation passes
        if (this.errors.phone_number && this.errors.phone_number === this.$t('phone_invalid')) {
          delete this.errors.phone_number;
        }
      }
    },
    fetchCurrencies: function fetchCurrencies() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, sarCurrency, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get('/api/all-currencies');
            case 1:
              response = _context3.v;
              console.log('Currencies response:', response);

              // Handle the response structure properly
              if (response.data && response.data.data) {
                _this7.currencies = response.data.data;
              } else if (response.data) {
                _this7.currencies = response.data;
              }
              console.log('Currencies loaded:', _this7.currencies);

              // Auto-set SAR currency for Saudi Arabia
              if (_this7.form.country === 'SA' && _this7.currencies.length > 0) {
                sarCurrency = _this7.currencies.find(function (c) {
                  return c.code === 'SAR';
                });
                if (sarCurrency) {
                  _this7.form.default_currency = sarCurrency.id;
                }
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error fetching currencies:', _t2);
              console.error('Error details:', _t2.response);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    fetchAppInfo: function fetchAppInfo() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, settings, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get('/api/general-settings', {
                timeout: 5000
              });
            case 1:
              response = _context4.v;
              if (response.data) {
                settings = response.data;
                _this8.appInfo = {
                  blackLogo: settings.black_logo || '/images/black_logo.png',
                  companyName: settings.company_name || 'Arqam'
                };
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error('Error fetching app info:', _t3);
              // Use default values - don't let this block the page
              _this8.appInfo = {
                blackLogo: '/images/black_logo.png',
                companyName: 'Arqam'
              };
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    checkInitializationStatus: function checkInitializationStatus() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!_this9.statusChecked) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _this9.statusChecked = true;
              _context5.p = 2;
              _context5.n = 3;
              return axios_default().get('/api/tenant-initialization/check', {
                timeout: 5000
              });
            case 3:
              response = _context5.v;
              if (!(response.data && response.data.data && response.data.data.is_initialized)) {
                _context5.n = 4;
                break;
              }
              _this9.initialized = true;
              // Clear session flags
              if (typeof sessionStorage !== 'undefined') {
                sessionStorage.removeItem('on_initialization_page');
                sessionStorage.removeItem('cross_domain_login_processed');
              }
              // Use hard redirect to prevent middleware loops
              // Small delay to ensure state is set
              setTimeout(function () {
                window.location.href = '/dashboard';
              }, 100);
              return _context5.a(2);
            case 4:
              // If not initialized, show the form (default state)
              // Reset flag so it can be checked again if needed
              _this9.statusChecked = false;
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t4 = _context5.v;
              console.error('Error checking initialization status:', _t4);
              // If there's an error, assume not initialized and show the form
              // Reset flag to allow retry
              _this9.statusChecked = false;
            case 6:
              return _context5.a(2);
          }
        }, _callee5, null, [[2, 5]]);
      }))();
    },
    nextStep: function nextStep() {
      // Step 1: Country
      if (this.currentStep === 1) {
        if (!this.form.country) {
          this.errors.country = this.$t('country_required');
          return;
        }
        this.errors = {};
      }
      // Step 2: Company Info
      else if (this.currentStep === 2) {
        if (!this.form.company_name) {
          this.errors.company_name = this.$t('company_name_required');
          return;
        }

        // Validate tax number if provided
        if (this.form.tax_number && this.form.tax_number.trim()) {
          if (!this.validateTaxNumber()) {
            this.errors.tax_number = this.taxNumberErrorMessage;
            return;
          }
        }
        this.errors = {};
      }
      // Step 3: Contact Details
      else if (this.currentStep === 3) {
        if (!this.form.email_address) {
          this.errors.email_address = this.$t('email_required');
          return;
        }
        if (!this.form.phone_number) {
          this.errors.phone_number = this.$t('phone_required');
          return;
        }
        if (!this.phoneNumberValid) {
          this.errors.phone_number = this.$t('phone_invalid');
          return;
        }
        this.errors = {};
      }
      // Step 4: Document Settings
      else if (this.currentStep === 4) {
        if (!this.form.default_currency) {
          this.errors.default_currency = this.$t('currency_required');
          return;
        }
        if (!this.form.invoice_prefix) {
          this.errors.invoice_prefix = this.$t('prefix_required');
          return;
        }
        if (!this.form.purchase_prefix) {
          this.errors.purchase_prefix = this.$t('prefix_required');
          return;
        }
        if (!this.form.quotation_prefix) {
          this.errors.quotation_prefix = this.$t('prefix_required');
          return;
        }
        if (!this.form.invoice_return_prefix) {
          this.errors.invoice_return_prefix = this.$t('prefix_required');
          return;
        }
        if (!this.form.purchase_return_prefix) {
          this.errors.purchase_return_prefix = this.$t('prefix_required');
          return;
        }
        this.errors = {};
      }
      // Step 5: System Type
      else if (this.currentStep === 5) {
        if (!this.form.system_type) {
          this.errors.system_type = this.$t('system_type_required');
          return;
        }
        this.errors = {};
      }
      this.currentStep++;
    },
    previousStep: function previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    submitForm: function submitForm() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var hasErrors, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              // Final validation
              hasErrors = false;
              if (!_this0.form.country) {
                _this0.errors.country = _this0.$t('country_required');
                _this0.currentStep = 1;
                hasErrors = true;
              }
              if (!_this0.form.company_name) {
                _this0.errors.company_name = _this0.$t('company_name_required');
                if (!hasErrors) _this0.currentStep = 2;
                hasErrors = true;
              }
              // Validate tax number if provided
              if (_this0.form.tax_number && _this0.form.tax_number.trim()) {
                if (!_this0.validateTaxNumber()) {
                  _this0.errors.tax_number = _this0.taxNumberErrorMessage;
                  if (!hasErrors) _this0.currentStep = 2;
                  hasErrors = true;
                }
              }
              if (!_this0.form.email_address) {
                _this0.errors.email_address = _this0.$t('email_required');
                if (!hasErrors) _this0.currentStep = 3;
                hasErrors = true;
              }
              if (!_this0.form.phone_number) {
                _this0.errors.phone_number = _this0.$t('phone_required');
                if (!hasErrors) _this0.currentStep = 3;
                hasErrors = true;
              } else if (!_this0.phoneNumberValid) {
                _this0.errors.phone_number = _this0.$t('phone_invalid');
                if (!hasErrors) _this0.currentStep = 3;
                hasErrors = true;
              }
              if (!_this0.form.default_currency) {
                _this0.errors.default_currency = _this0.$t('currency_required');
                if (!hasErrors) _this0.currentStep = 4;
                hasErrors = true;
              }
              if (!_this0.form.system_type) {
                _this0.errors.system_type = _this0.$t('system_type_required');
                if (!hasErrors) _this0.currentStep = 5;
                hasErrors = true;
              }
              if (!hasErrors) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _this0.loading = true;
              _this0.errors = {};
              _context6.p = 2;
              _context6.n = 3;
              return _this0.form.post('/api/tenant-initialization');
            case 3:
              toast.fire({
                type: 'success',
                title: _this0.$t('setup_completed_successfully')
              });
              _this0.initialized = true;

              // Clear any session flags that might interfere
              if (typeof sessionStorage !== 'undefined') {
                sessionStorage.removeItem('cross_domain_login_processed');
                sessionStorage.removeItem('on_initialization_page');
              }
              setTimeout(function () {
                window.location.href = '/dashboard';
              }, 1500);
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t5 = _context6.v;
              if (_t5.response && _t5.response.status === 401) {
                // User is not authenticated, redirect to login
                toast.fire({
                  type: 'warning',
                  title: _this0.$t('please_login_first')
                });
                setTimeout(function () {
                  window.location.href = '/login';
                }, 1000);
              } else if (_t5.response && _t5.response.data.errors) {
                _this0.errors = _t5.response.data.errors;
              } else {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('error_occurred')
                });
              }
            case 5:
              _context6.p = 5;
              _this0.loading = false;
              return _context6.f(5);
            case 6:
              return _context6.a(2);
          }
        }, _callee6, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_tenant_initializationvue_type_script_lang_js = (tenant_initializationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=318a8acf&prod&scoped=true&lang=css
var tenant_initializationvue_type_style_index_0_id_318a8acf_prod_scoped_true_lang_css = __webpack_require__(36240);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=318a8acf&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tenant_initializationvue_type_style_index_0_id_318a8acf_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_tenant_initializationvue_type_style_index_0_id_318a8acf_prod_scoped_true_lang_css = (tenant_initializationvue_type_style_index_0_id_318a8acf_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=318a8acf&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/tenant-initialization.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_tenant_initializationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "318a8acf",
  null
  
)

/* harmony default export */ const tenant_initialization = (component.exports);

/***/ }),

/***/ 36240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tenant-initialization[data-v-318a8acf]{background:linear-gradient(135deg,#f5f7fa,#e4e7eb);min-height:100vh;padding:20px}.language-switcher-container[data-v-318a8acf]{position:fixed;right:20px;top:20px;z-index:9999}.auth-wrapper[data-v-318a8acf]{align-items:center;display:flex;min-height:100vh;padding:60px 20px}.wizard-progress[data-v-318a8acf]{margin-bottom:30px}.progress-container[data-v-318a8acf]{justify-content:space-between;margin:0 auto;max-width:700px}.progress-container[data-v-318a8acf],.progress-item[data-v-318a8acf]{align-items:center;display:flex;position:relative}.progress-item[data-v-318a8acf]{flex:1;flex-direction:column}.step-indicator[data-v-318a8acf]{align-items:center;background:#e9ecef;border:2px solid #e9ecef;border-radius:50%;display:flex;font-size:16px;font-weight:600;height:45px;justify-content:center;margin-bottom:10px;position:relative;transition:all .3s ease;width:45px}.progress-item.active .step-indicator[data-v-318a8acf]{background:#33a0d9;border-color:#33a0d9;color:#fff;transform:scale(1.1)}.progress-item.completed .step-indicator[data-v-318a8acf]{background:#28a745;border-color:#28a745;color:#fff}.step-number[data-v-318a8acf]{font-size:16px;font-weight:600;transition:opacity .3s ease}.step-check[data-v-318a8acf]{align-items:center;animation:scaleIn-318a8acf .3s ease;color:#fff;display:flex;font-size:14px;justify-content:center}@keyframes scaleIn-318a8acf{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.step-title[data-v-318a8acf]{color:#6c757d;font-size:12px;font-weight:500;text-align:center}.progress-item.active .step-title[data-v-318a8acf]{color:#33a0d9;font-weight:600}.system-type-card[data-v-318a8acf]{background:#fff;border:2px solid #e9ecef;border-radius:15px;box-shadow:0 2px 4px rgba(0,0,0,.05);cursor:pointer;height:100%;padding:25px 15px;text-align:center;transition:all .3s}.system-type-card[data-v-318a8acf]:hover{border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.1);transform:translateY(-5px)}.system-type-card.active[data-v-318a8acf]{background:#f8fbff;border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.15);transform:translateY(-5px)}.card-icon[data-v-318a8acf]{color:#33a0d9;font-size:48px;margin-bottom:15px}.system-type-card h6[data-v-318a8acf]{color:#333;font-weight:600;margin-bottom:8px}.system-type-card p[data-v-318a8acf]{color:#6c757d;font-size:13px;margin:0}.wizard-step[data-v-318a8acf]{animation:fadeIn-318a8acf .3s}@keyframes fadeIn-318a8acf{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.lg-logo[data-v-318a8acf]{transition:all .3s ease}.lg-logo[data-v-318a8acf]:hover{opacity:.9}.text-primary[data-v-318a8acf]{color:#33a0d9!important}.btn-primary[data-v-318a8acf]{background-color:#33a0d9;border-color:#33a0d9}.btn-primary[data-v-318a8acf]:hover{background-color:#2b8bc4;border-color:#2b8bc4}@media (max-width:768px){.language-switcher-container[data-v-318a8acf]{right:10px;top:10px}.auth-wrapper[data-v-318a8acf]{padding:40px 15px}.step-indicator[data-v-318a8acf]{height:35px;width:35px}.step-check[data-v-318a8acf],.step-number[data-v-318a8acf]{font-size:12px}.step-title[data-v-318a8acf]{font-size:10px}.progress-container[data-v-318a8acf]{gap:5px;max-width:100%}.card-icon[data-v-318a8acf]{font-size:36px}.system-type-card[data-v-318a8acf]{padding:20px 12px}}.tenant-initialization .language-switcher-container[data-v-318a8acf]{left:auto;right:20px}@media (max-width:768px){.tenant-initialization .language-switcher-container[data-v-318a8acf]{left:auto;right:10px}}.logo-upload-container[data-v-318a8acf]{align-items:center;display:flex;flex-direction:column}.logo-preview[data-v-318a8acf]{text-align:center}.logo-preview-image[data-v-318a8acf]{box-shadow:0 2px 8px rgba(0,0,0,.1);max-height:200px;max-width:200px}.file-upload-area[data-v-318a8acf]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:15px;overflow:hidden;padding:40px 20px;position:relative;text-align:center;transition:all .3s ease}.file-upload-area[data-v-318a8acf]:hover{background:#f0f7ff;border-color:#33a0d9}.file-upload-area.has-logo[data-v-318a8acf]{background:#f0fff4;border-color:#28a745;padding:20px}.file-upload-label[data-v-318a8acf]{align-items:center;cursor:pointer;display:flex;flex-direction:column;gap:15px;justify-content:center;padding:10px;transition:all .3s ease}.file-upload-label[data-v-318a8acf]:hover{transform:translateY(-2px)}.upload-icon-wrapper[data-v-318a8acf]{align-items:center;background:linear-gradient(135deg,#33a0d9,#2b8bc4);border-radius:50%;box-shadow:0 4px 15px rgba(51,160,217,.3);color:#fff;display:flex;font-size:24px;height:60px;justify-content:center;transition:all .3s ease;width:60px}.file-upload-label:hover .upload-icon-wrapper[data-v-318a8acf]{box-shadow:0 6px 20px rgba(51,160,217,.4);transform:scale(1.1)}.upload-text[data-v-318a8acf]{display:flex;flex-direction:column;gap:5px}.upload-title[data-v-318a8acf]{color:#333;font-size:16px;font-weight:600}.upload-subtitle[data-v-318a8acf]{color:#6c757d;font-size:13px}.upload-info[data-v-318a8acf]{border-top:1px solid #e9ecef;margin-top:15px;padding-top:15px}.upload-info small[data-v-318a8acf]{align-items:center;display:inline-flex;font-size:12px}.file-upload-area.has-logo .upload-icon-wrapper[data-v-318a8acf]{background:linear-gradient(135deg,#28a745,#218838);box-shadow:0 4px 15px rgba(40,167,69,.3)}.file-upload-area.has-logo .upload-title[data-v-318a8acf]{color:#28a745}@media (max-width:768px){.file-upload-area[data-v-318a8acf]{padding:30px 15px}.upload-icon-wrapper[data-v-318a8acf]{font-size:20px;height:50px;width:50px}.upload-title[data-v-318a8acf]{font-size:14px}.upload-subtitle[data-v-318a8acf]{font-size:12px}}.logo-preview-wrapper[data-v-318a8acf]{border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);display:inline-block;overflow:hidden;position:relative}.logo-preview-wrapper:hover .logo-preview-overlay[data-v-318a8acf]{opacity:1}.logo-preview-overlay[data-v-318a8acf]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .3s ease}.logo-preview-image[data-v-318a8acf]{background:#f8f9fa;border-radius:10px;display:block;height:300px;-o-object-fit:contain;object-fit:contain;width:300px}.logo-crop-wrapper[data-v-318a8acf]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:15px;padding:20px}.crop-container-inline[data-v-318a8acf]{background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);margin:0 auto;max-height:400px;max-width:600px;overflow:hidden;width:100%}.crop-image-inline[data-v-318a8acf]{display:block;max-width:100%}.crop-actions[data-v-318a8acf]{display:flex;gap:10px;justify-content:center}.crop-actions .btn[data-v-318a8acf]{min-width:120px}.crop-container-inline .cropper-container[data-v-318a8acf]{max-height:400px}.crop-container-inline .cropper-view-box[data-v-318a8acf]{outline:2px solid #33a0d9;outline-offset:-2px}@media (max-width:768px){.logo-crop-wrapper[data-v-318a8acf]{padding:15px}.crop-container-inline[data-v-318a8acf]{max-height:300px}.crop-actions[data-v-318a8acf]{flex-direction:column}.crop-actions .btn[data-v-318a8acf]{width:100%}.logo-preview-image[data-v-318a8acf]{height:200px;width:200px}}.country-select[data-v-318a8acf]{width:100%}.country-select .vs__dropdown-toggle[data-v-318a8acf]{border:0;border-radius:50px;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);min-height:3rem;padding:.5rem 1rem}.country-select .vs__search[data-v-318a8acf]{font-size:1rem;margin:0;padding:0}.country-option[data-v-318a8acf],.country-selected[data-v-318a8acf]{align-items:center;display:flex;gap:.5rem}.country-flag[data-v-318a8acf]{font-size:1.25rem;line-height:1}.country-name[data-v-318a8acf]{font-size:1rem}.country-select.is-invalid .vs__dropdown-toggle[data-v-318a8acf]{border-color:#dc3545}.country-select .vs__dropdown-menu[data-v-318a8acf]{border-radius:15px;box-shadow:0 .5rem 1rem rgba(0,0,0,.15);margin-top:.5rem}.country-select .vs__dropdown-option[data-v-318a8acf]{padding:.75rem 1rem}.country-select .vs__dropdown-option--highlight[data-v-318a8acf]{background-color:#33a0d9;color:#fff}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);