"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2023],{

/***/ 32023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ invoice)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=template&id=8386e7c8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Create quotation to invoice')) + "\n          ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'quotations.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n          ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('ChartOfAccountValidation', {
    attrs: {
      "client": _vm.form.client,
      "products": _vm.form.selectedProducts,
      "type": "invoice"
    },
    on: {
      "chart-of-account-assigned": _vm.handleChartOfAccountAssigned
    }
  }), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.createInvoice.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
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
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "client-status mt-2"
  }, [!_vm.form.client.chart_of_account_id ? _c('div', {
    staticClass: "client-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client needs Chart of Account')))])]) : _c('div', {
    staticClass: "client-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client Chart of Account ready')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reference')
    },
    attrs: {
      "id": "reference",
      "type": "text",
      "name": "reference",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.reference
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reference"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Items')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
      "name": "product",
      "placeholder": _vm.$t('Search Items')
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
  }), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.allProductsHaveSalesAccounts ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Some products need Sales Accounts assigned')))])]) : _c('div', {
    staticClass: "product-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('All products have Sales Accounts assigned')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm"
  }, [_c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Item Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Quantity')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Unit Cost')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Tax')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Subtotal')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', [Number(item.inventoryCount) < Number(item.qty) ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: 'Insufficient Stock',
        expression: "'Insufficient Stock'"
      }],
      staticClass: "badge badge-danger p-2"
    }, [_c('i', {
      staticClass: "fas fa-exclamation"
    })]) : _vm._e(), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                        ")])], 1), _vm._v(" "), _c('td', [_c('div', {
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
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "1",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.inventoryCount,
        "placeholder": _vm.$t('Quantity')
      },
      domProps: {
        "value": item.qty
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i - 1, '');
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
    })])]), _vm._v(" "), _c('td', [_c('div', {
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
          return _vm.generateItemTotal(item.unitPrice, 'price', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "1",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "min": "1"
      },
      domProps: {
        "value": item.unitPrice
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i - 1, '');
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
          return _vm.generateItemTotal(item.unitPrice, 'price', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(item.unitCost)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(item.totalTax)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(item.totalPrice)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
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
      "colspan": "6"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t('Total')) + ": ")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.form.productTotalTax)))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.form.subTotal)))])])])], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [!_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discountType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discountType,
      expression: "form.discountType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discountType')
    },
    attrs: {
      "id": "discountType",
      "step": "any",
      "name": "discountType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.calculateSum],
      "keyup": _vm.calculateSum
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Fixed')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Percentage')) + "(%)")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discountType"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group",
    "class": _vm.form.discountType == 1 ? 'col-md-2' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount')) + "\n                  "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "min": "1",
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.netTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.form.discountType == 1 && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalDiscount,
      expression: "form.totalDiscount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalDiscount')
    },
    attrs: {
      "id": "totalDiscount",
      "type": "number",
      "step": "any",
      "name": "totalDiscount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalDiscount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalDiscount"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
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
      "min": "1",
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Tax')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": _vm.calculateSum
    },
    model: {
      value: _vm.form.orderTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "orderTax", $$v);
      },
      expression: "form.orderTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "orderTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalTax,
      expression: "form.totalTax"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalTax')
    },
    attrs: {
      "id": "totalTax",
      "type": "text",
      "name": "totalTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalTax", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": _vm.isSaudiArabia ? 'col-md-12' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "netTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Net Total')))]), _vm._v(" "), _c('input', {
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t('PO Reference')))]), _vm._v(" "), _c('input', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Terms')))]), _vm._v(" "), _c('input', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "addPayment"
    }
  }, [_vm._v(_vm._s(_vm.$t('Add Payment?')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.addPayment,
      expression: "form.addPayment"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('addPayment')
    },
    attrs: {
      "id": "addPayment",
      "name": "addPayment"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "addPayment", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Select an option')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yes')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('No')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "addPayment"
    }
  })], 1)]), _vm._v(" "), _vm.form.addPayment == 1 && _vm.accounts && _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
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
        }), _vm._v("\n                      " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 3023951659),
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
  }, [_vm._v(_vm._s(_vm.$t('Account needs Chart of Account')))])]) : _c('div', {
    staticClass: "account-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Account Chart of Account ready')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paidAmount,
      expression: "form.paidAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paidAmount')
    },
    attrs: {
      "id": "paidAmount",
      "type": "number",
      "step": "any",
      "name": "paidAmount",
      "min": "1",
      "max": _vm.form.netTotal,
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.paidAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paidAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paidAmount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chequeNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Cheque No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chequeNo,
      expression: "form.chequeNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('chequeNo')
    },
    attrs: {
      "id": "chequeNo",
      "type": "text",
      "step": "any",
      "name": "chequeNo",
      "placeholder": _vm.$t('Enter a cheque number')
    },
    domProps: {
      "value": _vm.form.chequeNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "chequeNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chequeNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t('Delivery Place')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deliveryPlace,
      expression: "form.deliveryPlace"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deliveryPlace')
    },
    attrs: {
      "id": "deliveryPlace",
      "type": "text",
      "name": "deliveryPlace",
      "placeholder": _vm.$t('Enter a delivery place')
    },
    domProps: {
      "value": _vm.form.deliveryPlace
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('input', {
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
    staticClass: "form-group col-md-4"
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
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
    staticClass: "form-group text-right"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    "class": {
      'btn-warning': !_vm.isFormReady
    },
    attrs: {
      "type": "submit",
      "disabled": !_vm.isFormReady || _vm.form.busy
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    "class": _vm.isFormReady ? 'fas fa-save' : 'fas fa-exclamation-triangle'
  }), _vm._v(" \n                " + _vm._s(_vm.form.busy ? _vm.$t('Saving...') : _vm.isFormReady ? _vm.$t('Save') : _vm.$t('Complete Required Fields')) + "\n              ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n              ")])])])], 1)])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=template&id=0ebdcb7a&scoped=true
var ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.validationErrors.length > 0 ? _c('div', {
    staticClass: "alert alert-warning"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('Chart of Account Validation Required')))])]), _vm._v(" "), _c('hr', {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "validation-errors"
  }, _vm._l(_vm.validationErrors, function (error, index) {
    return _c('div', {
      key: index,
      staticClass: "validation-error mb-2"
    }, [_c('div', {
      staticClass: "d-flex align-items-center justify-content-between"
    }, [_c('span', {
      staticClass: "text-danger"
    }, [_c('i', {
      staticClass: "fas fa-times-circle mr-1"
    }), _vm._v("\n          " + _vm._s(error.message) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "validation-actions"
    }, [error.editUrl ? _c('router-link', {
      staticClass: "btn btn-sm btn-outline-primary mr-2",
      attrs: {
        "to": error.editUrl,
        "target": "_blank",
        "type": "button"
      }
    }, [_c('i', {
      staticClass: "fas fa-edit mr-1"
    }), _vm._v("\n            " + _vm._s(_vm.$t('Edit')) + "\n          ")]) : _vm._e(), _vm._v(" "), error.autoAssignUrl ? _c('button', {
      staticClass: "btn btn-sm btn-outline-success",
      attrs: {
        "type": "button",
        "disabled": error.isAutoAssigning
      },
      on: {
        "click": function click($event) {
          return _vm.autoAssignChartOfAccount(error);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-magic mr-1"
    }), _vm._v("\n            " + _vm._s(error.isAutoAssigning ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n          ")]) : _vm._e()], 1)]), _vm._v(" "), error.context ? _c('small', {
      staticClass: "text-muted d-block mt-1"
    }, [_vm._v("\n        " + _vm._s(error.context) + "\n      ")]) : _vm._e()]);
  }), 0)]) : _vm._e();
};
var ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const ChartOfAccountValidationvue_type_script_lang_js = ({
  name: 'ChartOfAccountValidation',
  props: {
    client: {
      type: Object,
      "default": null
    },
    products: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    allProducts: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    supplier: {
      type: Object,
      "default": null
    },
    type: {
      type: String,
      "default": 'invoice',
      // 'invoice', 'purchase'
      validator: function validator(value) {
        return ['invoice', 'purchase'].includes(value);
      }
    }
  },
  data: function data() {
    return {
      autoAssigning: {}
    };
  },
  mounted: function mounted() {},
  watch: {
    client: {
      handler: function handler(newVal, oldVal) {
        console.log('Client changed:', {
          "new": newVal,
          old: oldVal
        });
      },
      deep: true
    },
    products: {
      handler: function handler(newVal, oldVal) {
        console.log('Products changed:', {
          "new": newVal,
          old: oldVal
        });
      },
      deep: true
    },
    allProducts: {
      handler: function handler(newVal, oldVal) {
        console.log('AllProducts changed:', {
          "new": newVal === null || newVal === void 0 ? void 0 : newVal.length,
          old: oldVal === null || oldVal === void 0 ? void 0 : oldVal.length
        });
        // Force re-computation of validation errors when allProducts changes
        this.$forceUpdate();
      },
      deep: true
    }
  },
  computed: {
    validationErrors: function validationErrors() {
      var _this = this;
      var errors = [];

      // Check if we have data to validate
      if (!this.client && !this.products) {
        return errors;
      }

      // Validate client (for invoices)
      if (this.type === 'invoice' && this.client && _typeof(this.client) === 'object') {
        if (!this.client.chart_of_account_id) {
          errors.push({
            message: this.$t('Client must have a Chart of Account assigned for journal entries'),
            field: 'client',
            entity: 'client',
            entityId: this.client.id,
            entitySlug: this.client.slug,
            editUrl: {
              name: 'clients.edit',
              params: {
                slug: this.client.slug
              }
            },
            autoAssignUrl: "/api/clients/".concat(this.client.slug, "/auto-assign-chart-of-account"),
            context: "Client: ".concat(this.client.name)
          });
        }
      }

      // Validate supplier (for purchases)
      if (this.type === 'purchase' && this.supplier && _typeof(this.supplier) === 'object') {
        if (!this.supplier.chart_of_account_id) {
          errors.push({
            message: this.$t('Supplier must have a Chart of Account assigned for journal entries'),
            field: 'supplier',
            entity: 'supplier',
            entityId: this.supplier.id,
            entitySlug: this.supplier.slug,
            editUrl: {
              name: 'suppliers.edit',
              params: {
                slug: this.supplier.slug
              }
            },
            autoAssignUrl: "/api/suppliers/".concat(this.supplier.slug, "/auto-assign-chart-of-account"),
            context: "Supplier: ".concat(this.supplier.name)
          });
        }
      }

      // Validate products
      if (this.products && Array.isArray(this.products) && this.products.length > 0) {
        console.log('Validating products array:', this.products);
        this.products.forEach(function (product, index) {
          if (product && _typeof(product) === 'object') {
            // Get the latest product data from allProducts to check chart of accounts
            var latestProduct = _this.allProducts.find(function (p) {
              return p.id === product.id;
            });
            var salesAccountId = latestProduct ? latestProduct.sales_account_id : product.sales_account_id;
            var purchaseAccountId = latestProduct ? latestProduct.purchase_account_id : product.purchase_account_id;
            console.log("Validating product ".concat(index + 1, ":"), product);
            console.log("Product ".concat(index + 1, " latest sales_account_id:"), salesAccountId);
            console.log("Product ".concat(index + 1, " latest purchase_account_id:"), purchaseAccountId);
            if (_this.type === 'invoice' && !salesAccountId) {
              console.log("Product ".concat(index + 1, " missing sales account"));
              errors.push({
                message: _this.$t('Product must have a Sales Account assigned for journal entries'),
                field: 'sales_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: {
                  name: 'products.edit',
                  params: {
                    slug: product.slug
                  }
                },
                autoAssignUrl: "/api/products/".concat(product.slug, "/auto-assign-chart-of-account"),
                context: "Product ".concat(index + 1, ": ").concat(product.name || 'Unknown')
              });
            } else if (_this.type === 'invoice') {
              console.log("Product ".concat(index + 1, " has sales account:"), salesAccountId);
            }
            if (_this.type === 'purchase' && !purchaseAccountId) {
              errors.push({
                message: _this.$t('Product must have a Purchase Account assigned for journal entries'),
                field: 'purchase_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: {
                  name: 'products.edit',
                  params: {
                    slug: product.slug
                  }
                },
                autoAssignUrl: "/api/products/".concat(product.slug, "/auto-assign-chart-of-account"),
                context: "Product ".concat(index + 1, ": ").concat(product.name || 'Unknown')
              });
            }
          }
        });
      }
      return errors;
    }
  },
  methods: {
    autoAssignChartOfAccount: function autoAssignChartOfAccount(error) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (error.autoAssignUrl) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              console.log('Starting auto-assignment for:', error);
              _this2.$set(error, 'isAutoAssigning', true);
              _context.p = 2;
              _context.n = 3;
              return axios_default().post(error.autoAssignUrl);
            case 3:
              response = _context.v;
              console.log('Auto-assignment response:', response.data);
              if (response.data.success) {
                // Show success message
                _this2.$toast.fire({
                  icon: 'success',
                  title: _this2.$t('Chart of Account assigned successfully')
                });
                console.log('Emitting chart-of-account-assigned event:', {
                  entity: error.entity,
                  entityId: error.entityId,
                  chartOfAccountId: response.data.chart_of_account_id
                });

                // Emit event to refresh data
                _this2.$emit('chart-of-account-assigned', {
                  entity: error.entity,
                  entityId: error.entityId,
                  chartOfAccountId: response.data.chart_of_account_id
                });

                // Force re-computation of validation errors
                _this2.$nextTick(function () {
                  _this2.$forceUpdate();
                });
              }
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Failed to auto-assign chart of account:', _t);
              _this2.$toast.fire({
                icon: 'error',
                title: _this2.$t('Failed to assign Chart of Account automatically')
              });
            case 5:
              _context.p = 5;
              _this2.$set(error, 'isAutoAssigning', false);
              console.log('Auto-assignment completed');
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Method to refresh validation state
    refreshValidation: function refreshValidation() {
      this.$forceUpdate();
    }
  }
});
;// ./resources/js/components/ChartOfAccountValidation.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ChartOfAccountValidationvue_type_script_lang_js = (ChartOfAccountValidationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css
var ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css = __webpack_require__(86565);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css = (ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ChartOfAccountValidation.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ChartOfAccountValidationvue_type_script_lang_js,
  ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_render,
  ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_staticRenderFns,
  false,
  null,
  "0ebdcb7a",
  null
  
)

/* harmony default export */ const ChartOfAccountValidation = (component.exports);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
function invoicevue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return invoicevue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, invoicevue_type_script_lang_js_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function invoicevue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return invoicevue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (invoicevue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, invoicevue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, invoicevue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), invoicevue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", invoicevue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), invoicevue_type_script_lang_js_regeneratorDefine2(u), invoicevue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), invoicevue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), invoicevue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (invoicevue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function invoicevue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } invoicevue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { invoicevue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, invoicevue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function invoicevue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function invoicevue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { invoicevue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { invoicevue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == invoicevue_type_script_lang_js_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != invoicevue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != invoicevue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const invoicevue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Quotation To Invoice')
    };
  },
  components: {
    ChartOfAccountValidation: ChartOfAccountValidation
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Quotation To Invoice',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Quotations',
        url: 'quotations.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        client: '',
        reference: '',
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discountType: 0,
        discount: '',
        totalDiscount: '',
        orderTax: '',
        totalTax: 0,
        productTotalTax: 0,
        transportCost: '',
        date: new Date().toISOString().slice(0, 10),
        poReference: '',
        paymentTerms: '',
        deliveryPlace: '',
        addPayment: 0,
        account: '',
        paidAmount: '',
        receiptNo: '',
        note: '',
        status: 1
      }),
      products: '',
      accounts: '',
      taxes: '',
      prefix: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    // Add computed property to check if chart of account is assigned
    hasChartOfAccount: function hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    },
    // Check if all products have sales accounts assigned
    allProductsHaveSalesAccounts: function allProductsHaveSalesAccounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(function (product) {
        return product.sales_account_id;
      });
    },
    // Check if bank account has chart of account assigned (when payment is being added)
    hasBankAccountChartOfAccount: function hasBankAccountChartOfAccount() {
      if (this.form.addPayment != 1) {
        return true; // No payment being added, so no validation needed
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },
    // Calculate due amount when payment is being added
    dueAmount: function dueAmount() {
      if (this.form.addPayment != 1 || !this.form.paidAmount) {
        return this.form.netTotal;
      }
      return Math.max(0, this.form.netTotal - Number(this.form.paidAmount));
    },
    // Check if form is ready for submission
    isFormReady: function isFormReady() {
      var _this$form$selectedPr;
      var basicRequirements = this.hasChartOfAccount && this.allProductsHaveSalesAccounts && this.hasBankAccountChartOfAccount && this.form.selectedProducts && this.form.selectedProducts.length > 0;

      // Debug logging
      console.log('Form validation debug:', {
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        hasBankAccountChartOfAccount: this.hasBankAccountChartOfAccount,
        selectedProducts: ((_this$form$selectedPr = this.form.selectedProducts) === null || _this$form$selectedPr === void 0 ? void 0 : _this$form$selectedPr.length) || 0,
        addPayment: this.form.addPayment,
        isPaymentValid: this.isPaymentValid,
        basicRequirements: basicRequirements,
        client: this.form.client,
        products: this.form.selectedProducts
      });

      // If basic requirements are not met, form is not ready
      if (!basicRequirements) {
        return false;
      }

      // If payment is enabled, check payment fields
      if (this.form.addPayment == 1) {
        return this.isPaymentValid;
      }

      // If no payment required, form is ready
      return true;
    },
    // Check if payment fields are valid when payment is enabled
    isPaymentValid: function isPaymentValid() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }

      // Check if both fields have values and paid amount is greater than 0
      return this.form.account && this.form.paidAmount && Number(this.form.paidAmount) > 0;
    },
    // Check if payment fields are filled (for warning hints)
    arePaymentFieldsFilled: function arePaymentFieldsFilled() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }

      // Only check if fields have values, not their validity
      return this.form.account && this.form.paidAmount;
    }
  }),
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.getQuotation();
    this.getAccounts();
    this.prefix = this.appInfo.productPrefix;

    // Set default status based on country
    if (this.isSaudiArabia) {
      this.form.status = 0; // Inactive for Saudi Arabia
    } else {
      this.form.status = 1; // Active for other countries
    }
  },
  methods: {
    // get the quotation
    getQuotation: function getQuotation() {
      var _this = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/quotations/' + _this.$route.params.slug);
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.form.client = data.data.client;
              _this.form.reference = data.data.reference;
              _this.form.totalTax = data.data.totalTax;
              _this.form.orderTax = data.data.quotationTax;
              _this.form.discount = data.data.discountType == 0 ? data.data.discount : data.data.discountPercentage;
              _this.form.discountPercentage = data.data.discountPercentage;
              _this.form.totalDiscount = data.data.discount;
              _this.form.transportCost = data.data.transport;
              _this.form.subTotal = data.data.subTotal;
              _this.form.deliveryPlace = data.data.deliveryPlace;
              _this.form.note = data.data.note;
              // Set status based on country after loading quotation data
              if (_this.isSaudiArabia) {
                _this.form.status = 0; // Inactive for Saudi Arabia
              } else {
                _this.form.status = data.data.status || 1; // Use quotation status or default to Active
              }
              _this.form.selectedProducts = _this.assignProducts(data.data.products);

              // Recalculate totals after loading data
              _this.calculateSum();

              // Debug logging
              console.log('Quotation data loaded:', {
                client: _this.form.client,
                selectedProducts: _this.form.selectedProducts,
                isSaudiArabia: _this.isSaudiArabia,
                status: _this.form.status,
                hasChartOfAccount: _this.hasChartOfAccount,
                allProductsHaveSalesAccounts: _this.allProductsHaveSalesAccounts,
                isFormReady: _this.isFormReady
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get all clients
    getClients: function getClients() {
      var _this2 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee2() {
        return invoicevue_type_script_lang_js_regenerator().w(function (_context2) {
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
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
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
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this4.taxes = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this5 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee5() {
        var _yield$axios$get4, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get4 = _context5.v;
              data = _yield$axios$get4.data;
              _this5.accounts = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        var productTax = product.taxType == 'Exclusive' ? product.priceWithDiscount * (product.taxRate / 100) : product.priceWithDiscount - product.priceWithDiscount / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.priceWithDiscount,
          unitCost: product.taxType == 'Exclusive' ? product.priceWithDiscount + productTax : product.priceWithDiscount,
          totalPrice: product.taxType == 'Exclusive' ? 1 * (product.priceWithDiscount + totalTax) : 1 * product.priceWithDiscount,
          productTax: product.productTax,
          totalTax: totalTax,
          sales_account_id: product.sales_account_id || null,
          selectedVatRate: product.selectedVatRate || null
        });
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      return;
    },
    // update array
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        // Calculate VAT based on tax type
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on unit price
          item.productTax = item.unitPrice * (item.taxRate / 100);
          item.totalTax = item.productTax * item.qty;
          item.totalPrice = item.qty * item.unitPrice + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in unit price
          // Calculate VAT amount from the unit price
          item.productTax = item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);
          item.totalTax = item.productTax * item.qty;
          item.totalPrice = item.qty * item.unitPrice;
        }
        item.unitCost = item.taxType == 'Exclusive' ? Number(item.unitPrice) + Number(item.productTax) : item.unitPrice;
        this.form.selectedProducts[index] = item;
      }
      this.calculateSum();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },
    // calculate sum
    calculateSum: function calculateSum() {
      // calculate subtotal
      this.form.subTotal = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalPrice).toFixed(2));
      }, 0);

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalTax).toFixed(2));
      }, 0);

      // calculate total product discount
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.discountAmount || 0)).toFixed(2));
      }, 0);

      // calculate global discount (skip for Saudi Arabia)
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          // Percentage
          globalDiscount = Number((this.form.discount / 100 * this.form.subTotal).toFixed(2));
        } else {
          // Fixed
          globalDiscount = Number(this.form.discount);
        }
      }

      // calculate invoice tax (skip for Saudi Arabia)
      this.form.totalTax = 0;
      if (!this.isSaudiArabia && this.form.orderTax) {
        this.form.totalTax = Number((this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)).toFixed(2));
      }

      // calculate final total
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Net Total = SubTotal (no global discount, no invoice tax, no transport cost)
        this.form.netTotal = this.form.subTotal;
      } else {
        // For other countries: Net Total = SubTotal - Global Discount + Invoice Tax + Transport Cost
        this.form.netTotal = Number((this.form.subTotal - globalDiscount + this.form.totalTax + Number(this.form.transportCost || 0)).toFixed(2));
      }
      return;
    },
    // get quotation products
    assignProducts: function assignProducts(quotationProducts) {
      for (var key in quotationProducts) {
        var quotationProduct = quotationProducts[key];
        this.form.selectedProducts.unshift({
          id: quotationProduct.productID,
          slug: quotationProduct.productSlug,
          name: quotationProduct.productName,
          code: quotationProduct.productCode,
          taxType: quotationProduct.taxType,
          taxRate: quotationProduct.taxRate,
          qty: quotationProduct.quantity,
          inventoryCount: quotationProduct.inventoryCount,
          avgPurchasePrice: quotationProduct.avgPurchasePrice,
          unitPrice: quotationProduct.salePrice,
          unitCost: quotationProduct.unitCost,
          totalPrice: quotationProduct.unitCostTotal,
          productTax: quotationProduct.taxAmount,
          totalTax: quotationProduct.taxAmount * quotationProduct.quantity,
          sales_account_id: quotationProduct.sales_account_id || null,
          selectedVatRate: quotationProduct.selectedVatRate || null
        });
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },
    // Validate payment fields
    validatePaymentFields: function validatePaymentFields() {
      var errors = [];
      if (this.form.addPayment == 1) {
        if (!this.form.account) {
          errors.push({
            type: "warning",
            title: this.$t("Account Required"),
            message: this.$t("Please select an account for payment."),
            field: "account"
          });
        }
        if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
          errors.push({
            type: "warning",
            title: this.$t("Paid Amount Required"),
            message: this.$t("Please enter a valid paid amount."),
            field: "paidAmount"
          });
        }
        if (Number(this.form.paidAmount) > this.form.netTotal) {
          errors.push({
            type: "warning",
            title: this.$t("Invalid Paid Amount"),
            message: this.$t("Paid amount cannot exceed the net total."),
            field: "paidAmount"
          });
        }
      }
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },
    // Validate calculations
    validateCalculations: function validateCalculations() {
      try {
        // Basic validation that calculations are reasonable
        return this.form.netTotal > 0 && this.form.subTotal >= 0 && this.form.totalTax >= 0;
      } catch (error) {
        return false;
      }
    },
    // Show multiple validation errors
    showMultipleValidationErrors: function showMultipleValidationErrors(errors) {
      if (errors.length === 1) {
        // Single error - show as regular toast
        toast.fire({
          type: errors[0].type,
          title: errors[0].title,
          text: errors[0].message,
          timer: errors[0].timer || 5000,
          timerProgressBar: errors[0].timerProgressBar || false
        });
      } else {
        // Multiple errors - show as alert with list
        var errorList = errors.map(function (err) {
          return "\u2022 ".concat(err.message);
        }).join('\n');
        sweetalert2_all_default().fire({
          type: 'warning',
          title: this.$t('Validation Errors'),
          text: this.$t('Please fix the following issues:'),
          html: "<div style=\"text-align: left; margin-top: 10px;\">".concat(errorList, "</div>"),
          confirmButtonText: this.$t('OK'),
          timer: 10000,
          timerProgressBar: true
        });
      }
    },
    // Format form values before submission
    formatFormValues: function formatFormValues() {
      // Ensure all monetary values are properly formatted to 2 decimal places
      if (this.form.discount) {
        this.form.discount = Number(this.form.discount).toFixed(2);
      }
      if (this.form.transportCost) {
        this.form.transportCost = Number(this.form.transportCost).toFixed(2);
      }
      if (this.form.paidAmount) {
        this.form.paidAmount = Number(this.form.paidAmount).toFixed(2);
      }

      // Format product values
      if (this.form.selectedProducts) {
        this.form.selectedProducts.forEach(function (product) {
          product.unitPrice = Number(product.unitPrice).toFixed(2);
          product.totalPrice = Number(product.totalPrice).toFixed(2);
          product.totalTax = Number(product.totalTax).toFixed(2);
          product.productTax = Number(product.productTax).toFixed(2);
        });
      }
    },
    // create invoice
    createInvoice: function createInvoice() {
      var _this6 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee6() {
        var validationErrors, productsWithoutSalesAccount, productNames, paymentValidation, _t;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              console.log('createInvoice method called');
              _context6.p = 1;
              // Ensure all monetary values are properly formatted to 2 decimal places before submission
              _this6.formatFormValues();

              // Collect all validation errors before submission
              validationErrors = [];
              if (!_this6.form.client || !_this6.form.client.chart_of_account_id) {
                validationErrors.push({
                  type: "warning",
                  title: _this6.$t("Chart of Account Required"),
                  message: _this6.$t("Client must have a Chart of Account assigned before creating an invoice."),
                  field: "client"
                });
              }
              if (!_this6.form.selectedProducts || _this6.form.selectedProducts.length === 0) {
                validationErrors.push({
                  type: "warning",
                  title: _this6.$t("No Products Selected"),
                  message: _this6.$t("Please select at least one product to create an invoice."),
                  field: "selectedProducts"
                });
              }

              // Validate that all products have sales accounts assigned
              productsWithoutSalesAccount = _this6.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (productsWithoutSalesAccount.length > 0) {
                productNames = productsWithoutSalesAccount.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this6.$t("Product Chart of Account Required"),
                  message: _this6.$t("The following products must have Sales Accounts assigned: ") + productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // Validate payment fields when "Add Payment" is set to "Yes"
              paymentValidation = _this6.validatePaymentFields();
              if (!paymentValidation.isValid) {
                validationErrors.push.apply(validationErrors, _toConsumableArray(paymentValidation.errors));
              }

              // Validate that all calculations are correct
              if (!_this6.validateCalculations()) {
                validationErrors.push({
                  type: "error",
                  title: _this6.$t("Calculation Error"),
                  message: _this6.$t("There was an error in the calculations. Please refresh the page and try again."),
                  field: "calculations"
                });
              }

              // If there are validation errors, show them all and return
              if (!(validationErrors.length > 0)) {
                _context6.n = 2;
                break;
              }
              _this6.showMultipleValidationErrors(validationErrors);
              return _context6.a(2);
            case 2:
              _context6.n = 3;
              return _this6.form.post(window.location.origin + '/api/invoices').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this6.$t('Invoice created successfully')
                });
                _this6.$router.push({
                  name: 'invoices.index'
                });
              })["catch"](function (error) {
                console.error('Invoice creation error:', error);
                toast.fire({
                  type: 'error',
                  title: _this6.$t('Opps...something went wrong')
                });
              });
            case 3:
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t = _context6.v;
              console.error('Unexpected error:', _t);
              toast.fire({
                type: 'error',
                title: _this6.$t('Opps...something went wrong')
              });
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 4]]);
      }))();
    },
    // Handle chart of account assignment
    handleChartOfAccountAssigned: function handleChartOfAccountAssigned(data) {
      if (data.entity === 'client') {
        // Refresh client data
        this.getClients();
      } else if (data.entity === 'product') {
        // Refresh product data
        this.getProducts();
      }
    }
  }
});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_invoicevue_type_script_lang_js = (invoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=8386e7c8&prod&lang=scss&scoped=true
var invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true = __webpack_require__(32582);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=8386e7c8&prod&lang=scss&scoped=true

            

var invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true_options = {};

invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true_options.insert = "head";
invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true_options.singleton = false;

var invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true/* default */.A, invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true_options);



/* harmony default export */ const quotations_invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true = (invoicevue_type_style_index_0_id_8386e7c8_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=8386e7c8&prod&lang=scss&scoped=true

;// ./resources/js/pages/sales/quotations/invoice.vue



;


/* normalize component */

var invoice_component = (0,componentNormalizer/* default */.A)(
  quotations_invoicevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "8386e7c8",
  null
  
)

/* harmony default export */ const invoice = (invoice_component.exports);

/***/ }),

/***/ 32582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".custom-qty-input[data-v-8386e7c8]{display:flex;flex-wrap:nowrap}.account-status[data-v-8386e7c8],.client-status[data-v-8386e7c8],.product-status[data-v-8386e7c8]{font-size:.875rem}.account-status .account-warning[data-v-8386e7c8],.account-status .client-warning[data-v-8386e7c8],.account-status .product-warning[data-v-8386e7c8],.client-status .account-warning[data-v-8386e7c8],.client-status .client-warning[data-v-8386e7c8],.client-status .product-warning[data-v-8386e7c8],.product-status .account-warning[data-v-8386e7c8],.product-status .client-warning[data-v-8386e7c8],.product-status .product-warning[data-v-8386e7c8]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-8386e7c8],.account-status .client-success[data-v-8386e7c8],.account-status .product-success[data-v-8386e7c8],.client-status .account-success[data-v-8386e7c8],.client-status .client-success[data-v-8386e7c8],.client-status .product-success[data-v-8386e7c8],.product-status .account-success[data-v-8386e7c8],.product-status .client-success[data-v-8386e7c8],.product-status .product-success[data-v-8386e7c8]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}.btn-warning[data-v-8386e7c8]{background-color:#ffc107!important;border-color:#ffc107!important;color:#212529!important}.btn-warning[data-v-8386e7c8]:hover{background-color:#e0a800!important;border-color:#d39e00!important}.btn-primary[data-v-8386e7c8]{background:#2ab930!important}.btn-primary[data-v-8386e7c8]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".validation-errors[data-v-0ebdcb7a]{max-height:300px;overflow-y:auto}.validation-error[data-v-0ebdcb7a]{background-color:rgba(255,193,7,.1);border-left:3px solid #ffc107;border-radius:4px;padding:8px}.validation-actions[data-v-0ebdcb7a]{display:flex;gap:8px}.alert-warning[data-v-0ebdcb7a]{background-color:#fff3cd;border-color:#ffc107;color:#856404}.alert-warning hr[data-v-0ebdcb7a]{border-color:#ffeaa7}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);