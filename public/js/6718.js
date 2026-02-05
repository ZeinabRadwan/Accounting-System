"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6718],{

/***/ 78723
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 66718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ domain_requests)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domain-requests/index.vue?vue&type=template&id=01547f4a
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
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "alert alert-warning"
  }, [_c('strong', [_c('i', {
    staticClass: "icon fas fa-edit"
  }), _vm._v("\n          " + _vm._s(_vm.$t("You need to add an A record to your DNS with IP") + ": " + _vm.server_ip) + "\n        ")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v(_vm._s(_vm.$t("Type")) + ": A")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t("Host")) + ": @")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t("Value")) + ": " + _vm._s(_vm.server_ip))])])]), _vm._v(" "), _c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Domain Requests")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_vm.tenant.plan.limit_domains === 0 || _vm.pagination && _vm.tenant.plan.limit_domains > _vm.pagination.total ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'domain-requests.create'
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Create")) + "\n                "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('GeneralTable', {
    attrs: {
      "columns": _vm.domainRequestColumns,
      "rows": _vm.domainRequestsWithIndex,
      "loading": _vm.loading,
      "table-id": "printMe",
      "wrapper-class": "mt-3",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-status",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(row.status_html)
          }
        })];
      }
    }, {
      key: "actions",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [row.id ? _c('div', {
          staticClass: "btn-group"
        }, [row.status == 0 ? _c('a', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$t('Delete'),
            expression: "$t('Delete')"
          }],
          staticClass: "btn btn-danger btn-sm",
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              return _vm.deleteData(row.id);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        })]) : _c('span', [_vm._v(_vm._s(_vm.$t("no_action_available")))])]) : _vm._e()];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
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
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(16430);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domain-requests/index.vue?vue&type=script&lang=js
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



/* harmony default export */ const domain_requestsvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  components: {
    GeneralTable: GeneralTable["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Domain Requests")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Domain Requests",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Domain Requests",
        url: ""
      }],
      query: "",
      perPage: 10,
      server_ip: ""
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo", "tenant"])), {}, {
    domainRequestColumns: function domainRequestColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        sortable: false
      }, {
        key: "requested_domain",
        label: this.$t("Requested Domain")
      }, {
        key: "status",
        label: this.$t("Status")
      }];
    },
    domainRequestsWithIndex: function domainRequestsWithIndex() {
      var _this = this;
      return this.items.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: _this.pagination && _this.pagination.current_page > 1 ? _this.pagination.per_page * (_this.pagination.current_page - 1) + (index + 1) : index + 1
        });
      });
    }
  }),
  created: function created() {
    this.getData();
    this.getServerIp();
    this.employeePrefix = this.appInfo.employeePrefix;
  },
  methods: {
    // get the tenant
    getServerIp: function getServerIp() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/server-ip");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this2.server_ip = data.data.server_ip;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get data
    getData: function getData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var currentPage;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this3.$store.state.operations.loading = true;
              currentPage = _this3.pagination ? _this3.pagination.current_page : 1;
              _context2.n = 1;
              return _this3.$store.dispatch("operations/fetchData", {
                path: "/api/domain-requests?page=",
                currentPage: currentPage + "&perPage=" + _this3.perPage
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // print table
    print: function print() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this4.$htmlToPaper("printMe");
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    paginate: function paginate() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this5.query === "" ? _this5.getData() : _this5.searchData();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              Swal.fire({
                title: _this6.$t("Are you sure?"),
                text: _this6.$t("Do you really want to delete this Domain Request?"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this6.$t("Confirm"),
                cancelButtonText: _this6.$t("Cancel")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this6.$store.dispatch("operations/deleteData", {
                    path: "/api/domain-requests/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this6.$toast.success(_this6.$t("Deleted!"), _this6.$t("Deleted successfully."));
                      _this6.getData();
                    } else {
                      _this6.$toast.warning(_this6.$t("Failed!"), _this6.$t("Delete failed"));
                    }
                  });
                }
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    }
  }
});
;// ./resources/js/pages/domain-requests/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_domain_requestsvue_type_script_lang_js = (domain_requestsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domain-requests/index.vue?vue&type=style&index=0&id=01547f4a&prod&lang=css
var domain_requestsvue_type_style_index_0_id_01547f4a_prod_lang_css = __webpack_require__(78723);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/domain-requests/index.vue?vue&type=style&index=0&id=01547f4a&prod&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(domain_requestsvue_type_style_index_0_id_01547f4a_prod_lang_css/* default */.A, options);



/* harmony default export */ const pages_domain_requestsvue_type_style_index_0_id_01547f4a_prod_lang_css = (domain_requestsvue_type_style_index_0_id_01547f4a_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/domain-requests/index.vue?vue&type=style&index=0&id=01547f4a&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/domain-requests/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_domain_requestsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const domain_requests = (component.exports);

/***/ }

}]);