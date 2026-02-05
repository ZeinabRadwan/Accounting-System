"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3837],{

/***/ 73837
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/show.vue?vue&type=template&id=7e1c81aa
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row no-print tabs-header-row"
  }, [_c('div', {
    staticClass: "w-100 text-right float-right"
  }, [_vm.allData ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c('div', {
    staticClass: "btn-group"
  }), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'creditNotes.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n          ")])], 1)]) : _vm._e()])]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row"
  }, [_vm._m(0)]) : _vm.allData ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h5', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t('Credit Note')) + ": " + _vm._s(_vm.allData.creditNoteNo))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row invoice-info mb-3"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Reference Sales Invoice')) + ":")]), _vm._v(" "), _vm.allData.invoice && _vm.allData.invoice.slug ? _c('router-link', {
    attrs: {
      "to": {
        name: 'invoices.show',
        params: {
          slug: _vm.allData.invoice.slug
        }
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.allData.invoiceNo || _vm.allData.invoice && _vm.allData.invoice.invoiceNo) + "\n              ")]) : _c('span', [_vm._v(_vm._s(_vm.allData.invoiceNo || _vm.allData.invoice && _vm.allData.invoice.invoiceNo))])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Date')) + ":")]), _vm._v("\n              " + _vm._s(_vm._f("moment")(_vm.allData.date, "Do MMM, YYYY")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t('Customer details')))]), _vm._v(" "), _vm.allData.client ? _c('p', {
    staticClass: "mb-0"
  }, [_c('strong', [_vm._v(_vm._s(_vm.allData.clientName || _vm.allData.client.name))]), _vm._v(" "), _vm.allData.client.email ? _c('span', [_c('br'), _vm._v(_vm._s(_vm.$t('Email')) + ": " + _vm._s(_vm.allData.client.email))]) : _vm._e(), _vm._v(" "), _vm.allData.client.phone ? _c('span', [_c('br'), _vm._v(_vm._s(_vm.$t('Phone')) + ": " + _vm._s(_vm.allData.client.phone))]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Discount Amount')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Tax (15%)')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Total')))])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.allData.discountAmount))
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.allData.taxAmount))
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.allData.totalAmount))
    }
  })])])])]), _vm._v(" "), _vm.allData.note ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Notes')) + ":")]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.allData.note))])])]) : _vm._e(), _vm._v(" "), _vm.allData.journalEntry ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Journal Entry')) + ":")]), _vm._v(" "), _c('router-link', {
    staticClass: "badge bg-info text-white ml-1",
    attrs: {
      "to": {
        name: 'journal-entries.show',
        params: {
          id: _vm.allData.journalEntry.id
        }
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.allData.journalEntry.entry_number || '#' + _vm.allData.journalEntry.id) + "\n              ")])], 1)]) : _vm._e()])])])]) : !_vm.loading && !_vm.allData ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 text-center py-5"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('Credit note not found.')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'creditNotes.index'
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('Back to list')))])], 1)]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 text-center py-5"
  }, [_c('i', {
    staticClass: "fas fa-spinner fa-spin fa-2x"
  })]);
}];

;// ./resources/js/pages/sales/credit-notes/show.vue?vue&type=template&id=7e1c81aa

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/show.vue?vue&type=script&lang=js
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


/* harmony default export */ const showvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Credit Note')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Sales',
        url: ''
      }, {
        name: 'Credit Note',
        url: 'creditNotes.index'
      }, {
        name: '',
        url: ''
      }],
      allData: null,
      loading: true
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  })),
  created: function created() {
    this.breadcrumbsCurrent = this.$t('Credit Note Details');
    this.breadcrumbs[1].name = this.$t('Sales');
    this.breadcrumbs[2].name = this.$t('Credit Note');
    this.breadcrumbs[3].name = this.$t('Details');
    this.loadCreditNote();
  },
  methods: {
    loadCreditNote: function loadCreditNote() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var slug, _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              slug = _this.$route.params.slug;
              _context.n = 2;
              return axios_default().get(window.location.origin + '/api/credit-notes/' + encodeURIComponent(slug));
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.allData = data.data || data;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.allData = null;
              _this.$toast.error(_this.$t('Error'), _this.$t('Credit note not found.'));
            case 4:
              _context.p = 4;
              _this.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    formatCurrency: function formatCurrency(amount) {
      var n = Number(amount);
      if (isNaN(n)) return '0.00';
      var sym = this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + ' ' : '';
      return sym + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
});
;// ./resources/js/pages/sales/credit-notes/show.vue?vue&type=script&lang=js
 /* harmony default export */ const credit_notes_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/credit-notes/show.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  credit_notes_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }

}]);