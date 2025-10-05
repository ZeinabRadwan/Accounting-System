"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2559],{

/***/ 8546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-pills .nav-item[data-v-1ec42bba]{background:#ddd;border-radius:.25rem;margin:2px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=template&id=1ec42bba&scoped=true
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
      "click": _vm.getQuotation
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
  }), _vm._v("\n                " + _vm._s(_vm.$t("Activity log")))])])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: !_vm.communicationConfig.sms_configured ? _vm.$t('SMS settings not configured') : '',
      expression: "!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''"
    }],
    "class": ['btn', _vm.communicationConfig.sms_configured ? 'btn-secondary' : 'btn-secondary disabled'],
    attrs: {
      "href": "#",
      "disabled": !_vm.communicationConfig.sms_configured,
      "title": !_vm.communicationConfig.sms_configured ? _vm.$t('SMS settings not configured') : ''
    },
    on: {
      "click": function click($event) {
        _vm.communicationConfig.sms_configured ? _vm.notify(_vm.form.isSendSMS = true) : null;
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sms"
  }), _vm._v(" " + _vm._s(_vm.$t("SMS")) + "\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        _vm.notify(_vm.form.isSendEmail = true);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-paper-plane"
  }), _vm._v(" " + _vm._s(_vm.$t("email")))]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.generatePDF();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-download"
  }), _vm._v(" " + _vm._s(_vm.$t("download")) + "\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-secondary",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.printWindow();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.$t("Print")) + "\n          ")]), _vm._v(" "), _vm.$can('quotation-to-invoice') ? _c('router-link', {
    staticClass: "btn btn-success",
    attrs: {
      "to": {
        name: 'quotations.invoice',
        params: {
          slug: _vm.allData.slug
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-file-invoice"
  }), _vm._v(" " + _vm._s(_vm.$t("Create Invoice")) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.$can('quotation-edit') ? _c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'quotations.edit',
        params: {
          slug: _vm.allData.slug
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t("Edit")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'quotations.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n          ")])], 1)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "details"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "invoice p-3 mb-3 w-100",
    attrs: {
      "id": "content-to-pdf"
    }
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "row invoice-info"
  }, [_c('div', {
    staticClass: "col-sm-4 invoice-col"
  }, [_c('CompanyInfo')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 invoice-col float-right text-md-right"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t("Client Details")))]), _vm._v(" "), _vm.allData.client ? _c('div', [_vm.allData.client.companyName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Client ID")) + ":")]), _vm._v("\n                  " + _vm._s(_vm._f("withPrefix")(_vm.allData.client.clientID, _vm.clientPrefix))), _c('br')]) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Client Name")) + ":")]), _vm._v("\n                " + _vm._s(_vm.allData.client.name)), _c('br'), _vm._v(" "), _vm.allData.client.companyName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Company Name")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.client.companyName)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.client.email ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Email")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.client.email)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.client.phoneNumber ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Contact Number")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.client.phoneNumber)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.client.address ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Address")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.client.address)), _c('br')]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_vm.allData.quotationNo ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Quotation No")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reference ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Reference")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.date ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Quotation Date")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.deliveryPlace ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Delivery Place")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('th', [_vm._v(_vm._s(_vm.$t("Note")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Created By")) + "\n                      ")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_vm.allData.quotationNo ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(_vm.allData.quotationNo, _vm.quotationPrefix)) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reference ? _c('td', [_vm._v("\n                        " + _vm._s(_vm.allData.reference) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.date ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("moment")(_vm.allData.date, "Do MMM, YYYY")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.deliveryPlace ? _c('td', [_vm._v("\n                        " + _vm._s(_vm.allData.deliveryPlace) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('td', [_vm._v(_vm._s(_vm.allData.note))]) : _vm._e(), _vm._v(" "), _c('td', [_vm.allData.status === 1 ? _c('span', {
    staticClass: "badge bg-success"
  }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
    staticClass: "badge bg-danger"
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.allData.createdBy) + "\n                      ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row position-relative mt-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('strong', {
    staticClass: "mb-2 d-block"
  }, [_vm._v(_vm._s(_vm.$t("Products")) + ":")]), _vm._v(" "), _c('div', {
    staticClass: "table-custom table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))])])]), _vm._v(" "), _vm.allData.products ? _c('tbody', [_vm._l(_vm.allData.products, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(data.productCode, _vm.productPrefix)) + "\n                      ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.quantity) + " " + _vm._s(data.productUnit))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salePrice) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salePrice * data.quantity) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.discountType === 'percentage' ? _c('span', [_vm._v("\n                          " + _vm._s(data.discount) + "% (" + _vm._s(_vm.calculateProductDiscountAmount(data)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(")\n                        ")]) : data.discountAmount > 0 ? _c('span', [_vm._v("\n                          " + _vm._s(_vm.calculateProductDiscountAmount(data)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _c('span', {
      staticClass: "text-muted"
    }, [_vm._v("\n                          " + _vm._s(_vm.$t('No Discount')) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salePrice * data.quantity - _vm.calculateProductDiscountAmount(data)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.taxAmount > 0 ? _c('span', [_vm._v("\n                          " + _vm._s(data.taxAmount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(" "), data.taxRate ? _c('small', {
      staticClass: "text-muted d-block"
    }, [_vm._v("\n                            (" + _vm._s(data.taxRate) + "%)\n                          ")]) : _vm._e()]) : _c('span', {
      staticClass: "text-muted"
    }, [_vm._v("\n                          " + _vm._s(_vm.$t('No VAT')) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.salePrice * data.quantity - _vm.calculateProductDiscountAmount(data) + (data.taxAmount || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "9"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")))])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('strong', [_vm._v(_vm._s(_vm.calculatedSubTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-4"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-4 text-lg-right mt-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom table-border-y-0"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', {
    staticClass: "bg-sub-light text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Subtotal")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.calculatedSubTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Product Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.totalProductDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "bg-green-light text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.calculatedSubTotal - _vm.totalProductDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.totalProductVat > 0 ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Product VAT")) + ":")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.totalProductVat) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "bg-indigo-light"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")) + ":")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "equal-sign"
  }, [_vm._v("=")]), _vm._v("\n                        " + _vm._s(_vm.calculatedTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])])])], 1)])]), _vm._v(" "), _c('div', {
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
        return _vm.refreshTable();
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
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })])])])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
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
        return _vm.resetPagination();
      },
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_vm._l(_vm.items, function (data, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length > 0,
        expression: "items.length > 0"
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
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
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
      }, _vm.updatePerPager]
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
  }, [_vm._v("100")])])])]), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])], 1)])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=script&lang=js
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
      title: this.$t("Quotation Details")
    };
  },
  data: function data() {
    return {
      allData: "",
      breadcrumbsCurrent: "Quotation Details",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Quotations",
        url: "quotations.index"
      }, {
        name: "Details",
        url: ""
      }],
      quotationProducts: [],
      quotationPrefix: "",
      clientPrefix: "",
      productPrefix: "",
      loading: false,
      form: new vform_es/* default */.Ay({
        isSendEmail: false,
        isSendSMS: false
      }),
      isDemoMode: window.config.isDemoMode,
      query: "",
      perPage: 10,
      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      }
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo", "items", "loading", "pagination"])), {}, {
    // calculate total subtotal based on new formula
    calculatedSubTotal: function calculatedSubTotal() {
      if (!this.allData.products) return 0;
      var total = 0;
      this.allData.products.forEach(function (product) {
        var unitPrice = parseFloat(product.salePrice) || 0;
        var quantity = parseFloat(product.quantity) || 0;
        total += unitPrice * quantity;
      });
      return total.toFixed(2);
    },
    // calculate total product VAT
    totalProductVat: function totalProductVat() {
      if (!this.allData.products) return 0;
      return this.allData.products.reduce(function (total, product) {
        return total + (product.taxAmount || 0);
      }, 0);
    },
    // calculate total product discount
    totalProductDiscount: function totalProductDiscount() {
      var _this = this;
      if (!this.allData.products) return 0;
      return this.allData.products.reduce(function (total, product) {
        return total + _this.calculateProductDiscountAmount(product);
      }, 0);
    },
    // calculate total with new formulas
    calculatedTotal: function calculatedTotal() {
      var subtotal = parseFloat(this.calculatedSubTotal) || 0;
      var productDiscount = parseFloat(this.totalProductDiscount) || 0;
      var productVat = parseFloat(this.totalProductVat) || 0;

      // Total = Subtotal - Product Discount + Product VAT
      var total = subtotal - productDiscount + productVat;
      return total.toFixed(2);
    }
  }),
  created: function created() {
    this.getQuotation();
    this.loadCommunicationConfigStatus();
    this.quotationPrefix = this.appInfo.quotationPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
    this.productPrefix = this.appInfo.productPrefix;
  },
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    }
  },
  methods: {
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this2.communicationConfig.loading = true;
              _context.next = 4;
              return axios_default().get('/api/communication-config-status');
            case 4:
              response = _context.sent;
              _this2.communicationConfig.email_configured = response.data.email_configured;
              _this2.communicationConfig.sms_configured = response.data.sms_configured;
              _this2.communicationConfig.loading = false;
              _context.next = 16;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error loading communication config status:', _context.t0);
              // Default to false if there's an error
              _this2.communicationConfig.email_configured = false;
              _this2.communicationConfig.sms_configured = false;
              _this2.communicationConfig.loading = false;
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    // get the quotation
    getQuotation: function getQuotation() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.loading = true;
              _context2.next = 3;
              return axios_default().get(window.location.origin + "/api/quotations/" + _this3.$route.params.slug);
            case 3:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this3.allData = data.data;
              _this3.quotationProducts = _this3.allData.products;
              _this3.quotationProducts.sort(_this3.sortProducts);
              _this3.loading = false;
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    sortProducts: function sortProducts(a, b) {
      if (a.productCode < b.productCode) {
        return -1;
      }
      if (a.productCode > b.productCode) {
        return 1;
      }
      return 0;
    },
    // download pdf - now opens print page
    generatePDF: function generatePDF() {
      // Open the print page in a new window
      var printUrl = "/print/quotation/".concat(this.$route.params.slug);
      window.open(printUrl, '_blank');
    },
    // notify
    notify: function notify() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this4.isDemoMode) {
                _context3.next = 7;
                break;
              }
              _this4.loading = true;
              _context3.next = 4;
              return _this4.form.post(window.location.origin + "/api/quotation/notify/" + _this4.$route.params.slug).then(function () {
                toast.fire({
                  type: "success",
                  title: _this4.$t("Notification sent successfully")
                });
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this4.$t("Please check your input and try again.")
                });
              });
            case 4:
              _this4.loading = false;
              _context3.next = 8;
              break;
            case 7:
              toast.fire({
                type: "warning",
                title: _this4.$t("You are not allowed to do this in demo version.")
              });
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // print - now opens print page
    printWindow: function printWindow() {
      // Open the print page in a new window
      var printUrl = "/print/quotation/".concat(this.$route.params.slug);
      window.open(printUrl, '_blank');
    },
    // print table
    print: function print() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.$htmlToPaper("printMe");
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // get activity logs
    getActivity: function getActivity() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var currentPage, slug, modelName;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              currentPage = _this6.pagination ? _this6.pagination.current_page : 1;
              _this6.$store.state.operations.loading = true;
              slug = _this6.$route.params.slug;
              modelName = "Quotation";
              _context5.next = 6;
              return _this6.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: currentPage + "&perPage=" + _this6.perPage,
                slug: slug,
                modelName: modelName
              });
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var slug, modelName;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this7.$store.state.operations.loading = true;
              slug = _this7.$route.params.slug;
              modelName = "Quotation";
              _context6.next = 5;
              return _this7.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: _this7.pagination.current_page + "&perPage=" + _this7.perPage,
                term: _this7.query,
                slug: slug,
                modelName: modelName
              });
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this8.getActivity();
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },
    // reload after search
    reload: function reload() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this9.query = "";
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      this.query = "";
      this.query === "" ? this.getActivity() : this.searchData();
    },
    // reset pagination
    resetPagination: function resetPagination() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this10.pagination.current_page = 1;
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // calculate total after discount
    calculateTotalAfterDiscount: function calculateTotalAfterDiscount(data) {
      var salePrice = parseFloat(data.salePrice) || 0;
      var discountAmount = Number(data.discountAmount) || 0;
      var quantity = parseFloat(data.quantity) || 1;

      // Total After Discount = quotation_products.sale_price - (quotation_products.discount_amount/quotation_products.quantity)
      var totalAfterDiscount = salePrice - discountAmount / quantity;
      return totalAfterDiscount.toFixed(2);
    },
    // calculate unit tax
    calculateUnitTax: function calculateUnitTax(data) {
      var taxAmount = parseFloat(data.taxAmount) || 0;
      var quantity = parseFloat(data.quantity) || 1;

      // Unit Tax = quotation_products.tax_amount/quotation_products.quantity
      var unitTax = taxAmount / quantity;
      return unitTax.toFixed(2);
    },
    // calculate unit cost
    calculateUnitCost: function calculateUnitCost(data) {
      var totalAfterDiscount = parseFloat(this.calculateTotalAfterDiscount(data)) || 0;
      var unitTax = parseFloat(this.calculateUnitTax(data)) || 0;

      // Unit Cost = Total After Discount + Unit Tax
      var unitCost = totalAfterDiscount + unitTax;
      return unitCost.toFixed(2);
    },
    // calculate subtotal
    calculateSubtotal: function calculateSubtotal(data) {
      var unitCost = parseFloat(this.calculateUnitCost(data)) || 0;
      var quantity = parseFloat(data.quantity) || 1;

      // Subtotal = Unit Cost * quantity
      var subtotal = unitCost * quantity;
      return subtotal.toFixed(2);
    },
    // calculate product discount amount
    calculateProductDiscountAmount: function calculateProductDiscountAmount(data) {
      if (data.discountType === 'percentage') {
        return (data.salePrice * data.quantity * data.discount / 100).toFixed(2);
      } else if (data.discountAmount && data.discountAmount > 0) {
        return Number(data.discountAmount).toFixed(2);
      }
      return 0;
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/sales/quotations/show.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=1ec42bba&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_1ec42bba_prod_scoped_true_lang_css = __webpack_require__(8546);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=1ec42bba&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_1ec42bba_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const quotations_showvue_type_style_index_0_id_1ec42bba_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_1ec42bba_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=1ec42bba&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/sales/quotations/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  quotations_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1ec42bba",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);