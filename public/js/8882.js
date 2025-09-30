"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8882],{

/***/ 8882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscription_requests)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/subscription-requests/index.vue?vue&type=template&id=097d0705
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
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("All Subscriptions")) + "\n            ")])]), _vm._v(" "), _c('div', {
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
    staticClass: "btn btn-success",
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
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print Table'),
      expression: "$t('Print Table')"
    }],
    staticClass: "btn btn-info",
    on: {
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Tenant')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Transaction ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Document Path')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Plan Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Plan Price')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Month')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Updated By')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Created At')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Action")) + "\n                  ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (subscriptionRequest, i) {
    var _subscriptionRequest$;
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm._v(_vm._s(subscriptionRequest.id))]), _vm._v(" "), subscriptionRequest.tenant ? _c('td', [_c('a', {
      attrs: {
        "href": subscriptionRequest.tenant.domain_url
      }
    }, [_vm._v("\n                      " + _vm._s(subscriptionRequest.tenant.name) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s((_subscriptionRequest$ = subscriptionRequest.transaction_id) !== null && _subscriptionRequest$ !== void 0 ? _subscriptionRequest$ : _vm.$t('Not Available')))]), _vm._v(" "), _c('td', [subscriptionRequest.document_path ? _c('a', {
      attrs: {
        "href": subscriptionRequest.document_url,
        "target": "_blank"
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.$t('Download')) + "\n                    ")]) : _c('div', [_vm._v("\n                      " + _vm._s(_vm.$t('Not Available')) + "\n                    ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(subscriptionRequest.plan.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(subscriptionRequest.plan.amount) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(subscriptionRequest.quantity))]), _vm._v(" "), _c('td', {
      staticClass: "text-center",
      domProps: {
        "innerHTML": _vm._s(subscriptionRequest.status_html)
      }
    }), _vm._v(" "), _c('td', [subscriptionRequest.status_updated_by ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: subscriptionRequest.status_updated_by.email,
        expression: "subscriptionRequest.status_updated_by.email"
      }]
    }, [_vm._v("\n                      " + _vm._s(subscriptionRequest.status_updated_by.name) + "\n                    ")]) : _c('span', [_vm._v("\n                      " + _vm._s(_vm.$t('Not updated yet!')) + "\n                    ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(subscriptionRequest.created_at, 'Do MMM, YYYY')))]), _vm._v(" "), _c('td', {
      staticClass: "text-right no-print"
    }, [subscriptionRequest.id ? _c('div', {
      staticClass: "btn-group"
    }, [_c('div', {
      staticClass: "dropdown show"
    }, [_c('a', {
      staticClass: "btn btn-secondary dropdown-toggle",
      attrs: {
        "href": "!#",
        "role": "button",
        "id": "dropdownMenuLink",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }
    }, [_vm._v("\n                          " + _vm._s(_vm.$t("Action")) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "dropdown-menu",
      attrs: {
        "aria-labelledby": "dropdownMenuLink"
      }
    }, [_c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Accepted'),
        expression: "$t('Accepted')"
      }],
      staticClass: "btn btn-success btn-sm dropdown-item",
      attrs: {
        "disabled": subscriptionRequest.status === _vm.STATUS_ACCEPTED,
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.update(subscriptionRequest.id, _vm.STATUS_ACCEPTED);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-link"
    }), _vm._v("\n                            " + _vm._s(_vm.$t("Accepted")) + "\n                          ")]), _vm._v(" "), _c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Rejected'),
        expression: "$t('Rejected')"
      }],
      staticClass: "btn btn-danger btn-sm dropdown-item",
      attrs: {
        "disabled": subscriptionRequest.status === _vm.STATUS_REJECTED || subscriptionRequest.status === _vm.STATUS_ACCEPTED,
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.update(subscriptionRequest.id, _vm.STATUS_REJECTED);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    }), _vm._v("\n                            " + _vm._s(_vm.$t("Rejected")) + "\n                          ")]), _vm._v(" "), _c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "$t('Delete')"
      }],
      staticClass: "btn btn-danger btn-sm dropdown-item",
      attrs: {
        "disabled": subscriptionRequest.status !== _vm.STATUS_PENDING,
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.deleteData(subscriptionRequest.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    }), _vm._v(" " + _vm._s(_vm.$t("Delete")) + "\n                          ")])])])]) : _vm._e()])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "12"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('per_page')) + " ")]), _vm._v(" "), _c('div', [_c('select', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/subscription-requests/index.vue?vue&type=script&lang=js
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

/* harmony default export */ const subscription_requestsvue_type_script_lang_js = ({
  layout: "central",
  middleware: ["auth"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("All Subscription Requests")
    };
  },
  data: function data() {
    return {
      STATUS_PENDING: 0,
      STATUS_ACCEPTED: 1,
      STATUS_REJECTED: 2,
      breadcrumbsCurrent: "All Subscription Requests",
      breadcrumbs: [{
        name: "Subscriptions",
        url: "home"
      }, {
        name: "All Subscription Requests",
        url: ""
      }],
      query: "",
      perPage: 10
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo", "tenant"])),
  created: function created() {
    this.getData();
  },
  methods: {
    // get data
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var currentPage;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.$store.state.operations.loading = true;
              currentPage = _this.pagination ? _this.pagination.current_page : 1;
              _context.n = 1;
              return _this.$store.dispatch("operations/fetchData", {
                path: "/api/subscription-requests?page=",
                currentPage: currentPage + "&perPage=" + _this.perPage
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(_this2.query === '')) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.getData();
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.n = 3;
              return _this2.searchData();
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this3.pagination.current_page = 1;
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this4.query = '';
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // print table
    print: function print() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this5.$htmlToPaper("printMe");
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    update: function update(slug, status) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              Swal.fire({
                title: _this6.$t("Are you sure?"),
                text: _this6.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this6.$t("Confirm"),
                cancelButtonText: _this6.$t("Cancel")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this6.$axios.patch("/api/subscription-requests/" + slug, {
                    status: status
                  }).then(function () {
                    _this6.$toast.success(_this6.$t("Updated successfully!"), _this6.$t("Updated successfully."));
                    _this6.getData();
                    location.reload();
                  })["catch"](function (e) {
                    _this6.$toast.warning(_this6.$t("Failed!"), _this6.$t("There was something wrong."));
                    console.log(e);
                  });
                }
              });
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              Swal.fire({
                title: _this7.$t("Are you sure?"),
                text: _this7.$t("subscription-requests.index.delete_warning"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this7.$t("Confirm"),
                cancelButtonText: _this7.$t("Cancel")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this7.$store.dispatch("operations/deleteData", {
                    path: "/api/subscription-requests/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this7.$toast.success(_this7.$t("Deleted!"), _this7.$t("Deleted successfully."));
                      _this7.getData();
                    } else {
                      _this7.$toast.warning(_this7.$t("Failed!"), _this7.$t("subscription-requests.index.delete_failed"));
                    }
                  });
                }
              });
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    }
  }
});
;// ./resources/js/pages/central/subscription-requests/index.vue?vue&type=script&lang=js
 /* harmony default export */ const central_subscription_requestsvue_type_script_lang_js = (subscription_requestsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/subscription-requests/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  central_subscription_requestsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const subscription_requests = (component.exports);

/***/ })

}]);