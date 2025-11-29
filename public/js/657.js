"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[657],{

/***/ 60657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/create.vue?vue&type=template&id=4f0f2e46&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
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
        name: 'employees.index'
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
      "type": "submit",
      "form": 'employeeCreateForm',
      "title": _vm.$t('Save')
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form",
      "id": "employeeCreateForm"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveEmployee.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "employeeName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Employee Name")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.employeeName,
      expression: "form.employeeName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('employeeName')
    },
    attrs: {
      "id": "employeeName",
      "type": "text",
      "name": "employeeName",
      "placeholder": _vm.$t('Enter an employee name')
    },
    domProps: {
      "value": _vm.form.employeeName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "employeeName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "employeeName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "department"
    }
  }, [_vm._v(_vm._s(_vm.$t("Department")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.items ? _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('department')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "department",
      "placeholder": _vm.$t('Department')
    },
    model: {
      value: _vm.form.department,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "department", $$v);
      },
      expression: "form.department"
    }
  }) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "department"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "designation"
    }
  }, [_vm._v(_vm._s(_vm.$t("Designation")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.designation,
      expression: "form.designation"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('designation')
    },
    attrs: {
      "id": "designation",
      "type": "text",
      "name": "designation",
      "placeholder": _vm.$t('Enter a designation')
    },
    domProps: {
      "value": _vm.form.designation
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "designation", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "designation"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('PhoneNumberInput', {
    attrs: {
      "label": _vm.$t('Contact Number'),
      "required": true,
      "default-country": 'SA'
    },
    model: {
      value: _vm.form.mobileNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "mobileNumber", $$v);
      },
      expression: "form.mobileNumber"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mobileNumber"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "salary"
    }
  }, [_vm._v(_vm._s(_vm.$t("Salary")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salary,
      expression: "form.salary"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('salary')
    },
    attrs: {
      "id": "salary",
      "type": "number",
      "name": "salary",
      "placeholder": _vm.$t('Enter a salary'),
      "min": "0"
    },
    domProps: {
      "value": _vm.form.salary
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "salary", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salary"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "commission"
    }
  }, [_vm._v(_vm._s(_vm.$t("Commission")) + "(%)\n                ")]), _vm._v(" "), _c('input', {
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
      "name": "commission",
      "placeholder": _vm.$t('Enter a commission'),
      "max": "100"
    },
    domProps: {
      "value": _vm.form.commission
    },
    on: {
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
      "for": "birthDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Birth Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.birthDate,
      expression: "form.birthDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('birthDate')
    },
    attrs: {
      "id": "birthDate",
      "type": "date",
      "name": "birthDate"
    },
    domProps: {
      "value": _vm.form.birthDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "birthDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "birthDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "gender"
    }
  }, [_vm._v(_vm._s(_vm.$t("Gender")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.gender,
      expression: "form.gender"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('gender')
    },
    attrs: {
      "name": "gender"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Select a gender")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Male"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Male")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Female"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Female")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Transgender"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Transgender")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Other"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Other")) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "gender"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "bloodGroup"
    }
  }, [_vm._v(_vm._s(_vm.$t("Blood Group")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bloodGroup,
      expression: "form.bloodGroup"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bloodGroup')
    },
    attrs: {
      "name": "bloodGroup"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "bloodGroup", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Select a blood group")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A+"
    }
  }, [_vm._v("A+")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A-"
    }
  }, [_vm._v("A-")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B+"
    }
  }, [_vm._v("B+")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B-"
    }
  }, [_vm._v("B-")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AB+"
    }
  }, [_vm._v("AB+")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AB-"
    }
  }, [_vm._v("AB-")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "O+"
    }
  }, [_vm._v("O+")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "O-"
    }
  }, [_vm._v("O-")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bloodGroup"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "religion"
    }
  }, [_vm._v(_vm._s(_vm.$t("Religion")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.religion,
      expression: "form.religion"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('religion')
    },
    attrs: {
      "name": "religion"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "religion", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Select a religion")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Islam"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Islam")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Hinduism"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Hinduism")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Buddhists"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Buddhists")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Christians"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Christians")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Animists"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Animists")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Other"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Other")) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "religion"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "branch_id"
    }
  }, [_vm._v(_vm._s(_vm.$t("Branch")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('branch_id')
    },
    attrs: {
      "options": _vm.branches,
      "reduce": function reduce(b) {
        return b.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select a branch'),
      "name": "branch_id"
    },
    model: {
      value: _vm.form.branch_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "branch_id", $$v);
      },
      expression: "form.branch_id"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branch_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "appointmentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Appointment Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.appointmentDate,
      expression: "form.appointmentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('appointmentDate')
    },
    attrs: {
      "id": "appointmentDate",
      "type": "date",
      "name": "appointmentDate"
    },
    domProps: {
      "value": _vm.form.appointmentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "appointmentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "appointmentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "joiningDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Join Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.joiningDate,
      expression: "form.joiningDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('joiningDate')
    },
    attrs: {
      "id": "joiningDate",
      "type": "date",
      "name": "joiningDate"
    },
    domProps: {
      "value": _vm.form.joiningDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "joiningDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "joiningDate"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "address"
    }
  }, [_vm._v(_vm._s(_vm.$t("Address")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.address,
      expression: "form.address"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
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
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Profile Picture")))]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t("Choose file")))])]), _vm._v(" "), _c('has-error', {
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
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.allowLogin,
      expression: "form.allowLogin"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "allowLogin"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.allowLogin) ? _vm._i(_vm.form.allowLogin, null) > -1 : _vm.form.allowLogin
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.form.allowLogin,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "allowLogin", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "allowLogin", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "allowLogin", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    staticStyle: {
      "padding": "0 20px"
    },
    attrs: {
      "for": "allowLogin"
    }
  }, [_vm._v(_vm._s(_vm.$t("Allow Employee Login")))])]), _vm._v(" "), _vm.form.allowLogin ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v(_vm._s(_vm.$t("Email")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v(_vm._s(_vm.$t("Password")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('password')
    },
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password",
      "placeholder": _vm.$t('Enter your password')
    },
    domProps: {
      "value": _vm.form.password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "role"
    }
  }, [_vm._v(_vm._s(_vm.$t("Role"))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.roles ? _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('role')
    },
    attrs: {
      "options": _vm.roles,
      "label": "name",
      "name": "role",
      "placeholder": _vm.$t('Select a role')
    },
    model: {
      value: _vm.form.role,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "role", $$v);
      },
      expression: "form.role"
    }
  }) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "role"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n                ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/PhoneNumberInput.vue + 5 modules
var PhoneNumberInput = __webpack_require__(24698);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Employee")
    };
  },
  components: {
    PhoneNumberInput: PhoneNumberInput/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Create Employee",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Employees",
        url: "employees.index"
      }, {
        name: "Create",
        url: ""
      }],
      url: null,
      form: new vform_es/* default */.Ay({
        employeeName: "",
        department: "",
        designation: "",
        salary: "",
        commission: "",
        mobileNumber: "",
        gender: "",
        birthDate: "",
        bloodGroup: "",
        religion: "",
        appointmentDate: "",
        joiningDate: "",
        address: "",
        status: 1,
        image: "",
        allowLogin: false,
        email: "",
        password: "",
        role: "",
        branch_id: null
      }),
      options: [],
      roles: "",
      branches: []
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items"])),
  created: function created() {
    this.getDepartments();
    this.getRoles();
    this.getBranches();
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  },
  methods: {
    getBranches: function getBranches() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var me, isSuperAdmin, _yield$_this$$axios$g, data, _yield$_this$$axios$g2, _data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              me = _this.$store.getters['auth/user'];
              console.log('Current user:', me, 'account_role:', me === null || me === void 0 ? void 0 : me.account_role);

              // For superadmin (account_role === 1), get all branches from /api/branches
              isSuperAdmin = me && Number(me.account_role) === 1;
              console.log('Is superadmin:', isSuperAdmin);
              if (!isSuperAdmin) {
                _context.next = 16;
                break;
              }
              console.log('Loading all branches for superadmin...');
              _context.next = 9;
              return _this.$axios.get('/api/branches?perPage=1000');
            case 9:
              _yield$_this$$axios$g = _context.sent;
              data = _yield$_this$$axios$g.data;
              console.log('Branches response:', data);
              _this.branches = Array.isArray(data === null || data === void 0 ? void 0 : data.data) ? data.data : [];
              console.log('Branches array:', _this.branches);
              _context.next = 28;
              break;
            case 16:
              if (!(me && me.id)) {
                _context.next = 26;
                break;
              }
              // For normal users, get their assigned branches
              console.log('Loading user branches for user:', me.id);
              _context.next = 20;
              return _this.$axios.get("/api/users/".concat(me.id, "/branches"));
            case 20:
              _yield$_this$$axios$g2 = _context.sent;
              _data = _yield$_this$$axios$g2.data;
              console.log('User branches response:', _data);
              _this.branches = Array.isArray(_data) ? _data : [];
              _context.next = 28;
              break;
            case 26:
              console.log('No user or user ID');
              _this.branches = [];
            case 28:
              _context.next = 34;
              break;
            case 30:
              _context.prev = 30;
              _context.t0 = _context["catch"](0);
              console.error('Error loading branches:', _context.t0);
              _this.branches = [];
            case 34:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 30]]);
      }))();
    },
    // get all departments
    getDepartments: function getDepartments() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch("operations/allData", {
                path: "/api/all-departments"
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get roles
    getRoles: function getRoles() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + "/api/all-roles");
            case 2:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this3.roles = data.data;
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this4 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this4.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save employee
    saveEmployee: function saveEmployee() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.form.post(window.location.origin + "/api/employees").then(function () {
                // Clear temporary data after successful save
                _this5.clearTemporaryData();
                toast.fire({
                  type: "success",
                  title: _this5.$t("Employee added successfully")
                });
                _this5.$router.push({
                  name: "employees.index"
                });
              })["catch"](function (error) {
                _this5.handleSubmitError(error);
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // handle form submission errors
    handleSubmitError: function handleSubmitError(error) {
      var _error$response,
        _error$response2,
        _this6 = this;
      if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
        var serverErrors = error.response.data.errors || {};
        var translatedErrors = {};
        Object.keys(serverErrors).forEach(function (field) {
          var fieldErrors = serverErrors[field] || [];
          translatedErrors[field] = fieldErrors.map(function (message) {
            return _this6.translateValidationMessage(message, field);
          });
        });
        this.form.errors.set(translatedErrors);
        toast.fire({
          type: 'error',
          title: this.$t('Please check your input and try again.')
        });
      } else {
        var _error$response3;
        var message = (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || this.$t('Please check your input and try again.');
        toast.fire({
          type: 'error',
          title: message
        });
      }
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for employee form fields
      var fieldLabelMap = {
        // Handle field names that might come from backend with spaces or different formats
        'employee name': this.$t('Employee Name'),
        'employee_name': this.$t('Employee Name'),
        'employeeName': this.$t('Employee Name'),
        'department': this.$t('Department'),
        'designation': this.$t('Designation'),
        'mobile number': this.$t('Contact Number'),
        'mobile_number': this.$t('Contact Number'),
        'mobileNumber': this.$t('Contact Number'),
        'contact number': this.$t('Contact Number'),
        'contact_number': this.$t('Contact Number'),
        'contactNumber': this.$t('Contact Number'),
        'phone number': this.$t('Phone'),
        'phone_number': this.$t('Phone'),
        'phone': this.$t('Phone'),
        'salary': this.$t('Salary'),
        'commission': this.$t('Commission'),
        'gender': this.$t('Gender'),
        'blood group': this.$t('Blood Group'),
        'blood_group': this.$t('Blood Group'),
        'bloodGroup': this.$t('Blood Group'),
        'religion': this.$t('Religion'),
        'birth date': this.$t('Birth Date'),
        'birth_date': this.$t('Birth Date'),
        'birthDate': this.$t('Birth Date'),
        'appointment date': this.$t('Appointment Date'),
        'appointment_date': this.$t('Appointment Date'),
        'appointmentDate': this.$t('Appointment Date'),
        'joining date': this.$t('Join Date'),
        'joining_date': this.$t('Join Date'),
        'joiningDate': this.$t('Join Date'),
        'address': this.$t('Address'),
        'status': this.$t('Status'),
        'profile picture': this.$t('Profile Picture'),
        'profile_picture': this.$t('Profile Picture'),
        'image': this.$t('Profile Picture'),
        'email': this.$t('Email'),
        'password': this.$t('Password'),
        'role': this.$t('Role'),
        'note': this.$t('Note'),
        'branch': this.$t('Branch'),
        'branch_id': this.$t('Branch'),
        'branch id': this.$t('Branch'),
        'branchId': this.$t('Branch')
      };
      var fieldLabel = fieldLabelMap[field] || field;

      // Handle mixed language messages from backend (Arabic + English)
      // Pattern: "حقل [field] مطلوب" -> "Field is required"
      var mixedLanguagePatterns = [
      // Arabic "حقل" + English field + Arabic "مطلوب"
      {
        re: /حقل\s+([^م]+?)\s+مطلوب/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "".concat(fieldTranslation, " is required");
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "".concat(fieldTranslation, " \u0645\u0637\u0644\u0648\u0628");
        }
      },
      // Arabic "يرجى اختيار" + English field
      {
        re: /يرجى\s+اختيار\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "Please select ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(fieldTranslation);
        }
      },
      // Arabic "يرجى إدخال" + English field
      {
        re: /يرجى\s+إدخال\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "Please enter ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || cleanFieldName;
          return "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ".concat(fieldTranslation);
        }
      }];

      // Check mixed language patterns first
      for (var _i = 0, _mixedLanguagePattern = mixedLanguagePatterns; _i < _mixedLanguagePattern.length; _i++) {
        var _mixedLanguagePattern2 = _mixedLanguagePattern[_i],
          re = _mixedLanguagePattern2.re,
          en = _mixedLanguagePattern2.en,
          ar = _mixedLanguagePattern2.ar;
        var match = message.match(re);
        if (match) {
          var text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en).apply(void 0, _toConsumableArray(match)) : isArabic ? ar : en;
          return text;
        }
      }

      // Additional pattern for "حقل employee name مطلوب" format
      if (message.includes('حقل') && message.includes('مطلوب')) {
        var fieldMatch = message.match(/حقل\s+([^م]+?)\s+مطلوب/i);
        if (fieldMatch) {
          var fieldName = fieldMatch[1].trim();
          // Try different field name formats
          var fieldTranslation = fieldLabelMap[fieldName] || fieldLabelMap[fieldName.toLowerCase()] || fieldLabelMap[fieldName.replace(/\s+/g, '')] || fieldLabelMap[fieldName.replace(/\s+/g, '_')] || fieldName;
          return isArabic ? "".concat(fieldTranslation, " \u0645\u0637\u0644\u0648\u0628") : "".concat(fieldTranslation, " is required");
        }
      }

      // Handle "يرجى اختيار" patterns
      if (message.includes('يرجى اختيار')) {
        var _fieldMatch = message.match(/يرجى\s+اختيار\s+([^.]+)/i);
        if (_fieldMatch) {
          var _fieldName = _fieldMatch[1].trim();
          var _fieldTranslation = fieldLabelMap[_fieldName] || fieldLabelMap[_fieldName.toLowerCase()] || fieldLabelMap[_fieldName.replace(/\s+/g, '')] || fieldLabelMap[_fieldName.replace(/\s+/g, '_')] || _fieldName;
          return isArabic ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(_fieldTranslation) : "Please select ".concat(_fieldTranslation);
        }
      }

      // Handle "يرجى إدخال" patterns
      if (message.includes('يرجى إدخال')) {
        var _fieldMatch2 = message.match(/يرجى\s+إدخال\s+([^.]+)/i);
        if (_fieldMatch2) {
          var _fieldName2 = _fieldMatch2[1].trim();
          var _fieldTranslation2 = fieldLabelMap[_fieldName2] || fieldLabelMap[_fieldName2.toLowerCase()] || fieldLabelMap[_fieldName2.replace(/\s+/g, '')] || fieldLabelMap[_fieldName2.replace(/\s+/g, '_')] || _fieldName2;
          return isArabic ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ".concat(_fieldTranslation2) : "Please enter ".concat(_fieldTranslation2);
        }
      }

      // Common Laravel validation patterns with localized messages
      var patterns = [
      // Required field patterns
      {
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Please\s+select\s+an?\s+.+?\.?/i,
        en: "Please select",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /Please\s+enter\s+a\s+.+?\.?/i,
        en: "Please enter",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644"
      }, {
        re: /Please\s+provide\s+a\s+.+?\.?/i,
        en: "Please provide",
        ar: "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645"
      },
      // Selection and choice patterns
      {
        re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
        en: "The selected value is invalid",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i,
        en: "The selected value does not exist",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"
      }, {
        re: /Please\s+choose\s+a\s+.+?\.?/i,
        en: "Please choose",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /You\s+must\s+select\s+a\s+.+?\.?/i,
        en: "You must select",
        ar: "\u064A\u062C\u0628 \u0627\u062E\u062A\u064A\u0627\u0631"
      },
      // Data type patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
        en: "Must be a number",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
        en: "Must be an integer",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i,
        en: "Must be a string",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0646\u0635\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i,
        en: "Must be an array",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i,
        en: "Must be true or false",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u062D\u064A\u062D \u0623\u0648 \u062E\u0637\u0623"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i,
        en: "Must be a valid email",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i,
        en: "Must be a valid URL",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0627\u0628\u0637 \u0635\u062D\u064A\u062D"
      },
      // Numeric validation patterns
      {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max);
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be exactly ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0627\u0644\u0636\u0628\u0637 ".concat(n);
        }
      },
      // String length patterns
      {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max, " characters");
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max, " \u062D\u0631\u0641\u0627\u064B");
        }
      },
      // Date validation patterns
      {
        re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i,
        en: "Is not a valid date",
        ar: "\u0644\u064A\u0633 \u062A\u0627\u0631\u064A\u062E\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be after or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be before or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i,
        en: "Must be after the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i,
        en: "Must be before the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i,
        en: "Must be a date after or equal to today",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u064A\u0648\u0645"
      },
      // Format validation patterns
      {
        re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
        en: "Invalid format",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i,
        en: "Must match the required pattern",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      },
      // Uniqueness patterns
      {
        re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
        en: "This value has already been taken",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /The\s+.+?\s+already\s+exists\.?/i,
        en: "Already exists",
        ar: "\u0645\u0648\u062C\u0648\u062F \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i,
        en: "This is already in use",
        ar: "\u0647\u0630\u0627 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644"
      },
      // File upload patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i,
        en: "Must be a file",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0644\u0641\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i,
        en: "Must be an image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i,
        en: "Must be a valid image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0635\u062D\u064A\u062D\u0629"
      }, {
        re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i,
        en: "File is too large",
        ar: "\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B"
      }, {
        re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i,
        en: function en(_, n) {
          return "File size must not exceed ".concat(n, " KB");
        },
        ar: function ar(_, n) {
          return "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A");
        }
      },
      // Confirmation patterns
      {
        re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i,
        en: "Confirmation does not match",
        ar: "\u0627\u0644\u062A\u0623\u0643\u064A\u062F \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
      }, {
        re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i,
        en: "Must match",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0637\u0627\u0628\u0642\u0627"
      },
      // Custom validation patterns for employee form
      {
        re: /Employee\s+name\s+is\s+required\.?/i,
        en: "Employee name is required",
        ar: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Department\s+is\s+required\.?/i,
        en: "Department is required",
        ar: "\u0627\u0644\u0642\u0633\u0645 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Designation\s+is\s+required\.?/i,
        en: "Designation is required",
        ar: "\u0627\u0644\u0645\u0646\u0635\u0628 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Salary\s+is\s+required\.?/i,
        en: "Salary is required",
        ar: "\u0627\u0644\u0631\u0627\u062A\u0628 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Email\s+is\s+required\.?/i,
        en: "Email is required",
        ar: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Password\s+is\s+required\.?/i,
        en: "Password is required",
        ar: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629"
      }, {
        re: /Role\s+is\s+required\.?/i,
        en: "Role is required",
        ar: "\u0627\u0644\u062F\u0648\u0631 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Branch\s+is\s+required\.?/i,
        en: "Branch is required",
        ar: "\u0627\u0644\u0641\u0631\u0639 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Please\s+select\s+a\s+department\.?/i,
        en: "Please select a department",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0642\u0633\u0645"
      }, {
        re: /Please\s+select\s+a\s+branch\.?/i,
        en: "Please select a branch",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0641\u0631\u0639"
      }, {
        re: /Please\s+select\s+a\s+role\.?/i,
        en: "Please select a role",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u062F\u0648\u0631"
      }, {
        re: /Mobile\s+number\s+is\s+required\.?/i,
        en: "Mobile number is required",
        ar: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Contact\s+number\s+is\s+required\.?/i,
        en: "Contact number is required",
        ar: "\u0631\u0642\u0645 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Phone\s+number\s+is\s+required\.?/i,
        en: "Phone number is required",
        ar: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Address\s+is\s+required\.?/i,
        en: "Address is required",
        ar: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Gender\s+is\s+required\.?/i,
        en: "Gender is required",
        ar: "\u0627\u0644\u062C\u0646\u0633 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Blood\s+group\s+is\s+required\.?/i,
        en: "Blood group is required",
        ar: "\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645 \u0645\u0637\u0644\u0648\u0628\u0629"
      }, {
        re: /Religion\s+is\s+required\.?/i,
        en: "Religion is required",
        ar: "\u0627\u0644\u062F\u064A\u0646 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Appointment\s+date\s+is\s+required\.?/i,
        en: "Appointment date is required",
        ar: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0639\u064A\u064A\u0646 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Joining\s+date\s+is\s+required\.?/i,
        en: "Joining date is required",
        ar: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Profile\s+picture\s+is\s+required\.?/i,
        en: "Profile picture is required",
        ar: "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A \u0645\u0637\u0644\u0648\u0628\u0629"
      },
      // Generic fallback patterns
      {
        re: /This\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /This\s+field\s+must\s+be\s+filled\.?/i,
        en: "This field must be filled",
        ar: "\u064A\u062C\u0628 \u0645\u0644\u0621 \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644"
      }, {
        re: /This\s+value\s+is\s+invalid\.?/i,
        en: "This value is invalid",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /Invalid\s+input\.?/i,
        en: "Invalid input",
        ar: "\u0625\u062F\u062E\u0627\u0644 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /Please\s+check\s+your\s+input\.?/i,
        en: "Please check your input",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A"
      }];
      for (var _i2 = 0, _patterns = patterns; _i2 < _patterns.length; _i2++) {
        var _patterns$_i = _patterns[_i2],
          _re = _patterns$_i.re,
          _en = _patterns$_i.en,
          _ar = _patterns$_i.ar;
        var _match = message.match(_re);
        if (_match) {
          var _text = typeof (isArabic ? _ar : _en) === 'function' ? (isArabic ? _ar : _en).apply(void 0, _toConsumableArray(_match)) : isArabic ? _ar : _en;
          return "".concat(fieldLabel, ": ").concat(_text);
        }
      }

      // Fallback: return original message if nothing matched
      return message;
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        employeeName: this.form.employeeName,
        department: this.form.department,
        designation: this.form.designation,
        employeeId: this.form.employeeId,
        phone: this.form.phone,
        email: this.form.email,
        address: this.form.address,
        salary: this.form.salary,
        joiningDate: this.form.joiningDate,
        status: this.form.status,
        note: this.form.note,
        role: this.form.role,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('employeeTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('employeeTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.employeeName = data.employeeName || '';
          this.form.department = data.department || null;
          this.form.designation = data.designation || '';
          this.form.employeeId = data.employeeId || '';
          this.form.phone = data.phone || '';
          this.form.email = data.email || '';
          this.form.address = data.address || '';
          this.form.salary = data.salary || '';
          this.form.joiningDate = data.joiningDate || '';
          this.form.status = data.status !== undefined ? data.status : 1;
          this.form.note = data.note || '';
          this.form.role = data.role || null;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('employeeTempData');
    }
  }
});
;// ./resources/js/pages/employees/create.vue?vue&type=script&lang=js
 /* harmony default export */ const employees_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/create.vue?vue&type=style&index=0&id=4f0f2e46&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_4f0f2e46_prod_scoped_true_lang_css = __webpack_require__(74192);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/create.vue?vue&type=style&index=0&id=4f0f2e46&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_4f0f2e46_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const employees_createvue_type_style_index_0_id_4f0f2e46_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_4f0f2e46_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/employees/create.vue?vue&type=style&index=0&id=4f0f2e46&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/employees/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  employees_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4f0f2e46",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 74192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-4f0f2e46]{gap:10px}.header-buttons[data-v-4f0f2e46]{margin-bottom:15px}.footer-buttons[data-v-4f0f2e46]{display:flex;gap:10px}.footer-buttons .btn[data-v-4f0f2e46]{margin-right:10px}.footer-buttons .btn[data-v-4f0f2e46]:last-child{margin-right:0}.card[data-v-4f0f2e46]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-4f0f2e46]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-4f0f2e46]{padding:1.25rem}.card-footer[data-v-4f0f2e46]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-4f0f2e46]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-4f0f2e46]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-4f0f2e46]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.required[data-v-4f0f2e46]{color:#dc3545;font-weight:700}.btn-primary[data-v-4f0f2e46]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-4f0f2e46]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-4f0f2e46]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-4f0f2e46]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.is-invalid[data-v-4f0f2e46]{border-color:#dc3545!important}textarea.form-control[data-v-4f0f2e46]{min-height:100px;resize:vertical}.v-select[data-v-4f0f2e46]{background:#fff!important}.v-select .vs__dropdown-toggle[data-v-4f0f2e46]{background:#fff!important;border:1px solid #e5e7eb!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-4f0f2e46]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-4f0f2e46]{border-color:#dc3545!important}.custom-file-input[data-v-4f0f2e46],.custom-file-label[data-v-4f0f2e46]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px;padding:10px 16px}.custom-file-label[data-v-4f0f2e46]{color:#6b7280;font-size:14px}.custom-file-input:focus~.custom-file-label[data-v-4f0f2e46]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.bg-light[data-v-4f0f2e46]{background-color:#f8f9fa!important;border:1px solid #e5e7eb;border-radius:10px;padding:10px}.form-check-input[data-v-4f0f2e46]{margin-top:.3rem}.form-check-label[data-v-4f0f2e46]{color:#374151;font-weight:500;margin-left:.5rem}.row[data-v-4f0f2e46]{margin-bottom:1rem}@media (max-width:768px){.card-footer[data-v-4f0f2e46]{flex-direction:column;gap:10px}.card-footer .btn[data-v-4f0f2e46]{margin-right:0!important;width:100%}.card-footer div[data-v-4f0f2e46]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);