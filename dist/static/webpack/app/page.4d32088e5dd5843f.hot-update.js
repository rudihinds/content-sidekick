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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GoogleTrendsCategory: function() { return /* binding */ GoogleTrendsCategory; },\n/* harmony export */   GoogleTrendsGeo: function() { return /* binding */ GoogleTrendsGeo; },\n/* harmony export */   GoogleTrendsSearchType: function() { return /* binding */ GoogleTrendsSearchType; },\n/* harmony export */   GoogleTrendsTimeRange: function() { return /* binding */ GoogleTrendsTimeRange; }\n/* harmony export */ });\n// Time ranges for Google Trends queries\nvar GoogleTrendsTimeRange;\n(function(GoogleTrendsTimeRange) {\n    GoogleTrendsTimeRange[\"PAST_HOUR\"] = \"now 1-H\";\n    GoogleTrendsTimeRange[\"PAST_4_HOURS\"] = \"now 4-H\";\n    GoogleTrendsTimeRange[\"PAST_DAY\"] = \"now 1-d\";\n    GoogleTrendsTimeRange[\"PAST_7_DAYS\"] = \"now 7-d\";\n    GoogleTrendsTimeRange[\"PAST_30_DAYS\"] = \"today 1-m\";\n    GoogleTrendsTimeRange[\"PAST_90_DAYS\"] = \"today 3-m\";\n    GoogleTrendsTimeRange[\"PAST_12_MONTHS\"] = \"today 12-m\";\n})(GoogleTrendsTimeRange || (GoogleTrendsTimeRange = {}));\nvar GoogleTrendsGeo;\n(function(GoogleTrendsGeo) {\n    GoogleTrendsGeo[\"GLOBAL\"] = \"GLOBAL\";\n    GoogleTrendsGeo[\"UNITED_STATES\"] = \"US\";\n    GoogleTrendsGeo[\"UNITED_KINGDOM\"] = \"GB\";\n    GoogleTrendsGeo[\"CANADA\"] = \"CA\";\n    GoogleTrendsGeo[\"AUSTRALIA\"] = \"AU\";\n    GoogleTrendsGeo[\"INDIA\"] = \"IN\";\n    GoogleTrendsGeo[\"GERMANY\"] = \"DE\";\n    GoogleTrendsGeo[\"FRANCE\"] = \"FR\";\n    GoogleTrendsGeo[\"BRAZIL\"] = \"BR\";\n    GoogleTrendsGeo[\"JAPAN\"] = \"JP\";\n})(GoogleTrendsGeo || (GoogleTrendsGeo = {}));\nvar GoogleTrendsSearchType;\n(function(GoogleTrendsSearchType) {\n    GoogleTrendsSearchType[\"WEB_SEARCH\"] = \"web\";\n    GoogleTrendsSearchType[\"YOUTUBE_SEARCH\"] = \"youtube\";\n})(GoogleTrendsSearchType || (GoogleTrendsSearchType = {}));\nvar GoogleTrendsCategory;\n(function(GoogleTrendsCategory) {\n    GoogleTrendsCategory[\"ALL\"] = \"0\";\n    GoogleTrendsCategory[\"ARTS_ENTERTAINMENT\"] = \"3\";\n    GoogleTrendsCategory[\"AUTOS_VEHICLES\"] = \"47\";\n    GoogleTrendsCategory[\"BEAUTY_FITNESS\"] = \"44\";\n    GoogleTrendsCategory[\"BOOKS_LITERATURE\"] = \"22\";\n    GoogleTrendsCategory[\"BUSINESS_INDUSTRIAL\"] = \"12\";\n    GoogleTrendsCategory[\"COMPUTERS_ELECTRONICS\"] = \"5\";\n    GoogleTrendsCategory[\"FINANCE\"] = \"7\";\n    GoogleTrendsCategory[\"FOOD_DRINK\"] = \"71\";\n    GoogleTrendsCategory[\"GAMES\"] = \"8\";\n    GoogleTrendsCategory[\"HEALTH\"] = \"45\";\n    GoogleTrendsCategory[\"HOBBIES_LEISURE\"] = \"65\";\n    GoogleTrendsCategory[\"HOME_GARDEN\"] = \"11\";\n    GoogleTrendsCategory[\"INTERNET_TELECOM\"] = \"13\";\n    GoogleTrendsCategory[\"JOBS_EDUCATION\"] = \"958\";\n    GoogleTrendsCategory[\"LAW_GOVERNMENT\"] = \"19\";\n    GoogleTrendsCategory[\"NEWS\"] = \"16\";\n    GoogleTrendsCategory[\"ONLINE_COMMUNITIES\"] = \"299\";\n    GoogleTrendsCategory[\"PEOPLE_SOCIETY\"] = \"14\";\n    GoogleTrendsCategory[\"PETS_ANIMALS\"] = \"66\";\n    GoogleTrendsCategory[\"REAL_ESTATE\"] = \"29\";\n    GoogleTrendsCategory[\"REFERENCE\"] = \"533\";\n    GoogleTrendsCategory[\"SCIENCE\"] = \"174\";\n    GoogleTrendsCategory[\"SHOPPING\"] = \"18\";\n    GoogleTrendsCategory[\"SPORTS\"] = \"20\";\n    GoogleTrendsCategory[\"TRAVEL\"] = \"67\";\n})(GoogleTrendsCategory || (GoogleTrendsCategory = {}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90eXBlcy9nb29nbGVUcmVuZHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHdDQUF3Qzs7VUFDNUJBOzs7Ozs7OztHQUFBQSwwQkFBQUE7O1VBV0FDOzs7Ozs7Ozs7OztHQUFBQSxvQkFBQUE7O1VBY0FDOzs7R0FBQUEsMkJBQUFBOztVQU1BQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUFBLHlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdHlwZXMvZ29vZ2xlVHJlbmRzLnRzPzg5MjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGltZSByYW5nZXMgZm9yIEdvb2dsZSBUcmVuZHMgcXVlcmllc1xuZXhwb3J0IGVudW0gR29vZ2xlVHJlbmRzVGltZVJhbmdlIHtcbiAgUEFTVF9IT1VSID0gXCJub3cgMS1IXCIsXG4gIFBBU1RfNF9IT1VSUyA9IFwibm93IDQtSFwiLFxuICBQQVNUX0RBWSA9IFwibm93IDEtZFwiLFxuICBQQVNUXzdfREFZUyA9IFwibm93IDctZFwiLFxuICBQQVNUXzMwX0RBWVMgPSBcInRvZGF5IDEtbVwiLFxuICBQQVNUXzkwX0RBWVMgPSBcInRvZGF5IDMtbVwiLFxuICBQQVNUXzEyX01PTlRIUyA9IFwidG9kYXkgMTItbVwiLFxufVxuXG4vLyBHZW9ncmFwaGljYWwgcmVnaW9ucyBmb3IgR29vZ2xlIFRyZW5kcyBxdWVyaWVzXG5leHBvcnQgZW51bSBHb29nbGVUcmVuZHNHZW8ge1xuICBHTE9CQUwgPSBcIkdMT0JBTFwiLCAvLyBDaGFuZ2UgdGhpcyBmcm9tIFwiXCIgdG8gXCJHTE9CQUxcIlxuICBVTklURURfU1RBVEVTID0gXCJVU1wiLFxuICBVTklURURfS0lOR0RPTSA9IFwiR0JcIixcbiAgQ0FOQURBID0gXCJDQVwiLFxuICBBVVNUUkFMSUEgPSBcIkFVXCIsXG4gIElORElBID0gXCJJTlwiLFxuICBHRVJNQU5ZID0gXCJERVwiLFxuICBGUkFOQ0UgPSBcIkZSXCIsXG4gIEJSQVpJTCA9IFwiQlJcIixcbiAgSkFQQU4gPSBcIkpQXCIsXG59XG5cbi8vIFNlYXJjaCB0eXBlcyBmb3IgR29vZ2xlIFRyZW5kcyBxdWVyaWVzXG5leHBvcnQgZW51bSBHb29nbGVUcmVuZHNTZWFyY2hUeXBlIHtcbiAgV0VCX1NFQVJDSCA9IFwid2ViXCIsXG4gIFlPVVRVQkVfU0VBUkNIID0gXCJ5b3V0dWJlXCIsXG59XG5cbi8vIEludGVyZmFjZSBmb3IgR29vZ2xlIFRyZW5kcyBxdWVyeSBwYXJhbWV0ZXJzXG5leHBvcnQgZW51bSBHb29nbGVUcmVuZHNDYXRlZ29yeSB7XG4gIEFMTCA9IFwiMFwiLFxuICBBUlRTX0VOVEVSVEFJTk1FTlQgPSBcIjNcIixcbiAgQVVUT1NfVkVISUNMRVMgPSBcIjQ3XCIsXG4gIEJFQVVUWV9GSVRORVNTID0gXCI0NFwiLFxuICBCT09LU19MSVRFUkFUVVJFID0gXCIyMlwiLFxuICBCVVNJTkVTU19JTkRVU1RSSUFMID0gXCIxMlwiLFxuICBDT01QVVRFUlNfRUxFQ1RST05JQ1MgPSBcIjVcIixcbiAgRklOQU5DRSA9IFwiN1wiLFxuICBGT09EX0RSSU5LID0gXCI3MVwiLFxuICBHQU1FUyA9IFwiOFwiLFxuICBIRUFMVEggPSBcIjQ1XCIsXG4gIEhPQkJJRVNfTEVJU1VSRSA9IFwiNjVcIixcbiAgSE9NRV9HQVJERU4gPSBcIjExXCIsXG4gIElOVEVSTkVUX1RFTEVDT00gPSBcIjEzXCIsXG4gIEpPQlNfRURVQ0FUSU9OID0gXCI5NThcIixcbiAgTEFXX0dPVkVSTk1FTlQgPSBcIjE5XCIsXG4gIE5FV1MgPSBcIjE2XCIsXG4gIE9OTElORV9DT01NVU5JVElFUyA9IFwiMjk5XCIsXG4gIFBFT1BMRV9TT0NJRVRZID0gXCIxNFwiLFxuICBQRVRTX0FOSU1BTFMgPSBcIjY2XCIsXG4gIFJFQUxfRVNUQVRFID0gXCIyOVwiLFxuICBSRUZFUkVOQ0UgPSBcIjUzM1wiLFxuICBTQ0lFTkNFID0gXCIxNzRcIixcbiAgU0hPUFBJTkcgPSBcIjE4XCIsXG4gIFNQT1JUUyA9IFwiMjBcIixcbiAgVFJBVkVMID0gXCI2N1wiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlVHJlbmRzUXVlcnlQYXJhbXMge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIHRpbWVSYW5nZTogR29vZ2xlVHJlbmRzVGltZVJhbmdlO1xuICBnZW8/OiBHb29nbGVUcmVuZHNHZW87XG4gIGNhdGVnb3J5PzogR29vZ2xlVHJlbmRzQ2F0ZWdvcnk7XG4gIHNlYXJjaFR5cGU6IEdvb2dsZVRyZW5kc1NlYXJjaFR5cGU7IC8vIE1ha2UgdGhpcyByZXF1aXJlZFxufSJdLCJuYW1lcyI6WyJHb29nbGVUcmVuZHNUaW1lUmFuZ2UiLCJHb29nbGVUcmVuZHNHZW8iLCJHb29nbGVUcmVuZHNTZWFyY2hUeXBlIiwiR29vZ2xlVHJlbmRzQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/types/googleTrends.ts\n"));

/***/ })

});