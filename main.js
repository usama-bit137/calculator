/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_addEventListenerList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/addEventListenerList */ \"./src/scripts/addEventListenerList.js\");\n\r\nconst buttonArray = [...document.querySelectorAll(\".grid-item\")]; // node list.\r\n\r\n(0,_scripts_addEventListenerList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(buttonArray);\r\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/scripts/addEventListenerList.js":
/*!*********************************************!*\
  !*** ./src/scripts/addEventListenerList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttonClickEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonClickEvent */ \"./src/scripts/buttonClickEvent\");\n\r\n\r\nconst addEventListenerList = (list) => {\r\n  list.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      (0,_buttonClickEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.textContent);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListenerList);\r\n\n\n//# sourceURL=webpack://calculator/./src/scripts/addEventListenerList.js?");

/***/ }),

/***/ "./src/scripts/buttonClickEvent":
/*!**************************************!*\
  !*** ./src/scripts/buttonClickEvent ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculationPrep = (string) => {\r\n  const operations = [\"+\", \"-\", \"*\", \"/\"];\r\n  const calculation = string.split(\" \");\r\n  console.log(calculation);\r\n\r\n  calculation.pop();\r\n\r\n  return operations.includes(calculation[-1])\r\n    ? calculation.join(\" \") + \" \"\r\n    : calculation.join(\" \");\r\n};\r\n\r\nconst screen = document.querySelector(\"#screen\");\r\nconst buttonClickEvent = (symbol) => {\r\n  const operations = [\"+\", \"-\", \"*\", \"/\"];\r\n\r\n  if (symbol === \"=\") {\r\n    screen.textContent = symbol;\r\n    return;\r\n  } else if (operations.includes(symbol)) {\r\n    screen.textContent += \" \" + symbol + \" \";\r\n    return;\r\n  } else if (symbol === \"DEL\") {\r\n    screen.textContent = calculationPrep(screen.textContent);\r\n    return;\r\n  } else if (symbol === \"AC\") {\r\n    screen.textContent = \"\";\r\n    return;\r\n  }\r\n  screen.textContent += symbol;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonClickEvent);\r\n\n\n//# sourceURL=webpack://calculator/./src/scripts/buttonClickEvent?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;