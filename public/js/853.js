"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[853],{

/***/ 10853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cta)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/cta.vue?vue&type=template&id=2a5d8620&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('All Features And Get Started')) + "\n            ")])]), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.update.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "get_started_box_title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Get Started Box Title')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.get_started_box_title,
      expression: "form.get_started_box_title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('get_started_box_title')
    },
    attrs: {
      "type": "text",
      "id": "get_started_box_title",
      "placeholder": _vm.$t('Enter get started box title')
    },
    domProps: {
      "value": _vm.form.get_started_box_title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "get_started_box_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "get_started_box_title"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "get_started_box_description"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Get Started Box Description')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.get_started_box_description,
      expression: "form.get_started_box_description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('get_started_box_description')
    },
    attrs: {
      "id": "get_started_box_description",
      "placeholder": _vm.$t('Enter get started box description')
    },
    domProps: {
      "value": _vm.form.get_started_box_description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "get_started_box_description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "get_started_box_description"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "get_started_box_button_text"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Get Started Box Button Text')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.get_started_box_button_text,
      expression: "form.get_started_box_button_text"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('get_started_box_button_text')
    },
    attrs: {
      "type": "text",
      "id": "get_started_box_button_text",
      "placeholder": _vm.$t('Enter get started box button text')
    },
    domProps: {
      "value": _vm.form.get_started_box_button_text
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "get_started_box_button_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "get_started_box_button_text"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "get_started_box_button_link"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Get Started Box Button Link')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.get_started_box_button_link,
      expression: "form.get_started_box_button_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('get_started_box_button_link')
    },
    attrs: {
      "type": "text",
      "id": "get_started_box_button_link",
      "placeholder": _vm.$t('Enter get started box button link')
    },
    domProps: {
      "value": _vm.form.get_started_box_button_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "get_started_box_button_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "get_started_box_button_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5"
  }, [_c('toggle-button', {
    attrs: {
      "sync": true
    },
    model: {
      value: _vm.form.is_show_cta_section,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_show_cta_section", $$v);
      },
      expression: "form.is_show_cta_section"
    }
  }), _vm._v("\n                        " + _vm._s(_vm.$t("Show at landing page")) + "\n                    ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Save changes')) + "\n                ")])], 1)])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/cta.vue?vue&type=script&lang=js
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



/* harmony default export */ const ctavue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Landing Page Settings')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Update Profile',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Update',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        get_started_box_title: '',
        get_started_box_description: '',
        get_started_box_button_text: '',
        get_started_box_button_link: '',
        is_show_cta_section: false
      }),
      dataForm: new vform_es/* default */.Ay({
        title: '',
        description: '',
        status: '',
        image: ''
      }),
      user: '',
      isDemoMode: window.config.isDemoMode
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo', 'items', 'loading', 'pagination'])),
  created: function created() {
    this.getData();
  },
  methods: {
    // get the user
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/settings/get-started-settings');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.get_started_box_title = data.data.get_started_box_title || '';
              _this.form.get_started_box_description = data.data.get_started_box_description || '';
              _this.form.get_started_box_button_text = data.data.get_started_box_button_text || '';
              _this.form.get_started_box_button_link = data.data.get_started_box_button_link || '';
              _this.form.is_show_cta_section = _this.appInfo.is_show_cta_section;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // update
    update: function update() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, toast.fire({
                type: 'warning',
                title: _this2.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context2.n = 2;
              return _this2.form.patch(window.location.origin + '/api/settings/get-started-settings').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Landing Page Settings updated successfully')
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this2.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/central/settings/cta.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_ctavue_type_script_lang_js = (ctavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/settings/cta.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  settings_ctavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2a5d8620",
  null
  
)

/* harmony default export */ const cta = (component.exports);

/***/ })

}]);