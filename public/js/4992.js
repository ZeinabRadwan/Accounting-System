"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4992],{

/***/ 94992
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/create.vue?vue&type=template&id=4fc27a24
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var render = function render() {
  var _vm$selectedInvoice$c, _vm$fullInvoice$subTo, _vm$fullInvoice$disco, _vm$fullInvoice$disco2, _vm$fullInvoice$tax, _vm$fullInvoice$trans, _vm$fullInvoice$invoi, _ref, _vm$fullInvoice$total, _vm$fullInvoice$total2, _vm$fullInvoice$due, _vm$fullInvoice$due2;
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
        name: 'creditNotes.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'creditNoteForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "creditNoteForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveCreditNote.apply(null, arguments);
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
      "for": "invoice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Reference Sales Invoice')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('invoice_id')
    },
    attrs: {
      "options": _vm.invoiceOptions,
      "label": "label",
      "placeholder": _vm.$t('Select an invoice')
    },
    on: {
      "input": _vm.onInvoiceSelect
    },
    model: {
      value: _vm.form.invoice,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "invoice", $$v);
      },
      expression: "form.invoice"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoice_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "discount_amount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount Amount')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.discount_amount,
      expression: "form.discount_amount",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount_amount')
    },
    attrs: {
      "id": "discount_amount",
      "type": "number",
      "step": "0.01",
      "min": "0.01",
      "placeholder": _vm.$t('Enter discount amount')
    },
    domProps: {
      "value": _vm.form.discount_amount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount_amount", _vm._n($event.target.value));
      },
      "blur": function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount_amount"
    }
  })], 1)]), _vm._v(" "), _vm.selectedInvoice || _vm.fullInvoice ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Customer details')))]), _vm._v(" "), _vm.loadingInvoice ? _c('div', {
    staticClass: "form-control-plaintext border rounded p-2 bg-light"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading...')) + "\n                ")]) : _c('div', {
    staticClass: "form-control-plaintext border rounded p-2 bg-light"
  }, [_vm.fullInvoice && _vm.fullInvoice.client ? [_c('strong', [_vm._v(_vm._s(_vm.fullInvoice.client.name))]), _vm._v(" "), _vm.fullInvoice.client.companyName ? _c('span', [_vm._v(" (" + _vm._s(_vm.fullInvoice.client.companyName) + ")")]) : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.email || _vm.fullInvoice.client.phoneNumber || _vm.fullInvoice.client.address ? _c('br') : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.email ? _c('span', [_vm._v(_vm._s(_vm.$t('Email')) + ": " + _vm._s(_vm.fullInvoice.client.email))]) : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.email && _vm.fullInvoice.client.phoneNumber ? [_vm._v(" – ")] : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.phoneNumber ? _c('span', [_vm._v(_vm._s(_vm.$t('Phone')) + ": " + _vm._s(_vm.fullInvoice.client.phoneNumber || _vm.fullInvoice.client.phone))]) : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.address ? _c('br') : _vm._e(), _vm._v(" "), _vm.fullInvoice.client.address ? _c('span', [_vm._v(_vm._s(_vm.$t('Address')) + ": " + _vm._s(_vm.fullInvoice.client.address))]) : _vm._e()] : _vm.selectedInvoice ? [_c('strong', [_vm._v(_vm._s(_vm.selectedInvoice.clientName || (typeof _vm.selectedInvoice.client === 'string' ? _vm.selectedInvoice.client : (_vm$selectedInvoice$c = _vm.selectedInvoice.client) === null || _vm$selectedInvoice$c === void 0 ? void 0 : _vm$selectedInvoice$c.name)))]), _vm._v(" "), _vm.selectedInvoice.client && _typeof(_vm.selectedInvoice.client) === 'object' && _vm.selectedInvoice.client.email ? _c('span', [_vm._v(" – " + _vm._s(_vm.selectedInvoice.client.email))]) : _vm._e()] : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _vm.fullInvoice && !_vm.loadingInvoice ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Invoice totals')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered mb-0"
  }, [_c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Subtotal')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullInvoice$subTo = _vm.fullInvoice.subTotal) !== null && _vm$fullInvoice$subTo !== void 0 ? _vm$fullInvoice$subTo : _vm.fullInvoice.sub_total))
    }
  })]), _vm._v(" "), ((_vm$fullInvoice$disco = _vm.fullInvoice.discountAmount) !== null && _vm$fullInvoice$disco !== void 0 ? _vm$fullInvoice$disco : _vm.fullInvoice.discount_amount) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Discount')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullInvoice$disco2 = _vm.fullInvoice.discountAmount) !== null && _vm$fullInvoice$disco2 !== void 0 ? _vm$fullInvoice$disco2 : _vm.fullInvoice.discount_amount))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullInvoice$tax = _vm.fullInvoice.tax) !== null && _vm$fullInvoice$tax !== void 0 ? _vm$fullInvoice$tax : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Tax')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullInvoice.tax))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullInvoice$trans = _vm.fullInvoice.transport) !== null && _vm$fullInvoice$trans !== void 0 ? _vm$fullInvoice$trans : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Transport')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullInvoice.transport))
    }
  })]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "table-active"
  }, [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Invoice Total')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullInvoice$invoi = _vm.fullInvoice.invoiceTotal) !== null && _vm$fullInvoice$invoi !== void 0 ? _vm$fullInvoice$invoi : _vm.fullInvoice.invoice_total))
    }
  })]), _vm._v(" "), ((_ref = (_vm$fullInvoice$total = _vm.fullInvoice.totalPaid) !== null && _vm$fullInvoice$total !== void 0 ? _vm$fullInvoice$total : _vm.fullInvoice.total_paid) !== null && _ref !== void 0 ? _ref : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Total Paid')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullInvoice$total2 = _vm.fullInvoice.totalPaid) !== null && _vm$fullInvoice$total2 !== void 0 ? _vm$fullInvoice$total2 : _vm.fullInvoice.total_paid))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullInvoice$due = _vm.fullInvoice.due) !== null && _vm$fullInvoice$due !== void 0 ? _vm$fullInvoice$due : 0) !== undefined && ((_vm$fullInvoice$due2 = _vm.fullInvoice.due) !== null && _vm$fullInvoice$due2 !== void 0 ? _vm$fullInvoice$due2 : 0) >= 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Due')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullInvoice.due))
    }
  })]) : _vm._e()])])])])]) : _vm._e(), _vm._v(" "), _vm.fullInvoice && _vm.fullInvoice.invoiceProducts && _vm.fullInvoice.invoiceProducts.length && !_vm.loadingInvoice ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Invoice items')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered mb-0"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Product')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Qty')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Unit Price')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Discount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Tax')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Total')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.fullInvoice.invoiceProducts, function (item, idx) {
    var _item$product, _item$salePrice, _ref2, _item$productDiscount;
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(item.productName || ((_item$product = item.product) === null || _item$product === void 0 ? void 0 : _item$product.name)))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency((_item$salePrice = item.salePrice) !== null && _item$salePrice !== void 0 ? _item$salePrice : item.sale_price))
      }
    }), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency((_ref2 = (_item$productDiscount = item.productDiscount) !== null && _item$productDiscount !== void 0 ? _item$productDiscount : item.product_discount) !== null && _ref2 !== void 0 ? _ref2 : 0))
      }
    }), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency(_vm.lineTax(item)))
      }
    }), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency(_vm.lineTotal(item)))
      }
    })]);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Tax (15%)')))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedTax
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Total (Discount + Tax)')))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedTotal
    }
  })]), _vm._v(" "), _c('div', {
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
      "type": "date"
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Notes')) + " (" + _vm._s(_vm.$t('optional')) + ")")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "note",
      "rows": "2",
      "placeholder": _vm.$t('Notes')
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n            ")])], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/create.vue?vue&type=script&lang=js
function createvue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return createvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, createvue_type_script_lang_js_typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == createvue_type_script_lang_js_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != createvue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != createvue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Credit Note')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Sales',
        url: ''
      }, {
        name: 'Credit Note',
        url: 'creditNotes.index'
      }, {
        name: '',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        invoice_id: null,
        discount_amount: '',
        note: '',
        date: new Date().toISOString().slice(0, 10)
      }),
      invoiceOptions: [],
      selectedInvoice: null,
      fullInvoice: null,
      loadingInvoice: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  })), {}, {
    taxAmount: function taxAmount() {
      var n = parseFloat(this.form.discount_amount);
      if (isNaN(n) || n <= 0) return 0;
      return Math.round(n * 0.15 * 100) / 100;
    },
    totalAmount: function totalAmount() {
      var n = parseFloat(this.form.discount_amount);
      if (isNaN(n) || n <= 0) return 0;
      return this.taxAmount + n;
    },
    formattedTax: function formattedTax() {
      return this.formatCurrency(this.taxAmount);
    },
    formattedTotal: function formattedTotal() {
      return this.formatCurrency(this.totalAmount);
    }
  }),
  created: function created() {
    this.breadcrumbsCurrent = this.$t('Create Credit Note');
    this.breadcrumbs[1].name = this.$t('Sales');
    this.breadcrumbs[2].name = this.$t('Credit Note');
    this.breadcrumbs[3].name = this.$t('Create');
    this.loadInvoices();
  },
  methods: {
    loadInvoices: function loadInvoices() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, list, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/invoices?perPage=9999');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              list = data.data || data || [];
              _this.invoiceOptions = list.map(function (inv) {
                var clientName = typeof inv.client === 'string' ? inv.client : inv.client && inv.client.name ? inv.client.name : null;
                var invoiceNo = inv.invoiceNo || inv.invoice_no || '';
                return {
                  id: inv.id,
                  slug: inv.slug,
                  invoice_no: inv.invoice_no || inv.invoiceNo,
                  label: invoiceNo + (clientName ? ' - ' + clientName : ''),
                  client: inv.client,
                  clientName: clientName
                };
              });
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              _this.$toast.error(_this.$t('Error'), _this.$t('Failed to load invoices'));
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onInvoiceSelect: function onInvoiceSelect(inv) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.selectedInvoice = inv || null;
              _this2.form.invoice_id = inv ? inv.id : null;
              _this2.fullInvoice = null;
              if (!(!inv || !inv.slug)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _this2.loadingInvoice = true;
              _context2.p = 2;
              _context2.n = 3;
              return axios_default().get(window.location.origin + '/api/invoices/' + encodeURIComponent(inv.slug));
            case 3:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.fullInvoice = data.data || data;
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              _this2.$toast.error(_this2.$t('Error'), _this2.$t('Failed to load invoice details'));
              _this2.fullInvoice = null;
            case 5:
              _context2.p = 5;
              _this2.loadingInvoice = false;
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4, 5, 6]]);
      }))();
    },
    formatCurrency: function formatCurrency(amount) {
      var n = Number(amount);
      if (isNaN(n)) return '0.00';
      var sym = this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + ' ' : '';
      return sym + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    lineTax: function lineTax(item) {
      var _ref, _item$unitTax;
      var taxTotal = item.taxTotal;
      if (taxTotal != null && !isNaN(Number(taxTotal))) return Number(taxTotal);
      var qty = Number(item.quantity) || 0;
      var unitTax = Number((_ref = (_item$unitTax = item.unitTax) !== null && _item$unitTax !== void 0 ? _item$unitTax : item.tax_amount) !== null && _ref !== void 0 ? _ref : item.productTax) || 0;
      return qty * unitTax;
    },
    lineTotal: function lineTotal(item) {
      var _item$salePrice, _item$productDiscount;
      var qty = Number(item.quantity) || 0;
      var unitPrice = Number((_item$salePrice = item.salePrice) !== null && _item$salePrice !== void 0 ? _item$salePrice : item.sale_price) || 0;
      var discount = Number((_item$productDiscount = item.productDiscount) !== null && _item$productDiscount !== void 0 ? _item$productDiscount : item.product_discount) || 0;
      var tax = this.lineTax(item);
      return qty * unitPrice - discount + tax;
    },
    saveCreditNote: function saveCreditNote() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var discount;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this3.form.invoice && _this3.form.invoice.id) {
                _this3.form.invoice_id = _this3.form.invoice.id;
              }
              if (_this3.form.invoice_id) {
                _context3.n = 1;
                break;
              }
              _this3.form.errors.set('invoice_id', [_this3.$t('Please select a sales invoice.')]);
              return _context3.a(2);
            case 1:
              discount = parseFloat(_this3.form.discount_amount);
              if (!(isNaN(discount) || discount < 0.01)) {
                _context3.n = 2;
                break;
              }
              _this3.form.errors.set('discount_amount', [_this3.$t('Discount amount must be greater than 0.')]);
              return _context3.a(2);
            case 2:
              _context3.n = 3;
              return _this3.form.post(window.location.origin + '/api/credit-notes').then(function (_ref2) {
                var data = _ref2.data;
                _this3.$toast.success(_this3.$t('Success'), _this3.$t('Credit note saved successfully.'));
                var slug = data.data && data.data.slug || data.slug;
                if (slug) _this3.$router.push({
                  name: 'creditNotes.show',
                  params: {
                    slug: slug
                  }
                });else _this3.$router.push({
                  name: 'creditNotes.index'
                });
              })["catch"](function (err) {
                var msg = err.response && err.response.data && (err.response.data.message || err.response.data.errors && Object.values(err.response.data.errors).flat().join(' '));
                _this3.$toast.error(_this3.$t('Error'), msg || _this3.$t('Failed to save credit note.'));
              });
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/sales/credit-notes/create.vue?vue&type=script&lang=js
 /* harmony default export */ const credit_notes_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/credit-notes/create.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  credit_notes_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }

}]);