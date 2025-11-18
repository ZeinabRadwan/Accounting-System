"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7520],{

/***/ 42758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ domains)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domains/index.vue?vue&type=template&id=87ca22e6
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
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Domain Management")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print Table'),
      expression: "$t('Print Table')"
    }],
    staticClass: "btn btn-info",
    on: {
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Domain')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Fallback')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Primary')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Action')) + "\n                  ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                    ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.domain))]), _vm._v(" "), _c('td', [data.is_domain ? _c('span', [_vm._v(" Domain ")]) : _c('span', [_vm._v(" Sub Domain ")])]), _vm._v(" "), _c('td', [data.is_fallback ? _c('span', {
      staticClass: "badge badge-success"
    }, [_vm._v("\n                      True\n                    ")]) : _c('span', {
      staticClass: "badge badge-danger"
    }, [_vm._v(" False ")])]), _vm._v(" "), _c('td', [data.is_primary ? _c('span', {
      staticClass: "badge badge-success"
    }, [_vm._v("\n                      True\n                    ")]) : _c('span', {
      staticClass: "badge badge-danger"
    }, [_vm._v(" False ")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right no-print"
    }, [data.id ? _c('div', {
      staticClass: "btn-group"
    }, [data.is_fallback && data.is_primary ? _c('span', [_vm._v("\n                        " + _vm._s(_vm.$t('No action available')) + "\n                      ")]) : _vm._e(), _vm._v(" "), !data.is_primary ? _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Make Primary'),
        expression: "$t('Make Primary')"
      }],
      staticClass: "btn btn-success btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.makePrimary(data.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-check-circle"
    })]) : _vm._e(), _vm._v(" "), !data.is_fallback && !data.is_primary ? _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "$t('Delete')"
      }],
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.deleteData(data.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })]) : _vm._e()]) : _vm._e()])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "12"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1)])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domains/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const domainsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Domain Management')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Domain Management',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Domain Management',
        url: ''
      }],
      query: '',
      perPage: 10
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'loading', 'pagination', 'appInfo', 'tenant'])),
  created: function created() {
    this.getData();
    this.employeePrefix = this.appInfo.employeePrefix;
  },
  methods: {
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === '' ? this.getData() : this.searchData();
    },
    paginate: function paginate() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.query === '' ? _this.getData() : _this.searchData();
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // get data
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var currentPage;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.$store.state.operations.loading = true;
              currentPage = _this2.pagination ? _this2.pagination.current_page : 1;
              _context2.next = 4;
              return _this2.$store.dispatch('operations/fetchData', {
                path: '/api/domains?page=',
                currentPage: currentPage + '&perPage=' + _this2.perPage
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // print table
    print: function print() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.$htmlToPaper('printMe');
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              Swal.fire({
                title: _this4.$t('Are you sure?'),
                text: _this4.$t('Are you sure you want to delete this domain?'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this4.$t('Confirm')
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this4.$store.dispatch('operations/deleteData', {
                    path: '/api/domains/',
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      Swal.fire(_this4.$t('Deleted!'), _this4.$t('Deleted successfully.'), 'success');
                      _this4.getData();
                    } else {
                      Swal.fire(_this4.$t('Failed!'), _this4.$t('Delete failed'), 'warning');
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // delete data
    makePrimary: function makePrimary(id) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.$axios.post('/api/domains/' + id).then(function () {
                toast.fire({
                  type: 'success',
                  title: _this5.$t('Successfully made primary')
                });
                _this5.getData();
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this5.$t('Error!')
                });
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
  }
});
;// ./resources/js/pages/domains/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_domainsvue_type_script_lang_js = (domainsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domains/index.vue?vue&type=style&index=0&id=87ca22e6&prod&lang=css
var domainsvue_type_style_index_0_id_87ca22e6_prod_lang_css = __webpack_require__(43177);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domains/index.vue?vue&type=style&index=0&id=87ca22e6&prod&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(domainsvue_type_style_index_0_id_87ca22e6_prod_lang_css/* default */.A, options);



/* harmony default export */ const pages_domainsvue_type_style_index_0_id_87ca22e6_prod_lang_css = (domainsvue_type_style_index_0_id_87ca22e6_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/domains/index.vue?vue&type=style&index=0&id=87ca22e6&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/domains/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_domainsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const domains = (component.exports);

/***/ }),

/***/ 43177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);