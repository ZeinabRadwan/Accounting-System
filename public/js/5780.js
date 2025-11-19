"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5780],{

/***/ 5780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ branches_select)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=template&id=b796f180&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "branch-select-page"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v(_vm._s("".concat(_vm.$t('Select'), " ").concat(_vm.$t('Branch'))))])]), _vm._v(" "), _c('transition-group', {
    staticClass: "branches-grid",
    attrs: {
      "name": "fade-list",
      "tag": "div"
    }
  }, _vm._l(_vm.branches, function (branch) {
    var _vm$appInfo;
    return _c('div', {
      key: branch.id,
      staticClass: "branch-card",
      "class": {
        'is-selected': _vm.isSelected(branch)
      },
      attrs: {
        "role": "button",
        "tabindex": "0",
        "aria-label": "".concat(_vm.$t('Select Branch'), ": ").concat(branch.name)
      },
      on: {
        "click": function click($event) {
          return _vm.setDefault(branch);
        },
        "keyup": function keyup($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.setDefault(branch);
        }
      }
    }, [_vm.isSelected(branch) ? _c('div', {
      staticClass: "branch-card__check"
    }, [_c('i', {
      staticClass: "fas fa-check"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "branch-card__icon"
    }, [_c('i', {
      staticClass: "fas fa-building"
    })]), _vm._v(" "), _c('h3', {
      staticClass: "branch-card__title",
      attrs: {
        "title": branch.name
      }
    }, [_vm._v("\n        " + _vm._s(branch.name === 'Main Branch' ? ((_vm$appInfo = _vm.appInfo) === null || _vm$appInfo === void 0 ? void 0 : _vm$appInfo.companyName) || branch.name : branch.name) + "\n      ")]), _vm._v(" "), branch.code ? _c('p', {
      staticClass: "branch-card__code"
    }, [_vm._v(_vm._s(branch.code))]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "branches-grid"
  }, _vm._l(6, function (n) {
    return _c('div', {
      key: n,
      staticClass: "branch-card skeleton"
    }, [_c('div', {
      staticClass: "branch-card__icon"
    }), _vm._v(" "), _c('div', {
      staticClass: "skeleton-line"
    }), _vm._v(" "), _c('div', {
      staticClass: "skeleton-line skeleton-line--short"
    })]);
  }), 0) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.branches.length === 0 ? _c('div', {
    staticClass: "empty-state"
  }, [_c('i', {
    staticClass: "fas fa-building"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('No branches found')))])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=script&lang=js
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
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    loadBranches: function loadBranches() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
;// ./resources/js/pages/branches/select.vue?vue&type=script&lang=js
 /* harmony default export */ const branches_selectvue_type_script_lang_js = (selectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css
var selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css = __webpack_require__(92914);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css = (selectvue_type_style_index_0_id_b796f180_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/branches/select.vue?vue&type=style&index=0&id=b796f180&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/branches/select.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  branches_selectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b796f180",
  null
  
)

/* harmony default export */ const branches_select = (component.exports);

/***/ }),

/***/ 92914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".branch-select-page[data-v-b796f180]{margin:0 auto;max-width:1200px;padding:2rem 1.5rem}.page-header[data-v-b796f180]{margin-bottom:2rem}.page-title[data-v-b796f180]{color:#333;font-size:1.75rem;font-weight:600;margin:0}.branches-grid[data-v-b796f180]{display:grid;gap:1.25rem;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}.branch-card[data-v-b796f180]{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:12px;cursor:pointer;display:flex;flex-direction:column;min-height:180px;padding:2rem 1.5rem;position:relative;text-align:center;transition:all .2s ease}.branch-card[data-v-b796f180]:hover{border-color:#33a0d9;box-shadow:0 4px 12px rgba(51,160,217,.15);transform:translateY(-2px)}.branch-card[data-v-b796f180]:focus{outline:2px solid #33a0d9;outline-offset:2px}.branch-card.is-selected[data-v-b796f180]{background:#f0f8ff;border-color:#33a0d9;box-shadow:0 4px 12px rgba(51,160,217,.2)}.branch-card__icon[data-v-b796f180]{align-items:center;background:#f5f5f5;border-radius:16px;color:#666;display:flex;font-size:2.5rem;height:80px;justify-content:center;margin-bottom:1.25rem;transition:all .2s ease;width:80px}.branch-card:hover .branch-card__icon[data-v-b796f180]{background:#e6f4fc;color:#33a0d9;transform:scale(1.05)}.branch-card.is-selected .branch-card__icon[data-v-b796f180]{background:#33a0d9;color:#fff}.branch-card__title[data-v-b796f180]{-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;color:#333;display:-webkit-box;font-size:1.125rem;font-weight:600;line-height:1.4;margin:0 0 .5rem;overflow:hidden;text-overflow:ellipsis}.branch-card.is-selected .branch-card__title[data-v-b796f180]{color:#33a0d9}.branch-card__code[data-v-b796f180]{color:#999;font-size:.875rem;line-height:1.5;margin:0}.branch-card.is-selected .branch-card__code[data-v-b796f180]{color:#33a0d9}.branch-card__check[data-v-b796f180]{align-items:center;background:#33a0d9;border-radius:50%;color:#fff;display:flex;font-size:.875rem;font-weight:600;height:28px;justify-content:center;position:absolute;right:.75rem;top:.75rem;width:28px}.skeleton[data-v-b796f180]{pointer-events:none}.skeleton .branch-card__icon[data-v-b796f180],.skeleton-line[data-v-b796f180]{background:#f5f5f5}.skeleton-line[data-v-b796f180]{border-radius:4px;height:1rem;margin-bottom:.5rem;width:100%}.skeleton-line--short[data-v-b796f180]{margin:0 auto;width:60%}.empty-state[data-v-b796f180]{color:#999;padding:3rem 2rem;text-align:center}.empty-state i[data-v-b796f180]{font-size:3rem;margin-bottom:1rem;opacity:.5}.empty-state p[data-v-b796f180]{font-size:1rem;margin:0}.fade-list-enter-active[data-v-b796f180]{transition:all .3s ease}.fade-list-leave-active[data-v-b796f180]{transition:all .2s ease}.fade-list-enter[data-v-b796f180],.fade-list-leave-to[data-v-b796f180]{opacity:0;transform:translateY(10px)}@media (max-width:768px){.branch-select-page[data-v-b796f180]{padding:1.5rem 1rem}.page-title[data-v-b796f180]{font-size:1.5rem}.branches-grid[data-v-b796f180]{gap:1rem;grid-template-columns:1fr}.branch-card[data-v-b796f180]{min-height:160px;padding:1.5rem 1rem}.branch-card__icon[data-v-b796f180]{font-size:2rem;height:64px;margin-bottom:1rem;width:64px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);