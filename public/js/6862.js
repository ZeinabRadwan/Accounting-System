"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6862],{

/***/ 66862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fiscal_years)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/fiscal-years.vue?vue&type=template&id=6ecef019&scoped=true
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
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Fiscal Years')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-8 col-8 float-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.openModal
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Add Fiscal Year')) + "\n                                    "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table fiscal-years-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t('ID')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Start Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('End Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Accounting Periods')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v(_vm._s(_vm.$t('Actions')))])]), _vm._v(" "), _c('tbody', _vm._l(_vm.fiscalYears, function (fiscalYear) {
    return _c('tr', {
      key: fiscalYear.id
    }, [_c('td', [_vm._v(_vm._s(fiscalYear.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(fiscalYear.full_name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(fiscalYear.start_date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(fiscalYear.end_date)))]), _vm._v(" "), _c('td', [_c('span', {
      "class": fiscalYear.is_active ? 'badge bg-success' : 'badge bg-danger'
    }, [_vm._v("\n                                            " + _vm._s(fiscalYear.is_active ? _vm.$t('Active') : _vm.$t('Inactive')) + "\n                                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(fiscalYear.accounting_periods_count || 0))]), _vm._v(" "), _c('td', {
      staticClass: "text-right no-print"
    }, [_c('div', {
      staticClass: "action-dropdown",
      "class": {
        open: _vm.openActionIndex === fiscalYear.id
      }
    }, [_c('button', {
      staticClass: "action-icon-btn",
      attrs: {
        "type": "button",
        "data-action-index": fiscalYear.id
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.toggleAction(fiscalYear.id);
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
    })])]), _vm._v(" "), _vm.openActionIndex === fiscalYear.id ? _c('div', {
      staticClass: "action-menu"
    }, [_c('div', {
      staticClass: "action-menu-header"
    }, [_c('span', {
      staticClass: "action-menu-title"
    }, [_vm._v("Actions")]), _vm._v(" "), _c('button', {
      staticClass: "action-menu-close",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.toggleAction(fiscalYear.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.editFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    }), _vm._v("\n                                                            " + _vm._s(_vm.$t('Edit')) + "\n                                                        ")])]), _vm._v(" "), fiscalYear.id !== _vm.currentFiscalYearId ? _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.setCurrentFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-check"
    }), _vm._v("\n                                                            " + _vm._s(_vm.$t('Set as Current')) + "\n                                                        ")])]) : _vm._e(), _vm._v(" "), fiscalYear.accounting_periods_count === 0 ? _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.deleteFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    }), _vm._v("\n                                                            " + _vm._s(_vm.$t('Delete')) + "\n                                                        ")])]) : _vm._e()])]) : _vm._e()])])]);
  }), 0)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "fiscalYearModal",
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
  }, [_vm._v("\n                        " + _vm._s(_vm.isEditMode ? _vm.$t('Edit Fiscal Year') : _vm.$t('Add Fiscal Year')) + "\n                    ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveFiscalYear.apply(null, arguments);
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
      "placeholder": _vm.$t('Enter fiscal year name')
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

;// ./resources/js/pages/setup/fiscal-years.vue?vue&type=template&id=6ecef019&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/fiscal-years.vue?vue&type=script&lang=js
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



/* harmony default export */ const fiscal_yearsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Fiscal Years')
    };
  },
  components: {
    SettingsSidebar: function SettingsSidebar() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 21524));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Fiscal Years',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Fiscal Years',
        url: ''
      }],
      fiscalYears: [],
      currentFiscalYearId: null,
      isEditMode: false,
      openActionIndex: null,
      form: new vform_es/* default */.Ay({
        id: null,
        name: '',
        start_date: '',
        end_date: '',
        is_active: true,
        note: ''
      })
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  })),
  created: function created() {
    this.getFiscalYears();
    this.getCurrentFiscalYear();
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
  },
  methods: {
    // Action dropdown methods
    toggleAction: function toggleAction(index) {
      var _this = this;
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(function () {
          _this.positionDropdown(index);
        });
      }
    },
    positionDropdown: function positionDropdown(index) {
      var button = document.querySelector("[data-action-index=\"".concat(index, "\"]"));
      if (button) {
        var rect = button.getBoundingClientRect();
        var menu = document.querySelector('.action-menu');
        if (menu) {
          // Check if page direction is RTL
          var isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = "".concat(rect.right - 200, "px"); // 200px is min-width
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
    // Get all fiscal years
    getFiscalYears: function getFiscalYears() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get('/api/fiscal-years');
            case 1:
              response = _context.v;
              _this2.fiscalYears = response.data.data;

              // Auto-set current if only one fiscal year exists
              _this2.autoSetCurrentIfSingle();
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error fetching fiscal years:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Auto-set current if only one item exists
    autoSetCurrentIfSingle: function autoSetCurrentIfSingle() {
      if (this.fiscalYears.length === 1 && !this.currentFiscalYearId) {
        var fiscalYear = this.fiscalYears[0];
        this.setCurrentFiscalYear(fiscalYear);
      }
    },
    // Get current fiscal year
    getCurrentFiscalYear: function getCurrentFiscalYear() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get('/api/fiscal-years/current');
            case 1:
              response = _context2.v;
              if (response.data.data) {
                _this3.currentFiscalYearId = response.data.data.id;
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('Error fetching current fiscal year:', _t2);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // Open modal for adding/editing
    openModal: function openModal() {
      this.isEditMode = false;
      this.form.reset();
      this.form.clear();
      this.form.id = null;
      $('#fiscalYearModal').modal('show');
    },
    // Edit fiscal year
    editFiscalYear: function editFiscalYear(fiscalYear) {
      this.isEditMode = true;
      this.form.fill(fiscalYear);
      $('#fiscalYearModal').modal('show');
    },
    // Save fiscal year
    saveFiscalYear: function saveFiscalYear() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              if (!_this4.isEditMode) {
                _context3.n = 2;
                break;
              }
              console.log('Editing fiscal year with ID:', _this4.form.id);
              _context3.n = 1;
              return _this4.form.put("/api/fiscal-years/".concat(_this4.form.id));
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.n = 3;
              return _this4.form.post('/api/fiscal-years');
            case 3:
              toast.fire({
                type: 'success',
                title: _this4.$t('Fiscal year saved successfully')
              });
              $('#fiscalYearModal').modal('hide');
              _this4.getFiscalYears();
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              console.error('Error saving fiscal year:', _t3);
              if (_t3.response && _t3.response.data && _t3.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t3.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Error saving fiscal year')
                });
              }
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 4]]);
      }))();
    },
    // Set current fiscal year
    setCurrentFiscalYear: function setCurrentFiscalYear(fiscalYear) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().post('/api/fiscal-years/set-current', {
                fiscal_year_id: fiscalYear.id
              });
            case 1:
              // Update the current fiscal year ID
              _this5.currentFiscalYearId = fiscalYear.id;
              toast.fire({
                type: 'success',
                title: _this5.$t('Current fiscal year set successfully')
              });
              _this5.getFiscalYears();
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('Error setting current fiscal year:', _t4);
              if (_t4.response && _t4.response.data && _t4.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t4.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this5.$t('Error setting current fiscal year')
                });
              }
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // Delete fiscal year
    deleteFiscalYear: function deleteFiscalYear(fiscalYear) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!confirm(_this6.$t('Are you sure you want to delete this fiscal year?'))) {
                _context5.n = 4;
                break;
              }
              _context5.p = 1;
              _context5.n = 2;
              return axios_default()["delete"]("/api/fiscal-years/".concat(fiscalYear.id));
            case 2:
              toast.fire({
                type: 'success',
                title: _this6.$t('Fiscal year deleted successfully')
              });
              _this6.getFiscalYears();
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              console.error('Error deleting fiscal year:', _t5);
              if (_t5.response && _t5.response.data && _t5.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _t5.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this6.$t('Cannot delete fiscal year with existing accounting periods')
                });
              }
            case 4:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3]]);
      }))();
    },
    // Format date
    formatDate: function formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
});
;// ./resources/js/pages/setup/fiscal-years.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_fiscal_yearsvue_type_script_lang_js = (fiscal_yearsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/fiscal-years.vue?vue&type=style&index=0&id=6ecef019&prod&scoped=true&lang=css
var fiscal_yearsvue_type_style_index_0_id_6ecef019_prod_scoped_true_lang_css = __webpack_require__(99984);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/fiscal-years.vue?vue&type=style&index=0&id=6ecef019&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(fiscal_yearsvue_type_style_index_0_id_6ecef019_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const setup_fiscal_yearsvue_type_style_index_0_id_6ecef019_prod_scoped_true_lang_css = (fiscal_yearsvue_type_style_index_0_id_6ecef019_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/fiscal-years.vue?vue&type=style&index=0&id=6ecef019&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/fiscal-years.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_fiscal_yearsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6ecef019",
  null
  
)

/* harmony default export */ const fiscal_years = (component.exports);

/***/ }),

/***/ 99984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-6ecef019]{border:none!important;overflow:visible!important}.fiscal-years-table[data-v-6ecef019]{border-collapse:separate;border-spacing:0}.fiscal-years-table thead th[data-v-6ecef019]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.fiscal-years-table thead tr[data-v-6ecef019]{border:none!important}.fiscal-years-table thead th[data-v-6ecef019]:first-child{border-top-left-radius:10px}.fiscal-years-table thead th[data-v-6ecef019]:last-child{border-top-right-radius:10px}[dir=rtl] .fiscal-years-table thead th[data-v-6ecef019]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .fiscal-years-table thead th[data-v-6ecef019]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.action-dropdown[data-v-6ecef019]{display:inline-block;position:relative}.action-icon-btn[data-v-6ecef019]{align-items:center;background-color:#fff;border:none;cursor:pointer;display:inline-flex;height:24px;justify-content:center;padding:0;width:24px}.action-menu[data-v-6ecef019]{animation:slideInDown-6ecef019 .3s ease-out;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 20px 0 #00000014;max-height:80vh;min-width:200px;overflow:hidden;position:fixed;z-index:9999}[dir=rtl] .action-menu[data-v-6ecef019]{left:45px!important;right:auto!important}@keyframes slideInDown-6ecef019{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.action-menu-header[data-v-6ecef019]{align-items:center;background:#f8fafc;border-bottom:1px solid #f1f5fb;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:12px 16px}.action-menu-title[data-v-6ecef019]{color:#023033;font-size:14px;font-weight:600}.action-menu-close[data-v-6ecef019]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s ease}.action-menu-close[data-v-6ecef019]:hover{background:#e5e7eb;color:#374151}.action-menu ul[data-v-6ecef019]{list-style:none;margin:0;padding:8px 0}.action-menu li[data-v-6ecef019]{border-bottom:1px solid #f1f5fb}.action-menu li[data-v-6ecef019]:last-child{border-bottom:none}.action-menu li a[data-v-6ecef019]{align-items:center;color:#023033;display:flex;font-size:14px;font-weight:500;gap:10px;padding:12px 16px;position:relative;text-decoration:none;transition:all .2s ease}.action-menu li a i[data-v-6ecef019]{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;width:16px}.action-menu li a[data-v-6ecef019]:hover{background:#f8fafc;color:#2ab930;transform:translateX(2px)}.action-menu li a[data-v-6ecef019]:before{background:#2ab930;bottom:0;content:\"\";left:0;position:absolute;top:0;transform:scaleY(0);transition:transform .2s ease;width:3px}.action-menu li a[data-v-6ecef019]:hover:before{transform:scaleY(1)}.btn-group.c-w-100[data-v-6ecef019]{gap:10px}.card[data-v-6ecef019]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px;overflow:visible}.fiscal-years-table .badge.bg-success[data-v-6ecef019]{background:#f6fef4!important;color:#2ab930!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.fiscal-years-table .badge.bg-danger[data-v-6ecef019]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.btn-primary[data-v-6ecef019]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);