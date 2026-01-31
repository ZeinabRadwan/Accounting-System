(self["webpackChunk"] = self["webpackChunk"] || []).push([[7859],{

/***/ 4880:
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
___CSS_LOADER_EXPORT___.push([module.id, ".form-group[data-v-1def6f66]{margin-bottom:1rem}.form-group label[data-v-1def6f66]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-1def6f66]{color:#dc3545;font-weight:700}.form-control[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-1def6f66]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-1def6f66]{border-color:#dc3545!important}textarea.form-control[data-v-1def6f66]{min-height:100px;resize:vertical}.v-select[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.btn-success[data-v-1def6f66]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-1def6f66]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-1def6f66]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-1def6f66]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-1def6f66]{cursor:pointer;text-decoration:none}.row[data-v-1def6f66]{margin-bottom:1rem}.row[data-v-1def6f66]:last-child{margin-bottom:0}@media (max-width:768px){.form-control[data-v-1def6f66]{font-size:.9rem;padding:8px 12px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 64557:
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
___CSS_LOADER_EXPORT___.push([module.id, ".create-btn[data-v-65c2e2a1]{align-items:center;background-color:#f8f9fa;border:1px solid #e5e7eb;border-left:none;cursor:pointer;display:flex;justify-content:center;padding:11px;transition:background-color .2s ease}.create-btn[data-v-65c2e2a1]:hover{background-color:#e9ecef}.create-btn i[data-v-65c2e2a1]{color:#33a0d9;font-size:18px}[dir=rtl] .create-btn[data-v-65c2e2a1]{border-left:1px solid #e5e7eb;border-radius:.25rem 0 0 .25rem;border-right:none}[dir=ltr] .create-btn[data-v-65c2e2a1]{border-left:none;border-radius:0 .25rem .25rem 0;border-right:1px solid #e5e7eb}.d-flex.w-100 .v-select[data-v-65c2e2a1]{flex:1}.d-flex.w-100 .v-select .vs__dropdown-toggle[data-v-65c2e2a1]{border-right:none}[dir=rtl] .d-flex.w-100 .v-select .vs__dropdown-toggle[data-v-65c2e2a1]{border-left:none;border-right:1px solid #e5e7eb}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ 67859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/show.vue?vue&type=template&id=220487a0
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
      "details-clicked": _vm.getPurchase,
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
        }), _vm._v(" " + _vm._s(_vm.$t("download")) + "\n          ")]), _vm._v(" "), _vm.allData && (_vm.allData.journalEntry || _vm.allData.journal_entry) && _vm.calculateDueAmount > 0 ? _c('a', {
          staticClass: "btn btn-primary",
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.addPayment();
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-money-bill"
        }), _vm._v(" " + _vm._s(_vm.$t("Add Payment")) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.$can('purchase-return-create') && _vm.allData ? _c('a', {
          staticClass: "btn btn-warning",
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.returnPurchase(_vm.allData);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-undo"
        }), _vm._v(" " + _vm._s(_vm.$t("Return Purchase")) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.$can('purchase-edit') ? _c('router-link', {
          staticClass: "btn btn-info",
          attrs: {
            "to": {
              name: 'purchases.edit',
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
              name: 'purchases.index'
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
        }, [_c('h5', [_vm._v(_vm._s(_vm.$t("Supplier Details")))]), _vm._v(" "), _vm.allData.supplier ? _c('div', [_c('strong', [_vm._v(_vm._s(_vm.$t("Supplier ID")) + ":")]), _vm._v("\n                " + _vm._s(_vm._f("withPrefix")(_vm.allData.supplier.supplierID, _vm.supplierPrefix))), _c('br'), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Supplier Name")) + ":")]), _vm._v("\n                " + _vm._s(_vm.allData.supplier.name)), _c('br'), _vm._v(" "), _vm.allData.supplier.companyName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Company Name")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.companyName)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.email ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Email")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.email)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.phoneNumber ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Contact Number")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.phoneNumber)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.supplier.address ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Address")) + ":")]), _vm._v("\n                  " + _vm._s(_vm.allData.supplier.address)), _c('br')]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
          staticClass: "row mt-3"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('GeneralTable', {
          attrs: {
            "columns": _vm.purchaseHeaderColumns,
            "rows": _vm.purchaseHeaderRows,
            "loading": _vm.loading,
            "wrapper-class": ""
          },
          scopedSlots: _vm._u([{
            key: "cell-purchaseNo",
            fn: function fn(_ref) {
              var value = _ref.value;
              return [_vm._v("\n                  " + _vm._s(_vm._f("withPrefix")(value, _vm.purchasePrefix)) + "\n                ")];
            }
          }, {
            key: "cell-purchaseDate",
            fn: function fn(_ref2) {
              var value = _ref2.value;
              return [_vm._v("\n                  " + _vm._s(_vm._f("moment")(value, "Do MMM, YYYY")) + "\n                ")];
            }
          }, {
            key: "cell-purchaseStatus",
            fn: function fn(_ref3) {
              var value = _ref3.value;
              return [value === 'تم الاستلام' ? _c('span', {
                staticClass: "badge bg-success"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t("Received")) + " (" + _vm._s(value) + ")\n                  ")]) : value === 'معلقة' ? _c('span', {
                staticClass: "badge bg-warning"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t("Pending")) + " (" + _vm._s(value) + ")\n                  ")]) : _c('span', [_vm._v(_vm._s(value || '-'))])];
            }
          }, {
            key: "cell-journalEntry",
            fn: function fn(_ref4) {
              var value = _ref4.value;
              return [value && value.id ? _c('router-link', {
                staticClass: "badge bg-info text-white",
                staticStyle: {
                  "text-decoration": "none"
                },
                attrs: {
                  "to": {
                    name: 'journal-entries.show',
                    params: {
                      id: value.id
                    }
                  }
                }
              }, [_vm._v("\n                    " + _vm._s(value.entry_number || "#".concat(value.id)) + "\n                  ")]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("-")])];
            }
          }, {
            key: "cell-discountType",
            fn: function fn(_ref5) {
              var value = _ref5.value;
              return [value === 'percentage' ? _c('span', [_vm._v(_vm._s(_vm.$t("%")))]) : value === 'fixed' ? _c('span', [_vm._v(_vm._s(_vm.$t("Fixed")))]) : _c('span', [_vm._v(_vm._s(value || '-'))])];
            }
          }, {
            key: "cell-discountValue",
            fn: function fn(_ref6) {
              var value = _ref6.value,
                row = _ref6.row;
              return [value !== null && value !== undefined && value !== '' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.formatNumber(value)) + "\n                    "), row.discountType === 'percentage' ? _c('span', [_vm._v("%")]) : _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("-")])];
            }
          }, {
            key: "cell-discountAmount",
            fn: function fn(_ref7) {
              var value = _ref7.value;
              return [value !== null && value !== undefined && value !== '' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("-")])];
            }
          }])
        })], 1)]), _vm._v(" "), _vm.allData.attachments && _vm.allData.attachments.length > 0 ? _c('div', {
          staticClass: "row mt-3"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('div', {
          staticClass: "table-responsive table-custom"
        }, [_c('table', {
          staticClass: "table invoices-table"
        }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Attachments")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('ul', {
          staticClass: "list-unstyled mb-0"
        }, _vm._l(_vm.allData.attachments, function (attachment, index) {
          return _c('li', {
            key: index,
            staticClass: "mb-2"
          }, [_c('a', {
            staticClass: "d-flex align-items-center",
            attrs: {
              "href": attachment.url || attachment.path,
              "target": "_blank"
            }
          }, [_c('i', {
            staticClass: "fas fa-file mr-2"
          }), _vm._v(" "), _c('span', [_vm._v(_vm._s(attachment.name || attachment.file_name || "Attachment ".concat(index + 1)))])])]);
        }), 0)])])])])])])]) : _vm._e(), _vm._v(" "), _vm.allData.note ? _c('div', {
          staticClass: "row mt-3"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('div', {
          staticClass: "table-responsive table-custom"
        }, [_c('table', {
          staticClass: "table invoices-table"
        }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Notes")))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v(_vm._s(_vm.allData.note))])])])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "row mt-4"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('strong', {
          staticClass: "mb-2 d-block"
        }, [_vm._v(_vm._s(_vm.$t("Purchase Products")) + ":")]), _vm._v(" "), _c('GeneralTable', {
          attrs: {
            "columns": _vm.purchaseProductsColumns,
            "rows": _vm.purchaseProductsRows,
            "loading": _vm.loading,
            "wrapper-class": ""
          },
          scopedSlots: _vm._u([{
            key: "cell-code",
            fn: function fn(_ref8) {
              var value = _ref8.value;
              return [_vm._v("\n                  " + _vm._s(_vm._f("withPrefix")(value, _vm.productPrefix)) + "\n                ")];
            }
          }, {
            key: "cell-price",
            fn: function fn(_ref9) {
              var value = _ref9.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-total",
            fn: function fn(_ref0) {
              var value = _ref0.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-discount",
            fn: function fn(_ref1) {
              var value = _ref1.value;
              return [value > 0 ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t('No Discount')) + "\n                  ")])];
            }
          }, {
            key: "cell-totalAfterDiscount",
            fn: function fn(_ref10) {
              var value = _ref10.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-vat",
            fn: function fn(_ref11) {
              var value = _ref11.value;
              return [value > 0 ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])]) : _c('span', {
                staticClass: "text-muted"
              }, [_vm._v("\n                    " + _vm._s(_vm.$t('No VAT')) + "\n                  ")])];
            }
          }, {
            key: "cell-totalWithVat",
            fn: function fn(_ref12) {
              var value = _ref12.value;
              return [_vm._v("\n                  " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }])
        }), _vm._v(" "), _c('div', {
          staticClass: "mt-2 text-center"
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")) + ": " + _vm._s(_vm.formatNumber(_vm.invoiceSubtotal)) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])])], 1)]), _vm._v(" "), _c('div', {
          staticClass: "row mt-4",
          attrs: {
            "id": "page-break"
          }
        }, [_c('div', {
          staticClass: "col-lg-12 col-xl-8"
        }, [_vm.allData.payments && _vm.allData.payments.length > 0 ? _c('div', [_c('div', {
          staticClass: "d-flex justify-content-between align-items-center mb-2"
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Payment History")) + ":")]), _vm._v(" "), _vm.allData.paymentType !== undefined || _vm.allData.payment_type !== undefined ? _c('div', [_c('strong', [_vm._v(_vm._s(_vm.$t("Payment Type")) + ":")]), _vm._v(" "), _vm.allData.paymentType === 'paid' || _vm.allData.payment_type === 'paid' ? _c('span', {
          staticClass: "badge bg-success ml-2"
        }, [_vm._v("\n                      " + _vm._s(_vm.$t("Paid")) + " (مدفوع)\n                    ")]) : _c('span', {
          staticClass: "badge bg-warning ml-2"
        }, [_vm._v("\n                      " + _vm._s(_vm.$t("On Credit")) + " (أجل)\n                    ")]), _vm._v(" "), (_vm.allData.paymentType === 'paid' || _vm.allData.payment_type === 'paid') && (_vm.allData.paymentMethod || _vm.allData.payment_method_id) ? _c('span', {
          staticClass: "ml-2"
        }, [_vm._v("\n                      - " + _vm._s(_vm.allData.paymentMethod ? _vm.allData.paymentMethod.name : _vm.allData.payment_method_id ? _vm.getPaymentMethodName(_vm.allData.payment_method_id) : '-') + "\n                    ")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('GeneralTable', {
          attrs: {
            "columns": _vm.purchasePaymentHistoryColumns,
            "rows": _vm.purchasePaymentHistoryRows,
            "loading": _vm.loading,
            "wrapper-class": ""
          },
          scopedSlots: _vm._u([{
            key: "cell-amount",
            fn: function fn(_ref13) {
              var value = _ref13.value;
              return [_vm._v("\n                    " + _vm._s(_vm.formatNumber(value)) + " "), _c('span', {
                staticClass: "saudi-riyal"
              }, [_vm._v("ê")])];
            }
          }, {
            key: "cell-status",
            fn: function fn(_ref14) {
              var value = _ref14.value;
              return [value === 1 ? _c('span', {
                staticClass: "badge bg-success"
              }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
                staticClass: "badge bg-danger"
              }, [_vm._v(_vm._s(_vm.$t("Inactive")))])];
            }
          }], null, false, 1246411211)
        }), _vm._v(" "), _c('div', {
          staticClass: "mt-2 text-right"
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total Paid")) + ": " + _vm._s(_vm.formatNumber(_vm.allData.totalPaid)) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])])], 1) : _c('div', {
          staticClass: "no-print mt-4 w-100"
        }, [_c('InfoAlert', {
          attrs: {
            "message": _vm.$t('No payments available yet!')
          }
        }), _vm._v(" "), _vm.allData.paymentType !== undefined || _vm.allData.payment_type !== undefined ? _c('div', {
          staticClass: "mt-3 text-right"
        }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Payment Type")) + ":")]), _vm._v(" "), _vm.allData.paymentType === 'paid' || _vm.allData.payment_type === 'paid' ? _c('span', {
          staticClass: "badge bg-success ml-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Paid")) + " (مدفوع)\n                  ")]) : _c('span', {
          staticClass: "badge bg-warning ml-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("On Credit")) + " (أجل)\n                  ")]), _vm._v(" "), (_vm.allData.paymentType === 'paid' || _vm.allData.payment_type === 'paid') && (_vm.allData.paymentMethod || _vm.allData.payment_method_id) ? _c('span', {
          staticClass: "ml-2"
        }, [_vm._v("\n                    - " + _vm._s(_vm.allData.paymentMethod ? _vm.allData.paymentMethod.name : _vm.allData.payment_method_id ? _vm.getPaymentMethodName(_vm.allData.payment_method_id) : '-') + "\n                  ")]) : _vm._e()]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-xl-4 text-lg-right mt-4 pt-2"
        }, [_vm.allData.supplier ? _c('InvoiceSummaryTable', {
          attrs: {
            "subtotal": _vm.invoiceSubtotal,
            "after-discount": _vm.netAmountBeforeVAT,
            "total-tax": _vm.vatAmount,
            "transport": _vm.shippingCostTotal,
            "grand-total": _vm.grandTotal,
            "paid-amount": _vm.allData.totalPaid || 0,
            "due-amount": _vm.calculateDueAmount
          }
        }) : _vm._e()], 1)])], 1)])];
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
  }), _vm._v(" "), _c('InvoicePaymentModal', {
    attrs: {
      "show": _vm.showPaymentModal,
      "type": "purchase",
      "invoice-id": _vm.allData ? _vm.allData.id : null,
      "invoice-no": _vm.allData ? _vm.allData.purchaseNo : '',
      "invoice-prefix": _vm.purchasePrefix,
      "invoice-total": _vm.grandTotal,
      "due-amount": _vm.calculateDueAmount,
      "invoice-status": _vm.allData ? _vm.allData.status : 1,
      "purchase-slug": _vm.allData ? _vm.allData.slug : null
    },
    on: {
      "close": function close($event) {
        _vm.showPaymentModal = false;
      },
      "payment-saved": _vm.handlePaymentSaved
    }
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
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.js
var sweetalert2 = __webpack_require__(94948);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(33107);
// EXTERNAL MODULE: ./resources/js/components/sales/InvoiceSummaryTable.vue + 5 modules
var InvoiceSummaryTable = __webpack_require__(63617);
// EXTERNAL MODULE: ./resources/js/components/shared/InfoAlert.vue + 5 modules
var InfoAlert = __webpack_require__(91640);
// EXTERNAL MODULE: ./resources/js/components/DetailsActivityTabs.vue + 5 modules
var DetailsActivityTabs = __webpack_require__(64866);
// EXTERNAL MODULE: ./resources/js/components/InvoicePaymentModal.vue + 5 modules
var InvoicePaymentModal = __webpack_require__(68601);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/show.vue?vue&type=script&lang=js
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
      title: this.$t("Purchase Details")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"],
    InvoiceSummaryTable: InvoiceSummaryTable/* default */.A,
    InfoAlert: InfoAlert/* default */.A,
    DetailsActivityTabs: DetailsActivityTabs/* default */.A,
    InvoicePaymentModal: InvoicePaymentModal/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Purchase Details",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Purchases",
        url: "purchases.index"
      }, {
        name: "Details",
        url: ""
      }],
      allData: "",
      purchaseSubTotal: 0,
      purchaseReturn: 0,
      purchaseProducts: [],
      productPrefix: "",
      purchasePrefix: "",
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
      },
      showPaymentModal: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo", "items", "loading", "pagination"])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Invoice Subtotal: Sum of all item totals BEFORE discount (qty × unit_price)
    // This matches the create page logic: Subtotal = sum(item.grossTotal)
    invoiceSubtotal: function invoiceSubtotal() {
      if (!this.purchaseProducts || this.purchaseProducts.length === 0) return 0;
      return this.roundToTwoDecimals(this.purchaseProducts.reduce(function (total, product) {
        return total + parseFloat(product.grossTotal || 0);
      }, 0));
    },
    // Invoice-Level Discount Amount: Calculated from discount_type and discount_value
    // This matches the create page logic
    invoiceLevelDiscountAmount: function invoiceLevelDiscountAmount() {
      if (!this.allData || !this.hasPurchaseDiscount) return 0;
      var discountType = this.purchaseDiscountType;
      var discountValue = this.purchaseDiscountValue;
      var subtotal = this.invoiceSubtotal;
      if (!discountType || !discountValue || discountValue <= 0 || subtotal <= 0) {
        return 0;
      }
      var discountAmount = 0;
      if (discountType === 'percentage') {
        discountAmount = this.roundToTwoDecimals(subtotal * discountValue / 100);
      } else {
        discountAmount = this.roundToTwoDecimals(parseFloat(discountValue));
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal ? this.roundToTwoDecimals(subtotal) : discountAmount;
    },
    // Subtotal: Same as invoiceSubtotal (for backward compatibility)
    subtotal: function subtotal() {
      return this.invoiceSubtotal;
    },
    // Total Discount: Invoice-level discount amount (distributed proportionally across items)
    // This matches the create page: discount is applied at invoice level
    totalDiscount: function totalDiscount() {
      return this.invoiceLevelDiscountAmount;
    },
    // Shipping Cost Total: Invoice-level shipping cost
    // CRITICAL: When transport is taxable, allData.transport contains transport + VAT
    // We need to return the total transport amount (including VAT) for display
    // But for netAmountBeforeVAT calculation, we need transport before VAT
    shippingCostTotal: function shippingCostTotal() {
      if (!this.allData) return 0;
      // For show page, we use the stored transport value (total amount including VAT if taxable)
      var transportCost = parseFloat(this.allData.transport || 0);
      return this.roundToTwoDecimals(transportCost);
    },
    // Transport Cost Before VAT: Calculate transport cost before VAT when taxable
    // CRITICAL: When transport is taxable, allData.transport = transportCost + VAT
    // We need to extract transportCost from the total to calculate netAmountBeforeVAT correctly
    transportCostBeforeVAT: function transportCostBeforeVAT() {
      if (!this.allData) return 0;
      if (!this.isTransportTaxable) {
        // Transport is non-taxable: transport value is the cost itself (no VAT)
        return this.shippingCostTotal;
      }

      // Transport is taxable: calculate transport cost before VAT
      // We need to reverse-calculate: transportTotal = transportCost + (transportCost × VAT rate)
      // So: transportCost = transportTotal / (1 + VAT rate / 100)

      var transportTotal = parseFloat(this.allData.transport || 0);
      if (transportTotal <= 0) return 0;

      // Get VAT rate - use weighted average from items or default 15%
      var vatRate = 15; // Default VAT rate
      if (this.purchaseProducts && this.purchaseProducts.length > 0) {
        // Calculate weighted average VAT rate from items
        var totalNetAmount = 0;
        var weightedVatSum = 0;
        this.purchaseProducts.forEach(function (product) {
          var itemNetAmount = parseFloat(product.totalAfterDiscount || 0);
          var itemTax = parseFloat(product.taxTotal || product.tax_amount || 0);
          if (itemNetAmount > 0 && itemTax > 0) {
            var itemVatRate = itemTax / itemNetAmount * 100;
            totalNetAmount += itemNetAmount;
            weightedVatSum += itemNetAmount * (itemVatRate / 100);
          }
        });
        if (totalNetAmount > 0) {
          vatRate = weightedVatSum / totalNetAmount * 100;
        }
      }

      // Calculate transport cost before VAT: transportCost = transportTotal / (1 + vatRate/100)
      var transportCost = transportTotal / (1 + vatRate / 100);
      return this.roundToTwoDecimals(transportCost);
    },
    // Helper computed property to check if transport is taxable
    // Returns true only if transport_taxable is explicitly true or 1
    // Returns false if transport_taxable is false, 0, null, or undefined
    // CRITICAL: When transport_taxable is NULL in DB, it means non-taxable (new behavior)
    isTransportTaxable: function isTransportTaxable() {
      if (!this.allData) return true; // Default to taxable for backward compatibility

      // Check multiple possible field names (transport_taxable, transportIsTaxable, etc.)
      var transportTaxable = this.allData.transport_taxable !== undefined ? this.allData.transport_taxable : this.allData.transportIsTaxable !== undefined ? this.allData.transportIsTaxable : null;

      // Debug: Log the value to help diagnose issues (uncomment for debugging)
      // console.log('transport_taxable value:', transportTaxable, 'type:', typeof transportTaxable, 'allData keys:', Object.keys(this.allData));

      // Explicitly check for true or 1 (string or number)
      if (transportTaxable === true || transportTaxable === 1 || transportTaxable === '1') {
        return true;
      }

      // Everything else (false, 0, null, undefined, '0', 'false') is non-taxable
      // This includes NULL from database which should be treated as non-taxable
      // IMPORTANT: For purchases created with non-taxable transport, transport_taxable will be NULL/false
      return false;
    },
    // Net Amount Before VAT: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use DB values directly to avoid double-counting
    // 
    // If transport is taxable: Net Amount = Subtotal - Discount + Transport
    // If transport is non-taxable: Net Amount = Sum of Item Totals After Discount (from DB)
    //   Transport is NOT included in Net Amount when non-taxable
    netAmountBeforeVAT: function netAmountBeforeVAT() {
      if (!this.allData) return 0;
      if (!this.isTransportTaxable) {
        // Transport is non-taxable: calculate net amount after invoice-level discount
        // CRITICAL: Must subtract invoice-level discount from subtotal
        var _subtotal = this.invoiceSubtotal;
        var invoiceDiscount = this.invoiceLevelDiscountAmount;

        // Net amount = Subtotal - Invoice-level discount
        // This represents items net after all discounts (before VAT and transport)
        return this.roundToTwoDecimals(_subtotal - invoiceDiscount);
      }

      // Transport is taxable: include transport cost (before VAT) in Net Amount
      // CRITICAL: We must use transport cost BEFORE VAT, not the total (which includes VAT)
      // Net Amount = Subtotal - Discount + Transport Cost (before VAT)
      // VAT will be calculated on this Net Amount, which includes transport cost
      var subtotal = this.invoiceSubtotal;
      var discount = this.invoiceLevelDiscountAmount;
      var transportCostBeforeVAT = this.transportCostBeforeVAT;
      return this.roundToTwoDecimals(subtotal - discount + transportCostBeforeVAT);
    },
    // Calculate due amount
    calculateDueAmount: function calculateDueAmount() {
      if (!this.allData) return 0;
      var total = this.netTotal;
      var paid = parseFloat(this.allData.totalPaid) || 0;
      return total - paid;
    },
    // Check if purchase has discount (supports both old and new format)
    hasPurchaseDiscount: function hasPurchaseDiscount() {
      if (!this.allData) return false;
      // Check new format first (discount_type/discount_value)
      if (this.allData.discount_type && this.allData.discount_value && this.allData.discount_value > 0) {
        return true;
      }
      // Check old format (discount/discountType)
      if (this.allData.discount && this.allData.discount > 0) {
        return true;
      }
      return false;
    },
    // Get purchase discount type (supports both old and new format)
    purchaseDiscountType: function purchaseDiscountType() {
      if (!this.allData) return null;
      // New format: discount_type is already "percentage" or "fixed"
      if (this.allData.discount_type) {
        return this.allData.discount_type;
      }
      // Old format: discountType is 0 (fixed) or 1 (percentage)
      if (this.allData.discountType !== null && this.allData.discountType !== undefined) {
        return this.allData.discountType == 1 ? 'percentage' : 'fixed';
      }
      return null;
    },
    // Get purchase discount value (supports both old and new format)
    purchaseDiscountValue: function purchaseDiscountValue() {
      if (!this.allData) return 0;
      // New format: discount_value
      if (this.allData.discount_value !== null && this.allData.discount_value !== undefined) {
        return this.allData.discount_value;
      }
      // Old format: discount
      if (this.allData.discount !== null && this.allData.discount !== undefined) {
        return this.allData.discount;
      }
      return 0;
    },
    // VAT Amount: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of tax_amount from DB directly
    // This prevents double-counting and ensures accuracy
    // 
    // If transport is taxable: VAT = Net Amount × Weighted Average VAT Rate
    // If transport is non-taxable: VAT = Sum of tax_amount from purchase_products (from DB)
    // CRITICAL: If invoice-level discount is applied, VAT must be recalculated on discounted amount
    vatAmount: function vatAmount() {
      if (!this.purchaseProducts || this.purchaseProducts.length === 0) {
        return 0;
      }
      if (!this.isTransportTaxable) {
        // Transport is non-taxable: calculate VAT correctly accounting for invoice-level discount
        // If invoice-level discount exists, recalculate VAT on discounted amount
        var invoiceDiscount = this.invoiceLevelDiscountAmount;
        var itemsNet = this.invoiceSubtotal;
        if (invoiceDiscount > 0 && itemsNet > 0) {
          // Calculate average VAT rate from original items
          var _itemVatSum = this.purchaseProducts.reduce(function (total, product) {
            var itemVat = parseFloat(product.tax_amount || product.taxTotal || 0);
            return total + itemVat;
          }, 0);

          // Calculate average VAT rate
          var averageVatRate = itemsNet > 0 ? _itemVatSum / itemsNet * 100 : 0;

          // Recalculate VAT on discounted amount
          var itemsNetAfterDiscount = itemsNet - invoiceDiscount;
          var recalculatedVat = itemsNetAfterDiscount * (averageVatRate / 100);
          return this.roundToTwoDecimals(recalculatedVat);
        }

        // No invoice discount: use sum of tax_amount from DB
        var itemVatSum = this.purchaseProducts.reduce(function (total, product) {
          var itemVat = parseFloat(product.tax_amount || product.taxTotal || 0);
          return total + itemVat;
        }, 0);
        return this.roundToTwoDecimals(itemVatSum);
      }

      // Transport is taxable: calculate VAT using weighted average
      var netAmount = this.netAmountBeforeVAT;
      if (netAmount <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate from all items
      var totalNetAmountForWeighting = 0;
      var weightedVatRateSum = 0;
      this.purchaseProducts.forEach(function (product) {
        var itemGrossTotal = parseFloat(product.grossTotal || 0);
        var itemDiscountAmount = parseFloat(product.discountAmount || 0);
        var itemNetAmount = itemGrossTotal - itemDiscountAmount;
        if (itemNetAmount > 0) {
          var itemTotalAfterDiscount = parseFloat(product.totalAfterDiscount || 0);
          var itemTaxTotal = parseFloat(product.taxTotal || product.tax_amount || 0);
          var vatRate = 0;
          if (itemTotalAfterDiscount > 0 && itemTaxTotal > 0) {
            vatRate = itemTaxTotal / itemTotalAfterDiscount * 100;
          } else if (product.vatRate) {
            vatRate = parseFloat(product.vatRate);
          }
          if (!isNaN(vatRate) && vatRate >= 0) {
            totalNetAmountForWeighting += itemNetAmount;
            weightedVatRateSum += itemNetAmount * (vatRate / 100);
          }
        }
      });
      if (totalNetAmountForWeighting <= 0) {
        return 0;
      }
      var weightedAverageVatRate = weightedVatRateSum / totalNetAmountForWeighting * 100;
      var vat = this.roundToTwoDecimals(netAmount * (weightedAverageVatRate / 100));
      return vat;
    },
    // Total Tax: Same as vatAmount (for backward compatibility)
    totalTax: function totalTax() {
      return this.vatAmount;
    },
    // Grand Total: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item totals from DB + transport
    // This prevents double-counting and ensures accuracy
    // 
    // If transport is taxable: Grand Total = Net Amount + VAT
    //   Where: Net Amount = Subtotal - Discount + Transport (transport included in VAT base)
    // If transport is non-taxable: Grand Total = Sum of Item Totals After VAT + Transport
    //   Where: Item Totals = itemAfterDiscount + tax_amount (from DB)
    //   Transport is added only at invoice level, not distributed to items
    grandTotal: function grandTotal() {
      if (!this.allData) return 0;

      // CRITICAL: Use purchase.subTotal (or sub_total) directly as the source of truth
      // This is the correct grand total calculated during purchase creation
      // It already includes: items net - invoice discount + VAT + transport
      // Do NOT recalculate from purchase products as it may miss invoice-level discount allocation
      // API returns subTotal (camelCase), but check both formats for compatibility
      var subTotal = this.allData.subTotal !== undefined ? this.allData.subTotal : this.allData.sub_total;
      if (subTotal !== undefined && subTotal !== null) {
        return this.roundToTwoDecimals(parseFloat(subTotal));
      }

      // Fallback: Calculate if sub_total is not available (should not happen)
      var shipping = this.shippingCostTotal;
      if (!this.isTransportTaxable) {
        // Transport is non-taxable: use sum of item totals after VAT from DB + transport
        // This ensures item-level discounts and VAT are correctly included without double-counting
        if (!this.purchaseProducts || this.purchaseProducts.length === 0) {
          return this.roundToTwoDecimals(shipping);
        }

        // Sum of all item totals after VAT (from DB: lineTotal or totalAfterDiscount + tax_amount)
        var sumOfItemTotals = this.purchaseProducts.reduce(function (total, product) {
          // Use lineTotal if available (total with VAT), otherwise calculate from DB values
          var itemTotal = parseFloat(product.lineTotal || 0);
          if (itemTotal > 0) {
            return total + itemTotal;
          }
          // Fallback: calculate from stored values
          var itemAfterDiscount = parseFloat(product.totalAfterDiscount || 0);
          var itemVat = parseFloat(product.tax_amount || product.taxTotal || 0);
          return total + itemAfterDiscount + itemVat;
        }, 0);

        // Grand Total = Sum of Item Totals + Transport
        // Transport is added only at invoice level when non-taxable
        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }

      // Transport is taxable: use Net Amount + VAT calculation
      // Net Amount already includes transport cost (before VAT) in netAmountBeforeVAT
      // VAT is calculated on Net Amount which includes transport cost
      // Grand Total = Net Amount + VAT
      // Example: Net Amount = 8300 (8000 - 200 + 500), VAT = 1245, Grand Total = 9545
      var netAmount = this.netAmountBeforeVAT;
      var vat = this.vatAmount;
      return this.roundToTwoDecimals(netAmount + vat);
    },
    // Calculate net total (for backward compatibility - same as grandTotal)
    netTotal: function netTotal() {
      return this.grandTotal;
    },
    // Purchase header columns
    purchaseHeaderColumns: function purchaseHeaderColumns() {
      var columns = [{
        key: "purchaseNo",
        label: this.$t("Purchase No"),
        align: "text-center"
      }, {
        key: "purchaseDate",
        label: this.$t("Purchase Date"),
        align: "text-center"
      }, {
        key: "createdBy",
        label: this.$t("Created By"),
        align: "text-center"
      }];

      // Add journal entry column if journal entry exists
      if (this.allData && this.allData.journalEntry) {
        columns.push({
          key: "journalEntry",
          label: this.$t("Journal Entry"),
          align: "text-center"
        });
      }
      if (this.allData && this.allData.costCenter) {
        columns.push({
          key: "costCenter",
          label: this.$t("Cost Center"),
          align: "text-center"
        });
      }
      if (this.allData && this.allData.branch) {
        columns.push({
          key: "branch",
          label: this.$t("Branch"),
          align: "text-center"
        });
      }
      if (this.allData && this.allData.purchase_status) {
        columns.push({
          key: "purchaseStatus",
          label: this.$t("Purchase Status"),
          align: "text-center"
        });
      }
      if (this.allData && this.allData.reference) {
        columns.push({
          key: "reference",
          label: this.$t("Reference Number"),
          align: "text-center"
        });
      }
      if (this.allData && (this.allData.paymentMethod || this.allData.payment_method_id)) {
        columns.push({
          key: "paymentMethod",
          label: this.$t("Payment Method"),
          align: "text-center"
        });
      }

      // Add discount columns if purchase has discount
      if (this.hasPurchaseDiscount) {
        columns.push({
          key: "discountType",
          label: this.$t("Discount Type"),
          align: "text-center"
        }, {
          key: "discountValue",
          label: this.$t("Discount Value"),
          align: "text-center"
        }, {
          key: "discountAmount",
          label: this.$t("Discount Amount"),
          align: "text-center"
        });
      }
      return columns;
    },
    // Purchase header rows
    purchaseHeaderRows: function purchaseHeaderRows() {
      if (!this.allData) return [];
      var row = {
        purchaseNo: this.allData.purchaseNo || '',
        purchaseDate: this.allData.purchaseDate || '',
        createdBy: this.allData.createdBy || '-',
        journalEntry: this.allData.journalEntry || null
      };
      if (this.allData.costCenter) {
        row.costCenter = this.allData.costCenter.name || '-';
      }
      if (this.allData.branch) {
        row.branch = this.allData.branch.name || '-';
      }
      if (this.allData.purchase_status) {
        row.purchaseStatus = this.allData.purchase_status;
      }
      if (this.allData.reference) {
        row.reference = this.allData.reference;
      }
      if (this.allData.paymentMethod || this.allData.payment_method_id) {
        row.paymentMethod = this.allData.paymentMethod ? this.allData.paymentMethod.name : this.getPaymentMethodName(this.allData.payment_method_id);
      }

      // Add discount data if purchase has discount
      if (this.hasPurchaseDiscount) {
        row.discountType = this.purchaseDiscountType;
        row.discountValue = this.purchaseDiscountValue;
        row.discountAmount = this.invoiceLevelDiscountAmount;
      }
      return [row];
    },
    // Purchase products columns
    purchaseProductsColumns: function purchaseProductsColumns() {
      var columns = [{
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
      }];
      if (this.allData && this.allData.purchaseReturn) {
        columns.push({
          key: "returnQty",
          label: this.$t("Return Qty"),
          align: "text-center"
        });
      }
      columns.push({
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
      });
      return columns;
    },
    // Purchase products rows
    purchaseProductsRows: function purchaseProductsRows() {
      var _this = this;
      if (!this.purchaseProducts || !this.purchaseProducts.length) return [];
      return this.purchaseProducts.map(function (product, index) {
        var row = {
          index: index + 1,
          code: product.productCode || '',
          name: product.productName || '',
          quantity: "".concat(product.quantity || 0, " ").concat(product.productUnit || ''),
          price: parseFloat(product.purchasePrice) || 0,
          total: parseFloat(product.grossTotal) || 0,
          discount: parseFloat(product.discountAmount) || 0,
          totalAfterDiscount: parseFloat(product.totalAfterDiscount) || 0,
          vat: parseFloat(product.taxTotal) || 0,
          totalWithVat: parseFloat(product.lineTotal) || 0,
          _raw: product
        };
        if (_this.allData && _this.allData.purchaseReturn) {
          row.returnQty = "".concat(product.returnQty > 0 ? product.returnQty : 0, " ").concat(product.productUnit || '');
        }
        return row;
      });
    },
    // Purchase payment history columns
    purchasePaymentHistoryColumns: function purchasePaymentHistoryColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        align: ""
      }, {
        key: "date",
        label: this.$t("Payment Date"),
        align: ""
      }, {
        key: "amount",
        label: this.$t("Paid Amount"),
        align: ""
      }, {
        key: "account",
        label: this.$t("Account"),
        align: ""
      }, {
        key: "chequeNo",
        label: this.$t("Cheque No"),
        align: ""
      }, {
        key: "receiptNo",
        label: this.$t("Receipt No"),
        align: ""
      }, {
        key: "status",
        label: this.$t("Status"),
        align: "text-right"
      }];
    },
    // Purchase payment history rows
    purchasePaymentHistoryRows: function purchasePaymentHistoryRows() {
      if (!this.allData || !this.allData.payments) return [];
      return this.allData.payments.map(function (payment, index) {
        var _payment$purchase_pay, _payment$purchase_pay2, _payment$purchase_pay3;
        return {
          index: index + 1,
          date: payment.date || "",
          amount: payment.amount || 0,
          account: (_payment$purchase_pay = payment.purchase_payment_transaction) !== null && _payment$purchase_pay !== void 0 && _payment$purchase_pay.cashbook_account ? "".concat(payment.purchase_payment_transaction.cashbook_account.bank_name, " (").concat(payment.purchase_payment_transaction.cashbook_account.account_number, ")") : "",
          chequeNo: ((_payment$purchase_pay2 = payment.purchase_payment_transaction) === null || _payment$purchase_pay2 === void 0 ? void 0 : _payment$purchase_pay2.cheque_no) || "",
          receiptNo: ((_payment$purchase_pay3 = payment.purchase_payment_transaction) === null || _payment$purchase_pay3 === void 0 ? void 0 : _payment$purchase_pay3.receipt_no) || "",
          status: payment.status,
          _raw: payment
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
    this.getPurchase();
    this.loadCommunicationConfigStatus();
    this.productPrefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.supplierPrefix = this.appInfo.supplierPrefix;
  },
  methods: {
    // Handle tab change (optional, for additional logic if needed)
    handleTabChange: function handleTabChange(tab) {
      // Tab-specific actions are handled by details-clicked and activity-clicked events
    },
    // Format number to 2 decimal places
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined || value === '') return '0.00';
      return parseFloat(value).toFixed(2);
    },
    // Helper method to round to 2 decimal places (for calculations in computed props)
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
    },
    // Get payment method name by ID
    getPaymentMethodName: function getPaymentMethodName(methodId) {
      var methods = {
        'cash': 'نقدي (Cash)',
        'visa': 'فيزا (Visa)',
        'mada': 'مدى (Mada)',
        'mastercard': 'ماستركارد (Mastercard)',
        'bank_transfer': 'تحويل بنكي (Bank Transfer)',
        'stc_pay': 'STC Pay',
        'amex': 'أمريكان إكسبريس (American Express)'
      };
      return methods[methodId] || methodId;
    },
    // Calculate total with VAT sum for all items
    getTotalWithVatSum: function getTotalWithVatSum() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce(function (total, product) {
        return total + (parseFloat(product.lineTotal) || 0);
      }, 0);
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
    // get the purchase
    getPurchase: function getPurchase() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.$store.state.operations.loading = true;
              _context2.next = 3;
              return axios_default().get(window.location.origin + "/api/purchases/" + _this3.$route.params.slug);
            case 3:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this3.allData = data.data;
              _this3.purchaseProducts = _this3.allData.products;
              _this3.purchaseProducts.sort(_this3.sortProducts);
              _this3.$store.state.operations.loading = false;
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
      var printUrl = "/print/purchase/".concat(this.$route.params.slug);
      window.open(printUrl, '_blank');
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
              _this4.$store.state.operations.loading = true;
              _context3.next = 4;
              return _this4.form.post(window.location.origin + "/api/purchase/notify/" + _this4.$route.params.slug).then(function () {
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
              _this4.$store.state.operations.loading = false;
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
    // Commented out - replaced with downloadPDF method
    // printWindow() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/purchase/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },
    // download PDF
    downloadPDF: function downloadPDF() {
      var params = new URLSearchParams();
      // Add token to URL
      var token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      var pdfUrl = "/print/purchase/".concat(this.$route.params.slug, "/pdf?").concat(params.toString());
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
      var pdfUrl = "/print/purchase/".concat(this.$route.params.slug, "/preview?").concat(params.toString());
      window.location.href = pdfUrl;
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
              modelName = "Purchase";
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
              modelName = "Purchase";
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
              if (!(_this0.query === "")) {
                _context9.next = 7;
                break;
              }
              _context9.next = 5;
              return _this0.getActivity();
            case 5:
              _context9.next = 9;
              break;
            case 7:
              _context9.next = 9;
              return _this0.searchData();
            case 9:
              _this0.$toast.success(_this0.$t("Refreshed"), _this0.$t("Activity log has been refreshed successfully"));
            case 10:
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
    // return purchase
    returnPurchase: function returnPurchase(data) {
      // Navigate to purchase return create page with pre-selected purchase
      // We'll fetch the supplier info from the purchase on the create page
      console.log('Full purchase data:', JSON.stringify(data, null, 2));
      console.log('Purchase slug:', data.slug);
      this.$router.push({
        name: 'purchaseReturns.create',
        query: {
          purchase: data.slug
        }
      });
    },
    // Add payment to purchase
    addPayment: function addPayment() {
      // Open payment modal
      if (!this.allData) {
        return;
      }
      this.showPaymentModal = true;
    },
    // Handle payment saved event from modal
    handlePaymentSaved: function handlePaymentSaved() {
      // Refresh purchase data to show updated payment
      this.getPurchase();
    }
  }
});
;// ./resources/js/pages/purchases/show.vue?vue&type=script&lang=js
 /* harmony default export */ const purchases_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/show.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  purchases_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 68601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InvoicePaymentModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=template&id=65c2e2a1&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('Modal', {
    on: {
      "close": _vm.handleClose
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v("\n    " + _vm._s(_vm.type === 'purchase' ? _vm.$t("Create purchase payment") : _vm.$t("Create invoice payment")) + " :\n    "), _vm.invoiceNo ? _c('span', [_vm._v(_vm._s(_vm.invoicePrefix) + _vm._s(_vm.invoiceNo))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('form', {
    staticClass: "w-100",
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePayment.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.paymentForm.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "clientInvoiceTotal"
    }
  }, [_vm._v(_vm._s(_vm.type === 'purchase' ? _vm.$t("Purchase Total") : _vm.$t("Invoice Total")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formatNumber(_vm.invoiceTotal)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "clientInvoiceDue"
    }
  }, [_vm._v(_vm._s(_vm.type === 'purchase' ? _vm.$t("Purchase Due") : _vm.$t("Invoice Due")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formatNumber(_vm.dueAmount)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Paid Amount")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.paidAmount,
      expression: "paymentForm.paidAmount"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "step": "any",
      "placeholder": _vm.$t('Enter an amount'),
      "required": "",
      "min": "1",
      "max": _vm.dueAmount
    },
    domProps: {
      "value": _vm.paymentForm.paidAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "paidAmount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-8"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('img', {
          staticStyle: {
            "width": "30px",
            "height": "30px"
          },
          attrs: {
            "src": option.image
          }
        }), _vm._v("\n                " + _vm._s(option.label) + "\n              ")];
      }
    }], null, false, 25305259),
    model: {
      value: _vm.paymentForm.account,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "account", $$v);
      },
      expression: "paymentForm.account"
    }
  }), _vm._v(" "), _c('AccountCreateModal', {
    on: {
      "accountCreated": _vm.handleAccountCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "account"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentMethod"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Method")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.payment_method_id,
      expression: "paymentForm.payment_method_id"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('payment_method_id')
    },
    attrs: {
      "id": "paymentMethod",
      "disabled": _vm.loadingPaymentMethods,
      "name": "payment_method_id"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.paymentForm, "payment_method_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.loadingPaymentMethods ? _vm.$t("Loading...") : _vm.$t("Select")))]), _vm._v(" "), !_vm.loadingPaymentMethods && _vm.paymentMethods.length === 0 ? _c('option', {
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("No payment methods available")) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.paymentMethods, function (method) {
    return _c('option', {
      key: method.id,
      domProps: {
        "value": method.id
      }
    }, [_vm._v("\n              " + _vm._s(method.name) + "\n            ")]);
  })], 2), _vm._v(" "), _vm.loadingPaymentMethods ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Loading payment methods...")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "payment_method_id"
    }
  })], 1), _vm._v(" "), _vm.selectedPaymentMethodAnalyticalAccount ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "analyticalAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Analytical Account")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.selectedPaymentMethodAnalyticalAccount.name || '-'
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Automatically set based on payment method")) + "\n          ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Receipt No")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.receiptNo,
      expression: "paymentForm.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('receiptNo')
    },
    attrs: {
      "type": "text",
      "id": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.paymentForm.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "receiptNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.paymentDate,
      expression: "paymentForm.paymentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('paymentDate')
    },
    attrs: {
      "id": "paymentDate",
      "type": "date",
      "name": "paymentDate"
    },
    domProps: {
      "value": _vm.paymentForm.paymentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "paymentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "paymentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.status,
      expression: "paymentForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('status')
    },
    attrs: {
      "id": "status",
      "disabled": _vm.invoiceStatus === 0
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.paymentForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.invoiceStatus === 1 ? _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _vm._e(), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.note,
      expression: "paymentForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.paymentForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "note"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
    },
    model: {
      value: _vm.paymentForm.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "isSendEmail", $$v);
      },
      expression: "paymentForm.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send Email Notification")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n            (" + _vm._s(_vm.$t("Email not configured")) + ")\n          ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
    },
    model: {
      value: _vm.paymentForm.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "isSendSMS", $$v);
      },
      expression: "paymentForm.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send SMS Notification")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n            (" + _vm._s(_vm.$t("SMS not configured")) + ")\n          ")]) : _vm._e()], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-end w-100",
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success mr-2",
    attrs: {
      "loading": _vm.paymentForm.busy
    },
    on: {
      "click": _vm.savePayment
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Close")) + "\n    ")])], 1)]) : _vm._e();
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/AccountCreateModal.vue + 5 modules
var AccountCreateModal = __webpack_require__(92720);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const InvoicePaymentModalvue_type_script_lang_js = ({
  name: "InvoicePaymentModal",
  components: {
    ToggleButton: dist.ToggleButton,
    AccountCreateModal: AccountCreateModal/* default */.A
  },
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'invoice',
      // 'invoice' or 'purchase'
      validator: function validator(value) {
        return ['invoice', 'purchase'].includes(value);
      }
    },
    invoiceId: {
      type: [Number, String],
      required: true
    },
    invoiceNo: {
      type: String,
      required: true
    },
    invoicePrefix: {
      type: String,
      "default": ""
    },
    invoiceTotal: {
      type: Number,
      required: true
    },
    dueAmount: {
      type: Number,
      required: true
    },
    invoiceStatus: {
      type: Number,
      "default": 1
    },
    purchaseSlug: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      accounts: [],
      paymentMethods: [],
      loadingPaymentMethods: false,
      isDemoMode: window.config.isDemoMode,
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      },
      paymentForm: new vform_es/* default */.Ay({
        invoice_id: "",
        paidAmount: 1,
        paymentDate: new Date().toISOString().slice(0, 10),
        account: "",
        receiptNo: "",
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        payment_method_id: null
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    // Get analytical account for selected payment method
    selectedPaymentMethodAnalyticalAccount: function selectedPaymentMethodAnalyticalAccount() {
      var _this = this;
      if (!this.paymentForm.payment_method_id || !this.paymentMethods || this.paymentMethods.length === 0) {
        return null;
      }
      var selectedMethod = this.paymentMethods.find(function (method) {
        return method.id == _this.paymentForm.payment_method_id;
      });
      if (selectedMethod && selectedMethod.analytical_account) {
        return selectedMethod.analytical_account;
      }
      return null;
    }
  }),
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.initializeForm();
        }
      },
      immediate: true
    },
    dueAmount: {
      handler: function handler(newVal) {
        if (newVal && this.show) {
          this.paymentForm.paidAmount = newVal > 0 ? newVal : 1;
        }
      },
      immediate: true
    },
    invoiceId: {
      handler: function handler(newVal) {
        if (newVal && this.show) {
          console.log('Update form invoice_id from prop:', newVal);
          this.paymentForm.invoice_id = newVal;
        }
      },
      immediate: true
    }
  },
  created: function created() {
    this.loadCommunicationConfigStatus();
    this.getAccounts();
    this.getPaymentMethods();
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
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
    // Initialize form when modal opens
    initializeForm: function initializeForm() {
      if (this.type === 'purchase') {
        // For purchases, we don't set invoice_id
        this.paymentForm.invoice_id = null;
      } else {
        this.paymentForm.invoice_id = this.invoiceId;
      }
      var dueAmount = this.dueAmount;
      // Set paid amount to total due amount as default
      this.paymentForm.paidAmount = dueAmount > 0 ? dueAmount : 1;
      this.paymentForm.status = this.invoiceStatus === 0 ? 0 : 1;
      this.paymentForm.payment_method_id = null; // Reset payment method

      // Set default account if available
      if (this.accounts && this.accounts.length > 0 && !this.paymentForm.account) {
        var _this$appInfo;
        var defaultAccountSlug = (_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(function (account) {
          return account.slug == defaultAccountSlug;
        }) || this.accounts[0];
      }
    },
    // Get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data, _this3$appInfo, defaultAccountSlug;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 2:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this3.accounts = data.data;

              // assign default account
              if (_this3.accounts && _this3.accounts.length > 0) {
                defaultAccountSlug = (_this3$appInfo = _this3.appInfo) === null || _this3$appInfo === void 0 ? void 0 : _this3$appInfo.defaultAccountSlug;
                _this3.paymentForm.account = _this3.accounts.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // Get payment methods
    getPaymentMethods: function getPaymentMethods() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.loadingPaymentMethods = true;
              _context3.prev = 1;
              _context3.next = 4;
              return axios_default().get(window.location.origin + '/api/payment-methods', {
                params: {
                  perPage: 1000
                } // Get all payment methods
              });
            case 4:
              response = _context3.sent;
              // Handle both paginated and non-paginated responses
              if (response.data) {
                if (Array.isArray(response.data)) {
                  _this4.paymentMethods = response.data;
                } else if (response.data.data && Array.isArray(response.data.data)) {
                  _this4.paymentMethods = response.data.data;
                } else {
                  _this4.paymentMethods = [];
                }
              } else {
                _this4.paymentMethods = [];
              }
              _context3.next = 13;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error('Error loading payment methods:', _context3.t0);
              _this4.paymentMethods = [];
              _this4.$toast.error(_this4.$t('Error'), _this4.$t('Failed to load payment methods'));
            case 13:
              _context3.prev = 13;
              _this4.loadingPaymentMethods = false;
              return _context3.finish(13);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8, 13, 16]]);
      }))();
    },
    // Handle account created event
    handleAccountCreated: function handleAccountCreated(newAccount) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var account, accountById;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.getAccounts();
            case 2:
              if (!(newAccount && newAccount.id)) {
                _context4.next = 7;
                break;
              }
              _context4.next = 5;
              return _this5.$nextTick();
            case 5:
              // Find the account by id, slug, or label
              account = _this5.accounts.find(function (acc) {
                return acc.id === newAccount.id || acc.slug === newAccount.slug || acc.label === newAccount.label || acc.bankName === newAccount.bankName && acc.accountNumber === newAccount.accountNumber;
              });
              if (account) {
                _this5.paymentForm.account = account;
              } else if (newAccount.id) {
                // If not found by matching, try to find by id directly
                accountById = _this5.accounts.find(function (acc) {
                  return acc.id === newAccount.id;
                });
                if (accountById) {
                  _this5.paymentForm.account = accountById;
                }
              }
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // Save payment
    savePayment: function savePayment() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var formData, apiEndpoint, successMessage, effectiveInvoiceId;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              // Ensure invoice_id is set from props
              if (_this6.type !== 'purchase' && _this6.invoiceId) {
                // Always update from prop to ensure we have the latest ID
                _this6.paymentForm.invoice_id = _this6.invoiceId;
              } else if (!_this6.paymentForm.invoice_id && _this6.type !== 'purchase' && _this6.invoiceId) {
                console.log('Fallback: Setting invoice_id from prop:', _this6.invoiceId);
                _this6.paymentForm.invoice_id = _this6.invoiceId;
              }
              if (!(!_this6.paymentForm.account || !_this6.paymentForm.account.id)) {
                _context5.next = 4;
                break;
              }
              _this6.$toast.error(_this6.$t("Error"), _this6.$t("Please select an account"));
              return _context5.abrupt("return");
            case 4:
              if (!(_this6.type === 'purchase')) {
                _context5.next = 10;
                break;
              }
              // Prepare form data for purchase payment
              formData = {
                selectedPurchase: {
                  slug: _this6.purchaseSlug,
                  due: _this6.dueAmount
                },
                paidAmount: parseFloat(_this6.paymentForm.paidAmount),
                account: _this6.paymentForm.account,
                receiptNo: _this6.paymentForm.receiptNo || '',
                paymentDate: _this6.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
                note: _this6.paymentForm.note || '',
                status: _this6.paymentForm.status,
                isSendEmail: _this6.paymentForm.isSendEmail || false,
                isSendSMS: _this6.paymentForm.isSendSMS || false,
                payment_method_id: _this6.paymentForm.payment_method_id || null
              };
              apiEndpoint = '/api/purchase-pay';
              successMessage = _this6.$t("Purchase payment added successfully");
              _context5.next = 19;
              break;
            case 10:
              // Determine effective Invoice ID
              // Try prop first (most reliable), then form data
              effectiveInvoiceId = _this6.invoiceId;
              if (!effectiveInvoiceId && _this6.paymentForm.invoice_id) {
                console.log('Using invoice_id from paymentForm fallback:', _this6.paymentForm.invoice_id);
                effectiveInvoiceId = _this6.paymentForm.invoice_id;
              }

              // Validation: Check if we have an ID
              if (effectiveInvoiceId) {
                _context5.next = 16;
                break;
              }
              console.error('CRITICAL: Invoice ID missing in both prop and form');
              _this6.$toast.error(_this6.$t("Error"), "System Error: Invoice ID not found. Please try refreshing or checking the invoice details.");
              return _context5.abrupt("return");
            case 16:
              // Prepare form data for invoice payment
              formData = {
                invoice_id: effectiveInvoiceId,
                paidAmount: parseFloat(_this6.paymentForm.paidAmount),
                account: _this6.paymentForm.account,
                receiptNo: _this6.paymentForm.receiptNo || '',
                date: _this6.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
                note: _this6.paymentForm.note || '',
                netTotal: _this6.dueAmount,
                isSendEmail: _this6.paymentForm.isSendEmail || false,
                isSendSMS: _this6.paymentForm.isSendSMS || false,
                payment_method_id: _this6.paymentForm.payment_method_id || null
              };
              apiEndpoint = '/api/invoices-pay';
              successMessage = _this6.$t("Invoice payment added successfully");
            case 19:
              _context5.next = 21;
              return axios_default().post(window.location.origin + apiEndpoint, formData).then(function () {
                _this6.$toast.success(_this6.$t("Success!"), successMessage);
                _this6.paymentForm.reset();
                _this6.paymentForm.paymentDate = new Date().toISOString().slice(0, 10);
                _this6.paymentForm.status = 1;
                _this6.paymentForm.payment_method_id = null;
                // Emit payment saved event
                _this6.$emit('payment-saved');
                // Close modal
                _this6.handleClose();
              })["catch"](function (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  _this6.paymentForm.errors.set(errors);
                  var messages = Object.values(errors).flat();
                  _this6.$toast.error(_this6.$t('Validation Error'), messages.join('\n'));
                } else {
                  var _error$response;
                  _this6.$toast.error(_this6.$t("Error"), ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this6.$t("Please check your input and try again."));
                }
              });
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // Handle close
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});
;// ./resources/js/components/InvoicePaymentModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_InvoicePaymentModalvue_type_script_lang_js = (InvoicePaymentModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css
var InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css = __webpack_require__(64557);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css = (InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/InvoicePaymentModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_InvoicePaymentModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "65c2e2a1",
  null
  
)

/* harmony default export */ const InvoicePaymentModal = (component.exports);

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

/***/ 91494:
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-alert[data-v-f7e366da]{align-items:center;background:#fff5f5;border:1px solid #d64545;border-radius:10px;color:#000;display:flex;font-family:DINNextLTArabic;font-size:14px;font-style:Bold;font-weight:700;margin:20px;padding:15px 20px}.info-alert i[data-v-f7e366da]{color:#d64545;font-size:16px;margin-right:10px}[dir=rtl] .info-alert i[data-v-f7e366da]{margin-left:10px;margin-right:0}@media only screen and (max-width:767px){.info-alert[data-v-f7e366da]{display:block!important}.info-alert i[data-v-f7e366da]{margin-right:8px}[dir=rtl] .info-alert i[data-v-f7e366da]{margin-left:8px;margin-right:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 91640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InfoAlert)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/InfoAlert.vue?vue&type=template&id=f7e366da&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "info-alert"
  }, [_c('i', {
    "class": _setup.iconClass
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.message))])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(62893);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/InfoAlert.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ const InfoAlertvue_type_script_setup_true_lang_js = ({
  __name: 'InfoAlert',
  props: {
    message: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      "default": 'info'
    }
  },
  setup: function setup(__props) {
    var props = __props;
    var iconClass = (0,vue_esm.computed)(function () {
      var iconMap = {
        info: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        error: 'fas fa-exclamation-circle',
        success: 'fas fa-check-circle'
      };
      return iconMap[props.icon] || iconMap.info;
    });
    return {
      __sfc: true,
      props: props,
      iconClass: iconClass
    };
  }
});
;// ./resources/js/components/shared/InfoAlert.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ const shared_InfoAlertvue_type_script_setup_true_lang_js = (InfoAlertvue_type_script_setup_true_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/InfoAlert.vue?vue&type=style&index=0&id=f7e366da&prod&scoped=true&lang=css
var InfoAlertvue_type_style_index_0_id_f7e366da_prod_scoped_true_lang_css = __webpack_require__(91494);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/InfoAlert.vue?vue&type=style&index=0&id=f7e366da&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(InfoAlertvue_type_style_index_0_id_f7e366da_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const shared_InfoAlertvue_type_style_index_0_id_f7e366da_prod_scoped_true_lang_css = (InfoAlertvue_type_style_index_0_id_f7e366da_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/shared/InfoAlert.vue?vue&type=style&index=0&id=f7e366da&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/shared/InfoAlert.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  shared_InfoAlertvue_type_script_setup_true_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "f7e366da",
  null
  
)

/* harmony default export */ const InfoAlert = (component.exports);

/***/ }),

/***/ 92720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccountCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=template&id=1def6f66&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Bank Account")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "bankName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bank Name')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bankName')
    },
    attrs: {
      "id": "bankName",
      "type": "text",
      "name": "bankName",
      "placeholder": _vm.$t('Enter a bank name')
    },
    domProps: {
      "value": _vm.form.bankName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bankName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bankName"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "branchName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Branch Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branchName,
      expression: "form.branchName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('branchName')
    },
    attrs: {
      "id": "branchName",
      "type": "text",
      "name": "branchName",
      "placeholder": _vm.$t('Enter a branch name')
    },
    domProps: {
      "value": _vm.form.branchName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "branchName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branchName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "accountNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Number')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountNumber,
      expression: "form.accountNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('accountNumber')
    },
    attrs: {
      "id": "accountNumber",
      "type": "text",
      "name": "accountNumber",
      "placeholder": _vm.$t('Enter an account number')
    },
    domProps: {
      "value": _vm.form.accountNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "accountNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "accountNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "track-by": "id",
      "name": "chartOfAccountId",
      "placeholder": _vm.$t('Select a Chart of Account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.saveAccount.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const AccountCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  data: function data() {
    return {
      showModal: false,
      form: new vform_es/* default */.Ay({
        bankName: '',
        branchName: '',
        accountNumber: '',
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        chartOfAccountId: ''
      }),
      chartOfAccounts: []
    };
  },
  created: function created() {
    this.loadChartOfAccounts();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm();
        // Refresh chart of accounts list
        this.loadChartOfAccounts();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.form.status = 1;
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.chartOfAccountId = '';
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_default().get('/api/accounts/chart-of-accounts');
            case 3:
              response = _context.sent;
              _this.chartOfAccounts = response.data.data || [];
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error loading chart of accounts:', _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    // Save account
    saveAccount: function saveAccount(event) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }
              _context2.next = 3;
              return _this2.form.post(window.location.origin + '/api/accounts').then(function (response) {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Account added successfully')
                });

                // Get the created account data from response
                // AccountResource returns data in response.data.data
                var accountData = response.data.data || response.data;

                // Format account for the select dropdown (matching the format used in getAccounts)
                // AccountResource already provides bankName, accountNumber, label, etc.
                var newAccount = {
                  id: accountData.id,
                  slug: accountData.slug,
                  label: accountData.label || "".concat(accountData.bankName, " [").concat(accountData.accountNumber, "]"),
                  bankName: accountData.bankName,
                  accountNumber: accountData.accountNumber,
                  availableBalance: accountData.availableBalance || 0,
                  image: accountData.image || null
                };

                // Emit event with created account data to refresh and select in parent
                _this2.$emit('accountCreated', newAccount);

                // Reset form
                _this2.resetForm();
                // Close only this modal, not parent modals
                _this2.showModal = false;
              })["catch"](function (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  if (_this2.form && _this2.form.errors && typeof _this2.form.errors.set === 'function') {
                    _this2.form.errors.set(errors);
                  }
                  var messages = Object.values(errors).flat();
                  var firstMessage = messages && messages.length ? messages[0] : _this2.$t('Validation Error');
                  toast.fire({
                    type: 'error',
                    title: firstMessage
                  });
                } else {
                  var _error$response;
                  toast.fire({
                    type: 'error',
                    title: ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t('Please check your input and try again.')
                  });
                }
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_AccountCreateModalvue_type_script_lang_js = (AccountCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css
var AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = __webpack_require__(4880);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = (AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/AccountCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_AccountCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1def6f66",
  null
  
)

/* harmony default export */ const AccountCreateModal = (component.exports);

/***/ }),

/***/ 94948:
/***/ (function(module) {

/*!
* sweetalert2 v8.19.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};

var removeCustomClasses = function removeCustomClasses(elem) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, customClass, className) {
  removeCustomClasses(elem);

  if (customClass && customClass[className]) {
    if (typeof customClass[className] !== 'string' && !customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(customClass[className]), "\""));
    }

    addClass(elem, customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? value + 'px' : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector('.' + className);
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params['showC' + buttonType.substring(1) + 'Button'], 'inline-block');
  button.innerHTML = params[buttonType + 'ButtonText']; // Set caption text

  button.setAttribute('aria-label', params[buttonType + 'ButtonAriaLabel']); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params.customClass, buttonType + 'Button');
  addClass(button, params[buttonType + 'ButtonClass']);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = 'grow-' + grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params.customClass, 'container');

  if (params.customContainerClass) {
    // @deprecated
    addClass(container, params.customContainerClass);
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.inputClass) {
    addClass(inputContainer, params.inputClass);
  }

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = contentWidth + 'px';
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params.customClass, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params.customClass, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params.customClass, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the icon with the given type already rendered,
  // apply the custom class without re-rendering the icon

  if (innerParams && params.type === innerParams.type && getIcon()) {
    applyCustomClass(getIcon(), params.customClass, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.type) {
    return;
  }

  adjustSuccessIconBackgoundColor();

  if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
    show(icon); // Custom class

    applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

    toggleClass(icon, "swal2-animate-".concat(params.type, "-icon"), params.animation);
  } else {
    error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params.customClass, 'image');

  if (params.imageClass) {
    addClass(image, params.imageClass);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params.customClass, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params.customClass, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params.customClass, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // CSS animation


  toggleClass(popup, swalClasses.noanimation, !params.animation);
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onOpen: null,
  onRender: null,
  onClose: null,
  onAfterClose: null,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  customContainerClass: 'customClass',
  confirmButtonClass: 'customClass',
  cancelButtonClass: 'customClass',
  imageClass: 'customClass',
  inputClass: 'customClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated();
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding + 'px';
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
} // @deprecated

function enableConfirmButton() {
  warnAboutDepreation('Swal.enableConfirmButton()', "Swal.getConfirmButton().removeAttribute('disabled')");
  setButtonsDisabled(this, ['confirmButton'], false);
} // @deprecated

function disableConfirmButton() {
  warnAboutDepreation('Swal.disableConfirmButton()', "Swal.getConfirmButton().setAttribute('disabled', '')");
  setButtonsDisabled(this, ['confirmButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  warnAboutDepreation('Swal.getProgressSteps()', "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  warnAboutDepreation('Swal.setProgressSteps()', 'Swal.update()');
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  renderProgressSteps(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses = function addClasses(container, popup, params) {
  if (params.animation) {
    addClass(popup, swalClasses.show);
  }

  show(popup);
  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error('Error in inputValue promise: ' + err);
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, innerParams, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(domCache, innerParams, dismissWith);
  }
};

var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
  domCache.container.onclick = function (e) {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(domCache, innerParams, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Dear russian users visiting russian sites. Let's have fun.


if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
  var now = new Date();
  var initiationDate = localStorage.getItem('swal-initiation');

  if (!initiationDate) {
    localStorage.setItem('swal-initiation', "".concat(now));
  } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
    setTimeout(function () {
      document.body.style.pointerEvents = 'none';
      var ukrainianAnthem = document.createElement('audio');
      ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
      ukrainianAnthem.loop = true;
      document.body.appendChild(ukrainianAnthem);
      setTimeout(function () {
        ukrainianAnthem.play()["catch"](function () {// ignore
        });
      }, 2500);
    }, 500);
  }
} // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '8.19.0';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ }),

/***/ 99597:
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
___CSS_LOADER_EXPORT___.push([module.id, ".table-responsive[data-v-a6df283c]{background-color:#fff}.invoices-table[data-v-a6df283c]{border:1px solid #cbd0dd;border-collapse:separate;border-radius:8px;border-spacing:0;font-size:.9rem;padding:10px 15px;width:100%}.invoices-table tbody th[data-v-a6df283c]{border:none;font-size:.9rem;font-weight:500;padding:6px 10px;text-align:right}.invoices-table tbody td[data-v-a6df283c]{border:none;font-size:.9rem;padding:6px 10px;text-align:left}.invoices-table tbody tr[data-v-a6df283c]{background-color:#fff;border-bottom:1px solid #e5e7eb}.invoices-table tbody tr[data-v-a6df283c]:last-child{border-bottom:none}.text-bold[data-v-a6df283c]{font-weight:700}.equal-sign[data-v-a6df283c]{font-weight:600;margin-left:4px;margin-right:4px}.saudi-riyal[data-v-a6df283c]{font-family:Arial,sans-serif}[dir=rtl] .invoices-table tbody th[data-v-a6df283c]{text-align:right}[dir=rtl] .invoices-table tbody td[data-v-a6df283c]{text-align:left}[dir=ltr] .invoices-table tbody th[data-v-a6df283c]{text-align:right}[dir=ltr] .invoices-table tbody td[data-v-a6df283c]{text-align:left}.invoices-table tbody tr[data-v-a6df283c]{margin-bottom:2px}.table-custom[data-v-a6df283c]{border:none!important}.table-border-y-0[data-v-a6df283c]{border-bottom:none!important;border-top:none!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);