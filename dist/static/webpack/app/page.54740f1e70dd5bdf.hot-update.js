"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/types/googleTrends.ts":
/*!***********************************!*\
  !*** ./src/types/googleTrends.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GoogleTrendsCategory: function() { return /* binding */ GoogleTrendsCategory; },\n/* harmony export */   GoogleTrendsGeo: function() { return /* binding */ GoogleTrendsGeo; },\n/* harmony export */   GoogleTrendsSearchType: function() { return /* binding */ GoogleTrendsSearchType; },\n/* harmony export */   GoogleTrendsTimeRange: function() { return /* binding */ GoogleTrendsTimeRange; }\n/* harmony export */ });\n// Time ranges for Google Trends queries\nvar GoogleTrendsTimeRange;\n(function(GoogleTrendsTimeRange) {\n    GoogleTrendsTimeRange[\"PAST_HOUR\"] = \"now 1-H\";\n    GoogleTrendsTimeRange[\"PAST_4_HOURS\"] = \"now 4-H\";\n    GoogleTrendsTimeRange[\"PAST_DAY\"] = \"now 1-d\";\n    GoogleTrendsTimeRange[\"PAST_7_DAYS\"] = \"now 7-d\";\n    GoogleTrendsTimeRange[\"PAST_30_DAYS\"] = \"today 1-m\";\n    GoogleTrendsTimeRange[\"PAST_90_DAYS\"] = \"today 3-m\";\n    GoogleTrendsTimeRange[\"PAST_12_MONTHS\"] = \"today 12-m\";\n    GoogleTrendsTimeRange[\"PAST_5_YEARS\"] = \"today 5-y\";\n    GoogleTrendsTimeRange[\"ALL_TIME\"] = \"all\";\n})(GoogleTrendsTimeRange || (GoogleTrendsTimeRange = {}));\nvar GoogleTrendsGeo;\n(function(GoogleTrendsGeo) {\n    GoogleTrendsGeo[\"GLOBAL\"] = \"\";\n    GoogleTrendsGeo[\"UNITED_STATES\"] = \"US\";\n    GoogleTrendsGeo[\"UNITED_KINGDOM\"] = \"GB\";\n    GoogleTrendsGeo[\"CANADA\"] = \"CA\";\n    GoogleTrendsGeo[\"AUSTRALIA\"] = \"AU\";\n    GoogleTrendsGeo[\"INDIA\"] = \"IN\";\n    GoogleTrendsGeo[\"GERMANY\"] = \"DE\";\n    GoogleTrendsGeo[\"FRANCE\"] = \"FR\";\n    GoogleTrendsGeo[\"BRAZIL\"] = \"BR\";\n    GoogleTrendsGeo[\"JAPAN\"] = \"JP\";\n})(GoogleTrendsGeo || (GoogleTrendsGeo = {}));\nvar GoogleTrendsSearchType;\n(function(GoogleTrendsSearchType) {\n    GoogleTrendsSearchType[\"WEB_SEARCH\"] = \"web\";\n    GoogleTrendsSearchType[\"YOUTUBE_SEARCH\"] = \"youtube\";\n})(GoogleTrendsSearchType || (GoogleTrendsSearchType = {}));\nvar GoogleTrendsCategory;\n(function(GoogleTrendsCategory) {\n    GoogleTrendsCategory[\"ALL\"] = \"ALL\";\n    GoogleTrendsCategory[\"ARTS_ENTERTAINMENT\"] = \"3\";\n    GoogleTrendsCategory[\"AUTOS_VEHICLES\"] = \"47\";\n})(GoogleTrendsCategory || (GoogleTrendsCategory = {}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90eXBlcy9nb29nbGVUcmVuZHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHdDQUF3Qzs7VUFDNUJBOzs7Ozs7Ozs7O0dBQUFBLDBCQUFBQTs7VUFhQUM7Ozs7Ozs7Ozs7O0dBQUFBLG9CQUFBQTs7VUFjQUM7OztHQUFBQSwyQkFBQUE7O1VBS0FDOzs7O0dBQUFBLHlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdHlwZXMvZ29vZ2xlVHJlbmRzLnRzPzg5MjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGltZSByYW5nZXMgZm9yIEdvb2dsZSBUcmVuZHMgcXVlcmllc1xuZXhwb3J0IGVudW0gR29vZ2xlVHJlbmRzVGltZVJhbmdlIHtcbiAgUEFTVF9IT1VSID0gXCJub3cgMS1IXCIsXG4gIFBBU1RfNF9IT1VSUyA9IFwibm93IDQtSFwiLFxuICBQQVNUX0RBWSA9IFwibm93IDEtZFwiLFxuICBQQVNUXzdfREFZUyA9IFwibm93IDctZFwiLFxuICBQQVNUXzMwX0RBWVMgPSBcInRvZGF5IDEtbVwiLFxuICBQQVNUXzkwX0RBWVMgPSBcInRvZGF5IDMtbVwiLFxuICBQQVNUXzEyX01PTlRIUyA9IFwidG9kYXkgMTItbVwiLFxuICBQQVNUXzVfWUVBUlMgPSBcInRvZGF5IDUteVwiLFxuICBBTExfVElNRSA9IFwiYWxsXCJcbn1cblxuLy8gR2VvZ3JhcGhpY2FsIHJlZ2lvbnMgZm9yIEdvb2dsZSBUcmVuZHMgcXVlcmllc1xuZXhwb3J0IGVudW0gR29vZ2xlVHJlbmRzR2VvIHtcbiAgR0xPQkFMID0gXCJcIixcbiAgVU5JVEVEX1NUQVRFUyA9IFwiVVNcIixcbiAgVU5JVEVEX0tJTkdET00gPSBcIkdCXCIsXG4gIENBTkFEQSA9IFwiQ0FcIixcbiAgQVVTVFJBTElBID0gXCJBVVwiLFxuICBJTkRJQSA9IFwiSU5cIixcbiAgR0VSTUFOWSA9IFwiREVcIixcbiAgRlJBTkNFID0gXCJGUlwiLFxuICBCUkFaSUwgPSBcIkJSXCIsXG4gIEpBUEFOID0gXCJKUFwiLFxufVxuXG4vLyBTZWFyY2ggdHlwZXMgZm9yIEdvb2dsZSBUcmVuZHMgcXVlcmllc1xuZXhwb3J0IGVudW0gR29vZ2xlVHJlbmRzU2VhcmNoVHlwZSB7XG4gIFdFQl9TRUFSQ0ggPSBcIndlYlwiLFxuICBZT1VUVUJFX1NFQVJDSCA9IFwieW91dHViZVwiLFxufVxuXG5leHBvcnQgZW51bSBHb29nbGVUcmVuZHNDYXRlZ29yeSB7XG4gIEFMTCA9IFwiQUxMXCIsIC8vIENoYW5nZSB0aGlzIGZyb20gXCJcIiB0byBcIkFMTFwiXG4gIEFSVFNfRU5URVJUQUlOTUVOVCA9IFwiM1wiLFxuICBBVVRPU19WRUhJQ0xFUyA9IFwiNDdcIixcbiAgLy8gLi4uIChvdGhlciBjYXRlZ29yaWVzIHJlbWFpbiB0aGUgc2FtZSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVUcmVuZHNRdWVyeVBhcmFtcyB7XG4gIHNlYXJjaFRlcm1zOiBzdHJpbmdbXTtcbiAgdGltZVJhbmdlOiBHb29nbGVUcmVuZHNUaW1lUmFuZ2U7XG4gIGdlbzogR29vZ2xlVHJlbmRzR2VvO1xufSJdLCJuYW1lcyI6WyJHb29nbGVUcmVuZHNUaW1lUmFuZ2UiLCJHb29nbGVUcmVuZHNHZW8iLCJHb29nbGVUcmVuZHNTZWFyY2hUeXBlIiwiR29vZ2xlVHJlbmRzQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/types/googleTrends.ts\n"));

/***/ })

});