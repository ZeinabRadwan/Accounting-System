"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1394],{

/***/ 21394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hero)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/hero.vue?vue&type=template&id=4f32f153&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_c('form', {
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
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Hero')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-body p-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Hero Tagline')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_tagline,
      expression: "form.hero_tagline"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_tagline')
    },
    attrs: {
      "type": "text",
      "id": "hero_tagline",
      "placeholder": _vm.$t('Enter your hero tagline')
    },
    domProps: {
      "value": _vm.form.hero_tagline
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_tagline", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_tagline"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_title"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Title')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_title,
      expression: "form.hero_title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_title')
    },
    attrs: {
      "type": "text",
      "id": "hero_title",
      "placeholder": _vm.$t('Enter your hero title')
    },
    domProps: {
      "value": _vm.form.hero_title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_title"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_description"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Description')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_description,
      expression: "form.hero_description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_description')
    },
    attrs: {
      "id": "hero_description",
      "placeholder": _vm.$t('Enter your hero description')
    },
    domProps: {
      "value": _vm.form.hero_description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_description"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_demo_button_text"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Demo Button Text')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_demo_button_text,
      expression: "form.hero_demo_button_text"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_demo_button_text')
    },
    attrs: {
      "type": "text",
      "id": "hero_demo_button_text",
      "placeholder": _vm.$t('Enter Hero Demo Button Text')
    },
    domProps: {
      "value": _vm.form.hero_demo_button_text
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_demo_button_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_demo_button_text"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_demo_button_link"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Demo Button Link')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_demo_button_link,
      expression: "form.hero_demo_button_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_demo_button_link')
    },
    attrs: {
      "type": "text",
      "id": "hero_demo_button_link",
      "placeholder": _vm.$t('Enter a link to a demo page')
    },
    domProps: {
      "value": _vm.form.hero_demo_button_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_demo_button_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_demo_button_link"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_get_started_button_text"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Get Started Button Text')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_get_started_button_text,
      expression: "form.hero_get_started_button_text"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_get_started_button_text')
    },
    attrs: {
      "type": "text",
      "id": "hero_get_started_button_text",
      "placeholder": _vm.$t('Enter Hero Get Started Button Text')
    },
    domProps: {
      "value": _vm.form.hero_get_started_button_text
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_get_started_button_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_get_started_button_text"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "hero_get_started_button_link"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Hero Get Started Button Link')) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hero_get_started_button_link,
      expression: "form.hero_get_started_button_link"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('hero_get_started_button_link')
    },
    attrs: {
      "type": "text",
      "id": "hero_get_started_button_link",
      "placeholder": _vm.$t('Enter a link to a page or a page template')
    },
    domProps: {
      "value": _vm.form.hero_get_started_button_link
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hero_get_started_button_link", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "hero_get_started_button_link"
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
      value: _vm.form.is_show_hero_section,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_show_hero_section", $$v);
      },
      expression: "form.is_show_hero_section"
    }
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Show at landing page")) + "\n                ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n            ")])], 1)])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/hero.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const herovue_type_script_lang_js = ({
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
        hero_tagline: '',
        hero_title: '',
        hero_description: '',
        hero_demo_button_text: '',
        hero_demo_button_link: '',
        hero_get_started_button_text: '',
        hero_get_started_button_link: '',
        is_show_hero_section: false
      }),
      loading: true,
      user: '',
      isDemoMode: window.config.isDemoMode
    };
  },
  computed: (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  }),
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
              return axios_default().get(window.location.origin + '/api/settings/hero-settings');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.hero_tagline = data.data.hero_tagline || '';
              _this.form.hero_title = data.data.hero_title || '';
              _this.form.hero_description = data.data.hero_description || '';
              _this.form.hero_demo_button_text = data.data.hero_demo_button_text || '';
              _this.form.hero_demo_button_link = data.data.hero_demo_button_link || '';
              _this.form.hero_get_started_button_text = data.data.hero_get_started_button_text || '';
              _this.form.hero_get_started_button_link = data.data.hero_get_started_button_link || '';
              _this.form.is_show_hero_section = _this.appInfo.is_show_hero_section;
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
              return _this2.form.patch(window.location.origin + '/api/settings/hero-settings').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Landing Page Settings updated successfully')
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this2.$t('Opps...something went wrong')
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
;// ./resources/js/pages/central/settings/hero.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_herovue_type_script_lang_js = (herovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/settings/hero.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  settings_herovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4f32f153",
  null
  
)

/* harmony default export */ const hero = (component.exports);

/***/ })

}]);