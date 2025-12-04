"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1035],{

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ currencies)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=template&id=e2d3488c&scoped=true
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
    staticClass: "col-12 col-xl-3"
  }, [_c('SettingsSidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Currencies")))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
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
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export Table'),
      expression: "$t('Export Table')"
    }],
    staticClass: "btn export-pdf-btn",
    attrs: {
      "href": "/setup/currencies/pdf"
    }
  }, [_c('i', {
    staticClass: "fas fa-file-export"
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'currencies.create'
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Create")) + "\n                  "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })])], 1)])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('GeneralTable', {
    attrs: {
      "columns": _vm.currencyColumns,
      "rows": _vm.currenciesWithIndex,
      "loading": _vm.loading,
      "table-id": "printMe",
      "wrapper-class": "mt-3",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-code",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_c('span', {
          staticClass: "text-uppercase"
        }, [_vm._v(_vm._s(row.code))])];
      }
    }, {
      key: "cell-preview",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [row.position === 'left' ? _c('span', [_vm._v("\n                " + _vm._s(row.symbol) + "0.00\n              ")]) : _c('span', [_vm._v("0.00" + _vm._s(row.symbol))])];
      }
    }, {
      key: "cell-status",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [row.status === 1 ? _c('span', {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.$t("Inactive")))])];
      }
    }, {
      key: "actions",
      fn: function fn(_ref4) {
        var row = _ref4.row,
          index = _ref4.index;
        return [_c('div', {
          staticClass: "action-dropdown",
          "class": {
            open: _vm.openActionIndex === index
          }
        }, [_c('button', {
          staticClass: "action-icon-btn",
          attrs: {
            "type": "button",
            "data-action-index": index
          },
          on: {
            "click": function click($event) {
              $event.stopPropagation();
              return _vm.toggleAction(index);
            }
          }
        }, [_c('svg', {
          attrs: {
            "xmlns": "http://www.w3.org/2000/svg",
            "width": "24",
            "height": "25",
            "viewBox": "0 0 24 25",
            "fill": "none"
          }
        }, [_c('path', {
          attrs: {
            "d": "M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z",
            "fill": "#023033"
          }
        })])]), _vm._v(" "), _vm.openActionIndex === index ? _c('div', {
          staticClass: "action-menu"
        }, [_c('div', {
          staticClass: "action-menu-header"
        }, [_c('span', {
          staticClass: "action-menu-title"
        }, [_vm._v(_vm._s(_vm.$t('Actions')))]), _vm._v(" "), _c('button', {
          staticClass: "action-menu-close",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.toggleAction(index);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-times"
        })])]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
          attrs: {
            "to": {
              name: 'currencies.edit',
              params: {
                slug: row.slug
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-edit"
        }), _vm._v("\n                        " + _vm._s(_vm.$t('Edit')) + "\n                      ")])], 1), _vm._v(" "), _vm.appInfo && _vm.appInfo.currency && _vm.appInfo.currency.symbol != row.symbol ? _c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.deleteData(row.slug);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        }), _vm._v("\n                        " + _vm._s(_vm.$t('Delete')) + "\n                      ")])]) : _vm._e()])]) : _vm._e()])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
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
  }) : _vm._e()], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(97432);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const currenciesvue_type_script_lang_js = ({
  components: {
    GeneralTable: GeneralTable["default"]
  },
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Currencies")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Currencies",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Setup",
        url: "setup.index"
      }, {
        name: "Currencies",
        url: ""
      }],
      query: "",
      perPage: 10,
      openActionIndex: null
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo", "items", "loading", "pagination"])), {}, {
    currencyColumns: function currencyColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        sortable: false
      }, {
        key: "name",
        label: this.$t("Name")
      }, {
        key: "code",
        label: this.$t("Code")
      }, {
        key: "symbol",
        label: this.$t("Symbol")
      }, {
        key: "position",
        label: this.$t("Position")
      }, {
        key: "preview",
        label: this.$t("Preview")
      }, {
        key: "status",
        label: this.$t("Status")
      }];
    },
    currenciesWithIndex: function currenciesWithIndex() {
      var _this = this;
      return this.items.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: _this.pagination && _this.pagination.current_page > 1 ? _this.pagination.per_page * (_this.pagination.current_page - 1) + (index + 1) : index + 1
        });
      });
    }
  }),
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    }
  },
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {
    document.addEventListener('click', this.onClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // Action dropdown methods
    toggleAction: function toggleAction(index) {
      var _this2 = this;
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(function () {
          _this2.positionDropdown(index);
        });
      }
    },
    positionDropdown: function positionDropdown(index) {
      var button = document.querySelector("[data-action-index=\"".concat(index, "\"]"));
      if (button) {
        var rect = button.getBoundingClientRect();
        var menu = document.querySelector('.action-menu');
        if (menu) {
          var isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = "".concat(rect.right - 200, "px");
            menu.style.right = 'auto';
          }
          menu.style.top = "".concat(rect.bottom + 8, "px");
        }
      }
    },
    onClickOutside: function onClickOutside() {
      this.openActionIndex = null;
    },
    handleScroll: function handleScroll() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    handleResize: function handleResize() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // get data
    getData: function getData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var currentPage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this3.$store.state.operations.loading = true;
              currentPage = _this3.pagination ? _this3.pagination.current_page : 1;
              _context.next = 4;
              return _this3.$store.dispatch("operations/fetchData", {
                path: "/api/currencies?page=",
                currentPage: currentPage + "&perPage=" + _this3.perPage
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this4.query === "" ? _this4.getData() : _this4.searchData();
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this5.pagination.current_page = 1;
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var currentPage;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this6.$store.state.operations.loading = true;
              currentPage = _this6.pagination ? _this6.pagination.current_page : 1;
              _context4.next = 4;
              return _this6.$store.dispatch("operations/searchData", {
                term: _this6.query,
                path: "/api/currencies/search/",
                currentPage: currentPage + "&perPage=" + _this6.perPage
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this7.query = "";
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // print table
    print: function print() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this8.$htmlToPaper("printMe");
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              Swal.fire({
                title: _this9.$t("Are you sure?"),
                text: _this9.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this9.$t("Confirm"),
                cancelButtonText: _this9.$t("Cancel")
              }).then(function (result) {
                if (result.value) {
                  _this9.$store.dispatch("operations/deleteData", {
                    path: "/api/currencies/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this9.$toast.success(_this9.$t("Deleted!"), _this9.$t("Deleted successfully."));
                    } else {
                      _this9.$toast.warning(_this9.$t("Failed!"), _this9.$t("There was something wrong."));
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    }
  }
});
;// ./resources/js/pages/setup/currencies/index.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_currenciesvue_type_script_lang_js = (currenciesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=0&id=e2d3488c&prod&scoped=true&lang=css
var currenciesvue_type_style_index_0_id_e2d3488c_prod_scoped_true_lang_css = __webpack_require__(86199);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=0&id=e2d3488c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(currenciesvue_type_style_index_0_id_e2d3488c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const setup_currenciesvue_type_style_index_0_id_e2d3488c_prod_scoped_true_lang_css = (currenciesvue_type_style_index_0_id_e2d3488c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=0&id=e2d3488c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=1&id=e2d3488c&prod&lang=css
var currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css = __webpack_require__(26715);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=1&id=e2d3488c&prod&lang=css

            

var currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css_options = {};

currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css_options.insert = "head";
currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css_options.singleton = false;

var currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css_update = injectStylesIntoStyleTag_default()(currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css/* default */.A, currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css_options);



/* harmony default export */ const setup_currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css = (currenciesvue_type_style_index_1_id_e2d3488c_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/currencies/index.vue?vue&type=style&index=1&id=e2d3488c&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/currencies/index.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_currenciesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "e2d3488c",
  null
  
)

/* harmony default export */ const currencies = (component.exports);

/***/ }),

/***/ 26715:
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


/***/ }),

/***/ 86199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-e2d3488c]{border:none!important;overflow:visible!important}.currencies-table[data-v-e2d3488c]{border-collapse:separate;border-spacing:0}.currencies-table thead th[data-v-e2d3488c]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.currencies-table thead tr[data-v-e2d3488c]{border:none!important}.currencies-table thead th[data-v-e2d3488c]:first-child{border-top-left-radius:10px}.currencies-table thead th[data-v-e2d3488c]:last-child{border-top-right-radius:10px}[dir=rtl] .currencies-table thead th[data-v-e2d3488c]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .currencies-table thead th[data-v-e2d3488c]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.export-pdf-btn[data-v-e2d3488c]{background:#f6fef4!important;color:#2ab930!important}.export-pdf-btn[data-v-e2d3488c],.print-btn[data-v-e2d3488c]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-e2d3488c]{background:#33a0d91a!important;color:#33a0d9!important}.action-dropdown[data-v-e2d3488c]{display:inline-block;position:relative}.action-icon-btn[data-v-e2d3488c]{align-items:center;background-color:#fff;border:none;cursor:pointer;display:inline-flex;height:24px;justify-content:center;padding:0;width:24px}.action-menu[data-v-e2d3488c]{animation:slideInDown-e2d3488c .3s ease-out;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 20px 0 #00000014;max-height:80vh;min-width:200px;overflow:hidden;position:fixed;z-index:9999}[dir=rtl] .action-menu[data-v-e2d3488c]{left:45px!important;right:auto!important}@keyframes slideInDown-e2d3488c{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.action-menu-header[data-v-e2d3488c]{align-items:center;background:#f8fafc;border-bottom:1px solid #f1f5fb;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:12px 16px}.action-menu-title[data-v-e2d3488c]{color:#023033;font-size:14px;font-weight:600}.action-menu-close[data-v-e2d3488c]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s ease}.action-menu-close[data-v-e2d3488c]:hover{background:#e5e7eb;color:#374151}.action-menu ul[data-v-e2d3488c]{list-style:none;margin:0;padding:8px 0}.action-menu li[data-v-e2d3488c]{border-bottom:1px solid #f1f5fb}.action-menu li[data-v-e2d3488c]:last-child{border-bottom:none}.action-menu li a[data-v-e2d3488c]{align-items:center;color:#023033;display:flex;font-size:14px;font-weight:500;gap:10px;padding:12px 16px;position:relative;text-decoration:none;transition:all .2s ease}.action-menu li a i[data-v-e2d3488c]{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;width:16px}.action-menu li a[data-v-e2d3488c]:hover{background:#f8fafc;color:#2ab930;transform:translateX(2px)}.action-menu li a[data-v-e2d3488c]:before{background:#2ab930;bottom:0;content:\"\";left:0;position:absolute;top:0;transform:scaleY(0);transition:transform .2s ease;width:3px}.action-menu li a[data-v-e2d3488c]:hover:before{transform:scaleY(1)}.btn-group.c-w-100[data-v-e2d3488c]{gap:10px}.card[data-v-e2d3488c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px;overflow:visible}.card-footer[data-v-e2d3488c]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-e2d3488c]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);