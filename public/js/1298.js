"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1298],{

/***/ 11511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-4a35a615]{gap:10px}.header-buttons[data-v-4a35a615]{margin-bottom:15px}.footer-buttons[data-v-4a35a615]{display:flex;gap:10px}.footer-buttons .btn[data-v-4a35a615]{margin-right:10px}.footer-buttons .btn[data-v-4a35a615]:last-child{margin-right:0}.card[data-v-4a35a615]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-4a35a615]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-4a35a615]{background:#fff!important}.btn-primary[data-v-4a35a615]{background:#2ab930!important}.btn-primary[data-v-4a35a615],.btn-secondary[data-v-4a35a615]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-4a35a615]{background:#33a0d9!important}.btn-secondary[data-v-4a35a615]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 31298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=template&id=4a35a615&scoped=true
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
        name: 'invoicePayments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'clientInvoicePaymentEditForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "clientInvoicePaymentEditForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePayment.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.form.invoice ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "invoice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice No'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoice.invoiceLabel,
      expression: "form.invoice.invoiceLabel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('invoice')
    },
    attrs: {
      "id": "invoice",
      "type": "text",
      "step": "any",
      "name": "invoice",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoice.invoiceLabel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.invoice, "invoiceLabel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "invoice.invoiceTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Total')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceTotal,
      expression: "form.invoiceTotal"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('invoice.invoiceTotal')
    },
    attrs: {
      "id": "invoice.invoiceTotal",
      "type": "text",
      "step": "any",
      "name": "invoice.invoiceTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.invoiceTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "invoiceTotal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoice.invoiceTotal"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "dueAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Due')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dueAmount,
      expression: "form.dueAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('dueAmount')
    },
    attrs: {
      "id": "dueAmount",
      "type": "text",
      "name": "dueAmount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.dueAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "dueAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "dueAmount"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.accounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _vm.isPaymentActive ? _c('small', {
    staticClass: "text-muted ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t('Cannot be changed when payment is active')) + ")")]) : _vm._e()]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account'),
      "disabled": _vm.isPaymentActive
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
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "chequeNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Cheque No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chequeNo,
      expression: "form.chequeNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('chequeNo')
    },
    attrs: {
      "id": "chequeNo",
      "type": "text",
      "step": "any",
      "name": "chequeNo",
      "placeholder": _vm.$t('Enter a cheque number'),
      "disabled": _vm.isPaymentActive
    },
    domProps: {
      "value": _vm.form.chequeNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "chequeNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chequeNo"
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
      "placeholder": _vm.$t('Enter a receipt no'),
      "disabled": _vm.isPaymentActive
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
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _vm.isPaymentActive ? _c('small', {
    staticClass: "text-muted ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t('Cannot be changed when payment is active')) + ")")]) : _vm._e()]), _vm._v(" "), _c('input', {
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
      "max": _vm.form.maxAmount,
      "min": _vm.form.minAmount,
      "placeholder": _vm.$t('Enter an amount'),
      "disabled": _vm.isPaymentActive
    },
    domProps: {
      "value": _vm.form.paidAmount
    },
    on: {
      "change": _vm.calculateDue,
      "keyup": _vm.calculateDue,
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Date')) + "\n                  "), _vm.isPaymentActive ? _c('small', {
    staticClass: "text-info ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t('Only editable field when payment is active')) + ")")]) : _vm._e()]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentDate,
      expression: "form.paymentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentDate')
    },
    attrs: {
      "id": "paymentDate",
      "type": "date",
      "name": "paymentDate"
    },
    domProps: {
      "value": _vm.form.paymentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')) + "\n                  "), _vm.isPaymentActive ? _c('small', {
    staticClass: "text-muted ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t('Cannot be changed when payment is active')) + ")")]) : _vm.form.invoice && _vm.form.invoice.status === 0 ? _c('small', {
    staticClass: "text-muted ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t('Cannot be changed when invoice is inactive')) + ")")]) : _vm._e()]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.status,
      expression: "form.status",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status",
      "disabled": _vm.form.invoice && _vm.form.invoice.status === 0 || _vm.isPaymentActive
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return _vm._n(val);
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [!_vm.form.invoice || _vm.form.invoice.status === 1 ? _c('option', {
    domProps: {
      "value": 1
    }
  }, [_vm._v(_vm._s(_vm.$t('Active')))]) : _vm._e(), _vm._v(" "), _c('option', {
    domProps: {
      "value": 0
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "text-info"
  }, [_vm._v("Debug: Status=" + _vm._s(_vm.form.status) + ", isPaymentActive=" + _vm._s(_vm.isPaymentActive) + ", invoiceStatus=" + _vm._s(_vm.form.invoice ? _vm.form.invoice.status : 'N/A'))])], 1)]), _vm._v(" "), _c('div', {
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
      "placeholder": _vm.$t('Write your note here!'),
      "disabled": _vm.isPaymentActive
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
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=script&lang=js
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
      title: this.$t('Edit Client Invoice Payment')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Payment',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Payments',
        url: ''
      }, {
        name: 'Invoice Payments',
        url: 'invoicePayments.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        client: '',
        invoice: '',
        invoiceTotal: 0,
        dueAmount: 0,
        account: '',
        paidAmount: '',
        maxAmount: 0,
        minAmount: 0,
        previousPaidAmount: 0,
        chequeNo: '',
        receiptNo: '',
        paymentDate: '',
        paymentType: '',
        note: '',
        status: 1
      }),
      accounts: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])), {}, {
    // Check if payment status is active
    isPaymentActive: function isPaymentActive() {
      return this.form.status == 1; // Use == instead of === to handle string/number comparison
    }
  }),
  created: function created() {
    this.getAccounts();
    this.getInvoicePayment();
  },
  mounted: function mounted() {
    var _this = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  methods: {
    // get accounts
    getAccounts: function getAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this2.accounts = data.data;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get invoice payment
    getInvoicePayment: function getInvoicePayment() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/payments/invoice/' + _this3.$route.params.slug);
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this3.form.invoice = data.data.invoice;
              _this3.form.invoiceTotal = data.data.invoice.subTotal + data.data.invoice.tax + data.data.invoice.transport - data.data.invoice.discount - data.data.costOfReturn;
              _this3.form.client = data.data.client;
              _this3.form.account = data.data.account;
              _this3.form.paidAmount = data.data.amount;
              _this3.form.previousPaidAmount = data.data.amount;
              _this3.form.dueAmount = data.data.invoice.due;
              _this3.form.maxAmount = data.data.amount + data.data.invoice.due;
              _this3.form.minAmount = data.data.accountPayable > 0 ? data.data.amount : 1;
              _this3.form.chequeNo = data.data.transaction.cheque_no;
              _this3.form.receiptNo = data.data.transaction.receipt_no;
              _this3.form.paymentDate = data.data.date;
              _this3.form.note = data.data.note;
              _this3.form.status = parseInt(data.data.status); // Ensure status is a number

              // Check if payment is cancelled - redirect if so
              if (!(_this3.form.status === 2)) {
                _context2.n = 2;
                break;
              }
              _this3.$router.push({
                name: 'invoicePayments.index'
              });
              _this3.$toastr.error(_this3.$t('Cannot edit cancelled payment'));
              return _context2.a(2);
            case 2:
              // Set payment status based on invoice status if invoice is inactive
              if (data.data.invoice.status === 0) {
                _this3.form.status = 0;
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // calculate due
    calculateDue: function calculateDue() {
      var paid = Number(this.form.paidAmount);
      this.form.dueAmount = this.form.invoice.due + this.form.previousPaidAmount - paid;
    },
    // update payment
    updatePayment: function updatePayment() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this4.form.patch(window.location.origin + '/api/payments/invoice/' + _this4.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this4.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this4.$t('Invoice payment updated successfully')
                });
                _this4.$router.push({
                  name: 'invoicePayments.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Opps...something went wrong')
                });
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        invoice: this.form.invoice,
        invoiceTotal: this.form.invoiceTotal,
        amount: this.form.amount,
        paymentMethod: this.form.paymentMethod,
        reference: this.form.reference,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        sendSms: this.form.sendSms,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('invoicePaymentEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('invoicePaymentEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.invoice = data.invoice || this.form.invoice;
          this.form.invoiceTotal = data.invoiceTotal || this.form.invoiceTotal;
          this.form.amount = data.amount || this.form.amount;
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod;
          this.form.reference = data.reference || this.form.reference;
          this.form.date = data.date || this.form.date;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.sendSms = data.sendSms || this.form.sendSms;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('invoicePaymentEditTempData');
    }
  }
});
;// ./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const invoice_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=style&index=0&id=4a35a615&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_4a35a615_prod_scoped_true_lang_css = __webpack_require__(11511);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=style&index=0&id=4a35a615&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_4a35a615_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const invoice_editvue_type_style_index_0_id_4a35a615_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_4a35a615_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/payments/clients/invoice/edit.vue?vue&type=style&index=0&id=4a35a615&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/payments/clients/invoice/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  invoice_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4a35a615",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);