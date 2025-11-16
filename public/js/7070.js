"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7070],{

/***/ 7070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=30fa1e10&scoped=true
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
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save Changes')
    },
    on: {
      "click": _vm.updatePurchaseReturn
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save Changes')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('form', {
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
        "width": "85px"
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

;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=template&id=30fa1e10&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=script&lang=js
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    // get taxes
    getTaxes: function getTaxes() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 3:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              _this2.taxes = data.data;
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              _this2.taxes = [];
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    // get the purchase return
    getPurchaseReturn: function getPurchaseReturn() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + '/api/purchase-returns/' + _this3.$route.params.slug);
            case 2:
              _yield$axios$get3 = _context3.sent;
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
              _context3.next = 30;
              return _this3.assignProducts(data.data.returnProducts);
            case 30:
              _this3.form.selectedProducts = _context3.sent;
            case 31:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // get order products
    assignProducts: function assignProducts(products) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var key, _this4$taxes, _productData2, purchaseReturnItem, purchaseReturnProduct, productData, _productData, response, selectedVatRate, totalBeforeDiscount, discountAmount, totalAfterDiscount, productTax, totalTax, totalPrice, finalPurchaseAccountId;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.form.selectedProducts = [];
              _context4.t0 = _regeneratorRuntime().keys(products);
            case 2:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 32;
                break;
              }
              key = _context4.t1.value;
              purchaseReturnItem = products[key];
              purchaseReturnProduct = products[key].product; // Fetch fresh product data to get purchase_account_id
              productData = null;
              _context4.prev = 7;
              _context4.next = 10;
              return axios_default().get("/api/products/".concat(purchaseReturnProduct.slug));
            case 10:
              response = _context4.sent;
              productData = response.data.data;
              console.log('Product data for', purchaseReturnProduct.name, ':', (_productData = productData) === null || _productData === void 0 ? void 0 : _productData.purchase_account_id);
              _context4.next = 18;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t2 = _context4["catch"](7);
              console.warn('Could not fetch product data for:', purchaseReturnProduct.slug);
            case 18:
              selectedVatRate = _this4.findMatchingVatRate(purchaseReturnItem.productTax) || ((_this4$taxes = _this4.taxes) === null || _this4$taxes === void 0 ? void 0 : _this4$taxes[0]);
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
              _this4.form.selectedProducts.unshift({
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
              _context4.next = 2;
              break;
            case 32:
              _this4.calculateSum();
              return _context4.abrupt("return", _this4.form.selectedProducts);
            case 34:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[7, 15]]);
      }))();
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
      var _this5 = this;
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
          if (result.isConfirmed) _this5.goToBankAccounts();
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!product || _this6.isAutoAssigningProduct === product.id)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              _this6.isAutoAssigningProduct = product.id;
              _context5.prev = 3;
              _context5.next = 6;
              return _this6.$http.post("/api/products/".concat(product.slug, "/auto-assign-chart-of-account"));
            case 6:
              response = _context5.sent;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.purchase_account_id = response.data.purchase_account_id;

                // Force Vue to re-render the component to update the UI
                _this6.$nextTick(function () {
                  _this6.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this6.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this6.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this6.$t("Please try again or assign manually")
                });
              }
              _context5.next = 14;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](3);
              console.error('Error auto-assigning chart of account:', _context5.t0);
              toast.fire({
                type: "error",
                title: _this6.$t("An error occurred while assigning Chart of Account")
              });
            case 14:
              _context5.prev = 14;
              _this6.isAutoAssigningProduct = false;
              return _context5.finish(14);
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[3, 10, 14, 17]]);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this7.form.patch(window.location.origin + '/api/purchase-returns/' + _this7.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: 'success',
                  title: _this7.$t('Purchase return updated successfully')
                });
                _this7.clearTemporaryData();
                _this7.$router.push({
                  name: 'purchaseReturns.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Please check your input and try again.')
                });
              });
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=30fa1e10&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_30fa1e10_prod_scoped_true_lang_css = __webpack_require__(51934);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=30fa1e10&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_30fa1e10_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const returns_editvue_type_style_index_0_id_30fa1e10_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_30fa1e10_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchases/returns/edit.vue?vue&type=style&index=0&id=30fa1e10&prod&scoped=true&lang=css

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
  "30fa1e10",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 51934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-30fa1e10]{margin-bottom:15px}.footer-buttons[data-v-30fa1e10]{display:flex;gap:10px}.footer-buttons .btn[data-v-30fa1e10]{margin-right:10px}.footer-buttons .btn[data-v-30fa1e10]:last-child{margin-right:0}.btn-group.c-w-100[data-v-30fa1e10]{gap:10px}.card[data-v-30fa1e10]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-30fa1e10]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-30fa1e10]{background:#fff!important}.btn-primary[data-v-30fa1e10]{background:#2ab930!important}.btn-secondary[data-v-30fa1e10]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-30fa1e10]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.table-custom[data-v-30fa1e10]{border:none!important}.purchases-create-table[data-v-30fa1e10]{border-collapse:separate;border-spacing:0}.purchases-create-table thead th[data-v-30fa1e10]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.purchases-create-table thead tr[data-v-30fa1e10]{border:none!important}.purchases-create-table thead th[data-v-30fa1e10]:first-child{border-top-left-radius:10px}.purchases-create-table thead th[data-v-30fa1e10]:last-child{border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-30fa1e10]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .purchases-create-table thead th[data-v-30fa1e10]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.purchases-create-table .badge.badge-info[data-v-30fa1e10]{background:#e3f2fd!important;color:#1976d2!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.quantity-field[data-v-30fa1e10]{border-radius:0!important;margin:0!important;min-height:50px!important}.account-status[data-v-30fa1e10]{font-size:.875rem}.account-status .account-warning[data-v-30fa1e10]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:.25rem;color:#856404;display:flex;padding:.5rem}.account-status .account-success[data-v-30fa1e10]{align-items:center;background-color:#d4edda;border:1px solid #c3e6cb;border-radius:.25rem;color:#155724;display:flex;padding:.5rem}.product-status[data-v-30fa1e10]{font-size:13px}.product-warning[data-v-30fa1e10]{align-items:center;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;color:#856404;display:flex;font-weight:500;padding:8px 12px}.btn-outline-warning[data-v-30fa1e10]{border-color:#ffc107;border-radius:6px;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-30fa1e10]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-30fa1e10]:disabled{cursor:not-allowed;opacity:.6}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);