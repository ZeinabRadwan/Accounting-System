"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5920],{

/***/ 95920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ software_overview)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/software-overview.vue?vue&type=template&id=cc13c768&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t('Software Overview')))])]), _vm._v(" "), _c('form', {
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
      "for": "software_overview_section_tagline"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Software Overview Section Tagline')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.software_overview_section_tagline,
      expression: "form.software_overview_section_tagline"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('software_overview_section_tagline')
    },
    attrs: {
      "type": "text",
      "id": "software_overview_section_tagline",
      "placeholder": _vm.$t('Enter software overview section tagline')
    },
    domProps: {
      "value": _vm.form.software_overview_section_tagline
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "software_overview_section_tagline", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "software_overview_section_tagline"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "software_overview_section_title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('Software Overview Section Title')) + "\n                        "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.software_overview_section_title,
      expression: "form.software_overview_section_title"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('software_overview_section_title')
    },
    attrs: {
      "type": "text",
      "id": "software_overview_section_title",
      "placeholder": _vm.$t('Enter software overview section title')
    },
    domProps: {
      "value": _vm.form.software_overview_section_title
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "software_overview_section_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "software_overview_section_title"
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
      value: _vm.form.is_show_screenshot_section,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_show_screenshot_section", $$v);
      },
      expression: "form.is_show_screenshot_section"
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
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Software Overview Elements')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
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
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('#')))]), _vm._v(" "), _c('th', [_vm._v("\n                                        " + _vm._s(_vm.$t('Image')) + "\n                                    ")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('th', {
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
    }, [_c('td', [_vm.pagination && _vm.pagination.current_page > 1 ? _c('span', [_vm._v("\n                                            " + _vm._s(_vm.pagination.per_page * (_vm.pagination.current_page - 1) + (i + 1)) + "\n                                        ")]) : _c('span', [_vm._v(_vm._s(i + 1))])]), _vm._v(" "), _c('td', [data.image ? _c('div', [_c('img', {
      staticClass: "rounded preview-sm",
      attrs: {
        "src": data.image,
        "loading": "lazy"
      }
    })]) : _c('div', {
      staticClass: "bg-secondary rounded no-preview-sm"
    }, [_c('small', [_vm._v(_vm._s(_vm.$t('No Preview')))])])]), _vm._v(" "), _c('td', [data.status === 1 ? _c('span', {
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
  }, [_vm._v(_vm._s(_vm.$t('Software Overview')))]), _vm._v(" "), _c('div', {
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
  })]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
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
  })], 1)])]), _vm._v(" "), _c('div', {
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/software-overview.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const software_overviewvue_type_script_lang_js = ({
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
        software_overview_section_tagline: '',
        software_overview_section_title: '',
        is_show_screenshot_section: false
      }),
      dataForm: new vform_es/* default */.Ay({
        status: 1,
        image: null,
        type: 'software_overview_images'
      }),
      showModal: false,
      query: '',
      perPage: 10,
      url: null,
      typeName: 'type',
      typeValue: 'software_overview_images',
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
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === '') {
        this.getSoftwareOverviewData();
      } else {
        this.searchData();
      }
    }
  },
  methods: {
    // get the data
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios_default().get(window.location.origin + '/api/settings/software-overview-settings');
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.user = data.data;
              _this.form.software_overview_section_tagline = data.data.software_overview_section_tagline || '';
              _this.form.software_overview_section_title = data.data.software_overview_section_title || '';
              _this.form.is_show_screenshot_section = _this.appInfo.is_show_screenshot_section;
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // update the data
    update: function update() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", toast.fire({
                type: 'warning',
                title: _this2.$t('You are not allowed to do this in demo version.')
              }));
            case 2:
              _context2.next = 4;
              return _this2.form.patch(window.location.origin + '/api/settings/software-overview-settings').then(function () {
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
            case 4:
            case "end":
              return _context2.stop();
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
          title: _this3.$t('Please check your input and try again.')
        });
      });
    },
    // update
    updateData: function updateData(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!_this4.isDemoMode) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", toast.fire({
                type: 'warning',
                title: _this4.$t('You are not allowed to do this in demo version.')
              }));
            case 2:
              _this4.dataForm._method = 'PATCH';
              _context3.next = 5;
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
            case 5:
            case "end":
              return _context3.stop();
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var currentPage;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.$store.state.operations.loading = true;
              currentPage = _this5.pagination ? _this5.pagination.current_page : 1;
              _context4.next = 4;
              return _this5.$store.dispatch('operations/fetchDataByType', {
                path: '/api/setting-images?page=',
                currentPage: currentPage + '&perPage=' + _this5.perPage,
                typeName: _this5.typeName,
                typeValue: _this5.typeValue
              });
            case 4:
            case "end":
              return _context4.stop();
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var currentPage;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this6.$store.state.operations.loading = true;
              currentPage = _this6.pagination ? _this6.pagination.current_page : 1;
              _context5.next = 4;
              return _this6.$store.dispatch('operations/searchDataByType', {
                term: _this6.query,
                path: '/api/setting-images/search',
                currentPage: currentPage + '&perPage=' + _this6.perPage,
                typeName: _this6.typeName,
                typeValue: _this6.typeValue
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // Pagination
    paginate: function paginate() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(_this7.query === '')) {
                _context6.next = 5;
                break;
              }
              _context6.next = 3;
              return _this7.getTableData();
            case 3:
              _context6.next = 7;
              break;
            case 5:
              _context6.next = 7;
              return _this7.searchData();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this8.pagination.current_page = 1;
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this9.query = '';
            case 1:
            case "end":
              return _context8.stop();
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
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this10.handleFormSubmit();
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // edit data
    editData: function editData(id) {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!_this11.isDemoMode) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return", toast.fire({
                type: 'warning',
                title: _this11.$t('You are not allowed to do this in demo version.')
              }));
            case 2:
              _this11.formType = 'edit';
              _this11.formUpdateId = id;
              _context10.next = 6;
              return axios_default().get(window.location.origin + '/api/setting-images/' + id);
            case 6:
              _yield$axios$get2 = _context10.sent;
              data = _yield$axios$get2.data;
              _this11.dataForm.fill(data.data);
              _this11.url = data.data.image;
              _this11.showModal = true;
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    // delete data
    deleteData: function deleteData(id) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (!_this12.isDemoMode) {
                _context11.next = 2;
                break;
              }
              return _context11.abrupt("return", toast.fire({
                type: 'warning',
                title: _this12.$t('You are not allowed to do this in demo version.')
              }));
            case 2:
              Swal.fire({
                title: _this12.$t('Are you sure?'),
                text: _this12.$t('You will not be able to return to this!'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: _this12.$t('Delete')
              }).then(function (result) {
                // Send request to the server
                if (result.value) {
                  _this12.$store.dispatch('operations/deleteData', {
                    path: '/api/setting-images/',
                    slug: id
                  }).then(function (response) {
                    if (response === true) {
                      _this12.$toast.success(_this12.$t('Deleted!'), _this12.$t('Deleted successfully.'));
                      _this12.getTableData();
                    } else {
                      _this12.$toast.warning(_this12.$t('Failed!'), _this12.$t('There was something wrong.'));
                    }
                  });
                }
              });
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./resources/js/pages/central/settings/software-overview.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_software_overviewvue_type_script_lang_js = (software_overviewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// CONCATENATED MODULE: ./resources/js/pages/central/settings/software-overview.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  settings_software_overviewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "cc13c768",
  null
  
)

/* harmony default export */ const software_overview = (component.exports);

/***/ })

}]);