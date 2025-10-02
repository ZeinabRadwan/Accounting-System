"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6808],{

/***/ 68224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2b54478b]{gap:10px}.header-buttons[data-v-2b54478b]{margin-bottom:15px}.footer-buttons[data-v-2b54478b]{display:flex;gap:10px}.footer-buttons .btn[data-v-2b54478b]{margin-right:10px}.footer-buttons .btn[data-v-2b54478b]:last-child{margin-right:0}.card[data-v-2b54478b]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2b54478b]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2b54478b]{background:#fff!important}.btn-primary[data-v-2b54478b]{background:#2ab930!important}.btn-primary[data-v-2b54478b],.btn-secondary[data-v-2b54478b]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-2b54478b]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2b54478b]{gap:10px}.header-buttons[data-v-2b54478b]{margin-bottom:15px}.footer-buttons[data-v-2b54478b]{display:flex;gap:10px}.footer-buttons .btn[data-v-2b54478b]{margin-right:10px}.footer-buttons .btn[data-v-2b54478b]:last-child{margin-right:0}.card[data-v-2b54478b]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2b54478b]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2b54478b]{background:#fff!important}.btn-primary[data-v-2b54478b]{background:#2ab930!important}.btn-primary[data-v-2b54478b],.btn-secondary[data-v-2b54478b]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-2b54478b]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=template&id=2b54478b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'clients.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save Temporarily')
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), !_vm.loading && _vm.clientData && _vm.clientData.slug ? _c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": true,
      "initialData": _vm.clientData
    },
    on: {
      "submit": _vm.saveClient
    }
  }) : _vm.loading ? _c('div', {
    staticClass: "card-body text-center"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t('Loading...')))])]), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t('Loading client data...')))])]) : _c('div', {
    staticClass: "card-body text-center"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Failed to load client data')) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "disabled": _vm.isSubmitting || _vm.loading || !_vm.isFormReady
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t("Save changes")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])])])])], 1)])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(77958);
// EXTERNAL MODULE: ./resources/js/components/Button.vue + 3 modules
var Button = __webpack_require__(60069);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Client")
    };
  },
  components: {
    ClientForm: ClientForm/* default */.A,
    VButton: Button/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Edit Client",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Clients",
        url: "clients.index"
      }, {
        name: "Edit",
        url: ""
      }],
      loading: true,
      isSubmitting: false,
      clientData: {}
    };
  },
  computed: {
    // Check if form is ready
    isFormReady: function isFormReady() {
      var ready = !this.loading && this.clientData && this.clientData.slug && Object.keys(this.clientData).length > 0;
      console.log('=== IS FORM READY CHECK ===');
      console.log('Loading:', this.loading);
      console.log('ClientData:', this.clientData);
      console.log('ClientData slug:', this.clientData ? this.clientData.slug : 'No clientData');
      console.log('ClientData keys length:', this.clientData ? Object.keys(this.clientData).length : 'No clientData');
      console.log('Is form ready:', ready);
      return ready;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.clientForm': {
      handler: function handler(newVal) {
        if (newVal && newVal.getFormData && typeof newVal.getFormData().data === 'function') {
          console.log('Form is now ready');
          this.loading = false;
        }
      },
      immediate: true
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.getClient();
          case 3:
            _context.next = 8;
            break;
          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error("Error in created lifecycle:", _context.t0);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 5]]);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this2.loadTemporaryData();
    });
  },
  methods: {
    // Get client data
    getClient: function getClient() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, clientData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (_this3.$route.params.slug) {
                _context2.next = 3;
                break;
              }
              throw new Error("No client slug provided");
            case 3:
              console.log("Fetching client with slug:", _this3.$route.params.slug);
              _context2.next = 6;
              return _this3.$http.get("/api/clients/".concat(_this3.$route.params.slug));
            case 6:
              response = _context2.sent;
              if (response.data) {
                _context2.next = 9;
                break;
              }
              throw new Error("No data received from API");
            case 9:
              console.log("Raw API response data:", response.data);

              // The API response is wrapped in a 'data' object
              clientData = response.data.data || response.data;
              console.log("Client data slug:", clientData.slug);
              console.log("Route params slug:", _this3.$route.params.slug);

              // Map the API response fields to the new form structure
              _this3.clientData = {
                // Include the actual slug from the client data for representatives loading
                slug: clientData.slug || _this3.$route.params.slug,
                // Account Details
                codeNumber: clientData.codeNumber || clientData.clientID || '000001',
                notes: clientData.notes || '',
                displayLanguage: clientData.displayLanguage || '',
                // Client Details
                type: clientData.type || 'Company',
                fullName: clientData.type === 'Individual' ? clientData.name : '',
                businessName: clientData.type === 'Company' ? clientData.companyName : '',
                firstName: clientData.firstName || '',
                lastName: clientData.lastName || '',
                phone: clientData.phone || '',
                phoneNumber: clientData.phoneNumber || '',
                email: clientData.email || '',
                streetAddress1: clientData.streetAddress1 || clientData.address || '',
                streetAddress2: clientData.streetAddress2 || '',
                city: clientData.city || '',
                state: clientData.state || '',
                postalCode: clientData.postalCode || '',
                country: clientData.country || 'SA',
                neighbourhood: clientData.neighbourhood || '',
                commercialRegister: clientData.commercialRegister || clientData.taxRegistrationNumber || '',
                taxCard: clientData.taxCard || '',
                // Additional Fields
                image: clientData.image || '',
                attachments: clientData.attachments || [],
                status: clientData.status || 1,
                isSendEmail: clientData.isSendEmail || false,
                isSendSMS: clientData.isSendSMS || false,
                // Chart of Account
                chartOfAccountId: clientData.chartOfAccountId || null,
                // Representatives
                representatives: clientData.representatives || [],
                // Legacy fields for backward compatibility
                name: clientData.name || '',
                companyName: clientData.companyName || '',
                taxRegistrationNumber: clientData.taxRegistrationNumber || '',
                address: clientData.address || ''
              };
              _this3.loading = false;
              console.log("Client data loaded successfully:", clientData);
              console.log("Client data slug:", clientData.slug);
              console.log("Route params slug:", _this3.$route.params.slug);
              console.log("Final slug used:", clientData.slug || _this3.$route.params.slug);
              console.log("Mapped client data:", _this3.clientData);
              _context2.next = 28;
              break;
            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](0);
              console.error("Error fetching client:", _context2.t0);

              // Show error message if toast is available
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this3.$t("Failed to load client data"),
                  text: _context2.t0.message || "Please check the client slug and try again."
                });
              } else {
                // Fallback to console and alert if toast is not available
                console.error("Toast not available, showing alert");
                alert(_this3.$t("Failed to load client data: ") + (_context2.t0.message || "Unknown error"));
              }

              // Don't redirect immediately, let user see the error
              _this3.loading = false;

              // Only redirect if it's a critical error (like invalid slug)
              if (_context2.t0.response && _context2.t0.response.status === 404) {
                setTimeout(function () {
                  _this3.$router.push({
                    name: "clients.index"
                  });
                }, 3000);
              }
            case 28:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 22]]);
      }))();
    },
    // Submit form by calling ClientForm's submitForm method
    submitForm: function submitForm() {
      console.log('=== SUBMIT FORM CALLED ===');
      console.log('Is submitting:', this.isSubmitting);
      console.log('Is loading:', this.loading);
      console.log('Is form ready:', this.isFormReady);
      console.log('ClientForm ref:', this.$refs.clientForm);
      console.log('ClientForm methods:', this.$refs.clientForm ? Object.getOwnPropertyNames(this.$refs.clientForm) : 'No ref');
      if (this.isSubmitting || this.loading) {
        console.log('Form is submitting or loading, ignoring click');
        return;
      }
      if (!this.isFormReady) {
        console.log('Form is not ready, ignoring click');
        return;
      }
      if (this.$refs.clientForm) {
        console.log('Calling ClientForm submitForm method...');
        this.$refs.clientForm.submitForm();
      } else {
        console.error('ClientForm ref is not available');
      }
    },
    // Save client
    saveClient: function saveClient(formData) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log('=== SAVE CLIENT CALLED ===');
              console.log('Form data received:', formData);
              console.log('Is submitting:', _this4.isSubmitting);
              console.log('Loading:', _this4.loading);
              if (!(_this4.isSubmitting || _this4.loading)) {
                _context3.next = 7;
                break;
              }
              console.log('Already submitting or loading, returning');
              return _context3.abrupt("return");
            case 7:
              console.log('Save client called with form data:', formData);
              _this4.isSubmitting = true;
              _context3.prev = 9;
              // Use the form data directly from the submit event
              console.log('Sending update request with data:', formData);
              _context3.next = 13;
              return _this4.$http.put("/api/clients/".concat(_this4.clientData.slug), formData);
            case 13:
              response = _context3.sent;
              console.log('API response received:', response);
              if (!response.data.success) {
                _context3.next = 22;
                break;
              }
              console.log('Client updated successfully');
              // Clear temporary data after successful save
              _this4.clearTemporaryData();
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "success",
                  title: _this4.$t("Client updated successfully")
                });
              } else {
                alert(_this4.$t("Client updated successfully"));
              }
              _this4.$router.push({
                name: "clients.index"
              });
              _context3.next = 23;
              break;
            case 22:
              throw new Error(response.data.message || 'Update failed');
            case 23:
              _context3.next = 29;
              break;
            case 25:
              _context3.prev = 25;
              _context3.t0 = _context3["catch"](9);
              console.error("Error saving client:", _context3.t0);
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this4.$t("Please check your input and try again.")
                });
              } else {
                alert(_this4.$t("Please check your input and try again."));
              }
            case 29:
              _context3.prev = 29;
              console.log('Setting isSubmitting to false');
              _this4.isSubmitting = false;
              return _context3.finish(29);
            case 33:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[9, 25, 29, 33]]);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        var form = this.$refs.clientForm.form;
        var tempData = {
          type: form.type,
          fullName: form.fullName,
          businessName: form.businessName,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          phoneNumber: form.phoneNumber,
          email: form.email,
          address: form.address,
          city: form.city,
          state: form.state,
          zipCode: form.zipCode,
          country: form.country,
          taxNumber: form.taxNumber,
          note: form.note,
          status: form.status,
          chartOfAccountId: form.chartOfAccountId,
          timestamp: new Date().toISOString()
        };
        localStorage.setItem('clientEditTempData', JSON.stringify(tempData));
      }
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('clientEditTempData');
      if (tempData && this.$refs.clientForm && this.$refs.clientForm.form) {
        try {
          var data = JSON.parse(tempData);
          var form = this.$refs.clientForm.form;
          form.type = data.type || form.type;
          form.fullName = data.fullName || form.fullName;
          form.businessName = data.businessName || form.businessName;
          form.firstName = data.firstName || form.firstName;
          form.lastName = data.lastName || form.lastName;
          form.phone = data.phone || form.phone;
          form.phoneNumber = data.phoneNumber || form.phoneNumber;
          form.email = data.email || form.email;
          form.address = data.address || form.address;
          form.city = data.city || form.city;
          form.state = data.state || form.state;
          form.zipCode = data.zipCode || form.zipCode;
          form.country = data.country || form.country;
          form.taxNumber = data.taxNumber || form.taxNumber;
          form.note = data.note || form.note;
          form.status = data.status !== undefined ? data.status : form.status;
          form.chartOfAccountId = data.chartOfAccountId || form.chartOfAccountId;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('clientEditTempData');
    },
    // Reset form
    resetForm: function resetForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.resetForm();
      }
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/clients/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const clients_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=2b54478b&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_2b54478b_prod_scoped_true_lang_css = __webpack_require__(68224);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=2b54478b&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_2b54478b_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const clients_editvue_type_style_index_0_id_2b54478b_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_2b54478b_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=2b54478b&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=2b54478b&prod&scoped=true&lang=css
var editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css = __webpack_require__(97942);
;// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=2b54478b&prod&scoped=true&lang=css

            

var editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css_options = {};

editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css_options.insert = "head";
editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css_options.singleton = false;

var editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css/* default */.A, editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css_options);



/* harmony default export */ const clients_editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css = (editvue_type_style_index_1_id_2b54478b_prod_scoped_true_lang_css/* default */.A.locals || {});
;// CONCATENATED MODULE: ./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=2b54478b&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/clients/edit.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  clients_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2b54478b",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);