"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[648],{

/***/ 10648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/roles/create.vue?vue&type=template&id=0265faeb
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
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveRole.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('Create role')) + "\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                                  ")]]], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group mb-4"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                                "), _c('span', {
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
      "placeholder": _vm.$t('Enter a name')
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
  })], 1), _vm._v(" "), _c('h5', {
    staticClass: "mb-3 mt-4"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Select Permissions:')) + "\n                        ")]), _vm._v(" "), _c('masonry', {
    attrs: {
      "cols": {
        "default": 2,
        1000: 2,
        700: 1,
        400: 1
      },
      "gutter": {
        "default": '30px',
        700: '15px'
      }
    }
  }, _vm._l(_vm.items, function (data, index) {
    return _c('div', {
      key: index,
      "class": {
        'is-invalid': _vm.form.errors.has('permission')
      }
    }, [_c('has-error', {
      staticClass: "permission",
      attrs: {
        "form": _vm.form,
        "field": "permission"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "card permission-card"
    }, [_c('div', {
      staticClass: "card-header"
    }, [data[0] ? _c('h3', {
      staticClass: "card-title text-bold text-capitalize"
    }, [_vm._v("\n                                            " + _vm._s(data[0].guard_name) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "card-tools"
    }, [_c('button', {
      staticClass: "btn btn-tool",
      attrs: {
        "type": "button",
        "loading": _vm.form.busy,
        "data-card-widget": "collapse"
      }
    }, [_c('i', {
      staticClass: "fas fa-minus"
    })])])]), _vm._v(" "), _c('div', {
      staticClass: "card-body permisson-card"
    }, [_c('ul', _vm._l(data, function (permission, key) {
      return _c('li', {
        key: key
      }, [_c('label', {
        staticClass: "text-capitalize",
        attrs: {
          "for": permission.slug
        }
      }, [_vm._v(_vm._s(permission.name))]), _vm._v(" "), _c('div', {
        staticClass: "custom-control custom-checkbox mb-1"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.form.permission,
          expression: "\n                                                            form.permission\n                                                        "
        }],
        staticClass: "custom-control-input",
        attrs: {
          "type": "checkbox",
          "id": permission.slug,
          "name": "permission"
        },
        domProps: {
          "value": permission.slug,
          "checked": Array.isArray(_vm.form.permission) ? _vm._i(_vm.form.permission, permission.slug) > -1 : _vm.form.permission
        },
        on: {
          "change": [function ($event) {
            var $$a = _vm.form.permission,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = permission.slug,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.form, "permission", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(_vm.form, "permission", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(_vm.form, "permission", $$c);
            }
          }, function ($event) {
            return _vm.onChangeEventHandler($event, permission.slug);
          }]
        }
      }), _vm._v(" "), _c('label', {
        staticClass: "custom-control-label",
        attrs: {
          "for": permission.slug
        }
      })])]);
    }), 0)])])], 1);
  }), 0)], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Reset')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/roles/create.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Role')
    };
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      // Breadcrumbs
      breadcrumbsCurrent: 'Create Role',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Roles & Permissions',
        url: 'roles.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        name: '',
        permission: []
      }),
      loading: true
    };
  },
  // Map Getters
  computed: (0,vuex_esm/* mapGetters */.L8)({
    items: 'operations/items'
  }),
  created: function created() {
    this.getData();
  },
  methods: {
    // save role
    saveRole: function saveRole() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!_this.isDemoMode) {
                _context.n = 1;
                break;
              }
              return _context.a(2, toast.fire({
                type: 'warning',
                title: _this.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context.n = 2;
              return _this.form.post(window.location.origin + '/api/roles').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this.$t('Role added successfully')
                });
                _this.$router.push({
                  name: 'roles.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get permission data
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this2.loading = true;
              _context2.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-permissions'
              });
            case 1:
              _this2.setPermission(_this2.items);
              _this2.loading = false;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // set permission for permission v-model
    setPermission: function setPermission(permission) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var guard_name, value;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              for (guard_name in permission) {
                for (value in permission[guard_name]) {
                  _this3.form.permission.push(permission[guard_name][value].slug);
                }
              }
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // assign v-model permission data when change checkbox event
    onChangeEventHandler: function onChangeEventHandler(e, permission) {
      var newPermission = permission.includes('view') || permission.includes('edit') || permission.includes('delete');
      if (newPermission) {
        var text = permission.includes('delete') ? permission.substring(0, permission.length - 6) : permission.substring(0, permission.length - 4);
        if (this.form.permission.includes(permission) && !this.form.permission.includes(text + 'list')) {
          this.form.permission.push(text + 'list');
        }
      }
      if (permission.includes('list') && !this.form.permission.includes(permission)) {
        var newText = permission.substring(0, permission.length - 4);
        this.form.permission = this.form.permission.filter(function (item) {
          return newText + 'edit' !== item;
        });
        this.form.permission = this.form.permission.filter(function (item) {
          return newText + 'delete' !== item;
        });
        this.form.permission = this.form.permission.filter(function (item) {
          return newText + 'view' !== item;
        });
      }
    }
  }
});
;// ./resources/js/pages/setup/roles/create.vue?vue&type=script&lang=js
 /* harmony default export */ const roles_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/roles/create.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  roles_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ })

}]);