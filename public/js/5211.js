"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5211],{

/***/ 75211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testimonial)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/testimonial.vue?vue&type=template&id=b6bb1856&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('Testimonial Section Tagline')) + "\n            ")])]), _vm._v(" "), _c('form', {
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
      "for": "testimonial_section_tagline"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Testimonial Section Tagline')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.testimonial_section_tagline,
      expression: "form.testimonial_section_tagline"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('testimonial_section_tagline')
    },
    attrs: {
      "type": "text",
      "id": "testimonial_section_tagline",
      "placeholder": _vm.$t('Enter testimonial section tagline')
    },
    domProps: {
      "value": _vm.form.testimonial_section_tagline
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "testimonial_section_tagline", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "testimonial_section_tagline"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "testimonial_section_title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Testimonial Section Title')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.testimonial_section_title,
      expression: "form.testimonial_section_title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('testimonial_section_title')
    },
    attrs: {
      "type": "text",
      "id": "testimonial_section_title",
      "placeholder": _vm.$t('Enter testimonial section title')
    },
    domProps: {
      "value": _vm.form.testimonial_section_title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "testimonial_section_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "testimonial_section_title"
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
      value: _vm.form.is_show_testimonial_section,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_show_testimonial_section", $$v);
      },
      expression: "form.is_show_testimonial_section"
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
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Save changes')) + "\n                ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-5 mb-4"
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
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Testimonial Elements')) + "\n                        ")])]), _vm._v(" "), _c('div', {
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
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function click($event) {
        _vm.showModal = !_vm.showModal;
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('Create')) + "\n                                "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })])])])]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-custom mt-3",
    attrs: {
      "id": "printMe"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v("\n                                        " + _vm._s(_vm.$t('Image')) + "\n                                    ")]), _vm._v(" "), _c('th', [_vm._v("\n                                        " + _vm._s(_vm.$t('Title')) + "\n                                    ")]), _vm._v(" "), _c('th', [_vm._v("\n                                        " + _vm._s(_vm.$t('Name')) + "\n                                    ")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', {
    staticClass: "text-right no-print"
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('Action')) + "\n                                    ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (data, i) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.items.length,
        expression: "items.length"
      }],
      key: i
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                                            " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                                        ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [data.image ? _c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('img', {
      staticClass: "rounded preview-sm",
      attrs: {
        "src": data.image,
        "loading": "lazy"
      }
    })]) : _c('div', {
      staticClass: "bg-secondary rounded no-preview-sm"
    }, [_c('small', [_vm._v(_vm._s(_vm.$t('No Preview')))])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.name))]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
      staticClass: "badge bg-success"
    }, [_vm._v(_vm._s(_vm.$t('Active')))]) : _c('span', {
      staticClass: "badge bg-danger"
    }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('td', {
      staticClass: "text-right no-print"
    }, [_c('div', {
      staticClass: "btn-group"
    }, [_c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit'),
        expression: "\n                                                    $t('Edit')\n                                                "
      }],
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.editData(data.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c('a', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Delete'),
        expression: "\n                                                    $t('Delete')\n                                                "
      }],
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.deleteData(data.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })])])])]);
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading && !_vm.items.length,
      expression: "!loading && !items.length"
    }]
  }, [_c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_c('EmptyTable')], 1)])], 2)])])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('per_page')) + " ")]), _vm._v(" "), _c('div', [_c('select', {
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
      "close": _vm.closeModal
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t('Testimonial')))]), _vm._v(" "), _c('div', {
    staticClass: "w-100 m-0",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('form', {
    ref: "form",
    staticClass: "row",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.dataForm.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('title')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataForm.title,
      expression: "dataForm.title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.dataForm.errors.has('title')
    },
    attrs: {
      "id": "title",
      "type": "text",
      "name": "title",
      "placeholder": _vm.$t('title')
    },
    domProps: {
      "value": _vm.dataForm.title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.dataForm,
      "field": "title"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('name')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataForm.name,
      expression: "dataForm.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.dataForm.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('name')
    },
    domProps: {
      "value": _vm.dataForm.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.dataForm,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Status')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataForm.status,
      expression: "dataForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.dataForm.errors.has('status')
    },
    attrs: {
      "id": "status",
      "name": "status"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Inactive')) + "\n                        ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.dataForm,
      "field": "status"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "description"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Description')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataForm.description,
      expression: "dataForm.description"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.dataForm.errors.has('description')
    },
    attrs: {
      "id": "description",
      "name": "description",
      "placeholder": _vm.$t('Enter description')
    },
    domProps: {
      "value": _vm.dataForm.description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dataForm, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.dataForm,
      "field": "description"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Image')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.dataForm.errors.has('image')
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
      "form": _vm.dataForm,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "alt": _vm.$t('Attached Image'),
      "src": _vm.url
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100 justify-content-between p-3",
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.handleFormSubmit
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('Close')) + "\n            ")])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/testimonial.vue?vue&type=script&lang=js
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



/* harmony default export */ const testimonialvue_type_script_lang_js = ({
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
        testimonial_section_tagline: '',
        testimonial_section_title: '',
        is_show_testimonial_section: false
      }),
      dataForm: new vform_es/* default */.Ay({
        title: '',
        description: '',
        name: '',
        status: 1,
        image: null,
        type: 'testimonials'
      }),
      showModal: false,
      query: '',
      perPage: 10,
      url: null,
      typeName: 'type',
      typeValue: 'testimonials',
      formType: 'create',
      // create or edit
      formUpdateId: null,
      isDemoMode: window.config.isDemoMode
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['appInfo', 'items', 'loading', 'pagination'])),
  created: function created() {
    this.getData();
    this.getTableData();
  },
  methods: {
    // get the data
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/settings/testimonial-settings');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.testimonial_section_tagline = data.data.testimonial_section_tagline || '';
              _this.form.testimonial_section_title = data.data.testimonial_section_title || '';
              _this.form.is_show_testimonial_section = _this.appInfo.is_show_testimonial_section;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // update the data
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
              return _this2.form.patch(window.location.origin + '/api/settings/testimonial-settings').then(function () {
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
    },
    /***************************************
     * --- new modal and table starts -----
     **************************************/
    clearEverythingReloadDataHideModalAfterSubmit: function clearEverythingReloadDataHideModalAfterSubmit() {
      this.formType = 'create'; // create or edit
      this.formUpdateId = null;
      this.showModal = false;
      this.dataForm.image = null;
      this.dataForm.reset();
      this.dataForm.clear();
      this.url = null;
    },
    // handle form submit
    handleFormSubmit: function handleFormSubmit() {
      if (this.formType === 'create') {
        this.createData();
      } else {
        this.updateData(this.formUpdateId);
      }
    },
    // create
    createData: function createData() {
      var _this3 = this;
      // disable for demo
      if (this.isDemoMode) {
        return toast.fire({
          type: 'warning',
          title: this.$t('You are not allowed to do this in demo version.')
        });
      }
      this.dataForm.post('/api/setting-images').then(function () {
        toast.fire({
          type: 'success',
          title: _this3.$t('Created successfully!')
        });
        _this3.getTableData();
        _this3.clearEverythingReloadDataHideModalAfterSubmit();
      })["catch"](function () {
        toast.fire({
          type: 'error',
          title: _this3.$t('Opps...something went wrong')
        });
      });
    },
    // update
    updateData: function updateData(id) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!_this4.isDemoMode) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2, toast.fire({
                type: 'warning',
                title: _this4.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _this4.dataForm._method = 'PATCH';
              _context3.n = 2;
              return _this4.dataForm.post('/api/setting-images/' + id).then(function () {
                toast.fire({
                  type: 'success',
                  title: _this4.$t('Page updated successfully')
                });
                _this4.getTableData();
                _this4.clearEverythingReloadDataHideModalAfterSubmit();
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Error!')
                });
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        this.dataForm.image = file;
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        toast.fire(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'), 'error');
      }
    },
    // get data
    getTableData: function getTableData() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var currentPage;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _this5.$store.state.operations.loading = true;
              currentPage = _this5.pagination ? _this5.pagination.current_page : 1;
              _context4.n = 1;
              return _this5.$store.dispatch('operations/fetchDataByType', {
                path: '/api/setting-images?page=',
                currentPage: currentPage + '&perPage=' + _this5.perPage,
                typeName: _this5.typeName,
                typeValue: _this5.typeValue
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // update per page count
    updatePerPager: function updatePerPager() {
      this.pagination.current_page = 1;
      this.query === '' ? this.getTableData() : this.searchData();
    },
    // search data
    searchData: function searchData() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var currentPage;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _this6.$store.state.operations.loading = true;
              currentPage = _this6.pagination ? _this6.pagination.current_page : 1;
              _context5.n = 1;
              return _this6.$store.dispatch('operations/searchDataByType', {
                term: _this6.query,
                path: '/api/setting-images/search',
                currentPage: currentPage + '&perPage=' + _this6.perPage,
                typeName: _this6.typeName,
                typeValue: _this6.typeValue
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!(_this7.query === '')) {
                _context6.n = 2;
                break;
              }
              _context6.n = 1;
              return _this7.getTableData();
            case 1:
              _context6.n = 3;
              break;
            case 2:
              _context6.n = 3;
              return _this7.searchData();
            case 3:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _this8.query = '';
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _this9.pagination.current_page = 1;
            case 1:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // refresh table
    refreshTable: function refreshTable() {
      this.query = '';
      this.query === '' ? this.getTableData() : this.searchData();
    },
    closeModal: function closeModal() {
      this.clearEverythingReloadDataHideModalAfterSubmit();
    },
    // save
    save: function save() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _this0.handleFormSubmit();
            case 1:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // edit data
    editData: function editData(id) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!_this1.isDemoMode) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2, toast.fire({
                type: 'warning',
                title: _this1.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _this1.formType = 'edit';
              _this1.formUpdateId = id;
              _context0.n = 2;
              return axios_default().get(window.location.origin + '/api/setting-images/' + id);
            case 2:
              _yield$axios$get2 = _context0.v;
              data = _yield$axios$get2.data;
              _this1.dataForm.fill(data.data);
              _this1.url = data.data.image;
              _this1.showModal = true;
            case 3:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // delete data
    deleteData: function deleteData(id) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (!_this10.isDemoMode) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2, toast.fire({
                type: 'warning',
                title: _this10.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              Swal.fire({
                title: _this10.$t('Are you sure?'),
                text: _this10.$t('You will not be able to return to this!'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this10.$t('Delete')
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this10.$store.dispatch('operations/deleteData', {
                    path: '/api/setting-images/',
                    slug: id
                  }).then(function (response) {
                    if (response === true) {
                      Swal.fire(_this10.$t('Deleted!'), _this10.$t('Deleted successfully.'), 'success');
                      _this10.getTableData();
                    } else {
                      Swal.fire(_this10.$t('Failed!'), _this10.$t('There was something wrong.'), 'warning');
                    }
                  });
                }
              });
            case 2:
              return _context1.a(2);
          }
        }, _callee1);
      }))();
    }
  }
});
;// ./resources/js/pages/central/settings/testimonial.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_testimonialvue_type_script_lang_js = (testimonialvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/settings/testimonial.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  settings_testimonialvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b6bb1856",
  null
  
)

/* harmony default export */ const testimonial = (component.exports);

/***/ })

}]);