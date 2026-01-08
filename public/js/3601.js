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
var GeneralTable = __webpack_require__(33107);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/show.vue?vue&type=script&lang=js
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
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/accounts/" + _this.$route.params.slug);
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.allData = data.data;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get the supplier lc
    getTransactions: function getTransactions() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data, totalBalance;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this2.$store.state.operations.loading = true;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/accounts/transactions/" + _this2.$route.params.slug);
            case 1:
              _yield$axios$get2 = _context2.v;
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
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // search lc
    searchTransactions: function searchTransactions() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this3.$store.state.operations.loading = true;
              _context3.n = 1;
              return _this3.$store.dispatch("operations/searchData", {
                term: _this3.query,
                path: "/api/accounts/transactions/" + _this3.$route.params.slug + "/search",
                currentPage: _this3.pagination.current_page + "&perPage=" + _this3.perPage
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this4.query === "" ? _this4.getTransactions() : _this4.searchTransactions();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // reset purchase pagination
    resetPagination: function resetPagination() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this5.pagination.current_page = 1;
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // reload purchases after search
    reload: function reload() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this6.query = "";
            case 1:
              return _context6.a(2);
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