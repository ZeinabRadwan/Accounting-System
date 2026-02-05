"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3601],{

/***/ 73601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/show.vue?vue&type=template&id=68fcd12c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row no-print mb-2"
  }, [_c('div', {
    staticClass: "w-100 text-right float-right"
  }, [_vm.allData ? _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export Table'),
      expression: "$t('Export Table')"
    }],
    staticClass: "btn btn-info",
    attrs: {
      "href": '/account-transactions/pdf/' + _vm.allData.slug
    }
  }, [_c('i', {
    staticClass: "fas fa-download"
  }), _vm._v(" " + _vm._s(_vm.$t("Download")) + "\n        ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'accounts.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n            " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n              " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n            ")]]], 2)], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "invoice p-3 mb-3 w-100"
  }, [_c('div', {
    staticClass: "row invoice-info"
  }, [_c('div', {
    staticClass: "col-sm-4 invoice-col"
  }, [_c('CompanyInfo')], 1), _vm._v(" "), _vm.allData ? _c('div', {
    staticClass: "col-sm-8 invoice-col float-right text-md-right"
  }, [_vm.allData.date ? _c('h5', [_vm._v("\n            " + _vm._s(_vm.$t("Account Details")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Bank Name")) + ":")]), _vm._v("\n          " + _vm._s(_vm.allData.bankName)), _c('br'), _vm._v(" "), _vm.allData.branchName ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Branch Name")) + ":")]), _vm._v("\n            " + _vm._s(_vm.allData.branchName)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.accountNumber ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Account Number")) + ":")]), _vm._v("\n            " + _vm._s(_vm.allData.accountNumber)), _c('br')]) : _vm._e(), _vm._v(" "), _vm.allData.accountNumber ? _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t("Created At")) + ":")]), _vm._v("\n            " + _vm._s(_vm._f("moment")(_vm.allData.date, "Do MMM, YYYY"))), _c('br')]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.pagination ? _c('div', {
    staticClass: "col-lg-3 col-6"
  }, [_c('div', {
    staticClass: "small-box bg-info"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h4', [_c('span', [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Total Transactions")))])]), _vm._v(" "), _vm._m(0)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-6"
  }, [_c('div', {
    staticClass: "small-box bg-success"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h4', [_vm._v(_vm._s(_vm.allData.totalCredits) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Credit Amount")))])]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-6"
  }, [_c('div', {
    staticClass: "small-box bg-secondary"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h4', [_vm._v(_vm._s(_vm.allData.totalDebits) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Debit Amount")))])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-6"
  }, [_c('div', {
    staticClass: "small-box bg-primary"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h4', [_vm._v(_vm._s(_vm.allData.availableBalance) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Available Balance")))])]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('GeneralTable', {
    attrs: {
      "columns": _vm.transactionsColumns,
      "rows": _vm.transactionsRows,
      "loading": _vm.loading,
      "wrapper-class": ""
    },
    scopedSlots: _vm._u([{
      key: "cell-date",
      fn: function fn(_ref) {
        var value = _ref.value;
        return [value ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(value, "Do MMM, YYYY")))]) : _vm._e()];
      }
    }, {
      key: "cell-credit",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [row._raw.type === 1 ? _c('span', [_vm._v(_vm._s(row._raw.amount) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])]) : _c('span', [_vm._v(_vm._s(0) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])];
      }
    }, {
      key: "cell-debit",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [row._raw.type === 1 ? _c('span', [_vm._v(_vm._s(0) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])]) : _c('span', [_vm._v(_vm._s(row._raw.amount) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])];
      }
    }, {
      key: "cell-balance",
      fn: function fn(_ref4) {
        var value = _ref4.value;
        return [_vm._v("\n              " + _vm._s(value) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.allData.length,
      expression: "allData.length"
    }],
    staticClass: "no-print callout callout-danger mt-4 w-100"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t("No transaction is available yet!")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("You haven't made any transactions using this account. After doing the transaction you will see the list here.")))])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fas fa-coins"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fas fa-sign-out-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fas fa-piggy-bank"
  })]);
}];

;// ./resources/js/pages/cashbook/accounts/show.vue?vue&type=template&id=68fcd12c

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(39173);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/show.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const showvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Account Transactions")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"]
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Account Transactions",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Accounts",
        url: "accounts.index"
      }, {
        name: "Transactions",
        url: ""
      }],
      query: "",
      allData: "",
      transactions: [],
      perPage: 10,
      totalCount: 0
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination"])), {}, {
    // Transactions columns
    transactionsColumns: function transactionsColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        align: "text-center"
      }, {
        key: "reason",
        label: this.$t("Info"),
        align: "text-left"
      }, {
        key: "date",
        label: this.$t("Date"),
        align: "text-center"
      }, {
        key: "credit",
        label: this.$t("Credit"),
        align: "text-center"
      }, {
        key: "debit",
        label: this.$t("Debit"),
        align: "text-center"
      }, {
        key: "balance",
        label: this.$t("Balance"),
        align: "text-center"
      }];
    },
    // Transactions rows
    transactionsRows: function transactionsRows() {
      if (!this.transactions || this.transactions.length === 0) return [];
      return this.transactions.map(function (transaction, index) {
        return {
          index: index + 1,
          reason: transaction.reason,
          date: transaction.transactionDate,
          credit: transaction,
          debit: transaction,
          balance: transaction.balance,
          _raw: transaction
        };
      });
    }
  }),
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getTransactions();
      } else {
        this.searchTransactions();
      }
    }
  },
  created: function created() {
    this.getAccount();
    this.getTransactions();
  },
  methods: {
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getTransactions() : this.searchTransactions();
    },
    // get the account
    getAccount: function getAccount() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + "/api/accounts/" + _this.$route.params.slug);
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.allData = data.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get the supplier lc
    getTransactions: function getTransactions() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get2, data, totalBalance;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.$store.state.operations.loading = true;
              _context2.next = 3;
              return axios_default().get(window.location.origin + "/api/accounts/transactions/" + _this2.$route.params.slug);
            case 3:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              totalBalance = 0;
              _this2.transactions = data.data.map(function (transaction) {
                totalBalance = transaction.type == 0 ? totalBalance - transaction.amount : totalBalance + transaction.amount; // Debit subtracts, Credit adds
                return _objectSpread(_objectSpread({}, transaction), {}, {
                  balance: totalBalance
                });
              });
              _this2.totalCount = _this2.transactions.length;
              _this2.$store.state.operations.loading = false;
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // search lc
    searchTransactions: function searchTransactions() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.$store.state.operations.loading = true;
              _context3.next = 3;
              return _this3.$store.dispatch("operations/searchData", {
                term: _this3.query,
                path: "/api/accounts/transactions/" + _this3.$route.params.slug + "/search",
                currentPage: _this3.pagination.current_page + "&perPage=" + _this3.perPage
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.query === "" ? _this4.getTransactions() : _this4.searchTransactions();
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // reset purchase pagination
    resetPagination: function resetPagination() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.pagination.current_page = 1;
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // reload purchases after search
    reload: function reload() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this6.query = "";
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // print
    printWindow: function printWindow() {
      window.print();
    }
  }
});
;// ./resources/js/pages/cashbook/accounts/show.vue?vue&type=script&lang=js
 /* harmony default export */ const accounts_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cashbook/accounts/show.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  accounts_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);