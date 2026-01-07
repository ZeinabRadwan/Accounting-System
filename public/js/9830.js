(self["webpackChunk"] = self["webpackChunk"] || []).push([[9830],{

/***/ 35053:
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
___CSS_LOADER_EXPORT___.push([module.id, ".table-responsive[data-v-08784666]{background-color:#fff}.invoices-table[data-v-08784666]{border:1px solid #cbd0dd;border-collapse:separate;border-radius:10px;border-spacing:0;padding:15px 25px;width:100%}.invoices-table tbody th[data-v-08784666]{border:none;font-weight:500;padding:8px 12px;text-align:right}.invoices-table tbody td[data-v-08784666]{border:none;padding:8px 12px;text-align:left}.invoices-table tbody tr[data-v-08784666]{background-color:#fff;border-bottom:1px solid #e5e7eb}.invoices-table tbody tr[data-v-08784666]:last-child{border-bottom:none}.text-bold[data-v-08784666]{font-weight:700}.equal-sign[data-v-08784666]{font-weight:600;margin-left:4px;margin-right:4px}.saudi-riyal[data-v-08784666]{font-family:Arial,sans-serif}[dir=rtl] .invoices-table tbody th[data-v-08784666]{text-align:right}[dir=rtl] .invoices-table tbody td[data-v-08784666]{text-align:left}[dir=ltr] .invoices-table tbody th[data-v-08784666]{text-align:right}[dir=ltr] .invoices-table tbody td[data-v-08784666]{text-align:left}.invoices-table tbody tr[data-v-08784666]{margin-bottom:2px}.table-custom[data-v-08784666]{border:none!important}.table-border-y-0[data-v-08784666]{border-bottom:none!important;border-top:none!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=template&id=c9c7322a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('DetailsActivityTabs', {
    attrs: {
      "show-tabs": !!_vm.allData,
      "default-tab": "details"
    },
    on: {
      "details-clicked": _vm.getQuotation,
      "activity-clicked": _vm.getActivity,
      "tab-changed": _vm.handleTabChange
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c('div', {
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
        }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n            ")]], 2)], 1)];
      },
      proxy: true
    }, {
      key: "details",
      fn: function fn() {
        return [_c('div', {
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
        }, [_c('thead', [_c('tr', [_vm.allData.quotationNo ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Quotation No")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reference ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Reference")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.date ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Quotation Date")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.deliveryPlace ? _c('th', {
          staticStyle: {
            "display": "none"
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.$t("Delivery Place")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('th', [_vm._v(_vm._s(_vm.$t("Note")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('th', {
          staticClass: "text-right"
        }, [_vm._v("\n                        " + _vm._s(_vm.$t("Created By")) + "\n                      ")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_vm.allData.quotationNo ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(_vm.allData.quotationNo, _vm.quotationPrefix)) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reference ? _c('td', [_vm._v("\n                        " + _vm._s(_vm.allData.reference) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.date ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("moment")(_vm.allData.date, "Do MMM, YYYY")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.deliveryPlace ? _c('td', {
          staticStyle: {
            "display": "none"
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.allData.deliveryPlace) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('td', [_vm._v(_vm._s(_vm.allData.note))]) : _vm._e(), _vm._v(" "), _c('td', [_vm.allData.status === 1 ? _c('span', {
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
        }, [_vm._v(_vm._s(_vm.$t("Products")) + ":")]), _vm._v(" "), _c('GeneralTable', {
          attrs: {
            "columns": _vm.quotationProductsColumns,
            "rows": _vm.quotationProductsRows,
            "loading": _vm.loading,
            "wrapper-class": ""
          },
          scopedSlots: _vm._u([{
            key: "cell-code",
            fn: function fn(_ref) {
              var value = _ref.value;
              return [_vm._v("\n                  " + _vm._s(_vm._f("withPrefix")(value, _vm.productPrefix)) + "\n                ")];
            }
          }, {
            key: "cell-price",
            fn: function fn(_ref2) {
              var value = _ref2.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-total",
            fn: function fn(_ref3) {
              var value = _ref3.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-discount",
            fn: function fn(_ref4) {
              var row = _ref4.row;
              return [row._raw.discountType === 'percentage' ? _c('span', [_vm._v("\n                    " + _vm._s(row._raw.discount) + "% (" + _vm._s(_vm.calculateProductDiscountAmount(row._raw)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")]), _vm._v(")\n                  ")]) : row._raw.discountAmount > 0 ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.calculateProductDiscountAmount(row._raw)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t('No Discount')) + "\n                  ")])];
            }
          }, {
            key: "cell-totalAfterDiscount",
            fn: function fn(_ref5) {
              var value = _ref5.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-vat",
            fn: function fn(_ref6) {
              var row = _ref6.row;
              return [row._raw.taxAmount > 0 ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.formatNumber(row._raw.taxAmount)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")]), _vm._v(" "), row._raw.taxRate ? _c('small', {
                staticClass: "text-muted d-block"
              }, [_vm._v("\n                      (" + _vm._s(row._raw.taxRate) + "%)\n                    ")]) : _vm._e()]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t('No VAT')) + "\n                  ")])];
            }
          }, {
            key: "cell-totalWithVat",
            fn: function fn(_ref7) {
              var value = _ref7.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }])
        }), _vm._v(" "), _c('div', {
          staticClass: "mt-2 text-center"
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total with VAT")) + ": " + _vm._s(_vm.calculatedTotal) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])])], 1)]), _vm._v(" "), _c('div', {
          staticClass: "row mt-4"
        }, [_c('div', {
          staticClass: "col-lg-12 col-xl-4 text-lg-right mt-4"
        }, [_c('InvoiceSummaryTable', {
          attrs: {
            "subtotal": _vm.totalPrice,
            "after-discount": _vm.totalPrice - _vm.totalProductDiscount,
            "total-tax": _vm.totalProductVat,
            "transport": 0,
            "grand-total": _vm.totalPrice - _vm.totalProductDiscount + _vm.totalProductVat,
            "paid-amount": 0,
            "due-amount": 0
          }
        })], 1)])], 1)])];
      },
      proxy: true
    }, {
      key: "activity-log",
      fn: function fn() {
        return [_c('div', {
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
        }) : _vm._e()], 1)])], 1)];
      },
      proxy: true
    }])
  })], 1);
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
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(33107);
// EXTERNAL MODULE: ./resources/js/components/sales/InvoiceSummaryTable.vue + 5 modules
var InvoiceSummaryTable = __webpack_require__(94895);
// EXTERNAL MODULE: ./resources/js/components/DetailsActivityTabs.vue + 5 modules
var DetailsActivityTabs = __webpack_require__(64866);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/show.vue?vue&type=script&lang=js
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
      title: this.$t("Quotation Details")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"],
    InvoiceSummaryTable: InvoiceSummaryTable/* default */.A,
    DetailsActivityTabs: DetailsActivityTabs/* default */.A
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
    // Quotation products columns
    quotationProductsColumns: function quotationProductsColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        align: "text-center"
      }, {
        key: "code",
        label: this.$t("Code"),
        align: "text-center"
      }, {
        key: "name",
        label: this.$t("Item Name"),
        align: "text-center"
      }, {
        key: "quantity",
        label: this.$t("Qty"),
        align: "text-center"
      }, {
        key: "price",
        label: this.$t("Price"),
        align: "text-center"
      }, {
        key: "total",
        label: this.$t("Total"),
        align: "text-center"
      }, {
        key: "discount",
        label: this.$t("Discount"),
        align: "text-center"
      }, {
        key: "totalAfterDiscount",
        label: this.$t("Total After Discount"),
        align: "text-center"
      }, {
        key: "vat",
        label: this.$t("VAT"),
        align: "text-center"
      }, {
        key: "totalWithVat",
        label: this.$t("Total with VAT"),
        align: "text-center"
      }];
    },
    // Quotation products rows
    quotationProductsRows: function quotationProductsRows() {
      var _this2 = this;
      if (!this.allData || !this.allData.products) return [];
      return this.allData.products.map(function (product, index) {
        return {
          index: index + 1,
          code: product.productCode,
          name: product.productName,
          quantity: product.quantity,
          price: product.salePrice,
          total: product.salePrice * product.quantity,
          discount: product,
          totalAfterDiscount: product.salePrice * product.quantity - parseFloat(_this2.calculateProductDiscountAmount(product)),
          vat: product,
          totalWithVat: product.salePrice * product.quantity - parseFloat(_this2.calculateProductDiscountAmount(product)) + (parseFloat(product.taxAmount) || 0),
          _raw: product
        };
      });
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
    // Handle tab change (optional, for additional logic if needed)
    handleTabChange: function handleTabChange(tab) {
      // Tab-specific actions are handled by details-clicked and activity-clicked events
    },
    smsNotConfiguredText: function smsNotConfiguredText() {
      if (this.$te && this.$te('SMS settings not configured')) {
        var translated = this.$t('SMS settings not configured');
        return typeof translated === 'string' ? translated : 'SMS settings not configured';
      }
      return 'SMS settings not configured';
    },
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
    // get the quotation
    getQuotation: function getQuotation() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this4.loading = true;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/quotations/" + _this4.$route.params.slug);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this4.allData = data.data;
              _this4.quotationProducts = _this4.allData.products;
              _this4.quotationProducts.sort(_this4.sortProducts);
              _this4.loading = false;
            case 2:
              return _context2.a(2);
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
      var params = new URLSearchParams();
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/quotation/".concat(this.$route.params.slug, "/pdf?").concat(params.toString());
      window.location.href = pdfUrl;
    },
    // preview PDF
    previewPDF: function previewPDF() {
      var params = new URLSearchParams();
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/quotation/".concat(this.$route.params.slug, "/preview?").concat(params.toString());
      window.location.href = pdfUrl;
    },
    // notify
    notify: function notify() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this5.isDemoMode) {
                _context3.n = 2;
                break;
              }
              _this5.loading = true;
              _context3.n = 1;
              return _this5.form.post(window.location.origin + "/api/quotation/notify/" + _this5.$route.params.slug).then(function () {
                toast.fire({
                  type: "success",
                  title: _this5.$t("Notification sent successfully")
                });
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this5.$t("Please check your input and try again.")
                });
              });
            case 1:
              _this5.loading = false;
              _context3.n = 3;
              break;
            case 2:
              toast.fire({
                type: "warning",
                title: _this5.$t("You are not allowed to do this in demo version.")
              });
            case 3:
              return _context3.a(2);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this6.$htmlToPaper("printMe");
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get activity logs
    getActivity: function getActivity() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var currentPage, slug, modelName;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              currentPage = _this7.pagination ? _this7.pagination.current_page : 1;
              _this7.$store.state.operations.loading = true;
              slug = _this7.$route.params.slug;
              modelName = "Quotation";
              _context5.n = 1;
              return _this7.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: currentPage + "&perPage=" + _this7.perPage,
                slug: slug,
                modelName: modelName
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var slug, modelName;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this8.$store.state.operations.loading = true;
              slug = _this8.$route.params.slug;
              modelName = "Quotation";
              _context6.n = 1;
              return _this8.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: _this8.pagination.current_page + "&perPage=" + _this8.perPage,
                term: _this8.query,
                slug: slug,
                modelName: modelName
              });
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _this9.getActivity();
            case 1:
              return _context7.a(2);
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
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _this0.query = "";
            case 1:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _this1.query = "";
              if (_this1.pagination) {
                _this1.pagination.current_page = 1;
              }
              _context9.n = 1;
              return _this1.getActivity();
            case 1:
              _this1.$toast.success(_this1.$t("Refreshed"), _this1.$t("Activity log has been refreshed successfully"));
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // reset pagination
    resetPagination: function resetPagination() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _this10.pagination.current_page = 1;
            case 1:
              return _context0.a(2);
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/quotations/show.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  quotations_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 64866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DetailsActivityTabs)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetailsActivityTabs.vue?vue&type=template&id=5dc72241&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row no-print tabs-header-row"
  }, [_c('div', {
    staticClass: "w-100 text-right float-right"
  }, [_vm.showTabs ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'details'
    },
    attrs: {
      "href": "#details",
      "data-toggle": "tab"
    },
    on: {
      "click": _vm.handleDetailsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-info"
  }), _vm._v("\n                " + _vm._s(_vm.$t("Details")) + "\n              ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'activity-log'
    },
    attrs: {
      "href": "#activity-log",
      "data-toggle": "tab"
    },
    on: {
      "click": _vm.handleActivityClick
    }
  }, [_c('i', {
    staticClass: "nav-icon fa fa-bell",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Activity log")) + "\n              ")])])]), _vm._v(" "), _vm._t("actions")], 2) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane",
    "class": {
      active: _vm.activeTab === 'details'
    },
    attrs: {
      "id": "details"
    }
  }, [_vm._t("details")], 2), _vm._v(" "), _c('div', {
    staticClass: "tab-pane",
    "class": {
      active: _vm.activeTab === 'activity-log'
    },
    attrs: {
      "id": "activity-log"
    }
  }, [_vm._t("activity-log")], 2)])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetailsActivityTabs.vue?vue&type=script&lang=js
/* harmony default export */ const DetailsActivityTabsvue_type_script_lang_js = ({
  name: "DetailsActivityTabs",
  props: {
    showTabs: {
      type: Boolean,
      "default": true
    },
    defaultTab: {
      type: String,
      "default": "details"
    }
  },
  data: function data() {
    return {
      activeTab: this.defaultTab
    };
  },
  methods: {
    handleDetailsClick: function handleDetailsClick() {
      this.switchTab("details");
      this.$emit("details-clicked");
    },
    handleActivityClick: function handleActivityClick() {
      this.switchTab("activity-log");
      this.$emit("activity-clicked");
    },
    switchTab: function switchTab(tab) {
      if (this.activeTab === tab) {
        return;
      }
      this.activeTab = tab;
      this.$emit("tab-changed", tab);
    }
  },
  mounted: function mounted() {
    var _this = this;
    // Set initial active tab
    this.activeTab = this.defaultTab;

    // Listen for Bootstrap tab events to keep state in sync
    if (typeof $ !== "undefined") {
      $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        var target = $(e.target).attr("href");
        if (target === "#details") {
          _this.activeTab = "details";
        } else if (target === "#activity-log") {
          _this.activeTab = "activity-log";
        }
      });
    }
  }
});
;// ./resources/js/components/DetailsActivityTabs.vue?vue&type=script&lang=js
 /* harmony default export */ const components_DetailsActivityTabsvue_type_script_lang_js = (DetailsActivityTabsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetailsActivityTabs.vue?vue&type=style&index=0&id=5dc72241&prod&scoped=true&lang=css
var DetailsActivityTabsvue_type_style_index_0_id_5dc72241_prod_scoped_true_lang_css = __webpack_require__(90709);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DetailsActivityTabs.vue?vue&type=style&index=0&id=5dc72241&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(DetailsActivityTabsvue_type_style_index_0_id_5dc72241_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_DetailsActivityTabsvue_type_style_index_0_id_5dc72241_prod_scoped_true_lang_css = (DetailsActivityTabsvue_type_style_index_0_id_5dc72241_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/DetailsActivityTabs.vue?vue&type=style&index=0&id=5dc72241&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/DetailsActivityTabs.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_DetailsActivityTabsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5dc72241",
  null
  
)

/* harmony default export */ const DetailsActivityTabs = (component.exports);

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

/***/ 90709:
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
___CSS_LOADER_EXPORT___.push([module.id, ".tabs-header-row[data-v-5dc72241]{margin-bottom:1.5rem}.nav-tabs[data-v-5dc72241]{align-self:center;background:#0775af1a;border:none;border-radius:10px;display:flex;gap:10px;justify-content:space-between;margin-bottom:0;padding:10px;width:20%}.nav-item[data-v-5dc72241]{flex:1 1 0}.nav-link[data-v-5dc72241]{align-items:center;border:none;border-radius:10px;color:#000;cursor:pointer;display:inline-flex;font-family:DINNextLTArabic;font-size:.95rem;font-weight:400;justify-content:center;padding:10px 12px;text-align:center;text-decoration:none;transition:all .2s ease;width:100%}.nav-link.active[data-v-5dc72241]{background:#0775af;color:#fff!important}.nav-link[data-v-5dc72241]:hover{filter:brightness(.96)}@media (max-width:576px){.nav-tabs[data-v-5dc72241]{gap:6px}.nav-link[data-v-5dc72241]{font-size:.85rem;padding:8px 10px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InvoiceSummaryTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=template&id=08784666&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "table-responsive table-custom table-border-y-0"
  }, [_c('table', {
    staticClass: "table invoices-table"
  }, [_c('tbody', [_c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v("الإجمالي الفرعي:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.subtotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v("بعد الخصم:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.afterDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("إجمالي الضريبة:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.totalTax)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.transport > 0 ? _c('tr', [_c('th', [_vm._v("النقل:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.transport)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v("الإجمالي الكلي:")]), _vm._v(" "), _c('td', [_vm._v("\n           \n          " + _vm._s(_setup.formatNumber(_vm.grandTotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("إجمالي المدفوع:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.paidAmount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v("المستحق:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_setup.formatNumber(_vm.dueAmount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ const InvoiceSummaryTablevue_type_script_setup_true_lang_js = ({
  __name: 'InvoiceSummaryTable',
  props: {
    subtotal: {
      type: Number,
      "default": 0
    },
    afterDiscount: {
      type: Number,
      "default": 0
    },
    totalTax: {
      type: Number,
      "default": 0
    },
    transport: {
      type: Number,
      "default": 0
    },
    grandTotal: {
      type: Number,
      "default": 0
    },
    paidAmount: {
      type: Number,
      "default": 0
    },
    dueAmount: {
      type: Number,
      "default": 0
    }
  },
  setup: function setup(__props) {
    var props = __props;

    /**
     * Format number to 2 decimal places
     */
    var formatNumber = function formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00';
      }
      return parseFloat(value).toFixed(2);
    };
    return {
      __sfc: true,
      props: props,
      formatNumber: formatNumber
    };
  }
});
;// ./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ const sales_InvoiceSummaryTablevue_type_script_setup_true_lang_js = (InvoiceSummaryTablevue_type_script_setup_true_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=08784666&prod&scoped=true&lang=css
var InvoiceSummaryTablevue_type_style_index_0_id_08784666_prod_scoped_true_lang_css = __webpack_require__(35053);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=08784666&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(InvoiceSummaryTablevue_type_style_index_0_id_08784666_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const sales_InvoiceSummaryTablevue_type_style_index_0_id_08784666_prod_scoped_true_lang_css = (InvoiceSummaryTablevue_type_style_index_0_id_08784666_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=08784666&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/sales/InvoiceSummaryTable.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  sales_InvoiceSummaryTablevue_type_script_setup_true_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "08784666",
  null
  
)

/* harmony default export */ const InvoiceSummaryTable = (component.exports);

/***/ })

}]);