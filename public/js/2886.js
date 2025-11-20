"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2886],{

/***/ 36680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}@media print{.btn-group,.card-footer,.card-header,.no-print,.refresh-btn,.search-wrapper{display:none!important}#printMe[dir=ltr],body[dir=ltr] #printMe{direction:ltr}#printMe[dir=rtl],body[dir=rtl] #printMe{direction:rtl}#printMe{margin:0;padding:0;page-break-inside:avoid;width:100%}.table-responsive{overflow:visible!important}#printMe .invoices-table{border-collapse:collapse;border-spacing:0;width:100%}#printMe .invoices-table thead th{background-color:#33a0d9!important;border:none!important;color:#fff!important;font-size:13px!important;font-weight:500!important;padding:12px 8px!important}#printMe[dir=rtl] .invoices-table thead th,body[dir=rtl] #printMe .invoices-table thead th{text-align:right}#printMe[dir=ltr] .invoices-table thead th,body[dir=ltr] #printMe .invoices-table thead th{text-align:left}#printMe .invoices-table tbody tr{page-break-inside:avoid}#printMe .invoices-table tbody tr:nth-child(2n){background-color:#f9fafb!important}#printMe .invoices-table tbody td{border-bottom:1px solid #e5e7eb!important;font-size:13px!important;padding:10px 8px!important}#printMe .invoices-table tbody td a{color:#33a0d9!important;font-weight:500!important}#printMe .badge.bg-success{background:#f6fef4!important;color:#2ab930!important}#printMe .badge.bg-danger,#printMe .badge.bg-success{border-radius:6px!important;display:inline-block!important;font-size:12px!important;font-weight:500!important;padding:6px 12px!important}#printMe .badge.bg-danger{background:#fef4f4!important;color:#dc3545!important}#printMe .saudi-riyal{color:inherit!important;font-weight:500!important}#printMe,.card,.card-body{border:none!important;box-shadow:none!important;margin:0!important;padding:0!important}@page{size:A4 landscape;margin:1cm}#printMe .invoices-table tbody tr,#printMe .invoices-table thead tr{page-break-inside:avoid}#printMe a{color:#33a0d9!important;text-decoration:none!important}#printMe[dir=rtl] .invoices-table tbody td,body[dir=rtl] #printMe .invoices-table tbody td{text-align:right}#printMe[dir=ltr] .invoices-table tbody td,body[dir=ltr] #printMe .invoices-table tbody td{text-align:left}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ receive)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=template&id=5fecca88&scoped=true
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row",
    staticStyle: {
      "justify-content": "flex-end"
    }
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
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
    }],
    staticClass: "btn btn-success refresh-btn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _vm.$can('payment-voucher-create') ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'receiveVouchers.create'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" " + _vm._s(_vm.$t("Create")) + "\n                ")]) : _vm._e()], 1)])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe",
      "dir": _vm.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  }, [_c('table', {
    staticClass: "table invoices-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Entity Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Entity Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Payment Method")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Amount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('payment-voucher-edit') || _vm.$can('payment-voucher-view') || _vm.$can('payment-voucher-delete') ? _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Action")) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('tbody', _vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                    ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getEntityTypeLabel(data.entityType)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getEntityName(data)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getPaymentMethodLabel(data.paymentMethod)))]), _vm._v(" "), _c('td', {
      domProps: {
        "innerHTML": _vm._s(_vm.formatCurrency(data.amount))
      }
    }), _vm._v(" "), _c('td', [data.account ? _c('span', [_vm._v(_vm._s(data.account.label))]) : _vm._e()]), _vm._v(" "), _c('td', [data.date ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(data.date, "Do MMM, YYYY")))]) : _vm._e()]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : data.status === 2 ? _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Cancelled")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('payment-voucher-edit') || _vm.$can('payment-voucher-view') || _vm.$can('payment-voucher-delete') ? _c('td', {
      staticClass: "text-right no-print"
    }, [_c('div', {
      staticClass: "action-dropdown",
      "class": {
        open: _vm.openActionIndex === i
      }
    }, [_c('button', {
      staticClass: "action-icon-btn",
      attrs: {
        "type": "button",
        "data-action-index": i
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.toggleAction(i);
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
    })])]), _vm._v(" "), _vm.openActionIndex === i ? _c('div', {
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
          return _vm.toggleAction(i);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]), _vm._v(" "), _c('ul', [_vm.$can('payment-voucher-view') ? _c('li', [_c('router-link', {
      attrs: {
        "to": {
          name: 'receiveVouchers.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye"
    }), _vm._v("\n                              " + _vm._s(_vm.$t('View')) + "\n                            ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('payment-voucher-edit') ? _c('li', [_c('router-link', {
      attrs: {
        "to": {
          name: 'receiveVouchers.edit',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('Edit')))])], 1) : _vm._e(), _vm._v(" "), _vm.$can('payment-voucher-delete') ? _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.deleteItem(data.slug);
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('Delete')))])]) : _vm._e()])]) : _vm._e()])]) : _vm._e()]);
  }), 0)])])], 1), _vm._v(" "), _c('div', {
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
      "paginate": function paginate($event) {
        _vm.query === '' ? _vm.getAllItem() : _vm.searchData();
      }
    }
  }) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=script&lang=js
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


/* harmony default export */ const receivevue_type_script_lang_js = ({
  name: "receive-vouchers",
  data: function data() {
    return {
      breadcrumbsCurrent: this.$t("Receive Vouchers"),
      breadcrumbs: [{
        name: this.$t("Dashboard"),
        url: "home"
      }, {
        name: this.$t("Vouchers"),
        url: ""
      }, {
        name: this.$t("Receive Vouchers"),
        url: ""
      }],
      query: "",
      items: [],
      pagination: {},
      loading: false,
      currentRoute: "",
      perPage: 10,
      openActionIndex: null,
      searchTimeout: null
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: "operations/appInfo"
  })),
  watch: {
    // watch search data
    query: function query(newQ, oldQ) {
      var _this = this;
      clearTimeout(this.searchTimeout);
      if (newQ === "") {
        this.getAllItem();
      } else {
        this.searchTimeout = setTimeout(function () {
          _this.searchData();
        }, 500);
      }
    }
  },
  created: function created() {
    this.currentRoute = this.$route.path;
    this.getAllItem();
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
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  },
  methods: {
    getAllItem: function getAllItem() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this2$$http$g, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this2.loading = true;
              _context.n = 1;
              return _this2.$http.get(window.location.origin + "/api/vouchers/receive?page=" + _this2.$route.params.page + (_this2.perPage ? "&perPage=" + _this2.perPage : ""));
            case 1:
              _yield$_this2$$http$g = _context.v;
              data = _yield$_this2$$http$g.data;
              _this2.items = data.data;
              _this2.pagination = data.meta;
              _this2.loading = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    searchData: function searchData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(_this3.query.length > 0)) {
                _context2.n = 5;
                break;
              }
              _this3.loading = true;
              _context2.p = 1;
              _context2.n = 2;
              return _this3.$http.get(window.location.origin + "/api/vouchers/search?term=" + _this3.query + "&voucherType=1&page=" + _this3.$route.params.page + (_this3.perPage ? "&perPage=" + _this3.perPage : ""));
            case 2:
              response = _context2.v;
              _this3.items = response.data.data;
              _this3.pagination = response.data.meta;
              _this3.loading = false;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              _this3.loading = false;
            case 4:
              _context2.n = 6;
              break;
            case 5:
              _this3.getAllItem();
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    },
    reload: function reload() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this4.query = "";
              _this4.resetPagination();
              _this4.getAllItem();
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    refreshTable: function refreshTable() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this5.query = "";
              _this5.resetPagination();
              _this5.getAllItem();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    resetPagination: function resetPagination() {
      this.$route.params.page = 1;
    },
    updatePerPager: function updatePerPager() {
      if (this.pagination) this.pagination.current_page = 1;
      this.query === '' ? this.getAllItem() : this.searchData();
    },
    getEntityTypeLabel: function getEntityTypeLabel(type) {
      var labels = {
        client: this.$t("Client"),
        supplier: this.$t("Supplier"),
        chart_of_account: this.$t("Chart of Account")
      };
      return labels[type] || type;
    },
    getEntityName: function getEntityName(data) {
      if (data.client) return data.client.name;
      if (data.supplier) return data.supplier.name;
      if (data.chartOfAccount) return data.chartOfAccount.name;
      return "-";
    },
    getPaymentMethodLabel: function getPaymentMethodLabel(method) {
      var labels = {
        direct: this.$t("Direct"),
        invoice: this.$t("Invoice"),
        purchase: this.$t("Purchase")
      };
      return labels[method] || method;
    },
    toggleAction: function toggleAction(index) {
      var _this6 = this;
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(function () {
          _this6.positionDropdown(index);
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
    deleteItem: function deleteItem(slug) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              sweetalert2_all_default().fire({
                title: _this7.$t("Are you sure?"),
                text: _this7.$t("You will not be able to return to this! This will delete the voucher permanently."),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this7.$t("Confirm"),
                cancelButtonText: _this7.$t("Cancel")
              }).then(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(result) {
                  var response, successMessage, translatedMessage, errorMessage, _translatedMessage, _error$response, _errorMessage, errorData, firstErrorKey, firstError, _translatedMessage2, _t2;
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.p = _context5.n) {
                      case 0:
                        if (!result.value) {
                          _context5.n = 4;
                          break;
                        }
                        _context5.p = 1;
                        _context5.n = 2;
                        return _this7.$http["delete"](window.location.origin + "/api/vouchers/" + slug);
                      case 2:
                        response = _context5.v;
                        if (response.data.statusCode === 200) {
                          // Success - translate message if available
                          successMessage = response.data.message || _this7.$t('Voucher deleted successfully');
                          translatedMessage = _this7.$t(successMessage);
                          _this7.$toastr.s(translatedMessage !== successMessage ? translatedMessage : successMessage);
                          _this7.getAllItem();
                        } else {
                          // Handle non-200 status codes
                          errorMessage = response.data.message || _this7.$t('Error deleting voucher');
                          _translatedMessage = _this7.$t(errorMessage);
                          _this7.$toastr.e(_translatedMessage !== errorMessage ? _translatedMessage : errorMessage);
                        }
                        _context5.n = 4;
                        break;
                      case 3:
                        _context5.p = 3;
                        _t2 = _context5.v;
                        console.error('Error deleting voucher:', _t2);

                        // Extract error message from response
                        _errorMessage = null;
                        if (_t2 !== null && _t2 !== void 0 && (_error$response = _t2.response) !== null && _error$response !== void 0 && _error$response.data) {
                          errorData = _t2.response.data; // Check for message field
                          if (errorData.message && typeof errorData.message === 'string') {
                            _errorMessage = errorData.message;
                          } else if (errorData.error && typeof errorData.error === 'string') {
                            _errorMessage = errorData.error;
                          } else if (errorData.errors && _typeof(errorData.errors) === 'object') {
                            // If there are validation errors, try to get the first one
                            firstErrorKey = Object.keys(errorData.errors)[0];
                            if (firstErrorKey && Array.isArray(errorData.errors[firstErrorKey])) {
                              firstError = errorData.errors[firstErrorKey][0];
                              if (typeof firstError === 'string') {
                                _errorMessage = firstError;
                              }
                            } else if (firstErrorKey && typeof errorData.errors[firstErrorKey] === 'string') {
                              _errorMessage = errorData.errors[firstErrorKey];
                            }
                          }
                        } else if (_t2 !== null && _t2 !== void 0 && _t2.message && typeof _t2.message === 'string') {
                          _errorMessage = _t2.message;
                        }

                        // Translate and show error
                        if (_errorMessage) {
                          _translatedMessage2 = _this7.$t(_errorMessage);
                          _this7.$toastr.e(_translatedMessage2 !== _errorMessage ? _translatedMessage2 : _errorMessage);
                        } else {
                          _this7.$toastr.e(_this7.$t('Error deleting voucher'));
                        }
                      case 4:
                        return _context5.a(2);
                    }
                  }, _callee5, null, [[1, 3]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    formatCurrency: function formatCurrency(amount) {
      if (amount === null || amount === undefined) {
        return '0.00';
      }
      var numValue = Number(amount);
      var formatted = numValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return formatted + ' <span class="saudi-riyal">ê</span>';
    }
  }
});
;// ./resources/js/pages/vouchers/receive/index.vue?vue&type=script&lang=js
 /* harmony default export */ const vouchers_receivevue_type_script_lang_js = (receivevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=0&id=5fecca88&prod&scoped=true&lang=css
var receivevue_type_style_index_0_id_5fecca88_prod_scoped_true_lang_css = __webpack_require__(83211);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=0&id=5fecca88&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(receivevue_type_style_index_0_id_5fecca88_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const vouchers_receivevue_type_style_index_0_id_5fecca88_prod_scoped_true_lang_css = (receivevue_type_style_index_0_id_5fecca88_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=0&id=5fecca88&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=1&id=5fecca88&prod&lang=css
var receivevue_type_style_index_1_id_5fecca88_prod_lang_css = __webpack_require__(36680);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=1&id=5fecca88&prod&lang=css

            

var receivevue_type_style_index_1_id_5fecca88_prod_lang_css_options = {};

receivevue_type_style_index_1_id_5fecca88_prod_lang_css_options.insert = "head";
receivevue_type_style_index_1_id_5fecca88_prod_lang_css_options.singleton = false;

var receivevue_type_style_index_1_id_5fecca88_prod_lang_css_update = injectStylesIntoStyleTag_default()(receivevue_type_style_index_1_id_5fecca88_prod_lang_css/* default */.A, receivevue_type_style_index_1_id_5fecca88_prod_lang_css_options);



/* harmony default export */ const vouchers_receivevue_type_style_index_1_id_5fecca88_prod_lang_css = (receivevue_type_style_index_1_id_5fecca88_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/vouchers/receive/index.vue?vue&type=style&index=1&id=5fecca88&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/vouchers/receive/index.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  vouchers_receivevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5fecca88",
  null
  
)

/* harmony default export */ const receive = (component.exports);

/***/ }),

/***/ 83211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-5fecca88]{border:none!important}.invoices-table[data-v-5fecca88]{border-collapse:separate;border-spacing:0}.invoices-table thead th[data-v-5fecca88]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-table thead tr[data-v-5fecca88]{border:none!important}.invoices-table thead th[data-v-5fecca88]:first-child{border-top-left-radius:10px}.invoices-table thead th[data-v-5fecca88]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-table thead th[data-v-5fecca88]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-table thead th[data-v-5fecca88]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.refresh-btn[data-v-5fecca88]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.btn-primary[data-v-5fecca88]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.action-dropdown[data-v-5fecca88]{display:inline-block;position:relative}.action-icon-btn[data-v-5fecca88]{align-items:center;background-color:#fff;border:none;cursor:pointer;display:inline-flex;height:24px;justify-content:center;padding:0;width:24px}.action-menu[data-v-5fecca88]{animation:slideInDown-5fecca88 .3s ease-out;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 20px 0 #00000014;max-height:80vh;min-width:200px;overflow:hidden;position:fixed;z-index:9999}[dir=rtl] .action-menu[data-v-5fecca88]{left:45px!important;right:auto!important}@keyframes slideInDown-5fecca88{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.action-menu-header[data-v-5fecca88]{align-items:center;background:#f8fafc;border-bottom:1px solid #f1f5fb;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:12px 16px}.action-menu-title[data-v-5fecca88]{color:#023033;font-size:14px;font-weight:600}.action-menu-close[data-v-5fecca88]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s ease}.action-menu-close[data-v-5fecca88]:hover{background:#e5e7eb;color:#374151}.action-menu ul[data-v-5fecca88]{list-style:none;margin:0;padding:8px 0}.action-menu li[data-v-5fecca88]{border-bottom:1px solid #f1f5fb}.action-menu li[data-v-5fecca88]:last-child{border-bottom:none}.action-menu li a[data-v-5fecca88]{align-items:center;color:#023033;display:flex;font-size:14px;font-weight:500;gap:10px;padding:12px 16px;position:relative;text-decoration:none;transition:all .2s ease}.action-menu li a i[data-v-5fecca88]{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;width:16px}.action-menu li a[data-v-5fecca88]:hover{background:#f8fafc;color:#2ab930;transform:translateX(2px)}.action-menu li a[data-v-5fecca88]:before{background:#2ab930;bottom:0;content:\"\";left:0;position:absolute;top:0;transform:scaleY(0);transition:transform .2s ease;width:3px}.action-menu li a[data-v-5fecca88]:hover:before{transform:scaleY(1)}.btn-group.c-w-100[data-v-5fecca88]{gap:10px}.card[data-v-5fecca88]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px;overflow:visible}.card-footer[data-v-5fecca88]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.invoices-table .badge.bg-success[data-v-5fecca88]{background:#f6fef4!important;color:#2ab930!important}.invoices-table .badge.bg-danger[data-v-5fecca88],.invoices-table .badge.bg-success[data-v-5fecca88]{font-size:12px!important;font-weight:500!important;padding:10px 16px}.invoices-table .badge.bg-danger[data-v-5fecca88]{background:#fef4f4!important;color:#dc3545!important}.form-control[data-v-5fecca88]{background:#fff!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);