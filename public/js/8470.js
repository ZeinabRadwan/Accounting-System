"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8470],{

/***/ 35374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-514e8639]{gap:10px}.header-buttons[data-v-514e8639]{margin-bottom:15px}.footer-buttons[data-v-514e8639]{display:flex;gap:10px}.footer-buttons .btn[data-v-514e8639]{margin-right:10px}.footer-buttons .btn[data-v-514e8639]:last-child{margin-right:0}.btn-group.c-w-100>.btn[data-v-514e8639]{border-radius:10px!important}.btn-group.c-w-100>.btn[data-v-514e8639]:first-child{border-bottom-right-radius:10px!important;border-top-right-radius:10px!important}.btn-group.c-w-100>.btn[data-v-514e8639]:last-child{border-bottom-left-radius:10px!important;border-top-left-radius:10px!important}.card[data-v-514e8639]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-514e8639]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-514e8639]{background:#f1f5fb!important}.btn-primary[data-v-514e8639]{background:#2ab930!important}.btn-primary[data-v-514e8639],.btn-secondary[data-v-514e8639]{border:none!important;border-radius:10px!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-514e8639]{background:#33a0d9!important}.btn-secondary[data-v-514e8639]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.table th[data-v-514e8639]{background-color:#f8f9fa;font-weight:600}.invalid-feedback[data-v-514e8639]{display:block}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 38470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=template&id=514e8639&scoped=true
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
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'journal-entries.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "title": "Save Temporarily"
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "card-body text-center"
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x text-primary"
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-3"
  }, [_vm._v(_vm._s(_vm.$t('Loading journal entry...')))])]) : _vm.journalEntry ? _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateJournalEntry.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Entry Date')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.entry_date,
      expression: "form.entry_date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.errors.entry_date
    },
    attrs: {
      "type": "date",
      "required": ""
    },
    domProps: {
      "value": _vm.form.entry_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "entry_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.entry_date ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    " + _vm._s(_vm.errors.entry_date[0]) + "\n                  ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Reference')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('Optional reference number')
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": ""
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
      "value": "draft"
    }
  }, [_vm._v(_vm._s(_vm.$t('Draft')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "posted"
    }
  }, [_vm._v(_vm._s(_vm.$t('Posted')))])]), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Status cannot be changed after creation')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Description')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.description,
      expression: "form.description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.errors.description
    },
    attrs: {
      "rows": "3",
      "placeholder": _vm.$t('Enter description for this journal entry'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.description ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    " + _vm._s(_vm.errors.description[0]) + "\n                  ")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header d-flex justify-content-between align-items-center"
  }, [_c('h5', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t('Journal Entry Lines')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addLine
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" " + _vm._s(_vm.$t('Add Line')) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm._l(_vm.form.lines, function (line, index) {
    return _c('div', {
      key: index,
      staticClass: "row mb-3"
    }, [_c('div', {
      staticClass: "col-md-3"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('Chart of Account')) + " "), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
      "class": {
        'is-invalid': _vm.errors["lines.".concat(index, ".chart_of_account_id")]
      },
      attrs: {
        "options": _vm.chartOfAccounts,
        "label": "name",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select a Chart of Account'),
        "required": ""
      },
      on: {
        "input": function input(value) {
          return _vm.onChartOfAccountChange(index, value);
        }
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
      }], null, true),
      model: {
        value: line.chart_of_account_id,
        callback: function callback($$v) {
          _vm.$set(line, "chart_of_account_id", $$v);
        },
        expression: "line.chart_of_account_id"
      }
    }), _vm._v(" "), _vm.errors["lines.".concat(index, ".chart_of_account_id")] ? _c('div', {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                            " + _vm._s(_vm.errors["lines.".concat(index, ".chart_of_account_id")][0]) + "\n                          ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('Debit Amount')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.debit_amount,
        expression: "line.debit_amount"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "step": "0.01",
        "min": "0",
        "placeholder": _vm.$t('Enter an amount')
      },
      domProps: {
        "value": line.debit_amount
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(line, "debit_amount", $event.target.value);
        }, function ($event) {
          return _vm.calculateLineAmount(index);
        }]
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('Credit Amount')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.credit_amount,
        expression: "line.credit_amount"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "step": "0.01",
        "min": "0",
        "placeholder": _vm.$t('Enter an amount')
      },
      domProps: {
        "value": line.credit_amount
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(line, "credit_amount", $event.target.value);
        }, function ($event) {
          return _vm.calculateLineAmount(index);
        }]
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.description,
        expression: "line.description"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": _vm.$t('Line description')
      },
      domProps: {
        "value": line.description
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(line, "description", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-1"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(" ")]), _vm._v(" "), _vm.form.lines.length > 2 ? _c('button', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeLine(index);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "alert",
    "class": _vm.getBalanceAlertClass()
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Balance Status')) + ":")]), _vm._v(" "), _vm.isBalanced ? _c('span', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t('Balanced')))]) : _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t('Unbalanced')))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('Total Debit')) + ":")]), _vm._v(" "), _c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.totalDebit
    }
  }), _vm._v(" |\n                          "), _c('strong', [_vm._v(_vm._s(_vm.$t('Total Credit')) + ":")]), _vm._v(" "), _c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.totalCredit
    }
  }), _vm._v(" "), !_vm.isBalanced ? _c('span', [_c('br'), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('Balance Difference')) + ":")]), _vm._v(" "), _c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.balanceDifference
    }
  })], 1) : _vm._e()], 1)])])], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": !_vm.isBalanced || _vm.saving
    }
  }, [_vm.saving ? _c('i', {
    staticClass: "fa fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fa fa-save"
  }), _vm._v("\n                    " + _vm._s(_vm.saving ? _vm.$t('Updating...') : _vm.$t('Update')) + "\n                  ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-secondary",
    attrs: {
      "to": "/journal-entries"
    }
  }, [_c('i', {
    staticClass: "fa fa-times"
  }), _vm._v(" " + _vm._s(_vm.$t('Cancel')) + "\n                  ")])], 1)])])])]) : _vm.error ? _c('div', {
    staticClass: "card-body text-center"
  }, [_c('i', {
    staticClass: "fa fa-exclamation-triangle fa-3x text-danger"
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-3"
  }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/journal-entries"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Back to Journal Entries')) + "\n          ")])], 1) : _vm._e()])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const editvue_type_script_lang_js = ({
  name: 'EditJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Journal Entry')
    };
  },
  components: {
    CurrencyDisplay: function CurrencyDisplay() {
      return __webpack_require__.e(/* import() */ 1134).then(__webpack_require__.bind(__webpack_require__, 61134));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Journal Entry',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Journal Entries',
        url: 'journal-entries.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      journalEntry: null,
      form: {
        entry_date: '',
        reference: '',
        description: '',
        status: 'draft',
        lines: []
      },
      chartOfAccounts: [],
      errors: {},
      loading: true,
      saving: false
    };
  },
  computed: {
    totalDebit: function totalDebit() {
      return this.form.lines.reduce(function (sum, line) {
        return sum + (parseFloat(line.debit_amount) || 0);
      }, 0);
    },
    totalCredit: function totalCredit() {
      return this.form.lines.reduce(function (sum, line) {
        return sum + (parseFloat(line.credit_amount) || 0);
      }, 0);
    },
    balanceDifference: function balanceDifference() {
      return Math.abs(this.totalDebit - this.totalCredit);
    },
    isBalanced: function isBalanced() {
      return this.balanceDifference === 0;
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return Promise.all([_this.loadJournalEntry(), _this.loadChartOfAccounts()]);
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this2.loadTemporaryData();
    });
  },
  methods: {
    loadJournalEntry: function loadJournalEntry() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _this3.loading = true;
              _context2.n = 1;
              return _this3.$axios.get("/api/journal-entries/".concat(_this3.$route.params.id));
            case 1:
              response = _context2.v;
              _this3.journalEntry = response.data.data;

              // Populate form with existing data
              _this3.form = {
                entry_date: _this3.journalEntry.entry_date,
                reference: _this3.journalEntry.reference || '',
                description: _this3.journalEntry.description,
                status: _this3.journalEntry.status,
                lines: _this3.journalEntry.lines.map(function (line) {
                  return {
                    chart_of_account_id: line.chart_of_account_id,
                    description: line.description || '',
                    reference: line.reference || '',
                    debit_amount: line.debit_amount > 0 ? line.debit_amount : '',
                    credit_amount: line.credit_amount > 0 ? line.credit_amount : '',
                    line_number: line.line_number
                  };
                })
              };
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error loading journal entry:', _t);
              window.toast.error('Error loading journal entry');
            case 3:
              _context2.p = 3;
              _this3.loading = false;
              return _context2.f(3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2, 3, 4]]);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this4.$axios.get('/api/journal-entries/chart-of-accounts');
            case 1:
              response = _context3.v;
              _this4.chartOfAccounts = response.data.data || [];
              console.log('Loaded chart of accounts:', _this4.chartOfAccounts);
              console.log('First account structure:', _this4.chartOfAccounts[0]);
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error loading chart of accounts:', _t2);
              window.toast.error('Error loading chart of accounts');
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    onChartOfAccountChange: function onChartOfAccountChange(index, value) {
      console.log("Chart of account changed for line ".concat(index, ":"), value);
      console.log("Line ".concat(index, " data:"), this.form.lines[index]);
    },
    addLine: function addLine() {
      var lineNumber = this.form.lines.length + 1;
      this.form.lines.push({
        chart_of_account_id: '',
        description: '',
        reference: '',
        debit_amount: '',
        credit_amount: '',
        line_number: lineNumber
      });
    },
    removeLine: function removeLine(index) {
      if (this.form.lines.length > 2) {
        this.form.lines.splice(index, 1);
        // Update line numbers
        this.form.lines.forEach(function (line, idx) {
          line.line_number = idx + 1;
        });
      }
    },
    calculateLineAmount: function calculateLineAmount(index) {
      var line = this.form.lines[index];
      if (parseFloat(line.debit_amount) > 0) {
        line.credit_amount = '';
      } else if (parseFloat(line.credit_amount) > 0) {
        line.debit_amount = '';
      }
    },
    getLineError: function getLineError(index, field) {
      if (this.errors.lines && this.errors.lines[index] && this.errors.lines[index][field]) {
        return this.errors.lines[index][field][0];
      }
      return null;
    },
    updateJournalEntry: function updateJournalEntry() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var data, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _this5.saving = true;
              _this5.errors = {};

              // Validate balance
              if (_this5.isBalanced) {
                _context4.n = 1;
                break;
              }
              window.toast.warning('Journal entry must be balanced');
              return _context4.a(2);
            case 1:
              // Prepare data
              data = _objectSpread(_objectSpread({}, _this5.form), {}, {
                lines: _this5.form.lines.map(function (line) {
                  return _objectSpread(_objectSpread({}, line), {}, {
                    debit_amount: parseFloat(line.debit_amount) || 0,
                    credit_amount: parseFloat(line.credit_amount) || 0
                  });
                })
              });
              _context4.n = 2;
              return _this5.$axios.put("/api/journal-entries/".concat(_this5.journalEntry.id), data);
            case 2:
              // Clear temporary data after successful save
              _this5.clearTemporaryData();
              window.toast.success('Journal entry updated successfully!');
              _this5.$router.push("/journal-entries/".concat(_this5.journalEntry.id));
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('Error updating journal entry:', _t3);
              if (_t3.response && _t3.response.data && _t3.response.data.errors) {
                _this5.errors = _t3.response.data.errors;
              } else {
                window.toast.error('Error updating journal entry');
              }
            case 4:
              _context4.p = 4;
              _this5.saving = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 3, 4, 5]]);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        entry_date: this.form.entry_date,
        reference: this.form.reference,
        description: this.form.description,
        status: this.form.status,
        lines: this.form.lines,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('journalEntryEditTempData', JSON.stringify(tempData));
      window.toast.success('Form saved temporarily');
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('journalEntryEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.entry_date = data.entry_date || this.form.entry_date;
          this.form.reference = data.reference || this.form.reference;
          this.form.description = data.description || this.form.description;
          this.form.status = data.status || this.form.status;
          this.form.lines = data.lines || this.form.lines;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('journalEntryEditTempData');
    },
    formatCurrency: function formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    },
    getBalanceAlertClass: function getBalanceAlertClass() {
      return this.isBalanced ? 'alert-success' : 'alert-warning';
    }
  }
});
;// ./resources/js/pages/journal-entries/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=514e8639&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_514e8639_prod_scoped_true_lang_css = __webpack_require__(35374);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=514e8639&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_514e8639_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_editvue_type_style_index_0_id_514e8639_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_514e8639_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=514e8639&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/journal-entries/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  journal_entries_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "514e8639",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);