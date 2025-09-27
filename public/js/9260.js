"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9260],{

/***/ 19260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/plans/edit.vue?vue&type=template&id=4c903bc0&scoped=true
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
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Edit plan')) + "\n                    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'plans.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v("\n                        " + _vm._s(_vm.$t('Back')) + "\n                    ")])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form",
      "enctype": "multipart/form-data"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updatePlan.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter plan name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('Amount')) + "\n                                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.amount,
      expression: "form.amount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('amount')
    },
    attrs: {
      "id": "amount",
      "type": "text",
      "name": "amount",
      "placeholder": _vm.$t('Amount')
    },
    domProps: {
      "value": _vm.form.amount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "amount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.description,
      expression: "form.description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('description')
    },
    attrs: {
      "id": "description",
      "placeholder": _vm.$t('Enter plan description')
    },
    domProps: {
      "value": _vm.form.description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "description"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_clients"
    }
  }, [_vm._v(_vm._s(_vm.$t('Limit Clients')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('0 means unlimited')) + ")")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_clients,
      expression: "form.limit_clients"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_clients')
    },
    attrs: {
      "id": "limit_clients",
      "type": "number",
      "name": "limit_clients",
      "placeholder": _vm.$t('Limit clients')
    },
    domProps: {
      "value": _vm.form.limit_clients
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_clients", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_clients"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_suppliers"
    }
  }, [_vm._v(_vm._s(_vm.$t('Limit Suppliers')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('0 means unlimited')) + ")")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_suppliers,
      expression: "form.limit_suppliers"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_suppliers')
    },
    attrs: {
      "id": "limit_suppliers",
      "type": "number",
      "name": "limit_suppliers",
      "placeholder": _vm.$t('Limit suppliers')
    },
    domProps: {
      "value": _vm.form.limit_suppliers
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_suppliers", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_suppliers"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_employees"
    }
  }, [_vm._v(_vm._s(_vm.$t('Limit Employees')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t('0 means unlimited')) + ")")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_employees,
      expression: "form.limit_employees"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_employees')
    },
    attrs: {
      "id": "limit_employees",
      "type": "number",
      "name": "limit_employees",
      "placeholder": _vm.$t('Limit employees')
    },
    domProps: {
      "value": _vm.form.limit_employees
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_employees", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_employees"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_domains"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Limit Domains')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("\n                                        (" + _vm._s(_vm.$t('0 means unlimited')) + ")\n                                    ")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_domains,
      expression: "form.limit_domains"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_domains')
    },
    attrs: {
      "id": "limit_domains",
      "type": "number",
      "name": "limit_domains",
      "placeholder": _vm.$t('Limit domains')
    },
    domProps: {
      "value": _vm.form.limit_domains
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_domains", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_domains"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_purchases"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Limit Purchases')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("\n                                        (" + _vm._s(_vm.$t('0 means unlimited')) + ")\n                                    ")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_purchases,
      expression: "form.limit_purchases"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_purchases')
    },
    attrs: {
      "id": "limit_purchases",
      "type": "number",
      "name": "limit_purchases",
      "placeholder": _vm.$t('Limit purchases')
    },
    domProps: {
      "value": _vm.form.limit_purchases
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_purchases", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_purchases"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "limit_invoices"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Limit Invoices')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-muted"
  }, [_vm._v("\n                                        (" + _vm._s(_vm.$t('0 means unlimited')) + ")\n                                    ")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.limit_invoices,
      expression: "form.limit_invoices"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('limit_invoices')
    },
    attrs: {
      "id": "limit_invoices",
      "type": "number",
      "name": "limit_invoices",
      "placeholder": _vm.$t('Limit invoices')
    },
    domProps: {
      "value": _vm.form.limit_invoices
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "limit_invoices", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "limit_invoices"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "features"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Pricing features')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('features')
    },
    attrs: {
      "options": _vm.features,
      "label": "name",
      "placeholder": _vm.$t('Select pricing features'),
      "multiple": ""
    },
    model: {
      value: _vm.form.features,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "features", $$v);
      },
      expression: "form.features"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "features"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Image')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Attached Image')
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save changes')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/plans/edit.vue?vue&type=script&lang=js
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



/* harmony default export */ const editvue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Plan')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Plan',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Plans',
        url: 'plans.index'
      }, {
        name: 'Edit Plan',
        url: ''
      }],
      url: null,
      form: new vform_es/* default */.Ay({
        image: '',
        name: '',
        amount: 0,
        description: '',
        limit_clients: 0,
        limit_suppliers: 0,
        limit_employees: 0,
        limit_domains: 0,
        limit_purchases: 0,
        limit_invoices: 0,
        features: []
      }),
      features: [],
      loading: true,
      isDemoMode: window.config.isDemoMode
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])),
  created: function created() {
    this.getPlan();
    this.getFeatures();
  },
  methods: {
    // get features
    getFeatures: function getFeatures() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/features');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.features = data.data;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get plan
    getPlan: function getPlan() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/plans/' + _this2.$route.params.id);
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.form.fill(data.data);
              _this2.url = data.data.image;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this3 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this3.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        Swal.fire(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'), 'error');
      }
    },
    // update plan
    updatePlan: function updatePlan() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!_this4.isDemoMode) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2, toast.fire({
                type: 'warning',
                title: _this4.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context3.n = 2;
              return _this4.form.patch(window.location.origin + '/api/plans/' + _this4.$route.params.id).then(function () {
                toast.fire({
                  type: 'success',
                  title: _this4.$t('breadcrumbs_first')
                });
                _this4.$router.push({
                  name: 'plans.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Error!')
                });
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/central/plans/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const plans_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/plans/edit.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  plans_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4c903bc0",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);