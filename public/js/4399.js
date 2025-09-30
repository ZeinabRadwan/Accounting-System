"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4399],{

/***/ 32839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-9809216e]{margin-bottom:15px}.footer-buttons[data-v-9809216e]{display:flex;gap:10px}.footer-buttons .btn[data-v-9809216e]{margin-right:10px}.footer-buttons .btn[data-v-9809216e]:last-child{margin-right:0}.btn-group.c-w-100[data-v-9809216e]{gap:10px}.card[data-v-9809216e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-9809216e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-9809216e]{background:#fff!important}.btn-primary[data-v-9809216e]{background:#2ab930!important}.btn-secondary[data-v-9809216e]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-9809216e]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=9809216e&scoped=true
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
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save Temporarily')
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
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
  }, [!_vm.form.selectedProducts[0].purchase_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\" " + _vm._s(_vm.$t('needs Purchase Account')))]), _vm._v(" "), typeof _vm.autoAssignProductChartOfAccount === 'function' ? _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === (_vm.form.selectedProducts[0] && _vm.form.selectedProducts[0].id)
    },
    on: {
      "click": function click($event) {
        _vm.autoAssignProductChartOfAccount && _vm.autoAssignProductChartOfAccount(_vm.form.selectedProducts[0]);
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === (_vm.form.selectedProducts[0] && _vm.form.selectedProducts[0].id) ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                  " + _vm._s(_vm.isAutoAssigningProduct === (_vm.form.selectedProducts[0] && _vm.form.selectedProducts[0].id) ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                ")]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
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
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Purchased Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Current Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Returned Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Unit Cost')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Return Price')))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
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
    }, [_vm._v(_vm._s(item.purchasedQty))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(item.purchasedQty - item.totalReturnedQty))]), _vm._v(" "), _c('td', {
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
        "placeholder": "Return Qty",
        "required": "",
        "min": "0",
        "max": item.maxQty
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
    }, [_vm._v(_vm._s(Number(item.price).toLocaleString('en-US', {
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
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(Number(item.returnTotal).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })))])]);
  }), _vm._v(" "), _vm.form.purchase ? _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "7"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Subtotal')) + ":")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(Number(_vm.form.purchase.subTotal).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(Number(_vm.form.totalReturn).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))])])]) : _vm._e()], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchase.totalDiscount,
      expression: "form.purchase.totalDiscount"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "name": "discount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchase.totalDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.purchase, "totalDiscount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchase.transport,
      expression: "form.purchase.transport"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "name": "transportCost",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchase.transport
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.purchase, "transport", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "purchaseTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.newTax,
      expression: "form.newTax"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "purchaseTax",
      "type": "text",
      "name": "purchaseTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.newTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "newTax", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "purchaseTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Total')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.purchaseTotal,
      expression: "form.purchaseTotal"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "purchaseTotal",
      "type": "number",
      "step": "any",
      "name": "purchaseTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.purchaseTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "purchaseTotal", $event.target.value);
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
      value: _vm.form.purchase.totalPaid,
      expression: "form.purchase.totalPaid"
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
      "value": _vm.form.purchase.totalPaid
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.purchase, "totalPaid", $event.target.value);
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
  }, [_vm._v(_vm._s(_vm.$t('Purchase Due')))]), _vm._v(" "), _c('input', {
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
  })], 1)]), _vm._v(" "), _vm.accounts && _vm.form.returnAmount > 0 ? _c('div', {
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
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
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
        returnAmountText: 0
      }),
      accounts: '',
      prefix: '',
      purchasePrefix: '',
      purchaseReturnPrefix: ''
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])),
  created: function created() {
    this.prefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix;
    this.getPurchaseReturn();
    this.getAccounts();
  },
  methods: {
    // get accounts
    getAccounts: function getAccounts() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.accounts = data.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get the purchase return
    getPurchaseReturn: function getPurchaseReturn() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios_default().get(window.location.origin + '/api/purchase-returns/' + _this2.$route.params.slug);
            case 2:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              _this2.form.returnReason = data.data.reason;
              _this2.form.account = data.data.account;
              _this2.form.chequeNo = data.data.accountReceivable ? data.data.accountReceivable.cheque_no : '';
              _this2.form.receiptNo = data.data.accountReceivable ? data.data.accountReceivable.receipt_no : '';
              _this2.form.supplier = data.data.supplier.name;
              _this2.form.purchaseNo = _this2.$options.filters.withPrefix(data.data.purchase.code, _this2.purchasePrefix);
              _this2.form.purchaseReturnNo = _this2.$options.filters.withPrefix(data.data.returnNo, _this2.purchaseReturnPrefix);
              _this2.form.purchase = data.data.purchase;
              _this2.form.date = data.data.returnDate;
              _this2.form.note = data.data.note;
              _this2.form.status = data.data.status;
              _this2.form.newTotal = data.data.purchase.purchaseTotal;
              _this2.form.totalReturn = data.data.totalReturn;
              _this2.form.oldReturn = data.data.totalReturn;
              _this2.form.taxRate = data.data.purchase.taxRate;
              _this2.form.purchaseTax = data.data.purchase.tax;
              _this2.form.newTax = data.data.purchase.tax;
              _this2.form.purchaseTotal = data.data.purchase.purchaseTotal;
              _this2.form.purchaseTransport = data.data.purchase.transport;
              _this2.form.purchaseDiscount = data.data.purchase.totalDiscount;
              _this2.form.purchaseDue = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _this2.form.suppllierAdvance = data.data.creditAmount;
              _this2.form.supplierAdvanceText = data.data.creditAmount;
              _this2.form.newDueText = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _this2.form.selectedProducts = _this2.assignProducts(data.data.returnProducts);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get order products
    assignProducts: function assignProducts(products) {
      this.form.selectedProducts = [];
      for (var key in products) {
        var purchaseReturnItem = products[key];
        var purchaseReturnProduct = products[key].product;
        this.form.selectedProducts.unshift({
          id: purchaseReturnProduct.id,
          slug: purchaseReturnProduct.slug,
          name: purchaseReturnProduct.name,
          code: purchaseReturnProduct.code,
          purchasedQty: purchaseReturnItem.purchasedQty,
          returnQty: purchaseReturnItem.returnQty,
          oldReturnedQty: purchaseReturnItem.returnQty,
          totalReturnedQty: purchaseReturnItem.returnQty,
          maxQty: purchaseReturnItem.purchasedQty - 1,
          price: purchaseReturnItem.purchasePrice,
          returnTotal: purchaseReturnItem.returnQty * purchaseReturnItem.purchasePrice,
          totalPrice: purchaseReturnItem.purchasedQty * purchaseReturnItem.purchasePrice
        });
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },
    // updateItems
    updateItem: function updateItem(value, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct && value >= 0) {
        selectedProduct.returnQty = Number(value);
        selectedProduct.returnTotal = selectedProduct.returnQty * selectedProduct.price;
        this.form.selectedProducts[index] = selectedProduct;
      }
      this.calculateSum();
    },
    // calculate sum
    calculateSum: function calculateSum() {
      this.form.totalReturn = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.returnTotal).toFixed(2));
      }, 0);
      this.form.newSubTotal = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.purchasedQty - cur.returnQty) * cur.price).toFixed(2));
      }, 0);
      this.form.newTax = Number((this.form.taxRate / 100 * this.form.newSubTotal).toFixed(2));
      this.form.purchaseTotal = this.form.newSubTotal + this.form.newTax + this.form.purchaseTransport - this.form.purchaseDiscount;
      this.form.purchaseDue = Number((this.form.purchaseTotal - this.form.purchase.totalPaid).toFixed(2));
      if (this.form.purchaseDue >= 0) {
        this.form.newDue = Number((this.form.purchaseTotal - this.form.purchase.totalPaid).toFixed(2));
        this.form.newDueText = this.form.purchaseTotal + ' - ' + this.form.purchase.totalPaid + ' = ' + this.form.newDue;
        this.form.returnAmount = 0;
      } else {
        this.form.returnAmount = (this.form.purchase.totalPaid - this.form.purchaseTotal).toFixed(2);
        this.form.returnAmountText = this.form.purchase.totalPaid + ' - ' + this.form.purchaseTotal + ' = ' + this.form.returnAmount;
        this.form.purchaseDue = 0;
      }
      return;
    },
    // update purchase return
    updatePurchaseReturn: function updatePurchaseReturn() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.form.patch(window.location.origin + '/api/purchase-returns/' + _this3.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: 'success',
                  title: _this3.$t('Purchase return updated successfully')
                });
                _this3.clearTemporaryData();
                _this3.$router.push({
                  name: 'purchaseReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this3.$t('Please check your input and try again.')
                });
              });
            case 2:
            case "end":
              return _context3.stop();
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
;// CONCATENATED MODULE: ./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const returns_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=9809216e&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_9809216e_prod_scoped_true_lang_css = __webpack_require__(32839);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=9809216e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_9809216e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_editvue_type_style_index_0_id_9809216e_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_9809216e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=9809216e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/purchases/returns/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  returns_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9809216e",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);