"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[450],{

/***/ 40450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ purchase_summary)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/purchase-summary.vue?vue&type=template&id=7185affb&scoped=true
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    staticClass: "row",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.generateReport.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Fiscal Year')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.fiscalYears,
      "reduce": function reduce(year) {
        return year.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Fiscal Year'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingFiscalYears
    },
    on: {
      "search": _vm.searchFiscalYears
    },
    model: {
      value: _vm.filters.fiscalYear,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "fiscalYear", $$v);
      },
      expression: "filters.fiscalYear"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Accounting Period')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.accountingPeriods,
      "reduce": function reduce(period) {
        return period.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Period'),
      "searchable": true,
      "clearable": true,
      "loading": _vm.loadingAccountingPeriods,
      "disabled": !_vm.filters.fiscalYear
    },
    on: {
      "search": _vm.searchAccountingPeriods
    },
    model: {
      value: _vm.filters.accountingPeriod,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "accountingPeriod", $$v);
      },
      expression: "filters.accountingPeriod"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Date Range')))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.fromDate,
      expression: "filters.fromDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('From Date'),
      "disabled": _vm.filters.fiscalYear || _vm.filters.accountingPeriod
    },
    domProps: {
      "value": _vm.filters.fromDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "fromDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.$t('to')))])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.toDate,
      expression: "filters.toDate"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('To Date'),
      "disabled": _vm.filters.fiscalYear || _vm.filters.accountingPeriod
    },
    domProps: {
      "value": _vm.filters.toDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "toDate", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Generate Report')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Reset')) + "\n                    ")]), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn export-excel-btn ml-2",
    attrs: {
      "href": _vm.exportExcelUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn ml-2",
    on: {
      "click": _vm.downloadPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Preview'),
      expression: "$t('Preview')"
    }],
    staticClass: "btn preview-btn ml-2",
    on: {
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  })]) : _vm._e(), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
    staticClass: "btn print-btn ml-2",
    attrs: {
      "href": _vm.printTemplateUrl,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]) : _vm._e()])])])])]), _vm._v(" "), _vm.reportData ? _c('div', {
    staticClass: "card mt-3"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('Purchase Summary Report')) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.$t('Total Purchases')) + ": " + _vm._s(_vm.reportData.summary.total_purchases))]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-success ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Net Purchases')) + ": " + _vm._s(_vm.reportData.summary.net_purchases))])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Purchases')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_purchases))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Amount')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_amount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Paid')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_paid))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Due')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_due))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Returns')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_returns))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Discount')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_discount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Total Tax')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_tax))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "info-box"
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "info-box-content"
  }, [_c('span', {
    staticClass: "info-box-text"
  }, [_vm._v(_vm._s(_vm.$t('Net Purchases')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.net_purchases))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Supplier Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('label', {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.$t('Per Page')) + ":")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.supplierPerPage,
      expression: "supplierPerPage"
    }],
    staticClass: "form-control form-control-sm",
    staticStyle: {
      "width": "80px"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.supplierPerPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.loadSupplierPage(1);
      }]
    }
  }, [_c('option', {
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
  }, [_vm._v("100")])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table purchase-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Supplier Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Phone')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Purchase Count')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Total Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Due Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Tax')))])]), _vm._v(" "), _c('tbody', [_vm.loadingSuppliers ? _c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "8"
    }
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading suppliers...')) + "\n                  ")])]) : _vm.reportData.supplier_summary.length === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('No supplier data available')) + "\n                  ")])]) : _vm._l(_vm.reportData.supplier_summary, function (supplier) {
    return _c('tr', {
      key: supplier.supplier_id
    }, [_c('td', [_vm._v(_vm._s(supplier.supplier_name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(supplier.supplier_phone || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(supplier.purchase_count))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(supplier.total_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(supplier.paid_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(supplier.due_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(supplier.discount_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(supplier.tax_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  })], 2)])]), _vm._v(" "), _vm.reportData.pagination ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mt-3"
  }, [_c('div', {
    staticClass: "dataTables_info"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Showing')) + " " + _vm._s((_vm.reportData.pagination.current_page - 1) * _vm.reportData.pagination.per_page + 1) + " \n              " + _vm._s(_vm.$t('to')) + " " + _vm._s(Math.min(_vm.reportData.pagination.current_page * _vm.reportData.pagination.per_page, _vm.reportData.pagination.total_suppliers)) + " \n              " + _vm._s(_vm.$t('of')) + " " + _vm._s(_vm.reportData.pagination.total_suppliers) + " " + _vm._s(_vm.$t('suppliers')) + "\n            ")]), _vm._v(" "), _c('nav', [_c('ul', {
    staticClass: "pagination pagination-sm mb-0"
  }, [_c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.reportData.pagination.current_page <= 1
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.reportData.pagination.current_page <= 1
    },
    on: {
      "click": function click($event) {
        return _vm.loadSupplierPage(1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-double-left"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.reportData.pagination.current_page <= 1
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.reportData.pagination.current_page <= 1
    },
    on: {
      "click": function click($event) {
        return _vm.loadSupplierPage(_vm.reportData.pagination.current_page - 1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-left"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.reportData.pagination.current_page >= _vm.reportData.pagination.total_pages
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.reportData.pagination.current_page >= _vm.reportData.pagination.total_pages
    },
    on: {
      "click": function click($event) {
        return _vm.loadSupplierPage(_vm.reportData.pagination.current_page + 1);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-right"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "page-item",
    "class": {
      disabled: _vm.reportData.pagination.current_page >= _vm.reportData.pagination.total_pages
    }
  }, [_c('button', {
    staticClass: "page-link",
    attrs: {
      "disabled": _vm.reportData.pagination.current_page >= _vm.reportData.pagination.total_pages
    },
    on: {
      "click": function click($event) {
        return _vm.loadSupplierPage(_vm.reportData.pagination.total_pages);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-double-right"
  })])])])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Monthly Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table purchase-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Month')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Purchase Count')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Total Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Due Amount')))])]), _vm._v(" "), _c('tbody', [_vm.reportData.monthly_summary.length === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('No monthly data available')) + "\n                  ")])]) : _vm._l(_vm.reportData.monthly_summary, function (month) {
    return _c('tr', {
      key: month.month
    }, [_c('td', [_vm._v(_vm._s(month.month_name))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(month.purchase_count))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(month.total_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(month.paid_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(month.due_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  })], 2)])])])]), _vm._v(" "), _vm.reportData.return_purchases && _vm.reportData.return_purchases.length > 0 ? _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Purchase Returns Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table purchase-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Purchase #')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Supplier')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Purchase Date')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Original Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Return Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Return Count')))])]), _vm._v(" "), _c('tbody', _vm._l(_vm.reportData.return_purchases, function (returnData) {
    var _returnData$purchase$;
    return _c('tr', {
      key: returnData.purchase.id
    }, [_c('td', [_vm._v(_vm._s(returnData.purchase.purchase_no))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(((_returnData$purchase$ = returnData.purchase.supplier) === null || _returnData$purchase$ === void 0 ? void 0 : _returnData$purchase$.name) || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(returnData.purchase.purchase_date)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(returnData.purchase.sub_total) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right text-danger"
    }, [_vm._v(_vm._s(returnData.return_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(returnData.returns.length))])]);
  }), 0)])])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fas fa-2x fa-sync-alt fa-spin"
  })]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-tool",
    attrs: {
      "type": "button",
      "data-card-widget": "collapse"
    }
  }, [_c('i', {
    staticClass: "fas fa-minus"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-primary"
  }, [_c('i', {
    staticClass: "fas fa-shopping-cart"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-dollar-sign"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-info"
  }, [_c('i', {
    staticClass: "fas fa-check-circle"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-danger"
  }, [_c('i', {
    staticClass: "fas fa-undo"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-secondary"
  }, [_c('i', {
    staticClass: "fas fa-percentage"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-dark"
  }, [_c('i', {
    staticClass: "fas fa-receipt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "info-box-icon bg-success"
  }, [_c('i', {
    staticClass: "fas fa-chart-line"
  })]);
}];

;// ./resources/js/pages/reports/purchase-summary.vue?vue&type=template&id=7185affb&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/purchase-summary.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const purchase_summaryvue_type_script_lang_js = ({
  name: 'PurchaseSummary',
  data: function data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingSuppliers: false,
      reportData: null,
      errors: {},
      // Breadcrumbs
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Purchase Summary',
        url: ''
      }],
      breadcrumbsCurrent: 'Purchase Summary',
      // Filters
      filters: {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      },
      // Pagination
      supplierPerPage: 50,
      currentSupplierPage: 1,
      // Options
      fiscalYears: [],
      accountingPeriods: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: "appInfo"
  })), {}, {
    // Export URLs
    exportExcelUrl: function exportExcelUrl() {
      var params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/purchase-summary/export?".concat(params.toString());
    },
    exportPdfUrl: function exportPdfUrl() {
      var params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/purchase-summary/pdf?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      var params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return "/print/reports/purchase-summary?".concat(params.toString());
    }
  }),
  watch: {
    'filters.fiscalYear': function filtersFiscalYear(newValue) {
      if (newValue) {
        this.loadAccountingPeriods();
        this.filters.accountingPeriod = null; // Reset accounting period when fiscal year changes
      } else {
        this.accountingPeriods = [];
        this.filters.accountingPeriod = null;
      }
    }
  },
  mounted: function mounted() {
    this.loadInitialData();
  },
  methods: {
    loadInitialData: function loadInitialData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this.loadFiscalYears()]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var search, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this2.loadingFiscalYears = true;
              _context2.prev = 2;
              _context2.next = 5;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 5:
              response = _context2.sent;
              _this2.fiscalYears = response.data.data || response.data;
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              _this2.$toast.error('', _this2.$t('Failed to load fiscal years'));
            case 12:
              _context2.prev = 12;
              _this2.loadingFiscalYears = false;
              return _context2.finish(12);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 9, 12, 15]]);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var search, params, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              _this3.loadingAccountingPeriods = true;
              _context3.prev = 2;
              params = {
                search: search,
                perPage: 100
              };
              if (_this3.filters.fiscalYear) {
                params.fiscal_year_id = _this3.filters.fiscalYear;
              }
              _context3.next = 7;
              return axios_default().get('/api/accounting-periods/search', {
                params: params
              });
            case 7:
              response = _context3.sent;
              _this3.accountingPeriods = response.data.data || response.data;
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              _this3.$toast.error('', _this3.$t('Failed to load accounting periods'));
            case 14:
              _context3.prev = 14;
              _this3.loadingAccountingPeriods = false;
              return _context3.finish(14);
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 11, 14, 17]]);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.loadFiscalYears(search);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.loadAccountingPeriods(search);
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    generateReport: function generateReport() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var params, response, _error$response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this6.loading = true;
              _this6.errors = {};
              _this6.reportData = null;
              _context6.prev = 3;
              params = {
                page: _this6.currentSupplierPage,
                per_page: _this6.supplierPerPage
              };
              if (_this6.filters.fiscalYear) {
                params.fiscal_year_id = _this6.filters.fiscalYear;
              } else if (_this6.filters.accountingPeriod) {
                params.accounting_period_id = _this6.filters.accountingPeriod;
              } else if (_this6.filters.fromDate && _this6.filters.toDate) {
                params.from_date = _this6.filters.fromDate;
                params.to_date = _this6.filters.toDate;
              }
              _context6.next = 8;
              return axios_default().get('/api/reports/purchase-summary', {
                params: params
              });
            case 8:
              response = _context6.sent;
              if (response.data.success) {
                _this6.reportData = response.data.data;
                _this6.$toast.success('', _this6.$t('Report generated successfully'));
              } else {
                _this6.$toast.error('', response.data.message || _this6.$t('Failed to generate report'));
              }
              _context6.next = 16;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](3);
              if (_context6.t0.response && _context6.t0.response.data && _context6.t0.response.data.errors) {
                _this6.errors = _context6.t0.response.data.errors;
              }
              _this6.$toast.error('', ((_error$response = _context6.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this6.$t('Failed to generate report'));
            case 16:
              _context6.prev = 16;
              _this6.loading = false;
              return _context6.finish(16);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 12, 16, 19]]);
      }))();
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '-';
      var date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    resetFilters: function resetFilters() {
      this.filters = {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      };
      this.reportData = null;
      this.errors = {};
    },
    loadSupplierPage: function loadSupplierPage(page) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var params, response, _error$response2;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this7.reportData) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this7.loadingSuppliers = true;
              _this7.currentSupplierPage = page;
              _context7.prev = 4;
              params = {
                page: page,
                per_page: _this7.supplierPerPage
              };
              if (_this7.filters.fiscalYear) {
                params.fiscal_year_id = _this7.filters.fiscalYear;
              } else if (_this7.filters.accountingPeriod) {
                params.accounting_period_id = _this7.filters.accountingPeriod;
              } else if (_this7.filters.fromDate && _this7.filters.toDate) {
                params.from_date = _this7.filters.fromDate;
                params.to_date = _this7.filters.toDate;
              }
              _context7.next = 9;
              return axios_default().get('/api/reports/purchase-summary', {
                params: params
              });
            case 9:
              response = _context7.sent;
              if (response.data.success) {
                // Update only the supplier summary and pagination data
                _this7.reportData.supplier_summary = response.data.data.supplier_summary;
                _this7.reportData.pagination = response.data.data.pagination;
              } else {
                _this7.$toast.error('', response.data.message || _this7.$t('Failed to load supplier data'));
              }
              _context7.next = 16;
              break;
            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](4);
              _this7.$toast.error('', ((_error$response2 = _context7.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this7.$t('Failed to load supplier data'));
            case 16:
              _context7.prev = 16;
              _this7.loadingSuppliers = false;
              return _context7.finish(16);
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[4, 13, 16, 19]]);
      }))();
    },
    refreshTable: function refreshTable() {
      this.generateReport();
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/purchase-summary/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/purchase-summary/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/purchase-summary.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_purchase_summaryvue_type_script_lang_js = (purchase_summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/purchase-summary.vue?vue&type=style&index=0&id=7185affb&prod&scoped=true&lang=css
var purchase_summaryvue_type_style_index_0_id_7185affb_prod_scoped_true_lang_css = __webpack_require__(68558);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/purchase-summary.vue?vue&type=style&index=0&id=7185affb&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(purchase_summaryvue_type_style_index_0_id_7185affb_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_purchase_summaryvue_type_style_index_0_id_7185affb_prod_scoped_true_lang_css = (purchase_summaryvue_type_style_index_0_id_7185affb_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/purchase-summary.vue?vue&type=style&index=0&id=7185affb&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/purchase-summary.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_purchase_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7185affb",
  null
  
)

/* harmony default export */ const purchase_summary = (component.exports);

/***/ }),

/***/ 68558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-7185affb]{border:none!important}.purchase-summary-table[data-v-7185affb]{border-collapse:separate;border-spacing:0}.purchase-summary-table thead th[data-v-7185affb]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.purchase-summary-table thead tr[data-v-7185affb]{border:none!important}.purchase-summary-table thead th[data-v-7185affb]:first-child{border-top-left-radius:10px}.purchase-summary-table thead th[data-v-7185affb]:last-child{border-top-right-radius:10px}[dir=rtl] .purchase-summary-table thead th[data-v-7185affb]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .purchase-summary-table thead th[data-v-7185affb]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-7185affb]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-7185affb],.export-pdf-btn[data-v-7185affb],.preview-btn[data-v-7185affb]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-7185affb],.export-pdf-btn[data-v-7185affb],.preview-btn[data-v-7185affb],.print-btn[data-v-7185affb]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-7185affb]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-7185affb]{gap:10px}.card[data-v-7185affb]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-7185affb]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-7185affb]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.overlay[data-v-7185affb]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-7185affb]{background:#fff;border:1px solid #dee2e6;margin-bottom:1rem;padding:1rem}.info-box[data-v-7185affb],.info-box-icon[data-v-7185affb]{align-items:center;border-radius:.375rem;display:flex}.info-box-icon[data-v-7185affb]{height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-7185affb]{flex:1}.info-box-text[data-v-7185affb]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-7185affb]{color:#495057;display:block;font-size:1.25rem;font-weight:600}@media (max-width:1300px){.info-box[data-v-7185affb]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);