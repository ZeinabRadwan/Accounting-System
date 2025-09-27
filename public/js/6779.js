(self["webpackChunk"] = self["webpackChunk"] || []).push([[6779],{

/***/ 23:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(33551);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(16320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ 470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var JsBarcode = __webpack_require__(86129);

var VueBarcode = {
   render: function (createElement) {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vue-barcode-element']
      }),
      createElement('div', {
        style: { display: this.valid ? 'none' : undefined }
      }, this.$slots.default),
    ]);
  },
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type:  [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
          return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  var that = this;

  var settings = {
    format: this.format,
    width: this.width,
    height: this.height,
    displayValue: this.displayValue,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    flat: this.flat,
    ean128: this.ean128,
    valid: function (valid) {
      that.valid = valid;
    },
    elementTag: this.elementTag
  };

  removeUndefinedProps(settings);

  JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
}

function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

module.exports = VueBarcode;


/***/ }),

/***/ 892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _optionsFromStrings = __webpack_require__(69796);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(55099);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ 1886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ 3781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(16350);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(17960);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ 4205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ 5070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(50739);

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(8122);

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ 5798:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(53651);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(62700);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ 7570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(96575);

var _encoder = __webpack_require__(16350);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ 8122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(50739);

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ 11687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(91490);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(26258);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ 13528:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ 16320:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),

/***/ 16350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(96575);

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ 17960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(16350);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ 18179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(892);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(82727);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(28157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ 18784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(74754);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ 21133:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "1011011011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ 24845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE2 = __webpack_require__(53651);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(74802);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ 26258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(91490);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var measureTextResult = ctx.measureText(string);
	if (!measureTextResult) {
		// Some implementations don't implement measureText and return undefined.
		// If the text cannot be measured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	var size = measureTextResult.width;
	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ 27052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(33551);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(16320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ 28157:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ 31271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(51087);

var _CODE3 = _interopRequireDefault(_CODE2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93

var CODE93FullASCII = function (_CODE) {
	_inherits(CODE93FullASCII, _CODE);

	function CODE93FullASCII(data, options) {
		_classCallCheck(this, CODE93FullASCII);

		return _possibleConstructorReturn(this, (CODE93FullASCII.__proto__ || Object.getPrototypeOf(CODE93FullASCII)).call(this, data, options));
	}

	_createClass(CODE93FullASCII, [{
		key: 'valid',
		value: function valid() {
			return (/^[\x00-\x7f]+$/.test(this.data)
			);
		}
	}]);

	return CODE93FullASCII;
}(_CODE3.default);

exports["default"] = CODE93FullASCII;

/***/ }),

/***/ 33551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports["default"] = MSI;

/***/ }),

/***/ 35965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(91490);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(26258);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ 36694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ErrorHandler */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78465);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

      // If custom message is provided, show it
      if (customMessage) {
        this.showError(title || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), customMessage, timer, showTimerProgressBar);
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
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Network Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Unable to connect to server. Please check your internet connection.'), 8000, true);
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
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Bad Request Error');
      if (showValidationErrors && data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        this.showBackendValidationErrors(data.validation_errors, errorMessage);
      } else {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Bad Request'), errorMessage);
      }
    }

    /**
     * Handle 401 Unauthorized errors
     */
  }, {
    key: "handleUnauthorized",
    value: function handleUnauthorized() {
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Authentication Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('You are not authorized to perform this action. Please log in again.'), 5000);
    }

    /**
     * Handle 403 Forbidden errors
     */
  }, {
    key: "handleForbidden",
    value: function handleForbidden(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("You don't have permission to perform this action.");
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Permission Error'), errorMessage);
    }

    /**
     * Handle 404 Not Found errors
     */
  }, {
    key: "handleNotFound",
    value: function handleNotFound(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('The requested resource was not found. Please check your data and try again.');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Resource Not Found'), errorMessage);
    }

    /**
     * Handle 409 Conflict errors
     */
  }, {
    key: "handleConflict",
    value: function handleConflict(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Data Conflict Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Data Conflict'), errorMessage);
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
          this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Validation Error'), errorList, 8000, true);
        }
      } else if (data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        // Backend validation errors
        this.showBackendValidationErrors(data.validation_errors, data.message);
      } else {
        var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Data Processing Error');
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Data Error'), errorMessage);
      }
    }

    /**
     * Handle server errors (5xx)
     */
  }, {
    key: "handleServerError",
    value: function handleServerError(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Server Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Server Error'), "".concat(errorMessage, " (").concat(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Please try again later or contact support'), ")"), 8000, true);
    }

    /**
     * Handle generic errors
     */
  }, {
    key: "handleGenericError",
    value: function handleGenericError(data, fallbackMessage) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || fallbackMessage || _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('An unexpected error occurred');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), errorMessage);
    }

    /**
     * Show backend validation errors
     */
  }, {
    key: "showBackendValidationErrors",
    value: function showBackendValidationErrors(validationErrors, mainMessage) {
      if (!Array.isArray(validationErrors) || validationErrors.length === 0) {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Validation Error'), mainMessage);
        return;
      }
      var errorList = validationErrors.map(function (error) {
        return "\u2022 ".concat(error);
      }).join('\n');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Validation Error'), "".concat(mainMessage, "\n\n").concat(errorList), 10000, true);
    }

    /**
     * Show error using SweetAlert2
     */
  }, {
    key: "showError",
    value: function showError(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6000;
      var showTimerProgressBar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        type: 'error',
        title: title,
        text: message,
        timer: timer,
        timerProgressBar: showTimerProgressBar,
        reverseButtons: true,
        confirmButtonText: _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('ok'),
        cancelButtonText: _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('cancel')
      });
    }

    /**
     * Show success message
     */
  }, {
    key: "showSuccess",
    value: function showSuccess(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        type: 'success',
        title: title,
        text: message,
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }

    /**
     * Show warning message
     */
  }, {
    key: "showWarning",
    value: function showWarning(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        type: 'warning',
        title: title,
        text: message,
        timer: timer,
        timerProgressBar: true,
        reverseButtons: true,
        confirmButtonText: _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('ok'),
        cancelButtonText: _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('cancel')
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);

/***/ }),

/***/ 38075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(96575);

var _encoder = __webpack_require__(16350);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ 42889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ 43804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(53651);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(62700);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ 44250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(96575);

var _EAN2 = __webpack_require__(74754);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ 48248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(33551);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(76338);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(96065);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(23);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(27052);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ 50739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(71135);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ 51087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(76929);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_93#Detailed_outline

var CODE93 = function (_Barcode) {
	_inherits(CODE93, _Barcode);

	function CODE93(data, options) {
		_classCallCheck(this, CODE93);

		return _possibleConstructorReturn(this, (CODE93.__proto__ || Object.getPrototypeOf(CODE93)).call(this, data, options));
	}

	_createClass(CODE93, [{
		key: 'valid',
		value: function valid() {
			return (/^[0-9A-Z\-. $/+%]+$/.test(this.data)
			);
		}
	}, {
		key: 'encode',
		value: function encode() {
			var symbols = this.data.split('').flatMap(function (c) {
				return _constants.MULTI_SYMBOLS[c] || c;
			});
			var encoded = symbols.map(function (s) {
				return CODE93.getEncoding(s);
			}).join('');

			// Compute checksum symbols
			var csumC = CODE93.checksum(symbols, 20);
			var csumK = CODE93.checksum(symbols.concat(csumC), 15);

			return {
				text: this.text,
				data:
				// Add the start bits
				CODE93.getEncoding('\xff') +
				// Add the encoded bits
				encoded +
				// Add the checksum
				CODE93.getEncoding(csumC) + CODE93.getEncoding(csumK) +
				// Add the stop bits
				CODE93.getEncoding('\xff') +
				// Add the termination bit
				'1'
			};
		}

		// Get the binary encoding of a symbol

	}], [{
		key: 'getEncoding',
		value: function getEncoding(symbol) {
			return _constants.BINARIES[CODE93.symbolValue(symbol)];
		}

		// Get the symbol for a symbol value

	}, {
		key: 'getSymbol',
		value: function getSymbol(symbolValue) {
			return _constants.SYMBOLS[symbolValue];
		}

		// Get the symbol value of a symbol

	}, {
		key: 'symbolValue',
		value: function symbolValue(symbol) {
			return _constants.SYMBOLS.indexOf(symbol);
		}

		// Calculate a checksum symbol

	}, {
		key: 'checksum',
		value: function checksum(symbols, maxWeight) {
			var csum = symbols.slice().reverse().reduce(function (sum, symbol, idx) {
				var weight = idx % maxWeight + 1;
				return sum + CODE93.symbolValue(symbol) * weight;
			}, 0);

			return CODE93.getSymbol(csum % 47);
		}
	}]);

	return CODE93;
}(_Barcode3.default);

exports["default"] = CODE93;

/***/ }),

/***/ 53651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(62700);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ 55099:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports["default"] = defaults;

/***/ }),

/***/ 55726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(44250);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(18784);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(38075);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(7570);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(17960);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(3781);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ 59368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE = __webpack_require__(61428);

var _CODE2 = __webpack_require__(71509);

var _EAN_UPC = __webpack_require__(55726);

var _ITF = __webpack_require__(5070);

var _MSI = __webpack_require__(48248);

var _pharmacode = __webpack_require__(42889);

var _codabar = __webpack_require__(21133);

var _CODE3 = __webpack_require__(89852);

var _GenericBarcode = __webpack_require__(1886);

exports["default"] = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	CODE93: _CODE3.CODE93, CODE93FullASCII: _CODE3.CODE93FullASCII,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ 61428:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ 62700:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ 69796:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),

/***/ 71135:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ 71509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(24845);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(43804);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(73541);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(5798);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ 71898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=6da9e7d4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showClientCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientCreateModal,
      callback: function callback($$v) {
        _vm.showClientCreateModal = $$v;
      },
      expression: "showClientCreateModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false
    },
    on: {
      "submit": _vm.saveClient
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(79935);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const ClientCreateModalvue_type_script_lang_js = ({
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      showClientCreateModal: false,
      form: null,
      isSubmitting: false
    };
  },
  methods: {
    // save client
    saveClient: function saveClient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
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
              // Get the form from the ClientForm component
              _this.form = _this.$refs.clientForm.getFormData();

              // Validate the form
              if (_this.$refs.clientForm.validateForm()) {
                _context.n = 3;
                break;
              }
              _this.isSubmitting = false;
              return _context.a(2);
            case 3:
              _context.n = 4;
              return _this.form.post(window.location.origin + "/api/clients").then(function () {
                toast.fire({
                  type: "success",
                  title: _this.$t("Client added successfully")
                });
                _this.$emit("reloadClients");
                _this.$refs.clientForm.resetForm();
                _this.showClientCreateModal = false;
                _this.form = null; // Reset form reference
              })["catch"](function (error) {
                var _error$response;
                console.error("Error creating client:", error);
                var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t("Opps...something went wrong");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              });
            case 4:
              _context.p = 4;
              _this.isSubmitting = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2,, 4, 5]]);
      }))();
    },
    toggleModal: function toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    }
  }
});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientCreateModalvue_type_script_lang_js = (ClientCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6da9e7d4&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_6da9e7d4_prod_scoped_true_lang_css = __webpack_require__(86034);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6da9e7d4&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_6da9e7d4_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_6da9e7d4_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_6da9e7d4_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6da9e7d4&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ClientCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6da9e7d4",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ }),

/***/ 72444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ 73541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(53651);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(62700);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ 73623:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),

/***/ 74754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(96575);

var _encoder = __webpack_require__(16350);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(72444);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ 74802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(62700);

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports["default"] = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),

/***/ 76010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-1dba940c]{background:#fff;border:1px solid #e3e6f0;border-radius:.6rem;box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.1);margin-bottom:1.25rem;transition:all .2s ease}.form-card[data-v-1dba940c]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-1dba940c]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:none;border-radius:.6rem .6rem 0 0;color:#fff;padding:.875rem 1.25rem}.form-card .card-header .section-title[data-v-1dba940c]{border:none;color:#fff;font-size:1.1rem;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-1dba940c]:after{display:none}.form-card .card-header .section-title i[data-v-1dba940c]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-1dba940c]{padding:1.25rem}.section-title[data-v-1dba940c]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-1dba940c]{margin-bottom:1rem}.form-group label[data-v-1dba940c]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-1dba940c]{color:#dc3545;font-weight:700}.row[data-v-1dba940c]{margin-bottom:1rem}.row[data-v-1dba940c]:last-child{margin-bottom:0}.auto-assign-btn[data-v-1dba940c]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-1dba940c]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-1dba940c]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-1dba940c]{text-align:center}.image-preview img[data-v-1dba940c]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-1dba940c]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-1dba940c]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-1dba940c]{color:#6c757d}.create-button[data-v-1dba940c]{cursor:pointer;text-decoration:none}@media (max-width:768px){.section-title[data-v-1dba940c]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-1dba940c]{padding:.75rem}.auto-assign-btn[data-v-1dba940c]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-1dba940c]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-1dba940c]{margin-bottom:0}.is-invalid[data-v-1dba940c]{border-color:#dc3545!important}.invalid-feedback[data-v-1dba940c]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-1dba940c]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-1dba940c]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-1dba940c]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-1dba940c]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-1dba940c]{border-color:#667eea;box-shadow:0 2px 6px rgba(102,126,234,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-1dba940c]{background:linear-gradient(135deg,#667eea,#764ba2);border-color:#667eea;box-shadow:0 3px 10px rgba(102,126,234,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-1dba940c]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-1dba940c]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-1dba940c]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-1dba940c]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-1dba940c]{flex-direction:column;gap:.5rem}.option-content[data-v-1dba940c]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-1dba940c]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-1dba940c]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(33551);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(16320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ 76929:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// The position in the array is the (checksum) value
var SYMBOLS = exports.SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%',
// Only used for csum and multi-symbols character encodings
'($)', '(%)', '(/)', '(+)',
// Start/Stop
'\xff'];

// Order matches SYMBOLS array
var BINARIES = exports.BINARIES = ['100010100', '101001000', '101000100', '101000010', '100101000', '100100100', '100100010', '101010000', '100010010', '100001010', '110101000', '110100100', '110100010', '110010100', '110010010', '110001010', '101101000', '101100100', '101100010', '100110100', '100011010', '101011000', '101001100', '101000110', '100101100', '100010110', '110110100', '110110010', '110101100', '110100110', '110010110', '110011010', '101101100', '101100110', '100110110', '100111010', '100101110', '111010100', '111010010', '111001010', '101101110', '101110110', '110101110', '100100110', '111011010', '111010110', '100110010', '101011110'];

// Multi-symbol characters (Full ASCII Code 93)
var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
	'\x00': ['(%)', 'U'],
	'\x01': ['($)', 'A'],
	'\x02': ['($)', 'B'],
	'\x03': ['($)', 'C'],
	'\x04': ['($)', 'D'],
	'\x05': ['($)', 'E'],
	'\x06': ['($)', 'F'],
	'\x07': ['($)', 'G'],
	'\x08': ['($)', 'H'],
	'\x09': ['($)', 'I'],
	'\x0a': ['($)', 'J'],
	'\x0b': ['($)', 'K'],
	'\x0c': ['($)', 'L'],
	'\x0d': ['($)', 'M'],
	'\x0e': ['($)', 'N'],
	'\x0f': ['($)', 'O'],
	'\x10': ['($)', 'P'],
	'\x11': ['($)', 'Q'],
	'\x12': ['($)', 'R'],
	'\x13': ['($)', 'S'],
	'\x14': ['($)', 'T'],
	'\x15': ['($)', 'U'],
	'\x16': ['($)', 'V'],
	'\x17': ['($)', 'W'],
	'\x18': ['($)', 'X'],
	'\x19': ['($)', 'Y'],
	'\x1a': ['($)', 'Z'],
	'\x1b': ['(%)', 'A'],
	'\x1c': ['(%)', 'B'],
	'\x1d': ['(%)', 'C'],
	'\x1e': ['(%)', 'D'],
	'\x1f': ['(%)', 'E'],
	'!': ['(/)', 'A'],
	'"': ['(/)', 'B'],
	'#': ['(/)', 'C'],
	'&': ['(/)', 'F'],
	'\'': ['(/)', 'G'],
	'(': ['(/)', 'H'],
	')': ['(/)', 'I'],
	'*': ['(/)', 'J'],
	',': ['(/)', 'L'],
	':': ['(/)', 'Z'],
	';': ['(%)', 'F'],
	'<': ['(%)', 'G'],
	'=': ['(%)', 'H'],
	'>': ['(%)', 'I'],
	'?': ['(%)', 'J'],
	'@': ['(%)', 'V'],
	'[': ['(%)', 'K'],
	'\\': ['(%)', 'L'],
	']': ['(%)', 'M'],
	'^': ['(%)', 'N'],
	'_': ['(%)', 'O'],
	'`': ['(%)', 'W'],
	'a': ['(+)', 'A'],
	'b': ['(+)', 'B'],
	'c': ['(+)', 'C'],
	'd': ['(+)', 'D'],
	'e': ['(+)', 'E'],
	'f': ['(+)', 'F'],
	'g': ['(+)', 'G'],
	'h': ['(+)', 'H'],
	'i': ['(+)', 'I'],
	'j': ['(+)', 'J'],
	'k': ['(+)', 'K'],
	'l': ['(+)', 'L'],
	'm': ['(+)', 'M'],
	'n': ['(+)', 'N'],
	'o': ['(+)', 'O'],
	'p': ['(+)', 'P'],
	'q': ['(+)', 'Q'],
	'r': ['(+)', 'R'],
	's': ['(+)', 'S'],
	't': ['(+)', 'T'],
	'u': ['(+)', 'U'],
	'v': ['(+)', 'V'],
	'w': ['(+)', 'W'],
	'x': ['(+)', 'X'],
	'y': ['(+)', 'Y'],
	'z': ['(+)', 'Z'],
	'{': ['(%)', 'P'],
	'|': ['(%)', 'Q'],
	'}': ['(%)', 'R'],
	'~': ['(%)', 'S'],
	'\x7f': ['(%)', 'T']
};

/***/ }),

/***/ 82727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(11687);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(35965);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(13528);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),

/***/ 83830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=1dba940c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showProductCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductCreateModal,
      callback: function callback($$v) {
        _vm.showProductCreateModal = $$v;
      },
      expression: "showProductCreateModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cube mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "item-type-selector"
  }, [_c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'product'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "product",
      "name": "itemType",
      "value": "product",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "product")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "product");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cube"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Product")))])])]), _vm._v(" "), _c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'service'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "service",
      "name": "itemType",
      "value": "service",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "service")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "service");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cogs"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Service")))])])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemName,
      expression: "form.itemName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemName')
    },
    attrs: {
      "id": "itemName",
      "type": "text",
      "name": "itemName",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.itemName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Code")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemCode,
      expression: "form.itemCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemCode')
    },
    attrs: {
      "type": "text",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code')
    },
    domProps: {
      "value": _vm.form.itemCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemCode", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "name": "itemUnit",
      "placeholder": _vm.$t('Select a unit')
    },
    model: {
      value: _vm.form.itemUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "itemUnit", $$v);
      },
      expression: "form.itemUnit"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Rate")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "productTax",
      "placeholder": _vm.$t('Select a tax')
    },
    on: {
      "input": _vm.calculatePrice
    },
    model: {
      value: _vm.form.productTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "productTax", $$v);
      },
      expression: "form.productTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productTax"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Model")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemModel,
      expression: "form.itemModel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemModel')
    },
    attrs: {
      "id": "itemModel",
      "type": "text",
      "name": "itemModel",
      "placeholder": _vm.$t('Enter a model')
    },
    domProps: {
      "value": _vm.form.itemModel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemModel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemModel"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "brand"
    }
  }, [_vm._v(_vm._s(_vm.$t("Brand")))]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('brand')
    },
    attrs: {
      "options": _vm.brands,
      "label": "name",
      "name": "brand",
      "placeholder": _vm.$t('Select a brand')
    },
    model: {
      value: _vm.form.brand,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "brand", $$v);
      },
      expression: "form.brand"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "brand"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.regularPrice,
      expression: "form.regularPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('regularPrice')
    },
    attrs: {
      "id": "regularPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "regularPrice",
      "placeholder": _vm.$t('Enter price')
    },
    domProps: {
      "value": _vm.form.regularPrice
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount (%)")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "type": "number",
      "min": "0",
      "max": "100",
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Final Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sellingPrice,
      expression: "form.sellingPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sellingPrice')
    },
    attrs: {
      "id": "sellingPrice",
      "type": "number",
      "readonly": "",
      "name": "sellingPrice",
      "placeholder": _vm.$t('Calculated automatically')
    },
    domProps: {
      "value": _vm.form.sellingPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sellingPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sellingPrice"
    }
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'product' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-warehouse mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Stock Information")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockCount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockCount,
      expression: "form.openingStockCount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount')
    },
    attrs: {
      "id": "openingStockCount",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockCount",
      "placeholder": _vm.$t('Enter opening stock')
    },
    domProps: {
      "value": _vm.form.openingStockCount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockCount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockCount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Stock Unit Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockUnitPrice,
      expression: "form.openingStockUnitPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockUnitPrice')
    },
    attrs: {
      "id": "openingStockUnitPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockUnitPrice",
      "placeholder": _vm.$t('Enter unit price')
    },
    domProps: {
      "value": _vm.form.openingStockUnitPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.form.itemType === 'service' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-dollar-sign mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Service Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicePurchasePrice,
      expression: "form.servicePurchasePrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('servicePurchasePrice')
    },
    attrs: {
      "id": "servicePurchasePrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "servicePurchasePrice",
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.servicePurchasePrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "servicePurchasePrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "servicePurchasePrice"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [!_vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
    },
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success btn-sm auto-assign-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningSales,
      "title": _vm.$t('Auto-assign')
    },
    on: {
      "click": _vm.autoAssignSalesAccount
    }
  }, [_vm.isAutoAssigningSales ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-magic"
  })])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Sales Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                  ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [!_vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info btn-sm auto-assign-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningPurchase,
      "title": _vm.$t('Auto-assign')
    },
    on: {
      "click": _vm.autoAssignPurchaseAccount
    }
  }, [_vm.isAutoAssigningPurchase ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-magic"
  })])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Purchase Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                  ")])]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
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
      "rows": "3",
      "name": "note",
      "placeholder": _vm.$t('Add any additional notes...')
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Image")))]), _vm._v(" "), _c('div', {
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
  }, [_c('i', {
    staticClass: "fas fa-upload"
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "80px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Product Image')
    }
  })]) : _vm._e()], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
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



/* harmony default export */ const ProductCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Product")
    };
  },
  data: function data() {
    return {
      showProductCreateModal: false,
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: ""
      }),
      categories: [],
      options: [],
      units: [],
      brands: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      url: null,
      isAutoAssigningSales: false,
      isAutoAssigningPurchase: false,
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  created: function created() {
    this.getSubCategories();
    this.getUnits();
    this.getBrands();
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal;

      // When opening the modal, ensure account routing settings are loaded
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.chartOfAccounts = data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error loading chart of accounts:", _t);
              _this.chartOfAccounts = [];
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2$accountRouting, _this2$accountRouting2, _this2$accountRouting3, _this2$accountRouting4, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context2.v;
              _this2.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this2.isSalesAccountAutomatic = _this2.accountRoutingSettings.sales && _this2.accountRoutingSettings.sales.routing_type === 'automatic';
              _this2.isPurchaseAccountAutomatic = _this2.accountRoutingSettings.purchase && _this2.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this2.isSalesAccountAutomatic && _this2.accountRoutingSettings.sales.main_account_id) {
                _this2.form.salesAccountId = _this2.accountRoutingSettings.sales.main_account_id;
              }
              if (_this2.isPurchaseAccountAutomatic && _this2.accountRoutingSettings.purchase.main_account_id) {
                _this2.form.purchaseAccountId = _this2.accountRoutingSettings.purchase.main_account_id;
              }
              console.log('=== ACCOUNT ROUTING DEBUG ===');
              console.log('Full account routing settings:', _this2.accountRoutingSettings);
              console.log('Sales settings:', _this2.accountRoutingSettings.sales);
              console.log('Purchase settings:', _this2.accountRoutingSettings.purchase);
              console.log('Sales routing type:', (_this2$accountRouting = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting === void 0 ? void 0 : _this2$accountRouting.routing_type);
              console.log('Sales main_account_id:', (_this2$accountRouting2 = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting2 === void 0 ? void 0 : _this2$accountRouting2.main_account_id);
              console.log('Purchase routing type:', (_this2$accountRouting3 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting3 === void 0 ? void 0 : _this2$accountRouting3.routing_type);
              console.log('Purchase main_account_id:', (_this2$accountRouting4 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting4 === void 0 ? void 0 : _this2$accountRouting4.main_account_id);
              console.log('isSalesAccountAutomatic:', _this2.isSalesAccountAutomatic);
              console.log('isPurchaseAccountAutomatic:', _this2.isPurchaseAccountAutomatic);
              console.log('Form salesAccountId after auto-assignment:', _this2.form.salesAccountId);
              console.log('Form purchaseAccountId after auto-assignment:', _this2.form.purchaseAccountId);
              console.log('==============================');
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("Error loading account routing settings:", _t2);
              // Set defaults if API fails
              _this2.isSalesAccountAutomatic = false;
              _this2.isPurchaseAccountAutomatic = false;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this3$form$ge, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this3.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this3$form$ge = _context3.v;
              data = _yield$_this3$form$ge.data;
              _this3.categories = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this4.brands = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this5.units = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, defaultVatRateSlug;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              _this6.taxes = data.data;
              // assign default vat rate
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = _this6.appInfo.defaultVatRateSlug;
                _this6.form.productTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this6.calculatePrice();
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get5, data;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              _this7.form.itemCode = data.code;
              _this7.prefix = data.prefix;
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this8 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this8.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        Swal.fire(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"), "error");
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this9$accountRouting, _this9$accountRouting2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(_this9.form.itemType === 'service' && !_this9.form.servicePurchasePrice)) {
                _context8.n = 1;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Service Purchase Price is required for services")
              });
              return _context8.a(2);
            case 1:
              // Debug: Log validation state
              console.log("Validation state:", {
                isSalesAccountAutomatic: _this9.isSalesAccountAutomatic,
                salesAccountId: _this9.form.salesAccountId,
                isPurchaseAccountAutomatic: _this9.isPurchaseAccountAutomatic,
                purchaseAccountId: _this9.form.purchaseAccountId
              });

              // Validate sales account if not automatic
              if (!(!_this9.isSalesAccountAutomatic && !_this9.form.salesAccountId)) {
                _context8.n = 2;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Sales Account is required")
              });
              return _context8.a(2);
            case 2:
              if (!(!_this9.isPurchaseAccountAutomatic && !_this9.form.purchaseAccountId)) {
                _context8.n = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Purchase Account is required")
              });
              return _context8.a(2);
            case 3:
              // Debug: Log form data being sent
              console.log("=== FORM SUBMISSION DEBUG ===");
              console.log("Form data being sent:", _this9.form.data());
              console.log("Account routing settings:", _this9.accountRoutingSettings);
              console.log("Sales settings:", _this9.accountRoutingSettings.sales);
              console.log("Purchase settings:", _this9.accountRoutingSettings.purchase);
              console.log("Sales routing type:", (_this9$accountRouting = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting === void 0 ? void 0 : _this9$accountRouting.routing_type);
              console.log("Sales main_account_id:", (_this9$accountRouting2 = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting2 === void 0 ? void 0 : _this9$accountRouting2.main_account_id);
              console.log("Form salesAccountId:", _this9.form.salesAccountId);
              console.log("Form purchaseAccountId:", _this9.form.purchaseAccountId);
              console.log("=============================");
              _context8.n = 4;
              return _this9.form.post(window.location.origin + "/api/products").then(function () {
                toast.fire({
                  type: "success",
                  title: _this9.$t("Product added successfully")
                });

                // Store auto-assigned account IDs before reset
                var autoAssignedSalesAccountId = _this9.isSalesAccountAutomatic ? _this9.form.salesAccountId : null;
                var autoAssignedPurchaseAccountId = _this9.isPurchaseAccountAutomatic ? _this9.form.purchaseAccountId : null;
                _this9.form.reset();
                _this9.form.itemType = "product"; // Reset to default

                // Restore auto-assigned account IDs after reset
                if (autoAssignedSalesAccountId) {
                  _this9.form.salesAccountId = autoAssignedSalesAccountId;
                }
                if (autoAssignedPurchaseAccountId) {
                  _this9.form.purchaseAccountId = autoAssignedPurchaseAccountId;
                }
                _this9.showProductCreateModal = false;
                _this9.$emit('reloadProducts');
              })["catch"](function (error) {
                var _error$response;
                console.error("Error creating product:", error);
                var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this9.$t("Opps...something went wrong");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              });
            case 4:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // Auto-assign sales account
    autoAssignSalesAccount: function autoAssignSalesAccount() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var defaultAccount;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              if (!_this0.isAutoAssigningSales) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _this0.isAutoAssigningSales = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this0.form.itemType === 'product') {
                  // Look for "Sales of Goods" or similar
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this0.form.itemType === 'service') {
                  // Look for "Sales of Services" or similar
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Sales account
                if (!defaultAccount) {
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this0.chartOfAccounts.length > 0) {
                  defaultAccount = _this0.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this0.form.salesAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this0.$t("Sales Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this0.$t("No suitable Sales Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning sales account:", error);
                toast.fire({
                  type: "error",
                  title: _this0.$t("Failed to auto-assign Sales Account")
                });
              } finally {
                _this0.isAutoAssigningSales = false;
              }
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // Auto-assign purchase account
    autoAssignPurchaseAccount: function autoAssignPurchaseAccount() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var defaultAccount;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!_this1.isAutoAssigningPurchase) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              _this1.isAutoAssigningPurchase = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this1.form.itemType === 'product') {
                  // Look for "Cost of Goods Sold" or similar
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this1.form.itemType === 'service') {
                  // Look for "Cost of Services" or similar
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Cost account
                if (!defaultAccount) {
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this1.chartOfAccounts.length > 0) {
                  defaultAccount = _this1.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this1.form.purchaseAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this1.$t("Purchase Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this1.$t("No suitable Purchase Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning purchase account:", error);
                toast.fire({
                  type: "error",
                  title: _this1.$t("Failed to auto-assign Purchase Account")
                });
              } finally {
                _this1.isAutoAssigningPurchase = false;
              }
            case 2:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    }
  }
});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductCreateModalvue_type_script_lang_js = (ProductCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=1dba940c&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_1dba940c_prod_scoped_true_lang_css = __webpack_require__(76010);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=1dba940c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_1dba940c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_1dba940c_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_1dba940c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=1dba940c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ProductCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1dba940c",
  null
  
)

/* harmony default export */ const ProductCreateModal = (component.exports);

/***/ }),

/***/ 86034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-6da9e7d4]{cursor:pointer;text-decoration:none}.modal-content[data-v-6da9e7d4]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _barcodes = __webpack_require__(59368);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(91490);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(98165);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(73623);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(18179);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(69796);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(4205);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(28157);

var _defaults = __webpack_require__(55099);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),

/***/ 89852:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE93FullASCII = exports.CODE93 = undefined;

var _CODE = __webpack_require__(51087);

var _CODE2 = _interopRequireDefault(_CODE);

var _CODE93FullASCII = __webpack_require__(31271);

var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE93 = _CODE2.default;
exports.CODE93FullASCII = _CODE93FullASCII2.default;

/***/ }),

/***/ 90800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-price-counter-nowrap[data-v-5efb0cdc]{display:flex;flex-wrap:nowrap}.table-product-title[data-v-5efb0cdc]{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pos-r-head[data-v-5efb0cdc]{border-bottom:1px solid #f3f3f3;border-radius:5px;box-shadow:0 0 3px #0003;box-sizing:border-box;padding:20px}.pos-logo[data-v-5efb0cdc]{text-align:center}.pos-item-grid[data-v-5efb0cdc]{grid-gap:10px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr}.pos-item-grid>div[data-v-5efb0cdc]{border:1px solid #fff;border-radius:10px;box-shadow:0 4px 20px 1px rgba(0,0,0,.06),0 1px 4px rgba(0,0,0,.08);cursor:pointer;overflow:hidden;position:relative}.pos-item-grid>div[data-v-5efb0cdc]:hover{border-color:#1b3c71}.pos-item-grid>div .box-qty[data-v-5efb0cdc]{background:#1b3c71;border-bottom-right-radius:10px;color:#fff;display:block;font-size:12px;font-weight:700;height:30px;left:0;line-height:30px;position:absolute;text-align:center;top:0;width:50px}.qty-red[data-v-5efb0cdc]{background:red!important}.pos-body[data-v-5efb0cdc]{border-radius:5px;min-height:240px}.pos-box-img[data-v-5efb0cdc]{background:#ebebeb;border-bottom:1px solid #f1f1f1;font-size:13px;font-weight:700;height:100px;line-height:100px;text-align:center;width:100%}.pos-box-img img[data-v-5efb0cdc]{height:100px;-o-object-fit:cover;object-fit:cover;width:100%}.pos-box-content p[data-v-5efb0cdc]{font-size:14px;font-weight:700;margin-bottom:0}.pos-box-content span[data-v-5efb0cdc]{font-size:12px;margin-bottom:2px}.pos-box-content[data-v-5efb0cdc]{padding:5px 10px}.pos-item-grid-red[data-v-5efb0cdc]{border-color:red!important}.card-client-search[data-v-5efb0cdc]{border-bottom:1px solid #ddd;padding:20px}.table-wrap[data-v-5efb0cdc]{padding:15px}.table-responsive.table-wrap>table[data-v-5efb0cdc]{border:1px solid #ddd}.table-wrap .table thead tr[data-v-5efb0cdc]{background:#1b3c711f!important;border-bottom:0}.table-wrap .incrementor[data-v-5efb0cdc]{width:80px}.table-wrap .custom-qty-input[data-v-5efb0cdc]{border:1px solid #ececfdb8;border-radius:18px;display:inline-flex!important;justify-content:center;padding:0}.table-wrap .btn-danger[data-v-5efb0cdc]{font-size:10px;height:25px;padding:0;width:25px}.table-wrap .icon-sm[data-v-5efb0cdc]{height:25px;line-height:23px;width:25px}.pos-card-footer[data-v-5efb0cdc]{background:#fff;border:1px solid #ddd;border-radius:4px;margin-bottom:15px}.pos-net-total[data-v-5efb0cdc]{background:#1b3c7133;font-size:22px;font-weight:700;padding:10px;text-align:center;width:100%}.product[data-v-5efb0cdc]{cursor:pointer}.product .info-box[data-v-5efb0cdc]:hover{background:#e0e0e0}.dark-mode .pos-body[data-v-5efb0cdc],.dark-mode .pos-r-head[data-v-5efb0cdc]{background:#111827!important;border-color:#000}.dark-mode .pos-item-grid>div[data-v-5efb0cdc]{border-color:#6c757d!important}.dark-mode .pos-box-content[data-v-5efb0cdc]{color:#fff;padding:5px 10px}.dark-mode .pos-item-grid>div.pos-item-grid-red[data-v-5efb0cdc]{border-color:red!important}.dark-mode .card-client-search[data-v-5efb0cdc]{border-color:#6c757d}.dark-mode .table-striped tbody tr[data-v-5efb0cdc]:nth-of-type(odd){background-color:#1f2937}.dark-mode .table-responsive.table-wrap>table[data-v-5efb0cdc]{border:1px solid #6c757d}.dark-mode .table-wrap .incrementor[data-v-5efb0cdc]{border:none!important}.dark-mode .pos-card-footer.bg-white[data-v-5efb0cdc]{background:#111827!important;border-color:#6c757d}.dark-mode .pos-card-footer label[data-v-5efb0cdc]{color:#fff}.dark-mode .pos-net-total[data-v-5efb0cdc]{background:#63a9f1;color:#fff}#invoice-POS table[data-v-5efb0cdc],#invoice-POS td[data-v-5efb0cdc],#invoice-POS th[data-v-5efb0cdc],#invoice-POS tr[data-v-5efb0cdc]{border-collapse:collapse}#invoice-POS tr[data-v-5efb0cdc]{border-bottom:2px dotted #05070b}#invoice-POS table[data-v-5efb0cdc]{width:100%}#invoice-POS tfoot tr th[data-v-5efb0cdc]:first-child{text-align:left}#invoice-POS .info[data-v-5efb0cdc]{margin-bottom:20px}#invoice-POS .info>p[data-v-5efb0cdc]{margin-top:20px}#legalcopy[data-v-5efb0cdc]{margin-top:5mm}#bar[data-v-5efb0cdc],#legalcopy p[data-v-5efb0cdc]{text-align:center}.total[data-v-5efb0cdc]{font-size:12px;font-weight:700}span.pqty[data-v-5efb0cdc]{display:block;font-size:12px;font-weight:500;line-height:15px;margin-bottom:5px}@media only screen and (max-width:1250px){.pos-item-grid[data-v-5efb0cdc]{grid-template-columns:1fr 1fr 1fr 1fr}}@media only screen and (max-width:991px){.pos-item-grid[data-v-5efb0cdc]{grid-template-columns:1fr 1fr 1fr}}@media only screen and (max-width:767px){.sm-col-reverse[data-v-5efb0cdc]{flex-direction:column-reverse}.pos-item-grid[data-v-5efb0cdc]{grid-template-columns:1fr 1fr 1fr 1fr}}.create-btn[data-v-5efb0cdc]{padding:11px}.create-btn-2[data-v-5efb0cdc]{padding:10px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 91490:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ 96065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(33551);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(16320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ 96575:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ 96779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/pos/create.vue?vue&type=template&id=5efb0cdc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "pos"
    }
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row sm-col-reverse"
  }, [_c('div', {
    staticClass: "col-12 col-md-5"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body-l p-0"
  }, [_c('div', {
    staticClass: "form-group pl-3 pt-3 pr-3"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.clients,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('ClientCreateModal', {
    on: {
      "reloadClients": function reloadClients($event) {
        return _vm.getClients('latest');
      }
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "table-responsive table-wrap"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Product")))]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Quantity")) + "\n                  ")]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Subtotal")) + "\n                  ")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Action")) + "\n                  ")])])]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('tbody', _vm._l(_vm.form.selectedProducts, function (product, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: product.name,
        expression: "product.name"
      }],
      staticClass: "table-product-title"
    }, [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "input-group custom-qty-input table-price-counter-nowrap"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "unitPrice"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(product.unitPrice, 'price', i, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "unitPrice",
        "step": "any",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "min": "0"
      },
      domProps: {
        "value": product.unitPrice
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'price', i, '');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "button-plus icon-shape icon-sm btn-primary",
      attrs: {
        "type": "button",
        "value": "+",
        "data-field": "unitPrice"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(product.unitPrice, 'price', i, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "d-flex custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(product.qty, 'qty', i, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "quantity-field border-0 incrementor",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": product.inventoryCount,
        "placeholder": "Quantity"
      },
      domProps: {
        "value": product.qty
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i, '');
        },
        "keyup": function keyup($event) {
          return _vm.generateItemTotal($event.target.value, 'qty', i, '');
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "button-plus icon-shape icon-sm btn-primary",
      attrs: {
        "type": "button",
        "value": "+",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(product.qty, 'qty', i, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(product.unitPrice * product.qty)))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "d-flex align-items-center gap-1"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: product.discountType,
        expression: "product.discountType"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".discountType"))
      },
      staticStyle: {
        "width": "70px",
        "flex-shrink": "0"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(product, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductDiscount(i);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": "fixed"
      }
    }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "percentage"
      }
    }, [_vm._v(_vm._s(_vm.$t("%")))])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: product.discount,
        expression: "product.discount"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".discount"))
      },
      staticStyle: {
        "width": "90px",
        "flex-shrink": "0"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": product.discountType == 'percentage' ? 100 : product.unitPrice * product.qty,
        "placeholder": "0"
      },
      domProps: {
        "value": product.discount
      },
      on: {
        "change": function change($event) {
          return _vm.calculateProductDiscount(i);
        },
        "keyup": function keyup($event) {
          return _vm.calculateProductDiscount(i);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(product, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".discount")) || _vm.form.errors.has("selectedProducts.".concat(i, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.form.errors.has("selectedProducts.".concat(i, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".discountType"))))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(product.unitPrice * product.qty - (product.discountAmount || 0))))]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: product.selectedVatRate,
        expression: "product.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(i, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(product, "selectedVatRate", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductVat(i);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.$t('Select VAT')))]), _vm._v(" "), _vm._l(_vm.taxes, function (tax) {
      return _c('option', {
        key: tax.id,
        domProps: {
          "value": tax
        }
      }, [_vm._v("\n                        " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                      ")]);
    })], 2), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(i, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                      " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(i, ".selectedVatRate"))) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center"
    }, [_vm._v("\n                      " + _vm._s(_vm._f("withCurrency")(product.productTax)) + "\n                    ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("withCurrency")(product.totalPrice)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeItem(product);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])])]);
  }), 0) : _c('tbody', [_c('tr', {
    staticClass: "text-center"
  }, [_c('td', {
    attrs: {
      "colspan": "10"
    }
  }, [_vm._v(_vm._s(_vm.$t("no_data_found")))])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "pos-card-footer bg-white"
  }, [_c('div', [_c('div', {
    staticClass: "row pt-3 pl-3 pr-3"
  }, [_c('div', {
    staticClass: "form-group col-md-6 col-lg-6"
  }, [_c('label', {
    attrs: {
      "for": "discountType"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount Type")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discountType,
      expression: "form.discountType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discountType')
    },
    attrs: {
      "id": "discountType",
      "step": "any",
      "name": "discountType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.calculateSum],
      "keyup": _vm.calculateSum
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Percentage")) + "(%)")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discountType"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-lg-6"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")) + "\n                "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "min": "1",
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.subTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.discountType == 1 ? _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.form.totalDiscount)))])]) : _vm._e()]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6 col-lg-6"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transport Cost")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('transportCost')
    },
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "1",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-6 col-lg-6"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Invoice Tax")) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group select-input-group"
  }, [_c('v-select', {
    staticClass: "w-85",
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": _vm.calculateSum
    },
    model: {
      value: _vm.form.orderTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "orderTax", $$v);
      },
      expression: "form.orderTax"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-prepend input-c-margin"
  }, [_c('div', {
    staticClass: "input-group-text"
  }, [_vm.form.orderTax ? _c('span', [_vm._v(_vm._s(_vm._f("withCurrency")(_vm.form.totalTax)))]) : _c('span', [_vm._v(_vm._s(_vm._f("withCurrency")(0)))])])])], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "pos-net-total noi-print"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Net Total")) + ": " + _vm._s(_vm._f("withCurrency")(_vm.form.netTotal)) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row no-print"
  }, [_c('div', {
    staticClass: "col-12 col-lg-5 mb-1"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-block",
    on: {
      "click": _vm.saveInvoice,
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-lg-5 mb-1"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-block",
    on: {
      "click": _vm.completeOrderAndAddPayment
    }
  }, [_c('i', {
    staticClass: "fas fa-credit-card"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Save & Payment")) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-lg-2"
  }, [_c('button', {
    staticClass: "btn btn-secondary float-right btn-block",
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-md-7"
  }, [_c('div', {
    staticClass: "card bg-transparent"
  }, [_c('div', {
    staticClass: "pos-r-head bg-white"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.categories ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('category')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "category",
      "placeholder": _vm.$t('Select a category')
    },
    on: {
      "input": _vm.getSubCategoriesByCategory
    },
    model: {
      value: _vm.form.category,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "category", $$v);
      },
      expression: "form.category"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "category"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.subCategories ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.subCategories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    on: {
      "input": _vm.getProductsBySubCategory
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "col-md-12 form-group"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('search', {
    staticClass: "flex-grow-1",
    attrs: {
      "isPosSearch": true
    },
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
  }), _vm._v(" "), _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn-2"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-body bg-white mt-3 pos-body"
  }, [_c('div', {
    staticClass: "pos-item-grid"
  }, _vm._l(_vm.products, function (product) {
    return _c('div', {
      key: product.id,
      "class": Number(product.inventoryCount) < 1 ? 'pos-item-grid-red' : '',
      on: {
        "click": function click($event) {
          return _vm.storeProduct(product);
        }
      }
    }, [_c('div', {
      staticClass: "pos-box"
    }, [_c('div', {
      staticClass: "relative"
    }, [_c('div', {
      staticClass: "pos-box-img"
    }, [product.image ? _c('div', [_c('img', {
      staticClass: "pos-box-icon",
      attrs: {
        "src": product.image,
        "alt": "product image"
      }
    })]) : _c('div', [_vm._v(_vm._s(_vm.$t("No Preview")))])]), _vm._v(" "), _c('span', {
      staticClass: "box-qty",
      "class": Number(product.inventoryCount) < 1 ? 'qty-red' : ''
    }, [_vm._v(_vm._s(product.inventoryCount))])]), _vm._v(" "), _c('div', {
      staticClass: "pos-box-content"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("withPrefix")(product.code, _vm.productPrefix)))]), _vm._v(" "), _c('p', {
      staticClass: "pos-box-text"
    }, [_vm._v(_vm._s(product.name))])])])]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 d-flex justify-content-center"
  }, [_vm.pagination && _vm.pagination.last_page > 1 ? _c('pagination', {
    staticClass: "justify-flex-end mt-3",
    attrs: {
      "pagination": _vm.pagination,
      "offset": 5
    },
    on: {
      "paginate": _vm.paginate
    }
  }) : _vm._e()], 1)])])])])]), _vm._v(" "), _vm.showModal ? _c('Modal', {
    staticClass: "pay-modal",
    attrs: {
      "form": _vm.form
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Add Payment")))]), _vm._v(" "), _c('div', {
    staticClass: "w-100",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('div', [_vm.accounts && _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-8"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('img', {
          staticStyle: {
            "width": "30px",
            "height": "30px"
          },
          attrs: {
            "src": option.image
          }
        }), _vm._v("\n                  " + _vm._s(option.label) + "\n              ")];
      }
    }], null, false, 2297023019),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount"))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paidAmount,
      expression: "form.paidAmount"
    }],
    ref: "paidAmountInput",
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paidAmount')
    },
    attrs: {
      "id": "paidAmount",
      "type": "number",
      "step": "any",
      "name": "paidAmount",
      "min": "1",
      "max": _vm.form.netTotal,
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.paidAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paidAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paidAmount"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chequeNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Cheque No")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chequeNo,
      expression: "form.chequeNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('chequeNo')
    },
    attrs: {
      "id": "chequeNo",
      "type": "text",
      "step": "any",
      "name": "chequeNo",
      "placeholder": _vm.$t('Enter a cheque number')
    },
    domProps: {
      "value": _vm.form.chequeNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "chequeNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chequeNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Receipt No")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.receiptNo,
      expression: "form.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('receiptNo')
    },
    attrs: {
      "id": "receiptNo",
      "type": "text",
      "name": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.form.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "receiptNo"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Reference")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poReference,
      expression: "form.poReference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poReference')
    },
    attrs: {
      "id": "poReference",
      "type": "text",
      "step": "any",
      "name": "poReference",
      "placeholder": _vm.$t('Enter PO reference')
    },
    domProps: {
      "value": _vm.form.poReference
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Terms")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentTerms,
      expression: "form.paymentTerms"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentTerms')
    },
    attrs: {
      "id": "paymentTerms",
      "type": "text",
      "name": "paymentTerms",
      "placeholder": _vm.$t('Enter payment terms')
    },
    domProps: {
      "value": _vm.form.paymentTerms
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reference')
    },
    attrs: {
      "id": "reference",
      "type": "text",
      "name": "reference",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.reference
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t("Delivery Place")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deliveryPlace,
      expression: "form.deliveryPlace"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deliveryPlace')
    },
    attrs: {
      "id": "deliveryPlace",
      "type": "text",
      "name": "deliveryPlace",
      "placeholder": _vm.$t('Enter a delivery place')
    },
    domProps: {
      "value": _vm.form.deliveryPlace
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('input', {
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
    staticClass: "form-group col-md-6"
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
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
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
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "payment-modal-footer",
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('div', {
    staticClass: "pos-modal-footer no-print"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.addPayment,
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "modal-default-button btn btn-danger",
    on: {
      "click": _vm.closeModalAndClearFormData
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Close")) + "\n        ")])])])]) : _vm._e(), _vm._v(" "), _vm.showSmallInvoiceModal ? _c('Modal', {
    attrs: {
      "allData": _vm.allData
    }
  }, [_c('h5', {
    staticClass: "no-print",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Invoice Receipt")))]), _vm._v(" "), _c('div', {
    staticClass: "w-100",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('div', {
    attrs: {
      "id": "invoice-POS"
    }
  }, [_c('div', {
    staticStyle: {
      "max-width": "400px",
      "margin": "0px auto"
    }
  }, [_c('div', {
    staticClass: "info"
  }, [_vm.appInfo.blackLogo ? _c('div', {
    staticClass: "pos-logo"
  }, [_c('img', {
    attrs: {
      "src": _vm.appInfo.blackLogo,
      "width": "100px"
    }
  })]) : _c('h2', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.appInfo.companyName))]), _vm._v(" "), _c('p', [_c('span', [_vm._v(_vm._s(_vm.$t("Date")) + " : " + _vm._s(_vm.allData.invoiceDate) + " "), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.appInfo.address,
      expression: "appInfo.address"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Address")) + " : " + _vm._s(_vm.appInfo.address) + " "), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.appInfo.email,
      expression: "appInfo.email"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Email")) + " : " + _vm._s(_vm.appInfo.email) + " "), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.appInfo.phone,
      expression: "appInfo.phone"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Phone")) + " : " + _vm._s(_vm.appInfo.phone) + " "), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.allData.client.name,
      expression: "allData.client.name"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Client")) + " : " + _vm._s(_vm.allData.client.name) + " "), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.allData.createdBy,
      expression: "allData.createdBy"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Sold By")) + " : " + _vm._s(_vm.allData.createdBy) + " "), _c('br')])])]), _vm._v(" "), _c('table', {
    staticClass: "table_data"
  }, [_c('tbody', [_vm._l(_vm.invoiceProducts, function (data, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      attrs: {
        "colspan": "3"
      }
    }, [_c('span', [_vm._v("\n                    " + _vm._s(data.productName)), _c('br'), _vm._v(" "), _c('span', {
      staticClass: "pqty"
    }, [_vm._v(_vm._s(data.quantity) + " " + _vm._s(data.productUnit) + " x\n                      " + _vm._s(_vm._f("withCurrency")(data.unitCost)))])])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right",
        "vertical-align": "bottom"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(data.unitCost * data.quantity)) + "\n                ")])]);
  }), _vm._v(" "), _c('tr', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Subtotal")))]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.subTotal)) + "\n                ")])]), _vm._v(" "), _vm.allData.discount ? _c('tr', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.discount)) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.allData.tax ? _c('tr', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax")) + "(%)")]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.tax)) + "\n                ")])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.subTotal - _vm.allData.totalInvoiceReturn - _vm.allData.discount + _vm.allData.transport + _vm.allData.tax)) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.totalPaid)) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "total",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Due")))]), _vm._v(" "), _c('td', {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm._f("withCurrency")(_vm.allData.due)) + "\n                ")])])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "ml-2 mb-4",
    attrs: {
      "id": "legalcopy"
    }
  }, [_c('p', {
    staticClass: "legal"
  }, [_c('strong', [_vm._v(_vm._s(_vm.appInfo.invoiceThankYouMessage))])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "bar"
    }
  }, [_c('barcode', {
    attrs: {
      "width": "2",
      "height": "25",
      "fontSize": "15",
      "value": _vm._f("withPrefix")(_vm.allData.invoiceNo, _vm.invoicePrefix)
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Rendering fails.")) + "\n              ")])], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "pos-modal-footer no-print",
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('div', [_c('button', {
    staticClass: "modal-default-button btn btn-info",
    on: {
      "click": function click($event) {
        return _vm.printInvoice();
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Print")) + "\n        ")])]), _vm._v(" "), _c('button', {
    staticClass: "modal-default-button btn btn-danger",
    on: {
      "click": _vm.closeReceiptModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Close")) + "\n      ")])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-barcode/index.js
var vue_barcode = __webpack_require__(470);
var vue_barcode_default = /*#__PURE__*/__webpack_require__.n(vue_barcode);
;// ./resources/js/audio/beep.wav
/* harmony default export */ const beep = (__webpack_require__.p + "528a805699c4d876d449e0dfd885d261.wav");
// EXTERNAL MODULE: ./resources/js/components/ClientCreateModal.vue + 5 modules
var ClientCreateModal = __webpack_require__(71898);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 5 modules
var ProductCreateModal = __webpack_require__(83830);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/pos/create.vue?vue&type=script&lang=js
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







/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("POS")
    };
  },
  components: {
    barcode: (vue_barcode_default()),
    ClientCreateModal: ClientCreateModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Create Sale",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Invoices",
        url: "invoices.index"
      }, {
        name: "POS",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        invoiceNo: "",
        client: "",
        reference: "",
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discountType: 0,
        discount: "",
        totalDiscount: "",
        transportCost: "",
        orderTax: "",
        totalTax: 0,
        productTotalTax: 0,
        account: "",
        totalPaid: "",
        dueAmount: "",
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        addPayment: "",
        chequeNo: "",
        receiptNo: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        category: "",
        invoice_id: null,
        invoice_slug: null
      }),
      taxes: [],
      audio: "",
      products: "",
      accounts: "",
      categories: [],
      subCategories: [],
      productPrefix: "",
      invoicePrefix: "",
      showModal: false,
      allData: {},
      showSmallInvoiceModal: false,
      printMe: false,
      perPage: 10,
      pagination: "",
      query: "",
      generateOrder: false,
      clickCount: 0,
      clients: []
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  mounted: function mounted() {
    var _this = this;
    window.addEventListener("keypress", function (e) {
      if (_this.form.netTotal > 0 && _this.showModal == false && _this.generateOrder == false) {
        if (e.key === "Enter") {
          _this.generateOrder = true;
          _this.completeOrderAndAddPayment();
        }
      }
      if (_this.form.netTotal > 0 && _this.form.paidAmount > 0 && _this.generateOrder == true) {
        if (e.key === "Enter") {
          _this.clickCount++;
          _this.showModal = false;
          console.log("from second click", _this.clickCount);
          if (_this.clickCount == 1) {
            _this.addPayment();
          } else {
            _this.printInvoice();
          }
        }
      }
    });
  },
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getCategories();
    this.getSubCategories();
    this.audio = new Audio(beep);
    this.productPrefix = this.appInfo.productPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
    document.body.classList.add("sidebar-collapse");
  },
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ == "") {
        this.getProducts();
      } else {
        this.searchProducts();
      }
    }
  },
  methods: {
    // get all clients
    getClients: function getClients() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var selectedClient;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              selectedClient = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'default';
              _context.n = 1;
              return axios_default().get("/api/all-clients").then(function (_ref) {
                var data = _ref.data;
                _this2.clients = data.data;
                // assign default client
                if (_this2.clients && _this2.clients.length > 0) {
                  var defaultClientSlug = _this2.appInfo.defaultClientSlug;
                  _this2.form.client = _this2.clients.find(function (item) {
                    return item.slug === defaultClientSlug;
                  });
                }
              })["catch"](function (error) {
                return console.log(error);
              });
            case 1:
              if (selectedClient == 'latest') {
                _this2.form.client = _this2.clients[0];
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, defaultAccountSlug;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.accounts = data.data;

              // assign default account
              if (_this3.accounts && _this3.accounts.length > 0) {
                defaultAccountSlug = _this3.appInfo.defaultAccountSlug;
                _this3.form.account = _this3.accounts.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data, defaultVatRateSlug;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this4.taxes = data.data;

              // assign default
              if (_this4.taxes && _this4.taxes.length > 0) {
                defaultVatRateSlug = _this4.appInfo.defaultVatRateSlug;
                _this4.form.orderTax = _this4.taxes.find(function (item) {
                  return item.slug === defaultVatRateSlug;
                });
              }
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get categories
    getCategories: function getCategories() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-product-categories");
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this5.categories = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get sub categories
    getSubCategories: function getSubCategories() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get4, data;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$axios$get4 = _context5.v;
              data = _yield$axios$get4.data;
              _this6.subCategories = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // get the invoice info by invoice slug
    getInvoice: function getInvoice(invoice_slug) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get5, data;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this7.loading = true;
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/invoices/" + invoice_slug);
            case 1:
              _yield$axios$get5 = _context6.v;
              data = _yield$axios$get5.data;
              _this7.allData = data.data;
              _this7.invoiceProducts = _this7.allData.invoiceProducts;
              _this7.invoiceProducts.sort(_this7.sortProducts);
              _this7.loading = false;
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var currentPage, _yield$axios$get6, data;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              currentPage = _this8.pagination ? _this8.pagination.current_page : 1;
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products-paginated?page=" + currentPage);
            case 1:
              _yield$axios$get6 = _context7.v;
              data = _yield$axios$get6.data;
              _this8.products = data.data;
              _this8.products.sort(_this8.sortProducts);
              _this8.pagination = data.meta;
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // sort products
    sortProducts: function sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },
    // get sub categories for a category
    getSubCategoriesByCategory: function getSubCategoriesByCategory() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this9$form$category;
        var currentPage, slug, _yield$axios$get7, data;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              currentPage = _this9.pagination ? _this9.pagination.current_page : 1;
              _this9.subCategories = [];
              _this9.form.subCategory = "";
              slug = (_this9$form$category = _this9.form.category) === null || _this9$form$category === void 0 ? void 0 : _this9$form$category.slug;
              if (!slug) {
                _context8.n = 2;
                break;
              }
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/all-pro-sub-categories-by-category/" + slug + "?page=" + currentPage);
            case 1:
              _yield$axios$get7 = _context8.v;
              data = _yield$axios$get7.data;
              _this9.subCategories = data.cats;
              _this9.products = data.products;
              _context8.n = 4;
              break;
            case 2:
              _context8.n = 3;
              return _this9.getSubCategories();
            case 3:
              _context8.n = 4;
              return _this9.getProducts();
            case 4:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // get products for a sub category
    getProductsBySubCategory: function getProductsBySubCategory() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _this0$form$category, _this0$form$subCatego;
        var currentPage, catSlug, subCatSlug, _yield$axios$get8, data;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              currentPage = _this0.pagination ? _this0.pagination.current_page : 1;
              _this0.products = [];
              _this0.form.itemName = "";
              catSlug = (_this0$form$category = _this0.form.category) === null || _this0$form$category === void 0 ? void 0 : _this0$form$category.slug;
              subCatSlug = (_this0$form$subCatego = _this0.form.subCategory) === null || _this0$form$subCatego === void 0 ? void 0 : _this0$form$subCatego.slug;
              if (!(catSlug && subCatSlug)) {
                _context9.n = 2;
                break;
              }
              _context9.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products-by-sub-categories/" + catSlug + "/" + subCatSlug + "?page=" + currentPage);
            case 1:
              _yield$axios$get8 = _context9.v;
              data = _yield$axios$get8.data;
              _this0.products = data.data;
              _this0.pagination = data.meta;
              _context9.n = 3;
              break;
            case 2:
              _context9.n = 3;
              return _this0.getProducts();
            case 3:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // pagination
    paginate: function paginate() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _this1$form$category;
        var catSlug;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              catSlug = (_this1$form$category = _this1.form.category) === null || _this1$form$category === void 0 ? void 0 : _this1$form$category.slug;
              if (!(_this1.query === "")) {
                _context0.n = 4;
                break;
              }
              if (!catSlug) {
                _context0.n = 2;
                break;
              }
              _context0.n = 1;
              return _this1.getSubCategoriesByCategory();
            case 1:
              _context0.n = 3;
              break;
            case 2:
              _context0.n = 3;
              return _this1.getProducts();
            case 3:
              _context0.n = 5;
              break;
            case 4:
              _context0.n = 5;
              return _this1.searchProducts();
            case 5:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // Reset pagination
    resetPagination: function resetPagination() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _this10.pagination ? _this10.pagination.current_page = 1 : "";
              _context1.n = 1;
              return _this10.searchProducts();
            case 1:
              return _context1.a(2);
          }
        }, _callee1);
      }))();
    },
    // search data
    searchProducts: function searchProducts() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var catSlug, subCatSlug, currentPage, _yield$axios$get9, data;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              catSlug = _this11.form.category ? _this11.form.category.slug : "";
              subCatSlug = _this11.form.subCategory ? _this11.form.subCategory.slug : "";
              _this11.$store.state.operations.loading = true;
              currentPage = _this11.pagination ? _this11.pagination.current_page : 1;
              _context10.n = 1;
              return axios_default().get(window.location.origin + "/api/products/search-from-pos" + "?term=" + _this11.query + "&page=" + currentPage + "&perPage=" + _this11.perPage + "&catSlug=" + catSlug + "&SubCatSlug=" + subCatSlug);
            case 1:
              _yield$axios$get9 = _context10.v;
              data = _yield$axios$get9.data;
              _this11.products = data.data;
              _this11.products.sort(_this11.sortProducts);
              _this11.pagination = data.meta;
              console.log(_this11.pagination);
            case 2:
              return _context10.a(2);
          }
        }, _callee10);
      }))();
    },
    // Reload after search
    reload: function reload() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              _this12.query = "";
              _context11.n = 1;
              return _this12.searchProducts();
            case 1:
              return _context11.a(2);
          }
        }, _callee11);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var quantity = 1;
      if (product.itemType == 'service' || product.inventoryCount >= quantity) {
        if (index === -1) {
          var _this$taxes;
          var productTax = product.taxType == "Exclusive" ? product.priceWithDiscount * (product.taxRate / 100) : product.priceWithDiscount - product.priceWithDiscount / (1 + product.taxRate / 100);
          var totalTax = productTax * quantity;
          this.form.selectedProducts.unshift({
            id: product.id,
            itemType: product.itemType,
            slug: product.slug,
            name: product.name,
            code: product.code,
            taxType: product.taxType,
            taxRate: product.taxRate,
            qty: quantity,
            inventoryCount: product.inventoryCount,
            avgPurchasePrice: product.avgPurchasePrice,
            unitPrice: product.priceWithDiscount,
            unitCost: product.taxType == "Exclusive" ? product.priceWithDiscount + productTax : product.priceWithDiscount,
            totalPrice: product.taxType == "Exclusive" ? 1 * (product.priceWithDiscount + totalTax) : 1 * product.priceWithDiscount,
            productTax: product.productTax > 0 ? product.productTax : 0,
            totalTax: totalTax,
            discount: 0,
            discountType: "fixed",
            discountAmount: 0,
            selectedVatRate: this.findMatchingVatRate(product.productTax) || this.form.orderTax || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0])
          });
          // play sound if added
          this.audio.play();
        } else {
          quantity = this.form.selectedProducts[index].qty;
          // play sound if added
          this.audio.play();
          this.generateItemTotal(quantity, "qty", index, "increment");
          var unitPrice = this.form.selectedProducts[index].unitPrice;
          this.generateItemTotal(unitPrice, "price", index, "noIncrement");
          return;
        }
      } else {
        toast.fire({
          type: "error",
          title: this.$t("Insufficient Stock")
        });
      }
      this.generateItemTotal(quantity, "qty", index, "");
      return;
    },
    // update array
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          item.qty = value;
          if (item.itemType == 'service' || item.inventoryCount >= value) {
            if (action == "increment") {
              item.qty = Number(item.qty) + 1;
            } else if (action == "decrement") {
              item.qty = Number(item.qty) - 1;
            }
          } else {
            item.qty = 1;
            toast.fire({
              type: "error",
              title: this.$t("Not enough items!")
            });
          }
        } else if (type == "price" && action == "noIncrement") {
          item.unitPrice = value;
          item.unitPrice = Number(item.unitPrice);
        } else {
          item.unitPrice = value;
          if (action == "increment") {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }

        // Use the new calculation method that handles discount and VAT
        this.generateItemTotalPrice(index);
      }
      this.calculateSum();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = this.roundToTwoDecimals(item.unitPrice * item.qty * item.discount / 100);
        } else {
          item.discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
        }

        // Recalculate totals
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },
    // calculate product VAT
    calculateProductVat: function calculateProductVat(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }

          // If no match found or no productTax, fall back to available taxes
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }

        // Recalculate totals with new VAT rate
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },
    // find matching VAT rate
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!productTax || !this.taxes) return null;

      // If productTax is a number, find matching rate
      if (typeof productTax === 'number') {
        return this.taxes.find(function (tax) {
          return tax.rate === productTax;
        });
      }

      // If productTax is an object, return it directly
      if (_typeof(productTax) === 'object') {
        return productTax;
      }
      return null;
    },
    // round to two decimals
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },
    // generate item total price with discount and VAT
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Calculate subtotal after discount
        var subtotalAfterDiscount = item.unitPrice * item.qty - (item.discountAmount || 0);

        // Calculate VAT on the discounted amount
        if (item.selectedVatRate && item.selectedVatRate.rate > 0) {
          item.productTax = this.roundToTwoDecimals(subtotalAfterDiscount * (item.selectedVatRate.rate / 100));
        } else {
          item.productTax = 0;
        }
        item.totalTax = item.productTax;

        // Calculate final total with VAT
        item.totalPrice = this.roundToTwoDecimals(subtotalAfterDiscount + item.productTax);
        this.form.selectedProducts[index] = item;
      }
    },
    // calculate sum
    calculateSum: function calculateSum() {
      // calculate subtotal
      this.form.subTotal = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalPrice).toFixed(2));
      }, 0);

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalTax).toFixed(2));
      }, 0);
      this.form.netTotal = this.form.subTotal;

      // calculate discount first
      var discount = 0;
      if (this.form.subTotal > 0) {
        discount = Number(this.form.discount);
        if (this.form.discountType == 1) {
          discount = discount / 100 * this.form.subTotal;
          this.form.totalDiscount = Number(discount.toFixed(2));
        } else {
          discount = Number(this.form.discount);
        }
      }

      // calculate net amount (after discount)
      var netAmount = this.form.subTotal - discount + Number(this.form.transportCost);

      // calculate invoice tax on net amount
      this.form.totalTax = 0;
      if (this.form.orderTax) {
        this.form.totalTax = this.form.orderTax.rate / 100 * netAmount;
      }

      // calculate final total
      this.form.netTotal = netAmount + this.form.totalTax;
      return;
    },
    // save invoice
    saveInvoice: function saveInvoice() {
      var _arguments2 = arguments,
        _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var isDirect;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              isDirect = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : true;
              _context12.n = 1;
              return _this13.form.post(window.location.origin + "/api/invoices").then(function (_ref2) {
                var data = _ref2.data;
                _this13.form.invoice_id = data.data.invoice_id;
                _this13.form.invoice_slug = data.data.invoice_slug;
                if (isDirect) {
                  _this13.showInvoiceAndPrint();
                }
              })["catch"](function (error) {
                var ErrorHandler = (__webpack_require__(36694)/* ["default"] */ .A);
                ErrorHandler.handleApiError(error, {
                  showValidationErrors: false
                });
              });
            case 1:
              return _context12.a(2);
          }
        }, _callee12);
      }))();
    },
    // save payment
    addPayment: function addPayment() {
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        var ErrorHandler;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              if (!(_this14.form.invoice_id != null)) {
                _context14.n = 2;
                break;
              }
              _context14.n = 1;
              return _this14.form.post(window.location.origin + "/api/invoices-pay").then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
                return _regenerator().w(function (_context13) {
                  while (1) switch (_context13.n) {
                    case 0:
                      _this14.showModal = false;
                      _context13.n = 1;
                      return _this14.showInvoiceAndPrint();
                    case 1:
                      _this14.form.reset();
                      _this14.againDefaultSettings();
                    case 2:
                      return _context13.a(2);
                  }
                }, _callee13);
              })))["catch"](function (error) {
                var ErrorHandler = (__webpack_require__(36694)/* ["default"] */ .A);
                ErrorHandler.handleApiError(error, {
                  showValidationErrors: false
                });
              });
            case 1:
              _context14.n = 3;
              break;
            case 2:
              ErrorHandler = (__webpack_require__(36694)/* ["default"] */ .A);
              ErrorHandler.showError(_this14.$t("Error"), _this14.$t("Please try again"));
            case 3:
              return _context14.a(2);
          }
        }, _callee14);
      }))();
    },
    // close add payment modal and clear form data
    closeModalAndClearFormData: function closeModalAndClearFormData() {
      this.showModal = false;
      this.generateOrder = false;
      this.form.reset();
      this.againDefaultSettings();
    },
    // close receipt modal
    closeReceiptModal: function closeReceiptModal() {
      this.showSmallInvoiceModal = false;
      this.form.reset();
      this.againDefaultSettings();
      this.clickCount = 0; // reset click count
      console.log("from close" + this.clickCount);
    },
    // complete order and add payment
    completeOrderAndAddPayment: function completeOrderAndAddPayment() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.n) {
            case 0:
              _context15.n = 1;
              return _this15.saveInvoice(false);
            case 1:
              if (_this15.form.invoice_id != null) {
                _this15.showModal = true;
                _this15.form.paidAmount = _this15.form.netTotal.toFixed(2);
                _this15.$nextTick(function () {
                  return _this15.$refs.paidAmountInput.focus();
                });
              }
            case 2:
              return _context15.a(2);
          }
        }, _callee15);
      }))();
    },
    // show invoice and print
    showInvoiceAndPrint: function showInvoiceAndPrint() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              _context16.n = 1;
              return _this16.getInvoice(_this16.form.invoice_slug);
            case 1:
              _this16.form.reset();
              _this16.againDefaultSettings();
              _this16.getProducts();
              _this16.showSmallInvoiceModal = true;
              setTimeout(function () {
                return _this16.printInvoice();
              }, 500);
            case 2:
              return _context16.a(2);
          }
        }, _callee16);
      }))();
    },
    // print invoice
    printInvoice: function printInvoice() {
      var divContents = document.getElementById("invoice-POS").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/css/pos_print.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    // again default settings
    againDefaultSettings: function againDefaultSettings() {
      this.getAccounts();
      this.getClients();
      this.getTaxes();
      this.showModal = false;
      this.generateOrder = false;
    }
  }
});
;// ./resources/js/pages/sales/pos/create.vue?vue&type=script&lang=js
 /* harmony default export */ const pos_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/pos/create.vue?vue&type=style&index=0&id=5efb0cdc&prod&lang=scss&scoped=true
var createvue_type_style_index_0_id_5efb0cdc_prod_lang_scss_scoped_true = __webpack_require__(90800);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/pos/create.vue?vue&type=style&index=0&id=5efb0cdc&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_5efb0cdc_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const pos_createvue_type_style_index_0_id_5efb0cdc_prod_lang_scss_scoped_true = (createvue_type_style_index_0_id_5efb0cdc_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/sales/pos/create.vue?vue&type=style&index=0&id=5efb0cdc&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/pos/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pos_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5efb0cdc",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 98165:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ })

}]);