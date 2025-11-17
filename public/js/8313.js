"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8313],{

/***/ 8313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profit_loss)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/profit-loss.vue?vue&type=template&id=9144b864&scoped=true
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right ml-auto"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
    }],
    staticClass: "btn btn-success refresh-btn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.refreshTable
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn export-excel-btn",
    attrs: {
      "href": _vm.exportUrl,
      "title": "Export to Excel"
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "19",
      "viewBox": "0 0 18 19",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M11.625 17.5001C11.625 17.699 11.546 17.8898 11.4053 18.0305C11.2647 18.1711 11.0739 18.2501 10.875 18.2501H8.24998C8.05107 18.2501 7.86031 18.1711 7.71966 18.0305C7.579 17.8898 7.49998 17.699 7.49998 17.5001V12.2501C7.49998 12.0512 7.579 11.8604 7.71966 11.7198C7.86031 11.5791 8.05107 11.5001 8.24998 11.5001C8.4489 11.5001 8.63966 11.5791 8.78031 11.7198C8.92097 11.8604 8.99998 12.0512 8.99998 12.2501V16.7501H10.875C11.0739 16.7501 11.2647 16.8291 11.4053 16.9698C11.546 17.1104 11.625 17.3012 11.625 17.5001ZM5.68592 11.6398C5.60578 11.5826 5.51514 11.5417 5.41918 11.5194C5.32323 11.4972 5.22384 11.4941 5.12668 11.5103C5.02953 11.5265 4.93651 11.5617 4.85295 11.6138C4.76939 11.6659 4.69692 11.734 4.63967 11.8142L3.37498 13.5851L2.1103 11.8142C2.05509 11.7292 1.98324 11.6564 1.89909 11.5999C1.81495 11.5435 1.72024 11.5047 1.62069 11.4859C1.52114 11.4671 1.41882 11.4687 1.31988 11.4905C1.22095 11.5123 1.12747 11.554 1.04507 11.6129C0.962677 11.6719 0.893077 11.7469 0.840473 11.8335C0.787869 11.9201 0.753352 12.0164 0.739005 12.1167C0.724657 12.217 0.730776 12.3191 0.756994 12.417C0.783211 12.5148 0.828983 12.6064 0.891547 12.6861L2.45342 14.8751L0.889672 17.0642C0.784434 17.2261 0.74571 17.4224 0.781564 17.6121C0.817419 17.8019 0.925088 17.9705 1.08215 18.0829C1.23922 18.1952 1.43357 18.2427 1.62474 18.2153C1.81591 18.188 1.98916 18.088 2.10842 17.9361L3.37498 16.1651L4.63967 17.9361C4.75893 18.088 4.93219 18.188 5.12336 18.2153C5.31453 18.188 5.50888 18.1952 5.66594 18.0829C5.82301 17.9705 5.93068 17.8019 5.96653 17.6121C6.00239 17.4224 5.96366 17.2261 5.85842 17.0642L4.29655 14.8751L5.8603 12.6861C5.91755 12.6059 5.95845 12.5153 5.98067 12.4193C6.00289 12.3234 6.00599 12.224 5.9898 12.1268C5.97361 12.0297 5.93844 11.9367 5.8863 11.8531C5.83416 11.7695 5.76607 11.6971 5.68592 11.6398ZM14.9615 14.0604C14.5865 13.9517 14.1984 13.8401 13.9819 13.7004C13.8647 13.6236 13.8665 13.6067 13.8769 13.5223C13.8783 13.4541 13.896 13.3873 13.9287 13.3274C13.9613 13.2675 14.0078 13.2164 14.0644 13.1782C14.4956 12.8857 15.5025 13.017 15.9225 13.1257C16.1149 13.1763 16.3196 13.1484 16.4915 13.0481C16.6633 12.9478 16.7883 12.7834 16.8389 12.5909C16.8895 12.3985 16.8616 12.1938 16.7613 12.0219C16.661 11.8501 16.4965 11.7251 16.304 11.6745C16.1062 11.6229 14.3353 11.1851 13.2262 11.9332C12.9924 12.0913 12.796 12.2987 12.6511 12.5408C12.5061 12.783 12.416 13.054 12.3872 13.3348C12.1997 14.8236 13.6669 15.2482 14.5434 15.5014C15.674 15.8286 15.7734 15.9626 15.7415 16.2129C15.7125 16.4389 15.6234 16.5251 15.54 16.5814C15.1087 16.8682 14.1187 16.7267 13.7081 16.6142C13.516 16.5609 13.3106 16.586 13.1371 16.6841C13.0512 16.7327 12.9757 16.7977 12.9149 16.8755C12.8541 16.9532 12.8092 17.0422 12.7828 17.1373C12.7564 17.2324 12.749 17.3318 12.761 17.4298C12.773 17.5277 12.8041 17.6224 12.8527 17.7083C12.9508 17.8818 13.1138 18.0093 13.3059 18.0626C13.7708 18.1851 14.2493 18.2481 14.73 18.2501C15.2756 18.2501 15.8831 18.1564 16.3697 17.832C16.6097 17.6724 16.8114 17.4615 16.9602 17.2146C17.109 16.9678 17.2012 16.691 17.2303 16.4042C17.4375 14.7814 15.8887 14.3286 14.9615 14.0604ZM0.749985 8.50012V1.75012C0.749985 1.3523 0.90802 0.970767 1.18932 0.689462C1.47063 0.408157 1.85216 0.250122 2.24998 0.250122H11.25C11.3485 0.250045 11.4461 0.269379 11.5371 0.30702C11.6282 0.344661 11.7109 0.399872 11.7806 0.469497L17.0306 5.7195C17.1002 5.7892 17.1554 5.87194 17.1931 5.96299C17.2307 6.05403 17.2501 6.1516 17.25 6.25012V8.50012C17.25 8.69903 17.171 8.8898 17.0303 9.03045C16.8897 9.1711 16.6989 9.25012 16.5 9.25012C16.3011 9.25012 16.1103 9.1711 15.9697 9.03045C15.829 8.8898 15.75 8.69903 15.75 8.50012V7.00012H11.25C11.0511 7.00012 10.8603 6.9211 10.7197 6.78045C10.579 6.6398 10.5 6.44903 10.5 6.25012V1.75012H2.24998V8.50012C2.24998 8.69903 2.17097 8.8898 2.03031 9.03045C1.88966 9.1711 1.6989 9.25012 1.49998 9.25012C1.30107 9.25012 1.11031 9.1711 0.969655 9.03045C0.829003 8.8898 0.749985 8.69903 0.749985 8.50012ZM12 5.50012H14.6887L12 2.81043V5.50012Z",
      "fill": "#2AB930"
    }
  })])]), _vm._v(" "), _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn export-pdf-btn",
    on: {
      "click": _vm.downloadPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Preview'),
      expression: "$t('Preview')"
    }],
    staticClass: "btn preview-btn",
    on: {
      "click": _vm.previewPDF
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print Table'),
      expression: "$t('Print Table')"
    }],
    staticClass: "btn print-btn",
    on: {
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })])])])]), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveType.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "reportType"
    }
  }, [_vm._v(_vm._s(_vm.$t("Report Type")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reportType,
      expression: "form.reportType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reportType')
    },
    attrs: {
      "id": "reportType"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "reportType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Gross Profit/Loss")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Net Profit/Loss")) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reportType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [[_c('date-range-picker', {
    attrs: {
      "from": _vm.form.fromDate,
      "to": _vm.form.toDate,
      "panel": _vm.$route.query.panel
    },
    on: {
      "update": _vm.update
    }
  })]], 2)])])])])]), _vm._v(" "), _vm.allData && _vm.allData.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "invoice p-3 mb-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('div', {
    staticClass: "m-auto invoice-col"
  }, [_c('CompanyInfo', {
    staticClass: "text-center"
  })], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _vm.reportType === 1 ? _c('div', {
    staticClass: "row mt-5 position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _vm.loading == false ? _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table table-sm"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Avg. Purchase Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Avg. Selling Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Sold Qty")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_c('strong', [_c('span', {
    staticClass: "green"
  }, [_vm._v(_vm._s(_vm.$t("Profit")))]), _vm._v(" /\n                      "), _c('span', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.$t("Loss")))])])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.grossItems, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(data.itemCode, _vm.productPrefix)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.itemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.avgPurchasePrice) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.avgSalePrice) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.currentQty))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('strong', [data.profitOrLoss >= 0 ? _c('span', {
      staticClass: "green"
    }, [_vm._v(_vm._s(data.profitOrLoss))]) : _c('span', {
      staticClass: "red"
    }, [_vm._v(_vm._s(data.profitOrLoss))])])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalQty))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.totalProfitOrLoss) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])], 2)])]) : _vm._e(), _vm._v(" "), _vm.loading == false ? _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Sales (Average)")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.totalSold) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Purchase (Average)")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('u', [_c('strong', [_vm._v("(" + _vm._s(_vm.totalPurchased) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(")")])])])]), _vm._v(" "), _c('tr', {
    "class": _vm.totalProfitOrLoss >= 0 ? 'green' : 'red'
  }, [_c('th', [_vm.totalProfitOrLoss >= 0 ? _c('span', [_vm._v(_vm._s(_vm.$t("Profit")))]) : _c('span', [_vm._v(_vm._s(_vm.$t("Loss")))])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.totalProfitOrLoss) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])]) : _vm._e()], 1) : _c('div', {
    staticClass: "row mt-5 position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table text-left"
  }, [_c('thead', [_c('tr', {
    staticClass: "success text-center"
  }, [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t("Income Statement")) + " "), _c('br')])])]), _vm._v(" "), _c('tr', {
    staticClass: "text-center"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("From")) + "\n                      " + _vm._s(_vm._f("moment")(_vm.form.fromDate, "Do MMM, YYYY")) + "\n                      " + _vm._s(_vm.$t("To")) + "\n                      " + _vm._s(_vm._f("moment")(_vm.form.toDate, "Do MMM, YYYY")))])])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Sales")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].totalSales) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Cost of Goods Sold")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('u', [_c('strong', [_vm._v("(" + _vm._s(_vm.allData[0].costOfGoodsSold) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(")")])])])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Inventory Adjustment")) + "\n                  ")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-success"
  }, [_c('td', [_vm._v(_vm._s(_vm.$t("Positive Adjusted")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('u', [_c('strong', [_vm._v(_vm._s(_vm.allData[0].posAdjustment) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', {
    staticClass: "text-danger"
  }, [_c('td', [_vm._v(_vm._s(_vm.$t("Negative Adjusted")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('u', [_c('strong', [_vm._v("(" + _vm._s(_vm.allData[0].negAdjustment) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(")")])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Adjusted")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    "class": _vm.allData[0].totalAdjustment >= 0 ? 'text-success' : 'text-danger'
  }, [_vm.allData[0].totalAdjustment >= 0 ? _c('strong', [_vm._v(_vm._s(_vm.allData[0].totalAdjustment) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _c('strong', [_vm._v("(" + _vm._s(_vm.allData[0].totalAdjustment) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(")")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("\n                  " + _vm._s(_vm.$t("Total Sell Return")) + "\n                ")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].totalSalesReturn) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _c('tr', [_c('th', [_vm.allData[0].grossProfitOrLoss > 0 ? _c('span', [_vm._v(_vm._s(_vm.$t("Gross Profit")))]) : _c('span', [_vm._v(_vm._s(_vm.$t("Gross Loss")))])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].grossProfitOrLoss) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Operating Expenses")))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.$t("Salaries")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].payrollAmount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.$t("General Expenses")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].expenseAmount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.$t("Loan Interest")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].loanInterest) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.$t("Asset Depreciation")))]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData[0].assetDepriciation) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Total Expense")))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v("(" + _vm._s(_vm.allData[0].totalExpense) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(")")])])]), _vm._v(" "), _c('tr', {
    "class": _vm.allData[0].netProfitOrLoss >= 0 ? 'text-success' : 'text-danger'
  }, [_c('th', [_vm.allData[0].netProfitOrLoss >= 0 ? _c('span', [_vm._v(_vm._s(_vm.$t("Net Profit")))]) : _c('span', [_vm._v(_vm._s(_vm.$t("Net Loss")))])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v("\n                      " + _vm._s(_vm.allData[0].netProfitOrLoss) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])])], 1)])])])])]) : _vm.allData && _vm.allData.length <= 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-10 offset-xl-1"
  }, [_c('div', {
    staticClass: "alert alert-secondary"
  }, [_c('h5', [_c('i', {
    staticClass: "icon fas fa-info"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Empty profit/loss!")) + "\n        ")]), _vm._v("\n        " + _vm._s(_vm.$t("Sorry, no profit/loss were found for your selected category and date range.")) + "\n      ")])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  })]);
}];

;// ./resources/js/pages/reports/profit-loss.vue?vue&type=template&id=9144b864&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css
var vue_mj_daterangepicker = __webpack_require__(74208);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/profit-loss.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const profit_lossvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Profit/Loss Report")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Profit/Loss Report",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Reports",
        url: ""
      }, {
        name: "Profit/Loss Report",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        fromDate: String(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
        toDate: String(new Date()),
        reportType: 1
      }),
      loading: false,
      allData: "",
      reportType: "",
      totalQty: 0,
      grossItems: [],
      totalProfitOrLoss: 0,
      totalPurchased: 0,
      totalSold: 0,
      date: new Date(),
      productPrefix: ""
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    exportUrl: function exportUrl() {
      // Create a dynamic export URL for profit loss with current filters
      var params = new URLSearchParams();
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      if (this.form.reportType) {
        params.append('reportType', this.form.reportType);
      }
      return "/reports/profit-loss/export?".concat(params.toString());
    },
    pdfUrl: function pdfUrl() {
      // Create a dynamic PDF URL for profit loss with current filters
      var params = new URLSearchParams();
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      if (this.form.reportType) {
        params.append('reportType', this.form.reportType);
      }
      return "/reports/profit-loss/pdf?".concat(params.toString());
    },
    printTemplateUrl: function printTemplateUrl() {
      // Create a dynamic print template URL for profit loss with current filters
      var params = new URLSearchParams();
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      if (this.form.reportType) {
        params.append('reportType', this.form.reportType);
      }
      return "/print/reports/profit-loss?".concat(params.toString());
    }
  }),
  methods: {
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for profit loss report form fields
      var fieldLabelMap = {
        'reportType': this.$t('Report Type'),
        'report type': this.$t('Report Type'),
        'report_type': this.$t('Report Type'),
        'fromDate': this.$t('From Date'),
        'from date': this.$t('From Date'),
        'from_date': this.$t('From Date'),
        'toDate': this.$t('To Date'),
        'to date': this.$t('To Date'),
        'to_date': this.$t('To Date')
      };
      var fieldLabel = fieldLabelMap[field] || fieldLabelMap[field === null || field === void 0 ? void 0 : field.toLowerCase()] || field;

      // Handle mixed language messages from backend (Arabic + English)
      // Pattern: "حقل [field] مطلوب" -> "Field is required"
      var mixedLanguagePatterns = [
      // Arabic "حقل" + English field + Arabic "مطلوب"
      {
        re: /حقل\s+([^م]+?)\s+مطلوب/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "".concat(fieldTranslation, " is required");
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "".concat(fieldTranslation, " \u0645\u0637\u0644\u0648\u0628");
        }
      },
      // Arabic "يرجى اختيار" + English field
      {
        re: /يرجى\s+اختيار\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "Please select ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(fieldTranslation);
        }
      },
      // Arabic "يرجى إدخال" + English field
      {
        re: /يرجى\s+إدخال\s+([^.]+)/i,
        en: function en(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
          return "Please enter ".concat(fieldTranslation);
        },
        ar: function ar(_, fieldName) {
          var cleanFieldName = fieldName.trim();
          var fieldTranslation = fieldLabelMap[cleanFieldName] || fieldLabelMap[cleanFieldName.toLowerCase()] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] || fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] || cleanFieldName;
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

      // Additional pattern for "حقل [field] مطلوب" format
      if (message.includes('حقل') && message.includes('مطلوب')) {
        var fieldMatch = message.match(/حقل\s+([^م]+?)\s+مطلوب/i);
        if (fieldMatch) {
          var fieldName = fieldMatch[1].trim();
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

      // Common Laravel validation patterns with localized messages
      var patterns = [
      // Required field patterns
      {
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "".concat(fieldLabel, " is required"),
        ar: "".concat(fieldLabel, " \u0645\u0637\u0644\u0648\u0628")
      }, {
        re: /Please\s+select\s+an?\s+.+?\.?/i,
        en: "Please select ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 ".concat(fieldLabel)
      }, {
        re: /Please\s+enter\s+a\s+.+?\.?/i,
        en: "Please enter ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ".concat(fieldLabel)
      }, {
        re: /Please\s+provide\s+a\s+.+?\.?/i,
        en: "Please provide ".concat(fieldLabel),
        ar: "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645 ".concat(fieldLabel)
      }];

      // Check standard Laravel patterns
      for (var _i2 = 0, _patterns = patterns; _i2 < _patterns.length; _i2++) {
        var _patterns$_i = _patterns[_i2],
          _re = _patterns$_i.re,
          _en = _patterns$_i.en,
          _ar = _patterns$_i.ar;
        if (_re.test(message)) {
          return isArabic ? _ar : _en;
        }
      }

      // Fallback: return the message with translation attempt
      return this.$t(message) !== message ? this.$t(message) : message;
    },
    // get filtered data
    update: function update(values) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.form.fromDate = values.from;
              _this.form.toDate = values.to;
              _this.productPrefix = _this.appInfo.productPrefix;
              _this.loading = true;
              _context.n = 1;
              return _this.form.post(window.location.origin + "/api/reports/profit-loss").then(function (response) {
                _this.allData = response.data.reportData;
                _this.reportType = response.data.type;
                if (_this.reportType == 1) {
                  _this.calculateTotal(_this.allData);
                  _this.grossItems = _this.allData;
                  _this.grossItems.sort(_this.sortProducts);
                }
                _this.loading = false;
              })["catch"](function (error) {
                var _error$response, _error$response2;
                _this.loading = false;

                // Handle validation errors
                if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
                  // Translate validation errors
                  var translatedErrors = {};
                  Object.keys(error.response.data.errors).forEach(function (field) {
                    translatedErrors[field] = error.response.data.errors[field].map(function (message) {
                      // Use translateValidationMessage to handle mixed language messages
                      return _this.translateValidationMessage(message, field);
                    });
                  });

                  // Set the translated errors back to the form
                  _this.form.errors.set(translatedErrors);

                  // Show a general validation error message
                  toast.fire({
                    type: "error",
                    title: _this.$t("Please check your input and try again.")
                  });
                } else {
                  // Handle other errors
                  toast.fire({
                    type: "error",
                    title: _this.$t("There was something wrong.")
                  });
                }
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // refresh top buttons
    refreshTable: function refreshTable() {
      this.update({
        from: this.form.fromDate,
        to: this.form.toDate
      });
    },
    // print table area
    print: function print() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this2.$htmlToPaper) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.$htmlToPaper("printMe");
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _this2.printWindow();
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    sortProducts: function sortProducts(a, b) {
      if (a.code < b.code) {
        return -1;
      }
      if (a.code > b.code) {
        return 1;
      }
      return 0;
    },
    // calculate total
    calculateTotal: function calculateTotal(items) {
      var _this3 = this;
      var _ref = [0, 0, 0, 0];
      this.totalQty = _ref[0];
      this.totalProfitOrLoss = _ref[1];
      this.totalPurchased = _ref[2];
      this.totalSold = _ref[3];
      items.forEach(function (item) {
        _this3.totalQty += item.currentQty;
        _this3.totalProfitOrLoss += item.profitOrLoss;
        _this3.totalPurchased += item.avgPurchasePrice * item.currentQty;
        _this3.totalSold += item.avgSalePrice * item.currentQty;
      });
      return;
    },
    // print
    printWindow: function printWindow() {
      window.print();
    },
    downloadPDF: function downloadPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      if (this.form.reportType) {
        params.append('reportType', this.form.reportType);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/profit-loss/pdf?".concat(params.toString());
      window.location.href = pdfUrl;
    },
    previewPDF: function previewPDF() {
      // Build query parameters from filters
      var params = new URLSearchParams();
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      if (this.form.reportType) {
        params.append('reportType', this.form.reportType);
      }

      // Redirect to backend PDF route with query parameters
      var pdfUrl = "/print/reports/profit-loss/preview?".concat(params.toString());
      window.location.href = pdfUrl;
    }
  }
});
;// ./resources/js/pages/reports/profit-loss.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_profit_lossvue_type_script_lang_js = (profit_lossvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/profit-loss.vue?vue&type=style&index=0&id=9144b864&prod&scoped=true&lang=css
var profit_lossvue_type_style_index_0_id_9144b864_prod_scoped_true_lang_css = __webpack_require__(17252);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/profit-loss.vue?vue&type=style&index=0&id=9144b864&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(profit_lossvue_type_style_index_0_id_9144b864_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const reports_profit_lossvue_type_style_index_0_id_9144b864_prod_scoped_true_lang_css = (profit_lossvue_type_style_index_0_id_9144b864_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/reports/profit-loss.vue?vue&type=style&index=0&id=9144b864&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/profit-loss.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  reports_profit_lossvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9144b864",
  null
  
)

/* harmony default export */ const profit_loss = (component.exports);

/***/ }),

/***/ 10151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mj-daterange-picker{border:1px solid var(--border-color);border-radius:4px;min-width:400px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:var(--default-width)}.mj-daterange-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.mj-daterange-picker .panels-choices{grid-gap:10px 10px;border-bottom:1px solid var(--border-color);display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:20px}.mj-daterange-picker .panels-choices .panel-button{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#f2f4f5;border-radius:4px;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;font-weight:700;height:32px;justify-content:center;padding:5px 15px}.mj-daterange-picker .panels-choices .panel-button.is-current,.mj-daterange-picker .panels-choices .panel-button:hover{background-color:var(--primary-color);color:#fff}.mj-daterange-picker .preset-ranges{border-bottom:1px solid var(--border-color);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px}.mj-daterange-picker .preset-ranges .preset{cursor:pointer;font-size:13px;height:20px;margin:5px 0;position:relative;width:50%}.mj-daterange-picker .preset-ranges .preset input{height:0;opacity:0;position:absolute;width:0}.mj-daterange-picker .preset-ranges .preset input:checked~label .check{background-color:var(--primary-color)}.mj-daterange-picker .preset-ranges .preset input:checked~label .check:after{background-color:transparent}.mj-daterange-picker .preset-ranges .preset label{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.mj-daterange-picker .preset-ranges .preset label span+span{margin-left:10px}.mj-daterange-picker .preset-ranges .preset label .check{background-color:var(--secondary-color);border-radius:10px;display:block;height:20px;position:relative;width:20px}.mj-daterange-picker .preset-ranges .preset label .check:after{background-color:#fff;border:3px solid #fff;border-radius:100%;content:\"\";height:10px;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:10px}.mj-daterange-picker .preset-ranges .preset *{cursor:pointer}.mj-calendar{background-color:var(--normal-color);color:var(--contrast-color);padding:20px}.mj-calendar .calendar-header{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between}.mj-calendar .calendar-header .calendar-month-name{-webkit-box-flex:1;color:var(--secondary-color);-ms-flex:1;flex:1;font-size:14px;font-weight:700;text-align:center}.mj-calendar .calendar-header .calendar-arrow{fill:var(--secondary-color);cursor:pointer}.mj-calendar .calendar-months{grid-gap:10px 10px;display:grid;grid-template-columns:1fr 1fr 1fr;margin-top:20px}.mj-calendar .calendar-months .month{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border:1px solid var(--border-color);border-radius:4px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:13px;height:50px;justify-content:center;padding:10px}.mj-calendar .calendar-months .month:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-months .month.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-months .month.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-months .month:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-quarters{margin-top:20px}.mj-calendar .calendar-quarters .quarter{grid-gap:10px 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:grid;font-size:13px;grid-template-columns:1fr 3fr;margin:10px 0}.mj-calendar .calendar-quarters .quarter .months{grid-gap:10px 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid var(--border-color);border-radius:4px;display:grid;grid-template-columns:1fr 1fr 1fr;height:50px;padding:10px 30px}.mj-calendar .calendar-quarters .quarter .months:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-quarters .quarter .months .month{text-align:center}.mj-calendar .calendar-quarters .quarter.is-selected .months{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-quarters .quarter.is-disabled .months{opacity:.5}.mj-calendar .calendar-quarters .quarter.is-disabled{cursor:not-allowed;pointer-events:none}.mj-calendar .calendar-quarters .quarter:not(.is-disabled) .months{cursor:pointer}.mj-calendar .calendar-years .year{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border:1px solid var(--border-color);border-radius:4px;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;height:50px;justify-content:center;margin:10px 0;padding:10px}.mj-calendar .calendar-years .year:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-years .year.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-years .year.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-years .year:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-days,.mj-calendar .calendar-days-name{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.mj-calendar .calendar-days .day,.mj-calendar .calendar-days-name .day{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;width:14.28571%}.mj-calendar .calendar-days-name .day{color:var(--ternary-color);font-size:11px;height:30px}.mj-calendar .calendar-days .day{border-bottom:2px solid #fff;border-top:2px solid #fff;font-size:13px;height:40px}.mj-calendar .calendar-days .day:not(.is-current-month){color:var(--ternary-color)}.mj-calendar .calendar-days .day.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-days .day.is-today span{color:var(--secondary-color);font-weight:700}.mj-calendar .calendar-days .day.is-in-range{background-color:var(--hover-range-color)}.mj-calendar .calendar-days .day.is-first-range{border-bottom-left-radius:4px;border-top-left-radius:4px}.mj-calendar .calendar-days .day.is-last-range{border-bottom-right-radius:4px;border-top-right-radius:4px}.mj-calendar .calendar-days .day.is-edge-range,.mj-calendar .calendar-days .day.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-days .day:not(.is-disabled){cursor:pointer}.mj-calendar.mj-calendar-days .calendar-days .day:not(.is-edge-range):hover{background-color:var(--hover-day-color)}.mj-daterange-picker-controls{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;align-items:center;border-top:1px solid var(--border-color);display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;margin-top:10px;padding:20px}.mj-daterange-picker-controls .mj-daterange-picker-button{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border-radius:4px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;height:36px;justify-content:center;min-width:150px;padding:5px}.mj-daterange-picker-controls .mj-daterange-picker-button:not(.is-disabled){cursor:pointer}.mj-daterange-picker-reset{border:1px solid #e6eaed}.mj-daterange-picker-submit{background-color:var(--primary-color);color:#fff}.mj-daterange-picker-submit.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".refresh-btn[data-v-9144b864]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-9144b864],.export-pdf-btn[data-v-9144b864],.preview-btn[data-v-9144b864]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-9144b864],.export-pdf-btn[data-v-9144b864],.preview-btn[data-v-9144b864],.print-btn[data-v-9144b864]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-9144b864]{background:#33a0d91a!important;color:#33a0d9!important}.btn-group.c-w-100[data-v-9144b864]{gap:10px}.card[data-v-9144b864]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-9144b864]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-9144b864]{padding:1.25rem}.form-control[data-v-9144b864]{background:#fff!important}@media (max-width:1300px){.info-box[data-v-9144b864]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 74208:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85072);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_11_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_vue_mj_daterangepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10151);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_vue_mj_daterangepicker_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_vue_mj_daterangepicker_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.locals || {});

/***/ })

}]);