"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2338],{

/***/ 2338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/tenants/show.vue?vue&type=template&id=afe2c32e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _vm.data ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-lg-4 tenant-details"
  }, [_c('div', {
    staticClass: "card card-primary card-outline"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('img', _vm._b({
    staticClass: "profile-user-img img-fluid img-circle",
    attrs: {
      "alt": _vm.$t('Attached Image')
    }
  }, 'img', _vm.getAvatarProps(_vm.data.photo_url, '', 'default-avatar.jpeg'), false))]), _vm._v(" "), _c('h3', {
    staticClass: "profile-username text-center text-capitalize"
  }, [_vm._v("\n            " + _vm._s(_vm.data.name) + "\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "profile-username text-center d-block",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(_vm._s(_vm.data.email))]), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tenant ID")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.id))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("name")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.name))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("email")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.email))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Company")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.company))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("domain")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.domain))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Current Plan")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.plan && _vm.data.plan.name))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Trial Started At")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(_vm.data.created_at, "Do MMM, YYYY")))])]), _vm._v(" "), _vm.data.trial_ends_at ? _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Trial Ends At")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(_vm.data.trial_ends_at, "Do MMM, YYYY")))])]) : _vm._e(), _vm._v(" "), _vm.data.created_at ? _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Created At")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(_vm.data.created_at, "Do MMM, YYYY")))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Banned")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.data.is_banned ? "True" : "False"))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "domain-twrapper card mt-0"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t("domain")))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('table', {
    staticClass: "mt-0"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("primary_domain")))]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": _vm.data.domain_url,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.data.domain_url))])])]), _vm._v(" "), _vm._l(_vm.data.domains, function (domain, i) {
    return _c('tr', {
      key: domain.id
    }, [_c('td', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v(_vm._s(_vm.$t("domain")) + " " + _vm._s(i + 1))]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": domain,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(_vm.data.domain))])])]);
  })], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-lg-8"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.data.limitations && _vm.data.limitations, function (limitation, i) {
    return _c('div', {
      key: i,
      staticClass: "col-lg-4 col-md-2 col-sm-6 col-12"
    }, [_c('div', {
      staticClass: "small-box",
      "class": limitation.bgColor
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('h3', {
      staticClass: "text-wrap"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(limitation.name)) + ": " + _vm._s(limitation.limit) + "\n              ")]), _vm._v(" "), _c('p', {
      staticClass: "mb-0"
    }, [_vm._v("\n                " + _vm._s(_vm.$t("Used")) + ": " + _vm._s(limitation.current) + "\n              ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("Remaining")) + ": " + _vm._s(limitation.remaining))])]), _vm._v(" "), _c('div', {
      staticClass: "icon"
    }, [_c('i', {
      "class": limitation.icon
    })])])]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Invoice")))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card-body p-0 position-relative"
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
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Plan')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Qty')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Transaction Type')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Trx ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Amount')) + "\n                          "), _c('span', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: 'Base Currency  <br/><small>(Converted USD)</small>',
      expression: "'Base Currency  <br/><small>(Converted USD)</small>'"
    }],
    staticClass: "badge badge-info"
  }, [_c('i', {
    staticClass: "fas fa-info"
  })])]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Payment Status')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Created At')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.data && _vm.data.tenant_invoices, function (tenant_invoice, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.data && _vm.data.tenant_invoices,
        expression: "data && data.tenant_invoices"
      }],
      key: i
    }, [_c('td', [_vm._v(_vm._s(tenant_invoice.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tenant_invoice.plan.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tenant_invoice.quantity))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tenant_invoice.method))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tenant_invoice.system_trx_id))]), _vm._v(" "), _c('td', [_vm._v("\n                          " + _vm._s(tenant_invoice.default_amount_rate * tenant_invoice.quantity) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(" "), _c('br'), _vm._v("\n                          ($" + _vm._s(tenant_invoice.amount * tenant_invoice.quantity) + ")\n                        ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(tenant_invoice.status))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(tenant_invoice.created_at, "Do MMM, YYYY HH:mm:A")))]), _vm._v(" "), _c('td', {
      staticClass: "text-center no-print"
    }, [tenant_invoice.status == 'success' ? _c('div', {
      staticClass: "btn-group"
    }, [_c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Download'),
        expression: "$t('Download')"
      }],
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.download(tenant_invoice.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-file-download"
    })])]) : _c('div', {
      staticClass: "text-center"
    }, [_c('p', [_vm._v("N/A")])])])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.data.tenant_invoices && _vm.data.tenant_invoices.length < 1,
      expression: "data.tenant_invoices &&\n    data.tenant_invoices.length < 1\n    "
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "12"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1)])])])])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/mixins/avatarMixin.js
var avatarMixin = __webpack_require__(97469);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/tenants/show.vue?vue&type=script&lang=js
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
  layout: "central",
  middleware: ["auth", "check-permissions"],
  mixins: [avatarMixin/* default */.A],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Tenant Details")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Tenant Details",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Tenants",
        url: "tenants.index"
      }, {
        name: "Tenant Details",
        url: ""
      }],
      url: null,
      showModal: false,
      data: {},
      loading: true
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])),
  created: function created() {
    this.getTenant();
  },
  methods: {
    // get the tenant
    getTenant: function getTenant() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/tenants/" + _this.$route.params.id);
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.data = data;
              _this.loading = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // print
    printWindow: function printWindow() {
      window.print();
    },
    // download invoice
    download: function download(id) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$axios.post(window.location.origin + "/api/payments/download", {
                payment_id: id
              }, {
                responseType: "blob"
              }).then(function (response) {
                toast.fire({
                  type: "success",
                  title: _this2.$t("Successfully created")
                });
                window.open(URL.createObjectURL(response.data));
              })["catch"](function () {
                toast.fire({
                  type: "error",
                  title: _this2.$t("Opps...something went wrong")
                });
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/central/tenants/show.vue?vue&type=script&lang=js
 /* harmony default export */ const tenants_showvue_type_script_lang_js = (showvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/tenants/show.vue?vue&type=style&index=0&id=afe2c32e&prod&lang=scss&scoped=true
var showvue_type_style_index_0_id_afe2c32e_prod_lang_scss_scoped_true = __webpack_require__(35588);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/tenants/show.vue?vue&type=style&index=0&id=afe2c32e&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(showvue_type_style_index_0_id_afe2c32e_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const tenants_showvue_type_style_index_0_id_afe2c32e_prod_lang_scss_scoped_true = (showvue_type_style_index_0_id_afe2c32e_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/central/tenants/show.vue?vue&type=style&index=0&id=afe2c32e&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/tenants/show.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  tenants_showvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "afe2c32e",
  null
  
)

/* harmony default export */ const show = (component.exports);

/***/ }),

/***/ 35588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tenant-details h3[data-v-afe2c32e]{margin:15px 0 0}.card-body.tenant-details a[data-v-afe2c32e]{display:block;font-size:16px;margin-top:0;text-align:center}.tenant-details table[data-v-afe2c32e]{margin-top:20px;width:100%}.tenant-details table tr td[data-v-afe2c32e]{border:1px solid #ddd;padding:8px 15px}.tenant-details table tr td[data-v-afe2c32e]:first-child{width:30%}.domain-twrapper .card-header h3[data-v-afe2c32e]{font-size:16px;margin:0;padding:0}.box-profile .list-group-item[data-v-afe2c32e]{padding-left:20px;padding-right:20px}.box-profile .list-group[data-v-afe2c32e]{border-left:1px solid #ddd;border-radius:0;border-right:1px solid #ddd}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    /**
     * Get avatar with fallback to default avatar if image doesn't exist
     * @param {string|null} imagePath - The image path (can be null or empty)
     * @param {string} directory - The directory where the image is stored (e.g., 'clients', 'suppliers', 'employees')
     * @param {string} defaultAvatar - The default avatar filename (defaults to 'default-avatar.jpeg')
     * @returns {string} The full URL to the avatar image
     */
    getAvatarWithFallback: function getAvatarWithFallback(imagePath) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      // If no image path provided, return default avatar
      if (!imagePath || imagePath.trim() === '') {
        return window.location.origin + '/images/' + defaultAvatar;
      }

      // Build the full image path
      var fullImagePath = directory ? "images/".concat(directory, "/").concat(imagePath) : "images/".concat(imagePath);
      var fullUrl = window.location.origin + '/' + fullImagePath;

      // Return the image URL - the browser will handle 404s and show broken image icon
      // We could implement a more sophisticated check here, but for now we'll rely on the backend
      // to provide the correct fallback URL through the Resource classes
      return fullUrl;
    },
    /**
     * Handle image error by setting src to default avatar
     * @param {Event} event - The error event from the img element
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     */
    handleImageError: function handleImageError(event) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      var img = event.target;
      img.src = window.location.origin + '/images/' + defaultAvatar;
      img.onerror = null; // Prevent infinite loop
    },
    /**
     * Get avatar URL for display with error handling
     * @param {string|null} imagePath - The image path
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     * @returns {Object} Object with src and onerror handler
     */
    getAvatarProps: function getAvatarProps(imagePath) {
      var _this = this;
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      return {
        src: this.getAvatarWithFallback(imagePath, directory, defaultAvatar),
        onerror: function onerror(event) {
          return _this.handleImageError(event, directory, defaultAvatar);
        }
      };
    }
  }
});

/***/ })

}]);