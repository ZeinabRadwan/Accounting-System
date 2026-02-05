"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6389],{

/***/ 36389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ credit_notes)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/index.vue?vue&type=template&id=002ae9da
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
  }, [_c('div', {
    staticClass: "row d-fex",
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
    staticClass: "col-xl-6 col-3 float-right text-right"
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
  })]), _vm._v(" "), _vm.$can('invoice-return-create') ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'creditNotes.create'
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Create")) + "\n                  "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3"
  }, [_c('GeneralTable', {
    attrs: {
      "columns": _vm.columns,
      "rows": _vm.rowsWithIndex,
      "loading": _vm.loading,
      "table-id": "",
      "wrapper-class": "",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-creditNoteNo",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_vm.$can('invoice-return-view') ? _c('router-link', {
          attrs: {
            "to": {
              name: 'creditNotes.show',
              params: {
                slug: row.slug
              }
            }
          }
        }, [_vm._v("\n                  " + _vm._s(row.creditNoteNo) + "\n                ")]) : _c('span', [_vm._v(_vm._s(row.creditNoteNo))])];
      }
    }, {
      key: "cell-invoiceNo",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [_vm._v("\n                " + _vm._s(row.invoiceNo) + "\n              ")];
      }
    }, {
      key: "cell-date",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [row.date ? _c('span', [_vm._v(_vm._s(_vm._f("moment")(row.date, "Do MMM, YYYY")))]) : _vm._e()];
      }
    }, {
      key: "cell-discountAmount",
      fn: function fn(_ref4) {
        var row = _ref4.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.discountAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-taxAmount",
      fn: function fn(_ref5) {
        var row = _ref5.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.taxAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-totalAmount",
      fn: function fn(_ref6) {
        var row = _ref6.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.totalAmount || 0))
          }
        })];
      }
    }, {
      key: "cell-journalEntry",
      fn: function fn(_ref7) {
        var row = _ref7.row;
        return [row.journalEntry ? _c('span', [_c('router-link', {
          staticClass: "badge bg-info text-white",
          staticStyle: {
            "text-decoration": "none"
          },
          attrs: {
            "to": {
              name: 'journal-entries.show',
              params: {
                id: row.journalEntry.id
              }
            }
          }
        }, [_vm._v("\n                    " + _vm._s(row.journalEntry.entry_number || '#' + row.journalEntry.id) + "\n                  ")])], 1) : _c('span', {
          staticClass: "text-muted"
        }, [_vm._v("-")])];
      }
    }, {
      key: "actions",
      fn: function fn(_ref8) {
        var row = _ref8.row;
        return [_vm.$can('invoice-return-view') ? _c('router-link', {
          staticClass: "btn btn-sm btn-info",
          attrs: {
            "to": {
              name: 'creditNotes.show',
              params: {
                slug: row.slug
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        })]) : _vm._e()];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('div', {
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
  }) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(16430);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/credit-notes/index.vue?vue&type=script&lang=js
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


/* harmony default export */ const credit_notesvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Credit Note")
    };
  },
  components: {
    GeneralTable: GeneralTable["default"]
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Sales",
        url: ""
      }, {
        name: "",
        url: ""
      }],
      perPage: 10,
      query: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo"])), {}, {
    breadcrumbsCurrentComputed: function breadcrumbsCurrentComputed() {
      return this.$t("Credit Note");
    },
    columns: function columns() {
      return [{
        key: "index",
        label: this.$t("#"),
        sortable: false
      }, {
        key: "creditNoteNo",
        label: this.$t("Credit Note No")
      }, {
        key: "invoiceNo",
        label: this.$t("Reference Sales Invoice")
      }, {
        key: "clientName",
        label: this.$t("Client")
      }, {
        key: "date",
        label: this.$t("Date")
      }, {
        key: "discountAmount",
        label: this.$t("Discount Amount")
      }, {
        key: "taxAmount",
        label: this.$t("Tax (15%)")
      }, {
        key: "totalAmount",
        label: this.$t("Total")
      }, {
        key: "journalEntry",
        label: this.$t("Journal Entry"),
        sortable: false
      }];
    },
    rowsWithIndex: function rowsWithIndex() {
      var pagination = this.pagination || {};
      return (this.items || []).map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: pagination.current_page > 1 ? pagination.per_page * (pagination.current_page - 1) + (index + 1) : index + 1
        });
      });
    }
  }),
  watch: {
    query: function query(val) {
      this.pagination && (this.pagination.current_page = 1);
      this.getData();
    }
  },
  created: function created() {
    this.breadcrumbsCurrent = this.$t("Credit Note");
    this.breadcrumbs[1].name = this.$t("Sales");
    this.breadcrumbs[2].name = this.$t("Credit Note");
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var currentPage, term;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.$store.state.operations.loading = true;
              currentPage = _this.pagination ? _this.pagination.current_page : 1;
              term = _this.query ? "&term=" + encodeURIComponent(_this.query) : "";
              _context.n = 1;
              return _this.$store.dispatch("operations/fetchData", {
                path: "/api/credit-notes?page=",
                currentPage: currentPage + "&perPage=" + _this.perPage + term
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    paginate: function paginate() {
      this.getData();
    },
    resetPagination: function resetPagination() {
      if (this.pagination) this.pagination.current_page = 1;
    },
    updatePerPager: function updatePerPager() {
      if (this.pagination) this.pagination.current_page = 1;
      this.getData();
    },
    refreshTable: function refreshTable() {
      this.query = "";
      this.getData();
    },
    reload: function reload() {
      this.getData();
    },
    formatCurrency: function formatCurrency(amount) {
      var n = Number(amount);
      if (isNaN(n)) return "0.00";
      return this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + " " + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
});
;// ./resources/js/pages/sales/credit-notes/index.vue?vue&type=script&lang=js
 /* harmony default export */ const sales_credit_notesvue_type_script_lang_js = (credit_notesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/credit-notes/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  sales_credit_notesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const credit_notes = (component.exports);

/***/ }

}]);