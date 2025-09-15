"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8789],{

/***/ 15612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SupplierForm)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=template&id=ffe845bc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    "class": {
      'card-body': _vm.showCardBody
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-user-circle mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Supplier Details")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "codeNumber"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Code Number")) + "\n              "), _c('i', {
    staticClass: "fas fa-question-circle text-muted ml-1",
    attrs: {
      "title": _vm.$t('Auto-generated unique identifier for the supplier')
    }
  })]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.codeNumber,
      expression: "form.codeNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('codeNumber')
    },
    attrs: {
      "id": "codeNumber",
      "type": "text",
      "name": "codeNumber",
      "placeholder": _vm.$t('Loading...'),
      "disabled": ""
    },
    domProps: {
      "value": _vm.form.codeNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "codeNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("This code number is automatically generated and cannot be changed")) + "\n            ")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "codeNumber"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Supplier Type")))]), _vm._v(" "), _c('div', {
    staticClass: "radio-group"
  }, [_c('label', {
    staticClass: "radio-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    attrs: {
      "type": "radio",
      "value": "Individual"
    },
    domProps: {
      "checked": _vm._q(_vm.form.type, "Individual")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "type", "Individual");
      }
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Individual")) + "\n              ")]), _vm._v(" "), _c('label', {
    staticClass: "radio-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    attrs: {
      "type": "radio",
      "value": "Company"
    },
    domProps: {
      "checked": _vm._q(_vm.form.type, "Company")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "type", "Company");
      }
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Business")) + "\n              ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "type"
    }
  })], 1), _vm._v(" "), _vm.form.type === 'Individual' ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "fullName"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Full Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fullName,
      expression: "form.fullName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('fullName')
    },
    attrs: {
      "id": "fullName",
      "type": "text",
      "name": "fullName",
      "placeholder": _vm.$t('Enter full name')
    },
    domProps: {
      "value": _vm.form.fullName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "fullName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "fullName"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.type === 'Company' ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "businessName"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Business Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.businessName,
      expression: "form.businessName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('businessName')
    },
    attrs: {
      "id": "businessName",
      "type": "text",
      "name": "businessName",
      "placeholder": _vm.$t('Enter business name')
    },
    domProps: {
      "value": _vm.form.businessName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "businessName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "businessName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "firstName"
    }
  }, [_vm._v(_vm._s(_vm.$t("First Name")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.firstName,
      expression: "form.firstName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('firstName')
    },
    attrs: {
      "id": "firstName",
      "type": "text",
      "name": "firstName",
      "placeholder": _vm.$t('Enter first name')
    },
    domProps: {
      "value": _vm.form.firstName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "firstName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "firstName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "lastName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Last Name")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.lastName,
      expression: "form.lastName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('lastName')
    },
    attrs: {
      "id": "lastName",
      "type": "text",
      "name": "lastName",
      "placeholder": _vm.$t('Enter last name')
    },
    domProps: {
      "value": _vm.form.lastName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "lastName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "lastName"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "phone"
    }
  }, [_vm._v(_vm._s(_vm.$t("Telephone")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone,
      expression: "form.phone"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('phone')
    },
    attrs: {
      "id": "phone",
      "type": "text",
      "name": "phone",
      "placeholder": _vm.$t('Enter telephone number')
    },
    domProps: {
      "value": _vm.form.phone
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "phone"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    staticClass: "required-field",
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Mobile")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phoneNumber,
      expression: "form.phoneNumber"
    }],
    staticClass: "form-control required-input",
    "class": {
      'is-invalid': _vm.form.errors.has('phoneNumber')
    },
    attrs: {
      "id": "phoneNumber",
      "type": "tel",
      "name": "phoneNumber",
      "placeholder": _vm.$t('Enter mobile number (required)')
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
      "field": "phoneNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('email')
    },
    attrs: {
      "id": "email",
      "type": "email",
      "name": "email",
      "placeholder": _vm.$t('Enter your email address')
    },
    domProps: {
      "value": _vm.form.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "email"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cog mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Account Details")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "displayLanguage"
    }
  }, [_vm._v(_vm._s(_vm.$t("Display Language")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.displayLanguage,
      expression: "form.displayLanguage"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('displayLanguage')
    },
    attrs: {
      "id": "displayLanguage"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "displayLanguage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Language")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "en"
    }
  }, [_vm._v(_vm._s(_vm.$t("English")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ar"
    }
  }, [_vm._v(_vm._s(_vm.$t("Arabic")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "displayLanguage"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Profile Image")))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image",
      "accept": "image/*"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_c('i', {
    staticClass: "fas fa-image mr-2"
  }), _vm._v("\n                " + _vm._s(_vm.$t("Choose file")) + "\n              ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "100px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Profile Image')
    }
  })]) : _vm._e()], 1)])])])]), _vm._v(" "), _vm.form.type === 'Company' ? _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-users mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Supplier Representative Info")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('RepresentativesList', {
    attrs: {
      "representatives": _vm.form.representatives || []
    },
    on: {
      "representatives-changed": _vm.handleRepresentativesChanged
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-map-marker-alt mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Address Information")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "country"
    }
  }, [_vm._v(_vm._s(_vm.$t("Country")))]), _vm._v(" "), _c('select', {
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
      "id": "country"
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
  }, [_vm._v(_vm._s(_vm.$t("Select Country")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SA"
    }
  }, [_vm._v(_vm._s(_vm.$t("Saudi Arabia (SA)")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EG"
    }
  }, [_vm._v(_vm._s(_vm.$t("Egypt (EG)")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "US"
    }
  }, [_vm._v(_vm._s(_vm.$t("United States (US)")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GB"
    }
  }, [_vm._v(_vm._s(_vm.$t("United Kingdom (GB)")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "country"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "state"
    }
  }, [_vm._v(_vm._s(_vm.$t("State")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.state,
      expression: "form.state"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('state')
    },
    attrs: {
      "id": "state",
      "type": "text",
      "name": "state",
      "placeholder": _vm.$t('Enter state')
    },
    domProps: {
      "value": _vm.form.state
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "state"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "city"
    }
  }, [_vm._v(_vm._s(_vm.$t("City")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.city,
      expression: "form.city"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('city')
    },
    attrs: {
      "id": "city",
      "type": "text",
      "name": "city",
      "placeholder": _vm.$t('Enter city')
    },
    domProps: {
      "value": _vm.form.city
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "city"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "neighbourhood"
    }
  }, [_vm._v(_vm._s(_vm.$t("Neighbourhood")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.neighbourhood,
      expression: "form.neighbourhood"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('neighbourhood')
    },
    attrs: {
      "id": "neighbourhood",
      "type": "text",
      "name": "neighbourhood",
      "placeholder": _vm.$t('Enter neighbourhood')
    },
    domProps: {
      "value": _vm.form.neighbourhood
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "neighbourhood", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "neighbourhood"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "streetAddress1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Street Address 1")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.streetAddress1,
      expression: "form.streetAddress1"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('streetAddress1')
    },
    attrs: {
      "id": "streetAddress1",
      "type": "text",
      "name": "streetAddress1",
      "placeholder": _vm.$t('Enter street address')
    },
    domProps: {
      "value": _vm.form.streetAddress1
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "streetAddress1", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "streetAddress1"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "streetAddress2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Street Address 2")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.streetAddress2,
      expression: "form.streetAddress2"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('streetAddress2')
    },
    attrs: {
      "id": "streetAddress2",
      "type": "text",
      "name": "streetAddress2",
      "placeholder": _vm.$t('Enter additional address info')
    },
    domProps: {
      "value": _vm.form.streetAddress2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "streetAddress2", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "streetAddress2"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "postalCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Postal Code")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.postalCode,
      expression: "form.postalCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('postalCode')
    },
    attrs: {
      "id": "postalCode",
      "type": "text",
      "name": "postalCode",
      "placeholder": _vm.$t('Enter postal code')
    },
    domProps: {
      "value": _vm.form.postalCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "postalCode", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "postalCode"
    }
  })], 1)]), _vm._v(" "), _vm.form.type === 'Company' ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "commercialRegister"
    }
  }, [_vm._v(_vm._s(_vm.$t("CR")) + " "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t("Optional")) + ")")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.commercialRegister,
      expression: "form.commercialRegister"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('commercialRegister')
    },
    attrs: {
      "id": "commercialRegister",
      "type": "text",
      "name": "commercialRegister",
      "placeholder": _vm.$t('Enter commercial register number')
    },
    domProps: {
      "value": _vm.form.commercialRegister
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "commercialRegister", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "commercialRegister"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "taxCard"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax ID (Optional)")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.taxCard,
      expression: "form.taxCard"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('taxCard')
    },
    attrs: {
      "id": "taxCard",
      "type": "text",
      "name": "taxCard",
      "placeholder": _vm.$t('Enter tax ID number')
    },
    domProps: {
      "value": _vm.form.taxCard
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "taxCard", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "taxCard"
    }
  })], 1)]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Additional Information")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "notes"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.notes,
      expression: "form.notes"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('notes')
    },
    attrs: {
      "id": "notes",
      "rows": "3",
      "placeholder": _vm.$t('Enter additional notes')
    },
    domProps: {
      "value": _vm.form.notes
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "notes", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "notes"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-file-alt mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Documents & Settings")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "attachments"
    }
  }, [_vm._v(_vm._s(_vm.$t("Attachments")))]), _vm._v(" "), _c('div', {
    staticClass: "file-upload-area"
  }, [_c('input', {
    staticClass: "file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('attachments')
    },
    attrs: {
      "id": "attachments",
      "type": "file",
      "name": "attachments",
      "multiple": "",
      "accept": ".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.gif"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-upload-content"
  }, [_c('i', {
    staticClass: "fas fa-cloud-upload-alt"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Drop files here or click to browse")))]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Supported formats: PDF, DOC, XLS, TXT, Images")))])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "attachments"
    }
  }), _vm._v(" "), _vm.form.attachments && _vm.form.attachments.length > 0 ? _c('div', {
    staticClass: "selected-files mt-2"
  }, _vm._l(_vm.form.attachments, function (file, index) {
    return _c('div', {
      key: index,
      staticClass: "selected-file-item"
    }, [_c('i', {
      staticClass: "fas fa-file mr-2"
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-sm btn-outline-danger ml-2",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeFile(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]);
  }), 0) : _vm._e()], 1)])])])]), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type !== 'automatic' ? _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Chart of Account")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.routingSetting ? _c('div', {
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Current Routing Type")) + ":")]), _vm._v(" " + _vm._s(_vm.routingSetting.routing_type_display) + "\n         "), _vm.routingSetting.description ? _c('span', {
    staticClass: "ml-2"
  }, [_vm._v("- " + _vm._s(_vm.routingSetting.description))]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.isEditMode && _vm.routingSetting && _vm.routingSetting.routing_type !== 'automatic' ? _c('div', {
    staticClass: "alert alert-warning"
  }, [_c('i', {
    staticClass: "fas fa-lightbulb mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Note for New Suppliers")) + ":")]), _vm._v(" \n         " + _vm._s(_vm.$t("If you don't select a chart of account, one will be automatically created with the supplier name when you save the supplier.")) + "\n       ")]) : _vm._e(), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type === 'automatic' ? _c('div', {
    staticClass: "alert alert-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Chart of account will be automatically assigned based on your accounting configuration.")) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type === 'per_each' ? _c('div', {
    staticClass: "chart-of-account-field"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Select Chart of Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('VSelect', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "reduce": function reduce(option) {
        return option.id;
      },
      "placeholder": _vm.$t('Search for an account...'),
      "searchable": true,
      "clearable": true,
      "filterable": false,
      "loading": _vm.loadingChartOfAccounts,
      "minimum-input-length": 2,
      "delay": 300,
      "async": true,
      "async-search": _vm.searchChartOfAccounts
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', {
          staticClass: "account-option"
        }, [_c('span', {
          staticClass: "account-name"
        }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
          staticClass: "account-code"
        }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
          staticClass: "account-type"
        }, [_vm._v(_vm._s(type))])])];
      }
    }, {
      key: "selected-option",
      fn: function fn(_ref2) {
        var name = _ref2.name;
        return [_c('span', {
          staticClass: "selected-account-name"
        }, [_vm._v(_vm._s(name))])];
      }
    }, {
      key: "no-options",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-muted p-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("No accounts found. Try typing to search...")) + "\n                  ")])];
      },
      proxy: true
    }, {
      key: "loading",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-muted p-2"
        }, [_c('i', {
          staticClass: "fas fa-spinner fa-spin mr-2"
        }), _vm._v("\n                    " + _vm._s(_vm.$t("Searching accounts...")) + "\n                  ")])];
      },
      proxy: true
    }], null, false, 3425740784),
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Select a chart of account for this supplier. The account will be created without any parent.")) + "\n              ")]), _vm._v(" "), _vm.isEditMode ? _c('div', {
    staticClass: "mt-3"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary create-account-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isCreatingAccount
    },
    on: {
      "click": _vm.createNewAccount
    }
  }, [_vm.isCreatingAccount ? _c('i', {
    staticClass: "fas fa-spinner fa-spin mr-2"
  }) : _c('i', {
    staticClass: "fas fa-plus mr-2"
  }), _vm._v("\n                  " + _vm._s(_vm.isCreatingAccount ? _vm.$t("Creating...") : _vm.$t("Create New Account")) + "\n                ")])]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type === 'main_account_per_each' ? _c('div', {
    staticClass: "chart-of-account-field"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Select Chart of Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('VSelect', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "reduce": function reduce(option) {
        return option.id;
      },
      "placeholder": _vm.$t('Search for an account...'),
      "searchable": true,
      "clearable": true,
      "filterable": false,
      "loading": _vm.loadingChartOfAccounts,
      "minimum-input-length": 2,
      "delay": 300,
      "async": true,
      "async-search": _vm.searchChartOfAccounts
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var name = _ref3.name,
          code = _ref3.code,
          type = _ref3.type;
        return [_c('div', {
          staticClass: "account-option"
        }, [_c('span', {
          staticClass: "account-name"
        }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
          staticClass: "account-code"
        }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
          staticClass: "account-type"
        }, [_vm._v(_vm._s(type))])])];
      }
    }, {
      key: "selected-option",
      fn: function fn(_ref4) {
        var name = _ref4.name;
        return [_c('span', {
          staticClass: "selected-account-name"
        }, [_vm._v(_vm._s(name))])];
      }
    }, {
      key: "no-options",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-muted p-2"
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("No accounts found. Try typing to search...")) + "\n                ")])];
      },
      proxy: true
    }, {
      key: "loading",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-muted p-2"
        }, [_c('i', {
          staticClass: "fas fa-spinner fa-spin mr-2"
        }), _vm._v("\n                  " + _vm._s(_vm.$t("Searching accounts...")) + "\n                ")])];
      },
      proxy: true
    }], null, false, 1695342704),
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Select a chart of account for this supplier. The account will be properly created under the main supplier account.")) + "\n            ")]), _vm._v(" "), _vm.isEditMode ? _c('div', {
    staticClass: "mt-3"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary create-account-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isCreatingAccount
    },
    on: {
      "click": _vm.createNewAccount
    }
  }, [_vm.isCreatingAccount ? _c('i', {
    staticClass: "fas fa-spinner fa-spin mr-2"
  }) : _c('i', {
    staticClass: "fas fa-plus mr-2"
  }), _vm._v("\n                " + _vm._s(_vm.isCreatingAccount ? _vm.$t("Creating...") : _vm.$t("Create New Account")) + "\n              ")])]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.loadingChartOfAccounts ? _c('div', {
    staticClass: "text-center py-3"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t("Loading...")))])]), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t("Loading chart of accounts...")))])]) : _vm._e(), _vm._v(" "), _vm.chartOfAccountsError ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.chartOfAccountsError) + "\n      ")]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type === 'automatic' ? _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Chart of Account")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "alert alert-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Chart of account will be automatically assigned based on your accounting configuration.")) + "\n          ")])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-bell mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Communication Preferences")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode
    },
    model: {
      value: _vm.form.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendEmail", $$v);
      },
      expression: "form.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send Welcome Email")))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode
    },
    model: {
      value: _vm.form.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendSMS", $$v);
      },
      expression: "form.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send Welcome SMS")))])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.js
var vue_select = __webpack_require__(6804);
var vue_select_default = /*#__PURE__*/__webpack_require__.n(vue_select);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/RepresentativesList.vue + 11 modules
var RepresentativesList = __webpack_require__(41146);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=script&lang=js
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






/* harmony default export */ const SupplierFormvue_type_script_lang_js = ({
  name: "SupplierForm",
  components: {
    ToggleButton: dist.ToggleButton,
    RepresentativesList: RepresentativesList/* default */.A,
    VSelect: (vue_select_default())
  },
  props: {
    // Whether to show the card-body wrapper (for create page) or not (for modal)
    showCardBody: {
      type: Boolean,
      "default": true
    },
    // Initial form data (optional)
    initialData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      loading: true,
      url: null,
      form: null,
      // Will be initialized in created()

      // Add missing properties for chart of accounts
      routingSetting: null,
      loadingChartOfAccounts: false,
      chartOfAccountsError: null,
      chartOfAccounts: [],
      isCreatingAccount: false
    };
  },
  computed: {
    // Check if this is edit mode (has initial data with slug)
    isEditMode: function isEditMode() {
      return this.initialData && this.initialData.slug && this.initialData.slug !== 'new';
    }
  },
  watch: {
    // Watch for changes in initialData prop
    initialData: {
      handler: function handler(newData) {
        var _this = this;
        console.log('InitialData watcher triggered:', newData);
        if (newData && Object.keys(newData).length > 0) {
          console.log('Form before setting values:', this.form);

          // Set form values from initial data
          Object.keys(newData).forEach(function (key) {
            if (_this.form && _this.form.hasOwnProperty(key)) {
              console.log("Setting form.".concat(key, " ="), newData[key]);
              _this.form[key] = newData[key];
            } else {
              console.log("Form field ".concat(key, " not found or form not initialized"));
            }
          });

          // Handle special cases
          if (newData.image_path) {
            this.url = newData.image_path;
          }
          if (newData.attachments !== undefined) {
            this.form.attachments = Array.isArray(newData.attachments) ? newData.attachments : [];
          } else {
            // Ensure attachments is always an array
            this.form.attachments = [];
          }
          console.log('Form after setting values:', this.form);

          // Load representatives if this is an existing supplier
          if (newData.slug && newData.slug !== 'new') {
            this.loadRepresentatives();
          } else {
            // Load next code number only for new suppliers
            console.log('Loading next code number for new supplier');
            this.loadNextCodeNumber();
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  created: function created() {
    console.log('SupplierForm component created');
    this.initializeForm();
  },
  mounted: function mounted() {
    var _this2 = this;
    console.log('SupplierForm component mounted, form:', this.form);
    console.log('Form data in mounted:', this.form ? Object.keys(this.form) : 'No form');

    // Test if form is working
    if (this.form) {
      console.log('Form codeNumber:', this.form.codeNumber);
      console.log('Form type:', this.form.type);
      console.log('Form email:', this.form.email);
    }

    // Load routing settings first, then chart of accounts
    this.loadRoutingSettings().then(function () {
      _this2.loadChartOfAccounts();
    });
  },
  methods: {
    // Initialize the form
    initializeForm: function initializeForm() {
      this.form = new vform_es/* default */.Ay(_objectSpread({
        // Account Details
        codeNumber: "000001",
        notes: "",
        displayLanguage: "",
        // Supplier Details
        type: "Company",
        fullName: "",
        businessName: "",
        firstName: "",
        lastName: "",
        phone: "",
        phoneNumber: "",
        email: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "SA",
        neighbourhood: "",
        commercialRegister: "",
        taxCard: "",
        // Additional Fields
        image: "",
        attachments: [],
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        // Legacy fields for backward compatibility
        name: "",
        companyName: "",
        taxRegistrationNumber: "",
        address: "",
        // Representatives
        representatives: [],
        // Chart of Account
        chartOfAccountId: null
      }, this.initialData || {}));
      console.log('Form initialized:', this.form);
      console.log('Form type:', _typeof(this.form));
      console.log('Form methods:', Object.getOwnPropertyNames(this.form));
    },
    // Load the next available code number for new suppliers
    loadNextCodeNumber: function loadNextCodeNumber() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              if (!(!_this3.initialData || Object.keys(_this3.initialData).length === 0)) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return axios_default().get('/api/suppliers/next-code');
            case 1:
              response = _context.v;
              if (response.data.success) {
                _this3.form.codeNumber = response.data.formatted_code;
              } else {
                console.error('Failed to load next code number:', response.data.message);
                // Fallback to default
                _this3.form.codeNumber = '000001';
              }
            case 2:
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Error loading next code number:', _t);
              // Fallback to default
              _this3.form.codeNumber = '000001';
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var files = Array.from(e.target.files);
      var validFiles = [];
      files.forEach(function (file) {
        // Check file size (2MB limit)
        if (file.size < 2111775) {
          // For image, only allow image files
          if (e.target.id === 'image') {
            if (file.type.startsWith('image/')) {
              validFiles.push(file);
            } else {
              sweetalert2_all_default().fire("Error!", "Please select a valid image file", "error");
            }
          } else {
            // For attachments, allow various document types
            var allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'image/jpeg', 'image/png', 'image/gif'];
            if (allowedTypes.includes(file.type)) {
              validFiles.push(file);
            } else {
              sweetalert2_all_default().fire("Error!", "Please select a valid file type", "error");
            }
          }
        } else {
          sweetalert2_all_default().fire("Error!", "Please select a file with size less than 2 MB", "error");
        }
      });
      if (validFiles.length > 0) {
        // Check if this is for image or attachments
        if (e.target.id === 'image') {
          // Single image file
          this.form.image = validFiles[0];
          this.url = URL.createObjectURL(validFiles[0]);
        } else {
          // Multiple attachment files
          this.form.attachments = [].concat(_toConsumableArray(this.form.attachments), validFiles);
        }
      }
    },
    // Handle attachment file changes
    onAttachmentChange: function onAttachmentChange(e) {
      var _this4 = this;
      var files = Array.from(e.target.files);
      var validFiles = [];
      files.forEach(function (file) {
        // Check file size (2MB limit)
        if (file.size < 2111775) {
          // For attachments, allow various document types
          var allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'image/jpeg', 'image/png', 'image/gif'];
          if (allowedTypes.includes(file.type)) {
            validFiles.push(file);
          } else {
            sweetalert2_all_default().fire(_this4.$t("Error!"), _this4.$t("Please select a valid file type"), "error");
          }
        } else {
          sweetalert2_all_default().fire(_this4.$t("Error!"), _this4.$t("Please select a file with size less than 2 MB"), "error");
        }
      });

      // Add valid files to attachments
      this.form.attachments = [].concat(_toConsumableArray(this.form.attachments || []), validFiles);
    },
    // Remove attachment file
    removeFile: function removeFile(index) {
      if (this.form.attachments && Array.isArray(this.form.attachments)) {
        this.form.attachments.splice(index, 1);
      }
    },
    // Validate form before submission
    validateForm: function validateForm() {
      console.log('=== VALIDATING SUPPLIER FORM ===');
      var isValid = true;

      // Basic validation - check if form exists
      if (!this.form) {
        console.error('Form is not initialized');
        return false;
      }

      // Clear previous errors
      this.form.errors.clear();
      console.log('Form data for validation:', {
        phoneNumber: this.form.phoneNumber,
        phone: this.form.phone,
        type: this.form.type,
        fullName: this.form.fullName,
        businessName: this.form.businessName
      });

      // Required field validations
      if (!this.form.phoneNumber || this.form.phoneNumber.trim() === '') {
        console.log('Phone number validation failed');
        this.form.errors.set('phoneNumber', 'Mobile number is required');
        isValid = false;
      }
      if (this.form.type === 'Individual' && (!this.form.fullName || this.form.fullName.trim() === '')) {
        console.log('Full name validation failed for individual');
        this.form.errors.set('fullName', 'Full name is required for individual suppliers');
        isValid = false;
      }
      if (this.form.type === 'Company' && (!this.form.businessName || this.form.businessName.trim() === '')) {
        console.log('Business name validation failed for company');
        this.form.errors.set('businessName', 'Business name is required for company suppliers');
        isValid = false;
      }

      // Validate chart of account based on routing type
      // Only validate if routing settings are loaded and not automatic
      if (this.routingSetting && this.routingSetting.routing_type !== 'automatic') {
        if (!this.form.chartOfAccountId) {
          var message = this.routingSetting.routing_type === 'per_each' ? "Please select a chart of account for this supplier" : "Please select a chart of account under the main supplier account";
          console.log('Chart of account validation failed:', message);
          this.form.errors.set('chartOfAccountId', message);
          isValid = false;
        }
      } else if (this.routingSetting && this.routingSetting.routing_type === 'automatic') {
        // For automatic routing, no validation needed
        console.log('Automatic routing - no chart of account validation needed');
      }
      console.log('=== SUPPLIER FORM VALIDATION RESULT:', isValid, '===');
      return isValid;
    },
    // Submit form
    submitForm: function submitForm() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var submitData;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (_this5.validateForm()) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              // Map form data to API format
              submitData = _objectSpread(_objectSpread({}, _this5.form.data()), {}, {
                // Map legacy fields for backward compatibility
                name: _this5.form.type === 'Individual' ? _this5.form.fullName : _this5.form.businessName,
                companyName: _this5.form.businessName,
                taxRegistrationNumber: _this5.form.taxCard,
                address: _this5.form.streetAddress1,
                // Include representatives data
                representatives: _this5.form.representatives && Array.isArray(_this5.form.representatives) ? _this5.form.representatives : [],
                // Ensure phone field is included
                phone: _this5.form.phone,
                phoneNumber: _this5.form.phoneNumber
              }); // Emit submit event with form data
              _this5.$emit('submit', submitData);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Get form data for parent component
    getFormData: function getFormData() {
      return this.form;
    },
    // Reset form to default values
    resetForm: function resetForm() {
      this.form.reset();

      // Reset to default values for specific fields
      this.form.type = "Company";
      this.form.status = 1;
      this.form.country = "SA";
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;

      // Load the next available code number
      this.loadNextCodeNumber();

      // Clear all other fields
      this.url = null;
      this.form.attachments = [];
      this.form.image = "";
      this.form.fullName = "";
      this.form.businessName = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.phone = "";
      this.form.phoneNumber = "";
      this.form.email = "";
      this.form.streetAddress1 = "";
      this.form.streetAddress2 = "";
      this.form.city = "";
      this.form.state = "";
      this.form.postalCode = "";
      this.form.neighbourhood = "";
      this.form.commercialRegister = "";
      this.form.taxCard = "";
      this.form.notes = "";
      this.form.displayLanguage = "";
      this.form.representatives = [];
    },
    // Load representatives for existing supplier
    loadRepresentatives: function loadRepresentatives() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var slug, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              // Try to get slug from route params first, then from initialData
              slug = _this6.$route && _this6.$route.params && _this6.$route.params.slug || _this6.initialData && _this6.initialData.slug;
              console.log('Loading representatives for supplier:', slug);
              if (!(slug && slug !== 'new')) {
                _context3.n = 5;
                break;
              }
              _context3.p = 1;
              _context3.n = 2;
              return axios_default().get("/api/supplier/".concat(slug, "/representatives"));
            case 2:
              response = _context3.v;
              console.log('Representatives API response:', response.data);
              if (response.data.success) {
                _this6.form.representatives = response.data.data;
                console.log('Representatives loaded:', _this6.form.representatives);
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Error loading representatives:', _t2);
            case 4:
              _context3.n = 6;
              break;
            case 5:
              console.log('No slug or new supplier, skipping representatives load');
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }))();
    },
    // Handle when representatives are changed (added, edited, deleted)
    handleRepresentativesChanged: function handleRepresentativesChanged(representatives) {
      this.form.representatives = representatives;
    },
    // Load routing settings
    loadRoutingSettings: function loadRoutingSettings() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get('/api/routing-settings/supplier');
            case 1:
              response = _context4.v;
              if (response.data.success) {
                _this7.routingSetting = response.data.data;
                console.log('Routing settings loaded:', _this7.routingSetting);
              } else {
                console.error('Failed to load routing settings:', response.data.message);
                _this7.routingSetting = null; // Ensure it's null on error
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error('Error loading routing settings:', _t3);
              _this7.routingSetting = null; // Ensure it's null on error
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, fallbackResponse, _response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              console.log('Loading chart of accounts...');
              console.log('Current routing setting:', _this8.routingSetting);
              _this8.loadingChartOfAccounts = true;
              _this8.chartOfAccountsError = null;

              // If routing is automatic, we don't need to load all accounts
              if (!(_this8.routingSetting && _this8.routingSetting.routing_type === 'automatic')) {
                _context5.n = 1;
                break;
              }
              console.log('Routing type is automatic, not loading chart of accounts');
              _this8.chartOfAccounts = [];
              return _context5.a(2);
            case 1:
              if (!(_this8.routingSetting && _this8.routingSetting.main_account_id)) {
                _context5.n = 6;
                break;
              }
              console.log('Loading accounts from routing setup...');
              // Load accounts from the routing setup
              _context5.n = 2;
              return axios_default().get("/api/suppliers/chart-of-accounts/routing");
            case 2:
              response = _context5.v;
              console.log('Routing accounts response:', response);
              if (!(response.data && Array.isArray(response.data))) {
                _context5.n = 3;
                break;
              }
              _this8.chartOfAccounts = response.data;
              console.log('Loaded accounts from routing setup:', _this8.chartOfAccounts.length);
              _context5.n = 5;
              break;
            case 3:
              console.log('Routing accounts response not successful, falling back to all accounts');
              // Fallback to all accounts
              _context5.n = 4;
              return axios_default().get('/api/suppliers/chart-of-accounts');
            case 4:
              fallbackResponse = _context5.v;
              _this8.chartOfAccounts = fallbackResponse.data || [];
              console.log('Loaded fallback accounts:', _this8.chartOfAccounts.length);
            case 5:
              _context5.n = 8;
              break;
            case 6:
              console.log('No main account ID, loading all accounts as fallback');
              // Load all accounts as fallback
              _context5.n = 7;
              return axios_default().get('/api/suppliers/chart-of-accounts');
            case 7:
              _response = _context5.v;
              _this8.chartOfAccounts = _response.data || [];
              console.log('Loaded all accounts as fallback:', _this8.chartOfAccounts.length);
            case 8:
              _context5.n = 10;
              break;
            case 9:
              _context5.p = 9;
              _t4 = _context5.v;
              console.error('Error loading chart of accounts:', _t4);
              _this8.chartOfAccountsError = _t4.message || 'Failed to load chart of accounts';
              _this8.chartOfAccounts = [];
            case 10:
              _context5.p = 10;
              _this8.loadingChartOfAccounts = false;
              return _context5.f(10);
            case 11:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 9, 10, 11]]);
      }))();
    },
    // Search for chart of accounts
    searchChartOfAccounts: function searchChartOfAccounts(search, loading) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var endpoint, response, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              loading(true);
              _context6.p = 1;
              // Use routing-aware endpoint if available
              endpoint = '/api/chart-of-accounts/search';
              if (_this9.routingSetting && _this9.routingSetting.main_account_id) {
                endpoint = "/api/suppliers/chart-of-accounts/routing?search=".concat(search);
              } else {
                endpoint = "/api/chart-of-accounts/search?q=".concat(search);
              }
              _context6.n = 2;
              return axios_default().get(endpoint);
            case 2:
              response = _context6.v;
              if (response.data.success || Array.isArray(response.data)) {
                _this9.chartOfAccounts = response.data.data || response.data;
              } else {
                _this9.chartOfAccounts = [];
              }
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t5 = _context6.v;
              _this9.chartOfAccounts = [];
            case 4:
              _context6.p = 4;
              loading(false);
              return _context6.f(4);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3, 4, 5]]);
      }))();
    },
    // Create new chart of account
    createNewAccount: function createNewAccount() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var parentId, response, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!_this0.isCreatingAccount) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this0.isCreatingAccount = true;
              _context7.p = 2;
              // Determine parent_id based on routing settings
              parentId = null;
              if (_this0.routingSetting && _this0.routingSetting.routing_type === 'main_account_per_each' && _this0.routingSetting.main_account_id) {
                parentId = _this0.routingSetting.main_account_id;
              }
              _context7.n = 3;
              return axios_default().post('/api/chart-of-accounts/create', {
                name: _this0.form.type === 'Individual' ? _this0.form.fullName : _this0.form.businessName,
                type: 'Supplier',
                parent_id: parentId
              });
            case 3:
              response = _context7.v;
              if (response.data.success) {
                _this0.chartOfAccounts.push(response.data.data);
                _this0.form.chartOfAccountId = response.data.data.id;
                sweetalert2_all_default().fire("Success!", "New chart of account created successfully.", "success");
              } else {
                sweetalert2_all_default().fire("Error!", response.data.message || "Failed to create new chart of account.", "error");
              }
              _context7.n = 5;
              break;
            case 4:
              _context7.p = 4;
              _t6 = _context7.v;
              sweetalert2_all_default().fire("Error!", _t6.message || "Failed to create new chart of account.", "error");
            case 5:
              _context7.p = 5;
              _this0.isCreatingAccount = false;
              return _context7.f(5);
            case 6:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});
;// ./resources/js/components/SupplierForm.vue?vue&type=script&lang=js
 /* harmony default export */ const components_SupplierFormvue_type_script_lang_js = (SupplierFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=ffe845bc&prod&scoped=true&lang=css
var SupplierFormvue_type_style_index_0_id_ffe845bc_prod_scoped_true_lang_css = __webpack_require__(80051);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=ffe845bc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(SupplierFormvue_type_style_index_0_id_ffe845bc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_SupplierFormvue_type_style_index_0_id_ffe845bc_prod_scoped_true_lang_css = (SupplierFormvue_type_style_index_0_id_ffe845bc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=ffe845bc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/SupplierForm.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_SupplierFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ffe845bc",
  null
  
)

/* harmony default export */ const SupplierForm = (component.exports);

/***/ }),

/***/ 28789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=template&id=6780192e&scoped=true
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
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Edit Supplier')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-dark float-right",
    attrs: {
      "to": {
        name: 'suppliers.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n          ")])], 1), _vm._v(" "), _c('SupplierForm', {
    ref: "supplierForm",
    attrs: {
      "showCardBody": true,
      "initialData": _vm.supplierData
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.isSubmitting || _vm.loading,
      "disabled": !_vm.isFormReady
    },
    on: {
      "click": _vm.saveSupplier
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n          ")])], 1)], 1)])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/SupplierForm.vue + 5 modules
var SupplierForm = __webpack_require__(15612);
// EXTERNAL MODULE: ./resources/js/components/Button.vue + 3 modules
var Button = __webpack_require__(60069);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Supplier")
    };
  },
  components: {
    SupplierForm: SupplierForm/* default */.A,
    VButton: Button/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Edit Supplier",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Suppliers",
        url: "suppliers.index"
      }, {
        name: "Edit",
        url: ""
      }],
      loading: true,
      isSubmitting: false,
      supplierData: {}
    };
  },
  computed: {
    // Check if form is ready
    isFormReady: function isFormReady() {
      return this.$refs.supplierForm && this.$refs.supplierForm.getFormData && this.$refs.supplierForm.getFormData().data;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.supplierForm': {
      handler: function handler(newVal) {
        if (newVal && newVal.getFormData && newVal.getFormData().data) {
          console.log('Form is now ready');
          this.loading = false;
        }
      },
      immediate: true
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _this.getSupplier();
          case 1:
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Error in created lifecycle:", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }))();
  },
  methods: {
    // Get supplier data
    getSupplier: function getSupplier() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, supplierData, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              if (_this2.$route.params.slug) {
                _context2.n = 1;
                break;
              }
              throw new Error("No supplier slug provided");
            case 1:
              console.log("Fetching supplier with slug:", _this2.$route.params.slug);
              _context2.n = 2;
              return _this2.$http.get("/api/suppliers/".concat(_this2.$route.params.slug));
            case 2:
              response = _context2.v;
              if (response.data) {
                _context2.n = 3;
                break;
              }
              throw new Error("No data received from API");
            case 3:
              console.log("Raw API response data:", response.data);

              // The API response is wrapped in a 'data' object
              supplierData = response.data.data || response.data; // Transform the data to match the expected format
              _this2.supplierData = _objectSpread(_objectSpread({}, supplierData), {}, {
                // Map API fields to component fields
                codeNumber: supplierData.code_number || (supplierData.supplierID ? supplierData.supplierID.toString().padStart(6, '0') : "000001"),
                fullName: supplierData.full_name || "",
                businessName: supplierData.business_name || "",
                firstName: supplierData.first_name || "",
                lastName: supplierData.last_name || "",
                phoneNumber: supplierData.phoneNumber || supplierData.phone_number || "",
                streetAddress1: supplierData.street_address1 || "",
                streetAddress2: supplierData.street_address2 || "",
                postalCode: supplierData.postal_code || "",
                commercialRegister: supplierData.commercial_register || "",
                taxCard: supplierData.tax_card || "",
                isSendEmail: supplierData.is_send_email || false,
                isSendSMS: supplierData.is_send_sms || false
              });
              console.log("Transformed supplier data:", _this2.supplierData);
              _this2.loading = false;
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error("Error getting supplier:", _t2);
              _this2.loading = false;
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 4]]);
      }))();
    },
    // Save supplier using the SupplierForm component
    saveSupplier: function saveSupplier() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var form, formData, updateData, response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              console.log('=== SAVE SUPPLIER STARTED ===');

              // Check if form is ready
              if (_this3.isFormReady) {
                _context3.n = 1;
                break;
              }
              console.error('Form is not ready yet');
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this3.$t("Form is not ready yet"),
                  text: _this3.$t("Please wait a moment and try again.")
                });
              } else {
                alert(_this3.$t("Form is not ready yet. Please wait a moment and try again."));
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              _this3.isSubmitting = true;
              console.log('Set isSubmitting to true');

              // Get form data from the SupplierForm component
              console.log('Getting form from SupplierForm component...');
              form = _this3.$refs.supplierForm.getFormData();
              console.log('Form data retrieved:', form);
              if (form) {
                _context3.n = 2;
                break;
              }
              throw new Error("No form data available");
            case 2:
              if (form.data) {
                _context3.n = 3;
                break;
              }
              console.error('Form is not ready yet');
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this3.$t("Form is not ready yet"),
                  text: _this3.$t("Please wait a moment and try again.")
                });
              } else {
                alert(_this3.$t("Form is not ready yet. Please wait a moment and try again."));
              }
              _this3.isSubmitting = false;
              return _context3.a(2);
            case 3:
              console.log('Saving supplier with data:', form);
              console.log('Preparing update data...');

              // Get the actual form data using .data() method
              formData = form.data();
              console.log('Form data using .data() method:', formData);

              // Prepare the data for update
              updateData = {
                // Account Details
                codeNumber: formData.codeNumber,
                notes: formData.notes,
                displayLanguage: formData.displayLanguage,
                status: formData.status,
                // Supplier Details
                type: formData.type,
                fullName: formData.fullName,
                businessName: formData.businessName,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                streetAddress1: formData.streetAddress1,
                streetAddress2: formData.streetAddress2,
                city: formData.city,
                state: formData.state,
                postalCode: formData.postalCode,
                country: formData.country,
                neighbourhood: formData.neighbourhood,
                commercialRegister: formData.commercialRegister,
                taxCard: formData.taxCard,
                // Additional Fields
                image: formData.image,
                attachments: formData.attachments,
                isSendEmail: formData.isSendEmail,
                isSendSMS: formData.isSendSMS,
                // Representatives
                representatives: formData.representatives || [],
                // Legacy fields for backward compatibility
                name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
                companyName: formData.businessName,
                taxRegistrationNumber: formData.taxCard,
                address: formData.streetAddress1
              };
              console.log('Update data prepared:', updateData);
              console.log('Making API call to update supplier...');

              // Make API call to update supplier
              _context3.n = 4;
              return _this3.$http.put("/api/suppliers/".concat(_this3.$route.params.slug), updateData);
            case 4:
              response = _context3.v;
              console.log('API response received:', response);
              if (!response.data.success) {
                _context3.n = 5;
                break;
              }
              console.log('Supplier updated successfully');
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "success",
                  title: _this3.$t("Supplier updated successfully")
                });
              } else {
                alert(_this3.$t("Supplier updated successfully"));
              }
              _this3.$router.push({
                name: "suppliers.index"
              });
              _context3.n = 6;
              break;
            case 5:
              throw new Error(response.data.message || "Failed to update supplier");
            case 6:
              _context3.n = 8;
              break;
            case 7:
              _context3.p = 7;
              _t3 = _context3.v;
              console.error("Error updating supplier:", _t3);
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this3.$t("Oops...something went wrong")
                });
              } else {
                alert(_this3.$t("Oops...something went wrong"));
              }
            case 8:
              _context3.p = 8;
              console.log('Setting isSubmitting to false');
              _this3.isSubmitting = false;
              return _context3.f(8);
            case 9:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 7, 8, 9]]);
      }))();
    },
    // Reset form
    resetForm: function resetForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.resetForm();
      }
    }
  }
});
;// ./resources/js/pages/suppliers/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const suppliers_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=6780192e&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_6780192e_prod_scoped_true_lang_css = __webpack_require__(84518);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=6780192e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_6780192e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const suppliers_editvue_type_style_index_0_id_6780192e_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_6780192e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=6780192e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/suppliers/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  suppliers_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6780192e",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 80051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-ffe845bc]{background:#fff;border:1px solid #e3e6f0;border-radius:.75rem;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15);margin-bottom:1.5rem;transition:all .3s ease}.form-card[data-v-ffe845bc]:hover{box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.25);transform:translateY(-2px)}.form-card .card-header[data-v-ffe845bc]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:none;border-radius:.75rem .75rem 0 0;color:#fff;padding:1rem 1.5rem}.form-card .card-header .section-title[data-v-ffe845bc]{border:none;color:#fff;font-size:1.1rem;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-ffe845bc]:after{display:none}.form-card .card-header .section-title i[data-v-ffe845bc]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-ffe845bc]{padding:1.5rem}.section-subtitle[data-v-ffe845bc]{border-bottom:1px solid #dee2e6;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-text[data-v-ffe845bc]{color:#6c757d;font-size:.875rem;margin-top:5px}.form-group[data-v-ffe845bc]{margin-bottom:1rem}.required[data-v-ffe845bc]{color:#dc3545;font-weight:700}.required-field[data-v-ffe845bc]{color:#495057;font-weight:600}.required-input[data-v-ffe845bc]{border-left:3px solid #dc3545}.fa-question-circle[data-v-ffe845bc]{cursor:help;opacity:.7}.fa-question-circle[data-v-ffe845bc]:hover{opacity:1}.custom-file-label[data-v-ffe845bc]{background-color:#f8f9fa;border:2px dashed #dee2e6;cursor:pointer;transition:all .3s ease}.custom-file-label[data-v-ffe845bc]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label .text-primary[data-v-ffe845bc]{text-decoration:underline}.custom-file-label .fa-cloud-upload-alt[data-v-ffe845bc]{color:#6c757d;font-size:1.2em}.file-upload-area[data-v-ffe845bc]{align-items:center;background-color:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;cursor:pointer;display:flex;justify-content:center;min-height:120px;padding:30px;position:relative;text-align:center;transition:all .3s ease}.file-upload-area[data-v-ffe845bc]:hover{background-color:#e3f2fd;border-color:#007bff}.file-upload-area .file-input[data-v-ffe845bc]{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.file-upload-content[data-v-ffe845bc]{pointer-events:none}.file-upload-content i[data-v-ffe845bc]{color:#6c757d;font-size:2.5em;margin-bottom:10px}.file-upload-content p[data-v-ffe845bc]{color:#495057;font-weight:500;margin:10px 0 5px}.file-upload-content small[data-v-ffe845bc]{color:#6c757d}.selected-files[data-v-ffe845bc]{max-height:200px;overflow-y:auto}.selected-file-item[data-v-ffe845bc]{align-items:center;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:6px;display:flex;margin-bottom:8px;padding:8px 12px}.selected-file-item i[data-v-ffe845bc]{color:#6c757d;margin-right:8px}.selected-file-item span[data-v-ffe845bc]{flex-grow:1;font-size:.9em}.image-preview[data-v-ffe845bc]{text-align:center}.image-preview img[data-v-ffe845bc]{border:1px solid #dee2e6;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,.1)}.section-title[data-v-ffe845bc]{border-bottom:2px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:20px;padding-bottom:10px;position:relative}.section-title[data-v-ffe845bc]:after{background-color:#007bff;bottom:-2px;content:\"\";height:2px;left:0;position:absolute;width:50px}.row.mt-4[data-v-ffe845bc]{margin-top:2rem!important}.form-group[data-v-ffe845bc]{margin-bottom:1.5rem}.form-group label[data-v-ffe845bc]{color:#495057;font-weight:500;margin-bottom:.5rem}.radio-group[data-v-ffe845bc]{display:flex;gap:20px;margin-top:.5rem}.radio-inline[data-v-ffe845bc]{align-items:center;border-radius:6px;cursor:pointer;display:flex;gap:8px;padding:8px 12px;transition:background-color .2s ease}.radio-inline[data-v-ffe845bc]:hover{background-color:#f8f9fa}.radio-inline input[type=radio][data-v-ffe845bc]{margin:0}.checkbox-inline[data-v-ffe845bc]{align-items:center;border-radius:6px;cursor:pointer;display:flex;gap:8px;padding:8px 12px;transition:background-color .2s ease}.checkbox-inline[data-v-ffe845bc]:hover{background-color:#f8f9fa}.checkbox-inline input[type=checkbox][data-v-ffe845bc]{margin:0}.is-invalid[data-v-ffe845bc]{border-color:#dc3545}.text-muted[data-v-ffe845bc]{color:#6c757d!important}.btn[data-v-ffe845bc]{border-radius:.375rem;font-weight:500}.btn-primary[data-v-ffe845bc]{background-color:#007bff;border-color:#007bff}.btn-primary[data-v-ffe845bc]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-ffe845bc]{background-color:#6c757d;border-color:#6c757d}.btn-secondary[data-v-ffe845bc]:hover{background-color:#545b62;border-color:#545b62}.btn-danger[data-v-ffe845bc]{background-color:#dc3545;border-color:#dc3545}.btn-danger[data-v-ffe845bc]:hover{background-color:#c82333;border-color:#c82333}.btn-sm[data-v-ffe845bc]{font-size:.875rem;padding:.25rem .5rem}.btn-outline-danger[data-v-ffe845bc]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-ffe845bc]:hover{background-color:#dc3545;border-color:#dc3545;color:#fff}.custom-file-label[data-v-ffe845bc]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom-file-input:lang(en)~.custom-file-label[data-v-ffe845bc]:after{content:\"Browse\"}@media (max-width:768px){.radio-group[data-v-ffe845bc]{flex-direction:column;gap:10px}.section-title[data-v-ffe845bc]{font-size:1.1rem;margin-bottom:15px}.file-upload-area[data-v-ffe845bc]{min-height:100px;padding:20px}.file-upload-content i[data-v-ffe845bc]{font-size:2em}.col-md-3[data-v-ffe845bc]{margin-bottom:1rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section-title[data-v-6780192e]{border-bottom:2px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:1.5rem;padding-bottom:.5rem}.radio-group[data-v-6780192e]{display:flex;gap:1rem;margin-top:.5rem}.radio-inline[data-v-6780192e]{align-items:center;cursor:pointer;display:flex;margin-right:1rem}.radio-inline input[type=radio][data-v-6780192e]{margin-right:.5rem}.required[data-v-6780192e]{color:#dc3545}.form-group[data-v-6780192e]{margin-bottom:1.5rem}.form-group label[data-v-6780192e]{color:#495057;font-weight:500;margin-bottom:.5rem}.is-invalid[data-v-6780192e]{border-color:#dc3545}.text-muted[data-v-6780192e]{color:#6c757d!important}.btn[data-v-6780192e]{border-radius:.375rem;font-weight:500}.btn-primary[data-v-6780192e]{background-color:#007bff;border-color:#007bff}.btn-primary[data-v-6780192e]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-6780192e]{background-color:#6c757d;border-color:#6c757d}.btn-secondary[data-v-6780192e]:hover{background-color:#545b62;border-color:#545b62}.btn-dark[data-v-6780192e]{background-color:#343a40;border-color:#343a40}.btn-dark[data-v-6780192e]:hover{background-color:#23272b;border-color:#1d2124}@media (max-width:768px){.radio-group[data-v-6780192e]{flex-direction:column;gap:.5rem}.col-md-3[data-v-6780192e]{margin-bottom:1rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);