"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6694],{

/***/ 36694
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandler: () => (/* binding */ ErrorHandler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
      var _sendErrorToBackend = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(errorInfo) {
        var _window$auth, _window$auth2, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              if (!(window.axios && "production" === 'production')) {
                _context.n = 1;
                break;
              }
              _context.n = 1;
              return window.axios.post('/api/log-frontend-error', _objectSpread(_objectSpread({}, errorInfo), {}, {
                user_id: ((_window$auth = window.auth) === null || _window$auth === void 0 || (_window$auth = _window$auth.user) === null || _window$auth === void 0 ? void 0 : _window$auth.id) || null,
                tenant_id: ((_window$auth2 = window.auth) === null || _window$auth2 === void 0 || (_window$auth2 = _window$auth2.tenant) === null || _window$auth2 === void 0 ? void 0 : _window$auth2.id) || null
              }));
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.warn('Failed to send error to backend:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function sendErrorToBackend(_x) {
        return _sendErrorToBackend.apply(this, arguments);
      }
      return sendErrorToBackend;
    }())
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);

/***/ }

}]);