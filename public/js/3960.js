"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3960,5307],{

/***/ 5307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CostCenterSelect)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CostCenterSelect.vue?vue&type=template&id=0a0a3780&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('v-select', {
    "class": _vm.selectClass,
    attrs: {
      "options": _vm.costCenters,
      "label": _vm.labelField,
      "reduce": function reduce(option) {
        return option.id;
      },
      "placeholder": _vm.placeholder,
      "multiple": _vm.multiple,
      "clearable": _vm.clearable,
      "searchable": true,
      "loading": _vm.loading,
      "filterable": false
    },
    on: {
      "search": _vm.onSearch,
      "open": _vm.onOpen
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var code = _ref.code,
          name = _ref.name,
          full_path = _ref.full_path,
          display_name = _ref.display_name;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(display_name || code + ' - ' + name))]), _vm._v(" "), full_path && _vm.showFullPath ? _c('br') : _vm._e(), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(full_path))]), _vm._v(" "), _c('br')])];
      }
    }, {
      key: "selected-option",
      fn: function fn(_ref2) {
        var code = _ref2.code,
          name = _ref2.name,
          display_name = _ref2.display_name;
        return [_c('span', [_vm._v(_vm._s(display_name || code + ' - ' + name))])];
      }
    }, {
      key: "no-options",
      fn: function fn() {
        return [_c('div', {
          staticClass: "text-center text-muted p-2"
        }, [_vm._v("\n      " + _vm._s(_vm.$t('No cost centers found')) + "\n    ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.selectedValue,
      callback: function callback($$v) {
        _vm.selectedValue = $$v;
      },
      expression: "selectedValue"
    }
  });
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CostCenterSelect.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const CostCenterSelectvue_type_script_lang_js = ({
  name: 'CostCenterSelect',
  props: {
    value: {
      type: [Number, String, Array],
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    clearable: {
      type: Boolean,
      "default": true
    },
    placeholder: {
      type: String,
      "default": 'Select Cost Center'
    },
    labelField: {
      type: String,
      "default": 'display_name'
    },
    showFullPath: {
      type: Boolean,
      "default": true
    },
    selectClass: {
      type: String,
      "default": ''
    },
    limit: {
      type: Number,
      "default": 50
    }
  },
  data: function data() {
    return {
      costCenters: [],
      loading: false,
      searchTimeout: null
    };
  },
  computed: {
    selectedValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  mounted: function mounted() {
    this.loadCostCenters();
  },
  methods: {
    loadCostCenters: function loadCostCenters() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var search, params, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              search = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
              _this.loading = true;
              _context.p = 1;
              params = {
                limit: _this.limit
              };
              if (search && search.length >= 2) {
                params.search = search;
              }
              _context.n = 2;
              return _this.$http.get('/api/cost-centers/all', {
                params: params
              });
            case 2:
              response = _context.v;
              if (response.data && response.data.data) {
                _this.costCenters = response.data.data.map(function (cc) {
                  return _objectSpread(_objectSpread({}, cc), {}, {
                    display_name: cc.code + ' - ' + cc.name
                  });
                });
              } else if (Array.isArray(response.data)) {
                _this.costCenters = response.data.map(function (cc) {
                  return _objectSpread(_objectSpread({}, cc), {}, {
                    display_name: cc.code + ' - ' + cc.name
                  });
                });
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Error loading cost centers:', _t);
              // Silent fail for select component - don't show toast
            case 4:
              _context.p = 4;
              _this.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    onSearch: function onSearch(search, loading) {
      var _this2 = this;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function () {
        if (!search || search.length < 2) {
          loading(false);
          _this2.loadCostCenters();
          return;
        }
        loading(true);
        _this2.loadCostCenters(search).then(function () {
          loading(false);
        });
      }, 300);
    },
    onOpen: function onOpen() {
      if (this.costCenters.length === 0) {
        this.loadCostCenters();
      }
    }
  }
});
;// ./resources/js/components/CostCenterSelect.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CostCenterSelectvue_type_script_lang_js = (CostCenterSelectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CostCenterSelect.vue?vue&type=style&index=0&id=0a0a3780&prod&scoped=true&lang=css
var CostCenterSelectvue_type_style_index_0_id_0a0a3780_prod_scoped_true_lang_css = __webpack_require__(97908);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CostCenterSelect.vue?vue&type=style&index=0&id=0a0a3780&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CostCenterSelectvue_type_style_index_0_id_0a0a3780_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CostCenterSelectvue_type_style_index_0_id_0a0a3780_prod_scoped_true_lang_css = (CostCenterSelectvue_type_style_index_0_id_0a0a3780_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/CostCenterSelect.vue?vue&type=style&index=0&id=0a0a3780&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/CostCenterSelect.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_CostCenterSelectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0a0a3780",
  null
  
)

/* harmony default export */ const CostCenterSelect = (component.exports);

/***/ }),

/***/ 93960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/create.vue?vue&type=template&id=1bdb96a2
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
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'cost-allocations.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'allocationForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "allocationForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveRule.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Allocation Rule Name')) + " "), _c('span', {
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
      "name": "name",
      "required": ""
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
      "for": "source_cost_center_id"
    }
  }, [_vm._v(_vm._s(_vm.$t('Source Cost Center')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('CostCenterSelect', {
    "class": {
      'is-invalid': _vm.form.errors.has('source_cost_center_id')
    },
    attrs: {
      "clearable": false,
      "placeholder": _vm.$t('Select source cost center')
    },
    model: {
      value: _vm.form.source_cost_center_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "source_cost_center_id", $$v);
      },
      expression: "form.source_cost_center_id"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "source_cost_center_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "basis_type"
    }
  }, [_vm._v(_vm._s(_vm.$t('Basis Type')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.basis_type,
      expression: "form.basis_type"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('basis_type')
    },
    attrs: {
      "id": "basis_type",
      "required": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "basis_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select basis type')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "percentage"
    }
  }, [_vm._v(_vm._s(_vm.$t('Percentage')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "employees"
    }
  }, [_vm._v(_vm._s(_vm.$t('Employees')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "revenue"
    }
  }, [_vm._v(_vm._s(_vm.$t('Revenue')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "area"
    }
  }, [_vm._v(_vm._s(_vm.$t('Area')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "consumption"
    }
  }, [_vm._v(_vm._s(_vm.$t('Consumption')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "basis_type"
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
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "description"
    }
  }, [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.description,
      expression: "form.description"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "description",
      "rows": "3"
    },
    domProps: {
      "value": _vm.form.description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "description", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Target Cost Centers')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Target Cost Center')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Allocation Ratio (%)')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Action')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.form.details, function (detail, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('CostCenterSelect', {
      attrs: {
        "clearable": false,
        "placeholder": _vm.$t('Select target cost center')
      },
      model: {
        value: detail.target_cost_center_id,
        callback: function callback($$v) {
          _vm.$set(detail, "target_cost_center_id", $$v);
        },
        expression: "detail.target_cost_center_id"
      }
    })], 1), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: detail.allocation_ratio,
        expression: "detail.allocation_ratio",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "step": "0.01",
        "min": "0",
        "max": "100",
        "placeholder": _vm.$t('Enter ratio')
      },
      domProps: {
        "value": detail.allocation_ratio
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "allocation_ratio", _vm._n($event.target.value));
        },
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm.form.details.length > 1 ? _c('button', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeDetail(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })]) : _vm._e()])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Total Ratio')) + ":")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.totalRatio) + "%")])]), _vm._v(" "), _c('td', [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addDetail
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v(" " + _vm._s(_vm.$t('Add Target Center')) + "\n                          ")])])])])])]), _vm._v(" "), _vm.totalRatio !== 100 ? _c('div', {
    staticClass: "alert alert-warning mt-2"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('Total allocation ratio must equal 100%')) + ". " + _vm._s(_vm.$t('Current total')) + ": " + _vm._s(_vm.totalRatio) + "%\n                ")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success",
      "disabled": _vm.totalRatio !== 100
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n            ")])], 1)])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./resources/js/components/CostCenterSelect.vue + 5 modules
var CostCenterSelect = __webpack_require__(5307);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/create.vue?vue&type=script&lang=js
var _this = undefined;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const createvue_type_script_lang_js = ({
  name: 'CreateCostAllocation',
  middleware: ['auth', 'check-permissions'],
  components: {
    CostCenterSelect: CostCenterSelect["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Cost Allocation Rule')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'cost_allocations.create',
      breadcrumbs: [{
        name: _this.$t('Dashboard'),
        url: '/'
      }, {
        name: _this.$t('Cost Allocations'),
        url: '/cost-allocations'
      }, {
        name: _this.$t('Create'),
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        name: '',
        source_cost_center_id: null,
        basis_type: '',
        description: '',
        is_active: true,
        details: [{
          target_cost_center_id: null,
          allocation_ratio: 0
        }]
      })
    };
  },
  computed: {
    totalRatio: function totalRatio() {
      return this.form.details.reduce(function (sum, detail) {
        return sum + (parseFloat(detail.allocation_ratio) || 0);
      }, 0);
    }
  },
  methods: {
    addDetail: function addDetail() {
      this.form.details.push({
        target_cost_center_id: null,
        allocation_ratio: 0
      });
    },
    removeDetail: function removeDetail(index) {
      if (this.form.details.length > 1) {
        this.form.details.splice(index, 1);
      }
    },
    saveRule: function saveRule() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(_this2.totalRatio !== 100)) {
                _context.n = 1;
                break;
              }
              _this2.$toastr.e(_this2.$t('Total allocation ratio must equal 100%'));
              return _context.a(2);
            case 1:
              _context.n = 2;
              return _this2.form.post('/api/cost-allocation-rules').then(function (_ref) {
                var data = _ref.data;
                _this2.$toastr.s(_this2.$t('Cost allocation rule created successfully'));
                _this2.$router.push({
                  name: 'cost-allocations.index'
                });
              })["catch"](function () {
                _this2.$toastr.e(_this2.$t('Failed to create cost allocation rule'));
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});
;// ./resources/js/pages/cost-allocations/create.vue?vue&type=script&lang=js
 /* harmony default export */ const cost_allocations_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cost-allocations/create.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  cost_allocations_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 97908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-select[data-v-0a0a3780]{min-width:200px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);