"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3418],{

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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var product, productToEdit, needsFullData, identifier, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              product = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              // If product is passed as parameter, use it; otherwise use the prop
              productToEdit = product || _this.product;
              if (productToEdit) {
                _context.next = 5;
                break;
              }
              console.warn('No product provided to ProductEditModal');
              return _context.abrupt("return");
            case 5:
              // Store the product being edited in component data
              _this.currentProduct = productToEdit;

              // Show modal immediately
              _this.showProductEditModal = true;

              // Load product data immediately with available data
              _this.loadProductData(productToEdit);

              // Check if we need to fetch complete product data in background
              needsFullData = !productToEdit.itemUnit || !productToEdit.itemTax || !productToEdit.subCategory || !productToEdit.brand || typeof productToEdit.itemUnit === 'string' || typeof productToEdit.itemTax === 'string';
              if (!(needsFullData && (productToEdit.slug || productToEdit.id))) {
                _context.next = 23;
                break;
              }
              console.log('Fetching complete product data from API...');
              identifier = productToEdit.slug || productToEdit.id;
              _context.prev = 12;
              _context.next = 15;
              return axios_default().get("/api/products/".concat(identifier));
            case 15:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              // Update with complete product data from API
              _this.loadProductData(data.data);
              _context.next = 23;
              break;
            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](12);
              console.warn('Failed to fetch complete product data, using provided data:', _context.t0);
              // Keep using the initially loaded product data
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[12, 20]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var currentProduct, productSlug, productId, identifier, formData, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Get the current product being edited (stored in component data)
              currentProduct = _this3.currentProduct; // Debug logging to understand the product object structure
              console.log('Current product object:', currentProduct);
              console.log('Available properties:', currentProduct ? Object.keys(currentProduct) : 'No product');
              if (currentProduct) {
                _context2.next = 8;
                break;
              }
              console.error('No product available for update');
              toast.fire({
                type: "error",
                title: _this3.$t("No product selected for update")
              });
              return _context2.abrupt("return");
            case 8:
              // Check for slug property with fallbacks
              productSlug = currentProduct.slug || currentProduct.productSlug || currentProduct.product_slug;
              productId = currentProduct.id || currentProduct.productID || currentProduct.product_id;
              if (!(!productSlug && !productId)) {
                _context2.next = 15;
                break;
              }
              console.error('No product identifier (slug or ID) available for update');
              console.error('Product object:', currentProduct);
              toast.fire({
                type: "error",
                title: _this3.$t("Product identifier missing. Cannot update product.")
              });
              return _context2.abrupt("return");
            case 15:
              // If we don't have a slug but have an ID, we need to fetch the product to get the slug
              identifier = productSlug;
              if (!productSlug && productId) {
                console.log('No slug found, attempting to use ID as fallback:', productId);
                // For now, try to use the ID directly - if the backend doesn't support it, we'll get an error
                identifier = productId;
              }

              // Validate required fields based on item type
              if (!(_this3.form.itemType === 'service' && !_this3.form.servicePurchasePrice)) {
                _context2.next = 20;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Service Purchase Price is required for services")
              });
              return _context2.abrupt("return");
            case 20:
              if (!_this3.form.isOpeningStock) {
                _context2.next = 27;
                break;
              }
              if (!(!_this3.form.newOpeningStockCount || _this3.form.newOpeningStockCount <= 0)) {
                _context2.next = 24;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Count is required and must be greater than 0")
              });
              return _context2.abrupt("return");
            case 24:
              if (!(!_this3.form.newOpeningStockUnitPrice || _this3.form.newOpeningStockUnitPrice <= 0)) {
                _context2.next = 27;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Unit Price is required and must be greater than 0")
              });
              return _context2.abrupt("return");
            case 27:
              if (!(!_this3.isSalesAccountAutomatic && !_this3.form.salesAccountId)) {
                _context2.next = 30;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Sales Account is required")
              });
              return _context2.abrupt("return");
            case 30:
              if (!(!_this3.isPurchaseAccountAutomatic && !_this3.form.purchaseAccountId)) {
                _context2.next = 33;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Purchase Account is required")
              });
              return _context2.abrupt("return");
            case 33:
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
              _context2.next = 47;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 47:
              response = _context2.sent;
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
              _context2.next = 55;
              break;
            case 51:
              _context2.prev = 51;
              _context2.t0 = _context2["catch"](0);
              if (_context2.t0.response && _context2.t0.response.data) {
                if (_context2.t0.response.data.errors) {
                  _this3.form.errors.set(_context2.t0.response.data.errors);
                } else {
                  toast.fire({
                    type: "error",
                    title: _context2.t0.response.data.message || _this3.$t("Error updating product")
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this3.$t("Error updating product")
                });
              }
              console.error('Error updating product:', _context2.t0);
            case 55:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 51]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this4$form$ge, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 3:
              _yield$_this4$form$ge = _context3.sent;
              data = _yield$_this4$form$ge.data;
              _this4.categories = data.data;
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error("Error fetching categories:", _context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 3:
              _yield$axios$get2 = _context4.sent;
              data = _yield$axios$get2.data;
              _this5.brands = data.data;
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Error fetching brands:", _context4.t0);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 3:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this6.units = data.data;
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.error("Error fetching units:", _context5.t0);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 3:
              _yield$axios$get4 = _context6.sent;
              data = _yield$axios$get4.data;
              _this7.taxes = data.data;
              _this7.calculatePrice();
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Error fetching taxes:", _context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 3:
              _yield$axios$get5 = _context7.sent;
              data = _yield$axios$get5.data;
              _this8.chartOfAccounts = data || [];
              _context7.next = 12;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console.error("Error loading chart of accounts:", _context7.t0);
              _this8.chartOfAccounts = [];
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 3:
              response = _context8.sent;
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
              _context8.next = 19;
              break;
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              console.error("Error loading account routing settings:", _context8.t0);
              // Set defaults if API fails
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 19:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 14]]);
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

/***/ 20899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ItemsTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=template&id=1cdc941e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.items && _vm.items.length > 0 ? _c('div', {
    staticClass: "items-table-wrapper mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto",
    staticStyle: {
      "max-width": "100%"
    }
  }, [_c('table', {
    "class": ['table', 'table-hover', 'table-sm', 'text-center', _vm.tableClass]
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Invoice Qty")))]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Current Qty")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Return Price")))]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))]) : _vm._e()]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.$emit('open-stock-modal', item);
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
    }, [_vm._v("\n                                    " + _vm._s(item.name) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _vm.showEditButton ? _c('button', {
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
          return _vm.$emit('edit-product', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e()])]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.invoiceQty || item.qty) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.returnQty !== undefined ? item.returnQty : (item.invoiceQty || item.qty) - (item.oldQty || 0)) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "fixed-qty-column"
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.qtyFieldName],
        expression: "item[qtyFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".").concat(_vm.qtyFieldName)),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : item.maxQty || null,
        "readonly": item.isFromQuotation,
        "placeholder": _vm.$t('Quantity')
      },
      domProps: {
        "value": item[_vm.qtyFieldName]
      },
      on: {
        "change": function change($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.qtyFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
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
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [!_vm.priceReadonly ? _c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.unitPriceFieldName],
        expression: "item[unitPriceFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "readonly": item.isFromQuotation
      },
      domProps: {
        "value": item[_vm.unitPriceFieldName]
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.unitPriceFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange(item[_vm.unitPriceFieldName], 'price', i - 1, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]) : _c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(_vm.getItemField(item, _vm.unitPriceFieldName))) + "\n                        ")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals((item.originalPrice || _vm.getItemField(item, _vm.unitPriceFieldName)) * (item.invoiceQty || _vm.getItemField(item, _vm.qtyFieldName) || 1))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
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
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType"))
      },
      staticStyle: {
        "width": "85px"
      },
      attrs: {
        "disabled": item.isFromQuotation
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
          return _vm.handleDiscountChange(i - 1);
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
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount"))
      },
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName),
        "readonly": item.isFromQuotation,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) || _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discountType"))))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalAfterDiscount !== undefined ? item.totalAfterDiscount : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName) - (item.discountAmount || 0))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "fixed-vat-column"
    }, [_vm.useVatRateId ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.vat_rate_id,
        expression: "item.vat_rate_id"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "vat_rate_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleVatChange(i - 1);
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
          "value": tax.id
        }
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2) : _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation
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
          return _vm.handleVatChange(i - 1);
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
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2), _vm._v(" "), _vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".vat_rate_id"))) + "\n                        ")]) : _vm._e(), _vm._v(" "), !_vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency fixed-vat-column"
    }, [_c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(item.totalTax || 0)) + "\n                            "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + "\n                        "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(item.returnTotal !== undefined ? item.returnTotal : item.totalReturn || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.$emit('remove-item', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": _vm.totalsColspan + (_vm.showInvoiceQtyColumn ? 1 : 0) + (_vm.showCurrentQtyColumn ? 1 : 0)
    }
  }, [!_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.amountInWords) + " ")]) : _c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")))])]), _vm._v(" "), _vm.totalsColspan === 4 && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', [_c('strong')]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : 0)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.subtotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td') : _vm._e()])], 2)])])]) : _vm._e();
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
/* harmony default export */ const ItemsTablevue_type_script_lang_js = ({
  name: 'ItemsTable',
  props: {
    items: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    prefix: {
      type: String,
      "default": ''
    },
    taxes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    formErrors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    totalUnitPrice: {
      type: Number,
      "default": 0
    },
    totalProductDiscount: {
      type: Number,
      "default": 0
    },
    totalAfterDiscount: {
      type: Number,
      "default": 0
    },
    totalProductTax: {
      type: Number,
      "default": 0
    },
    subtotal: {
      type: Number,
      "default": 0
    },
    amountInWords: {
      type: String,
      "default": ''
    },
    showEditButton: {
      type: Boolean,
      "default": true
    },
    useVatRateId: {
      type: Boolean,
      "default": false
    },
    tableClass: {
      type: String,
      "default": 'quotations-create-table'
    },
    qtyFieldName: {
      type: String,
      "default": 'qty'
    },
    unitPriceFieldName: {
      type: String,
      "default": 'unitPrice'
    },
    priceReadonly: {
      type: Boolean,
      "default": false
    },
    customTotalValue: {
      type: Number,
      "default": null
    },
    totalsColspan: {
      type: Number,
      "default": 5
    },
    hideDiscountColumn: {
      type: Boolean,
      "default": false
    },
    hideVatColumn: {
      type: Boolean,
      "default": false
    },
    showInvoiceQtyColumn: {
      type: Boolean,
      "default": false
    },
    showCurrentQtyColumn: {
      type: Boolean,
      "default": false
    },
    showReturnPriceColumn: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    getItemField: function getItemField(item, fieldName) {
      return item[fieldName] || 0;
    },
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
    getFieldError: function getFieldError(field) {
      if (!this.formErrors || typeof this.formErrors.has !== 'function') {
        return false;
      }
      return this.formErrors.has(field);
    },
    getFieldErrorMessage: function getFieldErrorMessage(field) {
      if (!this.formErrors || typeof this.formErrors.get !== 'function') {
        return '';
      }
      return this.formErrors.get(field);
    },
    handleItemChange: function handleItemChange(value, type, index, action) {
      this.$emit('item-change', {
        value: value,
        type: type,
        index: index,
        action: action
      });
    },
    handleDiscountChange: function handleDiscountChange(index) {
      this.$emit('discount-change', index);
    },
    handleVatChange: function handleVatChange(index) {
      this.$emit('vat-change', index);
    }
  }
});
;// ./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ItemsTablevue_type_script_lang_js = (ItemsTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css
var ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css = __webpack_require__(48128);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css = (ItemsTablevue_type_style_index_0_id_1cdc941e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=1cdc941e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ItemsTable.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ItemsTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1cdc941e",
  null
  
)

/* harmony default export */ const ItemsTable = (component.exports);

/***/ }),

/***/ 37545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-b832e68a]{margin-bottom:15px}.footer-buttons[data-v-b832e68a]{display:flex;gap:10px}.footer-buttons .btn[data-v-b832e68a]{margin-right:10px}.footer-buttons .btn[data-v-b832e68a]:last-child{margin-right:0}.create-btn[data-v-b832e68a]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-b832e68a]:hover{background-color:#e9ecef}.edit-btn[data-v-b832e68a]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-b832e68a]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-b832e68a]{border:none!important}.quotations-create-table[data-v-b832e68a]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-b832e68a]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-b832e68a]{border:none!important}.quotations-create-table thead th[data-v-b832e68a]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-b832e68a]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-b832e68a]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-b832e68a]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-b832e68a]{gap:10px}.card[data-v-b832e68a]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-b832e68a]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-b832e68a]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-b832e68a]{background:#fff!important}.btn-primary[data-v-b832e68a]{background:#2ab930!important}.btn-secondary[data-v-b832e68a]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-b832e68a]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-b832e68a],.button-plus[data-v-b832e68a]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-b832e68a]{background-color:#dc3545;color:#fff}.button-plus[data-v-b832e68a]{background-color:#007bff;color:#fff}.button-minus[data-v-b832e68a]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-b832e68a]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-b832e68a]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-b832e68a]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-b832e68a]{direction:rtl}[dir=rtl] .create-btn[data-v-b832e68a]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-b832e68a]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-b832e68a]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-b832e68a]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-b832e68a]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-b832e68a]{border-right:1px solid #ced4da}.clickable-badge[data-v-b832e68a]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-b832e68a]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-b832e68a]:active{transform:scale(.95)}.insufficient-stock-input[data-v-b832e68a]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-b832e68a]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.debug-panel[data-v-b832e68a]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none!important}.debug-panel .card-header[data-v-b832e68a]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-b832e68a]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-b832e68a]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-b832e68a]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-b832e68a]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-b832e68a]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-b832e68a]:last-child{border-bottom:none}.debug-display[data-v-b832e68a]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-b832e68a]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-b832e68a]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-b832e68a]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-b832e68a]:last-child{border-bottom:none}.debug-panel .table th[data-v-b832e68a]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-b832e68a]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-b832e68a]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-b832e68a]{padding:15px}.debug-item .row[data-v-b832e68a]{margin:0}.debug-item .col-md-6[data-v-b832e68a]{padding:0 5px}.debug-step[data-v-b832e68a]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-b832e68a]{font-size:.75em}}.saudi-riyal[data-v-b832e68a]{color:#28a745;font-weight:700}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 48128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".items-table-wrapper[data-v-1cdc941e]{display:block;margin-left:0;margin-right:0;width:100%}.table-custom[data-v-1cdc941e]{-webkit-overflow-scrolling:touch;border:none!important;overflow-x:auto;overflow-y:visible;width:100%}.table-custom table[data-v-1cdc941e]{border-collapse:separate;border-spacing:0;height:100%;min-width:100%;table-layout:auto;width:100%}.table-custom table thead th[data-v-1cdc941e]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.table-custom table thead tr[data-v-1cdc941e]{border:none!important}.table-custom table thead th[data-v-1cdc941e]:first-child{border-top-left-radius:10px}.table-custom table thead th[data-v-1cdc941e]:last-child{border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-1cdc941e]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-1cdc941e]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.custom-qty-input[data-v-1cdc941e]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-1cdc941e],.button-plus[data-v-1cdc941e]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-1cdc941e]{background-color:#dc3545;color:#fff}.button-plus[data-v-1cdc941e]{background-color:#007bff;color:#fff}.button-minus[data-v-1cdc941e]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-1cdc941e]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-1cdc941e]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-1cdc941e]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}.clickable-badge[data-v-1cdc941e]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-1cdc941e]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-1cdc941e]:active{transform:scale(.95)}.insufficient-stock-input[data-v-1cdc941e]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-1cdc941e]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.table-custom table .badge.badge-danger[data-v-1cdc941e]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.table-custom table td.auto-width[data-v-1cdc941e]{min-width:0;white-space:nowrap;width:auto}.table-custom table td.fixed-qty-column[data-v-1cdc941e]{min-width:200px;width:auto}.table-custom table td.fixed-discount-column[data-v-1cdc941e]{min-width:180px;width:auto}.table-custom table td.fixed-vat-column[data-v-1cdc941e]{min-width:150px;width:auto}@media (max-width:768px){.table-custom[data-v-1cdc941e]{-webkit-overflow-scrolling:touch;display:block;overflow-x:auto;width:100%}.table-custom table[data-v-1cdc941e]{display:block;min-width:-moz-fit-content;min-width:fit-content;width:100%}.table-custom table thead[data-v-1cdc941e]{display:table-header-group}.table-custom table tbody[data-v-1cdc941e]{display:table-row-group}.table-custom table tr[data-v-1cdc941e]{display:table-row}.table-custom table td[data-v-1cdc941e],.table-custom table th[data-v-1cdc941e]{display:table-cell;white-space:nowrap}.table-custom table td.fixed-qty-column[data-v-1cdc941e]{min-width:200px}.table-custom table td.fixed-discount-column[data-v-1cdc941e]{min-width:180px}.table-custom table td.fixed-vat-column[data-v-1cdc941e]{min-width:150px}}@media (max-width:576px){.table-custom table[data-v-1cdc941e]{min-width:-moz-fit-content;min-width:fit-content}.table-custom table tbody td[data-v-1cdc941e],.table-custom table thead th[data-v-1cdc941e]{font-size:12px;padding:6px 4px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var adjustmentData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
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
              _context.next = 4;
              return axios_default().post("/api/inventory-adjustments", adjustmentData);
            case 4:
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
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error("Error adding stock:", _context.t0);
              toast.fire({
                type: "error",
                title: _this3.$t("Error"),
                text: _this3.$t("Failed to add stock. Please try again.")
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
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

/***/ 83418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ invoice)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=template&id=b832e68a&scoped=true
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
  }, [_c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'quotations.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n              " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n              ")]]], 2)], 1), _vm._v(" "), _c('div', {
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
  }, [_c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningClient
    },
    on: {
      "click": _vm.autoAssignClientChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningClient ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
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
  }, [_c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Some products need Sales Accounts assigned')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct
    },
    on: {
      "click": _vm.autoAssignAllProductsChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningProduct ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign All')) + "\n                    ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('ItemsTable', {
    attrs: {
      "items": _vm.form.selectedProducts,
      "prefix": _vm.prefix,
      "taxes": _vm.taxes,
      "form-errors": _vm.form.errors,
      "total-unit-price": _vm.totalUnitPrice,
      "total-product-discount": _vm.totalProductDiscount,
      "total-after-discount": _vm.totalAfterDiscount,
      "total-product-tax": _vm.totalProductTax,
      "subtotal": _vm.subtotal,
      "amount-in-words": _vm.toWord(),
      "use-vat-rate-id": true
    },
    on: {
      "item-change": _vm.handleItemChange,
      "discount-change": _vm.calculateProductDiscount,
      "vat-change": _vm.onVatRateChange,
      "remove-item": _vm.removeItem,
      "open-stock-modal": _vm.openStockAdjustmentModal,
      "edit-product": _vm.editProductFromTable
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_vm.taxes ? _c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Tax')) + "\n                  "), !_vm.isSaudiArabia ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('v-select', {
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes ? _c('div', {
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
    staticClass: "form-group col-md-4"
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
  }, [_c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningAccount
    },
    on: {
      "click": _vm.autoAssignBankAccountChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningAccount ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningAccount ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _c('div', {
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
  }), _vm._v(" "), _vm.form.addPayment == 1 && !_vm.form.account ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Please choose a bank account")))])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _vm.form.addPayment == 1 && (!_vm.form.paidAmount || Number(_vm.form.paidAmount) <= 0) ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Paid amount must be greater than 0")))])]) : _vm._e(), _vm._v(" "), _vm.form.addPayment == 1 && _vm.form.paidAmount ? _c('div', {
    staticClass: "mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Due Amount")) + ": "), _c('strong', [_vm._v(_vm._s(_vm.dueAmount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
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
    "class": _vm.isFormReady ? 'fas fa-save' : 'fas fa-times'
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n              ")])])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-4 debug-panel"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-primary"
  }, [_vm._v("Individual Item Calculations:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', _vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('div', {
      key: "debug-item-".concat(index),
      staticClass: "alert alert-light border-left-primary"
    }, [_c('h6', {
      staticClass: "mb-2"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Subtotal:")]), _vm._v(" " + _vm._s(item.unitPrice) + " × " + _vm._s(item.qty) + " = " + _vm._s(item.totalBeforeDiscount) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Discount Type:")]), _vm._v(" " + _vm._s(item.discountType || 'fixed') + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Discount Amount:")]), _vm._v(" " + _vm._s(item.discountAmount || 0) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("After Discount:")]), _vm._v(" " + _vm._s(item.totalAfterDiscount) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("VAT Rate ID:")]), _vm._v(" "), _c('span', {
      "class": item.vat_rate_id ? 'badge badge-success' : 'badge badge-warning'
    }, [_vm._v("\n                        " + _vm._s(item.vat_rate_id || 'Not Set') + "\n                      ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("VAT:")]), _vm._v(" " + _vm._s(item.totalTax) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("VAT Code:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.code : 'Not Set') + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("VAT %:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.rate : 0) + "%\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("Product Tax:")]), _vm._v(" " + _vm._s(item.productTax) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(item.totalPrice) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('strong', [_vm._v("VAT Type Calculation:")]), _vm._v(" "), _c('span', {
      staticClass: "badge badge-info"
    }, [_vm._v(_vm._s(_vm.getVatTypeInfo(item).formula))]), _vm._v(" "), _c('small', {
      staticClass: "text-muted ml-2"
    }, [_vm._v("(VAT Amount ÷ Total After Discount = VAT Type %)")])])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(item.totalPrice) + "\n                    ")])])]);
  }), 0) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-success"
  }, [_vm._v("Summary Totals:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Unit Price")]), _vm._v(" "), _c('h4', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.getTotalUnitPrice()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getTotalDiscount()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total After Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getTotalAfterDiscount()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Tax")]), _vm._v(" "), _c('h4', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.getProductTotalTax()))])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-info"
  }, [_vm._v("Form Values:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.subTotal:")]), _vm._v(" " + _vm._s(_vm.form.subTotal) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.totalDiscount:")]), _vm._v(" " + _vm._s(_vm.form.totalDiscount) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.totalTax:")]), _vm._v(" " + _vm._s(_vm.form.totalTax) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.netTotal:")]), _vm._v(" " + _vm._s(_vm.form.netTotal) + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-warning"
  }, [_vm._v("Template Display:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('strong', [_vm._v("Summary Final Total:")]), _vm._v(" " + _vm._s(_vm.getSubTotal()) + ".00\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.toWord()) + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-dark"
  }, [_vm._v("Calculation Steps:")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("Sum of all item totals = " + _vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('li', [_vm._v("form.netTotal = " + _vm._s(_vm.form.netTotal))]), _vm._v(" "), _c('li', [_vm._v("Are they equal? \n                  "), _c('span', {
    "class": _vm.getSubTotal() === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                    " + _vm._s(_vm.getSubTotal() === _vm.form.netTotal ? '✅ YES' : '❌ NO') + "\n                  ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-danger"
  }, [_vm._v("VAT Information from Quotation Products:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.getQuotationProductVatRates(), function (vat) {
    return _c('tr', {
      key: "vat-".concat(vat.index)
    }, [_c('td', [_vm._v(_vm._s(vat.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.productCode))]), _vm._v(" "), _c('td', [_c('span', {
      "class": vat.vatRateId ? 'badge badge-success' : 'badge badge-warning'
    }, [_vm._v("\n                            " + _vm._s(vat.vatRateId || 'Not Set') + "\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.vatRateCode))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.vatRatePercentage) + "%")]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "badge badge-info"
    }, [_vm._v("\n                            " + _vm._s(_vm.calculateVatTypePercentage(_vm.form.selectedProducts[vat.index])) + "%\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.productTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalAfterDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalPrice))])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.getVatSummary().totalVat))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items with VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.getVatSummary().itemsWithVat) + " / " + _vm._s(_vm.getVatSummary().totalItems))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items without VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getVatSummary().itemsWithoutVat))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("VAT Rate Groups")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getVatSummary().vatRateGroups.length))])])])])]), _vm._v(" "), _vm.getVatSummary().vatRateGroups.length > 0 ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h6', {
    staticClass: "text-primary"
  }, [_vm._v("VAT Rate Groups Breakdown:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.getVatSummary().vatRateGroups, function (group) {
    return _c('div', {
      key: "group-".concat(group.vatRateId),
      staticClass: "col-md-4 mb-2"
    }, [_c('div', {
      staticClass: "card bg-light"
    }, [_c('div', {
      staticClass: "card-body text-center"
    }, [_c('h6', [_vm._v(_vm._s(group.vatRateCode) + " (" + _vm._s(group.vatRatePercentage) + "%)")]), _vm._v(" "), _c('p', {
      staticClass: "mb-1"
    }, [_vm._v("Items: " + _vm._s(group.count))]), _vm._v(" "), _c('p', {
      staticClass: "mb-0"
    }, [_vm._v("Total Tax: " + _vm._s(group.totalTax))])])])]);
  }), 0)])]) : _vm._e()]) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-warning"
  }, [_vm._v("Discount Information from Quotation Products:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l(_vm.getQuotationProductDiscounts(), function (discount) {
    return _c('tr', {
      key: "discount-".concat(discount.index)
    }, [_c('td', [_vm._v(_vm._s(discount.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.productCode))]), _vm._v(" "), _c('td', [_c('span', {
      "class": discount.discountType === 'percentage' ? 'badge badge-info' : 'badge badge-primary'
    }, [_vm._v("\n                            " + _vm._s(discount.discountType) + "\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.discountAmount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.totalBeforeDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.totalAfterDiscount))])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().totalDiscount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items with Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().itemsWithDiscount) + " / " + _vm._s(_vm.getDiscountSummary().totalItems))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Fixed Discounts")]), _vm._v(" "), _c('h4', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().fixedDiscounts.length))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Percentage Discounts")]), _vm._v(" "), _c('h4', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().percentageDiscounts.length))])])])])])]) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-secondary"
  }, [_vm._v("Current State:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Selected Products Count:")]), _vm._v(" " + _vm._s(_vm.form.selectedProducts ? _vm.form.selectedProducts.length : 0) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Is Saudi Arabia:")]), _vm._v(" " + _vm._s(_vm.isSaudiArabia ? 'true' : 'false') + "\n                ")]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-primary"
  }, [_vm._v("Summary Table Comparison:")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(4), _vm._v(" "), _c('tbody', [_c('tr', [_vm._m(5), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalUnitPrice()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalUnitPrice()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalUnitPrice() === _vm.form.subTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalUnitPrice() === _vm.form.subTotal ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(6), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalDiscount()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalDiscount()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalDiscount() === _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalDiscount() === _vm.form.totalDiscount ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(7), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalAfterDiscount()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal - _vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalAfterDiscount()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalAfterDiscount() === _vm.form.subTotal - _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalAfterDiscount() === _vm.form.subTotal - _vm.form.totalDiscount ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(8), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getProductTotalTax()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getProductTotalTax()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getProductTotalTax() === _vm.form.totalTax ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getProductTotalTax() === _vm.form.totalTax ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(9), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.netTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getSubTotal() === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getSubTotal() === _vm.form.netTotal ? '✅' : '❌') + "\n                        ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-success"
  }, [_vm._v("📊 Quotation Totals (Stored Values):")]), _vm._v(" "), _c('div', {
    staticClass: "alert alert-info"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("isQuotationLoaded:")]), _vm._v(" "), _c('span', {
    "class": _vm.isQuotationLoaded ? 'badge badge-success' : 'badge badge-warning'
  }, [_vm._v("\n                      " + _vm._s(_vm.isQuotationLoaded ? '✅ TRUE' : '❌ FALSE') + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Using Quotation Totals:")]), _vm._v(" "), _c('span', {
    "class": _vm.isQuotationLoaded ? 'badge badge-success' : 'badge badge-secondary'
  }, [_vm._v("\n                      " + _vm._s(_vm.isQuotationLoaded ? 'YES' : 'NO') + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Products from Quotation:")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v("\n                      " + _vm._s(_vm.form.selectedProducts.filter(function (p) {
    return p.isFromQuotation;
  }).length) + " / " + _vm._s(_vm.form.selectedProducts.length) + "\n                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(10), _vm._v(" "), _c('tbody', [_c('tr', [_vm._m(11), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.subTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalUnitPrice()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.subTotal === _vm.form.subTotal ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.subTotal === _vm.form.subTotal ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(12), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalDiscount()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.totalDiscount === _vm.form.totalDiscount ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.totalDiscount === _vm.form.totalDiscount ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(13), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.totalAfterDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal - _vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalAfterDiscount()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.totalAfterDiscount === _vm.form.subTotal - _vm.form.totalDiscount ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.totalAfterDiscount === _vm.form.subTotal - _vm.form.totalDiscount ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(14), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.productTotalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getProductTotalTax()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.totalTax === _vm.form.productTotalTax ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.totalTax === _vm.form.productTotalTax ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(15), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.totalAfterTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.totalAfterDiscount + _vm.quotationTotals.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.totalAfterTax === _vm.getSubTotal() ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.totalAfterTax === _vm.getSubTotal() ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(16), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.quotationTotals.netTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.netTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.quotationTotals.netTotal === _vm.form.netTotal ? 'badge badge-success' : 'badge badge-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.quotationTotals.netTotal === _vm.form.netTotal ? '✅ MATCH' : '❌ MISMATCH') + "\n                        ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-danger"
  }, [_vm._v("🔢 Detailed Calculation Breakdown:")]), _vm._v(" "), _c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('h6', {
    staticClass: "text-primary mb-3"
  }, [_vm._v("Step-by-Step Calculation Formulas:")]), _vm._v(" "), _c('div', {
    staticClass: "debug-steps"
  }, [_c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("1. Subtotal (Total Unit Price):")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.subTotal)), _c('br'), _vm._v("\n                        Formula: Sum of (salePrice × quantity) for all products\n                      ")]) : _c('code', [_vm._v("\n                        Formula: Sum of (unitPrice × qty) for all products"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().subtotalFormula) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("2. Total Discount:")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.totalDiscount)), _c('br'), _vm._v("\n                        Formula: Sum of discount_amount for all products\n                      ")]) : _c('code', [_vm._v("\n                        Formula: Sum of discountAmount for all products"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().discountFormula) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("3. Total After Discount:")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.totalAfterDiscount)), _c('br'), _vm._v("\n                        Formula: subTotal - totalDiscount\n                      ")]) : _c('code', [_vm._v("\n                        Formula: subTotal - totalDiscount"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().afterDiscountFormula) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("4. Total VAT/Tax:")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.totalTax)), _c('br'), _vm._v("\n                        Formula: Sum of taxAmount for all products\n                      ")]) : _c('code', [_vm._v("\n                        Formula: Sum of (taxType === 'Inclusive' ? totalTax : productTax) for all products"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().taxFormula) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("5. Total After Tax:")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.totalAfterTax)), _c('br'), _vm._v("\n                        Formula: totalAfterDiscount + totalTax\n                      ")]) : _c('code', [_vm._v("\n                        Formula: totalAfterDiscount + totalTax"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().afterTaxFormula) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('strong', [_vm._v("6. Net Total (Final):")]), _c('br'), _vm._v(" "), _vm.isQuotationLoaded ? _c('code', [_vm._v("\n                        Using Quotation: " + _vm._s(_vm.quotationTotals.netTotal)), _c('br'), _vm._v("\n                        Formula: totalAfterTax (or quotation total if available)\n                      ")]) : _c('code', [_vm._v("\n                        Formula: totalAfterTax + transportCost - globalDiscount"), _c('br'), _vm._v("\n                        Calculation: " + _vm._s(_vm.getCalculationBreakdown().netTotalFormula) + "\n                      ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-warning"
  }, [_vm._v("📦 Product-Level Calculation Breakdown:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', _vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('div', {
      key: "calc-".concat(index),
      staticClass: "card mb-3"
    }, [_c('div', {
      staticClass: "card-header bg-light"
    }, [_c('strong', [_vm._v(_vm._s(item.name) + " (" + _vm._s(item.code) + ")")]), _vm._v(" "), item.isFromQuotation ? _c('span', {
      staticClass: "badge badge-success ml-2"
    }, [_vm._v("From Quotation")]) : _c('span', {
      staticClass: "badge badge-info ml-2"
    }, [_vm._v("Manual Entry")])]), _vm._v(" "), _c('div', {
      staticClass: "card-body"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Unit Price:")]), _vm._v(" " + _vm._s(item.unitPrice)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Quantity:")]), _vm._v(" " + _vm._s(item.qty)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Total Before Discount:")]), _vm._v(" " + _vm._s(item.totalBeforeDiscount || item.unitPrice * item.qty)), _c('br'), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("Formula: unitPrice × qty")])])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Discount Type:")]), _vm._v(" " + _vm._s(item.discountType || 'fixed')), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Discount Value:")]), _vm._v(" " + _vm._s(item.discount || 0)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Discount Amount:")]), _vm._v(" " + _vm._s(item.discountAmount || 0)), _c('br'), _vm._v(" "), item.discountType === 'percentage' ? _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: (totalBeforeDiscount × discount) / 100\n                          ")]) : _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: discount (fixed amount)\n                          ")])])])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Total After Discount:")]), _vm._v(" " + _vm._s(item.totalAfterDiscount || 0)), _c('br'), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("Formula: totalBeforeDiscount - discountAmount")])])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Tax Type:")]), _vm._v(" " + _vm._s(item.taxType || 'N/A')), _c('br'), _vm._v(" "), _c('strong', [_vm._v("VAT Rate ID:")]), _vm._v(" " + _vm._s(item.vat_rate_id || 'Not Set')), _c('br'), _vm._v(" "), _c('strong', [_vm._v("VAT Code:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.code : 'N/A')), _c('br'), _vm._v(" "), _c('strong', [_vm._v("VAT %:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.rate : 0) + "%\n                        ")])])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Product Tax (per unit):")]), _vm._v(" " + _vm._s(item.productTax || 0)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Total Tax:")]), _vm._v(" " + _vm._s(item.totalTax || 0)), _c('br'), _vm._v(" "), item.taxType === 'Inclusive' ? _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: totalTax = productTax × qty (tax included in price)\n                          ")]) : _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: productTax = tax amount, totalTax = productTax (tax added to price)\n                          ")])])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Total Price (with VAT):")]), _vm._v(" " + _vm._s(item.totalPrice || 0)), _c('br'), _vm._v(" "), item.taxType === 'Inclusive' ? _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: totalPrice = totalAfterDiscount (tax already included)\n                          ")]) : _c('small', {
      staticClass: "text-muted"
    }, [_vm._v("\n                            Formula: totalPrice = totalAfterDiscount + totalTax\n                          ")])])])])])]);
  }), 0) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])])])])])])]), _vm._v(" "), _c('StockAdjustmentModal', {
    attrs: {
      "is-open": _vm.showStockAdjustmentModal,
      "product": _vm.selectedProductForStockAdjustment
    },
    on: {
      "close": _vm.closeStockAdjustmentModal,
      "adjust-quantity": _vm.adjustProductQuantity,
      "stock-updated": _vm.handleStockUpdated
    }
  }), _vm._v(" "), _c('ProductEditModal', {
    ref: "productEditModal",
    on: {
      "reloadProducts": _vm.getProducts,
      "productUpdated": _vm.handleProductUpdated
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-header bg-info text-white"
  }, [_c('h4', {
    staticClass: "card-title mb-0"
  }, [_vm._v("\n            🔍 Debug Panel - Calculation Steps\n            "), _c('span', {
    staticClass: "badge badge-light ml-2"
  }, [_vm._v("DEBUG MODE ACTIVE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Product")]), _vm._v(" "), _c('th', [_vm._v("Code")]), _vm._v(" "), _c('th', [_vm._v("VAT Rate ID")]), _vm._v(" "), _c('th', [_vm._v("VAT Code")]), _vm._v(" "), _c('th', [_vm._v("VAT %")]), _vm._v(" "), _c('th', [_vm._v("VAT Type %")]), _vm._v(" "), _c('th', [_vm._v("Product Tax")]), _vm._v(" "), _c('th', [_vm._v("Total Tax")]), _vm._v(" "), _c('th', [_vm._v("After Discount")]), _vm._v(" "), _c('th', [_vm._v("Total with VAT")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Product")]), _vm._v(" "), _c('th', [_vm._v("Code")]), _vm._v(" "), _c('th', [_vm._v("Discount Type")]), _vm._v(" "), _c('th', [_vm._v("Discount Amount")]), _vm._v(" "), _c('th', [_vm._v("Before Discount")]), _vm._v(" "), _c('th', [_vm._v("After Discount")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Debug Panel Visible:")]), _vm._v(" ✅ YES\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Value")]), _vm._v(" "), _c('th', [_vm._v("Computed Property")]), _vm._v(" "), _c('th', [_vm._v("Form Value")]), _vm._v(" "), _c('th', [_vm._v("Template Display")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Subtotal")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Discount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("After Discount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Tax")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Final Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Field")]), _vm._v(" "), _c('th', [_vm._v("Quotation Total (Stored)")]), _vm._v(" "), _c('th', [_vm._v("Current Form Value")]), _vm._v(" "), _c('th', [_vm._v("Computed Value")]), _vm._v(" "), _c('th', [_vm._v("Match Status")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("subTotal")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("totalDiscount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("totalAfterDiscount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("totalTax")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("totalAfterTax")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("netTotal")])]);
}];

;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=template&id=b832e68a&scoped=true

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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (error.autoAssignUrl) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              console.log('Starting auto-assignment for:', error);
              _this2.$set(error, 'isAutoAssigning', true);
              _context.prev = 4;
              _context.next = 7;
              return axios_default().post(error.autoAssignUrl);
            case 7:
              response = _context.sent;
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
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              console.error('Failed to auto-assign chart of account:', _context.t0);
              _this2.$toast.fire({
                icon: 'error',
                title: _this2.$t('Failed to assign Chart of Account automatically')
              });
            case 16:
              _context.prev = 16;
              _this2.$set(error, 'isAutoAssigning', false);
              console.log('Auto-assignment completed');
              return _context.finish(16);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[4, 12, 16, 20]]);
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
// EXTERNAL MODULE: ./resources/js/components/StockAdjustmentModal.vue + 6 modules
var StockAdjustmentModal = __webpack_require__(75528);
// EXTERNAL MODULE: ./resources/js/components/ProductEditModal.vue + 18 modules
var ProductEditModal = __webpack_require__(9043);
// EXTERNAL MODULE: ./resources/js/components/ItemsTable.vue + 5 modules
var ItemsTable = __webpack_require__(20899);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
function invoicevue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return invoicevue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, invoicevue_type_script_lang_js_typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function invoicevue_type_script_lang_js_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ invoicevue_type_script_lang_js_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == invoicevue_type_script_lang_js_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(invoicevue_type_script_lang_js_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function invoicevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function invoicevue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { invoicevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { invoicevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == invoicevue_type_script_lang_js_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != invoicevue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != invoicevue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const invoicevue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Quotation To Invoice')
    };
  },
  components: {
    ChartOfAccountValidation: ChartOfAccountValidation,
    StockAdjustmentModal: StockAdjustmentModal/* default */.A,
    ProductEditModal: ProductEditModal/* default */.A,
    ItemsTable: ItemsTable/* default */.A
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
      prefix: '',
      isAutoAssigningClient: false,
      isAutoAssigningProduct: false,
      isAutoAssigningAccount: false,
      isRTL: false,
      currentLocale: 'en',
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null,
      quotationTotals: {
        subTotal: 0,
        totalTax: 0,
        totalDiscount: 0,
        totalAfterDiscount: 0,
        totalAfterTax: 0,
        netTotal: 0
      },
      isQuotationLoaded: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    // Computed properties for ItemsTable (wrapping methods)
    totalUnitPrice: function totalUnitPrice() {
      return this.getTotalUnitPrice();
    },
    totalProductDiscount: function totalProductDiscount() {
      return this.getTotalDiscount();
    },
    totalAfterDiscount: function totalAfterDiscount() {
      return this.getTotalAfterDiscount();
    },
    totalProductTax: function totalProductTax() {
      return this.getProductTotalTax();
    },
    subtotal: function subtotal() {
      return this.getSubTotal();
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
    // Check if all products have VAT rates assigned
    allProductsHaveVatRates: function allProductsHaveVatRates() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(function (product) {
        return product.vat_rate_id;
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
      var basicRequirements = this.hasChartOfAccount && this.allProductsHaveSalesAccounts && this.allProductsHaveVatRates && this.hasBankAccountChartOfAccount && this.form.selectedProducts && this.form.selectedProducts.length > 0;

      // Debug logging
      console.log('Form validation debug:', {
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        allProductsHaveVatRates: this.allProductsHaveVatRates,
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
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data, totalUnitPrice, totalProductDiscount, totalAfterDiscount, totalProductTax, totalAfterTax;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + '/api/quotations/' + _this.$route.params.slug);
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.form.client = data.data.client;
              _this.form.reference = data.data.reference;
              _this.form.totalTax = data.data.totalTax;
              _this.form.orderTax = data.data.quotationTax;
              _this.form.discount = data.data.discountType == 0 ? data.data.discount : data.data.discountPercentage;
              _this.form.discountPercentage = data.data.discountPercentage;
              // Note: data.data.discount is the global discount, not product discount total
              // We'll set form.totalDiscount to product discount total later after calculating quotationTotals
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

              // Store quotation totals for exact matching
              totalUnitPrice = data.data.products.reduce(function (sum, p) {
                return sum + p.salePrice * p.quantity;
              }, 0); // Calculate total discount - recalculate if discount_amount is 0 but discount value exists
              totalProductDiscount = data.data.products.reduce(function (sum, p) {
                var discountAmount = p.discount_amount || 0;
                var discountType = p.discountType || p.discount_type || 'fixed';
                var discountValue = p.discount || 0;
                var totalBeforeDiscount = p.salePrice * p.quantity;

                // If discount value exists but discount_amount is 0, recalculate discount_amount
                if (discountValue > 0 && discountAmount === 0 && totalBeforeDiscount > 0) {
                  if (discountType === 'percentage') {
                    discountAmount = _this.roundToTwoDecimals(totalBeforeDiscount * discountValue / 100);
                  } else {
                    discountAmount = _this.roundToTwoDecimals(discountValue);
                  }
                }
                return sum + discountAmount;
              }, 0);
              totalAfterDiscount = totalUnitPrice - totalProductDiscount;
              totalProductTax = data.data.products.reduce(function (sum, p) {
                return sum + (p.taxAmount || 0);
              }, 0);
              totalAfterTax = totalAfterDiscount + totalProductTax;
              _this.quotationTotals = {
                subTotal: totalUnitPrice,
                totalTax: totalProductTax,
                totalDiscount: totalProductDiscount,
                totalAfterDiscount: totalAfterDiscount,
                totalAfterTax: totalAfterTax,
                netTotal: data.data.total || data.data.quotationTotal || totalAfterTax
              };
              _this.form.selectedProducts = _this.assignProducts(data.data.products);
              _this.isQuotationLoaded = true;

              // Set default tax if needed (for Saudi Arabia or if quotation has no tax)
              _this.setDefaultTax();

              // Use quotation totals directly instead of recalculating
              // Note: form.totalDiscount is set to product discount total, not global discount
              _this.form.subTotal = _this.quotationTotals.subTotal;
              _this.form.productTotalTax = _this.quotationTotals.totalTax;
              _this.form.totalDiscount = _this.quotationTotals.totalDiscount;
              // Set netTotal to totalAfterTax (sum of Total After Tax column) instead of netTotal from quotation
              _this.form.netTotal = Number(_this.quotationTotals.totalAfterTax.toFixed(2));

              // Debug logging
              console.log('Quotation data loaded:', {
                client: _this.form.client,
                selectedProducts: _this.form.selectedProducts,
                quotationTotals: _this.quotationTotals,
                isSaudiArabia: _this.isSaudiArabia,
                status: _this.form.status,
                hasChartOfAccount: _this.hasChartOfAccount,
                allProductsHaveSalesAccounts: _this.allProductsHaveSalesAccounts,
                isFormReady: _this.isFormReady
              });
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get all clients
    getClients: function getClients() {
      var _this2 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee2() {
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-clients'
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this3 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get2, data;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 2:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              _this3.products = data.data;
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this4 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get3, data;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 2:
              _yield$axios$get3 = _context4.sent;
              data = _yield$axios$get3.data;
              _this4.taxes = data.data;

              // Set default tax for Saudi Arabia if no tax is selected
              _this4.setDefaultTax();

              // Only recalculate if quotation is not loaded (for new products added manually)
              if (!_this4.isQuotationLoaded) {
                // Recalculate VAT for all products after taxes are loaded
                _this4.recalculateAllProductsVat();

                // Force update VAT rate selection for all products
                _this4.forceUpdateVatRateSelection();
              }

              // Debug: Log VAT rate matching
              console.log('VAT Rate Matching Debug:', {
                taxes: _this4.taxes,
                selectedProducts: _this4.form.selectedProducts.map(function (item) {
                  return {
                    name: item.name,
                    vat_rate_id: item.vat_rate_id,
                    selectedVatRate: item.selectedVatRate
                  };
                })
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // set default tax for Saudi Arabia or when no tax is assigned
    setDefaultTax: function setDefaultTax() {
      if (this.taxes && this.taxes.length > 0 && !this.form.orderTax) {
        // Find a 0% tax rate or the first available tax
        var zeroTax = this.taxes.find(function (tax) {
          return tax.rate === 0;
        });
        var defaultTax = zeroTax || this.taxes[0];
        this.form.orderTax = defaultTax;
        console.log('Default tax set:', defaultTax);
      }
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this5 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get4, data;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 2:
              _yield$axios$get4 = _context5.sent;
              data = _yield$axios$get4.data;
              _this5.accounts = data.data;
            case 5:
            case "end":
              return _context5.stop();
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
          selectedVatRate: product.selectedVatRate || null,
          vat_rate_id: product.vat_rate_id || null,
          itemType: product.itemType || 'product',
          discountType: 'fixed',
          discount: 0,
          discountAmount: 0,
          totalBeforeDiscount: product.priceWithDiscount * qunatity,
          totalAfterDiscount: product.priceWithDiscount * qunatity
        });
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      return;
    },
    // update array
    handleItemChange: function handleItemChange(_ref) {
      var value = _ref.value,
        type = _ref.type,
        index = _ref.index,
        action = _ref.action;
      this.generateItemTotal(value, type, index, action);
    },
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return;
      }
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
        } else if (type == 'price') {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }

        // Update calculated fields
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0));

        // Calculate VAT based on selected VAT rate
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          var vatRate = item.selectedVatRate.rate;
          item.productTax = this.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);
        } else {
          // No VAT rate selected
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
        }
        item.unitCost = this.roundToTwoDecimals(item.unitPrice);
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
      // If quotation is loaded, use quotation totals directly instead of recalculating
      if (this.isQuotationLoaded && this.quotationTotals) {
        this.form.subTotal = this.quotationTotals.subTotal;
        this.form.productTotalTax = this.quotationTotals.totalTax;
        this.form.totalDiscount = this.quotationTotals.totalDiscount;
        // Continue with global discount and invoice tax calculations
      } else {
        // calculate subtotal (without VAT for quotations)
        this.form.subTotal = this.form.selectedProducts.reduce(function (prev, cur) {
          return Number((prev + (cur.totalAfterDiscount || 0)).toFixed(2));
        }, 0);

        // calculate product tax
        this.form.productTotalTax = this.form.selectedProducts.reduce(function (prev, cur) {
          return Number((prev + cur.totalTax).toFixed(2));
        }, 0);

        // calculate total product discount
        this.form.totalDiscount = this.form.selectedProducts.reduce(function (prev, cur) {
          return Number((prev + (cur.discountAmount || 0)).toFixed(2));
        }, 0);
      }

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

      // calculate invoice tax
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Use product VAT as total tax
        this.form.totalTax = this.form.productTotalTax;
      } else {
        // For other countries: Calculate invoice tax
        this.form.totalTax = 0;
        if (this.form.orderTax) {
          this.form.totalTax = Number((this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)).toFixed(2));
        }
      }

      // calculate final total
      if (this.isQuotationLoaded && this.quotationTotals) {
        // Use quotation totalAfterTax (sum of Total After Tax column) instead of netTotal
        this.form.netTotal = Number(this.quotationTotals.totalAfterTax.toFixed(2));
      } else if (this.isSaudiArabia) {
        // For Saudi Arabia: Net Total = SubTotal + Product VAT (no global discount, no invoice tax, no transport cost)
        this.form.netTotal = Number((this.form.subTotal + this.form.productTotalTax).toFixed(2));
      } else {
        // For other countries: Net Total = SubTotal - Global Discount + Invoice Tax + Transport Cost
        this.form.netTotal = Number((this.form.subTotal - globalDiscount + this.form.totalTax + Number(this.form.transportCost || 0)).toFixed(2));
      }
      return;
    },
    // get quotation products - use exact values from quotation without recalculating
    assignProducts: function assignProducts(quotationProducts) {
      var _this6 = this;
      var _loop = function _loop() {
        var quotationProduct = quotationProducts[key];

        // Find the VAT rate object based on vat_rate_id
        var vatRate = _this6.taxes ? _this6.taxes.find(function (tax) {
          return tax.id === quotationProduct.vat_rate_id;
        }) : null;

        // Use exact values from quotation - do not recalculate
        var totalBeforeDiscount = quotationProduct.salePrice * quotationProduct.quantity;
        var discountAmount = quotationProduct.discount_amount || 0;
        var discountType = quotationProduct.discountType || quotationProduct.discount_type || 'fixed';
        var discountValue = quotationProduct.discount || 0;

        // If discount value exists but discount_amount is 0, recalculate discount_amount for consistency
        if (discountValue > 0 && discountAmount === 0 && totalBeforeDiscount > 0) {
          if (discountType === 'percentage') {
            discountAmount = _this6.roundToTwoDecimals(totalBeforeDiscount * discountValue / 100);
          } else {
            discountAmount = _this6.roundToTwoDecimals(discountValue);
          }
        }
        var totalAfterDiscount = totalBeforeDiscount - discountAmount;
        var taxAmount = quotationProduct.taxAmount || 0;

        // For VAT display: use taxAmount directly (for Inclusive, it's already total; for Exclusive, it's per unit * qty)
        // The taxAmount from API is the total tax amount for the product
        var productTax = 0;
        var totalTax = taxAmount;

        // For Inclusive tax, productTax is per unit, for Exclusive it's total
        if (quotationProduct.taxType === 'Inclusive' && quotationProduct.quantity > 0) {
          productTax = _this6.roundToTwoDecimals(taxAmount / quotationProduct.quantity);
        } else {
          productTax = taxAmount;
        }

        // Calculate totalPrice correctly based on tax type
        // For Exclusive: totalPrice = totalAfterDiscount + totalTax
        // For Inclusive: totalPrice = totalAfterDiscount (tax already included)
        var totalPrice = 0;
        if (quotationProduct.taxType === 'Inclusive') {
          // Tax is already included in the price
          totalPrice = totalAfterDiscount;
        } else {
          // Tax is added to the price
          totalPrice = totalAfterDiscount + totalTax;
        }

        // Round to 2 decimals
        totalPrice = _this6.roundToTwoDecimals(totalPrice);

        // Use discount value from quotation, or calculate from discountAmount if not provided
        if (discountValue === 0 && discountAmount > 0 && totalBeforeDiscount > 0) {
          // Calculate discount value if not provided but discountAmount exists
          if (discountType === 'percentage') {
            discountValue = _this6.roundToTwoDecimals(discountAmount / totalBeforeDiscount * 100);
          } else {
            discountValue = discountAmount;
          }
        }
        _this6.form.selectedProducts.unshift({
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
          totalPrice: totalPrice,
          productTax: productTax,
          totalTax: totalTax,
          sales_account_id: quotationProduct.sales_account_id || null,
          selectedVatRate: vatRate,
          vat_rate_id: quotationProduct.vat_rate_id || (vatRate ? vatRate.id : null),
          itemType: quotationProduct.itemType || 'product',
          discountType: discountType,
          discount: discountValue,
          discountAmount: discountAmount,
          totalBeforeDiscount: totalBeforeDiscount,
          totalAfterDiscount: totalAfterDiscount,
          // Flag to prevent recalculation
          isFromQuotation: true
        });
      };
      for (var key in quotationProducts) {
        _loop();
      }
      // Don't call calculateSum - use quotation totals directly
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
        this.$toast.warning(this.$t('Validation Errors'), this.$t('Please fix the following issues:') + '\n' + errorList);
      }
    },
    // Format form values before submission
    formatFormValues: function formatFormValues() {
      // Calculate sub_total as: subTotal - totalDiscount + totalTax
      var calculatedSubTotal = Number((this.form.subTotal - (this.form.totalDiscount || 0) + (this.form.totalTax || this.form.productTotalTax || 0)).toFixed(2));
      this.form.subTotal = calculatedSubTotal;

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
      var _this7 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee6() {
        var validationErrors, productsWithoutSalesAccount, productNames, productsWithoutVatRate, _productNames, paymentValidation;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              console.log('createInvoice method called');
              _context6.prev = 1;
              // Ensure all monetary values are properly formatted to 2 decimal places before submission
              _this7.formatFormValues();

              // Collect all validation errors before submission
              validationErrors = [];
              if (!_this7.form.client || !_this7.form.client.chart_of_account_id) {
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Chart of Account Required"),
                  message: _this7.$t("Client must have a Chart of Account assigned before creating an invoice."),
                  field: "client"
                });
              }
              if (!_this7.form.selectedProducts || _this7.form.selectedProducts.length === 0) {
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("No Products Selected"),
                  message: _this7.$t("Please select at least one product to create an invoice."),
                  field: "selectedProducts"
                });
              }

              // Validate that all products have sales accounts assigned
              productsWithoutSalesAccount = _this7.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (productsWithoutSalesAccount.length > 0) {
                productNames = productsWithoutSalesAccount.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Product Chart of Account Required"),
                  message: _this7.$t("The following products must have Sales Accounts assigned: ") + productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // Validate that all products have VAT rates assigned
              productsWithoutVatRate = _this7.form.selectedProducts.filter(function (product) {
                return !product.vat_rate_id;
              });
              if (productsWithoutVatRate.length > 0) {
                _productNames = productsWithoutVatRate.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Product VAT Rate Required"),
                  message: _this7.$t("The following products must have a VAT rate assigned: ") + _productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // Validate payment fields when "Add Payment" is set to "Yes"
              paymentValidation = _this7.validatePaymentFields();
              if (!paymentValidation.isValid) {
                validationErrors.push.apply(validationErrors, _toConsumableArray(paymentValidation.errors));
              }

              // Validate that all calculations are correct
              if (!_this7.validateCalculations()) {
                validationErrors.push({
                  type: "error",
                  title: _this7.$t("Calculation Error"),
                  message: _this7.$t("There was an error in the calculations. Please refresh the page and try again."),
                  field: "calculations"
                });
              }

              // If there are validation errors, show them all and return
              if (!(validationErrors.length > 0)) {
                _context6.next = 16;
                break;
              }
              _this7.showMultipleValidationErrors(validationErrors);
              return _context6.abrupt("return");
            case 16:
              _context6.next = 18;
              return _this7.form.post(window.location.origin + '/api/invoices').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this7.$t('Invoice created successfully')
                });
                _this7.$router.push({
                  name: 'invoices.index'
                });
              })["catch"](function (error) {
                console.error('Invoice creation error:', error);
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Please check your input and try again.')
                });
              });
            case 18:
              _context6.next = 24;
              break;
            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](1);
              console.error('Unexpected error:', _context6.t0);
              toast.fire({
                type: 'error',
                title: _this7.$t('Please check your input and try again.')
              });
            case 24:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 20]]);
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
    },
    // Auto-assign client chart of account
    autoAssignClientChartOfAccount: function autoAssignClientChartOfAccount() {
      var _this8 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee7() {
        var response, newAccountId, idx, errorMessage, _error$response$data;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this8.form.client) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              if (_this8.form.client.slug) {
                _context7.next = 5;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Client missing required information. Please refresh and try again.')
              });
              return _context7.abrupt("return");
            case 5:
              _this8.isAutoAssigningClient = true;
              _context7.prev = 6;
              _context7.next = 9;
              return axios_default().post(window.location.origin + '/api/clients/' + _this8.form.client.slug + '/auto-assign-chart-of-account');
            case 9:
              response = _context7.sent;
              if (response && response.data && response.data.success) {
                // Update the client data with new chart of account
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this8.form.client.chart_of_account_id = newAccountId;
                  // Also update the option in items list to keep state consistent when switching clients
                  idx = _this8.items.findIndex(function (i) {
                    return i.slug === _this8.form.client.slug;
                  });
                  if (idx !== -1) {
                    _this8.$set(_this8.items[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                toast.fire({
                  type: 'success',
                  title: _this8.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Failed to assign Chart of Account'),
                  text: response && response.data && response.data.message || _this8.$t('Please try again')
                });
              }
              _context7.next = 19;
              break;
            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](6);
              console.error('Error assigning client chart of account:', _context7.t0);
              errorMessage = _this8.$t('Failed to assign Chart of Account. Please try again.');
              if (_context7.t0 && _context7.t0.response) {
                errorMessage = ((_error$response$data = _context7.t0.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || _context7.t0.message || errorMessage;
              } else if (_context7.t0 && _context7.t0.message) {
                errorMessage = _context7.t0.message;
              }
              toast.fire({
                type: 'error',
                title: _this8.$t('Error'),
                text: errorMessage
              });
            case 19:
              _context7.prev = 19;
              _this8.isAutoAssigningClient = false;
              return _context7.finish(19);
            case 22:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[6, 13, 19, 22]]);
      }))();
    },
    // Auto-assign all products chart of account
    autoAssignAllProductsChartOfAccount: function autoAssignAllProductsChartOfAccount() {
      var _this9 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee8() {
        var productsWithoutSalesAccount, _iterator, _step, _loop2, errorMessage, _error$response$data2;
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!_this9.form.selectedProducts || _this9.form.selectedProducts.length === 0)) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              _this9.isAutoAssigningProduct = true;
              _context9.prev = 3;
              productsWithoutSalesAccount = _this9.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (!(productsWithoutSalesAccount.length === 0)) {
                _context9.next = 8;
                break;
              }
              toast.fire({
                type: 'info',
                title: _this9.$t('All products already have sales accounts assigned')
              });
              return _context9.abrupt("return");
            case 8:
              _iterator = _createForOfIteratorHelper(productsWithoutSalesAccount);
              _context9.prev = 9;
              _loop2 = /*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _loop2() {
                var product, response, productIndex;
                return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _loop2$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      product = _step.value;
                      if (product.slug) {
                        _context8.next = 4;
                        break;
                      }
                      console.warn('Product missing slug:', product);
                      return _context8.abrupt("return", 1);
                    case 4:
                      _context8.next = 6;
                      return axios_default().post(window.location.origin + '/api/products/' + product.slug + '/sales/auto-assign-chart-of-account');
                    case 6:
                      response = _context8.sent;
                      if (response.data && response.data.success) {
                        // Update the product data with new chart of account
                        product.sales_account_id = response.data.sales_account_id;

                        // Update the product in the products list
                        productIndex = _this9.products.findIndex(function (p) {
                          return p.id === product.id;
                        });
                        if (productIndex !== -1) {
                          _this9.$set(_this9.products[productIndex], 'sales_account_id', response.data.sales_account_id);
                        }
                      }
                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }, _loop2);
              });
              _iterator.s();
            case 12:
              if ((_step = _iterator.n()).done) {
                _context9.next = 18;
                break;
              }
              return _context9.delegateYield(_loop2(), "t0", 14);
            case 14:
              if (!_context9.t0) {
                _context9.next = 16;
                break;
              }
              return _context9.abrupt("continue", 16);
            case 16:
              _context9.next = 12;
              break;
            case 18:
              _context9.next = 23;
              break;
            case 20:
              _context9.prev = 20;
              _context9.t1 = _context9["catch"](9);
              _iterator.e(_context9.t1);
            case 23:
              _context9.prev = 23;
              _iterator.f();
              return _context9.finish(23);
            case 26:
              toast.fire({
                type: 'success',
                title: _this9.$t('Chart of Accounts assigned successfully')
              });
              _context9.next = 35;
              break;
            case 29:
              _context9.prev = 29;
              _context9.t2 = _context9["catch"](3);
              console.error('Error assigning product chart of accounts:', _context9.t2);
              errorMessage = _this9.$t('Failed to assign Chart of Accounts. Please try again.');
              if (_context9.t2 && _context9.t2.response) {
                errorMessage = ((_error$response$data2 = _context9.t2.response.data) === null || _error$response$data2 === void 0 ? void 0 : _error$response$data2.message) || _context9.t2.message || errorMessage;
              } else if (_context9.t2 && _context9.t2.message) {
                errorMessage = _context9.t2.message;
              }
              toast.fire({
                type: 'error',
                title: _this9.$t('Error'),
                text: errorMessage
              });
            case 35:
              _context9.prev = 35;
              _this9.isAutoAssigningProduct = false;
              return _context9.finish(35);
            case 38:
            case "end":
              return _context9.stop();
          }
        }, _callee8, null, [[3, 29, 35, 38], [9, 20, 23, 26]]);
      }))();
    },
    // Auto-assign bank account chart of account
    autoAssignBankAccountChartOfAccount: function autoAssignBankAccountChartOfAccount() {
      var _this0 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regeneratorRuntime().mark(function _callee9() {
        return invoicevue_type_script_lang_js_regeneratorRuntime().wrap(function _callee9$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              if (_this0.form.account) {
                _context0.next = 2;
                break;
              }
              return _context0.abrupt("return");
            case 2:
              // For now, show a message that this feature is not available
              toast.fire({
                type: 'info',
                title: _this0.$t('Feature Not Available'),
                text: _this0.$t('Auto-assign for bank accounts is not yet available. Please assign Chart of Account manually.')
              });
            case 3:
            case "end":
              return _context0.stop();
          }
        }, _callee9);
      }))();
    },
    // Edit product from table
    editProductFromTable: function editProductFromTable(item) {
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
      this.$refs.productEditModal.openModal(item);
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
        updatedProduct.unitPrice = updatedData.regularPrice || updatedProduct.unitPrice;
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

        // Recalculate totals for the updated product
        this.generateItemTotal(updatedProduct.unitPrice, 'price', productIndex, '');
        this.calculateSum();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
      }
    },
    // Open stock adjustment modal
    openStockAdjustmentModal: function openStockAdjustmentModal(product) {
      this.selectedProductForStockAdjustment = product;
      this.showStockAdjustmentModal = true;
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
        sweetalert2_all_default().fire({
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
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return;
      }
      if (item) {
        // Calculate discount amount based on type
        var discountAmount;
        if (item.discountType === "percentage") {
          discountAmount = this.roundToTwoDecimals(item.unitPrice * item.qty * item.discount / 100);
        } else {
          discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
        }

        // Update item properties
        item.discountAmount = discountAmount;
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - discountAmount);

        // Recalculate VAT on the discounted amount
        this.calculateProductVat(index);
      }
    },
    // Handle VAT rate change
    onVatRateChange: function onVatRateChange(index) {
      var item = this.form.selectedProducts[index];
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return;
      }
      if (item) {
        // Find the selected VAT rate object
        var selectedVatRate = this.taxes ? this.taxes.find(function (tax) {
          return tax.id === item.vat_rate_id;
        }) : null;
        if (selectedVatRate) {
          // Calculate VAT based on the total after discount
          var vatRate = selectedVatRate.rate || 0;
          item.productTax = this.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          // No VAT rate selected
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }

        // Update the item in the array
        this.$set(this.form.selectedProducts, index, item);
        this.calculateSum();
      }
    },
    // calculate product VAT (legacy method for backward compatibility)
    calculateProductVat: function calculateProductVat(index) {
      this.onVatRateChange(index);
    },
    // find matching VAT rate
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.rate === productTax.rate;
      }) || null;
    },
    // round to two decimals
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },
    // format to two decimals for display
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') return '0.00';
      var num = Number(value);
      if (isNaN(num)) return '0.00';
      return num.toFixed(2);
    },
    // Methods to get totals on-demand (forces reactivity)
    getTotalUnitPrice: function getTotalUnitPrice() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.subTotal);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getTotalAfterDiscount: function getTotalAfterDiscount() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalAfterDiscount);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getTotalDiscount: function getTotalDiscount() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalDiscount);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getProductTotalTax: function getProductTotalTax() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalTax);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      // Sum VAT column values (totalTax for Inclusive, productTax for Exclusive)
      var total = this.form.selectedProducts.reduce(function (total, item) {
        var vatValue = item.taxType === 'Inclusive' ? item.totalTax || 0 : item.productTax || 0;
        return total + vatValue;
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getSubTotal: function getSubTotal() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalAfterTax);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalPrice || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.form.netTotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }

      // For now, return a simple representation
      return "".concat(amount.toFixed(2), " SAR");
    },
    // Get discount information from quotation products
    getQuotationProductDiscounts: function getQuotationProductDiscounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.map(function (product, index) {
        return {
          productName: product.name,
          productCode: product.code,
          discountType: product.discountType || 'fixed',
          discountAmount: product.discountAmount || 0,
          discountPercentage: product.discountType === 'percentage' ? product.discount : 0,
          totalBeforeDiscount: product.totalBeforeDiscount || 0,
          totalAfterDiscount: product.totalAfterDiscount || 0,
          index: index
        };
      });
    },
    // Display discount summary
    getDiscountSummary: function getDiscountSummary() {
      var discounts = this.getQuotationProductDiscounts();
      var totalDiscount = discounts.reduce(function (sum, item) {
        return sum + item.discountAmount;
      }, 0);
      var fixedDiscounts = discounts.filter(function (item) {
        return item.discountType === 'fixed';
      });
      var percentageDiscounts = discounts.filter(function (item) {
        return item.discountType === 'percentage';
      });
      return {
        totalDiscount: totalDiscount,
        fixedDiscounts: fixedDiscounts,
        percentageDiscounts: percentageDiscounts,
        totalItems: discounts.length,
        itemsWithDiscount: discounts.filter(function (item) {
          return item.discountAmount > 0;
        }).length
      };
    },
    // Get VAT information from quotation products
    getQuotationProductVatRates: function getQuotationProductVatRates() {
      var _this1 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.map(function (product, index) {
        var vatRate = _this1.taxes ? _this1.taxes.find(function (tax) {
          return tax.id === product.vat_rate_id;
        }) : null;
        return {
          productName: product.name,
          productCode: product.code,
          vatRateId: product.vat_rate_id || null,
          vatRateCode: vatRate ? vatRate.code : 'Not Set',
          vatRatePercentage: vatRate ? vatRate.rate : 0,
          productTax: product.productTax || 0,
          totalTax: product.totalTax || 0,
          totalAfterDiscount: product.totalAfterDiscount || 0,
          totalPrice: product.totalPrice || 0,
          index: index
        };
      });
    },
    // Display VAT summary
    getVatSummary: function getVatSummary() {
      var vatRates = this.getQuotationProductVatRates();
      var totalVat = vatRates.reduce(function (sum, item) {
        return sum + item.totalTax;
      }, 0);
      var itemsWithVat = vatRates.filter(function (item) {
        return item.vatRateId && item.totalTax > 0;
      });
      var itemsWithoutVat = vatRates.filter(function (item) {
        return !item.vatRateId || item.totalTax === 0;
      });

      // Group by VAT rate
      var vatRateGroups = {};
      vatRates.forEach(function (item) {
        var key = item.vatRateId || 'no-vat';
        if (!vatRateGroups[key]) {
          vatRateGroups[key] = {
            vatRateId: item.vatRateId,
            vatRateCode: item.vatRateCode,
            vatRatePercentage: item.vatRatePercentage,
            count: 0,
            totalTax: 0
          };
        }
        vatRateGroups[key].count++;
        vatRateGroups[key].totalTax += item.totalTax;
      });
      return {
        totalVat: totalVat,
        itemsWithVat: itemsWithVat.length,
        itemsWithoutVat: itemsWithoutVat.length,
        totalItems: vatRates.length,
        vatRateGroups: Object.values(vatRateGroups)
      };
    },
    // Recalculate VAT for all products to ensure consistency
    recalculateAllProductsVat: function recalculateAllProductsVat() {
      var _this10 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return;
      }
      this.form.selectedProducts.forEach(function (item, index) {
        // Skip recalculation if product is from quotation
        if (item.isFromQuotation) {
          return;
        }

        // Recalculate totalBeforeDiscount and totalAfterDiscount
        item.totalBeforeDiscount = _this10.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = _this10.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0));

        // Find the VAT rate object based on vat_rate_id
        var selectedVatRate = _this10.taxes ? _this10.taxes.find(function (tax) {
          return tax.id === item.vat_rate_id;
        }) : null;

        // Recalculate VAT if VAT rate is selected
        if (selectedVatRate && selectedVatRate.rate) {
          var vatRate = selectedVatRate.rate;
          item.productTax = _this10.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = _this10.roundToTwoDecimals(item.productTax);
          item.totalPrice = _this10.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }

        // Update the item in the array
        _this10.$set(_this10.form.selectedProducts, index, item);
      });

      // Recalculate totals
      this.calculateSum();
    },
    // Calculate VAT type percentage: vat / Total After Discount
    calculateVatTypePercentage: function calculateVatTypePercentage(item) {
      if (!item || !item.totalAfterDiscount || item.totalAfterDiscount <= 0) {
        return 0;
      }
      var vatAmount = item.totalTax || item.productTax || 0;
      var percentage = this.roundToTwoDecimals(vatAmount / item.totalAfterDiscount * 100);
      return percentage;
    },
    // Get VAT type information for debug display
    getVatTypeInfo: function getVatTypeInfo(item) {
      var percentage = this.calculateVatTypePercentage(item);
      var vatAmount = item.totalTax || item.productTax || 0;
      var totalAfterDiscount = item.totalAfterDiscount || 0;
      return {
        percentage: percentage,
        vatAmount: vatAmount,
        totalAfterDiscount: totalAfterDiscount,
        formula: "".concat(vatAmount, " / ").concat(totalAfterDiscount, " = ").concat(percentage, "%")
      };
    },
    // Get detailed calculation breakdown for debug display
    getCalculationBreakdown: function getCalculationBreakdown() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return {
          subtotalFormula: 'No products',
          discountFormula: 'No products',
          afterDiscountFormula: 'No products',
          taxFormula: 'No products',
          afterTaxFormula: 'No products',
          netTotalFormula: 'No products'
        };
      }

      // Build subtotal formula
      var subtotalParts = this.form.selectedProducts.map(function (item) {
        return "".concat(item.unitPrice || 0, " \xD7 ").concat(item.qty || 0);
      });
      var subtotalFormula = subtotalParts.join(' + ') + " = ".concat(this.getTotalUnitPrice());

      // Build discount formula
      var discountParts = this.form.selectedProducts.filter(function (item) {
        return item.discountAmount && item.discountAmount > 0;
      }).map(function (item) {
        return "".concat(item.discountAmount || 0);
      });
      var discountFormula = discountParts.length > 0 ? discountParts.join(' + ') + " = ".concat(this.getTotalDiscount()) : "0 (no discounts) = ".concat(this.getTotalDiscount());

      // Build after discount formula
      var afterDiscountFormula = "".concat(this.getTotalUnitPrice(), " - ").concat(this.getTotalDiscount(), " = ").concat(this.getTotalAfterDiscount());

      // Build tax formula
      var taxParts = this.form.selectedProducts.filter(function (item) {
        var vatValue = item.taxType === 'Inclusive' ? item.totalTax || 0 : item.productTax || 0;
        return vatValue > 0;
      }).map(function (item) {
        var vatValue = item.taxType === 'Inclusive' ? item.totalTax || 0 : item.productTax || 0;
        return "".concat(vatValue);
      });
      var taxFormula = taxParts.length > 0 ? taxParts.join(' + ') + " = ".concat(this.getProductTotalTax()) : "0 (no tax) = ".concat(this.getProductTotalTax());

      // Build after tax formula
      var afterTaxFormula = "".concat(this.getTotalAfterDiscount(), " + ").concat(this.getProductTotalTax(), " = ").concat(this.getSubTotal());

      // Build net total formula
      var transportCost = Number(this.form.transportCost || 0);
      var globalDiscount = this.form.discountType == 1 ? this.getTotalAfterDiscount() * Number(this.form.discount || 0) / 100 : Number(this.form.discount || 0);
      var netTotalFormula = "".concat(this.getSubTotal(), " + ").concat(transportCost, " - ").concat(globalDiscount, " = ").concat(this.form.netTotal);
      return {
        subtotalFormula: subtotalFormula,
        discountFormula: discountFormula,
        afterDiscountFormula: afterDiscountFormula,
        taxFormula: taxFormula,
        afterTaxFormula: afterTaxFormula,
        netTotalFormula: netTotalFormula
      };
    },
    // Force update VAT rate selection for all products
    forceUpdateVatRateSelection: function forceUpdateVatRateSelection() {
      var _this11 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0 || !this.taxes) {
        return;
      }
      this.form.selectedProducts.forEach(function (item, index) {
        // Skip recalculation if product is from quotation
        if (item.isFromQuotation) {
          // Only update selectedVatRate object if vat_rate_id exists, but don't recalculate values
          if (item.vat_rate_id) {
            var matchingVatRate = _this11.taxes.find(function (tax) {
              return tax.id === item.vat_rate_id;
            });
            if (matchingVatRate) {
              _this11.$set(_this11.form.selectedProducts[index], 'selectedVatRate', matchingVatRate);
            }
          }
          return;
        }
        if (item.vat_rate_id) {
          // Find the matching VAT rate
          var _matchingVatRate = _this11.taxes.find(function (tax) {
            return tax.id === item.vat_rate_id;
          });
          if (_matchingVatRate) {
            // Update the selectedVatRate object
            _this11.$set(_this11.form.selectedProducts[index], 'selectedVatRate', _matchingVatRate);

            // Recalculate VAT with the correct rate
            var vatRate = _matchingVatRate.rate;
            item.productTax = _this11.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
            item.totalTax = _this11.roundToTwoDecimals(item.productTax);
            item.totalPrice = _this11.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

            // Update the item
            _this11.$set(_this11.form.selectedProducts, index, item);
          }
        }
      });

      // Recalculate totals
      this.calculateSum();
    }
  }
});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_invoicevue_type_script_lang_js = (invoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=b832e68a&prod&lang=scss&scoped=true
var invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true = __webpack_require__(37545);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=b832e68a&prod&lang=scss&scoped=true

            

var invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true_options = {};

invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true_options.insert = "head";
invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true_options.singleton = false;

var invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true/* default */.A, invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true_options);



/* harmony default export */ const quotations_invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true = (invoicevue_type_style_index_0_id_b832e68a_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=b832e68a&prod&lang=scss&scoped=true

;// ./resources/js/pages/sales/quotations/invoice.vue



;


/* normalize component */

var invoice_component = (0,componentNormalizer/* default */.A)(
  quotations_invoicevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b832e68a",
  null
  
)

/* harmony default export */ const invoice = (invoice_component.exports);

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