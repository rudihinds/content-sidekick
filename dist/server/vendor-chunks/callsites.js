"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/callsites";
exports.ids = ["vendor-chunks/callsites"];
exports.modules = {

/***/ "(rsc)/./node_modules/callsites/index.js":
/*!*****************************************!*\
  !*** ./node_modules/callsites/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nconst callsites = ()=>{\n    const _prepareStackTrace = Error.prepareStackTrace;\n    Error.prepareStackTrace = (_, stack)=>stack;\n    const stack = new Error().stack.slice(1);\n    Error.prepareStackTrace = _prepareStackTrace;\n    return stack;\n};\nmodule.exports = callsites;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = callsites;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2FsbHNpdGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsWUFBWTtJQUNqQixNQUFNQyxxQkFBcUJDLE1BQU1DLGlCQUFpQjtJQUNsREQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBR0MsUUFBVUE7SUFDeEMsTUFBTUEsUUFBUSxJQUFJSCxRQUFRRyxLQUFLLENBQUNDLEtBQUssQ0FBQztJQUN0Q0osTUFBTUMsaUJBQWlCLEdBQUdGO0lBQzFCLE9BQU9JO0FBQ1I7QUFFQUUsT0FBT0MsT0FBTyxHQUFHUjtBQUNqQiwrQ0FBK0M7QUFDL0NPLHlCQUFzQixHQUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi10ZWNoLXN0YWNrcy1ieS1zdWpqZWVlLy4vbm9kZV9tb2R1bGVzL2NhbGxzaXRlcy9pbmRleC5qcz81ZWM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY2FsbHNpdGVzID0gKCkgPT4ge1xuXHRjb25zdCBfcHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtcblx0RXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSAoXywgc3RhY2spID0+IHN0YWNrO1xuXHRjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNsaWNlKDEpO1xuXHRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IF9wcmVwYXJlU3RhY2tUcmFjZTtcblx0cmV0dXJuIHN0YWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWxsc2l0ZXM7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBmb3IgdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGNhbGxzaXRlcztcbiJdLCJuYW1lcyI6WyJjYWxsc2l0ZXMiLCJfcHJlcGFyZVN0YWNrVHJhY2UiLCJFcnJvciIsInByZXBhcmVTdGFja1RyYWNlIiwiXyIsInN0YWNrIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/callsites/index.js\n");

/***/ })

};
;