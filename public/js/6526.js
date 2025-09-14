"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6526],{

/***/ 96526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fiscal_years)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/fiscal-years.vue?vue&type=template&id=ffdb4722
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
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Fiscal Years')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "card-tools"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.openModal
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Add Fiscal Year')) + "\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Start Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('End Date')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Accounting Periods')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Actions')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.fiscalYears, function (fiscalYear) {
    return _c('tr', {
      key: fiscalYear.id
    }, [_c('td', [_vm._v(_vm._s(fiscalYear.full_name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(fiscalYear.start_date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(fiscalYear.end_date)))]), _vm._v(" "), _c('td', [_c('span', {
      "class": fiscalYear.is_active ? 'badge badge-success' : 'badge badge-secondary'
    }, [_vm._v("\n                                            " + _vm._s(fiscalYear.is_active ? _vm.$t('Active') : _vm.$t('Inactive')) + "\n                                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(fiscalYear.accounting_periods_count || 0))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-group"
    }, [_c('button', {
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "title": _vm.$t('Edit')
      },
      on: {
        "click": function click($event) {
          return _vm.editFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-success btn-sm",
      attrs: {
        "title": _vm.$t('Set as Current'),
        "disabled": fiscalYear.is_active
      },
      on: {
        "click": function click($event) {
          return _vm.setCurrentFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-check"
    })]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "title": _vm.$t('Delete'),
        "disabled": fiscalYear.accounting_periods_count > 0
      },
      on: {
        "click": function click($event) {
          return _vm.deleteFiscalYear(fiscalYear);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })])])])]);
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
    staticClass: "btn btn-primary",
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

;// ./resources/js/pages/setup/fiscal-years.vue?vue&type=template&id=ffdb4722

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
      isEditMode: false,
      form: new vform_es/* default */.Ay({
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
  },
  methods: {
    // Get all fiscal years
    getFiscalYears: function getFiscalYears() {
      var _this = this;
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
              _this.fiscalYears = response.data.data;
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
    // Open modal for adding/editing
    openModal: function openModal() {
      this.isEditMode = false;
      this.form.reset();
      this.form.clear();
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
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              if (!_this2.isEditMode) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.form.put("/api/fiscal-years/".concat(_this2.form.id));
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.n = 3;
              return _this2.form.post('/api/fiscal-years');
            case 3:
              toast.fire({
                type: 'success',
                title: _this2.$t('Fiscal year saved successfully')
              });
              $('#fiscalYearModal').modal('hide');
              _this2.getFiscalYears();
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('Error saving fiscal year:', _t2);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 4]]);
      }))();
    },
    // Set current fiscal year
    setCurrentFiscalYear: function setCurrentFiscalYear(fiscalYear) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().post('/api/fiscal-years/set-current', {
                fiscal_year_id: fiscalYear.id
              });
            case 1:
              toast.fire({
                type: 'success',
                title: _this3.$t('Current fiscal year set successfully')
              });
              _this3.getFiscalYears();
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('Error setting current fiscal year:', _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // Delete fiscal year
    deleteFiscalYear: function deleteFiscalYear(fiscalYear) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (!confirm(_this4.$t('Are you sure you want to delete this fiscal year?'))) {
                _context4.n = 4;
                break;
              }
              _context4.p = 1;
              _context4.n = 2;
              return axios_default()["delete"]("/api/fiscal-years/".concat(fiscalYear.id));
            case 2:
              toast.fire({
                type: 'success',
                title: _this4.$t('Fiscal year deleted successfully')
              });
              _this4.getFiscalYears();
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              console.error('Error deleting fiscal year:', _t4);
              toast.fire({
                type: 'error',
                title: _this4.$t('Cannot delete fiscal year with existing accounting periods')
              });
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/fiscal-years.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  setup_fiscal_yearsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const fiscal_years = (component.exports);

/***/ })

}]);