"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2993],{

/***/ 52993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ invoice_summary)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/invoice-summary.vue?vue&type=template&id=0d0a4ffc&scoped=true
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
  }), _vm._v("\n              " + _vm._s(_vm.$t('Generate Report')) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n              " + _vm._s(_vm.$t('Reset')) + "\n            ")]), _vm._v(" "), _vm.reportData && _vm.reportData.summary ? _c('a', {
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
  }, [_vm._v("\n        " + _vm._s(_vm.$t('Invoice Summary Report')) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.$t('Total Invoices')) + ": " + _vm._s(_vm.reportData.summary.total_invoices))]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-success ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Net Sales')) + ": " + _vm._s(_vm.reportData.summary.net_sales))])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Total Invoices')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.total_invoices))])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Net Sales')))]), _vm._v(" "), _c('span', {
    staticClass: "info-box-number"
  }, [_vm._v(_vm._s(_vm.reportData.summary.net_sales))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Client Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('label', {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.$t('Per Page')) + ":")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientPerPage,
      expression: "clientPerPage"
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
        _vm.clientPerPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.loadClientPage(1);
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
    staticClass: "table invoice-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Client Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Phone')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Invoice Count')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Total Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Due Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Tax')))])]), _vm._v(" "), _c('tbody', [_vm.loadingClients ? _c('tr', [_c('td', {
    staticClass: "text-center",
    attrs: {
      "colspan": "8"
    }
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading clients...')) + "\n                  ")])]) : _vm.reportData.client_summary.length === 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-muted",
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('No client data available')) + "\n                  ")])]) : _vm._l(_vm.reportData.client_summary, function (client) {
    return _c('tr', {
      key: client.client_id
    }, [_c('td', [_vm._v(_vm._s(client.client_name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(client.client_phone || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(client.invoice_count))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(client.total_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(client.paid_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(client.due_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(client.discount_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(client.tax_amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]);
  })], 2)])]), _vm._v(" "), _vm.reportData.pagination ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mt-3"
  }, [_c('div', {
    staticClass: "dataTables_info"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Showing')) + " " + _vm._s((_vm.reportData.pagination.current_page - 1) * _vm.reportData.pagination.per_page + 1) + " \n              " + _vm._s(_vm.$t('to')) + " " + _vm._s(Math.min(_vm.reportData.pagination.current_page * _vm.reportData.pagination.per_page, _vm.reportData.pagination.total_clients)) + " \n              " + _vm._s(_vm.$t('of')) + " " + _vm._s(_vm.reportData.pagination.total_clients) + " " + _vm._s(_vm.$t('clients')) + "\n            ")]), _vm._v(" "), _c('nav', [_c('ul', {
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
        return _vm.loadClientPage(1);
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
        return _vm.loadClientPage(_vm.reportData.pagination.current_page - 1);
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
        return _vm.loadClientPage(_vm.reportData.pagination.current_page + 1);
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
        return _vm.loadClientPage(_vm.reportData.pagination.total_pages);
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
    staticClass: "table invoice-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Month')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Invoice Count')))]), _vm._v(" "), _c('th', {
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
    }, [_vm._v(_vm._s(month.invoice_count))]), _vm._v(" "), _c('td', {
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
  })], 2)])])])]), _vm._v(" "), _vm.reportData.return_invoices && _vm.reportData.return_invoices.length > 0 ? _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Invoice Returns Summary')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table invoice-summary-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('Invoice #')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Client')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Invoice Date')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Original Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Return Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Return Count')))])]), _vm._v(" "), _c('tbody', _vm._l(_vm.reportData.return_invoices, function (returnData) {
    var _returnData$invoice$c;
    return _c('tr', {
      key: returnData.invoice.id
    }, [_c('td', [_vm._v(_vm._s(returnData.invoice.invoice_no))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(((_returnData$invoice$c = returnData.invoice.client) === null || _returnData$invoice$c === void 0 ? void 0 : _returnData$invoice$c.name) || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(returnData.invoice.invoice_date)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(returnData.invoice.sub_total) + " "), _c('span', {
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
    staticClass: "fas fa-file-invoice"
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

;// ./resources/js/pages/reports/invoice-summary.vue?vue&type=template&id=0d0a4ffc&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/invoice-summary.vue?vue&type=script&lang=js
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


/* harmony default export */ const invoice_summaryvue_type_script_lang_js = ({
  name: 'InvoiceSummary',
  data: function data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingClients: false,
      reportData: null,
      errors: {},
      // Breadcrumbs
      breadcrumbs: [{
        name: 'Dashboard',
        url: '/'
      }, {
        name: 'Reports',
        url: ''
      }],
      breadcrumbsCurrent: 'Invoice Summary',
      // Filters
      filters: {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null
      },
      // Pagination
      clientPerPage: 50,
      currentClientPage: 1,
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
      return "/invoice-summary/export?".concat(params.toString());
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
      return "/invoice-summary/pdf?".concat(params.toString());
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
      return "/print/reports/invoice-summary?".concat(params.toString());
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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.all([_this.loadFiscalYears()]);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    loadFiscalYears: function loadFiscalYears() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var search, response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this2.loadingFiscalYears = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios_default().get('/api/fiscal-years/search', {
                params: {
                  search: search,
                  perPage: 100
                }
              });
            case 2:
              response = _context2.v;
              _this2.fiscalYears = response.data.data || response.data;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              _this2.$toast.error('', _this2.$t('Failed to load fiscal years'));
            case 4:
              _context2.p = 4;
              _this2.loadingFiscalYears = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadAccountingPeriods: function loadAccountingPeriods() {
      var _arguments2 = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var search, params, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              search = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
              _this3.loadingAccountingPeriods = true;
              _context3.p = 1;
              params = {
                search: search,
                perPage: 100
              };
              if (_this3.filters.fiscalYear) {
                params.fiscal_year_id = _this3.filters.fiscalYear;
              }
              _context3.n = 2;
              return axios_default().get('/api/accounting-periods/search', {
                params: params
              });
            case 2:
              response = _context3.v;
              _this3.accountingPeriods = response.data.data || response.data;
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              _this3.$toast.error('', _this3.$t('Failed to load accounting periods'));
            case 4:
              _context3.p = 4;
              _this3.loadingAccountingPeriods = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    searchFiscalYears: function searchFiscalYears(search) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this4.loadFiscalYears(search);
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    searchAccountingPeriods: function searchAccountingPeriods(search) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this5.loadAccountingPeriods(search);
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    generateReport: function generateReport() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var params, response, _error$response, _t3;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _this6.loading = true;
              _this6.errors = {};
              _this6.reportData = null;
              _context6.p = 1;
              params = {
                page: _this6.currentClientPage,
                per_page: _this6.clientPerPage
              };
              if (_this6.filters.fiscalYear) {
                params.fiscal_year_id = _this6.filters.fiscalYear;
              } else if (_this6.filters.accountingPeriod) {
                params.accounting_period_id = _this6.filters.accountingPeriod;
              } else if (_this6.filters.fromDate && _this6.filters.toDate) {
                params.from_date = _this6.filters.fromDate;
                params.to_date = _this6.filters.toDate;
              }
              _context6.n = 2;
              return axios_default().get('/api/reports/invoice-summary', {
                params: params
              });
            case 2:
              response = _context6.v;
              if (response.data.success) {
                _this6.reportData = response.data.data;
                _this6.$toast.success('', _this6.$t('Report generated successfully'));
              } else {
                _this6.$toast.error('', response.data.message || _this6.$t('Failed to generate report'));
              }
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t3 = _context6.v;
              if (_t3.response && _t3.response.data && _t3.response.data.errors) {
                _this6.errors = _t3.response.data.errors;
              }
              _this6.$toast.error('', ((_error$response = _t3.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this6.$t('Failed to generate report'));
            case 4:
              _context6.p = 4;
              _this6.loading = false;
              return _context6.f(4);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3, 4, 5]]);
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
    loadClientPage: function loadClientPage(page) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var params, response, _error$response2, _t4;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (_this7.reportData) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this7.loadingClients = true;
              _this7.currentClientPage = page;
              _context7.p = 2;
              params = {
                page: page,
                per_page: _this7.clientPerPage
              };
              if (_this7.filters.fiscalYear) {
                params.fiscal_year_id = _this7.filters.fiscalYear;
              } else if (_this7.filters.accountingPeriod) {
                params.accounting_period_id = _this7.filters.accountingPeriod;
              } else if (_this7.filters.fromDate && _this7.filters.toDate) {
                params.from_date = _this7.filters.fromDate;
                params.to_date = _this7.filters.toDate;
              }
              _context7.n = 3;
              return axios_default().get('/api/reports/invoice-summary', {
                params: params
              });
            case 3:
              response = _context7.v;
              if (response.data.success) {
                // Update only the client summary and pagination data
                _this7.reportData.client_summary = response.data.data.client_summary;
                _this7.reportData.pagination = response.data.data.pagination;
              } else {
                _this7.$toast.error('', response.data.message || _this7.$t('Failed to load client data'));
              }
              _context7.n = 5;
              break;
            case 4:
              _context7.p = 4;
              _t4 = _context7.v;
              _this7.$toast.error('', ((_error$response2 = _t4.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this7.$t('Failed to load client data'));
            case 5:
              _context7.p = 5;
              _this7.loadingClients = false;
              return _context7.f(5);
            case 6:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 4, 5, 6]]);
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
      var pdfUrl = "/print/reports/invoice-summary/pdf?".concat(params.toString());
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
      var pdfUrl = "/print/reports/invoice-summary/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/invoice-summary.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_invoice_summaryvue_type_script_lang_js = (invoice_summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/invoice-summary.vue?vue&type=style&index=0&id=0d0a4ffc&prod&scoped=true&lang=css
var invoice_summaryvue_type_style_index_0_id_0d0a4ffc_prod_scoped_true_lang_css = __webpack_require__(69440);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/invoice-summary.vue?vue&type=style&index=0&id=0d0a4ffc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(invoice_summaryvue_type_style_index_0_id_0d0a4ffc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_invoice_summaryvue_type_style_index_0_id_0d0a4ffc_prod_scoped_true_lang_css = (invoice_summaryvue_type_style_index_0_id_0d0a4ffc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/invoice-summary.vue?vue&type=style&index=0&id=0d0a4ffc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/invoice-summary.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_invoice_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0d0a4ffc",
  null
  
)

/* harmony default export */ const invoice_summary = (component.exports);

/***/ }),

/***/ 69440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-0d0a4ffc]{border:none!important}.invoice-summary-table[data-v-0d0a4ffc]{border-collapse:separate;border-spacing:0}.invoice-summary-table thead th[data-v-0d0a4ffc]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoice-summary-table thead tr[data-v-0d0a4ffc]{border:none!important}.invoice-summary-table thead th[data-v-0d0a4ffc]:first-child{border-top-left-radius:10px}.invoice-summary-table thead th[data-v-0d0a4ffc]:last-child{border-top-right-radius:10px}[dir=rtl] .invoice-summary-table thead th[data-v-0d0a4ffc]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoice-summary-table thead th[data-v-0d0a4ffc]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-0d0a4ffc]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-0d0a4ffc],.export-pdf-btn[data-v-0d0a4ffc],.preview-btn[data-v-0d0a4ffc]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-0d0a4ffc],.export-pdf-btn[data-v-0d0a4ffc],.preview-btn[data-v-0d0a4ffc],.print-btn[data-v-0d0a4ffc]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-0d0a4ffc]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-0d0a4ffc]{gap:10px}.card[data-v-0d0a4ffc]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-0d0a4ffc]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-0d0a4ffc]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.overlay[data-v-0d0a4ffc]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.info-box[data-v-0d0a4ffc]{background:#fff;border:1px solid #dee2e6;margin-bottom:1rem;padding:1rem}.info-box[data-v-0d0a4ffc],.info-box-icon[data-v-0d0a4ffc]{align-items:center;border-radius:.375rem;display:flex}.info-box-icon[data-v-0d0a4ffc]{height:60px;justify-content:center;margin-right:1rem;width:60px}.info-box-content[data-v-0d0a4ffc]{flex:1}.info-box-text[data-v-0d0a4ffc]{color:#6c757d;display:block;font-size:.875rem;margin-bottom:.25rem}.info-box-number[data-v-0d0a4ffc]{color:#495057;display:block;font-size:1.25rem;font-weight:600}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);