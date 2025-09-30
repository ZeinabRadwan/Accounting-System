"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8677],{

/***/ 78677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/profile.vue?vue&type=template&id=4ec8132e&scoped=true
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
  }, [_vm.user ? _c('div', {
    staticClass: "col-md-12 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-primary card-outline"
  }, [_c('div', {
    staticClass: "card-body box-profile"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('img', _vm._b({
    staticClass: "profile-user-img img-fluid img-circle",
    attrs: {
      "alt": _vm.$t('Attached Image')
    }
  }, 'img', _vm.getAvatarProps(_vm.user.photo_url, '', 'default-avatar.jpeg'), false))]), _vm._v(" "), _c('h3', {
    staticClass: "profile-username text-center"
  }, [_vm._v("\n                        " + _vm._s(_vm.user.name) + "\n                    ")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted text-center"
  }, [_vm._v("\n                        " + _vm._s(_vm.user.roles[0]) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-lg-9"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Update your profile')) + "\n                    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v("\n                        " + _vm._s(_vm.$t('Back')) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateProfile.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                                "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
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
      "type": "text",
      "id": "name",
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v(_vm._s(_vm.$t('Email')) + "\n                                "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('email')
    },
    attrs: {
      "type": "email",
      "id": "email",
      "placeholder": _vm.$t('Enter your email address')
    },
    domProps: {
      "value": _vm.form.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "email"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "currentPassword"
    }
  }, [_vm._v(_vm._s(_vm.$t('Current Password')))]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currentPassword,
      expression: "form.currentPassword"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('currentPassword')
    },
    attrs: {
      "type": "password",
      "id": "currentPassword",
      "placeholder": _vm.$t('Current Password')
    },
    domProps: {
      "value": _vm.form.currentPassword
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "currentPassword", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "currentPassword"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "newPassword"
    }
  }, [_vm._v(_vm._s(_vm.$t('New Password')))]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.newPassword,
      expression: "form.newPassword"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('newPassword')
    },
    attrs: {
      "type": "password",
      "id": "newPassword",
      "placeholder": _vm.$t('Enter new password')
    },
    domProps: {
      "value": _vm.form.newPassword
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "newPassword", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "newPassword"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "confirmPassword"
    }
  }, [_vm._v(_vm._s(_vm.$t('Confirm Password')))]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.confirmPassword,
      expression: "form.confirmPassword"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('confirmPassword')
    },
    attrs: {
      "type": "password",
      "id": "confirmPassword",
      "placeholder": _vm.$t('Enter confirm password')
    },
    domProps: {
      "value": _vm.form.confirmPassword
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "confirmPassword", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "confirmPassword"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "offset-sm-2 col-sm-10"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('Save changes')) + "\n                                ")])], 1)])])])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./resources/js/mixins/avatarMixin.js
var avatarMixin = __webpack_require__(97469);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/profile.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const profilevue_type_script_lang_js = ({
  layout: 'central',
  middleware: 'auth',
  mixins: [avatarMixin/* default */.A],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Update Profile')
    };
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: 'Update Profile',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Update',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }),
      loading: true,
      user: ''
    };
  },
  created: function created() {
    this.getUser();
  },
  methods: {
    // get the user
    getUser: function getUser() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/user');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.name = data.data.name;
              _this.form.email = data.data.email;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // update profile
    updateProfile: function updateProfile() {
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
              return _this2.form.post(window.location.origin + '/api/update-profile').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Profile updated successfully')
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
;// ./resources/js/pages/central/profile.vue?vue&type=script&lang=js
 /* harmony default export */ const central_profilevue_type_script_lang_js = (profilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/profile.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  central_profilevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4ec8132e",
  null
  
)

/* harmony default export */ const profile = (component.exports);

/***/ }),

/***/ 97469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    /**
     * Get avatar with fallback to default avatar if image doesn't exist
     * @param {string|null} imagePath - The image path (can be null or empty)
     * @param {string} directory - The directory where the image is stored (e.g., 'clients', 'suppliers', 'employees')
     * @param {string} defaultAvatar - The default avatar filename (defaults to 'default-avatar.jpeg')
     * @returns {string} The full URL to the avatar image
     */
    getAvatarWithFallback: function getAvatarWithFallback(imagePath) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      // If no image path provided, return default avatar
      if (!imagePath || imagePath.trim() === '') {
        return window.location.origin + '/images/' + defaultAvatar;
      }

      // Build the full image path
      var fullImagePath = directory ? "images/".concat(directory, "/").concat(imagePath) : "images/".concat(imagePath);
      var fullUrl = window.location.origin + '/' + fullImagePath;

      // Return the image URL - the browser will handle 404s and show broken image icon
      // We could implement a more sophisticated check here, but for now we'll rely on the backend
      // to provide the correct fallback URL through the Resource classes
      return fullUrl;
    },
    /**
     * Handle image error by setting src to default avatar
     * @param {Event} event - The error event from the img element
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     */
    handleImageError: function handleImageError(event) {
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      var img = event.target;
      img.src = window.location.origin + '/images/' + defaultAvatar;
      img.onerror = null; // Prevent infinite loop
    },
    /**
     * Get avatar URL for display with error handling
     * @param {string|null} imagePath - The image path
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     * @returns {Object} Object with src and onerror handler
     */
    getAvatarProps: function getAvatarProps(imagePath) {
      var _this = this;
      var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default-avatar.jpeg';
      return {
        src: this.getAvatarWithFallback(imagePath, directory, defaultAvatar),
        onerror: function onerror(event) {
          return _this.handleImageError(event, directory, defaultAvatar);
        }
      };
    }
  }
});

/***/ })

}]);