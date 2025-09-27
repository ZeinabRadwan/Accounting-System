"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1128],{

/***/ 9918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-f55cd0ee]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-f55cd0ee]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-f55cd0ee]{padding:1.25rem}.card-footer[data-v-f55cd0ee]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-f55cd0ee]{background:#f1f5fb!important;border:1px solid #e5e7eb;border-radius:10px;font-size:14px;padding:10px 16px}.form-control[data-v-f55cd0ee]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-f55cd0ee]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.required[data-v-f55cd0ee]{color:#dc3545;font-weight:700}.btn-primary[data-v-f55cd0ee]{background:#2ab930!important;border:none!important;border-radius:10px!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-f55cd0ee]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-f55cd0ee]{background:#6c757d!important;border:none!important;border-radius:10px!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-f55cd0ee]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.is-invalid[data-v-f55cd0ee]{border-color:#dc3545!important}textarea.form-control[data-v-f55cd0ee]{min-height:100px;resize:vertical}.v-select[data-v-f55cd0ee]{background:#f1f5fb!important}.v-select .vs__dropdown-toggle[data-v-f55cd0ee]{background:#f1f5fb!important;border:1px solid #e5e7eb!important;border-radius:10px!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-f55cd0ee]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-f55cd0ee]{border-color:#dc3545!important}.invalid-feedback[data-v-f55cd0ee]{color:#dc3545;font-size:12px;margin-top:5px}.d-block[data-v-f55cd0ee]{display:block!important}.text-muted[data-v-f55cd0ee]{color:#6c757d!important;font-size:12px}.row[data-v-f55cd0ee]{margin-bottom:1rem}@media (max-width:768px){.card-footer[data-v-f55cd0ee]{flex-direction:column;gap:10px}.card-footer .btn[data-v-f55cd0ee]{margin-right:0!important;width:100%}.card-footer div[data-v-f55cd0ee]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 88747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/balances/create.vue?vue&type=template&id=f55cd0ee&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
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
  })], 1), _vm._v(" "), _c('form', {
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
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Bank Account")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account') || _vm.bankAccountError
    },
    attrs: {
      "options": _vm.items,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select a bank account')
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
  }), _vm._v(" "), _vm.bankAccountError ? _c('div', {
    staticClass: "invalid-feedback d-block"
  }, [_vm._v("\n                  " + _vm._s(_vm.bankAccountError) + "\n                ")]) : _vm._e()], 1), _vm._v(" "), _vm.chartOfAccounts && _vm.chartOfAccounts.length > 0 ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "secondAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('secondAccount')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "name": "secondAccount",
      "placeholder": _vm.$t('Select account for journal entry')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('div', [_c('strong', [_vm._v(_vm._s(option.name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(option.code) + " - " + _vm._s(option.type))])])];
      }
    }], null, false, 2264099568),
    model: {
      value: _vm.form.secondAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "secondAccount", $$v);
      },
      expression: "form.secondAccount"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "secondAccount"
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "type"
    }
  }, [_vm._v(_vm._s(_vm.$t("Type")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('type')
    },
    attrs: {
      "id": "type"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Add Balance")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Remove Balance")) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "type"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.account ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "availableAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Available Balance")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.account.availableBalance,
      expression: "form.account.availableBalance"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "availableAmount",
      "type": "number",
      "step": "any",
      "name": "availableAmount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.account.availableBalance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.account, "availableBalance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")) + "\n                  "), _c('span', {
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
      "placeholder": _vm.$t('Enter an amount'),
      "max": _vm.form.type == 0 ? _vm.form.account.availableBalance : ''
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
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
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
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Active")) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Inactive")) + "\n                  ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer d-flex justify-content-between"
  }, [_c('router-link', {
    staticClass: "btn btn-secondary",
    attrs: {
      "to": {
        name: 'balances.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n            ")]), _vm._v(" "), _c('div', [_c('button', {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")]), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n              ")])], 1)], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/balances/create.vue?vue&type=script&lang=js
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
        name: "Cashbook",
        url: ""
      }, {
        name: "Adjustments",
        url: "balances.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        account: null,
        type: 1,
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        secondAccount: null
      }),
      loading: true,
      chartOfAccounts: [],
      bankAccountError: null
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  watch: {
    'form.account': function formAccount() {
      // Clear bank account error when user changes the account
      this.bankAccountError = null;
    }
  },
  created: function created() {
    this.getAccounts();
    this.getChartOfAccounts();
  },
  methods: {
    // get all accounts
    getAccounts: function getAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var defaultAccountSlug;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch("operations/allData", {
                path: "/api/all-accounts"
              });
            case 1:
              // assign default account
              if (_this.items && _this.items.length > 0) {
                defaultAccountSlug = _this.appInfo.defaultAccountSlug;
                _this.form.account = _this.items.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get chart of accounts
    getChartOfAccounts: function getChartOfAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _this2.$http.get('/api/accounts/chart-of-accounts');
            case 1:
              response = _context2.v;
              if (response.data && response.data.success) {
                _this2.chartOfAccounts = response.data.data || [];
              } else {
                _this2.chartOfAccounts = [];
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error loading chart of accounts:', _t);
              toast.fire({
                type: "error",
                title: _this2.$t("Failed to load chart of accounts")
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // save adjustment
    saveAdjustment: function saveAdjustment() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this3.form.secondAccount) {
                _context3.n = 1;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Please select a second account")
              });
              return _context3.a(2);
            case 1:
              _context3.n = 2;
              return _this3.form.post(window.location.origin + "/api/balances").then(function () {
                toast.fire({
                  type: "success",
                  title: _this3.$t("Adjustment added successfully")
                });
                _this3.$router.push({
                  name: "balances.index"
                });
              })["catch"](function (error) {
                var _error$response;
                // Display the specific error message from the server
                var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this3.$t("Opps...something went wrong");

                // Check if it's a bank account validation error
                if (errorMessage.includes("not connected to any Chart of Account")) {
                  _this3.bankAccountError = errorMessage;
                } else {
                  _this3.bankAccountError = null;
                }
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/cashbook/balances/create.vue?vue&type=script&lang=js
 /* harmony default export */ const balances_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/balances/create.vue?vue&type=style&index=0&id=f55cd0ee&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_f55cd0ee_prod_scoped_true_lang_css = __webpack_require__(9918);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/balances/create.vue?vue&type=style&index=0&id=f55cd0ee&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_f55cd0ee_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const balances_createvue_type_style_index_0_id_f55cd0ee_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_f55cd0ee_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/balances/create.vue?vue&type=style&index=0&id=f55cd0ee&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cashbook/balances/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  balances_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "f55cd0ee",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ })

}]);