(self["webpackChunk"] = self["webpackChunk"] || []).push([[3612],{

/***/ 43612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=template&id=e5e363a8&scoped=true
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
      value: !_vm.communicationConfig.sms_configured ? _vm.smsNotConfiguredText() : '',
      expression: "!communicationConfig.sms_configured ? smsNotConfiguredText() : ''"
    }],
    "class": ['btn', _vm.communicationConfig.sms_configured ? 'btn-secondary' : 'btn-secondary disabled'],
    attrs: {
      "href": "#",
      "disabled": !_vm.communicationConfig.sms_configured,
      "title": !_vm.communicationConfig.sms_configured ? _vm.smsNotConfiguredText() : ''
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
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  }), _vm._v(" " + _vm._s(_vm.$t("Preview PDF")) + "\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.downloadPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-download"
  }), _vm._v(" " + _vm._s(_vm.$t("download")) + "\n          ")]), _vm._v(" "), _vm.$can('quotation-to-invoice') ? _c('router-link', {
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
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n              " + _vm._s(_vm.$t("Back")) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n            ")]], 2)], 1)]) : _vm._e()])]), _vm._v(" "), _c('div', {
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
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(data.productCode, _vm.productPrefix)) + "\n                      ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.quantity))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(data.salePrice)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(data.salePrice * data.quantity)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.discountType === 'percentage' ? _c('span', [_vm._v("\n                          " + _vm._s(data.discount) + "% (" + _vm._s(_vm.calculateProductDiscountAmount(data)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(")\n                        ")]) : data.discountAmount > 0 ? _c('span', [_vm._v("\n                          " + _vm._s(_vm.calculateProductDiscountAmount(data)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _c('span', {
      staticClass: "text-muted"
    }, [_vm._v("\n                          " + _vm._s(_vm.$t('No Discount')) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(data.salePrice * data.quantity - parseFloat(_vm.calculateProductDiscountAmount(data)))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [data.taxAmount > 0 ? _c('span', [_vm._v("\n                          " + _vm._s(_vm.formatNumber(data.taxAmount)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(" "), data.taxRate ? _c('small', {
      staticClass: "text-muted d-block"
    }, [_vm._v("\n                            (" + _vm._s(data.taxRate) + "%)\n                          ")]) : _vm._e()]) : _c('span', {
      staticClass: "text-muted"
    }, [_vm._v("\n                          " + _vm._s(_vm.$t('No VAT')) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(data.salePrice * data.quantity - parseFloat(_vm.calculateProductDiscountAmount(data)) + (parseFloat(data.taxAmount) || 0))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "9"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total with VAT")))])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('strong', [_vm._v(_vm._s(_vm.calculatedTotal) + " "), _c('span', {
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
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Total Price")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.totalPrice)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Product Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.formatNumber(_vm.totalProductDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "bg-green-light text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.totalPrice - _vm.totalProductDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Product VAT")) + ":")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.formatNumber(_vm.totalProductVat)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "bg-indigo-light"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")) + ":")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "equal-sign"
  }, [_vm._v("=")]), _vm._v("\n                        " + _vm._s(_vm.formatNumber(_vm.totalPrice - _vm.totalProductDiscount + _vm.totalProductVat)) + " "), _c('span', {
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
    "class": ['btn', 'btn-success', _vm.loading ? 'disabled' : ''],
    attrs: {
      "href": "#",
      "aria-busy": _vm.loading ? 'true' : 'false'
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        !_vm.loading && _vm.refreshTable();
      }
    }
  }, [!_vm.loading ? _c('i', {
    staticClass: "fas fa-sync"
  }) : _c('i', {
    staticClass: "fas fa-spinner fa-spin"
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
    }, [_vm._v(_vm._s(_vm.$t(data.description)))])]), _vm._v(" "), _c('div', {
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
// EXTERNAL MODULE: ./node_modules/izitoast/dist/js/iziToast.js
var iziToast = __webpack_require__(69568);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=script&lang=js
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
    // Calculate total price (sum of Total column in items table)
    totalPrice: function totalPrice() {
      if (!this.allData.products) return 0;
      return this.allData.products.reduce(function (total, product) {
        return total + product.salePrice * product.quantity;
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
    smsNotConfiguredText: function smsNotConfiguredText() {
      if (this.$te && this.$te('SMS settings not configured')) {
        var translated = this.$t('SMS settings not configured');
        return typeof translated === 'string' ? translated : 'SMS settings not configured';
      }
      return 'SMS settings not configured';
    },
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    // download PDF
    downloadPDF: function downloadPDF() {
      window.location.href = "/print/quotation/".concat(this.$route.params.slug, "/pdf");
    },
    // preview PDF
    previewPDF: function previewPDF() {
      window.location.href = "/print/quotation/".concat(this.$route.params.slug, "/preview");
    },
    // notify
    notify: function notify() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
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
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this0.query = "";
              if (_this0.pagination) {
                _this0.pagination.current_page = 1;
              }
              _context9.next = 4;
              return _this0.getActivity();
            case 4:
              _this0.$toast.success(_this0.$t("Refreshed"), _this0.$t("Activity log has been refreshed successfully"));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // reset pagination
    resetPagination: function resetPagination() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _this1.pagination.current_page = 1;
            case 1:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
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
    },
    // Format number to 2 decimal places
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
    }
  }
});
;// ./resources/js/pages/sales/quotations/show.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=e5e363a8&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_e5e363a8_prod_scoped_true_lang_css = __webpack_require__(92430);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=e5e363a8&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_e5e363a8_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const quotations_showvue_type_style_index_0_id_e5e363a8_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_e5e363a8_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/quotations/show.vue?vue&type=style&index=0&id=e5e363a8&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/quotations/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  quotations_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "e5e363a8",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 69568:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* iziToast | v1.4.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/
(function (root, factory) {
	if(true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window || this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//
	var $iziToast = {},
		PLUGIN_NAME = 'iziToast',
		BODY = document.querySelector('body'),
		ISMOBILE = (/Mobi/.test(navigator.userAgent)) ? true : false,
		ISCHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
		ISFIREFOX = typeof InstallTrigger !== 'undefined',
		ACCEPTSTOUCH = 'ontouchstart' in document.documentElement,
		POSITIONS = ['bottomRight','bottomLeft','bottomCenter','topRight','topLeft','topCenter','center'],
		THEMES = {
			info: {
				color: 'blue',
				icon: 'ico-info'
			},
			success: {
				color: 'green',
				icon: 'ico-success'
			},
			warning: {
				color: 'orange',
				icon: 'ico-warning'
			},
			error: {
				color: 'red',
				icon: 'ico-error'
			},
			question: {
				color: 'yellow',
				icon: 'ico-question'
			}
		},
		MOBILEWIDTH = 568,
		CONFIG = {};

	$iziToast.children = {};

	// Default settings
	var defaults = {
		id: null, 
		class: '',
		title: '',
		titleColor: '',
		titleSize: '',
		titleLineHeight: '',
		message: '',
		messageColor: '',
		messageSize: '',
		messageLineHeight: '',
		backgroundColor: '',
		theme: 'light', // dark
		color: '', // blue, red, green, yellow
		icon: '',
		iconText: '',
		iconColor: '',
		iconUrl: null,
		image: '',
		imageWidth: 50,
		maxWidth: null,
		zindex: null,
		layout: 1,
		balloon: false,
		close: true,
		closeOnEscape: false,
		closeOnClick: false,
		displayMode: 0,
		position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
		target: '',
		targetFirst: true,
		timeout: 5000,
		rtl: false,
		animateInside: true,
		drag: true,
		pauseOnHover: true,
		resetOnHover: false,
		progressBar: true,
		progressBarColor: '',
		progressBarEasing: 'linear',
		overlay: false,
		overlayClose: false,
		overlayColor: 'rgba(0, 0, 0, 0.6)',
		transitionIn: 'fadeInUp', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
		transitionOut: 'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
		transitionInMobile: 'fadeInUp',
		transitionOutMobile: 'fadeOutDown',
		buttons: {},
		inputs: {},
		onOpening: function () {},
		onOpened: function () {},
		onClosing: function () {},
		onClosed: function () {}
	};

	//
	// Methods
	//


	/**
	 * Polyfill for remove() method
	 */
	if(!('remove' in Element.prototype)) {
	    Element.prototype.remove = function() {
	        if(this.parentNode) {
	            this.parentNode.removeChild(this);
	        }
	    };
	}

	/*
     * Polyfill for CustomEvent for IE >= 9
     * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
     */
    if(typeof window.CustomEvent !== 'function') {
        var CustomEventPolyfill = function (event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        CustomEventPolyfill.prototype = window.Event.prototype;

        window.CustomEvent = CustomEventPolyfill;
    }

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if(Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if(Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			if(collection){
				for (var i = 0, len = collection.length; i < len; i++) {
					callback.call(scope, collection[i], i, collection);
				}
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function (defaults, options) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};


	/**
	 * Create a fragment DOM elements
	 * @private
	 */
	var createFragElem = function(htmlStr) {
		var frag = document.createDocumentFragment(),
			temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	};


	/**
	 * Generate new ID
	 * @private
	 */
	var generateId = function(params) {
		var newId = btoa(encodeURIComponent(params));
		return newId.replace(/=/g, "");
	};


	/**
	 * Check if is a color
	 * @private
	 */
	var isColor = function(color){
		if( color.substring(0,1) == '#' || color.substring(0,3) == 'rgb' || color.substring(0,3) == 'hsl' ){
			return true;
		} else {
			return false;
		}
	};


	/**
	 * Check if is a Base64 string
	 * @private
	 */
	var isBase64 = function(str) {
	    try {
	        return btoa(atob(str)) == str;
	    } catch (err) {
	        return false;
	    }
	};


	/**
	 * Drag method of toasts
	 * @private
	 */
	var drag = function() {
	    
	    return {
	        move: function(toast, instance, settings, xpos) {

	        	var opacity,
	        		opacityRange = 0.3,
	        		distance = 180;
	            
	            if(xpos !== 0){
	            	
	            	toast.classList.add(PLUGIN_NAME+'-dragged');

	            	toast.style.transform = 'translateX('+xpos + 'px)';

		            if(xpos > 0){
		            	opacity = (distance-xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutRight', transitionOutMobile: 'fadeOutRight' }), toast, 'drag');
						}
		            } else {
		            	opacity = (distance+xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutLeft', transitionOutMobile: 'fadeOutLeft' }), toast, 'drag');
						}
		            }
					toast.style.opacity = opacity;
			
					if(opacity < opacityRange){

						if(ISCHROME || ISFIREFOX)
							toast.style.left = xpos+'px';

						toast.parentNode.style.opacity = opacityRange;

		                this.stopMoving(toast, null);
					}
	            }

				
	        },
	        startMoving: function(toast, instance, settings, e) {

	            e = e || window.event;
	            var posX = ((ACCEPTSTOUCH) ? e.touches[0].clientX : e.clientX),
	                toastLeft = toast.style.transform.replace('px)', '');
	                toastLeft = toastLeft.replace('translateX(', '');
	            var offsetX = posX - toastLeft;

				if(settings.transitionIn){
					toast.classList.remove(settings.transitionIn);
				}
				if(settings.transitionInMobile){
					toast.classList.remove(settings.transitionInMobile);
				}
				toast.style.transition = '';

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.touches[0].clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            } else {
	                document.onmousemove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            }

	        },
	        stopMoving: function(toast, e) {

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function() {};
	            } else {
	            	document.onmousemove = function() {};
	            }

				toast.style.opacity = '';
				toast.style.transform = '';

	            if(toast.classList.contains(PLUGIN_NAME+'-dragged')){
	            	
	            	toast.classList.remove(PLUGIN_NAME+'-dragged');

					toast.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
					setTimeout(function() {
						toast.style.transition = '';
					}, 400);
	            }

	        }
	    };

	}();





	$iziToast.setSetting = function (ref, option, value) {

		$iziToast.children[ref][option] = value;

	};


	$iziToast.getSetting = function (ref, option) {

		return $iziToast.children[ref][option];

	};


	/**
	 * Destroy the current initialization.
	 * @public
	 */
	$iziToast.destroy = function () {

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-overlay'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-wrapper'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME), function(element, index) {
			element.remove();
		});

		this.children = {};

		// Remove event listeners
		document.removeEventListener(PLUGIN_NAME+'-opened', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-opening', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closing', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closed', {}, false);
		document.removeEventListener('keyup', {}, false);

		// Reset variables
		CONFIG = {};
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.settings = function (options) {

		// Destroy any existing initializations
		$iziToast.destroy();

		CONFIG = options;
		defaults = extend(defaults, options || {});
	};


	/**
	 * Building themes functions.
	 * @public
	 * @param {Object} options User settings
	 */
	forEach(THEMES, function (theme, name) {

		$iziToast[name] = function (options) {

			var settings = extend(CONFIG, options || {});
			settings = extend(theme, settings || {});

			this.show(settings);
		};

	});


	/**
	 * Do the calculation to move the progress bar
	 * @private
	 */
	$iziToast.progress = function (options, $toast, callback) {


		var that = this,
			ref = $toast.getAttribute('data-iziToast-ref'),
			settings = extend(this.children[ref], options || {}),
			$elem = $toast.querySelector('.'+PLUGIN_NAME+'-progressbar div');

	    return {
	        start: function() {

	        	if(typeof settings.time.REMAINING == 'undefined'){

	        		$toast.classList.remove(PLUGIN_NAME+'-reseted');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.timeout +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.START = new Date().getTime();
		        	settings.time.END = settings.time.START + settings.timeout;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}

					}, settings.timeout);			
		        	that.setSetting(ref, 'time', settings.time);
	        	}
	        },
	        pause: function() {

	        	if(typeof settings.time.START !== 'undefined' && !$toast.classList.contains(PLUGIN_NAME+'-paused') && !$toast.classList.contains(PLUGIN_NAME+'-reseted')){

        			$toast.classList.add(PLUGIN_NAME+'-paused');

					settings.time.REMAINING = settings.time.END - new Date().getTime();

					clearTimeout(settings.time.TIMER);

					that.setSetting(ref, 'time', settings.time);

					if($elem !== null){
						var computedStyle = window.getComputedStyle($elem),
							propertyWidth = computedStyle.getPropertyValue('width');

						$elem.style.transition = 'none';
						$elem.style.width = propertyWidth;					
					}

					if(typeof callback === 'function'){
						setTimeout(function() {
							callback.apply(that);						
						}, 10);
					}
        		}
	        },
	        resume: function() {

				if(typeof settings.time.REMAINING !== 'undefined'){

					$toast.classList.remove(PLUGIN_NAME+'-paused');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.time.REMAINING +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.END = new Date().getTime() + settings.time.REMAINING;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}


					}, settings.time.REMAINING);

					that.setSetting(ref, 'time', settings.time);
				} else {
					this.start();
				}
	        },
	        reset: function(){

				clearTimeout(settings.time.TIMER);

				delete settings.time.REMAINING;

				that.setSetting(ref, 'time', settings.time);

				$toast.classList.add(PLUGIN_NAME+'-reseted');

				$toast.classList.remove(PLUGIN_NAME+'-paused');

				if($elem !== null){
					$elem.style.transition = 'none';
					$elem.style.width = '100%';
				}

				if(typeof callback === 'function'){
					setTimeout(function() {
						callback.apply(that);						
					}, 10);
				}
	        }
	    };

	};


	/**
	 * Close the specific Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.hide = function (options, $toast, closedBy) {

		if(typeof $toast != 'object'){
			$toast = document.querySelector($toast);
		}		

		var that = this,
			settings = extend(this.children[$toast.getAttribute('data-iziToast-ref')], options || {});
			settings.closedBy = closedBy || null;

		delete settings.time.REMAINING;

		$toast.classList.add(PLUGIN_NAME+'-closing');

		// Overlay
		(function(){

			var $overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
			if($overlay !== null){
				var refs = $overlay.getAttribute('data-iziToast-ref');		
					refs = refs.split(',');
				var index = refs.indexOf(String(settings.ref));

				if(index !== -1){
					refs.splice(index, 1);			
				}
				$overlay.setAttribute('data-iziToast-ref', refs.join());

				if(refs.length === 0){
					$overlay.classList.remove('fadeIn');
					$overlay.classList.add('fadeOut');
					setTimeout(function() {
						$overlay.remove();
					}, 700);
				}
			}

		})();

		if(settings.transitionIn){
			$toast.classList.remove(settings.transitionIn);
		} 

		if(settings.transitionInMobile){
			$toast.classList.remove(settings.transitionInMobile);
		}

		if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
			if(settings.transitionOutMobile)
				$toast.classList.add(settings.transitionOutMobile);
		} else {
			if(settings.transitionOut)
				$toast.classList.add(settings.transitionOut);
		}
		var H = $toast.parentNode.offsetHeight;
				$toast.parentNode.style.height = H+'px';
				$toast.style.pointerEvents = 'none';
		
		if(!ISMOBILE || window.innerWidth > MOBILEWIDTH){
			$toast.parentNode.style.transitionDelay = '0.2s';
		}

		try {
			var event = new CustomEvent(PLUGIN_NAME+'-closing', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {
			
			$toast.parentNode.style.height = '0px';
			$toast.parentNode.style.overflow = '';

			setTimeout(function(){
				
				delete that.children[settings.ref];

				$toast.parentNode.remove();

				try {
					var event = new CustomEvent(PLUGIN_NAME+'-closed', {detail: settings, bubbles: true, cancelable: true});
					document.dispatchEvent(event);
				} catch(ex){
					console.warn(ex);
				}

				if(typeof settings.onClosed !== 'undefined'){
					settings.onClosed.apply(null, [settings, $toast, closedBy]);
				}

			}, 1000);
		}, 200);


		if(typeof settings.onClosing !== 'undefined'){
			settings.onClosing.apply(null, [settings, $toast, closedBy]);
		}
	};

	/**
	 * Create and show the Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.show = function (options) {

		var that = this;

		// Merge user options with defaults
		var settings = extend(CONFIG, options || {});
			settings = extend(defaults, settings);
			settings.time = {};

		if(settings.id === null){
			settings.id = generateId(settings.title+settings.message+settings.color);
		}

		if(settings.displayMode === 1 || settings.displayMode == 'once'){
			try {
				if(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id).length > 0){
					return false;
				}
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		if(settings.displayMode === 2 || settings.displayMode == 'replace'){
			try {
				forEach(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id), function(element, index) {
					that.hide(settings, element, 'replaced');
				});
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		settings.ref = new Date().getTime() + Math.floor((Math.random() * 10000000) + 1);

		$iziToast.children[settings.ref] = settings;

		var $DOM = {
			body: document.querySelector('body'),
			overlay: document.createElement('div'),
			toast: document.createElement('div'),
			toastBody: document.createElement('div'),
			toastTexts: document.createElement('div'),
			toastCapsule: document.createElement('div'),
			cover: document.createElement('div'),
			buttons: document.createElement('div'),
			inputs: document.createElement('div'),
			icon: !settings.iconUrl ? document.createElement('i') : document.createElement('img'),
			wrapper: null
		};

		$DOM.toast.setAttribute('data-iziToast-ref', settings.ref);
		$DOM.toast.appendChild($DOM.toastBody);
		$DOM.toastCapsule.appendChild($DOM.toast);

		// CSS Settings
		(function(){

			$DOM.toast.classList.add(PLUGIN_NAME);
			$DOM.toast.classList.add(PLUGIN_NAME+'-opening');
			$DOM.toastCapsule.classList.add(PLUGIN_NAME+'-capsule');
			$DOM.toastBody.classList.add(PLUGIN_NAME + '-body');
			$DOM.toastTexts.classList.add(PLUGIN_NAME + '-texts');

			if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
				if(settings.transitionInMobile)
					$DOM.toast.classList.add(settings.transitionInMobile);
			} else {
				if(settings.transitionIn)
					$DOM.toast.classList.add(settings.transitionIn);
			}

			if(settings.class){
				var classes = settings.class.split(' ');
				forEach(classes, function (value, index) {
					$DOM.toast.classList.add(value);
				});
			}

			if(settings.id){ $DOM.toast.id = settings.id; }

			if(settings.rtl){
				$DOM.toast.classList.add(PLUGIN_NAME + '-rtl');
				$DOM.toast.setAttribute('dir', 'rtl');
			}

			if(settings.layout > 1){ $DOM.toast.classList.add(PLUGIN_NAME+'-layout'+settings.layout); }

			if(settings.balloon){ $DOM.toast.classList.add(PLUGIN_NAME+'-balloon'); }

			if(settings.maxWidth){
				if( !isNaN(settings.maxWidth) ){
					$DOM.toast.style.maxWidth = settings.maxWidth+'px';
				} else {
					$DOM.toast.style.maxWidth = settings.maxWidth;
				}
			}

			if(settings.theme !== '' || settings.theme !== 'light') {

				$DOM.toast.classList.add(PLUGIN_NAME+'-theme-'+settings.theme);
			}

			if(settings.color) { //#, rgb, rgba, hsl
				
				if( isColor(settings.color) ){
					$DOM.toast.style.background = settings.color;
				} else {
					$DOM.toast.classList.add(PLUGIN_NAME+'-color-'+settings.color);
				}
			}

			if(settings.backgroundColor) {
				$DOM.toast.style.background = settings.backgroundColor;
				if(settings.balloon){
					$DOM.toast.style.borderColor = settings.backgroundColor;				
				}
			}
		})();

		// Cover image
		(function(){
			if(settings.image) {
				$DOM.cover.classList.add(PLUGIN_NAME + '-cover');
				$DOM.cover.style.width = settings.imageWidth + 'px';

				if(isBase64(settings.image.replace(/ /g,''))){
					$DOM.cover.style.backgroundImage = 'url(data:image/png;base64,' + settings.image.replace(/ /g,'') + ')';
				} else {
					$DOM.cover.style.backgroundImage = 'url(' + settings.image + ')';
				}

				if(settings.rtl){
					$DOM.toastBody.style.marginRight = (settings.imageWidth + 10) + 'px';
				} else {
					$DOM.toastBody.style.marginLeft = (settings.imageWidth + 10) + 'px';				
				}
				$DOM.toast.appendChild($DOM.cover);
			}
		})();

		// Button close
		(function(){
			if(settings.close){
				
				$DOM.buttonClose = document.createElement('button');
				$DOM.buttonClose.type = 'button';
				$DOM.buttonClose.classList.add(PLUGIN_NAME + '-close');
				$DOM.buttonClose.addEventListener('click', function (e) {
					var button = e.target;
					that.hide(settings, $DOM.toast, 'button');
				});
				$DOM.toast.appendChild($DOM.buttonClose);
			} else {
				if(settings.rtl){
					$DOM.toast.style.paddingLeft = '18px';
				} else {
					$DOM.toast.style.paddingRight = '18px';
				}
			}
		})();

		// Progress Bar & Timeout
		(function(){

			if(settings.progressBar){
				$DOM.progressBar = document.createElement('div');
				$DOM.progressBarDiv = document.createElement('div');
				$DOM.progressBar.classList.add(PLUGIN_NAME + '-progressbar');
				$DOM.progressBarDiv.style.background = settings.progressBarColor;
				$DOM.progressBar.appendChild($DOM.progressBarDiv);
				$DOM.toast.appendChild($DOM.progressBar);
			}

			if(settings.timeout) {

				if(settings.pauseOnHover && !settings.resetOnHover){
					
					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).pause();
					});
					$DOM.toast.addEventListener('mouseleave', function (e) {
						that.progress(settings, $DOM.toast).resume();
					});
				}

				if(settings.resetOnHover){

					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).reset();
					});
					$DOM.toast.addEventListener('mouseleave', function (e) {
						that.progress(settings, $DOM.toast).start();
					});
				}
			}
		})();

		// Icon
		(function(){

			if(settings.iconUrl) {

				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon');
				$DOM.icon.setAttribute('src', settings.iconUrl);

			} else if(settings.icon) {
				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon ' + settings.icon);
				
				if(settings.iconText){
					$DOM.icon.appendChild(document.createTextNode(settings.iconText));
				}
				
				if(settings.iconColor){
					$DOM.icon.style.color = settings.iconColor;
				}				
			}

			if(settings.icon || settings.iconUrl) {

				if(settings.rtl){
					$DOM.toastBody.style.paddingRight = '33px';
				} else {
					$DOM.toastBody.style.paddingLeft = '33px';				
				}

				$DOM.toastBody.appendChild($DOM.icon);
			}

		})();

		// Title & Message
		(function(){
			if(settings.title.length > 0) {

				$DOM.strong = document.createElement('strong');
				$DOM.strong.classList.add(PLUGIN_NAME + '-title');
				$DOM.strong.appendChild(createFragElem(settings.title));
				$DOM.toastTexts.appendChild($DOM.strong);

				if(settings.titleColor) {
					$DOM.strong.style.color = settings.titleColor;
				}
				if(settings.titleSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.fontSize = settings.titleSize+'px';
					} else {
						$DOM.strong.style.fontSize = settings.titleSize;
					}
				}
				if(settings.titleLineHeight) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.lineHeight = settings.titleLineHeight+'px';
					} else {
						$DOM.strong.style.lineHeight = settings.titleLineHeight;
					}
				}
			}

			if(settings.message.length > 0) {

				$DOM.p = document.createElement('p');
				$DOM.p.classList.add(PLUGIN_NAME + '-message');
				$DOM.p.appendChild(createFragElem(settings.message));
				$DOM.toastTexts.appendChild($DOM.p);

				if(settings.messageColor) {
					$DOM.p.style.color = settings.messageColor;
				}
				if(settings.messageSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.fontSize = settings.messageSize+'px';
					} else {
						$DOM.p.style.fontSize = settings.messageSize;
					}
				}
				if(settings.messageLineHeight) {
					
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.lineHeight = settings.messageLineHeight+'px';
					} else {
						$DOM.p.style.lineHeight = settings.messageLineHeight;
					}
				}
			}

			if(settings.title.length > 0 && settings.message.length > 0) {
				if(settings.rtl){
					$DOM.strong.style.marginLeft = '10px';
				} else if(settings.layout !== 2 && !settings.rtl) {
					$DOM.strong.style.marginRight = '10px';	
				}
			}
		})();

		$DOM.toastBody.appendChild($DOM.toastTexts);

		// Inputs
		var $inputs;
		(function(){
			if(settings.inputs.length > 0) {

				$DOM.inputs.classList.add(PLUGIN_NAME + '-inputs');

				forEach(settings.inputs, function (value, index) {
					$DOM.inputs.appendChild(createFragElem(value[0]));

					$inputs = $DOM.inputs.childNodes;

					$inputs[index].classList.add(PLUGIN_NAME + '-inputs-child');

					if(value[3]){
						setTimeout(function() {
							$inputs[index].focus();
						}, 300);
					}

					$inputs[index].addEventListener(value[1], function (e) {
						var ts = value[2];
						return ts(that, $DOM.toast, this, e);
					});
				});
				$DOM.toastBody.appendChild($DOM.inputs);
			}
		})();

		// Buttons
		(function(){
			if(settings.buttons.length > 0) {

				$DOM.buttons.classList.add(PLUGIN_NAME + '-buttons');

				forEach(settings.buttons, function (value, index) {
					$DOM.buttons.appendChild(createFragElem(value[0]));

					var $btns = $DOM.buttons.childNodes;

					$btns[index].classList.add(PLUGIN_NAME + '-buttons-child');

					if(value[2]){
						setTimeout(function() {
							$btns[index].focus();
						}, 300);
					}

					$btns[index].addEventListener('click', function (e) {
						e.preventDefault();
						var ts = value[1];
						return ts(that, $DOM.toast, this, e, $inputs);
					});
				});
			}
			$DOM.toastBody.appendChild($DOM.buttons);
		})();

		if(settings.message.length > 0 && (settings.inputs.length > 0 || settings.buttons.length > 0)) {
			$DOM.p.style.marginBottom = '0';
		}

		if(settings.inputs.length > 0 || settings.buttons.length > 0){
			if(settings.rtl){
				$DOM.toastTexts.style.marginLeft = '10px';
			} else {
				$DOM.toastTexts.style.marginRight = '10px';
			}
			if(settings.inputs.length > 0 && settings.buttons.length > 0){
				if(settings.rtl){
					$DOM.inputs.style.marginLeft = '8px';
				} else {
					$DOM.inputs.style.marginRight = '8px';
				}
			}
		}

		// Wrap
		(function(){
			$DOM.toastCapsule.style.visibility = 'hidden';
			setTimeout(function() {
				var H = $DOM.toast.offsetHeight;
				var style = $DOM.toast.currentStyle || window.getComputedStyle($DOM.toast);
				var marginTop = style.marginTop;
					marginTop = marginTop.split('px');
					marginTop = parseInt(marginTop[0]);
				var marginBottom = style.marginBottom;
					marginBottom = marginBottom.split('px');
					marginBottom = parseInt(marginBottom[0]);

				$DOM.toastCapsule.style.visibility = '';
				$DOM.toastCapsule.style.height = (H+marginBottom+marginTop)+'px';

				setTimeout(function() {
					$DOM.toastCapsule.style.height = 'auto';
					if(settings.target){
						$DOM.toastCapsule.style.overflow = 'visible';
					}
				}, 500);

				if(settings.timeout) {
					that.progress(settings, $DOM.toast).start();
				}
			}, 100);
		})();

		// Target
		(function(){
			var position = settings.position;

			if(settings.target){

				$DOM.wrapper = document.querySelector(settings.target);
				$DOM.wrapper.classList.add(PLUGIN_NAME + '-target');

				if(settings.targetFirst) {
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}

			} else {

				if( POSITIONS.indexOf(settings.position) == -1 ){
					console.warn('['+PLUGIN_NAME+'] Incorrect position.\nIt can be › ' + POSITIONS);
					return;
				}

				if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
					if(settings.position == 'bottomLeft' || settings.position == 'bottomRight' || settings.position == 'bottomCenter'){
						position = PLUGIN_NAME+'-wrapper-bottomCenter';
					}
					else if(settings.position == 'topLeft' || settings.position == 'topRight' || settings.position == 'topCenter'){
						position = PLUGIN_NAME+'-wrapper-topCenter';
					}
					else {
						position = PLUGIN_NAME+'-wrapper-center';
					}
				} else {
					position = PLUGIN_NAME+'-wrapper-'+position;
				}
				$DOM.wrapper = document.querySelector('.' + PLUGIN_NAME + '-wrapper.'+position);

				if(!$DOM.wrapper) {
					$DOM.wrapper = document.createElement('div');
					$DOM.wrapper.classList.add(PLUGIN_NAME + '-wrapper');
					$DOM.wrapper.classList.add(position);
					document.body.appendChild($DOM.wrapper);
				}
				if(settings.position == 'topLeft' || settings.position == 'topCenter' || settings.position == 'topRight'){
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}
			}

			if(!isNaN(settings.zindex)) {
				$DOM.wrapper.style.zIndex = settings.zindex;
			} else {
				console.warn('['+PLUGIN_NAME+'] Invalid zIndex.');
			}
		})();

		// Overlay
		(function(){

			if(settings.overlay) {

				if( document.querySelector('.'+PLUGIN_NAME+'-overlay.fadeIn') !== null ){

					$DOM.overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
					$DOM.overlay.setAttribute('data-iziToast-ref', $DOM.overlay.getAttribute('data-iziToast-ref') + ',' + settings.ref);

					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}

				} else {

					$DOM.overlay.classList.add(PLUGIN_NAME+'-overlay');
					$DOM.overlay.classList.add('fadeIn');
					$DOM.overlay.style.background = settings.overlayColor;
					$DOM.overlay.setAttribute('data-iziToast-ref', settings.ref);
					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}
					document.querySelector('body').appendChild($DOM.overlay);
				}

				if(settings.overlayClose) {

					$DOM.overlay.removeEventListener('click', {});
					$DOM.overlay.addEventListener('click', function (e) {
						that.hide(settings, $DOM.toast, 'overlay');
					});
				} else {
					$DOM.overlay.removeEventListener('click', {});
				}
			}			
		})();

		// Inside animations
		(function(){
			if(settings.animateInside){
				$DOM.toast.classList.add(PLUGIN_NAME+'-animateInside');
			
				var animationTimes = [200, 100, 300];
				if(settings.transitionIn == 'bounceInLeft' || settings.transitionIn == 'bounceInRight'){
					animationTimes = [400, 200, 400];
				}

				if(settings.title.length > 0) {
					setTimeout(function(){
						$DOM.strong.classList.add('slideIn');
					}, animationTimes[0]);
				}

				if(settings.message.length > 0) {
					setTimeout(function(){
						$DOM.p.classList.add('slideIn');
					}, animationTimes[1]);
				}

				if(settings.icon || settings.iconUrl) {
					setTimeout(function(){
						$DOM.icon.classList.add('revealIn');
					}, animationTimes[2]);
				}

				var counter = 150;
				if(settings.buttons.length > 0 && $DOM.buttons) {

					setTimeout(function(){

						forEach($DOM.buttons.childNodes, function(element, index) {

							setTimeout(function(){
								element.classList.add('revealIn');
							}, counter);
							counter = counter + 150;
						});

					}, settings.inputs.length > 0 ? 150 : 0);
				}

				if(settings.inputs.length > 0 && $DOM.inputs) {
					counter = 150;
					forEach($DOM.inputs.childNodes, function(element, index) {

						setTimeout(function(){
							element.classList.add('revealIn');
						}, counter);
						counter = counter + 150;
					});
				}
			}
		})();

		settings.onOpening.apply(null, [settings, $DOM.toast]);

		try {
			var event = new CustomEvent(PLUGIN_NAME + '-opening', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {

			$DOM.toast.classList.remove(PLUGIN_NAME+'-opening');
			$DOM.toast.classList.add(PLUGIN_NAME+'-opened');

			try {
				var event = new CustomEvent(PLUGIN_NAME + '-opened', {detail: settings, bubbles: true, cancelable: true});
				document.dispatchEvent(event);
			} catch(ex){
				console.warn(ex);
			}

			settings.onOpened.apply(null, [settings, $DOM.toast]);
		}, 1000);

		if(settings.drag){

			if(ACCEPTSTOUCH) {

			    $DOM.toast.addEventListener('touchstart', function(e) {
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $DOM.toast.addEventListener('touchend', function(e) {
			        drag.stopMoving(this, e);
			    }, false);
			} else {

			    $DOM.toast.addEventListener('mousedown', function(e) {
			    	e.preventDefault();
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $DOM.toast.addEventListener('mouseup', function(e) {
			    	e.preventDefault();
			        drag.stopMoving(this, e);
			    }, false);
			}
		}

		if(settings.closeOnEscape) {

			document.addEventListener('keyup', function (evt) {
				evt = evt || window.event;
				if(evt.keyCode == 27) {
				    that.hide(settings, $DOM.toast, 'esc');
				}
			});
		}

		if(settings.closeOnClick) {
			$DOM.toast.addEventListener('click', function (evt) {
				that.hide(settings, $DOM.toast, 'toast');
			});
		}

		that.toast = $DOM.toast;		
	};
	

	return $iziToast;
});

/***/ }),

/***/ 92430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-pills .nav-item[data-v-e5e363a8]{background:#ddd;border-radius:.25rem;margin:2px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);