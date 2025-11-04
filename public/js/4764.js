"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4764],{

/***/ 63466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-header[data-v-5c9801d6]{margin-bottom:20px}.breadcrumb[data-v-5c9801d6]{background:none;margin:0;padding:0}.breadcrumb-item+.breadcrumb-item[data-v-5c9801d6]:before{content:\">\"}.form-control-plaintext[data-v-5c9801d6]{background:transparent;border:none;margin:0;padding:0}.table th[data-v-5c9801d6]{background-color:#f8f9fa;font-weight:600}.badge[data-v-5c9801d6]{font-size:.875em}.table-active[data-v-5c9801d6]{background-color:#e9ecef!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 64764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=template&id=5c9801d6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('h3', {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.$t('Journal Entry Details')))]), _vm._v(" "), _c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', {
    staticClass: "breadcrumb-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/home"
    }
  }, [_vm._v(_vm._s(_vm.$t('Dashboard')))])], 1), _vm._v(" "), _c('li', {
    staticClass: "breadcrumb-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/journal-entries"
    }
  }, [_vm._v(_vm._s(_vm.$t('Journal Entries')))])], 1), _vm._v(" "), _c('li', {
    staticClass: "breadcrumb-item active"
  }, [_vm._v(_vm._s(_vm.$t('View')))])])]), _vm._v(" "), _c('div', {
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
  }, [_c('i', {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n        ")])], 1)])]), _vm._v(" "), _vm.loading ? _c('div', {
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
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Line Number')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Chart of Account')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Debit Amount')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Credit Amount')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.sortedLines, function (line) {
    return _c('tr', {
      key: line.id
    }, [_c('td', [_vm._v(_vm._s(line.line_number))]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(line.chart_of_account.code))]), _c('br'), _vm._v(" "), _c('small', [_vm._v(_vm._s(line.chart_of_account.name))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [line.debit_amount > 0 ? _c('span', {
      staticClass: "text-success"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": line.debit_amount,
        "disable-rtl": true
      }
    })], 1) : _c('span', [_vm._v("-")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [line.credit_amount > 0 ? _c('span', {
      staticClass: "text-danger"
    }, [_c('CurrencyDisplay', {
      attrs: {
        "amount": line.credit_amount,
        "disable-rtl": true
      }
    })], 1) : _c('span', [_vm._v("-")])])]);
  }), 0)])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Back to Journal Entries')) + "\n          ")])], 1)])])]) : _vm._e()]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
    }
  },
  data: function data() {
    return {
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
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.loadJournalEntry();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    loadJournalEntry: function loadJournalEntry() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this2.loading = true;
              _context2.next = 4;
              return _this2.$axios.get("/api/journal-entries/".concat(_this2.$route.params.id));
            case 4:
              response = _context2.sent;
              _this2.journalEntry = response.data.data;
              _context2.next = 12;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error('Error loading journal entry:', _context2.t0);
              window.toast.error(_this2.$t('Error loading journal entry'));
            case 12:
              _context2.prev = 12;
              _this2.loading = false;
              return _context2.finish(12);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8, 12, 15]]);
      }))();
    },
    postEntry: function postEntry() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              sweetalert2_all_default().fire({
                title: _this3.$t('Are you sure?'),
                text: _this3.$t('Are you sure you want to post this journal entry?'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this3.$t('Confirm'),
                cancelButtonText: _this3.$t('Cancel')
              }).then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(result) {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!result.value) {
                          _context3.next = 13;
                          break;
                        }
                        _context3.prev = 1;
                        _context3.next = 4;
                        return _this3.$axios.post("/api/journal-entries/".concat(_this3.journalEntry.id, "/post"));
                      case 4:
                        window.toast.success(_this3.$t('Journal entry posted successfully'));
                        _context3.next = 7;
                        return _this3.loadJournalEntry();
                      case 7:
                        _context3.next = 13;
                        break;
                      case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3["catch"](1);
                        console.error('Error posting journal entry:', _context3.t0);
                        window.toast.error(_this3.$t('Error posting journal entry'));
                      case 13:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, null, [[1, 9]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    voidEntry: function voidEntry() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (confirm(_this4.$t('Are you sure you want to void this journal entry?'))) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              _context5.prev = 2;
              _context5.next = 5;
              return _this4.$axios.post("/api/journal-entries/".concat(_this4.journalEntry.id, "/void"));
            case 5:
              window.toast.success(_this4.$t('Journal entry voided successfully'));
              _context5.next = 8;
              return _this4.loadJournalEntry();
            case 8:
              _context5.next = 14;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](2);
              console.error('Error voiding journal entry:', _context5.t0);
              window.toast.error(_this4.$t('Error voiding journal entry'));
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[2, 10]]);
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
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/show.vue?vue&type=script&lang=js
 /* harmony default export */ const journal_entries_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=5c9801d6&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_5c9801d6_prod_scoped_true_lang_css = __webpack_require__(63466);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=5c9801d6&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_5c9801d6_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const journal_entries_showvue_type_style_index_0_id_5c9801d6_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_5c9801d6_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/show.vue?vue&type=style&index=0&id=5c9801d6&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/journal-entries/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  journal_entries_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5c9801d6",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);