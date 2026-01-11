"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8505],{

/***/ 20587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-2e1c1d02]{margin-bottom:15px}.footer-buttons[data-v-2e1c1d02]{display:flex;gap:10px}.footer-buttons .btn[data-v-2e1c1d02]{margin-right:10px}.footer-buttons .btn[data-v-2e1c1d02]:last-child{margin-right:0}.btn-group.c-w-100[data-v-2e1c1d02]{gap:10px}.card[data-v-2e1c1d02]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2e1c1d02]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2e1c1d02]{background:#fff!important}.btn-primary[data-v-2e1c1d02]{background:#2ab930!important}.btn-secondary[data-v-2e1c1d02]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-2e1c1d02]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.table-custom[data-v-2e1c1d02]{border:none!important}.purchases-create-table[data-v-2e1c1d02]{border-collapse:separate;border-spacing:0}.purchases-create-table thead th[data-v-2e1c1d02]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.purchases-create-table thead tr[data-v-2e1c1d02]{border:none!important}.purchases-create-table thead th[data-v-2e1c1d02]:first-child{border-top-left-radius:10px}.purchases-create-table thead th[data-v-2e1c1d02]:last-child{border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-2e1c1d02]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-2e1c1d02]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.purchases-create-table .badge.badge-info[data-v-2e1c1d02]{background:#e3f2fd!important;color:#1976d2!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.quantity-field[data-v-2e1c1d02]{border-radius:0!important;margin:0!important;min-height:50px!important}.account-status[data-v-2e1c1d02]{font-size:.875rem}.account-status .account-warning[data-v-2e1c1d02]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-2e1c1d02]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}.product-status[data-v-2e1c1d02]{font-size:13px}.product-warning[data-v-2e1c1d02]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;color:#856404;display:flex;font-weight:500;padding:8px 12px}.btn-outline-warning[data-v-2e1c1d02]{border-color:#ffc107;border-radius:6px;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-2e1c1d02]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-2e1c1d02]:disabled{cursor:not-allowed;opacity:.6}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ItemsTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=template&id=1cdc941e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.items && _vm.items.length > 0 ? _c('div', {
    staticClass: "items-table-wrapper mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto",
    staticStyle: {
      "max-width": "100%"
    }
  }, [_c('table', {
    "class": ['table', 'table-hover', 'table-sm', 'text-center', _vm.tableClass]
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Invoice Qty")))]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Current Qty")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Return Price")))]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))]) : _vm._e()]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.$emit('open-stock-modal', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-exclamation"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(item.name) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _vm.showEditButton ? _c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit Product'),
        expression: "$t('Edit Product')"
      }],
      staticClass: "btn btn-sm btn-outline-primary ml-2",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.$emit('edit-product', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e()])]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.invoiceQty || item.qty) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.returnQty !== undefined ? item.returnQty : (item.invoiceQty || item.qty) - (item.oldQty || 0)) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "fixed-qty-column"
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.qtyFieldName],
        expression: "item[qtyFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".").concat(_vm.qtyFieldName)),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : item.maxQty || null,
        "readonly": item.isFromQuotation,
        "placeholder": _vm.$t('Quantity')
      },
      domProps: {
        "value": item[_vm.qtyFieldName]
      },
      on: {
        "change": function change($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.qtyFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "button-plus icon-shape icon-sm btn-primary",
      attrs: {
        "type": "button",
        "value": "+",
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [!_vm.priceReadonly ? _c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.unitPriceFieldName],
        expression: "item[unitPriceFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "readonly": item.isFromQuotation
      },
      domProps: {
        "value": item[_vm.unitPriceFieldName]
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.unitPriceFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange(item[_vm.unitPriceFieldName], 'price', i - 1, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]) : _c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(_vm.getItemField(item, _vm.unitPriceFieldName))) + "\n                        ")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals((item.originalPrice || _vm.getItemField(item, _vm.unitPriceFieldName)) * (item.invoiceQty || _vm.getItemField(item, _vm.qtyFieldName) || 1))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
      staticStyle: {
        "min-width": "180px"
      }
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discountType,
        expression: "item.discountType"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType"))
      },
      staticStyle: {
        "width": "85px"
      },
      attrs: {
        "disabled": item.isFromQuotation
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleDiscountChange(i - 1);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": "fixed"
      }
    }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "percentage"
      }
    }, [_vm._v(_vm._s(_vm.$t("%")))])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discount,
        expression: "item.discount"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount"))
      },
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName),
        "readonly": item.isFromQuotation,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) || _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discountType"))))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalAfterDiscount !== undefined ? item.totalAfterDiscount : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName) - (item.discountAmount || 0))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "fixed-vat-column"
    }, [_vm.useVatRateId ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.vat_rate_id,
        expression: "item.vat_rate_id"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "vat_rate_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleVatChange(i - 1);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.$t('Select VAT')))]), _vm._v(" "), _vm._l(_vm.taxes, function (tax) {
      return _c('option', {
        key: tax.id,
        domProps: {
          "value": tax.id
        }
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2) : _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "selectedVatRate", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleVatChange(i - 1);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.$t('Select VAT')))]), _vm._v(" "), _vm._l(_vm.taxes, function (tax) {
      return _c('option', {
        key: tax.id,
        domProps: {
          "value": tax
        }
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2), _vm._v(" "), _vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".vat_rate_id"))) + "\n                        ")]) : _vm._e(), _vm._v(" "), !_vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency fixed-vat-column"
    }, [_c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(item.totalTax || 0)) + "\n                            "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + "\n                        "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(item.returnTotal !== undefined ? item.returnTotal : item.totalReturn || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.$emit('remove-item', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": _vm.totalsColspan + (_vm.showInvoiceQtyColumn ? 1 : 0) + (_vm.showCurrentQtyColumn ? 1 : 0)
    }
  }, [!_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.amountInWords) + " ")]) : _c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")))])]), _vm._v(" "), _vm.totalsColspan === 4 && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', [_c('strong')]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : 0)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td') : _vm._e()])], 2)])])]) : _vm._e();
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
/* harmony default export */ const ItemsTablevue_type_script_lang_js = ({
  name: 'ItemsTable',
  props: {
    items: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    prefix: {
      type: String,
      "default": ''
    },
    taxes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    formErrors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    totalUnitPrice: {
      type: Number,
      "default": 0
    },
    totalProductDiscount: {
      type: Number,
      "default": 0
    },
    totalAfterDiscount: {
      type: Number,
      "default": 0
    },
    totalProductTax: {
      type: Number,
      "default": 0
    },
    subtotal: {
      type: Number,
      "default": 0
    },
    amountInWords: {
      type: String,
      "default": ''
    },
    showEditButton: {
      type: Boolean,
      "default": true
    },
    useVatRateId: {
      type: Boolean,
      "default": false
    },
    tableClass: {
      type: String,
      "default": 'quotations-create-table'
    },
    qtyFieldName: {
      type: String,
      "default": 'qty'
    },
    unitPriceFieldName: {
      type: String,
      "default": 'unitPrice'
    },
    priceReadonly: {
      type: Boolean,
      "default": false
    },
    customTotalValue: {
      type: Number,
      "default": null
    },
    totalsColspan: {
      type: Number,
      "default": 5
    },
    hideDiscountColumn: {
      type: Boolean,
      "default": false
    },
    hideVatColumn: {
      type: Boolean,
      "default": false
    },
    showInvoiceQtyColumn: {
      type: Boolean,
      "default": false
    },
    showCurrentQtyColumn: {
      type: Boolean,
      "default": false
    },
    showReturnPriceColumn: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    getItemField: function getItemField(item, fieldName) {
      return item[fieldName] || 0;
    },
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') {
        return '0.00';
      }
      var numValue = Number(value);
      if (isNaN(numValue)) {
        return '0.00';
      }
      return numValue.toFixed(2);
    },
    getFieldError: function getFieldError(field) {
      if (!this.formErrors || typeof this.formErrors.has !== 'function') {
        return false;
      }
      return this.formErrors.has(field);
    },
    getFieldErrorMessage: function getFieldErrorMessage(field) {
      if (!this.formErrors || typeof this.formErrors.get !== 'function') {
        return '';
      }
      return this.formErrors.get(field);
    },
    handleItemChange: function handleItemChange(value, type, index, action) {
      this.$emit('item-change', {
        value: value,
        type: type,
        index: index,
        action: action
      });
    },
    handleDiscountChange: function handleDiscountChange(index) {
      this.$emit('discount-change', index);
    },
    handleVatChange: function handleVatChange(index) {
      this.$emit('vat-change', index);
    }
  }
});
;// ./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ItemsTablevue_type_script_lang_js = (ItemsTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css
var ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css = __webpack_require__(48128);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css = (ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ItemsTable.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ItemsTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1cdc941e",
  null
  
)

/* harmony default export */ const ItemsTable = (component.exports);

/***/ }),

/***/ 28505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=2e1c1d02&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'purchaseReturns.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2)], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePurchaseReturn.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "purchaseNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseNo,
      expression: "form.purchaseNo"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "purchaseNo",
      "type": "text",
      "name": "purchaseNo",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchaseNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseNo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "purchaseReturnNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Return No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseReturnNo,
      expression: "form.purchaseReturnNo"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "purchaseReturnNo",
      "type": "text",
      "name": "purchaseReturnNo",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchaseReturnNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseReturnNo", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "returnReason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Return Reason')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.returnReason,
      expression: "form.returnReason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('returnReason')
    },
    attrs: {
      "id": "returnReason",
      "type": "text",
      "name": "returnReason",
      "placeholder": "Enter a reason"
    },
    domProps: {
      "value": _vm.form.returnReason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "returnReason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "returnReason"
    }
  })], 1), _vm._v(" "), _vm.form.supplier ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.supplier,
      expression: "form.supplier"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "supplier",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.supplier
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "supplier", $event.target.value);
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "product-status mt-2"
  }, _vm._l(_vm.form.selectedProducts, function (product, index) {
    return !product.purchase_account_id ? _c('div', {
      key: "status-".concat(product.id),
      staticClass: "product-warning mb-2"
    }, [_c('i', {
      staticClass: "fas fa-exclamation-triangle text-warning"
    }), _vm._v(" "), _c('span', {
      staticClass: "ml-2"
    }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(product.name) + "\" " + _vm._s(_vm.$t('needs Purchase Account')))]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-sm btn-outline-warning ml-2",
      attrs: {
        "type": "button",
        "disabled": _vm.isAutoAssigningProduct === product.id
      },
      on: {
        "click": function click($event) {
          return _vm.autoAssignProductChartOfAccount(product);
        }
      }
    }, [_c('i', {
      "class": _vm.isAutoAssigningProduct === product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
    }), _vm._v("\n                  " + _vm._s(_vm.isAutoAssigningProduct === product.id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                ")])]) : _vm._e();
  }), 0) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_vm.form.errors.errors && _vm.form.errors.errors.selectedProducts ? _c('div', {
    staticClass: "w-100 m-auto mb-3"
  }, _vm._l(_vm.form.errors.errors.selectedProducts, function (msg, i) {
    return _c('div', {
      key: i,
      staticClass: "callout callout-danger"
    }, [_c('p', [_c('i', {
      staticClass: "icon fas fa-ban"
    }), _vm._v(" " + _vm._s(msg))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c('ItemsTable', {
    attrs: {
      "items": _vm.form.selectedProducts,
      "prefix": _vm.prefix,
      "taxes": _vm.taxes,
      "form-errors": _vm.form.errors,
      "total-unit-price": _vm.totalUnitPrice,
      "total-product-discount": _vm.totalProductDiscount,
      "total-after-discount": _vm.totalAfterDiscount,
      "total-product-tax": _vm.totalProductTax,
      "subtotal": _vm.subtotal,
      "amount-in-words": _vm.toWord(),
      "table-class": "purchases-create-table",
      "qty-field-name": "returnQty",
      "unit-price-field-name": "unitCost",
      "price-readonly": true,
      "show-edit-button": false,
      "custom-total-value": _vm.totalTotal,
      "totals-colspan": 4
    },
    on: {
      "item-change": _vm.handleItemChange,
      "discount-change": _vm.calculateProductDiscount,
      "vat-change": _vm.calculateProductVat,
      "remove-item": _vm.removeItem
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "id": "input-fields"
    }
  }, [!_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedTotalDiscount,
      expression: "formattedTotalDiscount"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "totalDiscount",
      "type": "text",
      "name": "totalDiscount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedTotalDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.formattedTotalDiscount = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedTransportCost,
      expression: "formattedTransportCost"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "transportCost",
      "type": "text",
      "name": "transportCost",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedTransportCost
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.formattedTransportCost = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "purchaseTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedPurchaseTax,
      expression: "formattedPurchaseTax"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "purchaseTax",
      "type": "text",
      "name": "purchaseTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedPurchaseTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.formattedPurchaseTax = $event.target.value;
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _vm.accounts && _vm.form.returnAmount > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    on: {
      "input": _vm.updateBalance
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
        }), _vm._v("\n                    " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 1047457195),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _vm.form.account ? _c('div', {
    staticClass: "account-status mt-2"
  }, [!_vm.form.account.chartOfAccountId ? _c('div', {
    staticClass: "account-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.goToBankAccounts
    }
  }, [_c('i', {
    staticClass: "fas fa-external-link-alt"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Go to Bank Accounts')) + "\n                    ")])]) : _c('div', {
    staticClass: "account-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account Chart of Account ready')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "availableBalance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Available Balance')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedAvailableBalance,
      expression: "formattedAvailableBalance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('availableBalance')
    },
    attrs: {
      "id": "availableBalance",
      "type": "text",
      "name": "availableBalance",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedAvailableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.formattedAvailableBalance = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "availableBalance"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Receipt No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.receiptNo,
      expression: "form.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('receiptNo')
    },
    attrs: {
      "id": "receiptNo",
      "type": "text",
      "name": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.form.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "receiptNo"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "placeholder": _vm.$t('Write your note here!')
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Return Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date,
      expression: "form.date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('date')
    },
    attrs: {
      "id": "date",
      "type": "date",
      "name": "date"
    },
    domProps: {
      "value": _vm.form.date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "date"
    }
  })], 1), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
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
  })], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/ItemsTable.vue + 5 modules
var ItemsTable = __webpack_require__(20899);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  components: {
    ItemsTable: ItemsTable/* default */.A
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Purchase Return')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Purchase Return',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Purchase Returns',
        url: 'purchaseReturns.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      isAutoAssigningProduct: null,
      form: new vform_es/* default */.Ay({
        returnReason: '',
        account: '',
        chequeNo: '',
        receiptNo: '',
        supplier: '',
        purchaseNo: '',
        purchase: '',
        product: '',
        selectedProducts: [],
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        purchaseTotal: '',
        totalReturn: 0,
        newTotal: 0,
        newReturn: 0,
        taxRate: 0,
        newSubTotal: 0,
        purchaseTax: 0,
        purchaseTransport: 100,
        purchaseDiscount: 0,
        purchaseDue: 0,
        newDue: 0,
        newDueText: '',
        returnAmount: 0,
        returnAmountText: 0,
        availableBalance: 0,
        totalDiscount: 0,
        transportCost: 0,
        netTotal: 0,
        taxAmount: 0,
        discountTotal: 0
      }),
      accounts: '',
      prefix: '',
      purchasePrefix: '',
      purchaseReturnPrefix: '',
      taxes: '',
      paymentMethods: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Totals (same as invoice return)
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalBeforeDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalTotal: function totalTotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalBeforeDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalProductDiscount: function totalProductDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.discountAmount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalAfterDiscount: function totalAfterDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalAfterDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalProductTax: function totalProductTax() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.productTax) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    subtotal: function subtotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0;
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalPrice) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    formattedTotalDiscount: function formattedTotalDiscount() {
      return this.formatToTwoDecimals(this.form.totalDiscount || 0);
    },
    formattedTransportCost: function formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.purchaseTransport || 0);
    },
    formattedPurchaseTax: function formattedPurchaseTax() {
      return this.formatToTwoDecimals(this.form.newTax || 0);
    },
    formattedAvailableBalance: function formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance || 0);
    }
  }),
  created: function created() {
    this.prefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix;
    this.getPurchaseReturn();
    this.getAccounts();
    this.getTaxes();
    this.getPaymentMethods();
    // default status by country
    this.form.status = this.isSaudiArabia ? 0 : 1;
  },
  methods: {
    // get accounts
    getAccounts: function getAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.accounts = data.data;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.taxes = data.data;
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              _this2.taxes = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get payment methods
    getPaymentMethods: function getPaymentMethods() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/payment-methods/all');
            case 1:
              response = _context3.v;
              if (response.data && response.data.data) {
                _this3.paymentMethods = response.data.data;
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error loading payment methods:', _t2);
              _this3.paymentMethods = [];
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // get the purchase return
    getPurchaseReturn: function getPurchaseReturn() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/purchase-returns/' + _this4.$route.params.slug);
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this4.form.returnReason = data.data.reason;
              _this4.form.account = data.data.account;
              _this4.form.chequeNo = data.data.accountReceivable ? data.data.accountReceivable.cheque_no : '';
              _this4.form.receiptNo = data.data.accountReceivable ? data.data.accountReceivable.receipt_no : '';
              _this4.form.supplier = data.data.supplier.name;
              _this4.form.purchaseNo = _this4.$options.filters.withPrefix(data.data.purchase.code, _this4.purchasePrefix);
              _this4.form.purchaseReturnNo = _this4.$options.filters.withPrefix(data.data.returnNo, _this4.purchaseReturnPrefix);
              _this4.form.purchase = data.data.purchase;
              _this4.form.date = data.data.returnDate;
              _this4.form.note = data.data.note;
              _this4.form.status = data.data.status;
              _this4.form.newTotal = data.data.purchase.purchaseTotal;
              _this4.form.totalReturn = data.data.totalReturn;
              _this4.form.oldReturn = data.data.totalReturn;
              _this4.form.taxRate = data.data.purchase.taxRate;
              _this4.form.purchaseTax = data.data.purchase.tax;
              _this4.form.newTax = data.data.purchase.tax;
              _this4.form.purchaseTotal = data.data.purchase.purchaseTotal;
              _this4.form.purchaseTransport = data.data.purchase.transport;
              _this4.form.purchaseDiscount = data.data.purchase.totalDiscount;
              _this4.form.purchaseDue = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _this4.form.suppllierAdvance = data.data.creditAmount;
              _this4.form.supplierAdvanceText = data.data.creditAmount;
              _this4.form.newDueText = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _context4.n = 2;
              return _this4.assignProducts(data.data.returnProducts);
            case 2:
              _this4.form.selectedProducts = _context4.v;
            case 3:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get order products
    assignProducts: function assignProducts(products) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var key, _this5$taxes, _productData2, purchaseReturnItem, purchaseReturnProduct, productData, _productData, response, selectedVatRate, totalBeforeDiscount, discountAmount, totalAfterDiscount, productTax, totalTax, totalPrice, finalPurchaseAccountId, _t3, _t4, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this5.form.selectedProducts = [];
              _t3 = _regeneratorKeys(products);
            case 1:
              if ((_t4 = _t3()).done) {
                _context5.n = 6;
                break;
              }
              key = _t4.value;
              purchaseReturnItem = products[key];
              purchaseReturnProduct = products[key].product; // Fetch fresh product data to get purchase_account_id
              productData = null;
              _context5.p = 2;
              _context5.n = 3;
              return axios_default().get("/api/products/".concat(purchaseReturnProduct.slug));
            case 3:
              response = _context5.v;
              productData = response.data.data;
              console.log('Product data for', purchaseReturnProduct.name, ':', (_productData = productData) === null || _productData === void 0 ? void 0 : _productData.purchase_account_id);
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t5 = _context5.v;
              console.warn('Could not fetch product data for:', purchaseReturnProduct.slug);
            case 5:
              selectedVatRate = _this5.findMatchingVatRate(purchaseReturnItem.productTax) || ((_this5$taxes = _this5.taxes) === null || _this5$taxes === void 0 ? void 0 : _this5$taxes[0]);
              totalBeforeDiscount = Number((purchaseReturnItem.returnQty * purchaseReturnItem.purchasePrice).toFixed(2));
              discountAmount = 0;
              if ((purchaseReturnItem.discountType || 'fixed') === 'percentage') {
                discountAmount = Number((totalBeforeDiscount * (purchaseReturnItem.productDiscount || 0) / 100).toFixed(2));
              } else {
                discountAmount = Number((purchaseReturnItem.productDiscount || 0).toFixed ? (purchaseReturnItem.productDiscount || 0).toFixed(2) : Number(purchaseReturnItem.productDiscount || 0));
              }
              totalAfterDiscount = Number((totalBeforeDiscount - discountAmount).toFixed(2));
              productTax = 0;
              totalTax = 0;
              totalPrice = totalAfterDiscount;
              if (selectedVatRate && selectedVatRate.rate) {
                productTax = Number((totalAfterDiscount * (selectedVatRate.rate / 100)).toFixed(2));
                totalTax = productTax;
                totalPrice = Number((totalAfterDiscount + productTax).toFixed(2));
              }
              finalPurchaseAccountId = purchaseReturnItem.purchase_account_id || (purchaseReturnProduct === null || purchaseReturnProduct === void 0 ? void 0 : purchaseReturnProduct.purchase_account_id) || ((_productData2 = productData) === null || _productData2 === void 0 ? void 0 : _productData2.purchase_account_id);
              console.log('Final purchase_account_id for', purchaseReturnProduct.name, ':', finalPurchaseAccountId);
              _this5.form.selectedProducts.unshift({
                id: purchaseReturnProduct.id,
                slug: purchaseReturnProduct.slug,
                name: purchaseReturnProduct.name,
                code: purchaseReturnProduct.code,
                purchasedQty: purchaseReturnItem.purchasedQty,
                qty: purchaseReturnItem.purchasedQty,
                returnQty: purchaseReturnItem.returnQty,
                oldReturnedQty: purchaseReturnItem.returnQty,
                totalReturnedQty: purchaseReturnItem.returnQty,
                maxQty: purchaseReturnItem.purchasedQty - 1,
                price: purchaseReturnItem.purchasePrice,
                unitCost: purchaseReturnItem.purchasePrice,
                returnTotal: totalPrice,
                totalPrice: totalPrice,
                productTax: productTax,
                totalTax: productTax,
                productDiscount: purchaseReturnItem.productDiscount || 0,
                discountType: purchaseReturnItem.discountType || 'fixed',
                discountAmount: discountAmount,
                discount: purchaseReturnItem.productDiscount || 0,
                vatRate: purchaseReturnItem.vatRate,
                selectedVatRate: selectedVatRate,
                totalBeforeDiscount: totalBeforeDiscount,
                totalAfterDiscount: totalAfterDiscount,
                purchase_account_id: finalPurchaseAccountId
              });
              _context5.n = 1;
              break;
            case 6:
              _this5.calculateSum();
              return _context5.a(2, _this5.form.selectedProducts);
          }
        }, _callee5, null, [[2, 4]]);
      }))();
    },
    // Handle item change from ItemsTable component
    handleItemChange: function handleItemChange(_ref) {
      var value = _ref.value,
        type = _ref.type,
        index = _ref.index,
        action = _ref.action;
      if (type === 'qty') {
        if (action === 'increment') {
          this.updateItem(Math.min(this.form.selectedProducts[index].maxQty, Number(value) + 1), index);
        } else if (action === 'decrement') {
          this.updateItem(Math.max(0, Number(value) - 1), index);
        } else {
          // Direct value change
          var item = this.form.selectedProducts[index];
          if (item) {
            item.returnQty = Number(value);
            this.updateItemReactively(item);
          }
        }
      } else if (type === 'price') {
        // Price changes are not allowed in returns (readonly)
        var _item = this.form.selectedProducts[index];
        if (_item) {
          _item.unitCost = Number(value);
          this.calculateSum();
        }
      }
    },
    // updateItems
    updateItem: function updateItem(value, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct && value >= 0 && value <= selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value);
        selectedProduct.totalBeforeDiscount = Number((selectedProduct.returnQty * selectedProduct.unitCost).toFixed(2));
        selectedProduct.totalAfterDiscount = Number((selectedProduct.totalBeforeDiscount - (selectedProduct.discountAmount || 0)).toFixed(2));
        if (selectedProduct.selectedVatRate && selectedProduct.selectedVatRate.rate) {
          var vatAmount = Number((selectedProduct.totalAfterDiscount * (selectedProduct.selectedVatRate.rate / 100)).toFixed(2));
          selectedProduct.productTax = vatAmount;
          selectedProduct.totalTax = vatAmount;
          selectedProduct.totalPrice = Number((selectedProduct.totalAfterDiscount + vatAmount).toFixed(2));
        } else {
          selectedProduct.productTax = 0;
          selectedProduct.totalTax = 0;
          selectedProduct.totalPrice = selectedProduct.totalAfterDiscount;
        }
        this.$set(this.form.selectedProducts, index, selectedProduct);
      }
      this.calculateSum();
    },
    updateItemReactively: function updateItemReactively(item) {
      if (item.returnQty < 0) item.returnQty = 0;else if (item.returnQty > item.maxQty) item.returnQty = item.maxQty;
      item.totalBeforeDiscount = Number((item.returnQty * item.unitCost).toFixed(2));
      item.totalAfterDiscount = Number((item.totalBeforeDiscount - (item.discountAmount || 0)).toFixed(2));
      if (item.selectedVatRate && item.selectedVatRate.rate) {
        var vatAmount = Number((item.totalAfterDiscount * (item.selectedVatRate.rate / 100)).toFixed(2));
        item.productTax = vatAmount;
        item.totalTax = vatAmount;
        item.totalPrice = Number((item.totalAfterDiscount + vatAmount).toFixed(2));
      } else {
        item.productTax = 0;
        item.totalTax = 0;
        item.totalPrice = item.totalAfterDiscount;
      }
      this.calculateSum();
    },
    // discount and vat per product
    calculateProductDiscount: function calculateProductDiscount(index) {
      var product = this.form.selectedProducts[index];
      if (!product) return;
      var discountAmount = 0;
      if (product.discountType === 'percentage') {
        discountAmount = product.returnQty * product.unitCost * (product.discount / 100);
      } else {
        discountAmount = product.discount;
      }
      product.discountAmount = Number(discountAmount.toFixed(2));
      product.totalBeforeDiscount = Number((product.returnQty * product.unitCost).toFixed(2));
      product.totalAfterDiscount = Number((product.totalBeforeDiscount - discountAmount).toFixed(2));
      this.calculateSum();
    },
    calculateProductVat: function calculateProductVat(index) {
      var product = this.form.selectedProducts[index];
      if (!product || !product.selectedVatRate) return;
      var vatAmount = Number((product.totalAfterDiscount * (product.selectedVatRate.rate / 100)).toFixed(2));
      product.productTax = vatAmount;
      product.totalTax = vatAmount;
      product.totalPrice = Number((product.totalAfterDiscount + vatAmount).toFixed(2));
      this.calculateSum();
    },
    // helpers
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.id === productTax.id || tax.rate === productTax.rate;
      });
    },
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      var numValue = Number(value);
      if (isNaN(numValue)) return '0.00';
      return numValue.toFixed(2);
    },
    toWord: function toWord() {
      return this.$t('Total');
    },
    removeItem: function removeItem(item, index) {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return;
      // ItemsTable passes item, but we need index - find it if not provided
      var itemIndex = index !== undefined ? index : this.form.selectedProducts.findIndex(function (p) {
        return p.id === item.id;
      });
      if (itemIndex > -1) {
        this.form.selectedProducts.splice(itemIndex, 1);
        this.calculateSum();
      }
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) this.form.availableBalance = this.form.account.availableBalance;
      if (this.form.account && this.form.returnAmount > 0) this.validateBankAccountChartOfAccount();
    },
    validateBankAccountChartOfAccount: function validateBankAccountChartOfAccount() {
      var _this6 = this;
      if (this.form.account && !this.form.account.chartOfAccountId) {
        toast.fire({
          type: 'warning',
          title: this.$t('Bank Account Chart of Account Required'),
          text: this.$t('The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account.'),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t('Go to Bank Accounts'),
          showCancelButton: true,
          cancelButtonText: this.$t('Close')
        }).then(function (result) {
          if (result.isConfirmed) _this6.goToBankAccounts();
        });
      }
    },
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'accounts.index'
      });
    },
    // Auto-assign Chart of Account for a specific product
    autoAssignProductChartOfAccount: function autoAssignProductChartOfAccount(product) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (!(!product || _this7.isAutoAssigningProduct === product.id)) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _this7.isAutoAssigningProduct = product.id;
              _context6.p = 2;
              _context6.n = 3;
              return _this7.$http.post("/api/products/".concat(product.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context6.v;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.purchase_account_id = response.data.purchase_account_id;

                // Force Vue to re-render the component to update the UI
                _this7.$nextTick(function () {
                  _this7.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this7.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this7.$t("Please try again or assign manually")
                });
              }
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t6 = _context6.v;
              console.error('Error auto-assigning chart of account:', _t6);
              toast.fire({
                type: "error",
                title: _this7.$t("An error occurred while assigning Chart of Account")
              });
            case 5:
              _context6.p = 5;
              _this7.isAutoAssigningProduct = false;
              return _context6.f(5);
            case 6:
              return _context6.a(2);
          }
        }, _callee6, null, [[2, 4, 5, 6]]);
      }))();
    },
    // calculate sum
    calculateSum: function calculateSum() {
      var _this$form$purchase;
      var length = this.form.selectedProducts.length;
      this.form.newSubTotal = this.form.totalReturn = 0;
      var totalProductDiscount = 0;
      var purchaseSubtotal = 0;
      this.form.netTotal = 0;
      this.form.taxAmount = 0;
      this.form.discountTotal = 0;
      for (var i = 0; i < length; i++) {
        var p = this.form.selectedProducts[i];
        var remainingQty = p.qty - p.returnQty;
        var productTotal = remainingQty * p.unitCost;
        purchaseSubtotal += productTotal;
        this.form.newSubTotal += Number(productTotal.toFixed(2));
        if (p.returnQty > 0) {
          var originalLineTotal = parseFloat(p.totalPrice) || 0;
          var totalQty = parseFloat(p.qty) || 1;
          var returnQty = parseFloat(p.returnQty) || 0;
          var unitPrice = originalLineTotal / totalQty;
          var returnTotal = Number((unitPrice * returnQty).toFixed(2));
          p.returnTotal = returnTotal;
          this.form.totalReturn += returnTotal;
          var originalDiscount = parseFloat(p.discountAmount) || 0;
          var originalTax = parseFloat(p.totalTax) || 0;
          var proportionalDiscount = Number((originalDiscount / totalQty * returnQty).toFixed(2));
          var proportionalTax = Number((originalTax / totalQty * returnQty).toFixed(2));
          var proportionalNet = Number((returnTotal - proportionalDiscount).toFixed(2));
          this.form.netTotal += proportionalNet;
          this.form.taxAmount += proportionalTax;
          this.form.discountTotal += proportionalDiscount;
        }
        if (p.productDiscount && p.productDiscount > 0) {
          if (p.discountType === 'percentage') {
            var discountAmount = productTotal * p.productDiscount / 100;
            totalProductDiscount += Number(discountAmount.toFixed(2));
          } else {
            var discountPerUnit = p.productDiscount / p.qty;
            var _discountAmount = discountPerUnit * remainingQty;
            totalProductDiscount += Number(_discountAmount.toFixed(2));
          }
        }
      }

      // purchase-level discount
      var purchaseDiscountAmount = Number(this.form.purchaseDiscount || 0);
      this.form.newSubTotal = Number((purchaseSubtotal - totalProductDiscount - purchaseDiscountAmount).toFixed(2));
      this.form.purchaseDiscount = purchaseDiscountAmount;
      var taxableAmount = this.form.newSubTotal;
      if (this.form.taxRate && this.form.taxRate.rate) {
        this.form.newTax = Number((this.form.taxRate.rate / 100 * taxableAmount).toFixed(2));
      } else {
        this.form.newTax = 0;
      }
      this.form.purchaseTotal = Number((this.form.newSubTotal + this.form.newTax + this.form.purchaseTransport - this.form.purchaseDiscount).toFixed(2));
      this.form.purchaseDue = Number((this.form.purchaseTotal - (((_this$form$purchase = this.form.purchase) === null || _this$form$purchase === void 0 ? void 0 : _this$form$purchase.totalPaid) || 0)).toFixed(2));
      if (this.form.purchaseDue >= 0) {
        var _this$form$purchase2, _this$form$purchase3;
        this.form.newDue = this.form.purchaseTotal - (((_this$form$purchase2 = this.form.purchase) === null || _this$form$purchase2 === void 0 ? void 0 : _this$form$purchase2.totalPaid) || 0);
        this.form.newDueText = "".concat(this.form.purchaseTotal, " - ").concat(((_this$form$purchase3 = this.form.purchase) === null || _this$form$purchase3 === void 0 ? void 0 : _this$form$purchase3.totalPaid) || 0, " = ").concat(Number(this.form.newDue).toFixed(2));
        this.form.returnAmount = 0;
      } else {
        var _this$form$purchase4, _this$form$purchase5;
        this.form.returnAmount = Number(((((_this$form$purchase4 = this.form.purchase) === null || _this$form$purchase4 === void 0 ? void 0 : _this$form$purchase4.totalPaid) || 0) - this.form.purchaseTotal).toFixed(2));
        this.form.returnAmountText = "".concat(((_this$form$purchase5 = this.form.purchase) === null || _this$form$purchase5 === void 0 ? void 0 : _this$form$purchase5.totalPaid) || 0, " - ").concat(this.form.purchaseTotal, " = ").concat(this.form.returnAmount);
        this.form.purchaseDue = 0;
        this.form.newDue = 0;
      }
    },
    // update purchase return
    updatePurchaseReturn: function updatePurchaseReturn() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return _this8.form.patch(window.location.origin + '/api/purchase-returns/' + _this8.$route.params.slug).then(function (_ref2) {
                var data = _ref2.data;
                toast.fire({
                  type: 'success',
                  title: _this8.$t('Purchase return updated successfully')
                });
                _this8.clearTemporaryData();
                _this8.$router.push({
                  name: 'purchaseReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        returnReason: this.form.returnReason,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('purchaseReturnEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('purchaseReturnEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.returnReason = data.returnReason || this.form.returnReason;
          this.form.returnAmount = data.returnAmount || this.form.returnAmount;
          this.form.returnDate = data.returnDate || this.form.returnDate;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
        } catch (e) {
          console.error('Error loading temporary data:', e);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('purchaseReturnEditTempData');
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  }
});
;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=2e1c1d02&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_2e1c1d02_prod_scoped_true_lang_css = __webpack_require__(20587);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=2e1c1d02&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_2e1c1d02_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_editvue_type_style_index_0_id_2e1c1d02_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_2e1c1d02_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=2e1c1d02&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/returns/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2e1c1d02",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 48128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".items-table-wrapper[data-v-1cdc941e]{display:block;margin-left:0;margin-right:0;width:100%}.table-custom[data-v-1cdc941e]{-webkit-overflow-scrolling:touch;border:none!important;overflow-x:auto;overflow-y:visible;width:100%}.table-custom table[data-v-1cdc941e]{border-collapse:separate;border-spacing:0;height:100%;min-width:100%;table-layout:auto;width:100%}.table-custom table thead th[data-v-1cdc941e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.table-custom table thead tr[data-v-1cdc941e]{border:none!important}.table-custom table thead th[data-v-1cdc941e]:first-child{border-top-left-radius:10px}.table-custom table thead th[data-v-1cdc941e]:last-child{border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-1cdc941e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-1cdc941e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.custom-qty-input[data-v-1cdc941e]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-1cdc941e],.button-plus[data-v-1cdc941e]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-1cdc941e]{background-color:#dc3545;color:#fff}.button-plus[data-v-1cdc941e]{background-color:#007bff;color:#fff}.button-minus[data-v-1cdc941e]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-1cdc941e]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-1cdc941e]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-1cdc941e]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}.clickable-badge[data-v-1cdc941e]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-1cdc941e]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-1cdc941e]:active{transform:scale(.95)}.insufficient-stock-input[data-v-1cdc941e]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-1cdc941e]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.table-custom table .badge.badge-danger[data-v-1cdc941e]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.table-custom table td.auto-width[data-v-1cdc941e]{min-width:0;white-space:nowrap;width:auto}.table-custom table td.fixed-qty-column[data-v-1cdc941e]{min-width:200px;width:auto}.table-custom table td.fixed-discount-column[data-v-1cdc941e]{min-width:180px;width:auto}.table-custom table td.fixed-vat-column[data-v-1cdc941e]{min-width:150px;width:auto}@media (max-width:768px){.table-custom[data-v-1cdc941e]{-webkit-overflow-scrolling:touch;display:block;overflow-x:auto;width:100%}.table-custom table[data-v-1cdc941e]{display:block;min-width:-moz-fit-content;min-width:fit-content;width:100%}.table-custom table thead[data-v-1cdc941e]{display:table-header-group}.table-custom table tbody[data-v-1cdc941e]{display:table-row-group}.table-custom table tr[data-v-1cdc941e]{display:table-row}.table-custom table td[data-v-1cdc941e],.table-custom table th[data-v-1cdc941e]{display:table-cell;white-space:nowrap}.table-custom table td.fixed-qty-column[data-v-1cdc941e]{min-width:200px}.table-custom table td.fixed-discount-column[data-v-1cdc941e]{min-width:180px}.table-custom table td.fixed-vat-column[data-v-1cdc941e]{min-width:150px}}@media (max-width:576px){.table-custom table[data-v-1cdc941e]{min-width:-moz-fit-content;min-width:fit-content}.table-custom table tbody td[data-v-1cdc941e],.table-custom table thead th[data-v-1cdc941e]{font-size:12px;padding:6px 4px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);