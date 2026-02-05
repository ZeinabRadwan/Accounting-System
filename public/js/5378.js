"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5378],{

/***/ 15378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ debit_notes)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/debit-notes/index.vue?vue&type=template&id=6f3ffeb6
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row d-fex",
    staticStyle: {
      "justify-content": "flex-end"
    }
  }, [_c('div', {
    staticClass: "col-6 col-xl-4 mb-2"
  }, [_c('search', {
    on: {
      "reset-pagination": function resetPagination($event) {
        return _vm.resetPagination();
      },
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-xl-6 col-3 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
    }],
    staticClass: "btn btn-success refresh-btn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _vm.$can('purchase-return-create') ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'debitNotes.create'
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Create")) + "\n                  "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3"
  }, [_c('GeneralTable', {
    attrs: {
      "columns": _vm.columns,
      "rows": _vm.rowsWithIndex,
      "loading": _vm.loading,
      "table-id": "",
      "wrapper-class": "",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-debitNoteNo",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_vm.$can('purchase-return-view') ? _c('router-link', {
          attrs: {
            "to": {
              name: 'debitNotes.show',
              params: {
                slug: row.slug
              }
            }
          }
        }, [_vm._v("\n                  " + _vm._s(row.debitNoteNo) + "\n                ")]) : _c('span', [_vm._v(_vm._s(row.debitNoteNo))])];
      }
    }, {
      key: "cell-purchaseNo",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [_vm._v("\n                " + _vm._s(row.purchaseNo) + "\n              ")];
      }
    }, {
      key: "cell-date",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [row.date ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(row.date, "Do MMM, YYYY")))]) : _vm._e()];
      }
    }, {
      key: "cell-discountAmount",
      fn: function fn(_ref4) {
        var row = _ref4.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.discountAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-taxAmount",
      fn: function fn(_ref5) {
        var row = _ref5.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.taxAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-totalAmount",
      fn: function fn(_ref6) {
        var row = _ref6.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.totalAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-journalEntry",
      fn: function fn(_ref7) {
        var row = _ref7.row;
        return [row.journalEntry ? _c('span', [_c('router-link', {
          staticClass: "badge bg-info text-white",
          staticStyle: {
            "text-decoration": "none"
          },
          attrs: {
            "to": {
              name: 'journal-entries.show',
              params: {
                id: row.journalEntry.id
              }
            }
          }
        }, [_vm._v("\n                    " + _vm._s(row.journalEntry.entry_number || '#' + row.journalEntry.id) + "\n                  ")])], 1) : _c('span', {
          staticClass: "text-muted"
        }, [_vm._v("-")])];
      }
    }, {
      key: "actions",
      fn: function fn(_ref8) {
        var row = _ref8.row;
        return [_vm.$can('purchase-return-view') ? _c('router-link', {
          staticClass: "btn btn-sm btn-info",
          attrs: {
            "to": {
              name: 'debitNotes.show',
              params: {
                slug: row.slug
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        })]) : _vm._e()];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.updatePerPager]
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])])])]), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(39173);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/purchases/debit-notes/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const debit_notesvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Debit Note")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"]
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Purchases",
        url: ""
      }, {
        name: "",
        url: ""
      }],
      perPage: 10,
      query: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo"])), {}, {
    columns: function columns() {
      return [{
        key: "index",
        label: this.$t("#"),
        sortable: false
      }, {
        key: "debitNoteNo",
        label: this.$t("Debit Note No")
      }, {
        key: "purchaseNo",
        label: this.$t("Reference Purchase Invoice")
      }, {
        key: "supplierName",
        label: this.$t("Supplier")
      }, {
        key: "date",
        label: this.$t("Date")
      }, {
        key: "discountAmount",
        label: this.$t("Discount Amount")
      }, {
        key: "taxAmount",
        label: this.$t("Tax (15%)")
      }, {
        key: "totalAmount",
        label: this.$t("Total")
      }, {
        key: "journalEntry",
        label: this.$t("Journal Entry"),
        sortable: false
      }];
    },
    rowsWithIndex: function rowsWithIndex() {
      var pagination = this.pagination || {};
      return (this.items || []).map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: pagination.current_page > 1 ? pagination.per_page * (pagination.current_page - 1) + (index + 1) : index + 1
        });
      });
    }
  }),
  watch: {
    query: function query(val) {
      this.pagination && (this.pagination.current_page = 1);
      this.getData();
    }
  },
  created: function created() {
    this.breadcrumbsCurrent = this.$t("Debit Note");
    this.breadcrumbs[1].name = this.$t("Purchases");
    this.breadcrumbs[2].name = this.$t("Debit Note");
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var currentPage, term;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.$store.state.operations.loading = true;
              currentPage = _this.pagination ? _this.pagination.current_page : 1;
              term = _this.query ? "&term=" + encodeURIComponent(_this.query) : "";
              _context.next = 5;
              return _this.$store.dispatch("operations/fetchData", {
                path: "/api/debit-notes?page=",
                currentPage: currentPage + "&perPage=" + _this.perPage + term
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    paginate: function paginate() {
      this.getData();
    },
    resetPagination: function resetPagination() {
      if (this.pagination) this.pagination.current_page = 1;
    },
    updatePerPager: function updatePerPager() {
      if (this.pagination) this.pagination.current_page = 1;
      this.getData();
    },
    refreshTable: function refreshTable() {
      this.query = "";
      this.getData();
    },
    reload: function reload() {
      this.getData();
    },
    formatCurrency: function formatCurrency(amount) {
      var n = Number(amount);
      if (isNaN(n)) return "0.00";
      return this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + " " + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
});
;// ./resources/js/pages/purchases/debit-notes/index.vue?vue&type=script&lang=js
 /* harmony default export */ const purchases_debit_notesvue_type_script_lang_js = (debit_notesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/purchases/debit-notes/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  purchases_debit_notesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const debit_notes = (component.exports);

/***/ })

}]);