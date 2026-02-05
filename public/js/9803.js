"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9803],{

/***/ 40843
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-3688a352]{border:none!important}.branches-table[data-v-3688a352]{border-collapse:separate;border-spacing:0}.branches-table thead th[data-v-3688a352]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.branches-table thead tr[data-v-3688a352]{border:none!important}.branches-table thead th[data-v-3688a352]:first-child{border-top-left-radius:10px}.branches-table thead th[data-v-3688a352]:last-child{border-top-right-radius:10px}[dir=rtl] .branches-table thead th[data-v-3688a352]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .branches-table thead th[data-v-3688a352]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.branches-table .badge.bg-success[data-v-3688a352]{background:#f6fef4!important;color:#2ab930!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.branches-table .badge.bg-secondary[data-v-3688a352]{background:#f1f1f1!important;color:#6c757d!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.btn-group.c-w-100[data-v-3688a352]{gap:10px}.refresh-btn[data-v-3688a352]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.btn-primary[data-v-3688a352]{background:#2ab930!important}.btn-primary[data-v-3688a352],.btn-secondary[data-v-3688a352]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-3688a352]{background:#6c757d!important}.modal-header[data-v-3688a352]{border-bottom:1px solid #e5e7eb;padding:20px}.modal-title[data-v-3688a352]{color:#1f2937;font-size:18px;font-weight:600}.modal-body[data-v-3688a352]{padding:20px}.form-group label[data-v-3688a352]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.form-group .v-select[data-v-3688a352]{min-height:44px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 39803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ assign_users)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=template&id=3688a352&scoped=true
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table branches-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Assigned Date")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.branchUsers, function (user, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.branchUsers.length,
        expression: "branchUsers.length"
      }],
      key: i
    }, [_c('td', [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("moment")(user.created_at, "Do MMM, YYYY")))])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && (!_vm.branchUsers || !_vm.branchUsers.length),
      expression: "!loading && (!branchUsers || !branchUsers.length)"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1)])])]), _vm._v(" "), _c('VModal', {
    attrs: {
      "size": "md"
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t('Add User to Branch')))];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [_c('button', {
          staticClass: "btn btn-secondary",
          attrs: {
            "type": "button"
          },
          on: {
            "click": _vm.closeAddUserModal
          }
        }, [_vm._v(_vm._s(_vm.$t('Cancel')))]), _vm._v(" "), _c('button', {
          staticClass: "btn btn-primary",
          attrs: {
            "type": "button",
            "disabled": _vm.loading || !_vm.selectedUser
          },
          on: {
            "click": _vm.assignUser
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t('Assign')) + "\n      ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showAddUserModal,
      callback: function callback($$v) {
        _vm.showAddUserModal = $$v;
      },
      expression: "showAddUserModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.assignUser.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user"
    }
  }, [_vm._v(_vm._s(_vm.$t('Select User')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.filteredAvailableUsers.length === 0 ? _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('No users available to assign')))]) : _c('v-select', {
    attrs: {
      "options": _vm.filteredAvailableUsers,
      "label": "name",
      "placeholder": _vm.$t('Select a user'),
      "reduce": function reduce(user) {
        return user;
      },
      "searchable": true
    },
    model: {
      value: _vm.selectedUser,
      callback: function callback($$v) {
        _vm.selectedUser = $$v;
      },
      expression: "selectedUser"
    }
  })], 1)])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=script&lang=js
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

/* harmony default export */ const assign_usersvue_type_script_lang_js = ({
  components: {
    VModal: function VModal() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 77227));
    }
  },
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Assign Users to Branch')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: '',
      breadcrumbs: [],
      branchUsers: [],
      availableUsers: [],
      loading: false,
      showAddUserModal: false,
      selectedUser: null,
      role: 'member'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])), {}, {
    filteredAvailableUsers: function filteredAvailableUsers() {
      if (!Array.isArray(this.availableUsers)) {
        return [];
      }
      if (!Array.isArray(this.branchUsers)) {
        return this.availableUsers;
      }
      var assignedUserIds = this.branchUsers.map(function (u) {
        return u.id;
      });
      return this.availableUsers.filter(function (u) {
        return !assignedUserIds.includes(u.id);
      });
    },
    roleOptions: function roleOptions() {
      return [{
        label: this.$t('Member'),
        value: 'member'
      }, {
        label: this.$t('Admin'),
        value: 'admin'
      }];
    }
  }),
  mounted: function mounted() {
    this.breadcrumbsCurrent = this.$t('Assign Users to Branch');
    this.breadcrumbs = [{
      name: this.$t('Dashboard'),
      url: 'home'
    }, {
      name: this.$t('Branches'),
      url: 'branches.index'
    }, {
      name: this.$t('Assign Users to Branch'),
      url: ''
    }];
    this.getBranchUsers();
    this.getAvailableUsers();
  },
  methods: {
    getBranchUsers: function getBranchUsers() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var branchId, _yield$_this$$axios$g, data, _error$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              branchId = _this.$route.params.branchId;
              _context.n = 2;
              return _this.$axios.get("/api/branches/".concat(branchId, "/users"));
            case 2:
              _yield$_this$$axios$g = _context.v;
              data = _yield$_this$$axios$g.data;
              _this.branchUsers = Array.isArray(data) ? data : [];
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.branchUsers = [];
              _this.$toast.error(_this.$t('Error'), ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t('Failed to load users'));
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
    getAvailableUsers: function getAvailableUsers() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, users, _error$response2, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _this2.$axios.get('/api/all-user');
            case 1:
              response = _context2.v;
              users = response.data;
              if (users && users.data && Array.isArray(users.data)) {
                users = users.data;
              }
              _this2.availableUsers = Array.isArray(users) ? users : [];
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              _this2.availableUsers = [];
              _this2.$toast.error(_this2.$t('Error'), ((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _this2.$t('Failed to load available users'));
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    assignUser: function assignUser() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var branchId, _error$response3, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (_this3.selectedUser) {
                _context3.n = 1;
                break;
              }
              _this3.$toast.error(_this3.$t('Error'), _this3.$t('Please select a user'));
              return _context3.a(2);
            case 1:
              _this3.loading = true;
              _context3.p = 2;
              branchId = _this3.$route.params.branchId;
              _context3.n = 3;
              return _this3.$axios.post('/api/user-branches', {
                user_id: _this3.selectedUser.id,
                branch_id: branchId,
                role: _this3.role
              });
            case 3:
              _this3.$toast.success(_this3.$t('Success'), _this3.$t('User assigned successfully'));
              _this3.closeAddUserModal();
              _context3.n = 4;
              return _this3.getBranchUsers();
            case 4:
              _context3.n = 5;
              return _this3.getAvailableUsers();
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              _this3.$toast.error(_this3.$t('Error'), ((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _this3.$t('Failed to assign user'));
            case 7:
              _context3.p = 7;
              _this3.loading = false;
              return _context3.f(7);
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 6, 7, 8]]);
      }))();
    },
    removeUser: function removeUser(user) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var branchId, _error$response4, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (confirm(_this4.$t('Are you sure you want to remove this user from the branch?'))) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this4.loading = true;
              _context4.p = 2;
              branchId = _this4.$route.params.branchId;
              _context4.n = 3;
              return _this4.$axios["delete"]("/api/user-branches/".concat(user.id, "/").concat(branchId));
            case 3:
              _this4.$toast.success(_this4.$t('Success'), _this4.$t('User removed successfully'));
              _context4.n = 4;
              return _this4.getBranchUsers();
            case 4:
              _context4.n = 5;
              return _this4.getAvailableUsers();
            case 5:
              _context4.n = 7;
              break;
            case 6:
              _context4.p = 6;
              _t4 = _context4.v;
              _this4.$toast.error(_this4.$t('Error'), ((_error$response4 = _t4.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _this4.$t('Failed to remove user'));
            case 7:
              _context4.p = 7;
              _this4.loading = false;
              return _context4.f(7);
            case 8:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 6, 7, 8]]);
      }))();
    },
    closeAddUserModal: function closeAddUserModal() {
      this.showAddUserModal = false;
      this.selectedUser = null;
      this.role = 'member';
    },
    refreshTable: function refreshTable() {
      this.getBranchUsers();
    }
  }
});
;// ./resources/js/pages/branches/assign-users.vue?vue&type=script&lang=js
 /* harmony default export */ const branches_assign_usersvue_type_script_lang_js = (assign_usersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=3688a352&prod&scoped=true&lang=css
var assign_usersvue_type_style_index_0_id_3688a352_prod_scoped_true_lang_css = __webpack_require__(40843);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=3688a352&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(assign_usersvue_type_style_index_0_id_3688a352_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const branches_assign_usersvue_type_style_index_0_id_3688a352_prod_scoped_true_lang_css = (assign_usersvue_type_style_index_0_id_3688a352_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/branches/assign-users.vue?vue&type=style&index=0&id=3688a352&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/branches/assign-users.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  branches_assign_usersvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3688a352",
  null
  
)

/* harmony default export */ const assign_users = (component.exports);

/***/ }

}]);