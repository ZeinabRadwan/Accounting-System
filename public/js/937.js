"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[937],{

/***/ 80937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/inventory/adjustments/create.vue?vue&type=template&id=52bd5f97
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
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Create adjustment")) + "\n          ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-dark float-right",
    attrs: {
      "to": {
        name: 'adjustments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n          ")])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveAdjustment.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentReason"
    }
  }, [_vm._v(_vm._s(_vm.$t("Adjustment Reason")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.adjustmentReason,
      expression: "form.adjustmentReason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('adjustmentReason')
    },
    attrs: {
      "id": "adjustmentReason",
      "type": "text",
      "name": "adjustmentReason",
      "placeholder": _vm.$t('Enter a reason')
    },
    domProps: {
      "value": _vm.form.adjustmentReason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "adjustmentReason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "adjustmentReason"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-2"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto table-sm"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Stock")))]), _vm._v(" "), _c('th', {
    staticClass: "w-200px"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Adjustment Type")) + "\n                      ")]), _vm._v(" "), _c('th', {
    staticClass: "w-250px"
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.form.selectedProducts, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(item.itemCode, _vm.prefix)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "btn btn-warning btn-sm"
    }, [_vm._v(_vm._s(item.stockQty))])]), _vm._v(" "), _c('td', [_c('select', {
      staticClass: "form-control",
      attrs: {
        "id": "adjustType-".concat(i),
        "required": ""
      },
      on: {
        "change": function change($event) {
          return _vm.updateProduct($event.target.value, 'adjustType', i - 1);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": "Increment"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Increment")) + "\n                          ")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "Decrement"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Decrement")) + "\n                          ")])])]), _vm._v(" "), _c('td', [_c('div', {
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
          _vm.updateProduct(item.adjustQty > 1 ? parseFloat(item.adjustQty) - 1 : 1, 'quantity', i - 1);
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "placeholder": _vm.$t('Quantity'),
        "min": "1",
        "max": item.maxQty,
        "required": ""
      },
      domProps: {
        "value": item.adjustQty
      },
      on: {
        "change": function change($event) {
          return _vm.updateProduct($event.target.value, 'quantity', i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.updateProduct($event.target.value, 'quantity', i - 1);
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
          _vm.updateProduct(parseFloat(item.adjustQty) + 1, 'quantity', i - 1);
        }
      }
    })])]), _vm._v(" "), _c('td', {
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
  }), 0)])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Adjustment Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.adjustmentDate,
      expression: "form.adjustmentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('adjustmentDate')
    },
    attrs: {
      "id": "adjustmentDate",
      "type": "date",
      "name": "adjustmentDate"
    },
    domProps: {
      "value": _vm.form.adjustmentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "adjustmentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "adjustmentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n            ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/inventory/adjustments/create.vue?vue&type=script&lang=js
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



/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Adjustment")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Create Adjustment",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Adjustments",
        url: "adjustments.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        selectedProducts: [],
        adjustmentReason: "",
        adjustmentDate: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1
      }),
      products: "",
      prefix: ""
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  created: function created() {
    this.getProducts();
    this.prefix = this.appInfo.productPrefix;
  },
  methods: {
    // get products
    getProducts: function getProducts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.products = data.data;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var quantity = 1;
      if (index === -1) {
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          itemCode: product.code,
          purchasePrice: product.avgPurchasePrice,
          stockQty: product.inventoryCount,
          adjustType: "Increment",
          adjustQty: quantity,
          maxQty: 9999
        });
      } else {
        // update qty
        if (this.form.selectedProducts[index]) {
          quantity = this.form.selectedProducts[index].adjustQty ? this.form.selectedProducts[index].adjustQty + 1 : 1;
          this.form.selectedProducts[index].adjustQty = quantity;
        }
      }
      return;
    },
    // update array
    updateProduct: function updateProduct(value, type, index) {
      var selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct) {
        if (type == "quantity" && selectedProduct.adjustQty >= 1) {
          selectedProduct.adjustQty = value;
        } else if (type == "adjustType") {
          selectedProduct.adjustType = value;
          if (selectedProduct.adjustType == "Decrement") {
            selectedProduct.maxQty = selectedProduct.stockQty;
          } else {
            selectedProduct.maxQty = 9999;
          }
        } else {
          selectedProduct.purchasePrice = value;
          selectedProduct.adjustQty = 1;
        }
      }
      this.form.selectedProducts[index] = selectedProduct;
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      return;
    },
    // save adjustment
    saveAdjustment: function saveAdjustment() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.form.post(window.location.origin + "/api/inventory-adjustments").then(function () {
                toast.fire({
                  type: "success",
                  title: _this2.$t("Adjustment added successfully")
                });
                _this2.$router.push({
                  name: "adjustments.index"
                });
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this2.$t("Opps...something went wrong")
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
;// ./resources/js/pages/inventory/adjustments/create.vue?vue&type=script&lang=js
 /* harmony default export */ const adjustments_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/inventory/adjustments/create.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  adjustments_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ })

}]);