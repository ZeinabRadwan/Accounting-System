"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[402],{

/***/ 8290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-pills .nav-item[data-v-0380133c]{background:#ddd;border-radius:.25rem;margin:2px}.invoices-table[data-v-0380133c]{border-collapse:separate;border-spacing:0}.invoices-table thead th[data-v-0380133c]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-table thead tr[data-v-0380133c]{border:none!important}.invoices-table thead th[data-v-0380133c]:first-child{border-top-left-radius:10px}.invoices-table thead th[data-v-0380133c]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-table thead th[data-v-0380133c]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-table thead th[data-v-0380133c]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.invoices-table .badge.bg-success[data-v-0380133c]{background-color:#28a745!important}.invoices-table .badge.bg-danger[data-v-0380133c],.invoices-table .badge.bg-success[data-v-0380133c]{border-radius:4px;color:#fff!important;font-size:.75rem;padding:4px 8px}.invoices-table .badge.bg-danger[data-v-0380133c]{background-color:#dc3545!important}.invoices-table td[data-v-0380133c]{overflow:visible;position:relative}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 50402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=template&id=0380133c&scoped=true
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
  }, [_c('a', {
    attrs: {
      "href": "#",
      "id": "show-modal"
    },
    on: {
      "click": function click($event) {
        return _vm.previewModal(_vm.allData.image || '');
      }
    }
  }, [_c('img', _vm._b({
    staticClass: "profile-user-img img-fluid img-circle",
    attrs: {
      "loading": "lazy"
    }
  }, 'img', _vm.getAvatarProps(_vm.allData.image, 'employees'), false))])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v(_vm._s(parseFloat(_vm.allData.salary).toFixed(2)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _vm.allData.totalSalary ? _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Current Salary")))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v(_vm._s(parseFloat(_vm.allData.totalSalary).toFixed(2)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _vm.allData.commission ? _c('li', {
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
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'employees.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                      " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                        " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                      ")]]], 2)], 1)])]), _vm._v(" "), _c('div', {
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
    staticClass: "table invoices-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Salary Month")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Salary Date")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total Paid")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('payroll-edit') || _vm.$can('payroll-view') || _vm.$can('payroll-delete') ? _c('th', {
    staticClass: "text-right no-print",
    attrs: {
      "id": "element-to-hide",
      "data-html2canvas-ignore": "true"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("Action")) + "\n                              ")]) : _vm._e()])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                                  " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salaryMonth))]), _vm._v(" "), _c('td', [data.salaryDate ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(data.salaryDate, "Do MMM, YYYY")))]) : _vm._e()]), _vm._v(" "), _c('td', [data.transaction && data.transaction.cashbook_account ? _c('span', [_vm._v(_vm._s(data.transaction.cashbook_account.account_number))]) : _vm._e()]), _vm._v(" "), _c('td', [data.transaction ? _c('span', [_vm._v(_vm._s(data.transaction.amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e()]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('payroll-edit') || _vm.$can('payroll-view') || _vm.$can('payroll-delete') ? _c('td', {
      staticClass: "text-right no-print",
      attrs: {
        "id": "element-to-hide",
        "data-html2canvas-ignore": "true"
      }
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
    staticClass: "table invoices-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Reason")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Basic Salary")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Amount")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Present Salary")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v("\n                                " + _vm._s(_vm.$t("Increment Date")) + "\n                              ")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('increment-edit') || _vm.$can('increment-view') || _vm.$can('increment-delete') ? _c('th', {
    staticClass: "text-right no-print",
    attrs: {
      "id": "element-to-hide",
      "data-html2canvas-ignore": "true"
    }
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
    }, [_vm._v("\n                                  " + _vm._s(data.reason) + "\n                                ")])], 1), _vm._v(" "), _c('td', [data.employee ? _c('span', [_vm._v(_vm._s(data.employee.salary) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v("\n                                " + _vm._s(data.incrementAmount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.employee ? _c('span', [_vm._v("\n                                  " + _vm._s(data.employee.salary + data.incrementAmount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e()]), _vm._v(" "), _c('td', [data.incrementDate ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(data.incrementDate, "Do MMM, YYYY")))]) : _vm._e()]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('increment-edit') || _vm.$can('increment-view') || _vm.$can('increment-delete') ? _c('td', {
      staticClass: "text-right no-print",
      attrs: {
        "id": "element-to-hide",
        "data-html2canvas-ignore": "true"
      }
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
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
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
    }, [_vm._v(_vm._s(_vm.$t(data.description)))])]), _vm._v(" "), _c('div', {
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
// EXTERNAL MODULE: ./resources/js/mixins/avatarMixin.js
var avatarMixin = __webpack_require__(97469);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const showvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Employee Details")
    };
  },
  mixins: [avatarMixin/* default */.A],
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.getEmployee();
              _this2.getEmployeePayroll();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get the employee
    getEmployee: function getEmployee() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios_default().get(window.location.origin + "/api/employees/" + _this3.$route.params.slug);
            case 2:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this3.allData = data.data;
            case 5:
            case "end":
              return _context2.stop();
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.$store.state.operations.loading = true;
              _context3.next = 3;
              return _this4.$store.dispatch("operations/fetchData", {
                path: "/api/employee-payroll/" + _this4.$route.params.slug + "?page=",
                currentPage: _this4.pagination.current_page + "&perPage=" + _this4.perPage
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // search employee payroll
    searchEmployeePayroll: function searchEmployeePayroll() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.$store.state.operations.loading = true;
              _context4.next = 3;
              return _this5.$store.dispatch("operations/searchData", {
                term: _this5.query,
                path: "/api/employee-payroll/" + _this5.$route.params.slug + "/search/",
                currentPage: _this5.pagination.current_page + "&perPage=" + _this5.perPage
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this6.query === "" ? _this6.getEmployeePayroll() : _this6.searchEmployeePayroll();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // reset purchase pagination
    resetPagination: function resetPagination() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this7.pagination.current_page = 1;
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // reload purchases after search
    reload: function reload() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this8.query = "";
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    // get the employee salary increments
    getEmployeeSalIncrements: function getEmployeeSalIncrements() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var currentPage, _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this9.salIncreLoading = true;
              currentPage = _this9.allIncrements ? _this9.salIncrePagination.current_page : 1;
              _context8.next = 4;
              return axios_default().get(window.location.origin + "/api/employee-increments/" + _this9.$route.params.slug + "?page=" + currentPage + "&perPage=" + _this9.perPage);
            case 4:
              _yield$axios$get2 = _context8.sent;
              data = _yield$axios$get2.data;
              _this9.allIncrements = data.data;
              _this9.salIncrePagination = data.meta;
              _this9.salIncreLoading = false;
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // search employee salary increments
    searchEmployeeSalIncrements: function searchEmployeeSalIncrements() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var currentPage, _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this0.salIncreLoading = true;
              currentPage = _this0.allIncrements ? _this0.salIncrePagination.current_page : 1;
              _context9.next = 4;
              return axios_default().get(window.location.origin + "/api/employee-increments/" + _this0.$route.params.slug + "/search?term=" + _this0.salIncreQuery + "&page=" + currentPage + "&perPage=" + _this0.perPage);
            case 4:
              _yield$axios$get3 = _context9.sent;
              data = _yield$axios$get3.data;
              _this0.allIncrements = data.data;
              _this0.salIncrePagination = data.meta;
              _this0.salIncreLoading = false;
            case 9:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // salary increments pagination
    salIncrePaginate: function salIncrePaginate() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _this1.salIncreQuery === "" ? _this1.getEmployeeSalIncrements() : _this1.searchEmployeeSalIncrements();
            case 1:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    // reset increments pagination
    resetSalIncrePagination: function resetSalIncrePagination() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _this10.salIncrePagination.current_page = 1;
            case 1:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    },
    // Reload increments after search
    salIncreReload: function salIncreReload() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _this11.salIncreQuery = "";
            case 1:
            case "end":
              return _context10.stop();
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _this12.$htmlToPaper("printMe");
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    // get activity logs
    getActivity: function getActivity() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var currentPage, slug, modelName, baseUrl, queryParams, url, _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _this13.activityLoading = true;
              currentPage = _this13.allActivityLog ? _this13.allActivityLogPagination.current_page : 1;
              slug = _this13.$route.params.slug;
              modelName = "Employee";
              baseUrl = "".concat(window.location.origin, "/api/activity-log-specific");
              queryParams = "?page=".concat(currentPage, "&perPage=").concat(_this13.perPage, "&slug=").concat(slug, "&modelName=").concat(modelName);
              url = baseUrl + queryParams;
              _context12.next = 9;
              return axios_default().get(url);
            case 9:
              _yield$axios$get4 = _context12.sent;
              data = _yield$axios$get4.data;
              _this13.allActivityLog = data.data;
              _this13.allActivityLogPagination = data.meta;
              _this13.activityLoading = false;
            case 14:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    // search data
    searchActivity: function searchActivity() {
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var currentPage, term, slug, modelName, baseUrl, queryParams, url, _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _this14.activityLoading = true;
              currentPage = _this14.allActivityLog ? _this14.allActivityLogPagination.current_page : 1;
              term = _this14.activitySearchQuery;
              slug = _this14.$route.params.slug;
              modelName = "Employee";
              baseUrl = "".concat(window.location.origin, "/api/activity-log-specific");
              queryParams = "?page=".concat(currentPage, "&perPage=").concat(_this14.perPage, "&term=").concat(term, "&slug=").concat(slug, "&modelName=").concat(modelName);
              url = baseUrl + queryParams;
              _context13.next = 10;
              return axios_default().get(url);
            case 10:
              _yield$axios$get5 = _context13.sent;
              data = _yield$axios$get5.data;
              _this14.allActivityLog = data.data;
              _this14.allActivityLogPagination = data.meta;
              _this14.activityLoading = false;
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    // activity pagination
    activityPaginate: function activityPaginate() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _this15.getActivity();
            case 1:
            case "end":
              return _context14.stop();
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _this16.activitySearchQuery = "";
            case 1:
            case "end":
              return _context15.stop();
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _this17.allActivityLogPagination.current_page = 1;
            case 1:
            case "end":
              return _context16.stop();
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              Swal.fire({
                title: _this18.$t("Are you sure?"),
                text: _this18.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this18.$t("Confirm"),
                cancelButtonText: _this18.$t("Cancel")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this18.$store.dispatch("operations/deleteData", {
                    path: "/api/payroll/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this18.$toast.success(_this18.$t("Deleted!"), _this18.$t("Deleted successfully."));
                      Fire.$emit("AfterDelete");
                    } else {
                      _this18.$toast.warning(_this18.$t("Failed!"), _this18.$t("There was something wrong."));
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }))();
    },
    // delete increment
    deleteIncrement: function deleteIncrement(slug) {
      var _this19 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              Swal.fire({
                title: _this19.$t("Are you sure?"),
                text: _this19.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this19.$t("Confirm"),
                cancelButtonText: _this19.$t("Cancel")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this19.$store.dispatch("operations/deleteData", {
                    path: "/api/increments/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this19.$toast.success(_this19.$t("Deleted!"), _this19.$t("Deleted successfully."));
                      Fire.$emit("AfterDelete");
                    } else {
                      _this19.$toast.warning(_this19.$t("Failed!"), _this19.$t("There was something wrong."));
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context18.stop();
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=0380133c&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_0380133c_prod_scoped_true_lang_css = __webpack_require__(8290);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=0380133c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_0380133c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const employees_showvue_type_style_index_0_id_0380133c_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_0380133c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/employees/show.vue?vue&type=style&index=0&id=0380133c&prod&scoped=true&lang=css

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
  "0380133c",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 97469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    /**
     * Get avatar with fallback to default avatar if image doesn't exist
     * @param {string|null} imagePath - The image path (can be null or empty)
     * @param {string} directory - The directory where the image is stored (e.g., 'clients', 'suppliers', 'employees')
     * @param {string} defaultAvatar - The default avatar filename (defaults to 'default-avatar.jpeg')
     * @returns {string} The full URL to the avatar image
     */
    getAvatarWithFallback: function getAvatarWithFallback(imagePath) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      // If no image path provided, return default avatar
      if (!imagePath || imagePath.trim() === '') {
        return window.location.origin + '/images/' + defaultAvatar;
      }

      // Build the full image path
      var fullImagePath = directory ? "images/".concat(directory, "/").concat(imagePath) : "images/".concat(imagePath);
      var fullUrl = window.location.origin + '/' + fullImagePath;

      // Return the image URL - the browser will handle 404s and show broken image icon
      // We could implement a more sophisticated check here, but for now we'll rely on the backend
      // to provide the correct fallback URL through the Resource classes
      return fullUrl;
    },
    /**
     * Handle image error by setting src to default avatar
     * @param {Event} event - The error event from the img element
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     */
    handleImageError: function handleImageError(event) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      var img = event.target;
      img.src = window.location.origin + '/images/' + defaultAvatar;
      img.onerror = null; // Prevent infinite loop
    },
    /**
     * Get avatar URL for display with error handling
     * @param {string|null} imagePath - The image path
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     * @returns {Object} Object with src and onerror handler
     */
    getAvatarProps: function getAvatarProps(imagePath) {
      var _this = this;
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      return {
        src: this.getAvatarWithFallback(imagePath, directory, defaultAvatar),
        onerror: function onerror(event) {
          return _this.handleImageError(event, directory, defaultAvatar);
        }
      };
    }
  }
});

/***/ })

}]);