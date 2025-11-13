"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[832],{

/***/ 30832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductFormTemplate)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductFormTemplate.vue?vue&type=template&id=37a18de6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('form', {
    attrs: {
      "id": _vm.formId,
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cube mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Item Type")) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "item-type-selector"
  }, [_c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'product'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "product",
      "name": "itemType",
      "value": "product",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "product")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "product");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cube"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Product")))])])]), _vm._v(" "), _c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'service'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "service",
      "name": "itemType",
      "value": "service",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "service")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "service");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cogs"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Service")))])])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Product Details")) + " \n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemName,
      expression: "form.itemName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemName')
    },
    attrs: {
      "id": "itemName",
      "type": "text",
      "name": "itemName",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.itemName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Code")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemCode,
      expression: "form.itemCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemCode')
    },
    attrs: {
      "type": "text",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code'),
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.itemCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemCode", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "name": "itemUnit",
      "placeholder": _vm.$t('Select a unit')
    },
    model: {
      value: _vm.form.itemUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "itemUnit", $$v);
      },
      expression: "form.itemUnit"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Rate")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "productTax",
      "placeholder": _vm.$t('Select a tax')
    },
    on: {
      "input": _vm.calculatePrice
    },
    model: {
      value: _vm.form.productTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "productTax", $$v);
      },
      expression: "form.productTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productTax"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Model")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemModel,
      expression: "form.itemModel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemModel')
    },
    attrs: {
      "id": "itemModel",
      "type": "text",
      "name": "itemModel",
      "placeholder": _vm.$t('Enter a model')
    },
    domProps: {
      "value": _vm.form.itemModel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemModel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemModel"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.regularPrice,
      expression: "form.regularPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('regularPrice')
    },
    attrs: {
      "id": "regularPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "regularPrice",
      "placeholder": _vm.$t('Enter price')
    },
    domProps: {
      "value": _vm.form.regularPrice
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount (%)")))]), _vm._v(" "), _c('input', {
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
      "type": "number",
      "min": "0",
      "max": "100",
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
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
    staticClass: "form-group",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Final Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sellingPrice,
      expression: "form.sellingPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sellingPrice')
    },
    attrs: {
      "id": "sellingPrice",
      "type": "number",
      "readonly": "",
      "name": "sellingPrice",
      "placeholder": _vm.$t('Calculated automatically')
    },
    domProps: {
      "value": _vm.form.sellingPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sellingPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sellingPrice"
    }
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'product' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-warehouse mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Stock Information")) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockCount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockCount,
      expression: "form.openingStockCount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount')
    },
    attrs: {
      "id": "openingStockCount",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockCount",
      "placeholder": _vm.$t('Enter opening stock')
    },
    domProps: {
      "value": _vm.form.openingStockCount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockCount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockCount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "alertQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Alert Quantity")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.alertQuantity,
      expression: "form.alertQuantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('alertQuantity')
    },
    attrs: {
      "id": "alertQuantity",
      "type": "number",
      "min": "0",
      "max": "1000",
      "name": "alertQuantity",
      "placeholder": _vm.$t('Enter alert quantity')
    },
    domProps: {
      "value": _vm.form.alertQuantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "alertQuantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "alertQuantity"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockUnitPrice,
      expression: "form.openingStockUnitPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockUnitPrice')
    },
    attrs: {
      "id": "openingStockUnitPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockUnitPrice",
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.openingStockUnitPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card",
    staticStyle: {
      "display": "none"
    }
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Chart of Accounts")) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [!_vm.isEditMode ? _c('div', [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Accounts will be assigned automatically based on your settings. Use the toggle switches below to manually select accounts for this product.")))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "account-label-row"
  }, [_c('label', {
    staticClass: "account-label",
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Sales Account")) + "\n                  "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "toggle-switch-container"
  }, [_c('label', {
    staticClass: "toggle-switch-label"
  }, [_c('span', {
    staticClass: "toggle-switch-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overrideSalesAccount,
      expression: "form.overrideSalesAccount"
    }],
    staticClass: "toggle-switch-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overrideSalesAccount) ? _vm._i(_vm.form.overrideSalesAccount, null) > -1 : _vm.form.overrideSalesAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overrideSalesAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overrideSalesAccount", $$c);
        }
      }, _vm.onOverrideSalesAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-slider"
  })]), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-text"
  }, [_vm._v("\n                      " + _vm._s(_vm.form.overrideSalesAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                    ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
    },
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "account-label-row"
  }, [_c('label', {
    staticClass: "account-label",
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Purchase Account")) + "\n                  "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "toggle-switch-container"
  }, [_c('label', {
    staticClass: "toggle-switch-label"
  }, [_c('span', {
    staticClass: "toggle-switch-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overridePurchaseAccount,
      expression: "form.overridePurchaseAccount"
    }],
    staticClass: "toggle-switch-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overridePurchaseAccount) ? _vm._i(_vm.form.overridePurchaseAccount, null) > -1 : _vm.form.overridePurchaseAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overridePurchaseAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overridePurchaseAccount", $$c);
        }
      }, _vm.onOverridePurchaseAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-slider"
  })]), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-text"
  }, [_vm._v("\n                      " + _vm._s(_vm.form.overridePurchaseAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                    ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1) : _vm._e()])])])]) : _c('div', [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Accounts are pre-assigned based on your settings, but you can change them below if needed.")))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  }), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Pre-assigned from settings, but you can change it")) + "\n              ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref2) {
        var name = _ref2.name,
          code = _ref2.code,
          type = _ref2.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  }), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Pre-assigned from settings, but you can change it")) + "\n              ")]) : _vm._e()], 1)])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Additional Details")) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Image")))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_c('i', {
    staticClass: "fas fa-upload"
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n              ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "80px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Product Image')
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
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
      "rows": "3",
      "name": "note",
      "placeholder": _vm.$t('Add any additional notes...')
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
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "disabled": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.handleSaveClick.apply(null, arguments);
      }
    }
  }, [_c('i', {
    "class": _vm.form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'
  }), _vm._v("\n            " + _vm._s(_vm.form.busy ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info ml-2",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n          ")])])])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductFormTemplate.vue?vue&type=script&lang=js
/* harmony default export */ const ProductFormTemplatevue_type_script_lang_js = ({
  name: "ProductFormTemplate",
  props: {
    form: {
      type: Object,
      required: true
    },
    formId: {
      type: String,
      "default": 'productForm'
    },
    product: {
      type: Object,
      "default": null
    },
    categories: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    units: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    taxes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartOfAccounts: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    prefix: {
      type: String,
      "default": ''
    },
    url: {
      type: String,
      "default": ''
    },
    isSalesAccountAutomatic: {
      type: Boolean,
      "default": false
    },
    isPurchaseAccountAutomatic: {
      type: Boolean,
      "default": false
    },
    isEditMode: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    calculatePrice: function calculatePrice() {
      this.$emit('calculate-price');
    },
    onFileChange: function onFileChange(e) {
      this.$emit('on-file-change', e);
    },
    onOverrideSalesAccountChange: function onOverrideSalesAccountChange() {
      this.$emit('on-override-sales-account-change');
    },
    onOverridePurchaseAccountChange: function onOverridePurchaseAccountChange() {
      this.$emit('on-override-purchase-account-change');
    },
    handleSaveClick: function handleSaveClick() {
      console.log('ProductFormTemplate: Save button clicked', {
        formBusy: this.form.busy,
        formErrors: this.form.errors.any(),
        formData: this.form.data()
      });
      if (this.form.busy) {
        console.log('ProductFormTemplate: Form is busy, ignoring click');
        return;
      }
      this.submitForm();
    },
    submitForm: function submitForm() {
      console.log('ProductFormTemplate: submitForm called');
      this.$emit('submit-form');
    },
    saveTemporary: function saveTemporary() {
      this.$emit('save-temporary');
    },
    resetForm: function resetForm() {
      this.$emit('reset-form');
    }
  }
});
;// ./resources/js/components/ProductFormTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductFormTemplatevue_type_script_lang_js = (ProductFormTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductFormTemplate.vue?vue&type=style&index=0&id=37a18de6&prod&scoped=true&lang=css
var ProductFormTemplatevue_type_style_index_0_id_37a18de6_prod_scoped_true_lang_css = __webpack_require__(33432);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductFormTemplate.vue?vue&type=style&index=0&id=37a18de6&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductFormTemplatevue_type_style_index_0_id_37a18de6_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductFormTemplatevue_type_style_index_0_id_37a18de6_prod_scoped_true_lang_css = (ProductFormTemplatevue_type_style_index_0_id_37a18de6_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductFormTemplate.vue?vue&type=style&index=0&id=37a18de6&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ProductFormTemplate.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductFormTemplatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "37a18de6",
  null
  
)

/* harmony default export */ const ProductFormTemplate = (component.exports);

/***/ }),

/***/ 33432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-37a18de6]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-37a18de6]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-37a18de6]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-37a18de6]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-37a18de6]:after{display:none}.form-card .card-header .section-title i[data-v-37a18de6]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-37a18de6]{padding:16px}.section-title[data-v-37a18de6]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-37a18de6]{margin-bottom:1rem}.form-group label[data-v-37a18de6]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-37a18de6]{color:#dc3545;font-weight:700}.row[data-v-37a18de6]{margin-bottom:1rem}.row[data-v-37a18de6]:last-child{margin-bottom:0}.image-preview[data-v-37a18de6]{text-align:center}.image-preview img[data-v-37a18de6]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-37a18de6]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-37a18de6]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-37a18de6]{color:#6c757d}.item-type-selector[data-v-37a18de6]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-37a18de6]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-37a18de6]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-37a18de6]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-37a18de6]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-37a18de6]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-37a18de6]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-37a18de6]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-37a18de6]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-37a18de6]{color:#fff}.form-check-input[data-v-37a18de6]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#fff;border:2px solid #ced4da;border-radius:4px;cursor:pointer;height:18px;margin-right:.75rem;margin-top:.1rem;position:relative;transition:all .2s ease;width:18px}.form-check-input[data-v-37a18de6]:checked{background-color:#33a0d9;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:12px;border-color:#33a0d9}.form-check-input[data-v-37a18de6]:focus,.form-check-input[data-v-37a18de6]:hover{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-check-input[data-v-37a18de6]:focus{outline:none}.form-check-label[data-v-37a18de6]{align-items:center;background-color:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;color:#495057;cursor:pointer;display:flex;font-weight:600;margin-bottom:0;padding:.5rem .75rem;transition:all .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.form-check-label[data-v-37a18de6]:hover{background-color:#e3f2fd;border-color:#33a0d9;box-shadow:0 2px 4px rgba(51,160,217,.1);color:#33a0d9;transform:translateY(-1px)}.form-check-label[data-v-37a18de6]:active{box-shadow:0 1px 2px rgba(51,160,217,.1);transform:translateY(0)}.override-checkbox-container[data-v-37a18de6]{align-items:center;display:flex}.checkbox-text[data-v-37a18de6]{color:#495057;font-size:.95rem;font-weight:600;margin-left:.5rem;padding:0 26px}.override-checkbox-container .form-check-label[data-v-37a18de6]{background:linear-gradient(135deg,#f8f9fa,#fff);border:2px solid #e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.05);min-height:48px;padding:.75rem 1rem}.override-checkbox-container .form-check-label[data-v-37a18de6]:hover{background:linear-gradient(135deg,#e3f2fd,#f0f8ff);border-color:#33a0d9;box-shadow:0 4px 8px rgba(51,160,217,.15)}.override-checkbox-container .form-check-label[data-v-37a18de6]:has(.form-check-input:checked){background:linear-gradient(135deg,#e8f5e8,#f0fff0);border-color:#28a745;color:#155724}.override-checkbox-container .form-check-label:has(.form-check-input:checked) .checkbox-text[data-v-37a18de6]{color:#155724;font-weight:700}.account-label-row[data-v-37a18de6]{align-items:flex-start;display:flex;flex-direction:column;gap:1rem;justify-content:space-between;margin-bottom:.5rem}.account-label[data-v-37a18de6]{color:#495057;flex:1;font-size:.95rem;font-weight:500;margin-bottom:0}.toggle-switch-container[data-v-37a18de6]{align-items:center;display:flex;flex-shrink:0}.toggle-switch-label[data-v-37a18de6]{align-items:center;cursor:pointer;display:inline-flex;gap:.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.toggle-switch-wrapper[data-v-37a18de6]{display:inline-block;flex-shrink:0;height:26px;position:relative;width:50px}.toggle-switch-input[data-v-37a18de6]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#ced4da;border-radius:26px;cursor:pointer;height:26px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;transition:background-color .3s ease;width:50px}.toggle-switch-input[data-v-37a18de6]:checked{background-color:#33a0d9}.toggle-switch-input[data-v-37a18de6]:focus{box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.toggle-switch-slider[data-v-37a18de6]{background-color:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);height:20px;left:3px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s ease;width:20px}.toggle-switch-label[data-v-37a18de6],.toggle-switch-label .toggle-switch-input[data-v-37a18de6]{position:relative}.toggle-switch-label .toggle-switch-input:checked+.toggle-switch-slider[data-v-37a18de6]{transform:translate(24px,-50%)}.toggle-switch-text[data-v-37a18de6]{color:#495057;font-size:.9rem;font-weight:500;transition:color .2s ease;white-space:nowrap}.toggle-switch-input:checked~.toggle-switch-text[data-v-37a18de6],.toggle-switch-wrapper:has(.toggle-switch-input:checked)~.toggle-switch-text[data-v-37a18de6]{color:#33a0d9;font-weight:600}.toggle-switch-label:has(.toggle-switch-input:checked) .toggle-switch-text[data-v-37a18de6]{color:#33a0d9;font-weight:600}.alert-info[data-v-37a18de6]{background-color:#d1ecf1;border-color:#bee5eb;border-radius:.375rem;font-size:.9rem;padding:.75rem 1rem}.alert-info[data-v-37a18de6],.alert-info i[data-v-37a18de6]{color:#0c5460}@media (max-width:768px){.item-type-selector[data-v-37a18de6]{flex-direction:column;gap:.5rem}.option-content[data-v-37a18de6]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-37a18de6]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-37a18de6]{font-size:.85rem}.override-checkbox-container .form-check-label[data-v-37a18de6]{min-height:44px;padding:.6rem .8rem}.checkbox-text[data-v-37a18de6]{font-size:.9rem}.form-check-input[data-v-37a18de6]{height:16px;width:16px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);