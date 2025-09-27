"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1600],{

/***/ 91600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ products)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/index.vue?vue&type=template&id=863e92ca
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Items")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: 'Refresh',
      expression: "'Refresh'"
    }],
    staticClass: "btn btn-success",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTable();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: 'Import',
      expression: "'Import'"
    }],
    staticClass: "btn btn-dark",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.uploadCsvModalShow();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-upload"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to Excel'),
      expression: "$t('Export to Excel')"
    }],
    staticClass: "btn btn-info",
    attrs: {
      "href": _vm.exportUrl
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-circle-down"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Export to PDF'),
      expression: "$t('Export to PDF')"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      "href": "/products/pdf"
    }
  }, [_c('i', {
    staticClass: "fas fa-download"
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Print Table'),
      expression: "$t('Print Table')"
    }],
    staticClass: "btn btn-info",
    on: {
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  })]), _vm._v(" "), _vm.$can('product-create') ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'products.create'
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Create")) + "\n                "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6 col-xl-4 mb-2"
  }, [_c('search', {
    on: {
      "reset-pagination": function resetPagination($event) {
        return _vm.resetPagination();
      },
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1)]), _vm._v(" "), _c('table-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), !_vm.loading ? _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Image")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Category")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Model")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Unit")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Selling Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _vm.$can('product-edit') || _vm.$can('product-view') || _vm.$can('product-delete') ? _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Action")) + "\n                  ")]) : _vm._e()])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                    ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(data.itemType))]), _vm._v(" "), _c('td', [data.image ? _c('a', {
      attrs: {
        "href": "#",
        "id": "show-modal"
      },
      on: {
        "click": function click($event) {
          return _vm.previewModal(data.image);
        }
      }
    }, [_c('img', {
      staticClass: "rounded preview-sm",
      attrs: {
        "src": data.image,
        "loading": "lazy"
      }
    })]) : _c('div', {
      staticClass: "bg-secondary rounded no-preview-sm"
    }, [_c('small', [_vm._v(_vm._s(_vm.$t("No Preview")))])])]), _vm._v(" "), _c('td', [data.subCategory ? _c('span', [_vm._v(_vm._s(data.subCategory.name) + " [" + _vm._s(_vm._f("withPrefix")(data.subCategory.code, _vm.subCatPrefix)) + "]\n                    ")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withPrefix")(data.code, _vm.prefix)))]), _vm._v(" "), _c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_vm._v("\n                      " + _vm._s(data.name) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.itemModel))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.itemUnit.code))]), _vm._v(" "), _c('td', [data.discount > 0 ? _c('span', [_c('del', [_vm._v(_vm._s(data.regularPrice))]), _vm._v("\n                      " + _vm._s(_vm._f("withCurrency")(data.sellingPrice)) + " (" + _vm._s(data.discount) + "%)")]) : _c('span', [_vm._v(_vm._s(_vm._f("withCurrency")(data.regularPrice)) + "\n                    ")])]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _vm.$can('product-edit') || _vm.$can('product-view') || _vm.$can('product-delete') ? _c('td', {
      staticClass: "text-right no-print"
    }, [_c('div', {
      staticClass: "btn-group"
    }, [_vm.$can('product-view') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('View'),
        expression: "$t('View')"
      }],
      staticClass: "btn btn-primary btn-sm",
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('product-edit') ? _c('router-link', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit'),
        expression: "$t('Edit')"
      }],
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "to": {
          name: 'products.edit',
          params: {
            slug: data.slug
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.$can('product-delete') ? _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "$t('Delete')"
      }],
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.deleteData(data.slug);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })]) : _vm._e()], 1)]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "10"
    }
  }, [_c('EmptyTable')], 1)])], 2)])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("per_page")) + " ")]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control form-control-sm ml-1",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.updatePerPager]
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])])])]), _vm._v(" "), _vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])])])]), _vm._v(" "), _vm.showModal ? _c('Modal', {
    on: {
      "close": function close($event) {
        return _vm.previewModal();
      }
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Attached Image Preview")))]), _vm._v(" "), _c('div', {
    staticClass: "w-100",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('img', {
    staticClass: "rounded img-fluid",
    attrs: {
      "src": _vm.imagePath,
      "loading": "lazy"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.showUploadCsvModal ? _c('Modal', {
    staticClass: "pay-modal",
    on: {
      "close": function close($event) {
        _vm.showUploadCsvModal = false;
      }
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Upload Your CSV file")))]), _vm._v(" "), _c('div', {
    staticClass: "w-100",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveCsv.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "alert alert-info"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t("Instructions")))]), _vm._v(" "), _c('ul', [_c('li', [_vm._v(_vm._s(_vm.$t("Download the zip folder.")))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t("Populate the products.csv with your product information.")))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t("You can get the ids related to product to their corresponding CSV file")))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t("Example: sub_cat_id in sub-categories.csv")))])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('a', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.downloadTemplate
    }
  }, [_c('i', {
    staticClass: "fas fa-download"
  }), _vm._v(" " + _vm._s(_vm.$t("Download")) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('input', {
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('file')
    },
    attrs: {
      "type": "file",
      "id": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.form.errors.has('file'),
      expression: "form.errors.has('file')"
    }],
    staticClass: "invalid-feedback"
  }, [_vm._v("\n            " + _vm._s(_vm.form.errors.get("file")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Reset")) + "\n          ")])], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/index.vue?vue&type=script&lang=js
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



/* harmony default export */ const productsvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Items")
    };
  },
  data: function data() {
    return {
      form: new vform_es/* default */.Ay({
        file: ""
      }),
      showUploadCsvModal: false,
      breadcrumbsCurrent: "Items",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Items",
        url: ""
      }],
      showModal: false,
      perPage: 10,
      query: ""
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "loading", "pagination", "appInfo"])), {}, {
    exportUrl: function exportUrl() {
      // Create a dynamic export URL with query parameters
      return "/products/export/excel?term=".concat(this.query);
    }
  }),
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    }
  },
  created: function created() {
    this.getData();
    this.prefix = this.appInfo.productPrefix;
    this.catPrefix = this.appInfo.proCatPrefix;
    this.subCatPrefix = this.appInfo.proSubCatPrefix;
  },
  methods: {
    // get the csv file to form
    onFileChange: function onFileChange(e) {
      this.form.file = e.target.files[0];
    },
    // save the csv file on database
    saveCsv: function saveCsv() {
      var _this = this;
      this.form.post("/api/product-import").then(function () {
        _this.showUploadCsvModal = false;
        Swal.fire(_this.$t("Success"), _this.$t("CSV file imported successfully!"), "success");
        _this.getData();
        _this.form.reset();
      })["catch"](function (_ref) {
        var response = _ref.response;
        // this.showUploadCsvModal = false
        if (response.data.row_number) {
          _this.showUploadCsvModal = false;
          Swal.fire({
            title: "Error",
            text: "Row Number " + response.data.row_number + " has error. " + response.data.message,
            icon: "error",
            button: "Ok"
          });
          _this.form.reset();
        }
      });
    },
    //show the modal
    uploadCsvModalShow: function uploadCsvModalShow() {
      this.form = new vform_es/* default */.Ay({
        file: ""
      });
      this.showUploadCsvModal = true;
    },
    // close the csv upload modal
    uploadCsvModalClose: function uploadCsvModalClose() {
      this.showUploadCsvModal = false;
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // get data
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var currentPage;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this2.$store.state.operations.loading = true;
              currentPage = _this2.pagination ? _this2.pagination.current_page : 1;
              _context.n = 1;
              return _this2.$store.dispatch("operations/fetchData", {
                path: "/api/products?page=",
                currentPage: currentPage + "&perPage=" + _this2.perPage
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this3.query === "" ? _this3.getData() : _this3.searchData();
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this4.pagination.current_page = 1;
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // search data
    searchData: function searchData() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this5.$store.state.operations.loading = true;
              _context4.n = 1;
              return _this5.$store.dispatch("operations/searchData", {
                path: "/api/products/search",
                term: _this5.query,
                currentPage: _this5.pagination.current_page + "&perPage=" + _this5.perPage
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this6.query = "";
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // display modal
    previewModal: function previewModal(image) {
      this.imagePath = image;
      if (this.showModal) {
        return this.showModal = false;
      }
      return this.showModal = true;
    },
    // print table
    print: function print() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this7.$htmlToPaper("printMe");
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },
    imageLocation: function imageLocation(img) {
      return window.location.origin + "/images/products/" + img;
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              Swal.fire({
                title: _this8.$t("Are you sure?"),
                text: _this8.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this8.$t("Confirm")
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this8.$store.dispatch("operations/deleteData", {
                    path: "/api/products/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      Swal.fire(_this8.$t("Deleted!"), _this8.$t("Deleted successfully."), "success");
                    } else {
                      _this8.$t("Failed!"), _this8.$t("There was something wrong."), "warning";
                    }
                  });
                }
              });
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    downloadTemplate: function downloadTemplate() {
      window.open("/product-import-template");
      // const { data } = axios.get(
      //   window.location.origin + '/api/product-import-template'
      // )
      // console.log(data)
    }
  }
});
;// ./resources/js/pages/products/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_productsvue_type_script_lang_js = (productsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/products/index.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  pages_productsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const products = (component.exports);

/***/ })

}]);