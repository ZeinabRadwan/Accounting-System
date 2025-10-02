"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5701],{

/***/ 53270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-c7926484]{gap:10px}.header-buttons[data-v-c7926484]{margin-bottom:15px}.footer-buttons[data-v-c7926484]{display:flex;gap:10px}.footer-buttons .btn[data-v-c7926484]{margin-right:10px}.footer-buttons .btn[data-v-c7926484]:last-child{margin-right:0}.card[data-v-c7926484]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-c7926484]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-c7926484]{background:#fff!important}.btn-primary[data-v-c7926484]{background:#2ab930!important}.btn-primary[data-v-c7926484],.btn-secondary[data-v-c7926484]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-c7926484]{background:#33a0d9!important}.btn-secondary[data-v-c7926484]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.table th[data-v-c7926484]{background-color:#f8f9fa;font-weight:600}.invalid-feedback[data-v-c7926484]{display:block}.je-lines-table thead th[data-v-c7926484]{background-color:#f8f9fa;border-bottom:2px solid #e5e7eb;font-weight:600}.je-lines-table td[data-v-c7926484]{vertical-align:middle}.je-summary-row td[data-v-c7926484]{background:#fafbfc;border-top:2px solid #e5e7eb}.add-line-btn[data-v-c7926484]{border-radius:8px!important;padding:8px 14px!important}.je-lines-actions[data-v-c7926484]{padding:12px 16px}.table-responsive[data-v-c7926484]{overflow:visible}.v-select .vs__dropdown-menu[data-v-c7926484]{z-index:1050!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=template&id=c7926484&scoped=true
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
        name: 'journal-entries.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": "Update"
    },
    on: {
      "click": _vm.updateJournalEntry
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
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table je-lines-table mb-0"
  }, [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "width": "35%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    staticStyle: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Debit')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    staticStyle: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Credit')))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "25%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Actions')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.form.lines, function (line, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('v-select', {
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
    }, [_vm._v("\n                                " + _vm._s(_vm.errors["lines.".concat(index, ".chart_of_account_id")][0]) + "\n                              ")]) : _vm._e()], 1), _vm._v(" "), _c('td', {
      staticClass: "align-middle"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.debit_amount,
        expression: "line.debit_amount"
      }],
      staticClass: "form-control text-right",
      attrs: {
        "type": "number",
        "step": "0.01",
        "min": "0",
        "placeholder": _vm.$t('0.00')
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
    })]), _vm._v(" "), _c('td', {
      staticClass: "align-middle"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.credit_amount,
        expression: "line.credit_amount"
      }],
      staticClass: "form-control text-right",
      attrs: {
        "type": "number",
        "step": "0.01",
        "min": "0",
        "placeholder": _vm.$t('0.00')
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
    })]), _vm._v(" "), _c('td', {
      staticClass: "align-middle"
    }, [_c('input', {
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
    })]), _vm._v(" "), _c('td', {
      staticClass: "text-center align-middle"
    }, [_vm.form.lines.length > 2 ? _c('button', {
      staticClass: "btn btn-outline-danger btn-sm",
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
    })]) : _vm._e()])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "je-summary-row"
  }, [_c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Totals')) + ":")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.totalDebit
    }
  })], 1), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.totalCredit
    }
  })], 1), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('div', {
    "class": ['badge', _vm.isBalanced ? 'badge-success' : 'badge-warning']
  }, [_vm._v("\n                                " + _vm._s(_vm.isBalanced ? _vm.$t('Balanced') : _vm.$t('Unbalanced')) + "\n                                "), !_vm.isBalanced ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('Diff')) + ": "), _c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.balanceDifference
    }
  })], 1) : _vm._e()])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "je-lines-actions d-flex",
    "class": _vm.isRTL ? 'justify-content-start' : 'justify-content-end'
  }, [_c('button', {
    staticClass: "btn btn-primary add-line-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addLine
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" " + _vm._s(_vm.$t('Add Line')) + "\n                      ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
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

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
      return __webpack_require__.e(/* import() */ 150).then(__webpack_require__.bind(__webpack_require__, 90150));
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
    },
    isRTL: function isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([_this.loadJournalEntry(), _this.loadChartOfAccounts()]);
          case 2:
          case "end":
            return _context.stop();
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this3.loading = true;
              _context2.next = 4;
              return _this3.$axios.get("/api/journal-entries/".concat(_this3.$route.params.id));
            case 4:
              response = _context2.sent;
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
              _context2.next = 13;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error('Error loading journal entry:', _context2.t0);
              window.toast.error('Error loading journal entry');
            case 13:
              _context2.prev = 13;
              _this3.loading = false;
              return _context2.finish(13);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9, 13, 16]]);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.$axios.get('/api/journal-entries/chart-of-accounts');
            case 3:
              response = _context3.sent;
              _this4.chartOfAccounts = response.data.data || [];
              console.log('Loaded chart of accounts:', _this4.chartOfAccounts);
              console.log('First account structure:', _this4.chartOfAccounts[0]);
              _context3.next = 13;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error('Error loading chart of accounts:', _context3.t0);
              window.toast.error('Error loading chart of accounts');
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 9]]);
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, backendError, _error$response, _error$response2, _backendError;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _this5.saving = true;
              _this5.errors = {};

              // Validate balance
              if (_this5.isBalanced) {
                _context4.next = 6;
                break;
              }
              window.toast.warning('Journal entry must be balanced');
              return _context4.abrupt("return");
            case 6:
              // Prepare data
              data = _objectSpread(_objectSpread({}, _this5.form), {}, {
                lines: _this5.form.lines.map(function (line) {
                  return _objectSpread(_objectSpread({}, line), {}, {
                    debit_amount: parseFloat(line.debit_amount) || 0,
                    credit_amount: parseFloat(line.credit_amount) || 0
                  });
                })
              });
              _context4.next = 9;
              return _this5.$axios.put("/api/journal-entries/".concat(_this5.journalEntry.id), data);
            case 9:
              // Clear temporary data after successful save
              _this5.clearTemporaryData();
              window.toast.success('Journal entry updated successfully!');
              _this5.$router.push("/journal-entries/".concat(_this5.journalEntry.id));
              _context4.next = 18;
              break;
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              console.error('Error updating journal entry:', _context4.t0);
              if (_context4.t0.response && _context4.t0.response.data && _context4.t0.response.data.errors) {
                _this5.errors = _context4.t0.response.data.errors;
                backendError = _context4.t0.response.data.error || _context4.t0.response.data.message;
                if (backendError) {
                  window.toast.error(backendError);
                }
              } else {
                _backendError = (_context4.t0 === null || _context4.t0 === void 0 || (_error$response = _context4.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || (_context4.t0 === null || _context4.t0 === void 0 || (_error$response2 = _context4.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || 'Error updating journal entry';
                window.toast.error(_backendError);
              }
            case 18:
              _context4.prev = 18;
              _this5.saving = false;
              return _context4.finish(18);
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 14, 18, 21]]);
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
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=c7926484&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_c7926484_prod_scoped_true_lang_css = __webpack_require__(53270);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=c7926484&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_c7926484_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_editvue_type_style_index_0_id_c7926484_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_c7926484_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/edit.vue?vue&type=style&index=0&id=c7926484&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  journal_entries_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "c7926484",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);