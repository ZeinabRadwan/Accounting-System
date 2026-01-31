"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5018],{

/***/ 20072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ItemsTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=template&id=6362b7f3&scoped=true
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
        "max": _vm.disableInventoryMaxRestriction ? null : item.itemType == 'product' ? item.inventoryCount : item.maxQty || null,
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
        "disabled": item.isFromQuotation || _vm.discountReadonly
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
        "readonly": item.isFromQuotation || _vm.discountReadonly,
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
        "disabled": item.isFromQuotation || _vm.vatReadonly
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
        "disabled": item.isFromQuotation || _vm.vatReadonly
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
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculatedSubTotal)))]), _vm._v(" "), _c('span', {
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
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.calculatedSubTotal)))]), _vm._v(" "), _c('span', {
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
    },
    disableInventoryMaxRestriction: {
      type: Boolean,
      "default": false
    },
    discountReadonly: {
      type: Boolean,
      "default": false
    },
    vatReadonly: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    calculatedSubTotal: function calculatedSubTotal() {
      var _this = this;
      if (!this.items || this.items.length === 0) return 0;
      return this.items.reduce(function (sum, item) {
        // Use totalPrice directly if available to ensure it matches the row display
        var itemTotal = item.totalPrice;
        if (itemTotal !== undefined && itemTotal !== null) {
          return sum + Number(itemTotal);
        }

        // Fallback logic
        var unitPrice = item[_this.unitPriceFieldName] || 0;
        var qty = item[_this.qtyFieldName] || 0;
        var net = item.totalAfterDiscount;
        if (net === undefined || net === null) {
          net = unitPrice * qty - (item.discountAmount || 0);
        }
        net = Number(net);
        var tax = Number(item.totalTax) || 0;
        return sum + net + tax;
      }, 0);
    }
  },
  methods: {
    getItemField: function getItemField(item, fieldName) {
      // Helper to handle dynamic field names safely
      return item[fieldName] !== undefined ? item[fieldName] : 0;
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css
var ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css = __webpack_require__(97995);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css = (ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css

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
  "6362b7f3",
  null
  
)

/* harmony default export */ const ItemsTable = (component.exports);

/***/ }),

/***/ 35018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=template&id=49055352&scoped=true
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
      "totals-colspan": 4,
      "hide-discount-column": true,
      "hide-vat-column": true
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
var ItemsTable = __webpack_require__(20072);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=script&lang=js
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
      form: new vform_es/* default */.Ay(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
        // Match sales invoice create structure
        subTotal: 0,
        netTotal: 0,
        transportCost: '',
        transportIsTaxable: true,
        // Default to true to maintain existing behavior (transport is taxable)
        orderTax: '',
        totalTax: 0,
        productTotalTax: 0,
        invoiceTax: 0,
        // Invoice-level tax (for non-Saudi Arabia)
        total_amount: 0,
        totalPaid: '',
        dueAmount: '',
        // Legacy fields for backward compatibility
        newTax: 0,
        invoiceDiscount: 0,
        discountType: 0,
        discountPercentage: 0,
        invoiceTransport: 0,
        invoiceTaxRate: 0,
        invoiceTotal: 0,
        originalInvoiceTotal: 0,
        invoiceDue: 0,
        newDue: 0,
        newDueText: '',
        returnAmount: 0,
        returnAmountText: 0,
        newSubTotal: 0,
        taxAmount: 0,
        discountTotal: 0,
        totalDiscount: 0
      }, "discountType", 0), "discount", 0), "discount_type", 'percentage'), "discount_value", 0)),
      products: '',
      accounts: '',
      clientInvoices: '',
      prefix: '',
      taxes: '',
      paymentMethods: []
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
    // Calculate total unit price (sum of all unit prices) - using returnQty for sales returns
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        var qty = Number(item.returnQty || item.qty) || 0;
        return total + item.unitPrice * qty;
      }, 0);
    },
    // Calculate total after discount (sum of all totalAfterDiscount values)
    totalAfterDiscount: function totalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
    },
    // Calculate total discount from all products (reactive)
    totalProductDiscount: function totalProductDiscount() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Calculate total product tax (reactive)
    totalProductTax: function totalProductTax() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Invoice Subtotal: Sum of all item subtotals before discount (returnQty × unit_price)
    invoiceSubtotal: function invoiceSubtotal() {
      return this.roundToTwoDecimals(this.totalUnitPrice);
    },
    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    invoiceLevelDiscountTotal: function invoiceLevelDiscountTotal() {
      var subtotal = this.invoiceSubtotal;
      if (!this.form.discount || this.form.discount <= 0) {
        return 0;
      }
      var discountAmount = 0;
      if (this.form.discountType == 1) {
        discountAmount = this.roundToTwoDecimals(subtotal * this.form.discount / 100);
      } else {
        discountAmount = this.roundToTwoDecimals(Number(this.form.discount));
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal ? this.roundToTwoDecimals(subtotal) : discountAmount;
    },
    // Gets transport amount
    shippingCostTotal: function shippingCostTotal() {
      var transportCost = Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },
    // Calculate subtotal (reactive) - sum of line net_totals (line_total - discount)
    subtotal: function subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount);
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
    // Calculate number of items
    numberOfItems: function numberOfItems() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.length;
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
    'appInfo': {
      handler: function handler() {
        // Recalculate when app info changes (e.g., country changes)
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      },
      deep: true
    },
    'isSaudiArabia': {
      handler: function handler() {
        // Recalculate when country changes
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.selectedProducts': {
      handler: function handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      },
      deep: true
    },
    'form.transportCost': {
      handler: function handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.transportIsTaxable': {
      handler: function handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount': {
      handler: function handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discountType': {
      handler: function handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount_type': {
      handler: function handler() {
        this.syncDiscountFields();
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount_value': {
      handler: function handler() {
        this.syncDiscountFields();
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([_this.getClients(), _this.getProducts(), _this.getAccounts(), _this.getTaxes(), _this.getPaymentMethods()]);
          case 2:
            _this.prefix = _this.appInfo.productPrefix;

            // Set default status based on country
            if (_this.isSaudiArabia) {
              _this.form.status = 0; // Inactive for Saudi Arabia
            } else {
              _this.form.status = 1; // Active for other countries
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    // get all clients
    getClients: function getClients() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-clients'
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 2:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this3.products = data.data;
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
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 3:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this4.taxes = data.data;
              _context4.next = 12;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error('Error getting taxes:', _context4.t0);
              _this4.taxes = [];
            case 12:
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
    // get accounts
    getAccounts: function getAccounts() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 2:
              _yield$axios$get3 = _context6.sent;
              data = _yield$axios$get3.data;
              _this6.accounts = data.data;
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // handle pre-selection from query parameters
    handlePreSelection: function handlePreSelection() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var clientSlug, invoiceSlug, invoiceData, response, attempts, maxAttempts, selectedClient, fallbackClient, selectedInvoice, fallbackInvoice, _selectedInvoice, _fallbackInvoice;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              clientSlug = _this7.$route.query.client;
              invoiceSlug = _this7.$route.query.invoice;
              invoiceData = null;
              if (!invoiceSlug) {
                _context7.next = 96;
                break;
              }
              _context7.prev = 4;
              if (clientSlug) {
                _context7.next = 11;
                break;
              }
              _context7.next = 8;
              return axios_default().get("/api/invoices/".concat(invoiceSlug));
            case 8:
              response = _context7.sent;
              invoiceData = response.data.data;
              if (invoiceData && invoiceData.client) {
                clientSlug = invoiceData.client.slug;
              }
            case 11:
              if (!clientSlug) {
                _context7.next = 91;
                break;
              }
              // Wait for items to be loaded (reduced from 10 attempts to 3)
              attempts = 0;
              maxAttempts = 3;
            case 14:
              if (!(attempts < maxAttempts)) {
                _context7.next = 91;
                break;
              }
              if (!(_this7.items && _this7.items.length > 0)) {
                _context7.next = 85;
                break;
              }
              _context7.prev = 16;
              selectedClient = _this7.items.find(function (client) {
                return client.slug === clientSlug;
              }); // If not found by slug, try to find by ID or name as fallback
              if (!(!selectedClient && invoiceData && invoiceData.client)) {
                _context7.next = 50;
                break;
              }
              fallbackClient = _this7.items.find(function (client) {
                return client.id === invoiceData.client.id || client.name === invoiceData.client.name;
              });
              if (!fallbackClient) {
                _context7.next = 50;
                break;
              }
              _this7.form.client = fallbackClient;

              // Trigger invoice loading for this client
              _context7.next = 24;
              return _this7.assignInvoices();
            case 24:
              _context7.next = 26;
              return _this7.$nextTick();
            case 26:
              _context7.next = 28;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 28:
              if (!(_this7.clientInvoices && _this7.clientInvoices.length > 0)) {
                _context7.next = 50;
                break;
              }
              selectedInvoice = _this7.clientInvoices.find(function (invoice) {
                return invoice.slug === invoiceSlug;
              });
              if (!selectedInvoice) {
                _context7.next = 36;
                break;
              }
              _this7.form.invoice = selectedInvoice;
              // Trigger product loading for this invoice
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 36:
              // Try multiple fallback methods
              fallbackInvoice = null; // Method 1: Try by ID
              if (invoiceData && invoiceData.id) {
                fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.id === invoiceData.id;
                });
              }

              // Method 2: Try by invoice number
              if (!fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.invoiceNo === invoiceData.invoiceNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!fallbackInvoice) {
                fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase();
                });
              }
              if (!fallbackInvoice) {
                _context7.next = 46;
                break;
              }
              _this7.form.invoice = fallbackInvoice;
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 46:
              if (!(invoiceData && invoiceData.slug === invoiceSlug)) {
                _context7.next = 50;
                break;
              }
              _this7.form.invoice = invoiceData;
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 50:
              if (!selectedClient) {
                _context7.next = 80;
                break;
              }
              _this7.form.client = selectedClient;

              // Trigger invoice loading for this client
              _context7.next = 54;
              return _this7.assignInvoices();
            case 54:
              _context7.next = 56;
              return _this7.$nextTick();
            case 56:
              _context7.next = 58;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 58:
              if (!(_this7.clientInvoices && _this7.clientInvoices.length > 0)) {
                _context7.next = 80;
                break;
              }
              _selectedInvoice = _this7.clientInvoices.find(function (invoice) {
                return invoice.slug === invoiceSlug;
              });
              if (!_selectedInvoice) {
                _context7.next = 66;
                break;
              }
              _this7.form.invoice = _selectedInvoice;
              // Trigger product loading for this invoice
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 66:
              // Try multiple fallback methods
              _fallbackInvoice = null; // Method 1: Try by ID
              if (invoiceData && invoiceData.id) {
                _fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.id === invoiceData.id;
                });
              }

              // Method 2: Try by invoice number
              if (!_fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                _fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.invoiceNo === invoiceData.invoiceNo;
                });
              }

              // Method 3: Try by slug with different casing
              if (!_fallbackInvoice) {
                _fallbackInvoice = _this7.clientInvoices.find(function (invoice) {
                  return invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase();
                });
              }
              if (!_fallbackInvoice) {
                _context7.next = 76;
                break;
              }
              _this7.form.invoice = _fallbackInvoice;
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 76:
              if (!(invoiceData && invoiceData.slug === invoiceSlug)) {
                _context7.next = 80;
                break;
              }
              _this7.form.invoice = invoiceData;
              _this7.storeProducts();
              return _context7.abrupt("return");
            case 80:
              _context7.next = 85;
              break;
            case 82:
              _context7.prev = 82;
              _context7.t0 = _context7["catch"](16);
              console.error('Error in handlePreSelection:', _context7.t0);
            case 85:
              attempts++;
              if (!(attempts < maxAttempts)) {
                _context7.next = 89;
                break;
              }
              _context7.next = 89;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 89:
              _context7.next = 14;
              break;
            case 91:
              _context7.next = 96;
              break;
            case 93:
              _context7.prev = 93;
              _context7.t1 = _context7["catch"](4);
              console.error('Error fetching invoice details:', _context7.t1);
            case 96:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[4, 93], [16, 82]]);
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
      var _this8 = this;
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
            _this8.goToBankAccounts();
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this9.form.selectedProducts = [];
              _this9.form.invoice = '';
              if (_this9.form.client) {
                axios_default().post(window.location.origin + '/api/client/filter-invoices', {
                  products: _this9.form.product,
                  clientSlug: _this9.form.client.slug
                }).then(function (response) {
                  _this9.clientInvoices = response.data.data;
                });
              } else {
                _this9.form.product = '';
                _this9.form.client = '';
              }
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // store item in array
    storeProducts: function storeProducts() {
      var _this0 = this;
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
      // Initialize transport taxability (default to true for backward compatibility)
      this.form.transportIsTaxable = this.form.invoice.transportIsTaxable !== undefined ? this.form.invoice.transportIsTaxable : true;
      // Initialize discount fields (sync with legacy fields)
      if (this.form.invoice.discount_type) {
        this.form.discount_type = this.form.invoice.discount_type;
      }
      if (this.form.invoice.discount_value !== undefined) {
        this.form.discount_value = this.form.invoice.discount_value;
      }
      // Sync discount fields
      this.syncDiscountFields();
      var _loop = function _loop() {
        var _this0$taxes;
        var invoiceItem = _this0.form.invoice.invoiceProducts[key];

        // Calculate remaining quantity that can be returned
        var remainingQty = invoiceItem.quantity - invoiceItem.returnQty;

        // Skip products with 0 remaining quantity (already fully returned)
        if (remainingQty <= 0) {
          return 1; // continue
        }
        _this0.form.selectedProducts.unshift({
          id: invoiceItem.productID,
          slug: invoiceItem.productSlug,
          name: invoiceItem.productName,
          code: invoiceItem.productCode,
          unit: invoiceItem.productUnit,
          taxType: invoiceItem.taxType,
          taxRate: invoiceItem.taxRate,
          oldQty: invoiceItem.quantity,
          qty: invoiceItem.quantity,
          returnQty: remainingQty,
          // Default to remaining quantity
          totalReturnQty: remainingQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.salePrice,
          originalPrice: invoiceItem.salePrice,
          // Store original price
          totalPrice: invoiceItem.total,
          returnTotal: 0,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          maxQty: remainingQty,
          // Max is remaining quantity
          // Product-level discount information
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: invoiceItem.productDiscount || 0,
          // Initialize proportional amounts
          proportionalDiscountAmount: 0,
          proportionalTransportAmount: 0,
          netTotal: 0,
          // Will be calculated
          // Calculate discount value: if percentage type, use discountPercentage or calculate from discount_amount
          discount: function () {
            if (invoiceItem.discountType === 'percentage') {
              // If discountPercentage exists (including 0), use it
              // Check for both null and undefined, and also check if it's a valid number
              if (invoiceItem.discountPercentage !== null && invoiceItem.discountPercentage !== undefined && !isNaN(invoiceItem.discountPercentage)) {
                return Number(invoiceItem.discountPercentage);
              }
              // Otherwise, calculate percentage from discount_amount and total_before_discount
              var totalBeforeDiscount = (invoiceItem.quantity || 0) * (invoiceItem.salePrice || 0);
              if (totalBeforeDiscount > 0 && invoiceItem.productDiscount > 0) {
                return Number((invoiceItem.productDiscount / totalBeforeDiscount * 100).toFixed(2));
              }
              return 0;
            } else {
              // Fixed discount: use productDiscount (the amount)
              return invoiceItem.productDiscount || 0;
            }
          }(),
          // Product-level VAT information
          vatRate: invoiceItem.vatRate,
          selectedVatRate: _this0.findMatchingVatRate(invoiceItem.productTax) || _this0.form.orderTax || ((_this0$taxes = _this0.taxes) === null || _this0$taxes === void 0 ? void 0 : _this0$taxes[0]),
          // Initialize totals (will be calculated by calculateItemAmounts)
          totalBeforeDiscount: 0,
          totalAfterDiscount: 0,
          // Chart of account information
          sales_account_id: invoiceItem.sales_account_id,
          purchase_account_id: invoiceItem.purchase_account_id,
          itemType: invoiceItem.itemType || 'product'
        });
      };
      for (var key in this.form.invoice.invoiceProducts) {
        if (_loop()) continue;
      }

      // Calculate all items after loading products
      // Use calculateItemAmounts for each item to ensure proper initialization
      this.form.selectedProducts.forEach(function (item, index) {
        // Calculate item amounts (this will set all totals correctly)
        _this0.calculateItemAmounts(index, true); // Skip global recalculation for now
      });

      // Initialize calculations after loading products
      // Now trigger global recalculation to allocate discounts and transport
      this.calculateSum();
      return;
    },
    // update items
    updateItem: function updateItem(value, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct && value >= 0 && value <= selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value);

        // Force reactivity update
        this.$set(this.form.selectedProducts, index, selectedProduct);

        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index);
      }
    },
    // update items reactively for v-model
    updateItemReactively: function updateItemReactively(item) {
      if (item.returnQty < 0) {
        item.returnQty = 0;
      } else if (item.returnQty > item.maxQty) {
        item.returnQty = item.maxQty;
      }

      // Find the index of the item
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p === item;
      });
      if (index !== -1) {
        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index);
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
    // calculate sum - matching sales invoice create logic
    calculateSum: function calculateSum() {
      // Update products with default VAT rate if needed
      this.updateProductsWithDefaultVatRate();

      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Sync discount fields before calculations
      this.syncDiscountFields();

      // Global discount used ONLY for legacy invoice-level tax (orderTax)
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals(this.form.discount / 100 * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Invoice-level tax (orderTax) computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)));
      }

      // Total tax = product VAT + invoice-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Apply commercial invoice-level discount (for allocation only)
      var invoiceLevelDiscount = this.invoiceLevelDiscountTotal;

      // Update netTotal to match the computed grandTotal
      this.$set(this.form, 'netTotal', this.grandTotal);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items (only when transport is taxable)
      var transportCost = Number(this.form.transportCost || 0);
      this.allocateTransportCostProportionally(transportCost);

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();
      return;
    },
    // Sync discount fields (matching sales invoice create)
    syncDiscountFields: function syncDiscountFields() {
      // Map discount_type ("fixed"/"percentage") to discountType (0/1)
      if (this.form.discount_type) {
        this.form.discountType = this.form.discount_type === 'percentage' ? 1 : 0;
      }
      // Map discount_value to discount
      if (this.form.discount_value !== null && this.form.discount_value !== undefined) {
        this.form.discount = parseFloat(this.form.discount_value) || 0;
      }
    },
    // Update products with default VAT rate if needed
    updateProductsWithDefaultVatRate: function updateProductsWithDefaultVatRate() {
      var _this1 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return;
      }
      this.form.selectedProducts.forEach(function (item, index) {
        if (!item.selectedVatRate && _this1.taxes && _this1.taxes.length > 0) {
          // Try to find matching VAT rate from product's taxRate
          if (item.taxRate !== undefined && item.taxRate !== null) {
            var matchingRate = _this1.findMatchingVatRate(item.taxRate);
            if (matchingRate) {
              _this1.$set(_this1.form.selectedProducts[index], 'selectedVatRate', matchingRate);
            } else {
              _this1.$set(_this1.form.selectedProducts[index], 'selectedVatRate', _this1.taxes[0]);
            }
          } else {
            _this1.$set(_this1.form.selectedProducts[index], 'selectedVatRate', _this1.taxes[0]);
          }
        }
      });
    },
    // Allocate invoice-level discount proportionally across all items based on item subtotals (returnQty × unit_price)
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    allocateInvoiceDiscountProportionally: function allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      var _this10 = this;
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
        // Clear proportional discounts if no invoice-level discount
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalDiscountAmount) {
            _this10.$set(_this10.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: returnQty × unit_price)
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = returnQty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate discount proportionally based on item subtotals
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this10.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        _this10.$set(_this10.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      var roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalDiscountAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },
    // Allocate transport costs proportionally across all items based on item subtotals (returnQty × unit_price)
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    allocateTransportCostProportionally: function allocateTransportCostProportionally(transportCost) {
      var _this11 = this;
      if (!transportCost || transportCost <= 0) {
        // Clear proportional transport if no transport cost
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this11.$set(_this11.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // CRITICAL: Only allocate transport when it is taxable
      if (!this.form.transportIsTaxable) {
        // Clear all proportional transport amounts when transport is non-taxable
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this11.$set(_this11.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: returnQty × unit_price)
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
        var qtyNumber = Number(item.returnQty || item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = returnQty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate transport proportionally based on item subtotals
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this11.roundToTwoDecimals(transportCost * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional transport amount
        _this11.$set(_this11.form.selectedProducts[index], 'proportionalTransportAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      var roundingDifference = this.roundToTwoDecimals(transportCost - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalTransportAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalTransportAmount', Math.max(0, adjusted));
      }
    },
    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount: function recalculateAllItemsWithProportionalDiscount() {
      var _this12 = this;
      this.form.selectedProducts.forEach(function (item, index) {
        // Recalculate this item to include proportional discount and transport
        // Pass skipRecalculate = true to avoid recursive global recalculation
        _this12.calculateItemAmounts(index, true);
      });
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
      var _this13 = this;
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
          errors.push(_this13.$t('Return quantity for {name} cannot exceed available quantity', {
            name: product.name
          }));
          isValid = false;
        }
        if (product.returnQty < 0) {
          errors.push(_this13.$t('Return quantity for {name} cannot be negative', {
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
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this14$form$invoice;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (_this14.validateReturns()) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              if (!(!_this14.isSaudiArabia && _this14.form.returnAmount > 0 && !_this14.hasBankAccountChartOfAccount)) {
                _context9.next = 5;
                break;
              }
              toast.fire({
                type: "warning",
                title: _this14.$t("Bank Account Chart of Account Required"),
                text: _this14.$t("Bank Account must have a Chart of Account assigned for journal entries."),
                timer: 8000,
                timerProgressBar: true,
                showConfirmButton: true,
                confirmButtonText: _this14.$t("Go to Bank Accounts"),
                showCancelButton: true,
                cancelButtonText: _this14.$t("Close")
              }).then(function (result) {
                if (result.isConfirmed) {
                  _this14.goToBankAccounts();
                }
              });
              return _context9.abrupt("return");
            case 5:
              // Sync form fields with Calculation Summary just before save
              _this14.form.totalPaid = ((_this14$form$invoice = _this14.form.invoice) === null || _this14$form$invoice === void 0 ? void 0 : _this14$form$invoice.totalPaid) || 0;
              _this14.form.invoiceTax = _this14.form.newTax;
              _this14.form.newDue = _this14.form.invoiceDue;
              // invoiceTotal, invoiceDiscount and invoiceTransport are already current
              _context9.next = 10;
              return _this14.form.post(window.location.origin + '/api/invoice-returns').then(function (_ref) {
                var data = _ref.data;
                if (_this14.isSaudiArabia) {
                  toast.fire({
                    type: 'success',
                    title: _this14.$t('Credit Note created successfully'),
                    text: _this14.$t('Credit Note has been created as inactive. You can send it to ZATCA from the invoice returns list.'),
                    timer: 8000,
                    timerProgressBar: true
                  });
                } else {
                  toast.fire({
                    type: 'success',
                    title: _this14.$t('Invoice return added successfully')
                  });
                }
                _this14.clearTemporaryData();
                _this14.$router.push({
                  name: 'invoiceReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this14.$t('Please check your input and try again.')
                });
              });
            case 10:
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
    toWord: function toWord() {
      // Simple implementation - you might want to use a proper number-to-words library
      return this.$t('Total');
    },
    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    // Optional second parameter skipRecalculate controls whether to trigger global recalculation (calculateSum)
    calculateItemAmounts: function calculateItemAmounts(index) {
      var skipRecalculate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Normalize numeric inputs - use returnQty for sales returns
      var unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
      var qtyNumber = Number(item.returnQty || item.qty) || 0;

      // Calculate total before discount (unit price × return quantity)
      var totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

      // Calculate product-level discount amount based on type
      var productDiscountAmount = 0;
      if (item.discountType === "percentage") {
        productDiscountAmount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber * (item.discount || 0) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Get proportional invoice-level discount allocation (if any)
      var proportionalDiscount = item.proportionalDiscountAmount || 0;

      // Total discount = product discount + proportional invoice-level discount
      var discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      var finalDiscountAmount = discountAmount > totalBeforeDiscount ? this.roundToTwoDecimals(totalBeforeDiscount) : discountAmount;

      // Calculate net total after discount (this is what VAT is calculated on)
      var netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);

      // Get proportional transport cost allocation (if any)
      var proportionalTransport = item.proportionalTransportAmount || 0;

      // Use selected VAT rate if available, otherwise fall back to product's default tax rate
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

      // Ensure the selectedVatRate is properly set for VAT calculations
      var updatedItem = _objectSpread({}, item);
      if (!updatedItem.selectedVatRate && vatRate > 0) {
        // First try to use the product's default VAT rate, then fall back to available taxes
        if (updatedItem.productTax) {
          updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
        }

        // If no match found or no productTax, fall back to available taxes
        if (!updatedItem.selectedVatRate && this.taxes && this.taxes.length > 0) {
          updatedItem.selectedVatRate = this.taxes[0];
        }
      }

      // Calculate VAT base depending on transport taxability
      var isTransportTaxable = this.form.transportIsTaxable !== false; // Default to true if not set

      // When transport is non-taxable, proportionalTransport should be 0 (not distributed)
      var transportForVatBase = isTransportTaxable ? proportionalTransport : 0;
      var vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);

      // Calculate tax and total based on tax type
      var productTax, totalTax, totalPrice;
      if (item.taxType == "Exclusive") {
        // VAT on vatBase (which includes transport only if transport is taxable)
        productTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax);
        // Total after VAT = vatBase + VAT
        totalPrice = this.roundToTwoDecimals(vatBase + totalTax);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from net_total
        var netUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? netTotal / qtyNumber : 0);
        productTax = this.roundToTwoDecimals(netUnitPrice - netUnitPrice / (1 + vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
        // Total after VAT = net_total (VAT already included, transport added at invoice level only if non-taxable)
        totalPrice = this.roundToTwoDecimals(netTotal);
      }

      // Create updated item with all calculated values
      updatedItem = _objectSpread(_objectSpread({}, updatedItem), {}, {
        discountAmount: finalDiscountAmount,
        productDiscountAmount: productDiscountAmount,
        // Store product-level discount separately
        proportionalDiscountAmount: proportionalDiscount,
        // Store proportional discount separately
        proportionalTransportAmount: proportionalTransport,
        // Store proportional transport separately (for reporting only)
        totalBeforeDiscount: totalBeforeDiscount,
        totalAfterDiscount: netTotal,
        netTotal: netTotal,
        productTax: productTax,
        totalTax: totalTax,
        totalPrice: totalPrice // Total after VAT (transport added at invoice level)
      });

      // Use Vue.set to ensure reactivity
      this.$set(this.form.selectedProducts, index, updatedItem);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
      }

      // Force update to ensure template re-renders
      this.$forceUpdate();
    },
    calculateProductDiscount: function calculateProductDiscount(index) {
      this.calculateItemAmounts(index);
    },
    calculateProductVat: function calculateProductVat(index) {
      this.calculateItemAmounts(index);
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
          // Recalculate all amounts (discount, price, tax, total) using unified function
          this.calculateItemAmounts(index);
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
    var _this15 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            _this15.loadTemporaryData();
            // Handle pre-selection from query parameters after component is mounted
            // Wait a bit to ensure data is loaded
            _context0.next = 3;
            return _this15.$nextTick();
          case 3:
            _this15.handlePreSelection();
          case 4:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }))();
  }
});
;// ./resources/js/pages/sales/returns/create.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=49055352&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_49055352_prod_scoped_true_lang_css = __webpack_require__(43048);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=49055352&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_49055352_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_createvue_type_style_index_0_id_49055352_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_49055352_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/returns/create.vue?vue&type=style&index=0&id=49055352&prod&scoped=true&lang=css

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
  "49055352",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 43048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-49055352]{margin-bottom:15px}.footer-buttons[data-v-49055352]{display:flex;gap:10px}.footer-buttons .btn[data-v-49055352]{margin-right:10px}.footer-buttons .btn[data-v-49055352]:last-child{margin-right:0}.create-btn[data-v-49055352]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-49055352]:hover{background-color:#e9ecef}.edit-btn[data-v-49055352]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-49055352]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-49055352]{border:none!important}.quotations-create-table[data-v-49055352]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-49055352]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-49055352]{border:none!important}.quotations-create-table thead th[data-v-49055352]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-49055352]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-49055352]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-49055352]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-49055352]{gap:10px}.card[data-v-49055352]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-49055352]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-49055352]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-49055352]{background:#fff!important}.btn-primary[data-v-49055352]{background:#2ab930!important}.btn-secondary[data-v-49055352]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-49055352]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-49055352],.button-plus[data-v-49055352]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:12px;font-weight:700;height:24px;justify-content:center;transition:all .2s ease;width:24px}.button-minus[data-v-49055352]{background-color:#dc3545;color:#fff}.button-plus[data-v-49055352]{background-color:#007bff;color:#fff}.button-minus[data-v-49055352]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-49055352]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-49055352]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-49055352]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-49055352]{direction:rtl}[dir=rtl] .create-btn[data-v-49055352]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-49055352]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-49055352]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-49055352]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-49055352]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-49055352]{border-right:1px solid #ced4da}.clickable-badge[data-v-49055352]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-49055352]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-49055352]:active{transform:scale(.95)}.insufficient-stock-input[data-v-49055352]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-49055352]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.debug-panel[data-v-49055352]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none}.debug-panel .card-header[data-v-49055352]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-49055352]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-49055352]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-49055352]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-49055352]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-49055352]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-49055352]:last-child{border-bottom:none}.debug-display[data-v-49055352]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-49055352]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-49055352]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-49055352]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-49055352]:last-child{border-bottom:none}.debug-panel .table th[data-v-49055352]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-49055352]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-49055352]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-49055352]{padding:15px}.debug-item .row[data-v-49055352]{margin:0}.debug-item .col-md-6[data-v-49055352]{padding:0 5px}.debug-step[data-v-49055352]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-49055352]{font-size:.75em}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".items-table-wrapper[data-v-6362b7f3]{display:block;margin-left:0;margin-right:0;width:100%}.table-custom[data-v-6362b7f3]{-webkit-overflow-scrolling:touch;border:none!important;overflow-x:auto;overflow-y:visible;width:100%}.table-custom table[data-v-6362b7f3]{border-collapse:separate;border-spacing:0;height:100%;min-width:100%;table-layout:auto;width:100%}.table-custom table thead th[data-v-6362b7f3]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.table-custom table thead tr[data-v-6362b7f3]{border:none!important}.table-custom table thead th[data-v-6362b7f3]:first-child{border-top-left-radius:10px}.table-custom table thead th[data-v-6362b7f3]:last-child{border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-6362b7f3]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-6362b7f3]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.custom-qty-input[data-v-6362b7f3]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-6362b7f3],.button-plus[data-v-6362b7f3]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-6362b7f3]{background-color:#dc3545;color:#fff}.button-plus[data-v-6362b7f3]{background-color:#007bff;color:#fff}.button-minus[data-v-6362b7f3]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-6362b7f3]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-6362b7f3]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-6362b7f3]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}.clickable-badge[data-v-6362b7f3]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-6362b7f3]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-6362b7f3]:active{transform:scale(.95)}.insufficient-stock-input[data-v-6362b7f3]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-6362b7f3]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.table-custom table .badge.badge-danger[data-v-6362b7f3]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.table-custom table td.auto-width[data-v-6362b7f3]{min-width:0;white-space:nowrap;width:auto}.table-custom table td.fixed-qty-column[data-v-6362b7f3]{min-width:200px;width:auto}.table-custom table td.fixed-discount-column[data-v-6362b7f3]{min-width:180px;width:auto}.table-custom table td.fixed-vat-column[data-v-6362b7f3]{min-width:150px;width:auto}@media (max-width:768px){.table-custom[data-v-6362b7f3]{-webkit-overflow-scrolling:touch;display:block;overflow-x:auto;width:100%}.table-custom table[data-v-6362b7f3]{display:block;min-width:-moz-fit-content;min-width:fit-content;width:100%}.table-custom table thead[data-v-6362b7f3]{display:table-header-group}.table-custom table tbody[data-v-6362b7f3]{display:table-row-group}.table-custom table tr[data-v-6362b7f3]{display:table-row}.table-custom table td[data-v-6362b7f3],.table-custom table th[data-v-6362b7f3]{display:table-cell;white-space:nowrap}.table-custom table td.fixed-qty-column[data-v-6362b7f3]{min-width:200px}.table-custom table td.fixed-discount-column[data-v-6362b7f3]{min-width:180px}.table-custom table td.fixed-vat-column[data-v-6362b7f3]{min-width:150px}}@media (max-width:576px){.table-custom table[data-v-6362b7f3]{min-width:-moz-fit-content;min-width:fit-content}.table-custom table tbody td[data-v-6362b7f3],.table-custom table thead th[data-v-6362b7f3]{font-size:12px;padding:6px 4px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);