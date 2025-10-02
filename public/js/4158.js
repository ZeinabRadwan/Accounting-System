"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4158],{

/***/ 34158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=template&id=03d81520&scoped=true
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
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Leave blank if no reference is needed')))])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('Posted')))])])])])]), _vm._v(" "), _c('div', {
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
    }, [_vm._v("\n                            " + _vm._s(_vm.errors["lines.".concat(index, ".chart_of_account_id")][0]) + "\n                          ")]) : _vm._e()], 1), _vm._v(" "), _c('td', {
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
    staticClass: "fa fa-save"
  }), _vm._v("\n                    " + _vm._s(_vm.loading ? _vm.$t('Saving...') : _vm.$t('Save')) + "\n                  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                  ")])])])])])])])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=script&lang=js
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
      return __webpack_require__.e(/* import() */ 150).then(__webpack_require__.bind(__webpack_require__, 90150));
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
        status: 'draft',
        lines: [{
          chart_of_account_id: '',
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 1
        }, {
          chart_of_account_id: '',
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 2
        }]
      },
      chartOfAccounts: [],
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
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadChartOfAccounts();
          case 1:
            return _context.a(2);
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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _this2.$axios.get('/api/journal-entries/chart-of-accounts');
            case 1:
              response = _context2.v;
              _this2.chartOfAccounts = response.data.data || [];
              console.log('Loaded chart of accounts:', _this2.chartOfAccounts);
              console.log('First account structure:', _this2.chartOfAccounts[0]);
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error loading chart of accounts:', _t);
              window.toast.error('Error loading chart of accounts');
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
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
    getBalanceAlertClass: function getBalanceAlertClass() {
      if (this.balanceDifference === 0) {
        return 'alert-success';
      } else {
        return 'alert-warning';
      }
    },
    saveJournalEntry: function saveJournalEntry() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var invalidLines, data, response, backendError, _error$response, _error$response2, _backendError, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _this3.loading = true;
              _this3.errors = {};

              // Validate balance
              if (_this3.isBalanced) {
                _context3.n = 1;
                break;
              }
              window.toast.warning('Journal entry must be balanced');
              return _context3.a(2);
            case 1:
              // Validate chart of account selections
              invalidLines = _this3.form.lines.filter(function (line) {
                return !line.chart_of_account_id;
              });
              if (!(invalidLines.length > 0)) {
                _context3.n = 2;
                break;
              }
              window.toast.error('Please select chart of accounts for all lines');
              return _context3.a(2);
            case 2:
              // Prepare data
              data = _objectSpread(_objectSpread({}, _this3.form), {}, {
                lines: _this3.form.lines.map(function (line) {
                  return _objectSpread(_objectSpread({}, line), {}, {
                    debit_amount: parseFloat(line.debit_amount) || 0,
                    credit_amount: parseFloat(line.credit_amount) || 0
                  });
                })
              }); // Debug: Log the data being sent
              console.log('Form data being sent:', data);
              console.log('Reference value:', data.reference);
              console.log('Reference type:', _typeof(data.reference));
              console.log('Chart of account IDs:', data.lines.map(function (line) {
                return line.chart_of_account_id;
              }));
              console.log('Original form lines:', _this3.form.lines);
              console.log('Chart of accounts array:', _this3.chartOfAccounts);
              _context3.n = 3;
              return _this3.$axios.post('/api/journal-entries', data);
            case 3:
              response = _context3.v;
              // Clear temporary data after successful save
              _this3.clearTemporaryData();

              // Show success message
              window.toast.success('Journal entry created successfully!');

              // Redirect to journal entries list
              _this3.$router.push('/journal-entries');
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t2 = _context3.v;
              console.error('Error creating journal entry:', _t2);
              if (_t2.response && _t2.response.data && _t2.response.data.errors) {
                _this3.errors = _t2.response.data.errors;
                // Prefer backend 'error' string if present
                backendError = _t2.response.data.error || _t2.response.data.message;
                if (backendError) {
                  window.toast.error(backendError);
                }
              } else {
                _backendError = (_t2 === null || _t2 === void 0 || (_error$response = _t2.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || (_t2 === null || _t2 === void 0 || (_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || 'Error creating journal entry';
                window.toast.error(_backendError);
              }
            case 5:
              _context3.p = 5;
              _this3.loading = false;
              return _context3.f(5);
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 4, 5, 6]]);
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
    resetForm: function resetForm() {
      this.form = {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        status: 'draft',
        lines: [{
          chart_of_account_id: '',
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 1
        }, {
          chart_of_account_id: '',
          description: '',
          reference: '',
          debit_amount: '',
          credit_amount: '',
          line_number: 2
        }]
      };
      this.errors = {};
    }
  }
});
;// ./resources/js/pages/journal-entries/create.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=03d81520&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_03d81520_prod_scoped_true_lang_css = __webpack_require__(50616);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=03d81520&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_03d81520_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_createvue_type_style_index_0_id_03d81520_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_03d81520_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/journal-entries/create.vue?vue&type=style&index=0&id=03d81520&prod&scoped=true&lang=css

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
  "03d81520",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 50616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-03d81520]{gap:10px}.header-buttons[data-v-03d81520]{margin-bottom:15px}.footer-buttons[data-v-03d81520]{display:flex;gap:10px}.footer-buttons .btn[data-v-03d81520]{margin-right:10px}.footer-buttons .btn[data-v-03d81520]:last-child{margin-right:0}.card[data-v-03d81520]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-03d81520]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-03d81520]{padding:1.25rem}.card-footer[data-v-03d81520]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-03d81520]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-03d81520]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-03d81520]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.text-danger[data-v-03d81520]{color:#dc3545!important;font-weight:700}.btn-primary[data-v-03d81520]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-03d81520]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-03d81520]:disabled{background:#6c757d!important;box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}.btn-secondary[data-v-03d81520]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-03d81520]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.btn-danger[data-v-03d81520]{background:#dc3545!important;border:none!important;border-radius:8px!important;color:#fff!important;font-weight:500;padding:8px 12px!important}.btn-danger[data-v-03d81520]:hover{background:#c82333!important;box-shadow:0 4px 8px rgba(220,53,69,.3);transform:translateY(-1px)}.is-invalid[data-v-03d81520]{border-color:#dc3545!important}textarea.form-control[data-v-03d81520]{min-height:100px;resize:vertical}.v-select[data-v-03d81520]{background:#fff!important}.v-select .vs__dropdown-toggle[data-v-03d81520]{background:#fff!important;border:1px solid #e5e7eb!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-03d81520]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-03d81520]{border-color:#dc3545!important}.alert[data-v-03d81520]{border:1px solid transparent;border-radius:10px;margin-bottom:16px;padding:12px 16px}.alert-success[data-v-03d81520]{background-color:#d4edda;border-color:#c3e6cb;color:#155724}.alert-warning[data-v-03d81520]{background-color:#fff3cd;border-color:#ffeaa7;color:#856404}.table th[data-v-03d81520]{background-color:#f8f9fa;border-bottom:2px solid #e5e7eb;color:#374151;font-weight:600;padding:12px 16px}.table td[data-v-03d81520]{border-bottom:1px solid #e5e7eb;padding:12px 16px;vertical-align:middle}.table tbody tr[data-v-03d81520]:hover{background-color:#f8f9fa}.invalid-feedback[data-v-03d81520]{color:#dc3545;display:block}.form-text[data-v-03d81520],.invalid-feedback[data-v-03d81520]{font-size:12px;margin-top:5px}.form-text[data-v-03d81520]{color:#6c757d}.row[data-v-03d81520]{margin-bottom:1rem}.je-lines-table thead th[data-v-03d81520]{background-color:#f8f9fa;border-bottom:2px solid #e5e7eb;font-weight:600}.je-lines-table td[data-v-03d81520]{vertical-align:middle}.je-summary-row td[data-v-03d81520]{background:#fafbfc;border-top:2px solid #e5e7eb}.add-line-btn[data-v-03d81520]{border-radius:8px!important;padding:8px 14px!important}.je-lines-actions[data-v-03d81520]{padding:12px 16px}.table-responsive[data-v-03d81520]{overflow:visible}.v-select .vs__dropdown-menu[data-v-03d81520]{z-index:1050!important}@media (max-width:768px){.card-footer[data-v-03d81520]{flex-direction:column;gap:10px}.card-footer .btn[data-v-03d81520]{margin-right:0!important;width:100%}.card-footer div[data-v-03d81520]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);