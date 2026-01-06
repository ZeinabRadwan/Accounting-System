/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/rtl-manager.js":
/*!*************************************!*\
  !*** ./resources/js/rtl-manager.js ***!
  \*************************************/
/***/ (() => {

eval("{// Simple RTL manager - bundled by Mix into public/js/rtl-manager.js\n(function () {\n  try {\n    // Prevent accidental HTML being served as JS\n    if (typeof document === 'undefined') return;\n    var scriptTag = document.currentScript;\n    if (scriptTag && /<\\/?[a-z][\\s\\S]*>/i.test(scriptTag.text || '')) {\n      // Detected HTML content, abort\n      return;\n    }\n    var html = document.documentElement;\n    var body = document.body;\n    var isRTL = (html.getAttribute('dir') || body.getAttribute('dir') || 'ltr') === 'rtl';\n\n    // Add a class to help CSS override if needed\n    if (isRTL) {\n      html.classList.add('rtl');\n      body.classList.add('rtl');\n    } else {\n      html.classList.remove('rtl');\n      body.classList.remove('rtl');\n    }\n  } catch (e) {\n    // Fail silently - this script is optional\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsInNjcmlwdFRhZyIsImN1cnJlbnRTY3JpcHQiLCJ0ZXN0IiwidGV4dCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiaXNSVEwiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ydGwtbWFuYWdlci5qcz9mMWU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbXBsZSBSVEwgbWFuYWdlciAtIGJ1bmRsZWQgYnkgTWl4IGludG8gcHVibGljL2pzL3J0bC1tYW5hZ2VyLmpzXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIFByZXZlbnQgYWNjaWRlbnRhbCBIVE1MIGJlaW5nIHNlcnZlZCBhcyBKU1xyXG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHRcdGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XHJcblx0XHRpZiAoc2NyaXB0VGFnICYmIC88XFwvP1thLXpdW1xcc1xcU10qPi9pLnRlc3Qoc2NyaXB0VGFnLnRleHQgfHwgJycpKSB7XHJcblx0XHRcdC8vIERldGVjdGVkIEhUTUwgY29udGVudCwgYWJvcnRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdGNvbnN0IGlzUlRMID0gKGh0bWwuZ2V0QXR0cmlidXRlKCdkaXInKSB8fCBib2R5LmdldEF0dHJpYnV0ZSgnZGlyJykgfHwgJ2x0cicpID09PSAncnRsJztcclxuXHJcblx0XHQvLyBBZGQgYSBjbGFzcyB0byBoZWxwIENTUyBvdmVycmlkZSBpZiBuZWVkZWRcclxuXHRcdGlmIChpc1JUTCkge1xyXG5cdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ3J0bCcpO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ3J0bCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdydGwnKTtcclxuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCdydGwnKTtcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHQvLyBGYWlsIHNpbGVudGx5IC0gdGhpcyBzY3JpcHQgaXMgb3B0aW9uYWxcclxuXHR9XHJcbn0pKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxDQUFDLFlBQVk7RUFDWixJQUFJO0lBQ0g7SUFDQSxJQUFJLE9BQU9BLFFBQVEsS0FBSyxXQUFXLEVBQUU7SUFDckMsSUFBTUMsU0FBUyxHQUFHRCxRQUFRLENBQUNFLGFBQWE7SUFDeEMsSUFBSUQsU0FBUyxJQUFJLG9CQUFvQixDQUFDRSxJQUFJLENBQUNGLFNBQVMsQ0FBQ0csSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFO01BQ2pFO01BQ0E7SUFDRDtJQUVBLElBQU1DLElBQUksR0FBR0wsUUFBUSxDQUFDTSxlQUFlO0lBQ3JDLElBQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDTyxJQUFJO0lBQzFCLElBQU1DLEtBQUssR0FBRyxDQUFDSCxJQUFJLENBQUNJLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSUYsSUFBSSxDQUFDRSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUs7O0lBRXZGO0lBQ0EsSUFBSUQsS0FBSyxFQUFFO01BQ1ZILElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ3pCSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLE1BQU07TUFDTk4sSUFBSSxDQUFDSyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDNUJMLElBQUksQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCO0VBQ0QsQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtJQUNYO0VBQUE7QUFFRixDQUFDLEVBQUUsQ0FBQyIsImlnbm9yZUxpc3QiOltdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcnRsLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/rtl-manager.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/rtl-manager.js"]();
/******/ 	
/******/ })()
;