"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3381],{

/***/ 11768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2de20b28]{gap:10px}.btn-group.c-w-100>.btn[data-v-2de20b28]{border-radius:10px!important}.btn-group.c-w-100>.btn[data-v-2de20b28]:first-child{border-bottom-right-radius:10px!important;border-top-right-radius:10px!important}.btn-group.c-w-100>.btn[data-v-2de20b28]:last-child{border-bottom-left-radius:10px!important;border-top-left-radius:10px!important}.card[data-v-2de20b28]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2de20b28]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2de20b28]{background:#f1f5fb!important}.btn-primary[data-v-2de20b28]{background:#2ab930!important}.btn-primary[data-v-2de20b28],.btn-secondary[data-v-2de20b28]{border:none!important;border-radius:10px!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-2de20b28]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=template&id=2de20b28&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
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
        name: 'assets.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form",
      "enctype": "multipart/form-data"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateAsset.apply(null, arguments);
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
  }, [_vm._v(_vm._s(_vm.$t('Asset Name')) + "\n                  "), _c('span', {
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
      "placeholder": _vm.$t('Enter asset name')
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
  })], 1), _vm._v(" "), _vm.items ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "assetType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Asset Type')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('assetType')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "assetType",
      "placeholder": _vm.$t('Select an asset type')
    },
    model: {
      value: _vm.form.assetType,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "assetType", $$v);
      },
      expression: "form.assetType"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "assetType"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "assetCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Asset Cost')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.assetCost,
      expression: "form.assetCost"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('assetCost')
    },
    attrs: {
      "id": "assetCost",
      "type": "number",
      "name": "assetCost",
      "placeholder": _vm.$t('Enter asset cost')
    },
    domProps: {
      "value": _vm.form.assetCost
    },
    on: {
      "change": _vm.calculateDepreciationExpense,
      "keyup": _vm.calculateDepreciationExpense,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "assetCost", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "assetCost"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "depreciation"
    }
  }, [_vm._v(_vm._s(_vm.$t('Depreciation')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.depreciation,
      expression: "form.depreciation"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('depreciation')
    },
    attrs: {
      "id": "depreciation"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "depreciation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yes')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('No')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "depreciation"
    }
  })], 1)]), _vm._v(" "), _vm.form.depreciation == 1 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "depreciationType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Depreciation Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.depreciationType,
      expression: "form.depreciationType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('depreciationType')
    },
    attrs: {
      "id": "depreciationType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "depreciationType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.calculateDepreciationExpense]
    }
  }, [_c('option', {
    attrs: {
      "value": "Month"
    }
  }, [_vm._v(_vm._s(_vm.$t('Monthly')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Year"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yearly')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "depreciationType"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "salvageValue"
    }
  }, [_vm._v(_vm._s(_vm.$t('Salvage Value')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salvageValue,
      expression: "form.salvageValue"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('salvageValue')
    },
    attrs: {
      "id": "salvageValue",
      "type": "number",
      "name": "salvageValue",
      "placeholder": _vm.$t('Salvage Value')
    },
    domProps: {
      "value": _vm.form.salvageValue
    },
    on: {
      "change": _vm.calculateDepreciationExpense,
      "keyup": _vm.calculateDepreciationExpense,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "salvageValue", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salvageValue"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "usefulLife"
    }
  }, [_vm._v(_vm._s(_vm.$t('Useful Life')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.usefulLife,
      expression: "form.usefulLife"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('usefulLife')
    },
    attrs: {
      "id": "usefulLife",
      "type": "number",
      "name": "usefulLife",
      "placeholder": _vm.$t('Enter useful life')
    },
    domProps: {
      "value": _vm.form.usefulLife
    },
    on: {
      "change": _vm.calculateDepreciationExpense,
      "keyup": _vm.calculateDepreciationExpense,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "usefulLife", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "usefulLife"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "depreciationExpense"
    }
  }, [_vm._v(_vm._s(_vm.$t('Depreciation')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.depreciationExpense,
      expression: "form.depreciationExpense"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "depreciationExpense",
      "type": "text",
      "name": "depreciationExpense",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.depreciationExpense
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "depreciationExpense", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "placeholder": _vm.$t('Write your note here!')
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Date')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date,
      expression: "form.date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('date')
    },
    attrs: {
      "id": "date",
      "type": "date",
      "name": "date"
    },
    domProps: {
      "value": _vm.form.date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Image')))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t('Choose file')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.url ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Attached Image')
    }
  }) : _vm._e()])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=script&lang=js
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



/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Asset')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Asset',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Assets',
        url: 'assets.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        name: '',
        assetCost: '',
        assetType: null,
        depreciation: 0,
        salvageValue: 0,
        usefulLife: 0,
        depreciationExpense: '',
        depreciationType: 'Year',
        image: '',
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1
      }),
      loading: true,
      url: null
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])),
  created: function created() {
    this.getAsset();
    this.getTypes();
  },
  methods: {
    // get all types
    getTypes: function getTypes() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-asset-types'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get asset
    getAsset: function getAsset() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/assets/' + _this2.$route.params.slug);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.form.name = data.data.name;
              _this2.form.assetCost = data.data.amount;
              _this2.form.note = data.data.note;
              _this2.form.status = data.data.status;
              _this2.form.assetType = data.data.type;
              _this2.form.date = data.data.date;
              _this2.form.depreciation = data.data.depreciation;
              _this2.form.salvageValue = data.data.salvageValue > 0 ? data.data.salvageValue : 0;
              _this2.form.usefulLife = data.data.usefulLife;
              _this2.form.depreciationType = data.data.depreciationType == 1 ? 'Year' : 'Month';
              _this2.form.depreciationExpense = data.data.depreciationExpenseTxt;
              _this2.url = data.data.image;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // calculate depreciation expense
    calculateDepreciationExpense: function calculateDepreciationExpense() {
      if (this.form.depreciation == 1 && this.form.assetCost && this.form.usefulLife) {
        var depreciationExpense = (this.form.assetCost - this.form.salvageValue) / this.form.usefulLife;
        return this.form.depreciationExpense = depreciationExpense + ' Per ' + this.form.depreciationType;
      }
      return;
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this3 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this3.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        Swal.fire(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'), 'error');
      }
    },
    // update asset
    updateAsset: function updateAsset() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this4.form.patch(window.location.origin + '/api/assets/' + _this4.$route.params.slug).then(function () {
                toast.fire({
                  type: 'success',
                  title: _this4.$t('Asset updated successfully')
                });
                _this4.$router.push({
                  name: 'assets.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Opps...something went wrong')
                });
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  }
});
;// ./resources/js/pages/assets/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const assets_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=style&index=0&id=2de20b28&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_2de20b28_prod_scoped_true_lang_css = __webpack_require__(99369);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=style&index=0&id=2de20b28&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_2de20b28_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const assets_editvue_type_style_index_0_id_2de20b28_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_2de20b28_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/assets/edit.vue?vue&type=style&index=0&id=2de20b28&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=style&index=1&id=2de20b28&prod&scoped=true&lang=css
var editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css = __webpack_require__(11768);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assets/edit.vue?vue&type=style&index=1&id=2de20b28&prod&scoped=true&lang=css

            

var editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css_options = {};

editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css_options.insert = "head";
editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css_options.singleton = false;

var editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css/* default */.A, editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css_options);



/* harmony default export */ const assets_editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css = (editvue_type_style_index_1_id_2de20b28_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/assets/edit.vue?vue&type=style&index=1&id=2de20b28&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/assets/edit.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  assets_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2de20b28",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 99369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2de20b28]{gap:10px}.btn-group.c-w-100>.btn[data-v-2de20b28]{border-radius:10px!important}.btn-group.c-w-100>.btn[data-v-2de20b28]:first-child{border-bottom-right-radius:10px!important;border-top-right-radius:10px!important}.btn-group.c-w-100>.btn[data-v-2de20b28]:last-child{border-bottom-left-radius:10px!important;border-top-left-radius:10px!important}.card[data-v-2de20b28]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-2de20b28]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2de20b28]{background:#f1f5fb!important}.btn-primary[data-v-2de20b28]{background:#2ab930!important}.btn-primary[data-v-2de20b28],.btn-secondary[data-v-2de20b28]{border:none!important;border-radius:10px!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-2de20b28]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);