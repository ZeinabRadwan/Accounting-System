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

eval("{// Simple RTL manager - bundled by Mix into public/js/rtl-manager.js\n(function () {\n  try {\n    // Prevent accidental HTML being served as JS\n    if (typeof document === 'undefined') return;\n    var scriptTag = document.currentScript;\n    if (scriptTag && /<\\/?[a-z][\\s\\S]*>/i.test(scriptTag.text || '')) {\n      // Detected HTML content, abort\n      return;\n    }\n    var html = document.documentElement;\n    var body = document.body;\n    var isRTL = (html.getAttribute('dir') || body.getAttribute('dir') || 'ltr') === 'rtl';\n\n    // Add a class to help CSS override if needed\n    if (isRTL) {\n      html.classList.add('rtl');\n      body.classList.add('rtl');\n    } else {\n      html.classList.remove('rtl');\n      body.classList.remove('rtl');\n    }\n  } catch (e) {\n    // Fail silently - this script is optional\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcnRsLW1hbmFnZXIuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsInNjcmlwdFRhZyIsImN1cnJlbnRTY3JpcHQiLCJ0ZXN0IiwidGV4dCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiaXNSVEwiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcnRsLW1hbmFnZXIuanM/ZjFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW1wbGUgUlRMIG1hbmFnZXIgLSBidW5kbGVkIGJ5IE1peCBpbnRvIHB1YmxpYy9qcy9ydGwtbWFuYWdlci5qc1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBQcmV2ZW50IGFjY2lkZW50YWwgSFRNTCBiZWluZyBzZXJ2ZWQgYXMgSlNcclxuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblx0XHRjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0O1xyXG5cdFx0aWYgKHNjcmlwdFRhZyAmJiAvPFxcLz9bYS16XVtcXHNcXFNdKj4vaS50ZXN0KHNjcmlwdFRhZy50ZXh0IHx8ICcnKSkge1xyXG5cdFx0XHQvLyBEZXRlY3RlZCBIVE1MIGNvbnRlbnQsIGFib3J0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRjb25zdCBpc1JUTCA9IChodG1sLmdldEF0dHJpYnV0ZSgnZGlyJykgfHwgYm9keS5nZXRBdHRyaWJ1dGUoJ2RpcicpIHx8ICdsdHInKSA9PT0gJ3J0bCc7XHJcblxyXG5cdFx0Ly8gQWRkIGEgY2xhc3MgdG8gaGVscCBDU1Mgb3ZlcnJpZGUgaWYgbmVlZGVkXHJcblx0XHRpZiAoaXNSVEwpIHtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdydGwnKTtcclxuXHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCdydGwnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgncnRsJyk7XHJcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncnRsJyk7XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Ly8gRmFpbCBzaWxlbnRseSAtIHRoaXMgc2NyaXB0IGlzIG9wdGlvbmFsXHJcblx0fVxyXG59KSgpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsQ0FBQyxZQUFZO0VBQ1osSUFBSTtJQUNIO0lBQ0EsSUFBSSxPQUFPQSxRQUFRLEtBQUssV0FBVyxFQUFFO0lBQ3JDLElBQU1DLFNBQVMsR0FBR0QsUUFBUSxDQUFDRSxhQUFhO0lBQ3hDLElBQUlELFNBQVMsSUFBSSxvQkFBb0IsQ0FBQ0UsSUFBSSxDQUFDRixTQUFTLENBQUNHLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRTtNQUNqRTtNQUNBO0lBQ0Q7SUFFQSxJQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ00sZUFBZTtJQUNyQyxJQUFNQyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ08sSUFBSTtJQUMxQixJQUFNQyxLQUFLLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUlGLElBQUksQ0FBQ0UsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLOztJQUV2RjtJQUNBLElBQUlELEtBQUssRUFBRTtNQUNWSCxJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUN6QkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQyxNQUFNO01BQ05OLElBQUksQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO01BQzVCTCxJQUFJLENBQUNHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUM3QjtFQUNELENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7SUFDWDtFQUFBO0FBRUYsQ0FBQyxFQUFFLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=\n//# sourceURL=webpack-internal:///./resources/js/rtl-manager.js\n\n}");

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