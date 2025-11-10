"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1304],{

/***/ 4659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".branch-select-page[data-v-0101611f]{animation:fadeIn-0101611f .3s ease}.page-title[data-v-0101611f]{font-weight:700}.page-subtitle[data-v-0101611f]{font-size:.95rem}.branch-card[data-v-0101611f]{background:#fff;border:1px solid #e9ecef;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.06);cursor:pointer;min-height:160px;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}.branch-card[data-v-0101611f]:hover{box-shadow:0 16px 40px rgba(0,0,0,.1);transform:translateY(-4px)}.branch-card__body[data-v-0101611f]{align-items:center;display:flex;padding:28px 24px 18px;position:relative}.branch-card__icon[data-v-0101611f]{align-items:center;border-radius:10px;display:flex;font-size:22px;height:64px;justify-content:center;margin-left:10px;margin-right:10px;width:64px}.tone-blue .branch-card__icon[data-v-0101611f]{background:#33a0d91a;color:#33a0d9}.tone-green .branch-card__icon[data-v-0101611f]{background:#2ab9301a;color:#2ab930}.tone-teal .branch-card__icon[data-v-0101611f]{background:#449eae1a;color:#449eae}.tone-navy .branch-card__icon[data-v-0101611f]{background:#152a4a1a;color:#152a4a}.branch-card__content[data-v-0101611f]{flex:1;min-width:0}.branch-card__title[data-v-0101611f]{color:#023033;font-size:1.2rem;font-weight:700;margin-bottom:4px}.branch-card__meta[data-v-0101611f]{font-size:1rem}.branch-card__badge[data-v-0101611f]{align-items:center;background:#f6fef4;border:1px solid #d7f2d9;border-radius:999px;color:#2ab930;display:inline-flex;font-size:.75rem;font-weight:600;gap:6px;padding:6px 10px;position:absolute;right:12px;top:12px}.branch-card__footer[data-v-0101611f]{align-items:center;background:#f8fafc;border-top:1px solid #edf2f7;color:#334155;display:flex;font-weight:600;justify-content:space-between;padding:16px 18px}.skeleton[data-v-0101611f]{animation:shimmer-0101611f 1.2s ease infinite;background:linear-gradient(90deg,#f2f4f7 25%,#e9edf2 37%,#f2f4f7 63%);background-size:400% 100%;overflow:hidden;position:relative}.fade-list-enter-active[data-v-0101611f]{transition:all .25s ease}.fade-list-leave-active[data-v-0101611f]{transition:all .2s ease}.fade-list-enter[data-v-0101611f],.fade-list-leave-to[data-v-0101611f]{opacity:0;transform:translateY(8px)}@keyframes shimmer-0101611f{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes fadeIn-0101611f{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 11304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ branches_select)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=template&id=0101611f&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container py-4 branch-select-page"
  }, [_c('div', {
    staticClass: "page-head d-flex align-items-center justify-content-between mb-4"
  }, [_c('div', [_c('h2', {
    staticClass: "page-title mb-1"
  }, [_vm._v(_vm._s("".concat(_vm.$t('Select'), " ").concat(_vm.$t('Branch'))))])])]), _vm._v(" "), _c('transition-group', {
    staticClass: "row",
    attrs: {
      "name": "fade-list",
      "tag": "div"
    }
  }, _vm._l(_vm.branches, function (branch, idx) {
    var _vm$appInfo;
    return _c('div', {
      key: branch.id,
      staticClass: "col-xl-4 col-lg-6 col-md-6 mb-4"
    }, [_c('div', {
      staticClass: "branch-card h-100",
      "class": _vm.cardTone(idx),
      attrs: {
        "role": "button",
        "aria-label": "".concat(_vm.$t('Select Branch'), ": ").concat(branch.name)
      },
      on: {
        "click": function click($event) {
          return _vm.setDefault(branch);
        }
      }
    }, [_c('div', {
      staticClass: "branch-card__body"
    }, [_c('div', {
      staticClass: "branch-card__icon"
    }, [_c('i', {
      staticClass: "fas fa-code-branch"
    })]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__content"
    }, [_c('div', {
      staticClass: "branch-card__title text-truncate",
      attrs: {
        "title": branch.name
      }
    }, [_vm._v("\n              " + _vm._s(branch.name === 'Main Branch' ? ((_vm$appInfo = _vm.appInfo) === null || _vm$appInfo === void 0 ? void 0 : _vm$appInfo.companyName) || branch.name : branch.name) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__meta text-muted"
    }, [_vm._v(_vm._s(branch.code || _vm.$t('Branch')))])]), _vm._v(" "), _vm.isSelected(branch) ? _c('div', {
      staticClass: "branch-card__badge"
    }, [_c('i', {
      staticClass: "fas fa-check"
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('Selected')))])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "branch-card__footer"
    }, [_c('span', [_vm._v(_vm._s(_vm.isSelected(branch) ? _vm.$t('Selected') : _vm.$t('Select')))]), _vm._v(" "), _c('i', {
      staticClass: "fas fa-arrow-right"
    })])])]);
  }), 0), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row"
  }, _vm._l(6, function (n) {
    return _c('div', {
      key: n,
      staticClass: "col-xl-3 col-lg-4 col-md-6 mb-3"
    }, [_vm._m(0, true)]);
  }), 0) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.branches.length === 0 ? _c('div', {
    staticClass: "text-center text-muted py-5"
  }, [_vm._v("\n    " + _vm._s(_vm.$t('no_data_found')) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "branch-card skeleton h-100"
  }, [_c('div', {
    staticClass: "branch-card__body"
  }), _vm._v(" "), _c('div', {
    staticClass: "branch-card__footer"
  })]);
}];

;// CONCATENATED MODULE: ./resources/js/pages/branches/select.vue?vue&type=template&id=0101611f&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const selectvue_type_script_lang_js = ({
  name: 'SelectBranch',
  middleware: [],
  data: function data() {
    return {
      branches: [],
      loading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo'])), {}, {
    user: function user() {
      return this.$store.getters['auth/user'] || {};
    },
    userId: function userId() {
      var _this$user;
      return (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id;
    },
    selectedBranchId: function selectedBranchId() {
      var _this$user2;
      return Number(((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.default_branch_id) || 0);
    }
  }),
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.loadBranches();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    cardTone: function cardTone(idx) {
      var tones = ['tone-blue', 'tone-green', 'tone-teal', 'tone-navy'];
      return tones[idx % tones.length];
    },
    loadBranches: function loadBranches() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this2.loading = true;
              _context2.next = 4;
              return axios_default().get("/api/users/".concat(_this2.userId, "/branches"));
            case 4:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this2.branches = Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data.data) || [];

              // Auto-select branch if there's only one branch and no branch is currently selected
              if (!(_this2.branches.length === 1 && _this2.selectedBranchId === 0)) {
                _context2.next = 10;
                break;
              }
              _context2.next = 10;
              return _this2.setDefault(_this2.branches[0]);
            case 10:
              _context2.next = 14;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
            case 14:
              _context2.prev = 14;
              _this2.loading = false;
              return _context2.finish(14);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 12, 14, 17]]);
      }))();
    },
    isSelected: function isSelected(branch) {
      return Number(branch.id) === this.selectedBranchId;
    },
    setDefault: function setDefault(branch) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios_default().post('/api/user-branches/set-default', {
                branch_id: branch.id
              });
            case 3:
              _context3.next = 5;
              return _this3.$store.dispatch('auth/fetchUser');
            case 5:
              _this3.$router.push({
                name: 'home'
              });
              _context3.next = 10;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/branches/select.vue?vue&type=script&lang=js
 /* harmony default export */ const branches_selectvue_type_script_lang_js = (selectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=0101611f&prod&scoped=true&lang=css
var selectvue_type_style_index_0_id_0101611f_prod_scoped_true_lang_css = __webpack_require__(4659);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=0101611f&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(selectvue_type_style_index_0_id_0101611f_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_selectvue_type_style_index_0_id_0101611f_prod_scoped_true_lang_css = (selectvue_type_style_index_0_id_0101611f_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=0101611f&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/branches/select.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  branches_selectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0101611f",
  null
  
)

/* harmony default export */ const branches_select = (component.exports);

/***/ })

}]);