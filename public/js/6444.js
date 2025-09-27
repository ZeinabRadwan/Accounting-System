"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6444],{

/***/ 63112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-44dab5b9]{gap:10px}.header-buttons[data-v-44dab5b9]{margin-bottom:15px}.footer-buttons[data-v-44dab5b9]{display:flex;gap:10px}.footer-buttons .btn[data-v-44dab5b9]{margin-right:10px}.footer-buttons .btn[data-v-44dab5b9]:last-child{margin-right:0}.card[data-v-44dab5b9]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-44dab5b9]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-44dab5b9]{background:#fff!important}.btn-primary[data-v-44dab5b9]{background:#2ab930!important}.btn-primary[data-v-44dab5b9],.btn-secondary[data-v-44dab5b9]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-44dab5b9]{background:#33a0d9!important}.btn-secondary[data-v-44dab5b9]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.btn-outline-custom[data-v-44dab5b9]{border-color:#1b3c71;border-radius:10px;color:#1b3c71;font-weight:500;padding:8px 16px;transition:background-color .3s,color .3s,border-color .3s}.btn-custom-active[data-v-44dab5b9],.btn-outline-custom[data-v-44dab5b9]:hover{background-color:#1b3c71;border-color:#1b3c71;color:#fff}h1[data-v-44dab5b9],h2[data-v-44dab5b9]{font-weight:400}ul[data-v-44dab5b9]{list-style-type:none;padding:0}li[data-v-44dab5b9]{display:inline-block;margin:0 10px}a[data-v-44dab5b9]{color:#42b983}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/edit.vue?vue&type=template&id=44dab5b9&scoped=true
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
        name: 'products.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'productEditForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "productEditForm",
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
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12 col-xl-12"
  }, [_c('div', {
    staticClass: "btn-group btn-group-toggle w-25",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-outline-custom",
    "class": {
      'btn-custom-active': _vm.form.itemType === 'product'
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
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Product')) + "\n                  ")]), _vm._v(" "), _c('label', {
    staticClass: "btn btn-outline-custom",
    "class": {
      'btn-custom-active': _vm.form.itemType === 'service'
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
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Service')) + "\n                  ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-xl-6"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item Name')) + "\n                  "), _c('span', {
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
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item Model')))]), _vm._v(" "), _c('input', {
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
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    staticClass: "col-md-12",
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t('Item code')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group-prepend"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon1"
    }
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e()]), _vm._v(" "), _c('input', {
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
      "readonly": "",
      "type": "text",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code'),
      "aria-label": "itemCode",
      "aria-describedby": "basic-addon1"
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
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1)]), _vm._v(" "), _vm.items ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-4"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t('Sub Category')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.units ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-4"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t('Unit')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-4"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Product Tax')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
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
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-xl-4"
  }, [_c('label', {
    attrs: {
      "for": "barcodeSymbology"
    }
  }, [_vm._v(_vm._s(_vm.$t('Barcode Symbology')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.barcodeSymbology,
      expression: "form.barcodeSymbology"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('barcodeSymbology')
    },
    attrs: {
      "id": "barcodeSymbology"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "barcodeSymbology", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "CODE128"
    }
  }, [_vm._v("CODE128")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CODE39"
    }
  }, [_vm._v("CODE39")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EAN8"
    }
  }, [_vm._v("EAN8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EAN13"
    }
  }, [_vm._v("EAN13")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPC"
    }
  }, [_vm._v("UPC")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "barcodeSymbology"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6",
    "class": _vm.form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Regular Price')) + "\n                  "), _c('span', {
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
      "placeholder": _vm.$t('Enter regular price')
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
    staticClass: "form-group col-md-6",
    "class": _vm.form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    staticClass: "col-md-12",
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter discount'),
      "aria-label": "discount",
      "aria-describedby": "basic-addon1"
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
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6",
    "class": _vm.form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Selling Price')))]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter sale price')
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
  })], 1), _vm._v(" "), _vm.form.itemType == 'service' ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-3"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Service Cost')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicePurchasePrice,
      expression: "form.servicePurchasePrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('servicePurchasePrice')
    },
    attrs: {
      "id": "servicePurchasePrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "servicePurchasePrice",
      "placeholder": _vm.$t('Enter Service Cost')
    },
    domProps: {
      "value": _vm.form.servicePurchasePrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "servicePurchasePrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "servicePurchasePrice"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.form.itemType == 'product' ? _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.isOpeningStock,
      expression: "form.isOpeningStock"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "isOpeningStock"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.isOpeningStock) ? _vm._i(_vm.form.isOpeningStock, null) > -1 : _vm.form.isOpeningStock
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.form.isOpeningStock,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "isOpeningStock", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "isOpeningStock", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "isOpeningStock", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "isOpeningStock"
    }
  }, [_vm._v(_vm._s(_vm.$t('Add Opening Stock?')))])])]) : _vm._e(), _vm._v(" "), _vm.form.isOpeningStock ? _c('div', {
    staticClass: "row col-md-12"
  }, [_c('div', {
    staticClass: "form-group col-md-6 col-xl-6"
  }, [_c('label', {
    attrs: {
      "for": "openingStockCount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Opening Stock Quantity')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter opening stock quantity')
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-xl-6"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Opening Stock Unit Price')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter opening stock unit price')
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
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.itemType == 'product' ? _c('div', {
    staticClass: "form-group col-md-6 col-xl-4"
  }, [_c('label', {
    attrs: {
      "for": "alertQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t('Alert Quantity')))]), _vm._v(" "), _c('input', {
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
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Sales Account')) + "\n                  "), _c('span', {
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
      "placeholder": _vm.$t('Select a sales account'),
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
    }], null, false, 4078058058),
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Select a sales account for this item. This account will be used for sales transactions.')) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Sales Account')))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t('Automatically assigned from account routing settings')) + "\n                  "), _c('br'), _vm._v(" "), _vm.accountRoutingSettings.sales && _vm.accountRoutingSettings.sales.parent_account_id ? _c('small', [_vm._v("\n                    " + _vm._s(_vm.$t('Account ID')) + ": " + _vm._s(_vm.accountRoutingSettings.sales.parent_account_id) + "\n                  ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), !_vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Purchase Account')) + "\n                  "), _c('span', {
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
      "placeholder": _vm.$t('Select a purchase account'),
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
    }], null, false, 4078058058),
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Select a purchase account for this item. This account will be used for purchase transactions.')) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Purchase Account')))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t('Automatically assigned from account routing settings')) + "\n                  "), _c('br'), _vm._v(" "), _vm.accountRoutingSettings.purchase && _vm.accountRoutingSettings.purchase.parent_account_id ? _c('small', [_vm._v("\n                    " + _vm._s(_vm.$t('Account ID')) + ": " + _vm._s(_vm.accountRoutingSettings.purchase.parent_account_id) + "\n                  ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Active')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Inactive')) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Image')))]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.url ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Attached Image')
    }
  }) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
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
      "type": "text",
      "name": "companyName",
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "input-group-prepend"
  }, [_c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon1"
    }
  }, [_vm._v("%")])]);
}];

;// ./resources/js/pages/products/edit.vue?vue&type=template&id=44dab5b9&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/edit.vue?vue&type=script&lang=js
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
      title: this.$t('Edit Item')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Item',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Items',
        url: 'products.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      url: null,
      urls: [],
      form: new vform_es/* default */.Ay({
        itemType: 'product',
        itemName: '',
        itemCode: '',
        itemModel: '',
        barcodeSymbology: 'CODE128',
        subCategory: '',
        brand: '',
        itemUnit: '',
        productTax: '',
        taxType: 'Exclusive',
        regularPrice: '',
        servicePurchasePrice: '',
        discount: '',
        sellingPrice: '',
        openingStockCount: '',
        openingStockUnitPrice: '',
        isOpeningStock: false,
        note: '',
        alertQuantity: 1,
        status: 1,
        image: '',
        salesAccountId: '',
        purchaseAccountId: ''
      }),
      options: [],
      prefix: '',
      units: [],
      brands: [],
      taxes: [],
      chartOfAccounts: [],
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])),
  created: function created() {
    this.getSubCategories();
    this.getUnits();
    this.getProduct();
    // this.getBrands() // Temporarily commented out
    this.getTaxes();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
    this.prefix = this.appInfo.productPrefix;
  },
  mounted: function mounted() {
    var _this = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  methods: {
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-product-sub-categories'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/all-brands');
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.brands = data.data;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/all-units');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this4.units = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this5.taxes = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return _this6.$axios.get('/api/products/chart-of-accounts');
            case 1:
              response = _context5.v;
              _this6.chartOfAccounts = response.data || [];
              // No longer needed with v-select
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t = _context5.v;
              console.error('Error loading chart of accounts:', _t);
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, _t2;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return _this7.$axios.get('/api/account-routing-settings/product-account-routing');
            case 1:
              response = _context6.v;
              _this7.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this7.isSalesAccountAutomatic = _this7.accountRoutingSettings.sales && _this7.accountRoutingSettings.sales.routing_type === 'automatic';
              _this7.isPurchaseAccountAutomatic = _this7.accountRoutingSettings.purchase && _this7.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this7.isSalesAccountAutomatic && _this7.accountRoutingSettings.sales.parent_account_id) {
                _this7.form.salesAccountId = _this7.accountRoutingSettings.sales.parent_account_id;
              }
              if (_this7.isPurchaseAccountAutomatic && _this7.accountRoutingSettings.purchase.parent_account_id) {
                _this7.form.purchaseAccountId = _this7.accountRoutingSettings.purchase.parent_account_id;
              }
              console.log('Account routing settings loaded:', _this7.accountRoutingSettings);
              console.log('Sales automatic:', _this7.isSalesAccountAutomatic);
              console.log('Purchase automatic:', _this7.isPurchaseAccountAutomatic);
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t2 = _context6.v;
              console.error('Error loading account routing settings:', _t2);
              // Set defaults if API fails
              _this7.isSalesAccountAutomatic = false;
              _this7.isPurchaseAccountAutomatic = false;
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // get product
    getProduct: function getProduct() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get4, data;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + '/api/products/' + _this8.$route.params.slug);
            case 1:
              _yield$axios$get4 = _context7.v;
              data = _yield$axios$get4.data;
              _this8.form.itemType = data.data.itemType;
              _this8.form.itemName = data.data.name;
              _this8.form.itemCode = data.data.code;
              _this8.form.itemModel = data.data.itemModel;
              _this8.form.barcodeSymbology = data.data.symbology;
              _this8.form.brand = data.data.itemBrand;
              _this8.form.productTax = data.data.itemTax;
              _this8.form.taxType = data.data.taxType;
              _this8.form.subCategory = data.data.subCategory;
              _this8.form.itemUnit = data.data.itemUnit;
              _this8.form.regularPrice = data.data.regularPrice;
              _this8.form.servicePurchasePrice = data.data.servicePurchasePrice;
              _this8.form.sellingPrice = data.data.sellingPrice;
              _this8.form.isOpeningStock = data.data.openingStockCount ? true : false, _this8.form.openingStockCount = data.data.openingStockCount;
              _this8.form.openingStockUnitPrice = data.data.openingStockUnitPrice;
              _this8.form.discount = data.data.discount;
              _this8.form.note = data.data.note;
              _this8.form.status = data.data.status;
              _this8.form.alertQuantity = data.data.alertQty;
              _this8.form.salesAccountId = data.data.salesAccount ? data.data.salesAccount.id : '';
              _this8.form.purchaseAccountId = data.data.purchaseAccount ? data.data.purchaseAccount.id : '';
              _this8.url = data.data.image;

              // No longer needed with v-select
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      var _this9 = this;
      if (this.form.sellingPrice && this.form.productTax && this.form.taxType) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;

        // Find the selected tax object to get the rate
        var selectedTax = this.taxes.find(function (tax) {
          return tax.id === _this9.form.productTax;
        });
        if (selectedTax && selectedTax.rate > 0) {
          taxAmount = selectedTax.rate / 100;
        }
        if (this.form.taxType == 'Exclusive') {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == 'Exclusive') {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      return this.form.sellingPrice = this.form.regularPrice;
    },
    // vue file upload
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
        Swal.fire('error!', 'Please select a valid thumbnail with size less than 2 MB', 'error');
      }
    },
    // update product
    updateProduct: function updateProduct() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(!_this1.isSalesAccountAutomatic && !_this1.form.salesAccountId)) {
                _context8.n = 1;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this1.$t('Sales Account is required')
              });
              return _context8.a(2);
            case 1:
              if (!(!_this1.isPurchaseAccountAutomatic && !_this1.form.purchaseAccountId)) {
                _context8.n = 2;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this1.$t('Purchase Account is required')
              });
              return _context8.a(2);
            case 2:
              _context8.n = 3;
              return _this1.form.patch(window.location.origin + '/api/products/' + _this1.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this1.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: 'Product updated successfully 👍'
                });
                _this1.$router.push({
                  name: 'products.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: 'Opps...something is wrong 😔'
                });
              });
            case 3:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        itemType: this.form.itemType,
        itemName: this.form.itemName,
        itemModel: this.form.itemModel,
        itemCode: this.form.itemCode,
        category: this.form.category,
        subCategory: this.form.subCategory,
        brand: this.form.brand,
        unit: this.form.unit,
        barcodeSymbology: this.form.barcodeSymbology,
        itemTax: this.form.itemTax,
        taxType: this.form.taxType,
        regularPrice: this.form.regularPrice,
        discountType: this.form.discountType,
        discountValue: this.form.discountValue,
        discountPrice: this.form.discountPrice,
        wholesalePrice: this.form.wholesalePrice,
        wholesaleQuantity: this.form.wholesaleQuantity,
        purchasePrice: this.form.purchasePrice,
        servicePurchasePrice: this.form.servicePurchasePrice,
        openingStock: this.form.openingStock,
        openingStockValue: this.form.openingStockValue,
        reorderPoint: this.form.reorderPoint,
        salesAccountId: this.form.salesAccountId,
        purchaseAccountId: this.form.purchaseAccountId,
        isSalesAccountAutomatic: this.isSalesAccountAutomatic,
        isPurchaseAccountAutomatic: this.isPurchaseAccountAutomatic,
        status: this.form.status,
        note: this.form.note,
        image: this.form.image ? this.form.image.name : null,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('productEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('productEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.itemType = data.itemType || this.form.itemType;
          this.form.itemName = data.itemName || this.form.itemName;
          this.form.itemModel = data.itemModel || this.form.itemModel;
          this.form.itemCode = data.itemCode || this.form.itemCode;
          this.form.category = data.category || this.form.category;
          this.form.subCategory = data.subCategory || this.form.subCategory;
          this.form.brand = data.brand || this.form.brand;
          this.form.unit = data.unit || this.form.unit;
          this.form.barcodeSymbology = data.barcodeSymbology || this.form.barcodeSymbology;
          this.form.itemTax = data.itemTax || this.form.itemTax;
          this.form.taxType = data.taxType || this.form.taxType;
          this.form.regularPrice = data.regularPrice || this.form.regularPrice;
          this.form.discountType = data.discountType || this.form.discountType;
          this.form.discountValue = data.discountValue || this.form.discountValue;
          this.form.discountPrice = data.discountPrice || this.form.discountPrice;
          this.form.wholesalePrice = data.wholesalePrice || this.form.wholesalePrice;
          this.form.wholesaleQuantity = data.wholesaleQuantity || this.form.wholesaleQuantity;
          this.form.purchasePrice = data.purchasePrice || this.form.purchasePrice;
          this.form.servicePurchasePrice = data.servicePurchasePrice || this.form.servicePurchasePrice;
          this.form.openingStock = data.openingStock || this.form.openingStock;
          this.form.openingStockValue = data.openingStockValue || this.form.openingStockValue;
          this.form.reorderPoint = data.reorderPoint || this.form.reorderPoint;
          this.form.salesAccountId = data.salesAccountId || this.form.salesAccountId;
          this.form.purchaseAccountId = data.purchaseAccountId || this.form.purchaseAccountId;
          this.isSalesAccountAutomatic = data.isSalesAccountAutomatic !== undefined ? data.isSalesAccountAutomatic : this.isSalesAccountAutomatic;
          this.isPurchaseAccountAutomatic = data.isPurchaseAccountAutomatic !== undefined ? data.isPurchaseAccountAutomatic : this.isPurchaseAccountAutomatic;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.note = data.note || this.form.note;
          // Note: Image file cannot be restored from localStorage
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('productEditTempData');
    }
  }
});
;// ./resources/js/pages/products/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const products_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/edit.vue?vue&type=style&index=0&id=44dab5b9&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_44dab5b9_prod_scoped_true_lang_css = __webpack_require__(63112);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/edit.vue?vue&type=style&index=0&id=44dab5b9&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_44dab5b9_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const products_editvue_type_style_index_0_id_44dab5b9_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_44dab5b9_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/products/edit.vue?vue&type=style&index=0&id=44dab5b9&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/products/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  products_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "44dab5b9",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);