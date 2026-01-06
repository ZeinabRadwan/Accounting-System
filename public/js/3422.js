"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3422],{

/***/ 17646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductForm)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductForm.vue?vue&type=template&id=60faa763&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-form-container"
  }, [_vm.mode === 'page' ? _c('div', {
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
  }, [_vm.isRTL ? [_vm._v("\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n                ")]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "disabled": _vm.form.busy,
      "title": "Save"
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('product-form-template', {
    attrs: {
      "form": _vm.form,
      "form-id": _vm.formId,
      "product": _vm.product,
      "categories": _vm.categories,
      "units": _vm.units,
      "taxes": _vm.taxes,
      "chart-of-accounts": _vm.chartOfAccounts,
      "prefix": _vm.prefix,
      "url": _vm.url,
      "is-sales-account-automatic": _vm.isSalesAccountAutomatic,
      "is-purchase-account-automatic": _vm.isPurchaseAccountAutomatic,
      "is-edit-mode": _vm.isEditMode
    },
    on: {
      "calculate-price": _vm.calculatePrice,
      "on-file-change": _vm.onFileChange,
      "on-override-sales-account-change": _vm.onOverrideSalesAccountChange,
      "on-override-purchase-account-change": _vm.onOverridePurchaseAccountChange,
      "submit-form": _vm.submitForm,
      "save-temporary": _vm.saveTemporary,
      "reset-form": _vm.resetForm
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer",
    staticStyle: {
      "display": "none"
    }
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('VButton', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success",
      "native-type": "button"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n              ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n              ")])], 1)])])])])]) : _c('div', [_c('VModal', {
    attrs: {
      "size": "lg"
    },
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.modalTitle))];
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
    staticClass: "w-100"
  }, [_c('product-form-template', {
    attrs: {
      "form": _vm.form,
      "form-id": _vm.formId,
      "product": _vm.product,
      "categories": _vm.categories,
      "units": _vm.units,
      "taxes": _vm.taxes,
      "chart-of-accounts": _vm.chartOfAccounts,
      "prefix": _vm.prefix,
      "url": _vm.url,
      "is-sales-account-automatic": _vm.isSalesAccountAutomatic,
      "is-purchase-account-automatic": _vm.isPurchaseAccountAutomatic,
      "is-edit-mode": _vm.isEditMode
    },
    on: {
      "calculate-price": _vm.calculatePrice,
      "on-file-change": _vm.onFileChange,
      "on-override-sales-account-change": _vm.onOverrideSalesAccountChange,
      "on-override-purchase-account-change": _vm.onOverridePurchaseAccountChange,
      "submit-form": _vm.submitForm,
      "save-temporary": _vm.saveTemporary,
      "reset-form": _vm.resetForm
    }
  })], 1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel")) + "\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.form.busy
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n          " + _vm._s(_vm.submitButtonText) + "\n        ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.openModal
    }
  }, [_vm._t("default")], 2)], 1)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductForm.vue?vue&type=script&lang=js
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
/* harmony default export */ const ProductFormvue_type_script_lang_js = ({
  name: "ProductForm",
  components: {
    VModal: function VModal() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63764));
    },
    VButton: function VButton() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63377));
    },
    Breadcrumbs: function Breadcrumbs() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 62171));
    },
    ProductFormTemplate: function ProductFormTemplate() {
      return __webpack_require__.e(/* import() */ 4470).then(__webpack_require__.bind(__webpack_require__, 44470));
    }
  },
  props: {
    mode: {
      type: String,
      "default": 'page',
      // 'page' or 'modal'
      validator: function validator(value) {
        return ['page', 'modal'].includes(value);
      }
    },
    product: {
      type: Object,
      "default": null
    },
    formId: {
      type: String,
      "default": 'productForm'
    }
  },
  data: function data() {
    return {
      showModal: false,
      url: null,
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
        purchaseAccountId: "",
        overrideSalesAccount: false,
        overridePurchaseAccount: false
      }),
      categories: [],
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false,
      breadcrumbsCurrent: '',
      breadcrumbs: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    modalTitle: function modalTitle() {
      return this.product ? this.$t("Edit Product") : this.$t("Create Product");
    },
    submitButtonText: function submitButtonText() {
      return this.product ? this.$t("Update") : this.$t("Save");
    },
    isEditMode: function isEditMode() {
      return !!this.product;
    },
    isRTL: function isRTL() {
      if (this.$i18n.locale === 'ar') {
        return true;
      }
      if (typeof document !== 'undefined' && document.documentElement) {
        return document.documentElement.getAttribute('dir') === 'rtl';
      }
      return false;
    }
  }),
  created: function created() {
    console.log('ProductForm: Component created', {
      form: this.form,
      formBusy: this.form.busy,
      formErrors: this.form.errors.any(),
      formMethods: Object.getOwnPropertyNames(Object.getPrototypeOf(this.form)),
      formHasPost: typeof this.form.post === 'function',
      formHasData: typeof this.form.data === 'function'
    });
    this.initializeForm();
    this.loadData();
  },
  methods: {
    initializeForm: function initializeForm() {
      if (this.mode === 'page') {
        this.breadcrumbsCurrent = this.product ? this.$t('Edit Item') : this.$t('Create Item');
        this.breadcrumbs = [{
          name: this.$t('Dashboard'),
          url: 'home'
        }, {
          name: this.$t('Items'),
          url: 'products.index'
        }, {
          name: this.product ? this.$t('Edit') : this.$t('Create'),
          url: ''
        }];
      }
    },
    loadData: function loadData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this.getSubCategories(), _this.getUnits(), _this.getTaxes(), _this.loadChartOfAccounts(), _this.loadAccountRoutingSettings()]);
            case 2:
              if (!_this.product) {
                _this.getItemCode();
              } else {
                // Wait a bit to ensure chartOfAccounts is loaded before loading product data
                _this.$nextTick(function () {
                  _this.loadProductData(_this.product);
                });
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    openModal: function openModal() {
      this.showModal = true;
      if (this.showModal) {
        this.loadAccountRoutingSettings();
      }
    },
    closeModal: function closeModal() {
      this.showModal = false;
      this.form.reset();
      this.url = null;
    },
    submitForm: function submitForm() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log('ProductForm: submitForm called - EVENT RECEIVED!', {
                isEditMode: !!_this2.product,
                formData: _this2.form.data(),
                formErrors: _this2.form.errors.any()
              });
              if (!_this2.product) {
                _context2.next = 6;
                break;
              }
              _context2.next = 4;
              return _this2.updateProduct();
            case 4:
              _context2.next = 8;
              break;
            case 6:
              _context2.next = 8;
              return _this2.saveProduct();
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    saveTemporary: function saveTemporary(event) {
      // Prevent any form submission or navigation
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Save form data to localStorage for temporary storage
      var formData = this.form.data();
      localStorage.setItem('productFormTemporary', JSON.stringify(formData));

      // Show success message
      toast.fire({
        type: "success",
        title: "Form saved temporarily"
      });
      console.log('Form data saved temporarily:', formData);

      // Return false to prevent any further event handling
      return false;
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.url = null;
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this3$form$ge, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this3.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 3:
              _yield$_this3$form$ge = _context3.sent;
              data = _yield$_this3$form$ge.data;
              _this3.categories = data.data;
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
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 3:
              _yield$axios$get = _context4.sent;
              data = _yield$axios$get.data;
              _this4.brands = data.data;
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
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 3:
              _yield$axios$get2 = _context5.sent;
              data = _yield$axios$get2.data;
              _this5.units = data.data;
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$axios$get3, data, defaultVatRateSlug;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 3:
              _yield$axios$get3 = _context6.sent;
              data = _yield$axios$get3.data;
              _this6.taxes = data.data;
              // assign default vat rate
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = _this6.appInfo.defaultVatRateSlug;
                _this6.form.productTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this6.calculatePrice();
              _context6.next = 13;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              console.error("Error fetching taxes:", _context6.t0);
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 10]]);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 3:
              _yield$axios$get4 = _context7.sent;
              data = _yield$axios$get4.data;
              _this7.form.itemCode = data.code;
              _this7.prefix = data.prefix;
              _context7.next = 12;
              break;
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              console.error("Error fetching item code:", _context7.t0);
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 3:
              _yield$axios$get5 = _context8.sent;
              data = _yield$axios$get5.data;
              _this8.chartOfAccounts = data || [];
              _context8.next = 12;
              break;
            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](0);
              console.error("Error loading chart of accounts:", _context8.t0);
              _this8.chartOfAccounts = [];
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 8]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var response;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 3:
              response = _context9.sent;
              _this9.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this9.isSalesAccountAutomatic = _this9.accountRoutingSettings.sales && _this9.accountRoutingSettings.sales.routing_type === 'automatic';
              _this9.isPurchaseAccountAutomatic = _this9.accountRoutingSettings.purchase && _this9.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this9.isSalesAccountAutomatic && _this9.accountRoutingSettings.sales.main_account_id) {
                _this9.form.salesAccountId = _this9.accountRoutingSettings.sales.main_account_id;
              }
              if (_this9.isPurchaseAccountAutomatic && _this9.accountRoutingSettings.purchase.main_account_id) {
                _this9.form.purchaseAccountId = _this9.accountRoutingSettings.purchase.main_account_id;
              }
              _context9.next = 16;
              break;
            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](0);
              console.error("Error loading account routing settings:", _context9.t0);
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 16:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 11]]);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
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
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this0 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this0.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var needsSalesAccount, message, needsPurchaseAccount, _message, formDataToSend, processedForm, response, newProduct, formattedProduct, autoAssignedSalesAccountId, autoAssignedPurchaseAccountId, _error$response, _error$response2, status, serverErrors, _error$response3, errorMessage;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              console.log('ProductForm: saveProduct called', {
                formData: _this1.form.data(),
                formErrors: _this1.form.errors.any(),
                formBusy: _this1.form.busy,
                formMethods: Object.getOwnPropertyNames(Object.getPrototypeOf(_this1.form)),
                formHasPost: typeof _this1.form.post === 'function'
              });

              // Validate required fields based on item type
              if (!(_this1.form.itemType === 'service' && !_this1.form.servicePurchasePrice)) {
                _context0.next = 4;
                break;
              }
              toast.fire({
                type: "error",
                title: "Service Purchase Price is required for services"
              });
              return _context0.abrupt("return");
            case 4:
              // Validate sales account - required if not automatic OR if override is checked
              needsSalesAccount = !_this1.isSalesAccountAutomatic || _this1.form.overrideSalesAccount;
              console.log('ProductForm: Sales account validation', {
                isSalesAccountAutomatic: _this1.isSalesAccountAutomatic,
                overrideSalesAccount: _this1.form.overrideSalesAccount,
                needsSalesAccount: needsSalesAccount,
                salesAccountId: _this1.form.salesAccountId
              });

              // If automatic routing is enabled and user hasn't overridden, use the auto-assigned account
              if (_this1.isSalesAccountAutomatic && !_this1.form.overrideSalesAccount) {
                if (_this1.accountRoutingSettings && _this1.accountRoutingSettings.sales && _this1.accountRoutingSettings.sales.main_account_id) {
                  _this1.form.salesAccountId = _this1.accountRoutingSettings.sales.main_account_id;
                  console.log('ProductForm: Using auto-assigned sales account:', _this1.form.salesAccountId);
                }
              }
              if (!(needsSalesAccount && !_this1.form.salesAccountId)) {
                _context0.next = 12;
                break;
              }
              console.log('ProductForm: Sales account validation failed');
              message = _this1.form.overrideSalesAccount ? "Please select a Sales Account from the dropdown" : "Sales Account is required";
              toast.fire({
                type: "error",
                title: message
              });
              return _context0.abrupt("return");
            case 12:
              // Validate purchase account - required if not automatic OR if override is checked
              needsPurchaseAccount = !_this1.isPurchaseAccountAutomatic || _this1.form.overridePurchaseAccount;
              console.log('ProductForm: Purchase account validation', {
                isPurchaseAccountAutomatic: _this1.isPurchaseAccountAutomatic,
                overridePurchaseAccount: _this1.form.overridePurchaseAccount,
                needsPurchaseAccount: needsPurchaseAccount,
                purchaseAccountId: _this1.form.purchaseAccountId
              });

              // If automatic routing is enabled and user hasn't overridden, use the auto-assigned account
              if (_this1.isPurchaseAccountAutomatic && !_this1.form.overridePurchaseAccount) {
                if (_this1.accountRoutingSettings && _this1.accountRoutingSettings.purchase && _this1.accountRoutingSettings.purchase.main_account_id) {
                  _this1.form.purchaseAccountId = _this1.accountRoutingSettings.purchase.main_account_id;
                  console.log('ProductForm: Using auto-assigned purchase account:', _this1.form.purchaseAccountId);
                }
              }
              if (!(needsPurchaseAccount && !_this1.form.purchaseAccountId)) {
                _context0.next = 20;
                break;
              }
              console.log('ProductForm: Purchase account validation failed');
              _message = _this1.form.overridePurchaseAccount ? "Please select a Purchase Account from the dropdown" : "Purchase Account is required";
              toast.fire({
                type: "error",
                title: _message
              });
              return _context0.abrupt("return");
            case 20:
              if (!_this1.form.errors.any()) {
                _context0.next = 24;
                break;
              }
              console.log('ProductForm: Form has validation errors', _this1.form.errors.all());
              toast.fire({
                type: "error",
                title: "Please fix the form errors before submitting"
              });
              return _context0.abrupt("return");
            case 24:
              console.log('ProductForm: Form validation passed, proceeding with submission');
              console.log('ProductForm: Making POST request to /api/products');
              formDataToSend = _this1.form.data();
              console.log('ProductForm: Form data being sent:', formDataToSend);

              // Check for object values that should be IDs
              Object.keys(formDataToSend).forEach(function (key) {
                var value = formDataToSend[key];
                if (value && _typeof(value) === 'object' && !Array.isArray(value)) {
                  console.log("ProductForm: Field '".concat(key, "' is an object:"), value);
                  if (value.id) {
                    formDataToSend[key] = value.id;
                    console.log("ProductForm: Converted '".concat(key, "' to ID:"), value.id);
                  }
                }
              });
              console.log('ProductForm: Processed form data:', formDataToSend);
              console.log('ProductForm: Form headers:', _this1.form.headers);
              console.log('ProductForm: Form busy before request:', _this1.form.busy);

              // Set form as busy before making the request
              _this1.form.busy = true;
              console.log('ProductForm: Form busy after setting:', _this1.form.busy);
              _context0.prev = 34;
              // Create a new form instance with processed data
              processedForm = new vform_es/* default */.Ay(formDataToSend);
              processedForm.busy = true;
              _context0.next = 39;
              return processedForm.post(window.location.origin + "/api/products");
            case 39:
              response = _context0.sent;
              console.log('ProductForm: POST request successful', response);
              toast.fire({
                type: "success",
                title: _this1.$t("Product added successfully")
              });

              // Emit the newly created product data
              if (response.data && response.data.data) {
                newProduct = response.data.data;
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
                _this1.$emit('productCreated', formattedProduct);
              }

              // Store auto-assigned account IDs before reset
              autoAssignedSalesAccountId = _this1.isSalesAccountAutomatic ? _this1.form.salesAccountId : null;
              autoAssignedPurchaseAccountId = _this1.isPurchaseAccountAutomatic ? _this1.form.purchaseAccountId : null;
              _this1.form.reset();
              _this1.form.itemType = "product"; // Reset to default
              _this1.form.overrideSalesAccount = false; // Reset override flags
              _this1.form.overridePurchaseAccount = false;

              // Restore auto-assigned account IDs after reset
              if (autoAssignedSalesAccountId) {
                _this1.form.salesAccountId = autoAssignedSalesAccountId;
              }
              if (autoAssignedPurchaseAccountId) {
                _this1.form.purchaseAccountId = autoAssignedPurchaseAccountId;
              }
              if (_this1.mode === 'modal') {
                _this1.showModal = false;
              } else {
                _this1.$router.push({
                  name: 'products.index'
                });
              }
              _this1.$emit('reloadProducts');

              // Reset form busy state
              _this1.form.busy = false;
              console.log('ProductForm: Form busy after success:', _this1.form.busy);
              _context0.next = 67;
              break;
            case 57:
              _context0.prev = 57;
              _context0.t0 = _context0["catch"](34);
              console.error("Error creating product:", _context0.t0);
              console.log('ProductForm: POST request failed', {
                error: _context0.t0,
                response: _context0.t0.response,
                status: (_error$response = _context0.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status,
                data: (_error$response2 = _context0.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data
              });

              // Check if this is a validation error (status 422)
              status = _context0.t0 && _context0.t0.response && _context0.t0.response.status;
              serverErrors = _context0.t0 && _context0.t0.response && _context0.t0.response.data && _context0.t0.response.data.errors; // Handle validation errors
              if (_context0.t0.response && _context0.t0.response.data && _context0.t0.response.data.errors) {
                _this1.form.errors.set(_context0.t0.response.data.errors);
                console.log('ProductForm: Validation errors set:', _context0.t0.response.data.errors);
              }
              if (status === 422 && serverErrors) {
                // Show toast notification for validation errors
                toast.fire({
                  type: 'error',
                  title: _this1.$t('Validation Error'),
                  text: _this1.$t('Please check the form for errors and try again.')
                });

                // Scroll to the first invalid input after DOM updates
                _this1.$nextTick(function () {
                  // Wait a bit more to ensure vform has added the is-invalid class
                  setTimeout(function () {
                    var invalid = _this1.$el.querySelector('.is-invalid');
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
                errorMessage = ((_error$response3 = _context0.t0.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this1.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: String(errorMessage)
                });
              }

              // Reset form busy state
              _this1.form.busy = false;
              console.log('ProductForm: Form busy after error:', _this1.form.busy);
            case 67:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[34, 57]]);
      }))();
    },
    // update product
    updateProduct: function updateProduct() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var productSlug, productId, identifier, formData, response;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _context1.prev = 0;
              if (_this10.product) {
                _context1.next = 5;
                break;
              }
              console.error('No product available for update');
              toast.fire({
                type: "error",
                title: _this10.$t("No product selected for update")
              });
              return _context1.abrupt("return");
            case 5:
              productSlug = _this10.product.slug || _this10.product.productSlug || _this10.product.product_slug;
              productId = _this10.product.id || _this10.product.productID || _this10.product.product_id;
              if (!(!productSlug && !productId)) {
                _context1.next = 11;
                break;
              }
              console.error('No product identifier (slug or ID) available for update');
              toast.fire({
                type: "error",
                title: _this10.$t("Product identifier missing. Cannot update product.")
              });
              return _context1.abrupt("return");
            case 11:
              identifier = productSlug;
              if (!productSlug && productId) {
                identifier = productId;
              }

              // Validate required fields based on item type
              if (!(_this10.form.itemType === 'service' && !_this10.form.servicePurchasePrice)) {
                _context1.next = 16;
                break;
              }
              toast.fire({
                type: "error",
                title: _this10.$t("Service Purchase Price is required for services")
              });
              return _context1.abrupt("return");
            case 16:
              if (_this10.form.salesAccountId) {
                _context1.next = 19;
                break;
              }
              toast.fire({
                type: "error",
                title: _this10.$t("Sales Account is required")
              });
              return _context1.abrupt("return");
            case 19:
              if (_this10.form.purchaseAccountId) {
                _context1.next = 22;
                break;
              }
              toast.fire({
                type: "error",
                title: _this10.$t("Purchase Account is required")
              });
              return _context1.abrupt("return");
            case 22:
              // Transform object fields to IDs before sending
              formData = _this10.form.data(); // Transform v-select objects to IDs
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
              _context1.next = 29;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 29:
              response = _context1.sent;
              if (response.data.success) {
                toast.fire({
                  type: "success",
                  title: _this10.$t("Product updated successfully")
                });
                if (_this10.mode === 'modal') {
                  _this10.showModal = false;
                } else {
                  _this10.$router.push({
                    name: 'products.index'
                  });
                }
                _this10.$emit("reloadProducts");
                _this10.$emit("productUpdated", {
                  originalProduct: _this10.product,
                  updatedData: formData
                });
                _this10.form.reset();
                _this10.url = null;
              }
              _context1.next = 37;
              break;
            case 33:
              _context1.prev = 33;
              _context1.t0 = _context1["catch"](0);
              if (_context1.t0.response && _context1.t0.response.data) {
                if (_context1.t0.response.data.errors) {
                  _this10.form.errors.set(_context1.t0.response.data.errors);
                } else {
                  toast.fire({
                    type: "error",
                    title: _context1.t0.response.data.message || _this10.$t("Error updating product")
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this10.$t("Error updating product")
                });
              }
              console.error('Error updating product:', _context1.t0);
            case 37:
            case "end":
              return _context1.stop();
          }
        }, _callee1, null, [[0, 33]]);
      }))();
    },
    loadProductData: function loadProductData(product) {
      var _this11 = this;
      this.form.itemType = product.item_type || product.itemType || "product";
      this.form.itemName = product.name || product.item_name || "";
      this.form.itemModel = product.model || product.item_model || "";
      this.form.itemCode = product.code || product.item_code || "";
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128";

      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (_typeof(product.subCategory) === 'object' && product.subCategory.id) {
          var categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory.id;
          });
          this.form.subCategory = categoryObject || product.subCategory;
        } else {
          var _categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory;
          });
          this.form.subCategory = _categoryObject || product.subCategory;
        }
      } else {
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

      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (_typeof(product.itemUnit) === 'object' && product.itemUnit.id) {
          var unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit.id;
          });
          this.form.itemUnit = unitObject || product.itemUnit;
        } else {
          var _unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit;
          });
          this.form.itemUnit = _unitObject || product.itemUnit;
        }
      } else {
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
          var taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax.id;
          });
          this.form.productTax = taxObject || product.itemTax;
        } else {
          var _taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax;
          });
          this.form.productTax = _taxObject || product.itemTax;
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        var taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id;
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
      // Handle sales account - find the exact object from chartOfAccounts array
      var salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "");
      if (salesAccountId) {
        var salesAccountObject = this.chartOfAccounts.find(function (account) {
          return account.id == salesAccountId;
        });
        this.form.salesAccountId = salesAccountObject ? salesAccountObject.id : salesAccountId;
      } else {
        this.form.salesAccountId = "";
      }

      // Handle purchase account - find the exact object from chartOfAccounts array
      var purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "");
      if (purchaseAccountId) {
        var purchaseAccountObject = this.chartOfAccounts.find(function (account) {
          return account.id == purchaseAccountId;
        });
        this.form.purchaseAccountId = purchaseAccountObject ? purchaseAccountObject.id : purchaseAccountId;
      } else {
        this.form.purchaseAccountId = "";
      }
      this.url = product.image || "";

      // Calculate selling price after loading data
      this.$nextTick(function () {
        _this11.calculatePrice();
      });
    },
    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange: function onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        this.form.salesAccountId = "";
      } else {
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }
      }
    },
    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange: function onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        this.form.purchaseAccountId = "";
      } else {
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }
      }
    }
  }
});
;// ./resources/js/components/ProductForm.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductFormvue_type_script_lang_js = (ProductFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductForm.vue?vue&type=style&index=0&id=60faa763&prod&scoped=true&lang=css
var ProductFormvue_type_style_index_0_id_60faa763_prod_scoped_true_lang_css = __webpack_require__(39883);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductForm.vue?vue&type=style&index=0&id=60faa763&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductFormvue_type_style_index_0_id_60faa763_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductFormvue_type_style_index_0_id_60faa763_prod_scoped_true_lang_css = (ProductFormvue_type_style_index_0_id_60faa763_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductForm.vue?vue&type=style&index=0&id=60faa763&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ProductForm.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "60faa763",
  null
  
)

/* harmony default export */ const ProductForm = (component.exports);

/***/ }),

/***/ 23877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-e368acd2]{gap:10px}.header-buttons[data-v-e368acd2]{margin-bottom:15px}.footer-buttons[data-v-e368acd2]{display:flex;gap:10px}.footer-buttons .btn[data-v-e368acd2]{margin-right:10px}.footer-buttons .btn[data-v-e368acd2]:last-child{margin-right:0}.card[data-v-e368acd2]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-body[data-v-e368acd2]{padding:1.25rem}.card-footer[data-v-e368acd2]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-e368acd2]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-e368acd2]{color:#374151;display:block;font-weight:500;margin:0 20px}.required[data-v-e368acd2]{color:#dc3545;font-weight:700}.btn-primary[data-v-e368acd2]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-e368acd2]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-e368acd2]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-e368acd2]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.is-invalid[data-v-e368acd2]{border-color:#dc3545!important}textarea.form-control[data-v-e368acd2]{min-height:100px;resize:vertical}.v-select[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.v-select .vs__search[data-v-e368acd2]::-moz-placeholder{color:#6b7280}.v-select .vs__search[data-v-e368acd2]::placeholder{color:#6b7280}.v-select .vs__selected[data-v-e368acd2]{color:#374151}.v-select .vs__dropdown-menu[data-v-e368acd2]{border-radius:10px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}.custom-file-input[data-v-e368acd2],.custom-file-label[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px;padding:10px 16px}.custom-file-label[data-v-e368acd2]{color:#374151}.custom-file-input:focus~.custom-file-label[data-v-e368acd2]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.bg-light[data-v-e368acd2]{background-color:#f8f9fa!important;border:1px solid #e5e7eb;border-radius:10px;padding:10px}.img-fluid[data-v-e368acd2]{border-radius:8px;height:auto;max-width:100%}.form-check-input[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb;border-radius:4px}.form-check-input[data-v-e368acd2]:checked{background-color:#2ab930!important;border-color:#2ab930!important}.form-check-label[data-v-e368acd2],.input-group-text[data-v-e368acd2]{color:#374151;font-weight:500}.input-group-text[data-v-e368acd2]{background:#fff!important;border:1px solid #e5e7eb}.btn-outline-custom[data-v-e368acd2]{border-color:#33a0d9;border-radius:10px;color:#33a0d9;font-weight:500;padding:8px 16px;transition:background-color .3s,color .3s,border-color .3s}.btn-custom-active[data-v-e368acd2],.btn-outline-custom[data-v-e368acd2]:hover{background-color:#33a0d9;border-color:#33a0d9;color:#fff}.form-group .btn-outline-custom[data-v-e368acd2]{border-color:#33a0d9;color:#33a0d9}.form-group .btn-custom-active[data-v-e368acd2]{background-color:#33a0d9;border-color:#33a0d9;color:#fff}.row[data-v-e368acd2]{margin-bottom:1rem}.form-text[data-v-e368acd2]{color:#6b7280;font-size:.875rem}.text-muted[data-v-e368acd2]{color:#6b7280!important}@media (max-width:768px){.card-footer[data-v-e368acd2]{flex-direction:column;gap:10px}.card-footer .btn[data-v-e368acd2]{margin-right:0!important;width:100%}.card-footer div[data-v-e368acd2]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 93422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create_new)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/create-new.vue?vue&type=template&id=e368acd2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('product-form', {
    attrs: {
      "mode": "page",
      "form-id": 'productCreateForm'
    }
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ProductForm.vue + 5 modules
var ProductForm = __webpack_require__(17646);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/create-new.vue?vue&type=script&lang=js

/* harmony default export */ const create_newvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Item')
    };
  },
  components: {
    ProductForm: ProductForm/* default */.A
  }
});
;// ./resources/js/pages/products/create-new.vue?vue&type=script&lang=js
 /* harmony default export */ const products_create_newvue_type_script_lang_js = (create_newvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/create-new.vue?vue&type=style&index=0&id=e368acd2&prod&scoped=true&lang=css
var create_newvue_type_style_index_0_id_e368acd2_prod_scoped_true_lang_css = __webpack_require__(23877);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/create-new.vue?vue&type=style&index=0&id=e368acd2&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(create_newvue_type_style_index_0_id_e368acd2_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const products_create_newvue_type_style_index_0_id_e368acd2_prod_scoped_true_lang_css = (create_newvue_type_style_index_0_id_e368acd2_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/products/create-new.vue?vue&type=style&index=0&id=e368acd2&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/products/create-new.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  products_create_newvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "e368acd2",
  null
  
)

/* harmony default export */ const create_new = (component.exports);

/***/ })

}]);