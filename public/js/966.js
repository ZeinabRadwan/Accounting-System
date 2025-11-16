"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[966],{

/***/ 10966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/edit.vue?vue&type=template&id=19725a6c&scoped=true
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
      "form": 'invoiceReturnEditForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "invoiceReturnEditForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateInvoiceReturn.apply(null, arguments);
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
      "for": "invoiceNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceNo,
      expression: "form.invoiceNo"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceNo",
      "type": "text",
      "name": "invoiceNo",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceNo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "invoiceReturnNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Return No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceReturnNo,
      expression: "form.invoiceReturnNo"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceReturnNo",
      "type": "text",
      "name": "invoiceReturnNo",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceReturnNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceReturnNo", $event.target.value);
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
      value: _vm.form.clientName,
      expression: "form.clientName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "clientName",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.clientName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "clientName", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-2"
  }, [_vm.form.errors.errors && _vm.form.errors.errors.selectedProducts ? _c('div', {
    staticClass: "w-95 m-auto"
  }, _vm._l(_vm.form.errors.errors.selectedProducts, function (msg, i) {
    return _c('div', {
      key: i,
      staticClass: "callout callout-danger"
    }, [_c('p', [_c('i', {
      staticClass: "icon fas fa-ban"
    }), _vm._v(" " + _vm._s(msg))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Item Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Invoice Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Current Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Return Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Unit Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Price')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Return Price')) + "\n                      ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
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
    }, [_vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                        ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(item.invoiceQty) + " " + _vm._s(item.unit))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v("\n                        " + _vm._s(item.invoiceQty - item.oldQty) + " " + _vm._s(item.unit) + "\n                      ")]), _vm._v(" "), _c('td', {
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
          return _vm.updateItem(item.returnQty - 1, i - 1);
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "returnQty-".concat(i),
        "min": "0",
        "max": item.maxQty,
        "name": "quantity",
        "placeholder": "Return Qty"
      },
      domProps: {
        "value": item.returnQty
      },
      on: {
        "change": function change($event) {
          return _vm.updateItem($event.target.value, i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.updateItem($event.target.value, i - 1);
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
          return _vm.updateItem(item.returnQty + 1, i - 1);
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v(_vm._s(Number(item.sellingPrice).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(Number(item.totalPrice).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })))]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v("\n                        " + _vm._s(Number(item.returnTotal).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })) + "\n                      ")])]);
  }), _vm._v(" "), _vm.form.invoice ? _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "7"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Subtotal')))])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(Number(_vm.form.returnSubtotal).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(Number(_vm.form.totalReturn).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))])])]) : _vm._e()], 2)])])]) : _vm._e(), _vm._v(" "), _vm.form.invoice ? _c('div', {
    staticClass: "row"
  }, [_vm.form.discountPercentage > 0 ? _c('div', {
    staticClass: "form-group col-md-2"
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
    staticStyle: {
      "width": "80px"
    },
    attrs: {
      "id": "discountType",
      "step": "any",
      "name": "discountType",
      "disabled": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": _vm.form.discountPercentage > 0 ? 'col-md-2' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "invoiceDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceDiscount,
      expression: "form.invoiceDiscount"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceDiscount",
      "type": "number",
      "step": "any",
      "name": "invoiceDiscount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceDiscount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "invoiceTransport"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceTransport,
      expression: "form.invoiceTransport"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceTransport",
      "type": "number",
      "step": "any",
      "name": "invoiceTransport",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceTransport
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceTransport", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "invoiceTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceTax,
      expression: "form.invoiceTax"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceTax",
      "type": "number",
      "step": "any",
      "name": "invoiceTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceTax", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.form.invoice ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "invoiceTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Total')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceTotal,
      expression: "form.invoiceTotal"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "invoiceTotal",
      "type": "number",
      "step": "any",
      "name": "invoiceTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceTotal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "totalPaid"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Paid')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoice.totalPaid,
      expression: "form.invoice.totalPaid"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "totalPaid",
      "type": "number",
      "step": "any",
      "name": "totalPaid",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoice.totalPaid
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.invoice, "totalPaid", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.form.returnAmount > 0 ? _c('div', {
    staticClass: "form-group col-md-4"
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
  })], 1) : _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "newDueText"
    }
  }, [_vm._v(_vm._s(_vm.$t('New Due')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.newDueText,
      expression: "form.newDueText"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('newDueText')
    },
    attrs: {
      "id": "newDueText",
      "type": "text",
      "name": "newDueText",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.newDueText
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "newDueText", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "newDueText"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.accounts && _vm.form.returnAmount > 0 && _vm.form.account ? _c('div', {
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
  }), _vm._v(" "), _c('has-error', {
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
      value: _vm.form.availableBalance,
      expression: "form.availableBalance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('availableBalance')
    },
    attrs: {
      "id": "availableBalance",
      "type": "number",
      "step": "any",
      "name": "availableBalance",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.availableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "availableBalance", $event.target.value);
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
  })], 1), _vm._v(" "), _c('div', {
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
  })], 1)])]), _vm._v(" "), _c('div', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/edit.vue?vue&type=script&lang=js
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
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Invoice Return')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Invoice Return',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Invoice Returns',
        url: 'invoiceReturns.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        invoiceNo: '',
        invoiceReturnNo: '',
        returnReason: '',
        account: '',
        availableBalance: 0,
        chequeNo: '',
        receiptNo: '',
        client: '',
        clientName: '',
        invoice: '',
        invoiceTotal: 0,
        product: '',
        selectedProducts: [],
        totalReturn: 0,
        invoiceTax: 0,
        invoiceTaxRate: 0,
        invoiceTransport: 0,
        invoiceDiscount: 0,
        discountPercentage: 0,
        discountType: '',
        invoiceDue: 0,
        newSubTotal: 0,
        returnSubtotal: 0,
        invoicePaid: 0,
        newDue: 0,
        newDueText: '',
        returnAmount: 0,
        returnAmountText: 0,
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1
      }),
      products: '',
      accounts: '',
      clientInvoices: '',
      prefix: '',
      purchasePrefix: '',
      purchaseReturnPrefix: ''
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])),
  created: function created() {
    this.getInvoiceReturn();
    this.getAccounts();
    this.prefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix;
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
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
      return;
    },
    // get the invoice return
    getInvoiceReturn: function getInvoiceReturn() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/invoice-returns/' + _this2.$route.params.slug);
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.form.invoiceNo = data.data.invoice.invoiceLabel;
              _this2.form.invoiceReturnNo = _this2.$options.filters.withPrefix(data.data.returnNo, _this2.purchaseReturnPrefix);
              _this2.form.returnReason = data.data.reason;
              _this2.form.availableBalance = data.data.account ? data.data.account.availableBalance : null;
              _this2.form.account = data.data.account;
              _this2.form.chequeNo = data.data.accountPayable ? data.data.accountPayable.cheque_no : '';
              _this2.form.receiptNo = data.data.accountPayable ? data.data.accountPayable.receipt_no : '';
              _this2.form.clientName = data.data.client.name;
              _this2.form.date = data.data.returnDate;
              _this2.form.note = data.data.note;
              _this2.form.status = data.data.status;
              _this2.form.client = data.data.client;
              _this2.form.invoice = data.data.invoice;
              _this2.form.invoiceTaxRate = data.data.invoice.taxRate;
              _this2.form.invoiceTax = data.data.invoice.tax;
              _this2.form.clientAdvance = data.data.creditAmount;
              _this2.form.clientAdvanceText = data.data.creditAmount;
              _this2.form.invoiceDue = data.data.invoice.due;
              _this2.form.newDueText = data.data.invoice.due;
              _this2.form.invoiceTransport = data.data.invoice.transport;
              _this2.form.discountType = data.data.invoice.discountType;
              _this2.form.discountPercentage = data.data.invoice.discountPercentage;
              _this2.form.invoiceDiscount = data.data.invoice.discount;
              _this2.form.invoicePaid = data.data.invoice.invoicePaid;
              _this2.form.invoiceTotal = data.data.invoice.invoiceTotal;
              _this2.form.selectedProducts = _this2.assignProducts(data.data.invoiceReturnProducts);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // assign products
    assignProducts: function assignProducts(products) {
      this.form.selectedProducts = [];
      for (var key in products) {
        var invoiceReturnItem = products[key];
        this.form.selectedProducts.unshift({
          id: invoiceReturnItem.productID,
          slug: invoiceReturnItem.productSlug,
          name: invoiceReturnItem.productName,
          code: invoiceReturnItem.productCode,
          unit: invoiceReturnItem.productUnit,
          oldQty: invoiceReturnItem.returnQty,
          invoiceQty: invoiceReturnItem.invoiceQty,
          maxQty: invoiceReturnItem.invoiceQty - 1,
          returnQty: invoiceReturnItem.returnQty,
          returnTotal: invoiceReturnItem.returnQty * invoiceReturnItem.salePrice,
          sellingPrice: invoiceReturnItem.salePrice,
          unitCost: invoiceReturnItem.salePrice,
          purchasePrice: invoiceReturnItem.avgPurchasePrice,
          totalPrice: invoiceReturnItem.invoiceQty * invoiceReturnItem.salePrice
        });
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },
    // updateItems
    updateItem: function updateItem(value, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct && value >= 0 && value < selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value);
        selectedProduct.returnTotal = selectedProduct.returnQty * selectedProduct.unitCost;
        this.form.selectedProducts[index] = selectedProduct;
      }
      this.calculateSum();
    },
    // calculate sum
    calculateSum: function calculateSum() {
      // calculate total
      var length = this.form.selectedProducts.length;
      this.form.newSubTotal = this.form.returnSubtotal = this.form.totalReturn = 0;
      for (var i = 0; i < length; i++) {
        var looProduct = this.form.selectedProducts[i];
        this.form.newSubTotal += Number(((looProduct.qty - looProduct.returnQty) * looProduct.unitCost).toFixed(2));
        this.form.totalReturn += Number(looProduct.returnTotal.toFixed(2));
        this.form.returnSubtotal += Number((looProduct.returnQty * looProduct.unitCost).toFixed(2));
      }
      // update discount
      if (this.form.discountType == 1) {
        this.form.invoiceDiscount = Number((this.form.discountPercentage / 100 * this.form.newSubTotal).toFixed(2));
      }
      // update tax, total and due
      this.form.invoiceTax = Number((this.form.invoiceTaxRate / 100 * (this.form.invoice.subTotal - this.form.totalReturn)).toFixed(2));
      this.form.invoiceTotal = Number((this.form.invoice.subTotal - this.form.returnSubtotal + this.form.invoiceTax + this.form.invoiceTransport - this.form.invoiceDiscount).toFixed(2));
      this.form.invoiceDue = Number((this.form.invoiceTotal - this.form.invoice.totalPaid).toFixed(2));
      // calculate new due or payable
      if (this.form.invoiceDue >= 0) {
        this.form.newDue = this.form.invoiceDue;
        this.form.newDueText = this.form.invoiceTotal + ' - ' + this.form.invoice.totalPaid + ' = ' + Number(this.form.newDue).toFixed(2);
        this.form.returnAmount = 0;
      } else {
        this.form.returnAmount = Number((this.form.invoice.totalPaid - this.form.invoiceTotal).toFixed(2));
        this.form.returnAmountText = this.form.invoice.totalPaid + ' - ' + this.form.invoiceTotal + ' = ' + this.form.returnAmount;
        this.form.invoiceDue = this.form.newDue = 0;
      }
      return;
    },
    // update invoice return
    updateInvoiceReturn: function updateInvoiceReturn() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this3.form.patch(window.location.origin + '/api/invoice-returns/' + _this3.$route.params.slug).then(function () {
                toast.fire({
                  type: 'success',
                  title: _this3.$t('Invoice return updated successfully')
                });
                _this3.clearTemporaryData();
                _this3.$router.push({
                  name: 'invoiceReturns.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this3.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
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
      localStorage.setItem('salesReturnEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('salesReturnEditTempData');
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
      localStorage.removeItem('salesReturnEditTempData');
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  }
});
;// ./resources/js/pages/sales/returns/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/edit.vue?vue&type=style&index=0&id=19725a6c&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_19725a6c_prod_scoped_true_lang_css = __webpack_require__(97655);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/returns/edit.vue?vue&type=style&index=0&id=19725a6c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_19725a6c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_editvue_type_style_index_0_id_19725a6c_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_19725a6c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/returns/edit.vue?vue&type=style&index=0&id=19725a6c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/returns/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "19725a6c",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 97655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-19725a6c]{margin-bottom:15px}.footer-buttons[data-v-19725a6c]{display:flex;gap:10px}.footer-buttons .btn[data-v-19725a6c]{margin-right:10px}.footer-buttons .btn[data-v-19725a6c]:last-child{margin-right:0}.btn-group.c-w-100[data-v-19725a6c]{gap:10px}.card[data-v-19725a6c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-19725a6c]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-19725a6c]{background:#fff!important}.btn-primary[data-v-19725a6c]{background:#2ab930!important}.btn-secondary[data-v-19725a6c]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);