"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9340],{

/***/ 17359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SupplierForm)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=template&id=c1d1a994&scoped=true
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Supplier Number")) + "\n            ")]), _vm._v(" "), _c('input', {
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
      "readonly": "",
      "aria-readonly": "true"
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t("This supplier number is automatically generated and cannot be changed")) + "\n            ")]), _vm._v(" "), _c('has-error', {
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
    staticClass: "row mt-4 equal-height"
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
    staticClass: "row mt-4",
    staticStyle: {
      "display": "none"
    }
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
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Current Routing Type")) + ":")]), _vm._v(" " + _vm._s(_vm.routingSetting.routing_type_display) + "\n         ")])])])])]) : _vm._e(), _vm._v(" "), _vm.routingSetting && _vm.routingSetting.routing_type === 'automatic' ? _c('div', {
    staticClass: "row mt-4",
    staticStyle: {
      "display": "none"
    }
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
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
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
  }, [_vm._v(_vm._s(_vm.$t("Send Welcome Email")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n              (" + _vm._s(_vm.$t("Email not configured")) + ")\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
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
  }, [_vm._v(_vm._s(_vm.$t("Send Welcome SMS")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n              (" + _vm._s(_vm.$t("SMS not configured")) + ")\n            ")]) : _vm._e()], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/RepresentativesList.vue + 11 modules
var RepresentativesList = __webpack_require__(2585);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=script&lang=js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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





/* harmony default export */ const SupplierFormvue_type_script_lang_js = ({
  name: "SupplierForm",
  components: {
    ToggleButton: dist.ToggleButton,
    RepresentativesList: RepresentativesList/* default */.A
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
      isCreatingAccount: false,
      isAutoAssigningSupplier: false,
      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      }
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
            if (_this.form && Object.prototype.hasOwnProperty.call(_this.form, key)) {
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

    // Load communication configuration status
    this.loadCommunicationConfigStatus();
  },
  methods: {
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _this3.communicationConfig.loading = true;
              _context.n = 1;
              return axios_default().get('/api/communication-config-status');
            case 1:
              response = _context.v;
              _this3.communicationConfig.email_configured = response.data.email_configured;
              _this3.communicationConfig.sms_configured = response.data.sms_configured;
              _this3.communicationConfig.loading = false;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading communication config status:', _t);
              // Default to false if there's an error
              _this3.communicationConfig.email_configured = false;
              _this3.communicationConfig.sms_configured = false;
              _this3.communicationConfig.loading = false;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
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
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              if (!(!_this4.initialData || Object.keys(_this4.initialData).length === 0)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return axios_default().get('/api/suppliers/next-code');
            case 1:
              response = _context2.v;
              if (response.data.success) {
                _this4.form.codeNumber = response.data.formatted_code;
              } else {
                console.error('Failed to load next code number:', response.data.message);
                // Fallback to default
                _this4.form.codeNumber = '000001';
              }
            case 2:
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error('Error loading next code number:', _t2);
              // Fallback to default
              _this4.form.codeNumber = '000001';
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3]]);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this5 = this;
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
              _this5.$toast.error("Error!", "Please select a valid image file");
            }
          } else {
            // For attachments, allow various document types
            var allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'image/jpeg', 'image/png', 'image/gif'];
            if (allowedTypes.includes(file.type)) {
              validFiles.push(file);
            } else {
              _this5.$toast.error("Error!", "Please select a valid file type");
            }
          }
        } else {
          _this5.$toast.error("Error!", "Please select a file with size less than 2 MB");
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
      var _this6 = this;
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
            _this6.$toast.error(_this6.$t("Error!"), _this6.$t("Please select a valid file type"));
          }
        } else {
          _this6.$toast.error(_this6.$t("Error!"), _this6.$t("Please select a file with size less than 2 MB"));
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

      // Chart of account validation removed to match ClientForm behavior

      console.log('=== SUPPLIER FORM VALIDATION RESULT:', isValid, '===');
      return isValid;
    },
    // Submit form
    submitForm: function submitForm() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var submitData;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this7.validateForm()) {
                _context3.n = 1;
                break;
              }
              // Provide clear feedback if validation fails
              if (_this7.$toast) {
                _this7.$toast.fire({
                  type: 'error',
                  title: _this7.$t('Please fix the highlighted errors and try again')
                });
              }
              return _context3.a(2);
            case 1:
              // Map form data to API format
              submitData = _objectSpread(_objectSpread({}, _this7.form.data()), {}, {
                // Map legacy fields for backward compatibility
                name: _this7.form.type === 'Individual' ? _this7.form.fullName : _this7.form.businessName,
                companyName: _this7.form.businessName,
                taxRegistrationNumber: _this7.form.taxCard,
                address: _this7.form.streetAddress1,
                // Include representatives data
                representatives: _this7.form.representatives && Array.isArray(_this7.form.representatives) ? _this7.form.representatives : [],
                // Ensure phone field is included
                phone: _this7.form.phone,
                phoneNumber: _this7.form.phoneNumber
              }); // Emit submit event with form data
              _this7.$emit('submit', submitData);
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
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
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var slug, response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              // Try to get slug from route params first, then from initialData
              slug = _this8.$route && _this8.$route.params && _this8.$route.params.slug || _this8.initialData && _this8.initialData.slug;
              console.log('Loading representatives for supplier:', slug);
              if (!(slug && slug !== 'new')) {
                _context4.n = 5;
                break;
              }
              _context4.p = 1;
              _context4.n = 2;
              return axios_default().get("/api/supplier/".concat(slug, "/representatives"));
            case 2:
              response = _context4.v;
              console.log('Representatives API response:', response.data);
              if (response.data.success) {
                _this8.form.representatives = response.data.data;
                console.log('Representatives loaded:', _this8.form.representatives);
              }
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('Error loading representatives:', _t3);
            case 4:
              _context4.n = 6;
              break;
            case 5:
              console.log('No slug or new supplier, skipping representatives load');
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    },
    // Handle when representatives are changed (added, edited, deleted)
    handleRepresentativesChanged: function handleRepresentativesChanged(representatives) {
      this.form.representatives = representatives;
    },
    // Load routing settings
    loadRoutingSettings: function loadRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              console.log('Loading routing settings...');
              // Get the specific suppliers_account routing setting
              _context5.n = 1;
              return _this9.$http.get('/api/account-routing-settings');
            case 1:
              response = _context5.v;
              console.log('Routing settings response:', response);
              if (response.data && response.data.success) {
                console.log('Routing settings data:', response.data.data);
                // Find the suppliers_account setting
                _this9.routingSetting = response.data.data.find(function (setting) {
                  return setting.setting_key === 'suppliers_account';
                });
                console.log('Found suppliers_account setting:', _this9.routingSetting);
                if (_this9.routingSetting) {
                  // Add routing type display name
                  _this9.routingSetting.routing_type_display = _this9.getRoutingTypeDisplayName(_this9.routingSetting.routing_type);
                  console.log('Routing setting with display name:', _this9.routingSetting);
                } else {
                  console.log('No suppliers_account setting found in:', response.data.data);
                  // Set a default routing setting if none found
                  _this9.routingSetting = {
                    routing_type: 'per_each',
                    routing_type_display: 'Specify Per Each',
                    main_account_id: null
                  };
                  console.log('Using default routing setting:', _this9.routingSetting);
                }
              } else {
                console.log('Routing settings response not successful:', response.data);
                // Set a default routing setting if API fails
                _this9.routingSetting = {
                  routing_type: 'per_each',
                  routing_type_display: 'Specify Per Each',
                  main_account_id: null
                };
                console.log('Using default routing setting due to API failure:', _this9.routingSetting);
              }
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t4 = _context5.v;
              console.error('Error loading routing settings:', _t4);
              // Set a default routing setting if error occurs
              _this9.routingSetting = {
                routing_type: 'per_each',
                routing_type_display: 'Specify Per Each',
                main_account_id: null
              };
              console.log('Using default routing setting due to error:', _this9.routingSetting);
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // Set default routing setting
    setDefaultRoutingSetting: function setDefaultRoutingSetting() {
      this.routingSetting = {
        routing_type: 'per_each',
        routing_type_display: 'Specify Per Each',
        main_account_id: null
      };
      console.log('Using default routing setting:', this.routingSetting);
    },
    // Get routing type display name
    getRoutingTypeDisplayName: function getRoutingTypeDisplayName(routingType) {
      var displays = {
        'automatic': 'Automatic',
        'per_each': 'Specify Per Each',
        'main_account_per_each': 'Specify Main Account Per Each',
        'cancel': 'Cancel'
      };
      return displays[routingType] || routingType;
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, fallbackResponse, _response, altResponse, _t5, _t6, _t7;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              console.log('Loading chart of accounts...');
              console.log('Current routing setting:', _this0.routingSetting);
              _this0.loadingChartOfAccounts = true;
              _this0.chartOfAccountsError = null;

              // If routing is automatic, we don't need to load all accounts
              if (!(_this0.routingSetting && _this0.routingSetting.routing_type === 'automatic')) {
                _context6.n = 1;
                break;
              }
              console.log('Routing type is automatic, not loading chart of accounts');
              _this0.chartOfAccounts = [];
              _this0.loadingChartOfAccounts = false;
              return _context6.a(2);
            case 1:
              if (!(_this0.routingSetting && _this0.routingSetting.main_account_id)) {
                _context6.n = 9;
                break;
              }
              console.log('Loading accounts from routing setup...');
              _context6.p = 2;
              _context6.n = 3;
              return _this0.$http.get("/api/account-routing-settings/".concat(_this0.routingSetting.setting_key, "/accounts"));
            case 3:
              response = _context6.v;
              console.log('Routing accounts response:', response);
              if (!(response.data && response.data.success)) {
                _context6.n = 4;
                break;
              }
              _this0.chartOfAccounts = response.data.accounts || [];
              console.log('Loaded accounts from routing setup:', _this0.chartOfAccounts.length);
              _context6.n = 5;
              break;
            case 4:
              throw new Error('Routing accounts response not successful');
            case 5:
              _context6.n = 8;
              break;
            case 6:
              _context6.p = 6;
              _t5 = _context6.v;
              console.log('Routing accounts failed, falling back to all accounts:', _t5);
              // Fallback to all accounts
              _context6.n = 7;
              return _this0.$http.get('/api/suppliers/chart-of-accounts');
            case 7:
              fallbackResponse = _context6.v;
              _this0.chartOfAccounts = fallbackResponse.data || [];
              console.log('Loaded fallback accounts:', _this0.chartOfAccounts.length);
            case 8:
              _context6.n = 11;
              break;
            case 9:
              console.log('No main account ID, loading all accounts as fallback');
              // Load all active accounts as fallback
              _context6.n = 10;
              return _this0.$http.get('/api/suppliers/chart-of-accounts');
            case 10:
              _response = _context6.v;
              _this0.chartOfAccounts = _response.data || [];
              console.log('Loaded all accounts as fallback:', _this0.chartOfAccounts.length);
            case 11:
              if (!(_this0.chartOfAccounts.length === 0)) {
                _context6.n = 15;
                break;
              }
              console.log('No accounts loaded, trying alternative endpoint...');
              _context6.p = 12;
              _context6.n = 13;
              return _this0.$http.get('/api/chart-of-accounts/dropdown');
            case 13:
              altResponse = _context6.v;
              _this0.chartOfAccounts = altResponse.data.data || altResponse.data || [];
              console.log('Loaded accounts from dropdown endpoint:', _this0.chartOfAccounts.length);
              _context6.n = 15;
              break;
            case 14:
              _context6.p = 14;
              _t6 = _context6.v;
              console.error('Alternative endpoint also failed:', _t6);
              // Set a minimal fallback to prevent empty dropdown
              _this0.chartOfAccounts = [{
                id: 'placeholder',
                name: 'No accounts available - Please configure chart of accounts',
                code: 'N/A',
                type: 'Error'
              }];
              _this0.chartOfAccountsError = 'No chart of accounts available. Please check your configuration.';
            case 15:
              _context6.n = 17;
              break;
            case 16:
              _context6.p = 16;
              _t7 = _context6.v;
              console.error('Error loading chart of accounts:', _t7);
              _this0.chartOfAccountsError = _t7.message || 'Failed to load chart of accounts';
              _this0.chartOfAccounts = [];
            case 17:
              _context6.p = 17;
              _this0.loadingChartOfAccounts = false;
              return _context6.f(17);
            case 18:
              return _context6.a(2);
          }
        }, _callee6, null, [[12, 14], [2, 6], [0, 16, 17, 18]]);
      }))();
    },
    // Search chart of accounts (for v-select search)
    searchChartOfAccounts: function searchChartOfAccounts(search, loading) {
      var _this1 = this;
      console.log('Searching for:', search);
      if (!search || search.length < 2) {
        console.log('Search too short, returning first 50 accounts');
        var result = this.chartOfAccounts.slice(0, 50);
        loading(false);
        return Promise.resolve(result);
      }
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var filtered, response, apiData, _filtered, _t8;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              // Filter locally first for better performance
              filtered = _this1.chartOfAccounts.filter(function (account) {
                return account.name.toLowerCase().includes(search.toLowerCase()) || account.code.toLowerCase().includes(search.toLowerCase());
              });
              console.log('Local filtered results:', filtered.length);

              // If we have enough results locally, return them
              if (!(filtered.length >= 10)) {
                _context7.n = 1;
                break;
              }
              console.log('Enough local results, returning filtered');
              return _context7.a(2, filtered.slice(0, 50));
            case 1:
              // Otherwise, search from API
              console.log('Searching from API...');
              _context7.n = 2;
              return _this1.$http.get('/api/chart-of-accounts/search', {
                params: {
                  term: search
                }
              });
            case 2:
              response = _context7.v;
              console.log('API search response:', response);
              if (!(response.data && (response.data.data || response.data))) {
                _context7.n = 3;
                break;
              }
              console.log('API returned data, returning results');
              apiData = response.data.data || response.data;
              return _context7.a(2, apiData.slice(0, 50));
            case 3:
              console.log('API returned no data, returning local filtered');
              return _context7.a(2, filtered.slice(0, 50));
            case 4:
              _context7.n = 6;
              break;
            case 5:
              _context7.p = 5;
              _t8 = _context7.v;
              console.error('Search error:', _t8);
              // Return local filtered results on error
              _filtered = _this1.chartOfAccounts.filter(function (account) {
                return account.name.toLowerCase().includes(search.toLowerCase()) || account.code.toLowerCase().includes(search.toLowerCase());
              });
              return _context7.a(2, _filtered.slice(0, 50));
            case 6:
              _context7.p = 6;
              loading(false);
              return _context7.f(6);
            case 7:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 5, 6, 7]]);
      }))();
    },
    // Create new chart of account
    createNewAccount: function createNewAccount() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var assetTypeResponse, typeId, assetType, parentId, codeResponse, accountCode, response, _newAccount$type, newAccount, errorMessage, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (!_this10.isCreatingAccount) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _this10.isCreatingAccount = true;
              _context8.p = 2;
              _context8.n = 3;
              return axios_default().get('/api/chart-of-account-types');
            case 3:
              assetTypeResponse = _context8.v;
              typeId = 1; // Default fallback
              if (assetTypeResponse.data && assetTypeResponse.data.data) {
                assetType = assetTypeResponse.data.data.find(function (type) {
                  return type.name && type.name.toLowerCase().includes('asset');
                });
                if (assetType) {
                  typeId = assetType.id;
                }
              }

              // Determine parent_id based on routing settings
              parentId = null;
              if (_this10.routingSetting && _this10.routingSetting.routing_type === 'main_account_per_each' && _this10.routingSetting.main_account_id) {
                parentId = _this10.routingSetting.main_account_id;
              }

              // Generate account code
              _context8.n = 4;
              return axios_default().post('/api/chart-of-accounts/generate-code', {
                parent_id: parentId
              });
            case 4:
              codeResponse = _context8.v;
              accountCode = codeResponse.data.code || '1000';
              _context8.n = 5;
              return axios_default().post('/api/chart-of-accounts', {
                name: _this10.form.type === 'Individual' ? _this10.form.fullName : _this10.form.businessName,
                code: accountCode,
                type_id: typeId,
                parent_id: parentId,
                order: 0,
                is_active: true
              });
            case 5:
              response = _context8.v;
              if (!(response.data && response.data.data)) {
                _context8.n = 6;
                break;
              }
              // Add to local chartOfAccounts array
              newAccount = response.data.data;
              _this10.chartOfAccounts.push({
                id: newAccount.id,
                name: newAccount.name,
                code: newAccount.code,
                type: ((_newAccount$type = newAccount.type) === null || _newAccount$type === void 0 ? void 0 : _newAccount$type.name) || 'Asset'
              });

              // Set as selected
              _this10.form.chartOfAccountId = newAccount.id;
              _this10.$toast.success("Success!", "New chart of account created successfully.");
              _context8.n = 7;
              break;
            case 6:
              throw new Error(response.data.message || "Failed to create new chart of account.");
            case 7:
              _context8.n = 9;
              break;
            case 8:
              _context8.p = 8;
              _t9 = _context8.v;
              console.error('Error creating chart of account:', _t9);
              errorMessage = "Failed to create new chart of account.";
              if (_t9.response && _t9.response.data) {
                if (_t9.response.data.message) {
                  errorMessage = _t9.response.data.message;
                } else if (_t9.response.data.error) {
                  errorMessage = _t9.response.data.error;
                }
              } else if (_t9.message) {
                errorMessage = _t9.message;
              }
              _this10.$toast.error("Error!", errorMessage);
            case 9:
              _context8.p = 9;
              _this10.isCreatingAccount = false;
              return _context8.f(9);
            case 10:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 8, 9, 10]]);
      }))();
    },
    // Auto-assign Chart of Account for supplier
    autoAssignSupplierChartOfAccount: function autoAssignSupplierChartOfAccount() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var supplierSlug, response, _t0;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (!(!_this11.form || _this11.isAutoAssigningSupplier)) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _this11.isAutoAssigningSupplier = true;
              _context9.p = 2;
              // Get the current supplier slug from the form or route
              supplierSlug = _this11.form.slug || _this11.$route && _this11.$route.params && _this11.$route.params.slug;
              if (!(!supplierSlug || supplierSlug === 'new')) {
                _context9.n = 3;
                break;
              }
              console.log('No supplier slug available for auto-assign');
              return _context9.a(2);
            case 3:
              _context9.n = 4;
              return _this11.$http.post("/api/suppliers/".concat(supplierSlug, "/auto-assign-chart-of-account"));
            case 4:
              response = _context9.v;
              if (response.data.success) {
                console.log('Auto-assign response:', response.data);

                // Update the form with new chart of account
                _this11.form.chartOfAccountId = response.data.chart_of_account_id;

                // Force Vue to re-render the component to update the UI
                _this11.$nextTick(function () {
                  _this11.$forceUpdate();
                });

                // Show success message
                _this11.$toast.fire({
                  type: "success",
                  title: _this11.$t("Chart of Account assigned successfully")
                });
              } else {
                _this11.$toast.fire({
                  type: "error",
                  title: _this11.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this11.$t("Please try again or assign manually")
                });
              }
              _context9.n = 6;
              break;
            case 5:
              _context9.p = 5;
              _t0 = _context9.v;
              console.error('Error auto-assigning chart of account:', _t0);
              _this11.$toast.fire({
                type: "error",
                title: _this11.$t("An error occurred while assigning Chart of Account")
              });
            case 6:
              _context9.p = 6;
              _this11.isAutoAssigningSupplier = false;
              return _context9.f(6);
            case 7:
              return _context9.a(2);
          }
        }, _callee9, null, [[2, 5, 6, 7]]);
      }))();
    }
  }
});
;// ./resources/js/components/SupplierForm.vue?vue&type=script&lang=js
 /* harmony default export */ const components_SupplierFormvue_type_script_lang_js = (SupplierFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=c1d1a994&prod&scoped=true&lang=css
var SupplierFormvue_type_style_index_0_id_c1d1a994_prod_scoped_true_lang_css = __webpack_require__(21572);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=c1d1a994&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(SupplierFormvue_type_style_index_0_id_c1d1a994_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_SupplierFormvue_type_style_index_0_id_c1d1a994_prod_scoped_true_lang_css = (SupplierFormvue_type_style_index_0_id_c1d1a994_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/SupplierForm.vue?vue&type=style&index=0&id=c1d1a994&prod&scoped=true&lang=css

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
  "c1d1a994",
  null
  
)

/* harmony default export */ const SupplierForm = (component.exports);

/***/ }),

/***/ 19340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=template&id=0701e83e&scoped=true
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
  }, [_vm._v(_vm._s(_vm.$t('Edit Supplier')))]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'suppliers.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
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
  })])], 1)])]), _vm._v(" "), _c('SupplierForm', {
    ref: "supplierForm",
    attrs: {
      "showCardBody": true,
      "initialData": _vm.supplierData
    },
    on: {
      "submit": _vm.saveSupplier
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n                " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])])])])], 1)])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/SupplierForm.vue + 5 modules
var SupplierForm = __webpack_require__(17359);
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
    SupplierForm: SupplierForm/* default */.A
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
  mounted: function mounted() {
    var _this2 = this;
    // Load temporary data after child form is mounted
    this.$nextTick(function () {
      _this2.loadTemporaryData();
    });
  },
  methods: {
    // Get supplier data
    getSupplier: function getSupplier() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, supplierData, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              if (_this3.$route.params.slug) {
                _context2.n = 1;
                break;
              }
              throw new Error("No supplier slug provided");
            case 1:
              console.log("Fetching supplier with slug:", _this3.$route.params.slug);
              _context2.n = 2;
              return _this3.$http.get("/api/suppliers/".concat(_this3.$route.params.slug));
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
              _this3.supplierData = _objectSpread(_objectSpread({}, supplierData), {}, {
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
                isSendSMS: supplierData.is_send_sms || false,
                // Chart of Account mapping
                chartOfAccountId: supplierData.chart_of_account_id || null
              });
              console.log("Transformed supplier data:", _this3.supplierData);
              _this3.loading = false;
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error("Error getting supplier:", _t2);
              _this3.loading = false;
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 4]]);
      }))();
    },
    // Submit form by calling SupplierForm's submitForm method
    submitForm: function submitForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.submitForm();
      }
    },
    // Save supplier - called by SupplierForm via @submit event
    saveSupplier: function saveSupplier(formData) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!_this4.isSubmitting) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _this4.isSubmitting = true;
              _context3.p = 2;
              _context3.n = 3;
              return _this4.$http.put("/api/suppliers/".concat(_this4.$route.params.slug), formData);
            case 3:
              response = _context3.v;
              if (!response.data.success) {
                _context3.n = 4;
                break;
              }
              toast.fire({
                type: "success",
                title: _this4.$t("Supplier updated successfully")
              });
              _this4.clearTemporaryData();
              _this4.$router.push({
                name: "suppliers.index"
              });
              _context3.n = 5;
              break;
            case 4:
              throw new Error(response.data.message || 'Failed to update supplier');
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              console.error("Error updating supplier:", _t3);
              toast.fire({
                type: "error",
                title: _this4.$t("Oops...something went wrong")
              });
            case 7:
              _context3.p = 7;
              _this4.isSubmitting = false;
              return _context3.f(7);
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 6, 7, 8]]);
      }))();
    },
    // Reset form
    resetForm: function resetForm() {
      this.$refs.supplierForm.resetForm();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
        var f = this.$refs.supplierForm.form;
        var tempData = {
          codeNumber: f.codeNumber,
          notes: f.notes,
          displayLanguage: f.displayLanguage,
          type: f.type,
          fullName: f.fullName,
          businessName: f.businessName,
          firstName: f.firstName,
          lastName: f.lastName,
          phone: f.phone,
          phoneNumber: f.phoneNumber,
          email: f.email,
          streetAddress1: f.streetAddress1,
          streetAddress2: f.streetAddress2,
          city: f.city,
          state: f.state,
          postalCode: f.postalCode,
          country: f.country,
          neighbourhood: f.neighbourhood,
          commercialRegister: f.commercialRegister,
          taxCard: f.taxCard,
          attachments: f.attachments,
          status: f.status,
          isSendEmail: f.isSendEmail,
          isSendSMS: f.isSendSMS,
          chartOfAccountId: f.chartOfAccountId,
          representatives: f.representatives,
          timestamp: new Date().toISOString()
        };
        localStorage.setItem('supplierEditTempData', JSON.stringify(tempData));
      }
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('supplierEditTempData');
      if (tempData && this.$refs.supplierForm && this.$refs.supplierForm.form) {
        try {
          var d = JSON.parse(tempData);
          var f = this.$refs.supplierForm.form;
          f.codeNumber = d.codeNumber || f.codeNumber;
          f.notes = d.notes || f.notes;
          f.displayLanguage = d.displayLanguage || f.displayLanguage;
          f.type = d.type || f.type;
          f.fullName = d.fullName || f.fullName;
          f.businessName = d.businessName || f.businessName;
          f.firstName = d.firstName || f.firstName;
          f.lastName = d.lastName || f.lastName;
          f.phone = d.phone || f.phone;
          f.phoneNumber = d.phoneNumber || f.phoneNumber;
          f.email = d.email || f.email;
          f.streetAddress1 = d.streetAddress1 || f.streetAddress1;
          f.streetAddress2 = d.streetAddress2 || f.streetAddress2;
          f.city = d.city || f.city;
          f.state = d.state || f.state;
          f.postalCode = d.postalCode || f.postalCode;
          f.country = d.country || f.country;
          f.neighbourhood = d.neighbourhood || f.neighbourhood;
          f.commercialRegister = d.commercialRegister || f.commercialRegister;
          f.taxCard = d.taxCard || f.taxCard;
          f.attachments = d.attachments || f.attachments;
          f.status = d.status !== undefined ? d.status : f.status;
          f.isSendEmail = d.isSendEmail !== undefined ? d.isSendEmail : f.isSendEmail;
          f.isSendSMS = d.isSendSMS !== undefined ? d.isSendSMS : f.isSendSMS;
          f.chartOfAccountId = d.chartOfAccountId || f.chartOfAccountId;
          f.representatives = d.representatives || f.representatives;
        } catch (e) {
          console.error('Error loading temporary data:', e);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('supplierEditTempData');
    }
  }
});
;// ./resources/js/pages/suppliers/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const suppliers_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=0701e83e&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_0701e83e_prod_scoped_true_lang_css = __webpack_require__(26427);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=0701e83e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_0701e83e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const suppliers_editvue_type_style_index_0_id_0701e83e_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_0701e83e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/suppliers/edit.vue?vue&type=style&index=0&id=0701e83e&prod&scoped=true&lang=css

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
  "0701e83e",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 21572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-c1d1a994]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:20px}.form-card .card-header[data-v-c1d1a994]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:22px 16px}.form-card .section-title[data-v-c1d1a994]{color:#fff;font-size:14px;font-weight:600;margin:0}.form-card .card-body[data-v-c1d1a994]{padding:16px}.form-control[data-v-c1d1a994]{background:#fff!important}input[readonly][data-v-c1d1a994]{background-color:#f8f9fa!important;border-color:#ced4da;color:#6c757d;cursor:not-allowed}.form-control[data-v-c1d1a994]:focus,select.form-control[data-v-c1d1a994]:focus,textarea.form-control[data-v-c1d1a994]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.radio-group[data-v-c1d1a994]{align-items:center;display:flex;gap:16px}.radio-group .radio-inline[data-v-c1d1a994]{align-items:center;display:inline-flex;gap:6px;margin:0}.v-select .vs__dropdown-toggle[data-v-c1d1a994]{border-color:#ced4da;border-radius:6px}.v-select .vs__dropdown-toggle.vs__open[data-v-c1d1a994],.v-select .vs__dropdown-toggle[data-v-c1d1a994]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.v-select .vs__dropdown-menu[data-v-c1d1a994],.v-select .vs__search[data-v-c1d1a994],.v-select .vs__selected[data-v-c1d1a994]{font-size:.95rem}.custom-file-input:focus~.custom-file-label[data-v-c1d1a994]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.custom-file-label[data-v-c1d1a994]{border-radius:6px}.file-upload-area[data-v-c1d1a994]{background:#f8fdfe;border:2px dashed #33a0d9;border-radius:12px;padding:20px;position:relative;text-align:center}.file-upload-area .file-input[data-v-c1d1a994]{cursor:pointer;height:100%;inset:0;opacity:0;position:absolute;width:100%}.file-upload-area .file-upload-content[data-v-c1d1a994]{color:#33a0d9}.selected-files .selected-file-item[data-v-c1d1a994]{align-items:center;background:#f5faff;border:1px solid #e3f3f7;border-radius:6px;display:inline-flex;margin-bottom:8px;margin-right:8px;padding:6px 10px}.d-flex.align-items-center span.ml-3[data-v-c1d1a994]{font-weight:500}.required[data-v-c1d1a994]{color:#dc3545}[dir=rtl] .form-card .card-header[data-v-c1d1a994]{border-radius:20px 20px 0 0}.custom-file-label[data-v-c1d1a994],[dir=rtl] .custom-file-label[data-v-c1d1a994]{text-align:left!important}.btn-primary[data-v-c1d1a994]{background:#33a0d9!important;border-color:#33a0d9!important}.btn-primary[data-v-c1d1a994]:hover{filter:brightness(.95)}.equal-height>[class*=\" col-\"][data-v-c1d1a994],.equal-height>[class^=col-][data-v-c1d1a994]{display:flex}.equal-height .form-card[data-v-c1d1a994]{display:flex;flex-direction:column;width:100%}.equal-height .form-card .card-body[data-v-c1d1a994]{flex:1 1 auto}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-0701e83e]{margin-bottom:15px}.footer-buttons[data-v-0701e83e]{display:flex;gap:10px}.footer-buttons .btn[data-v-0701e83e]{margin-right:10px}.footer-buttons .btn[data-v-0701e83e]:last-child{margin-right:0}.btn-group.c-w-100[data-v-0701e83e]{gap:10px}.card[data-v-0701e83e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-0701e83e]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-footer[data-v-0701e83e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.section-title[data-v-0701e83e]{border-bottom:2px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:1.5rem;padding-bottom:.5rem}.radio-group[data-v-0701e83e]{display:flex;gap:1rem;margin-top:.5rem}.radio-inline[data-v-0701e83e]{align-items:center;cursor:pointer;display:flex;margin-right:1rem}.radio-inline input[type=radio][data-v-0701e83e]{margin-right:.5rem}.required[data-v-0701e83e]{color:#dc3545}.form-group[data-v-0701e83e]{margin-bottom:1.5rem}.form-group label[data-v-0701e83e]{color:#495057;font-weight:500;margin-bottom:.5rem}.is-invalid[data-v-0701e83e]{border-color:#dc3545}.text-muted[data-v-0701e83e]{color:#6c757d!important}.btn[data-v-0701e83e]{border-radius:.375rem;font-weight:500}.btn-primary[data-v-0701e83e]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-0701e83e]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-0701e83e]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-0701e83e]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}@media (max-width:768px){.radio-group[data-v-0701e83e]{flex-direction:column;gap:.5rem}.col-md-3[data-v-0701e83e]{margin-bottom:1rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);