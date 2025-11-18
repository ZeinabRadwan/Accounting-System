"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8616],{

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

/***/ 38616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=template&id=0264b71f&scoped=true
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
        name: 'invoiceReturns.index'
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
      "type": "submit",
      "form": 'invoiceReturnCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "invoiceReturnCreateForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveInvoiceReturn.apply(null, arguments);
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
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t('Client')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    on: {
      "input": _vm.assignInvoices
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.client && _vm.clientInvoices ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "invoice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoices')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('invoice')
    },
    attrs: {
      "options": _vm.clientInvoices,
      "label": "label",
      "name": "invoice",
      "placeholder": _vm.$t('Select an invoice')
    },
    on: {
      "input": _vm.storeProducts
    },
    model: {
      value: _vm.form.invoice,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "invoice", $$v);
      },
      expression: "form.invoice"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoice"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.errors.errors && _vm.form.errors.errors.selectedProducts ? _c('div', {
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
      "table-class": "quotations-create-table",
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
  }), _vm._v(" "), _c('div', {
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
      "for": "invoiceTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedInvoiceTax,
      expression: "formattedInvoiceTax"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceTax",
      "type": "text",
      "name": "invoiceTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedInvoiceTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.formattedInvoiceTax = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.form.returnAmount > 0 ? _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "returnAmountText"
    }
  }, [_vm._v(_vm._s(_vm.$t('Return Amount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.returnAmountText,
      expression: "form.returnAmountText"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('returnAmountText')
    },
    attrs: {
      "id": "returnAmountText",
      "type": "text",
      "name": "returnAmountText",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.returnAmountText
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "returnAmountText", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "returnAmountText"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.accounts && _vm.form.returnAmount > 0 ? _c('div', {
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
  })], 1) : _vm._e()])], 1), _vm._v(" "), _c('div', {
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
    staticClass: "btn btn-info ml-2",
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=script&lang=js
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




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return')
    };
  },
  components: {
    ItemsTable: ItemsTable/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: '',
        url: 'invoiceReturns.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        returnReason: '',
        account: '',
        availableBalance: 0,
        chequeNo: '',
        receiptNo: '',
        client: '',
        invoice: '',
        product: '',
        selectedProducts: [],
        totalReturn: 0,
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        invoiceTax: 0,
        newTax: 0,
        invoiceDiscount: 0,
        discountType: 0,
        discountPercentage: 0,
        invoiceTransport: 0,
        invoiceTaxRate: 0,
        invoiceTotal: 0,
        originalInvoiceTotal: 0,
        invoiceDue: 0,
        totalPaid: 0,
        newDue: 0,
        newDueText: '',
        returnAmount: 0,
        returnAmountText: 0,
        newSubTotal: 0,
        // Detailed return calculation fields
        netTotal: 0,
        // Net Sale (without VAT)
        taxAmount: 0,
        // VAT amount
        discountTotal: 0,
        // Total discount
        // New fields for display
        totalDiscount: 0,
        transportCost: 0
      }),
      products: '',
      accounts: '',
      clientInvoices: '',
      prefix: '',
      taxes: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if the country is Saudi Arabia
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Check if bank account has chart of account assigned (when payment is being added)
    hasBankAccountChartOfAccount: function hasBankAccountChartOfAccount() {
      if (this.form.returnAmount <= 0) {
        return true; // No payment being added, so no validation needed
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },
    // Calculate total product discounts
    totalProductDiscounts: function totalProductDiscounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, product) {
        var remainingQty = product.qty - product.returnQty;
        var productTotal = remainingQty * product.unitCost;
        if (product.productDiscount && product.productDiscount > 0) {
          if (product.discountType === 'percentage') {
            return total + productTotal * product.productDiscount / 100;
          } else {
            var discountPerUnit = product.productDiscount / product.qty;
            return total + discountPerUnit * remainingQty;
          }
        }
        return total;
      }, 0);
    },
    // Calculate total invoice discount
    totalInvoiceDiscount: function totalInvoiceDiscount() {
      return this.form.invoiceDiscount || 0;
    },
    // Calculate total discount (product + invoice)
    totalDiscount: function totalDiscount() {
      return this.totalProductDiscounts + this.totalInvoiceDiscount;
    },
    // Calculate original invoice total discount from invoice_products table
    originalInvoiceTotalDiscount: function originalInvoiceTotalDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, product) {
        // Use the original product data from invoice_products
        var salePrice = parseFloat(product.unitCost) || 0;
        var quantity = parseFloat(product.qty) || 0;
        var discountAmount = parseFloat(product.discountAmount) || 0;
        var discountType = product.discountType || 'fixed';
        var lineDiscount = 0;
        if (discountType === 'fixed') {
          lineDiscount = discountAmount;
        } else if (discountType === 'percentage') {
          lineDiscount = salePrice * quantity * (discountAmount / 100);
        }
        return total + lineDiscount;
      }, 0);
    },
    // Calculate original invoice total tax from invoice_products table
    originalInvoiceTotalTax: function originalInvoiceTotalTax() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, product) {
        // Use the logic: (SUM(tax_amount) / quantity) per product line
        var taxAmount = parseFloat(product.totalTax) || 0;
        var quantity = parseFloat(product.qty) || 1;
        var lineTax = taxAmount / quantity;
        return total + lineTax;
      }, 0);
    },
    // Dynamic breadcrumbs current based on country
    dynamicBreadcrumbsCurrent: function dynamicBreadcrumbsCurrent() {
      return this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return');
    },
    // Dynamic breadcrumbs based on country
    dynamicBreadcrumbs: function dynamicBreadcrumbs() {
      return [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: this.isSaudiArabia ? this.$t('Credit notes') : this.$t('Invoice Returns'),
        url: 'invoiceReturns.index'
      }, {
        name: 'Create',
        url: ''
      }];
    },
    // Computed properties for totals (matching invoice create)
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalBeforeDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalProductDiscount: function totalProductDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.discountAmount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalAfterDiscount: function totalAfterDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalAfterDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    totalProductTax: function totalProductTax() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.productTax) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    subtotal: function subtotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalPrice) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    // Total for the "Total" column (sum of totalBeforeDiscount)
    totalTotal: function totalTotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, product) {
        return total + (Number(product.totalBeforeDiscount) || 0);
      }, 0);
      var numValue = Number(total);
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2));
    },
    // Formatted computed properties for display
    formattedOriginalInvoiceTotal: function formattedOriginalInvoiceTotal() {
      return this.formatToTwoDecimals(this.form.originalInvoiceTotal);
    },
    formattedTotalDiscount: function formattedTotalDiscount() {
      return this.formatToTwoDecimals(this.form.totalDiscount);
    },
    formattedTransportCost: function formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.transportCost);
    },
    formattedInvoiceTax: function formattedInvoiceTax() {
      return this.formatToTwoDecimals(this.form.invoiceTax);
    },
    formattedTotalPaid: function formattedTotalPaid() {
      var _this$form$invoice;
      return this.formatToTwoDecimals(((_this$form$invoice = this.form.invoice) === null || _this$form$invoice === void 0 ? void 0 : _this$form$invoice.totalPaid) || 0);
    },
    formattedAvailableBalance: function formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance);
    }
  }),
  watch: {
    'form.selectedProducts': {
      handler: function handler(newVal) {
        if (newVal && newVal.length > 0) {
          this.calculateSum();
        }
      },
      deep: true
    },
    'form.newSubTotal': {
      handler: function handler(newVal) {
        // Recalculate discount percentage if it's a percentage-based discount
        if (this.form.discountType == 1 && this.form.invoiceDiscount > 0 && newVal > 0) {
          this.form.discountPercentage = Number((this.form.invoiceDiscount / newVal * 100).toFixed(2));
        }
      }
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return Promise.all([_this.getClients(), _this.getProducts(), _this.getAccounts(), _this.getTaxes()]);
          case 1:
            _this.prefix = _this.appInfo.productPrefix;

            // Set default status based on country
            if (_this.isSaudiArabia) {
              _this.form.status = 0; // Inactive for Saudi Arabia
            } else {
              _this.form.status = 1; // Active for other countries
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    // get all clients
    getClients: function getClients() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-clients'
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 1:
              _yield$axios$get = _context3.v;
              data = _yield$axios$get.data;
              _this3.products = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this4.taxes = data.data;
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t = _context4.v;
              console.error('Error getting taxes:', _t);
              _this4.taxes = [];
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this5.accounts = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // handle pre-selection from query parameters
    handlePreSelection: function handlePreSelection() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var clientSlug, invoiceSlug, invoiceData, response, attempts, maxAttempts, selectedClient, fallbackClient, selectedInvoice, fallbackInvoice, _selectedInvoice, _fallbackInvoice, _t2, _t3;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              clientSlug = _this6.$route.query.client;
              invoiceSlug = _this6.$route.query.invoice;
              invoiceData = null;
              if (!invoiceSlug) {
                _context6.n = 23;
                break;
              }
              _context6.p = 1;
              if (clientSlug) {
                _context6.n = 3;
                break;
              }
              _context6.n = 2;
              return axios_default().get("/api/invoices/".concat(invoiceSlug));
            case 2:
              response = _context6.v;
              invoiceData = response.data.data;
              if (invoiceData && invoiceData.client) {
                clientSlug = invoiceData.client.slug;
              }
            case 3:
              if (!clientSlug) {
                _context6.n = 21;
                break;
              }
              // Wait for items to be loaded (reduced from 10 attempts to 3)
              attempts = 0;
              maxAttempts = 3;
            case 4:
              if (!(attempts < maxAttempts)) {
                _context6.n = 21;
                break;
              }
              if (!(_this6.items && _this6.items.length > 0)) {
                _context6.n = 19;
                break;
              }
              _context6.p = 5;
              selectedClient = _this6.items.find(function (client) {
                return client.slug === clientSlug;
              }); // If not found by slug, try to find by ID or name as fallback
              if (!(!selectedClient && invoiceData && invoiceData.client)) {
                _context6.n = 11;
                break;
              }
              fallbackClient = _this6.items.find(function (client) {
                return client.id === invoiceData.client.id || client.name === invoiceData.client.name;
              });
              if (!fallbackClient) {
                _context6.n = 11;
                break;
              }
              _this6.form.client = fallbackClient;

              // Trigger invoice loading for this client
              _context6.n = 6;
              return _this6.assignInvoices();
            case 6:
              _context6.n = 7;
              return _this6.$nextTick();
            case 7:
              _context6.n = 8;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 8:
              if (!(_this6.clientInvoices && _this6.clientInvoices.length > 0)) {
                _context6.n = 11;
                break;
              }
              selectedInvoice = _this6.clientInvoices.find(function (invoice) {
                return invoice.slug === invoiceSlug;
              });
              if (!selectedInvoice) {
                _context6.n = 9;
                break;
              }
              _this6.form.invoice = selectedInvoice;
              // Trigger product loading for this invoice
              _this6.storeProducts();
              return _context6.a(2);
            case 9:
              // Try multiple fallback methods
              fallbackInvoice = null; // Method 1: Try by ID
              if (invoiceData && invoiceData.id) {
                fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.id === invoiceData.id;
                });
              }

              // Method 2: Try by invoice number
              if (!fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.invoiceNo === invoiceData.invoiceNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!fallbackInvoice) {
                fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase();
                });
              }
              if (!fallbackInvoice) {
                _context6.n = 10;
                break;
              }
              _this6.form.invoice = fallbackInvoice;
              _this6.storeProducts();
              return _context6.a(2);
            case 10:
              if (!(invoiceData && invoiceData.slug === invoiceSlug)) {
                _context6.n = 11;
                break;
              }
              _this6.form.invoice = invoiceData;
              _this6.storeProducts();
              return _context6.a(2);
            case 11:
              if (!selectedClient) {
                _context6.n = 17;
                break;
              }
              _this6.form.client = selectedClient;

              // Trigger invoice loading for this client
              _context6.n = 12;
              return _this6.assignInvoices();
            case 12:
              _context6.n = 13;
              return _this6.$nextTick();
            case 13:
              _context6.n = 14;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 14:
              if (!(_this6.clientInvoices && _this6.clientInvoices.length > 0)) {
                _context6.n = 17;
                break;
              }
              _selectedInvoice = _this6.clientInvoices.find(function (invoice) {
                return invoice.slug === invoiceSlug;
              });
              if (!_selectedInvoice) {
                _context6.n = 15;
                break;
              }
              _this6.form.invoice = _selectedInvoice;
              // Trigger product loading for this invoice
              _this6.storeProducts();
              return _context6.a(2);
            case 15:
              // Try multiple fallback methods
              _fallbackInvoice = null; // Method 1: Try by ID
              if (invoiceData && invoiceData.id) {
                _fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.id === invoiceData.id;
                });
              }

              // Method 2: Try by invoice number
              if (!_fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                _fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.invoiceNo === invoiceData.invoiceNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!_fallbackInvoice) {
                _fallbackInvoice = _this6.clientInvoices.find(function (invoice) {
                  return invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase();
                });
              }
              if (!_fallbackInvoice) {
                _context6.n = 16;
                break;
              }
              _this6.form.invoice = _fallbackInvoice;
              _this6.storeProducts();
              return _context6.a(2);
            case 16:
              if (!(invoiceData && invoiceData.slug === invoiceSlug)) {
                _context6.n = 17;
                break;
              }
              _this6.form.invoice = invoiceData;
              _this6.storeProducts();
              return _context6.a(2);
            case 17:
              _context6.n = 19;
              break;
            case 18:
              _context6.p = 18;
              _t2 = _context6.v;
              console.error('Error in handlePreSelection:', _t2);
            case 19:
              attempts++;
              if (!(attempts < maxAttempts)) {
                _context6.n = 20;
                break;
              }
              _context6.n = 20;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 20:
              _context6.n = 4;
              break;
            case 21:
              _context6.n = 23;
              break;
            case 22:
              _context6.p = 22;
              _t3 = _context6.v;
              console.error('Error fetching invoice details:', _t3);
            case 23:
              return _context6.a(2);
          }
        }, _callee6, null, [[5, 18], [1, 22]]);
      }))();
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }

      // Validate bank account chart of account when account is selected
      if (this.form.account && this.form.returnAmount > 0) {
        this.validateBankAccountChartOfAccount();
      }
      return;
    },
    // Validate bank account chart of account
    validateBankAccountChartOfAccount: function validateBankAccountChartOfAccount() {
      var _this7 = this;
      if (this.form.account && !this.form.account.chartOfAccountId) {
        toast.fire({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Go to Bank Accounts"),
          showCancelButton: true,
          cancelButtonText: this.$t("Close")
        }).then(function (result) {
          if (result.isConfirmed) {
            // Navigate to bank accounts page
            _this7.goToBankAccounts();
          }
        });
      }
    },
    // Navigate to bank accounts page
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'accounts.index'
      });
    },
    // assign invoices
    assignInvoices: function assignInvoices() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _this8.form.selectedProducts = [];
              _this8.form.invoice = '';
              if (_this8.form.client) {
                axios_default().post(window.location.origin + '/api/client/filter-invoices', {
                  products: _this8.form.product,
                  clientSlug: _this8.form.client.slug
                }).then(function (response) {
                  _this8.clientInvoices = response.data.data;
                });
              } else {
                _this8.form.product = '';
                _this8.form.client = '';
              }
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // store item in array
    storeProducts: function storeProducts() {
      this.form.selectedProducts = [];
      this.form.invoiceTax = this.form.invoice.tax;
      this.form.newTax = this.form.invoice.tax;
      this.form.invoiceTaxRate = this.form.invoice.taxRate;
      this.form.originalInvoiceTotal = this.form.invoice.invoiceTotal;
      this.form.invoiceTotal = this.form.invoice.invoiceTotal;
      this.form.invoiceTransport = this.form.invoice.transport;
      this.form.invoiceDiscount = this.form.invoice.discount;
      this.form.discountType = this.form.invoice.discountType;
      this.form.discountPercentage = this.form.invoice.discountPercentage;
      this.form.invoiceDue = this.form.invoice.due;
      this.form.newDue = this.form.invoice.due;
      this.form.newDueText = this.form.invoice.due;
      this.form.totalPaid = this.form.invoice.totalPaid;
      // Set the new display fields with calculated values
      // These will be updated in calculateSum() method
      this.form.totalDiscount = 0;
      this.form.transportCost = this.form.invoice.transport || 0;
      for (var key in this.form.invoice.invoiceProducts) {
        var _this$taxes;
        var invoiceItem = this.form.invoice.invoiceProducts[key];
        this.form.selectedProducts.unshift({
          id: invoiceItem.productID,
          slug: invoiceItem.productSlug,
          name: invoiceItem.productName,
          code: invoiceItem.productCode,
          unit: invoiceItem.productUnit,
          taxType: invoiceItem.taxType,
          taxRate: invoiceItem.taxRate,
          oldQty: invoiceItem.quantity,
          qty: invoiceItem.quantity,
          returnQty: invoiceItem.quantity - invoiceItem.returnQty,
          // Default to remaining quantity
          totalReturnQty: invoiceItem.quantity - invoiceItem.returnQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.salePrice,
          totalPrice: invoiceItem.total,
          returnTotal: 0,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          maxQty: invoiceItem.quantity - invoiceItem.returnQty,
          // Max is remaining quantity
          // Product-level discount information
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: invoiceItem.productDiscount || 0,
          discount: invoiceItem.productDiscount || 0,
          // Product-level VAT information
          vatRate: invoiceItem.vatRate,
          selectedVatRate: this.findMatchingVatRate(invoiceItem.productTax) || this.form.orderTax || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0]),
          // Calculate totals for display based on return quantity
          totalBeforeDiscount: Number(((invoiceItem.quantity - invoiceItem.returnQty) * invoiceItem.salePrice).toFixed(2)),
          totalAfterDiscount: Number(((invoiceItem.quantity - invoiceItem.returnQty) * invoiceItem.salePrice).toFixed(2)),
          // Chart of account information
          sales_account_id: invoiceItem.sales_account_id,
          purchase_account_id: invoiceItem.purchase_account_id,
          itemType: invoiceItem.itemType || 'product'
        });

        // Initialize discount and VAT calculations for the last added product
        var lastIndex = 0; // Since we're adding to the beginning
        var lastProduct = this.form.selectedProducts[lastIndex];

        // Calculate discount amount
        if (lastProduct.discount && lastProduct.discount > 0) {
          if (lastProduct.discountType === 'percentage') {
            lastProduct.discountAmount = Number((lastProduct.returnQty * lastProduct.unitCost * (lastProduct.discount / 100)).toFixed(2));
          } else {
            lastProduct.discountAmount = Number(lastProduct.discount.toFixed(2));
          }
          lastProduct.totalAfterDiscount = Number((lastProduct.totalBeforeDiscount - lastProduct.discountAmount).toFixed(2));
        } else {
          lastProduct.discountAmount = 0;
          lastProduct.totalAfterDiscount = lastProduct.totalBeforeDiscount;
        }

        // Calculate VAT
        if (lastProduct.selectedVatRate && lastProduct.selectedVatRate.rate) {
          var vatAmount = Number((lastProduct.totalAfterDiscount * (lastProduct.selectedVatRate.rate / 100)).toFixed(2));
          lastProduct.productTax = vatAmount;
          lastProduct.totalTax = vatAmount;
          lastProduct.totalPrice = Number((lastProduct.totalAfterDiscount + vatAmount).toFixed(2));
        } else {
          lastProduct.productTax = 0;
          lastProduct.totalTax = 0;
          lastProduct.totalPrice = lastProduct.totalAfterDiscount;
        }
      }

      // Initialize calculations after loading products
      this.calculateSum();
      return;
    },
    // update items
    updateItem: function updateItem(value, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct && value >= 0 && value <= selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value);

        // Recalculate totals based on return quantity
        selectedProduct.totalBeforeDiscount = Number((selectedProduct.returnQty * selectedProduct.unitCost).toFixed(2));
        selectedProduct.totalAfterDiscount = Number((selectedProduct.totalBeforeDiscount - (selectedProduct.discountAmount || 0)).toFixed(2));

        // Recalculate VAT and total price
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

        // Calculate return total proportionally from original invoice line total
        var originalLineTotal = parseFloat(selectedProduct.totalPrice) || 0;
        var totalQty = parseFloat(selectedProduct.qty) || 1;
        var returnQty = parseFloat(selectedProduct.returnQty) || 0;

        // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
        var unitPrice = originalLineTotal / totalQty;
        var returnTotal = Number((unitPrice * returnQty).toFixed(2));
        selectedProduct.returnTotal = returnTotal;

        // Force reactivity update
        this.$set(this.form.selectedProducts, index, selectedProduct);
      }
      this.calculateSum();
    },
    // update items reactively for v-model
    updateItemReactively: function updateItemReactively(item) {
      if (item.returnQty < 0) {
        item.returnQty = 0;
      } else if (item.returnQty > item.maxQty) {
        item.returnQty = item.maxQty;
      }

      // Recalculate totals based on return quantity
      item.totalBeforeDiscount = Number((item.returnQty * item.unitCost).toFixed(2));
      item.totalAfterDiscount = Number((item.totalBeforeDiscount - (item.discountAmount || 0)).toFixed(2));

      // Recalculate VAT and total price
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

      // Calculate return total proportionally from original invoice line total
      var originalLineTotal = parseFloat(item.totalPrice) || 0;
      var totalQty = parseFloat(item.qty) || 1;
      var returnQty = parseFloat(item.returnQty) || 0;

      // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
      var unitPrice = originalLineTotal / totalQty;
      var returnTotal = Number((unitPrice * returnQty).toFixed(2));
      item.returnTotal = returnTotal;
      this.calculateSum();
    },
    // calculate sum
    calculateSum: function calculateSum() {
      // calculate total
      var length = this.form.selectedProducts.length;
      this.form.newSubTotal = this.form.totalReturn = 0;
      var totalProductDiscount = 0;
      var totalProductTax = 0;
      var invoiceSubtotal = 0;

      // Initialize detailed return calculation fields
      this.form.netTotal = 0;
      this.form.taxAmount = 0;
      this.form.discountTotal = 0;
      for (var i = 0; i < length; i++) {
        var looProduct = this.form.selectedProducts[i];
        var remainingQty = looProduct.qty - looProduct.returnQty;

        // Calculate product total for remaining items
        var productTotal = remainingQty * looProduct.unitCost;
        invoiceSubtotal += productTotal;

        // Calculate subtotal for remaining items (this will be the base for calculations)
        this.form.newSubTotal += Number(productTotal.toFixed(2));

        // Calculate return total using proportional calculation from original invoice
        if (looProduct.returnQty > 0) {
          // Calculate return amount proportionally from the original invoice line total
          var originalLineTotal = parseFloat(looProduct.totalPrice) || 0; // This is the total price from invoice_products
          var totalQty = parseFloat(looProduct.qty) || 1;
          var returnQty = parseFloat(looProduct.returnQty) || 0;

          // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
          var unitPrice = originalLineTotal / totalQty;
          var returnTotal = Number((unitPrice * returnQty).toFixed(2));

          // Update the product's returnTotal with the proportional calculation
          looProduct.returnTotal = returnTotal;

          // Add to total return
          this.form.totalReturn += returnTotal;

          // For detailed breakdown, calculate proportional amounts
          var originalDiscount = parseFloat(looProduct.discountAmount) || 0;
          var originalTax = parseFloat(looProduct.totalTax) || 0;

          // Proportional discount and tax
          var proportionalDiscount = Number((originalDiscount / totalQty * returnQty).toFixed(2));
          var proportionalTax = Number((originalTax / totalQty * returnQty).toFixed(2));
          var proportionalNet = Number((returnTotal - proportionalDiscount).toFixed(2));
          this.form.netTotal += proportionalNet;
          this.form.taxAmount += proportionalTax;
          this.form.discountTotal += proportionalDiscount;
        }

        // Calculate product-level discounts for remaining items
        if (looProduct.productDiscount && looProduct.productDiscount > 0) {
          if (looProduct.discountType === 'percentage') {
            // For percentage discount: discount = total * percentage / 100
            var discountAmount = productTotal * looProduct.productDiscount / 100;
            totalProductDiscount += Number(discountAmount.toFixed(2));
          } else {
            // For fixed discount: calculate proportionally based on remaining quantity
            var discountPerUnit = looProduct.productDiscount / looProduct.qty;
            var _discountAmount = discountPerUnit * remainingQty;
            totalProductDiscount += Number(_discountAmount.toFixed(2));
          }
        }

        // Calculate product-level taxes for remaining items
        if (looProduct.productTax && looProduct.productTax > 0) {
          var taxPerUnit = looProduct.productTax / looProduct.qty;
          totalProductTax += Number((taxPerUnit * remainingQty).toFixed(2));
        }
      }

      // Calculate invoice-level discount
      var invoiceDiscountAmount = 0;
      if (this.form.discountType == 1) {
        // Percentage discount - calculate based on invoice subtotal
        invoiceDiscountAmount = Number((this.form.discountPercentage / 100 * invoiceSubtotal).toFixed(2));
      } else {
        // Fixed discount - use the original fixed amount
        invoiceDiscountAmount = Number(this.form.invoiceDiscount || 0);
      }

      // Apply the discount formula: discounted_total = base_total - discount_amount
      // Calculate new subtotal after applying all discounts
      this.form.newSubTotal = Number((invoiceSubtotal - totalProductDiscount - invoiceDiscountAmount).toFixed(2));

      // Update the invoice discount field to show the calculated amount
      this.form.invoiceDiscount = invoiceDiscountAmount;

      // Calculate total discount (product + invoice level) for display
      // Note: totalProductDiscount + invoiceDiscountAmount = total discount applied

      // Update tax calculation
      // Tax is calculated on the discounted amount
      var taxableAmount = this.form.newSubTotal;
      if (this.form.invoiceTaxRate && this.form.invoiceTaxRate.rate) {
        this.form.newTax = Number((this.form.invoiceTaxRate.rate / 100 * taxableAmount).toFixed(2));
      } else {
        this.form.newTax = 0;
      }

      // Note: Product-level taxes are already included in the original invoice calculation
      // We only need to calculate the invoice-level tax on the new subtotal

      // Calculate final totals
      // Note: invoiceTotal should remain as the original invoice total
      // The new calculated total would be:
      // this.form.invoiceTotal = Number(
      //   (
      //     this.form.newSubTotal +
      //     this.form.newTax +
      //     this.form.invoiceTransport
      //   ).toFixed(2)
      // )

      this.form.invoiceDue = Number((this.form.originalInvoiceTotal - this.form.invoice.totalPaid).toFixed(2));

      // Update the display fields with calculated values
      // 1. Total Discount = Original Invoice Total Discount - Return discount amount
      this.form.totalDiscount = Number((this.originalInvoiceTotalDiscount - this.form.discountTotal).toFixed(2));

      // 2. Transport Cost = from table invoices.transport (already set in storeProducts)
      // this.form.transportCost is already set from this.form.invoice.transport

      // 3. Invoice Tax = Original Invoice Total Tax - Return tax amount
      this.form.invoiceTax = Number((this.originalInvoiceTotalTax - this.form.taxAmount).toFixed(2));

      // calculate new due or payable
      if (this.form.invoiceDue >= 0) {
        this.form.newDue = this.form.originalInvoiceTotal - this.form.invoice.totalPaid;
        this.form.newDueText = this.form.originalInvoiceTotal + ' - ' + this.form.invoice.totalPaid + ' = ' + Number(this.form.newDue).toFixed(2);
        this.form.returnAmount = 0;
      } else {
        this.form.returnAmount = Number((this.form.invoice.totalPaid - this.form.originalInvoiceTotal).toFixed(2));
        this.form.returnAmountText = this.form.invoice.totalPaid + ' - ' + this.form.originalInvoiceTotal + ' = ' + this.form.returnAmount;
        this.form.invoiceDue = 0;
        this.form.newDue = 0;
      }
      return;
    },
    // Debug method to show calculation breakdown
    showCalculationBreakdown: function showCalculationBreakdown() {
      this.form.selectedProducts.forEach(function (product, index) {
        // Calculate original line discount for this product
        var salePrice = parseFloat(product.unitCost) || 0;
        var productQty = parseFloat(product.qty) || 0;
        var discountAmount = parseFloat(product.discountAmount) || 0;
        var discountType = product.discountType || 'fixed';
        var originalLineDiscount = 0;
        if (discountType === 'fixed') {
          originalLineDiscount = discountAmount;
        } else if (discountType === 'percentage') {
          originalLineDiscount = salePrice * productQty * (discountAmount / 100);
        }

        // Calculate original line tax for this product
        var totalTax = parseFloat(product.totalTax) || 0;
        var taxQty = parseFloat(product.qty) || 1;
        var originalLineTax = totalTax / taxQty;
      });

      // Show alert with key information
      var message = "Calculation Summary:\n\n";
      message += "Base Subtotal: ".concat((this.form.newSubTotal + this.form.invoiceDiscount).toFixed(2), "\n");
      message += "Discount Amount: ".concat(this.form.invoiceDiscount.toFixed(2), "\n");
      message += "New Subtotal: ".concat(this.form.newSubTotal.toFixed(2), "\n");
      message += "Total Return: ".concat(this.form.totalReturn.toFixed(2), "\n");
      message += "New Tax: ".concat(this.form.newTax.toFixed(2), "\n");
      message += "New Total: ".concat(this.form.invoiceTotal.toFixed(2), "\n");
      message += "New Due: ".concat(this.form.invoiceDue.toFixed(2));
      alert(message);
    },
    // Validate return quantities and calculations
    validateReturns: function validateReturns() {
      var _this9 = this;
      var isValid = true;
      var errors = [];

      // Check if any products have returns
      if (this.form.totalReturn <= 0) {
        errors.push(this.$t('At least one product must have a return quantity greater than 0'));
        isValid = false;
      }

      // Check if return quantities exceed available quantities
      this.form.selectedProducts.forEach(function (product) {
        if (product.returnQty > product.qty) {
          errors.push(_this9.$t('Return quantity for {name} cannot exceed available quantity', {
            name: product.name
          }));
          isValid = false;
        }
        if (product.returnQty < 0) {
          errors.push(_this9.$t('Return quantity for {name} cannot be negative', {
            name: product.name
          }));
          isValid = false;
        }
      });

      // Check if new subtotal is valid
      if (this.form.newSubTotal < 0) {
        errors.push(this.$t('New subtotal cannot be negative'));
        isValid = false;
      }

      // Check if discount is valid
      if (this.form.invoiceDiscount > this.form.newSubTotal) {
        errors.push(this.$t('Total discount cannot exceed new subtotal'));
        isValid = false;
      }
      if (errors.length > 0) {
        console.error('Validation Errors:', errors);
        // Show a toast like other parts of the system
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({
            type: 'error',
            title: this.$t('Validation Errors'),
            text: errors[0]
          });
        }

        // Bind errors to vform so they appear under inputs/section
        if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
          this.form.errors.set({
            selectedProducts: errors
          });
        }
      }
      return isValid;
    },
    // save return
    saveInvoiceReturn: function saveInvoiceReturn() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this0$form$invoice;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (_this0.validateReturns()) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              if (!(!_this0.isSaudiArabia && _this0.form.returnAmount > 0 && !_this0.hasBankAccountChartOfAccount)) {
                _context8.n = 2;
                break;
              }
              toast.fire({
                type: "warning",
                title: _this0.$t("Bank Account Chart of Account Required"),
                text: _this0.$t("Bank Account must have a Chart of Account assigned for journal entries."),
                timer: 8000,
                timerProgressBar: true,
                showConfirmButton: true,
                confirmButtonText: _this0.$t("Go to Bank Accounts"),
                showCancelButton: true,
                cancelButtonText: _this0.$t("Close")
              }).then(function (result) {
                if (result.isConfirmed) {
                  _this0.goToBankAccounts();
                }
              });
              return _context8.a(2);
            case 2:
              // Sync form fields with Calculation Summary just before save
              _this0.form.totalPaid = ((_this0$form$invoice = _this0.form.invoice) === null || _this0$form$invoice === void 0 ? void 0 : _this0$form$invoice.totalPaid) || 0;
              _this0.form.invoiceTax = _this0.form.newTax;
              _this0.form.newDue = _this0.form.invoiceDue;
              // invoiceTotal, invoiceDiscount and invoiceTransport are already current
              _context8.n = 3;
              return _this0.form.post(window.location.origin + '/api/invoice-returns').then(function (_ref) {
                var data = _ref.data;
                if (_this0.isSaudiArabia) {
                  toast.fire({
                    type: 'success',
                    title: _this0.$t('Credit Note created successfully'),
                    text: _this0.$t('Credit Note has been created as inactive. You can send it to ZATCA from the invoice returns list.'),
                    timer: 8000,
                    timerProgressBar: true
                  });
                } else {
                  toast.fire({
                    type: 'success',
                    title: _this0.$t('Invoice return added successfully')
                  });
                }
                _this0.clearTemporaryData();
                _this0.$router.push({
                  name: 'invoiceReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Please check your input and try again.')
                });
              });
            case 3:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        returnReason: this.form.returnReason,
        client: this.form.client,
        selectedInvoices: this.form.selectedInvoices,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('salesReturnTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('salesReturnTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.returnReason = data.returnReason || this.form.returnReason;
          this.form.client = data.client || this.form.client;
          this.form.selectedInvoices = data.selectedInvoices || this.form.selectedInvoices;
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
      localStorage.removeItem('salesReturnTempData');
    },
    // Helper methods for invoice create compatibility
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.id === productTax.id || tax.rate === productTax.rate;
      });
    },
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
    toWord: function toWord() {
      // Simple implementation - you might want to use a proper number-to-words library
      return this.$t('Total');
    },
    calculateProductDiscount: function calculateProductDiscount(index) {
      var product = this.form.selectedProducts[index];
      if (!product || !this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return;
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
      if (!product || !product.selectedVatRate || !this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return;
      var vatAmount = Number((product.totalAfterDiscount * (product.selectedVatRate.rate / 100)).toFixed(2));
      product.productTax = vatAmount;
      product.totalTax = vatAmount;
      product.totalPrice = Number((product.totalAfterDiscount + vatAmount).toFixed(2));
      this.calculateSum();
    },
    // Handle item change from ItemsTable component
    handleItemChange: function handleItemChange(_ref2) {
      var value = _ref2.value,
        type = _ref2.type,
        index = _ref2.index,
        action = _ref2.action;
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
        // But handle it anyway for consistency
        var _item = this.form.selectedProducts[index];
        if (_item) {
          _item.unitCost = Number(value);
          this.calculateSum();
        }
      }
    },
    removeItem: function removeItem(item, index) {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return;
      this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    }
  },
  mounted: function mounted() {
    var _this1 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _this1.loadTemporaryData();
            // Handle pre-selection from query parameters after component is mounted
            // Wait a bit to ensure data is loaded
            _context9.n = 1;
            return _this1.$nextTick();
          case 1:
            _this1.handlePreSelection();
          case 2:
            return _context9.a(2);
        }
      }, _callee9);
    }))();
  }
});
;// ./resources/js/pages/sales/returns/create.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=0264b71f&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_0264b71f_prod_scoped_true_lang_css = __webpack_require__(88645);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=0264b71f&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_0264b71f_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_createvue_type_style_index_0_id_0264b71f_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_0264b71f_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=0264b71f&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/returns/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0264b71f",
  null
  
)

/* harmony default export */ const create = (component.exports);

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

/***/ 88645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-0264b71f]{margin-bottom:15px}.footer-buttons[data-v-0264b71f]{display:flex;gap:10px}.footer-buttons .btn[data-v-0264b71f]{margin-right:10px}.footer-buttons .btn[data-v-0264b71f]:last-child{margin-right:0}.create-btn[data-v-0264b71f]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-0264b71f]:hover{background-color:#e9ecef}.edit-btn[data-v-0264b71f]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-0264b71f]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-0264b71f]{border:none!important}.quotations-create-table[data-v-0264b71f]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-0264b71f]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-0264b71f]{border:none!important}.quotations-create-table thead th[data-v-0264b71f]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-0264b71f]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-0264b71f]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-0264b71f]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-0264b71f]{gap:10px}.card[data-v-0264b71f]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-0264b71f]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-0264b71f]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-0264b71f]{background:#fff!important}.btn-primary[data-v-0264b71f]{background:#2ab930!important}.btn-secondary[data-v-0264b71f]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-0264b71f]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-0264b71f],.button-plus[data-v-0264b71f]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:12px;font-weight:700;height:24px;justify-content:center;transition:all .2s ease;width:24px}.button-minus[data-v-0264b71f]{background-color:#dc3545;color:#fff}.button-plus[data-v-0264b71f]{background-color:#007bff;color:#fff}.button-minus[data-v-0264b71f]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-0264b71f]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-0264b71f]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-0264b71f]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-0264b71f]{direction:rtl}[dir=rtl] .create-btn[data-v-0264b71f]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-0264b71f]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-0264b71f]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-0264b71f]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-0264b71f]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-0264b71f]{border-right:1px solid #ced4da}.clickable-badge[data-v-0264b71f]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-0264b71f]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-0264b71f]:active{transform:scale(.95)}.insufficient-stock-input[data-v-0264b71f]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-0264b71f]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.debug-panel[data-v-0264b71f]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none}.debug-panel .card-header[data-v-0264b71f]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-0264b71f]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-0264b71f]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-0264b71f]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-0264b71f]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-0264b71f]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-0264b71f]:last-child{border-bottom:none}.debug-display[data-v-0264b71f]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-0264b71f]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-0264b71f]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-0264b71f]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-0264b71f]:last-child{border-bottom:none}.debug-panel .table th[data-v-0264b71f]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-0264b71f]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-0264b71f]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-0264b71f]{padding:15px}.debug-item .row[data-v-0264b71f]{margin:0}.debug-item .col-md-6[data-v-0264b71f]{padding:0 5px}.debug-step[data-v-0264b71f]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-0264b71f]{font-size:.75em}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);