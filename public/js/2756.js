"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2756],{

/***/ 1962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-00fccdf1]{border:none!important}.branches-table[data-v-00fccdf1]{border-collapse:separate;border-spacing:0}.branches-table thead th[data-v-00fccdf1]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.branches-table thead tr[data-v-00fccdf1]{border:none!important}.branches-table thead th[data-v-00fccdf1]:first-child{border-top-left-radius:10px}.branches-table thead th[data-v-00fccdf1]:last-child{border-top-right-radius:10px}[dir=rtl] .branches-table thead th[data-v-00fccdf1]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .branches-table thead th[data-v-00fccdf1]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.branches-table .badge.bg-success[data-v-00fccdf1]{background:#f6fef4!important;color:#2ab930!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.branches-table .badge.bg-secondary[data-v-00fccdf1]{background:#f1f1f1!important;color:#6c757d!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.btn-group.c-w-100[data-v-00fccdf1]{gap:10px}.refresh-btn[data-v-00fccdf1]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.btn-primary[data-v-00fccdf1]{background:#2ab930!important}.btn-primary[data-v-00fccdf1],.btn-secondary[data-v-00fccdf1]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-00fccdf1]{background:#6c757d!important}.modal-header[data-v-00fccdf1]{border-bottom:1px solid #e5e7eb;padding:20px}.modal-title[data-v-00fccdf1]{color:#1f2937;font-size:18px;font-weight:600}.modal-body[data-v-00fccdf1]{padding:20px}.form-group label[data-v-00fccdf1]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.form-group .v-select[data-v-00fccdf1]{min-height:44px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ assign_users)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=template&id=00fccdf1&scoped=true
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
    staticClass: "table branches-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Assigned Date")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.branchUsers, function (user, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.branchUsers.length,
        expression: "branchUsers.length"
      }],
      key: i
    }, [_c('td', [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(user.created_at, "Do MMM, YYYY")))])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && (!_vm.branchUsers || !_vm.branchUsers.length),
      expression: "!loading && (!branchUsers || !branchUsers.length)"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1)])])]), _vm._v(" "), _c('VModal', {
    attrs: {
      "size": "md"
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t('Add User to Branch')))];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [_c('button', {
          staticClass: "btn btn-secondary",
          attrs: {
            "type": "button"
          },
          on: {
            "click": _vm.closeAddUserModal
          }
        }, [_vm._v(_vm._s(_vm.$t('Cancel')))]), _vm._v(" "), _c('button', {
          staticClass: "btn btn-primary",
          attrs: {
            "type": "button",
            "disabled": _vm.loading || !_vm.selectedUser
          },
          on: {
            "click": _vm.assignUser
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t('Assign')) + "\n      ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showAddUserModal,
      callback: function callback($$v) {
        _vm.showAddUserModal = $$v;
      },
      expression: "showAddUserModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.assignUser.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select User')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.filteredAvailableUsers.length === 0 ? _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('No users available to assign')))]) : _c('v-select', {
    attrs: {
      "options": _vm.filteredAvailableUsers,
      "label": "name",
      "placeholder": _vm.$t('Select a user'),
      "reduce": function reduce(user) {
        return user;
      },
      "searchable": true
    },
    model: {
      value: _vm.selectedUser,
      callback: function callback($$v) {
        _vm.selectedUser = $$v;
      },
      expression: "selectedUser"
    }
  })], 1)])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const assign_usersvue_type_script_lang_js = ({
  components: {
    VModal: function VModal() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 35079));
    }
  },
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Assign Users to Branch')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'branches.assign-users',
      breadcrumbs: [{
        name: 'Branches',
        url: 'branches.index'
      }, {
        name: 'Assign Users',
        url: ''
      }],
      branchUsers: [],
      availableUsers: [],
      loading: false,
      showAddUserModal: false,
      selectedUser: null,
      role: 'member'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])), {}, {
    filteredAvailableUsers: function filteredAvailableUsers() {
      if (!Array.isArray(this.availableUsers)) {
        return [];
      }
      if (!Array.isArray(this.branchUsers)) {
        return this.availableUsers;
      }
      var assignedUserIds = this.branchUsers.map(function (u) {
        return u.id;
      });
      return this.availableUsers.filter(function (u) {
        return !assignedUserIds.includes(u.id);
      });
    },
    roleOptions: function roleOptions() {
      return [{
        label: this.$t('Member'),
        value: 'member'
      }, {
        label: this.$t('Admin'),
        value: 'admin'
      }];
    }
  }),
  mounted: function mounted() {
    this.getBranchUsers();
    this.getAvailableUsers();
  },
  methods: {
    getBranchUsers: function getBranchUsers() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var branchId, _yield$_this$$axios$g, data, _error$response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.prev = 1;
              branchId = _this.$route.params.branchId;
              _context.next = 5;
              return _this.$axios.get("/api/branches/".concat(branchId, "/users"));
            case 5:
              _yield$_this$$axios$g = _context.sent;
              data = _yield$_this$$axios$g.data;
              _this.branchUsers = Array.isArray(data) ? data : [];
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              _this.branchUsers = [];
              _this.$toast.error(_this.$t('Error'), ((_error$response = _context.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t('Failed to load users'));
            case 14:
              _context.prev = 14;
              _this.loading = false;
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 10, 14, 17]]);
      }))();
    },
    getAvailableUsers: function getAvailableUsers() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, users, _error$response2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.$axios.get('/api/all-user');
            case 3:
              response = _context2.sent;
              users = response.data;
              if (users && users.data && Array.isArray(users.data)) {
                users = users.data;
              }
              _this2.availableUsers = Array.isArray(users) ? users : [];
              _context2.next = 13;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              _this2.availableUsers = [];
              _this2.$toast.error(_this2.$t('Error'), ((_error$response2 = _context2.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this2.$t('Failed to load available users'));
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    assignUser: function assignUser() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var branchId, _error$response3;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this3.selectedUser) {
                _context3.next = 3;
                break;
              }
              _this3.$toast.error(_this3.$t('Error'), _this3.$t('Please select a user'));
              return _context3.abrupt("return");
            case 3:
              _this3.loading = true;
              _context3.prev = 4;
              branchId = _this3.$route.params.branchId;
              _context3.next = 8;
              return _this3.$axios.post('/api/user-branches', {
                user_id: _this3.selectedUser.id,
                branch_id: branchId,
                role: _this3.role
              });
            case 8:
              _this3.$toast.success(_this3.$t('Success'), _this3.$t('User assigned successfully'));
              _this3.closeAddUserModal();
              _context3.next = 12;
              return _this3.getBranchUsers();
            case 12:
              _context3.next = 14;
              return _this3.getAvailableUsers();
            case 14:
              _context3.next = 19;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](4);
              _this3.$toast.error(_this3.$t('Error'), ((_error$response3 = _context3.t0.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this3.$t('Failed to assign user'));
            case 19:
              _context3.prev = 19;
              _this3.loading = false;
              return _context3.finish(19);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 16, 19, 22]]);
      }))();
    },
    removeUser: function removeUser(user) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var branchId, _error$response4;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (confirm(_this4.$t('Are you sure you want to remove this user from the branch?'))) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              _this4.loading = true;
              _context4.prev = 3;
              branchId = _this4.$route.params.branchId;
              _context4.next = 7;
              return _this4.$axios["delete"]("/api/user-branches/".concat(user.id, "/").concat(branchId));
            case 7:
              _this4.$toast.success(_this4.$t('Success'), _this4.$t('User removed successfully'));
              _context4.next = 10;
              return _this4.getBranchUsers();
            case 10:
              _context4.next = 12;
              return _this4.getAvailableUsers();
            case 12:
              _context4.next = 17;
              break;
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](3);
              _this4.$toast.error(_this4.$t('Error'), ((_error$response4 = _context4.t0.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this4.$t('Failed to remove user'));
            case 17:
              _context4.prev = 17;
              _this4.loading = false;
              return _context4.finish(17);
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[3, 14, 17, 20]]);
      }))();
    },
    closeAddUserModal: function closeAddUserModal() {
      this.showAddUserModal = false;
      this.selectedUser = null;
      this.role = 'member';
    },
    refreshTable: function refreshTable() {
      this.getBranchUsers();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/branches/assign-users.vue?vue&type=script&lang=js
 /* harmony default export */ const branches_assign_usersvue_type_script_lang_js = (assign_usersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=00fccdf1&prod&scoped=true&lang=css
var assign_usersvue_type_style_index_0_id_00fccdf1_prod_scoped_true_lang_css = __webpack_require__(1962);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=00fccdf1&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(assign_usersvue_type_style_index_0_id_00fccdf1_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_assign_usersvue_type_style_index_0_id_00fccdf1_prod_scoped_true_lang_css = (assign_usersvue_type_style_index_0_id_00fccdf1_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=00fccdf1&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/branches/assign-users.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  branches_assign_usersvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "00fccdf1",
  null
  
)

/* harmony default export */ const assign_users = (component.exports);

/***/ })

}]);