"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1702],{

/***/ 41702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=template&id=3de8da47&scoped=true
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
        name: 'purchase-order.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'purchaseOrderEditForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    attrs: {
      "id": "purchaseOrderEditForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePurchaseOrder.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "purchaseDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseDate,
      expression: "form.purchaseDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseDate')
    },
    attrs: {
      "id": "purchaseDate",
      "type": "date",
      "name": "purchaseDate"
    },
    domProps: {
      "value": _vm.form.purchaseDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "poDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poDate,
      expression: "form.poDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poDate')
    },
    attrs: {
      "id": "poDate",
      "type": "date",
      "name": "poDate"
    },
    domProps: {
      "value": _vm.form.poDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poDate"
    }
  })], 1)]), _vm._v(" "), _vm.items && _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t("Supplier")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('supplier')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "clearable": false,
      "name": "supplier",
      "placeholder": _vm.$t('Select a supplier')
    },
    on: {
      "input": _vm.onSupplierChange
    },
    model: {
      value: _vm.form.supplier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "supplier", $$v);
      },
      expression: "form.supplier"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplier"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Reference")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poReference,
      expression: "form.poReference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poReference')
    },
    attrs: {
      "id": "poReference",
      "type": "text",
      "step": "any",
      "name": "poReference",
      "placeholder": _vm.$t('Enter PO reference')
    },
    domProps: {
      "value": _vm.form.poReference
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Items")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
      "clearable": false,
      "name": "product",
      "placeholder": _vm.$t('Search products')
    },
    on: {
      "input": function input($event) {
        return _vm.storeProduct(_vm.form.product);
      }
    },
    model: {
      value: _vm.form.product,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "product", $$v);
      },
      expression: "form.product"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center invoices-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Quantity")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Purchase Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticStyle: {
        "min-width": "50px"
      }
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.qty,
        expression: "item.qty",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "purchaseQty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1"
      },
      domProps: {
        "value": item.qty
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "qty", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.generateItemTotal(item.qty, 'qty', i - 1, '');
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
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.unitPrice,
        expression: "item.unitPrice",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "min": "0"
      },
      domProps: {
        "value": item.unitPrice
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "unitPrice", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.generateItemTotal(item.unitPrice, 'price', i - 1, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s((item.originalPrice || item.unitPrice) * item.qty) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
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
      staticClass: "form-control form-control-sm border-0",
      staticStyle: {
        "width": "60px"
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
          return _vm.calculateProductDiscount(i - 1);
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
      staticClass: "form-control form-control-sm border-0",
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : (item.originalPrice || item.unitPrice) * item.qty,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.calculateProductDiscount(i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.calculateProductDiscount(i - 1);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.getTotalAfterDiscount(item)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "150px"
      }
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm border-0",
      staticStyle: {
        "min-width": "120px"
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
          return _vm.calculateProductVat(i - 1);
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
      }, [_vm._v(_vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)")]);
    })], 2)]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center"
    }, [_vm._v(_vm._s(item.productTax) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.getTotalWithVAT(item)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      staticStyle: {
        "min-width": "80px"
      }
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeItem(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])])]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.getTotalDiscountSum()) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.getSubTotalAfterDiscount()) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.getTotalVATSum()) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.getTotalWithVATSum()) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "netTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t("Net Total")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.netTotal,
      expression: "form.netTotal"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('netTotal')
    },
    attrs: {
      "id": "netTotal",
      "type": "number",
      "step": "any",
      "name": "netTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.netTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "netTotal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "netTotal"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transport Cost")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('transportCost')
    },
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Terms")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentTerms,
      expression: "form.paymentTerms"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentTerms')
    },
    attrs: {
      "id": "paymentTerms",
      "type": "text",
      "name": "paymentTerms",
      "placeholder": _vm.$t('Enter payment terms')
    },
    domProps: {
      "value": _vm.form.paymentTerms
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-8"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
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
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": _vm.form.busy
    },
    on: {
      "click": _vm.updatePurchaseOrder
    }
  }, [_c('i', {
    "class": _vm.form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'
  }), _vm._v("\n                  " + _vm._s(_vm.form.busy ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'purchase-order.show',
        params: {
          slug: _vm.$route.params.slug
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-eye"
  }), _vm._v(" " + _vm._s(_vm.$t("View")) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=script&lang=js
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



/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Purchase Order")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Edit Purchase Order",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Purchase Orders",
        url: "purchase-order.index"
      }, {
        name: "Edit",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        supplier: null,
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discount: 0,
        transportCost: 0,
        totalProductTax: 0,
        orderTax: null,
        totalTax: 0,
        poReference: "",
        paymentTerms: "",
        poDate: new Date().toISOString().slice(0, 10),
        purchaseDate: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        totalDiscount: 0,
        product: null
      }),
      products: "",
      taxes: "",
      prefix: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.originalPrice || item.unitPrice) * item.qty;
      }, 0);
    }
  }),
  created: function created() {
    this.prefix = this.appInfo.productPrefix;
    this.getSuppliers();
    this.getProducts();
    this.getTaxes();
    this.loadPurchaseOrder();
  },
  methods: {
    getSuppliers: function getSuppliers() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch("operations/allData", {
                path: "/api/all-suppliers"
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    getProducts: function getProducts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products-not-service");
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.products = data.data;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    getTaxes: function getTaxes() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this3.taxes = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    loadPurchaseOrder: function loadPurchaseOrder() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data, po, lines;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/purchase-order/" + _this4.$route.params.slug);
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              po = data.data || {}; // Supplier
              _this4.form.supplier = po.supplier || null;
              // Map lines
              lines = po.purchase_order_products || [];
              _this4.form.selectedProducts = lines.map(function (l) {
                var product = l.product || {};
                var qty = Number(l.quantity || 1);
                var unit = Number(l.purchase_price || product.avgPurchasePrice || 1);
                var discountAmount = Number(l.discount_amount || 0);
                var discountType = l.discount_type || 'fixed';
                var lineTotal = unit * qty;
                var totalAfterDiscount = discountType === 'percentage' ? lineTotal - lineTotal * Number(l.discount || 0) / 100 : lineTotal - discountAmount;
                var vatAmount = Number(l.tax_amount || 0);
                return {
                  id: product.id,
                  slug: product.slug,
                  name: product.name,
                  code: product.code,
                  qty: qty,
                  unitPrice: product.regularPrice,
                  originalPrice: unit,
                  discount: Number(l.discount || 0),
                  discountType: discountType,
                  discountAmount: discountAmount,
                  selectedVatRate: _this4.findMatchingVatRate(product.productTax) || null,
                  productTax: vatAmount,
                  totalTax: vatAmount,
                  totalPrice: Number((totalAfterDiscount + vatAmount).toFixed(2))
                };
              });
              // Header fields
              _this4.form.subTotal = Number(po.sub_total || 0);
              _this4.form.netTotal = Number(po.net_total || 0);
              _this4.form.discount = Number(po.discount || 0);
              _this4.form.transportCost = Number(po.transport || 0);
              _this4.form.totalProductTax = Number(po.total_tax || 0);
              _this4.form.poReference = po.po_reference || '';
              _this4.form.paymentTerms = po.payment_terms || '';
              _this4.form.poDate = po.po_date || _this4.form.poDate;
              _this4.form.purchaseDate = po.purchase_date || _this4.form.purchaseDate;
              _this4.form.note = po.note || '';
              _this4.form.status = po.status !== undefined ? po.status : 1;
              // Recalc
              _this4.calculateSum();
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var quantity = 1;
      var purchasePrice = Number(product.sellingPrice) > 0 ? Number(product.sellingPrice) : Number(product.regularPrice) > 0 ? Number(product.regularPrice) : Number(product.avgPurchasePrice) > 0 ? Number(product.avgPurchasePrice) : 1;
      if (index === -1) {
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          unitPrice: product.regularPrice,
          originalPrice: purchasePrice,
          discount: 0,
          discountType: 'fixed',
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
          productTax: 0,
          totalTax: 0,
          totalPrice: purchasePrice * quantity
        });
        this.generateItemTotal(quantity, 'qty', 0, '');
        if (this.taxes && this.taxes.length > 0) this.calculateProductVat(0);
        this.calculateSum();
      }
    },
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      if (type === 'qty') {
        var newQty = value;
        if (action === 'increment') newQty = Number(item.qty) + 1;else if (action === 'decrement') newQty = Math.max(1, Number(item.qty) - 1);
        this.$set(item, 'qty', newQty);
      } else if (type === 'price') {
        var newPrice = value;
        if (action === 'increment') newPrice = Number(item.unitPrice) + 1;else if (action === 'decrement') newPrice = Math.max(0, Number(item.unitPrice) - 1);
        this.$set(item, 'unitPrice', newPrice);
        this.$set(item, 'originalPrice', newPrice);
      }
      if (item.discount > 0) {
        if (item.discountType === 'percentage') {
          this.$set(item, 'discountAmount', Number((item.unitPrice * item.qty * item.discount / 100).toFixed(2)));
        } else {
          this.$set(item, 'discountAmount', Number(item.discount || 0));
        }
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      var total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === 'percentage') {
        item.discountAmount = Number((total * (item.discount || 0) / 100).toFixed(2));
      } else {
        item.discountAmount = Number(item.discount || 0);
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductVat: function calculateProductVat(index) {
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var item = this.form.selectedProducts[index];
      if (!item) return;
      var lineTotal = Number(((item.originalPrice || item.unitPrice) * item.qty).toFixed(2));
      var lineAfterDiscount;
      if (item.discountType === 'percentage') lineAfterDiscount = Number((lineTotal - lineTotal * (item.discount || 0) / 100).toFixed(2));else lineAfterDiscount = Number((lineTotal - (item.discountAmount || 0)).toFixed(2));
      var vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate != null) vatRate = Number(item.selectedVatRate.rate);else if (item.taxRate != null) vatRate = Number(item.taxRate);
      if (isNaN(vatRate) || vatRate < 0) vatRate = 0;
      item.productTax = Number((lineAfterDiscount * vatRate / 100).toFixed(2));
      item.totalTax = item.productTax;
      item.totalPrice = Number((lineAfterDiscount + item.productTax).toFixed(2));
    },
    getTotalAfterDiscount: function getTotalAfterDiscount(item) {
      var total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === 'percentage') return total - total * (item.discount || 0) / 100;
      return total - (item.discountAmount || 0);
    },
    getSubTotalAfterDiscount: function getSubTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce(function (prev, cur) {
        var lineTotal = (cur.originalPrice || cur.unitPrice) * cur.qty;
        var lineAfter = cur.discountType === 'percentage' ? lineTotal - lineTotal * (cur.discount || 0) / 100 : lineTotal - (cur.discountAmount || 0);
        return Number((prev + lineAfter).toFixed(2));
      }, 0);
    },
    getTotalWithVAT: function getTotalWithVAT(item) {
      var totalAfterDiscount = this.getTotalAfterDiscount(item);
      var vatAmount = item.productTax || 0;
      return Number((totalAfterDiscount + vatAmount).toFixed(2));
    },
    getTotalWithVATSum: function getTotalWithVATSum() {
      var _this5 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + _this5.getTotalWithVAT(item)).toFixed(2));
      }, 0);
    },
    getTotalVATSum: function getTotalVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + (item.productTax || 0)).toFixed(2));
      }, 0);
    },
    getTotalDiscountSum: function getTotalDiscountSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce(function (total, item) {
        return Number((total + (item.discountAmount || 0)).toFixed(2));
      }, 0);
    },
    updateNetTotal: function updateNetTotal() {
      var totalWithVAT = this.getTotalWithVATSum();
      this.form.netTotal = Number((totalWithVAT + Number(this.form.transportCost || 0)).toFixed(2));
    },
    calculateSum: function calculateSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.form.totalDiscount = 0;
        this.form.subTotal = 0;
        this.form.totalProductTax = 0;
        this.form.netTotal = 0;
        return;
      }
      this.form.totalDiscount = this.getTotalDiscountSum();
      var subTotalAfterDiscount = this.getSubTotalAfterDiscount();
      this.form.totalProductTax = this.getTotalVATSum();
      this.form.subTotal = subTotalAfterDiscount;
      this.updateNetTotal();
    },
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    },
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      if (_typeof(productTax) === 'object' && productTax.rate !== undefined) return this.taxes.find(function (tax) {
        return tax.rate === productTax.rate;
      });
      if (typeof productTax === 'number') return this.taxes.find(function (tax) {
        return tax.rate === productTax;
      });
      return null;
    },
    toWord: function toWord() {
      var amount = this.totalUnitPrice || 0;
      if (isNaN(amount) || amount < 0) return 'Invalid Amount';
      if (amount === 0) return 'Zero Only';
      return amount.toFixed(2);
    },
    onSupplierChange: function onSupplierChange() {
      this.form.errors.clear('supplier');
    },
    updatePurchaseOrder: function updatePurchaseOrder() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var validationErrors, errorList, formData, _t;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!_this6.form.busy) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              // Basic validation
              validationErrors = [];
              if (!_this6.form.supplier) validationErrors.push(_this6.$t("Please select a supplier"));
              if (!_this6.form.selectedProducts || _this6.form.selectedProducts.length === 0) validationErrors.push(_this6.$t("Please add at least one product"));
              if (!(validationErrors.length > 0)) {
                _context5.n = 2;
                break;
              }
              errorList = validationErrors.map(function (e) {
                return "\u2022 ".concat(e);
              }).join('\n');
              toast.fire({
                type: 'error',
                title: "".concat(_this6.$t('Validation Error'), ":\n\n").concat(errorList),
                timer: 8000,
                timerProgressBar: true
              });
              return _context5.a(2);
            case 2:
              _context5.p = 2;
              _this6.form.errors.clear();
              formData = {
                supplier: _this6.form.supplier,
                selectedProducts: _this6.form.selectedProducts.map(function (product) {
                  return {
                    id: product.id,
                    quantity: product.qty,
                    unitPrice: product.unitPrice,
                    discount: product.discount || 0,
                    discount_type: product.discountType || 'fixed',
                    discount_amount: product.discountAmount || 0,
                    productTax: product.productTax || 0,
                    // Include VAT amount
                    totalTax: product.totalTax || 0,
                    // Include total VAT amount
                    selectedVatRate: product.selectedVatRate // Include VAT rate object
                  };
                }),
                subTotal: _this6.form.subTotal,
                netTotal: _this6.form.netTotal,
                discount: _this6.form.discount,
                transport: _this6.form.transportCost || 0,
                totalProductTax: _this6.form.totalProductTax,
                poReference: _this6.form.poReference || '',
                paymentTerms: _this6.form.paymentTerms || '',
                poDate: _this6.form.poDate,
                purchaseDate: _this6.form.purchaseDate,
                note: _this6.form.note,
                status: _this6.form.status
              };
              _context5.n = 3;
              return _this6.$axios.put("/api/purchase-order/".concat(_this6.$route.params.slug), formData);
            case 3:
              toast.fire({
                type: 'success',
                title: _this6.$t('Purchase order updated successfully')
              });
              _this6.$router.push({
                name: 'purchase-order.show',
                params: {
                  slug: _this6.$route.params.slug
                }
              });
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t = _context5.v;
              ErrorHandler && ErrorHandler.handleApiError ? ErrorHandler.handleApiError(_t, {
                showValidationErrors: true
              }) : console.error(_t);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[2, 4]]);
      }))();
    }
  }
});
;// ./resources/js/pages/purchase-order/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const purchase_order_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=3de8da47&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_3de8da47_prod_scoped_true_lang_css = __webpack_require__(81931);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=3de8da47&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_3de8da47_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const purchase_order_editvue_type_style_index_0_id_3de8da47_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_3de8da47_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=3de8da47&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchase-order/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  purchase_order_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3de8da47",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 81931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-3de8da47]{margin-bottom:15px}.footer-buttons[data-v-3de8da47]{display:flex;gap:10px}.footer-buttons .btn[data-v-3de8da47]{margin-right:10px}.footer-buttons .btn[data-v-3de8da47]:last-child{margin-right:0}.create-btn[data-v-3de8da47]{padding:11px}.button-plus.icon-shape.icon-sm.btn-primary[data-v-3de8da47]{padding:0}.btn-primary[data-v-3de8da47]{background:#2ab930!important}.btn-primary[data-v-3de8da47]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-3de8da47]:disabled{box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}.table-custom[data-v-3de8da47]{border:none!important}.invoices-create-table[data-v-3de8da47]{border-collapse:separate;border-spacing:0}.invoices-create-table thead th[data-v-3de8da47]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.btn-group.c-w-100[data-v-3de8da47]{gap:10px}.card[data-v-3de8da47]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-3de8da47]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-3de8da47]{background:#fff!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);