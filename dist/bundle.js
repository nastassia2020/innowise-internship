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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(221, 219, 216);\\r\\n}\\r\\n\\r\\n.calc{\\r\\n    width: 800px;\\r\\n    border: solid 2px #555;\\r\\n    border-radius: 10px;\\r\\n    background-color: #888;\\r\\n    padding: 20px;\\r\\n    gap: 10px;\\r\\n\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(7, 1fr);\\r\\n    grid-auto-rows: 60px;\\r\\n}\\r\\n\\r\\n.calc-result{\\r\\n    grid-column: 1 / -1;\\r\\n    background-color: #333;\\r\\n    color: #fff;\\r\\n    font-size: 36px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.calc-btn{\\r\\n    border: none;\\r\\n    background-color: #eee;\\r\\n    cursor: pointer;\\r\\n    font-size: 24px;\\r\\n    box-shadow: 2px 3px 2px rgb(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.calc-btn:hover{\\r\\n    opacity: 0.7;\\r\\n}\\r\\n\\r\\n.calc-btn:active{\\r\\n    box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.calc-btn-num{\\r\\n    background-color: #b4afaf;\\r\\n}\\r\\n\\r\\n.calc-btn-operator{\\r\\n    background-color: #ffba3a;\\r\\n}\\r\\n\\r\\n.equal{\\r\\n    grid-column: -3 / -1;\\r\\n}\\r\\n\\r\\n.zero{\\r\\n    grid-column: 6 / 5;\\r\\n}\\r\\n\\r\\n.clear{\\r\\n    grid-column: 5 / 3;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://innowise-internship/./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://innowise-internship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://innowise-internship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://innowise-internship/./src/style/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://innowise-internship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _utilities_values_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/values.utility.js */ \"./src/utilities/values.utility.js\");\n/* harmony import */ var _utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/commands.js */ \"./src/utilities/commands.js\");\n/* harmony import */ var _utilities_calculator_utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/calculator.utility.js */ \"./src/utilities/calculator.utility.js\");\n\r\n\r\n\r\n\r\n\r\nconst calc = document.querySelector(\".calc\");\r\nconst result = document.querySelector(\"#result\");\r\n\r\nlet a = \"\";\r\nlet b = \"\";\r\nlet sign = \"\";\r\nlet finish = false;\r\nconst storedValue = [];\r\n\r\nconst calcEquality = (value, calculator) => {\r\n  if (value === \"=\") {\r\n    if (b === \"\") b = a;\r\n    switch (sign) {\r\n      case \"+\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.addCommand, b);\r\n        break;\r\n      case \"-\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.subtractCommand, b);\r\n        break;\r\n      case \"x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.multiplyCommand, b);\r\n        break;\r\n      case \"/\":\r\n        if (b !== \"0\") {\r\n          a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.divideCommand, b);\r\n        } else {\r\n          clearAll();\r\n          result.innerText = \"ERROR\";\r\n        }\r\n        break;\r\n      case \"xy\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.powerCommand, b);\r\n        break;\r\n      case \"y√x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.rootCommand, b);\r\n        break;\r\n    }\r\n    finish = true;\r\n    result.innerText = a;\r\n  }\r\n\r\n  if (_utilities_values_utility_js__WEBPACK_IMPORTED_MODULE_1__.functions.includes(value)) {\r\n    switch (value) {\r\n      case \"%\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.percentageCommand);\r\n        break;\r\n      case \"+/-\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.toggleSignCommand);\r\n        break;\r\n      case \"x2\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.squareCommand);\r\n        break;\r\n      case \"√x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.squareRootCommand);\r\n        break;\r\n      case \"x3\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.cubeCommand);\r\n        break;\r\n      case \"3√x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.cubeRootCommand);\r\n        break;\r\n      case \"1/x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.fractionCommand);\r\n        break;\r\n      case \"x!\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.factorialCommand);\r\n        break;\r\n      case \"10x\":\r\n        a = calculator.execute(_utilities_commands_js__WEBPACK_IMPORTED_MODULE_2__.tenInPowwer);\r\n        break;\r\n    }\r\n    finish = true;\r\n    result.innerText = a;\r\n  }\r\n\r\n  if (_utilities_values_utility_js__WEBPACK_IMPORTED_MODULE_1__.memory.includes(value)) {\r\n    switch (value) {\r\n      case \"M+\":\r\n        storedValue.push(calculator.currentValue);\r\n        a = storedValue[storedValue.length - 1];\r\n        result.innerText = a;\r\n        break;\r\n      case \"M-\":\r\n        storedValue.pop();\r\n        break;\r\n      case \"MR\":\r\n        if (a !== \"\") {\r\n          b = storedValue[storedValue.length - 1];\r\n          result.innerText = b;\r\n        } else a = storedValue[storedValue.length - 1];\r\n        break;\r\n      case \"MC\":\r\n        storedValue.length = 0;\r\n        clearAll();\r\n        break;\r\n    }\r\n  }\r\n};\r\n\r\nconst clearAll = () => {\r\n  a = \"\";\r\n  b = \"\";\r\n  sign = \"\";\r\n  finish = false;\r\n  result.innerText = 0;\r\n};\r\n\r\ncalc.addEventListener(\"click\", (e) => {\r\n  const calculator = new _utilities_calculator_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](a);\r\n\r\n  let currentValueStr = result.innerText.toString();\r\n\r\n  if (e.target.textContent === \"Back\") {\r\n    a = calculator.undo();\r\n    return a;\r\n  }\r\n\r\n  if (e.target.textContent === \"0\") {\r\n    let checkForForbiddenZeroes = /^[0]$|[*\\\\/+-][0]$/;\r\n\r\n    if (checkForForbiddenZeroes.test(currentValueStr)) {\r\n      return;\r\n    }\r\n  }\r\n\r\n  if (e.target.textContent === \".\") {\r\n    let checkForForbiddenDecimals = /^(\\d+)[.]$|[.](\\d+)$/;\r\n\r\n    if (currentValueStr[0] === \".\") {\r\n      return (currentValueStr = \"0\" + currentValueStr[0]);\r\n    }\r\n\r\n    if (checkForForbiddenDecimals.test(currentValueStr)) {\r\n      return;\r\n    }\r\n  }\r\n\r\n  if (!e.target.classList.contains(\"calc-btn\")) return;\r\n  result.innerText = \"\";\r\n\r\n  if (e.target.classList.contains(\"clear\")) {\r\n    clearAll();\r\n  }\r\n\r\n  const value = e.target.innerText;\r\n\r\n  if (_utilities_values_utility_js__WEBPACK_IMPORTED_MODULE_1__.digit.includes(value)) {\r\n    if (b === \"\" && sign === \"\") {\r\n      a += value;\r\n      result.innerText = a;\r\n    } else if (a !== \"\" && b !== \"\" && finish) {\r\n      b = value;\r\n      finish = false;\r\n      result.innerText = b;\r\n    } else {\r\n      b += value;\r\n      result.innerText = b;\r\n    }\r\n  }\r\n\r\n  if (_utilities_values_utility_js__WEBPACK_IMPORTED_MODULE_1__.signs.includes(value)) {\r\n    if (a !== \"\" && b !== \"\" && !finish) {\r\n      calcEquality(\"=\", calculator);\r\n    }\r\n    sign = value;\r\n    result.innerText = sign;\r\n    console.log(a, b, sign);\r\n  }\r\n\r\n  console.log(\"storedValue\", storedValue);\r\n\r\n  calcEquality(value, calculator);\r\n});\r\n\n\n//# sourceURL=webpack://innowise-internship/./src/index.js?");

/***/ }),

/***/ "./src/utilities/calculator.utility.js":
/*!*********************************************!*\
  !*** ./src/utilities/calculator.utility.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\nclass Calculator {\r\n  constructor(a) {\r\n    this.currentValue = a;\r\n    this.commandHistory = [];\r\n  }\r\n\r\n  execute(command, value) {\r\n    const res = command.execute(this.currentValue, value);\r\n    this.commandHistory.push({ command, value, res });\r\n    this.currentValue = res;\r\n    console.log(\"commandHistory\", this.commandHistory);\r\n    return res;\r\n  }\r\n\r\n  undo() {\r\n    if (this.commandHistory.length === 0) {\r\n      console.log(\"undo\", this.commandHistory);\r\n      return this.currentValue;\r\n    }\r\n    const commandObject = this.commandHistory.pop();\r\n    if (commandObject.command) {\r\n      this.currentValue = commandObject.command.undo(\r\n        commandObject.res,\r\n        commandObject.value\r\n      );\r\n    } else {\r\n      // Handle case where commandObject.command is undefined\r\n    }\r\n    return this.currentValue;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://innowise-internship/./src/utilities/calculator.utility.js?");

/***/ }),

/***/ "./src/utilities/commands.js":
/*!***********************************!*\
  !*** ./src/utilities/commands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCommand\": () => (/* binding */ addCommand),\n/* harmony export */   \"cubeCommand\": () => (/* binding */ cubeCommand),\n/* harmony export */   \"cubeRootCommand\": () => (/* binding */ cubeRootCommand),\n/* harmony export */   \"divideCommand\": () => (/* binding */ divideCommand),\n/* harmony export */   \"factorialCommand\": () => (/* binding */ factorialCommand),\n/* harmony export */   \"fractionCommand\": () => (/* binding */ fractionCommand),\n/* harmony export */   \"multiplyCommand\": () => (/* binding */ multiplyCommand),\n/* harmony export */   \"myAbs\": () => (/* binding */ myAbs),\n/* harmony export */   \"percentageCommand\": () => (/* binding */ percentageCommand),\n/* harmony export */   \"powerCommand\": () => (/* binding */ powerCommand),\n/* harmony export */   \"rootCommand\": () => (/* binding */ rootCommand),\n/* harmony export */   \"squareCommand\": () => (/* binding */ squareCommand),\n/* harmony export */   \"squareRootCommand\": () => (/* binding */ squareRootCommand),\n/* harmony export */   \"subtractCommand\": () => (/* binding */ subtractCommand),\n/* harmony export */   \"tenInPowwer\": () => (/* binding */ tenInPowwer),\n/* harmony export */   \"toggleSignCommand\": () => (/* binding */ toggleSignCommand)\n/* harmony export */ });\nfunction myAbs(a) {\r\n  if (a < 0) {\r\n    return -1 * a;\r\n  } else {\r\n    return a;\r\n  }\r\n}\r\n\r\nconst addCommand = {\r\n  execute: function (num1, num2) {\r\n    return +num1 + +num2;\r\n  },\r\n  undo: function (res, num2) {\r\n    return res - num2;\r\n  },\r\n};\r\n\r\nconst subtractCommand = {\r\n  execute: function (num1, num2) {\r\n    return num1 - num2;\r\n  },\r\n  undo: function (res, num2) {\r\n    return res + +num2;\r\n  },\r\n};\r\n\r\nconst multiplyCommand = {\r\n  execute: function (num1, num2) {\r\n    return num1 * num2;\r\n  },\r\n  undo: function (res, num2) {\r\n    return res / num2;\r\n  },\r\n};\r\n\r\nconst divideCommand = {\r\n  execute: function (num1, num2) {\r\n    return num1 / num2;\r\n  },\r\n  undo: function (res, num2) {\r\n    return res * num2;\r\n  },\r\n};\r\n\r\nconst percentageCommand = {\r\n  execute: function (num) {\r\n    return num / 100;\r\n  },\r\n  undo: function (res) {\r\n    return res * 100;\r\n  },\r\n};\r\n\r\nconst toggleSignCommand = {\r\n  execute: function (num) {\r\n    return -num;\r\n  },\r\n};\r\n\r\nconst powerCommand = {\r\n  execute: function (num1, num2) {\r\n    return num1 ** num2;\r\n  },\r\n  undo: function (res, num2) {\r\n    return res * num2;\r\n  },\r\n};\r\n\r\nconst squareCommand = {\r\n  execute: function (num) {\r\n    return num ** 2;\r\n  },\r\n  undo: function (res) {\r\n    if (res < 0) {\r\n      return NaN;\r\n    }\r\n    let guess = res;\r\n    for (let i = 0; i < 10; i++) {\r\n      guess = (guess + res / guess) / 2;\r\n    }\r\n    return guess;\r\n  },\r\n};\r\n\r\nconst squareRootCommand = {\r\n  execute: function (num) {\r\n    return squareCommand.undo(num);\r\n  },\r\n  undo: function (res) {\r\n    return squareCommand.execute(res);\r\n  },\r\n};\r\n\r\nconst cubeCommand = {\r\n  execute: function (num) {\r\n    return num ** 3;\r\n  },\r\n  undo: function (res) {\r\n    if (res >= 0) {\r\n      return powerCommand.execute(res, 1 / 3);\r\n    } else {\r\n      return -1 * powerCommand.execute(myAbs(res), 1 / 3);\r\n    }\r\n  },\r\n};\r\n\r\nconst tenInPowwer = {\r\n  execute: function (num) {\r\n    return 10 ** num;\r\n  },\r\n  undo: function (res, num) {\r\n    if (res >= 0) {\r\n      return powerCommand.execute(res, 1 / num);\r\n    } else {\r\n      return -1 * powerCommand.execute(myAbs(res), 1 / num);\r\n    }\r\n  },\r\n};\r\n\r\nconst cubeRootCommand = {\r\n  execute: function (num) {\r\n    return cubeCommand.undo(num);\r\n  },\r\n  undo: function (res) {\r\n    return cubeCommand.execute(res);\r\n  },\r\n};\r\n\r\nconst fractionCommand = {\r\n  execute: function (num) {\r\n    return 1 / num;\r\n  },\r\n  undo: function (res) {\r\n    return 1 / res;\r\n  },\r\n};\r\n\r\nconst rootCommand = {\r\n  execute: function (num1, num2) {\r\n    return powerCommand.execute(num1, 1 / num2);\r\n  },\r\n  undo: function (res, num2) {\r\n    return powerCommand.execute(res, num2);\r\n  },\r\n};\r\n\r\nconst factorialCommand = {\r\n  execute: function (num1) {\r\n    if (num1 < 0) {\r\n      return;\r\n    }\r\n    let result = 1;\r\n    for (let i = 2; i <= num1; i++) {\r\n      result *= i;\r\n    }\r\n    return result;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://innowise-internship/./src/utilities/commands.js?");

/***/ }),

/***/ "./src/utilities/values.utility.js":
/*!*****************************************!*\
  !*** ./src/utilities/values.utility.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"digit\": () => (/* binding */ digit),\n/* harmony export */   \"functions\": () => (/* binding */ functions),\n/* harmony export */   \"memory\": () => (/* binding */ memory),\n/* harmony export */   \"signs\": () => (/* binding */ signs)\n/* harmony export */ });\nconst digit = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \".\"];\r\nconst signs = [\"-\", \"+\", \"x\", \"/\", \"y√x\", \"xy\"];\r\n\r\nconst functions = [\r\n  \"+/-\",\r\n  \"%\",\r\n  \"3√x\",\r\n  \"√x\",\r\n  \"1/x\",\r\n  \"x!\",\r\n  \"10x\",\r\n  \"x2\",\r\n  \"x3\",\r\n];\r\n\r\nconst memory = [\"MC\", \"M+\", \"M-\", \"MR\", \"Back\"];\r\n\n\n//# sourceURL=webpack://innowise-internship/./src/utilities/values.utility.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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