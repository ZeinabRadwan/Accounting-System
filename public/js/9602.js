"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9602],{

/***/ 79602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pos_sessions)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/pos-sessions.vue?vue&type=template&id=757891c6
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
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Session Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.session_type,
      expression: "filters.session_type"
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
        _vm.$set(_vm.filters, "session_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('All Types')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "invoice"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "return"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Return')))])])])]), _vm._v(" "), _c('div', {
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
      key: "cell-session_type",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [row.is_return_invoice ? _c('span', {
          staticClass: "badge badge-warning"
        }, [_c('i', {
          staticClass: "fas fa-undo"
        }), _vm._v(" " + _vm._s(_vm.$t('Invoice Return')) + "\n                  ")]) : _c('span', {
          staticClass: "badge badge-info"
        }, [_c('i', {
          staticClass: "fas fa-file-invoice"
        }), _vm._v(" " + _vm._s(_vm.$t('Invoice')) + "\n                  ")])];
      }
    }, {
      key: "cell-status",
      fn: function fn(_ref2) {
        var row = _ref2.row;
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
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [_c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.formatCurrency(row.total_sales))
          }
        })];
      }
    }, {
      key: "cell-actions",
      fn: function fn(_ref4) {
        var row = _ref4.row;
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
  })]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Invoice Count')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.invoice_count))]), _vm._v(" "), _vm.selectedSession.is_return_invoice ? _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Type')) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-warning"
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v(" " + _vm._s(_vm.$t('Invoice Return')) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.selectedSession.return_invoice_no ? _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('Return Invoice No')) + ":")]), _vm._v(" " + _vm._s(_vm.selectedSession.return_invoice_no) + "\n              ")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _c('div', {
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

;// ./resources/js/pages/reports/pos-sessions.vue?vue&type=template&id=757891c6

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/components/GeneralTable.vue + 5 modules
var GeneralTable = __webpack_require__(39173);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reports/pos-sessions.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
        session_type: '',
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
        key: 'session_type',
        label: this.$t('Type')
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page, _this2$filters$user_i, params, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _this2.loading = true;
              _context.prev = 2;
              params = {
                page: page,
                per_page: _this2.perPage,
                search: _this2.filters.search || undefined,
                status: _this2.filters.status || undefined,
                user_id: (_this2$filters$user_i = _this2.filters.user_id) !== null && _this2$filters$user_i !== void 0 ? _this2$filters$user_i : undefined,
                session_type: _this2.filters.session_type || undefined,
                opened_from: _this2.filters.opened_from || undefined,
                opened_to: _this2.filters.opened_to || undefined,
                closed_from: _this2.filters.closed_from || undefined,
                closed_to: _this2.filters.closed_to || undefined
              }; // Remove empty/undefined params so backend applies no filter for them
              Object.keys(params).forEach(function (key) {
                var v = params[key];
                if (v === '' || v === null || v === undefined) {
                  delete params[key];
                }
              });
              _context.next = 7;
              return axios_default().get('/api/reports/pos-sessions', {
                params: params
              });
            case 7:
              response = _context.sent;
              if (response.data.success) {
                _this2.sessions = response.data.data;
                _this2.pagination = response.data.pagination;
                if (response.data.filters && response.data.filters.users) {
                  _this2.availableUsers = response.data.filters.users;
                }
              }
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              console.error('Error loading sessions:', _context.t0);
              _this2.$toast.error(_this2.$t('Error'), _this2.$t('Failed to load POS sessions. Please try again.'));
            case 15:
              _context.prev = 15;
              _this2.loading = false;
              return _context.finish(15);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 11, 15, 18]]);
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
        session_type: '',
        opened_from: '',
        opened_to: '',
        closed_from: '',
        closed_to: ''
      };
      this.loadSessions(1);
    },
    updatePerPage: function updatePerPage() {
      this.loadSessions(1);
    },
    paginate: function paginate() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this4.loadSessions(_this4.pagination.current_page);
            case 2:
            case "end":
              return _context2.stop();
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
    resumeSession: function resumeSession() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // Navigate to POS page - the session will be loaded automatically
              _this5.$router.push({
                name: 'pos.create'
              });
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    closeSession: function closeSession(session) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var confirmed;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this6.$swal.fire({
                title: _this6.$t('Are you sure?'),
                text: _this6.$t('Do you want to close this session?'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this6.$t('Close Session'),
                cancelButtonText: _this6.$t('Cancel')
              });
            case 2:
              confirmed = _context4.sent;
              if (!confirmed.isConfirmed) {
                _context4.next = 16;
                break;
              }
              _context4.prev = 4;
              _context4.next = 7;
              return axios_default().post("/api/pos/sessions/".concat(session.id, "/close"));
            case 7:
              _this6.$toast.success(_this6.$t('Success'), _this6.$t('Session closed successfully'));
              _context4.next = 10;
              return _this6.loadSessions(_this6.pagination.current_page);
            case 10:
              _context4.next = 16;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](4);
              console.error('Error closing session:', _context4.t0);
              _this6.$toast.error(_this6.$t('Error'), _this6.$t('Failed to close session. Please try again.'));
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[4, 12]]);
      }))();
    },
    deleteSession: function deleteSession(session) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var confirmed;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this7.$swal.fire({
                title: _this7.$t('Are you sure?'),
                text: _this7.$t('This action cannot be undone.'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this7.$t('Delete'),
                cancelButtonText: _this7.$t('Cancel'),
                confirmButtonColor: '#dc3545'
              });
            case 2:
              confirmed = _context5.sent;
              if (!confirmed.isConfirmed) {
                _context5.next = 16;
                break;
              }
              _context5.prev = 4;
              _context5.next = 7;
              return axios_default()["delete"]("/api/pos/sessions/".concat(session.id));
            case 7:
              _this7.$toast.success(_this7.$t('Success'), _this7.$t('Session deleted successfully'));
              _context5.next = 10;
              return _this7.loadSessions(_this7.pagination.current_page);
            case 10:
              _context5.next = 16;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](4);
              console.error('Error deleting session:', _context5.t0);
              _this7.$toast.error(_this7.$t('Error'), _this7.$t('Failed to delete session. Please try again.'));
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[4, 12]]);
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