"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[96],{

/***/ 20096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pos_sessions)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/pos-sessions.vue?vue&type=template&id=7e26010a
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
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Filters')))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    staticClass: "row",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.loadSessions.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Search')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.search,
      expression: "filters.search"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('Session Number')
    },
    domProps: {
      "value": _vm.filters.search
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "search", $event.target.value);
      }, _vm.debounceSearch]
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
    }],
    staticClass: "form-control",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('All Statuses')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "active"
    }
  }, [_vm._v(_vm._s(_vm.$t('Open')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "suspended"
    }
  }, [_vm._v(_vm._s(_vm.$t('Suspended')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "closed"
    }
  }, [_vm._v(_vm._s(_vm.$t('Closed')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Employee')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "options": _vm.availableUsers,
      "reduce": function reduce(user) {
        return user.id;
      },
      "label": "name",
      "placeholder": _vm.$t('Select Employee'),
      "clearable": true
    },
    model: {
      value: _vm.filters.user_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "user_id", $$v);
      },
      expression: "filters.user_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Opened From')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.opened_from,
      expression: "filters.opened_from"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.opened_from
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "opened_from", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Opened To')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.opened_to,
      expression: "filters.opened_to"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.opened_to
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "opened_to", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Closed From')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.closed_from,
      expression: "filters.closed_from"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.closed_from
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "closed_from", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Closed To')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.closed_to,
      expression: "filters.closed_to"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.closed_to
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "closed_to", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Search')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Reset')) + "\n                    ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card mt-3"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('GeneralTable', {
    attrs: {
      "columns": _vm.tableColumns,
      "rows": _vm.sessionsWithIndex,
      "loading": _vm.loading,
      "show-actions": true,
      "action-header-icon": "fas fa-cog",
      "empty-message": _vm.$t('No sessions found'),
      "wrapper-class": "mt-3"
    },
    scopedSlots: _vm._u([{
      key: "cell-status",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_c('span', {
          staticClass: "badge",
          "class": {
            'badge-success': row.status === 'active',
            'badge-warning': row.status === 'suspended',
            'badge-secondary': row.status === 'closed'
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.getStatusLabel(row.status)) + "\n                  ")])];
      }
    }, {
      key: "cell-total_sales",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.total_sales))
          }
        })];
      }
    }, {
      key: "cell-actions",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [_c('div', {
          staticClass: "btn-group",
          attrs: {
            "role": "group"
          }
        }, [_c('button', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$t('View Details'),
            expression: "$t('View Details')"
          }],
          staticClass: "btn btn-sm btn-info",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.viewSessionDetails(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        })]), _vm._v(" "), row.status === 'active' || row.status === 'suspended' ? _c('button', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$t('Go to POS'),
            expression: "$t('Go to POS')"
          }],
          staticClass: "btn btn-sm btn-primary",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.resumeSession(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-cash-register"
        })]) : _vm._e(), _vm._v(" "), row.status === 'active' || row.status === 'suspended' ? _c('button', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$t('Close Session'),
            expression: "$t('Close Session')"
          }],
          staticClass: "btn btn-sm btn-warning",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.closeSession(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-times-circle"
        })]) : _vm._e(), _vm._v(" "), _c('button', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$t('Delete'),
            expression: "$t('Delete')"
          }],
          staticClass: "btn btn-sm btn-danger",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.deleteSession(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        })])])];
      }
    }])
  }), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('per_page')))]), _vm._v(" "), _c('div', [_c('select', {
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
      }, _vm.updatePerPage]
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
  }) : _vm._e()], 1)]) : _vm._e()], 1)])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "sessionDetailsModal",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "sessionDetailsModalLabel",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title",
    attrs: {
      "id": "sessionDetailsModalLabel"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Session Details')) + "\n          ")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm.selectedSession ? _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Session Number')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.session_number))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Employee')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.user_name))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Status')) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge",
    "class": {
      'badge-success': _vm.selectedSession.status === 'active',
      'badge-warning': _vm.selectedSession.status === 'suspended',
      'badge-secondary': _vm.selectedSession.status === 'closed'
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.getStatusLabel(_vm.selectedSession.status)) + "\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Opened At')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.opened_at_formatted))]), _vm._v(" "), _vm.selectedSession.closed_at_formatted ? _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Closed At')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.closed_at_formatted) + "\n              ")]) : _vm._e(), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Total Sales')) + ":")]), _vm._v(" "), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.formatCurrency(_vm.selectedSession.total_sales))
    }
  })]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Invoice Count')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.invoice_count))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Close')) + "\n          ")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-tool",
    attrs: {
      "type": "button",
      "data-card-widget": "collapse"
    }
  }, [_c('i', {
    staticClass: "fas fa-minus"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]);
}];

;// ./resources/js/pages/reports/pos-sessions.vue?vue&type=template&id=7e26010a

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(33107);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/pos-sessions.vue?vue&type=script&lang=js
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


/* harmony default export */ const pos_sessionsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable: GeneralTable["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('POS Sessions Report')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'POS Sessions Report',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'POS Sessions Report',
        url: ''
      }],
      filters: {
        search: '',
        status: '',
        user_id: null,
        opened_from: '',
        opened_to: '',
        closed_from: '',
        closed_to: ''
      },
      sessions: [],
      availableUsers: [],
      loading: false,
      pagination: null,
      perPage: 25,
      selectedSession: null,
      searchTimeout: null
    };
  },
  computed: {
    tableColumns: function tableColumns() {
      return [{
        key: 'index',
        label: this.$t('#')
      }, {
        key: 'session_number',
        label: this.$t('Session Number')
      }, {
        key: 'user_name',
        label: this.$t('Employee')
      }, {
        key: 'status',
        label: this.$t('Status')
      }, {
        key: 'opened_at_formatted',
        label: this.$t('Opened At')
      }, {
        key: 'closed_at_formatted',
        label: this.$t('Closed At')
      }, {
        key: 'total_sales',
        label: this.$t('Total Sales')
      }, {
        key: 'invoice_count',
        label: this.$t('Invoices')
      }, {
        key: 'actions',
        label: this.$t('Actions')
      }];
    },
    sessionsWithIndex: function sessionsWithIndex() {
      var _this = this;
      if (!this.pagination) {
        return [];
      }
      return this.sessions.map(function (session, index) {
        return _objectSpread(_objectSpread({}, session), {}, {
          index: _this.pagination.current_page > 1 ? _this.pagination.per_page * (_this.pagination.current_page - 1) + (index + 1) : index + 1
        });
      });
    }
  },
  created: function created() {
    this.loadSessions();
  },
  methods: {
    loadSessions: function loadSessions() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var page, params, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _this2.loading = true;
              _context.p = 1;
              params = _objectSpread({
                page: page,
                per_page: _this2.perPage
              }, _this2.filters); // Remove empty filters
              Object.keys(params).forEach(function (key) {
                if (params[key] === '' || params[key] === null) {
                  delete params[key];
                }
              });
              _context.n = 2;
              return axios_default().get('/api/reports/pos-sessions', {
                params: params
              });
            case 2:
              response = _context.v;
              if (response.data.success) {
                _this2.sessions = response.data.data;
                _this2.pagination = response.data.pagination;
                if (response.data.filters && response.data.filters.users) {
                  _this2.availableUsers = response.data.filters.users;
                }
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Error loading sessions:', _t);
              _this2.$toast.error(_this2.$t('Error'), _this2.$t('Failed to load POS sessions. Please try again.'));
            case 4:
              _context.p = 4;
              _this2.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    debounceSearch: function debounceSearch() {
      var _this3 = this;
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        _this3.loadSessions(1);
      }, 500);
    },
    resetFilters: function resetFilters() {
      this.filters = {
        search: '',
        status: '',
        user_id: null,
        opened_from: '',
        opened_to: '',
        closed_from: '',
        closed_to: ''
      };
      this.loadSessions(1);
    },
    updatePerPage: function updatePerPage() {
      this.pagination.current_page = 1;
      this.loadSessions(1);
    },
    paginate: function paginate() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this4.loadSessions(_this4.pagination.current_page);
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    getStatusLabel: function getStatusLabel(status) {
      var labels = {
        active: this.$t('Open'),
        suspended: this.$t('Suspended'),
        closed: this.$t('Closed')
      };
      return labels[status] || status;
    },
    formatCurrency: function formatCurrency(amount) {
      return "".concat(parseFloat(amount || 0).toFixed(2), " <span class=\"saudi-riyal\">\xEA</span>");
    },
    viewSessionDetails: function viewSessionDetails(session) {
      this.selectedSession = session;
      $('#sessionDetailsModal').modal('show');
    },
    resumeSession: function resumeSession(session) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              // Navigate to POS page
              _this5.$router.push({
                name: 'pos.create'
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    closeSession: function closeSession(session) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var confirmed, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.n = 1;
              return _this6.$swal.fire({
                title: _this6.$t('Are you sure?'),
                text: _this6.$t('Do you want to close this session?'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this6.$t('Close Session'),
                cancelButtonText: _this6.$t('Cancel')
              });
            case 1:
              confirmed = _context4.v;
              if (!confirmed.isConfirmed) {
                _context4.n = 6;
                break;
              }
              _context4.p = 2;
              _context4.n = 3;
              return axios_default().post("/api/pos/sessions/".concat(session.id, "/close"));
            case 3:
              _this6.$toast.success(_this6.$t('Success'), _this6.$t('Session closed successfully'));
              _context4.n = 4;
              return _this6.loadSessions(_this6.pagination.current_page);
            case 4:
              _context4.n = 6;
              break;
            case 5:
              _context4.p = 5;
              _t2 = _context4.v;
              console.error('Error closing session:', _t2);
              _this6.$toast.error(_this6.$t('Error'), _this6.$t('Failed to close session. Please try again.'));
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 5]]);
      }))();
    },
    deleteSession: function deleteSession(session) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var confirmed, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.n = 1;
              return _this7.$swal.fire({
                title: _this7.$t('Are you sure?'),
                text: _this7.$t('This action cannot be undone.'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this7.$t('Delete'),
                cancelButtonText: _this7.$t('Cancel'),
                confirmButtonColor: '#dc3545'
              });
            case 1:
              confirmed = _context5.v;
              if (!confirmed.isConfirmed) {
                _context5.n = 6;
                break;
              }
              _context5.p = 2;
              _context5.n = 3;
              return axios_default()["delete"]("/api/pos/sessions/".concat(session.id));
            case 3:
              _this7.$toast.success(_this7.$t('Success'), _this7.$t('Session deleted successfully'));
              _context5.n = 4;
              return _this7.loadSessions(_this7.pagination.current_page);
            case 4:
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t3 = _context5.v;
              console.error('Error deleting session:', _t3);
              _this7.$toast.error(_this7.$t('Error'), _this7.$t('Failed to delete session. Please try again.'));
            case 6:
              return _context5.a(2);
          }
        }, _callee5, null, [[2, 5]]);
      }))();
    }
  }
});
;// ./resources/js/pages/reports/pos-sessions.vue?vue&type=script&lang=js
 /* harmony default export */ const reports_pos_sessionsvue_type_script_lang_js = (pos_sessionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/reports/pos-sessions.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  reports_pos_sessionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const pos_sessions = (component.exports);

/***/ })

}]);