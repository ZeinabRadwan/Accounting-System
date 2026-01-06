"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1756],{

/***/ 61756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/analytical-accounts/edit.vue?vue&type=template&id=8acc407c
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
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateAnalyticalAccount.apply(null, arguments);
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
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Edit Analytical Account")) + "\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'analyticalAccounts.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n                ")]], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t("Name")) + "\n                "), _c('span', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "code"
    }
  }, [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.code,
      expression: "form.code"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('code')
    },
    attrs: {
      "id": "code",
      "type": "text",
      "name": "code",
      "placeholder": _vm.$t('Enter a code (optional)')
    },
    domProps: {
      "value": _vm.form.code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "code"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "type"
    }
  }, [_vm._v(_vm._s(_vm.$t("Type")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.type,
      expression: "form.type"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('type')
    },
    attrs: {
      "id": "type"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "payment"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "channel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Channel")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "platform"
    }
  }, [_vm._v(_vm._s(_vm.$t("Platform")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "type"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "branch"
    }
  }, [_vm._v(_vm._s(_vm.$t("Branch")) + "\n                "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('branch_id')
    },
    attrs: {
      "options": _vm.branches,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "branchId",
      "placeholder": _vm.$t('Select a branch')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))])])];
      }
    }]),
    model: {
      value: _vm.form.branchId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "branchId", $$v);
      },
      expression: "form.branchId"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branch_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t("Save changes")) + "\n            ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/analytical-accounts/edit.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Analytical Account")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Edit Analytical Account",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Setup",
        url: "setup.index"
      }, {
        name: "Analytical Accounts",
        url: "analyticalAccounts.index"
      }, {
        name: "Edit",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        name: "",
        code: "",
        type: "",
        branch_id: null,
        status: 1
      }),
      branches: []
    };
  },
  mounted: function mounted() {
    this.loadBranches();
    this.getAnalyticalAccount();
  },
  methods: {
    // load branches
    loadBranches: function loadBranches() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var user, isSuperAdmin, branchesData, response, _response, fallbackResponse, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              user = _this.$store.getters['auth/user'];
              isSuperAdmin = user && Number(user.account_role) === 1;
              branchesData = [];
              if (!isSuperAdmin) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return axios_default().get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 1:
              response = _context.v;
              if (response.data && response.data.data && Array.isArray(response.data.data)) {
                branchesData = response.data.data;
              } else if (Array.isArray(response.data)) {
                branchesData = response.data;
              } else if (Array.isArray(response.data.data)) {
                branchesData = response.data.data;
              }
              _context.n = 7;
              break;
            case 2:
              if (!(user && user.id)) {
                _context.n = 7;
                break;
              }
              _context.p = 3;
              _context.n = 4;
              return axios_default().get("/api/users/".concat(user.id, "/branches"));
            case 4:
              _response = _context.v;
              if (Array.isArray(_response.data)) {
                branchesData = _response.data;
              } else if (_response.data && Array.isArray(_response.data.data)) {
                branchesData = _response.data.data;
              }
              _context.n = 7;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              _context.n = 6;
              return axios_default().get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 6:
              fallbackResponse = _context.v;
              if (fallbackResponse.data && fallbackResponse.data.data && Array.isArray(fallbackResponse.data.data)) {
                branchesData = fallbackResponse.data.data;
              } else if (Array.isArray(fallbackResponse.data)) {
                branchesData = fallbackResponse.data;
              }
            case 7:
              _this.branches = branchesData;
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t2 = _context.v;
              console.error('Error loading branches:', _t2);
              _this.branches = [];
              toast.fire({
                type: 'error',
                title: _this.$t('Error'),
                text: _this.$t('Failed to load branches')
              });
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[3, 5], [0, 8]]);
      }))();
    },
    // get analytical account
    getAnalyticalAccount: function getAnalyticalAccount() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, accountData, statusValue, _error$response, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/analytical-accounts/" + _this2.$route.params.id);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              // Handle both wrapped response and direct resource response
              accountData = data.success && data.data ? data.data : data;
              if (accountData) {
                _this2.form.name = accountData.name || "";
                _this2.form.code = accountData.code || "";
                _this2.form.type = accountData.type || "";
                _this2.form.branchId = accountData.branch_id || null;
                // Convert status to string for select element (handles both boolean and integer)
                statusValue = accountData.status !== undefined ? accountData.status : 1;
                _this2.form.status = statusValue === true || statusValue === 1 || statusValue === '1' ? '1' : '0';
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t3 = _context2.v;
              toast.fire({
                type: "error",
                title: _this2.$t("Error!"),
                text: ((_error$response = _t3.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t("Failed to load analytical account.")
              });
              _this2.$router.push({
                name: "analyticalAccounts.index"
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // update analytical account
    updateAnalyticalAccount: function updateAnalyticalAccount() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              // Set branch_id in form (required)
              _this3.form.branch_id = _this3.form.branchId;
              _context3.n = 1;
              return _this3.form.patch(window.location.origin + "/api/analytical-accounts/" + _this3.$route.params.id).then(function () {
                toast.fire({
                  type: "success",
                  title: _this3.$t("Analytical Account updated successfully")
                });
                _this3.$router.push({
                  name: "analyticalAccounts.index"
                });
              })["catch"](function (error) {
                if (error.response && error.response.status === 422) {
                  toast.fire({
                    type: "error",
                    title: _this3.$t("Validation Error"),
                    text: error.response.data.message || _this3.$t("Please check your input and try again.")
                  });
                } else {
                  var _error$response2;
                  toast.fire({
                    type: "error",
                    title: _this3.$t("Error!"),
                    text: ((_error$response2 = error.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this3.$t("Failed to update analytical account.")
                  });
                }
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/setup/analytical-accounts/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const analytical_accounts_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/analytical-accounts/edit.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  analytical_accounts_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);