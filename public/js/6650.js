"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6650],{

/***/ 16650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=template&id=58335a2f&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-header"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-auto float-right ml-auto"
  }, [_vm.journalEntry && _vm.journalEntry.status === 'draft' ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/journal-entries/".concat(_vm.journalEntry.id, "/edit")
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Edit')) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.journalEntry && _vm.journalEntry.status === 'draft' ? _c('button', {
    staticClass: "btn btn-success ml-2",
    on: {
      "click": _vm.postEntry
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v(" " + _vm._s(_vm.$t('Post Entry')) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.journalEntry && _vm.journalEntry.status === 'posted' ? _c('button', {
    staticClass: "btn btn-warning ml-2",
    on: {
      "click": _vm.voidEntry
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" " + _vm._s(_vm.$t('Void Entry')) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "to": "/journal-entries"
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n            " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n          ")]], 2)], 1)])]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x text-primary"
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-3"
  }, [_vm._v(_vm._s(_vm.$t('Loading journal entry...')))])])])])]) : _vm.journalEntry ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h4', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Entry Information')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Entry Number')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.formatted_entry_number))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Status')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_c('span', {
    "class": _vm.getStatusBadgeClass(_vm.journalEntry.status)
  }, [_vm._v("\n                    " + _vm._s(_vm.journalEntry.formatted_status) + "\n                  ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Entry Date')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.journalEntry.entry_date)))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Reference')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.reference || 'N/A'))])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Description')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.description))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card mt-4"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h4', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Journal Entry Lines')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('GeneralTable', {
    attrs: {
      "columns": _vm.journalEntryLinesColumns,
      "rows": _vm.journalEntryLinesRows,
      "loading": _vm.loading,
      "wrapper-class": ""
    },
    scopedSlots: _vm._u([{
      key: "cell-chartOfAccount",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_c('strong', [_vm._v(_vm._s(row._raw.chart_of_account.code))]), _c('br'), _vm._v(" "), _c('small', [_vm._v(_vm._s(row._raw.chart_of_account.name))])];
      }
    }, {
      key: "cell-analyticalAccount",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [row && row._raw && row._raw.analytical_account ? _c('span', {
          staticClass: "text-muted"
        }, [_c('small', [row._raw.analytical_account.code ? _c('span', [_vm._v(_vm._s(row._raw.analytical_account.code) + " - ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(row._raw.analytical_account.name) + "\n                  ")])]) : row && row.analytical_account ? _c('span', {
          staticClass: "text-muted"
        }, [_c('small', [row.analytical_account.code ? _c('span', [_vm._v(_vm._s(row.analytical_account.code) + " - ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(row.analytical_account.name) + "\n                  ")])]) : _c('span', {
          staticClass: "text-muted"
        }, [_vm._v("-")])];
      }
    }, {
      key: "cell-debitAmount",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [row._raw.debit_amount > 0 ? _c('span', {
          staticClass: "text-success"
        }, [_c('CurrencyDisplay', {
          attrs: {
            "amount": row._raw.debit_amount,
            "disable-rtl": true
          }
        })], 1) : _c('span', [_vm._v("-")])];
      }
    }, {
      key: "cell-creditAmount",
      fn: function fn(_ref4) {
        var row = _ref4.row;
        return [row._raw.credit_amount > 0 ? _c('span', {
          staticClass: "text-danger"
        }, [_c('CurrencyDisplay', {
          attrs: {
            "amount": row._raw.credit_amount,
            "disable-rtl": true
          }
        })], 1) : _c('span', [_vm._v("-")])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h4', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Summary')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Total Debit')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext text-success"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.journalEntry.total_debit,
      "disable-rtl": true
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Total Credit')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext text-danger"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.journalEntry.total_credit,
      "disable-rtl": true
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Balance Status')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_c('span', {
    "class": _vm.getBalanceStatusClass()
  }, [_vm._v("\n                    " + _vm._s(_vm.getBalanceStatusText()) + "\n                  ")])])])])]), _vm._v(" "), !_vm.journalEntry.is_balanced ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Balance Difference')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext text-danger"
  }, [_c('CurrencyDisplay', {
    attrs: {
      "amount": _vm.journalEntry.balance_difference,
      "disable-rtl": true
    }
  })], 1)])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card mt-4"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h4', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Audit Trail')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Created By')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.creator ? _vm.journalEntry.creator.name : '-'))])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Created At')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.journalEntry.created_at)))])])])]), _vm._v(" "), _vm.journalEntry.posted_by ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Posted By')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.poster ? _vm.journalEntry.poster.name : '-'))])])])]) : _vm._e(), _vm._v(" "), _vm.journalEntry.posted_at ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Posted At')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.journalEntry.posted_at)))])])])]) : _vm._e(), _vm._v(" "), _vm.journalEntry.voided_by ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Voided By')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.voider ? _vm.journalEntry.voider.name : '-'))])])])]) : _vm._e(), _vm._v(" "), _vm.journalEntry.voided_at ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Voided At')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.journalEntry.voided_at)))])])])]) : _vm._e(), _vm._v(" "), _vm.journalEntry.void_reason ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Void Reason')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "form-control-plaintext"
  }, [_vm._v(_vm._s(_vm.journalEntry.void_reason))])])])]) : _vm._e()])])])]) : _vm.error ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Back to Journal Entries')) + "\n          ")])], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(33107);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/* harmony default export */ const showvue_type_script_lang_js = ({
  name: 'ShowJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Journal Entry Details')
    };
  },
  components: {
    CurrencyDisplay: function CurrencyDisplay() {
      return __webpack_require__.e(/* import() */ 5448).then(__webpack_require__.bind(__webpack_require__, 75448));
    },
    GeneralTable: GeneralTable["default"]
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Journal Entry Details',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Journal Entries',
        url: 'journal-entries.index'
      }, {
        name: 'View',
        url: ''
      }],
      journalEntry: null,
      loading: true
    };
  },
  computed: {
    sortedLines: function sortedLines() {
      if (!this.journalEntry || !this.journalEntry.lines) {
        return [];
      }

      // Sort lines: debits first (debit_amount > 0), then credits (credit_amount > 0)
      return _toConsumableArray(this.journalEntry.lines).sort(function (a, b) {
        // If both are debits or both are credits, maintain original order
        var aIsDebit = a.debit_amount > 0;
        var bIsDebit = b.debit_amount > 0;
        if (aIsDebit && !bIsDebit) return -1; // a is debit, b is credit - a comes first
        if (!aIsDebit && bIsDebit) return 1; // a is credit, b is debit - b comes first

        // If both are same type, maintain original order by line number
        return a.line_number - b.line_number;
      });
    },
    // Journal entry lines columns
    journalEntryLinesColumns: function journalEntryLinesColumns() {
      return [{
        key: "lineNumber",
        label: this.$t('Line Number'),
        align: "text-center"
      }, {
        key: "chartOfAccount",
        label: this.$t('Chart of Account'),
        align: "text-left"
      }, {
        key: "analyticalAccount",
        label: this.$t('Analytical Account'),
        align: "text-left"
      }, {
        key: "description",
        label: this.$t('Description'),
        align: "text-left"
      }, {
        key: "debitAmount",
        label: this.$t('Debit Amount'),
        align: "text-right"
      }, {
        key: "creditAmount",
        label: this.$t('Credit Amount'),
        align: "text-right"
      }];
    },
    // Journal entry lines rows
    journalEntryLinesRows: function journalEntryLinesRows() {
      if (!this.sortedLines || this.sortedLines.length === 0) return [];
      return this.sortedLines.map(function (line) {
        return {
          lineNumber: line.line_number,
          chartOfAccount: line,
          analyticalAccount: line,
          description: line.description || '-',
          debitAmount: line,
          creditAmount: line,
          _raw: line
        };
      });
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadJournalEntry();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    loadJournalEntry: function loadJournalEntry() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _this2.loading = true;
              _context2.n = 1;
              return _this2.$axios.get("/api/journal-entries/".concat(_this2.$route.params.id));
            case 1:
              response = _context2.v;
              _this2.journalEntry = response.data.data;

              // Debug: Check if analytical account data is present
              if (_this2.journalEntry && _this2.journalEntry.lines) {
                console.log('Journal Entry Lines:', _this2.journalEntry.lines.map(function (line) {
                  return {
                    id: line.id,
                    analytical_account_id: line.analytical_account_id,
                    has_analytical_account: !!line.analytical_account,
                    analytical_account: line.analytical_account
                  };
                }));
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('Error loading journal entry:', _t);
              window.toast.error(_this2.$t('Error loading journal entry'));
            case 3:
              _context2.p = 3;
              _this2.loading = false;
              return _context2.f(3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2, 3, 4]]);
      }))();
    },
    postEntry: function postEntry() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              sweetalert2_all_default().fire({
                title: _this3.$t('Are you sure?'),
                text: _this3.$t('Are you sure you want to post this journal entry?'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this3.$t('Confirm'),
                cancelButtonText: _this3.$t('Cancel')
              }).then(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(result) {
                  var _t2;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.p = _context3.n) {
                      case 0:
                        if (!result.value) {
                          _context3.n = 5;
                          break;
                        }
                        _context3.p = 1;
                        _context3.n = 2;
                        return _this3.$axios.post("/api/journal-entries/".concat(_this3.journalEntry.id, "/post"));
                      case 2:
                        window.toast.success(_this3.$t('Journal entry posted successfully'));
                        _context3.n = 3;
                        return _this3.loadJournalEntry();
                      case 3:
                        _context3.n = 5;
                        break;
                      case 4:
                        _context3.p = 4;
                        _t2 = _context3.v;
                        console.error('Error posting journal entry:', _t2);
                        window.toast.error(_this3.$t('Error posting journal entry'));
                      case 5:
                        return _context3.a(2);
                    }
                  }, _callee3, null, [[1, 4]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    voidEntry: function voidEntry() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              sweetalert2_all_default().fire({
                title: _this4.$t('Are you sure?'),
                text: _this4.$t('Are you sure you want to void this journal entry?'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this4.$t('Confirm'),
                cancelButtonText: _this4.$t('Cancel')
              }).then(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(result) {
                  var _t3;
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.p = _context5.n) {
                      case 0:
                        if (!result.value) {
                          _context5.n = 5;
                          break;
                        }
                        _context5.p = 1;
                        _context5.n = 2;
                        return _this4.$axios.post("/api/journal-entries/".concat(_this4.journalEntry.id, "/void"));
                      case 2:
                        window.toast.success(_this4.$t('Journal entry voided successfully'));
                        _context5.n = 3;
                        return _this4.loadJournalEntry();
                      case 3:
                        _context5.n = 5;
                        break;
                      case 4:
                        _context5.p = 4;
                        _t3 = _context5.v;
                        console.error('Error voiding journal entry:', _t3);
                        window.toast.error(_this4.$t('Error voiding journal entry'));
                      case 5:
                        return _context5.a(2);
                    }
                  }, _callee5, null, [[1, 4]]);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    formatDate: function formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatDateTime: function formatDateTime(dateTime) {
      return new Date(dateTime).toLocaleString();
    },
    formatCurrency: function formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    },
    getStatusBadgeClass: function getStatusBadgeClass(status) {
      var classes = {
        draft: 'badge badge-warning',
        posted: 'badge badge-success',
        "void": 'badge badge-danger'
      };
      return classes[status] || 'badge badge-secondary';
    },
    getBalanceStatusClass: function getBalanceStatusClass() {
      return this.journalEntry.is_balanced ? 'text-success' : 'text-danger';
    },
    getBalanceStatusText: function getBalanceStatusText() {
      return this.journalEntry.is_balanced ? this.$t('Balanced') : this.$t('Unbalanced');
    }
  }
});
;// ./resources/js/pages/journal-entries/show.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=58335a2f&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_58335a2f_prod_scoped_true_lang_css = __webpack_require__(72917);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=58335a2f&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_58335a2f_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_showvue_type_style_index_0_id_58335a2f_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_58335a2f_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=58335a2f&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/journal-entries/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  journal_entries_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "58335a2f",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 72917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-header[data-v-58335a2f]{margin-bottom:20px}.form-control-plaintext[data-v-58335a2f]{background:transparent;border:none;margin:0;padding:0}.table th[data-v-58335a2f]{background-color:#f8f9fa;font-weight:600}.badge[data-v-58335a2f]{font-size:.875em}.table-active[data-v-58335a2f]{background-color:#e9ecef!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);