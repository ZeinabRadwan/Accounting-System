"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6802],{

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


/***/ }),

/***/ 76275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-5dbd9075]{margin-bottom:15px}.footer-buttons[data-v-5dbd9075]{display:flex;gap:10px}.footer-buttons .btn[data-v-5dbd9075]{margin-right:10px}.footer-buttons .btn[data-v-5dbd9075]:last-child{margin-right:0}.btn-group.c-w-100[data-v-5dbd9075]{gap:10px}.card[data-v-5dbd9075]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-5dbd9075]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-5dbd9075]{padding:1.25rem}.card-footer[data-v-5dbd9075]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-5dbd9075]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-5dbd9075]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-5dbd9075]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.required[data-v-5dbd9075]{color:#dc3545;font-weight:700}.btn-primary[data-v-5dbd9075]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-5dbd9075]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-5dbd9075]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-5dbd9075]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.is-invalid[data-v-5dbd9075]{border-color:#dc3545!important}textarea.form-control[data-v-5dbd9075]{min-height:100px;resize:vertical}.v-select[data-v-5dbd9075]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-5dbd9075]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.v-select .vs__search[data-v-5dbd9075]::-moz-placeholder{color:#6c757d}.v-select .vs__search[data-v-5dbd9075]::placeholder{color:#6c757d}.v-select .vs__selected[data-v-5dbd9075]{color:#374151}.v-select .vs__dropdown-menu[data-v-5dbd9075]{border-radius:10px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}.table-custom[data-v-5dbd9075]{border:none!important}.purchases-create-table[data-v-5dbd9075]{border-collapse:separate;border-spacing:0}.purchases-create-table thead th[data-v-5dbd9075]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.purchases-create-table thead tr[data-v-5dbd9075]{border:none!important}.purchases-create-table thead th[data-v-5dbd9075]:first-child{border-top-left-radius:10px}.purchases-create-table thead th[data-v-5dbd9075]:last-child{border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-5dbd9075]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-5dbd9075]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.purchases-create-table .badge.badge-info[data-v-5dbd9075]{background:#e3f2fd!important;color:#1976d2!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.custom-qty-input[data-v-5dbd9075]{align-items:center;background:#fff;border:1px solid #e5e7eb;border-radius:10px;display:flex;overflow:hidden}.custom-qty-input .button-minus[data-v-5dbd9075],.custom-qty-input .button-plus[data-v-5dbd9075]{background:#6c757d;border:none;color:#fff;cursor:pointer;font-weight:700;padding:8px 12px;transition:background-color .3s}.custom-qty-input .button-minus[data-v-5dbd9075]:hover{background:#dc3545}.custom-qty-input .button-plus[data-v-5dbd9075]:hover{background:#2ab930}.custom-qty-input .quantity-field[data-v-5dbd9075]{background:transparent;border:none;font-weight:500;padding:8px 4px;text-align:center;width:60px}.custom-qty-input .quantity-field[data-v-5dbd9075]:focus{box-shadow:none;outline:none}.quantity-field[data-v-5dbd9075]{border-radius:0!important;margin:0!important;min-height:50px!important}.account-status[data-v-5dbd9075]{font-size:.875rem}.account-status .account-warning[data-v-5dbd9075]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-5dbd9075]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}.product-status[data-v-5dbd9075]{font-size:13px}.product-warning[data-v-5dbd9075]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;color:#856404;display:flex;font-weight:500;padding:8px 12px}.btn-outline-warning[data-v-5dbd9075]{border-color:#ffc107;border-radius:6px;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-5dbd9075]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-5dbd9075]:disabled{cursor:not-allowed;opacity:.6}.callout[data-v-5dbd9075]{border-left:4px solid;border-radius:8px;margin-bottom:16px;padding:12px 16px}.callout-danger[data-v-5dbd9075]{background-color:#f8d7da;border-left-color:#dc3545;color:#721c24}.callout i[data-v-5dbd9075]{margin-right:8px}.row[data-v-5dbd9075]{margin-bottom:1rem}.form-text[data-v-5dbd9075]{color:#6b7280;font-size:.875rem}.text-muted[data-v-5dbd9075]{color:#6b7280!important}@media (max-width:768px){.card-footer[data-v-5dbd9075]{flex-direction:column;gap:10px}.card-footer .btn[data-v-5dbd9075]{margin-right:0!important;width:100%}.card-footer div[data-v-5dbd9075]{display:flex;flex-direction:column;gap:10px;width:100%}.table-custom[data-v-5dbd9075]{font-size:12px}.table-custom tbody td[data-v-5dbd9075],.table-custom thead th[data-v-5dbd9075]{padding:8px 4px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/create.vue?vue&type=template&id=5dbd9075&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.dynamicBreadcrumbs,
      "current": _vm.dynamicBreadcrumbsCurrent
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
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save')
    },
    on: {
      "click": _vm.savePurchaseReturn
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePurchaseReturn.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "returnReason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Return Reason')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter a reason')
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t('Supplier')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('supplier')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "supplier",
      "placeholder": _vm.$t('Select a supplier')
    },
    on: {
      "input": _vm.assignPurchases
    },
    model: {
      value: _vm.form.supplier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "supplier", $$v);
      },
      expression: "form.supplier"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplier"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.products && !_vm.form.purchase ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Products')))]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('product')
    },
    attrs: {
      "disabled": _vm.form.client == '',
      "multiple": "",
      "options": _vm.products,
      "label": "label",
      "name": "product",
      "placeholder": _vm.$t('Search products')
    },
    on: {
      "input": _vm.assignPurchases
    },
    model: {
      value: _vm.form.product,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "product", $$v);
      },
      expression: "form.product"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "product"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.supplier && _vm.supplierPurchases ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchases')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('purchase')
    },
    attrs: {
      "options": _vm.supplierPurchases,
      "label": "purchaseNo",
      "name": "purchase",
      "placeholder": _vm.$t('Select a purchase')
    },
    on: {
      "input": _vm.storeProducts
    },
    model: {
      value: _vm.form.purchase,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchase", $$v);
      },
      expression: "form.purchase"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchase"
    }
  }), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
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
    }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningProduct === product.id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _vm._e();
  }), 0) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
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
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n                ")]), _vm._v(" "), _c('button', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  components: {
    ItemsTable: ItemsTable/* default */.A
  },
  metaInfo: function metaInfo() {
    return {
      title: this.isSaudiArabia ? this.$t('Create Debit Note') : this.$t('Create Purchase Return')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: '',
        url: 'purchaseReturns.index'
      }, {
        name: 'Create',
        url: ''
      }],
      isAutoAssigningProduct: null,
      form: new vform_es/* default */.Ay({
        returnReason: '',
        account: '',
        chequeNo: '',
        receiptNo: '',
        supplier: '',
        purchase: '',
        product: '',
        selectedProducts: [],
        totalReturn: 0,
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        purchaseTotal: 0,
        newSubTotal: 0,
        purchaseTax: 0,
        purchaseTransport: 0,
        purchaseDiscount: 0,
        newTax: 0,
        taxRate: 0,
        purchaseDue: 0,
        newDue: 0,
        newDueText: '',
        returnAmount: 0,
        returnAmountText: 0,
        availableBalance: 0,
        // Match purchase create structure
        subTotal: 0,
        netTotal: 0,
        discount: '',
        discount_type: 'percentage',
        // "percentage" or "fixed"
        discount_value: 0,
        transportCost: '',
        transportTaxableCost: '',
        transportVatAmount: 0,
        transportIsTaxable: true,
        // Default to true to maintain existing behavior (transport is taxable)
        totalProductTax: 0,
        orderTax: '',
        totalTax: 0,
        totalDiscount: 0,
        taxAmount: 0,
        discountTotal: 0
      }),
      products: '',
      accounts: '',
      supplierPurchases: '',
      taxes: '',
      paymentMethods: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Dynamic breadcrumbs current based on country
    dynamicBreadcrumbsCurrent: function dynamicBreadcrumbsCurrent() {
      return this.isSaudiArabia ? this.$t('Create Debit Note') : this.$t('Create Purchase Return');
    },
    // Dynamic breadcrumbs based on country
    dynamicBreadcrumbs: function dynamicBreadcrumbs() {
      return [{
        name: this.$t('Dashboard'),
        url: 'home'
      }, {
        name: this.isSaudiArabia ? this.$t('Debit notes') : this.$t('Purchase Returns'),
        url: 'purchaseReturns.index'
      }, {
        name: this.$t('Create'),
        url: ''
      }];
    },
    // Calculate total unit price (sum of all unit prices) - using returnQty for purchase returns
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        var qty = Number(item.returnQty || item.qty) || 0;
        return total + (item.originalPrice || item.unitPrice || item.purchasePrice) * qty;
      }, 0);
    },
    totalProductDiscount: function totalProductDiscount() {
      return this.getTotalDiscountSum();
    },
    totalAfterDiscount: function totalAfterDiscount() {
      return this.getSubTotalAfterDiscount();
    },
    totalProductTax: function totalProductTax() {
      return this.getTotalVATSum();
    },
    subtotal: function subtotal() {
      return this.getTotalWithVATSum();
    },
    // Calculate number of items
    numberOfItems: function numberOfItems() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.length;
    },
    // Check if supplier is taxable (has tax_status === 'taxable' and tax_registration_number)
    isSupplierTaxable: function isSupplierTaxable() {
      if (!this.form.supplier) {
        return false;
      }

      // Support both camelCase and snake_case
      var taxStatus = this.form.supplier.tax_status || this.form.supplier.taxStatus;
      var taxRegNumber = this.form.supplier.tax_registration_number || this.form.supplier.taxRegistrationNumber || this.form.supplier.tax_registrationNumber;
      var isTaxable = taxStatus === 'taxable' && taxRegNumber && taxRegNumber.length > 0;
      return isTaxable;
    },
    // Invoice Subtotal: Sum of all item subtotals before discount (qty × unit_price) - using returnQty
    invoiceSubtotal: function invoiceSubtotal() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        var unitPriceNumber = Number(item.originalPrice || item.unitPrice || item.purchasePrice) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        return total + unitPriceNumber * qtyNumber;
      }, 0));
    },
    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    invoiceLevelDiscountTotal: function invoiceLevelDiscountTotal() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var subtotal = this.invoiceSubtotal;
      if (subtotal <= 0 || !this.form.discount_value || this.form.discount_value <= 0) {
        return 0;
      }
      var discountAmount = 0;
      if (this.form.discount_type === 'percentage') {
        discountAmount = this.roundToTwoDecimals(subtotal * this.form.discount_value / 100);
      } else {
        discountAmount = this.roundToTwoDecimals(Number(this.form.discount_value));
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal ? this.roundToTwoDecimals(subtotal) : discountAmount;
    },
    // Shipping Cost Total: Total shipping cost (regardless of taxability)
    shippingCostTotal: function shippingCostTotal() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      // Get transport cost from the appropriate field based on supplier tax status
      var transportCost = this.isSupplierTaxable ? Number(this.form.transportTaxableCost || 0) : Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },
    // Net Amount Before VAT: Calculated based on transport taxability
    netAmountBeforeVAT: function netAmountBeforeVAT() {
      var subtotal = this.invoiceSubtotal;
      var invoiceDiscount = this.invoiceLevelDiscountTotal;
      var shipping = this.shippingCostTotal;
      if (this.form.transportIsTaxable) {
        // Transport is taxable: include it in Net Amount (part of VAT base)
        return this.roundToTwoDecimals(subtotal - invoiceDiscount + shipping);
      } else {
        // Transport is non-taxable: use sum of item net totals (after item-level discounts)
        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          return 0;
        }
        var sumOfItemNetTotals = this.form.selectedProducts.reduce(function (total, item) {
          var itemNetTotal = item.netTotal || item.totalAfterDiscount || 0;
          return total + itemNetTotal;
        }, 0);
        return this.roundToTwoDecimals(sumOfItemNetTotals);
      }
    },
    // VAT Amount: Calculated based on transport taxability
    vatAmount: function vatAmount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }

      // When transport is non-taxable, use sum of item VATs directly
      if (!this.form.transportIsTaxable) {
        var itemVatSum = this.form.selectedProducts.reduce(function (total, item) {
          return total + (item.totalTax || 0);
        }, 0);
        return this.roundToTwoDecimals(itemVatSum);
      }

      // When transport is taxable, calculate VAT on Net Amount (includes transport)
      var netAmount = this.netAmountBeforeVAT;
      if (netAmount <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate from all items
      var totalNetAmountForWeighting = 0;
      var weightedVatRateSum = 0;
      this.form.selectedProducts.forEach(function (item) {
        var itemNetAmount = item.netTotal || 0;
        if (itemNetAmount > 0) {
          var vatRate = 0;
          if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
            vatRate = Number(item.selectedVatRate.rate);
          } else if (item.taxRate !== undefined && item.taxRate !== null) {
            vatRate = Number(item.taxRate);
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
    // Grand Total: Calculated based on transport taxability
    grandTotal: function grandTotal() {
      var shipping = this.shippingCostTotal;
      if (this.form.transportIsTaxable) {
        var netAmount = this.netAmountBeforeVAT;
        var vat = this.vatAmount;
        return this.roundToTwoDecimals(netAmount + vat);
      } else {
        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          return this.roundToTwoDecimals(shipping);
        }
        var sumOfItemTotals = this.form.selectedProducts.reduce(function (total, item) {
          var itemTotal = item.totalPrice || 0;
          return total + itemTotal;
        }, 0);
        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }
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
  watch: {
    appInfo: {
      handler: function handler() {
        // Watcher for appInfo changes
      },
      immediate: true,
      deep: true
    },
    // Watch for changes in selectedProducts to update Net Total
    'form.selectedProducts': {
      handler: function handler() {
        this.updateNetTotal();
      },
      deep: true
    },
    // Watch for changes in transport cost to update Net Total
    'form.transportCost': {
      handler: function handler() {
        this.updateNetTotal();
      }
    },
    'form.transportTaxableCost': {
      handler: function handler() {
        this.updateNetTotal();
      }
    },
    // Watch for changes in transport taxability to recalculate totals
    'form.transportIsTaxable': {
      handler: function handler() {
        this.calculateSum();
      }
    }
  },
  created: function created() {
    this.getSuppliers();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getPaymentMethods();
    this.prefix = this.appInfo.productPrefix;
    // default status by country
    this.form.status = this.isSaudiArabia ? 0 : 1;
  },
  methods: {
    formatAmount: function formatAmount(value) {
      var num = Number(value) || 0;
      var locale = this.$i18n && this.$i18n.locale ? this.$i18n.locale : 'en';
      return num.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    // get all suppliers
    getSuppliers: function getSuppliers() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-suppliers'
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 2:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this2.products = data.data;
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 2:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              _this3.accounts = data.data;
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 3:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              _this4.taxes = data.data;
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              _this4.taxes = [];
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    // get payment methods
    getPaymentMethods: function getPaymentMethods() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default().get(window.location.origin + '/api/payment-methods/all');
            case 3:
              response = _context5.sent;
              if (response.data && response.data.data) {
                _this5.paymentMethods = response.data.data;
              }
              _context5.next = 11;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.error('Error loading payment methods:', _context5.t0);
              _this5.paymentMethods = [];
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    },
    // assign purchases
    assignPurchases: function assignPurchases() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this6.form.selectedProducts = [];
              _this6.form.purchase = '';
              if (_this6.form.supplier) {
                axios_default().post(window.location.origin + '/api/supplier/filter-purchases', {
                  products: _this6.form.product,
                  supplierSlug: _this6.form.supplier.slug
                }).then(function (response) {
                  _this6.supplierPurchases = response.data.data;
                });
              } else {
                _this6.form.product = '';
                _this6.form.supplier = '';
              }
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // store item in array
    storeProducts: function storeProducts() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var totalDiscount, isPreSelected, key, _purchaseItem$product, _productData2, purchaseItem, productData, _productData, response, presetReturnQty, selectedVatRate, _this7$taxes, _this7$taxes2, totalBeforeDiscount, discountAmount, totalAfterDiscount, productTax, totalTax, totalPrice, finalPurchaseAccountId;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this7.form.selectedProducts = [];
              _this7.form.purchaseTotal = _this7.form.purchase.purchaseTotal;
              _this7.form.purchaseDue = _this7.form.purchase.due;
              _this7.form.purchaseTax = _this7.form.purchase.tax;
              _this7.form.newTax = _this7.form.purchase.tax;
              _this7.form.taxRate = _this7.form.purchase.taxRate;
              _this7.form.purchaseTransport = _this7.form.purchase.transport;
              _this7.form.purchaseDiscount = _this7.form.purchase.totalDiscount;
              _this7.form.newDue = _this7.form.purchase.due;
              _this7.form.newDueText = _this7.form.purchase.due;

              // Initialize discount fields from purchase data
              if (_this7.form.purchase.discount_type && _this7.form.purchase.discount_value !== undefined) {
                _this7.form.discount_type = _this7.form.purchase.discount_type || 'percentage';
                _this7.form.discount_value = Number(_this7.form.purchase.discount_value) || 0;
                _this7.form.discount = _this7.form.purchase.totalDiscount || '';
              } else {
                // Backward compatibility: if only totalDiscount is provided
                totalDiscount = Number(_this7.form.purchase.totalDiscount) || 0;
                _this7.form.discount = totalDiscount;
                if (totalDiscount > 0) {
                  _this7.form.discount_type = 'fixed';
                  _this7.form.discount_value = totalDiscount;
                } else {
                  _this7.form.discount_type = 'percentage';
                  _this7.form.discount_value = 0;
                }
              }

              // Initialize transport fields from purchase data
              _this7.form.transportCost = _this7.form.purchase.transport || '';
              _this7.form.transportTaxableCost = _this7.form.purchase.transport_taxable || '';
              _this7.form.transportIsTaxable = _this7.form.purchase.transportIsTaxable !== undefined ? Boolean(_this7.form.purchase.transportIsTaxable) : _this7.form.purchase.transport_taxable !== undefined ? Boolean(_this7.form.purchase.transport_taxable) : true; // Default to true for backward compatibility

              // Check if we're coming from purchase actions (pre-selected purchase)
              isPreSelected = _this7.$route.query.purchase;
              _context7.t0 = _regeneratorRuntime().keys(_this7.form.purchase.purchaseProducts);
            case 16:
              if ((_context7.t1 = _context7.t0()).done) {
                _context7.next = 47;
                break;
              }
              key = _context7.t1.value;
              purchaseItem = _this7.form.purchase.purchaseProducts[key]; // Fetch fresh product data to get purchase_account_id
              productData = null;
              _context7.prev = 20;
              _context7.next = 23;
              return axios_default().get("/api/products/".concat(purchaseItem.productSlug));
            case 23:
              response = _context7.sent;
              productData = response.data.data;
              console.log('Product data for', purchaseItem.productName, ':', (_productData = productData) === null || _productData === void 0 ? void 0 : _productData.purchase_account_id);
              _context7.next = 31;
              break;
            case 28:
              _context7.prev = 28;
              _context7.t2 = _context7["catch"](20);
              console.warn('Could not fetch product data for:', purchaseItem.productSlug);
            case 31:
              // No quantity check needed - purchases increase quantity, not decrease it
              presetReturnQty = Number(purchaseItem.quantity); // Default to full quantity
              // Try to find matching VAT rate, fallback to 15% VAT rate, then first available
              selectedVatRate = _this7.findMatchingVatRate(purchaseItem.productTax);
              if (!selectedVatRate) {
                // Try to find 15% VAT rate as default
                selectedVatRate = (_this7$taxes = _this7.taxes) === null || _this7$taxes === void 0 ? void 0 : _this7$taxes.find(function (tax) {
                  return Math.abs(tax.rate - 15) < 0.01;
                });
                // If 15% not found, use first available
                if (!selectedVatRate) {
                  selectedVatRate = (_this7$taxes2 = _this7.taxes) === null || _this7$taxes2 === void 0 ? void 0 : _this7$taxes2[0];
                }
              }
              // Use purchasePrice (base price without VAT) instead of unitCost (which includes VAT)
              totalBeforeDiscount = Number((presetReturnQty * purchaseItem.purchasePrice).toFixed(2));
              discountAmount = 0;
              if ((purchaseItem.discountType || 'fixed') === 'percentage') {
                discountAmount = Number((totalBeforeDiscount * (purchaseItem.productDiscount || 0) / 100).toFixed(2));
              } else {
                discountAmount = Number((purchaseItem.productDiscount || 0).toFixed ? (purchaseItem.productDiscount || 0).toFixed(2) : Number(purchaseItem.productDiscount || 0));
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
              finalPurchaseAccountId = purchaseItem.purchase_account_id || ((_purchaseItem$product = purchaseItem.product) === null || _purchaseItem$product === void 0 ? void 0 : _purchaseItem$product.purchase_account_id) || ((_productData2 = productData) === null || _productData2 === void 0 ? void 0 : _productData2.purchase_account_id);
              console.log('Final purchase_account_id for', purchaseItem.productName, ':', finalPurchaseAccountId);
              _this7.form.selectedProducts.unshift({
                id: purchaseItem.productID,
                slug: purchaseItem.productSlug,
                name: purchaseItem.productName,
                code: purchaseItem.productCode,
                unit: purchaseItem.productUnit,
                oldQty: purchaseItem.quantity,
                // Original quantity from purchase
                qty: purchaseItem.quantity,
                // Original quantity from purchase
                returnQty: presetReturnQty,
                // Default to full quantity (no limit check needed)
                purchasePrice: purchaseItem.purchasePrice,
                unitPrice: purchaseItem.purchasePrice,
                originalPrice: purchaseItem.purchasePrice,
                // Set originalPrice to match unitPrice
                unitCost: purchaseItem.purchasePrice,
                totalPrice: totalPrice,
                returnTotal: totalPrice,
                productTax: productTax,
                totalTax: totalTax,
                productDiscount: purchaseItem.productDiscount || 0,
                discountType: purchaseItem.discountType || 'fixed',
                discountAmount: discountAmount,
                discount: purchaseItem.productDiscount || 0,
                vatRate: purchaseItem.vatRate,
                selectedVatRate: selectedVatRate,
                totalBeforeDiscount: totalBeforeDiscount,
                totalAfterDiscount: totalAfterDiscount,
                // Initialize proportional amounts (will be recalculated)
                proportionalDiscountAmount: 0,
                proportionalTransportAmount: 0,
                netTotal: totalAfterDiscount,
                purchase_account_id: finalPurchaseAccountId
              });
              _context7.next = 16;
              break;
            case 47:
              // After loading products, recalculate all totals
              _this7.$nextTick(function () {
                // Recalculate all items to ensure proper initialization
                _this7.form.selectedProducts.forEach(function (item, index) {
                  _this7.generateItemTotalPrice(index, true);
                });
                _this7.calculateSum();
              });
              return _context7.abrupt("return");
            case 49:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[20, 28]]);
      }))();
    },
    // Handle item change from ItemsTable component (clone of purchase create logic, adapted for returnQty)
    handleItemChange: function handleItemChange(_ref) {
      var value = _ref.value,
        type = _ref.type,
        index = _ref.index,
        action = _ref.action;
      var item = this.form.selectedProducts[index];
      if (!item) return;
      if (type === 'qty') {
        var qty = Number(item.returnQty || 0);
        if (action === 'increment') {
          qty = qty + 1;
        } else if (action === 'decrement') {
          qty = qty - 1;
        } else {
          qty = Number(value);
        }

        // Only ensure qty is not negative (no max limit check - purchases increase quantity)
        if (qty < 0) qty = 0;
        item.returnQty = qty;
        this.$set(this.form.selectedProducts, index, item);

        // Use the new method to calculate totals (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      } else if (type === 'price') {
        // Price is readonly for returns, but keep it in sync if needed
        item.unitPrice = Number(value);
        item.originalPrice = item.unitPrice;
        this.$set(this.form.selectedProducts, index, item);

        // Use the new method to calculate totals (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      }
    },
    // generate item total price (following purchase create logic with proportional discount and transport)
    // Adapted for purchase returns: uses returnQty instead of qty
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var skipRecalculate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Normalize numeric inputs - use returnQty for purchase returns
      var unitPriceNumber = Number(item.originalPrice || item.unitPrice || item.purchasePrice) || 0;
      var qtyNumber = Number(item.returnQty || item.qty) || 0;

      // 1. Line Item: Total (Before Discount) = returnQty × unit_price
      var totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);
      this.$set(item, 'totalBeforeDiscount', totalBeforeDiscount);

      // 2. Calculate product-level discount amount
      var productDiscountAmount = 0;
      if (item.discountType === 'percentage') {
        productDiscountAmount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber * (item.discount || 0) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Store product-level discount
      item.discountAmount = productDiscountAmount;

      // 3. Get proportional invoice-level discount allocation (if any)
      var proportionalDiscount = item.proportionalDiscountAmount || 0;

      // 4. Total discount = product discount + proportional invoice-level discount
      var discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      var finalDiscountAmount = discountAmount > totalBeforeDiscount ? this.roundToTwoDecimals(totalBeforeDiscount) : discountAmount;

      // 5. Calculate net total after discount
      var netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);
      this.$set(item, 'totalAfterDiscount', netTotal);

      // 6. Get proportional transport cost allocation (if any)
      var proportionalTransport = item.proportionalTransportAmount || 0;

      // 7. Get VAT rate
      var vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
        vatRate = Number(item.selectedVatRate.rate);
      } else if (item.taxRate !== undefined && item.taxRate !== null) {
        vatRate = Number(item.taxRate);
      }

      // Ensure vatRate is a valid number
      if (isNaN(vatRate) || vatRate < 0) {
        vatRate = 0;
      }

      // 8. Calculate VAT base depending on transport taxability
      var isTransportTaxable = this.form.transportIsTaxable !== false;
      var transportForVatBase = isTransportTaxable ? proportionalTransport : 0;
      var vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);
      item.totalTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
      // productTax is VAT per unit (for display purposes)
      item.productTax = qtyNumber > 0 ? this.roundToTwoDecimals(item.totalTax / qtyNumber) : 0;

      // 9. Line Item: Total With VAT
      if (isTransportTaxable) {
        item.totalPrice = this.roundToTwoDecimals(vatBase + item.totalTax);
      } else {
        item.totalPrice = this.roundToTwoDecimals(vatBase + item.totalTax);
      }

      // 10. Calculate unit cost for inventory valuation
      var costBase = this.roundToTwoDecimals(netTotal + proportionalTransport);
      item.unitCost = qtyNumber > 0 ? this.roundToTwoDecimals(costBase / qtyNumber) : 0;

      // Store all calculated values
      this.$set(item, 'proportionalDiscountAmount', proportionalDiscount);
      this.$set(item, 'proportionalTransportAmount', proportionalTransport);
      this.$set(item, 'netTotal', netTotal);

      // Update the item in the array
      this.$set(this.form.selectedProducts, index, item);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
      }
    },
    // Discount and VAT per product (delegating to generateItemTotalPrice, same as purchase create)
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Recalculate totals using the new method (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      }
    },
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Recalculate totals using the new method (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      }
    },
    // helpers
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;

      // If productTax is an object with id and rate properties
      if (_typeof(productTax) === 'object' && productTax !== null) {
        // Try to find by ID first (most reliable)
        if (productTax.id) {
          var matchById = this.taxes.find(function (tax) {
            return tax.id === productTax.id;
          });
          if (matchById) return matchById;
        }

        // Try to find by rate
        if (productTax.rate !== undefined) {
          var matchByRate = this.taxes.find(function (tax) {
            return Math.abs(tax.rate - productTax.rate) < 0.01;
          });
          if (matchByRate) return matchByRate;
        }
      }

      // If productTax is a number (rate value)
      if (typeof productTax === 'number') {
        return this.taxes.find(function (tax) {
          return Math.abs(tax.rate - productTax) < 0.01;
        });
      }
      return null;
    },
    // Helper method to round to 2 decimal places (for calculations)
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
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
    // Helper method to get total after discount for display
    getTotalAfterDiscount: function getTotalAfterDiscount(item) {
      var qty = Number(item.returnQty || item.qty) || 0;
      var total = (item.originalPrice || item.unitPrice || item.purchasePrice) * qty;
      if (item.discountType === 'percentage') {
        return total - total * (item.discount || 0) / 100;
      } else {
        return total - (item.discountAmount || 0);
      }
    },
    // Helper method to get subtotal after discount for display
    getSubTotalAfterDiscount: function getSubTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (prev, cur) {
        var qty = Number(cur.returnQty || cur.qty) || 0;
        var lineTotal = (cur.originalPrice || cur.unitPrice || cur.purchasePrice) * qty;
        var lineTotalAfterDiscount;
        if (cur.discountType === 'percentage') {
          lineTotalAfterDiscount = lineTotal - lineTotal * (cur.discount || 0) / 100;
        } else {
          lineTotalAfterDiscount = lineTotal - (cur.discountAmount || 0);
        }
        return Number((prev + lineTotalAfterDiscount).toFixed(2));
      }, 0);
    },
    // Helper method to get sum of all individual "Total with VAT" values
    getTotalWithVATSum: function getTotalWithVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + (item.totalPrice || 0)).toFixed(2));
      }, 0);
    },
    // Helper method to get sum of all individual VAT amounts
    getTotalVATSum: function getTotalVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + (item.totalTax || 0)).toFixed(2));
      }, 0);
    },
    // Helper method to get sum of all individual discount amounts
    getTotalDiscountSum: function getTotalDiscountSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + (item.discountAmount || 0)).toFixed(2));
      }, 0);
    },
    // Update Net Total when Total with VAT or Transport Cost changes
    updateNetTotal: function updateNetTotal() {
      this.form.netTotal = this.grandTotal;
      this.form.transportVatAmount = 0;
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
      var _this8 = this;
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
          if (result.isConfirmed) _this8.goToBankAccounts();
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!product || _this9.isAutoAssigningProduct === product.id)) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");
            case 2:
              _this9.isAutoAssigningProduct = product.id;
              _context8.prev = 3;
              _context8.next = 6;
              return _this9.$http.post("/api/products/".concat(product.slug, "/auto-assign-chart-of-account"));
            case 6:
              response = _context8.sent;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.purchase_account_id = response.data.purchase_account_id;

                // Force Vue to re-render the component to update the UI
                _this9.$nextTick(function () {
                  _this9.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this9.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this9.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this9.$t("Please try again or assign manually")
                });
              }
              _context8.next = 14;
              break;
            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](3);
              console.error('Error auto-assigning chart of account:', _context8.t0);
              toast.fire({
                type: "error",
                title: _this9.$t("An error occurred while assigning Chart of Account")
              });
            case 14:
              _context8.prev = 14;
              _this9.isAutoAssigningProduct = false;
              return _context8.finish(14);
            case 17:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[3, 10, 14, 17]]);
      }))();
    },
    // Allocate invoice-level discount proportionally across all items based on item subtotals (returnQty × unit_price)
    allocateInvoiceDiscountProportionally: function allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      var _this0 = this;
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalDiscountAmount) {
            _this0.$set(_this0.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.originalPrice || item.unitPrice || item.purchasePrice) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber;
        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });
      if (invoiceSubtotal <= 0) {
        return;
      }
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this0.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }
        _this0.$set(_this0.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });
      var roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalDiscountAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },
    // Allocate transport costs proportionally across all items
    allocateTransportCostProportionally: function allocateTransportCostProportionally(transportCost) {
      var _this1 = this;
      if (!transportCost || transportCost <= 0) {
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this1.$set(_this1.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.originalPrice || item.unitPrice || item.purchasePrice) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber;
        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });
      if (invoiceSubtotal <= 0) {
        return;
      }
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this1.roundToTwoDecimals(transportCost * proportion);
          allocatedTotal += proportionalAmount;
        }
        _this1.$set(_this1.form.selectedProducts[index], 'proportionalTransportAmount', proportionalAmount);
      });
      var roundingDifference = this.roundToTwoDecimals(transportCost - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalTransportAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalTransportAmount', Math.max(0, adjusted));
      }
    },
    // Recalculate all items with proportional discount allocation
    recalculateAllItemsWithProportionalDiscount: function recalculateAllItemsWithProportionalDiscount() {
      var _this10 = this;
      this.form.selectedProducts.forEach(function (item, index) {
        _this10.generateItemTotalPrice(index, true);
      });
    },
    // calculate sum (following purchase create logic with proportional discount and transport)
    // Adapted for purchase returns: uses returnQty instead of qty
    calculateSum: function calculateSum() {
      var _this11 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.form.totalDiscount = 0;
        this.form.subTotal = 0;
        this.form.totalProductTax = 0;
        this.form.netTotal = 0;
        this.form.totalReturn = 0;
        return;
      }

      // Calculate invoice subtotal (sum of all item subtotals: returnQty × unit_price)
      var invoiceSubtotal = this.form.selectedProducts.reduce(function (total, item) {
        var unitPriceNumber = Number(item.originalPrice || item.unitPrice || item.purchasePrice) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        return total + unitPriceNumber * qtyNumber;
      }, 0);

      // Apply commercial invoice-level discount (for allocation only)
      var invoiceLevelDiscount = 0;
      if (this.form.discount_value > 0) {
        if (this.form.discount_type === 'percentage') {
          invoiceLevelDiscount = this.roundToTwoDecimals(invoiceSubtotal * this.form.discount_value / 100);
        } else {
          invoiceLevelDiscount = this.roundToTwoDecimals(Number(this.form.discount_value));
        }
        if (invoiceLevelDiscount > invoiceSubtotal) {
          invoiceLevelDiscount = invoiceSubtotal;
        }
      }

      // Get transport cost (use transportTaxableCost if supplier is taxable, otherwise transportCost)
      var transportCost = this.isSupplierTaxable ? Number(this.form.transportTaxableCost || 0) : Number(this.form.transportCost || 0);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items ONLY when transport is taxable
      if (this.form.transportIsTaxable) {
        this.allocateTransportCostProportionally(transportCost);
      } else {
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this11.$set(_this11.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
      }

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();

      // Calculate totals after recalculation
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (total, item) {
        var productDiscount = item.discountAmount || 0;
        var proportionalDiscount = item.proportionalDiscountAmount || 0;
        return total + productDiscount + proportionalDiscount;
      }, 0);

      // Subtotal after discount (sum of netTotal values)
      this.form.subTotal = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.netTotal || item.totalAfterDiscount || 0);
      }, 0);

      // Total VAT (sum of totalTax values)
      this.form.totalProductTax = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0);

      // Total return amount (sum of totalPrice values for returned items)
      this.form.totalReturn = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalPrice || 0);
      }, 0);

      // Update Net Total using the dedicated method
      this.updateNetTotal();

      // Legacy fields for backward compatibility
      this.form.newSubTotal = this.form.subTotal;
      this.form.taxAmount = this.form.totalProductTax;
      this.form.discountTotal = this.form.totalDiscount;
      this.form.newTax = this.form.totalProductTax;
    },
    // save return
    savePurchaseReturn: function savePurchaseReturn() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this12.form.post(window.location.origin + '/api/purchase-returns').then(function (_ref2) {
                var data = _ref2.data;
                toast.fire({
                  type: 'success',
                  title: _this12.isSaudiArabia ? _this12.$t('Debit note added successfully') : _this12.$t('Purchase return added successfully')
                });
                // Show journal entry creation confirmation toast
                setTimeout(function () {
                  toast.fire({
                    type: 'success',
                    title: _this12.$t('Journal Entry Created Successfully')
                  });
                }, 500);
                _this12.clearTemporaryData();
                _this12.$router.push({
                  name: 'purchaseReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function (error) {
                var _error$response;
                // Extract error message from response
                var errorMessage = null;
                if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && _error$response.data) {
                  var errorData = error.response.data;

                  // Check for message field
                  if (errorData.message && typeof errorData.message === 'string') {
                    errorMessage = errorData.message;
                  } else if (errorData.error && typeof errorData.error === 'string') {
                    errorMessage = errorData.error;
                  } else if (errorData.errors && _typeof(errorData.errors) === 'object') {
                    // If there are validation errors, try to get the first one
                    var firstErrorKey = Object.keys(errorData.errors)[0];
                    if (firstErrorKey && Array.isArray(errorData.errors[firstErrorKey])) {
                      var firstError = errorData.errors[firstErrorKey][0];
                      if (typeof firstError === 'string') {
                        errorMessage = firstError;
                      }
                    } else if (firstErrorKey && typeof errorData.errors[firstErrorKey] === 'string') {
                      errorMessage = errorData.errors[firstErrorKey];
                    }
                  }
                }

                // Translate and show error
                if (errorMessage) {
                  // Try to translate the message if it exists as a translation key
                  var translatedMessage = _this12.$t(errorMessage);
                  // Use translated version if available, otherwise use original (might already be localized)
                  toast.fire({
                    type: 'error',
                    title: translatedMessage !== errorMessage ? translatedMessage : errorMessage
                  });
                } else {
                  toast.fire({
                    type: 'error',
                    title: _this12.$t('Please check your input and try again.')
                  });
                }
              });
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        returnReason: this.form.returnReason,
        supplier: this.form.supplier,
        selectedPurchases: this.form.selectedPurchases,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('purchaseReturnTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('purchaseReturnTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.returnReason = data.returnReason || this.form.returnReason;
          this.form.supplier = data.supplier || this.form.supplier;
          this.form.selectedPurchases = data.selectedPurchases || this.form.selectedPurchases;
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
      localStorage.removeItem('purchaseReturnTempData');
    },
    // handle pre-selection from query parameters
    handlePreSelection: function handlePreSelection() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var supplierSlug, purchaseSlug, purchaseData, response, attempts, maxAttempts, selectedSupplier, fallbackSupplier, selectedPurchase, fallbackPurchase, _selectedPurchase, _fallbackPurchase;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              supplierSlug = _this13.$route.query.supplier;
              purchaseSlug = _this13.$route.query.purchase;
              purchaseData = null;
              if (!purchaseSlug) {
                _context0.next = 96;
                break;
              }
              _context0.prev = 4;
              if (supplierSlug) {
                _context0.next = 11;
                break;
              }
              _context0.next = 8;
              return axios_default().get("/api/purchases/".concat(purchaseSlug));
            case 8:
              response = _context0.sent;
              purchaseData = response.data.data;
              if (purchaseData && purchaseData.supplier) {
                supplierSlug = purchaseData.supplier.slug;
              }
            case 11:
              if (!supplierSlug) {
                _context0.next = 91;
                break;
              }
              // Try multiple times with increasing delays
              attempts = 0;
              maxAttempts = 10;
            case 14:
              if (!(attempts < maxAttempts)) {
                _context0.next = 91;
                break;
              }
              if (!(_this13.items && _this13.items.length > 0)) {
                _context0.next = 85;
                break;
              }
              selectedSupplier = _this13.items.find(function (supplier) {
                return supplier.slug === supplierSlug;
              }); // If not found by slug, try to find by ID or name as fallback
              if (!(!selectedSupplier && purchaseData && purchaseData.supplier)) {
                _context0.next = 52;
                break;
              }
              fallbackSupplier = _this13.items.find(function (supplier) {
                return supplier.id === purchaseData.supplier.id || supplier.name === purchaseData.supplier.name;
              });
              if (!fallbackSupplier) {
                _context0.next = 52;
                break;
              }
              _this13.form.supplier = fallbackSupplier;

              // Trigger purchase loading for this supplier
              _context0.next = 23;
              return _this13.assignPurchases();
            case 23:
              _context0.next = 25;
              return _this13.$nextTick();
            case 25:
              _context0.next = 27;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 27:
              if (!(_this13.supplierPurchases && _this13.supplierPurchases.length > 0)) {
                _context0.next = 52;
                break;
              }
              selectedPurchase = _this13.supplierPurchases.find(function (purchase) {
                return purchase.slug === purchaseSlug;
              });
              if (!selectedPurchase) {
                _context0.next = 36;
                break;
              }
              _this13.form.purchase = selectedPurchase;
              // Trigger product loading for this purchase
              _context0.next = 33;
              return _this13.storeProducts();
            case 33:
              return _context0.abrupt("return");
            case 36:
              // Try multiple fallback methods
              fallbackPurchase = null; // Method 1: Try by ID
              if (purchaseData && purchaseData.id) {
                fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.id === purchaseData.id;
                });
              }

              // Method 2: Try by purchase number
              if (!fallbackPurchase && purchaseData && purchaseData.purchaseNo) {
                fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.purchaseNo === purchaseData.purchaseNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!fallbackPurchase) {
                fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.slug && purchase.slug.toLowerCase() === purchaseSlug.toLowerCase();
                });
              }
              if (!fallbackPurchase) {
                _context0.next = 47;
                break;
              }
              _this13.form.purchase = fallbackPurchase;
              _context0.next = 44;
              return _this13.storeProducts();
            case 44:
              return _context0.abrupt("return");
            case 47:
              if (!(purchaseData && purchaseData.slug === purchaseSlug)) {
                _context0.next = 52;
                break;
              }
              _this13.form.purchase = purchaseData;
              _context0.next = 51;
              return _this13.storeProducts();
            case 51:
              return _context0.abrupt("return");
            case 52:
              if (!selectedSupplier) {
                _context0.next = 85;
                break;
              }
              _this13.form.supplier = selectedSupplier;

              // Trigger purchase loading for this supplier
              _context0.next = 56;
              return _this13.assignPurchases();
            case 56:
              _context0.next = 58;
              return _this13.$nextTick();
            case 58:
              _context0.next = 60;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 60:
              if (!(_this13.supplierPurchases && _this13.supplierPurchases.length > 0)) {
                _context0.next = 85;
                break;
              }
              _selectedPurchase = _this13.supplierPurchases.find(function (purchase) {
                return purchase.slug === purchaseSlug;
              });
              if (!_selectedPurchase) {
                _context0.next = 69;
                break;
              }
              _this13.form.purchase = _selectedPurchase;
              // Trigger product loading for this purchase
              _context0.next = 66;
              return _this13.storeProducts();
            case 66:
              return _context0.abrupt("return");
            case 69:
              // Try multiple fallback methods
              _fallbackPurchase = null; // Method 1: Try by ID
              if (purchaseData && purchaseData.id) {
                _fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.id === purchaseData.id;
                });
              }

              // Method 2: Try by purchase number
              if (!_fallbackPurchase && purchaseData && purchaseData.purchaseNo) {
                _fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.purchaseNo === purchaseData.purchaseNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!_fallbackPurchase) {
                _fallbackPurchase = _this13.supplierPurchases.find(function (purchase) {
                  return purchase.slug && purchase.slug.toLowerCase() === purchaseSlug.toLowerCase();
                });
              }
              if (!_fallbackPurchase) {
                _context0.next = 80;
                break;
              }
              _this13.form.purchase = _fallbackPurchase;
              _context0.next = 77;
              return _this13.storeProducts();
            case 77:
              return _context0.abrupt("return");
            case 80:
              if (!(purchaseData && purchaseData.slug === purchaseSlug)) {
                _context0.next = 85;
                break;
              }
              _this13.form.purchase = purchaseData;
              _context0.next = 84;
              return _this13.storeProducts();
            case 84:
              return _context0.abrupt("return");
            case 85:
              attempts++;
              if (!(attempts < maxAttempts)) {
                _context0.next = 89;
                break;
              }
              _context0.next = 89;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 89:
              _context0.next = 14;
              break;
            case 91:
              _context0.next = 96;
              break;
            case 93:
              _context0.prev = 93;
              _context0.t0 = _context0["catch"](4);
              console.error('Error fetching purchase details:', _context0.t0);
            case 96:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[4, 93]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
    // Handle pre-selection from query parameters after component is mounted
    this.handlePreSelection();
  }
});
;// ./resources/js/pages/purchases/returns/create.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/create.vue?vue&type=style&index=0&id=5dbd9075&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_5dbd9075_prod_scoped_true_lang_css = __webpack_require__(76275);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/create.vue?vue&type=style&index=0&id=5dbd9075&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_5dbd9075_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_createvue_type_style_index_0_id_5dbd9075_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_5dbd9075_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchases/returns/create.vue?vue&type=style&index=0&id=5dbd9075&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/returns/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5dbd9075",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ })

}]);