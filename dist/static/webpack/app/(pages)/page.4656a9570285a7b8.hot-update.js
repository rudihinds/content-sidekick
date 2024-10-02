"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/page",{

/***/ "(app-pages-browser)/./src/components/SearchSection.tsx":
/*!******************************************!*\
  !*** ./src/components/SearchSection.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchSection: function() { return /* binding */ SearchSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _types_googleTrends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/googleTrends */ \"(app-pages-browser)/./src/types/googleTrends.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SearchSection(param) {\n    let { searchTerm, setSearchTerm, handleNewSearch } = param;\n    _s();\n    const [timeRange, setTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsTimeRange.PAST_7_DAYS);\n    const [geo, setGeo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsGeo.GLOBAL);\n    const [searchType, setSearchType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsSearchType.WEB_SEARCH);\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsMainCategory.ALL_CATEGORIES);\n    const handleSearch = ()=>{\n        const params = {\n            timeRange,\n            geo,\n            searchType,\n            category\n        };\n        handleNewSearch(params);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            className: \"p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-4 text-2xl font-bold\",\n                    children: \"New Search\"\n                }, void 0, false, {\n                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                type: \"text\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value),\n                                placeholder: \"Enter new search term\",\n                                className: \"flex-grow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setTimeRange(e.target.value),\n                                    className: \"w-full p-2 border rounded\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            children: \"Select Time Range\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        Object.entries(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsTimeRange).map((param)=>{\n                                            let [key, value] = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: value,\n                                                children: key.split(\"_\").map((word)=>word.charAt(0) + word.slice(1).toLowerCase()).join(\" \")\n                                            }, key, false, {\n                                                fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setGeo(e.target.value),\n                                    className: \"w-full p-2 border rounded\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            children: \"Select Region\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        Object.entries(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsGeo).map((param)=>{\n                                            let [key, value] = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: value,\n                                                children: key.split(\"_\").map((word)=>word.charAt(0) + word.slice(1).toLowerCase()).join(\" \")\n                                            }, key, false, {\n                                                fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setSearchType(e.target.value),\n                                    className: \"w-full p-2 border rounded\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            children: \"Select Search Type\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        Object.entries(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsSearchType).map((param)=>{\n                                            let [key, value] = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: value,\n                                                children: key.split(\"_\").map((word)=>word.charAt(0) + word.slice(1).toLowerCase()).join(\" \")\n                                            }, key, false, {\n                                                fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setCategory(parseInt(e.target.value)),\n                                    className: \"w-full p-2 border rounded\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            children: \"Select Category\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this),\n                                        Object.entries(_types_googleTrends__WEBPACK_IMPORTED_MODULE_5__.GoogleTrendsMainCategory).map((param)=>{\n                                            let [key, value] = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: value.toString(),\n                                                children: key.split(\"_\").map((word)=>word.charAt(0) + word.slice(1).toLowerCase()).join(\" \")\n                                            }, key, false, {\n                                                fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: handleSearch,\n                            className: \"w-full\",\n                            children: \"Search Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rudihinds/code/content-sidekick/src/components/SearchSection.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchSection, \"WPJ+ITbvm8AceiMFQLZmiw7T6xs=\");\n_c = SearchSection;\nvar _c;\n$RefreshReg$(_c, \"SearchSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDaUI7QUFDWDtBQUNFO0FBT2xCO0FBUXZCLFNBQVNVLGNBQWMsS0FBa0U7UUFBbEUsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLGVBQWUsRUFBc0IsR0FBbEU7O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBd0JLLHNFQUFxQkEsQ0FBQ1UsV0FBVztJQUNuRyxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR2pCLCtDQUFRQSxDQUFrQk0sZ0VBQWVBLENBQUNZLE1BQU07SUFDdEUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBeUJPLHVFQUFzQkEsQ0FBQ2MsVUFBVTtJQUN0RyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3ZCLCtDQUFRQSxDQUEyQlEseUVBQXdCQSxDQUFDZ0IsY0FBYztJQUUxRyxNQUFNQyxlQUFlO1FBQ25CLE1BQU1DLFNBQWtDO1lBQ3RDYjtZQUNBRztZQUNBRztZQUNBRztRQUNGO1FBQ0FWLGdCQUFnQmM7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ3pCLHFEQUFJQTtrQkFDSCw0RUFBQ0MsNERBQVdBO1lBQUN5QixXQUFVOzs4QkFDckIsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN4Qyw4REFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBSUYsV0FBVTtzQ0FDYiw0RUFBQ3hCLHVEQUFLQTtnQ0FDSjJCLE1BQUs7Z0NBQ0xDLE9BQU9yQjtnQ0FDUHNCLFVBQVUsQ0FBQ0MsSUFBTXRCLGNBQWNzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdDSSxhQUFZO2dDQUNaUixXQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0osVUFBVSxDQUFDQyxJQUFNbkIsYUFBYW1CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDNUNKLFdBQVU7O3NEQUVWLDhEQUFDVTs0Q0FBT04sT0FBTTtzREFBRzs7Ozs7O3dDQUNoQk8sT0FBT0MsT0FBTyxDQUFDbEMsc0VBQXFCQSxFQUFFbUMsR0FBRyxDQUFDO2dEQUFDLENBQUNDLEtBQUtWLE1BQU07aUVBQ3RELDhEQUFDTTtnREFBaUJOLE9BQU9BOzBEQUN0QlUsSUFBSUMsS0FBSyxDQUFDLEtBQUtGLEdBQUcsQ0FBQ0csQ0FBQUEsT0FBUUEsS0FBS0MsTUFBTSxDQUFDLEtBQUtELEtBQUtFLEtBQUssQ0FBQyxHQUFHQyxXQUFXLElBQUlDLElBQUksQ0FBQzsrQ0FEcEVOOzs7Ozs7Ozs7Ozs7OENBS2pCLDhEQUFDTDtvQ0FDQ0osVUFBVSxDQUFDQyxJQUFNaEIsT0FBT2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDdENKLFdBQVU7O3NEQUVWLDhEQUFDVTs0Q0FBT04sT0FBTTtzREFBRzs7Ozs7O3dDQUNoQk8sT0FBT0MsT0FBTyxDQUFDakMsZ0VBQWVBLEVBQUVrQyxHQUFHLENBQUM7Z0RBQUMsQ0FBQ0MsS0FBS1YsTUFBTTtpRUFDaEQsOERBQUNNO2dEQUFpQk4sT0FBT0E7MERBQ3RCVSxJQUFJQyxLQUFLLENBQUMsS0FBS0YsR0FBRyxDQUFDRyxDQUFBQSxPQUFRQSxLQUFLQyxNQUFNLENBQUMsS0FBS0QsS0FBS0UsS0FBSyxDQUFDLEdBQUdDLFdBQVcsSUFBSUMsSUFBSSxDQUFDOytDQURwRU47Ozs7Ozs7Ozs7Ozs4Q0FLakIsOERBQUNMO29DQUNDSixVQUFVLENBQUNDLElBQU1iLGNBQWNhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDN0NKLFdBQVU7O3NEQUVWLDhEQUFDVTs0Q0FBT04sT0FBTTtzREFBRzs7Ozs7O3dDQUNoQk8sT0FBT0MsT0FBTyxDQUFDaEMsdUVBQXNCQSxFQUFFaUMsR0FBRyxDQUFDO2dEQUFDLENBQUNDLEtBQUtWLE1BQU07aUVBQ3ZELDhEQUFDTTtnREFBaUJOLE9BQU9BOzBEQUN0QlUsSUFBSUMsS0FBSyxDQUFDLEtBQUtGLEdBQUcsQ0FBQ0csQ0FBQUEsT0FBUUEsS0FBS0MsTUFBTSxDQUFDLEtBQUtELEtBQUtFLEtBQUssQ0FBQyxHQUFHQyxXQUFXLElBQUlDLElBQUksQ0FBQzsrQ0FEcEVOOzs7Ozs7Ozs7Ozs7OENBS2pCLDhEQUFDTDtvQ0FDQ0osVUFBVSxDQUFDQyxJQUFNVixZQUFZeUIsU0FBU2YsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUNwREosV0FBVTs7c0RBRVYsOERBQUNVOzRDQUFPTixPQUFNO3NEQUFHOzs7Ozs7d0NBQ2hCTyxPQUFPQyxPQUFPLENBQUMvQix5RUFBd0JBLEVBQUVnQyxHQUFHLENBQUM7Z0RBQUMsQ0FBQ0MsS0FBS1YsTUFBTTtpRUFDekQsOERBQUNNO2dEQUFpQk4sT0FBT0EsTUFBTWtCLFFBQVE7MERBQ3BDUixJQUFJQyxLQUFLLENBQUMsS0FBS0YsR0FBRyxDQUFDRyxDQUFBQSxPQUFRQSxLQUFLQyxNQUFNLENBQUMsS0FBS0QsS0FBS0UsS0FBSyxDQUFDLEdBQUdDLFdBQVcsSUFBSUMsSUFBSSxDQUFDOytDQURwRU47Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNbkIsOERBQUNyQyx5REFBTUE7NEJBQUM4QyxTQUFTekI7NEJBQWNFLFdBQVU7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVEO0dBakZnQmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFNlY3Rpb24udHN4PzJkOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIEdvb2dsZVRyZW5kc1RpbWVSYW5nZSxcbiAgR29vZ2xlVHJlbmRzR2VvLFxuICBHb29nbGVUcmVuZHNTZWFyY2hUeXBlLFxuICBHb29nbGVUcmVuZHNNYWluQ2F0ZWdvcnksXG4gIEdvb2dsZVRyZW5kc1F1ZXJ5UGFyYW1zXG59IGZyb20gJ0AvdHlwZXMvZ29vZ2xlVHJlbmRzJztcblxuaW50ZXJmYWNlIFNlYXJjaFNlY3Rpb25Qcm9wcyB7XG4gIHNlYXJjaFRlcm06IHN0cmluZztcbiAgc2V0U2VhcmNoVGVybTogKHRlcm06IHN0cmluZykgPT4gdm9pZDtcbiAgaGFuZGxlTmV3U2VhcmNoOiAocGFyYW1zOiBHb29nbGVUcmVuZHNRdWVyeVBhcmFtcykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFNlY3Rpb24oeyBzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtLCBoYW5kbGVOZXdTZWFyY2ggfTogU2VhcmNoU2VjdGlvblByb3BzKSB7XG4gIGNvbnN0IFt0aW1lUmFuZ2UsIHNldFRpbWVSYW5nZV0gPSB1c2VTdGF0ZTxHb29nbGVUcmVuZHNUaW1lUmFuZ2U+KEdvb2dsZVRyZW5kc1RpbWVSYW5nZS5QQVNUXzdfREFZUyk7XG4gIGNvbnN0IFtnZW8sIHNldEdlb10gPSB1c2VTdGF0ZTxHb29nbGVUcmVuZHNHZW8+KEdvb2dsZVRyZW5kc0dlby5HTE9CQUwpO1xuICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSB1c2VTdGF0ZTxHb29nbGVUcmVuZHNTZWFyY2hUeXBlPihHb29nbGVUcmVuZHNTZWFyY2hUeXBlLldFQl9TRUFSQ0gpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlPEdvb2dsZVRyZW5kc01haW5DYXRlZ29yeT4oR29vZ2xlVHJlbmRzTWFpbkNhdGVnb3J5LkFMTF9DQVRFR09SSUVTKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zOiBHb29nbGVUcmVuZHNRdWVyeVBhcmFtcyA9IHtcbiAgICAgIHRpbWVSYW5nZSxcbiAgICAgIGdlbyxcbiAgICAgIHNlYXJjaFR5cGUsXG4gICAgICBjYXRlZ29yeVxuICAgIH07XG4gICAgaGFuZGxlTmV3U2VhcmNoKHBhcmFtcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0yeGwgZm9udC1ib2xkXCI+TmV3IFNlYXJjaDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHNlYXJjaCB0ZXJtXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZVJhbmdlKGUudGFyZ2V0LnZhbHVlIGFzIEdvb2dsZVRyZW5kc1RpbWVSYW5nZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRpbWUgUmFuZ2U8L29wdGlvbj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKEdvb2dsZVRyZW5kc1RpbWVSYW5nZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAge2tleS5zcGxpdCgnXycpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VvKGUudGFyZ2V0LnZhbHVlIGFzIEdvb2dsZVRyZW5kc0dlbyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFJlZ2lvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoR29vZ2xlVHJlbmRzR2VvKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7a2V5LnNwbGl0KCdfJykubWFwKHdvcmQgPT4gd29yZC5jaGFyQXQoMCkgKyB3b3JkLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkpLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEdvb2dsZVRyZW5kc1NlYXJjaFR5cGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBTZWFyY2ggVHlwZTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoR29vZ2xlVHJlbmRzU2VhcmNoVHlwZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAge2tleS5zcGxpdCgnXycpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIGFzIEdvb2dsZVRyZW5kc01haW5DYXRlZ29yeSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IENhdGVnb3J5PC9vcHRpb24+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhHb29nbGVUcmVuZHNNYWluQ2F0ZWdvcnkpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlLnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgICAgICAge2tleS5zcGxpdCgnXycpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGNsYXNzTmFtZT1cInctZnVsbFwiPlNlYXJjaCBEYXRhPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJbnB1dCIsIkJ1dHRvbiIsIkdvb2dsZVRyZW5kc1RpbWVSYW5nZSIsIkdvb2dsZVRyZW5kc0dlbyIsIkdvb2dsZVRyZW5kc1NlYXJjaFR5cGUiLCJHb29nbGVUcmVuZHNNYWluQ2F0ZWdvcnkiLCJTZWFyY2hTZWN0aW9uIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJoYW5kbGVOZXdTZWFyY2giLCJ0aW1lUmFuZ2UiLCJzZXRUaW1lUmFuZ2UiLCJQQVNUXzdfREFZUyIsImdlbyIsInNldEdlbyIsIkdMT0JBTCIsInNlYXJjaFR5cGUiLCJzZXRTZWFyY2hUeXBlIiwiV0VCX1NFQVJDSCIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJBTExfQ0FURUdPUklFUyIsImhhbmRsZVNlYXJjaCIsInBhcmFtcyIsImNsYXNzTmFtZSIsImgyIiwiZGl2IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJvcHRpb24iLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJ3b3JkIiwiY2hhckF0Iiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchSection.tsx\n"));

/***/ })

});