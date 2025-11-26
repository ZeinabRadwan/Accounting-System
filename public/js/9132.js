"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9132],{

/***/ 49132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ general)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/general.vue?vue&type=template&id=88b75f28&scoped=true
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
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('General Settings')) + "\n                        ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'setup.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                              " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                                " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                              ")]]], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('Add Your Company Information')) + "\n                            ")]), _vm._v(" "), _c('div', {
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
      'is-invalid': _vm.form.errors.has('name')
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
  }, [_vm._v(_vm._s(_vm.$t('Phone Number')))]), _vm._v(" "), _c('input', {
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
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('Pricing Plan')) + "\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "plan_discount"
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('Yearly Plan Discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.plan_discount,
      expression: "form.plan_discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('plan_discount')
    },
    attrs: {
      "id": "plan_discount",
      "type": "number",
      "name": "plan_discount",
      "placeholder": _vm.$t('Enter Yearly Plan Discount')
    },
    domProps: {
      "value": _vm.form.plan_discount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "plan_discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "plan_discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "trial_day_count"
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('Trial Day Count')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.trial_day_count,
      expression: "form.trial_day_count"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('trial_day_count')
    },
    attrs: {
      "id": "trial_day_count",
      "type": "number",
      "min": "0",
      "name": "trial_day_count",
      "placeholder": _vm.$t('Trial Day Count')
    },
    domProps: {
      "value": _vm.form.trial_day_count
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "trial_day_count", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "trial_day_count"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card inner-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('Default Element')) + "\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "language"
    }
  }, [_vm._v(_vm._s(_vm.$t('Default Language')) + "\n                                            "), _c('span', {
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
    }, [_vm._v("\n                                            " + _vm._s(value[1]) + "\n                                        ")]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "language"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "currency"
    }
  }, [_vm._v(_vm._s(_vm.$t("Default Currency")) + "\n                                            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('currency'),
      'text-uppercase': true
    },
    attrs: {
      "options": _vm.items,
      "label": "label",
      "disabled": _vm.appInfo.hasDataInCentralPaymentTable,
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "facebook_link"
    }
  }, [_vm._v(_vm._s(_vm.$t('Facebook Link')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.facebook_link,
      expression: "form.facebook_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('facebook_link')
    },
    attrs: {
      "id": "facebook_link",
      "type": "url",
      "name": "facebook_link",
      "placeholder": "$t('Facebook Link')"
    },
    domProps: {
      "value": _vm.form.facebook_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "facebook_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "facebook_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "instagram_link"
    }
  }, [_vm._v(_vm._s(_vm.$t('Instagram Link')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.instagram_link,
      expression: "form.instagram_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('instagram_link')
    },
    attrs: {
      "id": "instagram_link",
      "type": "url",
      "name": "instagram_link",
      "placeholder": "$t('Instagram Link')"
    },
    domProps: {
      "value": _vm.form.instagram_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "instagram_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "instagram_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "twitter_link"
    }
  }, [_vm._v(_vm._s(_vm.$t('Twitter Link')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.twitter_link,
      expression: "form.twitter_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('twitter_link')
    },
    attrs: {
      "id": "twitter_link",
      "type": "url",
      "name": "twitter_link",
      "placeholder": "$t('Twitter Link')"
    },
    domProps: {
      "value": _vm.form.twitter_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "twitter_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "twitter_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "linkedin_link"
    }
  }, [_vm._v(_vm._s(_vm.$t('LinkedIn Link')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.linkedin_link,
      expression: "form.linkedin_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('linkedin_link')
    },
    attrs: {
      "id": "linkedin_link",
      "type": "url",
      "name": "linkedin_link",
      "placeholder": "$t('LinkedIn Link')"
    },
    domProps: {
      "value": _vm.form.linkedin_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "linkedin_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "linkedin_link"
    }
  })], 1)]), _vm._v(" "), _c('div', {
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
  }) : _vm._e()])], 1)])])])]), _vm._v(" "), _c('div', {
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
// EXTERNAL MODULE: ./resources/js/components/central/SettingsSidebar.vue + 3 modules
var SettingsSidebar = __webpack_require__(49741);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/general.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const generalvue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('General Settings')
    };
  },
  components: {
    SettingsSidebar: SettingsSidebar/* default */.A
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
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
        language: 'en',
        copyrightText: '',
        logo: '',
        blackLogo: '',
        currency: "",
        smallLogo: '',
        favicon: '',
        facebook_link: '',
        instagram_link: '',
        twitter_link: '',
        linkedin_link: '',
        trial_day_count: 14,
        plan_discount: ''
      }),
      logo: '',
      blackLogo: '',
      smallLogo: '',
      favicon: ''
    };
  },
  computed: (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo',
    items: 'operations/items',
    locales: 'lang/locales'
  }),
  created: function created() {
    this.assignValues();
    this.getCurrencies();
  },
  methods: {
    // get currencies
    getCurrencies: function getCurrencies() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch("operations/allData", {
                path: "/api/all-currencies"
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // assign values
    assignValues: function assignValues() {
      if (this.appInfo) {
        this.form.companyName = this.appInfo.companyName;
        this.form.companyTagline = this.appInfo.companyTagline;
        this.form.emailAddress = this.appInfo.email;
        this.form.phoneNumber = this.appInfo.phone;
        this.form.address = this.appInfo.address;
        this.form.currency = this.appInfo.currency;
        this.form.language = this.appInfo.language;
        this.logo = this.appInfo.logo;
        this.blackLogo = this.appInfo.blackLogo;
        this.smallLogo = this.appInfo.smallLogo;
        this.favicon = this.appInfo.favicon;
        this.form.copyrightText = this.appInfo.copyright;
        this.form.facebook_link = this.appInfo.facebook_link;
        this.form.instagram_link = this.appInfo.instagram_link;
        this.form.twitter_link = this.appInfo.twitter_link;
        this.form.linkedin_link = this.appInfo.linkedin_link;
        this.form.trial_day_count = this.appInfo.trial_day_count;
        this.form.plan_discount = this.appInfo.plan_discount > 0 ? this.appInfo.plan_discount : '';
      }
    },
    // vue logo upload
    onLogoChange: function onLogoChange(e) {
      var _this2 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this2.form.logo = reader.result;
        };
        reader.readAsDataURL(file);
        this.logo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue black logo upload
    onBlackLogoChange: function onBlackLogoChange(e) {
      var _this3 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this3.form.blackLogo = reader.result;
        };
        reader.readAsDataURL(file);
        this.blackLogo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue small logo upload
    onSmallLogoChange: function onSmallLogoChange(e) {
      var _this4 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this4.form.smallLogo = reader.result;
        };
        reader.readAsDataURL(file);
        this.smallLogo = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // vue favicon upload
    onFaviconChange: function onFaviconChange(e) {
      var _this5 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === "image/svg" || file.type === "image/svg+xml")) {
        reader.onloadend = function () {
          _this5.form.favicon = reader.result;
        };
        reader.readAsDataURL(file);
        this.favicon = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    },
    // update settings
    updateSettings: function updateSettings() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var locale;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this6.isDemoMode) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, toast.fire({
                type: 'warning',
                title: _this6.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              // update locale
              locale = _this6.form.language;
              if (_this6.$i18n.locale !== locale) {
                (0,i18n.loadMessages)(locale);
                _this6.$store.dispatch('lang/setLocale', {
                  locale: locale
                });
              }
              _context2.n = 2;
              return _this6.form.post(window.location.origin + '/api/update-settings').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this6.$t('Settings updated successfully')
                });
                window.location.reload();
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this6.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/central/setup/general.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_generalvue_type_script_lang_js = (generalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/general.vue?vue&type=style&index=0&id=88b75f28&prod&lang=scss&scoped=true
var generalvue_type_style_index_0_id_88b75f28_prod_lang_scss_scoped_true = __webpack_require__(58228);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/general.vue?vue&type=style&index=0&id=88b75f28&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(generalvue_type_style_index_0_id_88b75f28_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const setup_generalvue_type_style_index_0_id_88b75f28_prod_lang_scss_scoped_true = (generalvue_type_style_index_0_id_88b75f28_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/central/setup/general.vue?vue&type=style&index=0&id=88b75f28&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/setup/general.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_generalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "88b75f28",
  null
  
)

/* harmony default export */ const general = (component.exports);

/***/ }),

/***/ 49741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SettingsSidebar)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=template&id=96b9adb8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card settings-card no-print"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v(_vm._s(_vm.$t("Settings")))]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('ul', {
    staticClass: "nav flex-column nav-pills m-1"
  }, [_vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.general'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-cog"
  }), _vm._v("\n          " + _vm._s(_vm.$t('General Settings')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.mailConfiguration'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Mail Configurations')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.smsConfiguration'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sms"
  }), _vm._v("\n          " + _vm._s(_vm.$t('SMS Configurations')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'setup.centralCurrency.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Currency Settings")) + "\n        ")])], 1), _vm._v(" "), _vm.$can('payment-settings') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'advanced-settings'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-wallet"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Payment Settings')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('user-role') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  }), _vm._v("\n          " + _vm._s(_vm.$t('Role & Permissions')) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('user-management') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link thumb",
    attrs: {
      "to": {
        name: 'user.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-user-cog"
  }), _vm._v("\n          " + _vm._s(_vm.$t('User Management')) + "\n        ")])], 1) : _vm._e()])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const SettingsSidebarvue_type_script_lang_js = ({
  name: "SettingsSidebar",
  data: function data() {
    return {
      developer: ""
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("auth", ["user"])),
  created: function created() {
    this.developer = this.user.roles.includes("developer");
  },
  methods: {}
});
;// ./resources/js/components/central/SettingsSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ const central_SettingsSidebarvue_type_script_lang_js = (SettingsSidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/central/SettingsSidebar.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  central_SettingsSidebarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const SettingsSidebar = (component.exports);

/***/ }),

/***/ 58228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inner-card[data-v-88b75f28]{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)}.inner-card .card-header[data-v-88b75f28]{background-color:rgba(0,0,0,.03)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);