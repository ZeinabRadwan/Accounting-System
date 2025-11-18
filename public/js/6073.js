"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6073],{

/***/ 144:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    plural: 'Paise',
                    singular: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 8550:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dirham',
                plural: 'Dirhams',
                singular: 'Dirham',
                symbol: '',
                fractionalUnit: {
                    name: 'Fil',
                    singular: 'Fil',
                    plural: 'Fils',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 9043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductEditModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=template&id=06334d97&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    style: {
      cursor: _vm.product ? 'pointer' : 'not-allowed'
    },
    on: {
      "click": function click($event) {
        _vm.product && _vm.openModal();
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('VModal', {
    attrs: {
      "size": "lg"
    },
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Edit Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductEditModal,
      callback: function callback($$v) {
        _vm.showProductEditModal = $$v;
      },
      expression: "showProductEditModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateProduct.apply(null, arguments);
      },
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
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
      "readonly": "",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code')
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
  })], 1), _vm._v(" "), _c('div', {
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
  })], 1)]), _vm._v(" "), _c('div', {
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
    staticClass: "form-group"
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
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
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
  }), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
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
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary mr-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.form.busy
    },
    on: {
      "click": _vm.updateProduct
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Update")) + "\n      ")])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/VModal.vue + 5 modules
var VModal = __webpack_require__(63764);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/Button.vue + 3 modules
var Button = __webpack_require__(15677);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/HasError.vue + 4 modules
var HasError = __webpack_require__(73883);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=0ddbf4f7
var AlertErrorvue_type_template_id_0ddbf4f7_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [(_vm.form.errors.has('error'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('error'))}}):(_vm.form.errors.has('message'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('message'))}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var AlertErrorvue_type_template_id_0ddbf4f7_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertError.js
var AlertError = __webpack_require__(8739);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorvue_type_script_lang_js = ({
  name: 'AlertError',

  extends: AlertError/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorvue_type_script_lang_js = (AlertErrorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./node_modules/vform/src/components/bootstrap5/AlertError.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorvue_type_script_lang_js,
  AlertErrorvue_type_template_id_0ddbf4f7_render,
  AlertErrorvue_type_template_id_0ddbf4f7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertError = (component.exports);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=3a05553a
var AlertErrorsvue_type_template_id_3a05553a_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"mb-2",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"mb-0 ps-4"},_vm._l((_vm.form.errors.flatten()),function(error,index){return _c('li',{key:index,domProps:{"innerHTML":_vm._s(error)}})}),0)]):_vm._e()
}
var AlertErrorsvue_type_template_id_3a05553a_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertErrors.js
var AlertErrors = __webpack_require__(11014);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorsvue_type_script_lang_js = ({
  name: 'AlertErrors',

  extends: AlertErrors/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorsvue_type_script_lang_js = (AlertErrorsvue_type_script_lang_js); 
;// ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue





/* normalize component */
;
var AlertErrors_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorsvue_type_script_lang_js,
  AlertErrorsvue_type_template_id_3a05553a_render,
  AlertErrorsvue_type_template_id_3a05553a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertErrors = (AlertErrors_component.exports);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=4c30318c
var AlertSuccessvue_type_template_id_4c30318c_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.successful)?_c('div',{staticClass:"alert alert-success alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var AlertSuccessvue_type_template_id_4c30318c_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertSuccess.js
var AlertSuccess = __webpack_require__(81918);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js



/* harmony default export */ const AlertSuccessvue_type_script_lang_js = ({
  name: 'AlertSuccess',

  extends: AlertSuccess/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertSuccessvue_type_script_lang_js = (AlertSuccessvue_type_script_lang_js); 
;// ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue





/* normalize component */
;
var AlertSuccess_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertSuccessvue_type_script_lang_js,
  AlertSuccessvue_type_template_id_4c30318c_render,
  AlertSuccessvue_type_template_id_4c30318c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertSuccess = (AlertSuccess_component.exports);
;// ./node_modules/vform/src/components/bootstrap5/index.js








// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const ProductEditModalvue_type_script_lang_js = ({
  name: "ProductEditModal",
  components: {
    VModal: VModal["default"],
    HasError: HasError/* default */.A
  },
  props: {
    product: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      showProductEditModal: false,
      url: null,
      currentProduct: null,
      // Store the product being edited
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        newOpeningStockCount: "",
        newOpeningStockUnitPrice: "",
        isOpeningStock: false,
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: ""
      }),
      categories: [],
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  created: function created() {
    // Pre-load dropdown data so it's available immediately when modal opens
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    openModal: function openModal() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var product, productToEdit, needsFullData, identifier, _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              product = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              // If product is passed as parameter, use it; otherwise use the prop
              productToEdit = product || _this.product;
              if (productToEdit) {
                _context.n = 1;
                break;
              }
              console.warn('No product provided to ProductEditModal');
              return _context.a(2);
            case 1:
              // Store the product being edited in component data
              _this.currentProduct = productToEdit;

              // Show modal immediately
              _this.showProductEditModal = true;

              // Load product data immediately with available data
              _this.loadProductData(productToEdit);

              // Check if we need to fetch complete product data in background
              needsFullData = !productToEdit.itemUnit || !productToEdit.itemTax || !productToEdit.subCategory || !productToEdit.brand || typeof productToEdit.itemUnit === 'string' || typeof productToEdit.itemTax === 'string';
              if (!(needsFullData && (productToEdit.slug || productToEdit.id))) {
                _context.n = 5;
                break;
              }
              console.log('Fetching complete product data from API...');
              identifier = productToEdit.slug || productToEdit.id;
              _context.p = 2;
              _context.n = 3;
              return axios_default().get("/api/products/".concat(identifier));
            case 3:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              // Update with complete product data from API
              _this.loadProductData(data.data);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.warn('Failed to fetch complete product data, using provided data:', _t);
              // Keep using the initially loaded product data
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }))();
    },
    loadProductData: function loadProductData(product) {
      var _this2 = this;
      console.log('=== LOADING PRODUCT DATA DEBUG ===');
      console.log('Full product object:', product);
      console.log('Product keys:', Object.keys(product));
      console.log('Product structure:');
      console.log('- itemType/item_type:', product.itemType, '/', product.item_type);
      console.log('- name/item_name:', product.name, '/', product.item_name);
      console.log('- price/regular_price/regularPrice:', product.price, '/', product.regular_price, '/', product.regularPrice);
      console.log('- subCategory/sub_category_id:', product.subCategory, '/', product.sub_category_id);
      console.log('- itemUnit/unit_id/item_unit:', product.itemUnit, '/', product.unit_id, '/', product.item_unit);
      console.log('- itemTax/tax_id/vat_rate_id:', product.itemTax, '/', product.tax_id, '/', product.vat_rate_id);
      console.log('- brand/brand_id/itemBrand:', product.brand, '/', product.brand_id, '/', product.itemBrand);
      console.log('===================================');
      this.form.itemType = product.item_type || product.itemType || "product";
      this.form.itemName = product.name || product.item_name || "";
      this.form.itemModel = product.model || product.item_model || "";
      this.form.itemCode = product.code || product.item_code || "";
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128";

      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (_typeof(product.subCategory) === 'object' && product.subCategory.id) {
          // Find the exact object from categories array to ensure proper v-select binding
          var categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory.id;
          });
          this.form.subCategory = categoryObject || product.subCategory;
        } else {
          // It's an ID, find the object
          var _categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory;
          });
          this.form.subCategory = _categoryObject || product.subCategory;
        }
      } else {
        // Try to find by ID if available
        var categoryId = product.sub_category_id || product.category_id;
        if (categoryId) {
          var _categoryObject2 = this.categories.find(function (cat) {
            return cat.id == categoryId;
          });
          this.form.subCategory = _categoryObject2 || "";
        } else {
          this.form.subCategory = "";
        }
      }

      // Handle brand - find the exact object from brands array
      if (product.itemBrand) {
        if (_typeof(product.itemBrand) === 'object' && product.itemBrand.id) {
          // Find the exact object from brands array to ensure proper v-select binding
          var brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand.id;
          });
          this.form.brand = brandObject || product.itemBrand;
        } else {
          // It's an ID, find the object
          var _brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand;
          });
          this.form.brand = _brandObject || product.itemBrand;
        }
      } else {
        // Try to find by ID if available
        var brandId = product.brand_id || product.brand || product.item_brand;
        if (brandId) {
          var _brandObject2 = this.brands.find(function (brand) {
            return brand.id == brandId;
          });
          this.form.brand = _brandObject2 || "";
        } else {
          this.form.brand = "";
        }
      }

      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (_typeof(product.itemUnit) === 'object' && product.itemUnit.id) {
          // Find the exact object from units array to ensure proper v-select binding
          var unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit.id;
          });
          this.form.itemUnit = unitObject || product.itemUnit;
        } else {
          // It's an ID, find the object
          var _unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit;
          });
          this.form.itemUnit = _unitObject || product.itemUnit;
        }
      } else {
        // Try to find by ID if available
        var unitId = product.unit_id || product.item_unit || product.unit;
        if (unitId) {
          var _unitObject2 = this.units.find(function (unit) {
            return unit.id == unitId;
          });
          this.form.itemUnit = _unitObject2 || "";
        } else {
          this.form.itemUnit = "";
        }
      }

      // Handle tax field - find the exact object from taxes array
      if (product.itemTax) {
        if (_typeof(product.itemTax) === 'object' && product.itemTax.id) {
          // Find the exact object from taxes array to ensure proper v-select binding
          var taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax.id;
          });
          this.form.productTax = taxObject || product.itemTax;
        } else {
          // It's an ID, find the object
          var _taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax;
          });
          this.form.productTax = _taxObject || product.itemTax;
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        var taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id;
        // Find the tax object by ID from the taxes array
        var _taxObject2 = this.taxes.find(function (tax) {
          return tax.id == taxId;
        });
        this.form.productTax = _taxObject2 || "";
      } else {
        this.form.productTax = "";
      }
      this.form.taxType = product.tax_type || product.taxType || "Exclusive";
      this.form.regularPrice = product.regular_price || product.regularPrice || product.price || "";
      this.form.servicePurchasePrice = product.service_purchase_price || product.servicePurchasePrice || "";
      this.form.discount = product.discount || 0;
      this.form.sellingPrice = product.selling_price || product.sellingPrice || "";
      this.form.openingStockCount = product.opening_stock_count || product.openingStockCount || "";
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || "";
      this.form.note = product.note || product.description || "";
      this.form.status = product.status || "1";
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1;
      this.form.salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "") || "";
      this.form.purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "") || "";
      this.url = product.image || "";
      console.log('Form data after loading:', this.form.data()); // Debug log

      // Calculate selling price after loading data
      this.$nextTick(function () {
        _this2.calculatePrice();
      });
    },
    updateProduct: function updateProduct() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var currentProduct, productSlug, productId, identifier, formData, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              // Get the current product being edited (stored in component data)
              currentProduct = _this3.currentProduct; // Debug logging to understand the product object structure
              console.log('Current product object:', currentProduct);
              console.log('Available properties:', currentProduct ? Object.keys(currentProduct) : 'No product');
              if (currentProduct) {
                _context2.n = 1;
                break;
              }
              console.error('No product available for update');
              toast.fire({
                type: "error",
                title: _this3.$t("No product selected for update")
              });
              return _context2.a(2);
            case 1:
              // Check for slug property with fallbacks
              productSlug = currentProduct.slug || currentProduct.productSlug || currentProduct.product_slug;
              productId = currentProduct.id || currentProduct.productID || currentProduct.product_id;
              if (!(!productSlug && !productId)) {
                _context2.n = 2;
                break;
              }
              console.error('No product identifier (slug or ID) available for update');
              console.error('Product object:', currentProduct);
              toast.fire({
                type: "error",
                title: _this3.$t("Product identifier missing. Cannot update product.")
              });
              return _context2.a(2);
            case 2:
              // If we don't have a slug but have an ID, we need to fetch the product to get the slug
              identifier = productSlug;
              if (!productSlug && productId) {
                console.log('No slug found, attempting to use ID as fallback:', productId);
                // For now, try to use the ID directly - if the backend doesn't support it, we'll get an error
                identifier = productId;
              }

              // Validate required fields based on item type
              if (!(_this3.form.itemType === 'service' && !_this3.form.servicePurchasePrice)) {
                _context2.n = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Service Purchase Price is required for services")
              });
              return _context2.a(2);
            case 3:
              if (!_this3.form.isOpeningStock) {
                _context2.n = 5;
                break;
              }
              if (!(!_this3.form.newOpeningStockCount || _this3.form.newOpeningStockCount <= 0)) {
                _context2.n = 4;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Count is required and must be greater than 0")
              });
              return _context2.a(2);
            case 4:
              if (!(!_this3.form.newOpeningStockUnitPrice || _this3.form.newOpeningStockUnitPrice <= 0)) {
                _context2.n = 5;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Unit Price is required and must be greater than 0")
              });
              return _context2.a(2);
            case 5:
              if (!(!_this3.isSalesAccountAutomatic && !_this3.form.salesAccountId)) {
                _context2.n = 6;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Sales Account is required")
              });
              return _context2.a(2);
            case 6:
              if (!(!_this3.isPurchaseAccountAutomatic && !_this3.form.purchaseAccountId)) {
                _context2.n = 7;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Purchase Account is required")
              });
              return _context2.a(2);
            case 7:
              console.log('Using identifier for API call:', identifier);

              // Transform object fields to IDs before sending
              formData = _this3.form.data(); // Transform v-select objects to IDs
              if (formData.subCategory && _typeof(formData.subCategory) === 'object') {
                formData.subCategory = formData.subCategory.id;
              }
              if (formData.brand && _typeof(formData.brand) === 'object') {
                formData.brand = formData.brand.id;
              }
              if (formData.itemUnit && _typeof(formData.itemUnit) === 'object') {
                formData.itemUnit = formData.itemUnit.id;
              }
              if (formData.productTax && _typeof(formData.productTax) === 'object') {
                formData.productTax = formData.productTax.id;
              }

              // Debug: Log each field transformation
              console.log('Field transformations:');
              console.log('- subCategory:', _this3.form.subCategory, '→', formData.subCategory);
              console.log('- brand:', _this3.form.brand, '→', formData.brand);
              console.log('- itemUnit:', _this3.form.itemUnit, '→', formData.itemUnit);
              console.log('- productTax:', _this3.form.productTax, '→', formData.productTax);
              console.log('Form data being sent:', formData);
              _context2.n = 8;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 8:
              response = _context2.v;
              if (response.data.success) {
                // Show success message with system notification style
                toast.fire({
                  type: "success",
                  title: _this3.$t("Product updated successfully")
                });
                _this3.showProductEditModal = false;

                // Emit event with updated product data so parent can update its arrays
                _this3.$emit("reloadProducts");
                _this3.$emit("productUpdated", {
                  originalProduct: _this3.currentProduct,
                  updatedData: formData
                });
                _this3.form.reset();
                _this3.url = null;
                _this3.currentProduct = null; // Clear the stored product
              }
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              if (_t2.response && _t2.response.data) {
                if (_t2.response.data.errors) {
                  _this3.form.errors.set(_t2.response.data.errors);
                } else {
                  toast.fire({
                    type: "error",
                    title: _t2.response.data.message || _this3.$t("Error updating product")
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this3.$t("Error updating product")
                });
              }
              console.error('Error updating product:', _t2);
            case 10:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showProductEditModal = false;
      this.currentProduct = null; // Clear the stored product
      this.form.reset();
      this.url = null;
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this4$form$ge, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this4.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this4$form$ge = _context3.v;
              data = _yield$_this4$form$ge.data;
              _this4.categories = data.data;
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("Error fetching categories:", _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this5.brands = data.data;
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error("Error fetching brands:", _t4);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this6.units = data.data;
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error("Error fetching units:", _t5);
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              _this7.taxes = data.data;
              _this7.calculatePrice();
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              console.error("Error fetching taxes:", _t6);
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get5, data, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              _this8.chartOfAccounts = data || [];
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t7 = _context7.v;
              console.error("Error loading chart of accounts:", _t7);
              _this8.chartOfAccounts = [];
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context8.v;
              _this9.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this9.isSalesAccountAutomatic = _this9.accountRoutingSettings.sales && _this9.accountRoutingSettings.sales.routing_type === 'automatic';
              _this9.isPurchaseAccountAutomatic = _this9.accountRoutingSettings.purchase && _this9.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this9.isSalesAccountAutomatic && _this9.accountRoutingSettings.sales.parent_account_id) {
                _this9.form.salesAccountId = _this9.accountRoutingSettings.sales.parent_account_id;
              }
              if (_this9.isPurchaseAccountAutomatic && _this9.accountRoutingSettings.purchase.parent_account_id) {
                _this9.form.purchaseAccountId = _this9.accountRoutingSettings.purchase.parent_account_id;
              }
              console.log('Account routing settings loaded:', _this9.accountRoutingSettings);
              console.log('Sales automatic:', _this9.isSalesAccountAutomatic);
              console.log('Purchase automatic:', _this9.isPurchaseAccountAutomatic);
              _context8.n = 3;
              break;
            case 2:
              _context8.p = 2;
              _t8 = _context8.v;
              console.error("Error loading account routing settings:", _t8);
              // Set defaults if API fails
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 3:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 2]]);
      }))();
    },
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType && this.form.productTax.rate) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    onFileChange: function onFileChange(e) {
      var _this0 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this0.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        toast.fire({
          type: "error",
          title: this.$t('Please select a valid thumbnail with size less than 2 MB')
        });
      }
    }
  }
});
;// ./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductEditModalvue_type_script_lang_js = (ProductEditModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=06334d97&prod&scoped=true&lang=css
var ProductEditModalvue_type_style_index_0_id_06334d97_prod_scoped_true_lang_css = __webpack_require__(93738);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=06334d97&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductEditModalvue_type_style_index_0_id_06334d97_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductEditModalvue_type_style_index_0_id_06334d97_prod_scoped_true_lang_css = (ProductEditModalvue_type_style_index_0_id_06334d97_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=06334d97&prod&scoped=true&lang=css

;// ./resources/js/components/ProductEditModal.vue



;


/* normalize component */

var ProductEditModal_component = (0,componentNormalizer/* default */.A)(
  components_ProductEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "06334d97",
  null
  
)

/* harmony default export */ const ProductEditModal = (ProductEditModal_component.exports);

/***/ }),

/***/ 10982:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'تومان',
                plural: '',
                singular: '',
                symbol: 'تومان',
                fractionalUnit: {
                    name: '',
                    singular: 'ریال',
                    plural: 'تومان',
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'منفی',
                only: '',
                point: 'و',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'کوادریلیون' },
                { number: 1000000000000, value: 'تیلیارد' },
                { number: 1000000000, value: 'میلیارد' },
                { number: 1000000, value: 'میلیون' },
                { number: 1000, value: 'هزار' },
                { number: 900, value: 'نهصد' },
                { number: 800, value: 'هشتصد' },
                { number: 700, value: 'هفتصد' },
                { number: 600, value: 'ششصد' },
                { number: 500, value: 'پانصد' },
                { number: 400, value: 'چهارصد' },
                { number: 300, value: 'سیصد' },
                { number: 200, value: 'دویست' },
                { number: 100, value: 'صد' },
                { number: 90, value: 'نود' },
                { number: 80, value: 'هشتاد' },
                { number: 70, value: 'هفتاد' },
                { number: 60, value: 'شصت' },
                { number: 50, value: 'پنجاه' },
                { number: 40, value: 'چهل' },
                { number: 30, value: 'سی' },
                { number: 20, value: 'بیست' },
                { number: 19, value: 'نوزده' },
                { number: 18, value: 'هجده' },
                { number: 17, value: 'هفده' },
                { number: 16, value: 'شانزده' },
                { number: 15, value: 'پانزده' },
                { number: 14, value: 'چهارده' },
                { number: 13, value: 'سیزده' },
                { number: 12, value: 'دوازده' },
                { number: 11, value: 'یازده' },
                { number: 10, value: 'ده' },
                { number: 9, value: 'نه' },
                { number: 8, value: 'هشت' },
                { number: 7, value: 'هفت' },
                { number: 6, value: 'شش' },
                { number: 5, value: 'پنج' },
                { number: 4, value: 'چهار' },
                { number: 3, value: 'سه' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'یک' },
                { number: 0, value: 'صفر' },
            ],
            namedLessThan1000: true,
            splitWord: 'و',
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'دهم',
                2: 'صدم',
                3: 'هزارم',
                4: 'ده‌هزارم',
                5: 'صد‌هزارم',
                6: 'میلیونیوم',
                7: 'ده‌میلیونیوم',
                8: 'صد‌میلیونیوم',
                9: 'میلیاردیوم',
            },
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 21470:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Eurocent',
                    plural: 'Eurocents',
                    singular: 'Eurocent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 21722:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Real',
                plural: 'Reais',
                singular: 'Real',
                symbol: 'R$',
                fractionalUnit: {
                    name: 'Centavo',
                    singular: 'Centavo',
                    plural: 'Centavos',
                    symbol: '',
                },
            },
            texts: {
                and: 'E',
                minus: 'Menos',
                only: '',
                point: 'Vírgula',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrilhões' },
                { number: 1000000000000, value: 'Trilhões' },
                { number: 1000000000, value: 'Bilhões' },
                { number: 1000000, value: 'Milhões' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecentos' },
                { number: 800, value: 'Oitocentos' },
                { number: 700, value: 'Setecentos' },
                { number: 600, value: 'Seiscentos' },
                { number: 500, value: 'Quinhentos' },
                { number: 400, value: 'Quatrocentos' },
                { number: 300, value: 'Trezentos' },
                { number: 200, value: 'Duzentos' },
                { number: 100, value: 'Cento' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Oitenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sessenta' },
                { number: 50, value: 'Cinquenta' },
                { number: 40, value: 'Quarenta' },
                { number: 30, value: 'Trinta' },
                { number: 20, value: 'Vinte' },
                { number: 19, value: 'Dezenove' },
                { number: 18, value: 'Dezoito' },
                { number: 17, value: 'Dezesete' },
                { number: 16, value: 'Dezesseis' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treze' },
                { number: 12, value: 'Doze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dez' },
                { number: 9, value: 'Nove' },
                { number: 8, value: 'Oito' },
                { number: 7, value: 'Sete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Quatro' },
                { number: 3, value: 'Três' },
                { number: 2, value: 'Dois' },
                { number: 1, value: 'Um' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [
                { number: 100, value: 'Cem' },
                { number: 1000000000000000, value: 'Um Quadrilhão' },
                { number: 1000000000000, value: 'Um Trilhão' },
                { number: 1000000000, value: 'Um Bilhão' },
                { number: 1000000, value: 'Um Milhão' },
            ],
            ignoreOneForWords: [
                'Mil',
                'Novecentos',
                'Oitocentos',
                'Setecentos',
                'Seiscentos',
                'Quinhentos',
                'Quatrocentos',
                'Trezentos',
                'Duzentos',
                'Cento',
            ],
            splitWord: 'E',
            noSplitWordAfter: ['Mil', 'Milhões', 'Bilhões', 'Trilhões', 'Quadrilhões'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 26365:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    singular: 'Paisa',
                    plural: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 100000000000, value: 'Kharab' },
                { number: 1000000000, value: 'Arab' },
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 27002:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'ರೂಪಾಯಿ',
                plural: 'ರೂಪಾಯಿಗಳು',
                singular: 'ರೂಪಾಯಿ',
                symbol: '₹',
                fractionalUnit: {
                    name: 'ಪೈಸೆ',
                    singular: 'ಪೈಸೆ',
                    plural: 'ಪೈಸೆಗಳು',
                    symbol: '',
                },
            },
            texts: {
                and: 'ಮತ್ತು',
                minus: 'ಋಣ',
                only: '',
                point: 'ದಶಾಂಶ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'ಕೋಟಿ' },
                { number: 100000, value: 'ಲಕ್ಷ' },
                { number: 1000, value: 'ಸಾವಿರ' },
                { number: 100, value: 'ನೂರು' },
                { number: 99, value: 'ತೊಂಬತ್ತೊಂಬತ್ತು' },
                { number: 98, value: 'ತೊಂಬತ್ತೆಂಟು' },
                { number: 97, value: 'ತೊಂಬತ್ತೇಳು' },
                { number: 96, value: 'ತೊಂಬತ್ತಾರು' },
                { number: 95, value: 'ತೊಂಬತ್ತೈದು' },
                { number: 94, value: 'ತೊಂಬತ್ತನಾಲ್ಕು' },
                { number: 93, value: 'ತೊಂಬತ್ತಮೂರು' },
                { number: 92, value: 'ತೊಂಬತ್ತೆರಡು' },
                { number: 91, value: 'ತೊಂಬತ್ತೊಂದು' },
                { number: 90, value: 'ತೊಂಬತ್ತು' },
                { number: 89, value: 'ಎಂಭತ್ತೊಂಬತ್ತು' },
                { number: 88, value: 'ಎಂಭತ್ತೆಂಟು' },
                { number: 87, value: 'ಎಂಭತ್ತೇಳು' },
                { number: 86, value: 'ಎಂಭತ್ತಾರು' },
                { number: 85, value: 'ಎಂಭತ್ತೈದು' },
                { number: 84, value: 'ಎಂಭತ್ತನಾಲ್ಕು' },
                { number: 83, value: 'ಎಂಭತ್ತಮೂರು' },
                { number: 82, value: 'ಎಂಭತ್ತೆರಡು' },
                { number: 81, value: 'ಎಂಭತ್ತೊಂದು' },
                { number: 80, value: 'ಎಂಭತ್ತು' },
                { number: 79, value: 'ಎಪ್ಪತ್ತೊಂಬತ್ತು' },
                { number: 78, value: 'ಎಪ್ಪತ್ತೆಂಟು' },
                { number: 77, value: 'ಎಪ್ಪತ್ತೇಳು' },
                { number: 76, value: 'ಎಪ್ಪತ್ತಾರು' },
                { number: 75, value: 'ಎಪ್ಪತ್ತೈದು' },
                { number: 74, value: 'ಎಪ್ಪತ್ತನಾಲ್ಕು' },
                { number: 73, value: 'ಎಪ್ಪತ್ತಮೂರು' },
                { number: 72, value: 'ಎಪ್ಪತ್ತೆರಡು' },
                { number: 71, value: 'ಎಪ್ಪತ್ತೊಂದು' },
                { number: 70, value: 'ಎಪ್ಪತ್ತು' },
                { number: 69, value: 'ಅರುವತ್ತೊಂಬತ್ತು' },
                { number: 68, value: 'ಅರುವತ್ತೆಂಟು' },
                { number: 67, value: 'ಅರುವತ್ತೇಳು' },
                { number: 66, value: 'ಅರುವತ್ತಾರು' },
                { number: 65, value: 'ಅರುವತ್ತೈದು' },
                { number: 64, value: 'ಅರುವತ್ತನಾಲ್ಕು' },
                { number: 63, value: 'ಅರುವತ್ತಮೂರು' },
                { number: 62, value: 'ಅರುವತ್ತೆರಡು' },
                { number: 61, value: 'ಅರುವತ್ತೊಂದು' },
                { number: 60, value: 'ಅರುವತ್ತು' },
                { number: 59, value: 'ಐವತ್ತೊಂಬತ್ತು' },
                { number: 58, value: 'ಐವತ್ತೆಂಟು' },
                { number: 57, value: 'ಐವತ್ತೇಳು' },
                { number: 56, value: 'ಐವತ್ತಾರು' },
                { number: 55, value: 'ಐವತ್ತೈದು' },
                { number: 54, value: 'ಐವತ್ತನಾಲ್ಕು' },
                { number: 53, value: 'ಐವತ್ತಮೂರು' },
                { number: 52, value: 'ಐವತ್ತೆರಡು' },
                { number: 51, value: 'ಐವತ್ತೊಂದು' },
                { number: 50, value: 'ಐವತ್ತು' },
                { number: 49, value: 'ನಲವತ್ತೊಂಬತ್ತು' },
                { number: 48, value: 'ನಲವತ್ತೆಂಟು' },
                { number: 47, value: 'ನಲವತ್ತೇಳು' },
                { number: 46, value: 'ನಲವತ್ತಾರು' },
                { number: 45, value: 'ನಲವತ್ತೈದು' },
                { number: 44, value: 'ನಲವತ್ತನಾಲ್ಕು' },
                { number: 43, value: 'ನಲವತ್ತಮೂರು' },
                { number: 42, value: 'ನಲವತ್ತೆರಡು' },
                { number: 41, value: 'ನಲವತ್ತೊಂದು' },
                { number: 40, value: 'ನಲವತ್ತು' },
                { number: 39, value: 'ಮೂವತ್ತೊಂಬತ್ತು' },
                { number: 38, value: 'ಮೂವತ್ತೆಂಟು' },
                { number: 37, value: 'ಮೂವತ್ತೇಳು' },
                { number: 36, value: 'ಮೂವತ್ತಾರು' },
                { number: 35, value: 'ಮೂವತ್ತೈದು' },
                { number: 34, value: 'ಮೂವತ್ತನಾಲ್ಕು' },
                { number: 33, value: 'ಮೂವತ್ತಮೂರು' },
                { number: 32, value: 'ಮೂವತ್ತೆರಡು' },
                { number: 31, value: 'ಮೂವತ್ತೊಂದು' },
                { number: 30, value: 'ಮೂವತ್ತು' },
                { number: 29, value: 'ಇಪ್ಪತ್ತೊಂಬತ್ತು' },
                { number: 28, value: 'ಇಪ್ಪತ್ತೆಂಟು' },
                { number: 27, value: 'ಇಪ್ಪತ್ತೇಳು' },
                { number: 26, value: 'ಇಪ್ಪತ್ತಾರು' },
                { number: 25, value: 'ಇಪ್ಪತ್ತೈದು' },
                { number: 24, value: 'ಇಪ್ಪತ್ತನಾಲ್ಕು' },
                { number: 23, value: 'ಇಪ್ಪತ್ತಮೂರು' },
                { number: 22, value: 'ಇಪ್ಪತ್ತೆರಡು' },
                { number: 21, value: 'ಇಪ್ಪತ್ತೊಂದು' },
                { number: 20, value: 'ಇಪ್ಪತ್ತು' },
                { number: 19, value: 'ಹತ್ತೊಂಬತ್ತು' },
                { number: 18, value: 'ಹದಿನೆಂಟು' },
                { number: 17, value: 'ಹದಿನೇಳು' },
                { number: 16, value: 'ಹದಿನಾರು' },
                { number: 15, value: 'ಹದಿನೈದು' },
                { number: 14, value: 'ಹದಿನಾಲ್ಕು' },
                { number: 13, value: 'ಹದಿಮೂರು' },
                { number: 12, value: 'ಹನ್ನೆರಡು' },
                { number: 11, value: 'ಹನ್ನೊಂದು' },
                { number: 10, value: 'ಹತ್ತು' },
                { number: 9, value: 'ಒಂಬತ್ತು' },
                { number: 8, value: 'ಎಂಟು' },
                { number: 7, value: 'ಏಳು' },
                { number: 6, value: 'ಆರು' },
                { number: 5, value: 'ಐದು' },
                { number: 4, value: 'ನಾಲ್ಕು' },
                { number: 3, value: 'ಮೂರು' },
                { number: 2, value: 'ಎರಡು' },
                { number: 1, value: 'ಒಂದು' },
                { number: 0, value: 'ಶೂನ್ಯ' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 28787:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Omani Rial',
                plural: 'Omani Rials',
                singular: 'Omani Rial',
                symbol: 'OMR',
                fractionalUnit: {
                    name: 'Baisa',
                    singular: 'Baisa',
                    plural: 'Baisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 28834:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 33972:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'आणि',
                minus: 'वजा',
                only: '',
                point: 'पूर्णांक',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'कोटी' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 900, value: 'नऊशे' },
                { number: 800, value: 'आठशे' },
                { number: 700, value: 'सातशे' },
                { number: 600, value: 'सहाशे' },
                { number: 500, value: 'पाचशे' },
                { number: 400, value: 'चारशे' },
                { number: 300, value: 'तीनशे' },
                { number: 200, value: 'दोनशे' },
                { number: 100, value: 'एकशे' },
                { number: 99, value: 'नव्व्याण्णव' },
                { number: 98, value: 'अठ्ठ्याण्णव' },
                { number: 97, value: 'सत्त्याण्णव' },
                { number: 96, value: 'शहाण्णव' },
                { number: 95, value: 'पंच्याण्णव' },
                { number: 94, value: 'चौऱ्याण्णव' },
                { number: 93, value: 'त्र्याण्णव' },
                { number: 92, value: 'ब्याण्णव' },
                { number: 91, value: 'एक्क्याण्णव' },
                { number: 90, value: 'नव्वद' },
                { number: 89, value: 'एकोणनव्वद' },
                { number: 88, value: 'अठ्ठ्याऐंशी' },
                { number: 87, value: 'सत्त्याऐंशी' },
                { number: 86, value: 'शहाऐंशी' },
                { number: 85, value: 'पंच्याऐंशी' },
                { number: 84, value: 'चौऱ्याऐंशी' },
                { number: 83, value: 'त्र्याऐंशी' },
                { number: 82, value: 'ब्याऐंशी' },
                { number: 81, value: 'एक्क्याऐंशी' },
                { number: 80, value: 'ऐंशी' },
                { number: 79, value: 'एकोणऐंशी' },
                { number: 78, value: 'अठ्ठ्याहत्तर' },
                { number: 77, value: 'सत्याहत्तर' },
                { number: 76, value: 'शहात्तर' },
                { number: 75, value: 'पंच्याहत्तर' },
                { number: 74, value: 'चौर्‍याहत्तर' },
                { number: 73, value: 'त्र्याहत्तर' },
                { number: 72, value: 'बाहत्तर' },
                { number: 71, value: 'एक्काहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'एकोणसत्तर' },
                { number: 68, value: 'अडुसष्ठ' },
                { number: 67, value: 'सदुसष्ठ' },
                { number: 66, value: 'सहासष्ठ' },
                { number: 65, value: 'पासष्ठ' },
                { number: 64, value: 'चौसष्ठ' },
                { number: 63, value: 'त्रेसष्ठ' },
                { number: 62, value: 'बासष्ठ' },
                { number: 61, value: 'एकसष्ठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'एकोणसाठ' },
                { number: 58, value: 'अठ्ठावन्न' },
                { number: 57, value: 'सत्तावन्न' },
                { number: 56, value: 'छप्पन्न' },
                { number: 55, value: 'पंचावन्न' },
                { number: 54, value: 'चोपन्न' },
                { number: 53, value: 'त्रेपन्न' },
                { number: 52, value: 'बावन्न' },
                { number: 51, value: 'एक्कावन्न' },
                { number: 50, value: 'पन्नास' },
                { number: 49, value: 'एकोणपन्नास' },
                { number: 48, value: 'अठ्ठेचाळीस' },
                { number: 47, value: 'सत्तेचाळीस' },
                { number: 46, value: 'सेहेचाळीस' },
                { number: 45, value: 'पंचेचाळीस' },
                { number: 44, value: 'चव्वेचाळीस' },
                { number: 43, value: 'त्रेचाळीस' },
                { number: 42, value: 'बेचाळीस' },
                { number: 41, value: 'एक्केचाळीस' },
                { number: 40, value: 'चाळीस' },
                { number: 39, value: 'एकोणचाळीस' },
                { number: 38, value: 'अडतीस' },
                { number: 37, value: 'सदतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पस्तीस' },
                { number: 34, value: 'चौतीस' },
                { number: 33, value: 'तेहेतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'एकोणतीस' },
                { number: 28, value: 'अठ्ठावीस' },
                { number: 27, value: 'सत्तावीस' },
                { number: 26, value: 'सव्वीस' },
                { number: 25, value: 'पंचवीस' },
                { number: 24, value: 'चोवीस' },
                { number: 23, value: 'तेवीस' },
                { number: 22, value: 'बावीस' },
                { number: 21, value: 'एकवीस' },
                { number: 20, value: 'वीस' },
                { number: 19, value: 'एकोणीस' },
                { number: 18, value: 'अठरा' },
                { number: 17, value: 'सतरा' },
                { number: 16, value: 'सोळा' },
                { number: 15, value: 'पंधरा' },
                { number: 14, value: 'चौदा' },
                { number: 13, value: 'तेरा' },
                { number: 12, value: 'बारा' },
                { number: 11, value: 'अकरा' },
                { number: 10, value: 'दहा' },
                { number: 9, value: 'नऊ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'सहा' },
                { number: 5, value: 'पाच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दोन' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            namedLessThan1000: true,
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 34922:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'eiro',
                plural: 'eiro',
                symbol: '€',
                fractionalUnit: {
                    name: 'cents',
                    plural: 'centi',
                    symbol: '',
                },
            },
            texts: {
                and: 'un',
                minus: 'mīnus',
                only: '',
                point: 'komats',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'kvadriljon' },
                { number: 1000000000000, value: 'triljon' },
                { number: 1000000000, value: 'miljard' },
                { number: 1000000, value: 'miljoni', singularValue: 'miljons' },
                { number: 1000, value: 'tūkstoši', singularValue: 'tūkstotis' },
                { number: 900, value: 'deviņi simti' },
                { number: 800, value: 'astoņi simti' },
                { number: 700, value: 'septiņi simti' },
                { number: 600, value: 'seši simti' },
                { number: 500, value: 'pieci simti' },
                { number: 400, value: 'četri simti' },
                { number: 300, value: 'trīs simti' },
                { number: 200, value: 'divi simti' },
                { number: 100, value: 'simtu' },
                { number: 90, value: 'deviņdesmit' },
                { number: 80, value: 'astoņdesmit' },
                { number: 70, value: 'septiņdesmit' },
                { number: 60, value: 'sešdesmit' },
                { number: 50, value: 'piecdesmit' },
                { number: 40, value: 'četrdesmit' },
                { number: 30, value: 'trīsdesmit' },
                { number: 20, value: 'divdesmit' },
                { number: 19, value: 'deviņpadsmit' },
                { number: 18, value: 'astoņpadsmit' },
                { number: 17, value: 'septiņpadsmit' },
                { number: 16, value: 'sešpadsmit' },
                { number: 15, value: 'piecpadsmit' },
                { number: 14, value: 'četrdpadsmit' },
                { number: 13, value: 'trīspadsmit' },
                { number: 12, value: 'divpadsmit' },
                { number: 11, value: 'vienpadsmit' },
                { number: 10, value: 'desmit' },
                { number: 9, value: 'deviņi' },
                { number: 8, value: 'astoņi' },
                { number: 7, value: 'septiņi' },
                { number: 6, value: 'seši' },
                { number: 5, value: 'pieci' },
                { number: 4, value: 'četri' },
                { number: 3, value: 'trīs' },
                { number: 2, value: 'divi' },
                { number: 1, value: 'viens' },
                { number: 0, value: 'nulle' },
            ],
            ignoreOneForWords: [
                'simtu',
                'divi simti',
                'trīs simti',
                'četri simti',
                'pieci simti',
                'seši simti',
                'septiņi simti',
                'astoņi simti',
                'deviņi simti',
            ],
            exactWordsMapping: [{ number: 100, value: 'Simtu' }],
            pluralMark: 'i',
            pluralWords: ['kvadriljon', 'triljon', 'miljard'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 35262:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपैयाँ',
                plural: 'रुपैयाँ',
                singular: 'रुपैयाँ',
                symbol: 'रु',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसा',
                    symbol: '',
                },
            },
            texts: {
                and: 'र',
                minus: 'माइनस',
                only: 'मात्र',
                point: 'दशमलब',
            },
            numberWordsMapping: [
                { number: 100000000000, value: 'खर्ब' },
                { number: 1000000000, value: 'अर्ब' },
                { number: 10000000, value: 'करोड' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 100, value: 'सय' },
                { number: 99, value: 'उनान्सय' },
                { number: 98, value: 'अन्ठानब्बे' },
                { number: 97, value: 'सन्तानब्बे' },
                { number: 96, value: 'छयानब्बे' },
                { number: 95, value: 'पन्चानब्बे' },
                { number: 94, value: 'चौरानब्बे' },
                { number: 93, value: 'त्रियानब्बे' },
                { number: 92, value: 'बयान्नब्बे' },
                { number: 91, value: 'एकानब्बे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'उनान्नब्बे' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छयासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'त्रियासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'एकासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छयहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'त्रिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'एकहत्तर' },
                { number: 70, value: 'सत्तरी' },
                { number: 69, value: 'उनन्सत्तरी' },
                { number: 68, value: 'अठसट्ठी' },
                { number: 67, value: 'सड्सट्ठी' },
                { number: 66, value: 'छैंसट्ठी' },
                { number: 65, value: 'पैंसट्ठी' },
                { number: 64, value: 'चौंसट्ठी' },
                { number: 63, value: 'त्रिसट्ठी' },
                { number: 62, value: 'बइसट्ठी' },
                { number: 61, value: 'एकसट्ठी' },
                { number: 60, value: 'साठी' },
                { number: 59, value: 'उनन्साठी' },
                { number: 58, value: 'अन्ठाउन्न' },
                { number: 57, value: 'सन्ताउन्न' },
                { number: 56, value: 'छपन्न' },
                { number: 55, value: 'पचपन्न' },
                { number: 54, value: 'चवन्न' },
                { number: 53, value: 'त्रिपन्न' },
                { number: 52, value: 'बाउन्न' },
                { number: 51, value: 'एकाउन्न' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनन्चास' },
                { number: 48, value: 'अठचालीस' },
                { number: 47, value: 'सट्चालीस' },
                { number: 46, value: 'छयालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चवालीस' },
                { number: 43, value: 'त्रिचालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'एकचालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनन्चालीस' },
                { number: 38, value: 'अठतीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौँतीस' },
                { number: 33, value: 'तेत्तीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनन्तिस' },
                { number: 28, value: 'अठ्ठाइस' },
                { number: 27, value: 'सत्ताइस' },
                { number: 26, value: 'छब्बिस' },
                { number: 25, value: 'पच्चिस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेइस' },
                { number: 22, value: 'बाइस' },
                { number: 21, value: 'एक्काइस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नाइस' },
                { number: 18, value: 'अठार' },
                { number: 17, value: 'सत्र' },
                { number: 16, value: 'सोह्र' },
                { number: 15, value: 'पन्ध्र' },
                { number: 14, value: 'चौध' },
                { number: 13, value: 'तेह्र' },
                { number: 12, value: 'बाह्र' },
                { number: 11, value: 'एघार' },
                { number: 10, value: 'दश' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छ' },
                { number: 5, value: 'पाँच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दुई' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            exactWordsMapping: [{ number: 100, value: 'एक सय' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 36073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/create.vue?vue&type=template&id=f996c97c&scoped=true
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
        name: 'quotations.index'
      }
    }
  }, [_vm.isRTL ? [_vm._v("\n                  " + _vm._s(_vm.$t("Back")) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                      " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                    ")]]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'quotationCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "quotationCreateForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveQuotation.apply(null, arguments);
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
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('input', {
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
  })], 1)]), _vm._v(" "), _vm.clients ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t("Client")) + "\n                  "), _c('span', {
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
      'is-invalid': _vm.form.errors.has('client'),
      'rtl-select': _vm.isRTL
    },
    attrs: {
      "options": _vm.clients,
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
  }), _vm._v(" "), !_vm.form.client ? _c('ClientCreateModal', {
    on: {
      "reloadClients": function reloadClients($event) {
        return _vm.getClients('latest');
      }
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])]) : _vm._e(), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "input-group-text create-btn edit-btn",
    on: {
      "click": _vm.editSelectedClient
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  })]) : _vm._e()], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c('input', {
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
  }, [_vm._v(_vm._s(_vm.$t("Select Items")) + "\n                  "), _c('span', {
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
      'is-invalid': _vm.form.errors.has('selectedProducts'),
      'rtl-select': _vm.isRTL
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
  }), _vm._v(" "), _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts,
      "productCreated": _vm.handleProductCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.hasInsufficientStock ? _c('div', {
    staticClass: "row mt-3 mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-warning d-flex align-items-center",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-3",
    staticStyle: {
      "font-size": "1.5rem"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex-grow-1"
  }, [_c('h6', {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.$t("Insufficient Stock Alert")))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Some products have insufficient stock. Click on the red badges to manage stock levels.")) + "\n                      "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.showAllInsufficientStock
    }
  }, [_c('i', {
    staticClass: "fas fa-list mr-1"
  }), _vm._v("\n                        " + _vm._s(_vm.$t("View All")) + "\n                      ")])])])])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card debug-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "mb-4"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "debug-item mb-3 p-3 border rounded"
    }, [_c('div', {
      staticClass: "font-weight-bold text-dark mb-2"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Subtotal:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.unitPrice)) + " × " + _vm._s(item.qty) + " = " + _vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty)) + "\n                            ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Discount:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.discountAmount || 0)) + "\n                            ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("After Discount:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty - (item.discountAmount || 0))) + "\n                            ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("VAT:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.productTax || 0)) + "\n                            ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.totalPrice || 0)) + "\n                            ")])])])]);
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "debug-summary"
  }, [_c('strong', [_vm._v("Computed Values:")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mt-2"
  }, [_c('li', [_vm._v("Total Unit Price: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('li', [_vm._v("Total Discount: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('li', [_vm._v("Total After Discount: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('li', [_vm._v("Total Tax: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "debug-summary"
  }, [_c('strong', [_vm._v("Form Values:")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mt-2"
  }, [_c('li', [_vm._v("form.subTotal: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal)))]), _vm._v(" "), _c('li', [_vm._v("form.totalDiscount: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.totalDiscount)))]), _vm._v(" "), _c('li', [_vm._v("form.totalTax: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.totalTax)))]), _vm._v(" "), _c('li', [_vm._v("form.netTotal: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "debug-display p-3 bg-light rounded"
  }, [_c('div', [_c('strong', [_vm._v("Summary Final Total:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.toWord()))])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "debug-steps"
  }, [_c('div', {
    staticClass: "step"
  }, [_vm._v("Step 1: Sum of all item totals = " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_vm._v("Step 2: form.netTotal = " + _vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_vm._v("Step 3: Are they equal? \n                          "), _c('span', {
    "class": _vm.subtotal === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                            " + _vm._s(_vm.subtotal === _vm.form.netTotal ? '✅ YES' : '❌ NO') + "\n                          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "debug-state"
  }, [_c('div', [_vm._v("Selected Products Count: " + _vm._s(_vm.form.selectedProducts.length))]), _vm._v(" "), _c('div', [_vm._v("Is Saudi Arabia: " + _vm._s(_vm.isSaudiArabia))]), _vm._v(" "), _c('div', [_vm._v("Debug Panel Visible: ✅ YES")])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-0"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Subtotal")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.totalUnitPrice === _vm.form.subTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                                  " + _vm._s(_vm.totalUnitPrice === _vm.form.subTotal ? '✅' : '❌') + "\n                                ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Discount")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.totalDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.totalProductDiscount === _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                                  " + _vm._s(_vm.totalProductDiscount === _vm.form.totalDiscount ? '✅' : '❌') + "\n                                ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("After Discount")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal - _vm.form.totalDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.totalAfterDiscount === _vm.form.subTotal - _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                                  " + _vm._s(_vm.totalAfterDiscount === _vm.form.subTotal - _vm.form.totalDiscount ? '✅' : '❌') + "\n                                ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Tax")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.totalTax)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.totalProductTax === _vm.form.totalTax ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                                  " + _vm._s(_vm.totalProductTax === _vm.form.totalTax ? '✅' : '❌') + "\n                                ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Final Total")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.subtotal === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                                  " + _vm._s(_vm.subtotal === _vm.form.netTotal ? '✅' : '❌') + "\n                                ")])])])])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center quotations-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
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
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.openStockAdjustmentModal(item);
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
    }, [_vm._v("\n                              " + _vm._s(item.name) + "\n                            ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('button', {
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
          return _vm.editProductFromTable(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })])])]), _vm._v(" "), _c('td', {
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
        rawName: "v-model",
        value: item.qty,
        expression: "item.qty"
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".qty")),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : null,
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
        },
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "qty", $event.target.value);
        }, function ($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i - 1, '');
        }]
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
        "min-width": "150px"
      }
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.unitPrice,
        expression: "item.unitPrice"
      }],
      staticClass: "form-control form-control-sm border-0",
      staticStyle: {
        "width": "100px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": ""
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
        },
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "unitPrice", $event.target.value);
        }, function ($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i - 1, '');
        }]
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty)) + " "), _c('span', {
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
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType"))
      },
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
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount"))
      },
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
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }, function ($event) {
          return _vm.calculateProductDiscount(i - 1);
        }]
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount")) || _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.form.errors.has("selectedProducts.".concat(i - 1, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".discountType"))))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.unitPrice * item.qty - (item.discountAmount || 0))) + " "), _c('span', {
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
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i - 1, ".selectedVatRate"))
      },
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
    })], 2), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i - 1, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i - 1, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                          " + _vm._s(_vm.formatToTwoDecimals(item.productTax)) + "\n                        "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + " "), _c('span', {
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
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discountType"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount Type")))]), _vm._v(" "), _c('select', {
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
      }, _vm.calculateSum]
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Percentage")) + "(%)")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discountType"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": _vm.form.discountType == 1 ? 'col-md-2' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")) + "\n                  "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('input', {
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
  })], 1), _vm._v(" "), _vm.form.discountType == 1 ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total discount")))]), _vm._v(" "), _c('input', {
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
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
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
      "min": "1",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }
    }
  }), _vm._v("\n                  :placeholder=\"$t('Enter transport cost')\" @change=\"calculateSum\" @keyup=\"calculateSum\" />\n                "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quotation Tax")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax'),
      'rtl-select': _vm.isRTL
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
  }), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": 'col-md-4'
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
  }), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "netTotal"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t("Delivery Place")))]), _vm._v(" "), _c('input', {
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
  })], 1), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
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
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
    },
    model: {
      value: _vm.form.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendEmail", $$v);
      },
      expression: "form.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To Email")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("Email not configured")) + ")\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
    },
    model: {
      value: _vm.form.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendSMS", $$v);
      },
      expression: "form.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To SMS")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("SMS not configured")) + ")\n                ")]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n                ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])], 1)])])])])])]), _vm._v(" "), _c('ClientEditModal', {
    ref: "clientEditModal",
    on: {
      "reloadClients": _vm.getClients
    }
  }), _vm._v(" "), _c('ProductEditModal', {
    ref: "productEditModal",
    on: {
      "reloadProducts": _vm.getProducts,
      "productUpdated": _vm.handleProductUpdated
    }
  }), _vm._v(" "), _c('StockAdjustmentModal', {
    attrs: {
      "is-open": _vm.showStockAdjustmentModal,
      "product": _vm.selectedProductForStockAdjustment
    },
    on: {
      "close": _vm.closeStockAdjustmentModal,
      "adjust-quantity": _vm.adjustProductQuantity,
      "persist": _vm.saveTemporary,
      "stock-updated": _vm.handleStockUpdated
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-header bg-warning text-dark"
  }, [_c('h6', {
    staticClass: "mb-0"
  }, [_c('i', {
    staticClass: "fas fa-bug mr-2"
  }), _vm._v("\n                      🔍 Debug Panel - Calculation Steps\n                      "), _c('span', {
    staticClass: "badge badge-success ml-2"
  }, [_vm._v("DEBUG MODE ACTIVE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-primary"
  }, [_c('i', {
    staticClass: "fas fa-calculator mr-1"
  }), _vm._v("\n                        Individual Item Calculations:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-success"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-1"
  }), _vm._v("\n                        Summary Totals:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-info"
  }, [_c('i', {
    staticClass: "fas fa-eye mr-1"
  }), _vm._v("\n                        Template Display:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-warning"
  }, [_c('i', {
    staticClass: "fas fa-list-ol mr-1"
  }), _vm._v("\n                        Calculation Steps:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-secondary"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-1"
  }), _vm._v("\n                        Current State:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-danger"
  }, [_c('i', {
    staticClass: "fas fa-table mr-1"
  }), _vm._v("\n                        Summary Table Comparison:\n                      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Value")]), _vm._v(" "), _c('th', [_vm._v("Computed Property")]), _vm._v(" "), _c('th', [_vm._v("Form Value")]), _vm._v(" "), _c('th', [_vm._v("Template Display")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}];

;// ./resources/js/pages/sales/quotations/create.vue?vue&type=template&id=f996c97c&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/ClientCreateModal.vue + 5 modules
var ClientCreateModal = __webpack_require__(65584);
// EXTERNAL MODULE: ./resources/js/components/ClientEditModal.vue + 5 modules
var ClientEditModal = __webpack_require__(51674);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 17 modules
var ProductCreateModal = __webpack_require__(65676);
// EXTERNAL MODULE: ./resources/js/components/ProductEditModal.vue + 18 modules
var ProductEditModal = __webpack_require__(9043);
// EXTERNAL MODULE: ./resources/js/components/StockAdjustmentModal.vue + 6 modules
var StockAdjustmentModal = __webpack_require__(75528);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
// EXTERNAL MODULE: ./node_modules/to-words/dist/ToWords.js
var ToWords = __webpack_require__(54923);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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











/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Quotation")
    };
  },
  mixins: [RTLMixin/* default */.A],
  components: {
    ToggleButton: dist.ToggleButton,
    ClientCreateModal: ClientCreateModal/* default */.A,
    ClientEditModal: ClientEditModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A,
    ProductEditModal: ProductEditModal/* default */.A,
    StockAdjustmentModal: StockAdjustmentModal/* default */.A
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Create Quotation",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Quotations",
        url: "quotations.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        client: "",
        reference: "",
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discountType: 0,
        discount: "",
        totalDiscount: 0,
        orderTax: "",
        totalTax: 0,
        invoiceTax: 0,
        productTotalTax: 0,
        transportCost: "",
        date: new Date().toISOString().slice(0, 10),
        deliveryPlace: "",
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false
      }),
      products: "",
      taxes: "",
      prefix: "",
      clients: [],
      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      },
      // Stock adjustment modal
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null,
      restoredFromTemp: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    // Calculate total unit price (sum of all unit prices * quantities)
    totalUnitPrice: function totalUnitPrice() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Calculate total discount from all products (reactive)
    totalProductDiscount: function totalProductDiscount() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Calculate total after discount (reactive)
    totalAfterDiscount: function totalAfterDiscount() {
      return this.roundToTwoDecimals(this.totalUnitPrice - this.totalProductDiscount);
    },
    // Calculate total product tax (reactive)
    totalProductTax: function totalProductTax() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Calculate subtotal (reactive) - WITH VAT for quotations
    subtotal: function subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount + this.totalProductTax);
    },
    // Check if there are any products with insufficient stock
    hasInsufficientStock: function hasInsufficientStock() {
      return this.form.selectedProducts.some(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
    },
    // Get all products with insufficient stock
    insufficientStockProducts: function insufficientStockProducts() {
      return this.form.selectedProducts.filter(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
    },
    // Page title computed property - static to prevent reactive updates
    pageTitle: function pageTitle() {
      console.log('pageTitle computed property called');
      return this.$t("Create Quotation");
    }
  }),
  watch: {
    // Watch for any changes and ensure title stays correct
    '$route': function $route() {
      this.setCorrectTitle();
    }
  },
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  // Persist form state when navigating away (e.g., to adjustments page) so it's restored on return
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    try {
      // Only persist when going to inventory adjustments create page
      if (to && to.name === 'adjustments.create') {
        this.saveTemporary();
      } else {
        // For any other navigation, ensure temp is cleared so data doesn't persist
        this.clearTemporaryData();
      }
    } catch (e) {
      // no-op
    }
    next();
  },
  methods: {
    // Set the correct title and prevent it from changing
    setCorrectTitle: function setCorrectTitle() {
      var correctTitle = this.$t("Create Quotation");
      if (document.title !== correctTitle) {
        console.log('Title changed, fixing it. Current:', document.title, 'Setting to:', correctTitle);
        document.title = correctTitle;
      }
    },
    // get all clients
    getClients: function getClients() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var selectedClient, _yield$axios$get, data, defaultClientSlug, defaultClient, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              selectedClient = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'default';
              _context.p = 1;
              _context.n = 2;
              return axios_default().get(window.location.origin + "/api/all-clients");
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.clients = data.data || [];
              if (!(!_this.clients || _this.clients.length === 0)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              if (!(selectedClient === 'latest')) {
                _context.n = 4;
                break;
              }
              _this.form.client = _this.clients[0];
              return _context.a(2);
            case 4:
              if (!(_this.form.client && (_this.form.client.id || _this.form.client.slug))) {
                _context.n = 5;
                break;
              }
              _this.normalizeClientSelection();
              return _context.a(2);
            case 5:
              // Otherwise, assign default client
              defaultClientSlug = _this.appInfo.defaultClientSlug;
              defaultClient = _this.clients.find(function (item) {
                return item.slug === defaultClientSlug;
              });
              if (defaultClient) {
                _this.form.client = defaultClient;
              }
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Error loading clients:', _t);
              _this.clients = [];
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 6]]);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products");
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.products = data.data;
              _this2.products.sort(_this2.sortProducts);
              // After products are loaded/refreshed, sync inventory for selected items
              if (_this2.form.selectedProducts && _this2.form.selectedProducts.length > 0) {
                _this2.refreshSelectedProductsInventory();
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // handle newly created product
    handleProductCreated: function handleProductCreated(newProduct) {
      // Add the new product to the products list
      this.products.unshift(newProduct);
      this.products.sort(this.sortProducts);

      // Automatically select the newly created product
      this.form.product = newProduct;

      // Automatically add it to the selected products list
      this.storeProduct(newProduct);

      // Show success message
      // this.$toast.success(this.$t("Product created and added to quotation successfully!"));
    },
    // sort products
    sortProducts: function sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get3, data, defaultVatRateSlug;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get3 = _context3.v;
              data = _yield$axios$get3.data;
              _this3.taxes = data.data;
              // assign default vat rate
              if (_this3.taxes && _this3.taxes.length > 0) {
                defaultVatRateSlug = _this3.appInfo.defaultVatRateSlug;
                _this3.form.orderTax = _this3.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this3.calculateSum();
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _this4.communicationConfig.loading = true;
              _context4.n = 1;
              return axios_default().get('/api/communication-config-status');
            case 1:
              response = _context4.v;
              _this4.communicationConfig.email_configured = response.data.email_configured;
              _this4.communicationConfig.sms_configured = response.data.sms_configured;
              _this4.communicationConfig.loading = false;
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t2 = _context4.v;
              console.error('Error loading communication config status:', _t2);
              // Default to false if there's an error
              _this4.communicationConfig.email_configured = false;
              _this4.communicationConfig.sms_configured = false;
              _this4.communicationConfig.loading = false;
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        var _this$taxes;
        var productTax = product.taxType == "Exclusive" ? Number(product.regularPrice) * (Number(product.taxRate) / 100) : Number(product.regularPrice) - Number(product.regularPrice) / (1 + Number(product.taxRate) / 100);
        var totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: Number(product.taxRate) || 0,
          qty: Number(qunatity),
          avgPurchasePrice: Number(product.avgPurchasePrice) || 0,
          unitPrice: Number(product.regularPrice) || 0,
          unitCost: product.taxType == "Exclusive" ? Number(product.regularPrice) + Number(productTax) : Number(product.regularPrice),
          totalPrice: product.taxType == "Exclusive" ? Number(product.regularPrice) + Number(totalTax) : Number(product.regularPrice),
          productTax: Number(productTax),
          totalTax: Number(totalTax),
          itemType: product.itemType,
          inventoryCount: Number(product.inventoryCount) || 0,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.taxRate) || this.form.orderTax || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0])
        });

        // Calculate totals immediately after adding the product
        this.generateItemTotalPrice(0);
        this.calculateSum();
      } else {
        // If product already exists, just update quantity
        this.generateItemTotal(qunatity, "qty", index, "");
      }
      return;
    },
    // update array
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          var newQty = Number(value) || 0;
          if (action == "increment") {
            newQty = Number(item.qty) + 1;
          } else if (action == "decrement") {
            if (Number(item.qty) > 0) {
              newQty = Number(item.qty) - 1;
            }
          }
          this.$set(item, 'qty', Number(newQty));
        } else if (type == "price") {
          var newPrice = Number(value) || 0;
          if (action == "increment") {
            newPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (Number(item.unitPrice) > 0) {
              newPrice = Number(item.unitPrice) - 1;
            }
          }
          this.$set(item, 'unitPrice', Number(newPrice));
        }

        // Recalculate discount amount when quantity or price changes
        if (Number(item.discount) > 0) {
          if (item.discountType === "percentage") {
            this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.unitPrice) * Number(item.qty) * Number(item.discount) / 100));
          } else {
            this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
          }
        }

        // Use the new method to calculate totals with discount and VAT
        this.generateItemTotalPrice(index);
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
    // Helper function to round to two decimals
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },
    // Format number to display with exactly 2 decimal places
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
    // Find matching VAT rate based on product tax
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return Math.abs(tax.rate - productTax) < 0.01;
      });
    },
    // Ensure all products have discount and VAT properties
    ensureDiscountProperties: function ensureDiscountProperties() {
      var _this5 = this;
      this.form.selectedProducts.forEach(function (item) {
        if (typeof item.discount === 'undefined') {
          item.discount = 0;
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed';
        }
        if (typeof item.discountAmount === 'undefined') {
          item.discountAmount = 0;
        }
        if (typeof item.selectedVatRate === 'undefined') {
          // First try to use the product's default VAT rate, then fall back to quotation default
          if (item.taxRate) {
            item.selectedVatRate = _this5.findMatchingVatRate(item.taxRate);
          }

          // If no match found or no taxRate, fall back to quotation default
          if (!item.selectedVatRate) {
            if (_this5.form.orderTax) {
              item.selectedVatRate = _this5.form.orderTax;
            } else if (_this5.taxes && _this5.taxes.length > 0) {
              item.selectedVatRate = _this5.taxes[0];
            }
          }
        }
      });
    },
    // Calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.unitPrice) * Number(item.qty) * Number(item.discount) / 100));
        } else {
          this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
        }

        // Recalculate totals
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },
    // Calculate product VAT
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          if (item.taxRate) {
            item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
          }
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }

        // Recalculate totals with new VAT rate
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },
    // Generate item total price with discount and VAT (aligned with invoice logic)
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Ensure all values are numbers
        var unitPrice = Number(item.unitPrice) || 0;
        var qty = Number(item.qty) || 0;
        var discountAmount = Number(item.discountAmount) || 0;

        // Calculate price after discount
        var priceAfterDiscount = this.roundToTwoDecimals(unitPrice * qty - discountAmount);

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

        // Set totalAfterDiscount for subtotal calculation (without VAT)
        item.totalAfterDiscount = this.roundToTwoDecimals(priceAfterDiscount);
        if (item.taxType == "Exclusive") {
          // VAT on discounted amount
          item.productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          // Ensure both values are numbers before addition
          item.totalPrice = this.roundToTwoDecimals(Number(priceAfterDiscount) + Number(item.totalTax));
        } else {
          // Inclusive: VAT is included in unit price; derive VAT from discounted price
          var discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / qty);
          item.unitPrice = discountedUnitPrice;
          item.productTax = this.roundToTwoDecimals(discountedUnitPrice - discountedUnitPrice / (1 + vatRate / 100));
          item.totalTax = this.roundToTwoDecimals(Number(item.productTax) * Number(qty));
          item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount);
        }

        // Ensure all numeric fields are numbers
        item.unitPrice = Number(item.unitPrice);
        item.qty = Number(item.qty);
        item.productTax = Number(item.productTax);
        item.totalTax = Number(item.totalTax);
        item.totalPrice = Number(item.totalPrice);
        item.discountAmount = Number(item.discountAmount) || 0;
        this.form.selectedProducts[index] = item;
      }
    },
    // calculate sum (aligned with invoice logic)
    calculateSum: function calculateSum() {
      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Global discount
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals(this.form.discount / 100 * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Quotation-level tax computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)));
      }

      // Total tax = product VAT + quotation-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Net total
      if (this.isSaudiArabia) {
        // For Saudi Arabia, include VAT in the final total
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.subtotal));
      } else {
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.form.subTotal - globalDiscount + this.form.invoiceTax + Number(this.form.transportCost || 0)));
      }
      return;
    },
    // edit selected client
    editSelectedClient: function editSelectedClient() {
      // Check if a client is selected
      if (!this.form.client) {
        toast.fire({
          type: "warning",
          title: this.$t("Warning"),
          text: this.$t("Please select a client first.")
        });
        return;
      }

      // Check if the modal component is available
      if (!this.$refs.clientEditModal) {
        console.error('ClientEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }

      // Open the client edit modal with the selected client
      this.$refs.clientEditModal.openModal(this.form.client);
    },
    // edit product from table row
    editProductFromTable: function editProductFromTable(product) {
      // Check if the modal component is available
      if (!this.$refs.productEditModal) {
        console.error('ProductEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }

      // Open the product edit modal with the specific product from the table
      this.$refs.productEditModal.openModal(product);
    },
    // handle product updated event
    handleProductUpdated: function handleProductUpdated(eventData) {
      var originalProduct = eventData.originalProduct,
        updatedData = eventData.updatedData;
      console.log('Product updated event received:', eventData);

      // Find and update the product in selectedProducts array
      var productIndex = this.form.selectedProducts.findIndex(function (p) {
        return p.id === originalProduct.id || p.slug === originalProduct.slug;
      });
      if (productIndex !== -1) {
        // Update the product data in the selected products array
        var updatedProduct = _objectSpread({}, this.form.selectedProducts[productIndex]);

        // Update relevant fields from the form data
        updatedProduct.name = updatedData.itemName || updatedProduct.name;
        updatedProduct.item_name = updatedData.itemName || updatedProduct.item_name;
        updatedProduct.regular_price = updatedData.regularPrice || updatedProduct.regular_price;
        updatedProduct.price = updatedData.regularPrice || updatedProduct.price;
        updatedProduct.discount = updatedData.discount || updatedProduct.discount;
        updatedProduct.selling_price = updatedData.sellingPrice || updatedProduct.selling_price;

        // Update related objects if they have IDs
        if (updatedData.subCategory) {
          updatedProduct.sub_category_id = updatedData.subCategory;
        }
        if (updatedData.itemUnit) {
          updatedProduct.unit_id = updatedData.itemUnit;
        }
        if (updatedData.productTax) {
          updatedProduct.tax_id = updatedData.productTax;
          updatedProduct.vat_rate_id = updatedData.productTax;
        }
        if (updatedData.brand) {
          updatedProduct.brand_id = updatedData.brand;
        }

        // Replace the product in the array
        this.$set(this.form.selectedProducts, productIndex, updatedProduct);
        console.log('Updated product in selectedProducts array:', updatedProduct);

        // Recalculate totals
        this.calculateTotal();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
      }
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.subtotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },
    // Convert number to Arabic words
    convertToArabicWords: function convertToArabicWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return "\u0635\u0641\u0631 ".concat(currencyInfo.main, " \u0641\u0642\u0637");
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = '';
      if (integerPart > 0) {
        var arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;

        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      if (decimalPart > 0) {
        if (result) result += ' و ';
        var arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;

        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      return result + ' فقط';
    },
    // Get currency information based on locale and app settings
    getCurrencyInfo: function getCurrencyInfo() {
      var _this$appInfo2, _currencyMap$currency;
      var currency = ((_this$appInfo2 = this.appInfo) === null || _this$appInfo2 === void 0 ? void 0 : _this$appInfo2.currency) || 'SAR';
      var isArabic = this.isRTL && this.currentLocale === 'ar';
      var currencyMap = {
        'SAR': {
          en: {
            main: 'Riyal',
            sub: 'Halala',
            symbol: 'ê'
          },
          ar: {
            main: 'ريال',
            sub: 'هللة',
            symbol: 'ê'
          }
        },
        'USD': {
          en: {
            main: 'Dollar',
            sub: 'Cent',
            symbol: '$'
          },
          ar: {
            main: 'دولار',
            sub: 'سنت',
            symbol: '$'
          }
        },
        'EUR': {
          en: {
            main: 'Euro',
            sub: 'Cent',
            symbol: '€'
          },
          ar: {
            main: 'يورو',
            sub: 'سنت',
            symbol: '€'
          }
        },
        'EGP': {
          en: {
            main: 'Pound',
            sub: 'Piastre',
            symbol: '£'
          },
          ar: {
            main: 'جنيه',
            sub: 'قرش',
            symbol: '£'
          }
        }
      };
      return ((_currencyMap$currency = currencyMap[currency]) === null || _currencyMap$currency === void 0 ? void 0 : _currencyMap$currency[isArabic ? 'ar' : 'en']) || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },
    // Convert number to English words
    convertToEnglishWords: function convertToEnglishWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      var toWords = new ToWords.ToWords();
      var words = toWords.convert(amount);

      // Add currency information
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = words;
      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }
      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }
      return result + ' Only';
    },
    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish: function convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';
      var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }
      return 'number';
    },
    // Convert integer to Arabic words
    convertIntegerToArabic: function convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';
      var ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      var tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      var teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      var hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        var hundred = Math.floor(num / 100);
        var remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        var thousand = Math.floor(num / 1000);
        var _remainder = num % 1000;
        if (_remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(_remainder);
      }
      if (num < 1000000000) {
        var million = Math.floor(num / 1000000);
        var _remainder2 = num % 1000000;
        if (_remainder2 === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(_remainder2);
      }
      return 'رقم كبير جداً';
    },
    // save quotation
    saveQuotation: function saveQuotation() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this6.form.post(window.location.origin + "/api/quotations").then(function (_ref) {
                var data = _ref.data;
                toast.fire({
                  type: "success",
                  title: _this6.$t("Quotation added successfully")
                });
                _this6.clearTemporaryData();
                _this6.$router.push({
                  name: "quotations.show",
                  params: {
                    slug: data.data.slug
                  }
                });
              })["catch"](function (error) {
                var _error$response, _error$response2;
                if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
                  var serverErrors = error.response.data.errors || {};
                  var translatedErrors = {};
                  Object.keys(serverErrors).forEach(function (field) {
                    var fieldErrors = serverErrors[field] || [];
                    translatedErrors[field] = fieldErrors.map(function (message) {
                      return _this6.translateValidationMessage(message, field);
                    });
                  });
                  _this6.form.errors.set(translatedErrors);
                  toast.fire({
                    type: "error",
                    title: _this6.$t("Please check your input and try again.")
                  });
                } else {
                  var _error$response3;
                  var message = (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this6.$t("Please check your input and try again.");
                  toast.fire({
                    type: "error",
                    title: message
                  });
                }
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // translate common validation messages coming from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Normalize field label (try to use translated field names)
      var fieldLabelMap = {
        client: this.$t("Client"),
        reference: this.$t("Reference"),
        selectedProducts: this.$t("Select Items"),
        date: this.$t("Date"),
        deliveryPlace: this.$t("Delivery Place"),
        note: this.$t("Note"),
        status: this.$t("Status"),
        discount: this.$t("Discount"),
        discountType: this.$t("Discount Type"),
        totalDiscount: this.$t("Total discount"),
        orderTax: this.$t("Quotation Tax"),
        totalTax: this.$t("Total Tax"),
        netTotal: this.$t("Net Total"),
        transportCost: this.$t("Transport Cost")
      };
      var fieldLabel = fieldLabelMap[field] || field;

      // Common Laravel validation patterns with localized messages
      var patterns = [{
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
        en: "The selected value is invalid",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
        en: "Must be a number",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
        en: "Must be an integer",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
        en: "Invalid format",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
        en: "This value has already been taken",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
      }];
      for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
        var _patterns$_i = _patterns[_i],
          re = _patterns$_i.re,
          en = _patterns$_i.en,
          ar = _patterns$_i.ar;
        var match = message.match(re);
        if (match) {
          var text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en).apply(void 0, _toConsumableArray(match)) : isArabic ? ar : en;
          // Prefix with field label where useful
          return "".concat(fieldLabel, ": ").concat(text);
        }
      }

      // Fallback: return original message if nothing matched
      return message;
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        client: this.form.client,
        reference: this.form.reference,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        addPayment: this.form.addPayment,
        account: this.form.account,
        paidAmount: this.form.paidAmount,
        paymentMethod: this.form.paymentMethod,
        chequeNo: this.form.chequeNo,
        receiptNo: this.form.receiptNo,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('quotationTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('quotationTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.client = data.client || this.form.client;
          this.form.reference = data.reference || this.form.reference;
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.transportCost = data.transportCost || this.form.transportCost;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.discount = data.discount || this.form.discount;
          this.form.discountType = data.discountType || this.form.discountType;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.addPayment = data.addPayment || this.form.addPayment;
          this.form.account = data.account || this.form.account;
          this.form.paidAmount = data.paidAmount || this.form.paidAmount;
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod;
          this.form.chequeNo = data.chequeNo || this.form.chequeNo;
          this.form.receiptNo = data.receiptNo || this.form.receiptNo;
          this.form.deliveryPlace = data.deliveryPlace || this.form.deliveryPlace;
          this.form.date = data.date || this.form.date;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail;
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS;
          // One-time restore: clear after successful load so a refresh doesn't restore again
          this.clearTemporaryData();
          // Ensure product fields exist and recalculate totals after restore
          this.ensureDiscountProperties();
          this.calculateSum();
          // Attempt to refresh inventory counts in case stock changed while away
          this.refreshSelectedProductsInventory();
          // Mark that we restored and normalize client to match current items list
          this.restoredFromTemp = true;
          this.normalizeClientSelection();
        } catch (e) {
          console.error('Error loading temporary data:', e);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('quotationTempData');
    },
    // Stock adjustment modal methods
    openStockAdjustmentModal: function openStockAdjustmentModal(product) {
      try {
        console.log("Opening stock adjustment modal for product:", product);

        // Validate product object
        if (!product || !product.id) {
          console.error("Invalid product object:", product);
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Product information is missing. Please try again.")
          });
          return;
        }
        this.selectedProductForStockAdjustment = product;
        this.showStockAdjustmentModal = true;
        console.log("Modal should be open now");
      } catch (error) {
        console.error("Error opening stock adjustment modal:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Failed to open stock adjustment modal. Please try again.")
        });
      }
    },
    closeStockAdjustmentModal: function closeStockAdjustmentModal() {
      this.showStockAdjustmentModal = false;
      this.selectedProductForStockAdjustment = null;
    },
    adjustProductQuantity: function adjustProductQuantity(product) {
      // Find the product in the selected products array and adjust its quantity
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        // Set quantity to available stock
        this.$set(this.form.selectedProducts[index], 'qty', product.inventoryCount);
        this.generateItemTotal(product.inventoryCount, "qty", index, "");
        toast.fire({
          type: "info",
          title: this.$t("Quantity Adjusted"),
          text: this.$t("Product quantity has been adjusted to available stock.")
        });
      }
      this.closeStockAdjustmentModal();
    },
    handleStockUpdated: function handleStockUpdated(eventData) {
      // Refresh products to get updated stock levels
      this.getProducts();

      // Update the specific product in selectedProducts if it exists
      var product = eventData.product,
        newQuantity = eventData.newQuantity;
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount', (this.form.selectedProducts[index].inventoryCount || 0) + newQuantity);

        // Recalculate totals
        this.calculateSum();
      }
    },
    showAllInsufficientStock: function showAllInsufficientStock() {
      var _this7 = this;
      // Show a summary of all insufficient stock products
      var insufficientProducts = this.insufficientStockProducts;
      if (insufficientProducts.length === 0) return;
      var message = this.$t("Products with insufficient stock:") + "\n\n";
      insufficientProducts.forEach(function (product, index) {
        var shortage = Number(product.qty) - Number(product.inventoryCount);
        message += "".concat(index + 1, ". ").concat(product.name, "\n");
        message += "   ".concat(_this7.$t("Required"), ": ").concat(product.qty, ", ").concat(_this7.$t("Available"), ": ").concat(product.inventoryCount, ", ").concat(_this7.$t("Shortage"), ": ").concat(shortage, "\n\n");
      });
      message += this.$t("Click on the red badges next to each product to manage stock levels.");
      toast.fire({
        type: "warning",
        title: this.$t("Insufficient Stock Summary"),
        text: message,
        timer: 10000,
        showConfirmButton: true
      });
    },
    // Sync selected products' inventoryCount with latest products list
    refreshSelectedProductsInventory: function refreshSelectedProductsInventory() {
      try {
        if (!Array.isArray(this.products) || !Array.isArray(this.form.selectedProducts)) return;
        var productById = new Map(this.products.map(function (p) {
          return [p.id, p];
        }));
        this.form.selectedProducts = this.form.selectedProducts.map(function (item) {
          var latest = productById.get(item.id);
          if (latest) {
            var updated = _objectSpread({}, item);
            updated.inventoryCount = latest.inventoryCount;
            // Optionally update name/code/taxRate to reflect latest
            updated.name = latest.name || updated.name;
            updated.code = latest.code || updated.code;
            updated.taxRate = latest.taxRate !== undefined && latest.taxRate !== null ? latest.taxRate : updated.taxRate;
            return updated;
          }
          return item;
        });
        // Recalculate to update any dependent totals
        this.calculateSum();
      } catch (e) {
        // silent fail
      }
    },
    // Normalize form.client to an object from clients by id/slug so v-select shows it
    normalizeClientSelection: function normalizeClientSelection() {
      try {
        if (!this.form.client || !this.clients || this.clients.length === 0) return;
        var current = this.form.client;
        var matched = null;
        if (current.id) {
          matched = this.clients.find(function (i) {
            return i.id === current.id;
          });
        }
        if (!matched && current.slug) {
          matched = this.clients.find(function (i) {
            return i.slug === current.slug;
          });
        }
        if (matched) {
          this.form.client = matched;
        }
      } catch (e) {
        // silent
      }
    }
  },
  mounted: function mounted() {
    var _this8 = this;
    this.loadTemporaryData();
    this.setCorrectTitle();

    // Set up a periodic check to ensure title stays correct
    this.titleCheckInterval = setInterval(function () {
      _this8.setCorrectTitle();
    }, 1000); // Check every second

    // Set up a MutationObserver to watch for title changes
    this.titleObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList' && mutation.target.tagName === 'TITLE') {
          console.log('Title element changed, fixing it');
          _this8.setCorrectTitle();
        }
      });
    });

    // Observe the head element for title changes
    var head = document.querySelector('head');
    if (head) {
      this.titleObserver.observe(head, {
        childList: true,
        subtree: true
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up the interval
    if (this.titleCheckInterval) {
      clearInterval(this.titleCheckInterval);
    }

    // Clean up the observer
    if (this.titleObserver) {
      this.titleObserver.disconnect();
    }
  }
});
;// ./resources/js/pages/sales/quotations/create.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/create.vue?vue&type=style&index=0&id=f996c97c&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_f996c97c_prod_scoped_true_lang_css = __webpack_require__(50487);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/create.vue?vue&type=style&index=0&id=f996c97c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_f996c97c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const quotations_createvue_type_style_index_0_id_f996c97c_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_f996c97c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/quotations/create.vue?vue&type=style&index=0&id=f996c97c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/quotations/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  quotations_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "f996c97c",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 37460:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'और',
                minus: 'ऋण',
                only: '',
                point: 'दशांश',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'करोड़' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हज़ार' },
                { number: 100, value: 'सौ' },
                { number: 99, value: 'निन्यानवे' },
                { number: 98, value: 'अट्ठानवे' },
                { number: 97, value: 'सत्तानवे' },
                { number: 96, value: 'छियानवे' },
                { number: 95, value: 'पचानवे' },
                { number: 94, value: 'चौरानवे' },
                { number: 93, value: 'तिरानवे' },
                { number: 92, value: 'बानवे' },
                { number: 91, value: 'इक्यानबे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'नवासी' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छियासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'तिरासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'इक्यासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छिहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'तिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'इकहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'उनहत्तर' },
                { number: 68, value: 'अड़सठ' },
                { number: 67, value: 'सड़सठ' },
                { number: 66, value: 'छियासठ' },
                { number: 65, value: 'पैंसठ' },
                { number: 64, value: 'चौंसठ' },
                { number: 63, value: 'तिरसठ' },
                { number: 62, value: 'बासठ' },
                { number: 61, value: 'इकसठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'उनसठ' },
                { number: 58, value: 'अट्ठावन' },
                { number: 57, value: 'सत्तावन' },
                { number: 56, value: 'छप्पन' },
                { number: 55, value: 'पचपन' },
                { number: 54, value: 'चौबन' },
                { number: 53, value: 'तिरेपन' },
                { number: 52, value: 'बावन' },
                { number: 51, value: 'इक्याबन' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनचास' },
                { number: 48, value: 'अड़तालीस' },
                { number: 47, value: 'सैंतालीस' },
                { number: 46, value: 'छियालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चौंतालीस' },
                { number: 43, value: 'तैंतालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'इकतालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनतालीस' },
                { number: 38, value: 'अड़तीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौंतीस' },
                { number: 33, value: 'तैंतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'इकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनतीस' },
                { number: 28, value: 'अट्ठाईस' },
                { number: 27, value: 'सत्ताईस' },
                { number: 26, value: 'छब्बीस' },
                { number: 25, value: 'पच्चीस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेईस' },
                { number: 22, value: 'बाईस' },
                { number: 21, value: 'इक्कीस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नीस' },
                { number: 18, value: 'अठारह' },
                { number: 17, value: 'सत्रह' },
                { number: 16, value: 'सोलह' },
                { number: 15, value: 'पंद्रह' },
                { number: 14, value: 'चौदह' },
                { number: 13, value: 'तेरह' },
                { number: 12, value: 'बारह' },
                { number: 11, value: 'ग्यारह' },
                { number: 10, value: 'दस' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छह' },
                { number: 5, value: 'पांच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दो' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 38765:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Kyat',
                plural: 'Kyats',
                singular: 'Kyat',
                symbol: 'K',
                fractionalUnit: {
                    name: 'Pya',
                    singular: 'Pya',
                    plural: 'Pyas',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 41061:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Taka',
                plural: 'Taka',
                singular: 'Taka',
                symbol: '৳',
                fractionalUnit: {
                    name: 'Poysha',
                    singular: 'Poysha',
                    plural: 'Poysha',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 44130:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'lira',
                plural: '',
                singular: '',
                symbol: '₺',
                fractionalUnit: {
                    name: '',
                    singular: 'lira',
                    plural: 'lira',
                    symbol: '',
                },
            },
            texts: {
                and: 'virgül',
                minus: 'eksi',
                only: '',
                point: 'virgül',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'katrilyon' },
                { number: 1000000000000, value: 'trilyon' },
                { number: 1000000000, value: 'milyar' },
                { number: 1000000, value: 'milyon' },
                { number: 1000, value: 'bin' },
                { number: 900, value: 'dokuz yüz' },
                { number: 800, value: 'sekiz yüz' },
                { number: 700, value: 'yedi yüz' },
                { number: 600, value: 'altı yüz' },
                { number: 500, value: 'beş yüz' },
                { number: 400, value: 'dört yüz' },
                { number: 300, value: 'üç yüz' },
                { number: 200, value: 'iki yüz' },
                { number: 100, value: 'yüz' },
                { number: 90, value: 'doksan' },
                { number: 80, value: 'seksen' },
                { number: 70, value: 'yetmiş' },
                { number: 60, value: 'altmış' },
                { number: 50, value: 'elli' },
                { number: 40, value: 'kırk' },
                { number: 30, value: 'otuz' },
                { number: 20, value: 'yirmi' },
                { number: 19, value: 'on dokuz' },
                { number: 18, value: 'on sekiz' },
                { number: 17, value: 'on yedi' },
                { number: 16, value: 'on altı' },
                { number: 15, value: 'on beş' },
                { number: 14, value: 'on dört' },
                { number: 13, value: 'on üç' },
                { number: 12, value: 'on iki' },
                { number: 11, value: 'on bir' },
                { number: 10, value: 'on' },
                { number: 9, value: 'dokuz' },
                { number: 8, value: 'sekiz' },
                { number: 7, value: 'yedi' },
                { number: 6, value: 'altı' },
                { number: 5, value: 'beş' },
                { number: 4, value: 'dört' },
                { number: 3, value: 'üç' },
                { number: 2, value: 'iki' },
                { number: 1, value: 'bir' },
                { number: 0, value: 'sıfır' },
            ],
            namedLessThan1000: true,
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'onuncu',
                2: 'yüzüncü',
                3: 'bininci',
                4: 'on bininci',
                5: 'yüz bininci',
                6: 'on milyonuncu',
                7: 'milyonuncu',
                8: 'yüz milyonuncu',
            },
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 44659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-group[data-v-3d82b5ae]{margin-bottom:1rem}.form-group label[data-v-3d82b5ae]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-3d82b5ae]{color:#dc3545;font-weight:700}.form-control[data-v-3d82b5ae]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-3d82b5ae]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-3d82b5ae]{border-color:#dc3545!important}textarea.form-control[data-v-3d82b5ae]{min-height:100px;resize:vertical}.btn-success[data-v-3d82b5ae]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-3d82b5ae]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-3d82b5ae]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-3d82b5ae]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-3d82b5ae]{cursor:pointer;text-decoration:none}.unit-code-tooltip[data-v-3d82b5ae]{transition:all .2s ease}.unit-code-tooltip[data-v-3d82b5ae]:hover{color:#33a0d9!important;transform:scale(1.1)}.form-text[data-v-3d82b5ae]{color:#6c757d;font-size:.85rem;margin-top:.25rem}@media (max-width:768px){.form-group[data-v-3d82b5ae]{margin-bottom:.75rem}.form-text[data-v-3d82b5ae]{font-size:.8rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46709:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso Argentino',
                plural: 'Pesos Argentinos',
                singular: 'Peso Argentino',
                symbol: '$',
                fractionalUnit: {
                    name: 'Centavo',
                    plural: 'Centavos',
                    singular: 'Centavo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Coma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 47229:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'રૂપિયો',
                plural: 'રૂપિયા',
                singular: 'રૂપિયો',
                symbol: '₹',
                fractionalUnit: {
                    name: 'પૈસા',
                    singular: 'પૈસા',
                    plural: 'પૈસા',
                    symbol: '',
                },
            },
            texts: {
                and: 'અને',
                minus: 'ઋણ',
                // only: 'માત્ર',
                only: '',
                point: 'દશાંશ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'કરોડ' },
                { number: 100000, value: 'લાખ' },
                { number: 1000, value: 'હજાર' },
                { number: 100, value: 'સો' },
                { number: 99, value: 'નવ્વાણું' },
                { number: 98, value: 'અઠ્ઠાણું' },
                { number: 97, value: 'સત્તાણું' },
                { number: 96, value: 'છન્નું' },
                { number: 95, value: 'પંચાણું' },
                { number: 94, value: 'ચોરાણું' },
                { number: 93, value: 'ત્રાણું' },
                { number: 92, value: 'બાણું' },
                { number: 91, value: 'એકાણું' },
                { number: 90, value: 'નેવું' },
                { number: 89, value: 'નેવ્યાસી' },
                { number: 88, value: 'ઈઠ્યાસી' },
                { number: 87, value: 'સિત્યાસી' },
                { number: 86, value: 'છ્યાસી' },
                { number: 85, value: 'પંચ્યાસી' },
                { number: 84, value: 'ચોર્યાસી' },
                { number: 83, value: 'ત્યાસી' },
                { number: 82, value: 'બ્યાસી' },
                { number: 81, value: 'એક્યાસી' },
                { number: 80, value: 'એંસી' },
                { number: 79, value: 'ઓગણાએંસી' },
                { number: 78, value: 'ઇઠ્યોતેર' },
                { number: 77, value: 'સિત્યોતેર' },
                { number: 76, value: 'છોતેર' },
                { number: 75, value: 'પંચોતેર' },
                { number: 74, value: 'ચુમોતેર' },
                { number: 73, value: 'તોતેર' },
                { number: 72, value: 'બોતેર' },
                { number: 71, value: 'એકોતેર' },
                { number: 70, value: 'સિત્તેર' },
                { number: 69, value: 'ઓગણોસિત્તેર' },
                { number: 68, value: 'અડસઠ' },
                { number: 67, value: 'સડસઠ' },
                { number: 66, value: 'છાસઠ' },
                { number: 65, value: 'પાંસઠ' },
                { number: 64, value: 'ચોસઠ' },
                { number: 63, value: 'ત્રેસઠ' },
                { number: 62, value: 'બાસઠ' },
                { number: 61, value: 'એકસઠ' },
                { number: 60, value: 'સાઈઠ' },
                { number: 59, value: 'ઓગણસાઠ' },
                { number: 58, value: 'અઠ્ઠાવન' },
                { number: 57, value: 'સત્તાવન' },
                { number: 56, value: 'છપ્પન' },
                { number: 55, value: 'પંચાવન' },
                { number: 54, value: 'ચોપન' },
                { number: 53, value: 'ત્રેપન' },
                { number: 52, value: 'બાવન' },
                { number: 51, value: 'એકાવન' },
                { number: 50, value: 'પચાસ' },
                { number: 49, value: 'ઓગણપચાસ' },
                { number: 48, value: 'સુડતાલીસ' },
                { number: 47, value: 'સુડતાલીસ' },
                { number: 46, value: 'છેતાલીસ' },
                { number: 45, value: 'પિસ્તાલીસ' },
                { number: 44, value: 'ચુંમાલીસ' },
                { number: 43, value: 'ત્રેતાલીસ' },
                { number: 42, value: 'એકતાલીસ' },
                { number: 41, value: 'એકતાલીસ' },
                { number: 40, value: 'ચાલીસ' },
                { number: 39, value: 'ઓગણચાલીસ' },
                { number: 38, value: 'આડત્રીસ' },
                { number: 37, value: 'સાડત્રીસ' },
                { number: 36, value: 'છત્રીસ' },
                { number: 35, value: 'પાંત્રીસ' },
                { number: 34, value: 'ચોત્રીસ' },
                { number: 33, value: 'તેત્રીસ' },
                { number: 32, value: 'બત્રીસ' },
                { number: 31, value: 'એકત્રીસ' },
                { number: 30, value: 'ત્રીસ' },
                { number: 29, value: 'ઓગણત્રીસ' },
                { number: 28, value: 'અઠ્ઠાવીસ' },
                { number: 27, value: 'સત્તાવીસ' },
                { number: 26, value: 'છવીસ' },
                { number: 25, value: 'પચ્ચીસ' },
                { number: 24, value: 'ચોવીસ' },
                { number: 23, value: 'તેવીસ' },
                { number: 22, value: 'બાવીસ' },
                { number: 21, value: 'એકવીસ' },
                { number: 20, value: 'વીસ' },
                { number: 19, value: 'ઓગણિસ' },
                { number: 18, value: 'અઢાર' },
                { number: 17, value: 'સત્તર' },
                { number: 16, value: 'સોળ' },
                { number: 15, value: 'પંદર' },
                { number: 14, value: 'ચૌદ' },
                { number: 13, value: 'તેર' },
                { number: 12, value: 'બાર' },
                { number: 11, value: 'અગિયાર' },
                { number: 10, value: 'દસ' },
                { number: 9, value: 'નવ' },
                { number: 8, value: 'આઠ' },
                { number: 7, value: 'સાત' },
                { number: 6, value: 'છ' },
                { number: 5, value: 'પાંચ' },
                { number: 4, value: 'ચાર' },
                { number: 3, value: 'ત્રણ' },
                { number: 2, value: 'બે' },
                { number: 1, value: 'એક' },
                { number: 0, value: 'શૂન્ય' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 50487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-f996c97c]{margin-bottom:15px}.footer-buttons[data-v-f996c97c]{display:flex;gap:10px}.footer-buttons .btn[data-v-f996c97c]{margin-right:10px}.footer-buttons .btn[data-v-f996c97c]:last-child{margin-right:0}.create-btn[data-v-f996c97c]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-f996c97c]:hover{background-color:#e9ecef}.edit-btn[data-v-f996c97c]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-f996c97c]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-f996c97c]{border:none!important}.quotations-create-table[data-v-f996c97c]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-f996c97c]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-f996c97c]{border:none!important}.quotations-create-table thead th[data-v-f996c97c]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-f996c97c]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-f996c97c]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-f996c97c]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-f996c97c]{gap:10px}.card[data-v-f996c97c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-f996c97c]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-f996c97c]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-f996c97c]{background:#fff!important}.btn-primary[data-v-f996c97c]{background:#2ab930!important}.btn-secondary[data-v-f996c97c]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-f996c97c]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-f996c97c],.button-plus[data-v-f996c97c]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-f996c97c]{background-color:#dc3545;color:#fff}.button-plus[data-v-f996c97c]{background-color:#007bff;color:#fff}.button-minus[data-v-f996c97c]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-f996c97c]:hover{background-color:#0056b3;transform:scale(1.05)}.price-field[data-v-f996c97c]{width:100%}.quantity-field[data-v-f996c97c]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-f996c97c]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-f996c97c]{direction:rtl}[dir=rtl] .create-btn[data-v-f996c97c]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-f996c97c]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-f996c97c]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-f996c97c]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-f996c97c]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-f996c97c]{border-right:1px solid #ced4da}.clickable-badge[data-v-f996c97c]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-f996c97c]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-f996c97c]:active{transform:scale(.95)}.insufficient-stock-input[data-v-f996c97c]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-f996c97c]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.debug-panel[data-v-f996c97c]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none}.debug-panel .card-header[data-v-f996c97c]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-f996c97c]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-f996c97c]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-f996c97c]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-f996c97c]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-f996c97c]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-f996c97c]:last-child{border-bottom:none}.debug-display[data-v-f996c97c]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-f996c97c]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-f996c97c]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-f996c97c]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-f996c97c]:last-child{border-bottom:none}.debug-panel .table th[data-v-f996c97c]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-f996c97c]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-f996c97c]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-f996c97c]{padding:15px}.debug-item .row[data-v-f996c97c]{margin:0}.debug-item .col-md-6[data-v-f996c97c]{padding:0 5px}.debug-step[data-v-f996c97c]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-f996c97c]{font-size:.75em}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientEditModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=template&id=19537cc9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Edit Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientEditModal,
      callback: function callback($$v) {
        _vm.showClientEditModal = $$v;
      },
      expression: "showClientEditModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false,
      "initialData": _vm.clientData
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "edit-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 6 modules
var ClientForm = __webpack_require__(38558);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=script&lang=js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const ClientEditModalvue_type_script_lang_js = ({
  name: "ClientEditModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  props: {
    // Client data to edit
    client: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showClientEditModal: false,
      form: null,
      isSubmitting: false,
      clientData: {}
    };
  },
  watch: {
    // Watch for changes in client prop
    client: {
      handler: function handler(newClient) {
        if (newClient && Object.keys(newClient).length > 0) {
          this.mapClientData(newClient);
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // Map client data to form structure
    mapClientData: function mapClientData(clientData) {
      console.log('=== MAPPING CLIENT DATA IN EDIT MODAL ===');
      console.log('Original client data:', clientData);
      console.log('Phone fields in client data:');
      console.log('- clientData.phone:', clientData.phone);
      console.log('- clientData.phoneNumber:', clientData.phoneNumber);
      console.log('- clientData.phone_number:', clientData.phone_number);
      console.log('- clientData.mobile:', clientData.mobile);
      this.clientData = {
        // Preserve ID and slug for API calls
        id: clientData.id,
        slug: clientData.slug,
        // Account Details
        codeNumber: clientData.codeNumber || clientData.clientID || clientData.code_number || '000001',
        billingMethod: clientData.billingMethod || 'print',
        currency: clientData.currency || 'EGP',
        classification: clientData.classification || '',
        notes: clientData.notes || '',
        displayLanguage: clientData.displayLanguage || clientData.display_language || '',
        // Client Details
        type: clientData.type || 'Company',
        fullName: clientData.fullName || (clientData.type === 'Individual' ? clientData.name : ''),
        businessName: clientData.businessName || clientData.companyName || clientData.company_name || (clientData.type === 'Company' ? clientData.name : ''),
        firstName: clientData.firstName || clientData.first_name || '',
        lastName: clientData.lastName || clientData.last_name || '',
        phone: clientData.phone || '',
        phoneNumber: clientData.phoneNumber || clientData.phone_number || clientData.phone || clientData.mobile || '',
        email: clientData.email || '',
        // Address Information (make sure all fields are mapped)
        streetAddress1: clientData.streetAddress1 || clientData.street_address_1 || clientData.address || '',
        streetAddress2: clientData.streetAddress2 || clientData.street_address_2 || '',
        city: clientData.city || '',
        state: clientData.state || '',
        postalCode: clientData.postalCode || clientData.postal_code || '',
        country: clientData.country || 'SA',
        neighbourhood: clientData.neighbourhood || '',
        // Saudi National Address fields
        buildingNumber: clientData.buildingNumber || clientData.building_number || '',
        streetNumber: clientData.streetNumber || clientData.street_number || '',
        districtNumber: clientData.districtNumber || clientData.district_number || '',
        unitNumber: clientData.unitNumber || clientData.unit_number || '',
        additionalNumber: clientData.additionalNumber || clientData.additional_number || '',
        // Business Information
        commercialRegister: clientData.commercialRegister || clientData.commercial_register || clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        taxCard: clientData.taxCard || clientData.tax_card || '',
        addSecondaryAddress: clientData.addSecondaryAddress || false,
        // Additional Fields
        image: clientData.image || '',
        image_path: clientData.image_path || '',
        attachments: Array.isArray(clientData.attachments) ? clientData.attachments : [],
        status: clientData.status !== undefined ? clientData.status : 1,
        isSendEmail: Boolean(clientData.isSendEmail || clientData.is_send_email),
        isSendSMS: Boolean(clientData.isSendSMS || clientData.is_send_sms),
        // Representatives (ensure this is included)
        representatives: Array.isArray(clientData.representatives) ? clientData.representatives : [],
        // Chart of Account
        chartOfAccountId: clientData.chartOfAccountId || clientData.chart_of_account_id || null,
        // Legacy fields for backward compatibility
        name: clientData.name || '',
        companyName: clientData.companyName || clientData.company_name || '',
        taxRegistrationNumber: clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        address: clientData.address || ''
      };
      console.log('Mapped client data for form:', this.clientData);
      console.log('=== END MAPPING CLIENT DATA ===');
    },
    // Edit client
    submitItem: function submitItem(evt) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              evt.preventDefault();
              _context.n = 1;
              return _this.editClient();
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    editClient: function editClient() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var formData, submitData, hasFiles, clientSlug, response, fd, appendIfDefined, phoneNumberValue, phoneNumberToSend, _iterator, _step, pair, _error$response, errorMessage, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!_this2.isSubmitting) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _this2.isSubmitting = true;
              _context2.p = 2;
              // Get the form from the ClientForm component
              _this2.form = _this2.$refs.clientForm.getFormData();

              // Validate the form
              _context2.n = 3;
              return _this2.$refs.clientForm.validateForm();
            case 3:
              if (_context2.v) {
                _context2.n = 4;
                break;
              }
              _this2.isSubmitting = false;
              return _context2.a(2);
            case 4:
              // Get form data directly from ClientForm component
              formData = _this2.$refs.clientForm.getFormData(); // Build the submit data manually (same as ClientForm.submitForm does)
              submitData = {
                codeNumber: formData.codeNumber,
                notes: formData.notes,
                displayLanguage: formData.displayLanguage,
                status: formData.status,
                type: formData.type,
                fullName: formData.fullName,
                businessName: formData.businessName,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                phoneNumber: formData.phoneNumber || '',
                // Explicitly include phone number
                email: formData.email,
                streetAddress1: formData.streetAddress1,
                city: formData.city,
                state: formData.state,
                postalCode: formData.postalCode,
                country: formData.country,
                neighbourhood: formData.neighbourhood,
                commercialRegister: formData.commercialRegister,
                taxCard: formData.taxCard,
                buildingNumber: formData.buildingNumber,
                unitNumber: formData.unitNumber,
                additionalNumber: formData.additionalNumber,
                image: formData.image,
                attachments: formData.attachments,
                isSendEmail: formData.isSendEmail,
                isSendSMS: formData.isSendSMS,
                name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
                companyName: formData.businessName,
                taxRegistrationNumber: formData.taxCard,
                address: formData.streetAddress1,
                representatives: formData.representatives || [],
                chartOfAccountId: formData.chartOfAccountId
              }; // Check if we have files (image or attachments) - if so, use FormData
              hasFiles = submitData.image && submitData.image instanceof File || Array.isArray(submitData.attachments) && submitData.attachments.some(function (f) {
                return f instanceof File;
              });
              clientSlug = _this2.clientData.slug || _this2.client.slug;
              if (!hasFiles) {
                _context2.n = 6;
                break;
              }
              // Build multipart/form-data to properly send files (image, attachments)
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Simple scalar fields
              appendIfDefined('codeNumber', submitData.codeNumber);
              appendIfDefined('notes', submitData.notes);
              appendIfDefined('displayLanguage', submitData.displayLanguage);
              appendIfDefined('type', submitData.type);
              appendIfDefined('fullName', submitData.fullName);
              appendIfDefined('businessName', submitData.businessName);
              appendIfDefined('firstName', submitData.firstName);
              appendIfDefined('lastName', submitData.lastName);
              appendIfDefined('phone', submitData.phone);

              // Phone number is required - always include it
              phoneNumberValue = submitData.phoneNumber;
              if (phoneNumberValue === undefined || phoneNumberValue === null) {
                if (_this2.$refs.clientForm && _this2.$refs.clientForm.form) {
                  phoneNumberValue = _this2.$refs.clientForm.form.phoneNumber;
                }
              }
              phoneNumberValue = phoneNumberValue || '';
              console.log('ClientEditModal - Adding phoneNumber to FormData:', phoneNumberValue);
              console.log('ClientEditModal - phoneNumber type:', _typeof(phoneNumberValue));
              console.log('ClientEditModal - phoneNumber length:', phoneNumberValue ? phoneNumberValue.length : 0);
              // Use explicit string conversion and ensure it's not null/undefined
              phoneNumberToSend = phoneNumberValue ? String(phoneNumberValue).trim() : '';
              console.log('ClientEditModal - phoneNumberToSend:', phoneNumberToSend);
              fd.append('phoneNumber', phoneNumberToSend);

              // Debug: Log all FormData entries
              console.log('ClientEditModal - FormData entries:');
              _iterator = _createForOfIteratorHelper(fd.entries());
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  pair = _step.value;
                  console.log(pair[0] + ': ' + pair[1]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              appendIfDefined('email', submitData.email);
              appendIfDefined('streetAddress1', submitData.streetAddress1);
              appendIfDefined('city', submitData.city);
              appendIfDefined('state', submitData.state);
              appendIfDefined('postalCode', submitData.postalCode);
              appendIfDefined('country', submitData.country);
              appendIfDefined('neighbourhood', submitData.neighbourhood);
              appendIfDefined('commercialRegister', submitData.commercialRegister);
              appendIfDefined('taxCard', submitData.taxCard);
              appendIfDefined('status', submitData.status);
              appendIfDefined('isSendEmail', submitData.isSendEmail ? 1 : 0);
              appendIfDefined('isSendSMS', submitData.isSendSMS ? 1 : 0);

              // Saudi National Address Fields
              appendIfDefined('buildingNumber', submitData.buildingNumber);
              appendIfDefined('unitNumber', submitData.unitNumber);
              appendIfDefined('additionalNumber', submitData.additionalNumber);

              // Chart of Account
              if (submitData.chartOfAccountId) {
                fd.append('chartOfAccountId', submitData.chartOfAccountId);
              }

              // Image file
              if (submitData.image instanceof File) {
                fd.append('image', submitData.image);
              }

              // Attachments array
              if (Array.isArray(submitData.attachments)) {
                submitData.attachments.forEach(function (file, idx) {
                  if (file instanceof File) {
                    fd.append("attachments[".concat(idx, "]"), file);
                  }
                });
              }

              // Representatives array (as nested fields)
              if (Array.isArray(submitData.representatives)) {
                submitData.representatives.forEach(function (rep, i) {
                  if (!rep) return;
                  if (rep.name !== undefined && rep.name !== null) fd.append("representatives[".concat(i, "][name]"), rep.name);
                  if (rep.email) fd.append("representatives[".concat(i, "][email]"), rep.email);
                  if (rep.phone) fd.append("representatives[".concat(i, "][phone]"), rep.phone);
                  if (rep.position) fd.append("representatives[".concat(i, "][position]"), rep.position);
                });
              }
              _context2.n = 5;
              return _this2.$http.put("/api/clients/".concat(clientSlug), fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 5:
              response = _context2.v;
              _context2.n = 8;
              break;
            case 6:
              _context2.n = 7;
              return _this2.$http.put("/api/clients/".concat(clientSlug), submitData);
            case 7:
              response = _context2.v;
            case 8:
              if (!response.data.success) {
                _context2.n = 9;
                break;
              }
              toast.fire({
                type: "success",
                title: _this2.$t("Client updated successfully")
              });
              _this2.$emit("reloadClients");
              _this2.closeModal();
              _this2.form = null; // Reset form reference
              _context2.n = 10;
              break;
            case 9:
              throw new Error(response.data.message || 'Update failed');
            case 10:
              _context2.n = 12;
              break;
            case 11:
              _context2.p = 11;
              _t = _context2.v;
              console.error("Error in editClient:", _t);
              errorMessage = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t("Please check your input and try again.");
              toast.fire({
                type: "error",
                title: errorMessage
              });
              _this2.isSubmitting = false;
            case 12:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 11]]);
      }))();
    },
    toggleModal: function toggleModal() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, fullClientData, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this3.showClientEditModal = !_this3.showClientEditModal;
              // Reset form when opening modal
              if (!_this3.showClientEditModal) {
                _context3.n = 4;
                break;
              }
              _this3.form = null;
              _this3.isSubmitting = false;

              // If we have a client prop and it has a slug, fetch full data
              if (!(_this3.client && _this3.client.slug)) {
                _context3.n = 4;
                break;
              }
              _context3.p = 1;
              console.log('Fetching full client data for toggle modal...');
              _context3.n = 2;
              return _this3.$http.get("/api/clients/".concat(_this3.client.slug));
            case 2:
              response = _context3.v;
              fullClientData = response.data.data || response.data;
              console.log('Full client data received via toggle:', fullClientData);
              _this3.mapClientData(fullClientData);
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Error fetching full client data via toggle:', _t2);
              // Fallback to existing data
              if (_this3.client && Object.keys(_this3.client).length > 0) {
                _this3.mapClientData(_this3.client);
              }
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showClientEditModal = false;
      this.$emit('close');
    },
    // Open modal with client data (fetch full data from API)
    openModal: function openModal() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var client, clientToEdit, response, fullClientData, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              client = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              clientToEdit = client || _this4.client;
              if (clientToEdit) {
                _context4.n = 1;
                break;
              }
              console.error('No client data provided for editing');
              return _context4.a(2);
            case 1:
              if (!clientToEdit.slug) {
                _context4.n = 6;
                break;
              }
              _context4.p = 2;
              console.log('Fetching full client data for edit modal...');
              // Fetch complete client data from API
              _context4.n = 3;
              return _this4.$http.get("/api/clients/".concat(clientToEdit.slug));
            case 3:
              response = _context4.v;
              fullClientData = response.data.data || response.data;
              console.log('Full client data received:', fullClientData);
              _this4.mapClientData(fullClientData);
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t3 = _context4.v;
              console.error('Error fetching full client data:', _t3);
              // Fallback to partial data if API call fails
              _this4.mapClientData(clientToEdit);
            case 5:
              _context4.n = 7;
              break;
            case 6:
              // Fallback to partial data if no slug
              _this4.mapClientData(clientToEdit);
            case 7:
              _this4.showClientEditModal = true;
              _this4.form = null;
              _this4.isSubmitting = false;
            case 8:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 4]]);
      }))();
    }
  }
});
;// ./resources/js/components/ClientEditModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientEditModalvue_type_script_lang_js = (ClientEditModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=19537cc9&prod&scoped=true&lang=css
var ClientEditModalvue_type_style_index_0_id_19537cc9_prod_scoped_true_lang_css = __webpack_require__(56654);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=19537cc9&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientEditModalvue_type_style_index_0_id_19537cc9_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientEditModalvue_type_style_index_0_id_19537cc9_prod_scoped_true_lang_css = (ClientEditModalvue_type_style_index_0_id_19537cc9_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ClientEditModal.vue?vue&type=style&index=0&id=19537cc9&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ClientEditModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "19537cc9",
  null
  
)

/* harmony default export */ const ClientEditModal = (component.exports);

/***/ }),

/***/ 54330:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Pound',
                plural: 'Pounds',
                singular: 'Pound',
                symbol: '£',
                fractionalUnit: {
                    name: 'Pence',
                    plural: 'Pence',
                    singular: 'Penny',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 54890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-4f62f01c]{cursor:pointer;text-decoration:none}.modal-content[data-v-4f62f01c]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 54923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToWords = exports.DefaultToWordsOptions = exports.DefaultConverterOptions = exports.LOCALES = void 0;
const locales_1 = __importDefault(__webpack_require__(71545));
exports.LOCALES = locales_1.default;
exports.DefaultConverterOptions = {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
};
exports.DefaultToWordsOptions = {
    localeCode: 'en-IN',
    converterOptions: exports.DefaultConverterOptions,
};
class ToWords {
    constructor(options = {}) {
        this.options = {};
        this.locale = undefined;
        this.options = Object.assign({}, exports.DefaultToWordsOptions, options);
    }
    getLocaleClass() {
        if (!(this.options.localeCode in locales_1.default)) {
            throw new Error(`Unknown Locale "${this.options.localeCode}"`);
        }
        return locales_1.default[this.options.localeCode];
    }
    getLocale() {
        if (this.locale === undefined) {
            const LocaleClass = this.getLocaleClass();
            this.locale = new LocaleClass();
        }
        return this.locale;
    }
    convert(number, options = {}) {
        var _a;
        options = Object.assign({}, this.options.converterOptions, options);
        if (!this.isValidNumber(number)) {
            throw new Error(`Invalid Number "${number}"`);
        }
        if (options.ignoreDecimal) {
            number = Number.parseInt(number.toString());
        }
        let words = [];
        if (options.currency) {
            words = this.convertCurrency(number, options);
        }
        else {
            words = this.convertNumber(number);
        }
        if ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.config.trim) {
            return words.join('');
        }
        return words.join(' ');
    }
    convertNumber(number) {
        var _a, _b, _c;
        const locale = this.getLocale();
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        const split = number.toString().split('.');
        const ignoreZero = this.isNumberZero(number) && locale.config.ignoreZeroInDecimals;
        let words = this.convertInternal(Number(split[0]), true);
        const isFloat = this.isFloat(number);
        if (isFloat && ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.point);
            }
            if (split[1].startsWith('0') && !((_a = locale.config) === null || _a === void 0 ? void 0 : _a.decimalLengthWordMapping)) {
                const zeroWords = [];
                for (const num of split[1]) {
                    zeroWords.push(...this.convertInternal(Number(num), true));
                }
                wordsWithDecimal.push(...zeroWords);
            }
            else {
                wordsWithDecimal.push(...this.convertInternal(Number(split[1]), true));
                const decimalLengthWord = (_c = (_b = locale.config) === null || _b === void 0 ? void 0 : _b.decimalLengthWordMapping) === null || _c === void 0 ? void 0 : _c[split[1].length];
                if (decimalLengthWord) {
                    wordsWithDecimal.push(decimalLengthWord);
                }
            }
        }
        const isEmpty = words.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        words.push(...wordsWithDecimal);
        return words;
    }
    convertCurrency(number, options = {}) {
        var _a, _b, _c, _d;
        const locale = this.getLocale();
        const currencyOptions = (_a = options.currencyOptions) !== null && _a !== void 0 ? _a : locale.config.currency;
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        number = this.toFixed(number);
        // Extra check for isFloat to overcome 1.999 rounding off to 2
        const split = number.toString().split('.');
        let words = [...this.convertInternal(Number(split[0]))];
        // Determine if the main currency should be in singular form
        // e.g. 1 Dollar Only instead of 1 Dollars Only
        if (Number(split[0]) === 1 && currencyOptions.singular) {
            words.push(currencyOptions.singular);
        }
        else if (currencyOptions.plural) {
            words.push(currencyOptions.plural);
        }
        const ignoreZero = this.isNumberZero(number) &&
            (options.ignoreZeroCurrency || (((_b = locale.config) === null || _b === void 0 ? void 0 : _b.ignoreZeroInDecimals) && number !== 0));
        if (ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        const isFloat = this.isFloat(number);
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.and);
            }
            const decimalPart = Number(split[1]) * (!locale.config.decimalLengthWordMapping ? Math.pow(10, 2 - split[1].length) : 1);
            wordsWithDecimal.push(...this.convertInternal(decimalPart));
            const decimalLengthWord = (_d = (_c = locale.config) === null || _c === void 0 ? void 0 : _c.decimalLengthWordMapping) === null || _d === void 0 ? void 0 : _d[split[1].length];
            if (decimalLengthWord === null || decimalLengthWord === void 0 ? void 0 : decimalLengthWord.length) {
                wordsWithDecimal.push(decimalLengthWord);
            }
            // Determine if the fractional unit should be in singular form
            // e.g. 1 Dollar and 1 Cent Only instead of 1 Dollar and 1 Cents Only
            if (decimalPart === 1 && currencyOptions.fractionalUnit.singular) {
                wordsWithDecimal.push(currencyOptions.fractionalUnit.singular);
            }
            else {
                wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
            }
        }
        else if (locale.config.decimalLengthWordMapping && words.length) {
            wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
        }
        const isEmpty = words.length <= 0 && wordsWithDecimal.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        if (!isEmpty && locale.config.texts.only && !options.doNotAddOnly && !locale.config.onlyInFront) {
            wordsWithDecimal.push(locale.config.texts.only);
        }
        if (wordsWithDecimal.length) {
            words.push(...wordsWithDecimal);
        }
        if (!isEmpty && !options.doNotAddOnly && locale.config.onlyInFront) {
            words.splice(0, 0, locale.config.texts.only);
        }
        return words;
    }
    convertInternal(number, trailing = false) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const locale = this.getLocale();
        if (locale.config.exactWordsMapping) {
            const exactMatch = (_b = (_a = locale.config) === null || _a === void 0 ? void 0 : _a.exactWordsMapping) === null || _b === void 0 ? void 0 : _b.find((elem) => {
                return number === elem.number;
            });
            if (exactMatch) {
                return [Array.isArray(exactMatch.value) ? exactMatch.value[+trailing] : exactMatch.value];
            }
        }
        const match = locale.config.numberWordsMapping.find((elem) => {
            return number >= elem.number;
        });
        const words = [];
        if (number <= 100 || (number < 1000 && locale.config.namedLessThan1000)) {
            words.push(Array.isArray(match.value) ? match.value[0] : match.value);
            number -= match.number;
            if (number > 0) {
                if ((_d = (_c = locale.config) === null || _c === void 0 ? void 0 : _c.splitWord) === null || _d === void 0 ? void 0 : _d.length) {
                    words.push(locale.config.splitWord);
                }
                words.push(...this.convertInternal(number, trailing));
            }
            return words;
        }
        const quotient = Math.floor(number / match.number);
        const remainder = number % match.number;
        let matchValue = Array.isArray(match.value) ? match.value[0] : match.value;
        if (quotient > 1 && ((_f = (_e = locale.config) === null || _e === void 0 ? void 0 : _e.pluralWords) === null || _f === void 0 ? void 0 : _f.find((word) => word === match.value)) && ((_g = locale.config) === null || _g === void 0 ? void 0 : _g.pluralMark)) {
            matchValue += locale.config.pluralMark;
        }
        if (quotient % 10 === 1) {
            matchValue = match.singularValue || (Array.isArray(matchValue) ? matchValue[0] : matchValue);
        }
        if (quotient === 1 && ((_j = (_h = locale.config) === null || _h === void 0 ? void 0 : _h.ignoreOneForWords) === null || _j === void 0 ? void 0 : _j.includes(matchValue))) {
            words.push(matchValue);
        }
        else {
            words.push(...this.convertInternal(quotient, false), matchValue);
        }
        if (remainder > 0) {
            if ((_l = (_k = locale.config) === null || _k === void 0 ? void 0 : _k.splitWord) === null || _l === void 0 ? void 0 : _l.length) {
                if (!((_o = (_m = locale.config) === null || _m === void 0 ? void 0 : _m.noSplitWordAfter) === null || _o === void 0 ? void 0 : _o.find((word) => word === match.value))) {
                    words.push(locale.config.splitWord);
                }
            }
            words.push(...this.convertInternal(remainder, trailing));
        }
        return words;
    }
    toFixed(number, precision = 2) {
        return Number(Number(number).toFixed(precision));
    }
    isFloat(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    isValidNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
    isNumberZero(number) {
        return number >= 0 && number < 1;
    }
}
exports.ToWords = ToWords;


/***/ }),

/***/ 55101:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Surinaamse dollar',
                plural: 'Surinaamse dollars',
                singular: 'Surinaamse dollar',
                symbol: 'SRD',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Centen',
                    symbol: 'SRD',
                },
            },
            texts: {
                and: 'En',
                minus: 'Negatief',
                only: '',
                point: 'Punt',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Biljard' },
                { number: 1000000000000, value: 'Biljoen' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljoen' },
                { number: 1000, value: 'Duizend' },
                { number: 100, value: 'Honderd' },
                { number: 99, value: 'Negenennegentig' },
                { number: 98, value: 'Achtennegentig' },
                { number: 97, value: 'Zevenennegentig' },
                { number: 96, value: 'Zesennegentig' },
                { number: 95, value: 'Vijfennegentig' },
                { number: 94, value: 'Vierennegentig' },
                { number: 93, value: 'Drieënnegentig' },
                { number: 92, value: 'Tweeënnegentig' },
                { number: 91, value: 'Eenennegentig' },
                { number: 90, value: 'Negentig' },
                { number: 89, value: 'Negenentachtig' },
                { number: 88, value: 'Achtentachtig' },
                { number: 87, value: 'Zevenentachtig' },
                { number: 86, value: 'Zesentachtig' },
                { number: 85, value: 'Vijfentachtig' },
                { number: 84, value: 'Vierentachtig' },
                { number: 83, value: 'Drieëntachtig' },
                { number: 82, value: 'Tweeëntachtig' },
                { number: 81, value: 'Eenentachtig' },
                { number: 80, value: 'Tachtig' },
                { number: 79, value: 'Negenenzeventig' },
                { number: 78, value: 'Achtenzeventig' },
                { number: 77, value: 'Zevenenzeventig' },
                { number: 76, value: 'Zesenzeventig' },
                { number: 75, value: 'Vijfenzeventig' },
                { number: 74, value: 'Vierenzeventig' },
                { number: 73, value: 'Drieënzeventig' },
                { number: 72, value: 'Tweeënzeventig' },
                { number: 71, value: 'Eenenzeventig' },
                { number: 70, value: 'Zeventig' },
                { number: 69, value: 'Negenenzestig' },
                { number: 68, value: 'Achtenzestig' },
                { number: 67, value: 'Zevenenzestig' },
                { number: 66, value: 'Zesenzestig' },
                { number: 65, value: 'Vijfenzestig' },
                { number: 64, value: 'Vierenzestig' },
                { number: 63, value: 'Drieënzestig' },
                { number: 62, value: 'Tweeënzestig' },
                { number: 61, value: 'Eenenzestig' },
                { number: 60, value: 'Zestig' },
                { number: 59, value: 'Negenenvijftig' },
                { number: 58, value: 'Achtenvijftig' },
                { number: 57, value: 'Zevenenvijftig' },
                { number: 56, value: 'Zesenvijftig' },
                { number: 55, value: 'Vijfenvijftig' },
                { number: 54, value: 'Vierenvijftig' },
                { number: 53, value: 'Drieënvijftig' },
                { number: 52, value: 'Tweeënvijftig' },
                { number: 51, value: 'Eenenvijftig' },
                { number: 50, value: 'Vijftig' },
                { number: 49, value: 'Negenenveertig' },
                { number: 48, value: 'Achtenveertig' },
                { number: 47, value: 'Zevenenveertig' },
                { number: 46, value: 'Zesenveertig' },
                { number: 45, value: 'Vijfenveertig' },
                { number: 44, value: 'Vierenveertig' },
                { number: 43, value: 'Drieënveertig' },
                { number: 42, value: 'Tweeënveertig' },
                { number: 41, value: 'Eenenveertig' },
                { number: 40, value: 'Veertig' },
                { number: 39, value: 'Negenendertig' },
                { number: 38, value: 'Achtendertig' },
                { number: 37, value: 'Zevenendertig' },
                { number: 36, value: 'Zesendertig' },
                { number: 35, value: 'Vijfendertig' },
                { number: 34, value: 'Vierendertig' },
                { number: 33, value: 'Drieëndertig' },
                { number: 32, value: 'Tweeëndertig' },
                { number: 31, value: 'Eenendertig' },
                { number: 30, value: 'Dertig' },
                { number: 29, value: 'Negenentwintig' },
                { number: 28, value: 'Achtentwintig' },
                { number: 27, value: 'Zevenentwintig' },
                { number: 26, value: 'Zesentwintig' },
                { number: 25, value: 'Vijfentwintig' },
                { number: 24, value: 'Vierentwintig' },
                { number: 23, value: 'Drieëntwintig' },
                { number: 22, value: 'Tweeëntwintig' },
                { number: 21, value: 'Eenentwintig' },
                { number: 20, value: 'Twintig' },
                { number: 19, value: 'Negentien' },
                { number: 18, value: 'Achttien' },
                { number: 17, value: 'Zeventien' },
                { number: 16, value: 'Zestien' },
                { number: 15, value: 'Vijftien' },
                { number: 14, value: 'Veertien' },
                { number: 13, value: 'Dertien' },
                { number: 12, value: 'Twaalf' },
                { number: 11, value: 'Elf' },
                { number: 10, value: 'Tien' },
                { number: 9, value: 'Negen' },
                { number: 8, value: 'Acht' },
                { number: 7, value: 'Zeven' },
                { number: 6, value: 'Zes' },
                { number: 5, value: 'Vijf' },
                { number: 4, value: 'Vier' },
                { number: 3, value: 'Drie' },
                { number: 2, value: 'Twee' },
                { number: 1, value: 'Een' },
                { number: 0, value: 'Nul' },
            ],
            exactWordsMapping: [{ number: 100, value: 'Honderd' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 56386:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'روپیہ',
                plural: 'روپے',
                singular: 'روپے',
                symbol: '₨',
                fractionalUnit: {
                    name: 'پیسہ',
                    plural: 'پیسے',
                    singular: 'پیسہ',
                    symbol: '',
                },
            },
            texts: {
                and: 'اور',
                minus: 'منفی',
                only: 'صرف',
                point: 'اعشاریہ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'کروڑ' },
                { number: 100000, value: 'لاکھ' },
                { number: 1000, value: 'ہزار' },
                { number: 100, value: 'سو' },
                { number: 99, value: 'نناوے' },
                { number: 98, value: 'اٹھانوے' },
                { number: 97, value: 'ستانوے' },
                { number: 96, value: 'چھیانوے' },
                { number: 95, value: 'پچانوے' },
                { number: 94, value: 'چورانوے' },
                { number: 93, value: 'ترانوے' },
                { number: 92, value: 'بانوے' },
                { number: 91, value: 'اکانوے' },
                { number: 90, value: 'نوے' },
                { number: 89, value: 'نواسی' },
                { number: 88, value: 'اٹھاسی' },
                { number: 87, value: 'ستاسی' },
                { number: 86, value: 'چھیاسی' },
                { number: 85, value: 'پچاسی' },
                { number: 84, value: 'چوراسی' },
                { number: 83, value: 'تراسی' },
                { number: 82, value: 'بیاسی' },
                { number: 81, value: 'اکیاسی' },
                { number: 80, value: 'اسی' },
                { number: 79, value: 'انہتر' },
                { number: 78, value: 'اٹھہتر' },
                { number: 77, value: 'ستتر' },
                { number: 76, value: 'چھہتر' },
                { number: 75, value: 'پچھتر' },
                { number: 74, value: 'چوہتر' },
                { number: 73, value: 'تہتر' },
                { number: 72, value: 'بہتر' },
                { number: 71, value: 'اکہتر' },
                { number: 70, value: 'ستر' },
                { number: 69, value: 'انہتر' },
                { number: 68, value: 'اڑسٹھ' },
                { number: 67, value: 'سڑسٹھ' },
                { number: 66, value: 'چھیاسٹھ' },
                { number: 65, value: 'پینسٹھ' },
                { number: 64, value: 'چونسٹھ' },
                { number: 63, value: 'تریسٹھ' },
                { number: 62, value: 'باسٹھ' },
                { number: 61, value: 'اکسٹھ' },
                { number: 60, value: 'ساٹھ' },
                { number: 59, value: 'انسٹھ' },
                { number: 58, value: 'اٹھاون' },
                { number: 57, value: 'ستاون' },
                { number: 56, value: 'چھپن' },
                { number: 55, value: 'پچپن' },
                { number: 54, value: 'چون' },
                { number: 53, value: 'ترپن' },
                { number: 52, value: 'باون' },
                { number: 51, value: 'اکیاون' },
                { number: 50, value: 'پچاس' },
                { number: 49, value: 'انچاس' },
                { number: 48, value: 'اڑتالیس' },
                { number: 47, value: 'سینتالیس' },
                { number: 46, value: 'چھیالیس' },
                { number: 45, value: 'پینتالیس' },
                { number: 44, value: 'چوالیس' },
                { number: 43, value: 'تینتالیس' },
                { number: 42, value: 'بیالیس' },
                { number: 41, value: 'اکتالیس' },
                { number: 40, value: 'چالیس' },
                { number: 39, value: 'انتالیس' },
                { number: 38, value: 'اڑتیس' },
                { number: 37, value: 'سینتیس' },
                { number: 36, value: 'چھتیس' },
                { number: 35, value: 'پینتیس' },
                { number: 34, value: 'چونتیس' },
                { number: 33, value: 'تینتیس' },
                { number: 32, value: 'بتیس' },
                { number: 31, value: 'اکتیس' },
                { number: 30, value: 'تیس' },
                { number: 29, value: 'انتیس' },
                { number: 28, value: 'اٹھائیس' },
                { number: 27, value: 'ستائیس' },
                { number: 26, value: 'چھبیس' },
                { number: 25, value: 'پچیس' },
                { number: 24, value: 'چوبیس' },
                { number: 23, value: 'تئیس' },
                { number: 22, value: 'بائیس' },
                { number: 21, value: 'اکیس' },
                { number: 20, value: 'بیس' },
                { number: 19, value: 'انیس' },
                { number: 18, value: 'اٹھارہ' },
                { number: 17, value: 'سترہ' },
                { number: 16, value: 'سولہ' },
                { number: 15, value: 'پندرہ' },
                { number: 14, value: 'چودہ' },
                { number: 13, value: 'تیرہ' },
                { number: 12, value: 'بارہ' },
                { number: 11, value: 'گیارہ' },
                { number: 10, value: 'دس' },
                { number: 9, value: 'نو' },
                { number: 8, value: 'آٹھ' },
                { number: 7, value: 'سات' },
                { number: 6, value: 'چھ' },
                { number: 5, value: 'پانچ' },
                { number: 4, value: 'چار' },
                { number: 3, value: 'تین' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'ایک' },
                { number: 0, value: 'صفر' },
            ],
            exactWordsMapping: [{ number: 100, value: 'ایک سو' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 56654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".edit-button[data-v-19537cc9]{cursor:pointer;text-decoration:none}.modal-content[data-v-19537cc9]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58041:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: '원',
                plural: '원',
                symbol: '',
                fractionalUnit: {
                    name: '',
                    plural: '',
                    symbol: '',
                },
            },
            texts: {
                and: '하고 ',
                minus: '마이너스',
                only: '',
                point: '점',
            },
            trim: true,
            numberWordsMapping: [
                { number: 1000000000000, value: '조' },
                { number: 100000000, value: '억' },
                { number: 10000, value: '만' },
                { number: 1000, value: '천' },
                { number: 100, value: '백' },
                { number: 90, value: '구십' },
                { number: 80, value: '팔십' },
                { number: 70, value: '칠십' },
                { number: 60, value: '육십' },
                { number: 50, value: '오십' },
                { number: 40, value: '사십' },
                { number: 30, value: '삼십' },
                { number: 20, value: '이십' },
                { number: 19, value: '십구' },
                { number: 18, value: '십팔' },
                { number: 17, value: '십칠' },
                { number: 16, value: '십육' },
                { number: 15, value: '십오' },
                { number: 14, value: '십사' },
                { number: 13, value: '십삼' },
                { number: 12, value: '십이' },
                { number: 11, value: '십일' },
                { number: 10, value: '십' },
                { number: 9, value: '구' },
                { number: 8, value: '팔' },
                { number: 7, value: '칠' },
                { number: 6, value: '육' },
                { number: 5, value: '오' },
                { number: 4, value: '사' },
                { number: 3, value: '삼' },
                { number: 2, value: '이' },
                { number: 1, value: '일' },
                { number: 0, value: '영' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 59096:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Cedi',
                plural: 'Cedis',
                singular: 'Cedi',
                symbol: 'GH¢',
                fractionalUnit: {
                    name: 'Pesewa',
                    singular: 'Pesewa',
                    plural: 'Pesewas',
                    symbol: 'Gp',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 60130:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centimo',
                    plural: 'Centimos',
                    singular: 'Centimo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Punto',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 64744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_RTLService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73948);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isRTL: false,
      currentLocale: 'en'
    };
  },
  computed: {
    /**
     * Get RTL-aware CSS classes
     */
    rtlClasses: function rtlClasses() {
      return {
        'rtl': this.isRTL,
        'ltr': !this.isRTL,
        'text-right': this.isRTL,
        'text-left': !this.isRTL,
        'float-right': this.isRTL,
        'float-left': !this.isRTL
      };
    },
    /**
     * Get RTL-aware text alignment
     */
    textAlign: function textAlign() {
      return this.isRTL ? 'right' : 'left';
    },
    /**
     * Get RTL-aware float direction
     */
    floatDirection: function floatDirection() {
      return this.isRTL ? 'right' : 'left';
    }
  },
  mounted: function mounted() {
    // Initialize RTL status
    this.updateRTLStatus();

    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange);
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('rtl-changed', this.handleRTLChange);
  },
  methods: {
    /**
     * Update RTL status from service
     */
    updateRTLStatus: function updateRTLStatus() {
      this.isRTL = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getRTLStatus();
      this.currentLocale = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
    },
    /**
     * Handle RTL change events
     */
    handleRTLChange: function handleRTLChange(event) {
      this.isRTL = event.detail.isRTL;
      this.currentLocale = event.detail.locale || _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
      this.$forceUpdate(); // Force component re-render
    },
    /**
     * Set RTL mode for a specific locale
     */
    setRTLMode: function setRTLMode(locale) {
      _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.setRTLModeByLocale(locale);
    },
    /**
     * Check if current locale is RTL
     */
    isCurrentLocaleRTL: function isCurrentLocaleRTL() {
      return _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLanguageRTLStatus(this.currentLocale);
    },
    /**
     * Get RTL-aware margin/padding classes
     */
    getRTLSpacingClasses: function getRTLSpacingClasses(baseClass, size) {
      if (this.isRTL) {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-right-").concat(size), true), "".concat(baseClass, "-left-").concat(size), false);
      } else {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-left-").concat(size), true), "".concat(baseClass, "-right-").concat(size), false);
      }
    },
    /**
     * Get RTL-aware border classes
     */
    getRTLBorderClasses: function getRTLBorderClasses(baseClass, side) {
      if (this.isRTL) {
        var rtlSideMap = {
          'left': 'right',
          'right': 'left',
          'start': 'end',
          'end': 'start'
        };
        return _defineProperty({}, "".concat(baseClass, "-").concat(rtlSideMap[side] || side), true);
      } else {
        return _defineProperty({}, "".concat(baseClass, "-").concat(side), true);
      }
    }
  }
});

/***/ }),

/***/ 65584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=4f62f01c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showClientCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientCreateModal,
      callback: function callback($$v) {
        _vm.showClientCreateModal = $$v;
      },
      expression: "showClientCreateModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false
    },
    on: {
      "submit": _vm.saveClient
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 6 modules
var ClientForm = __webpack_require__(38558);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const ClientCreateModalvue_type_script_lang_js = ({
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      showClientCreateModal: false,
      form: null,
      isSubmitting: false
    };
  },
  methods: {
    // save client
    saveClient: function saveClient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$$refs$clientFor, formData, fd, appendIfDefined, taxStatusValue, taxStatusToSend, response, status, serverErrors, form, errorMessages, errorsObject, mapped, errorTitle, _error$response, errorMessage, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.isSubmitting) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _this.isSubmitting = true;
              _context.p = 2;
              if (_this.$refs.clientForm.validateForm()) {
                _context.n = 3;
                break;
              }
              _this.isSubmitting = false;
              return _context.a(2);
            case 3:
              // Get the form data from the ClientForm component
              formData = _this.$refs.clientForm.getFormData(); // Build multipart/form-data to properly send files and handle boolean conversion
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Debug: Log formData before building FormData - CRITICAL
              console.log('ClientCreateModal - formData received:', {
                taxStatus: formData.taxStatus,
                tax_status: formData.tax_status,
                allFormData: formData
              });
              console.log('ClientCreateModal - formData keys:', Object.keys(formData || {}));
              console.log('ClientCreateModal - formData.taxStatus type:', _typeof(formData.taxStatus));
              console.log('ClientCreateModal - formData.taxStatus value:', formData.taxStatus);
              console.log('ClientCreateModal - formData.tax_status value:', formData.tax_status);
              console.log('ClientCreateModal - $refs.clientForm exists:', !!_this.$refs.clientForm);
              console.log('ClientCreateModal - $refs.clientForm.form exists:', !!(_this.$refs.clientForm && _this.$refs.clientForm.form));
              if (_this.$refs.clientForm && _this.$refs.clientForm.form) {
                console.log('ClientCreateModal - form.taxStatus:', _this.$refs.clientForm.form.taxStatus);
                console.log('ClientCreateModal - form.data() taxStatus:', _this.$refs.clientForm.form.data ? _this.$refs.clientForm.form.data().taxStatus : 'N/A');
              }

              // Simple scalar fields
              appendIfDefined('codeNumber', formData.codeNumber);
              appendIfDefined('notes', formData.notes);
              appendIfDefined('displayLanguage', formData.displayLanguage);
              appendIfDefined('type', formData.type);

              // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
              // Get taxStatus from formData, or try to get it from form object if available
              taxStatusValue = formData.taxStatus || formData.tax_status;
              console.log('ClientCreateModal - Initial taxStatus check:', {
                formDataTaxStatus: formData.taxStatus,
                formDataTax_status: formData.tax_status,
                currentTaxStatusValue: taxStatusValue
              });

              // If still not found, try to get it from the form component
              if (!taxStatusValue && _this.$refs.clientForm && _this.$refs.clientForm.form) {
                taxStatusValue = _this.$refs.clientForm.form.taxStatus;
                console.log('ClientCreateModal - Got taxStatus from form object:', taxStatusValue);
              }

              // Default to non_taxable if still not found
              taxStatusValue = taxStatusValue || 'non_taxable';
              console.log('ClientCreateModal - Final taxStatusValue before appending:', taxStatusValue);

              // Always append taxStatus - never skip it, even if it's the default value
              // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
              taxStatusToSend = String(taxStatusValue || 'non_taxable');
              fd.append('taxStatus', taxStatusToSend);
              fd.append('tax_status', taxStatusToSend);
              console.log('=== CLIENT CREATE MODAL - APPENDING TAX STATUS ===');
              console.log('ClientCreateModal - taxStatusValue:', taxStatusValue);
              console.log('ClientCreateModal - taxStatusToSend:', taxStatusToSend);
              console.log('ClientCreateModal - Appended taxStatus to FormData:', taxStatusToSend);
              console.log('ClientCreateModal - formData.taxStatus:', formData.taxStatus);
              console.log('ClientCreateModal - formData.tax_status:', formData.tax_status);
              console.log('ClientCreateModal - form.taxStatus:', (_this$$refs$clientFor = _this.$refs.clientForm) === null || _this$$refs$clientFor === void 0 || (_this$$refs$clientFor = _this$$refs$clientFor.form) === null || _this$$refs$clientFor === void 0 ? void 0 : _this$$refs$clientFor.taxStatus);

              // Verify it was added
              console.log('ClientCreateModal - FormData has taxStatus:', fd.has('taxStatus'));
              console.log('ClientCreateModal - FormData has tax_status:', fd.has('tax_status'));
              appendIfDefined('fullName', formData.fullName);
              appendIfDefined('businessName', formData.businessName);
              appendIfDefined('firstName', formData.firstName);
              appendIfDefined('lastName', formData.lastName);
              appendIfDefined('phone', formData.phone);
              appendIfDefined('phoneNumber', formData.phoneNumber);
              appendIfDefined('email', formData.email);
              appendIfDefined('streetAddress1', formData.streetAddress1);
              appendIfDefined('streetAddress2', formData.streetAddress2);
              appendIfDefined('city', formData.city);
              appendIfDefined('state', formData.state);
              appendIfDefined('postalCode', formData.postalCode);
              appendIfDefined('country', formData.country);
              appendIfDefined('neighbourhood', formData.neighbourhood);
              appendIfDefined('commercialRegister', formData.commercialRegister);
              appendIfDefined('taxCard', formData.taxCard);
              appendIfDefined('taxRegistrationNumber', formData.taxRegistrationNumber || formData.taxCard);
              appendIfDefined('buildingNumber', formData.buildingNumber);
              appendIfDefined('streetNumber', formData.streetNumber);
              appendIfDefined('districtNumber', formData.districtNumber);
              appendIfDefined('unitNumber', formData.unitNumber);
              appendIfDefined('additionalNumber', formData.additionalNumber);
              appendIfDefined('saudi_region', formData.saudi_region);
              appendIfDefined('status', formData.status);

              // Convert boolean values to integers for Laravel validation
              appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
              appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);

              // Chart of account id (number or object)
              if (formData.chartOfAccountId && _typeof(formData.chartOfAccountId) === 'object' && formData.chartOfAccountId.id) {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId.id);
              } else {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
              }

              // Image file
              if (formData.image instanceof File) {
                fd.append('image', formData.image);
              }

              // Attachments as files
              if (Array.isArray(formData.attachments)) {
                formData.attachments.forEach(function (file, idx) {
                  if (file instanceof File) {
                    fd.append("attachments[".concat(idx, "]"), file);
                  }
                });
              }

              // Representatives array (as nested fields)
              if (Array.isArray(formData.representatives)) {
                formData.representatives.forEach(function (rep, i) {
                  if (!rep) return;
                  if (rep.name !== undefined && rep.name !== null) fd.append("representatives[".concat(i, "][name]"), rep.name);
                  if (rep.email) fd.append("representatives[".concat(i, "][email]"), rep.email);
                  if (rep.phone) fd.append("representatives[".concat(i, "][phone]"), rep.phone);
                  if (rep.position) fd.append("representatives[".concat(i, "][position]"), rep.position);
                  if (rep.is_primary !== undefined && rep.is_primary !== null) fd.append("representatives[".concat(i, "][is_primary]"), rep.is_primary ? 1 : 0);
                  if (rep.notes) fd.append("representatives[".concat(i, "][notes]"), rep.notes);
                });
              }
              _context.n = 4;
              return _this.$http.post("/api/clients", fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 4:
              response = _context.v;
              if (!response.data.success) {
                _context.n = 5;
                break;
              }
              toast.fire({
                type: "success",
                title: _this.$t("Client added successfully")
              });
              _this.$emit("reloadClients");
              _this.$refs.clientForm.resetForm();
              _this.showClientCreateModal = false;
              _this.form = null; // Reset form reference
              _context.n = 6;
              break;
            case 5:
              throw new Error(response.data.message || 'Failed to create client');
            case 6:
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              console.error("Error creating client:", _t);
              status = _t && _t.response && _t.response.status;
              serverErrors = _t && _t.response && _t.response.data && _t.response.data.errors;
              if (status === 422 && serverErrors && _this.$refs.clientForm) {
                // Get form object directly from ClientForm component
                form = _this.$refs.clientForm.form;
                errorMessages = []; // Prepare errors object for vform
                errorsObject = {};
                Object.keys(serverErrors).forEach(function (key) {
                  var messages = serverErrors[key];
                  if (Array.isArray(messages) && messages.length > 0) {
                    // Translate messages before adding to errorsObject
                    var translatedMessages = messages.map(function (msg) {
                      return _this.translateValidationMessage(msg, key);
                    });
                    errorsObject[key] = translatedMessages;

                    // Collect error messages for toast notification
                    var fieldLabel = _this.getFieldLabel(key);
                    translatedMessages.forEach(function (msg) {
                      errorMessages.push("".concat(fieldLabel, ": ").concat(msg));
                    });

                    // Also map attachments.* to attachments field for UI display
                    if (key.startsWith('attachments.')) {
                      if (!errorsObject.attachments) {
                        errorsObject.attachments = translatedMessages;
                      }
                    }
                  }
                });

                // Set errors on form using vform's set method
                if (form && form.errors && typeof form.errors.set === 'function') {
                  form.errors.set(errorsObject);
                  console.log('ClientCreateModal - Set errors on form:', errorsObject);
                } else if (form && form.errors && typeof form.errors.record === 'function') {
                  // Fallback to record method if set is not available
                  mapped = {};
                  Object.keys(errorsObject).forEach(function (key) {
                    mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
                  });
                  form.errors.record(mapped);
                  console.log('ClientCreateModal - Recorded errors on form (fallback):', mapped);
                } else {
                  console.warn('ClientCreateModal - Form errors object not available or invalid');
                }

                // Show detailed error messages in toast
                errorTitle = errorMessages.length > 0 ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? " (+".concat(errorMessages.length - 3, " more)") : '') : _this.$t("Please check the form for errors and try again.");
                toast.fire({
                  type: "error",
                  title: _this.$t("Validation Error"),
                  text: errorTitle,
                  html: errorMessages.length > 0 ? "<div style=\"text-align: left; max-height: 200px; overflow-y: auto;\">".concat(errorMessages.map(function (msg) {
                    return "<div>\u2022 ".concat(msg, "</div>");
                  }).join(''), "</div>") : undefined
                });
              } else {
                errorMessage = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              }
            case 8:
              _context.p = 8;
              _this.isSubmitting = false;
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[2, 7, 8, 9]]);
      }))();
    },
    toggleModal: function toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    },
    // Get field label for error messages
    getFieldLabel: function getFieldLabel(field) {
      var fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account')
      };
      return fieldLabelMap[field] || field;
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for client form fields
      var fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account')
      };

      // Try to translate common validation messages
      var commonMessages = {
        'required': isArabic ? 'مطلوب' : 'required',
        'must be exactly 15 digits': isArabic ? 'يجب أن يكون 15 رقم بالضبط' : 'must be exactly 15 digits',
        'must contain only numbers and be 15 digits': isArabic ? 'يجب أن يحتوي على أرقام فقط ويكون 15 رقم' : 'must contain only numbers and be 15 digits'
      };

      // Check if message contains common patterns
      for (var _i = 0, _Object$entries = Object.entries(commonMessages); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          pattern = _Object$entries$_i[0],
          translation = _Object$entries$_i[1];
        if (message.toLowerCase().includes(pattern.toLowerCase())) {
          var fieldLabel = fieldLabelMap[field] || field;
          return "".concat(fieldLabel, ": ").concat(translation);
        }
      }

      // Return original message if no translation found
      return message;
    }
  }
});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientCreateModalvue_type_script_lang_js = (ClientCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=4f62f01c&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_4f62f01c_prod_scoped_true_lang_css = __webpack_require__(54890);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=4f62f01c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_4f62f01c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_4f62f01c_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_4f62f01c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=4f62f01c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ClientCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4f62f01c",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ }),

/***/ 65676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=52709d36&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showProductCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductCreateModal,
      callback: function callback($$v) {
        _vm.showProductCreateModal = $$v;
      },
      expression: "showProductCreateModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
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
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + " \n            ")])]), _vm._v(" "), _c('div', {
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
      "placeholder": _vm.$t('Enter item code')
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
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory'),
      'category-select': true
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
  }), _vm._v(" "), _c('CategorySubcategoryCreateModal', {
    on: {
      "categoryCreated": _vm.handleCategoryCreated,
      "subcategoryCreated": _vm.handleSubcategoryCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit'),
      'unit-select': true
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
  }), _vm._v(" "), _c('UnitCreateModal', {
    on: {
      "unitCreated": _vm.handleUnitCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
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
  })], 1)]), _vm._v(" "), _c('div', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }, _vm.checkPurchasePriceWarning],
      "blur": _vm.checkPurchasePriceWarning
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  }), _vm._v(" "), _vm.showPurchasePriceWarning ? _c('small', {
    staticClass: "text-warning d-block mt-1"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" " + _vm._s(_vm.$t("Warning: Purchase price is greater than selling price")) + "\n                  ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
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
    staticClass: "form-group"
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
  }), _vm._v("\n              " + _vm._s(_vm.$t("Stock Information")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }, _vm.checkPurchasePriceWarning],
      "change": _vm.checkPurchasePriceWarning,
      "blur": _vm.checkPurchasePriceWarning
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  }), _vm._v(" "), _vm.showPurchasePriceWarning ? _c('small', {
    staticClass: "text-warning d-block mt-1"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" " + _vm._s(_vm.$t("Warning: Purchase price is greater than selling price")) + "\n                  ")]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Accounts will be assigned automatically based on your settings.")))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Sales Account")) + "\n                      "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('span', {
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
  }, [_vm._v("\n                          " + _vm._s(_vm.form.overrideSalesAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                        ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('div', {
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
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Purchase Account")) + "\n                      "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('span', {
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
  }, [_vm._v("\n                          " + _vm._s(_vm.form.overridePurchaseAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                        ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('div', {
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
  })], 1) : _vm._e()])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
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
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=template&id=5be7e019&scoped=true
var CategorySubcategoryCreateModalvue_type_template_id_5be7e019_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Category / Subcategory")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('ul', {
    staticClass: "nav nav-tabs mb-3",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'subcategory'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": [function ($event) {
        _vm.activeTab = 'subcategory';
      }, function ($event) {
        $event.preventDefault();
      }]
    }
  }, [_c('i', {
    staticClass: "fas fa-folder-open mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Subcategory")) + "\n            ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'category'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": [function ($event) {
        _vm.activeTab = 'category';
      }, function ($event) {
        $event.preventDefault();
      }]
    }
  }, [_c('i', {
    staticClass: "fas fa-folder mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Main Category")) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTab === 'category',
      expression: "activeTab === 'category'"
    }],
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'category'
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.categoryForm.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "categoryName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.name,
      expression: "categoryForm.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('name')
    },
    attrs: {
      "id": "categoryName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.categoryForm.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.categoryForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.categoryForm,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "categoryStatus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.status,
      expression: "categoryForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('status')
    },
    attrs: {
      "id": "categoryStatus"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.categoryForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "form": _vm.categoryForm,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "categoryNote"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.note,
      expression: "categoryForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('note')
    },
    attrs: {
      "id": "categoryNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
    },
    domProps: {
      "value": _vm.categoryForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.categoryForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.categoryForm,
      "field": "note"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTab === 'subcategory',
      expression: "activeTab === 'subcategory'"
    }],
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'subcategory'
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.subcategoryForm.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.name,
      expression: "subcategoryForm.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('name')
    },
    attrs: {
      "id": "subcategoryName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.subcategoryForm.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.subcategoryForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.categories ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t('Category Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('category')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "category",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.subcategoryForm.category,
      callback: function callback($$v) {
        _vm.$set(_vm.subcategoryForm, "category", $$v);
      },
      expression: "subcategoryForm.category"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "category"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryStatus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.status,
      expression: "subcategoryForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('status')
    },
    attrs: {
      "id": "subcategoryStatus"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.subcategoryForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "form": _vm.subcategoryForm,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryNote"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.note,
      expression: "subcategoryForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('note')
    },
    attrs: {
      "id": "subcategoryNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
    },
    domProps: {
      "value": _vm.subcategoryForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.subcategoryForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "note"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.categoryForm.busy || _vm.subcategoryForm.busy
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.saveCurrent.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var CategorySubcategoryCreateModalvue_type_template_id_5be7e019_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=script&lang=js
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


/* harmony default export */ const CategorySubcategoryCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items"])), {}, {
    categories: function categories() {
      return this.items || [];
    }
  }),
  data: function data() {
    return {
      showModal: false,
      activeTab: 'subcategory',
      categoryForm: new vform_es/* default */.Ay({
        name: '',
        note: '',
        status: 1
      }),
      subcategoryForm: new vform_es/* default */.Ay({
        name: '',
        note: '',
        status: 1,
        category: null
      })
    };
  },
  created: function created() {
    this.getCategories();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset forms when opening modal
        this.resetForms();
        this.activeTab = 'subcategory';
        // Refresh categories list
        this.getCategories();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForms();
    },
    resetForms: function resetForms() {
      this.categoryForm.reset();
      this.subcategoryForm.reset();
      this.categoryForm.status = 1;
      this.subcategoryForm.status = 1;
      this.subcategoryForm.category = null;
    },
    // Get all product categories for subcategory form
    getCategories: function getCategories() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-product-categories'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Save based on active tab
    saveCurrent: function saveCurrent(event) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }
              if (!(_this2.activeTab === 'category')) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.saveCategory();
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.n = 3;
              return _this2.saveSubCategory();
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Save category
    saveCategory: function saveCategory() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var categoryName;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              // Store the category name before saving
              categoryName = _this3.categoryForm.name;
              _context4.n = 1;
              return _this3.categoryForm.post(window.location.origin + '/api/product-categories').then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
                var createdCategory;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this3.$t('Category added successfully')
                      });
                      // Refresh categories list for subcategory form
                      _context3.n = 1;
                      return _this3.getCategories();
                    case 1:
                      // Create a simple object with the name for parent to find it
                      createdCategory = {
                        name: categoryName
                      }; // Emit event with created category data to refresh in parent
                      _this3.$emit('categoryCreated', createdCategory);
                      // Reset form
                      _this3.categoryForm.reset();
                      _this3.categoryForm.status = 1;
                      // Close only this modal, not parent modals
                      _this3.showModal = false;
                      _this3.resetForms();
                    case 2:
                      return _context3.a(2);
                  }
                }, _callee3);
              })))["catch"](function (error) {
                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  toast.fire({
                    type: 'error',
                    title: _this3.$t('Validation Error'),
                    text: _this3.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input in the modal after DOM updates
                  _this3.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this3.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  // For other errors, show generic error message
                  toast.fire({
                    type: 'error',
                    title: _this3.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Save subcategory
    saveSubCategory: function saveSubCategory() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var subcategoryName;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              // Store the subcategory name before saving
              subcategoryName = _this4.subcategoryForm.name;
              _context6.n = 1;
              return _this4.subcategoryForm.post(window.location.origin + '/api/product-sub-categories').then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
                var createdSubcategory;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this4.$t('Sub category added successfully')
                      });
                      // Create a simple object with the name for parent to find it
                      createdSubcategory = {
                        name: subcategoryName
                      }; // Emit event with created subcategory data to refresh and select in parent
                      _this4.$emit('subcategoryCreated', createdSubcategory);
                      // Reset form
                      _this4.subcategoryForm.reset();
                      _this4.subcategoryForm.status = 1;
                      _this4.subcategoryForm.category = null;
                      // Close only this modal, not parent modals
                      _this4.showModal = false;
                      _this4.resetForms();
                    case 1:
                      return _context5.a(2);
                  }
                }, _callee5);
              })))["catch"](function (error) {
                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  toast.fire({
                    type: 'error',
                    title: _this4.$t('Validation Error'),
                    text: _this4.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input in the modal after DOM updates
                  _this4.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this4.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  // For other errors, show generic error message
                  toast.fire({
                    type: 'error',
                    title: _this4.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    }
  }
});
;// ./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CategorySubcategoryCreateModalvue_type_script_lang_js = (CategorySubcategoryCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=5be7e019&prod&scoped=true&lang=css
var CategorySubcategoryCreateModalvue_type_style_index_0_id_5be7e019_prod_scoped_true_lang_css = __webpack_require__(82609);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=5be7e019&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CategorySubcategoryCreateModalvue_type_style_index_0_id_5be7e019_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CategorySubcategoryCreateModalvue_type_style_index_0_id_5be7e019_prod_scoped_true_lang_css = (CategorySubcategoryCreateModalvue_type_style_index_0_id_5be7e019_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=5be7e019&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/CategorySubcategoryCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_CategorySubcategoryCreateModalvue_type_script_lang_js,
  CategorySubcategoryCreateModalvue_type_template_id_5be7e019_scoped_true_render,
  CategorySubcategoryCreateModalvue_type_template_id_5be7e019_scoped_true_staticRenderFns,
  false,
  null,
  "5be7e019",
  null
  
)

/* harmony default export */ const CategorySubcategoryCreateModal = (component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=template&id=3d82b5ae&scoped=true
var UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Unit")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Name")) + "\n            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "unitName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitCode"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Code")) + "\n            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('i', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Unit Code Tooltip'),
      expression: "$t('Unit Code Tooltip')"
    }],
    staticClass: "fas fa-info-circle ml-2 text-info unit-code-tooltip",
    staticStyle: {
      "cursor": "help",
      "font-size": "0.9rem"
    }
  })]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.code,
      expression: "form.code"
    }, {
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Unit Code Tooltip'),
      expression: "$t('Unit Code Tooltip')"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('code')
    },
    attrs: {
      "id": "unitCode",
      "type": "text",
      "name": "code",
      "placeholder": _vm.$t('Enter unit code (1-5 characters)'),
      "maxlength": "5"
    },
    domProps: {
      "value": _vm.form.code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Unit Code Helper")))]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "code"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitStatus"
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
      "id": "unitStatus"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitNote"
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
      "id": "unitNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
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
  })], 1)])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.saveUnit.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=script&lang=js
function UnitCreateModalvue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (UnitCreateModalvue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } UnitCreateModalvue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function UnitCreateModalvue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const UnitCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  data: function data() {
    return {
      showModal: false,
      form: new vform_es/* default */.Ay({
        name: '',
        code: '',
        note: '',
        status: 1
      })
    };
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.form.status = 1;
    },
    // Save unit
    saveUnit: function saveUnit(event) {
      var _this = this;
      return UnitCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_regenerator().m(function _callee2() {
        var unitName, unitCode;
        return UnitCreateModalvue_type_script_lang_js_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }

              // Store the unit name before saving
              unitName = _this.form.name;
              unitCode = _this.form.code;
              _context2.n = 1;
              return _this.form.post(window.location.origin + '/api/units').then(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_regenerator().m(function _callee() {
                var createdUnit;
                return UnitCreateModalvue_type_script_lang_js_regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this.$t('Unit added successfully')
                      });
                      // Create a simple object with the name and code for parent to find it
                      createdUnit = {
                        name: unitName,
                        code: unitCode
                      }; // Emit event with created unit data to refresh and select in parent
                      _this.$emit('unitCreated', createdUnit);
                      // Reset form
                      _this.form.reset();
                      _this.form.status = 1;
                      // Close only this modal, not parent modals
                      _this.showModal = false;
                      _this.resetForm();
                    case 1:
                      return _context.a(2);
                  }
                }, _callee);
              })))["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/components/UnitCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_UnitCreateModalvue_type_script_lang_js = (UnitCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css
var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css = __webpack_require__(44659);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css

            

var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options = {};

UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options.insert = "head";
UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options.singleton = false;

var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css/* default */.A, UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options);



/* harmony default export */ const components_UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css = (UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css

;// ./resources/js/components/UnitCreateModal.vue



;


/* normalize component */

var UnitCreateModal_component = (0,componentNormalizer/* default */.A)(
  components_UnitCreateModalvue_type_script_lang_js,
  UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_render,
  UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_staticRenderFns,
  false,
  null,
  "3d82b5ae",
  null
  
)

/* harmony default export */ const UnitCreateModal = (UnitCreateModal_component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
function ProductCreateModalvue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return ProductCreateModalvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ProductCreateModalvue_type_script_lang_js_typeof(o); }
function ProductCreateModalvue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (ProductCreateModalvue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } ProductCreateModalvue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function ProductCreateModalvue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ProductCreateModalvue_type_script_lang_js_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ProductCreateModalvue_type_script_lang_js_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ProductCreateModalvue_type_script_lang_js_ownKeys(Object(t), !0).forEach(function (r) { ProductCreateModalvue_type_script_lang_js_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ProductCreateModalvue_type_script_lang_js_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ProductCreateModalvue_type_script_lang_js_defineProperty(e, r, t) { return (r = ProductCreateModalvue_type_script_lang_js_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function ProductCreateModalvue_type_script_lang_js_toPropertyKey(t) { var i = ProductCreateModalvue_type_script_lang_js_toPrimitive(t, "string"); return "symbol" == ProductCreateModalvue_type_script_lang_js_typeof(i) ? i : i + ""; }
function ProductCreateModalvue_type_script_lang_js_toPrimitive(t, r) { if ("object" != ProductCreateModalvue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ProductCreateModalvue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var ProductCreateModalvue_type_script_lang_js_toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const ProductCreateModalvue_type_script_lang_js = ({
  components: {
    CategorySubcategoryCreateModal: CategorySubcategoryCreateModal,
    UnitCreateModal: UnitCreateModal
  },
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Product")
    };
  },
  data: function data() {
    return {
      showProductCreateModal: false,
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        purchasePrice: "",
        isOpeningStock: false,
        discount: "",
        sellingPrice: "",
        taxAmount: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: "",
        overrideSalesAccount: false,
        overridePurchaseAccount: false
      }),
      categories: [],
      options: [],
      units: [],
      brands: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      url: null,
      isAutoAssigningSales: false,
      isAutoAssigningPurchase: false,
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false,
      showPurchasePriceWarning: false
    };
  },
  computed: ProductCreateModalvue_type_script_lang_js_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  watch: {
    'form.openingStockUnitPrice': {
      handler: function handler(newPrice) {
        var _this = this;
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(function () {
            _this.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    },
    'form.regularPrice': {
      handler: function handler(newPrice) {
        var _this2 = this;
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(function () {
            _this2.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    },
    'form.itemType': {
      handler: function handler(newType) {
        var _this3 = this;
        // Check when item type changes to product
        if (newType === 'product') {
          setTimeout(function () {
            _this3.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    }
  },
  created: function created() {
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal;

      // When opening the modal, ensure account routing settings are loaded and generate item code
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
        this.getItemCode(); // Generate product code when modal opens
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this4 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this4.chartOfAccounts = data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error loading chart of accounts:", _t);
              _this4.chartOfAccounts = [];
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this5 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee2() {
        var _this5$accountRouting, _this5$accountRouting2, _this5$accountRouting3, _this5$accountRouting4, response, _t2;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context2.v;
              _this5.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this5.isSalesAccountAutomatic = _this5.accountRoutingSettings.sales && _this5.accountRoutingSettings.sales.routing_type === 'automatic';
              _this5.isPurchaseAccountAutomatic = _this5.accountRoutingSettings.purchase && _this5.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this5.isSalesAccountAutomatic && _this5.accountRoutingSettings.sales.main_account_id) {
                _this5.form.salesAccountId = _this5.accountRoutingSettings.sales.main_account_id;
              }
              if (_this5.isPurchaseAccountAutomatic && _this5.accountRoutingSettings.purchase.main_account_id) {
                _this5.form.purchaseAccountId = _this5.accountRoutingSettings.purchase.main_account_id;
              }
              console.log('=== ACCOUNT ROUTING DEBUG ===');
              console.log('Full account routing settings:', _this5.accountRoutingSettings);
              console.log('Sales settings:', _this5.accountRoutingSettings.sales);
              console.log('Purchase settings:', _this5.accountRoutingSettings.purchase);
              console.log('Sales routing type:', (_this5$accountRouting = _this5.accountRoutingSettings.sales) === null || _this5$accountRouting === void 0 ? void 0 : _this5$accountRouting.routing_type);
              console.log('Sales main_account_id:', (_this5$accountRouting2 = _this5.accountRoutingSettings.sales) === null || _this5$accountRouting2 === void 0 ? void 0 : _this5$accountRouting2.main_account_id);
              console.log('Purchase routing type:', (_this5$accountRouting3 = _this5.accountRoutingSettings.purchase) === null || _this5$accountRouting3 === void 0 ? void 0 : _this5$accountRouting3.routing_type);
              console.log('Purchase main_account_id:', (_this5$accountRouting4 = _this5.accountRoutingSettings.purchase) === null || _this5$accountRouting4 === void 0 ? void 0 : _this5$accountRouting4.main_account_id);
              console.log('isSalesAccountAutomatic:', _this5.isSalesAccountAutomatic);
              console.log('isPurchaseAccountAutomatic:', _this5.isPurchaseAccountAutomatic);
              console.log('Form salesAccountId after auto-assignment:', _this5.form.salesAccountId);
              console.log('Form purchaseAccountId after auto-assignment:', _this5.form.purchaseAccountId);
              console.log('==============================');
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("Error loading account routing settings:", _t2);
              // Set defaults if API fails
              _this5.isSalesAccountAutomatic = false;
              _this5.isPurchaseAccountAutomatic = false;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this6 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee3() {
        var _yield$_this6$form$ge, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this6.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this6$form$ge = _context3.v;
              data = _yield$_this6$form$ge.data;
              _this6.categories = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Handle category created event
    handleCategoryCreated: function handleCategoryCreated() {
      var _this7 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee4() {
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this7.getSubCategories();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Handle subcategory created event
    handleSubcategoryCreated: function handleSubcategoryCreated(createdSubcategory) {
      var _this8 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee5() {
        var newSubcategory;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this8.getSubCategories();
            case 1:
              if (!(createdSubcategory && createdSubcategory.name)) {
                _context5.n = 3;
                break;
              }
              _context5.n = 2;
              return _this8.$nextTick();
            case 2:
              // Find the newly created subcategory in the refreshed list by name
              newSubcategory = _this8.categories.find(function (cat) {
                return cat.name === createdSubcategory.name;
              });
              if (newSubcategory) {
                _this8.form.subCategory = newSubcategory;
              }
            case 3:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // Handle unit created event
    handleUnitCreated: function handleUnitCreated(createdUnit) {
      var _this9 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee6() {
        var newUnit;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this9.getUnits();
            case 1:
              if (!(createdUnit && createdUnit.name)) {
                _context6.n = 3;
                break;
              }
              _context6.n = 2;
              return _this9.$nextTick();
            case 2:
              // Find the newly created unit in the refreshed list by name or code
              newUnit = _this9.units.find(function (unit) {
                return unit.name === createdUnit.name || unit.code === createdUnit.code;
              });
              if (newUnit) {
                _this9.form.itemUnit = newUnit;
              }
            case 3:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this0 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee7() {
        var _yield$axios$get2, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context7.v;
              data = _yield$axios$get2.data;
              _this0.brands = data.data;
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this1 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee8() {
        var _yield$axios$get3, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context8.v;
              data = _yield$axios$get3.data;
              _this1.units = data.data;
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this10 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee9() {
        var _yield$axios$get4, data, defaultVatRateSlug;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context9.v;
              data = _yield$axios$get4.data;
              _this10.taxes = data.data;
              // assign default vat rate
              if (_this10.taxes && _this10.taxes.length > 0) {
                defaultVatRateSlug = _this10.appInfo.defaultVatRateSlug;
                _this10.form.productTax = _this10.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this10.calculatePrice();
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this11 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee0() {
        var _yield$axios$get5, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _context0.n = 1;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 1:
              _yield$axios$get5 = _context0.v;
              data = _yield$axios$get5.data;
              _this11.form.itemCode = data.code;
              _this11.prefix = data.prefix;
            case 2:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      // Reset values if required fields are missing
      if (!this.form.regularPrice || !this.form.productTax || !this.form.productTax.rate) {
        this.form.taxAmount = "";
        this.form.sellingPrice = this.form.regularPrice || "";
        return;
      }
      var regularPrice = parseFloat(this.form.regularPrice) || 0;
      var taxRate = parseFloat(this.form.productTax.rate) || 0;

      // Calculate taxAmount = regularPrice * (taxRate / 100)
      var taxAmount = regularPrice * (taxRate / 100);
      this.form.taxAmount = parseFloat(taxAmount.toFixed(2));

      // Calculate sellingPrice = regularPrice + taxAmount
      var sellingPrice = regularPrice + taxAmount;
      this.form.sellingPrice = parseFloat(sellingPrice.toFixed(2));
    },
    // Check if purchase price is greater than regular price
    checkPurchasePriceWarning: function checkPurchasePriceWarning() {
      // Only check for products, not services
      if (this.form.itemType !== 'product') {
        this.showPurchasePriceWarning = false;
        return;
      }

      // Get values directly from form
      var purchasePriceStr = String(this.form.openingStockUnitPrice || '').trim();
      var regularPriceStr = String(this.form.regularPrice || '').trim();

      // Convert to numbers
      var purchasePrice = purchasePriceStr ? parseFloat(purchasePriceStr) : 0;
      var regularPrice = regularPriceStr ? parseFloat(regularPriceStr) : 0;

      // Show warning if both prices are valid numbers and purchase price is greater than regular price
      if (!isNaN(purchasePrice) && !isNaN(regularPrice) && purchasePrice > 0 && regularPrice > 0 && purchasePrice > regularPrice) {
        this.showPurchasePriceWarning = true;
      } else {
        this.showPurchasePriceWarning = false;
      }
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this12 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this12.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this13 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee10() {
        var _this13$accountRoutin, _this13$accountRoutin2;
        var openingStockUnitPrice, openingStockCount, needsSalesAccount, needsPurchaseAccount;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (_this13.form.itemCode) {
                _context10.n = 1;
                break;
              }
              _context10.n = 1;
              return _this13.getItemCode();
            case 1:
              // Ensure price calculation is up-to-date before submission
              _this13.calculatePrice();

              // For products, ensure purchasePrice is set from openingStockUnitPrice
              // This ensures purchase_price is saved correctly in the database
              if (_this13.form.itemType === 'product') {
                openingStockUnitPrice = parseFloat(_this13.form.openingStockUnitPrice) || 0;
                openingStockCount = parseFloat(_this13.form.openingStockCount) || 0; // Set purchasePrice to openingStockUnitPrice for products
                // The backend uses openingStockUnitPrice to set purchase_price, but we also send purchasePrice
                // to ensure it's available in the payload for inventory adjustments
                _this13.form.purchasePrice = openingStockUnitPrice;

                // IMPORTANT: Set isOpeningStock flag to true if there's a purchase price OR opening stock
                // This ensures the backend will use openingStockUnitPrice to set purchase_price
                // The backend only sets purchase_price from openingStockUnitPrice when isOpeningStock is true
                // (See ProductController.php line 147-150 and 218)
                // Note: Backend validation requires openingStockCount >= 1 when isOpeningStock is true
                if (openingStockUnitPrice > 0) {
                  _this13.form.isOpeningStock = true;
                  // Ensure openingStockCount is set to at least 1 when we have a purchase price
                  // (Backend validation requires min:1 when isOpeningStock is true)
                  if (_this13.form.openingStockCount === "" || _this13.form.openingStockCount === null || openingStockCount === 0) {
                    _this13.form.openingStockCount = openingStockCount > 0 ? openingStockCount : 1;
                  }
                } else if (openingStockCount > 0) {
                  _this13.form.isOpeningStock = true;
                  // If there's opening stock but no purchase price, set a default purchase price
                  if (!openingStockUnitPrice || openingStockUnitPrice === 0) {
                    // You might want to set a default or use regularPrice as fallback
                    // For now, we'll leave it as is and let the user enter it
                  }
                } else {
                  _this13.form.isOpeningStock = false;
                }
              }

              // Validate required fields based on item type
              if (!(_this13.form.itemType === 'service' && !_this13.form.servicePurchasePrice)) {
                _context10.n = 2;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Service Purchase Price is required for services")
              });
              return _context10.a(2);
            case 2:
              // Debug: Log validation state
              console.log("Validation state:", {
                isSalesAccountAutomatic: _this13.isSalesAccountAutomatic,
                overrideSalesAccount: _this13.form.overrideSalesAccount,
                salesAccountId: _this13.form.salesAccountId,
                isPurchaseAccountAutomatic: _this13.isPurchaseAccountAutomatic,
                overridePurchaseAccount: _this13.form.overridePurchaseAccount,
                purchaseAccountId: _this13.form.purchaseAccountId
              });

              // Validate sales account - required if not automatic OR if override is checked
              needsSalesAccount = !_this13.isSalesAccountAutomatic || _this13.form.overrideSalesAccount;
              if (!(needsSalesAccount && !_this13.form.salesAccountId)) {
                _context10.n = 3;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Sales Account is required")
              });
              return _context10.a(2);
            case 3:
              // Validate purchase account - required if not automatic OR if override is checked
              needsPurchaseAccount = !_this13.isPurchaseAccountAutomatic || _this13.form.overridePurchaseAccount;
              if (!(needsPurchaseAccount && !_this13.form.purchaseAccountId)) {
                _context10.n = 4;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Purchase Account is required")
              });
              return _context10.a(2);
            case 4:
              // Debug: Log form data being sent
              console.log("=== FORM SUBMISSION DEBUG ===");
              console.log("Form data being sent:", _this13.form.data());
              console.log("Purchase Price (openingStockUnitPrice):", _this13.form.openingStockUnitPrice);
              console.log("Purchase Price (purchasePrice):", _this13.form.purchasePrice);
              console.log("Is Opening Stock (isOpeningStock):", _this13.form.isOpeningStock);
              console.log("Opening Stock Count:", _this13.form.openingStockCount);
              console.log("Account routing settings:", _this13.accountRoutingSettings);
              console.log("Sales settings:", _this13.accountRoutingSettings.sales);
              console.log("Purchase settings:", _this13.accountRoutingSettings.purchase);
              console.log("Sales routing type:", (_this13$accountRoutin = _this13.accountRoutingSettings.sales) === null || _this13$accountRoutin === void 0 ? void 0 : _this13$accountRoutin.routing_type);
              console.log("Sales main_account_id:", (_this13$accountRoutin2 = _this13.accountRoutingSettings.sales) === null || _this13$accountRoutin2 === void 0 ? void 0 : _this13$accountRoutin2.main_account_id);
              console.log("Form salesAccountId:", _this13.form.salesAccountId);
              console.log("Form purchaseAccountId:", _this13.form.purchaseAccountId);
              console.log("=============================");
              _context10.n = 5;
              return _this13.form.post(window.location.origin + "/api/products").then(/*#__PURE__*/function () {
                var _ref = ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee1(response) {
                  var openingStockCount, openingStockUnitPrice, purchasePrice, newProduct, formattedProduct, adjustmentPurchasePrice, _adjustmentError$resp, autoAssignedSalesAccountId, autoAssignedPurchaseAccountId, _t3;
                  return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context1) {
                    while (1) switch (_context1.p = _context1.n) {
                      case 0:
                        ProductCreateModalvue_type_script_lang_js_toast.fire({
                          type: "success",
                          title: _this13.$t("Product added successfully")
                        });

                        // Store opening stock values before reset
                        openingStockCount = parseFloat(_this13.form.openingStockCount) || 0;
                        openingStockUnitPrice = parseFloat(_this13.form.openingStockUnitPrice) || 0; // Get purchasePrice from form (set before submission) or fallback to openingStockUnitPrice
                        purchasePrice = parseFloat(_this13.form.purchasePrice) || openingStockUnitPrice || 0; // Emit the newly created product data
                        if (!(response.data && response.data.data)) {
                          _context1.n = 4;
                          break;
                        }
                        newProduct = response.data.data; // Format the product data to match the expected structure for v-select
                        formattedProduct = {
                          id: newProduct.id,
                          slug: newProduct.slug,
                          name: newProduct.name,
                          code: newProduct.code,
                          label: "".concat(newProduct.name, " [").concat(newProduct.code, "]"),
                          itemType: newProduct.itemType,
                          itemModel: newProduct.itemModel || '',
                          avgPurchasePrice: newProduct.avgPurchasePrice || 0,
                          regularPrice: newProduct.regularPrice || 0,
                          priceWithDiscount: newProduct.sellingPrice,
                          sellingPrice: newProduct.sellingPrice,
                          taxAmount: newProduct.taxAmount || 0,
                          taxType: newProduct.taxType,
                          taxRate: newProduct.taxRate,
                          productTax: newProduct.productTax,
                          inventoryCount: newProduct.inventoryCount || 0,
                          image: newProduct.image || '',
                          sales_account_id: newProduct.sales_account_id,
                          purchase_account_id: newProduct.purchase_account_id
                        };
                        _this13.$emit('productCreated', formattedProduct);

                        // Create inventory adjustment if opening stock exists and item type is product
                        if (!(newProduct.itemType === 'product' && openingStockCount > 0 && newProduct.slug)) {
                          _context1.n = 4;
                          break;
                        }
                        _context1.p = 1;
                        // Use purchasePrice (from form) or openingStockUnitPrice, with fallback to product's avgPurchasePrice
                        adjustmentPurchasePrice = purchasePrice > 0 ? purchasePrice : openingStockUnitPrice > 0 ? openingStockUnitPrice : newProduct.avgPurchasePrice || 0;
                        _context1.n = 2;
                        return _this13.createInventoryAdjustment({
                          productSlug: newProduct.slug,
                          quantity: openingStockCount,
                          purchasePrice: adjustmentPurchasePrice
                        });
                      case 2:
                        _context1.n = 4;
                        break;
                      case 3:
                        _context1.p = 3;
                        _t3 = _context1.v;
                        // Log error but don't block the product creation success
                        console.error("Error creating inventory adjustment:", _t3);
                        ProductCreateModalvue_type_script_lang_js_toast.fire({
                          type: "warning",
                          title: _this13.$t("Product created, but inventory adjustment failed"),
                          text: ((_adjustmentError$resp = _t3.response) === null || _adjustmentError$resp === void 0 || (_adjustmentError$resp = _adjustmentError$resp.data) === null || _adjustmentError$resp === void 0 ? void 0 : _adjustmentError$resp.message) || _this13.$t("Please create the adjustment manually.")
                        });
                      case 4:
                        // Store auto-assigned account IDs before reset
                        autoAssignedSalesAccountId = _this13.isSalesAccountAutomatic ? _this13.form.salesAccountId : null;
                        autoAssignedPurchaseAccountId = _this13.isPurchaseAccountAutomatic ? _this13.form.purchaseAccountId : null;
                        _this13.form.reset();
                        _this13.form.itemType = "product"; // Reset to default
                        _this13.form.overrideSalesAccount = false; // Reset override flags
                        _this13.form.overridePurchaseAccount = false;

                        // Restore auto-assigned account IDs after reset
                        if (autoAssignedSalesAccountId) {
                          _this13.form.salesAccountId = autoAssignedSalesAccountId;
                        }
                        if (autoAssignedPurchaseAccountId) {
                          _this13.form.purchaseAccountId = autoAssignedPurchaseAccountId;
                        }
                        _this13.showProductCreateModal = false;
                        _this13.$emit('reloadProducts');
                      case 5:
                        return _context1.a(2);
                    }
                  }, _callee1, null, [[1, 3]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }())["catch"](function (error) {
                console.error("Error creating product:", error);

                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: 'error',
                    title: _this13.$t('Validation Error'),
                    text: _this13.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input after DOM updates
                  _this13.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this13.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  var _error$response;
                  // For other errors, show generic error message
                  var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this13.$t("Please check your input and try again.");
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: errorMessage
                  });
                }
              });
            case 5:
              return _context10.a(2);
          }
        }, _callee10);
      }))();
    },
    // Create inventory adjustment for opening stock
    createInventoryAdjustment: function createInventoryAdjustment(_ref2) {
      var _this14 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee11() {
        var productSlug, quantity, purchasePrice, adjustmentForm, response, _t4;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              productSlug = _ref2.productSlug, quantity = _ref2.quantity, purchasePrice = _ref2.purchasePrice;
              adjustmentForm = new vform_es/* default */.Ay({
                adjustmentReason: _this14.$t("Opening Stock"),
                adjustmentDate: new Date().toISOString().slice(0, 10),
                note: _this14.$t("Initial inventory count for new product"),
                status: 1,
                selectedProducts: [{
                  slug: productSlug,
                  adjustType: "Increment",
                  adjustQty: quantity,
                  purchasePrice: purchasePrice
                }]
              });
              _context11.p = 1;
              _context11.n = 2;
              return adjustmentForm.post(window.location.origin + "/api/inventory-adjustments");
            case 2:
              response = _context11.v;
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "success",
                title: _this14.$t("Inventory adjustment created successfully")
              });
              return _context11.a(2, response);
            case 3:
              _context11.p = 3;
              _t4 = _context11.v;
              console.error("Error creating inventory adjustment:", _t4);
              throw _t4;
            case 4:
              return _context11.a(2);
          }
        }, _callee11, null, [[1, 3]]);
      }))();
    },
    // Auto-assign sales account
    autoAssignSalesAccount: function autoAssignSalesAccount() {
      var _this15 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee12() {
        var defaultAccount;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              if (!_this15.isAutoAssigningSales) {
                _context12.n = 1;
                break;
              }
              return _context12.a(2);
            case 1:
              _this15.isAutoAssigningSales = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this15.form.itemType === 'product') {
                  // Look for "Sales of Goods" or similar
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this15.form.itemType === 'service') {
                  // Look for "Sales of Services" or similar
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Sales account
                if (!defaultAccount) {
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this15.chartOfAccounts.length > 0) {
                  defaultAccount = _this15.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this15.form.salesAccountId = defaultAccount.id;
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "success",
                    title: _this15.$t("Sales Account auto-assigned successfully")
                  });
                } else {
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: _this15.$t("No suitable Sales Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning sales account:", error);
                ProductCreateModalvue_type_script_lang_js_toast.fire({
                  type: "error",
                  title: _this15.$t("Failed to auto-assign Sales Account")
                });
              } finally {
                _this15.isAutoAssigningSales = false;
              }
            case 2:
              return _context12.a(2);
          }
        }, _callee12);
      }))();
    },
    // Auto-assign purchase account
    autoAssignPurchaseAccount: function autoAssignPurchaseAccount() {
      var _this16 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee13() {
        var defaultAccount;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              if (!_this16.isAutoAssigningPurchase) {
                _context13.n = 1;
                break;
              }
              return _context13.a(2);
            case 1:
              _this16.isAutoAssigningPurchase = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this16.form.itemType === 'product') {
                  // Look for "Cost of Goods Sold" or similar
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this16.form.itemType === 'service') {
                  // Look for "Cost of Services" or similar
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Cost account
                if (!defaultAccount) {
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this16.chartOfAccounts.length > 0) {
                  defaultAccount = _this16.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this16.form.purchaseAccountId = defaultAccount.id;
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "success",
                    title: _this16.$t("Purchase Account auto-assigned successfully")
                  });
                } else {
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: _this16.$t("No suitable Purchase Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning purchase account:", error);
                ProductCreateModalvue_type_script_lang_js_toast.fire({
                  type: "error",
                  title: _this16.$t("Failed to auto-assign Purchase Account")
                });
              } finally {
                _this16.isAutoAssigningPurchase = false;
              }
            case 2:
              return _context13.a(2);
          }
        }, _callee13);
      }))();
    },
    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange: function onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.salesAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }
      }
    },
    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange: function onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.purchaseAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }
      }
    }
  }
});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductCreateModalvue_type_script_lang_js = (ProductCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=52709d36&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css = __webpack_require__(80470);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=52709d36&prod&scoped=true&lang=css

            

var ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css_options = {};

ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css_options.insert = "head";
ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css_options.singleton = false;

var ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css/* default */.A, ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css_options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_52709d36_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=52709d36&prod&scoped=true&lang=css

;// ./resources/js/components/ProductCreateModal.vue



;


/* normalize component */

var ProductCreateModal_component = (0,componentNormalizer/* default */.A)(
  components_ProductCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "52709d36",
  null
  
)

/* harmony default export */ const ProductCreateModal = (ProductCreateModal_component.exports);

/***/ }),

/***/ 65903:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso Mexicano',
                plural: 'Pesos Mexicanos',
                singular: 'Peso Mexicano',
                symbol: '$',
                fractionalUnit: {
                    name: 'Centavo',
                    plural: 'Centavos',
                    singular: 'Centavo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Punto',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 68224:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Bolivar',
                plural: 'Bolivares',
                singular: 'Bolivar',
                symbol: '',
                fractionalUnit: {
                    name: 'Centimo',
                    plural: 'Centimos',
                    singular: 'Centimo',
                    symbol: '',
                },
            },
            texts: {
                and: 'Con',
                minus: 'Menos',
                only: '',
                point: 'Coma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 69543:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Nonante-Neuf' },
                { number: 98, value: 'Nonante-Huit' },
                { number: 97, value: 'Nonante-Sept' },
                { number: 96, value: 'Nonante-Six' },
                { number: 95, value: 'Nonante-Cinq' },
                { number: 94, value: 'Nonante-Quatre' },
                { number: 93, value: 'Nonante-Trois' },
                { number: 92, value: 'Nonante-Deux' },
                { number: 91, value: 'Nonante-Et-Un' },
                { number: 90, value: 'Nonante' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Septante-Neuf' },
                { number: 78, value: 'Septante-Huit' },
                { number: 77, value: 'Septante-Sept' },
                { number: 76, value: 'Septante-Six' },
                { number: 75, value: 'Septante-Cinq' },
                { number: 74, value: 'Septante-Quatre' },
                { number: 73, value: 'Septante-Trois' },
                { number: 72, value: 'Septante-Deux' },
                { number: 71, value: 'Septante-Et-Un' },
                { number: 70, value: 'Septante' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante-Et-Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante-Et-Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante-Et-Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente-Et-Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt-Et-Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 71545:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bn_IN_1 = __importDefault(__webpack_require__(82689));
const ee_EE_1 = __importDefault(__webpack_require__(74938));
const en_AE_1 = __importDefault(__webpack_require__(8550));
const en_BD_1 = __importDefault(__webpack_require__(41061));
const en_GB_1 = __importDefault(__webpack_require__(54330));
const en_GH_1 = __importDefault(__webpack_require__(59096));
const en_IE_1 = __importDefault(__webpack_require__(21470));
const en_IN_1 = __importDefault(__webpack_require__(144));
const en_MM_1 = __importDefault(__webpack_require__(38765));
const en_MU_1 = __importDefault(__webpack_require__(74261));
const en_NG_1 = __importDefault(__webpack_require__(92952));
const en_NP_1 = __importDefault(__webpack_require__(26365));
const en_OM_1 = __importDefault(__webpack_require__(28787));
const en_PH_1 = __importDefault(__webpack_require__(82779));
const en_US_1 = __importDefault(__webpack_require__(84463));
const es_AR_1 = __importDefault(__webpack_require__(46709));
const es_ES_1 = __importDefault(__webpack_require__(60130));
const es_MX_1 = __importDefault(__webpack_require__(65903));
const fa_IR_1 = __importDefault(__webpack_require__(10982));
const fr_BE_1 = __importDefault(__webpack_require__(69543));
const fr_FR_1 = __importDefault(__webpack_require__(28834));
const gu_IN_1 = __importDefault(__webpack_require__(47229));
const hi_IN_1 = __importDefault(__webpack_require__(37460));
const kn_IN_1 = __importDefault(__webpack_require__(27002));
const ko_KR_1 = __importDefault(__webpack_require__(58041));
const lv_LV_1 = __importDefault(__webpack_require__(34922));
const mr_IN_1 = __importDefault(__webpack_require__(33972));
const nl_SR_1 = __importDefault(__webpack_require__(55101));
const np_NP_1 = __importDefault(__webpack_require__(35262));
const pt_BR_1 = __importDefault(__webpack_require__(21722));
const tr_TR_1 = __importDefault(__webpack_require__(44130));
const ur_PK_1 = __importDefault(__webpack_require__(56386));
const es_VE_1 = __importDefault(__webpack_require__(68224));
const LOCALES = {
    'bn-IN': bn_IN_1.default,
    'ee-EE': ee_EE_1.default,
    'en-AE': en_AE_1.default,
    'en-BD': en_BD_1.default,
    'en-GB': en_GB_1.default,
    'en-GH': en_GH_1.default,
    'en-IE': en_IE_1.default,
    'en-IN': en_IN_1.default,
    'en-MM': en_MM_1.default,
    'en-MU': en_MU_1.default,
    'en-NG': en_NG_1.default,
    'en-NP': en_NP_1.default,
    'en-OM': en_OM_1.default,
    'en-PH': en_PH_1.default,
    'en-US': en_US_1.default,
    'es-AR': es_AR_1.default,
    'es-ES': es_ES_1.default,
    'es-MX': es_MX_1.default,
    'fa-IR': fa_IR_1.default,
    'fr-BE': fr_BE_1.default,
    'fr-FR': fr_FR_1.default,
    'gu-IN': gu_IN_1.default,
    'hi-IN': hi_IN_1.default,
    'kn-IN': kn_IN_1.default,
    'ko-KR': ko_KR_1.default,
    'lv-LV': lv_LV_1.default,
    'mr-IN': mr_IN_1.default,
    'nl-SR': nl_SR_1.default,
    'np-NP': np_NP_1.default,
    'pt-BR': pt_BR_1.default,
    'tr-TR': tr_TR_1.default,
    'ur-PK': ur_PK_1.default,
    'es-VE': es_VE_1.default,
};
exports["default"] = LOCALES;


/***/ }),

/***/ 74261:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: 'Rs',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 74938:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Eurot',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Sent',
                    singular: 'Sent',
                    plural: 'Senti',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Ja',
                minus: 'Miinus',
                only: 'Ainult',
                point: 'Koma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Kvadriljon' },
                { number: 1000000000000, value: 'Triljon' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljon' },
                { number: 1000, value: 'Tuhat' },
                { number: 900, value: 'Üheksasada' },
                { number: 800, value: 'Kaheksasada' },
                { number: 700, value: 'Seitsesada' },
                { number: 600, value: 'Kuussada' },
                { number: 500, value: 'Viissada' },
                { number: 400, value: 'Nelisada' },
                { number: 300, value: 'Kolmsada' },
                { number: 200, value: 'Kakssada' },
                { number: 100, value: 'Sada' },
                { number: 90, value: 'Üheksakümmend' },
                { number: 80, value: 'Kaheksakümmend' },
                { number: 70, value: 'Seitsekümmend' },
                { number: 60, value: 'Kuuskümmend' },
                { number: 50, value: 'Viiskümmend' },
                { number: 40, value: 'Nelikümmend' },
                { number: 30, value: 'Kolmkümmend' },
                { number: 20, value: 'Kakskümmend' },
                { number: 19, value: 'Üheksateist' },
                { number: 18, value: 'Kaheksateist' },
                { number: 17, value: 'Seitseteist' },
                { number: 16, value: 'Kuusteist' },
                { number: 15, value: 'Viisteist' },
                { number: 14, value: 'Neliteist' },
                { number: 13, value: 'Kolmteist' },
                { number: 12, value: 'Kaksteist' },
                { number: 11, value: 'Üksteist' },
                { number: 10, value: 'Kümme' },
                { number: 9, value: 'Üheksa' },
                { number: 8, value: 'Kaheksa' },
                { number: 7, value: 'Seitse' },
                { number: 6, value: 'Kuus' },
                { number: 5, value: 'Viis' },
                { number: 4, value: 'Neli' },
                { number: 3, value: 'Kolm' },
                { number: 2, value: 'Kaks' },
                { number: 1, value: 'Üks' },
                { number: 0, value: 'Null' },
            ],
            ignoreOneForWords: [
                'Sada',
                'Kakssada',
                'Kolmsada',
                'Nelisada',
                'Viissada',
                'Kuussada',
                'Seitsesada',
                'Kaheksasada',
                'Üheksasada',
            ],
            exactWordsMapping: [
                {
                    number: 100,
                    value: 'Ükssada',
                },
            ],
            pluralWords: ['Miljon', 'Miljard', 'Trillion', 'Kvadriljon'],
            pluralMark: 'it',
            onlyInFront: true,
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 75528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ StockAdjustmentModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=651d741c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isOpen ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "modal-content",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Insufficient Stock")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_c('span', [_vm._v("×")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "alert alert-warning",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Stock Alert")) + ":")]), _vm._v("\n        " + _vm._s(_vm.$t("The selected quantity exceeds available stock for this product.")) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "product-info mb-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Product Details")))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Name")) + ":")]), _vm._v(" " + _vm._s(_vm.product.name || 'N/A'))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Code")) + ":")]), _vm._v(" " + _vm._s(_vm.productCodeWithPrefix))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Current Stock")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.product.inventoryCount || 0))])]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Required Quantity")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v(_vm._s(_vm.product.qty || 0))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Stock Shortage")))]), _vm._v(" "), _c('p', {
    staticClass: "text-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-circle mr-1"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.shortageQuantity))]), _vm._v(" " + _vm._s(_vm.$t("units short")) + "\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "stock-options"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("How to increase stock?")))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openInventoryAdjustment.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Quick Stock Adjustment")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Add stock directly to inventory")))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openPurchaseOrder.apply(null, arguments);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Create Purchase Order")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Order more stock from supplier")))])])])])])]), _vm._v(" "), _vm.showQuickAdjustment ? _c('div', {
    staticClass: "quick-adjustment mt-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h6', {
    staticClass: "mb-0"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Quick Stock Adjustment")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submitQuickAdjustment.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentReason"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reason")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.reason,
      expression: "adjustmentForm.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('reason')
    },
    attrs: {
      "id": "adjustmentReason",
      "type": "text",
      "placeholder": _vm.$t('Enter reason for stock adjustment'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "reason"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity to Add")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.quantity,
      expression: "adjustmentForm.quantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('quantity')
    },
    attrs: {
      "id": "adjustmentQuantity",
      "type": "number",
      "min": "1",
      "placeholder": _vm.$t('Enter quantity to add'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.quantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "quantity"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentNote"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.note,
      expression: "adjustmentForm.note"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "adjustmentNote",
      "rows": "3",
      "placeholder": _vm.$t('Enter additional notes (optional)')
    },
    domProps: {
      "value": _vm.adjustmentForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        _vm.showQuickAdjustment = false;
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Cancel")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": _vm.adjustmentForm.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Add Stock")) + "\n                ")])])])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Close")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.adjustQuantity
    }
  }, [_c('i', {
    staticClass: "fas fa-edit mr-1"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Adjust Quantity")) + "\n      ")])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-shopping-cart text-primary"
  })]);
}];

;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=651d741c&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/plugins/filter.js
var filter = __webpack_require__(44121);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
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





var toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const StockAdjustmentModalvue_type_script_lang_js = ({
  name: "StockAdjustmentModal",
  props: {
    isOpen: {
      type: Boolean,
      "default": false
    },
    product: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showQuickAdjustment: false,
      adjustmentForm: new vform_es/* default */.Ay({
        reason: "",
        quantity: 1,
        note: ""
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    prefix: function prefix() {
      var _this$appInfo;
      return ((_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.productPrefix) || "";
    },
    shortageQuantity: function shortageQuantity() {
      if (!this.product || !this.product.inventoryCount || !this.product.qty) {
        return 0;
      }
      return Math.max(0, this.product.qty - this.product.inventoryCount);
    },
    productCodeWithPrefix: function productCodeWithPrefix() {
      if (!this.product || !this.product.code) {
        return 'N/A';
      }
      return this.prefix + this.product.code;
    }
  }),
  watch: {
    isOpen: function isOpen(newVal) {
      console.log("Modal isOpen changed to:", newVal);
      console.log("Product object:", this.product);
      if (newVal && this.product) {
        // Set default quantity to shortage amount
        this.adjustmentForm.quantity = this.shortageQuantity || 1;
        this.adjustmentForm.reason = "Stock shortage adjustment";
        console.log("Modal opened with product:", this.product.name);
      }
    }
  },
  mounted: function mounted() {
    console.log("StockAdjustmentModal mounted");
    console.log("Initial isOpen:", this.isOpen);
    console.log("Initial product:", this.product);
  },
  beforeDestroy: function beforeDestroy() {
    console.log("StockAdjustmentModal beforeDestroy");
    console.log("Product at destroy:", this.product);
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("close");
      this.showQuickAdjustment = false;
      this.adjustmentForm.reset();
    },
    adjustQuantity: function adjustQuantity() {
      this.$emit("adjust-quantity", this.product);
      this.closeModal();
    },
    openInventoryAdjustment: function openInventoryAdjustment() {
      var _this = this;
      try {
        console.log("Opening inventory adjustment...");
        console.log("Product object:", this.product);

        // Validate product object
        if (!this.product || !this.product.id) {
          console.error("Invalid product object:", this.product);
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Product information is missing. Please try again.")
          });
          return;
        }

        // Capture product data before closing modal to avoid null reference
        var productData = {
          id: this.product.id,
          name: this.product.name,
          code: this.product.code,
          slug: this.product.slug
        };
        console.log("Captured product data:", productData);

        // Ask parent to persist current form state before leaving
        this.$emit('persist');
        // Close modal first
        this.closeModal();

        // Then navigate with a small delay
        setTimeout(function () {
          try {
            console.log("Navigating to adjustments.create");
            console.log("Product ID:", productData.id);

            // Get current route safely
            var returnUrl = _this.$route ? _this.$route.fullPath : window.location.pathname;
            console.log("Return URL:", returnUrl);

            // Check if user has permission to create adjustments
            if (!_this.$can('adjustment-create')) {
              toast.fire({
                type: "error",
                title: _this.$t("Permission Denied"),
                text: _this.$t("You don't have permission to create adjustments.")
              });
              return;
            }

            // Try navigation with fallback
            _this.$router.push({
              name: "adjustments.create",
              query: {
                productId: productData.id,
                returnUrl: returnUrl
              }
            }).then(function () {
              console.log("Navigation successful");
            })["catch"](function (err) {
              console.error("Navigation error:", err);

              // Fallback: show alert with manual navigation option
              sweetalert2_all_default().fire({
                title: _this.$t("Navigate to Adjustments"),
                text: _this.$t("Click OK to go to the adjustments page manually."),
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: _this.$t("Go to Adjustments"),
                cancelButtonText: _this.$t("Cancel")
              }).then(function (result) {
                if (result.isConfirmed) {
                  window.location.href = '/inventory-adjustments/create?productId=' + productData.id + '&returnUrl=' + encodeURIComponent(returnUrl);
                }
              });
            });
          } catch (error) {
            console.error("Error in navigation timeout:", error);
            toast.fire({
              type: "error",
              title: _this.$t("Error"),
              text: _this.$t("An error occurred while navigating. Please try again.")
            });
          }
        }, 300);
      } catch (error) {
        console.error("Error in openInventoryAdjustment:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("An unexpected error occurred. Please try again.")
        });
      }
    },
    openPurchaseOrder: function openPurchaseOrder() {
      var _this2 = this;
      console.log("Opening purchase order...");
      // Close modal first
      this.closeModal();
      // Then navigate with a small delay
      setTimeout(function () {
        console.log("Navigating to purchases.create");
        _this2.$router.push({
          name: "purchases.create"
        })["catch"](function (err) {
          console.error("Navigation error:", err);
        });
      }, 300);
    },
    submitQuickAdjustment: function submitQuickAdjustment() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var adjustmentData, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              // Create a quick inventory adjustment
              adjustmentData = {
                adjustmentReason: _this3.adjustmentForm.reason,
                adjustmentDate: new Date().toISOString().slice(0, 10),
                note: _this3.adjustmentForm.note,
                status: 1,
                selectedProducts: [{
                  slug: _this3.product.slug,
                  adjustType: "Increment",
                  adjustQty: parseInt(_this3.adjustmentForm.quantity),
                  purchasePrice: _this3.product.avgPurchasePrice || 0
                }]
              };
              _context.n = 1;
              return axios_default().post("/api/inventory-adjustments", adjustmentData);
            case 1:
              toast.fire({
                type: "success",
                title: _this3.$t("Stock added successfully"),
                text: _this3.$t("The product stock has been increased.")
              });

              // Emit event to refresh product data
              _this3.$emit("stock-updated", {
                product: _this3.product,
                newQuantity: parseInt(_this3.adjustmentForm.quantity)
              });
              _this3.closeModal();
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error adding stock:", _t);
              toast.fire({
                type: "error",
                title: _this3.$t("Error"),
                text: _this3.$t("Failed to add stock. Please try again.")
              });
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    }
  }
});
;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_StockAdjustmentModalvue_type_script_lang_js = (StockAdjustmentModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css
var StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css = __webpack_require__(85989);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css = (StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/StockAdjustmentModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_StockAdjustmentModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "651d741c",
  null
  
)

/* harmony default export */ const StockAdjustmentModal = (component.exports);

/***/ }),

/***/ 80470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-52709d36]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-52709d36]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-52709d36]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-52709d36]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-52709d36]:after{display:none}.form-card .card-header .section-title i[data-v-52709d36]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-52709d36]{padding:16px}.section-title[data-v-52709d36]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-52709d36]{margin-bottom:1rem}.form-group label[data-v-52709d36]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-52709d36]{color:#dc3545;font-weight:700}.row[data-v-52709d36]{margin-bottom:1rem}.row[data-v-52709d36]:last-child{margin-bottom:0}.auto-assign-btn[data-v-52709d36]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-52709d36]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-52709d36]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-52709d36]{text-align:center}.image-preview img[data-v-52709d36]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-52709d36]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-52709d36]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-52709d36]{color:#6c757d}.create-button[data-v-52709d36]{cursor:pointer;text-decoration:none}.create-btn[data-v-52709d36]{border-left:none;border-radius:0 .25rem .25rem 0;cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-52709d36]:hover{background-color:#e9ecef}.category-select[data-v-52709d36]{margin-right:0!important}.category-select .vs__dropdown-toggle[data-v-52709d36]{border-radius:.25rem 0 0 .25rem!important;border-right:none!important}[dir=rtl] .category-select .vs__dropdown-toggle[data-v-52709d36]{border-left:none!important;border-radius:0 .25rem .25rem 0!important;border-right:1px solid #ced4da!important}[dir=rtl] .create-btn[data-v-52709d36]{border-left:none;border-radius:.25rem 0 0 .25rem;border-right:1px solid #ced4da}[dir=ltr] .create-btn[data-v-52709d36]{border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0;border-right:none}.unit-select[data-v-52709d36]{margin-right:0!important}.unit-select .vs__dropdown-toggle[data-v-52709d36]{border-radius:.25rem 0 0 .25rem!important;border-right:none!important}[dir=rtl] .unit-select .vs__dropdown-toggle[data-v-52709d36]{border-left:none!important;border-radius:0 .25rem .25rem 0!important;border-right:1px solid #ced4da!important}@media (max-width:768px){.section-title[data-v-52709d36]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-52709d36]{padding:.75rem}.auto-assign-btn[data-v-52709d36]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-52709d36]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-52709d36]{margin-bottom:0}.is-invalid[data-v-52709d36]{border-color:#dc3545!important}.invalid-feedback[data-v-52709d36]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-52709d36]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-52709d36]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-52709d36]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-52709d36]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-52709d36]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-52709d36]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-52709d36]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-52709d36]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-52709d36]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-52709d36]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-52709d36]{flex-direction:column;gap:.5rem}.option-content[data-v-52709d36]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-52709d36]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-52709d36]{font-size:.85rem}.override-checkbox-container .form-check-label[data-v-52709d36]{min-height:44px;padding:.6rem .8rem}.checkbox-text[data-v-52709d36]{font-size:.9rem}.form-check-input[data-v-52709d36]{height:16px;width:16px}}.account-label-row[data-v-52709d36]{align-items:flex-start;display:flex;flex-direction:column;gap:1rem;justify-content:space-between;margin-bottom:.5rem}.account-label[data-v-52709d36]{color:#495057;flex:1;font-size:.95rem;font-weight:500;margin-bottom:0}.toggle-switch-container[data-v-52709d36]{align-items:center;display:flex;flex-shrink:0}.toggle-switch-label[data-v-52709d36]{align-items:center;cursor:pointer;display:inline-flex;gap:.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.toggle-switch-wrapper[data-v-52709d36]{display:inline-block;flex-shrink:0;height:26px;position:relative;width:50px}.toggle-switch-input[data-v-52709d36]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#ced4da;border-radius:26px;cursor:pointer;height:26px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;transition:background-color .3s ease;width:50px}.toggle-switch-input[data-v-52709d36]:checked{background-color:#33a0d9}.toggle-switch-input[data-v-52709d36]:focus{box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.toggle-switch-slider[data-v-52709d36]{background-color:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);height:20px;left:3px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s ease;width:20px}.toggle-switch-input:checked+.toggle-switch-slider[data-v-52709d36]{transform:translate(24px,-50%)}.toggle-switch-text[data-v-52709d36]{color:#495057;font-size:.9rem;font-weight:500;transition:color .2s ease;white-space:nowrap}.toggle-switch-label:has(.toggle-switch-input:checked) .toggle-switch-text[data-v-52709d36]{color:#33a0d9;font-weight:600}.alert-info[data-v-52709d36]{background-color:#d1ecf1;border-color:#bee5eb;border-radius:.375rem;font-size:.9rem;padding:.75rem 1rem}.alert-info[data-v-52709d36],.alert-info i[data-v-52709d36]{color:#0c5460}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-tabs[data-v-5be7e019]{border-bottom:2px solid #dee2e6;margin-bottom:1.5rem}.nav-tabs .nav-item[data-v-5be7e019]{margin-bottom:-2px}.nav-tabs .nav-link[data-v-5be7e019]{background-color:transparent;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#495057;cursor:pointer;font-weight:500;padding:.75rem 1.5rem;transition:all .2s ease}.nav-tabs .nav-link[data-v-5be7e019]:hover{border-color:#e9ecef #e9ecef #dee2e6;color:#33a0d9}.nav-tabs .nav-link.active[data-v-5be7e019]{background-color:#fff;border-color:#dee2e6 #dee2e6 transparent;color:#33a0d9;font-weight:600}.nav-tabs .nav-link i[data-v-5be7e019]{margin-right:.5rem}.tab-content[data-v-5be7e019]{min-height:200px}.tab-pane[data-v-5be7e019]{padding:0}.form-group[data-v-5be7e019]{margin-bottom:1rem}.form-group label[data-v-5be7e019]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-5be7e019]{color:#dc3545;font-weight:700}.form-control[data-v-5be7e019]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-5be7e019]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-5be7e019]{border-color:#dc3545!important}textarea.form-control[data-v-5be7e019]{min-height:100px;resize:vertical}.v-select[data-v-5be7e019]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-5be7e019]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.btn-success[data-v-5be7e019]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-5be7e019]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-5be7e019]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-5be7e019]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-5be7e019]{cursor:pointer;text-decoration:none}.row[data-v-5be7e019]{margin-bottom:1rem}.row[data-v-5be7e019]:last-child{margin-bottom:0}@media (max-width:768px){.nav-tabs .nav-link[data-v-5be7e019]{font-size:.9rem;padding:.5rem 1rem}.tab-content[data-v-5be7e019]{padding:.5rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82689:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'টাকা',
                plural: 'টাকা',
                singular: 'টাকা',
                symbol: '৳',
                fractionalUnit: {
                    name: 'পয়সা',
                    singular: 'পয়সা',
                    plural: 'পয়সা',
                    symbol: '',
                },
            },
            texts: {
                and: 'এবং',
                minus: 'ঋণ',
                only: '',
                point: 'দশমিক',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'কোটি' },
                { number: 100000, value: 'লাখ' },
                { number: 1000, value: 'হাজার' },
                { number: 100, value: 'শত' },
                { number: 99, value: 'নিরানব্বই' },
                { number: 98, value: 'আটানব্বই' },
                { number: 97, value: 'সাতানব্বই' },
                { number: 96, value: 'ছিয়ানব্বই' },
                { number: 95, value: 'পঁচানব্বই' },
                { number: 94, value: 'চুরানব্বই' },
                { number: 93, value: 'তিরানব্বই' },
                { number: 92, value: 'বিরানব্বই' },
                { number: 91, value: 'একানব্বই' },
                { number: 90, value: 'নব্বই' },
                { number: 89, value: 'ঊননব্বই' },
                { number: 88, value: 'অষ্টআশি' },
                { number: 87, value: 'সাতআশি' },
                { number: 86, value: 'ছিয়াশী' },
                { number: 85, value: 'পঁচাশী' },
                { number: 84, value: 'চুরাশী' },
                { number: 83, value: 'তিরাশী' },
                { number: 82, value: 'বিরাশী' },
                { number: 81, value: 'একাশী' },
                { number: 80, value: 'আশি' },
                { number: 79, value: 'ঊনআশি' },
                { number: 78, value: 'অষ্টাত্তর' },
                { number: 77, value: 'সাতাত্তর' },
                { number: 76, value: 'ছিয়াত্তর' },
                { number: 75, value: 'পঁচাত্তর' },
                { number: 74, value: 'চুয়াত্তর' },
                { number: 73, value: 'তিয়াত্তর' },
                { number: 72, value: 'বাহাত্তর' },
                { number: 71, value: 'একাত্তর' },
                { number: 70, value: 'সত্তর' },
                { number: 69, value: 'ঊনসত্তর' },
                { number: 68, value: 'অষ্টষষ্টি' },
                { number: 67, value: 'সাতষষ্টি' },
                { number: 66, value: 'ছেষষ্টি' },
                { number: 65, value: 'পঁয়ষট্টি' },
                { number: 64, value: 'চৌষট্টি' },
                { number: 63, value: 'তেষট্টি' },
                { number: 62, value: 'বাষট্টি' },
                { number: 61, value: 'একষট্টি' },
                { number: 60, value: 'ষাট' },
                { number: 59, value: 'ঊনষাট' },
                { number: 58, value: 'আটান্ন' },
                { number: 57, value: 'সাতান্ন' },
                { number: 56, value: 'ছাপ্পান্ন' },
                { number: 55, value: 'পঞ্চান্ন' },
                { number: 54, value: 'চুয়ান্ন' },
                { number: 53, value: 'তিপ্পান্ন' },
                { number: 52, value: 'বায়ান্ন' },
                { number: 51, value: 'একান্ন' },
                { number: 50, value: 'পঞ্চাশ' },
                { number: 49, value: 'ঊনপঞ্চাশ' },
                { number: 48, value: 'আটচল্লিশ' },
                { number: 47, value: 'সাতচল্লিশ' },
                { number: 46, value: 'ছেচল্লিশ' },
                { number: 45, value: 'পঁইঁতাল্লিশ' },
                { number: 44, value: 'চুয়াল্লিশ' },
                { number: 43, value: 'তেতাল্লিশ' },
                { number: 42, value: 'বিয়াল্লিশ' },
                { number: 41, value: 'একচল্লিশ' },
                { number: 40, value: 'চল্লিশ' },
                { number: 39, value: 'ঊনচল্লিশ' },
                { number: 38, value: 'আটত্রিশ' },
                { number: 37, value: 'সাঁইত্রিশ' },
                { number: 36, value: 'ছত্রিশ' },
                { number: 35, value: 'পঁইত্রিশ' },
                { number: 34, value: 'চৌত্রিশ' },
                { number: 33, value: 'তেত্রিশ' },
                { number: 32, value: 'বত্রিশ' },
                { number: 31, value: 'একত্রিশ' },
                { number: 30, value: 'ত্রিশ' },
                { number: 29, value: 'ঊনত্রিশ' },
                { number: 28, value: 'আঠাশ' },
                { number: 27, value: 'সাতাশ' },
                { number: 26, value: 'ছাব্বিশ' },
                { number: 25, value: 'পঁচিশ' },
                { number: 24, value: 'চব্বিশ' },
                { number: 23, value: 'তেইশ' },
                { number: 22, value: 'বাইশ' },
                { number: 21, value: 'একুশ' },
                { number: 20, value: 'বিশ' },
                { number: 19, value: 'ঊনিশ' },
                { number: 18, value: 'আঠারো' },
                { number: 17, value: 'সতেরো' },
                { number: 16, value: 'ষোলো' },
                { number: 15, value: 'পনেরো' },
                { number: 14, value: 'চৌদ্দ' },
                { number: 13, value: 'তেরো' },
                { number: 12, value: 'বারো' },
                { number: 11, value: 'এগারো' },
                { number: 10, value: 'দশ' },
                { number: 9, value: 'নয়' },
                { number: 8, value: 'আট' },
                { number: 7, value: 'সাত' },
                { number: 6, value: 'ছয়' },
                { number: 5, value: 'পাঁচ' },
                { number: 4, value: 'চার' },
                { number: 3, value: 'তিন' },
                { number: 2, value: 'দুই' },
                { number: 1, value: 'এক' },
                { number: 0, value: 'শূন্য' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 82779:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso',
                plural: 'Pesos',
                singular: 'Peso',
                symbol: '₱',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 84463:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dollar',
                plural: 'Dollars',
                singular: 'Dollar',
                symbol: '$',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    singular: 'Cent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 85989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-overlay[data-v-651d741c]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1050}.modal-content[data-v-651d741c]{background:#fff;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-651d741c]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #dee2e6;border-radius:10px 10px 0 0;display:flex;justify-content:space-between;padding:20px}.modal-title[data-v-651d741c]{font-size:1.25rem;font-weight:600;margin:0}.close[data-v-651d741c]{background:none;border:none;color:#6c757d;cursor:pointer;font-size:1.5rem}.close[data-v-651d741c]:hover{color:#000}.modal-body[data-v-651d741c]{padding:20px}.modal-footer[data-v-651d741c]{background-color:#f8f9fa;border-radius:0 0 10px 10px;border-top:1px solid #dee2e6;display:flex;gap:10px;justify-content:flex-end;padding:20px}.option-card[data-v-651d741c]{align-items:center;border:2px solid #e9ecef;border-radius:8px;cursor:pointer;display:flex;margin-bottom:15px;padding:15px;transition:all .3s ease}.option-card[data-v-651d741c]:hover{background-color:#f8f9fa;border-color:#007bff;box-shadow:0 4px 8px rgba(0,0,0,.1);transform:translateY(-2px)}.option-icon[data-v-651d741c]{font-size:2rem;margin-right:15px;min-width:50px;text-align:center}.option-content h6[data-v-651d741c]{font-weight:600;margin:0 0 5px}.option-content p[data-v-651d741c]{font-size:.9rem;margin:0}.product-info[data-v-651d741c]{background-color:#f8f9fa;border-left:4px solid #007bff;border-radius:8px;padding:15px}.quick-adjustment .card[data-v-651d741c]{border:1px solid #dee2e6;border-radius:8px}.quick-adjustment .card-header[data-v-651d741c]{background-color:#e9ecef;border-bottom:1px solid #dee2e6;padding:15px}.form-actions[data-v-651d741c]{display:flex;gap:10px;justify-content:flex-end;margin-top:20px}.required[data-v-651d741c]{color:#dc3545}.badge[data-v-651d741c]{font-size:.875em;padding:.375rem .75rem}.alert[data-v-651d741c]{border:none;border-radius:8px}.alert-warning[data-v-651d741c]{background-color:#fff3cd;border-left:4px solid #ffc107;color:#856404}[dir=rtl] .option-card[data-v-651d741c]{flex-direction:row-reverse}[dir=rtl] .option-icon[data-v-651d741c]{margin-left:15px;margin-right:0}[dir=rtl] .product-info[data-v-651d741c]{border-left:none;border-right:4px solid #007bff}[dir=rtl] .alert-warning[data-v-651d741c]{border-left:none;border-right:4px solid #ffc107}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 92952:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Naira',
                plural: 'Naira',
                singular: 'Naira',
                symbol: '₦',
                fractionalUnit: {
                    name: 'Kobo',
                    singular: 'Kobo',
                    plural: 'Kobo',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 93738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-06334d97]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-06334d97]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-06334d97]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-06334d97]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-06334d97]:after{display:none}.form-card .card-header .section-title i[data-v-06334d97]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-06334d97]{padding:16px}.section-title[data-v-06334d97]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-06334d97]{margin-bottom:1rem}.form-group label[data-v-06334d97]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-06334d97]{color:#dc3545;font-weight:700}.row[data-v-06334d97]{margin-bottom:1rem}.row[data-v-06334d97]:last-child{margin-bottom:0}.form-text[data-v-06334d97]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-06334d97]{text-align:center}.image-preview img[data-v-06334d97]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-06334d97]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-06334d97]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-06334d97]{color:#6c757d}@media (max-width:768px){.section-title[data-v-06334d97]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-06334d97]{padding:.75rem}}.input-group-prepend .input-group-text[data-v-06334d97]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-06334d97]{margin-bottom:0}.is-invalid[data-v-06334d97]{border-color:#dc3545!important}.invalid-feedback[data-v-06334d97]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-06334d97]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-06334d97]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-06334d97]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-06334d97]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-06334d97]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-06334d97]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-06334d97]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-06334d97]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-06334d97]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-06334d97]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-06334d97]{flex-direction:column;gap:.5rem}.option-content[data-v-06334d97]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-06334d97]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-06334d97]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);