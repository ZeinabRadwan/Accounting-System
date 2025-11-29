"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[965],{

/***/ 30965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=template&id=2438005e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
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
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": "Save"
    },
    on: {
      "click": _vm.saveJournalEntry
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveJournalEntry.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
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
    staticClass: "col-md-3"
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
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Branch')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branch_id,
      expression: "form.branch_id"
    }],
    staticClass: "form-control",
    attrs: {
      "required": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "branch_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Branch')))]), _vm._v(" "), _vm._l(_vm.branches, function (branch) {
    return _c('option', {
      key: branch.id,
      domProps: {
        "value": branch.id
      }
    }, [_vm._v("\n                      " + _vm._s(branch.name) + "\n                    ")]);
  })], 2), _vm._v(" "), _vm.errors.branch_id ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    " + _vm._s(_vm.errors.branch_id[0]) + "\n                  ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Entry Number')))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": "",
      "placeholder": _vm.$t('Auto-generated')
    },
    domProps: {
      "value": _vm.nextEntryNumber
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Auto-generated entry number')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table je-lines-table mb-0"
  }, [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "width": "30%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Code & Name')))]), _vm._v(" "), _c('th', {
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
      "width": "20%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Cost Center')))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.$t('Statement')))]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "width": "5%"
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
          return [_c('div', [_c('strong', [_vm._v(_vm._s(code) + " - " + _vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
            staticClass: "text-muted"
          }, [_vm._v(_vm._s(type))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref2) {
          var name = _ref2.name,
            code = _ref2.code;
          return [_c('div', [_c('strong', [_vm._v(_vm._s(code) + " - " + _vm._s(name))])])];
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
    }, [_vm._v("\n                            " + _vm._s(_vm.errors["lines.".concat(index, ".chart_of_account_id")][0]) + "\n                          ")]) : _vm._e()], 1), _vm._v(" "), _c('td', {
      staticClass: "align-middle text-right"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.debit_amount,
        expression: "line.debit_amount"
      }],
      staticClass: "form-control text-right",
      staticStyle: {
        "text-align": "right"
      },
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
      staticClass: "align-middle text-right"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.credit_amount,
        expression: "line.credit_amount"
      }],
      staticClass: "form-control text-right",
      staticStyle: {
        "text-align": "right"
      },
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
    }, [_c('CostCenterSelect', {
      "class": {
        'is-invalid': _vm.errors["lines.".concat(index, ".cost_center_id")]
      },
      attrs: {
        "clearable": true,
        "placeholder": _vm.$t('Select Cost Center')
      },
      model: {
        value: line.cost_center_id,
        callback: function callback($$v) {
          _vm.$set(line, "cost_center_id", $$v);
        },
        expression: "line.cost_center_id"
      }
    }), _vm._v(" "), _vm.errors["lines.".concat(index, ".cost_center_id")] ? _c('div', {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                            " + _vm._s(_vm.errors["lines.".concat(index, ".cost_center_id")][0]) + "\n                          ")]) : _vm._e()], 1), _vm._v(" "), _c('td', {
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
        "type": "text"
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
  }, [_c('strong', [_vm._v(": " + _vm._s(_vm.$t('Totals')))])]), _vm._v(" "), _c('td', {
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
      "colspan": "3"
    }
  }, [_c('div', {
    "class": ['badge', _vm.isBalanced ? 'badge-success' : 'badge-warning']
  }, [_vm._v("\n                            " + _vm._s(_vm.isBalanced ? _vm.$t('Balanced') : _vm.$t('Unbalanced')) + "\n                            "), !_vm.isBalanced ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('Diff')) + ":\n                              "), _c('CurrencyDisplay', {
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
  }), _vm._v(" " + _vm._s(_vm.$t('Add Line')) + "\n                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Attachment')))]), _vm._v(" "), _c('input', {
    ref: "attachmentInput",
    staticClass: "form-control",
    attrs: {
      "type": "file",
      "accept": ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
    },
    on: {
      "change": _vm.onAttachmentChange
    }
  }), _vm._v(" "), _vm.attachmentFile ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.attachmentFile.name) + " (" + _vm._s(_vm.formatFileSize(_vm.attachmentFile.size)) + ")\n                  ")]) : _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Optional attachment file')) + "\n                  ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Notes')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.notes,
      expression: "form.notes"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "placeholder": _vm.$t('Additional notes')
    },
    domProps: {
      "value": _vm.form.notes
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "notes", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": !_vm.isBalanced || _vm.loading
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fa fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("\n                    " + _vm._s(_vm.loading ? _vm.$t('Saving...') : _vm.$t('Add')) + "\n                  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  }), _vm._v(" " + _vm._s(_vm.$t('Cancel')) + "\n                  ")])])])])])])])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const createvue_type_script_lang_js = ({
  name: 'CreateJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Journal Entry')
    };
  },
  components: {
    CurrencyDisplay: function CurrencyDisplay() {
      return __webpack_require__.e(/* import() */ 5448).then(__webpack_require__.bind(__webpack_require__, 75448));
    },
    CostCenterSelect: function CostCenterSelect() {
      return __webpack_require__.e(/* import() */ 5307).then(__webpack_require__.bind(__webpack_require__, 5307));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Create Journal Entry',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Journal Entries',
        url: 'journal-entries.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        branch_id: null,
        notes: '',
        attachment: '',
        status: 'draft',
        lines: [{
          chart_of_account_id: '',
          cost_center_id: null,
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 1
        }, {
          chart_of_account_id: '',
          cost_center_id: null,
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 2
        }]
      },
      chartOfAccounts: [],
      branches: [],
      currentBranch: null,
      nextEntryNumber: '',
      attachmentFile: null,
      errors: {},
      loading: false
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
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.loadChartOfAccounts();
          case 2:
            _context.next = 4;
            return _this.loadBranches();
          case 4:
            _context.next = 6;
            return _this.loadCurrentBranch();
          case 6:
            _context.next = 8;
            return _this.loadNextEntryNumber();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  },
  methods: {
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$$i18n, _this2$$store, locale, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Get current locale from i18n
              locale = ((_this2$$i18n = _this2.$i18n) === null || _this2$$i18n === void 0 ? void 0 : _this2$$i18n.locale) || ((_this2$$store = _this2.$store) === null || _this2$$store === void 0 || (_this2$$store = _this2$$store.getters) === null || _this2$$store === void 0 ? void 0 : _this2$$store['lang/locale']) || 'en';
              _context2.next = 4;
              return _this2.$axios.get('/api/journal-entries/chart-of-accounts', {
                params: {
                  locale: locale
                }
              });
            case 4:
              response = _context2.sent;
              _this2.chartOfAccounts = response.data.data || [];
              console.log('Loaded chart of accounts:', _this2.chartOfAccounts);
              console.log('First account structure:', _this2.chartOfAccounts[0]);
              _context2.next = 14;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error('Error loading chart of accounts:', _context2.t0);
              window.toast.error('Error loading chart of accounts');
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    loadBranches: function loadBranches() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var user, isSuperAdmin, _response$data, response, _response$data2, _response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              user = _this3.$store.getters['auth/user'];
              isSuperAdmin = user && Number(user.account_role) === 1;
              if (!isSuperAdmin) {
                _context3.next = 10;
                break;
              }
              _context3.next = 6;
              return _this3.$axios.get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 6:
              response = _context3.sent;
              _this3.branches = Array.isArray((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) ? response.data.data : [];
              _context3.next = 18;
              break;
            case 10:
              if (!(user && user.id)) {
                _context3.next = 17;
                break;
              }
              _context3.next = 13;
              return _this3.$axios.get("/api/users/".concat(user.id, "/branches"));
            case 13:
              _response = _context3.sent;
              _this3.branches = Array.isArray(_response.data) ? _response.data : ((_response$data2 = _response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data) || [];
              _context3.next = 18;
              break;
            case 17:
              _this3.branches = [];
            case 18:
              _context3.next = 24;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](0);
              console.error('Error loading branches:', _context3.t0);
              _this3.branches = [];
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 20]]);
      }))();
    },
    loadCurrentBranch: function loadCurrentBranch() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response, user, defaultBranch;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this4.$axios.get('/api/branches/current');
            case 3:
              response = _context4.sent;
              if (response.data && response.data.branch) {
                _this4.currentBranch = response.data.branch;
                _this4.form.branch_id = response.data.branch.id;
              }
              _context4.next = 12;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error('Error loading current branch:', _context4.t0);
              // Try to get from user
              user = _this4.$store.getters['auth/user'];
              if (user && user.default_branch_id) {
                // Find branch in loaded branches
                defaultBranch = _this4.branches.find(function (b) {
                  return b.id === user.default_branch_id;
                });
                if (defaultBranch) {
                  _this4.currentBranch = defaultBranch;
                  _this4.form.branch_id = defaultBranch.id;
                }
              } else if (_this4.branches.length > 0) {
                // Use first branch if no default
                _this4.currentBranch = _this4.branches[0];
                _this4.form.branch_id = _this4.branches[0].id;
              }
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    loadNextEntryNumber: function loadNextEntryNumber() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this5.$axios.get('/api/journal-entries/next-entry-number');
            case 3:
              response = _context5.sent;
              if (response.data && response.data.formatted_entry_number) {
                _this5.nextEntryNumber = response.data.formatted_entry_number;
              }
              _context5.next = 11;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.error('Error loading next entry number:', _context5.t0);
              _this5.nextEntryNumber = 'JE-1';
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
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
        cost_center_id: null,
        description: '',
        reference: '',
        debit_amount: '',
        credit_amount: '',
        line_number: lineNumber
      });
      // Scroll to the new line
      this.$nextTick(function () {
        var table = document.querySelector('.je-lines-table');
        if (table) {
          table.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
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
    getBalanceAlertClass: function getBalanceAlertClass() {
      if (this.balanceDifference === 0) {
        return 'alert-success';
      } else {
        return 'alert-warning';
      }
    },
    saveJournalEntry: function saveJournalEntry() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var invalidLines, invalidAmountLines, formData, _iterator, _step, _step$value, key, value, response, backendError, translatedError, _error$response, _error$response2, _backendError, _translatedError;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _this6.loading = true;
              _this6.errors = {};

              // Validate balance
              if (_this6.isBalanced) {
                _context6.next = 7;
                break;
              }
              window.toast.warning(_this6.$t('Journal entry must be balanced'));
              _this6.loading = false;
              return _context6.abrupt("return");
            case 7:
              if (!(!_this6.form.description || _this6.form.description.trim() === '')) {
                _context6.next = 12;
                break;
              }
              window.toast.error(_this6.$t('Description is required'));
              _this6.errors.description = [_this6.$t('Description is required')];
              _this6.loading = false;
              return _context6.abrupt("return");
            case 12:
              if (_this6.form.branch_id) {
                _context6.next = 17;
                break;
              }
              window.toast.error(_this6.$t('Branch is required'));
              _this6.errors.branch_id = [_this6.$t('Branch is required')];
              _this6.loading = false;
              return _context6.abrupt("return");
            case 17:
              // Validate chart of account selections
              invalidLines = _this6.form.lines.filter(function (line) {
                return !line.chart_of_account_id;
              });
              if (!(invalidLines.length > 0)) {
                _context6.next = 22;
                break;
              }
              window.toast.error(_this6.$t('Please select chart of accounts for all lines'));
              _this6.loading = false;
              return _context6.abrupt("return");
            case 22:
              // Validate that each line has either debit or credit
              invalidAmountLines = _this6.form.lines.filter(function (line) {
                var debit = parseFloat(line.debit_amount) || 0;
                var credit = parseFloat(line.credit_amount) || 0;
                return debit === 0 && credit === 0;
              });
              if (!(invalidAmountLines.length > 0)) {
                _context6.next = 27;
                break;
              }
              window.toast.error(_this6.$t('Each line must have either a debit or credit amount.'));
              _this6.loading = false;
              return _context6.abrupt("return");
            case 27:
              // Prepare data using FormData to support file upload
              formData = new FormData(); // Add form fields
              formData.append('entry_date', _this6.form.entry_date);
              formData.append('reference', _this6.form.reference || '');
              formData.append('description', _this6.form.description || '');
              formData.append('branch_id', _this6.form.branch_id);
              formData.append('notes', _this6.form.notes || '');
              formData.append('status', _this6.form.status || 'draft');

              // Add attachment file if exists
              if (_this6.attachmentFile) {
                formData.append('attachment', _this6.attachmentFile);
              }

              // Add lines as JSON string
              formData.append('lines', JSON.stringify(_this6.form.lines.map(function (line) {
                return {
                  chart_of_account_id: line.chart_of_account_id,
                  cost_center_id: line.cost_center_id || null,
                  description: line.description || '',
                  reference: line.reference || '',
                  debit_amount: parseFloat(line.debit_amount) || 0,
                  credit_amount: parseFloat(line.credit_amount) || 0,
                  line_number: line.line_number || 1
                };
              })));

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
              _context6.next = 41;
              return _this6.$axios.post('/api/journal-entries', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 41:
              response = _context6.sent;
              // Clear temporary data after successful save
              _this6.clearTemporaryData();

              // Redirect to journal entries list with success parameter
              // Success message will be shown in index page
              _this6.$router.push({
                path: '/journal-entries',
                query: {
                  created: 'success'
                }
              });
              _context6.next = 50;
              break;
            case 46:
              _context6.prev = 46;
              _context6.t0 = _context6["catch"](0);
              console.error('Error creating journal entry:', _context6.t0);
              if (_context6.t0.response && _context6.t0.response.data && _context6.t0.response.data.errors) {
                _this6.errors = _context6.t0.response.data.errors;
                // Prefer backend 'error' string if present
                backendError = _context6.t0.response.data.error || _context6.t0.response.data.message;
                if (backendError) {
                  // Translate the error message if it exists as a translation key
                  translatedError = _this6.$t(backendError);
                  window.toast.error(translatedError !== backendError ? translatedError : backendError);
                }
              } else {
                _backendError = (_context6.t0 === null || _context6.t0 === void 0 || (_error$response = _context6.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || (_context6.t0 === null || _context6.t0 === void 0 || (_error$response2 = _context6.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || 'Error creating journal entry'; // Translate the error message if it exists as a translation key
                _translatedError = _this6.$t(_backendError);
                window.toast.error(_translatedError !== _backendError ? _translatedError : _backendError);
              }
            case 50:
              _context6.prev = 50;
              _this6.loading = false;
              return _context6.finish(50);
            case 53:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 46, 50, 53]]);
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
      localStorage.setItem('journalEntryTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('journalEntryTempData');
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
      localStorage.removeItem('journalEntryTempData');
    },
    formatCurrency: function formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    },
    onAttachmentChange: function onAttachmentChange(event) {
      var file = event.target.files[0];
      if (!file) {
        this.attachmentFile = null;
        return;
      }

      // Validate file size (10MB = 10485760 bytes)
      var maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        window.toast.error(this.$t('File size must be less than 10 MB'));
        event.target.value = ''; // Clear the input
        this.attachmentFile = null;
        return;
      }
      this.attachmentFile = file;
    },
    formatFileSize: function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      var k = 1024;
      var sizes = ['Bytes', 'KB', 'MB', 'GB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    },
    resetForm: function resetForm() {
      var _this$currentBranch;
      this.form = {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        branch_id: ((_this$currentBranch = this.currentBranch) === null || _this$currentBranch === void 0 ? void 0 : _this$currentBranch.id) || null,
        notes: '',
        attachment: '',
        status: 'draft',
        lines: [{
          chart_of_account_id: '',
          cost_center_id: null,
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 1
        }, {
          chart_of_account_id: '',
          cost_center_id: null,
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 2
        }]
      };
      this.attachmentFile = null;
      if (this.$refs.attachmentInput) {
        this.$refs.attachmentInput.value = '';
      }
      this.errors = {};
      this.loadNextEntryNumber();
    }
  }
});
;// ./resources/js/pages/journal-entries/create.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=2438005e&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_2438005e_prod_scoped_true_lang_css = __webpack_require__(87530);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=2438005e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_2438005e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_createvue_type_style_index_0_id_2438005e_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_2438005e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=2438005e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/journal-entries/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  journal_entries_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2438005e",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 87530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2438005e]{gap:10px}.header-buttons[data-v-2438005e]{margin-bottom:15px}.footer-buttons[data-v-2438005e]{display:flex;gap:10px}.footer-buttons .btn[data-v-2438005e]{margin-right:10px}.footer-buttons .btn[data-v-2438005e]:last-child{margin-right:0}.card[data-v-2438005e]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-2438005e]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-2438005e]{padding:1.25rem}.card-footer[data-v-2438005e]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2438005e]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;line-height:1.5;padding:10px 16px}input.form-control[data-v-2438005e],select.form-control[data-v-2438005e]{box-sizing:border-box;height:42px!important;padding:10px 16px!important}input[type=date].form-control[data-v-2438005e],input[type=number].form-control[data-v-2438005e],input[type=text].form-control[data-v-2438005e],select.form-control[data-v-2438005e]{height:42px!important;line-height:1.5!important;padding:10px 16px!important}.form-control[data-v-2438005e]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-2438005e]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.text-danger[data-v-2438005e]{color:#dc3545!important;font-weight:700}.btn-primary[data-v-2438005e]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-2438005e]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-2438005e]:disabled{background:#6c757d!important;box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}.btn-secondary[data-v-2438005e]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-2438005e]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.btn-danger[data-v-2438005e]{background:#dc3545!important;border:none!important;border-radius:8px!important;color:#fff!important;font-weight:500;padding:8px 12px!important}.btn-danger[data-v-2438005e]:hover{background:#c82333!important;box-shadow:0 4px 8px rgba(220,53,69,.3);transform:translateY(-1px)}.is-invalid[data-v-2438005e]{border-color:#dc3545!important}textarea.form-control[data-v-2438005e]{min-height:100px;resize:vertical}.v-select[data-v-2438005e]{background:#fff!important}.v-select .vs__dropdown-toggle[data-v-2438005e]{background:#fff!important;border:1px solid #e5e7eb!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-2438005e]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-2438005e]{border-color:#dc3545!important}.alert[data-v-2438005e]{border:1px solid transparent;border-radius:10px;margin-bottom:16px;padding:12px 16px}.alert-success[data-v-2438005e]{background-color:#d4edda;border-color:#c3e6cb;color:#155724}.alert-warning[data-v-2438005e]{background-color:#fff3cd;border-color:#ffeaa7;color:#856404}.table th[data-v-2438005e]{background-color:#f8f9fa;border-bottom:2px solid #e5e7eb;color:#374151;font-weight:600;padding:12px 16px}.table td[data-v-2438005e]{border-bottom:1px solid #e5e7eb;padding:12px 16px;vertical-align:middle}.table tbody tr[data-v-2438005e]:hover{background-color:#f8f9fa}.invalid-feedback[data-v-2438005e]{color:#dc3545;display:block}.form-text[data-v-2438005e],.invalid-feedback[data-v-2438005e]{font-size:12px;margin-top:5px}.form-text[data-v-2438005e]{color:#6c757d}.row[data-v-2438005e]{margin-bottom:1rem}.je-lines-table[data-v-2438005e]{border-collapse:collapse;width:100%}.je-lines-table thead th[data-v-2438005e]{background-color:#f8f9fa;border-bottom:2px solid #e5e7eb;font-weight:600;padding:12px 16px;text-align:left}[dir=rtl] .je-lines-table thead th[data-v-2438005e]{text-align:right}.je-lines-table thead th.text-right[data-v-2438005e],[dir=rtl] .je-lines-table thead th.text-right[data-v-2438005e]{text-align:right!important}.je-lines-table thead th.text-center[data-v-2438005e]{text-align:center!important}.je-lines-table td[data-v-2438005e]{padding:12px 16px;text-align:left;vertical-align:middle}[dir=rtl] .je-lines-table td[data-v-2438005e]{text-align:right}.je-lines-table td.text-right[data-v-2438005e],[dir=rtl] .je-lines-table td.text-right[data-v-2438005e]{direction:ltr;text-align:right!important}.je-lines-table td.text-center[data-v-2438005e]{text-align:center!important}.je-lines-table .form-control[data-v-2438005e]{text-align:left}[dir=rtl] .je-lines-table .form-control[data-v-2438005e]{text-align:right}.je-lines-table .form-control.text-right[data-v-2438005e],[dir=rtl] .je-lines-table .form-control.text-right[data-v-2438005e]{direction:ltr!important;text-align:right!important}.je-summary-row td[data-v-2438005e]{background:#fafbfc;border-top:2px solid #e5e7eb}.add-line-btn[data-v-2438005e]{border-radius:8px!important;padding:8px 14px!important}.je-lines-actions[data-v-2438005e]{padding:12px 16px}.table-responsive[data-v-2438005e]{overflow:visible}.v-select .vs__dropdown-menu[data-v-2438005e]{z-index:1050!important}@media (max-width:768px){.card-footer[data-v-2438005e]{flex-direction:column;gap:10px}.card-footer .btn[data-v-2438005e]{margin-right:0!important;width:100%}.card-footer div[data-v-2438005e]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);