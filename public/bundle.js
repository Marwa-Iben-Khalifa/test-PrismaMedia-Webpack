/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function openNav() {\n  var x = document.getElementById(\"myNavbar\");\n  if (x.className === \"navbar\") {\n      var y = document.getElementById(\"closeNavbar\")\n      y.className = \"visible\";\n      x.className += \" responsive\";\n  }\n}\n\nfunction closeNav() {\n  var x = document.getElementById(\"myNavbar\");\n  if (x.className === \"navbar responsive\") {\n      var y = document.getElementById(\"closeNavbar\")\n      y.className = \"close\";\n      x.className = \"navbar\";\n  }\n}\n\n//# sourceURL=webpack://test-dev-starwars/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;