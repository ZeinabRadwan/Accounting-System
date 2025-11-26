"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7618],{

/***/ 67618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ execute)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/execute.vue?vue&type=template&id=6a2c3bef
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
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2)], 1)])], 1), _vm._v(" "), _vm.rule ? _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.executeAllocation.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Rule Name')))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.rule.name
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Source Cost Center')))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.rule.source_cost_center ? _vm.rule.source_cost_center.name : '-'
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Total Amount')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.total_amount,
      expression: "form.total_amount",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "required": ""
    },
    domProps: {
      "value": _vm.form.total_amount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "total_amount", _vm._n($event.target.value));
      },
      "blur": function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Period Start Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.period_start_date,
      expression: "form.period_start_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "required": ""
    },
    domProps: {
      "value": _vm.form.period_start_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "period_start_date", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Period End Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.period_end_date,
      expression: "form.period_end_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "required": ""
    },
    domProps: {
      "value": _vm.form.period_end_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "period_end_date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Execution Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.execution_date,
      expression: "form.execution_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.form.execution_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "execution_date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.form.total_amount > 0 && _vm.rule.details ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Allocation Preview')))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Target Cost Center')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Ratio')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t('Amount')))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.rule.details, function (detail) {
    return _c('tr', {
      key: detail.id
    }, [_c('td', [_vm._v(_vm._s(detail.target_cost_center ? detail.target_cost_center.name : '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(detail.allocation_ratio) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.calculateAmount(detail.allocation_ratio)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Total')) + ":")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.form.total_amount))])])])])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": _vm.loading
    }
  }, [_vm.loading ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-play"
  }), _vm._v("\n                " + _vm._s(_vm.loading ? _vm.$t('Executing...') : _vm.$t('Execute Allocation')) + "\n              ")])])])]) : _vm._e()])])])]);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cost-allocations/execute.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = undefined;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const executevue_type_script_lang_js = ({
  name: 'ExecuteCostAllocation',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Execute Cost Allocation')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'cost_allocations.execute',
      breadcrumbs: [{
        name: _this.$t('Dashboard'),
        url: '/'
      }, {
        name: _this.$t('Cost Allocations'),
        url: '/cost-allocations'
      }, {
        name: _this.$t('Execute Allocation'),
        url: ''
      }],
      rule: null,
      form: {
        total_amount: 0,
        period_start_date: '',
        period_end_date: '',
        execution_date: new Date().toISOString().split('T')[0]
      },
      loading: false
    };
  },
  created: function created() {
    this.getRule();
  },
  methods: {
    getRule: function getRule() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this2.$http.get("/api/cost-allocation-rules/".concat(_this2.$route.params.id)).then(function (_ref) {
                var data = _ref.data;
                _this2.rule = data;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    calculateAmount: function calculateAmount(ratio) {
      if (!this.form.total_amount) return 0;
      return (this.form.total_amount * ratio / 100).toFixed(2);
    },
    executeAllocation: function executeAllocation() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this3.loading = true;
              _context2.n = 1;
              return _this3.$http.post('/api/cost-allocations/execute', _objectSpread({
                rule_id: _this3.$route.params.id
              }, _this3.form)).then(function (_ref2) {
                var data = _ref2.data;
                _this3.$toastr.s(_this3.$t('Cost allocation executed successfully'));
                _this3.$router.push({
                  name: 'cost-allocations.index'
                });
              })["catch"](function (error) {
                var _error$response;
                _this3.$toastr.e(((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this3.$t('Failed to execute allocation'));
              })["finally"](function () {
                _this3.loading = false;
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/cost-allocations/execute.vue?vue&type=script&lang=js
 /* harmony default export */ const cost_allocations_executevue_type_script_lang_js = (executevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cost-allocations/execute.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  cost_allocations_executevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const execute = (component.exports);

/***/ })

}]);