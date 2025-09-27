"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7241],{

/***/ 57241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=template&id=42711a23&scoped=true
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
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'expenses.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveExpense.apply(null, arguments);
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
      "for": "reason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Reason')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reason,
      expression: "form.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reason')
    },
    attrs: {
      "id": "reason",
      "type": "text",
      "name": "reason",
      "placeholder": _vm.$t('Enter a reason')
    },
    domProps: {
      "value": _vm.form.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reason"
    }
  })], 1), _vm._v(" "), _vm.items ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t('Category Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.items,
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts || [],
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select payment account')
    },
    on: {
      "input": _vm.updateBalance
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
    }]),
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
  }), _vm._v(" "), !_vm.accounts || _vm.accounts.length === 0 ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Loading payment accounts...')) + "\n                ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "availableBalance"
    }
  }, [_vm._v(_vm._s(_vm.$t('Available Balance')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.availableBalance,
      expression: "form.availableBalance"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('availableBalance')
    },
    attrs: {
      "id": "availableBalance",
      "type": "number",
      "step": "any",
      "name": "availableBalance",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.availableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "availableBalance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "availableBalance"
    }
  })], 1)]), _vm._v(" "), _vm.expenseAccounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "expenseAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Expense Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('expenseAccount')
    },
    attrs: {
      "options": _vm.expenseAccounts,
      "label": "label",
      "name": "expenseAccount",
      "placeholder": _vm.$t('Select expense account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('strong', [_vm._v(_vm._s(option.name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(option.code) + " - " + _vm._s(option.type))])];
      }
    }], null, false, 2338588828),
    model: {
      value: _vm.form.expenseAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "expenseAccount", $$v);
      },
      expression: "form.expenseAccount"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "expenseAccount"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t('This account will be debited for the expense')))])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Amount')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.amount,
      expression: "form.amount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('amount')
    },
    attrs: {
      "id": "amount",
      "type": "number",
      "step": "any",
      "name": "amount",
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.amount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "amount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
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
      "name": "chequeNo",
      "placeholder": _vm.$t('Enter a cheque number')
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
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "voucherNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Voucher No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.voucherNo,
      expression: "form.voucherNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('voucherNo')
    },
    attrs: {
      "id": "voucherNo",
      "type": "text",
      "name": "voucherNo",
      "placeholder": _vm.$t('Voucher No')
    },
    domProps: {
      "value": _vm.form.voucherNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "voucherNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "voucherNo"
    }
  })], 1)]), _vm._v(" "), _c('div', {
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
    staticClass: "row"
  }, [_c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
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
    staticClass: "form-group col-md-4"
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
  }) : _vm._e()])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])], 1);
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
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
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Expense')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Create Expense',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Expenses',
        url: 'expenses.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        reason: '',
        subCategory: '',
        account: '',
        expenseAccount: '',
        amount: '',
        chequeNo: '',
        voucherNo: '',
        availableBalance: 0,
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        image: ''
      }),
      url: null,
      accounts: '',
      expenseAccounts: ''
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])),
  created: function created() {
    this.getSubCategories();
    this.getAccounts();
    this.getExpenseAccounts();
    // Load app info if not already loaded
    if (!this.appInfo) {
      this.$store.dispatch('operations/fetchSettingData');
    }
  },
  methods: {
    // get all expense categories
    getSubCategories: function getSubCategories() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-expense-sub-categories'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get payment accounts (with available balance)
    getAccounts: function getAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, accountsData, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log('Loading payment accounts...');
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              console.log('API Response:', data);

              // Check if data is an array (direct collection) or has success/data structure
              accountsData = Array.isArray(data) ? data : data.data || data;
              if (accountsData && Array.isArray(accountsData)) {
                // Transform the accounts to match the expected format
                _this2.accounts = accountsData.map(function (account) {
                  return {
                    id: account.id,
                    label: account.label || "".concat(account.bankName, " [").concat(account.accountNumber, "]"),
                    name: account.bankName,
                    code: account.accountNumber,
                    // Use accountNumber as code
                    availableBalance: account.availableBalance || 0,
                    image: account.image || null
                  };
                });
                console.log('Transformed accounts:', _this2.accounts);

                // Set default account if available
                if (_this2.accounts && _this2.accounts.length > 0) {
                  _this2.updateBalance();
                }
              } else {
                console.warn('No accounts data found in response:', data);
                _this2.accounts = [];
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error loading payment accounts:', _t);
              _this2.accounts = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get expense accounts from routing settings
    getExpenseAccounts: function getExpenseAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/expense-accounts');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              if (data.success) {
                // Transform the accounts to match the expected format
                _this3.expenseAccounts = data.data.accounts.map(function (account) {
                  return {
                    id: account.id,
                    label: "".concat(account.name, " [").concat(account.code, "]"),
                    name: account.name,
                    code: account.code,
                    type: account.type
                  };
                });
              } else {
                console.warn('Expense account routing not configured:', data.message);
                _this3.expenseAccounts = [];
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error loading expense accounts:', _t2);
              _this3.expenseAccounts = [];
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // update available balance
    updateBalance: function updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
      return;
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this4 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this4.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        sweetalert2_all_default().fire(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'), 'error');
      }
    },
    // save expense
    saveExpense: function saveExpense() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var formData, _iterator, _step, _step$value, key, value;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(!_this5.form.account || !_this5.form.account.id)) {
                _context4.n = 1;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this5.$t('Please select a payment account')
              });
              return _context4.a(2);
            case 1:
              if (!(!_this5.form.expenseAccount || !_this5.form.expenseAccount.id)) {
                _context4.n = 2;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this5.$t('Please select an expense account')
              });
              return _context4.a(2);
            case 2:
              if (!(!_this5.form.subCategory || !_this5.form.subCategory.id)) {
                _context4.n = 3;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this5.$t('Please select a sub category')
              });
              return _context4.a(2);
            case 3:
              // Debug: Log the form data before sending
              console.log('Form data being sent:', {
                account: _this5.form.account,
                expenseAccount: _this5.form.expenseAccount,
                amount: _this5.form.amount,
                reason: _this5.form.reason,
                subCategory: _this5.form.subCategory
              });

              // Create a new form with properly formatted data
              formData = new FormData();
              formData.append('reason', _this5.form.reason);
              formData.append('subCategory[id]', _this5.form.subCategory.id);
              formData.append('subCategory[code]', _this5.form.subCategory.code);
              formData.append('account[id]', _this5.form.account.id);
              formData.append('account[availableBalance]', _this5.form.account.availableBalance);
              formData.append('expenseAccount[id]', _this5.form.expenseAccount.id);
              formData.append('amount', _this5.form.amount);
              formData.append('chequeNo', _this5.form.chequeNo || '');
              formData.append('voucherNo', _this5.form.voucherNo || '');
              formData.append('date', _this5.form.date);
              formData.append('note', _this5.form.note || '');
              formData.append('status', _this5.form.status);
              if (_this5.form.image) {
                formData.append('image', _this5.form.image);
              }

              // Debug: Log the form data being sent
              console.log('Form data being sent:');
              _iterator = _createForOfIteratorHelper(formData.entries());
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
                  console.log(key, ':', value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context4.n = 4;
              return axios_default().post(window.location.origin + '/api/expenses', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }).then(function (response) {
                if (response.data.success) {
                  toast.fire({
                    type: 'success',
                    title: _this5.$t('Expense added successfully')
                  });
                  _this5.$router.push({
                    name: 'expenses.index'
                  });
                } else {
                  toast.fire({
                    type: 'error',
                    title: _this5.$t('Error'),
                    text: response.data.message || _this5.$t('Opps...something went wrong')
                  });
                }
              })["catch"](function (error) {
                var _error$response, _error$response2, _error$response3;
                console.error('Error details:', (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
                if (((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 422 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.errors) {
                  // Handle validation errors
                  var errors = error.response.data.errors;
                  var errorMessage = _this5.$t('Validation errors:');
                  Object.keys(errors).forEach(function (field) {
                    errorMessage += "\n".concat(field, ": ").concat(errors[field].join(', '));
                  });
                  toast.fire({
                    type: 'error',
                    title: _this5.$t('Validation Error'),
                    text: errorMessage
                  });
                } else {
                  var _error$response4;
                  toast.fire({
                    type: 'error',
                    title: _this5.$t('Error'),
                    text: ((_error$response4 = error.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this5.$t('Opps...something went wrong')
                  });
                }
              });
            case 4:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    }
  }
});
;// ./resources/js/pages/expenses/create.vue?vue&type=script&lang=js
 /* harmony default export */ const expenses_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=42711a23&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_42711a23_prod_scoped_true_lang_css = __webpack_require__(70999);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=42711a23&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_42711a23_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const expenses_createvue_type_style_index_0_id_42711a23_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_42711a23_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/expenses/create.vue?vue&type=style&index=0&id=42711a23&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/expenses/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  expenses_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "42711a23",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 70999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-42711a23]{gap:10px}.btn-group.c-w-100>.btn[data-v-42711a23]{border-radius:10px!important}.btn-group.c-w-100>.btn[data-v-42711a23]:first-child{border-bottom-right-radius:10px!important;border-top-right-radius:10px!important}.btn-group.c-w-100>.btn[data-v-42711a23]:last-child{border-bottom-left-radius:10px!important;border-top-left-radius:10px!important}.card[data-v-42711a23]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-42711a23]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-42711a23]{padding:1.25rem}.card-footer[data-v-42711a23]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-42711a23]{background:#2ab930!important}.btn-primary[data-v-42711a23],.btn-secondary[data-v-42711a23]{border:none!important;border-radius:10px!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-42711a23]{background:#33a0d9!important}.btn-secondary[data-v-42711a23]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);