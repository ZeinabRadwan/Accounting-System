"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8919],{

/***/ 11725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-01459760]{gap:10px}.header-buttons[data-v-01459760]{margin-bottom:15px}.footer-buttons[data-v-01459760]{display:flex;gap:10px}.footer-buttons .btn[data-v-01459760]{margin-right:10px}.footer-buttons .btn[data-v-01459760]:last-child{margin-right:0}.card[data-v-01459760]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-01459760]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-01459760]{background:#fff!important}.btn-primary[data-v-01459760]{background:#2ab930!important}.btn-primary[data-v-01459760],.btn-secondary[data-v-01459760]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-01459760]{background:#33a0d9!important}.btn-secondary[data-v-01459760]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.create-btn[data-v-01459760]{padding:11px}.supplier-status[data-v-01459760]{font-size:13px}.supplier-success[data-v-01459760],.supplier-warning[data-v-01459760]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.supplier-warning[data-v-01459760]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.supplier-success[data-v-01459760]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.product-status[data-v-01459760]{font-size:13px}.product-success[data-v-01459760],.product-warning[data-v-01459760]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.product-warning[data-v-01459760]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.product-success[data-v-01459760]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.btn-outline-warning[data-v-01459760]{border-color:#ffc107;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-01459760]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-01459760]:disabled{cursor:not-allowed;opacity:.6}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 48919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=template&id=01459760&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
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
  })])], 1)])], 1), _vm._v(" "), _c('form', {
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
    staticClass: "card-body"
  }, [_vm.items && _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v(_vm._s(_vm.$t("Supplier")) + "\n                  "), _c('span', {
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
      "input": _vm.onSupplierChange
    },
    model: {
      value: _vm.form.supplier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "supplier", $$v);
      },
      expression: "form.supplier"
    }
  }), _vm._v(" "), _vm.form.supplier ? _c('div', {
    staticClass: "supplier-status mt-2"
  }, [!_vm.form.supplier.chart_of_account_id ? _c('div', {
    staticClass: "supplier-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Supplier needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningSupplier
    },
    on: {
      "click": _vm.autoAssignSupplierChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningSupplier ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "supplier"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "poNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Number")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poNumber,
      expression: "form.poNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poNumber')
    },
    attrs: {
      "id": "poNumber",
      "type": "text",
      "name": "poNumber",
      "placeholder": _vm.$t('Enter PO number'),
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.poNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poNumber"
    }
  })], 1), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "form-group col-md-12 col-xl-6"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Products")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
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
  }), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.form.selectedProducts[0].purchase_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\" " + _vm._s(_vm.$t('needs Purchase Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id
    },
    on: {
      "click": function click($event) {
        return _vm.autoAssignProductChartOfAccount(_vm.form.selectedProducts[0]);
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "purchaseDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Date")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
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
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Code')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Quantity')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Unit Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total After Discount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('VAT')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total with VAT')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i,
      staticClass: "text-center"
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', [_vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                        ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('td', [_c('div', {
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
        "step": "any",
        "id": "purchaseQty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": item.minQty
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
        "data-field": "unitPrice"
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
        "step": "any",
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
        "data-field": "unitPrice"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.unitPrice, 'price', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.unitPrice * item.qty) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_c('div', {
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
      staticClass: "form-control form-control-sm",
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : item.unitPrice * item.qty,
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
    })])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.unitPrice * item.qty - (item.discountAmount || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
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
      }, [_vm._v("\n                            " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                          ")]);
    })], 2)]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center"
    }, [_vm._v("\n                          " + _vm._s(item.productTax) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.totalPrice) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
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
      "colspan": 7
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Total')) + ":")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalUnitPrice - _vm.form.totalDiscount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.totalProductTax) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.form.subTotal) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
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
  })], 1), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Tax")) + "\n                  "), _c('span', {
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
      "input": _vm.updateTax
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Tax")))]), _vm._v(" "), _c('input', {
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
  })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6 col-lg-4"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('input', {
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
      "max": _vm.form.rowSubTotal,
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-lg-4"
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
    staticClass: "form-group col-md-6 col-lg-4"
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
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
    staticClass: "form-group col-md-4"
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
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t("Save changes")) + "\n                ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// ./resources/js/pages/purchase-order/edit.vue?vue&type=template&id=01459760&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
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
        supplier: "",
        poNumber: "",
        selectedProducts: [],
        orderTax: "",
        totalTax: 0,
        discount: "",
        transportCost: "",
        subTotal: 0,
        rowSubTotal: 0,
        netTotal: 0,
        poReference: "",
        paymentTerms: "",
        totalProductTax: 0,
        poDate: new Date().toISOString().slice(0, 10),
        purchaseDate: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        totalDiscount: 0
      }),
      products: "",
      taxes: "",
      prefix: "",
      poPrefix: "",
      isAutoAssigningSupplier: false,
      isAutoAssigningProduct: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
    }
  }),
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _this.prefix = _this.appInfo.productPrefix;
            _this.poPrefix = _this.appInfo.poPrefix;

            // Align data fetching steps with purchases/edit.vue
            _context.n = 1;
            return _this.getPurchaseOrder();
          case 1:
            _this.getSuppliers();
            _this.getProducts();
            _this.getTaxes();
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this2.loadTemporaryData();
    });
  },
  methods: {
    // get purchase order
    getPurchaseOrder: function getPurchaseOrder() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/purchase-order/" + _this3.$route.params.slug);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.form.poNumber = _this3.$options.filters.withPrefix(data.data.poNumber, _this3.poPrefix);
              _this3.form.supplier = data.data.supplier;
              _this3.form.poReference = data.data.poReference;
              _this3.form.transportCost = data.data.transport;
              _this3.form.totalTax = data.data.tax;
              _this3.form.orderTax = data.data.taxType || null;
              _this3.form.discount = data.data.totalDiscount;
              _this3.form.paymentTerms = data.data.paymentTerms;
              _this3.form.poDate = data.data.poDate;
              _this3.form.purchaseDate = data.data.purchaseDate;
              _this3.form.status = data.data.status;
              _this3.form.note = data.data.note;
              _this3.form.selectedProducts = _this3.assignProducts(data.data.products);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get all local suppliers
    getSuppliers: function getSuppliers() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this4.$store.dispatch('operations/allData', {
                path: '/api/all-suppliers'
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var currentProductIds, _yield$axios$get2, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              // Match purchases/edit.vue behavior: fetch, sort, then refresh selected items
              currentProductIds = _this5.form.selectedProducts ? _this5.form.selectedProducts.map(function (p) {
                return p.id;
              }) : [];
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-products-not-service');
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this5.products = data.data;
              // sort by numeric code if possible
              _this5.products.sort(function (a, b) {
                var na = Number(a.code);
                var nb = Number(b.code);
                if (na < nb) return -1;
                if (na > nb) return 1;
                return 0;
              });
              // ensure label exists for v-select
              _this5.products = _this5.products.map(function (p) {
                return _objectSpread(_objectSpread({}, p), {}, {
                  label: "".concat(p.name, " (").concat(p.code, ")")
                });
              });
              if (currentProductIds.length > 0 && _this5.form.selectedProducts) {
                _this5.form.selectedProducts.forEach(function (selectedProduct) {
                  var freshProduct = _this5.products.find(function (p) {
                    return p.id === selectedProduct.id;
                  });
                  if (freshProduct) {
                    Object.assign(selectedProduct, freshProduct);
                  }
                });
              }
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this6.taxes = data.data;
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
        var purchasePrice = product.avgPurchasePrice > 0 ? product.avgPurchasePrice : 1;
        var productTax = product.taxType == 'Exclusive' ? purchasePrice * (product.taxRate / 100) : purchasePrice - purchasePrice / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: qunatity,
          taxType: product.taxType,
          taxRate: product.taxRate,
          productTax: productTax,
          totalTax: productTax * qunatity,
          unitPrice: purchasePrice,
          unitCost: product.taxType == 'Exclusive' ? purchasePrice + totalTax : purchasePrice,
          totalPrice: product.taxType == 'Exclusive' ? 1 * (purchasePrice + totalTax) : 1 * purchasePrice,
          minQty: 1,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: null,
          // Include chart of account IDs for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id
        });
      } else {
        // Product already exists, update it with fresh data while preserving user input
        var existingProduct = this.form.selectedProducts[index];
        var updatedProduct = _objectSpread(_objectSpread({}, existingProduct), {}, {
          // Update chart of account IDs with fresh data
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id
        });
        this.form.selectedProducts[index] = updatedProduct;
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      this.updateTax();
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
          this.form.selectedProducts[index].unitPrice = value;
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax = item.taxType == 'Exclusive' ? item.unitPrice * (item.taxRate / 100) : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);
        item.totalTax = item.productTax * item.qty;
        item.totalPrice = item.taxType == 'Exclusive' ? item.qty * item.unitPrice + item.totalTax : item.qty * item.unitPrice;
        item.unitCost = item.taxType == 'Exclusive' ? Number(item.unitPrice) + Number(item.productTax) : item.unitPrice;
        this.form.selectedProducts[index] = item;
      }
      this.updateTax();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.updateTax();
      return;
    },
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = Number((item.unitPrice * item.qty * item.discount / 100).toFixed(2));
        } else {
          item.discountAmount = Number(item.discount || 0);
        }

        // Recalculate totals
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },
    // calculate product VAT
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }

          // If no match found or no productTax, fall back to available taxes
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }

        // Recalculate totals with new VAT rate
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },
    // Helper method to find matching VAT rate
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.rate === productTax;
      });
    },
    // update tax
    updateTax: function updateTax() {
      this.form.totalTax = 0;
      if (this.form.orderTax && this.form.orderTax.rate > 0 && this.form.netTotal > 0) {
        this.form.totalTax = Number((this.form.orderTax.rate / 100 * this.form.subTotal).toFixed(2));
      }
      this.calculateSum();
      return;
    },
    // calculate sum
    calculateSum: function calculateSum() {
      var length = this.form.selectedProducts.length;
      this.form.subTotal = this.form.totalProductTax = this.form.totalDiscount = 0;
      for (var i = 0; i < length; i++) {
        var looProduct = this.form.selectedProducts[i];
        this.form.subTotal += Number(looProduct.totalPrice.toFixed(2));
        this.form.totalProductTax += Number(looProduct.totalTax.toFixed(2));
        this.form.totalDiscount += Number((looProduct.discountAmount || 0).toFixed(2));
      }
      if (this.form.subTotal > 0) {
        this.form.netTotal = this.form.subTotal + Number(this.form.totalTax) + Number(this.form.transportCost) - Number(this.form.discount);
        this.form.rowSubTotal = this.form.subTotal;
      }
      return;
    },
    // get purchase order products
    assignProducts: function assignProducts(purchaseOrderProducts) {
      var _this7 = this;
      // Clear existing products first
      this.form.selectedProducts = [];
      var _loop = function _loop() {
        var purchaseOrderProduct = purchaseOrderProducts[key];
        var minQty = 1;

        // Get tax information from the product's tax relationship
        var taxRate = 0;
        var taxType = 'Exclusive';
        if (purchaseOrderProduct.product.tax && purchaseOrderProduct.product.tax.rate) {
          taxRate = purchaseOrderProduct.product.tax.rate;
        }
        if (purchaseOrderProduct.product.tax_type) {
          taxType = purchaseOrderProduct.product.tax_type;
        }

        // Calculate product tax based on the stored tax amount or calculate it
        var productTax = purchaseOrderProduct.tax_amount || 0;
        if (productTax === 0 && taxRate > 0) {
          // Calculate tax if not stored
          if (taxType === 'Exclusive') {
            productTax = purchaseOrderProduct.purchase_price * (taxRate / 100);
          } else {
            productTax = purchaseOrderProduct.purchase_price - purchaseOrderProduct.purchase_price / (1 + taxRate / 100);
          }
        }

        // Find matching VAT rate from available taxes
        var selectedVatRate = null;
        if (_this7.taxes && _this7.taxes.length > 0 && taxRate > 0) {
          selectedVatRate = _this7.taxes.find(function (tax) {
            return tax.rate === taxRate;
          });
        }

        // Map the product data correctly from the API response
        _this7.form.selectedProducts.unshift({
          id: purchaseOrderProduct.product.id,
          slug: purchaseOrderProduct.product.slug,
          name: purchaseOrderProduct.product.name,
          code: purchaseOrderProduct.product.code,
          qty: purchaseOrderProduct.quantity,
          taxType: taxType,
          taxRate: taxRate,
          productTax: productTax,
          totalTax: productTax * purchaseOrderProduct.quantity,
          unitCost: purchaseOrderProduct.unit_cost || purchaseOrderProduct.purchase_price,
          totalPrice: (purchaseOrderProduct.unit_cost || purchaseOrderProduct.purchase_price) * purchaseOrderProduct.quantity,
          unitPrice: purchaseOrderProduct.purchase_price,
          minQty: minQty,
          discount: purchaseOrderProduct.discount || 0,
          discountType: purchaseOrderProduct.discount_type || "fixed",
          discountAmount: purchaseOrderProduct.discount_amount || 0,
          selectedVatRate: selectedVatRate,
          // Include chart of account IDs for validation
          sales_account_id: purchaseOrderProduct.product.sales_account_id,
          purchase_account_id: purchaseOrderProduct.product.purchase_account_id
        });
      };
      for (var key in purchaseOrderProducts) {
        _loop();
      }
      this.calculateSum();
      this.updateTax();
      return this.form.selectedProducts;
    },
    // Handle chart of account assignment
    handleChartOfAccountAssigned: function handleChartOfAccountAssigned(data) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var updatedSupplier;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!(data.entity === 'supplier')) {
                _context6.n = 2;
                break;
              }
              _context6.n = 1;
              return _this8.getSuppliers();
            case 1:
              // If we have a selected supplier, update it with the new data
              if (_this8.form.supplier && _this8.items && _this8.items.length > 0) {
                updatedSupplier = _this8.items.find(function (s) {
                  return s.id === _this8.form.supplier.id;
                });
                if (updatedSupplier) {
                  _this8.form.supplier = updatedSupplier;
                }
              }
              _context6.n = 4;
              break;
            case 2:
              if (!(data.entity === 'product')) {
                _context6.n = 4;
                break;
              }
              _context6.n = 3;
              return _this8.getProducts();
            case 3:
              // Update selected products with new chart of account data
              if (_this8.form.selectedProducts && _this8.form.selectedProducts.length > 0) {
                _this8.form.selectedProducts.forEach(function (selectedProduct) {
                  var updatedProduct = _this8.products.find(function (p) {
                    return p.id === selectedProduct.id;
                  });
                  if (updatedProduct) {
                    // Update the chart of account fields
                    selectedProduct.sales_account_id = updatedProduct.sales_account_id;
                    selectedProduct.purchase_account_id = updatedProduct.purchase_account_id;
                  }
                });
              }
            case 4:
              // Force re-render of the validation component
              _this8.$nextTick(function () {
                _this8.$forceUpdate();
              });
            case 5:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // Auto-assign Chart of Account for supplier
    autoAssignSupplierChartOfAccount: function autoAssignSupplierChartOfAccount() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, _t;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!(!_this9.form.supplier || _this9.isAutoAssigningSupplier)) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this9.isAutoAssigningSupplier = true;
              _context7.p = 2;
              _context7.n = 3;
              return axios_default().post("/api/suppliers/".concat(_this9.form.supplier.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context7.v;
              if (response.data.success) {
                // Update the supplier data with new chart of account
                _this9.form.supplier.chart_of_account_id = response.data.chart_of_account_id;

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
              _context7.n = 5;
              break;
            case 4:
              _context7.p = 4;
              _t = _context7.v;
              console.error('Error auto-assigning chart of account:', _t);
              toast.fire({
                type: "error",
                title: _this9.$t("An error occurred while assigning Chart of Account")
              });
            case 5:
              _context7.p = 5;
              _this9.isAutoAssigningSupplier = false;
              return _context7.f(5);
            case 6:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Auto-assign Chart of Account for a specific product
    autoAssignProductChartOfAccount: function autoAssignProductChartOfAccount(product) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (!(!product || _this0.isAutoAssigningProduct === product.id)) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _this0.isAutoAssigningProduct = product.id;
              _context8.p = 2;
              _context8.n = 3;
              return axios_default().post("/api/products/".concat(product.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context8.v;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.purchase_account_id = response.data.purchase_account_id;

                // Force Vue to re-render the component to update the UI
                _this0.$nextTick(function () {
                  _this0.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this0.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this0.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this0.$t("Please try again or assign manually")
                });
              }
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t2 = _context8.v;
              console.error('Error auto-assigning chart of account:', _t2);
              toast.fire({
                type: "error",
                title: _this0.$t("An error occurred while assigning Chart of Account")
              });
            case 5:
              _context8.p = 5;
              _this0.isAutoAssigningProduct = false;
              return _context8.f(5);
            case 6:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Handle supplier change
    onSupplierChange: function onSupplierChange() {
      var _this1 = this;
      // Clear any previous errors
      this.form.errors.clear('supplier');

      // If a supplier is selected, ensure we have the latest data including Chart of Account
      if (this.form.supplier && this.form.supplier.id) {
        // Find the supplier in the items list to get the most up-to-date data
        var updatedSupplier = this.items.find(function (s) {
          return s.id === _this1.form.supplier.id;
        });
        if (updatedSupplier) {
          // Update the form supplier with all the latest data
          this.form.supplier = _objectSpread({}, updatedSupplier);
        }
      }
    },
    // update purchase order
    updatePurchaseOrder: function updatePurchaseOrder() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return _this10.form.patch(window.location.origin + '/api/purchase-order/' + _this10.$route.params.slug).then(function (_ref) {
                var data = _ref.data;
                // Clear temporary data after successful save
                _this10.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this10.$t('Purchase order updated successfully')
                });
                _this10.$router.push({
                  name: 'purchase-order.show',
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this10.$t('Opps...something went wrong')
                });
              });
            case 1:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        supplier: this.form.supplier,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        discount: this.form.discount,
        transportCost: this.form.transportCost,
        totalProductTax: this.form.totalProductTax,
        orderTax: this.form.orderTax,
        totalTax: this.form.totalTax,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        poDate: this.form.poDate,
        purchaseDate: this.form.purchaseDate,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        totalDiscount: this.form.totalDiscount,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('purchaseOrderEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('purchaseOrderEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.supplier = data.supplier || this.form.supplier;
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.discount = data.discount || this.form.discount;
          this.form.transportCost = data.transportCost || this.form.transportCost;
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.poDate = data.poDate || this.form.poDate;
          this.form.purchaseDate = data.purchaseDate || this.form.purchaseDate;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail;
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS;
          this.form.totalDiscount = data.totalDiscount || this.form.totalDiscount;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('purchaseOrderEditTempData');
    }
  }
});
;// ./resources/js/pages/purchase-order/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const purchase_order_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=01459760&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_01459760_prod_scoped_true_lang_css = __webpack_require__(11725);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=01459760&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_01459760_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const purchase_order_editvue_type_style_index_0_id_01459760_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_01459760_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/purchase-order/edit.vue?vue&type=style&index=0&id=01459760&prod&scoped=true&lang=css

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
  "01459760",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);