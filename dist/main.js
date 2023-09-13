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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@100;200;300;400;500&family=Poppins:wght@200;300;400;600&family=Roboto+Slab:wght@400;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --side-bar-white: rgba(249, 249, 249, 255);\r\n    --orange: rgba(250, 150, 57, 255);\r\n    --bg-white: rgba(255, 255, 255, 255);\r\n    --grey: rgba(238, 238, 238, 255);\r\n    --width-sidebar: 20vw;\r\n}\r\n\r\nbody {\r\n    background-color: var(--bg-white);\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n.left-section {\r\n    /* display: none; */\r\n    position: relative;\r\n    background-color: var(--side-bar-white);\r\n    width: 18vw;\r\n    padding-left: 2vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.title {\r\n    width: 100%;\r\n    padding: 40px 0px;\r\n\r\n}\r\n\r\n.title>h1 {\r\n    font-size: 2.5em;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.title>p {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 1.2em;\r\n    font-weight: 100;\r\n}\r\n\r\n.title span {\r\n    color: var(--orange);\r\n}\r\n\r\n/* project link styling */\r\n\r\n.project-links-container {\r\n    position: absolute;\r\n    bottom: 5em;\r\n    width: 80%;\r\n}\r\n\r\n.project-link-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: var(--grey);\r\n    padding-left: .4em;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.project-link-heading button {\r\n    padding: 0px 8px;\r\n    /* background-color: darkgray; */\r\n    border-radius: 5px;\r\n    /* color: var(--bg-white); */\r\n    border: none;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-link-items {\r\n    font-size: 1em;\r\n    margin: 10px 0px;\r\n    padding-left: 1.4em;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-link-items:hover {\r\n    background-color: var(--grey);\r\n}\r\n\r\n.selected-project {\r\n    background-color: var(--grey);\r\n    border-radius: 20px;\r\n}\r\n\r\n.new-project-modal {\r\n    display: none;\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 2;\r\n    padding-top: 12em;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, .4);\r\n    /* Black w/ opacity */\r\n}\r\n\r\n.modal-content-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.2em;\r\n    margin: auto auto;\r\n    align-items: center;\r\n    padding: 2em 1em;\r\n    background-color: var(--bg-white);\r\n    width: 30vw;\r\n    border-radius: 10px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.modal-content-form input {\r\n    padding-left: 12px;\r\n    margin: 0;\r\n    width: 70%;\r\n    height: 2em;\r\n    font-size: large;\r\n\r\n}\r\n\r\n.modal-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1em;\r\n    width: 100%;\r\n}\r\n\r\n.modal-content-form button, .newtask-modal-content-form button {\r\n    border: none;\r\n    background-color: var(--orange);\r\n    font-weight: 600;\r\n    color: var(--bg-white);\r\n    letter-spacing: .2em;\r\n    text-transform: uppercase;\r\n    border-radius: 20px;\r\n    width: 30%;\r\n    padding: 1em;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.modal-content-form-cancel, .modal-task-cancel {\r\n    background-color: red !important;\r\n}\r\n\r\n\r\n/*right-section*/\r\n\r\n.new-task-modal {\r\n    display: none;\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 2;\r\n    padding: 3em 0px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, .4);\r\n    /* Black w/ opacity */\r\n}\r\n\r\n.newtask-modal-content-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.2em;\r\n    margin: auto auto;\r\n    align-items: center;\r\n    padding: 2em 1em;\r\n    background-color: var(--bg-white);\r\n    width: 20em;\r\n    border-radius: 10px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.newtask-modal-content-form input, #task-notes {\r\n    padding-left: 12px;\r\n    margin: 0;\r\n    width: 70%;\r\n    height: 2em;\r\n    font-size: large;\r\n}\r\n\r\n#task-notes {\r\n    /* padding: 1em; */\r\n    height: 10em;\r\n    font-family: 'Poppins', sans-serif;\r\n    resize: none;\r\n}\r\n\r\n.priority_box {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: .8em;\r\n    gap: .5em;\r\n}\r\n\r\n.priority_box input {\r\n    cursor: pointer;\r\n}\r\n\r\n.right-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-left: var(--width-sidebar);\r\n}\r\n\r\n/* Project banner */\r\n.project-banner {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: flex-start;\r\n    padding: 6em 0px 0px 2em;\r\n    background-color: var(--orange);\r\n}\r\n\r\n.project-banner p {\r\n    font-size: 2.5em;\r\n    font-weight: 400;\r\n    color: var(--bg-white);\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n/* Project description  */\r\n.project-description {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2em;\r\n    padding-left: 2.5em;\r\n    padding-top: 2.5em;\r\n    padding-bottom: 2em;\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n    /* background-color: aliceblue; */\r\n}\r\n\r\n\r\n.project-description>.labels {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.project-description>.label-values {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n    margin: 0;\r\n    padding: 2px;\r\n    font-size: .9em;\r\n}\r\n\r\n.priority-buttons {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.priority-buttons button {\r\n    background-color: darkgray;\r\n    border-radius: 10px;\r\n    color: var(--bg-white);\r\n    border: none;\r\n    font-size: .9em;\r\n    width: 5em;\r\n    cursor: pointer;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.label-values>#label-values-date {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n/* project todo section*/\r\n.project-todos {\r\n    display: flex;\r\n    background-color: var(--side-bar-white);\r\n    /* justify-content: space-between; */\r\n    gap: 1em;\r\n    margin: 0px auto;\r\n    width: 95%;\r\n    height: fit-content;\r\n    padding: .5em 1em;\r\n}\r\n\r\n.todo-container {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5em;\r\n    min-height: 50vh;\r\n}\r\n\r\n.todo-container-heading {\r\n    position: relative;\r\n    background-color: var(--bg-white);\r\n    /* flex: 1; */\r\n    font-size: 1em;\r\n    padding-left: 1em;\r\n    height: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: .5em;\r\n}\r\n\r\n.todo-container-heading button {\r\n    position: absolute;\r\n    right: .4em;\r\n    background-color: darkgray;\r\n    border-radius: 5px;\r\n    color: var(--bg-white);\r\n    border: none;\r\n    font-size: 1.1em;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-card {\r\n    /* flex: 1; */\r\n    background-color: var(--grey);\r\n    width: inherit;\r\n    height: 10em;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n#todo_date {\r\n    padding-bottom: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    gap: .5em;\r\n    font-size: .8em;\r\n    color: black;\r\n}\r\n\r\n\r\n#todo_title {\r\n    flex: 3;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 1.3em;\r\n    width: 100%;\r\n}\r\n\r\n.todo_title_text {\r\n    display: flex;\r\n}\r\n\r\n#todo_time_delete {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    gap: .3em;\r\n    font-size: .8em;\r\n    color: black;\r\n}\r\n\r\n#todo_time_delete span {\r\n    flex: 3;\r\n}\r\n\r\n#todo_time_delete button {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    width: 4em;\r\n    cursor: pointer;\r\n}\r\n\r\n/*  */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-js-top/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-js-top/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-js-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/creatingProjects.js":
/*!*********************************!*\
  !*** ./src/creatingProjects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectEventListner: () => (/* binding */ projectEventListner),\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),\n/* harmony export */   selectedProject: () => (/* binding */ selectedProject)\n/* harmony export */ });\n\r\n\r\nfunction projectEventListner() {\r\n    //event listner for creating new Project\r\n    const addProject = document.querySelector(\".addNewProjectBtn\");\r\n    addProject.addEventListener(\"click\", showNewProjectModal);\r\n\r\n    const cancelProjectForm = document.querySelector(\".modal-content-form-cancel\");\r\n    cancelProjectForm.addEventListener(\"click\", closeNewProjectModal);\r\n\r\n    const submitProjectForm = document.querySelector(\".modal-content-form-submit\");\r\n    submitProjectForm.addEventListener(\"click\", processNewProjectModalInput);\r\n\r\n    displayProject(projectList);\r\n}\r\n\r\n//get project list from local storage or make new\r\nlet defaultProjectList = [];\r\nlet projectList = localStorage.getItem(\"myProjectList\");\r\nprojectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));\r\n\r\n//process the input and prepare to create project\r\nconst processNewProjectModalInput = (e) => {\r\n    let projectName = document.querySelector('#proj-name').value;\r\n    let projectDueDate = document.querySelector('#due-date').value;\r\n    let dataProject = findNextDataset();\r\n\r\n    const newProject = CreateProject(projectName, dataProject, projectDueDate);\r\n\r\n    projectList.push(newProject);\r\n    saveToLocalStorage();\r\n\r\n    addProject(projectName, dataProject);\r\n    closeNewProjectModal();\r\n    e.preventDefault();\r\n\r\n}\r\n\r\n//save projectList and last id data on Local Storage\r\nfunction saveToLocalStorage() {\r\n    localStorage.setItem(\"myProjectList\", JSON.stringify(projectList));\r\n    localStorage.setItem(\"currentId\", (id).toString());\r\n}\r\n\r\n//create project factory function\r\nconst CreateProject = (name, dataProject, dueDate) => {\r\n    let taskList = [];\r\n    let taskNum = taskList.length;\r\n    return {\r\n        name,\r\n        dataProject,\r\n        dueDate,\r\n        taskList,\r\n        taskNum\r\n    }\r\n}\r\n\r\n//show new project modal\r\nconst showNewProjectModal = () => {\r\n    let newProjectModal = document.querySelector('.new-project-modal');\r\n    newProjectModal.style.display = \"block\";\r\n    //focus on input feild\r\n    document.querySelector('#proj-name').focus();\r\n}\r\n\r\n//close new project modal\r\nconst closeNewProjectModal = () => {\r\n    let newProjectModal = document.querySelector('.new-project-modal');\r\n    let newProjectInput = document.querySelector('.modal-content-form');\r\n    //clear the form\r\n    newProjectInput.value = \"\";\r\n    newProjectModal.style.display = \"none\";\r\n}\r\n\r\n//display all the projects under project tab\r\nconst displayProject = (array) => {\r\n    array.forEach(project => {\r\n        addProject(project.name, project.dataProject);\r\n    });\r\n}\r\n\r\n//create a project and add it to the list of proj in html\r\nconst addProject = (project_title, dataProject) => {\r\n    // console.log(\"addProject is running\")\r\n    // console.log(dataProject)\r\n    const newProjectContainer = document.querySelector(\".project-links-container\")\r\n    const newProjectDiv = document.createElement('div');\r\n\r\n    newProjectDiv.setAttribute(\"data-project\", `${dataProject}`);\r\n    newProjectDiv.textContent = project_title;\r\n    newProjectDiv.classList.add(\"project-link-items\");\r\n    newProjectContainer.appendChild(newProjectDiv);\r\n    if (dataProject === localStorage.getItem(\"currentId\")) {\r\n        newProjectDiv.classList.add(\".selected_project\");\r\n    }\r\n}\r\n\r\nfunction selectedProject() {\r\n    const projects = document.querySelectorAll('.project-link-items');\r\n    projects.forEach(project => {\r\n        project.addEventListener(\"click\", e => {\r\n            // Remove the \"selected-project\" class from all projects\r\n            projects.forEach(otherProject => {\r\n                otherProject.classList.remove(\"selected-project\");\r\n            });\r\n\r\n            // Add the \"selected-project\" class to the clicked project\r\n            e.target.classList.add(\"selected-project\");\r\n            updateTitle(e.target)\r\n            // updateDescription(project);\r\n            updateDescription(e.target.getAttribute(\"data-project\"));\r\n        });\r\n\r\n    });\r\n\r\n}\r\n\r\n//updating the banner to current selected project\r\nfunction updateTitle(nameNode) {\r\n    const title = document.querySelector(\".project-banner-text\");\r\n    // console.log(nameNode.textContent); // This line logs the content of nameNode.textContent\r\n    title.textContent = nameNode.textContent; // This line updates the content of the element with the class \"project-banner-text\"\r\n    title.style.textTransform = \"capitalize\";\r\n}\r\n\r\n//updating the description of the project\r\nfunction updateDescription(data_project) {\r\n    const dueDateDom = document.getElementById(\"label-values-date\");\r\n\r\n    projectList.forEach(project => {\r\n\r\n        if (data_project == project.dataProject) {\r\n            let dateString = project.dueDate;\r\n            let date = Date.parse(dateString);// as Datetimeformat takes date as object\r\n            date = formattedDate(date);\r\n            dueDateDom.textContent = date;\r\n        }\r\n\r\n    });\r\n}\r\n\r\n//formatting the date\r\nfunction formattedDate(date) {\r\n    // request a weekday along with a long date\r\n    let options = {\r\n        weekday: \"long\",\r\n        year: \"numeric\",\r\n        month: \"long\",\r\n        day: \"numeric\",\r\n    };\r\n    return (new Intl.DateTimeFormat(\"en-GB\", options).format(date));\r\n}\r\n// find next data-set\r\nconst findNextDataset = () => {\r\n    const allProjects = document.querySelectorAll(\"[data-project]\");\r\n    return allProjects.length;\r\n}\r\n\n\n//# sourceURL=webpack://todolist-js-top/./src/creatingProjects.js?");

/***/ }),

/***/ "./src/creatingTasks.js":
/*!******************************!*\
  !*** ./src/creatingTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   id: () => (/* binding */ id),\n/* harmony export */   processDateData: () => (/* binding */ processDateData),\n/* harmony export */   taskEvents: () => (/* binding */ taskEvents)\n/* harmony export */ });\n/* harmony import */ var _creatingProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatingProjects */ \"./src/creatingProjects.js\");\n\r\n\r\nfunction taskEvents() {\r\n    const addTask = document.querySelector(\"#add_new_task\");\r\n    addTask.addEventListener(\"click\", showNewTaskModal);\r\n\r\n    const cancelTaskBtn = document.querySelector(\".modal-task-cancel\");\r\n    cancelTaskBtn.addEventListener(\"click\", closeNewTaskModal);\r\n\r\n    const submitTaskBtn = document.querySelector(\".modal-task-submit\");\r\n    submitTaskBtn.addEventListener(\"click\", processNewTaskInput);\r\n\r\n}\r\n\r\nconst CreateTask = (dataProject, id, title, details, completed, date) => {\r\n    return {\r\n        dataProject,\r\n        id,\r\n        title,\r\n        details,\r\n        completed: completed,\r\n        date: date\r\n    }\r\n}\r\n//show new task modal\r\nconst showNewTaskModal = () => {\r\n    let newTaskModal = document.querySelector('.new-task-modal');\r\n    newTaskModal.style.display = \"block\";\r\n    document.querySelector('#task-name').focus();\r\n}\r\n//hide new task modal\r\nconst closeNewTaskModal = () => {\r\n    let newTaskModal = document.querySelector('.new-task-modal');\r\n    let newTaskModalForm = document.querySelector('.newtask-modal-content-form');\r\n    newTaskModalForm.value = \"\";\r\n    newTaskModal.style.display = \"none\";\r\n}\r\n\r\n//get id from local storage or get a new one\r\nlet defaultId = 0;\r\nlet id = Number(localStorage.getItem(\"currentId\")) || defaultId;\r\n\r\n//processing data from add task\r\nfunction processNewTaskInput(e) {\r\n    let taskName = document.getElementById(\"task-name\").value;\r\n    let taskDueDate = document.getElementById(\"task-due-date\").value;\r\n    let taskNotes = document.getElementById(\"task-notes\").value;\r\n\r\n    let dataProject = findCurrentDataProject();\r\n    let date = processDateInput(dateInput);\r\n    let taskId = id;\r\n\r\n    const newTask = CreateTask(dataProject, taskId, taskName, taskNotes, false, taskDueDate);\r\n    _creatingProjects__WEBPACK_IMPORTED_MODULE_0__.projectList[dataProject].taskList.push(newTask);\r\n    id++;\r\n    (0,_creatingProjects__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n\r\n    addTask(taskId, title, details, date);\r\n    closeNewTaskModal();\r\n    e.preventDefault();\r\n\r\n}\r\n\r\n//process date input function\r\nfunction processDateData(date) {\r\n    let formattedDate;\r\n    if (!date) {\r\n        formattedDate = \"No Due Date\";\r\n    }\r\n    else {\r\n        formattedDate = date;\r\n    }\r\n    return formattedDate;\r\n}\r\n\r\n//display all tasks in the project\r\nfunction displayTasks(dataProject) {\r\n    _creatingProjects__WEBPACK_IMPORTED_MODULE_0__.projectList[dataProject].taskList.forEach((task) => {\r\n        addTask(task.id, task.title, task.details, task.date);\r\n    })\r\n}\r\n\r\n//create task into dom\r\nfunction addTask(taskId, taskName, taskNotes, taskDueDate) {\r\n    const taskContainer = document.querySelector('.todo-container');\r\n    const newTaskCard = document.createElement('div');\r\n    newTaskCard.innerHTML = `\r\n    <div class=\"todo-card\">\r\n    <div id=\"todo_date\">\r\n        <span> ${taskDueDate} </span>\r\n    </div>\r\n    <div id=\"todo_title\">\r\n        <div class=\"todo_title_text\">\r\n            ${taskName}\r\n        </div>\r\n    </div>\r\n    <div id=\"todo_time_delete\">\r\n        <span>9:30 - 8:30</span>\r\n        <button>Done</button>\r\n        <button>Delete</button>\r\n        <button>Edit</button>\r\n    </div>\r\n    </div>\r\n    `\r\n    // newTaskCard.classList.add('todo-card');\r\n    taskContainer.appendChild(newTaskCard);\r\n    console.log(newTaskCard)\r\n}\r\n\r\n//update the title of project banner\r\n\r\n\r\n//function to find the data-project index when adding new tasks\r\nfunction findCurrentDataProject() {\r\n    const selected = document.querySelector(\".selected\");\r\n    return selected.dataset.project;\r\n}\r\n\r\n// function \r\n\r\n\n\n//# sourceURL=webpack://todolist-js-top/./src/creatingTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _creatingProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatingProjects */ \"./src/creatingProjects.js\");\n/* harmony import */ var _creatingTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creatingTasks */ \"./src/creatingTasks.js\");\n\r\n\r\n\r\nconsole.log(\"page loaded\")\r\n\r\n;(0,_creatingProjects__WEBPACK_IMPORTED_MODULE_1__.projectEventListner)();\r\n(0,_creatingProjects__WEBPACK_IMPORTED_MODULE_1__.selectedProject)();\r\n(0,_creatingTasks__WEBPACK_IMPORTED_MODULE_2__.taskEvents)()\n\n//# sourceURL=webpack://todolist-js-top/./src/index.js?");

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