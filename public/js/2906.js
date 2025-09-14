"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2906],{

/***/ 44178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-pills .nav-item[data-v-ef8ba17e]{background:#ddd;border-radius:.25rem;margin:2px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=template&id=ef8ba17e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row no-print mb-2"
  }, [_c('div', {
    staticClass: "w-100 text-right float-right"
  }, [_vm.allData ? _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link active",
    attrs: {
      "href": "#details",
      "data-toggle": "tab"
    },
    on: {
      "click": _vm.loadInitialData
    }
  }, [_c('i', {
    staticClass: "fa fa-info"
  }), _vm._v("\n                " + _vm._s(_vm.$t("Details")))])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#activity-log",
      "data-toggle": "tab"
    },
    on: {
      "click": _vm.getActivity
    }
  }, [_c('i', {
    staticClass: "nav-icon fa fa-bell",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Activity log")))])])])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "details"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 m-auto",
    "class": !_vm.$can('payroll-list') && !_vm.$can('increment-list') ? 'col-lg-6' : 'col-lg-3'
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body box-profile"
  }, [_c('div', {
    staticClass: "text-center mb-2"
  }, [_vm.allData.image ? _c('a', {
    attrs: {
      "href": "#",
      "id": "show-modal"
    },
    on: {
      "click": function click($event) {
        return _vm.previewModal(_vm.allData.image);
      }
    }
  }, [_c('img', {
    staticClass: "profile-user-img img-fluid img-circle",
    attrs: {
      "src": _vm.allData.image,
      "loading": "lazy"
    }
  })]) : _c('div', {
    staticClass: "bg-secondary no-preview-lg"
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("No Preview")))])])]), _vm._v(" "), _c('h3', {
    staticClass: "profile-username text-center"
  }, [_vm._v(_vm._s(_vm.allData.name))]), _vm._v(" "), _c('ul', {
    staticClass: "list-group list-group-unbordered mb-3"
  }, [_c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Emp ID")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("withPrefix")(_vm.allData.empID, _vm.employeePrefix)))])]), _vm._v(" "), _vm.allData.department ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Department")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.department.name))])]) : _vm._e(), _vm._v(" "), _vm.allData.designation ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Designation")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.designation))])]) : _vm._e(), _vm._v(" "), _vm.allData.mobileNumber ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Contact Number")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.mobileNumber))])]) : _vm._e(), _vm._v(" "), _vm.allData.email ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.email))])]) : _vm._e(), _vm._v(" "), _vm.allData.salary ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Basic Salary")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.allData.salary)))])]) : _vm._e(), _vm._v(" "), _vm.allData.totalSalary ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Current Salary")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.allData.totalSalary)))])]) : _vm._e(), _vm._v(" "), _vm.allData.commission ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Commission")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.commission) + "%")])]) : _vm._e(), _vm._v(" "), _vm.allData.gender ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Gender")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.gender))])]) : _vm._e(), _vm._v(" "), _vm.allData.bloodGroup ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Blood Group")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.bloodGroup))])]) : _vm._e(), _vm._v(" "), _vm.allData.religion ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Religion")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.religion))])]) : _vm._e(), _vm._v(" "), _vm.allData.birthDate ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Birth Date")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("moment")(_vm.allData.birthDate, "Do MMM, YYYY")))])]) : _vm._e(), _vm._v(" "), _vm.allData.joiningDate ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Join Date")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("moment")(_vm.allData.joiningDate, "Do MMM, YYYY")))])]) : _vm._e(), _vm._v(" "), _vm.allData.appointmentDate ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Appointment Date")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm._f("moment")(_vm.allData.appointmentDate, "Do MMM, YYYY")))])]) : _vm._e(), _vm._v(" "), _vm.allData.address ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Address")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.address))])]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Allow Employee Login")))]), _vm._v(" "), _vm.allData.user ? _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.$t("Yes")))]) : _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.$t("No")))])]), _vm._v(" "), _vm.allData.user && _vm.allData.user.role ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Role")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(_vm.allData.user.role.name))])]) : _vm._e()]), _vm._v(" "), _vm.allData.status === 1 ? _c('span', {
    staticClass: "btn-block btn bg-success"
  }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
    staticClass: "badge bg-danger"
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])])])]), _vm._v(" "), _vm.$can('payroll-list') || _vm.$can('increment-list') ? _c('div', {
    staticClass: "col-md-12 col-lg-9"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header p-2"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_vm.$can('payroll-list') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link active",
    attrs: {
      "href": "#payroll",
      "data-toggle": "tab"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payroll")))])]) : _vm._e(), _vm._v(" "), _vm.$can('increment-list') ? _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#increment",
      "data-toggle": "tab"
    },
    on: {
      "click": _vm.getEmployeeSalIncrements
    }
  }, [_vm._v(_vm._s(_vm.$t("Increment History")))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('router-link', {
    staticClass: "btn btn-dark float-right",
    attrs: {
      "to": {
        name: 'employees.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Back")) + "\n                  ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_vm.$can('payroll-list') ? _c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "payroll"
    }
  }, [_c('div', [_c('div', {
    staticClass: "card-body p-0 position-relative"
  }, [_c('div', {
    staticClass: "col-md-12 large-serach-box"
  }, [_c('search', {
    on: {
      "reset-pagination": _vm.resetPagination,
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Salary Month")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Salary Date")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total Paid")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('payroll-edit') || _vm.$can('payroll-view') || _vm.$can('payroll-delete') ? _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("Action")) + "\n                              ")]) : _vm._e()])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                                  " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salaryMonth))]), _vm._v(" "), _c('td', [data.salaryDate ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(data.salaryDate, "Do MMM, YYYY")))]) : _vm._e()]), _vm._v(" "), _c('td', [data.transaction && data.transaction.cashbook_account ? _c('span', [_vm._v(_vm._s(data.transaction.cashbook_account.account_number))]) : _vm._e()]), _vm._v(" "), _c('td', [data.transaction ? _c('span', [_vm._v(_vm._s(_vm._f("withCurrency")(data.transaction.amount)))]) : _vm._e()]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('payroll-edit') || _vm.$can('payroll-view') || _vm.$can('payroll-delete') ? _c('td', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "btn-group"
    }, [_vm.$can('payroll-view') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('View'),
        expression: "$t('View')"
      }],
      staticClass: "btn btn-primary btn-sm",
      attrs: {
        "to": {
          name: 'payroll.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('payroll-edit') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit'),
        expression: "$t('Edit')"
      }],
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "to": {
          name: 'payroll.edit',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('payroll-delete') ? _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "$t('Delete')"
      }],
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.deletePayroll(data.slug);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })]) : _vm._e()], 1)]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "8"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1), _vm._v(" "), _vm.pagination && _vm.pagination.total > 0 ? _c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.updatePerPager('payroll');
      }]
    }
  }, _vm._l(_vm.options, function (option) {
    return _c('option', {
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n                              " + _vm._s(option.text) + "\n                            ")]);
  }), 0)])]), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.$can('increment-list') ? _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "increment"
    }
  }, [_c('div', [_c('div', {
    staticClass: "card-body p-0 position-relative"
  }, [_c('div', {
    staticClass: "col-md-12 large-serach-box"
  }, [_c('search', {
    on: {
      "reset-pagination": _vm.resetSalIncrePagination,
      "reload": _vm.salIncreReload
    },
    model: {
      value: _vm.salIncreQuery,
      callback: function callback($$v) {
        _vm.salIncreQuery = $$v;
      },
      expression: "salIncreQuery"
    }
  })], 1), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.salIncreLoading,
      expression: "salIncreLoading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Reason")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Basic Salary")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Amount")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Present Salary")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Date")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('increment-edit') || _vm.$can('increment-view') || _vm.$can('increment-delete') ? _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("Action")) + "\n                              ")]) : _vm._e()])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.allIncrements, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.allIncrements.length,
        expression: "allIncrements.length"
      }],
      key: i
    }, [_c('td', [_vm.salIncrePagination && _vm.salIncrePagination.current_page > 1 ? _c('span', [_vm._v("\n                                  " + _vm._s(_vm.salIncrePagination.per_page * (_vm.salIncrePagination.current_page - 1) + (i + 1)) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'increments.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_vm._v("\n                                  " + _vm._s(data.reason) + "\n                                ")])], 1), _vm._v(" "), _c('td', [data.employee ? _c('span', [_vm._v(_vm._s(_vm._f("withCurrency")(data.employee.salary)) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v("\n                                " + _vm._s(_vm._f("withCurrency")(data.incrementAmount)) + "\n                              ")]), _vm._v(" "), _c('td', [data.employee ? _c('span', [_vm._v("\n                                  " + _vm._s(_vm._f("withCurrency")(data.employee.salary + data.incrementAmount)) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c('td', [data.incrementDate ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(data.incrementDate, "Do MMM, YYYY")))]) : _vm._e()]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('increment-edit') || _vm.$can('increment-view') || _vm.$can('increment-delete') ? _c('td', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "btn-group"
    }, [_vm.$can('increment-view') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('View'),
        expression: "$t('View')"
      }],
      staticClass: "btn btn-primary btn-sm",
      attrs: {
        "to": {
          name: 'increments.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('increment-edit') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit'),
        expression: "$t('Edit')"
      }],
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "to": {
          name: 'increments.edit',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('increment-delete') ? _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "$t('Delete')"
      }],
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.deleteIncrement(data.slug);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })]) : _vm._e()], 1)]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.allIncrements.length,
      expression: "!loading && !allIncrements.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "8"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1), _vm._v(" "), _vm.salIncrePagination && _vm.salIncrePagination.total > 0 ? _c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.updatePerPager('increment-history');
      }]
    }
  }, _vm._l(_vm.options, function (option) {
    return _c('option', {
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n                              " + _vm._s(option.text) + "\n                            ")]);
  }), 0)])]), _vm._v(" "), _vm.salIncrePagination && _vm.salIncrePagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.salIncrePagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.salIncrePaginate
    }
  }) : _vm._e()], 1) : _vm._e()])]) : _vm._e()])])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "activity-log"
    }
  }, [_c('div', {
    staticClass: "card custom-card w-100 mt-5 no-print"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Activity log")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: 'Refresh',
      expression: "'Refresh'"
    }],
    staticClass: "btn btn-success",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshActivityTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print Table'),
      expression: "$t('Print Table')"
    }],
    staticClass: "btn btn-info",
    on: {
      "click": _vm.printActivityLog
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })])])])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activityLoading,
      expression: "activityLoading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6 col-xl-4 mb-2"
  }, [_c('search', {
    on: {
      "reset-pagination": function resetPagination($event) {
        return _vm.resetActivityPagination();
      },
      "reload": _vm.activityReload
    },
    model: {
      value: _vm.activitySearchQuery,
      callback: function callback($$v) {
        _vm.activitySearchQuery = $$v;
      },
      expression: "activitySearchQuery"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_vm._l(_vm.allActivityLog, function (data, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.allActivityLog.length > 0,
        expression: "allActivityLog.length > 0"
      }],
      key: i
    }, [_c('div', {
      staticClass: "card mb-0 border border-gray"
    }, [_c('div', {
      staticClass: "card-body py-1"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-1 d-flex justify-content-center align-items-center"
    }, [data.event == 'Update' ? _c('i', {
      staticClass: "fa fa-magic",
      attrs: {
        "aria-hidden": "true"
      }
    }) : _vm._e(), _vm._v(" "), data.event == 'Create' ? _c('i', {
      staticClass: "fa fa-plus-circle",
      attrs: {
        "aria-hidden": "true"
      }
    }) : _vm._e(), _vm._v(" "), data.event == 'Delete' ? _c('i', {
      staticClass: "fa fa-trash",
      attrs: {
        "aria-hidden": "true"
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-11"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('p', {
      staticClass: "text-bold mb-0"
    }, [_vm._v(_vm._s(data.causer_name))])]), _vm._v(" "), _c('div', {
      staticClass: "col-12"
    }, [_c('p', {
      staticClass: "mb-0"
    }, [_vm._v(_vm._s(data.description))])]), _vm._v(" "), _c('div', {
      staticClass: "col-12"
    }, [_c('p', {
      staticClass: "mb-0"
    }, [_vm._v(_vm._s(data.performedAt))])])])])])])])]);
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.activityLoading && !_vm.allActivityLog.length,
      expression: "!activityLoading && !allActivityLog.length"
    }],
    staticClass: "text-center"
  }, [_c('EmptyTable')], 1)], 2)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.updateActivityPerPager]
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])])])]), _vm._v(" "), _vm.allActivityLogPagination && _vm.allActivityLogPagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.allActivityLog ? _vm.allActivityLogPagination : {
        current_page: 1
      },
      "offset": 5
    },
    on: {
      "paginate": _vm.activityPaginate
    }
  }) : _vm._e()], 1)])], 1)])]), _vm._v(" "), _vm.showModal ? _c('Modal', {
    on: {
      "close": function close($event) {
        return _vm.previewModal();
      }
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Attached Image Preview")))]), _vm._v(" "), _c('div', {
    staticClass: "w-100",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('img', {
    staticClass: "rounded img-fluid",
    attrs: {
      "src": _vm.allData.image,
      "loading": "lazy"
    }
  })])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=script&lang=js
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


/* harmony default export */ const showvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Employee Details")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Employee Details",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Employees",
        url: "employees.index"
      }, {
        name: "Details",
        url: ""
      }],
      allIncrements: "",
      salIncreLoading: false,
      salIncrePagination: "",
      url: null,
      showModal: false,
      allData: "",
      query: "",
      salIncreQuery: "",
      employeePrefix: "",
      activitySearchQuery: "",
      allActivityLog: "",
      allActivityLogPagination: "",
      activityLoading: false,
      perPage: 10,
      options: [{
        value: "10",
        text: "10"
      }, {
        value: "25",
        text: "25"
      }, {
        value: "50",
        text: "50"
      }, {
        value: "100",
        text: "100"
      }]
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo"])),
  watch: {
    // watch invoice search data
    query: function query(newQ, oldQ) {
      if (newQ === "") {
        this.getEmployeePayroll();
      } else {
        this.searchEmployeePayroll();
      }
    },
    // watch salary increment search data
    salIncreQuery: function salIncreQuery(newQ, oldQ) {
      if (newQ === "") {
        this.getEmployeeSalIncrements();
      } else {
        this.searchEmployeeSalIncrements();
      }
    },
    // watch activitySearchQuery data
    activitySearchQuery: function activitySearchQuery(newQ, oldQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchActivity();
      }
    }
  },
  created: function created() {
    var _this = this;
    this.getEmployee();
    this.getEmployeePayroll();
    this.employeePrefix = this.appInfo.employeePrefix;
    Fire.$on("AfterDelete", function () {
      _this.getEmployeePayroll();
      _this.getEmployeeSalIncrements();
    });
  },
  methods: {
    loadInitialData: function loadInitialData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this2.getEmployee();
              _this2.getEmployeePayroll();
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get the employee
    getEmployee: function getEmployee() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/employees/" + _this3.$route.params.slug);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.allData = data.data;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // update per page count
    updatePerPager: function updatePerPager(tabName) {
      this.pagination.current_page = 1;
      this.salIncrePagination.hasOwnProperty("current_page") ? this.salIncrePagination.current_page = 1 : "";
      switch (tabName) {
        case "payroll":
          this.query === "" ? this.getEmployeePayroll() : this.searchEmployeePayroll();
          break;
        case "increment-history":
          this.query === "" ? this.getEmployeeSalIncrements() : this.searchEmployeeSalIncrements();
          break;
      }
    },
    // get the employee payroll
    getEmployeePayroll: function getEmployeePayroll() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this4.$store.state.operations.loading = true;
              _context3.n = 1;
              return _this4.$store.dispatch("operations/fetchData", {
                path: "/api/employee-payroll/" + _this4.$route.params.slug + "?page=",
                currentPage: _this4.pagination.current_page + "&perPage=" + _this4.perPage
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // search employee payroll
    searchEmployeePayroll: function searchEmployeePayroll() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this5.$store.state.operations.loading = true;
              _context4.n = 1;
              return _this5.$store.dispatch("operations/searchData", {
                term: _this5.query,
                path: "/api/employee-payroll/" + _this5.$route.params.slug + "/search/",
                currentPage: _this5.pagination.current_page + "&perPage=" + _this5.perPage
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this6.query === "" ? _this6.getEmployeePayroll() : _this6.searchEmployeePayroll();
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // reset purchase pagination
    resetPagination: function resetPagination() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this7.pagination.current_page = 1;
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // reload purchases after search
    reload: function reload() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _this8.query = "";
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // get the employee salary increments
    getEmployeeSalIncrements: function getEmployeeSalIncrements() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var currentPage, _yield$axios$get2, data;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _this9.salIncreLoading = true;
              currentPage = _this9.allIncrements ? _this9.salIncrePagination.current_page : 1;
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/employee-increments/" + _this9.$route.params.slug + "?page=" + currentPage + "&perPage=" + _this9.perPage);
            case 1:
              _yield$axios$get2 = _context8.v;
              data = _yield$axios$get2.data;
              _this9.allIncrements = data.data;
              _this9.salIncrePagination = data.meta;
              _this9.salIncreLoading = false;
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // search employee salary increments
    searchEmployeeSalIncrements: function searchEmployeeSalIncrements() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var currentPage, _yield$axios$get3, data;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _this0.salIncreLoading = true;
              currentPage = _this0.allIncrements ? _this0.salIncrePagination.current_page : 1;
              _context9.n = 1;
              return axios_default().get(window.location.origin + "/api/employee-increments/" + _this0.$route.params.slug + "/search/" + _this0.salIncreQuery + "?page=" + currentPage + "&perPage=" + _this0.perPage);
            case 1:
              _yield$axios$get3 = _context9.v;
              data = _yield$axios$get3.data;
              _this0.allIncrements = data.data;
              _this0.salIncrePagination = data.meta;
              _this0.salIncreLoading = false;
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // salary increments pagination
    salIncrePaginate: function salIncrePaginate() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _this1.salIncreQuery === "" ? _this1.getEmployeeSalIncrements() : _this1.searchEmployeeSalIncrements();
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // reset increments pagination
    resetSalIncrePagination: function resetSalIncrePagination() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _this10.salIncrePagination.current_page = 1;
            case 1:
              return _context1.a(2);
          }
        }, _callee1);
      }))();
    },
    // Reload increments after search
    salIncreReload: function salIncreReload() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              _this11.salIncreQuery = "";
            case 1:
              return _context10.a(2);
          }
        }, _callee10);
      }))();
    },
    // print
    printWindow: function printWindow() {
      window.print();
    },
    // print table
    printActivityLog: function printActivityLog() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              _context11.n = 1;
              return _this12.$htmlToPaper("printMe");
            case 1:
              return _context11.a(2);
          }
        }, _callee11);
      }))();
    },
    // get activity logs
    getActivity: function getActivity() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var currentPage, slug, modelName, baseUrl, queryParams, url, _yield$axios$get4, data;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              _this13.activityLoading = true;
              currentPage = _this13.allActivityLog ? _this13.allActivityLogPagination.current_page : 1;
              slug = _this13.$route.params.slug;
              modelName = "Employee";
              baseUrl = "".concat(window.location.origin, "/api/activity-log-specific");
              queryParams = "?page=".concat(currentPage, "&perPage=").concat(_this13.perPage, "&slug=").concat(slug, "&modelName=").concat(modelName);
              url = baseUrl + queryParams;
              _context12.n = 1;
              return axios_default().get(url);
            case 1:
              _yield$axios$get4 = _context12.v;
              data = _yield$axios$get4.data;
              _this13.allActivityLog = data.data;
              _this13.allActivityLogPagination = data.meta;
              _this13.activityLoading = false;
            case 2:
              return _context12.a(2);
          }
        }, _callee12);
      }))();
    },
    // search data
    searchActivity: function searchActivity() {
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
        var currentPage, term, slug, modelName, baseUrl, queryParams, url, _yield$axios$get5, data;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              _this14.activityLoading = true;
              currentPage = _this14.allActivityLog ? _this14.allActivityLogPagination.current_page : 1;
              term = _this14.activitySearchQuery;
              slug = _this14.$route.params.slug;
              modelName = "Employee";
              baseUrl = "".concat(window.location.origin, "/api/activity-log-specific");
              queryParams = "?page=".concat(currentPage, "&perPage=").concat(_this14.perPage, "&term=").concat(term, "&slug=").concat(slug, "&modelName=").concat(modelName);
              url = baseUrl + queryParams;
              _context13.n = 1;
              return axios_default().get(url);
            case 1:
              _yield$axios$get5 = _context13.v;
              data = _yield$axios$get5.data;
              _this14.allActivityLog = data.data;
              _this14.allActivityLogPagination = data.meta;
              _this14.activityLoading = false;
            case 2:
              return _context13.a(2);
          }
        }, _callee13);
      }))();
    },
    // activity pagination
    activityPaginate: function activityPaginate() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              _this15.getActivity();
            case 1:
              return _context14.a(2);
          }
        }, _callee14);
      }))();
    },
    // update activity per page count
    updateActivityPerPager: function updateActivityPerPager() {
      this.allActivityLogPagination.current_page = 1;
      this.activitySearchQuery === "" ? this.getActivity() : this.searchActivity();
    },
    // reload after search
    activityReload: function activityReload() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.n) {
            case 0:
              _this16.activitySearchQuery = "";
            case 1:
              return _context15.a(2);
          }
        }, _callee15);
      }))();
    },
    // refresh activity table
    refreshActivityTable: function refreshActivityTable() {
      this.activitySearchQuery = "";
      this.activitySearchQuery === "" ? this.getActivity() : this.searchActivity();
    },
    // reset activity pagination
    resetActivityPagination: function resetActivityPagination() {
      var _this17 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              _this17.allActivityLogPagination.current_page = 1;
            case 1:
              return _context16.a(2);
          }
        }, _callee16);
      }))();
    },
    // dispaly modal
    previewModal: function previewModal(image) {
      this.imagePath = image;
      if (this.showModal) {
        return this.showModal = false;
      }
      return this.showModal = true;
    },
    // calcualte total paid
    calculateTotalPaid: function calculateTotalPaid() {
      var totalPaid = 0;
      this.allData.loans.forEach(function (loan) {
        totalPaid += Number(loan.totalPaid);
      });
      return totalPaid;
    },
    // delete payroll
    deletePayroll: function deletePayroll(slug) {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.n) {
            case 0:
              Swal.fire({
                title: _this18.$t("Are you sure?"),
                text: _this18.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this18.$t("Confirm")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this18.$store.dispatch("operations/deleteData", {
                    path: "/api/payroll/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      Swal.fire(_this18.$t("Deleted!"), _this18.$t("Deleted successfully."), "success");
                      Fire.$emit("AfterDelete");
                    } else {
                      Swal.fire(_this18.$t("Failed!"), _this18.$t("There was something wrong."), "warning");
                    }
                  });
                }
              });
            case 1:
              return _context17.a(2);
          }
        }, _callee17);
      }))();
    },
    // delete increment
    deleteIncrement: function deleteIncrement(slug) {
      var _this19 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.n) {
            case 0:
              Swal.fire({
                title: _this19.$t("Are you sure?"),
                text: _this19.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this19.$t("Confirm")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this19.$store.dispatch("operations/deleteData", {
                    path: "/api/increments/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      Swal.fire(_this19.$t("Deleted!"), _this19.$t("Deleted successfully."), "success");
                      Fire.$emit("AfterDelete");
                    } else {
                      Swal.fire(_this19.$t("Failed!"), _this19.$t("There was something wrong."), "warning");
                    }
                  });
                }
              });
            case 1:
              return _context18.a(2);
          }
        }, _callee18);
      }))();
    }
  }
});
;// ./resources/js/pages/employees/show.vue?vue&type=script&lang=js
 /* harmony default export */ const employees_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=ef8ba17e&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_ef8ba17e_prod_scoped_true_lang_css = __webpack_require__(44178);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=ef8ba17e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_ef8ba17e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const employees_showvue_type_style_index_0_id_ef8ba17e_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_ef8ba17e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=ef8ba17e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/employees/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  employees_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ef8ba17e",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);