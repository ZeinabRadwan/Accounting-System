"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8605],{

/***/ 38605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=template&id=68508e35&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_vm.showWarning ? _c('div', {
    staticClass: "chart-account-warning"
  }, [_c('div', {
    staticClass: "warning-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "warning-text"
  }, [_c('h6', {
    staticClass: "warning-title"
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account Required')))]), _vm._v(" "), _c('p', {
    staticClass: "warning-description"
  }, [_vm._v(_vm._s(_vm.$t('Client must have a Chart of Account assigned for journal entries')))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
    staticClass: "btn-group c-w-100"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'clients.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": true
    },
    on: {
      "submit": _vm.saveClient
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n                " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])])])])], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "warning-icon"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  })]);
}];

;// ./resources/js/pages/clients/create.vue?vue&type=template&id=68508e35&scoped=true

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(76998);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Client")
    };
  },
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Create Client",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Clients",
        url: "clients.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: null,
      isSubmitting: false
    };
  },
  computed: {
    showWarning: function showWarning() {
      return false; // Temporarily disable warning to test component rendering
    }
  },
  mounted: function mounted() {
    console.log('Create page mounted');
    console.log('ClientForm ref:', this.$refs.clientForm);
  },
  methods: {
    // Submit form by calling ClientForm's submitForm method
    submitForm: function submitForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.submitForm();
      }
    },
    // save client
    saveClient: function saveClient(formData) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.isSubmitting) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _this.isSubmitting = true;
              _context.p = 2;
              _context.n = 3;
              return _this.$http.post("/api/clients", formData);
            case 3:
              response = _context.v;
              if (!response.data.success) {
                _context.n = 4;
                break;
              }
              toast.fire({
                type: "success",
                title: _this.$t("Client added successfully")
              });
              _this.$router.push({
                name: "clients.index"
              });
              _context.n = 5;
              break;
            case 4:
              throw new Error(response.data.message || 'Failed to create client');
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error("Error creating client:", _t);
              toast.fire({
                type: "error",
                title: _this.$t("Opps...something went wrong")
              });
            case 7:
              _context.p = 7;
              _this.isSubmitting = false;
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[2, 6, 7, 8]]);
      }))();
    },
    // Reset form
    resetForm: function resetForm() {
      this.$refs.clientForm.resetForm();
    }
  }
});
;// ./resources/js/pages/clients/create.vue?vue&type=script&lang=js
 /* harmony default export */ const clients_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=68508e35&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_68508e35_prod_scoped_true_lang_css = __webpack_require__(69745);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=68508e35&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_68508e35_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const clients_createvue_type_style_index_0_id_68508e35_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_68508e35_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=68508e35&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/clients/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  clients_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "68508e35",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 69745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-68508e35]{gap:10px}.btn-group.c-w-100>.btn[data-v-68508e35]{border-radius:10px!important}.btn-group.c-w-100>.btn[data-v-68508e35]:first-child{border-bottom-right-radius:10px!important;border-top-right-radius:10px!important}.btn-group.c-w-100>.btn[data-v-68508e35]:last-child{border-bottom-left-radius:10px!important;border-top-left-radius:10px!important}.card[data-v-68508e35]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-68508e35]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-68508e35]{padding:1.25rem}.card-footer[data-v-68508e35]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.btn-primary[data-v-68508e35]{background:#2ab930!important;border:none!important;border-radius:10px!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-68508e35]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-68508e35]:disabled{background:#6c757d!important;box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}.btn-secondary[data-v-68508e35]{background:#33a0d9!important;border:none!important;border-radius:10px!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-68508e35]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.chart-account-warning[data-v-68508e35]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.warning-content[data-v-68508e35]{align-items:center;display:flex;gap:16px}.warning-icon[data-v-68508e35]{color:#856404;flex-shrink:0;font-size:24px}.warning-text[data-v-68508e35]{flex-grow:1}.warning-title[data-v-68508e35]{color:#856404;font-size:14px;font-weight:600;margin:0 0 4px}.warning-description[data-v-68508e35]{color:#856404;font-size:13px;margin:0;opacity:.8}@media (max-width:768px){.card-footer[data-v-68508e35]{flex-direction:column;gap:10px}.card-footer .btn[data-v-68508e35]{margin-right:0!important;width:100%}.card-footer div[data-v-68508e35]{display:flex;flex-direction:column;gap:10px;width:100%}.warning-content[data-v-68508e35]{flex-direction:column;gap:12px;text-align:center}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);