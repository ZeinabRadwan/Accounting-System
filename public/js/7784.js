"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7784],{

/***/ 17784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ accounting_periods)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=template&id=623ee2e4
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
    staticClass: "col-12 col-xl-3"
  }, [_c('SettingsSidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Accounting Periods')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.openModal
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Add Accounting Period')) + "\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedFiscalYear,
      expression: "selectedFiscalYear"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedFiscalYear = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterByFiscalYear]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('All Fiscal Years')))]), _vm._v(" "), _vm._l(_vm.fiscalYears, function (fy) {
    return _c('option', {
      key: fy.id,
      domProps: {
        "value": fy.id
      }
    }, [_vm._v("\n                                    " + _vm._s(fy.full_name) + "\n                                ")]);
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Fiscal Year')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Start Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('End Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Actions')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.filteredPeriods, function (period) {
    return _c('tr', {
      key: period.id
    }, [_c('td', [_vm._v(_vm._s(period.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(period.full_name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(period.fiscal_year ? period.fiscal_year.name : '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(period.start_date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(period.end_date)))]), _vm._v(" "), _c('td', [_c('span', {
      "class": _vm.getStatusClass(period)
    }, [_vm._v("\n                                            " + _vm._s(_vm.getStatusText(period)) + "\n                                        ")])]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-group"
    }, [_c('button', {
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "title": _vm.$t('Edit')
      },
      on: {
        "click": function click($event) {
          return _vm.editPeriod(period);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-success btn-sm",
      attrs: {
        "title": _vm.$t('Set as Current'),
        "disabled": period.is_closed || period.id === _vm.currentPeriodId
      },
      on: {
        "click": function click($event) {
          return _vm.setCurrentPeriod(period);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-check"
    })]), _vm._v(" "), !period.is_closed ? _c('button', {
      staticClass: "btn btn-warning btn-sm",
      attrs: {
        "title": _vm.$t('Close Period')
      },
      on: {
        "click": function click($event) {
          return _vm.closePeriod(period);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-lock"
    })]) : _c('button', {
      staticClass: "btn btn-primary btn-sm",
      attrs: {
        "title": _vm.$t('Reopen Period')
      },
      on: {
        "click": function click($event) {
          return _vm.reopenPeriod(period);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-unlock"
    })]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "title": _vm.$t('Delete'),
        "disabled": period.is_closed
      },
      on: {
        "click": function click($event) {
          return _vm.deletePeriod(period);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "periodModal",
      "tabindex": "-1",
      "role": "dialog"
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
    staticClass: "modal-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.isEditMode ? _vm.$t('Edit Accounting Period') : _vm.$t('Add Accounting Period')) + "\n                    ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePeriod.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "placeholder": _vm.$t('Enter period name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "fiscal_year_id"
    }
  }, [_vm._v(_vm._s(_vm.$t('Fiscal Year')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fiscal_year_id,
      expression: "form.fiscal_year_id"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('fiscal_year_id')
    },
    attrs: {
      "id": "fiscal_year_id"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "fiscal_year_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Fiscal Year')))]), _vm._v(" "), _vm._l(_vm.fiscalYears, function (fy) {
    return _c('option', {
      key: fy.id,
      domProps: {
        "value": fy.id
      }
    }, [_vm._v("\n                                        " + _vm._s(fy.full_name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "fiscal_year_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "start_date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Start Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.start_date,
      expression: "form.start_date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('start_date')
    },
    attrs: {
      "id": "start_date",
      "type": "date"
    },
    domProps: {
      "value": _vm.form.start_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "start_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "start_date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "end_date"
    }
  }, [_vm._v(_vm._s(_vm.$t('End Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.end_date,
      expression: "form.end_date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('end_date')
    },
    attrs: {
      "id": "end_date",
      "type": "date"
    },
    domProps: {
      "value": _vm.form.end_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "end_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "end_date"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "is_active"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.is_active,
      expression: "form.is_active"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('is_active')
    },
    attrs: {
      "id": "is_active"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "is_active", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "is_active"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "is_closed"
    }
  }, [_vm._v(_vm._s(_vm.$t('Closed')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.is_closed,
      expression: "form.is_closed"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('is_closed')
    },
    attrs: {
      "id": "is_closed"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "is_closed", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v(_vm._s(_vm.$t('Open')))]), _vm._v(" "), _c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v(_vm._s(_vm.$t('Closed')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "is_closed"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "rows": "3",
      "placeholder": _vm.$t('Enter any additional notes')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Cancel')) + "\n                        ")]), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.isEditMode ? _vm.$t('Update') : _vm.$t('Save')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', [_vm._v("×")])]);
}];

;// ./resources/js/pages/setup/accounting-periods.vue?vue&type=template&id=623ee2e4

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=script&lang=js
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



/* harmony default export */ const accounting_periodsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Accounting Periods')
    };
  },
  components: {
    SettingsSidebar: function SettingsSidebar() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 21524));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Accounting Periods',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Accounting Periods',
        url: ''
      }],
      accountingPeriods: [],
      currentPeriodId: null,
      fiscalYears: [],
      selectedFiscalYear: '',
      isEditMode: false,
      form: new vform_es/* default */.Ay({
        id: null,
        name: '',
        fiscal_year_id: '',
        start_date: '',
        end_date: '',
        is_active: true,
        is_closed: false,
        note: ''
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  })), {}, {
    filteredPeriods: function filteredPeriods() {
      var _this = this;
      if (!this.selectedFiscalYear) {
        return this.accountingPeriods;
      }
      return this.accountingPeriods.filter(function (period) {
        return period.fiscal_year_id == _this.selectedFiscalYear;
      });
    }
  }),
  created: function created() {
    this.getAccountingPeriods();
    this.getFiscalYears();
    this.getCurrentPeriod();
  },
  methods: {
    // Get all accounting periods
    getAccountingPeriods: function getAccountingPeriods() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get('/api/accounting-periods');
            case 1:
              response = _context.v;
              _this2.accountingPeriods = response.data.data;
              console.log('Accounting periods loaded:', _this2.accountingPeriods);

              // Update current period ID based on is_active flag
              _this2.getCurrentPeriod();

              // Auto-set current if only one accounting period exists
              _this2.autoSetCurrentIfSingle();
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error fetching accounting periods:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Get accounting periods by fiscal year
    getAccountingPeriodsByFiscalYear: function getAccountingPeriodsByFiscalYear(fiscalYearId) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get("/api/accounting-periods/by-fiscal-year/".concat(fiscalYearId));
            case 1:
              response = _context2.v;
              _this3.accountingPeriods = response.data.data;
              console.log('Accounting periods loaded for fiscal year:', _this3.accountingPeriods);

              // Update current period ID based on is_active flag
              _this3.getCurrentPeriod();
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('Error fetching accounting periods by fiscal year:', _t2);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // Reset current accounting period when fiscal year changes
    resetCurrentAccountingPeriod: function resetCurrentAccountingPeriod() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (_this4.selectedFiscalYear) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              _context3.n = 2;
              return axios_default().post('/api/accounting-periods/reset-current', {
                fiscal_year_id: _this4.selectedFiscalYear
              });
            case 2:
              response = _context3.v;
              _context3.n = 3;
              return _this4.getAccountingPeriodsByFiscalYear(_this4.selectedFiscalYear);
            case 3:
              console.log('Current accounting period reset:', response.data.message);
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              console.error('Error resetting current accounting period:', _t3);
              // If no periods exist for the fiscal year, just refresh the list
              _context3.n = 5;
              return _this4.getAccountingPeriodsByFiscalYear(_this4.selectedFiscalYear);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 4]]);
      }))();
    },
    // Auto-set current if only one item exists
    autoSetCurrentIfSingle: function autoSetCurrentIfSingle() {
      if (this.accountingPeriods.length === 1 && !this.currentPeriodId) {
        var period = this.accountingPeriods[0];
        if (!period.is_closed) {
          this.setCurrentPeriod(period);
        }
      }
    },
    // Get all fiscal years
    getFiscalYears: function getFiscalYears() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get('/api/all-fiscal-years');
            case 1:
              response = _context4.v;
              _this5.fiscalYears = response.data.data;
              console.log('Fiscal years loaded:', _this5.fiscalYears);
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('Error fetching fiscal years:', _t4);
              toast.fire({
                type: 'error',
                title: _this5.$t('Error loading fiscal years')
              });
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // Get current accounting period (find the one with is_active = true)
    getCurrentPeriod: function getCurrentPeriod() {
      var activePeriod = this.accountingPeriods.find(function (period) {
        return period.is_active;
      });
      this.currentPeriodId = activePeriod ? activePeriod.id : null;
    },
    // Filter by fiscal year
    filterByFiscalYear: function filterByFiscalYear() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (!_this6.selectedFiscalYear) {
                _context5.n = 3;
                break;
              }
              _context5.n = 1;
              return _this6.getAccountingPeriodsByFiscalYear(_this6.selectedFiscalYear);
            case 1:
              _context5.n = 2;
              return _this6.resetCurrentAccountingPeriod();
            case 2:
              _context5.n = 4;
              break;
            case 3:
              _context5.n = 4;
              return _this6.getAccountingPeriods();
            case 4:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // Open modal for adding/editing
    openModal: function openModal() {
      this.isEditMode = false;
      this.form.reset();
      this.form.clear();
      $('#periodModal').modal('show');
    },
    // Edit period
    editPeriod: function editPeriod(period) {
      this.isEditMode = true;

      // Manually set all form fields to ensure proper mapping
      this.form.id = period.id;
      this.form.name = period.name;
      this.form.fiscal_year_id = period.fiscal_year_id;
      this.form.start_date = period.start_date;
      this.form.end_date = period.end_date;
      this.form.is_active = period.is_active;
      this.form.is_closed = period.is_closed;
      this.form.note = period.note;
      $('#periodModal').modal('show');
    },
    // Save period
    savePeriod: function savePeriod() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              if (!_this7.isEditMode) {
                _context6.n = 3;
                break;
              }
              if (_this7.form.id) {
                _context6.n = 1;
                break;
              }
              throw new Error('Period ID is missing for update operation');
            case 1:
              _context6.n = 2;
              return _this7.form.put("/api/accounting-periods/".concat(_this7.form.id));
            case 2:
              _context6.n = 4;
              break;
            case 3:
              _context6.n = 4;
              return _this7.form.post('/api/accounting-periods');
            case 4:
              toast.fire({
                type: 'success',
                title: _this7.$t('Accounting period saved successfully')
              });
              $('#periodModal').modal('hide');
              _this7.getAccountingPeriods();
              _context6.n = 6;
              break;
            case 5:
              _context6.p = 5;
              _t5 = _context6.v;
              console.error('Error saving accounting period:', _t5);
              if (_t5.response && _t5.response.data && _t5.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t5.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Error saving accounting period')
                });
              }
            case 6:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 5]]);
      }))();
    },
    // Set current period
    setCurrentPeriod: function setCurrentPeriod(period) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return axios_default().post('/api/accounting-periods/set-current', {
                accounting_period_id: period.id
              });
            case 1:
              toast.fire({
                type: 'success',
                title: _this8.$t('Current accounting period set successfully')
              });

              // Refresh the accounting periods list to get updated is_active flags
              _context7.n = 2;
              return _this8.getAccountingPeriods();
            case 2:
              // Update the current period ID based on the refreshed data
              _this8.getCurrentPeriod();
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t6 = _context7.v;
              console.error('Error setting current period:', _t6);
              if (_t6.response && _t6.response.data && _t6.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t6.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Error setting current accounting period')
                });
              }
            case 4:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 3]]);
      }))();
    },
    // Close period
    closePeriod: function closePeriod(period) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, _t7;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (!confirm(_this9.$t('Are you sure you want to close this accounting period?'))) {
                _context8.n = 5;
                break;
              }
              _context8.p = 1;
              _context8.n = 2;
              return axios_default().post("/api/accounting-periods/".concat(period.id, "/close"));
            case 2:
              response = _context8.v;
              toast.fire({
                type: 'success',
                title: response.data.message || _this9.$t('Accounting period closed successfully')
              });

              // Refresh the accounting periods list to get updated is_closed flags
              _context8.n = 3;
              return _this9.getAccountingPeriods();
            case 3:
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t7 = _context8.v;
              console.error('Error closing period:', _t7);
              if (_t7.response && _t7.response.data && _t7.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t7.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Error closing accounting period')
                });
              }
            case 5:
              return _context8.a(2);
          }
        }, _callee8, null, [[1, 4]]);
      }))();
    },
    // Reopen period
    reopenPeriod: function reopenPeriod(period) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var response, _t8;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (!confirm(_this0.$t('Are you sure you want to reopen this accounting period?'))) {
                _context9.n = 5;
                break;
              }
              _context9.p = 1;
              _context9.n = 2;
              return axios_default().post("/api/accounting-periods/".concat(period.id, "/reopen"));
            case 2:
              response = _context9.v;
              toast.fire({
                type: 'success',
                title: response.data.message || _this0.$t('Accounting period reopened successfully')
              });

              // Refresh the accounting periods list to get updated is_closed flags
              _context9.n = 3;
              return _this0.getAccountingPeriods();
            case 3:
              _context9.n = 5;
              break;
            case 4:
              _context9.p = 4;
              _t8 = _context9.v;
              console.error('Error reopening period:', _t8);
              if (_t8.response && _t8.response.data && _t8.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t8.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Error reopening accounting period')
                });
              }
            case 5:
              return _context9.a(2);
          }
        }, _callee9, null, [[1, 4]]);
      }))();
    },
    // Delete period
    deletePeriod: function deletePeriod(period) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _t9;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (!confirm(_this1.$t('Are you sure you want to delete this accounting period?'))) {
                _context0.n = 4;
                break;
              }
              _context0.p = 1;
              _context0.n = 2;
              return axios_default()["delete"]("/api/accounting-periods/".concat(period.id));
            case 2:
              toast.fire({
                type: 'success',
                title: _this1.$t('Accounting period deleted successfully')
              });
              _this1.getAccountingPeriods();
              _context0.n = 4;
              break;
            case 3:
              _context0.p = 3;
              _t9 = _context0.v;
              console.error('Error deleting period:', _t9);
              if (_t9.response && _t9.response.data && _t9.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t9.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this1.$t('Cannot delete closed accounting period')
                });
              }
            case 4:
              return _context0.a(2);
          }
        }, _callee0, null, [[1, 3]]);
      }))();
    },
    // Get status class
    getStatusClass: function getStatusClass(period) {
      if (period.is_closed) {
        return 'badge badge-danger';
      } else if (period.is_active) {
        return 'badge badge-success';
      } else {
        return 'badge badge-secondary';
      }
    },
    // Get status text
    getStatusText: function getStatusText(period) {
      if (period.is_closed) {
        return this.$t('Closed');
      } else if (period.is_active) {
        return this.$t('Active');
      } else {
        return this.$t('Inactive');
      }
    },
    // Format date
    formatDate: function formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
});
;// ./resources/js/pages/setup/accounting-periods.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_accounting_periodsvue_type_script_lang_js = (accounting_periodsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/accounting-periods.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  setup_accounting_periodsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const accounting_periods = (component.exports);

/***/ })

}]);