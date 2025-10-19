"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8264],{

/***/ 8264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ returns_form)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/form.vue?vue&type=template&id=517ed03e&scoped=true
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
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": _vm.formId,
      "title": _vm.isEdit ? _vm.$t('Save changes') : _vm.$t('Save')
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": _vm.formId,
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.items && !_vm.isEdit ? _c('div', {
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
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.isEdit ? _c('div', {
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
      "for": "clientName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Client')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientNameReadonly,
      expression: "clientNameReadonly"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "clientName",
      "readonly": ""
    },
    domProps: {
      "value": _vm.clientNameReadonly
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.clientNameReadonly = $event.target.value;
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.form.client && _vm.clientInvoices && !_vm.isEdit ? _c('div', {
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
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_vm.form.errors.errors && _vm.form.errors.errors.selectedProducts ? _c('div', {
    staticClass: "w-100 m-auto"
  }, _vm._l(_vm.form.errors.errors.selectedProducts, function (msg, i) {
    return _c('div', {
      key: i,
      staticClass: "callout callout-danger"
    }, [_c('p', [_c('i', {
      staticClass: "icon fas fa-ban"
    }), _vm._v(" " + _vm._s(msg))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto",
    staticStyle: {
      "max-width": "100%"
    }
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center invoices-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Item Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total After Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total with VAT')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('tr', {
      key: "item-".concat(index)
    }, [_c('td', {
      staticStyle: {
        "min-width": "30px"
      }
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "60px"
      }
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('div', {
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
    }, [_vm._v(_vm._s(item.name))]) : _c('span', [_vm._v(_vm._s(item.name))])], 1)])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
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
          _vm.updateItem(Math.max(0, item.returnQty - 1), index);
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.returnQty,
        expression: "item.returnQty",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "returnQty-".concat(index + 1),
        "name": "quantity",
        "min": "0",
        "max": item.maxQty,
        "placeholder": "Return Qty"
      },
      domProps: {
        "value": item.returnQty
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "returnQty", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.updateItemReactively(item);
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
          _vm.updateItem(Math.min(item.maxQty, Number(item.returnQty) + 1), index);
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.unitCost)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "80px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalBeforeDiscount)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
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
          return _vm.calculateProductDiscount(index);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": "fixed"
      }
    }, [_vm._v(_vm._s(_vm.$t('Fixed')))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "percentage"
      }
    }, [_vm._v(_vm._s(_vm.$t('%')))])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discount,
        expression: "item.discount"
      }],
      staticClass: "form-control form-control-sm",
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : item.unitCost * item.qty,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.calculateProductDiscount(index);
        },
        "keyup": function keyup($event) {
          return _vm.calculateProductDiscount(index);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "80px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalAfterDiscount)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm flex-grow-1",
      staticStyle: {
        "min-width": "80px"
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
          return _vm.calculateProductVat(index);
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
    })], 2)])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "60px"
      }
    }, [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.productTax)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "80px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      staticStyle: {
        "min-width": "50px"
      }
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeItem(item, index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])])]);
  }), _vm._v(" "), _c('tr', {
    key: "totals"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "4"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t('Total')) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalTotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
  }), _vm._v(" " + _vm._s(_vm.isEdit ? _vm.$t('Save changes') : _vm.$t('Save')) + "\n                ")]), _vm._v(" "), _c('button', {
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// ./resources/js/pages/sales/returns/form.vue?vue&type=template&id=517ed03e&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/form.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const formvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.isEdit ? this.$t('Edit Invoice Return') : this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return')
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
        taxAmount: 0,
        discountTotal: 0,
        // New fields for display
        totalDiscount: 0,
        transportCost: 0
      }),
      products: '',
      accounts: '',
      clientInvoices: '',
      prefix: '',
      taxes: '',
      loadedReturn: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    isEdit: function isEdit() {
      return this.$route.name === 'invoiceReturns.edit' || !!this.$route.params.slug;
    },
    clientNameReadonly: function clientNameReadonly() {
      var _this$form$client;
      return ((_this$form$client = this.form.client) === null || _this$form$client === void 0 ? void 0 : _this$form$client.name) || '';
    },
    isSaudiArabia: function isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    formId: function formId() {
      return this.isEdit ? 'invoiceReturnEditUnifiedForm' : 'invoiceReturnCreateUnifiedForm';
    },
    hasBankAccountChartOfAccount: function hasBankAccountChartOfAccount() {
      if (this.form.returnAmount <= 0) return true;
      return this.form.account && this.form.account.chartOfAccountId;
    },
    dynamicBreadcrumbsCurrent: function dynamicBreadcrumbsCurrent() {
      if (this.isEdit) return this.$t('Edit Invoice Return');
      return this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return');
    },
    dynamicBreadcrumbs: function dynamicBreadcrumbs() {
      return [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: this.isSaudiArabia ? this.$t('Credit notes') : this.$t('Invoice Returns'),
        url: 'invoiceReturns.index'
      }, {
        name: this.isEdit ? 'Edit' : 'Create',
        url: ''
      }];
    },
    // Totals (same as create.vue)
    totalUnitPrice: function totalUnitPrice() {
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
      return this.formatToTwoDecimals(this.form.totalDiscount);
    },
    formattedTransportCost: function formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.transportCost);
    },
    formattedInvoiceTax: function formattedInvoiceTax() {
      return this.formatToTwoDecimals(this.form.invoiceTax);
    },
    formattedAvailableBalance: function formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance);
    }
  }),
  watch: {
    'form.selectedProducts': {
      handler: function handler(newVal) {
        if (newVal && newVal.length > 0) this.calculateSum();
      },
      deep: true
    },
    'form.newSubTotal': {
      handler: function handler(newVal) {
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
            return _this.getClients();
          case 1:
            _this.getProducts();
            _this.getAccounts();
            _this.getTaxes();
            _this.prefix = _this.appInfo.productPrefix;
            // default status by country
            _this.form.status = _this.isSaudiArabia ? 0 : 1;
            if (_this.isEdit) {
              _this.loadExistingReturn();
            }
            // handle pre-selection from query on create
            if (!_this.isEdit) {
              _this.handlePreSelection();
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
    // handle pre-selection from query parameters (client and/or invoice)
    handlePreSelection: function handlePreSelection() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this3$$route, _this3$$route2, _this3$$route3;
        var clientSlug, invoiceSlug, invoiceData, _response$data, response, _this3$items, attempts, maxAttempts, matchedClient, _this3$clientInvoices, _resp$data, _invoiceData, resp, matchedInvoice, _matchedInvoice, _t, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              clientSlug = (_this3$$route = _this3.$route) === null || _this3$$route === void 0 || (_this3$$route = _this3$$route.query) === null || _this3$$route === void 0 ? void 0 : _this3$$route.client;
              invoiceSlug = (_this3$$route2 = _this3.$route) === null || _this3$$route2 === void 0 || (_this3$$route2 = _this3$$route2.query) === null || _this3$$route2 === void 0 ? void 0 : _this3$$route2.invoice;
              invoiceData = null;
              console.log('Preselection starting:', {
                clientSlug: clientSlug,
                invoiceSlug: invoiceSlug,
                query: (_this3$$route3 = _this3.$route) === null || _this3$$route3 === void 0 ? void 0 : _this3$$route3.query
              });
              _context3.p = 1;
              if (!(invoiceSlug && !clientSlug)) {
                _context3.n = 3;
                break;
              }
              console.log('Fetching invoice to get client:', invoiceSlug);
              _context3.n = 2;
              return axios_default().get("/api/invoices/".concat(invoiceSlug));
            case 2:
              response = _context3.v;
              invoiceData = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data;
              if (invoiceData && invoiceData.client) {
                clientSlug = invoiceData.client.slug;
                console.log('Found client from invoice:', clientSlug);
              }
            case 3:
              if (!clientSlug) {
                _context3.n = 16;
                break;
              }
              console.log('Looking for client:', clientSlug);
              // wait for clients to be available in store
              attempts = 0;
              maxAttempts = 10;
            case 4:
              if (!(attempts < maxAttempts)) {
                _context3.n = 7;
                break;
              }
              if (!(_this3.items && Array.isArray(_this3.items) && _this3.items.length > 0)) {
                _context3.n = 5;
                break;
              }
              return _context3.a(3, 7);
            case 5:
              _context3.n = 6;
              return new Promise(function (r) {
                return setTimeout(r, 200);
              });
            case 6:
              attempts++;
              _context3.n = 4;
              break;
            case 7:
              console.log('Available clients:', (_this3$items = _this3.items) === null || _this3$items === void 0 ? void 0 : _this3$items.length);
              matchedClient = (_this3.items || []).find(function (c) {
                return c.slug === clientSlug;
              });
              if (!matchedClient) {
                _context3.n = 14;
                break;
              }
              console.log('Found client, setting form.client:', matchedClient);
              _this3.form.client = matchedClient;
              _context3.n = 8;
              return _this3.assignInvoices();
            case 8:
              console.log('Client invoices loaded:', (_this3$clientInvoices = _this3.clientInvoices) === null || _this3$clientInvoices === void 0 ? void 0 : _this3$clientInvoices.length);

              // if invoice slug was provided, try to pick that invoice
              if (!invoiceSlug) {
                _context3.n = 13;
                break;
              }
              if (invoiceData) {
                _context3.n = 12;
                break;
              }
              _context3.p = 9;
              _context3.n = 10;
              return axios_default().get("/api/invoices/".concat(invoiceSlug));
            case 10:
              resp = _context3.v;
              invoiceData = (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.data;
              console.log('Fetched invoice data:', (_invoiceData = invoiceData) === null || _invoiceData === void 0 ? void 0 : _invoiceData.id);
              _context3.n = 12;
              break;
            case 11:
              _context3.p = 11;
              _t = _context3.v;
              console.warn('Failed to fetch invoice:', _t);
            case 12:
              // pick from clientInvoices by slug match; fallback by id if available
              matchedInvoice = (_this3.clientInvoices || []).find(function (inv) {
                var _invoiceData2;
                return inv.slug === invoiceSlug || inv.id === ((_invoiceData2 = invoiceData) === null || _invoiceData2 === void 0 ? void 0 : _invoiceData2.id);
              });
              if (matchedInvoice) {
                console.log('Found invoice in clientInvoices:', matchedInvoice);
                _this3.form.invoice = matchedInvoice;
                _this3.storeProducts();
              } else {
                // if not found in clientInvoices, try using the full invoice data directly
                if (invoiceData) {
                  console.log('Using full invoice data directly:', invoiceData);
                  _this3.form.invoice = invoiceData;
                  _this3.storeProducts();
                } else {
                  console.warn('No invoice found for slug:', invoiceSlug);
                }
              }
            case 13:
              _context3.n = 16;
              break;
            case 14:
              console.warn('Client not found in store:', clientSlug);
              // fallback: if we already fetched invoiceData with client, use it directly
              if (!(invoiceData && invoiceData.client)) {
                _context3.n = 16;
                break;
              }
              _this3.form.client = invoiceData.client;
              _context3.n = 15;
              return _this3.assignInvoices();
            case 15:
              if (invoiceSlug) {
                _matchedInvoice = (_this3.clientInvoices || []).find(function (inv) {
                  var _invoiceData3;
                  return inv.slug === invoiceSlug || inv.id === ((_invoiceData3 = invoiceData) === null || _invoiceData3 === void 0 ? void 0 : _invoiceData3.id);
                });
                if (_matchedInvoice) {
                  _this3.form.invoice = _matchedInvoice;
                  _this3.storeProducts();
                } else if (invoiceData) {
                  _this3.form.invoice = invoiceData;
                  _this3.storeProducts();
                }
              }
            case 16:
              _context3.n = 18;
              break;
            case 17:
              _context3.p = 17;
              _t2 = _context3.v;
              console.warn('Preselection failed:', _t2);
              // silent fail – preselection is best-effort
            case 18:
              return _context3.a(2);
          }
        }, _callee3, null, [[9, 11], [1, 17]]);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 1:
              _yield$axios$get = _context4.v;
              data = _yield$axios$get.data;
              _this4.products = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get2, data, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get2 = _context5.v;
              data = _yield$axios$get2.data;
              _this5.taxes = data.data;
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t3 = _context5.v;
              _this5.taxes = [];
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get3 = _context6.v;
              data = _yield$axios$get3.data;
              _this6.accounts = data.data;
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // assign invoices
    assignInvoices: function assignInvoices() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _this7.form.selectedProducts = [];
              _this7.form.invoice = '';
              if (!_this7.form.client) {
                _context7.n = 2;
                break;
              }
              _context7.n = 1;
              return axios_default().post(window.location.origin + '/api/client/filter-invoices', {
                products: _this7.form.product,
                clientSlug: _this7.form.client.slug
              });
            case 1:
              response = _context7.v;
              _this7.clientInvoices = response.data.data;
              _context7.n = 3;
              break;
            case 2:
              _this7.form.product = '';
              _this7.form.client = '';
            case 3:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // populate products from selected invoice
    storeProducts: function storeProducts() {
      var _this8 = this;
      if (!this.form.invoice || !this.form.invoice.invoiceProducts) return;
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
      this.form.totalDiscount = 0;
      this.form.transportCost = this.form.invoice.transport || 0;
      var _iterator = _createForOfIteratorHelper(this.form.invoice.invoiceProducts),
        _step;
      try {
        var _loop = function _loop() {
          var _this8$taxes;
          var invoiceItem = _step.value;
          var matchedReturn = _this8.isEdit && _this8.loadedReturn ? _this8.loadedReturn.invoiceReturnProducts.find(function (p) {
            return p.productID === invoiceItem.productID;
          }) : null;
          // On edit, only include products that were saved in this return
          if (_this8.isEdit && _this8.loadedReturn && !matchedReturn) return 1; // continue
          var presetReturnQty = matchedReturn ? matchedReturn.returnQty : invoiceItem.quantity - invoiceItem.returnQty;
          var maxQty = invoiceItem.quantity - (invoiceItem.returnQty || 0);
          var selectedVatRate = _this8.findMatchingVatRate(invoiceItem.productTax) || _this8.form.orderTax || ((_this8$taxes = _this8.taxes) === null || _this8$taxes === void 0 ? void 0 : _this8$taxes[0]);
          var totalBeforeDiscount = Number((presetReturnQty * invoiceItem.salePrice).toFixed(2));
          var discountAmount = 0;
          if ((invoiceItem.discountType || 'fixed') === 'percentage') {
            discountAmount = Number((totalBeforeDiscount * (invoiceItem.productDiscount || 0) / 100).toFixed(2));
          } else {
            discountAmount = Number((invoiceItem.productDiscount || 0).toFixed ? (invoiceItem.productDiscount || 0).toFixed(2) : Number(invoiceItem.productDiscount || 0));
          }
          var totalAfterDiscount = Number((totalBeforeDiscount - discountAmount).toFixed(2));
          var productTax = 0;
          var totalTax = 0;
          var totalPrice = totalAfterDiscount;
          if (selectedVatRate && selectedVatRate.rate) {
            productTax = Number((totalAfterDiscount * (selectedVatRate.rate / 100)).toFixed(2));
            totalTax = productTax;
            totalPrice = Number((totalAfterDiscount + productTax).toFixed(2));
          }
          _this8.form.selectedProducts.unshift({
            id: invoiceItem.productID,
            slug: invoiceItem.productSlug,
            name: invoiceItem.productName,
            code: invoiceItem.productCode,
            unit: invoiceItem.productUnit,
            taxType: invoiceItem.taxType,
            taxRate: invoiceItem.taxRate,
            oldQty: invoiceItem.quantity,
            qty: invoiceItem.quantity,
            returnQty: Math.max(0, Math.min(presetReturnQty, maxQty)),
            totalReturnQty: maxQty,
            inventoryCount: invoiceItem.inventoryCount,
            avgPurchasePrice: invoiceItem.purchasePrice,
            // backend update expects 'purchasePrice' key; mirror avgPurchasePrice
            purchasePrice: invoiceItem.purchasePrice,
            unitPrice: invoiceItem.salePrice,
            unitCost: invoiceItem.salePrice,
            totalPrice: totalPrice,
            returnTotal: totalPrice,
            // will be recalculated in calculateSum
            productTax: productTax,
            totalTax: invoiceItem.taxTotal || productTax,
            maxQty: maxQty,
            productDiscount: invoiceItem.productDiscount || 0,
            discountType: invoiceItem.discountType || 'fixed',
            discountAmount: discountAmount,
            discount: invoiceItem.productDiscount || 0,
            vatRate: invoiceItem.vatRate,
            selectedVatRate: selectedVatRate,
            totalBeforeDiscount: totalBeforeDiscount,
            totalAfterDiscount: totalAfterDiscount,
            sales_account_id: invoiceItem.sales_account_id,
            purchase_account_id: invoiceItem.purchase_account_id,
            itemType: invoiceItem.itemType || 'product'
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.calculateSum();
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) this.form.availableBalance = this.form.account.availableBalance;
      if (this.form.account && this.form.returnAmount > 0) this.validateBankAccountChartOfAccount();
    },
    validateBankAccountChartOfAccount: function validateBankAccountChartOfAccount() {
      var _this9 = this;
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
          if (result.isConfirmed) _this9.goToBankAccounts();
        });
      }
    },
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'accounts.index'
      });
    },
    // edit loader
    loadExistingReturn: function loadExistingReturn() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _yield$axios$get4, data, invoiceSlug, invoiceResp, invoiceData;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return axios_default().get("/api/invoice-returns/".concat(_this0.$route.params.slug));
            case 1:
              _yield$axios$get4 = _context8.v;
              data = _yield$axios$get4.data;
              _this0.loadedReturn = data.data;
              // set top-level fields
              _this0.form.returnReason = data.data.reason;
              _this0.form.availableBalance = data.data.account ? data.data.account.availableBalance : 0;
              _this0.form.account = data.data.account;
              _this0.form.receiptNo = data.data.accountPayable ? data.data.accountPayable.receipt_no : '';
              _this0.form.client = data.data.client;
              _this0.form.date = data.data.returnDate;
              _this0.form.note = data.data.note;
              _this0.form.status = data.data.status;
              // fetch invoice full details to reuse create logic design
              invoiceSlug = data.data.invoice.slug;
              _context8.n = 2;
              return axios_default().get("/api/invoices/".concat(invoiceSlug));
            case 2:
              invoiceResp = _context8.v;
              invoiceData = invoiceResp.data.data;
              _this0.form.invoice = invoiceData;
              // build products with return qty prefilled from invoiceReturnProducts
              _this0.storeProducts();
            case 3:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // item updates
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
    // main totals
    calculateSum: function calculateSum() {
      var _this$form$invoice;
      var length = this.form.selectedProducts.length;
      this.form.newSubTotal = this.form.totalReturn = 0;
      var totalProductDiscount = 0;
      var invoiceSubtotal = 0;
      this.form.netTotal = 0;
      this.form.taxAmount = 0;
      this.form.discountTotal = 0;
      for (var i = 0; i < length; i++) {
        var p = this.form.selectedProducts[i];
        var remainingQty = p.qty - p.returnQty;
        var productTotal = remainingQty * p.unitCost;
        invoiceSubtotal += productTotal;
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
      // invoice-level discount
      var invoiceDiscountAmount = 0;
      if (this.form.discountType == 1) {
        invoiceDiscountAmount = Number((this.form.discountPercentage / 100 * invoiceSubtotal).toFixed(2));
      } else {
        invoiceDiscountAmount = Number(this.form.invoiceDiscount || 0);
      }
      this.form.newSubTotal = Number((invoiceSubtotal - totalProductDiscount - invoiceDiscountAmount).toFixed(2));
      this.form.invoiceDiscount = invoiceDiscountAmount;
      var taxableAmount = this.form.newSubTotal;
      if (this.form.invoiceTaxRate && this.form.invoiceTaxRate.rate) {
        this.form.newTax = Number((this.form.invoiceTaxRate.rate / 100 * taxableAmount).toFixed(2));
      } else {
        this.form.newTax = 0;
      }
      this.form.invoiceDue = Number((this.form.originalInvoiceTotal - (((_this$form$invoice = this.form.invoice) === null || _this$form$invoice === void 0 ? void 0 : _this$form$invoice.totalPaid) || 0)).toFixed(2));
      this.form.totalDiscount = Number(this.form.totalDiscount.toFixed(2));
      this.form.invoiceTax = Number((this.form.invoice.tax - this.form.taxAmount).toFixed(2));
      if (this.form.invoiceDue >= 0) {
        var _this$form$invoice2, _this$form$invoice3;
        this.form.newDue = this.form.originalInvoiceTotal - (((_this$form$invoice2 = this.form.invoice) === null || _this$form$invoice2 === void 0 ? void 0 : _this$form$invoice2.totalPaid) || 0);
        this.form.newDueText = "".concat(this.form.originalInvoiceTotal, " - ").concat(((_this$form$invoice3 = this.form.invoice) === null || _this$form$invoice3 === void 0 ? void 0 : _this$form$invoice3.totalPaid) || 0, " = ").concat(Number(this.form.newDue).toFixed(2));
        this.form.returnAmount = 0;
      } else {
        var _this$form$invoice4, _this$form$invoice5;
        this.form.returnAmount = Number(((((_this$form$invoice4 = this.form.invoice) === null || _this$form$invoice4 === void 0 ? void 0 : _this$form$invoice4.totalPaid) || 0) - this.form.originalInvoiceTotal).toFixed(2));
        this.form.returnAmountText = "".concat(((_this$form$invoice5 = this.form.invoice) === null || _this$form$invoice5 === void 0 ? void 0 : _this$form$invoice5.totalPaid) || 0, " - ").concat(this.form.originalInvoiceTotal, " = ").concat(this.form.returnAmount);
        this.form.invoiceDue = 0;
        this.form.newDue = 0;
      }
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
      this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    },
    // submit
    onSubmit: function onSubmit() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _this1$form$invoice;
        var _yield$_this1$form$po, data, _t4;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (_this1.validateReturns()) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              if (!(!_this1.isSaudiArabia && _this1.form.returnAmount > 0 && !_this1.hasBankAccountChartOfAccount)) {
                _context9.n = 2;
                break;
              }
              toast.fire({
                type: 'warning',
                title: _this1.$t('Bank Account Chart of Account Required'),
                text: _this1.$t('Bank Account must have a Chart of Account assigned for journal entries.'),
                timer: 8000,
                timerProgressBar: true,
                showConfirmButton: true,
                confirmButtonText: _this1.$t('Go to Bank Accounts'),
                showCancelButton: true,
                cancelButtonText: _this1.$t('Close')
              }).then(function (result) {
                if (result.isConfirmed) _this1.goToBankAccounts();
              });
              return _context9.a(2);
            case 2:
              _this1.form.totalPaid = ((_this1$form$invoice = _this1.form.invoice) === null || _this1$form$invoice === void 0 ? void 0 : _this1$form$invoice.totalPaid) || 0;
              _this1.form.invoiceTax = _this1.form.newTax;
              _this1.form.newDue = _this1.form.invoiceDue;
              _context9.p = 3;
              if (!_this1.isEdit) {
                _context9.n = 5;
                break;
              }
              _context9.n = 4;
              return _this1.form.patch("/api/invoice-returns/".concat(_this1.$route.params.slug));
            case 4:
              toast.fire({
                type: 'success',
                title: _this1.$t('Invoice return updated successfully')
              });
              _this1.$router.push({
                name: 'invoiceReturns.index'
              });
              _context9.n = 7;
              break;
            case 5:
              _context9.n = 6;
              return _this1.form.post('/api/invoice-returns');
            case 6:
              _yield$_this1$form$po = _context9.v;
              data = _yield$_this1$form$po.data;
              if (_this1.isSaudiArabia) {
                toast.fire({
                  type: 'success',
                  title: _this1.$t('Credit Note created successfully'),
                  text: _this1.$t('Credit Note has been created as inactive. You can send it to ZATCA from the invoice returns list.'),
                  timer: 8000,
                  timerProgressBar: true
                });
              } else {
                toast.fire({
                  type: 'success',
                  title: _this1.$t('Invoice return added successfully')
                });
              }
              _this1.$router.push({
                name: 'invoiceReturns.show',
                params: {
                  slug: data.data.slug
                }
              });
            case 7:
              _context9.n = 9;
              break;
            case 8:
              _context9.p = 8;
              _t4 = _context9.v;
              toast.fire({
                type: 'error',
                title: _this1.$t('Please check your input and try again.')
              });
            case 9:
              return _context9.a(2);
          }
        }, _callee9, null, [[3, 8]]);
      }))();
    },
    validateReturns: function validateReturns() {
      var _this10 = this;
      var isValid = true;
      var errors = [];
      if (this.form.totalReturn <= 0) {
        errors.push(this.$t('At least one product must have a return quantity greater than 0'));
        isValid = false;
      }
      this.form.selectedProducts.forEach(function (product) {
        if (product.returnQty > product.maxQty) {
          errors.push(_this10.$t('Return quantity for {name} cannot exceed available quantity', {
            name: product.name
          }));
          isValid = false;
        }
        if (product.returnQty < 0) {
          errors.push(_this10.$t('Return quantity for {name} cannot be negative', {
            name: product.name
          }));
          isValid = false;
        }
      });
      if (this.form.newSubTotal < 0) {
        errors.push(this.$t('New subtotal cannot be negative'));
        isValid = false;
      }
      if (this.form.invoiceDiscount > this.form.newSubTotal) {
        errors.push(this.$t('Total discount cannot exceed new subtotal'));
        isValid = false;
      }
      if (errors.length > 0) {
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({
            type: 'error',
            title: this.$t('Validation Errors'),
            text: errors[0]
          });
        }
        if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
          this.form.errors.set({
            selectedProducts: errors
          });
        }
      }
      return isValid;
    }
  }
});
;// ./resources/js/pages/sales/returns/form.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_formvue_type_script_lang_js = (formvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/form.vue?vue&type=style&index=0&id=517ed03e&prod&scoped=true&lang=css
var formvue_type_style_index_0_id_517ed03e_prod_scoped_true_lang_css = __webpack_require__(62693);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/form.vue?vue&type=style&index=0&id=517ed03e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(formvue_type_style_index_0_id_517ed03e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_formvue_type_style_index_0_id_517ed03e_prod_scoped_true_lang_css = (formvue_type_style_index_0_id_517ed03e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/returns/form.vue?vue&type=style&index=0&id=517ed03e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/returns/form.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_formvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "517ed03e",
  null
  
)

/* harmony default export */ const returns_form = (component.exports);

/***/ }),

/***/ 62693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-517ed03e]{margin-bottom:15px}.footer-buttons[data-v-517ed03e]{display:flex;gap:10px}.footer-buttons .btn[data-v-517ed03e]{margin-right:10px}.footer-buttons .btn[data-v-517ed03e]:last-child{margin-right:0}.table-custom[data-v-517ed03e]{border:none!important}.invoices-create-table[data-v-517ed03e]{border-collapse:separate;border-spacing:0}.invoices-create-table thead th[data-v-517ed03e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-create-table thead tr[data-v-517ed03e]{border:none!important}.invoices-create-table thead th[data-v-517ed03e]:first-child{border-top-left-radius:10px}.invoices-create-table thead th[data-v-517ed03e]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-517ed03e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-517ed03e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-517ed03e]{gap:10px}.card[data-v-517ed03e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-517ed03e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.invoices-create-table .badge.badge-info[data-v-517ed03e]{background:#e3f2fd!important;color:#1976d2!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-517ed03e]{background:#fff!important}.btn-primary[data-v-517ed03e]{background:#2ab930!important}.btn-secondary[data-v-517ed03e]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.quantity-field[data-v-517ed03e]{border-radius:0!important;margin:0!important;min-height:50px!important}.account-status[data-v-517ed03e]{font-size:.875rem}.account-status .account-warning[data-v-517ed03e]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-517ed03e]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);