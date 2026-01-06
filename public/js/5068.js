"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5068],{

/***/ 5068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hero)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/hero.vue?vue&type=template&id=8f7ba7b4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.update.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Hero')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body p-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Hero Tagline')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_tagline,
      expression: "form.hero_tagline"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_tagline')
    },
    attrs: {
      "type": "text",
      "id": "hero_tagline",
      "placeholder": _vm.$t('Enter your hero tagline')
    },
    domProps: {
      "value": _vm.form.hero_tagline
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_tagline", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_tagline"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_title"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Title')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_title,
      expression: "form.hero_title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_title')
    },
    attrs: {
      "type": "text",
      "id": "hero_title",
      "placeholder": _vm.$t('Enter your hero title')
    },
    domProps: {
      "value": _vm.form.hero_title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_title"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_description"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Description')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_description,
      expression: "form.hero_description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_description')
    },
    attrs: {
      "id": "hero_description",
      "placeholder": _vm.$t('Enter your hero description')
    },
    domProps: {
      "value": _vm.form.hero_description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_description"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_demo_button_text"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Demo Button Text')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_demo_button_text,
      expression: "form.hero_demo_button_text"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_demo_button_text')
    },
    attrs: {
      "type": "text",
      "id": "hero_demo_button_text",
      "placeholder": _vm.$t('Enter Hero Demo Button Text')
    },
    domProps: {
      "value": _vm.form.hero_demo_button_text
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_demo_button_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_demo_button_text"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_demo_button_link"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Demo Button Link')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_demo_button_link,
      expression: "form.hero_demo_button_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_demo_button_link')
    },
    attrs: {
      "type": "text",
      "id": "hero_demo_button_link",
      "placeholder": _vm.$t('Enter a link to a demo page')
    },
    domProps: {
      "value": _vm.form.hero_demo_button_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_demo_button_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_demo_button_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_get_started_button_text"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Get Started Button Text')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_get_started_button_text,
      expression: "form.hero_get_started_button_text"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_get_started_button_text')
    },
    attrs: {
      "type": "text",
      "id": "hero_get_started_button_text",
      "placeholder": _vm.$t('Enter Hero Get Started Button Text')
    },
    domProps: {
      "value": _vm.form.hero_get_started_button_text
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_get_started_button_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_get_started_button_text"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_get_started_button_link"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Get Started Button Link')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_get_started_button_link,
      expression: "form.hero_get_started_button_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_get_started_button_link')
    },
    attrs: {
      "type": "text",
      "id": "hero_get_started_button_link",
      "placeholder": _vm.$t('Enter a link to a page or a page template')
    },
    domProps: {
      "value": _vm.form.hero_get_started_button_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_get_started_button_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_get_started_button_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5"
  }, [_c('toggle-button', {
    attrs: {
      "sync": true
    },
    model: {
      value: _vm.form.is_show_hero_section,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_show_hero_section", $$v);
      },
      expression: "form.is_show_hero_section"
    }
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Show at landing page")) + "\n                ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n            ")])], 1)])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/hero.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const herovue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Landing Page Settings')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Update Profile',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Update',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        hero_tagline: '',
        hero_title: '',
        hero_description: '',
        hero_demo_button_text: '',
        hero_demo_button_link: '',
        hero_get_started_button_text: '',
        hero_get_started_button_link: '',
        is_show_hero_section: false
      }),
      loading: true,
      user: '',
      isDemoMode: window.config.isDemoMode
    };
  },
  computed: (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  }),
  created: function created() {
    this.getData();
  },
  methods: {
    // get the user
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + '/api/settings/hero-settings');
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.hero_tagline = data.data.hero_tagline || '';
              _this.form.hero_title = data.data.hero_title || '';
              _this.form.hero_description = data.data.hero_description || '';
              _this.form.hero_demo_button_text = data.data.hero_demo_button_text || '';
              _this.form.hero_demo_button_link = data.data.hero_demo_button_link || '';
              _this.form.hero_get_started_button_text = data.data.hero_get_started_button_text || '';
              _this.form.hero_get_started_button_link = data.data.hero_get_started_button_link || '';
              _this.form.is_show_hero_section = _this.appInfo.is_show_hero_section;
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // update
    update: function update() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", toast.fire({
                type: 'warning',
                title: _this2.$t('You are not allowed to do this in demo version.')
              }));
            case 2:
              _context2.next = 4;
              return _this2.form.patch(window.location.origin + '/api/settings/hero-settings').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Landing Page Settings updated successfully')
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this2.$t('Please check your input and try again.')
                });
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/central/settings/hero.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_herovue_type_script_lang_js = (herovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/settings/hero.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  settings_herovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "8f7ba7b4",
  null
  
)

/* harmony default export */ const hero = (component.exports);

/***/ })

}]);