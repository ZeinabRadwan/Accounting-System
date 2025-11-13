"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3603],{

/***/ 16260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-5820b3bd]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-5820b3bd]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.table th[data-v-5820b3bd]{width:35%}.badge.bg-success[data-v-5820b3bd]{background:#f6fef4!important;color:#2ab930!important}.badge.bg-danger[data-v-5820b3bd]{background:#fef4f4!important;color:#dc3545!important}.badge.bg-primary[data-v-5820b3bd]{background:#e3f2fd!important;color:#1976d2!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=template&id=5820b3bd&scoped=true
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
    staticClass: "btn-group c-w-100"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'nonInvoicePayments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _vm.$can('non-invoice-payment-edit') && _vm.payment && _vm.payment.status !== 2 ? _c('router-link', {
    staticClass: "btn btn-success",
    attrs: {
      "to": {
        name: 'nonInvoicePayments.edit',
        params: {
          slug: _vm.$route.params.slug
        }
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Edit')) + "\n              ")]) : _vm._e()], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _vm.payment ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table table-bordered mb-0"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Client')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.client ? _vm.payment.client.name : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Type')))]), _vm._v(" "), _c('td', [parseInt(_vm.payment.type) === 1 ? _c('span', {
    staticClass: "badge bg-primary"
  }, [_vm._v(_vm._s(_vm.$t('Payment Received')))]) : _c('span', {
    staticClass: "badge bg-primary"
  }, [_vm._v(_vm._s(_vm.$t('Payment Sent')))])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Amount')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.amount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Account')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.account ? _vm.payment.account.label : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Payment Date')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(_vm.payment.date, 'Do MMM, YYYY')))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('td', [_vm.payment.status === 1 ? _c('span', {
    staticClass: "badge bg-success"
  }, [_vm._v(_vm._s(_vm.$t('Active')))]) : _vm.payment.status === 2 ? _c('span', {
    staticClass: "badge bg-danger"
  }, [_vm._v(_vm._s(_vm.$t('Cancelled')))]) : _c('span', {
    staticClass: "badge bg-danger"
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "table-responsive table-custom"
  }, [_c('table', {
    staticClass: "table table-bordered mb-0"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Receipt No')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.transaction ? _vm.payment.transaction.receipt_no : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Cheque No')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.transaction ? _vm.payment.transaction.cheque_no : '-'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.payment.note || '-'))])])])])])])]) : !_vm.loading ? _c('div', {
    staticClass: "text-center text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('No data found')) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'nonInvoicePayments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n            ")])], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const showvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Non Invoice Payment Details')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Details',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Payments',
        url: ''
      }, {
        name: 'Non Invoice Payments',
        url: 'nonInvoicePayments.index'
      }, {
        name: 'Details',
        url: ''
      }],
      loading: false,
      payment: null
    };
  },
  created: function created() {
    this.fetchPayment();
  },
  methods: {
    fetchPayment: function fetchPayment() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return axios_default().get(window.location.origin + '/api/payments/non-invoice/' + _this.$route.params.slug);
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.payment = data.data;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.payment = null;
            case 4:
              _context.p = 4;
              _this.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});
;// ./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=script&lang=js
 /* harmony default export */ const non_invoice_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=style&index=0&id=5820b3bd&prod&scoped=true&lang=css
var showvue_type_style_index_0_id_5820b3bd_prod_scoped_true_lang_css = __webpack_require__(16260);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=style&index=0&id=5820b3bd&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_5820b3bd_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const non_invoice_showvue_type_style_index_0_id_5820b3bd_prod_scoped_true_lang_css = (showvue_type_style_index_0_id_5820b3bd_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/payments/clients/non-invoice/show.vue?vue&type=style&index=0&id=5820b3bd&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/payments/clients/non-invoice/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  non_invoice_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5820b3bd",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ })

}]);