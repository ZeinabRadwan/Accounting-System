"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8466],{

/***/ 18466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tenant_initialization)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=template&id=7d2abc32&scoped=true
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
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.country,
      expression: "form.country"
    }],
    ref: "countrySelect",
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary country-select",
    "class": {
      'is-invalid': _vm.errors.country
    },
    attrs: {
      "id": "country",
      "name": "country"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCountryChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('select_country')))]), _vm._v(" "), _vm._l(_vm.countries, function (country) {
    return _c('option', {
      key: country.code,
      attrs: {
        "data-flag": country.flagImage
      },
      domProps: {
        "value": country.code
      }
    }, [_vm._v("\n                        " + _vm._s(country.name) + "\n                      ")]);
  })], 2), _vm._v(" "), _vm.errors.country ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.country))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.currentStep === 2 ? _c('div', {
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
      "id": "company_name",
      "name": "company_name",
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
  }, [_vm._v(_vm._s(_vm.errors.company_name) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Adjust the selection to crop')))])]) : _vm.logoPreview ? _c('div', {
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
  }, [_vm._v(_vm._s(_vm.errors.company_logo) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('tax_number')) + "\n                      "), _c('span', {
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
      "id": "tax_number",
      "name": "tax_number",
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
      "id": "email_address",
      "name": "email_address",
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
  }, [_vm._v(_vm._s(_vm.errors.email_address) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('address')) + "\n                      "), _c('span', {
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
      "id": "address",
      "name": "address",
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
      "id": "default_currency",
      "name": "default_currency",
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
    }, [_vm._v("\n                        " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n                      ")]);
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
      "id": "invoice_prefix",
      "name": "invoice_prefix",
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
      "id": "purchase_prefix",
      "name": "purchase_prefix",
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
      "id": "quotation_prefix",
      "name": "quotation_prefix",
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
      "id": "invoice_return_prefix",
      "name": "invoice_return_prefix",
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
  }, [_vm._v(_vm._s(_vm.errors.invoice_return_prefix) + "\n                      ")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
      "id": "purchase_return_prefix",
      "name": "purchase_return_prefix",
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
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.selectSystemType('accounting');
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
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.selectSystemType('pos');
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
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.selectSystemType('both');
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
      "id": "system_type",
      "name": "system_type",
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

;// ./resources/js/pages/tenant-initialization.vue?vue&type=template&id=7d2abc32&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/PhoneNumberInput.vue + 5 modules
var PhoneNumberInput = __webpack_require__(24698);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const tenant_initializationvue_type_script_lang_js = ({
  name: 'TenantInitialization',
  layout: 'basic',
  middleware: [],
  mixins: [RTLMixin/* default */.A],
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
        flag: '🇸🇦',
        flagImage: 'https://flagcdn.com/w40/sa.png'
      }, {
        code: 'AE',
        nameKey: 'United Arab Emirates',
        flag: '🇦🇪',
        flagImage: 'https://flagcdn.com/w40/ae.png'
      }, {
        code: 'EG',
        nameKey: 'Egypt',
        flag: '🇪🇬',
        flagImage: 'https://flagcdn.com/w40/eg.png'
      }, {
        code: 'JO',
        nameKey: 'Jordan',
        flag: '🇯🇴',
        flagImage: 'https://flagcdn.com/w40/jo.png'
      }, {
        code: 'LB',
        nameKey: 'Lebanon',
        flag: '🇱🇧',
        flagImage: 'https://flagcdn.com/w40/lb.png'
      }, {
        code: 'MA',
        nameKey: 'Morocco',
        flag: '🇲🇦',
        flagImage: 'https://flagcdn.com/w40/ma.png'
      }, {
        code: 'TN',
        nameKey: 'Tunisia',
        flag: '🇹🇳',
        flagImage: 'https://flagcdn.com/w40/tn.png'
      }, {
        code: 'DZ',
        nameKey: 'Algeria',
        flag: '🇩🇿',
        flagImage: 'https://flagcdn.com/w40/dz.png'
      }, {
        code: 'KW',
        nameKey: 'Kuwait',
        flag: '🇰🇼',
        flagImage: 'https://flagcdn.com/w40/kw.png'
      }, {
        code: 'QA',
        nameKey: 'Qatar',
        flag: '🇶🇦',
        flagImage: 'https://flagcdn.com/w40/qa.png'
      }, {
        code: 'BH',
        nameKey: 'Bahrain',
        flag: '🇧🇭',
        flagImage: 'https://flagcdn.com/w40/bh.png'
      }, {
        code: 'OM',
        nameKey: 'Oman',
        flag: '🇴🇲',
        flagImage: 'https://flagcdn.com/w40/om.png'
      }, {
        code: 'YE',
        nameKey: 'Yemen',
        flag: '🇾🇪',
        flagImage: 'https://flagcdn.com/w40/ye.png'
      }, {
        code: 'IQ',
        nameKey: 'Iraq',
        flag: '🇮🇶',
        flagImage: 'https://flagcdn.com/w40/iq.png'
      }, {
        code: 'US',
        nameKey: 'United States',
        flag: '🇺🇸',
        flagImage: 'https://flagcdn.com/w40/us.png'
      }, {
        code: 'GB',
        nameKey: 'United Kingdom',
        flag: '🇬🇧',
        flagImage: 'https://flagcdn.com/w40/gb.png'
      }, {
        code: 'CA',
        nameKey: 'Canada',
        flag: '🇨🇦',
        flagImage: 'https://flagcdn.com/w40/ca.png'
      }, {
        code: 'AU',
        nameKey: 'Australia',
        flag: '🇦🇺',
        flagImage: 'https://flagcdn.com/w40/au.png'
      }, {
        code: 'DE',
        nameKey: 'Germany',
        flag: '🇩🇪',
        flagImage: 'https://flagcdn.com/w40/de.png'
      }, {
        code: 'FR',
        nameKey: 'France',
        flag: '🇫🇷',
        flagImage: 'https://flagcdn.com/w40/fr.png'
      }, {
        code: 'ES',
        nameKey: 'Spain',
        flag: '🇪🇸',
        flagImage: 'https://flagcdn.com/w40/es.png'
      }, {
        code: 'IT',
        nameKey: 'Italy',
        flag: '🇮🇹',
        flagImage: 'https://flagcdn.com/w40/it.png'
      }, {
        code: 'NL',
        nameKey: 'Netherlands',
        flag: '🇳🇱',
        flagImage: 'https://flagcdn.com/w40/nl.png'
      }, {
        code: 'BE',
        nameKey: 'Belgium',
        flag: '🇧🇪',
        flagImage: 'https://flagcdn.com/w40/be.png'
      }, {
        code: 'CH',
        nameKey: 'Switzerland',
        flag: '🇨🇭',
        flagImage: 'https://flagcdn.com/w40/ch.png'
      }, {
        code: 'AT',
        nameKey: 'Austria',
        flag: '🇦🇹',
        flagImage: 'https://flagcdn.com/w40/at.png'
      }, {
        code: 'SE',
        nameKey: 'Sweden',
        flag: '🇸🇪',
        flagImage: 'https://flagcdn.com/w40/se.png'
      }, {
        code: 'NO',
        nameKey: 'Norway',
        flag: '🇳🇴',
        flagImage: 'https://flagcdn.com/w40/no.png'
      }, {
        code: 'DK',
        nameKey: 'Denmark',
        flag: '🇩🇰',
        flagImage: 'https://flagcdn.com/w40/dk.png'
      }, {
        code: 'FI',
        nameKey: 'Finland',
        flag: '🇫🇮',
        flagImage: 'https://flagcdn.com/w40/fi.png'
      }, {
        code: 'PL',
        nameKey: 'Poland',
        flag: '🇵🇱',
        flagImage: 'https://flagcdn.com/w40/pl.png'
      }, {
        code: 'IE',
        nameKey: 'Ireland',
        flag: '🇮🇪',
        flagImage: 'https://flagcdn.com/w40/ie.png'
      }, {
        code: 'PT',
        nameKey: 'Portugal',
        flag: '🇵🇹',
        flagImage: 'https://flagcdn.com/w40/pt.png'
      }, {
        code: 'GR',
        nameKey: 'Greece',
        flag: '🇬🇷',
        flagImage: 'https://flagcdn.com/w40/gr.png'
      }, {
        code: 'LU',
        nameKey: 'Luxembourg',
        flag: '🇱🇺',
        flagImage: 'https://flagcdn.com/w40/lu.png'
      }, {
        code: 'TR',
        nameKey: 'Turkey',
        flag: '🇹🇷',
        flagImage: 'https://flagcdn.com/w40/tr.png'
      }, {
        code: 'IN',
        nameKey: 'India',
        flag: '🇮🇳',
        flagImage: 'https://flagcdn.com/w40/in.png'
      }, {
        code: 'CN',
        nameKey: 'China',
        flag: '🇨🇳',
        flagImage: 'https://flagcdn.com/w40/cn.png'
      }, {
        code: 'JP',
        nameKey: 'Japan',
        flag: '🇯🇵',
        flagImage: 'https://flagcdn.com/w40/jp.png'
      }, {
        code: 'KR',
        nameKey: 'South Korea',
        flag: '🇰🇷',
        flagImage: 'https://flagcdn.com/w40/kr.png'
      }, {
        code: 'BR',
        nameKey: 'Brazil',
        flag: '🇧🇷',
        flagImage: 'https://flagcdn.com/w40/br.png'
      }, {
        code: 'MX',
        nameKey: 'Mexico',
        flag: '🇲🇽',
        flagImage: 'https://flagcdn.com/w40/mx.png'
      }, {
        code: 'AR',
        nameKey: 'Argentina',
        flag: '🇦🇷',
        flagImage: 'https://flagcdn.com/w40/ar.png'
      }, {
        code: 'ZA',
        nameKey: 'South Africa',
        flag: '🇿🇦',
        flagImage: 'https://flagcdn.com/w40/za.png'
      }, {
        code: 'NG',
        nameKey: 'Nigeria',
        flag: '🇳🇬',
        flagImage: 'https://flagcdn.com/w40/ng.png'
      }, {
        code: 'KE',
        nameKey: 'Kenya',
        flag: '🇰🇪',
        flagImage: 'https://flagcdn.com/w40/ke.png'
      }, {
        code: 'PK',
        nameKey: 'Pakistan',
        flag: '🇵🇰',
        flagImage: 'https://flagcdn.com/w40/pk.png'
      }, {
        code: 'BD',
        nameKey: 'Bangladesh',
        flag: '🇧🇩',
        flagImage: 'https://flagcdn.com/w40/bd.png'
      }, {
        code: 'ID',
        nameKey: 'Indonesia',
        flag: '🇮🇩',
        flagImage: 'https://flagcdn.com/w40/id.png'
      }, {
        code: 'PH',
        nameKey: 'Philippines',
        flag: '🇵🇭',
        flagImage: 'https://flagcdn.com/w40/ph.png'
      }, {
        code: 'VN',
        nameKey: 'Vietnam',
        flag: '🇻🇳',
        flagImage: 'https://flagcdn.com/w40/vn.png'
      }, {
        code: 'TH',
        nameKey: 'Thailand',
        flag: '🇹🇭',
        flagImage: 'https://flagcdn.com/w40/th.png'
      }, {
        code: 'MY',
        nameKey: 'Malaysia',
        flag: '🇲🇾',
        flagImage: 'https://flagcdn.com/w40/my.png'
      }, {
        code: 'SG',
        nameKey: 'Singapore',
        flag: '🇸🇬',
        flagImage: 'https://flagcdn.com/w40/sg.png'
      }, {
        code: 'NZ',
        nameKey: 'New Zealand',
        flag: '🇳🇿',
        flagImage: 'https://flagcdn.com/w40/nz.png'
      }, {
        code: 'RU',
        nameKey: 'Russia',
        flag: '🇷🇺',
        flagImage: 'https://flagcdn.com/w40/ru.png'
      }, {
        code: 'UA',
        nameKey: 'Ukraine',
        flag: '🇺🇦',
        flagImage: 'https://flagcdn.com/w40/ua.png'
      }, {
        code: 'CZ',
        nameKey: 'Czech Republic',
        flag: '🇨🇿',
        flagImage: 'https://flagcdn.com/w40/cz.png'
      }, {
        code: 'HU',
        nameKey: 'Hungary',
        flag: '🇭🇺',
        flagImage: 'https://flagcdn.com/w40/hu.png'
      }, {
        code: 'RO',
        nameKey: 'Romania',
        flag: '🇷🇴',
        flagImage: 'https://flagcdn.com/w40/ro.png'
      }, {
        code: 'BG',
        nameKey: 'Bulgaria',
        flag: '🇧🇬',
        flagImage: 'https://flagcdn.com/w40/bg.png'
      }, {
        code: 'HR',
        nameKey: 'Croatia',
        flag: '🇭🇷',
        flagImage: 'https://flagcdn.com/w40/hr.png'
      }, {
        code: 'SI',
        nameKey: 'Slovenia',
        flag: '🇸🇮',
        flagImage: 'https://flagcdn.com/w40/si.png'
      }, {
        code: 'SK',
        nameKey: 'Slovakia',
        flag: '🇸🇰',
        flagImage: 'https://flagcdn.com/w40/sk.png'
      }, {
        code: 'EE',
        nameKey: 'Estonia',
        flag: '🇪🇪',
        flagImage: 'https://flagcdn.com/w40/ee.png'
      }, {
        code: 'LV',
        nameKey: 'Latvia',
        flag: '🇱🇻',
        flagImage: 'https://flagcdn.com/w40/lv.png'
      }, {
        code: 'LT',
        nameKey: 'Lithuania',
        flag: '🇱🇹',
        flagImage: 'https://flagcdn.com/w40/lt.png'
      }, {
        code: 'IS',
        nameKey: 'Iceland',
        flag: '🇮🇸',
        flagImage: 'https://flagcdn.com/w40/is.png'
      }],
      select2Instance: null,
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
          name: _this.$t(country.nameKey) || country.nameKey,
          flagImage: country.flagImage
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
        // Sync Select2 value
        if (this.select2Instance && this.$refs.countrySelect) {
          var $ = window.jQuery;
          $(this.$refs.countrySelect).val(newCountry).trigger('change');
        }

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
    },
    currentStep: function currentStep(newStep, oldStep) {
      var _this3 = this;
      // Destroy Select2 when leaving step 1
      if (oldStep === 1 && newStep !== 1) {
        this.destroySelect2();
      }

      // Initialize Select2 only when step 1 is shown
      if (newStep === 1) {
        this.$nextTick(function () {
          _this3.initSelect2();
        });
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!_this4._mounted) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _this4._mounted = true;

            // Load Cropper.js library
            _context.next = 5;
            return _this4.loadCropperJS();
          case 5:
            _context.next = 7;
            return _this4.loadSelect2();
          case 7:
            // Mark that we're on initialization page
            if (typeof sessionStorage !== 'undefined') {
              sessionStorage.setItem('on_initialization_page', 'true');
            }
            _context.next = 10;
            return _this4.fetchAppInfo();
          case 10:
            _context.next = 12;
            return _this4.fetchCurrencies();
          case 12:
            _context.next = 14;
            return _this4.fetchTenantCompanyName();
          case 14:
            _context.next = 16;
            return _this4.checkInitializationStatus();
          case 16:
            // Initialize tax number format if country is already selected
            if (_this4.form.country && _this4.taxNumberRules[_this4.form.country]) {
              _this4.taxNumberFormat = _this4.taxNumberRules[_this4.form.country].format;
            }

            // Initialize Select2 only if we're on step 1
            if (_this4.currentStep === 1) {
              _this4.$nextTick(function () {
                _this4.initSelect2();
              });
            }
          case 18:
          case "end":
            return _context.stop();
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

    // Cleanup Select2
    this.destroySelect2();
  },
  methods: {
    loadSelect2: function loadSelect2() {
      return new Promise(function (resolve) {
        // Check if Select2 is already loaded
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2) {
          resolve();
          return;
        }

        // Check if jQuery is loaded
        if (!window.jQuery) {
          // Load jQuery first
          var jqueryScript = document.createElement('script');
          jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
          jqueryScript.onload = function () {
            // Then load Select2 CSS
            var cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css';
            document.head.appendChild(cssLink);

            // Then load Select2 JS
            var select2Script = document.createElement('script');
            select2Script.src = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js';
            select2Script.onload = function () {
              return resolve();
            };
            select2Script.onerror = function () {
              return resolve();
            }; // Resolve anyway to not block
            document.body.appendChild(select2Script);
          };
          jqueryScript.onerror = function () {
            return resolve();
          }; // Resolve anyway to not block
          document.body.appendChild(jqueryScript);
        } else {
          // jQuery is loaded, just load Select2
          var cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css';
          document.head.appendChild(cssLink);
          var select2Script = document.createElement('script');
          select2Script.src = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js';
          select2Script.onload = function () {
            return resolve();
          };
          select2Script.onerror = function () {
            return resolve();
          }; // Resolve anyway to not block
          document.body.appendChild(select2Script);
        }
      });
    },
    initSelect2: function initSelect2() {
      var _this5 = this;
      // Only initialize if we're on step 1
      if (this.currentStep !== 1) {
        return;
      }
      if (!this.$refs.countrySelect) {
        return;
      }

      // Destroy existing instance if any
      if (this.select2Instance) {
        this.select2Instance.destroy();
        this.select2Instance = null;
      }

      // Wait for Select2 to be available
      if (!window.jQuery || !window.jQuery.fn.select2) {
        setTimeout(function () {
          return _this5.initSelect2();
        }, 100);
        return;
      }
      var $ = window.jQuery;
      var self = this;

      // Initialize Select2
      this.select2Instance = $(this.$refs.countrySelect).select2({
        placeholder: this.$t('select_country'),
        allowClear: false,
        width: '100%',
        escapeMarkup: function escapeMarkup(markup) {
          return markup; // Allow HTML rendering
        },
        templateResult: function templateResult(data) {
          if (!data.id) {
            return data.text;
          }
          var $option = $(data.element);
          var flagImage = $option.data('flag') || '';
          var countryName = data.text;
          if (flagImage) {
            return $('<span><img src="' + flagImage + '" width="18" height="12" style="margin-right: 8px; vertical-align: middle;" /> ' + countryName + '</span>');
          }
          return $('<span>' + countryName + '</span>');
        },
        templateSelection: function templateSelection(data) {
          if (!data.id) {
            return data.text;
          }
          var $option = $(data.element);
          var flagImage = $option.data('flag') || '';
          var countryName = data.text;
          if (flagImage) {
            return $('<span><img src="' + flagImage + '" width="18" height="12" style="margin-right: 8px; vertical-align: middle;" /> ' + countryName + '</span>');
          }
          return $('<span>' + countryName + '</span>');
        }
      });

      // Add inline style to set height to 40px
      $(this.$refs.countrySelect).next('.select2-container').find('.select2-selection--single').css('height', '40px');

      // Handle change event to sync with Vue model
      $(this.$refs.countrySelect).on('change', function () {
        self.form.country = $(this).val();
        self.onCountryChange();
      });

      // Set initial value if form.country is already set
      if (this.form.country) {
        $(this.$refs.countrySelect).val(this.form.country).trigger('change');
      }
    },
    destroySelect2: function destroySelect2() {
      if (this.select2Instance) {
        try {
          this.select2Instance.destroy();
        } catch (e) {
          // Ignore errors if already destroyed
        }
        this.select2Instance = null;
      }

      // Also remove any Select2 DOM elements that might persist
      if (window.jQuery) {
        var $ = window.jQuery;

        // Remove Select2 container next to country select
        if (this.$refs.countrySelect) {
          var $select = $(this.$refs.countrySelect);
          var $container = $select.next('.select2-container');
          if ($container.length) {
            $container.remove();
          }
        }

        // Remove any orphaned Select2 dropdowns and containers within the wizard
        var $wizard = $('.wizard-step');
        if ($wizard.length) {
          $wizard.find('.select2-container').remove();
          $wizard.find('.select2-dropdown').remove();
        }
      }
    },
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios_default().get('/api/tenant/me');
            case 3:
              response = _context2.sent;
              if (response.data && response.data.data) {
                // Pre-populate company name
                if (response.data.data.company) {
                  _this6.form.company_name = response.data.data.company;
                }
                // Pre-populate email address
                if (response.data.data.email) {
                  _this6.form.email_address = response.data.data.email;
                }
              }
              _context2.next = 12;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              if (!(_context2.t0.response && _context2.t0.response.status === 401)) {
                _context2.next = 11;
                break;
              }
              return _context2.abrupt("return");
            case 11:
              // Only log non-401 errors
              console.error('Error fetching tenant data:', _context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    onLogoChange: function onLogoChange(e) {
      var _this7 = this;
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
        _this7.cropImageSrc = reader.result;
        _this7.$nextTick(function () {
          _this7.initCropper();
        });
      };
      reader.readAsDataURL(file);
    },
    initCropper: function initCropper() {
      var _this8 = this;
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
          var containerData = _this8.cropper.getContainerData();
          var cropBoxData = {
            width: 300,
            height: 300,
            left: (containerData.width - 300) / 2,
            top: (containerData.height - 300) / 2
          };
          _this8.cropper.setCropBoxData(cropBoxData);
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, sarCurrency;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios_default().get('/api/all-currencies');
            case 3:
              response = _context3.sent;
              console.log('Currencies response:', response);

              // Handle the response structure properly
              if (response.data && response.data.data) {
                _this9.currencies = response.data.data;
              } else if (response.data) {
                _this9.currencies = response.data;
              }
              console.log('Currencies loaded:', _this9.currencies);

              // Auto-set SAR currency for Saudi Arabia
              if (_this9.form.country === 'SA' && _this9.currencies.length > 0) {
                sarCurrency = _this9.currencies.find(function (c) {
                  return c.code === 'SAR';
                });
                if (sarCurrency) {
                  _this9.form.default_currency = sarCurrency.id;
                }
              }
              _context3.next = 14;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.error('Error fetching currencies:', _context3.t0);
              console.error('Error details:', _context3.t0.response);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    fetchAppInfo: function fetchAppInfo() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response, settings;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get('/api/general-settings', {
                timeout: 5000
              });
            case 3:
              response = _context4.sent;
              if (response.data) {
                settings = response.data;
                _this0.appInfo = {
                  blackLogo: settings.black_logo || '/images/black_logo.png',
                  companyName: settings.company_name || 'Arqam'
                };
              }
              _context4.next = 11;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error('Error fetching app info:', _context4.t0);
              // Use default values - don't let this block the page
              _this0.appInfo = {
                blackLogo: '/images/black_logo.png',
                companyName: 'Arqam'
              };
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    checkInitializationStatus: function checkInitializationStatus() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this1.statusChecked) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              _this1.statusChecked = true;
              _context5.prev = 3;
              _context5.next = 6;
              return axios_default().get('/api/tenant-initialization/check', {
                timeout: 5000
              });
            case 6:
              response = _context5.sent;
              if (!(response.data && response.data.data && response.data.data.is_initialized)) {
                _context5.next = 12;
                break;
              }
              _this1.initialized = true;
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
              return _context5.abrupt("return");
            case 12:
              // If not initialized, show the form (default state)
              // Reset flag so it can be checked again if needed
              _this1.statusChecked = false;
              _context5.next = 19;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](3);
              console.error('Error checking initialization status:', _context5.t0);
              // If there's an error, assume not initialized and show the form
              // Reset flag to allow retry
              _this1.statusChecked = false;
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[3, 15]]);
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
    selectSystemType: function selectSystemType(type) {
      // Prevent any event bubbling that might trigger form submission
      this.form.system_type = type;
      // Clear any errors when selecting
      if (this.errors.system_type) {
        delete this.errors.system_type;
      }
    },
    submitForm: function submitForm() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var hasErrors;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // Final validation
              hasErrors = false;
              if (!_this10.form.country) {
                _this10.errors.country = _this10.$t('country_required');
                _this10.currentStep = 1;
                hasErrors = true;
              }
              if (!_this10.form.company_name) {
                _this10.errors.company_name = _this10.$t('company_name_required');
                if (!hasErrors) _this10.currentStep = 2;
                hasErrors = true;
              }
              // Validate tax number if provided
              if (_this10.form.tax_number && _this10.form.tax_number.trim()) {
                if (!_this10.validateTaxNumber()) {
                  _this10.errors.tax_number = _this10.taxNumberErrorMessage;
                  if (!hasErrors) _this10.currentStep = 2;
                  hasErrors = true;
                }
              }
              if (!_this10.form.email_address) {
                _this10.errors.email_address = _this10.$t('email_required');
                if (!hasErrors) _this10.currentStep = 3;
                hasErrors = true;
              }
              if (!_this10.form.phone_number) {
                _this10.errors.phone_number = _this10.$t('phone_required');
                if (!hasErrors) _this10.currentStep = 3;
                hasErrors = true;
              } else if (!_this10.phoneNumberValid) {
                _this10.errors.phone_number = _this10.$t('phone_invalid');
                if (!hasErrors) _this10.currentStep = 3;
                hasErrors = true;
              }
              if (!_this10.form.default_currency) {
                _this10.errors.default_currency = _this10.$t('currency_required');
                if (!hasErrors) _this10.currentStep = 4;
                hasErrors = true;
              }
              if (!_this10.form.system_type) {
                _this10.errors.system_type = _this10.$t('system_type_required');
                if (!hasErrors) _this10.currentStep = 5;
                hasErrors = true;
              }
              if (!hasErrors) {
                _context6.next = 10;
                break;
              }
              return _context6.abrupt("return");
            case 10:
              _this10.loading = true;
              _this10.errors = {};
              _context6.prev = 12;
              _context6.next = 15;
              return _this10.form.post('/api/tenant-initialization');
            case 15:
              toast.fire({
                type: 'success',
                title: _this10.$t('setup_completed_successfully')
              });
              _this10.initialized = true;

              // Clear any session flags that might interfere
              if (typeof sessionStorage !== 'undefined') {
                sessionStorage.removeItem('cross_domain_login_processed');
                sessionStorage.removeItem('on_initialization_page');
              }
              setTimeout(function () {
                window.location.href = '/dashboard';
              }, 1500);
              _context6.next = 24;
              break;
            case 21:
              _context6.prev = 21;
              _context6.t0 = _context6["catch"](12);
              if (_context6.t0.response && _context6.t0.response.status === 401) {
                // User is not authenticated, redirect to login
                toast.fire({
                  type: 'warning',
                  title: _this10.$t('please_login_first')
                });
                setTimeout(function () {
                  window.location.href = '/login';
                }, 1000);
              } else if (_context6.t0.response && _context6.t0.response.data.errors) {
                _this10.errors = _context6.t0.response.data.errors;
              } else {
                toast.fire({
                  type: 'error',
                  title: _this10.$t('error_occurred')
                });
              }
            case 24:
              _context6.prev = 24;
              _this10.loading = false;
              return _context6.finish(24);
            case 27:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[12, 21, 24, 27]]);
      }))();
    }
  }
});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_tenant_initializationvue_type_script_lang_js = (tenant_initializationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=7d2abc32&prod&scoped=true&lang=css
var tenant_initializationvue_type_style_index_0_id_7d2abc32_prod_scoped_true_lang_css = __webpack_require__(55819);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=7d2abc32&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tenant_initializationvue_type_style_index_0_id_7d2abc32_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_tenant_initializationvue_type_style_index_0_id_7d2abc32_prod_scoped_true_lang_css = (tenant_initializationvue_type_style_index_0_id_7d2abc32_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=7d2abc32&prod&scoped=true&lang=css

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
  "7d2abc32",
  null
  
)

/* harmony default export */ const tenant_initialization = (component.exports);

/***/ }),

/***/ 55819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tenant-initialization[data-v-7d2abc32]{background:linear-gradient(135deg,#f5f7fa,#e4e7eb);min-height:100vh;padding:20px}.language-switcher-container[data-v-7d2abc32]{position:fixed;right:20px;top:20px;z-index:9999}.auth-wrapper[data-v-7d2abc32]{align-items:center;display:flex;min-height:100vh;padding:60px 20px}.wizard-progress[data-v-7d2abc32]{margin-bottom:30px}.progress-container[data-v-7d2abc32]{justify-content:space-between;margin:0 auto;max-width:700px}.progress-container[data-v-7d2abc32],.progress-item[data-v-7d2abc32]{align-items:center;display:flex;position:relative}.progress-item[data-v-7d2abc32]{flex:1;flex-direction:column}.step-indicator[data-v-7d2abc32]{align-items:center;background:#e9ecef;border:2px solid #e9ecef;border-radius:50%;display:flex;font-size:16px;font-weight:600;height:45px;justify-content:center;margin-bottom:10px;position:relative;transition:all .3s ease;width:45px}.progress-item.active .step-indicator[data-v-7d2abc32]{background:#33a0d9;border-color:#33a0d9;color:#fff;transform:scale(1.1)}.progress-item.completed .step-indicator[data-v-7d2abc32]{background:#28a745;border-color:#28a745;color:#fff}.step-number[data-v-7d2abc32]{font-size:16px;font-weight:600;transition:opacity .3s ease}.step-check[data-v-7d2abc32]{align-items:center;animation:scaleIn-7d2abc32 .3s ease;color:#fff;display:flex;font-size:14px;justify-content:center}@keyframes scaleIn-7d2abc32{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.step-title[data-v-7d2abc32]{color:#6c757d;font-size:12px;font-weight:500;text-align:center}.progress-item.active .step-title[data-v-7d2abc32]{color:#33a0d9;font-weight:600}.system-type-card[data-v-7d2abc32]{background:#fff;border:2px solid #e9ecef;border-radius:15px;box-shadow:0 2px 4px rgba(0,0,0,.05);cursor:pointer;height:100%;padding:25px 15px;text-align:center;transition:all .3s}.system-type-card[data-v-7d2abc32]:hover{border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.1);transform:translateY(-5px)}.system-type-card.active[data-v-7d2abc32]{background:#f8fbff;border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.15);transform:translateY(-5px)}.card-icon[data-v-7d2abc32]{color:#33a0d9;font-size:48px;margin-bottom:15px}.system-type-card h6[data-v-7d2abc32]{color:#333;font-weight:600;margin-bottom:8px}.system-type-card p[data-v-7d2abc32]{color:#6c757d;font-size:13px;margin:0}.wizard-step[data-v-7d2abc32]{animation:fadeIn-7d2abc32 .3s}@keyframes fadeIn-7d2abc32{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.lg-logo[data-v-7d2abc32]{transition:all .3s ease}.lg-logo[data-v-7d2abc32]:hover{opacity:.9}.text-primary[data-v-7d2abc32]{color:#33a0d9!important}.btn-primary[data-v-7d2abc32]{background-color:#33a0d9;border-color:#33a0d9}.btn-primary[data-v-7d2abc32]:hover{background-color:#2b8bc4;border-color:#2b8bc4}@media (max-width:768px){.language-switcher-container[data-v-7d2abc32]{right:10px;top:10px}.auth-wrapper[data-v-7d2abc32]{padding:40px 15px}.step-indicator[data-v-7d2abc32]{height:35px;width:35px}.step-check[data-v-7d2abc32],.step-number[data-v-7d2abc32]{font-size:12px}.step-title[data-v-7d2abc32]{font-size:10px}.progress-container[data-v-7d2abc32]{gap:5px;max-width:100%}.card-icon[data-v-7d2abc32]{font-size:36px}.system-type-card[data-v-7d2abc32]{padding:20px 12px}}.tenant-initialization .language-switcher-container[data-v-7d2abc32]{left:auto;right:20px}@media (max-width:768px){.tenant-initialization .language-switcher-container[data-v-7d2abc32]{left:auto;right:10px}}.logo-upload-container[data-v-7d2abc32]{align-items:center;display:flex;flex-direction:column}.logo-preview[data-v-7d2abc32]{text-align:center}.logo-preview-image[data-v-7d2abc32]{box-shadow:0 2px 8px rgba(0,0,0,.1);max-height:200px;max-width:200px}.file-upload-area[data-v-7d2abc32]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:15px;overflow:hidden;padding:40px 20px;position:relative;text-align:center;transition:all .3s ease}.file-upload-area[data-v-7d2abc32]:hover{background:#f0f7ff;border-color:#33a0d9}.file-upload-area.has-logo[data-v-7d2abc32]{background:#f0fff4;border-color:#28a745;padding:20px}.file-upload-label[data-v-7d2abc32]{align-items:center;cursor:pointer;display:flex;flex-direction:column;gap:15px;justify-content:center;padding:10px;transition:all .3s ease}.file-upload-label[data-v-7d2abc32]:hover{transform:translateY(-2px)}.upload-icon-wrapper[data-v-7d2abc32]{align-items:center;background:linear-gradient(135deg,#33a0d9,#2b8bc4);border-radius:50%;box-shadow:0 4px 15px rgba(51,160,217,.3);color:#fff;display:flex;font-size:24px;height:60px;justify-content:center;transition:all .3s ease;width:60px}.file-upload-label:hover .upload-icon-wrapper[data-v-7d2abc32]{box-shadow:0 6px 20px rgba(51,160,217,.4);transform:scale(1.1)}.upload-text[data-v-7d2abc32]{display:flex;flex-direction:column;gap:5px}.upload-title[data-v-7d2abc32]{color:#333;font-size:16px;font-weight:600}.upload-subtitle[data-v-7d2abc32]{color:#6c757d;font-size:13px}.upload-info[data-v-7d2abc32]{border-top:1px solid #e9ecef;margin-top:15px;padding-top:15px}.upload-info small[data-v-7d2abc32]{align-items:center;display:inline-flex;font-size:12px}.file-upload-area.has-logo .upload-icon-wrapper[data-v-7d2abc32]{background:linear-gradient(135deg,#28a745,#218838);box-shadow:0 4px 15px rgba(40,167,69,.3)}.file-upload-area.has-logo .upload-title[data-v-7d2abc32]{color:#28a745}@media (max-width:768px){.file-upload-area[data-v-7d2abc32]{padding:30px 15px}.upload-icon-wrapper[data-v-7d2abc32]{font-size:20px;height:50px;width:50px}.upload-title[data-v-7d2abc32]{font-size:14px}.upload-subtitle[data-v-7d2abc32]{font-size:12px}}.logo-preview-wrapper[data-v-7d2abc32]{border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);display:inline-block;overflow:hidden;position:relative}.logo-preview-wrapper:hover .logo-preview-overlay[data-v-7d2abc32]{opacity:1}.logo-preview-overlay[data-v-7d2abc32]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .3s ease}.logo-preview-image[data-v-7d2abc32]{background:#f8f9fa;border-radius:10px;display:block;height:300px;-o-object-fit:contain;object-fit:contain;width:300px}.logo-crop-wrapper[data-v-7d2abc32]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:15px;padding:20px}.crop-container-inline[data-v-7d2abc32]{background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);margin:0 auto;max-height:400px;max-width:600px;overflow:hidden;width:100%}.crop-image-inline[data-v-7d2abc32]{display:block;max-width:100%}.crop-actions[data-v-7d2abc32]{display:flex;gap:10px;justify-content:center}.crop-actions .btn[data-v-7d2abc32]{min-width:120px}.crop-container-inline .cropper-container[data-v-7d2abc32]{max-height:400px}.crop-container-inline .cropper-view-box[data-v-7d2abc32]{outline:2px solid #33a0d9;outline-offset:-2px}@media (max-width:768px){.logo-crop-wrapper[data-v-7d2abc32]{padding:15px}.crop-container-inline[data-v-7d2abc32]{max-height:300px}.crop-actions[data-v-7d2abc32]{flex-direction:column}.crop-actions .btn[data-v-7d2abc32]{width:100%}.logo-preview-image[data-v-7d2abc32]{height:200px;width:200px}}.country-select[data-v-7d2abc32]{width:100%}.country-select+.select2-container[data-v-7d2abc32]{width:100%!important}.country-select+.select2-container .select2-selection--single[data-v-7d2abc32],.country-select+.select2-container--default .select2-selection--single[data-v-7d2abc32]{background-color:#fff;border:0;border-radius:50px;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);height:auto!important;min-height:3rem;padding:.5rem 1rem}.country-select+.select2-container .select2-selection[data-v-7d2abc32]{height:auto!important}.country-select+.select2-container .select2-selection--single .select2-selection__rendered[data-v-7d2abc32]{align-items:center;color:#333;display:flex;line-height:2rem;padding:0}.country-select+.select2-container .select2-selection--single .select2-selection__arrow[data-v-7d2abc32]{height:auto!important;right:1rem;top:50%;transform:translateY(-50%)}.country-select.is-invalid+.select2-container .select2-selection--single[data-v-7d2abc32]{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.country-select+.select2-container .select2-dropdown[data-v-7d2abc32]{border:1px solid #e9ecef;border-radius:15px;box-shadow:0 .5rem 1rem rgba(0,0,0,.15);margin-top:.5rem}.country-select+.select2-container .select2-results__option[data-v-7d2abc32]{align-items:center;cursor:pointer;display:flex;padding:.75rem 1rem;transition:background-color .2s ease}.country-select+.select2-container .select2-results__option[data-v-7d2abc32]:hover{background-color:#f8f9fa}.country-select+.select2-container .select2-results__option--highlighted[data-v-7d2abc32]{background-color:#33a0d9;color:#fff}.country-select+.select2-container .select2-results__option img[data-v-7d2abc32]{margin-right:8px;vertical-align:middle}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 64744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_RTLService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73948);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isRTL: false,
      currentLocale: 'en'
    };
  },
  computed: {
    /**
     * Get RTL-aware CSS classes
     */
    rtlClasses: function rtlClasses() {
      return {
        'rtl': this.isRTL,
        'ltr': !this.isRTL,
        'text-right': this.isRTL,
        'text-left': !this.isRTL,
        'float-right': this.isRTL,
        'float-left': !this.isRTL
      };
    },
    /**
     * Get RTL-aware text alignment
     */
    textAlign: function textAlign() {
      return this.isRTL ? 'right' : 'left';
    },
    /**
     * Get RTL-aware float direction
     */
    floatDirection: function floatDirection() {
      return this.isRTL ? 'right' : 'left';
    }
  },
  mounted: function mounted() {
    // Initialize RTL status
    this.updateRTLStatus();

    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange);
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('rtl-changed', this.handleRTLChange);
  },
  methods: {
    /**
     * Update RTL status from service
     */
    updateRTLStatus: function updateRTLStatus() {
      this.isRTL = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getRTLStatus();
      this.currentLocale = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
    },
    /**
     * Handle RTL change events
     */
    handleRTLChange: function handleRTLChange(event) {
      this.isRTL = event.detail.isRTL;
      this.currentLocale = event.detail.locale || _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
      this.$forceUpdate(); // Force component re-render
    },
    /**
     * Set RTL mode for a specific locale
     */
    setRTLMode: function setRTLMode(locale) {
      _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.setRTLModeByLocale(locale);
    },
    /**
     * Check if current locale is RTL
     */
    isCurrentLocaleRTL: function isCurrentLocaleRTL() {
      return _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLanguageRTLStatus(this.currentLocale);
    },
    /**
     * Get RTL-aware margin/padding classes
     */
    getRTLSpacingClasses: function getRTLSpacingClasses(baseClass, size) {
      if (this.isRTL) {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-right-").concat(size), true), "".concat(baseClass, "-left-").concat(size), false);
      } else {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-left-").concat(size), true), "".concat(baseClass, "-right-").concat(size), false);
      }
    },
    /**
     * Get RTL-aware border classes
     */
    getRTLBorderClasses: function getRTLBorderClasses(baseClass, side) {
      if (this.isRTL) {
        var rtlSideMap = {
          'left': 'right',
          'right': 'left',
          'start': 'end',
          'end': 'start'
        };
        return _defineProperty({}, "".concat(baseClass, "-").concat(rtlSideMap[side] || side), true);
      } else {
        return _defineProperty({}, "".concat(baseClass, "-").concat(side), true);
      }
    }
  }
});

/***/ })

}]);