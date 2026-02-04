"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[670],{

/***/ 60670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/debit-notes/create.vue?vue&type=template&id=3c93d0e1
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var render = function render() {
  var _vm$selectedPurchase$, _vm$fullPurchase$subT, _ref, _vm$fullPurchase$tota, _vm$fullPurchase$tota2, _vm$fullPurchase$tax, _vm$fullPurchase$tran, _vm$fullPurchase$purc, _vm$fullPurchase$tota3, _vm$fullPurchase$due, _vm$fullPurchase$due2;
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
        name: 'debitNotes.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'debitNoteForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "debitNoteForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveDebitNote.apply(null, arguments);
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
      "for": "purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t('Reference Purchase Invoice')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('purchase_id')
    },
    attrs: {
      "options": _vm.purchaseOptions,
      "label": "label",
      "placeholder": _vm.$t('Select a purchase')
    },
    on: {
      "input": _vm.onPurchaseSelect
    },
    model: {
      value: _vm.form.purchase,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchase", $$v);
      },
      expression: "form.purchase"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchase_id"
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
  })], 1)]), _vm._v(" "), _vm.selectedPurchase || _vm.fullPurchase ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Supplier details')))]), _vm._v(" "), _vm.loadingPurchase ? _c('div', {
    staticClass: "form-control-plaintext border rounded p-2 bg-light"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t('Loading...')) + "\n                ")]) : _c('div', {
    staticClass: "form-control-plaintext border rounded p-2 bg-light"
  }, [_vm.fullPurchase && _vm.fullPurchase.supplier ? [_c('strong', [_vm._v(_vm._s(_vm.fullPurchase.supplier.name))]), _vm._v(" "), _vm.fullPurchase.supplier.companyName ? _c('span', [_vm._v(" (" + _vm._s(_vm.fullPurchase.supplier.companyName) + ")")]) : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.email || _vm.fullPurchase.supplier.phoneNumber || _vm.fullPurchase.supplier.address ? _c('br') : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.email ? _c('span', [_vm._v(_vm._s(_vm.$t('Email')) + ": " + _vm._s(_vm.fullPurchase.supplier.email))]) : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.email && _vm.fullPurchase.supplier.phoneNumber ? [_vm._v(" – ")] : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.phoneNumber ? _c('span', [_vm._v(_vm._s(_vm.$t('Phone')) + ": " + _vm._s(_vm.fullPurchase.supplier.phoneNumber || _vm.fullPurchase.supplier.phone))]) : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.address ? _c('br') : _vm._e(), _vm._v(" "), _vm.fullPurchase.supplier.address ? _c('span', [_vm._v(_vm._s(_vm.$t('Address')) + ": " + _vm._s(_vm.fullPurchase.supplier.address))]) : _vm._e()] : _vm.selectedPurchase ? [_c('strong', [_vm._v(_vm._s(_vm.selectedPurchase.supplierName || (typeof _vm.selectedPurchase.supplier === 'string' ? _vm.selectedPurchase.supplier : (_vm$selectedPurchase$ = _vm.selectedPurchase.supplier) === null || _vm$selectedPurchase$ === void 0 ? void 0 : _vm$selectedPurchase$.name)))]), _vm._v(" "), _vm.selectedPurchase.supplier && _typeof(_vm.selectedPurchase.supplier) === 'object' && _vm.selectedPurchase.supplier.email ? _c('span', [_vm._v(" – " + _vm._s(_vm.selectedPurchase.supplier.email))]) : _vm._e()] : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _vm.fullPurchase && !_vm.loadingPurchase ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Purchase totals')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered mb-0"
  }, [_c('tbody', [_c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Subtotal')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullPurchase$subT = _vm.fullPurchase.subTotal) !== null && _vm$fullPurchase$subT !== void 0 ? _vm$fullPurchase$subT : _vm.fullPurchase.sub_total))
    }
  })]), _vm._v(" "), ((_ref = (_vm$fullPurchase$tota = _vm.fullPurchase.totalDiscount) !== null && _vm$fullPurchase$tota !== void 0 ? _vm$fullPurchase$tota : _vm.fullPurchase.discount) !== null && _ref !== void 0 ? _ref : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Discount')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullPurchase$tota2 = _vm.fullPurchase.totalDiscount) !== null && _vm$fullPurchase$tota2 !== void 0 ? _vm$fullPurchase$tota2 : _vm.fullPurchase.discount))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullPurchase$tax = _vm.fullPurchase.tax) !== null && _vm$fullPurchase$tax !== void 0 ? _vm$fullPurchase$tax : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Tax')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullPurchase.tax))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullPurchase$tran = _vm.fullPurchase.transport) !== null && _vm$fullPurchase$tran !== void 0 ? _vm$fullPurchase$tran : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Transport')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullPurchase.transport))
    }
  })]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "table-active"
  }, [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Purchase Total')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency((_vm$fullPurchase$purc = _vm.fullPurchase.purchaseTotal) !== null && _vm$fullPurchase$purc !== void 0 ? _vm$fullPurchase$purc : _vm.fullPurchase.purchase_total))
    }
  })]), _vm._v(" "), ((_vm$fullPurchase$tota3 = _vm.fullPurchase.totalPaid) !== null && _vm$fullPurchase$tota3 !== void 0 ? _vm$fullPurchase$tota3 : 0) > 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Total Paid')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullPurchase.totalPaid))
    }
  })]) : _vm._e(), _vm._v(" "), ((_vm$fullPurchase$due = _vm.fullPurchase.due) !== null && _vm$fullPurchase$due !== void 0 ? _vm$fullPurchase$due : 0) !== undefined && ((_vm$fullPurchase$due2 = _vm.fullPurchase.due) !== null && _vm$fullPurchase$due2 !== void 0 ? _vm$fullPurchase$due2 : 0) >= 0 ? _c('tr', [_c('td', [_c('strong', [_vm._v(_vm._s(_vm.$t('Due')))])]), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.fullPurchase.due))
    }
  })]) : _vm._e()])])])])]) : _vm._e(), _vm._v(" "), _vm.fullPurchase && _vm.fullPurchase.products && _vm.fullPurchase.products.length && !_vm.loadingPurchase ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Purchase items')))]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Total')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.fullPurchase.products, function (item, idx) {
    var _item$product, _item$purchasePrice, _ref2, _item$productDiscount;
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(item.productName || ((_item$product = item.product) === null || _item$product === void 0 ? void 0 : _item$product.name)))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency((_item$purchasePrice = item.purchasePrice) !== null && _item$purchasePrice !== void 0 ? _item$purchasePrice : item.purchase_price))
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/debit-notes/create.vue?vue&type=script&lang=js
function createvue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return createvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, createvue_type_script_lang_js_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == createvue_type_script_lang_js_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(createvue_type_script_lang_js_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == createvue_type_script_lang_js_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != createvue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != createvue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Debit Note')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Purchases',
        url: ''
      }, {
        name: 'Debit Note',
        url: 'debitNotes.index'
      }, {
        name: '',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        purchase_id: null,
        discount_amount: '',
        note: '',
        date: new Date().toISOString().slice(0, 10)
      }),
      purchaseOptions: [],
      selectedPurchase: null,
      fullPurchase: null,
      loadingPurchase: false
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
    this.breadcrumbsCurrent = this.$t('Create Debit Note');
    this.breadcrumbs[1].name = this.$t('Purchases');
    this.breadcrumbs[2].name = this.$t('Debit Note');
    this.breadcrumbs[3].name = this.$t('Create');
    this.loadPurchases();
  },
  methods: {
    loadPurchases: function loadPurchases() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data, list;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_default().get(window.location.origin + '/api/purchases?perPage=9999');
            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              list = data.data || data || [];
              _this.purchaseOptions = list.map(function (p) {
                var supplierName = p.supplierName || p.supplier && (typeof p.supplier === 'string' ? p.supplier : p.supplier.name) || null;
                var purchaseNo = p.purchaseNo || p.code || p.purchase_no || '';
                return {
                  id: p.id,
                  slug: p.slug,
                  purchase_no: p.purchase_no || p.code,
                  label: purchaseNo + (supplierName ? ' - ' + supplierName : ''),
                  supplier: p.supplier,
                  supplierName: supplierName
                };
              });
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              _this.$toast.error(_this.$t('Error'), _this.$t('Failed to load purchases'));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    onPurchaseSelect: function onPurchaseSelect(p) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.selectedPurchase = p || null;
              _this2.form.purchase_id = p ? p.id : null;
              _this2.fullPurchase = null;
              if (!(!p || !p.slug)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              _this2.loadingPurchase = true;
              _context2.prev = 6;
              _context2.next = 9;
              return axios_default().get(window.location.origin + '/api/purchases/' + encodeURIComponent(p.slug));
            case 9:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              _this2.fullPurchase = data.data || data;
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](6);
              _this2.$toast.error(_this2.$t('Error'), _this2.$t('Failed to load purchase details'));
              _this2.fullPurchase = null;
            case 18:
              _context2.prev = 18;
              _this2.loadingPurchase = false;
              return _context2.finish(18);
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[6, 14, 18, 21]]);
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
      var _ref2, _ref3, _item$purchasePrice, _item$productDiscount;
      var qty = Number(item.quantity) || 0;
      var unitPrice = Number((_ref2 = (_ref3 = (_item$purchasePrice = item.purchasePrice) !== null && _item$purchasePrice !== void 0 ? _item$purchasePrice : item.purchase_price) !== null && _ref3 !== void 0 ? _ref3 : item.salePrice) !== null && _ref2 !== void 0 ? _ref2 : item.sale_price) || 0;
      var discount = Number((_item$productDiscount = item.productDiscount) !== null && _item$productDiscount !== void 0 ? _item$productDiscount : item.product_discount) || 0;
      var tax = this.lineTax(item);
      return qty * unitPrice - discount + tax;
    },
    saveDebitNote: function saveDebitNote() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var discount;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this3.form.purchase && _this3.form.purchase.id) {
                _this3.form.purchase_id = _this3.form.purchase.id;
              }
              if (_this3.form.purchase_id) {
                _context3.next = 4;
                break;
              }
              _this3.form.errors.set('purchase_id', [_this3.$t('Please select a purchase invoice.')]);
              return _context3.abrupt("return");
            case 4:
              discount = parseFloat(_this3.form.discount_amount);
              if (!(isNaN(discount) || discount < 0.01)) {
                _context3.next = 8;
                break;
              }
              _this3.form.errors.set('discount_amount', [_this3.$t('Discount amount must be greater than 0.')]);
              return _context3.abrupt("return");
            case 8:
              _context3.next = 10;
              return _this3.form.post(window.location.origin + '/api/debit-notes').then(function (_ref4) {
                var data = _ref4.data;
                _this3.$toast.success(_this3.$t('Success'), _this3.$t('Debit note saved successfully.'));
                var slug = data.data && data.data.slug || data.slug;
                if (slug) _this3.$router.push({
                  name: 'debitNotes.show',
                  params: {
                    slug: slug
                  }
                });else _this3.$router.push({
                  name: 'debitNotes.index'
                });
              })["catch"](function (err) {
                var msg = err.response && err.response.data && (err.response.data.message || err.response.data.errors && Object.values(err.response.data.errors).flat().join(' '));
                _this3.$toast.error(_this3.$t('Error'), msg || _this3.$t('Failed to save debit note.'));
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/purchases/debit-notes/create.vue?vue&type=script&lang=js
 /* harmony default export */ const debit_notes_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/debit-notes/create.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  debit_notes_createvue_type_script_lang_js,
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