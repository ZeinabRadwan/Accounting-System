"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8936],{

/***/ 35490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-indigo-light[data-v-34f7dc4a]{background-color:#e3f2fd!important}.bg-red-light[data-v-34f7dc4a]{background-color:#ffebee!important}.bg-green-light[data-v-34f7dc4a]{background-color:#e8f5e8!important}.bg-sub-light[data-v-34f7dc4a]{background-color:#f8f9fa!important}.purchases-create-table[data-v-34f7dc4a]{border-collapse:collapse;width:100%}.purchases-create-table td[data-v-34f7dc4a],.purchases-create-table th[data-v-34f7dc4a]{border:1px solid #dee2e6;padding:8px;text-align:center;vertical-align:middle}.purchases-create-table th[data-v-34f7dc4a]{background-color:#f8f9fa;font-size:.875rem;font-weight:700}.purchases-create-table tbody tr[data-v-34f7dc4a]:hover{background-color:#f8f9fa}.purchases-create-table .quantity-field[data-v-34f7dc4a]{text-align:center;width:80px}.purchases-create-table .btn[data-v-34f7dc4a]{font-size:.75rem;padding:.25rem .5rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InvoiceSummaryTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=template&id=a6df283c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "table-responsive table-custom table-border-y-0"
  }, [_c('table', {
    staticClass: "table invoices-table"
  }, [_c('tbody', [_c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Subtotal")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.subtotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("After Discount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.afterDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Tax")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.totalTax)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.transport > 0 ? _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Transport")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.transport)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Grand Total")) + ":")]), _vm._v(" "), _c('td', [_vm._v("\n           \n          " + _vm._s(_vm.formatNumber(_vm.grandTotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Paid")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.paidAmount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', {
    staticClass: "text-bold"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t("Due Amount")) + ":")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatNumber(_vm.dueAmount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=script&lang=js
/* harmony default export */ const InvoiceSummaryTablevue_type_script_lang_js = ({
  name: 'InvoiceSummaryTable',
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
  methods: {
    /**
     * Format number to 2 decimal places
     */
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00';
      }
      return parseFloat(value).toFixed(2);
    }
  }
});
;// ./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=script&lang=js
 /* harmony default export */ const sales_InvoiceSummaryTablevue_type_script_lang_js = (InvoiceSummaryTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=a6df283c&prod&scoped=true&lang=css
var InvoiceSummaryTablevue_type_style_index_0_id_a6df283c_prod_scoped_true_lang_css = __webpack_require__(99597);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=a6df283c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(InvoiceSummaryTablevue_type_style_index_0_id_a6df283c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const sales_InvoiceSummaryTablevue_type_style_index_0_id_a6df283c_prod_scoped_true_lang_css = (InvoiceSummaryTablevue_type_style_index_0_id_a6df283c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/sales/InvoiceSummaryTable.vue?vue&type=style&index=0&id=a6df283c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/sales/InvoiceSummaryTable.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  sales_InvoiceSummaryTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "a6df283c",
  null
  
)

/* harmony default export */ const InvoiceSummaryTable = (component.exports);

/***/ }),

/***/ 64866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 88936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/show.vue?vue&type=template&id=34f7dc4a&scoped=true
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
      "details-clicked": _vm.getInvoiceReturn,
      "activity-clicked": _vm.getActivity,
      "tab-changed": _vm.handleTabChange
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c('div', {
          staticClass: "btn-group"
        }, [_c('a', {
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
        }), _vm._v(" " + _vm._s(_vm.$t("download")) + "\n          ")]), _vm._v(" "), _vm.$can('purchase-return-edit') ? _c('router-link', {
          staticClass: "btn btn-info",
          attrs: {
            "to": {
              name: 'purchaseReturns.edit',
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
              name: 'purchaseReturns.index'
            }
          }
        }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n              " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
          staticClass: "fas fa-long-arrow-alt-left"
        })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
          staticClass: "fas fa-long-arrow-alt-left"
        })] : [_c('i', {
          staticClass: "fas fa-long-arrow-alt-left"
        }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n              ")]]], 2)], 1)];
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
        }, [_c('div', {
          staticClass: "row invoice-info"
        }, [_c('div', {
          staticClass: "col-sm-4 invoice-col"
        }, [_c('CompanyInfo')], 1), _vm._v(" "), _c('div', {
          staticClass: "col-sm-8 invoice-col float-right text-md-right"
        }, [_c('h5', [_vm._v(_vm._s(_vm.$t("Supplier Details")))]), _vm._v(" "), _vm.allData.purchase && _vm.allData.supplier ? _c('div', [_vm.allData.supplier.companyName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Supplier ID")) + ":")]), _vm._v("\n                  " + _vm._s(_vm._f("withPrefix")(_vm.allData.supplier.supplierID, _vm.supplierPrefix))), _c('br')]) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Supplier Name")) + ":")]), _vm._v("\n                " + _vm._s(_vm.allData.supplier.name)), _c('br'), _vm._v(" "), _vm.allData.supplier.companyName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Company Name")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.companyName)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.email ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Email")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.email)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.phoneNumber ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Contact Number")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.phoneNumber)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.address ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Address")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.address)), _c('br')]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
          staticClass: "row mt-3"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('div', {
          staticClass: "table-responsive table-custom"
        }, [_vm.allData.purchase ? _c('table', {
          staticClass: "table"
        }, [_c('thead', [_c('tr', [_vm.allData.purchase.code ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Purchase No")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.returnNo ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Return No")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.purchase.purchaseDate ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Purchase Date")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.returnDate ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Return Date")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reason ? _c('th', [_vm._v("\n                        " + _vm._s(_vm.$t("Return Reason")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('th', [_vm._v(_vm._s(_vm.$t("Note")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.allData.journalEntry ? _c('th', [_vm._v(_vm._s(_vm.$t("Journal Entry")))]) : _vm._e(), _vm._v(" "), _vm.allData.createdBy ? _c('th', {
          staticClass: "text-right"
        }, [_vm._v("\n                        " + _vm._s(_vm.$t("Created By")) + "\n                      ")]) : _vm._e()])]), _vm._v(" "), _c('tbody', [_c('tr', [_vm.allData.purchase.code ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(_vm.allData.purchase.code, _vm.purchasePrefix)) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.returnNo ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(_vm.allData.returnNo, _vm.returnPrefix)) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.purchase.purchaseDate ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("moment")(_vm.allData.purchase.purchaseDate, "Do MMM, YYYY")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.returnDate ? _c('td', [_vm._v("\n                        " + _vm._s(_vm._f("moment")(_vm.allData.returnDate, "Do MMM, YYYY")) + "\n                      ")]) : _vm._e(), _vm._v(" "), _vm.allData.reason ? _c('td', [_vm._v(_vm._s(_vm.allData.reason))]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('td', [_vm._v(_vm._s(_vm.allData.note))]) : _vm._e(), _vm._v(" "), _c('td', [_vm.allData.status === 1 ? _c('span', {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.allData.journalEntry ? _c('td', [_c('router-link', {
          staticClass: "badge bg-info text-white",
          staticStyle: {
            "text-decoration": "none"
          },
          attrs: {
            "to": {
              name: 'journal-entries.show',
              params: {
                id: _vm.allData.journalEntry.id
              }
            }
          }
        }, [_vm._v("\n                          " + _vm._s(_vm.allData.journalEntry.entry_number || "#".concat(_vm.allData.journalEntry.id)) + "\n                        ")])], 1) : _vm._e(), _vm._v(" "), _vm.allData.createdBy ? _c('td', {
          staticClass: "text-right"
        }, [_vm._v("\n                        " + _vm._s(_vm.allData.createdBy) + "\n                      ")]) : _vm._e()])])]) : _vm._e()])])]), _vm._v(" "), _c('div', {
          staticClass: "row position-relative mt-4"
        }, [_c('table-loading', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading"
          }]
        }), _vm._v(" "), _vm.allData.purchase ? _c('div', {
          staticClass: "col-12 table-responsive"
        }, [_c('strong', {
          staticClass: "mb-2 d-block"
        }, [_vm._v(_vm._s(_vm.$t("Return Products")) + ":")]), _vm._v(" "), _c('div', {
          staticClass: "table-custom table-responsive text-center"
        }, [_vm.returnProducts && _vm.returnProducts.length > 0 ? _c('GeneralTable', {
          attrs: {
            "columns": _vm.returnProductsColumns,
            "rows": _vm.returnProductsRows,
            "loading": _vm.loading,
            "wrapper-class": "table-responsive"
          },
          scopedSlots: _vm._u([{
            key: "code",
            fn: function fn(_ref) {
              var row = _ref.row;
              return [row._raw.product ? _c('span', [_vm._v("\n                      " + _vm._s(_vm._f("withPrefix")(row._raw.product.code, _vm.productPrefix)) + "\n                    ")]) : _vm._e()];
            }
          }, {
            key: "name",
            fn: function fn(_ref2) {
              var row = _ref2.row;
              return [row._raw.product ? _c('span', [_vm._v(_vm._s(row._raw.product.name))]) : _vm._e()];
            }
          }, {
            key: "qty",
            fn: function fn(_ref3) {
              var row = _ref3.row;
              return [row._raw.product ? _c('span', [_vm._v("\n                      " + _vm._s(row._raw.returnQty) + "\n                      "), row._raw.product.itemUnit ? _c('span', [_vm._v(_vm._s(row._raw.product.itemUnit.code))]) : _vm._e()]) : _vm._e()];
            }
          }, {
            key: "price",
            fn: function fn(_ref4) {
              var row = _ref4.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(row._raw.purchasePrice)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "total",
            fn: function fn(_ref5) {
              var row = _ref5.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(row._raw.purchasePrice * row._raw.returnQty)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "discount",
            fn: function fn(_ref6) {
              var row = _ref6.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(_vm.calculateUnitDiscount(row._raw))) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "totalAfterDiscount",
            fn: function fn(_ref7) {
              var row = _ref7.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(_vm.calculateUnitNet(row._raw))) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "vatType",
            fn: function fn(_ref8) {
              var row = _ref8.row;
              return [_vm._v("\n                    " + _vm._s(_vm.getVatRate(row._raw)) + "%\n                  ")];
            }
          }, {
            key: "vat",
            fn: function fn(_ref9) {
              var row = _ref9.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(_vm.calculateUnitVat(row._raw))) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "totalWithVat",
            fn: function fn(_ref0) {
              var row = _ref0.row;
              return [_vm._v("\n                    " + _vm._s(_vm.formatToTwoDecimals(_vm.calculateUnitTotal(row._raw))) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }], null, false, 548482702)
        }) : _vm._e(), _vm._v(" "), _vm.returnProducts && _vm.returnProducts.length > 0 ? _c('div', {
          staticClass: "table-responsive mt-2"
        }, [_c('table', {
          staticClass: "table table-sm purchases-create-table"
        }, [_c('tbody', [_c('tr', [_c('td', {
          staticClass: "text-right",
          attrs: {
            "colspan": "5"
          }
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculateTotalReturnedProductCost())) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculateTotalReturnDiscount())) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculateTotalReturnedProductCost() - _vm.calculateTotalReturnDiscount())) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculateTotalReturnTax())) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculateTotalReturnedProductCost() - _vm.calculateTotalReturnDiscount() + _vm.calculateTotalReturnTax())) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])])])])])]) : _vm._e()], 1)]) : _vm._e()], 1), _vm._v(" "), _c('div', {
          staticClass: "row mt-4",
          attrs: {
            "id": "page-break"
          }
        }, [_c('div', {
          staticClass: "col-lg-12 col-xl-8"
        }), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-xl-4 text-lg-right mt-4"
        }, [_c('InvoiceSummaryTable', {
          attrs: {
            "subtotal": _vm.calculateTotalReturnedProductCost(),
            "after-discount": _vm.calculateTotalReturnedProductCost() - _vm.calculateTotalReturnDiscount(),
            "total-tax": _vm.calculateTotalReturnTax(),
            "transport": 0,
            "grand-total": _vm.calculateTotalReturnedProductCost() - _vm.calculateTotalReturnDiscount() + _vm.calculateTotalReturnTax(),
            "paid-amount": 0,
            "due-amount": 0
          }
        })], 1)])])])];
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

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(33107);
// EXTERNAL MODULE: ./resources/js/components/sales/InvoiceSummaryTable.vue + 5 modules
var InvoiceSummaryTable = __webpack_require__(63617);
// EXTERNAL MODULE: ./resources/js/components/DetailsActivityTabs.vue + 5 modules
var DetailsActivityTabs = __webpack_require__(64866);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/show.vue?vue&type=script&lang=js
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
      title: this.isSaudiArabia ? this.$t("Debit Note Details") : this.$t("Purchase Return Details")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"],
    InvoiceSummaryTable: InvoiceSummaryTable/* default */.A,
    DetailsActivityTabs: DetailsActivityTabs/* default */.A
  },
  data: function data() {
    return {
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Purchase Returns",
        url: "purchaseReturns.index"
      }, {
        name: "Details",
        url: ""
      }],
      allData: "",
      purchaseSubTotal: 0,
      purchaseReturn: 0,
      returnProducts: [],
      productPrefix: "",
      purchasePrefix: "",
      returnPrefix: "",
      supplierPrefix: "",
      loading: false,
      query: "",
      perPage: 10
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo", "items", "loading", "pagination"])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Dynamic breadcrumb current page title
    breadcrumbsCurrent: function breadcrumbsCurrent() {
      return this.isSaudiArabia ? this.$t("Debit Note Details") : this.$t("Purchase Return Details");
    },
    // Filter products that have return quantities > 0
    productsWithReturns: function productsWithReturns() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return [];
      }
      return this.returnProducts.filter(function (product) {
        return product.returnQty > 0;
      });
    },
    returnProductsColumns: function returnProductsColumns() {
      return [{
        key: "index",
        label: this.$t("#")
      }, {
        key: "code",
        label: this.$t("Code")
      }, {
        key: "name",
        label: this.$t("Item Name")
      }, {
        key: "qty",
        label: this.$t("Qty")
      }, {
        key: "price",
        label: this.$t("Price")
      }, {
        key: "total",
        label: this.$t("Total")
      }, {
        key: "discount",
        label: this.$t("Discount")
      }, {
        key: "totalAfterDiscount",
        label: this.$t("Total After Discount")
      }, {
        key: "vatType",
        label: this.$t("VAT Type")
      }, {
        key: "vat",
        label: this.$t("VAT")
      }, {
        key: "totalWithVat",
        label: this.$t("Total with VAT")
      }];
    },
    returnProductsRows: function returnProductsRows() {
      var _this = this;
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return [];
      }
      return this.returnProducts.map(function (product, index) {
        var _product$product, _product$product2;
        return {
          index: index + 1,
          code: ((_product$product = product.product) === null || _product$product === void 0 ? void 0 : _product$product.code) || "",
          name: ((_product$product2 = product.product) === null || _product$product2 === void 0 ? void 0 : _product$product2.name) || "",
          qty: product.returnQty,
          price: product.purchasePrice,
          total: product.purchasePrice * product.returnQty,
          discount: product,
          totalAfterDiscount: product,
          vatType: _this.getVatRate(product),
          vat: product,
          totalWithVat: product,
          _raw: product
        };
      });
    }
  }),
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
  created: function created() {
    this.getInvoiceReturn();
    this.productPrefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.returnPrefix = this.appInfo.purchaseReturnPrefix;
    this.supplierPrefix = this.appInfo.supplierPrefix;
  },
  methods: {
    // Handle tab change (optional, for additional logic if needed)
    handleTabChange: function handleTabChange(tab) {
      // Tab-specific actions are handled by details-clicked and activity-clicked events
    },
    // Format number to two decimal places
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      // Handle null, undefined, or non-numeric values
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00';
      }
      var numValue = Number(value);
      if (isNaN(numValue)) {
        return '0.00';
      }
      return numValue.toFixed(2);
    },
    // get the return
    getInvoiceReturn: function getInvoiceReturn() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.loading = true;
              _context.next = 3;
              return axios_default().get(window.location.origin + "/api/purchase-returns/" + _this2.$route.params.slug);
            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this2.allData = data.data;
              _this2.returnProducts = _this2.allData.returnProducts;
              _this2.returnProducts.sort(_this2.sortProducts);
              _this2.calculateTotalAmount();
              _this2.loading = false;
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    sortProducts: function sortProducts(a, b) {
      if (a.product.code < b.product.code) {
        return -1;
      }
      if (a.product.code > b.product.code) {
        return 1;
      }
      return 0;
    },
    // Get VAT rate for a product from database
    getVatRate: function getVatRate() {
      var product = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (product && product.vatRate) {
        return product.vatRate;
      }
      // Fallback to first product's VAT rate or default 15%
      if (this.returnProducts && this.returnProducts.length > 0) {
        return this.returnProducts[0].vatRate || 15;
      }
      return 15; // Default VAT rate
    },
    // Calculate unit discount
    calculateUnitDiscount: function calculateUnitDiscount(product) {
      var returnQty = parseFloat(product.returnQty) || 0;
      var discountAmount = parseFloat(product.discountAmount) || 0;
      var purchasedQty = parseFloat(product.purchasedQty) || 1;
      if (purchasedQty > 0) {
        var unitDiscount = discountAmount / purchasedQty;
        return Number((unitDiscount * returnQty).toFixed(2));
      }
      return 0;
    },
    // Calculate unit net (price after discount)
    calculateUnitNet: function calculateUnitNet(product) {
      var purchasePrice = parseFloat(product.purchasePrice) || 0;
      var returnQty = parseFloat(product.returnQty) || 0;
      var discountAmount = parseFloat(product.discountAmount) || 0;
      var purchasedQty = parseFloat(product.purchasedQty) || 1;
      if (purchasedQty > 0) {
        var unitDiscount = discountAmount / purchasedQty;
        var unitNet = purchasePrice - unitDiscount;
        return Number((unitNet * returnQty).toFixed(2));
      }
      return Number((purchasePrice * returnQty).toFixed(2));
    },
    // Calculate unit VAT
    calculateUnitVat: function calculateUnitVat(product) {
      var returnQty = parseFloat(product.returnQty) || 0;
      var discountAmount = parseFloat(product.discountAmount) || 0;
      var purchasedQty = parseFloat(product.purchasedQty) || 1;
      var purchasePrice = parseFloat(product.purchasePrice) || 0;
      var vatRate = this.getVatRate(product);
      if (purchasedQty > 0) {
        var unitDiscount = discountAmount / purchasedQty;
        var unitNet = purchasePrice - unitDiscount;
        var unitVat = unitNet * vatRate / 100;
        return Number((unitVat * returnQty).toFixed(2));
      }
      return 0;
    },
    // Calculate unit total (net + VAT)
    calculateUnitTotal: function calculateUnitTotal(product) {
      var unitNet = this.calculateUnitNet(product);
      var unitVat = this.calculateUnitVat(product);
      return Number((unitNet + unitVat).toFixed(2));
    },
    // Calculate total cost of returned products
    calculateTotalReturnedProductCost: function calculateTotalReturnedProductCost() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce(function (total, product) {
        var returnQty = parseFloat(product.returnQty) || 0;
        var purchasePrice = parseFloat(product.purchasePrice) || 0;
        return total + returnQty * purchasePrice;
      }, 0);
    },
    // Calculate total return discount
    calculateTotalReturnDiscount: function calculateTotalReturnDiscount() {
      var _this3 = this;
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce(function (total, product) {
        return total + _this3.calculateUnitDiscount(product);
      }, 0);
    },
    // Calculate total return tax
    calculateTotalReturnTax: function calculateTotalReturnTax() {
      var _this4 = this;
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce(function (total, product) {
        return total + _this4.calculateUnitVat(product);
      }, 0);
    },
    // calculate total return
    calculateTotalAmount: function calculateTotalAmount() {
      var purchaseSubTotal = 0;
      var purchaseReturn = 0;
      if (this.returnProducts) {
        purchaseSubTotal = this.returnProducts.reduce(function (prev, next) {
          return prev + Number(next.purchasedQty) * Number(next.purchasePrice);
        }, 0);
        purchaseReturn = this.returnProducts.reduce(function (prev, next) {
          return prev + Number(next.returnQty) * Number(next.purchasePrice);
        }, 0);
      }
      this.purchaseSubTotal = purchaseSubTotal;
      this.purchaseReturn = purchaseReturn;
      return;
    },
    // print
    // Commented out - replaced with downloadPDF and previewPDF methods
    // printWindow() {
    //   window.print();
    // },
    // download PDF
    downloadPDF: function downloadPDF() {
      var params = new URLSearchParams();
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/purchase-return/".concat(this.$route.params.slug, "/pdf?").concat(params.toString());
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
      var pdfUrl = "/print/purchase-return/".concat(this.$route.params.slug, "/preview?").concat(params.toString());
      window.location.href = pdfUrl;
    },
    // Commented out - replaced with downloadPDF method
    // generatePDF() {
    //   // Get the HTML content to be converted
    //   const element = document.getElementById("content-to-pdf");
    //   // Options for PDF generation
    //   const options = {
    //     margin: 5,
    //     filename: "Purchase Return Invoice-" + this.$route.params.slug + ".pdf",
    //     image: { type: "jpeg", quality: 0.98 },
    //     pagebreak: { mode: "avoid-all", before: "#page-break" },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    //   };
    //   // Generate PDF from HTML content
    //   html2pdf().from(element).set(options).save();
    // },
    // print table
    print: function print() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this5.$htmlToPaper("printMe");
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get activity logs
    getActivity: function getActivity() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var currentPage, slug, modelName;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              currentPage = _this6.pagination ? _this6.pagination.current_page : 1;
              _this6.$store.state.operations.loading = true;
              slug = _this6.$route.params.slug;
              modelName = "PurchaseReturn";
              _context3.next = 6;
              return _this6.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: currentPage + "&perPage=" + _this6.perPage,
                slug: slug,
                modelName: modelName
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var slug, modelName;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this7.$store.state.operations.loading = true;
              slug = _this7.$route.params.slug;
              modelName = "PurchaseReturn";
              _context4.next = 5;
              return _this7.$store.dispatch("operations/fetchSpecificLogs", {
                path: "/api/activity-log-specific?page=",
                currentPage: _this7.pagination.current_page + "&perPage=" + _this7.perPage,
                term: _this7.query,
                slug: slug,
                modelName: modelName
              });
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this8.getActivity();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },
    // reload after search
    reload: function reload() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this9.query = "";
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this0.query = "";
              if (_this0.pagination) {
                _this0.pagination.current_page = 1;
              }
              _context7.next = 4;
              return _this0.getActivity();
            case 4:
              _this0.$toast.success(_this0.$t("Refreshed"), _this0.$t("Activity log has been refreshed successfully"));
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    // reset pagination
    resetPagination: function resetPagination() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this1.pagination.current_page = 1;
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    }
  }
});
;// ./resources/js/pages/purchases/returns/show.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/show.vue?vue&type=style&index=0&id=34f7dc4a&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_34f7dc4a_prod_scoped_true_lang_css = __webpack_require__(35490);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/show.vue?vue&type=style&index=0&id=34f7dc4a&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_34f7dc4a_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_showvue_type_style_index_0_id_34f7dc4a_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_34f7dc4a_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchases/returns/show.vue?vue&type=style&index=0&id=34f7dc4a&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/returns/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "34f7dc4a",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 90709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 99597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-responsive[data-v-a6df283c]{background-color:#fff}.invoices-table[data-v-a6df283c]{border:1px solid #cbd0dd;border-collapse:separate;border-radius:8px;border-spacing:0;font-size:.9rem;padding:10px 15px;width:100%}.invoices-table tbody th[data-v-a6df283c]{border:none;font-size:.9rem;font-weight:500;padding:6px 10px;text-align:right}.invoices-table tbody td[data-v-a6df283c]{border:none;font-size:.9rem;padding:6px 10px;text-align:left}.invoices-table tbody tr[data-v-a6df283c]{background-color:#fff;border-bottom:1px solid #e5e7eb}.invoices-table tbody tr[data-v-a6df283c]:last-child{border-bottom:none}.text-bold[data-v-a6df283c]{font-weight:700}.equal-sign[data-v-a6df283c]{font-weight:600;margin-left:4px;margin-right:4px}.saudi-riyal[data-v-a6df283c]{font-family:Arial,sans-serif}[dir=rtl] .invoices-table tbody th[data-v-a6df283c]{text-align:right}[dir=rtl] .invoices-table tbody td[data-v-a6df283c]{text-align:left}[dir=ltr] .invoices-table tbody th[data-v-a6df283c]{text-align:right}[dir=ltr] .invoices-table tbody td[data-v-a6df283c]{text-align:left}.invoices-table tbody tr[data-v-a6df283c]{margin-bottom:2px}.table-custom[data-v-a6df283c]{border:none!important}.table-border-y-0[data-v-a6df283c]{border-bottom:none!important;border-top:none!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);