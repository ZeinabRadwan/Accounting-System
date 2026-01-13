"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6694],{

/***/ 36694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandler: () => (/* binding */ ErrorHandler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Centralized error handling utility
 * Provides consistent error display across the application
 */
var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }
  return _createClass(ErrorHandler, null, [{
    key: "handleApiError",
    value:
    /**
     * Handle API errors with proper error messages
     * @param {Object} error - The error object from axios
     * @param {Object} options - Additional options for error handling
     * @returns {void}
     */
    function handleApiError(error) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$showValidati = options.showValidationErrors,
        showValidationErrors = _options$showValidati === void 0 ? true : _options$showValidati,
        _options$customMessag = options.customMessage,
        customMessage = _options$customMessag === void 0 ? null : _options$customMessag,
        _options$title = options.title,
        title = _options$title === void 0 ? null : _options$title,
        _options$timer = options.timer,
        timer = _options$timer === void 0 ? 6000 : _options$timer,
        _options$showTimerPro = options.showTimerProgressBar,
        showTimerProgressBar = _options$showTimerPro === void 0 ? true : _options$showTimerPro;

      // Log detailed error information for debugging
      this.logErrorDetails(error, options.context || 'API Error');

      // If custom message is provided, show it
      if (customMessage) {
        this.showError(title || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error'), customMessage, timer, showTimerProgressBar);
        return;
      }

      // Handle different error types
      if (error.response) {
        var _error$response = error.response,
          status = _error$response.status,
          data = _error$response.data;
        switch (status) {
          case 400:
            this.handleBadRequest(data, showValidationErrors);
            break;
          case 401:
            this.handleUnauthorized();
            break;
          case 403:
            this.handleForbidden(data);
            break;
          case 404:
            this.handleNotFound(data);
            break;
          case 409:
            this.handleConflict(data);
            break;
          case 422:
            this.handleValidationErrors(data, showValidationErrors);
            break;
          case 499:
            // Demo version message - handled by interceptors
            break;
          default:
            if (status >= 500) {
              this.handleServerError(data);
            } else {
              this.handleGenericError(data, error.message);
            }
        }
      } else if (error.request) {
        // Network error
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Network Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Unable to connect to server. Please check your internet connection.'), 8000, true);
      } else {
        // Other errors
        this.handleGenericError(null, error.message);
      }
    }

    /**
     * Handle 400 Bad Request errors
     */
  }, {
    key: "handleBadRequest",
    value: function handleBadRequest(data) {
      var showValidationErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Bad Request Error');
      if (showValidationErrors && data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        this.showBackendValidationErrors(data.validation_errors, errorMessage);
      } else {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Bad Request'), errorMessage);
      }
    }

    /**
     * Handle 401 Unauthorized errors
     */
  }, {
    key: "handleUnauthorized",
    value: function handleUnauthorized() {
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Authentication Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('You are not authorized to perform this action. Please log in again.'), 5000);
    }

    /**
     * Handle 403 Forbidden errors
     */
  }, {
    key: "handleForbidden",
    value: function handleForbidden(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("You don't have permission to perform this action.");
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Permission Error'), errorMessage);
    }

    /**
     * Handle 404 Not Found errors
     */
  }, {
    key: "handleNotFound",
    value: function handleNotFound(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('The requested resource was not found. Please check your data and try again.');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Resource Not Found'), errorMessage);
    }

    /**
     * Handle 409 Conflict errors
     */
  }, {
    key: "handleConflict",
    value: function handleConflict(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Data Conflict Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Data Conflict'), errorMessage);
    }

    /**
     * Handle 422 Validation errors
     */
  }, {
    key: "handleValidationErrors",
    value: function handleValidationErrors(data) {
      var showValidationErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!showValidationErrors) return;
      if (data !== null && data !== void 0 && data.errors) {
        // Laravel validation errors
        var validationErrors = data.errors;
        var errorMessages = Object.values(validationErrors).flat();
        if (errorMessages.length > 0) {
          var errorList = errorMessages.map(function (error) {
            return "\u2022 ".concat(error);
          }).join('\n');
          this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), errorList, 8000, true);
        }
      } else if (data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        // Backend validation errors
        this.showBackendValidationErrors(data.validation_errors, data.message);
      } else {
        // Show specific error message if available, otherwise show generic message
        var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please check your input and try again.');
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), errorMessage);
      }
    }

    /**
     * Handle server errors (5xx)
     */
  }, {
    key: "handleServerError",
    value: function handleServerError(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Server Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Server Error'), "".concat(errorMessage, " (").concat(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please try again later or contact support'), ")"), 8000, true);
    }

    /**
     * Handle generic errors
     */
  }, {
    key: "handleGenericError",
    value: function handleGenericError(data, fallbackMessage) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || fallbackMessage || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please check your input and try again.');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error'), errorMessage);
    }

    /**
     * Show backend validation errors
     */
  }, {
    key: "showBackendValidationErrors",
    value: function showBackendValidationErrors(validationErrors, mainMessage) {
      if (!Array.isArray(validationErrors) || validationErrors.length === 0) {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), mainMessage);
        return;
      }
      var errorList = validationErrors.map(function (error) {
        return "\u2022 ".concat(error);
      }).join('\n');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), "".concat(mainMessage, "\n\n").concat(errorList), 10000, true);
    }

    /**
     * Show error using SweetAlert2
     */
  }, {
    key: "showError",
    value: function showError(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6000;
      var showTimerProgressBar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'error',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: showTimerProgressBar
        });
        return;
      }
      // Fallback to console if toast not available
      // eslint-disable-next-line no-console
      console.error(title, message);
    }

    /**
     * Show success message
     */
  }, {
    key: "showSuccess",
    value: function showSuccess(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'success',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Success')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: true
        });
        return;
      }
      // eslint-disable-next-line no-console
      console.log(title, message);
    }

    /**
     * Show warning message
     */
  }, {
    key: "showWarning",
    value: function showWarning(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'warning',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Warning')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: true
        });
        return;
      }
      // eslint-disable-next-line no-console
      console.warn(title, message);
    }

    /**
     * Log detailed error information for debugging
     * @param {Object} error - The error object
     * @param {String} context - Context where the error occurred
     */
  }, {
    key: "logErrorDetails",
    value: function logErrorDetails(error) {
      var _error$response2, _error$response3;
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
      var errorInfo = {
        context: context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        error: {
          message: error.message,
          stack: error.stack,
          name: error.name
        }
      };

      // Add response details if available
      if (error.response) {
        var _error$response$confi, _error$response$confi2, _error$response$confi3, _error$response$confi4;
        errorInfo.response = {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
          headers: error.response.headers,
          config: {
            url: (_error$response$confi = error.response.config) === null || _error$response$confi === void 0 ? void 0 : _error$response$confi.url,
            method: (_error$response$confi2 = error.response.config) === null || _error$response$confi2 === void 0 ? void 0 : _error$response$confi2.method,
            params: (_error$response$confi3 = error.response.config) === null || _error$response$confi3 === void 0 ? void 0 : _error$response$confi3.params,
            data: (_error$response$confi4 = error.response.config) === null || _error$response$confi4 === void 0 ? void 0 : _error$response$confi4.data
          }
        };
      }

      // Add request details if available
      if (error.request) {
        errorInfo.request = {
          readyState: error.request.readyState,
          status: error.request.status,
          responseText: error.request.responseText
        };
      }

      // Log to console with detailed information
      console.group("\uD83D\uDEA8 Error in ".concat(context));
      console.error('Full Error Object:', error);
      console.error('Error Details:', errorInfo);
      if ((_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.message) {
        console.error('Backend Error Message:', error.response.data.message);
      }
      if ((_error$response3 = error.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.errors) {
        console.error('Backend Validation Errors:', error.response.data.errors);
      }
      console.groupEnd();

      // Send to backend logging endpoint if available
      this.sendErrorToBackend(errorInfo);
    }

    /**
     * Send error details to backend for logging
     * @param {Object} errorInfo - Error information to log
     */
  }, {
    key: "sendErrorToBackend",
    value: (function () {
      var _sendErrorToBackend = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(errorInfo) {
        var _window$auth, _window$auth2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(window.axios && "production" === 'production')) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return window.axios.post('/api/log-frontend-error', _objectSpread(_objectSpread({}, errorInfo), {}, {
                user_id: ((_window$auth = window.auth) === null || _window$auth === void 0 || (_window$auth = _window$auth.user) === null || _window$auth === void 0 ? void 0 : _window$auth.id) || null,
                tenant_id: ((_window$auth2 = window.auth) === null || _window$auth2 === void 0 || (_window$auth2 = _window$auth2.tenant) === null || _window$auth2 === void 0 ? void 0 : _window$auth2.id) || null
              }));
            case 4:
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to send error to backend:', _context.t0);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }));
      function sendErrorToBackend(_x) {
        return _sendErrorToBackend.apply(this, arguments);
      }
      return sendErrorToBackend;
    }())
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);

/***/ })

}]);