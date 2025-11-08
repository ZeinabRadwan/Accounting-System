"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8924],{

/***/ 46543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tenant_initialization)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=template&id=6893002e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tenant-initialization"
  }, [_c('div', {
    staticClass: "language-switcher-container"
  }, [_c('LocaleDropdown')], 1), _vm._v(" "), !_vm.initialized ? _c('div', {
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
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.country
    },
    attrs: {
      "required": ""
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
  }, [_vm._v(_vm._s(_vm.$t('select_country')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "US"
    }
  }, [_vm._v(_vm._s(_vm.$t('United States')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GB"
    }
  }, [_vm._v(_vm._s(_vm.$t('United Kingdom')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CA"
    }
  }, [_vm._v(_vm._s(_vm.$t('Canada')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AU"
    }
  }, [_vm._v(_vm._s(_vm.$t('Australia')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DE"
    }
  }, [_vm._v(_vm._s(_vm.$t('Germany')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FR"
    }
  }, [_vm._v(_vm._s(_vm.$t('France')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ES"
    }
  }, [_vm._v(_vm._s(_vm.$t('Spain')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IT"
    }
  }, [_vm._v(_vm._s(_vm.$t('Italy')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NL"
    }
  }, [_vm._v(_vm._s(_vm.$t('Netherlands')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BE"
    }
  }, [_vm._v(_vm._s(_vm.$t('Belgium')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CH"
    }
  }, [_vm._v(_vm._s(_vm.$t('Switzerland')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AT"
    }
  }, [_vm._v(_vm._s(_vm.$t('Austria')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SE"
    }
  }, [_vm._v(_vm._s(_vm.$t('Sweden')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NO"
    }
  }, [_vm._v(_vm._s(_vm.$t('Norway')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DK"
    }
  }, [_vm._v(_vm._s(_vm.$t('Denmark')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FI"
    }
  }, [_vm._v(_vm._s(_vm.$t('Finland')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PL"
    }
  }, [_vm._v(_vm._s(_vm.$t('Poland')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IE"
    }
  }, [_vm._v(_vm._s(_vm.$t('Ireland')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PT"
    }
  }, [_vm._v(_vm._s(_vm.$t('Portugal')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GR"
    }
  }, [_vm._v(_vm._s(_vm.$t('Greece')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LU"
    }
  }, [_vm._v(_vm._s(_vm.$t('Luxembourg')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EG"
    }
  }, [_vm._v(_vm._s(_vm.$t('Egypt')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SA"
    }
  }, [_vm._v(_vm._s(_vm.$t('Saudi Arabia')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AE"
    }
  }, [_vm._v(_vm._s(_vm.$t('United Arab Emirates')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JO"
    }
  }, [_vm._v(_vm._s(_vm.$t('Jordan')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LB"
    }
  }, [_vm._v(_vm._s(_vm.$t('Lebanon')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MA"
    }
  }, [_vm._v(_vm._s(_vm.$t('Morocco')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TN"
    }
  }, [_vm._v(_vm._s(_vm.$t('Tunisia')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DZ"
    }
  }, [_vm._v(_vm._s(_vm.$t('Algeria')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KW"
    }
  }, [_vm._v(_vm._s(_vm.$t('Kuwait')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "QA"
    }
  }, [_vm._v(_vm._s(_vm.$t('Qatar')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BH"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bahrain')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OM"
    }
  }, [_vm._v(_vm._s(_vm.$t('Oman')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "YE"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yemen')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IQ"
    }
  }, [_vm._v(_vm._s(_vm.$t('Iraq')))])]), _vm._v(" "), _vm.errors.country ? _c('div', {
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
  }, [_vm.logoPreview ? _c('div', {
    staticClass: "logo-preview mb-3"
  }, [_c('img', {
    staticClass: "logo-preview-image",
    attrs: {
      "src": _vm.logoPreview,
      "alt": "Company Logo"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger mt-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.removeLogo
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  }), _vm._v(" " + _vm._s(_vm.$t('Remove')) + "\n                        ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "file-upload-wrapper"
  }, [_c('input', {
    ref: "logoInput",
    staticClass: "d-none",
    attrs: {
      "type": "file",
      "accept": "image/jpeg,image/png,image/gif,image/svg+xml",
      "id": "company-logo-upload"
    },
    on: {
      "change": _vm.onLogoChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "btn btn-outline-primary btn-lg rounded-pill px-4 cursor-pointer",
    attrs: {
      "for": "company-logo-upload"
    }
  }, [_c('i', {
    staticClass: "fas fa-upload mr-2"
  }), _vm._v("\n                          " + _vm._s(_vm.logoPreview ? _vm.$t('Change Logo') : _vm.$t('Upload Logo')) + "\n                        ")]), _vm._v(" "), _c('small', {
    staticClass: "d-block text-muted mt-2"
  }, [_vm._v(_vm._s(_vm.$t('Maximum file size: 2MB. Supported formats: JPG, PNG, GIF, SVG')))])])]), _vm._v(" "), _vm.errors.company_logo ? _c('div', {
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
      'is-invalid': _vm.errors.tax_number
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('enter_tax_number')
    },
    domProps: {
      "value": _vm.form.tax_number
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "tax_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.tax_number ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.tax_number))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.currentStep === 3 ? _c('div', {
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
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('phone_number')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_number,
      expression: "form.phone_number"
    }],
    staticClass: "form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary",
    "class": {
      'is-invalid': _vm.errors.phone_number
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('enter_phone_number'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.phone_number
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.phone_number ? _c('div', {
    staticClass: "invalid-feedback d-block mt-2"
  }, [_vm._v(_vm._s(_vm.errors.phone_number))]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }, [_vm._m(0), _vm._v(" "), _c('h6', {
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
  }, [_vm._m(1), _vm._v(" "), _c('h6', {
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
  }, [_vm._m(2), _vm._v(" "), _c('h6', {
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
    staticClass: "fas fa-arrow-right mr-2"
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
    staticClass: "spinner-border spinner-border-sm mr-2"
  }) : [_c('i', {
    staticClass: "fas mr-2",
    "class": _vm.currentStep === _vm.totalSteps ? 'fa-check' : 'fa-arrow-left'
  }), _vm._v("\n                    " + _vm._s(_vm.currentStep === _vm.totalSteps ? _vm.$t('complete_setup') : _vm.$t('next')) + "\n                  ")]], 2)])])])])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
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

;// ./resources/js/pages/tenant-initialization.vue?vue&type=template&id=6893002e&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/LocaleDropdown.vue + 11 modules
var LocaleDropdown = __webpack_require__(72679);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const tenant_initializationvue_type_script_lang_js = ({
  name: 'TenantInitialization',
  layout: 'basic',
  middleware: ['auth'],
  components: {
    LocaleDropdown: LocaleDropdown/* default */.A
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
      errors: {}
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
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!_this._mounted) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _this._mounted = true;

            // Mark that we're on initialization page
            if (typeof sessionStorage !== 'undefined') {
              sessionStorage.setItem('on_initialization_page', 'true');
            }
            _context.n = 2;
            return _this.fetchAppInfo();
          case 2:
            _context.n = 3;
            return _this.fetchCurrencies();
          case 3:
            _context.n = 4;
            return _this.fetchTenantCompanyName();
          case 4:
            _context.n = 5;
            return _this.checkInitializationStatus();
          case 5:
            _this.interceptLocaleChanges();
          case 6:
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

    // Clean up the event listener
    if (this.localeClickListener) {
      document.removeEventListener('click', this.localeClickListener);
    }
  },
  methods: {
    fetchTenantCompanyName: function fetchTenantCompanyName() {
      var _this2 = this;
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
                  _this2.form.company_name = response.data.data.company;
                }
                // Pre-populate email address
                if (response.data.data.email) {
                  _this2.form.email_address = response.data.data.email;
                }
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error fetching tenant data:', _t);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    onLogoChange: function onLogoChange(e) {
      var _this3 = this;
      var file = e.target.files[0];
      if (!file) return;

      // Validate file type
      var validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
      if (!validTypes.includes(file.type)) {
        toast.fire({
          type: 'error',
          title: this.$t('Invalid file type'),
          text: this.$t('Please select a valid image file (JPG, PNG, GIF, or SVG)')
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
      var reader = new FileReader();
      reader.onloadend = function () {
        _this3.form.company_logo = reader.result;
        _this3.logoPreview = URL.createObjectURL(file);
      };
      reader.readAsDataURL(file);
    },
    removeLogo: function removeLogo() {
      this.form.company_logo = '';
      this.logoPreview = null;
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = '';
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
    },
    fetchCurrencies: function fetchCurrencies() {
      var _this4 = this;
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
                _this4.currencies = response.data.data;
              } else if (response.data) {
                _this4.currencies = response.data;
              }
              console.log('Currencies loaded:', _this4.currencies);

              // Auto-set SAR currency for Saudi Arabia
              if (_this4.form.country === 'SA' && _this4.currencies.length > 0) {
                sarCurrency = _this4.currencies.find(function (c) {
                  return c.code === 'SAR';
                });
                if (sarCurrency) {
                  _this4.form.default_currency = sarCurrency.id;
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
    interceptLocaleChanges: function interceptLocaleChanges() {
      var _this5 = this;
      // Intercept locale changes to prevent page refresh in wizard
      this.localeClickListener = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
          var dropdownItem, localeText, locales, newLocale, _i, _Object$entries, _Object$entries$_i, key;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                dropdownItem = e.target.closest('.dropdown-item');
                if (!(dropdownItem && e.target.closest('.language-switcher-container'))) {
                  _context4.n = 5;
                  break;
                }
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                // Get locale from the locale text
                localeText = dropdownItem.textContent.trim();
                locales = _this5.$store.getters['lang/locales']; // Find the locale key
                newLocale = null;
                _i = 0, _Object$entries = Object.entries(locales);
              case 1:
                if (!(_i < _Object$entries.length)) {
                  _context4.n = 3;
                  break;
                }
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1), key = _Object$entries$_i[0];
                if (!(_this5.$t("languages.".concat(key)) === localeText)) {
                  _context4.n = 2;
                  break;
                }
                newLocale = key;
                return _context4.a(3, 3);
              case 2:
                _i++;
                _context4.n = 1;
                break;
              case 3:
                if (!(newLocale && _this5.$i18n.locale !== newLocale)) {
                  _context4.n = 4;
                  break;
                }
                _context4.n = 4;
                return _this5.changeLocaleWithoutRefresh(newLocale);
              case 4:
                // Close the dropdown
                _this5.closeLanguageDropdown();
              case 5:
                return _context4.a(2);
            }
          }, _callee4);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      // Add listener with high priority
      document.addEventListener('click', this.localeClickListener, true);
    },
    closeLanguageDropdown: function closeLanguageDropdown() {
      // Close Bootstrap dropdown programmatically
      this.$nextTick(function () {
        var dropdownToggle = document.querySelector('.language-switcher-container .dropdown-toggle');
        var dropdownMenu = document.querySelector('.language-switcher-container .dropdown-menu');
        if (dropdownToggle && dropdownMenu) {
          // Remove 'show' class from both toggle and menu
          dropdownToggle.classList.remove('show');
          dropdownMenu.classList.remove('show');

          // Remove 'show' attribute if present
          dropdownToggle.removeAttribute('aria-expanded');
          dropdownToggle.setAttribute('aria-expanded', 'false');
        }
      });
    },
    changeLocaleWithoutRefresh: function changeLocaleWithoutRefresh(locale) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$import, loadMessages, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 37225));
            case 1:
              _yield$import = _context5.v;
              loadMessages = _yield$import.loadMessages;
              _context5.n = 2;
              return loadMessages(locale);
            case 2:
              _context5.n = 3;
              return _this6.$store.dispatch('lang/setLocale', {
                locale: locale
              });
            case 3:
              _this6.$i18n.locale = locale;
              if (locale === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
              } else {
                document.documentElement.setAttribute('dir', 'ltr');
              }

              // Force re-render to update all translations including step titles
              _this6.$forceUpdate();

              // Force nextTick to ensure computed properties are updated
              _context5.n = 4;
              return _this6.$nextTick();
            case 4:
              _this6.$forceUpdate();
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t3 = _context5.v;
              console.error('Error changing locale:', _t3);
            case 6:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 5]]);
      }))();
    },
    fetchAppInfo: function fetchAppInfo() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, settings, _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get('/api/general-settings', {
                timeout: 5000
              });
            case 1:
              response = _context6.v;
              if (response.data) {
                settings = response.data;
                _this7.appInfo = {
                  blackLogo: settings.black_logo || '/images/black_logo.png',
                  companyName: settings.company_name || 'Arqam'
                };
              }
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t4 = _context6.v;
              console.error('Error fetching app info:', _t4);
              // Use default values - don't let this block the page
              _this7.appInfo = {
                blackLogo: '/images/black_logo.png',
                companyName: 'Arqam'
              };
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    checkInitializationStatus: function checkInitializationStatus() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!_this8.statusChecked) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this8.statusChecked = true;
              _context7.p = 2;
              _context7.n = 3;
              return axios_default().get('/api/tenant-initialization/check', {
                timeout: 5000
              });
            case 3:
              response = _context7.v;
              if (!(response.data && response.data.data && response.data.data.is_initialized)) {
                _context7.n = 4;
                break;
              }
              _this8.initialized = true;
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
              return _context7.a(2);
            case 4:
              // If not initialized, show the form (default state)
              // Reset flag so it can be checked again if needed
              _this8.statusChecked = false;
              _context7.n = 6;
              break;
            case 5:
              _context7.p = 5;
              _t5 = _context7.v;
              console.error('Error checking initialization status:', _t5);
              // If there's an error, assume not initialized and show the form
              // Reset flag to allow retry
              _this8.statusChecked = false;
            case 6:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 5]]);
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var hasErrors, _t6;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              // Final validation
              hasErrors = false;
              if (!_this9.form.country) {
                _this9.errors.country = _this9.$t('country_required');
                _this9.currentStep = 1;
                hasErrors = true;
              }
              if (!_this9.form.company_name) {
                _this9.errors.company_name = _this9.$t('company_name_required');
                if (!hasErrors) _this9.currentStep = 2;
                hasErrors = true;
              }
              if (!_this9.form.email_address) {
                _this9.errors.email_address = _this9.$t('email_required');
                if (!hasErrors) _this9.currentStep = 3;
                hasErrors = true;
              }
              if (!_this9.form.phone_number) {
                _this9.errors.phone_number = _this9.$t('phone_required');
                if (!hasErrors) _this9.currentStep = 3;
                hasErrors = true;
              }
              if (!_this9.form.default_currency) {
                _this9.errors.default_currency = _this9.$t('currency_required');
                if (!hasErrors) _this9.currentStep = 4;
                hasErrors = true;
              }
              if (!_this9.form.system_type) {
                _this9.errors.system_type = _this9.$t('system_type_required');
                if (!hasErrors) _this9.currentStep = 5;
                hasErrors = true;
              }
              if (!hasErrors) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _this9.loading = true;
              _this9.errors = {};
              _context8.p = 2;
              _context8.n = 3;
              return _this9.form.post('/api/tenant-initialization');
            case 3:
              toast.fire({
                type: 'success',
                title: _this9.$t('setup_completed_successfully')
              });
              _this9.initialized = true;

              // Clear any session flags that might interfere
              if (typeof sessionStorage !== 'undefined') {
                sessionStorage.removeItem('cross_domain_login_processed');
                sessionStorage.removeItem('on_initialization_page');
              }
              setTimeout(function () {
                window.location.href = '/dashboard';
              }, 1500);
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t6 = _context8.v;
              if (_t6.response && _t6.response.status === 401) {
                // User is not authenticated, redirect to login
                toast.fire({
                  type: 'warning',
                  title: _this9.$t('please_login_first')
                });
                setTimeout(function () {
                  window.location.href = '/login';
                }, 1000);
              } else if (_t6.response && _t6.response.data.errors) {
                _this9.errors = _t6.response.data.errors;
              } else {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('error_occurred')
                });
              }
            case 5:
              _context8.p = 5;
              _this9.loading = false;
              return _context8.f(5);
            case 6:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_tenant_initializationvue_type_script_lang_js = (tenant_initializationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=6893002e&prod&scoped=true&lang=css
var tenant_initializationvue_type_style_index_0_id_6893002e_prod_scoped_true_lang_css = __webpack_require__(50530);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=6893002e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tenant_initializationvue_type_style_index_0_id_6893002e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const pages_tenant_initializationvue_type_style_index_0_id_6893002e_prod_scoped_true_lang_css = (tenant_initializationvue_type_style_index_0_id_6893002e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/tenant-initialization.vue?vue&type=style&index=0&id=6893002e&prod&scoped=true&lang=css

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
  "6893002e",
  null
  
)

/* harmony default export */ const tenant_initialization = (component.exports);

/***/ }),

/***/ 50530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tenant-initialization[data-v-6893002e]{background:linear-gradient(135deg,#f5f7fa,#e4e7eb);min-height:100vh;padding:20px}.language-switcher-container[data-v-6893002e]{position:fixed;right:20px;top:20px;z-index:9999}.auth-wrapper[data-v-6893002e]{align-items:center;display:flex;min-height:100vh;padding:60px 20px}.wizard-progress[data-v-6893002e]{margin-bottom:30px}.progress-container[data-v-6893002e]{justify-content:space-between;margin:0 auto;max-width:700px}.progress-container[data-v-6893002e],.progress-item[data-v-6893002e]{align-items:center;display:flex;position:relative}.progress-item[data-v-6893002e]{flex:1;flex-direction:column}.step-indicator[data-v-6893002e]{align-items:center;background:#e9ecef;border:2px solid #e9ecef;border-radius:50%;display:flex;font-size:16px;font-weight:600;height:45px;justify-content:center;margin-bottom:10px;position:relative;transition:all .3s ease;width:45px}.progress-item.active .step-indicator[data-v-6893002e]{background:#33a0d9;border-color:#33a0d9;color:#fff;transform:scale(1.1)}.progress-item.completed .step-indicator[data-v-6893002e]{background:#28a745;border-color:#28a745;color:#fff}.step-number[data-v-6893002e]{font-size:16px;font-weight:600;transition:opacity .3s ease}.step-check[data-v-6893002e]{align-items:center;animation:scaleIn-6893002e .3s ease;color:#fff;display:flex;font-size:14px;justify-content:center}@keyframes scaleIn-6893002e{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.step-title[data-v-6893002e]{color:#6c757d;font-size:12px;font-weight:500;text-align:center}.progress-item.active .step-title[data-v-6893002e]{color:#33a0d9;font-weight:600}.system-type-card[data-v-6893002e]{background:#fff;border:2px solid #e9ecef;border-radius:15px;box-shadow:0 2px 4px rgba(0,0,0,.05);cursor:pointer;height:100%;padding:25px 15px;text-align:center;transition:all .3s}.system-type-card[data-v-6893002e]:hover{border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.1);transform:translateY(-5px)}.system-type-card.active[data-v-6893002e]{background:#f8fbff;border-color:#33a0d9;box-shadow:0 8px 20px rgba(51,160,217,.15);transform:translateY(-5px)}.card-icon[data-v-6893002e]{color:#33a0d9;font-size:48px;margin-bottom:15px}.system-type-card h6[data-v-6893002e]{color:#333;font-weight:600;margin-bottom:8px}.system-type-card p[data-v-6893002e]{color:#6c757d;font-size:13px;margin:0}.wizard-step[data-v-6893002e]{animation:fadeIn-6893002e .3s}@keyframes fadeIn-6893002e{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.lg-logo[data-v-6893002e]{transition:all .3s ease}.lg-logo[data-v-6893002e]:hover{opacity:.9}.text-primary[data-v-6893002e]{color:#33a0d9!important}.btn-primary[data-v-6893002e]{background-color:#33a0d9;border-color:#33a0d9}.btn-primary[data-v-6893002e]:hover{background-color:#2b8bc4;border-color:#2b8bc4}@media (max-width:768px){.language-switcher-container[data-v-6893002e]{right:10px;top:10px}.auth-wrapper[data-v-6893002e]{padding:40px 15px}.step-indicator[data-v-6893002e]{height:35px;width:35px}.step-check[data-v-6893002e],.step-number[data-v-6893002e]{font-size:12px}.step-title[data-v-6893002e]{font-size:10px}.progress-container[data-v-6893002e]{gap:5px;max-width:100%}.card-icon[data-v-6893002e]{font-size:36px}.system-type-card[data-v-6893002e]{padding:20px 12px}}[dir=rtl] .language-switcher-container[data-v-6893002e]{left:20px;right:auto}[dir=rtl] .language-switcher-container.mobile[data-v-6893002e]{left:10px}.logo-upload-container[data-v-6893002e]{align-items:center;display:flex;flex-direction:column}.logo-preview[data-v-6893002e]{text-align:center}.logo-preview-image[data-v-6893002e]{border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.1);max-height:200px;max-width:200px;-o-object-fit:contain;object-fit:contain}.file-upload-wrapper[data-v-6893002e]{text-align:center;width:100%}.file-upload-wrapper label[data-v-6893002e]{cursor:pointer;display:inline-block}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);