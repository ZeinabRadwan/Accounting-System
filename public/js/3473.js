"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3473],{

/***/ 13473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=74bfae36&scoped=true
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
    staticClass: "table table-hover table-sm text-center purchases-create-table"
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=74bfae36&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
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
      taxes: ''
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
    // get the purchase return
    getPurchaseReturn: function getPurchaseReturn() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/purchase-returns/' + _this3.$route.params.slug);
            case 1:
              _yield$axios$get3 = _context3.v;
              data = _yield$axios$get3.data;
              _this3.form.returnReason = data.data.reason;
              _this3.form.account = data.data.account;
              _this3.form.chequeNo = data.data.accountReceivable ? data.data.accountReceivable.cheque_no : '';
              _this3.form.receiptNo = data.data.accountReceivable ? data.data.accountReceivable.receipt_no : '';
              _this3.form.supplier = data.data.supplier.name;
              _this3.form.purchaseNo = _this3.$options.filters.withPrefix(data.data.purchase.code, _this3.purchasePrefix);
              _this3.form.purchaseReturnNo = _this3.$options.filters.withPrefix(data.data.returnNo, _this3.purchaseReturnPrefix);
              _this3.form.purchase = data.data.purchase;
              _this3.form.date = data.data.returnDate;
              _this3.form.note = data.data.note;
              _this3.form.status = data.data.status;
              _this3.form.newTotal = data.data.purchase.purchaseTotal;
              _this3.form.totalReturn = data.data.totalReturn;
              _this3.form.oldReturn = data.data.totalReturn;
              _this3.form.taxRate = data.data.purchase.taxRate;
              _this3.form.purchaseTax = data.data.purchase.tax;
              _this3.form.newTax = data.data.purchase.tax;
              _this3.form.purchaseTotal = data.data.purchase.purchaseTotal;
              _this3.form.purchaseTransport = data.data.purchase.transport;
              _this3.form.purchaseDiscount = data.data.purchase.totalDiscount;
              _this3.form.purchaseDue = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _this3.form.suppllierAdvance = data.data.creditAmount;
              _this3.form.supplierAdvanceText = data.data.creditAmount;
              _this3.form.newDueText = data.data.purchase.due > 0 ? data.data.purchase.due : 0;
              _this3.form.selectedProducts = _this3.assignProducts(data.data.returnProducts);
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get order products
    assignProducts: function assignProducts(products) {
      this.form.selectedProducts = [];
      for (var key in products) {
        var _this$taxes;
        var purchaseReturnItem = products[key];
        var purchaseReturnProduct = products[key].product;
        var selectedVatRate = this.findMatchingVatRate(purchaseReturnItem.productTax) || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0]);
        var totalBeforeDiscount = Number((purchaseReturnItem.returnQty * purchaseReturnItem.purchasePrice).toFixed(2));
        var discountAmount = 0;
        if ((purchaseReturnItem.discountType || 'fixed') === 'percentage') {
          discountAmount = Number((totalBeforeDiscount * (purchaseReturnItem.productDiscount || 0) / 100).toFixed(2));
        } else {
          discountAmount = Number((purchaseReturnItem.productDiscount || 0).toFixed ? (purchaseReturnItem.productDiscount || 0).toFixed(2) : Number(purchaseReturnItem.productDiscount || 0));
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
        this.form.selectedProducts.unshift({
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
          purchase_account_id: purchaseReturnItem.purchase_account_id
        });
      }
      this.calculateSum();
      return this.form.selectedProducts;
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
      this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) this.form.availableBalance = this.form.account.availableBalance;
      if (this.form.account && this.form.returnAmount > 0) this.validateBankAccountChartOfAccount();
    },
    validateBankAccountChartOfAccount: function validateBankAccountChartOfAccount() {
      var _this4 = this;
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
          if (result.isConfirmed) _this4.goToBankAccounts();
        });
      }
    },
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'accounts.index'
      });
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
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this5.form.patch(window.location.origin + '/api/purchase-returns/' + _this5.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: 'success',
                  title: _this5.$t('Purchase return updated successfully')
                });
                _this5.clearTemporaryData();
                _this5.$router.push({
                  name: 'purchaseReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this5.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=74bfae36&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_74bfae36_prod_scoped_true_lang_css = __webpack_require__(74837);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=74bfae36&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_74bfae36_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_editvue_type_style_index_0_id_74bfae36_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_74bfae36_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=74bfae36&prod&scoped=true&lang=css

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
  "74bfae36",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 74837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-74bfae36]{margin-bottom:15px}.footer-buttons[data-v-74bfae36]{display:flex;gap:10px}.footer-buttons .btn[data-v-74bfae36]{margin-right:10px}.footer-buttons .btn[data-v-74bfae36]:last-child{margin-right:0}.btn-group.c-w-100[data-v-74bfae36]{gap:10px}.card[data-v-74bfae36]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-74bfae36]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-74bfae36]{background:#fff!important}.btn-primary[data-v-74bfae36]{background:#2ab930!important}.btn-secondary[data-v-74bfae36]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-74bfae36]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.table-custom[data-v-74bfae36]{border:none!important}.purchases-create-table[data-v-74bfae36]{border-collapse:separate;border-spacing:0}.purchases-create-table thead th[data-v-74bfae36]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.purchases-create-table thead tr[data-v-74bfae36]{border:none!important}.purchases-create-table thead th[data-v-74bfae36]:first-child{border-top-left-radius:10px}.purchases-create-table thead th[data-v-74bfae36]:last-child{border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-74bfae36]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-74bfae36]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.purchases-create-table .badge.badge-info[data-v-74bfae36]{background:#e3f2fd!important;color:#1976d2!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.quantity-field[data-v-74bfae36]{border-radius:0!important;margin:0!important;min-height:50px!important}.account-status[data-v-74bfae36]{font-size:.875rem}.account-status .account-warning[data-v-74bfae36]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-74bfae36]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);