"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7396],{

/***/ 7396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cost_allocations)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/index.vue?vue&type=template&id=43fa4b74
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
  }), _vm._v(" "), _c('div', {
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
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'cost-allocations.create'
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Create")) + " "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
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
  })], 1)]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('GeneralTable', {
    attrs: {
      "columns": _vm.costAllocationColumns,
      "rows": _vm.costAllocationsWithIndex,
      "loading": _vm.loading,
      "wrapper-class": "mt-3",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-sourceCostCenter",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_vm._v("\n              " + _vm._s(row.source_cost_center ? row.source_cost_center.name : '-') + "\n            ")];
      }
    }, {
      key: "cell-basisType",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [_c('span', {
          staticClass: "badge badge-info"
        }, [_vm._v(_vm._s(_vm.getBasisTypeLabel(row.basis_type)))])];
      }
    }, {
      key: "cell-targetCenters",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [_vm._v("\n              " + _vm._s(row.details ? row.details.length : 0) + "\n            ")];
      }
    }, {
      key: "cell-status",
      fn: function fn(_ref4) {
        var row = _ref4.row;
        return [_c('span', {
          "class": ['badge', row.is_active ? 'badge-success' : 'badge-danger']
        }, [_vm._v("\n                " + _vm._s(row.is_active ? _vm.$t('Active') : _vm.$t('Inactive')) + "\n              ")])];
      }
    }, {
      key: "actions",
      fn: function fn(_ref5) {
        var row = _ref5.row;
        return [_c('div', {
          staticClass: "action-buttons"
        }, [_c('router-link', {
          staticClass: "btn btn-info btn-sm",
          attrs: {
            "to": {
              name: 'cost-allocations.show',
              params: {
                id: row.id
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        })]), _vm._v(" "), _c('router-link', {
          staticClass: "btn btn-primary btn-sm",
          attrs: {
            "to": {
              name: 'cost-allocations.edit',
              params: {
                id: row.id
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-edit"
        })]), _vm._v(" "), _c('button', {
          staticClass: "btn btn-danger btn-sm",
          on: {
            "click": function click($event) {
              return _vm.deleteItem(row.id);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        })]), _vm._v(" "), _c('router-link', {
          staticClass: "btn btn-success btn-sm",
          attrs: {
            "to": {
              name: 'cost-allocations.execute',
              params: {
                id: row.id
              }
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-play"
        })])], 1)];
      }
    }])
  }), _vm._v(" "), _c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Per Page")))]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-2",
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
    staticClass: "justify-content-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)], 1)])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(16430);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = undefined;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const cost_allocationsvue_type_script_lang_js = ({
  name: 'CostAllocations',
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable: GeneralTable["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Cost Allocation Rules')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'cost_allocations',
      breadcrumbs: [{
        name: _this.$t('Dashboard'),
        url: '/'
      }, {
        name: _this.$t('Cost Allocations'),
        url: '/cost-allocations'
      }],
      query: '',
      perPage: 10,
      items: [],
      pagination: {
        current_page: 1
      },
      loading: false,
      basisTypes: {
        percentage: _this.$t('Percentage'),
        employees: _this.$t('Employees'),
        revenue: _this.$t('Revenue'),
        area: _this.$t('Area'),
        consumption: _this.$t('Consumption')
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    currencySymbol: 'operations/currencySymbol'
  })), {}, {
    costAllocationColumns: function costAllocationColumns() {
      return [{
        key: "index",
        label: this.$t("#"),
        sortable: false
      }, {
        key: "name",
        label: this.$t("Name")
      }, {
        key: "sourceCostCenter",
        label: this.$t("Source Cost Center")
      }, {
        key: "basisType",
        label: this.$t("Basis Type")
      }, {
        key: "targetCenters",
        label: this.$t("Target Centers")
      }, {
        key: "status",
        label: this.$t("Status")
      }];
    },
    costAllocationsWithIndex: function costAllocationsWithIndex() {
      var _this2 = this;
      return this.items.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: index + (_this2.pagination.slOffset || 0)
        });
      });
    }
  }),
  watch: {
    query: {
      handler: function handler(val) {
        if (val === '') {
          this.getRules();
        }
      },
      deep: true
    }
  },
  created: function created() {
    this.getRules();
  },
  methods: {
    getRules: function getRules() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this3.loading = true;
              _context.n = 1;
              return _this3.$http.get("/api/cost-allocation-rules?page=".concat(_this3.pagination.current_page, "&perPage=").concat(_this3.perPage)).then(function (response) {
                _this3.items = response.data.data || [];
                _this3.pagination = response.data.meta || response.data;
                _this3.loading = false;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    getBasisTypeLabel: function getBasisTypeLabel(type) {
      return this.basisTypes[type] || type;
    },
    deleteItem: function deleteItem(id) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var result;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this4.$swal({
                title: _this4.$t('Are you sure?'),
                text: _this4.$t('You won\'t be able to revert this!'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: _this4.$t('Delete')
              });
            case 1:
              result = _context2.v;
              if (!result.value) {
                _context2.n = 2;
                break;
              }
              _context2.n = 2;
              return _this4.$http["delete"]("/api/cost-allocation-rules/".concat(id)).then(function () {
                _this4.getRules();
                _this4.$toastr.s(_this4.$t('Rule deleted successfully'));
              })["catch"](function () {
                _this4.$toastr.e(_this4.$t('Failed to delete rule'));
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    refreshTable: function refreshTable() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this5.query = '';
              _context3.n = 1;
              return _this5.getRules();
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    reload: function reload() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this6.query = '';
              _this6.getRules();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    paginate: function paginate() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this7.getRules();
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    resetPagination: function resetPagination() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this8.pagination.current_page = 1;
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.getRules();
    }
  }
});
;// ./resources/js/pages/cost-allocations/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_cost_allocationsvue_type_script_lang_js = (cost_allocationsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cost-allocations/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  pages_cost_allocationsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const cost_allocations = (component.exports);

/***/ }

}]);